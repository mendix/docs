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

Certificates are used to authenticate users to apps and secure communication. In Mendix Cloud, certificates can be used for both incoming and outgoing connections.

Incoming connection certificates can be managed either at the [application level](/developerportal/deploy/application-level-certificates/) by Technical Contacts, or centrally by Mendix Admins via [Certificate Management](/control-center/certificate-management/). Outgoing connection certificates are solely managed at the application level.

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

* [Create a PKCS12 (.pfx or .p12) from OpenSSL files (.pem, .cer, .crt, ...)](https://www.tbs-certificates.co.uk/FAQ/en/288.html)
* [OpenSSL Documentation](https://www.openssl.org/docs/manmaster/man1/openssl.html)
* [Download OpenSSL for Windows](https://slproweb.com/products/Win32OpenSSL.html)

You can upload a PKCS12 file by following these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the relevant environment.
1. Select the **Network** tab of an application environment.
1. In the **Outgoing Connections Certificates** section, click **Add Client Certificate**.

1. Upload the client certificate as a PKCS12 (.pfx or .p12) container.
1. Enter the password to unlock the certificate container.
1. In the section **Use Client Certificate for specific services**, you can specify host names (for example, `hello-there.com`) or web service document names (for example, *MyFirstModule.ConsumedWebService*), indicating that this certificate should be used when contacting that host or calling that web service.

    If you are using a custom certificate when setting your Client certificate in your [Call REST Service](/refguide/call-rest-action/#client-certificate) or [Call Web Service](/refguide/call-web-service-action/#client-certificate) action, you can set a **Web Service Call Name** and use it for the service by setting the **Web Service Call Name** to the call's **Client certificate identifier**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/certificates/certificate-details.png" >}}

{{% alert color="info" %}}
Changes to certificate settings only become active when you restart the app.
{{% /alert %}}

## Outgoing – Certificate Authorities

Loading certificate authorities works much the same way, although they do not require authentication because they are public certificates.

{{% alert color="info" %}}
By default, Mendix Cloud trusts Certificate Authorities from the [Mozilla CA root bundle](https://wiki.mozilla.org/CA).
{{% /alert %}}

To upload a certificate authority, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the relevant environment.

1. Select the **Network** tab of an application environment.

1. In the **Outgoing Connections Certificates** section, click **Add Authority**.

1. Upload a certificate authority in the PEM format.

## Frequently Asked Questions

### Can You Create a `*.mycompany.com` Wildcard Certificate? {#wildcard}

Yes. For [application-level certificates](/developerportal/deploy/application-level-certificates/), a wildcard certificate can only be used within the environments of a single app. This is because the private key is stored securely and cannot be accessed outside the app.

To reuse a wildcard certificate across multiple apps or environments, Mendix Admins can create a central certificate in [Certificate Management](/control-center/certificate-management/). Central certificates can then be selected by Technical Contacts across different apps and environments.

Technical Contacts can select the same wildcard certificate for different environments of the same app by using it with different subdomains. For example, `test.mycompany.com`, `accp.mycompany.com`, and `app.mycompany.com`.

### How Do You Construct an Intermediate Certificate Chain Properly?

Your certificate is signed by a certificate authority (CA) using the CA's intermediate certificate. The intermediate certificate is signed with the CA’s root certificate.

To reach the root certificate, you must link your certificate through the intermediate certificate chain, usually just one intermediate certificate. Occasionally, a CA requires multiple intermediate certificates.

* For application-level certificates, you provide the intermediate certificate chain when uploading the certificate at the application level
* For central certificates, the chain is uploaded by the Mendix Admin

You do not need to provide the root certificate, because every web browser has it in its trusted keystore.

## Read More

* [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)
* [How Encryption Works](https://computer.howstuffworks.com/encryption.htm)
