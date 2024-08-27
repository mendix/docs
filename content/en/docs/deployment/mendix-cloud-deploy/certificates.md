---
title: "Certificates"
url: /developerportal/deploy/certificates/
weight: 80
aliases:
    - /refguide/certificates.html
    - /refguide/certificates
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Certificates are used to authenticate users to apps. They can be used on both incoming and outgoing connections.

{{% alert color="info" %}}
Custom certificates cannot be configured for Free Apps.
{{% /alert %}}

### Incoming Connections

To connect to your Mendix Cloud application from the internet, Mendix provides a `.mendixcloud.com` or `.mxapps.io` domain. The certificate for this is managed by Mendix. If you want to set up your own domain name for a licensed app, you can configure [custom domains](/developerportal/deploy/custom-domains/).

In addition, you can restrict incoming traffic by requiring client certificates signed by a certificate authority of your choice. For more details on how to set this up, see [How to Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

### Outgoing Connections

You may need to use certificates to set up connections from your Mendix Cloud application to third parties that require SSL/TLS. There are two possible scenarios for this:

* A third party may require authentication via certificates (client certificates)
* A third party may use a certificate that is signed by their own authority (certificate authorities)

## Incoming – Certificates

Certificates for `.mendixcloud.com` and `.mxapps.io` are managed by Mendix and are automatically updated on a regular basis and without notice. This is part of Mendix's regular operations and security posture. 

Using certificates with a short validity limits the impact of misconfigured or compromised certificates, which can occasionally happen. The wider internet community has standardized on this approach for many years.

{{% alert color="warning" %}}
Do not pin these certificates in your solutions.<br><br>Doing so can interrupt your operations when Mendix updates these certificates.<br><br>Pinning a certificate bypasses the built-in certificate chains of your operating system or JVM, and is widely considered a bad practice. 
{{% /alert %}}

For situations where pinning is required, you can set up a custom domain where you are in full control of updating the certificate.

## Outgoing – Client Certificates {#outgoing-client-certificates}

For client certificates, only the Public-Key Cryptography Standard #12 (PKCS12) format is supported. Certificates are uploaded as a PKCS container that includes the following:

* X.509 certificate
* A private key
* (Optionally) a certificate chain

Virtually all certificate formats can be converted to the PKCS12 format. For more information, see the following:

* [Create a pkcs12 (.pfx or .p12) from OpenSSL files (.pem, .cer, .crt, ...)](https://www.tbs-certificates.co.uk/FAQ/en/288.html)
* [openssl](https://www.openssl.org/docs/manmaster/man1/openssl.html)

{{% alert color="warning" %}}
Do not use OpenSSL version 3.x on Windows.<br><br>If you use OpenSSL version 3.x on Windows and you get the error "Could not open certificate container. Wrong password or corrupted file. Please try again.", use the latest patch release of version 1.x. You can download the release on [OpenSSL for Windows](https://slproweb.com/products/Win32OpenSSL.html).<br><br>Another option is to use OpenSSL from within the Windows Subsystem for Linux to generate the certificate. To set this up, use the instructions [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
{{% /alert %}}

You can upload a PKCS12 file by following these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the relevant environment.
1. Select the **Network** tab of an application environment.
1. Below **Outgoing Connections Certificates**, click **Add Client Certificate**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/certificates/certificate.png" class="no-border" >}}

1. Upload the client certificate as a PKCS12 (pfx) container.
1. Enter the password to unlock the certificate container.
1. If you are using a custom certificate when setting your Client certificate in your [Call REST Service](/refguide/call-rest-action/#client-certificate) or [Call Web Service](/refguide/call-web-service-action/#client-certificate) action, set a **Web Service Call Name** and use it to pin the certificate by setting the call's **Client certificate identifier** to the **Web Service Call Name**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/certificates/certificate-details.png" class="no-border" >}}

{{% alert color="info" %}}
Changes to certificate settings do not go into effect until you restart the app.
{{% /alert %}}

In the section **Pin Client Certificate to Web Services**, you can specify host names (for example, `hello-there.com`) or web service document names (for example, *MyFirstModule.ConsumedWebService*), indicating that this certificate should be used when contacting that host or calling that web service.

## Outgoing – Certificate Authorities

Loading certificate authorities works much the same way, although they do not require authentication because they are public certificates.

To upload a certificate authority, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the relevant environment.

1. Select the **Network** tab of an application environment.

1. Below **Outgoing Connections Certificates**, click **Add Authority**.

1. Upload a certificate authority in the PEM format.

## Read More

* [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)
* [How Encryption Works](https://computer.howstuffworks.com/encryption.htm)
