#!/bin/sh

#para imediatamente se algum comando falhar.
set -e

#Gerando o arquivo data.csv
python create-data.py

#Treinando o modelo
python train.py


#executa o que for passado como CMD no Dockerfile.
exec "$@"