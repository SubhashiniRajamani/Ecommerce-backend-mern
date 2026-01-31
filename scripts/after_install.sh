#!/bin/bash
set -e

AWS_REGION=us-east-1
AWS_ACCOUNT_ID=313530061217
IMAGE_NAME=ecommerce-backend

echo "Pulling latest image..."
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:latest

echo "Running backend container..."
docker run -d \
  --name ecommerce-backend \
  -p 5000:5000 \
  --restart always \
  $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:latest
