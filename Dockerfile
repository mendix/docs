FROM node:12


# Download and install hugo
ENV HUGO_VERSION 0.31.1
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.deb

ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} /tmp/hugo.deb
RUN dpkg -i /tmp/hugo.deb \
	&& rm /tmp/hugo.deb

RUN npm i --force -g yarn

# The node docker images by default provides a `node` user as the non-root user.
# However, as we have configured `app` as the user for our needs, lets
# update the `node` user's login, homedir and gid to match our custom user.
# Without these changes, non-root user doesn't match the local host user's uid/gid.
# More details can be found here:
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
RUN usermod -d /home/app -l app node
RUN groupmod -n app node

ENV HOME=/home/app
WORKDIR $HOME

COPY package.json $HOME/
COPY yarn.lock $HOME/
RUN yarn
ENV PATH $HOME/node_modules/.bin:$PATH
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/docs
