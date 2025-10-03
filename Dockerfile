# Use Node.js 18 Debian as base image (better for Prisma)
FROM node:18-slim

# Install OpenSSL and other dependencies needed for Prisma
RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Set environment variables for build time
ARG OPENAI_API_KEY
ARG PINECONE_API_KEY
ARG DATABASE_URL

# Set environment variables
ENV OPENAI_API_KEY=$OPENAI_API_KEY
ENV PINECONE_API_KEY=$PINECONE_API_KEY
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
