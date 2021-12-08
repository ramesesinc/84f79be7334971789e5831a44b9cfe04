#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/filipizen && docker-compose down
cd $BASE_DIR/filipizen && docker-compose up -d
cd $BASE_DIR/filipizen && docker-compose logs -f filipizen-web
