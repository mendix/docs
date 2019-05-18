---
title: "Mendix Cloud HTTP Request Headers"
category: "Deployment"
parent: mendix-cloud-deploy
menu_order: 36
description: "Describes which HTTP request headers are available in the Mendix Cloud."
tags: ["Deploy", "Mendix Cloud", "headers"]
---

## 1 Introduction

All applications running in the Mendix Cloud are accessed using the HTTPS protocol. Using this HTTPS protocol, a lot of individual requests are sent to the application. Examples of these requests are "execute this XPath request", "execute this Microflow", or "please provide the layout of some specific page".

## 2 HTTP Request Headers

Besides these instructions, every request also contains additional information, the request headers. Examples of information available in these headers are the IP address from wich the request originates, and the type of web browser or other HTTP client used.

Most of the request headers are added by the HTTP client (e.g. the web browser), and simply let through by the Mendix Cloud. However, some of the request headers are inserted by the Mendix Cloud itself in the phase between receiving the request and handing it over to the actual application process.

Using custom Java code in the application, the full content of an incoming
request can be inspected.

### 2.1 Usually available request headers set by the HTTP client

The following headers are usually set by the HTTP client. The Mendix Cloud does not touch the value of these headers. This also means that in some cases, if the HTTP client does not set them, they might not be available.

| Header name                                 | Example value(s)                                             | Description |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Host**                                    | `custom-domain.example.com`                                  | The domain name that was used by the client to access the application. |
| **User-Agent**                              | `Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0` | The user agent, describing itself. |

### 2.2 Available request headers inserted by the Mendix Cloud

The following headers are set by the Mendix Cloud. If any of these are present in the request sent from the user agent, they will be forcibly overwritten.

| Header name                                 | Example value(s)                                             | Description
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **X-Real-IP**                               | `192.0.2.66`, `2001:db8::31:3024:37:487`                     | The IPv4 or IPv6 address of the endpoint of the HTTP connection at the client side. |
| **SSL-Protocol**                            | `TLSv1.3`, `TLSv1.2`, `TLSv1.1`, `TLSv1`                     | The TLS encryption protocol used for the HTTPS connection. |
| **SSL-Cipher**                              | `ECDHE-RSA-AES256-GCM-SHA384`                                | The TLS ciphers used for the HTTPS connection. |
| **SSL-Client-S-DN**                         | `CN=Hans van Kranenburg,OU=RnD,O=Mendix,C=NL`                | The Subject DN string of the client certificate for an established TLS connection according to [RFC 2253](https://tools.ietf.org/html/rfc2253). |

### 2.3 Deprecated request headers inserted by the Mendix Cloud

The following headers are set by the Mendix Cloud, but are deprecated and will be removed in the future.

| Header name                 | Example value(s)                                     | Description                                                  | Stage 1: Deprecation | Stage 2: Invalidation | Stage 3: Removal |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ | -------------------- | --------------------- | ---------------- |
| **X-Client-Certificate**    | `/C=NL/O=Mendix/OU=RnD/CN=Hans van Kranenburg`       | OpenSSL style formatted Subject DN string of the client certificate for an established TLS connection. | June 15, 2019 | August 1, 2019 | October 1, 2019 |

Deprecating and removing a request header is a process consisting of several stages:

* Stage 1: Deprecation. The dates on which stage 2 and 3 will be executed are communicated. The announcement will be documented in the Mendix Cloud Release Notes document.
* Stage 2: Invalidation. The header value will be forced to an invalid value. All running customer applications that still rely on this header and are not changed yet will experience problems.
* Stage 3: Removal. The header is not set or overwritten by the Mendix Cloud any more. This also means that any value for it can now be set by the HTTP client.
