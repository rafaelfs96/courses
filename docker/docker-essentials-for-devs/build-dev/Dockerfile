FROM python:3.6
LABEL maintainer 'Rafael'

RUN useradd www && \
    mkdir /add && \
    mkdir /log && \
    chown www /log

USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python3"]
CMD ["run.py"]

# BUILD IMAGE: docker image build -t IMAGE-NAME .
# RUN CONTAINER: docker container run -it -v $(pwd):/app -p 80:8000 --name python-server IMAGE-NAME