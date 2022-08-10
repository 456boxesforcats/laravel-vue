## Installation

To get started, make sure you have Docker installed on your system, and then run the following commands:

Build and run Docker containers

```bash
docker-compose up -d --build
```

Move into src directory
```bash
cd src
```

Create .env file
```bash
cp .env.example .env
```

Install Composer dependencies
```bash
composer install
```

Install NPM dependencies
```bash
npm install
```

Log into php container
```bash
docker exec -it php sh
```

Run migrations
```bash
php artisan migrate
```

Exit php container
```bash
exit
```

Run NPM dev environment
```bash
npm run dev
```

Now application is available on http://localhost

Mailhog: http://localhost:8025

PhpMyAdmin: http://localhost:8080
