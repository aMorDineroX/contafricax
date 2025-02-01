# ContAfricaX - Application de Comptabilité Africaine

Application moderne de comptabilité conçue pour l'Afrique, construite avec React, TypeScript et Docker.

## Technologies

- Frontend: React, TypeScript, Vite
- UI: Tailwind CSS, shadcn/ui
- Base de données: PostgreSQL
- Conteneurisation: Docker
- Animations: Framer Motion
- Graphiques: Recharts

## Installation

```bash
# Cloner le projet
git clone https://github.com/aMorDineroX/contafricax.git
cd contafricax

# Installer les dépendances
docker-compose up --build
```

## Accès

- Application : http://localhost:5173
- Adminer : http://localhost:8080
  - Système : PostgreSQL
  - Serveur : db
  - Utilisateur : admin
  - Base de données : contafricax

## Développement

```bash
# Démarrer en mode développement
docker-compose up

# Arrêter les conteneurs
docker-compose down
```
