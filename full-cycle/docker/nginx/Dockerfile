FROM nginx:latest

RUN apt-get update && \
    apt-get install vim -y

COPY ./html/ /usr/share/nginx/html/
WORKDIR /app/

# docker run rodney-nginx > Hello World
# docker run rodney-nginx Rodney > Hello Rodney


# docker build -t rodney-nginx .
# docker run -p 8080:80