use actix_cors::Cors;
use actix_web::{web, App, HttpServer, Responder};

async fn greet() -> impl Responder {
    "Hello, StudyCafes!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::permissive(); // In production, configure this properly!
        App::new()
            .wrap(cors)
            .route("/api/test", web::get().to(greet))
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
