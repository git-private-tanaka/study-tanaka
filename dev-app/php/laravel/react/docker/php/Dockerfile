FROM php:8.1

RUN apt-get update && \
  apt-get install -y git unzip libzip-dev libicu-dev libonig-dev libjpeg62-turbo-dev libpng-dev && \
  docker-php-ext-install intl pdo_mysql zip bcmath gd

# install node npm
RUN apt-get -y update
RUN apt-get install -y \
  curl \
  gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g

WORKDIR /work/task_management_app

COPY --from=composer:2.1.12 /usr/bin/composer /usr/bin/composer
