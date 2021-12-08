#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-obo2 && docker-compose down
cd $BASE_DIR/cloud-obo2 && docker-compose up -d
cd $BASE_DIR/cloud-obo2 && docker-compose logs -f cloud-obo-server
