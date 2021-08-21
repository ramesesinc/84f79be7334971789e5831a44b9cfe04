#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-gdx-node && docker-compose down
cd $BASE_DIR/cloud-gdx-node && docker-compose up -d
cd $BASE_DIR/cloud-gdx-node && docker-compose logs -f
