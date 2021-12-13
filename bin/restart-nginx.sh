#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/nginx && docker-compose down
cd $BASE_DIR/nginx && docker-compose -f docker-compose.yml -f docker-compose-private.yml up -d
cd $BASE_DIR/nginx && docker-compose logs -f
