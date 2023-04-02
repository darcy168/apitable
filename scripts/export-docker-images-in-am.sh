#!/bin/bash

source ./common_util.sh

work_dir="/root/apitable-deploy-package"


IMAGE_ROOM_SERVER=`cat ./.env.darcy-deploy | grep IMAGE_ROOM_SERVER | awk -F "=" '{print $2}'`
IMAGE_ROOM_SERVER=`trim $IMAGE_ROOM_SERVER`

IMAGE_WEB_SERVER=`cat ./.env.darcy-deploy | grep IMAGE_WEB_SERVER | awk -F "=" '{print $2}'`
IMAGE_WEB_SERVER=`trim $IMAGE_WEB_SERVER`


IMAGE_REGISTRY=`cat ./.env.darcy-deploy | grep IMAGE_REGISTRY | awk -F "=" '{print $2}'`
IMAGE_REGISTRY=`trim $IMAGE_REGISTRY`



docker rmi $IMAGE_REGISTRY/$IMAGE_ROOM_SERVER
docker tag $IMAGE_ROOM_SERVER $IMAGE_REGISTRY/$IMAGE_ROOM_SERVER
docker save $IMAGE_REGISTRY/$IMAGE_ROOM_SERVER | gzip >> $work_dir/room_server.tgz

docker rmi $IMAGE_REGISTRY/$IMAGE_WEB_SERVER
docker tag $IMAGE_WEB_SERVER $IMAGE_REGISTRY/$IMAGE_WEB_SERVER
docker save $IMAGE_REGISTRY/$IMAGE_WEB_SERVER | gzip >> $work_dir/web_server.tgz




