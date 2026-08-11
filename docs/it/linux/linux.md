# Linux

## Navigation et fichiers

Se déplacer, lister et manipuler les fichiers/dossiers :

```sh
pwd                     # dossier courant
ls -la                  # liste détaillée, fichiers cachés inclus
cd /chemin/vers/dossier
cp -r source/ dest/     # copie récursive
mv ancien nouveau       # renommer / déplacer
rm -rf dossier/         # suppression récursive (attention)
find . -name "*.log"    # recherche par nom
grep -rn "TODO" src/    # recherche de texte récursive, numéros de ligne
```

## Permissions et propriétaire

Les permissions se lisent `rwx` pour owner / group / other.

```sh
chmod 755 script.sh        # rwxr-xr-x
chmod +x script.sh         # rendre exécutable
chown thomas:thomas file   # changer propriétaire et groupe
sudo chown -R thomas:thomas dossier/
```

## Gestion des paquets (Debian/Ubuntu)

```sh
sudo apt update && sudo apt upgrade -y
sudo apt install build-essential cmake git -y
apt list --installed | grep cmake
sudo apt remove <paquet>
```

## Processus

Voir, filtrer et arrêter des processus :

```sh
ps aux | grep mon_process
top                     # vue live CPU/RAM
htop                    # équivalent amélioré (à installer)
kill -9 <PID>           # forcer l'arrêt
```

## Réseau

```sh
ip a                    # interfaces réseau et IP
ss -tulpn               # ports en écoute (remplace netstat)
curl -I https://exemple.com   # headers HTTP uniquement
ping -c 4 8.8.8.8
scp fichier.txt user@host:/chemin/
ssh user@host -p 22
```

## Disque et espace

```sh
df -h                   # espace disque par partition
du -sh dossier/         # taille d'un dossier
du -sh * | sort -rh     # tri par taille décroissante dans le dossier courant
```

## Services systemd

Gérer les services qui tournent en arrière-plan (utile pour un service Docker, une API, etc.) :

```sh
sudo systemctl status docker
sudo systemctl start docker
sudo systemctl enable docker   # démarrage automatique au boot
journalctl -u docker -f        # logs live du service
```

## Variables d'environnement

```sh
export MY_VAR="valeur"          # définie pour la session courante
echo $MY_VAR
env | grep MY_VAR
```

Pour une variable persistante, l'ajouter dans `~/.bashrc` (ou `~/.profile`) puis :

```sh
source ~/.bashrc
```

## Compression / archives

```sh
tar -czvf archive.tar.gz dossier/     # créer une archive gzip
tar -xzvf archive.tar.gz              # extraire
zip -r archive.zip dossier/
unzip archive.zip
```

## Cas d'usage : environnement de build C++ reproductible

Pour un projet CMake (type A056-Garmin), fixer les versions des outils de build sur toutes les machines évite le "ça compile chez moi" :

```sh
# Installer une chaîne de build C++ propre sur une VM/serveur Ubuntu neuf
sudo apt update
sudo apt install -y build-essential cmake ninja-build git

# Build hors-source, propre
cmake -B build -S . -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel
```

## WSL (Windows Subsystem for Linux)

Pratique pour utiliser un vrai environnement Linux sans quitter Windows.

```powershell
wsl --list --verbose        # distributions installées + version WSL
wsl --install -d Ubuntu     # installer Ubuntu
wsl --shutdown               # arrêter toutes les distributions
```

Depuis WSL, le disque Windows est accessible sous `/mnt/c/...`, et Docker Desktop peut utiliser le backend WSL2 directement (voir page Docker).
