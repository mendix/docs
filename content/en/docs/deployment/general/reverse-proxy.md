---
title: "Configuring a Reverse Proxy"
url: /developerportal/deploy/reverse-proxy/
weight: 65
description: "Describes how to configure a reverse proxy in front of a Mendix app, which headers the Mendix runtime uses, and where to find platform-specific configuration."
---

## Introduction

A reverse proxy is a server that receives the requests for your Mendix app and forwards them to the Mendix runtime. You can use a reverse proxy, for example, to do the following:

* Serve your app over HTTPS
* Host your app on a subpath of a domain
* Serve static content
* Restrict access to certain paths

A load balancer that forwards HTTP requests to the Mendix runtime acts as a reverse proxy, so this document also applies to load balancers.

This document describes how the Mendix runtime works with a reverse proxy, gives an example configuration, and links to the configuration for specific platforms. You can also use a reverse proxy when you run your app locally. For more information, see the [Using a Reverse Proxy When You Run Your App Locally](#local) section below.

## Headers the Mendix Runtime Uses {#headers}

A reverse proxy can be configured to pass the following headers to the Mendix runtime:

| Header | Description |
| --- | --- |
| `X-Forwarded-Proto` | The scheme users connect with, for example `https`. |
| `X-Forwarded-Scheme` | An alternative to `X-Forwarded-Proto`. |
| `X-Forwarded-Host` | The host name users connect to. It can include a port, for example `app.example.com:8443`. |
| `X-Forwarded-Port` | The port users connect to. The runtime uses it only if `X-Forwarded-Host` does not include a port. |
| `X-Forwarded-Prefix` | The subpath the app is hosted on, if any, for example `/my/sub/path`. |

The runtime uses these headers to determine the [app URL](#app-url) and to decide on [cookie security](#cookie-security). It applies different rules for each.

### App URL {#app-url}

The runtime determines the app URL as follows:

1. If `ApplicationRootUrl` is configured, the runtime uses it and ignores the forwarded headers.
2. If `ApplicationRootUrl` is not configured, the runtime builds the app URL from the forwarded headers. If both `X-Forwarded-Proto` and `X-Forwarded-Scheme` are set, `X-Forwarded-Proto` takes precedence. This only works if the proxy sends `X-Forwarded-Host`. Without it, the runtime ignores the forwarded headers and falls back to the `Host` header and the scheme of the connection between the proxy and the runtime.

### Cookie Security {#cookie-security}

The runtime only marks cookies as `Secure` (and adds the `__Host-` prefix and the SameSite attribute) if it considers the connection to be HTTPS. It decides this as follows:

1. If either `X-Forwarded-Proto` or `X-Forwarded-Scheme` is `https`, cookies are secure.
2. If not, and either header is `http`, cookies are not secure.
3. If neither header is `http` or `https`, the runtime uses the scheme of the `ApplicationRootUrl`.

This means that for cookie security, `X-Forwarded-Proto` and `X-Forwarded-Scheme` take precedence over `ApplicationRootUrl`.

### Generating Public URLs {#public-urls}

When a reverse proxy forwards requests to the Mendix runtime, the runtime only sees the internal address that the proxy forwards to. Most app content uses relative paths and works without knowing the public URL. However, some runtime features need to generate full public URLs for your app, for example in published OData services.

To make sure the Mendix runtime generates the correct public URLs, configure your reverse proxy to set the headers that match your public URL on every forwarded request.

The [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) runtime setting can take precedence over these headers. For more information, see the [Multiple External Domains](/refguide/custom-settings/#multiple-external-domains) section in *Runtime Customization*.

## Serving Your App over HTTPS {#https}

A reverse proxy can accept HTTPS connections from users and forward the requests to the Mendix runtime over HTTP. In that case, the Mendix runtime is not aware that users access the app over HTTPS. To make the runtime aware of this, set the `X-Forwarded-Proto` header to `https` on every request that the reverse proxy forwards. The Mendix runtime then sets the `Secure` attribute on its cookies.

You can use any reverse proxy, as long as it does the following:

* Accepts HTTPS connections, using a certificate for the domain of your app
* Forwards every request to the Mendix runtime
* Sets the `X-Forwarded-Proto` header to `https` on every request it forwards

### Example Configuration {#example}

The following example shows a configuration for nginx:

```nginx
events {
    worker_connections 1024;
}

http {
    server {
        listen 443 ssl;
        server_name app.example.com;

        ssl_certificate     /path/to/certificate.pem;
        ssl_certificate_key /path/to/private-key.pem;

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

In this example, nginx accepts HTTPS connections for `app.example.com` and forwards every request to the Mendix runtime on `127.0.0.1:8080`, adding the `X-Forwarded-Proto` header. To use this example, do the following:

* Replace `app.example.com` with the domain of your app
* Replace `/path/to/certificate.pem` and `/path/to/private-key.pem` with the paths to the certificate and the private key for that domain
* Replace `127.0.0.1:8080` with the address and port of your Mendix runtime

### Making the Mendix Runtime Aware of HTTPS {#runtime-https}

When the reverse proxy uses HTTP for internal communication, the Mendix runtime must be explicitly informed that end-users are accessing the application via HTTPS. This can be done through either of these methods:

* Configure the [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) runtime setting with an `https://` URL
* Set the `X-Forwarded-Proto` or `X-Forwarded-Scheme` header to `https` in the reverse proxy

The behavior of these two methods varies depending on your Mendix version:

* **Mendix versions 10.17 and below** – Setting the [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) runtime setting to an `https://` URL will not make the application aware of it being served via HTTPS. You must use the `X-Forwarded-Proto` and `X-Forwarded-Scheme` headers instead.
* **Mendix versions 10.18 and above** – Setting the [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) runtime setting to an `http://` URL will take precedence over the `X-Forwarded-Proto` and `X-Forwarded-Scheme` headers.
* **Mendix versions 10.24 and above** – The `X-Forwarded-Proto` and `X-Forwarded-Scheme` headers will take precedence over the [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section). Mendix recommends using the [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) setting as the default approach and only set `X-Forwarded-Proto` and `X-Forwarded-Scheme` headers if needed.

### Other Considerations {#https-considerations}

Make sure that users cannot bypass the reverse proxy by connecting to the Mendix runtime directly. For more information, see the [Using a HTTP Reverse Proxy with SSL Support](/developerportal/deploy/security-checklist-for-your-on-premises-installation/#using-a-http-reverse-proxy-with-ssl-support) and [Configuring Your Firewall](/developerportal/deploy/security-checklist-for-your-on-premises-installation/#configuring-your-firewall) sections in *Security for Your On-Premises Installation*.

## Hosting Your App on a Subpath {#subpath}

If you host your app on a subpath, the reverse proxy needs to forward the request from `https://subdomain.domain/my/sub/path` to the internal address where the Mendix runtime is running, and set the `X-Forwarded-Prefix` header. The following example shows a location block for nginx:

```nginx
# Location block for the subpath "/my/sub/path".

location /my/sub/path/ {

    # Make the Mendix runtime aware of https, see the section on serving your app over HTTPS for more information.
    proxy_set_header X-Forwarded-Proto "https";

    # Forward the host to the Mendix runtime.
    proxy_set_header X-Forwarded-Host $host;

    # Forward the prefix `/my/sub/path` to the Mendix runtime.
    proxy_set_header X-Forwarded-Prefix /my/sub/path;

    # Optional: forward a port when not running on standard ports.
    # proxy_set_header X-Forwarded-Port 3000;

    # Required for Mendix DevTools to work.
    proxy_http_version 1.1;

    # Proxy the request to the Mendix runtime.
    proxy_pass http://mendix-runtime:8080/;
}
```

The Mendix runtime also needs to know the public URL of your app, and not all versions support subpaths. For more information, see the [Paths](/developerportal/deploy/deployment-location/#paths) section in *Deployment Location*.

## Serving Static Content {#static-content}

Mendix recommends configuring the reverse proxy to serve static content directly, so that the Mendix runtime only handles dynamic content. For more information, see the [Letting the HTTP Reverse Proxy Serve Static Content](/developerportal/deploy/security-checklist-for-your-on-premises-installation/#letting-the-http-reverse-proxy-serve-static-content) section in *Security for Your On-Premises Installation*.

## Restricting Access to Paths {#restricting-access}

You can use a reverse proxy to restrict access to certain paths of your app. For example, the Mendix runtime has no setting to disable its documentation endpoints, such as `/rest-doc`. For more information, see the [Restricting Access to Documentation Endpoints](/refguide/request-handlers/#restricting-access) section in *Request Handlers*.

## Platform-Specific Configuration {#platforms}

The following documents describe how to configure a reverse proxy on specific platforms:

* [Reverse Proxy Inbound Rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules) in *Microsoft Windows* – Configure IIS as a reverse proxy
* [Reverse Proxy](/developerportal/deploy/docker-deploy-pad/#reverse-proxy) in *Reference Guide for Docker Deployment* – Configure nginx or Traefik as a reverse proxy in Docker
* [Ingress Controllers in Mendix on Kubernetes](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/controllers/) – Configure an ingress controller, which acts as a reverse proxy in Kubernetes

## Using a Reverse Proxy When You Run Your App Locally {#local}

When you run your Mendix app locally, it is served over HTTP. You can put a reverse proxy on your own machine in front of the app, for example to [set secure cookies](#local-secure-cookies) or to [run the app over HTTPS](#local-https). Use the [example configuration](#example) as a starting point, with `localhost` as the `server_name` and the port of your locally running app in `proxy_pass`, such as `8080`.

You can run nginx directly on your machine or in a Docker container. If you run nginx in a Docker container, `127.0.0.1` refers to the container, not to your machine. In that case, change the address in `proxy_pass` to one that reaches your machine from the container, such as `host.docker.internal` in Docker Desktop, and publish the port that nginx listens on.

Wherever you need the Mendix runtime URL, use the URL of the reverse proxy instead of the URL of the locally running app.

### Setting Secure Cookies {#local-secure-cookies}

You need secure cookies, for example, when you [embed the Mendix Client](/refguide/mendix-client/embedding-the-client/) in a host application that runs on HTTPS. In that case, the Mendix runtime has to set its cookies as `Secure` and `SameSite=None`.

To only set secure cookies, the reverse proxy does not have to accept HTTPS connections. It only has to set the `X-Forwarded-Proto` header to `https`. The following example shows a configuration for nginx:

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

In this example, nginx listens on `localhost:8081` and forwards every request to the Mendix app on `localhost:8080`, adding the `X-Forwarded-Proto` header. Use `http://localhost:8081` as the Mendix runtime URL.

### Running Your App over HTTPS {#local-https}

You need HTTPS, for example, to test device features of a [progressive web app](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/) (PWA) that are only available over HTTPS. For more information, see the [Accessing Device Features](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#accessing-device-features) section in *Progressive Web App*.

You can make your locally running app available on an `https://` URL in the following ways:

* [Use a reverse proxy](#https-reverse-proxy) on your own machine that accepts HTTPS connections
* [Use an HTTPS tunnel](#https-tunnel) that gives your app a public URL

#### Using a Reverse Proxy That Accepts HTTPS Connections {#https-reverse-proxy}

To use the [example configuration](#example) on your own machine, you need a certificate and a private key for `localhost`. The following example uses OpenSSL to create a self-signed certificate that is valid for 365 days:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -days 365 \
    -keyout localhost-key.pem -out localhost.pem \
    -subj "/CN=localhost" \
    -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```

This command creates the certificate file `localhost.pem` and the private key file `localhost-key.pem` in the current folder. The certificate is valid only for `localhost` and `127.0.0.1`, so you can use it only in a browser on the same machine. To open the app on another device, [use an HTTPS tunnel](#https-tunnel).

In the example configuration, make the following changes:

* Change `listen 443 ssl;` to a free port, such as `listen 8443 ssl;`
* Set `ssl_certificate` and `ssl_certificate_key` to the paths of `localhost.pem` and `localhost-key.pem`

With these changes, nginx accepts HTTPS connections on `localhost:8443` and forwards every request to the Mendix app on `localhost:8080`. Use `https://localhost:8443` as the Mendix runtime URL. If you run nginx in a Docker container, also make the certificate and the private key available in the container.

{{% alert color="info" %}}
Browsers do not trust a self-signed certificate by default. They show a warning when you open the app, and they block requests that other web applications make to it. To avoid this, add the certificate to the trust store of your operating system or browser.
{{% /alert %}}

#### Using an HTTPS Tunnel {#https-tunnel}

Instead of a reverse proxy on your own machine, you can use a tool like [ngrok](https://ngrok.com/) to expose your locally running app through a secure HTTPS tunnel. The tool gives your app a public `https://` URL, so you do not need to create a certificate, and you can also open the app on other devices, such as a phone.

For example, the following ngrok command creates a tunnel to a Mendix app on `localhost:8080`:

```bash
ngrok http 8080
```

ngrok shows the `https://` URL that you can use to open your app.

{{% alert color="warning" %}}
While the tunnel is running, your locally running app is reachable from the internet. Stop the tunnel when you no longer need it.
{{% /alert %}}
