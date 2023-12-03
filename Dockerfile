# For linix systems (Ubuntu vs.), first build wing ng build
FROM nginx:1.22.1-alpine

COPY /docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist/ng-neat-test/browser /usr/share/nginx/html

EXPOSE 80

