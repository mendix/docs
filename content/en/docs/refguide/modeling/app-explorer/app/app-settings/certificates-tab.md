---
title: "Certificates Tab"
url: /refguide/certificates-tab/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Certificates are used to connect to web services over HTTPS.

## Certificates Tab 

Certificates are used when the following requirements are met:

* The server uses a self-signed certificate authority, and/or
* A client certificate (certificate with a private key) is required

These certificates can be imported into Studio Pro using the **Import** button. Certificate authority files usually have a *.crt* extension, and client certificates usually have a *.p12* or *.pfx* extension. After importing, use **View details** to get more information about the certificate.

Client certificates added here will be used whenever a server accepts a client certificate. If you upload more than one client certificate, one of them will be chosen based on the requirements of the server. If you need more control over client certificates, you should not upload the certificates here, but use the [Runtime customization](/refguide/custom-settings/) *ClientCertificates*, *ClientCertificatePasswords*, and *ClientCertificateUsages* settings.

{{% alert color="warning" %}}

When running from Studio Pro or from Eclipse, the certificates will be used automatically to connect over HTTPS. When running on a server, the location of the certificate files has to be specified in the configuration file.

{{% /alert %}}
{{% alert color="warning" %}}

Be aware that during local deployment, the certificate files will be located in the **deployment** folder, under **model/certificates**. Therefore, do not use production certificates during development.

{{% /alert %}}
{{% alert color="info" %}}

Certificates can be installed in the Windows Certificate Store using the **Install Certificate** wizard in the **View details** form. This can be useful when trying to access a WSDL-file using an *HTTPS* connection which requires a client certificate.

{{% /alert %}}
{{% alert color="info" %}}

When an SSLException occurs at runtime with the message `HelloRequest followed by an unexpected handshake message` or when a web service does not respond (Java 6 update 21 and above) when using the imported certificates, this is caused by either the client or server not being [RFC-5746](https://www.ietf.org/rfc/rfc5746.txt)-compatible.

If updating the client and server to be compatible with RFC-5746 is not feasible, the following should be added to **Extra JVM parameters** in the **Server** tab to avoid this exception:

`-Dsun.security.ssl.allowUnsafeRenegotiation=true`

Be warned that this does make the client-server communication vulnerable to an exploit which has been fixed in RFC-5746.

When client and server are RFC-5746 compatible at a future point in time, this JVM parameter can be removed.

For background information, see [Transport Layer Security (TLS) Renegotiation Issue Readme](https://www.oracle.com/technetwork/java/javase/documentation/tlsreadme2-176330.html).

{{% /alert %}}