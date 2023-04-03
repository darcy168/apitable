#!/bin/bash

name="room-server"

cd ../../

rm -rf room-server_1-deps
rm -rf room-server_2-builder
rm -rf room-server_3-runner


docker rm -f room-server_1-deps
cp packaging/dockerfile.root-server/1-deps ./
docker build --network host --no-cache -f 1-deps -t room-server_1-deps:1.0 .
rm -f 1-deps

mkdir -p room-server_1-deps/room-server


docker run -itd --name room-server_1-deps room-server_1-deps:1.0 /bin/sh

docker cp room-server_1-deps:/app/node_modules room-server_1-deps
docker cp room-server_1-deps:/app/packages/room-server/node_modules room-server_1-deps/room-server

docker rm -f room-server_2-builder
cp packaging/dockerfile.root-server/2-builder ./
docker build --network host --no-cache -f 2-builder -t room-server_2-builder:1.0 .
rm -f 2-builder

docker run -itd --name room-server_2-builder room-server_2-builder:1.0 /bin/sh

mkdir -p room-server_2-builder/room-server
docker cp room-server_2-builder:/app/packages/room-server/app-config.json room-server_2-builder
docker cp room-server_2-builder:/app room-server_2-builder

cp packaging/dockerfile.root-server/3-runner ./
docker build --network host --no-cache -f 3-runner -t apitalbe/room-server:20230403-1 .
rm -f 3-runner


#rm -rf room-server_1-deps
#rm -rf room-server_2-builder


