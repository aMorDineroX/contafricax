# Premier démarrage ou après modifications Docker
docker-compose up --build

# Démarrages suivants
docker-compose up

# Pour arrêter l'application
docker-compose down

# Dans PowerShell, en tant qu'administrateur
cd C:\Users\morcr\OneDrive\Bureau\MyDockerApps\ContAfricaX
docker-compose up --build

Vous pouvez accéder à :

Application : http://localhost:5173
Adminer : http://localhost:8080
Système : PostgreSQL
Serveur : db
Utilisateur : admin
Mot de passe : secretpassword
Base de données : contafricax

Une application React moderne avec TypeScript
Un environnement Docker complet avec :
Frontend React (port 5173)
Base de données PostgreSQL (port 5432)
Adminer pour gérer la DB (port 8080)
Un système de backup automatisé