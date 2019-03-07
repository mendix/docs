FROM node:8


# Download and install hugo
ENV HUGO_VERSION 0.31.1
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.deb

ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} /tmp/hugo.deb
RUN dpkg -i /tmp/hugo.deb \
	&& rm /tmp/hugo.deb

RUN npm i -g yarn
RUN yarn add gulp -g --silent

# Based on guidance at http://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html
RUN useradd --user-group --create-home app

ENV HOME=/home/app
WORKDIR $HOME

COPY package.json $HOME/
RUN yarn
ENV PATH $HOME/node_modules/.bin:$PATH
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/docs
