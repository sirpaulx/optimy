FROM php:8.1-apache

# Install mysqli extension
RUN docker-php-ext-install mysqli

COPY . /var/www/html/
EXPOSE 80