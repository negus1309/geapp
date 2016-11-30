#GEAPP POC

##Prérequis
Premièrement, il faut copier le répertoire du code source (disponible sur le CD du travail) dans le répertoire de votre choix de votre ordinateur. Ensuite, il est nécessaire d’avoir quelques logiciels installés pour installer le projet :
- Apache
- PHP
- MySQL

Ils peuvent tous être installés avec un paquet de logiciels propre à chaque système d’exploitation :
-	WAMP pour Windows
www.wampserver.com
-	MAMP pour Mac OS X
www.mamp.info
-	LAMP pour Linux
www.lamphowto.com

##Base de données
Une fois le serveur MySQL installé, il faut le démarrer. Rendez-vous ensuite dans l’interface d’administration phpmyadmin pour :
-	Créer une nouvelle base de données et la nommer « geapp »
-	Créer un nouvel utilisateur avec tous les droits :
  - Nom d’utilisateur : « laravel »
  - Mot de passe : « laravel »

Les informations sur la base de données et l’utilisateur peuvent être modifiées dans le fichier «.env», à la racine du répertoire du code source :

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=8889
DB_DATABASE=geapp
DB_USERNAME=laravel
DB_PASSWORD=laravel
```
##Serveur PHP
Ensuite il faut installer le serveur PHP (Laravel) via Composer. Composer est un gestionnaire de dépendances pour PHP nécessaire à l’installation de Laravel.

Pour installer Composer, rendez-vous à l’adresse suivante : https://getcomposer.org/download/
Composer peut être installé de plusieurs façons, il suffit de suivre les instructions pour chaque système d’exploitation (https://getcomposer.org/doc/00-intro.md).

Quand Composer est installé, exécuter la commande suivante dans l’invite de commande ou le terminal pour installer Laravel :
```
composer global require "laravel/installer"
```
De l’aide supplémentaire pour installer Laravel peut être consultée ici : https://laravel.com/docs/master

Lorsque Laravel est installé, il faut remplir la base de données à l’aide des tables de migration et des seeds. Pour cela, rendez-vous dans le dossier du projet à l’aide de l’invite de commande ou du terminal et exécuter les commandes suivantes :
```
composer dump-autoload
php artisan migrate
php artisan db:seed
```
##Exécution
Pour lancer le serveur PHP et accéder à l’application web, il suffit d’exécuter la commande suivante (dans l’invite de commande ou le terminal) :
```
php artisan serve
```
L’application s’ouvre ensuite dans le navigateur web par défaut et peut être utilisée.
