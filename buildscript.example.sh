#!/usr/bin/env bash
# Move into server dir
cd ./server
cp .env.example .env
npm i
npm run build
# move up to defaul dir
cd ..
# Move evry thing into server dir
mv ./client ./server/client
