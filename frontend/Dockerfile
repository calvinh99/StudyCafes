# ------------------------------------------------------------------------------
# Base Stage
# ------------------------------------------------------------------------------
# Use Node 18 as the base image
FROM node:18.18.2-alpine3.17 as base

# Set working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install the project dependencies
RUN npm install


# ------------------------------------------------------------------------------
# Development Stage
# ------------------------------------------------------------------------------
FROM base as development

# Copy the rest of the project files to the container
COPY . .

# Expose port 4200 for the Angular server
EXPOSE 4200

# Start Angular app using development server
# npm start is defined in package.json "scripts" section—"start": ...
CMD ["npm", "start"]


# ------------------------------------------------------------------------------
# Build Stage
# ------------------------------------------------------------------------------
FROM base as build-stage

COPY . .

# run the build script in package.json, -- means the end of npm run build arguments
# so then --output-path=./dist/out is passed to ng build inside the build script
RUN npm run build -- --output-path=./dist/out


# ------------------------------------------------------------------------------
# Production Stage
# ------------------------------------------------------------------------------
# Setup NGINX to serve the built Angular app
FROM nginx:alpine as production

# Delete initial nginx stuff
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the build stage to the NGINX web server directory
# we need to specify browser since we are using Angular Universal
# so there's a server dir and a prerendered-routes.json that gives SEO and faster initial load times
# we def. gotta use that later
COPY --from=build-stage /app/dist/out/browser /usr/share/nginx/html

# Default HTTP port
EXPOSE 80

# NGINX starts as a daemon, a background process.
# -g daemon off tells NGINX to run in the foreground.
CMD ["nginx", "-g", "daemon off;"]