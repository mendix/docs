---
title: "Certificates"
url: /developerportal/deploy/certificates/
weight: 30
tags: ["client certificate", "certification authority", "PKCS12", "connections"]
aliases:
    - /deployment/mendixcloud/certificates.html
    - /refguide/certificates.html
    - /deployment/mendixcloud/certificates
    - /refguide/certificates
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Certificates are used to authenticate users to apps. They can be used on both incoming and outgoing connections.

{{% alert color="info" %}}
Custom certificates cannot be configured for Free Apps.
{{% /alert %}}

### 1.1 Incoming Connections

To connect *to* your Mendix Cloud application *from* the internet, Mendix provides a *.mendixcloud.com* or *.mxapps.io* domain. The certificate for this is managed by Mendix. If you want to set up your own domain name for a licensed app, you can configure [custom domains](/developerportal/deploy/custom-domains/).

In addition, you can restrict incoming traffic by requiring client certificates signed by a certificate authority of your choice. For more details on how to set this up, see [How to Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

### 1.2 Outgoing Connections

You may need to use certificates to set up connections from your Mendix Cloud application to third-parties that require SSL/TLS. There are two possible scenarios for this:

* A third-party may require authentication via certificates (client certificates)
* A third-party may use a certificate that is signed by their own authority (certificate authorities)

## 2 Incoming – Certificates

Certificates for *.mendixcloud.com* and *.mxapps.io* are managed by Mendix and will automatically be updated on a regular basis, without notice. This is part of our regular operations and security posture. 

Using certificates with a short validity limits the impact of misconfigured or compromised certificates, which can occasionally happen. The wider internet community has standardized on this approach for many years.

{{% alert color="warning" %}}
**Do not pin these certificates in your solutions.**

Doing so can interrupt your operations when Mendix updates these certificates.

Pinning a certificate bypasses the built-in certificate chains of your operating system or JVM, and is widely considered a bad practice. 
{{% /alert %}}

For situations where pinning is required, you can set up a custom domain where you are in full control of updating the certificate.

## 3 Outgoing – Client Certificates {#outgoing-client-certificates}

For client certificates, only the Public-Key Cryptography Standard #12 (PKCS12) format is supported. Certificates are uploaded as a PKCS container which includes:

* X.509 certificate
* a private key
* (optionally) a certificate chain

Virtually all certificate formats can be converted to the PKCS12 format. For more information, see the following:

*   [Create a pkcs12 (.pfx or .p12) from OpenSSL files (.pem , .cer, .crt, ...)](https://www.tbs-certificates.co.uk/FAQ/en/288.html)
*   [openssl](https://www.openssl.org/docs/manmaster/man1/openssl.html)

You can upload a PKCS12 file by following these steps:

1. In the [Developer Portal](http://sprintr.home.mendix.com), go to the **Deploy** tab of the **Environments** page, and click the **Details** of the desired environment.

2. Select the **Network** tab of an application environment.

3.  Below **Outgoing Connections Certificates** click **Add Client Certificate**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/certificates/certificate.png" >}}

4. Upload the client certificate as a PKCS12 (pfx) container.

5. Enter the password to unlock the certificate container.

6. If you are using a specific custom certificate when setting your Client certificate in your [Call REST Service](/refguide/call-rest-action/#client-certificate) or [Call Web Service](/refguide/call-web-service-action/#client-certificate) action, set a **WEB SERVICE CALL NAME** which you can use to pin the certificate by setting the call's **Client certificate identifier** to the **WEB SERVICE CALL NAME**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/certificates/certificate-details.png" >}}

{{% alert color="info" %}}
Changes made to certificate settings will only become effective after restarting the app.
{{% /alert %}}

## 4 Outgoing – Certificate Authorities

Loading certificate authorities works much the same way, although they do not require authentication, as these are public certificates.

To upload a certificate authority, follow these steps:

1. In the [Developer Portal](http://sprintr.home.mendix.com), go to the **Deploy** tab of the **Environments** page, and click the **Details** of the desired environment.

2. Select the **Network** tab of an application environment.

3. Below **Outgoing Connections Certificates**, click **Add Authority**.

4. Upload a certificate authority in the PEM format.

If you run into any problems installing a client certificate or certificate authority, file a ticket at [https://support.mendix.com](https://support.mendix.com).

## 5 Read More

* [Transport_Layer_Security](http://en.wikipedia.org/wiki/Transport_Layer_Security)
* [How Encryption Works](http://computer.howstuffworks.com/encryption.htm)
