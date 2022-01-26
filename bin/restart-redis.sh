#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/redis && docker-compose down
cd $BASE_DIR/redis && docker-compose up -d
cd $BASE_DIR/redis && docker-compose logs -f
