---
title: "Local Deployment"
url: /developerportal/deploy/local-deployment/
weight: 65
description: "Describes additional configuration for Mendix apps that you run locally, such as using a reverse proxy so that the Mendix runtime sets secure cookies."
---

## Introduction

You can run your Mendix app on your local machine for development and testing. This document describes additional configuration that you may need when you run your app locally.

## Using a Reverse Proxy for setting Secure Cookies {#reverse-proxy}

The Mendix runtime sets the `Secure` attribute on its cookies when the app is served over HTTPS. When you run your Mendix app locally, it is not served over HTTPS.

You need secure cookies, for example, when you [embed the Mendix Client](/refguide/mendix-client/embedding-the-client/) in a host application that runs on HTTPS. In that case, the Mendix runtime has to set its cookies as `Secure` and `SameSite=None`.

This section applies to running your app locally. For a deployed app that is behind a load balancer, see the [Secure Cookies for On-Premise Applications](/developerportal/deploy/deployment-location/#secure-cookies-for-on-premise-applications) section in *Deployment Location*.

To make the runtime set the `Secure` attribute when you run the app locally, put a reverse proxy in front of the app. You can use any reverse proxy, as long as it does the following:

* Forwards every request to the Mendix app
* Sets the `X-Forwarded-Proto` header to `https` on every request it forwards

The following example shows a configuration for nginx:

```nginx
events {
    worker_connections 1024;
}

http {
    server {
        listen 8081;
        server_name localhost;

        location / {
            proxy_pass http://127.0.0.1:8080;
            proxy_http_version 1.1;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
}
```

In this example, nginx listens on `localhost:8081` and forwards every request to the Mendix app on `localhost:8080`, adding the `X-Forwarded-Proto` header.

Use the URL of the reverse proxy as the Mendix runtime URL everywhere you consume the Mendix app. In this example, that means using port `8081` instead of port `8080`.
