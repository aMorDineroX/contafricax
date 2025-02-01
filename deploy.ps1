# Charger les variables d'environnement
$env:GITHUB_USERNAME = "votre_username_github"

# Construction des images
docker-compose -f docker-compose.prod.yml build

# Déploiement local
docker-compose -f docker-compose.prod.yml up -d