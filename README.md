# Redis Pub/Sub System

This project demonstrates a basic Pub/Sub (Publisher-Subscriber) system using Redis and Node.js. It includes two services:

- **Publisher**: Publishes messages to a Redis channel.
- **Subscriber**: Subscribes to a Redis channel and listens for incoming messages.

## Installation

Follow these steps to set up the project:

 1. **Clone the Repository**

git clone https://github.com/amangusain302/pubsub_archt.git
cd pubsub_prj

 2. **Install Dependencies**
npm install

 3. **Install Redis**
 Ensure Redis is installed on your system and running on the default port (6379). You can install Redis on various platforms:

 **For Ubuntu**

 sudo apt update
 sudo apt install redis-server

 *Start Redis Server*

 sudo systemctl start redis-server


 4. **Running the Publisher**
    
    node receiver-service/src/app.js

 5. **Running the Subscriber**  
    
    node listener-service/src/app.js


### **Running with Docker**

Ensure that you have Docker and Docker Compose installed. If you don't have Docker installed

1. **Docker Setup**
    
    Install Docker
    Install Docker Compose

2. **Docker Compose**
    This project includes a docker-compose.yml file to spin up the Redis, Publisher, and Subscriber services.

3. **Running the System with Docker Compose**

    docker-compose up --build

4. **Stopping the Docker Containers**
    To stop all the running services, press Ctrl+C or run the following command:

    docker-compose down
---
