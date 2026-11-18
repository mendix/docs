---
title: "Local Deployment"
url: /developerportal/deploy/local-deployment/
weight: 65
description: "Describes additional configuration for Mendix apps that you run locally, such as using a reverse proxy to set secure cookies or running the app over HTTPS."
---

## Introduction

You can run your Mendix app on your local machine for development and testing. This document describes additional configuration that you may need when you run your app locally.

## Using a Reverse Proxy for Setting Secure Cookies {#reverse-proxy}

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

## Running Your App Locally over HTTPS {#https}

When you run your Mendix app locally, it is not served over HTTPS. You need HTTPS, for example, to test device features of a [progressive web app](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/) (PWA) that are only available over HTTPS. For more information, see the [Accessing Device Features](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#accessing-device-features) section in *Progressive Web App*.

You can make your locally running app available on an `https://` URL in the following ways:

* [Use an HTTPS tunnel](#https-tunnel) that gives your app a public URL
* [Use a reverse proxy](#https-reverse-proxy) on your own machine that accepts HTTPS connections

### Using an HTTPS Tunnel {#https-tunnel}

You can use a tool like [ngrok](https://ngrok.com/) to expose your locally running app through a secure HTTPS tunnel. The tool gives your app a public `https://` URL, so you do not need to create a certificate, and you can also open the app on other devices, such as a phone.

For example, the following ngrok command creates a tunnel to a Mendix app on `localhost:8080`:

```bash
ngrok http 8080
```

ngrok shows the `https://` URL that you can use to open your app.

{{% alert color="warning" %}}
While the tunnel is running, your locally running app is reachable from the internet. Stop the tunnel when you no longer need it.
{{% /alert %}}

### Using a Reverse Proxy {#https-reverse-proxy}

Instead of a tunnel, you can put a reverse proxy on your own machine in front of the app that accepts HTTPS connections. You can use any reverse proxy, as long as it does the following:

* Accepts HTTPS connections, using a certificate for `localhost`
* Forwards every request to the Mendix app
* Sets the `X-Forwarded-Proto` header to `https` on every request it forwards

You need a certificate and a private key for `localhost`. The following example uses OpenSSL to create a self-signed certificate that is valid for 365 days:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -days 365 \
    -keyout localhost-key.pem -out localhost.pem \
    -subj "/CN=localhost" \
    -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```

This command creates the certificate file `localhost.pem` and the private key file `localhost-key.pem` in the current folder. The certificate is valid only for `localhost` and `127.0.0.1`, so you can use it only in a browser on the same machine. To open the app on another device, [use an HTTPS tunnel](#https-tunnel).

The following example shows a configuration for nginx that uses these files:

```nginx
events {
    worker_connections 1024;
}

http {
    server {
        listen 8443 ssl;
        server_name localhost;

        ssl_certificate     /path/to/localhost.pem;
        ssl_certificate_key /path/to/localhost-key.pem;

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

Replace `/path/to/` with the path to the folder that contains the certificate and the private key.

In this example, nginx accepts HTTPS connections on `localhost:8443` and forwards every request to the Mendix app on `localhost:8080`, adding the `X-Forwarded-Proto` header. Your app is available at `https://localhost:8443`.

{{% alert color="info" %}}
Browsers do not trust a self-signed certificate by default. They show a warning when you open the app, and they block requests that other web applications make to it. To avoid this, add the certificate to the trust store of your operating system or browser.
{{% /alert %}}

Use the URL of the reverse proxy as the Mendix runtime URL everywhere you consume the Mendix app. In this example, that means using `https://localhost:8443` instead of `http://localhost:8080`.
