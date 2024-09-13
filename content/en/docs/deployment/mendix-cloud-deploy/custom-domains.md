---
title: "Custom Domains"
url: /developerportal/deploy/custom-domains/
weight: 80
description: "How to configure custom domains as well as generate, upload, and renew certificates in Mendix."
aliases:
    - /mendixcloud/custom-domains.html
    - /howtogeneral/mendixcloud/custom-domains.html
    - /mendixcloud/custom-domains
    - /howtogeneral/mendixcloud/custom-domains
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Linked from Mendix Portal > Environments > Custom Domains
---

## Introduction

Mendix Cloud supports adding custom domains such as `https://myapp.mycompany.com/` to your environments. Because Mendix Cloud only allows HTTPS connections, you have to provide a custom domain certificate (an SSL/TLS certificate). This how-to walks through the process.

{{% alert color="info" %}}This page describes certificates for incoming connections. For information on setting up certificates for outgoing connections, see [Certificates](/developerportal/deploy/certificates/).
{{% /alert %}}

{{% alert color="info" %}}
Changes that affect DNS routing may not display immediately. This is because of DNS caching, where changes are not visible until the cache is updated.
{{% /alert %}}

This how-to explains how to do the following:

* Generate a certificate request for your custom domain
* Upload a custom domain certificate to Mendix Cloud
* Renew a custom domain certificate
* Configure a custom domain for your environment

## Prerequisites

### General Prerequisites

Before starting this how-to, you need to have the following prerequisites:

* Basic knowledge of DNS (Domain Name System)
* Basic knowledge of SSL/TLS certificates:
    * What is an SSL/TLS certificate and what it is used for?
    * What is an intermediate certificate chain and what it is used for?
    * What is an SSL/TLS private key and what it is used for?
    * What is a certificate request and what it is used for?
* Basic knowledge of certificate authorities (such as GeoTrust, Thawte, Verisign, RapidSSL, GoDaddy, Comodo)
* A licensed node that you have [transport rights](/developerportal/deploy/node-permissions/#transport-rights) to

{{% alert color="info" %}}
Custom domains can be added only to licensed apps. You cannot add custom domains to Free Apps.
{{% /alert %}}

### Create and Configure a CNAME Record{#DNS}

Before configuring your custom domain in Mendix Cloud, you need to configure a DNS record for your custom domain with your domain registrar or DNS provider.

Create a CNAME (Canonical Name) record and point it to `[YOUR-CUSTOM-DOMAIN].cname.mendix.net.`. For example, if your custom domain is `myapp.mycompany.com`, create a CNAME record pointing to `myapp.mycompany.com.cname.mendix.net.` so that Mendix can direct your custom domain to your Mendix app.

{{% alert color="info" %}}
It is not possible to create a CNAME record for an apex/naked domain (meaning, a domain without a subdomain, like `mycompany.com`). If you want to use a custom apex/naked domain, redirect it to a subdomain (for example, `subdomain.mycompany.com`) and create a CNAME for the subdomain instead.
{{% /alert %}}

## Managing Custom Domains in Mendix Cloud

Custom domain certificates (or just "certificates") are managed at the application level; in contrast, custom domains are managed per environment.

You can have more than one certificate for an application. For example, when your certificate expires, you can upload a new certificate next to your old certificate.

You can choose which certificate to use when you configure a custom domain for an environment (test, acceptance, or production).

{{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/app-env-certificates.png" class="no-border" >}}

To manage custom domains, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Switch to the **Custom Domains** tab.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/custom-domains-tab.png" class="no-border" >}}

If you already have a signed SSL/TLS certificate, skip to [Uploading Your Own Custom Domain Certificate](#Uploading), below.

## Obtaining a New Signed Certificate

If you do not have an SSL/TLS certificate, you can order one from a certificate authority (such as GeoTrust, Thawte, Verisign, RapidSSL, GoDaddy, or Comodo). To get a signed SSL/TLS certificate from a certificate authority, you need to provide a certificate signing request (CSR). A private SSL/TLS key and a CSR tied to that key can be created in Mendix Cloud for you.

### Generating a Certificate Request for your Custom Domain{#Generating}

{{% alert color="info" %}}
Certificates are applied to a single app. Therefore, Mendix recommends that you do not use a wildcard (`*`) in the domain for which you are requesting a certificate. See [Can You Create a `*.mycompany.com` Wildcard Certificate?](#wildcard), below, for more information.
{{% /alert %}}

To create a CSR and an RSA (Rivest–Shamir–Adleman) encryption key, follow these steps:

1. Click **New** in the **Custom Domains** tab.

2. Click **Create a Certificate Request**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/new-custom-domain.png" alt="" width=75% >}}

3. Fill in the required fields.

4. Click **Generate**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/generate-cert-req.png" width=60% class="no-border" >}}

    An SSL/TLS private key and a certificate request is generated. The certificate request will be shown in PEM (Privacy-Enhanced Mail) format.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/pem-format.png" class="no-border" >}}

    {{% alert color="info" %}}The SSL/TLS private key will be hidden after you upload it. To keep the key secure, it will be stored in Mendix Cloud's secure keystore; it will not be available for download, and it cannot be obtained by Mendix Support.{{% /alert %}}

You can now go to your certificate authority to get a signed SSL/TLS certificate.

### Uploading a Signed Certificate{#Upload}

Once you have a signed SSL/TLS certificate, you can upload it by following these steps:

1. In the **Custom Domains** tab, select the custom domain certificate that you want to upload.

2. Click **Upload Signed Certificate**. 

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/certificate.png" class="no-border" >}}

3. Add a **Description** of your certificate.

4. Paste the signed **TLS Certificate** (in PEM format).

5. Paste an **Intermediate Certificate Chain**. This is optional, but highly recommended. The intermediate certificate chain is provided by your certificate authority.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/signed-certificate.png" width=80% class="no-border" >}}

    {{% alert color="warning" %}}The intermediate certificates of the main certificate authorities are included in the built-in CA databases of modern browsers. Therefore, you do not need to include an intermediate certificate to serve your website through SSL/TLS to users of modern browsers. However, you cannot predict how your users will attempt to connect to your website; not including an intermediate certificate may result in connection issues for some users. Tools such as curl do not recognize intermediate certificates automatically. Because of this, intermediate certificates are highly recommended but optional.{{% /alert %}}

You can now configure your custom domain. See [Configuring a Custom Domain](#Configuring), below.

## Uploading Your Own Custom Domain Certificate{#Uploading}

To upload a custom domain certificate, you need to have the following things prepared:

* An SSL/TLS certificate that is self-signed or signed by your certificate authority
* An intermediate certificate chain provided by your certificate authority
* An SSL/TLS private key

To upload the custom domain certificate, follow these steps:

1. Click **New** in the **Custom Domains** tab.

2. Click **Upload Certificate, Chain and Key**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/new-custom-domain.png" width=75% alt="" >}}

3. Type a **Description** for the certificate.

4. Paste the signed **TLS Certificate**.

5. Paste the **TLS Private Key**.

6. Paste an **Intermediate Certificate Chain**. This is optional, but most browsers require it. The intermediate certificate chain is provided by your certificate authority.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/new-certificate.png" width=60% class="no-border" >}}

7. Click **Save** to save your new custom domain certificate. It will be uploaded to Mendix Cloud automatically.

    {{% alert color="info" %}}The SSL/TLS private key will be hidden after you upload it. To keep the key secure, it will be stored in Mendix Cloud's secure keystore; it will not be available for download, and it cannot be obtained by Mendix Support.{{% /alert %}}

You can now configure your custom domain. For details, see [Configuring a Custom Domain](#Configuring), below.

You can add as many certificates as you need. Each certificate will be listed with the description you gave it. Make sure to give them meaningful names so that you can identify them easily.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/certificate-list.png" alt="List of certificates" class="no-border" >}}

## Renewing a Custom Domain Certificate

Custom domain certificates have an expiry date. There are two methods for renewing a custom domain certificate that is about to expire:

* Create a new custom domain certificate (recommended)

* Update an existing custom domain certificate

### Method 1: Creating a New Custom Domain Certificate (Recommended)

You can handle an expiring domain certificate by replacing it with a new one. You can do this in one of two ways:

* Generate a new certificate request (for more information, see [Generating a Certificate Request for Your Custom Domain](#Generating))

* Upload a new custom domain certificate (for more information, see [Uploading Your Own Custom Domain Certificate](#Uploading))

You can now select the new certificate for your custom domain (for more information, see [Configuring a Custom Domain](#Configuring)), below.

{{% alert color="info" %}}
If you are rotating a certificate, you do not need to remove the current domain configuration when replacing the certificate. Selecting a new certificate for an existing domain will reconfigure the existing domain with the selected certificate. 
{{% /alert %}}

### Method 2: Renewing by Updating an Existing Custom Domain Certificate

You can also edit an existing custom domain certificate.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/certificate-edit.png" alt="Edit a certificate" class="no-border" >}}

{{% alert color="warning" %}}
For this, you need access to the certificate request that you created for the current certificate.
{{% /alert %}}

## Configuring a Custom Domain {#Configuring}

Once a custom domain certificate has been uploaded, you can configure a custom domain for one of your application environments.

To configure a custom domain for your application environment, follow these steps:

1. Go to your app's **Environments** page.

2. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the environment you want to configure.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/environment-details.png" alt="The Details icon" >}}

3. Go to the **Network** tab.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/network.png" >}}

4. In the **Custom Domains** section, you can manage your custom domains.

5. Click **Add** to create a new custom domain (or **Edit** to edit an existing one).

6. Type the **Domain name**.

7. Select a **Certificate** from the drop-down list of uploaded certificates.

8. Click **Save** to save your custom domain. It will be configured for your application environment automatically.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/custom-domain.png" alt="" width=80% class="no-border" >}}
    
{{% alert color="info" %}}
Make sure you have configured a CNAME record for your custom domain with your domain registrar/DNS provider (for details, see [Create and Configure a CNAME Record](#DNS)), above.
{{% /alert %}}

## Frequently Asked Questions

### Can You Create a `*.mycompany.com` Wildcard Certificate? {#wildcard}

Yes. However, when you create the certificate request via Mendix Cloud, you will only be able to use the wildcard certificate for the environments of a single app. This is because the private key is stored securely and is not accessible to you or Mendix Support, so you will not be able to reuse it in other apps.

If you have your own custom domain certificate, you can upload it to all of your apps and use it for all the environments of all of your apps.

You can select the same wildcard certificate per environment by using it with different subdomains. For example, `test.mycompany.com`, `accp.mycompany.com`, and `app.mycompany.com`.

### How Do You Construct an Intermediate Certificate Chain Properly?

Your certificate is signed by the certificate authority (CA). They sign your certificate with their intermediate certificate, rather than directly with the root certificate. Their intermediate certificate is signed with their own root certificate.

To reach the root certificate, you must link your certificate via the intermediate certificate chain, which is usually just one intermediate certificate. Occasionally, a CA requires more than one intermediate certificate. You do not need to provide the root certificate, because every web browser has it in its trusted keystore.

### How Do You Get my SAML Metadata or CommunityCommons.GetApplicationUrl to Use the Custom URL? {#use-custom-url}

For certain use cases, it is important for the Mendix runtime to know the public URL of your applications. This is most commonly needed when your app generates links back to itself. To tell the runtime where it lives, set the `ApplicationRootUrl` [custom runtime setting](/refguide/custom-settings/#general). To set the custom runtime setting, follow the instructions in the [Custom Runtime Settings](/developerportal/deploy/environments-details/#custom-runtime-settings) section of *Environment Details*.

### Can You Configure Multiple Custom Domains for the Same Application? {#multiple-custom-domains}

Yes, you can configure multiple custom domains for the same application. Please note that this can only be done by [uploading multiple own custom domain certificates](#Uploading). You can only [generate one certificate signing request for one custom domain](#Generating) for your application.

## Read More

* [Certificates](/developerportal/deploy/certificates/)
* [Environments](/developerportal/deploy/environments/)
* [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [App Roles](/developerportal/general/app-roles/)
* [Control Center](/control-center/)
