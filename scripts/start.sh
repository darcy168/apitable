#!/bin/bash

source ./common_util.sh


chmod +x ./docker-compose

./docker-compose --env-file=./.env.darcy-deploy -f docker-compose-darcy-deploy.yaml up -d &
