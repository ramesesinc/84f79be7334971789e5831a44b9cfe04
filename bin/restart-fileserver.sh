#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-fileserver && docker-compose down
cd $BASE_DIR/cloud-fileserver && docker-compose up -d
cd $BASE_DIR/cloud-fileserver && docker-compose logs -f
