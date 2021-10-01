#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

## start the system containers
cd $BASE_DIR/nginx && docker-compose down

cd $BASE_DIR/redis && docker-compose down

cd $BASE_DIR/rabbitmq && docker-compose down

cd $BASE_DIR/cloud-gdx-node && docker-compose down


## start the app server containers
cd $BASE_DIR/cloud-partner && docker-compose down

cd $BASE_DIR/cloud-epayment && docker-compose down

cd $BASE_DIR/cloud-obo2 && docker-compose down


## start the web app containers 
cd $BASE_DIR/cloud-filipizen && docker-compose down

cd $BASE_DIR/filipizen && docker-compose down

docker system prune -f

cd $RUN_DIR
