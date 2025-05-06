# Bonjour-API

[![CI](https://github.com/AntoineBourgeois45/bonjour-api/actions/workflows/ci.yml/badge.svg)](https://github.com/AntoineBourgeois45/bonjour-api/actions)

Une petite API Next.js qui répond « Bonjour [Prénom] ! ».

## 🚀 Installation
```bash
cd bonjour-api
npm install
npm run build
npm run start
```

⚠️ **Important** :
L'application se lance par défaut sur le port 3000.
Assurez-vous que ce port soit libre avant d'exécuter npm run start.

## 📡 Endpoints

- GET /api/healthcheck → OK
- GET /api/bonjour?prenom=Antoine → Bonjour Antoine !

## 🔧 Développement
Pour lancer en mode développement :
```bash
npm run dev
```
