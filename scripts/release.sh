#!/bin/bash

source ./common_util.sh

work_dir="/media/darcy/program/apitable-deploy-package"

rm -rf $work_dir
mkdir -pv $work_dir

cp ./.env.darcy-deploy $work_dir
cp ./common_util.sh $work_dir
cp ./docker-compose $work_dir
cp ./docker-compose-darcy-deploy.yaml $work_dir
cp ./start.sh $work_dir

sh ./export-docker-images.sh