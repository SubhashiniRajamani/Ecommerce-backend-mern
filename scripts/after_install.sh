#!/bin/bash
set -e

AWS_REGION=us-east-1
AWS_ACCOUNT_ID=YOUR_ACCOUNT_ID
IMAGE_NAME=ecommerce-backend

echo "Logging in to ECR..."
aws ecr get-login-password --region $AWS_REGION | \
docker login --username AWS --password-stdin \
$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

echo "Pulling latest image..."
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:latest

echo "Running backend container..."
docker run -d \
  --name ecommerce-backend \
  -p 5000:5000 \
  --restart always \
  $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:latest
