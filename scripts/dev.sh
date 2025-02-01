#!/bin/bash
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

# Nettoyer les conteneurs existants
docker-compose down

# Démarrer les services
docker-compose up --build
