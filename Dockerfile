FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Build the app (for production)
RUN npm run build

# Install 'serve' to serve the built app
RUN npm install -g serve

# Expose port
EXPOSE 5176

# Serve the production build
CMD ["serve", "-s", "dist", "-l", "5176"]