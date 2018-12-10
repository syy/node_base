# node_base
Node / Express / Docker API Boilerplate

# Steps:
## To Start:
* git clone

## API Side:
* docker-compose up
* http://localhost:8080/api/v1/example to test the api
* Database: Postgres. Use localhost:5433 to connect to the database from your local.

## Client Side:
* Go to packages/client directory
* npm install
* parcel index.html
* http://localhost:1234 to test

## Docker commands:
### List Docker:
docker ps

### Connect Docker:
docker exec -it CONTAINER_ID /bin/bash 
