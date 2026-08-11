# Docker

## Vérifier l'installation

```sh
docker --version
docker info
```

## Images

Une image est un modèle en lecture seule ; un container est une instance en cours d'exécution d'une image.

```sh
docker pull ubuntu:22.04        # télécharger une image
docker images                   # lister les images locales
docker rmi <image_id>           # supprimer une image
docker build -t mon-app:latest .   # construire une image depuis un Dockerfile
```

## Cycle de vie d'un container

```sh
docker run -d --name mon-app -p 8080:80 mon-app:latest   # lancer en arrière-plan, port mappé
docker ps                       # containers en cours
docker ps -a                     # tous les containers, y compris arrêtés
docker logs -f mon-app           # logs live
docker exec -it mon-app bash     # ouvrir un shell dans le container
docker stop mon-app
docker start mon-app
docker rm mon-app                # supprimer (container arrêté)
docker rm -f mon-app              # forcer l'arrêt + suppression
```

## Dockerfile minimal

Exemple pour une app Node, mais la structure (base image → dépendances → code → commande de démarrage) est la même pour tout langage :

```dockerfile
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
```

## Dockerfile multi-stage (build C++/CMake)

Utile pour compiler dans un environnement complet puis livrer une image finale légère, sans les outils de build :

```dockerfile
# --- Stage 1 : build ---
FROM ubuntu:22.04 AS build

RUN apt-get update && apt-get install -y \
    build-essential cmake ninja-build git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src
COPY . .
RUN cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release \
    && cmake --build build --parallel

# --- Stage 2 : image finale ---
FROM ubuntu:22.04
COPY --from=build /src/build/mon_app /usr/local/bin/mon_app
ENTRYPOINT ["/usr/local/bin/mon_app"]
```

## .dockerignore

Évite d'envoyer des fichiers inutiles (et volumineux) dans le contexte de build :

```
.git
build/
node_modules/
*.log
```

## Volumes et bind mounts

Un volume est géré par Docker (persistant, portable) ; un bind mount pointe directement vers un dossier de la machine hôte.

```sh
docker volume create mes_donnees
docker run -v mes_donnees:/data mon-app          # volume nommé
docker run -v $(pwd)/src:/app/src mon-app         # bind mount (utile en dev, live reload)
docker volume ls
docker volume rm mes_donnees
```

## Réseaux

```sh
docker network create mon-reseau
docker network ls
docker run --network mon-reseau --name db postgres
docker run --network mon-reseau --name app mon-app   # "app" peut joindre "db" par son nom
```

## Docker Compose

Pour orchestrer plusieurs containers ensemble (app + base de données par exemple) :

```yaml
services:
  app:
    build: .
    ports:
      - "8080:80"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mabase
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mabase
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

Commandes associées :

```sh
docker compose up -d          # démarre tous les services en arrière-plan
docker compose down           # arrête et supprime les containers
docker compose down -v        # + supprime les volumes
docker compose logs -f app    # logs d'un service précis
docker compose exec app bash  # shell dans un service
docker compose build          # rebuild les images sans démarrer
```

## Nettoyage

Docker accumule vite des images et containers inutilisés :

```sh
docker system df              # espace disque utilisé par Docker
docker system prune            # supprime containers arrêtés, réseaux et images non utilisés
docker system prune -a --volumes   # nettoyage complet (attention, supprime aussi les volumes)
```

## Cas d'usage : environnement de dev isolé et reproductible

Éviter d'installer des dépendances système directement sur la machine, et garantir que tout le monde compile dans le même environnement :

```sh
# Construire l'image de dev une fois
docker build -t a056-dev -f Dockerfile.dev .

# Lancer un shell dedans, avec le code source monté en bind mount
docker run -it --rm -v $(pwd):/src -w /src a056-dev bash

# À l'intérieur du container : build normal
cmake -B build -G Ninja && cmake --build build
```

## Cas d'usage : stack locale pour tester une API + DB

```sh
docker compose up -d db          # ne démarrer que la base
docker compose exec db psql -U user -d mabase   # inspecter la base directement
docker compose up app             # lancer l'app au premier plan pour voir les logs
```
