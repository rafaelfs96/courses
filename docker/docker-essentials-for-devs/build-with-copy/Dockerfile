FROM nginx:latest
LABEL maintainer 'Rafael'

RUN echo '<h1>Conteudo</h1>' > /usr/share/nginx/html/conteudo.html
COPY *.html /usr/share/nginx/html/

# BUILD IMAGE: docker image build -t CONTAINER-NAME .