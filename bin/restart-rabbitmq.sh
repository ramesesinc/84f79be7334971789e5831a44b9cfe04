#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/rabbitmq && docker-compose down
cd $BASE_DIR/rabbitmq && docker-compose up -d
cd $BASE_DIR/rabbitmq && docker-compose logs -f
