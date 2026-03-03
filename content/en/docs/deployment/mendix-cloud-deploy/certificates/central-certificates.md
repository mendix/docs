---
title: "Centralized Certificates"
linktitle: "Centralized Certificates"
url: /developerportal/deploy/certificates/centralized-certificates/
description: "Learn how Mendix Admins centrally manage SSL/TLS certificates for custom domains in Mendix Control Center, including uploading, renewing, replacing, and monitoring certificate status."
weight: 40
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

This document describes how Mendix Admins can centrally manage SSL/TLS certificates for [incoming connections](/developerportal/deploy/certificates/#incoming-connections) using [Certificate Management](/control-center/certificate-management/) in Control Center.

{{% alert color="info" %}}
This page covers incoming connections for centrally-managed certificates. For application-level certificates, refer to [Application-Level Certificates](/developerportal/deploy/application-level-certificates/). For outgoing connection certificates, refer to [Outgoing Certificates](/developerportal/deploy/certificates/#outgoing-client-certificates).
{{% /alert %}}

## Prerequisites

Before you proceed, ensure that:

* You are a [Mendix Admin](/control-center/mendix-admins-page/)
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

## Uploading a Certificate{#uploading-central-certificate}

To upload a certificate, you need to have the following things prepared:

* An SSL/TLS certificate that is self-signed or signed by a certificate authority
* An intermediate certificate chain provided by a certificate authority
* An SSL/TLS private key

To upload the certificate, follow these steps:

1. Go to **Certificate Management** in [Control Center](https://controlcenter.mendix.com/p/admin/apps).
2. Click **Upload Certificate.**
3. In the **Upload Certificate** wizard:
    1. Review the information in **General Info**, then click **Next**.
    2. In **Upload**, complete the following fields:
        * **Description** – A descriptive name for the certificate.
        * **TLS Certificate** – Add the signed certificate.
        * **Intermediate Certificate Chain** – Paste the chain provided by your certificate authority. While optional for modern browsers, this is required for programmatic access and service consumption (for example, [OData services](/refguide/consumed-odata-services/)).
        * **TLS Private Key** – Paste the private key.

4. Click **Save** to upload the certificate.

    {{% alert color="info" %}} The SSL/TLS private key is stored securely in Mendix Cloud and is hidden after upload. It will not be available for download and cannot be retrieved by Mendix Support. {{% /alert %}}

After the certificate is uploaded in **Central Management**, the certificate becomes visible to the Technical Contacts, who can then configure the custom domain at the application level. For details on how to do this, refer to [Configuring a Custom Domain](/developerportal/deploy/custom-domains/#Configuring).

You can upload multiple certificates but be sure to use clear descriptions to easily identify each certificate.

{{% alert color="info" %}}
After uploading, always verify your certificate using an SSL checker to identify any missing intermediate certificates before they cause service disruptions.
{{% /alert %}}

## Renewing a Certificate{#renewing-central-certificate}

Certificates expire and must be renewed before they expire. You can renew a centrally-managed certificate in one of the following ways:

* Upload a new certificate 
* Update an existing certificate
* Replace an existing certificate

### Method 1: Uploading a New Certificate{#uploading-new-central-certificate}

For an expiring or expired certificate, you can renew it by uploading a new certificate. For details, refer to [Uploading a Certificate](#uploading-central-certificate) above.

After uploading, the Technical Contact can select the new certificate when [configuring the custom domain](/developerportal/deploy/custom-domains/#Configuring).

{{% alert color="info" %}}
If you are rotating a certificate, you do not need to remove the current domain configuration when replacing the certificate. Selecting a new certificate for an existing domain will reconfigure the existing domain with the selected certificate. 
{{% /alert %}}

### Method 2: Updating an Existing Certificate{#updating-existing-central-certificate}

Follow these steps to update an existing certificate by editing it.

1. Go to **Certificate Management** in [Control Center](https://controlcenter.mendix.com/p/admin/apps).
2. Click the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) icon on the certificate of interest.
3. Select **Edit**.
4. Paste the new **TLS Certificate**.
5. Paste the **Intermediate Certificate Chain**.

### Method 3: Replacing an Existing Certificate{#replacing-existing-central-certificate}

Replacing a certificate allows you to renew it without downtime.

1. Follow the instructions in [Uploading a Certificate](#uploading-central-certificate) above.
2. On the certificate to replace, click the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) icon.
3. Click **Replace**.
4. In the **Replace Certificate** wizard that opens:
    1. Select the newly uploaded replacement certificate.
    2. Click **Replace**.

All custom domains previously using the old certificate are automatically updated to use the new certificate.

{{% alert color="info" %}}
Every hostname covered by the existing certificate must be included in the Subject Alternative Names (SANs) of the replacement certificate.
{{% /alert %}}

## Read More

* [Certificates](/developerportal/deploy/certificates/)
* [Certificate Management](/control-center/certificate-management/)
* [Custom Domains](/developerportal/deploy/custom-domains/)