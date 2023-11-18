# ------------------------------------------------------------------------------
# DEVELOPMENT CONTAINER
# ------------------------------------------------------------------------------

# Use Node 18 as the base image
FROM node:18.18.2-alpine3.17 as development

# Set working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose port 4200 for the Angular server
EXPOSE 4200

# Start Angular app using development server
# npm start is defined in package.json "scripts" section—"start": ...
CMD ["npm", "start"]

# ------------------------------------------------------------------------------
# PRODUCTION CONTAINER
# ------------------------------------------------------------------------------
# Build the Angular app
FROM node:18.18.2-alpine3.17 as build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --output-path=./dist/out

# Setup NGINX to serve the built Angular app
FROM nginx:alpine

# Copy the built Angular app from the build stage to the NGINX web server directory
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# Default HTTP port
EXPOSE 80

# NGINX starts as a daemon, a background process.
# -g daemon off tells NGINX to run in the foreground.
CMD ["nginx", "-g", "daemon off;"]