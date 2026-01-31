FROM public.ecr.aws/docker/library/node:20

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy rest of the source code
COPY . .

# App port
EXPOSE 5000

# Start app
CMD ["node", "app.js"]
