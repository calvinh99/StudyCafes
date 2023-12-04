use actix_cors::Cors;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use mongodb::{bson::{doc, Document}, options::{ClientOptions, ServerApi, ServerApiVersion}, Client};
use futures_util::stream::StreamExt;

async fn greet() -> impl Responder {
    "Hello, StudyCafes!"
}

async fn create_mongo_client() -> mongodb::error::Result<Client> {
    let mut client_options = ClientOptions::parse("mongodb+srv://sc-backend:yMOeAqDodXTJeqUL@sc-cluster-0.gr1dk0g.mongodb.net/?retryWrites=true&w=majority").await?;
    
    // set server api version
    let server_api = ServerApi::builder().version(ServerApiVersion::V1).build();
    client_options.server_api = Some(server_api);

    // get handle to cluster
    let client = Client::with_options(client_options)?;

    // ping client
    match client.database("admin").run_command(doc! {"ping": 1}, None).await {
        Ok(_) => println!("Successfully connected to MongoDB"),
        Err(e) => println!("Failed to connect to MongoDB: {}", e),
    }

    // return client
    Ok(client)
}

async fn fetch_data(client: web::Data<Client>) -> HttpResponse {
    let db = client.database("studycafes");
    let collection = db.collection::<Document>("cafes");

    // get Cursor struct
    let mut cursor = match collection.find(None, None).await {
        Ok(cursor) => cursor,
        Err(e) => {
            println!("Error fetching data: {}", e);
            return HttpResponse::InternalServerError().finish();
        }
    };

    let mut results = Vec::new();
    while let Some(doc_result) = cursor.next().await { // iterate via mongodb cursor
        match doc_result {
            Ok(doc) => results.push(doc),
            Err(e) => {
                println!("Error fetching document: {}", e);
            }
        }
    }

    HttpResponse::Ok().json(results) // Send the results as JSON
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let mongo_client = create_mongo_client().await.expect("Failed to create MongoDB client");
    let mongo_data = web::Data::new(mongo_client); // Wrap the client in web::Data

    HttpServer::new(move || { // move needed to prevent concurrency errors
        let cors = Cors::permissive(); // Configure CORS as needed
        App::new()
            .app_data(mongo_data.clone()) // Add MongoDB client to the app state
            .wrap(cors)
            .route("/api/test", web::get().to(greet))
            .route("/api/fetch", web::get().to(fetch_data)) // New route to fetch data
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}

