---
title: "Application-Level Certificates"
linktitle: "Application-Level Certificates"
url: /developerportal/deploy/application-level-certificates/
weight: 80
description: "Describe how Technical Contacts can configure and manage application-level (local) SSL/TLS certificates in Mendix Cloud."

#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Linked from Mendix Portal > Environments > Cloud Settings > Custom Domains
---

## Introduction

Mendix Cloud supports adding custom domains, such as `https://myapp.mycompany.com`, to your application environments. Each custom domain must be secured with an SSL/TLS certificate to enable HTTPS connections.

This document describes how Technical Contacts can configure and manage application-level (local) certificates for their apps.

{{% alert color="info" %}}
This page covers incoming connections for application-level certificates. For centrally-managed certificates, refer to [Centralized Certificates](/developerportal/deploy/certificates/centralized-certificates/). For outgoing connection certificates, refer to [Outgoing Certificates](/developerportal/deploy/certificates/#outgoing-client-certificates).
{{% /alert %}}

This how-to explains how to do the following:

* Generate a certificate request (CSR)
* Upload an application-level certificate to Mendix Cloud
* Renew an application-level certificate

## Prerequisites

Before starting this how-to, you need to have the following prerequisites:

* Basic knowledge of DNS (Domain Name System)
* Basic knowledge of SSL/TLS certificates:
    * What is an SSL/TLS certificate and what it is used for?
    * What is an intermediate certificate chain and what it is used for?
    * What is an SSL/TLS private key and what it is used for?
    * What is a certificate request and what it is used for?
* Basic knowledge of certificate authorities (such as GeoTrust, Thawte, Verisign, RapidSSL, GoDaddy, Comodo)

{{% alert color="info" %}}
Custom certificates cannot be configured for Free Apps.
{{% /alert %}}

## Managing Custom Domain Certificates in Mendix Cloud

A Mendix application can have multiple certificates. To manage application-level certificates, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
2. Click **Cloud Settings** ({{< icon name="settings-slider-1" >}}) from any of the [available tabs](/developerportal/deploy/environments/#available-tabs) to open the **Manage Cloud Settings** page.
3. Switch to the **Custom Domains** tab.

If you already have a signed SSL/TLS certificate, skip to [Uploading Your Own Custom Domain Certificate](#Uploading) below.

## Obtaining a New Signed Certificate

If you do not have an SSL/TLS certificate, you can order one from a certificate authority (such as GeoTrust, Thawte, Verisign, RapidSSL, GoDaddy, or Comodo). To get a signed SSL/TLS certificate from a certificate authority, you need to provide a CSR.

A private SSL/TLS key and a CSR tied to that key can be created in Mendix Cloud for you.

### Generating a Certificate Request {#Generating}

{{% alert color="info" %}}
When you generate a certificate request at the application level, the resulting certificate is managed locally and applies only to that application. Therefore, Mendix recommends that you do not use a wildcard (`*`) in the domain for which you are requesting a certificate. See [Can You Create a `*.mycompany.com` Wildcard Certificate?](/developerportal/deploy/certificates/#wildcard), for more information.
{{% /alert %}}

To create a CSR and an RSA (Rivest–Shamir–Adleman) encryption key, follow these steps:

1. Click **Request Certificate** in the **Custom Domains** tab.
2. In the **Request Certificate** wizard:
    1. Review the information in **General Info**, then click **Next**.
    2. Complete the required fields in **Generate**, then click **Next**.
    3. In **PEM Format**, an SSL/TLS private key and a certificate request are generated and displayed in PEM (Privacy-Enhanced Mail) format.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/pem-format.png" >}}

    {{% alert color="info" %}}The SSL/TLS private key will be hidden after you upload it. To keep the key secure, it will be stored in Mendix Cloud's secure keystore; it will not be available for download, and it cannot be obtained by Mendix Support.{{% /alert %}}

Once the CSR is generated, its name appears in the table on the **Custom Domains** tab. In the **Certificate Description** column, the name you provided during creation is followed by **Pending Customer Feedback** until the CSR is signed. The **Local/Central** column indicates whether the certificate is managed locally at the application level or centrally; in this case, it will display **Local**.

You can now go to your certificate authority to get a signed SSL/TLS certificate.

### Uploading a Signed Certificate{#Upload}

Once you have a signed SSL/TLS certificate, you can upload it at the application-level by following these steps:

1. Switch to the **Custom Domains** tab.

2. Click the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) icon on the CSR of interest.

3. Select **Details**.

4. Click **Upload Signed Certificate**. 

5. Add a **Description** of your certificate.

6. Paste the signed **TLS Certificate** (in PEM format).

7. Paste an **Intermediate Certificate Chain**. While optional for modern browsers, it is mandatory for programmatic access and service consumption (like [OData services](/refguide/consumed-odata-services/)). The intermediate certificate chain is provided by your certificate authority.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/signed-certificate.png" width=80% class="no-border" >}}

8. Click **Save** to complete the process.

{{% alert color="warning" %}}
The intermediate certificates of the main certificate authorities are included in the built-in CA databases of modern browsers. Therefore, you do not need to include an intermediate certificate to serve your website through SSL/TLS for users with modern browsers. 

However, intermediate certificate chains are mandatory for programmatic access and [service consumption](https://www.mendix.com/evaluation-guide/app-lifecycle/develop/integration/service-exposure/), and missing intermediate certificates will cause service consumption failures even when browser access works normally. Tools such as curl, programming languages, and operating systems do not automatically resolve missing intermediate certificates.

You cannot predict how your users will attempt to connect to your website, and not including an intermediate certificate may result in connection issues for some users. To this end, Mendix recommends always including the intermediate certificate chain to ensure reliable connectivity for all use cases.
{{% /alert %}}

You can now configure your custom domain. See [Configuring a Custom Domain](/developerportal/deploy/custom-domains/#Configuring).

{{% alert color="info" %}}
After uploading, always verify your certificate using an SSL checker to identify any missing intermediate certificates before they cause service disruptions.
{{% /alert %}}

## Uploading Your Own Custom Domain Certificate{#Uploading}

To upload an application-level custom domain certificate, you need to have the following prepared:

* An SSL/TLS certificate that is self-signed or signed by your certificate authority
* An intermediate certificate chain provided by your certificate authority
* An SSL/TLS private key

To upload the custom domain certificate, follow these steps:

1. Click **Upload Certificate** in the **Custom Domains** tab.
2. In the **Upload Certificate** wizard:
    1. Review the information in **General Info**, then click **Next**.
    2. Complete the required fields in **Upload**:
        * Add a **Description** for the certificate.
        * Paste the signed **TLS Certificate**.
        * Paste an **Intermediate Certificate Chain**. While optional for modern browsers, it is mandatory for programmatic access and service consumption (like [OData services](/refguide/consumed-odata-services/)). The intermediate certificate chain is provided by your certificate authority.
        * Paste the **TLS Private Key**.

3. Click **Save** to upload your new custom domain certificate to Mendix Cloud automatically.

    {{% alert color="info" %}}The SSL/TLS private key will be hidden after you upload it. To keep the key secure, it will be stored in Mendix Cloud's secure keystore; it will not be available for download, and it cannot be obtained by Mendix Support.{{% /alert %}}

Once the certificate is uploaded, you can configure your custom domain. For instructions, refer to [Configuring a Custom Domain](/developerportal/deploy/custom-domains/#Configuring).

You can add as many certificates as you need. Each certificate will be listed with the description you gave it. Make sure to give them meaningful names so that you can identify them easily.

## Renewing a Custom Domain Certificate{#method-2-renewing-by-updating-an-existing-custom-domain-certificate}

Custom domain certificates have an expiry date. There are two methods for renewing an application-level custom domain certificate that is about to expire:

* Create a new custom domain certificate (recommended)

* Update an existing custom domain certificate

### Method 1: Creating a New Custom Domain Certificate (Recommended)

You can handle an expiring domain certificate by replacing it with a new one. You can do this in one of two ways:

* Generate a new certificate request (for more information, see [Generating a Certificate Request for Your Custom Domain](#Generating))

* Upload a new custom domain certificate (for more information, see [Uploading Your Own Custom Domain Certificate](#Uploading))

You can now select the new certificate for your custom domain (for more information, see [Configuring a Custom Domain](/developerportal/deploy/custom-domains/#Configuring)).

{{% alert color="info" %}}
If you are rotating a certificate, you do not need to remove the current domain configuration when replacing the certificate. Selecting a new certificate for an existing domain will reconfigure the existing domain with the selected certificate. 
{{% /alert %}}

### Method 2: Renewing by Updating an Existing Custom Domain Certificate

You can do this by editing an existing application-level custom domain certificate. To update an existing custom domain certificate, follow these steps:

1. Click the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) icon on the CSR of interest.
2. Select **Edit**.
3. Paste the signed **TLS Certificate**.
4. Paste an **Intermediate Certificate Chain**. While optional for modern browsers, it is mandatory for programmatic access and service consumption (like [OData services](/refguide/consumed-odata-services/)). The intermediate certificate chain is provided by your certificate authority.

{{% alert color="warning" %}}
To edit an existing custom domain certificate, you need the following:

* access to the certificate request that you created for the current certificate
* [transport rights](/developerportal/deploy/node-permissions/#transport-rights) for all environments of the application
{{% /alert %}}
