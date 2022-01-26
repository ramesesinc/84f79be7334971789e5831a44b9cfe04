#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-bpls && docker-compose down
cd $BASE_DIR/cloud-bpls && docker-compose up -d
cd $BASE_DIR/cloud-bpls && docker-compose logs -f
