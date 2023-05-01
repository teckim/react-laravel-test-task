## About This Project

A simple Universities search app that allows users to login and search for Universities with typeahead functionality.
It's built using `Laravel 10`, `React`, `MUI`, and `Vite`.

## Installation Guide
### Project configuration

### Prerequisites

- Docker
- PHP
- Composer

### Setup
- Run `composer install && npm install` to install all the packages
- Run `./vendor/bin/sail artisan migrate --seed`
- Run `./vendor/bin/sail up -d` (Note: this will take sometime to install the Docker images)
- Run `npm run dev`
  
> If everything went well you will be able to access the web application from [http://react-laravel-test-task.test/](http://react-laravel-test-task.test/)
> The default use is `user@email.com` and password is `123456789`

## Cache Strategy
### Cache-Aside (Lazy Loading)
In both front and back end I'm caching the data locally and check if the data is cached I return it otherwise it's populated from the source.
In the front end I use the `axios-cache-interceptor` package to handle the http caching. In the back end I used the built in `Larvel Cache Facade` to cache the returned data from the external API.