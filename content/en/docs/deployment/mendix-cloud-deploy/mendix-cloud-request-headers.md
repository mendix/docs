---
title: "Mendix Cloud HTTP Request Headers"
linktitle: "HTTP Request Headers"
url: /developerportal/deploy/mendix-cloud-request-headers/
weight: 80
description: "Describes which HTTP request headers are available in Mendix Cloud."
---

## Introduction

All applications running in Mendix Cloud are accessed using the HTTPS protocol. Using this protocol, a lot of individual requests are sent to the application. Examples of these requests are "run this XPath query," "run this microflow," or "provide the layout of this page."

## HTTP Request Headers

Besides these instructions, every request also contains additional information: the request headers. Examples of information available in these headers are the IP address from which the request originates and the type of web browser or other HTTP client used.

Most of the request headers are added by the HTTP client (the web browser, for example) and let through by Mendix Cloud. However, some of the request headers are inserted by Mendix Cloud itself between receiving the request and handing it over to the actual application process.

Using custom Java code in the application, the full content of an incoming request can be inspected.

### Usually Available Request Headers Set by the HTTP Client

The following headers are usually set by the HTTP client. Mendix Cloud does not touch the value of these headers. This also means that they might not be available if the HTTP client does not set them.

| Header name                                 | Example values                                             | Description |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Host**                                    | `custom-domain.example.com`                                  | The domain name that was used by the client to access the application |
| **User-Agent**                              | `Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0` | The user agent, describing itself |

### Available Request Headers Inserted by Mendix Cloud

The following headers are set by Mendix Cloud. If any of these are present in the request sent from the user agent, they will be forcibly overwritten.

| Header name                                 | Example values                                             | Description
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **X-Real-IP**                               | `192.0.2.66`, `2001:db8::31:3024:37:487`                     | The IPv4 or IPv6 address of the endpoint of the HTTP connection at the client side. |
| **SSL-Protocol**                            | `TLSv1.3`, `TLSv1.2`, `TLSv1.1`, `TLSv1`                     | The TLS encryption protocol used for the HTTPS connection. |
| **SSL-Cipher**                              | `ECDHE-RSA-AES256-GCM-SHA384`                                | The TLS ciphers used for the HTTPS connection. |
| **SSL-Client-S-DN**                         | `CN=Hans van Kranenburg,OU=RnD,O=Mendix,C=NL`                | The Subject DN string of the client certificate for an established TLS connection according to [RFC 2253](https://tools.ietf.org/html/rfc2253). |
| **SSL-Client-Fingerprint**                  | `74e034c13a38003b433605f5a13062eb816e467e`                   | The SHA1 fingerprint of the client certificate for an established TLS connection. |
| **SSL-Client-Serial**                       | `02`                                                         | The serial number of the client certificate for an established TLS connection. |

There may be additional headers that are set by Mendix Cloud but not documented in the table above. Do not rely on the presence of these headers and their values. They are for internal use only.
