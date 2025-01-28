---
prev:
  text: 'Symfony'
  link: '/web/symfony/symfony'
next:
  text: ''
  link: ''
---
# Symfony Setup

## Install Composer

```bash
composer install
```

If you run into :
::: warning
Your lock file does not contain a compatible set of packages. Please run ***composer update***.
:::

The message indicates that the composer.lock file contains versions of dependencies that may be incompatible with your current environment or are outdated.

Run ***composer update***
```bash
composer update
```

## Set Up the Database: 

(If a database doesn't already exist)
Ensure your database is running and configured. Then run:
```bash
php bin/console doctrine:database:create
```

## Run Migrations and Load Fixtures (if any): 

If the project includes database migrations and data fixtures, you can run:
```bash
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
```

##  Clear Symfony Cache:

Sometimes, Symfony caches outdated configuration. Clear the cache to ensure changes take effect:
```bash
php bin/console cache:clear
```

## Run the Symfony Server: 

Start the Symfony built-in server to run the app:
```bash
symfony server:start
```

## Stop the Symfony Server: 

Stop the Symfony server:
```bash
symfony server:stop
```

## Status of the Symfony Server: 

Check the status of the Symfony server:
```bash
symfony server:status
```
