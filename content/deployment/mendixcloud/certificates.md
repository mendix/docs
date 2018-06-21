---
title: "Certificates"
category: "Mendix Cloud"
#If moving location for documentation purposes, plan with the Cloud Portal Team, as this doc is mapped to the product.
---

## 1 Introduction

### 1.1 Incoming Connections

For connections from the internet to your Mendix Cloud applications, we provide a *.mendixcloud.com* or *.mxapps.io* domain with a certificate managed by Mendix. If you want to set up your own domain name, you can configure [custom domains](/developerportal/howto/custom-domains) (please note that this is not available for Free Apps).

You can also restrict incoming traffic by requiring client certificates signed by a Certifice Authority of your choice. For more details on how to set this up, see [How to Restrict Access for Incoming Requests](/deployment/mendixcloud/access-restrictions).

### 1.2 Outgoing Connections

You may want to use certificates to set up connections from your Mendix Cloud application to third-parties that require SSL/TLS. There are two possible scenarios for this:

* A third-party may require authentication via certificates (client certificates)
* A third-party may use a certificate that is signed by their own authority (certificate authorities)

## 2 Incoming – Certificates

Certificates for *.mendixcloud.com* and *.mxapps.io* are managed by Mendix and can be updated without notice. Do not pin these certificates in your solutions. For situations where pinning is required, you can set up a custom domain where you are in full control of updating the certificate.

## 3 Outgoing – Client Certificates

For client certificates, only the Public-Key Cryptography Standard #12 (PKCS12) format is supported.

You can upload a PKCS12 file by following these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Apps** in the top navigation panel and select your node.
3. Click **Environments** and select the desired environment by clicking **Details**.
4. Select the **Network** tab.
5.  Below **Outgoing Connections Certificates** click **Add Client Certificate**.

    ![](attachments/4194597/certificate.png)

6. Upload a PKCS12 (pfx) container. Within this container there has to be an X.509 certificate, a private key, and (optionally) a certificate chain.
7. After uploading a client certificate, you will be requested to fill in a password to unlock the certificate container.

{{% alert type="info" %}}
Certificates require an app restart before they become active.
{{% /alert %}}

![](attachments/4194597/certificate-details.png)

For more information, see the following:

* [Transport_Layer_Security](http://en.wikipedia.org/wiki/Transport_Layer_Security)
* [How Encryption Works](http://computer.howstuffworks.com/encryption.htm)

### 3.1 Converting Certificates to PKCS12

Virtually all certificate formats can be converted to the PKCS12 format. For more information, see the following:

*   [Create a pkcs12 (.pfx or .p12) from OpenSSL files (.pem , .cer, .crt, ...)](https://www.tbs-certificates.co.uk/FAQ/en/288.html)
*   [openssl](https://www.openssl.org/docs/manmaster/man1/openssl.html)

## 4 Outgoing – Certificate Authorities

Loading certificate authorites works much the same way, although they do not require authentication, as these are public certificates.

To upload a certificate authority, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Apps** in the top navigation panel and select your node.
3. Click **Environments** and select the desired environment by clicking **Details**.
4. Select the **Network** tab.
5. Below **Outgoing Connections Certificates**, click **Add Authority**.
6. Upload a certificate authority in the PEM format.

If you run into any problems installing a client certificate or certificate authority, file a ticket at [https://support.mendix.com](https://support.mendix.com).
