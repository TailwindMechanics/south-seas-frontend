# Use the official Nginx image as the base image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the built files from the local "dist" directory to the container
COPY dist/ .

# Expose the desired port
EXPOSE 80