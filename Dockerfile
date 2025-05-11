# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build TypeScript (optional if using ts-node-dev)
# RUN npm run build

EXPOSE 5000

# Default command (for production replace with: npm run start)
CMD ["npm", "run", "dev"]
