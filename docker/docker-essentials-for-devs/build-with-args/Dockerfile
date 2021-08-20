FROM debian
LABEL maintainer 'Rafael'

# 'files' is the default value for the 'S3_BUCKET' arg
ARG S3_BUCKET=files
ENV S3_BUCKET=${S3_BUCKET}

# BUILD IMAGE: docker image build -t CONTAINER-NAME .
# BUILD IMAGE WITH ARGS: docker image build --build-arg S3_BUCKET=myapp -t CONTAINER-NAME .
# RUN CONTAINER AND CHECK THE NEW VALUE FOR THE ARG: docker image build --build-arg S3_BUCKET=myapp -t CONTAINER-NAME .