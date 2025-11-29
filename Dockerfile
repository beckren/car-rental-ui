# Step 1: Build the Angular app
FROM node AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built app to Nginx's html directory
COPY --from=build /app/dist/vibes-mobility-ui /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
