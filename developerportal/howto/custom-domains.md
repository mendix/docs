---
title: "How to Configure Custom Domains"
space: "Developer Portal"
category: "How-To's"
description: "Describes how to configure custom domains as well as generate, upload, and renew certificates in Mendix."
tags: ["Custom Domain","Mendix Cloud","Developer Portal"]
---

## 1 Introduction

The Mendix Cloud supports adding custom domains such as `https://myapp.mycompany.com/` to your environments. As we only allow HTTPS connections, you have to provide a custom domain certificate (an SSL/TLS certificate). This how-to walks you through the process.

This option is available for free for licensed apps. You cannot add custom domains to free apps.

**This how-to will teach you how to do the following:**

* Generate a certificate request for your custom domain
* Upload a custom domain certificate to the Mendix Cloud
* Renew a custom domain certificate
* Configure a custom domain for your environment

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a basic knowledge of DNS
* Have a basic knowledge of SSL/TLS certificates:
    * What an SSL/TLS certificate is and what it is used for
    * What an intermediate certificate chain is and what it is used for
    * What an SSL/TLS private key is and what it is used for
    * What a certificate request is and what it is used for
* Have a basic knowledge of certificate authorities (like GeoTrust, Thawte, Verisign, RapidSSL, GoDaddy, Comodo)

### 2.1 Domain Registrar / DNS provider

Before configuring your custom domain in the Mendix Cloud, you will need to configure a DNS record for your custom domain at your domain registrar/DNS provider.

![](attachments/deploy/21168230.png)

Please create a CNAME record and point it to `[YOUR-CUSTOM-DOMAIN].cname.mendix.net.`. For example, when your custom domain is `myapp.mycompany.com`, create a CNAME record to `myapp.mycompany.com.cname.mendix.net.` so that Mendix can point your custom dsomain to your Mendix app.

<div class="alert alert-info">{% markdown %}

It's not possible to create a CNAME record for an apex/naked domain (meaning, a domain without a subdomain, like `mycompany.com`), as custom apex/naked domains are currently not supported.

{% endmarkdown %}</div>

## 3 Managing Custom Domains in the Mendix Cloud

Custom domain certificates (or just "certificates") and custom domains are managed in separate locations in the Mendix Cloud. Certificates are currently managed on the application level.

You can have a collection of certificates. For example when your certificate expires, you can upload a new certificate next to your old certificate. Those can be chosen when you configure a custom domain. This is done on the environment level (test, acceptance, production).

![](attachments/deploy/21168233.png)

To manage custom domains, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com) and click **Apps** in the top navigation panel.
2. Click **My Apps** and select **Nodes**.
3. Select the node you want to manage.
4. Click **Environments** under the **Deploy** category.
5. Go to the **Custom Domains** tab.

## 4 Generating a Certificate Request for your Custom Domain<a name="Generating"></a>

When you do not have an SSL/TLS certificate or an SSL/TLS private key for your custom domain yet, you have to order one at a certificate authority (like GeoTrust, Thawte, Verisign, RapidSSL, GoDaddy, or Comodo). In order to get a signed SSL/TLS certificate from a certificate authority, you need to provide a certificate request. A certificate request can be created in the Mendix Cloud.

To create a certificate request, follow these steps:

1.  Click **New** and then click **Create a Certificate Request**:

    ![](attachments/deploy/newcustomdomain.jpg)

2.  Fill in and submit the provided fields:

    ![](attachments/deploy/21168225.png)

3. Click **Generate**. An SSL/TLS private key and a certificate request is generated. The certificate request will be shown in the PEM format.

![](attachments/deploy/21168226.png)

<div class="alert alert-info">{% markdown %}

The SSL/TLS private key will be stored in our secure keystore. It will not be available for downloadin order to keep it secure.

{% endmarkdown %}</div>

### 4.1 Upload Signed Certificate 

Before uploading a certificate, go to your certificate authority to get a signed SSL/TLS certificate. After you have received the signed SSL/TLS certificate, you can upload it by following these steps:

1. Select the custom domain certificate.
2. Click **Upload Signed Certificate**. 

![](attachments/deploy/certificate.jpg)

Here you can change the description of your certificate and upload the signed SSL/TLS certificate. You can also upload an intermediate certificate chain. The intermediate certificate chain is often provided by your certificate authority.

![](attachments/deploy/21168227.png)

## 5 Uploading Your Own Custom Domain Certificate<a name="Uploading"></a>

To upload a custom domain certificate, you need to have the following things prepared:

* An SSL/TLS certificate that is signed by your certificate authority
* An intermediate certificate chain provided by your certificate authority
* An SSL/TLS private key

To upload the custom domain certificate, follow these steps:

1. Click **New** and then click **Upload Certificate, Chain and Key**:

    ![](attachments/deploy/newcustomdomain.jpg)

2. Enter the SSL/TLS certificate, intermediate certificate chain, and SSL/TLS private key in the provided fields. Optionally, you can give your custom domain certificate a description. The description is used when selecting the custom domain certificate when configuring a custom domain later on.

    ![](attachments/deploy/21168228.png)

3. Click **Save** to save your new custom domain certificate. It will be uploaded to the Mendix Cloud automatically.

<div class="alert alert-info">{% markdown %}

The SSL/TLS private key will be hidden after uploading it. It will be stored in our secure keystore and will not be available for download in order to keep it secure.

{% endmarkdown %}</div>

## 6 Renewing a Custom Domain Certificate

There are two methods for renewing a custom domain certificate:

1. Create a new custom domain certificate (recommended).
2. Update an existing custom domain certificate.

### 6.1 Method 1: Creating a New Custom Domain Certificate (Recommended)

When a custom domain certificate is about to expire, you can renew it by generating a new certificate request (for more information, see [4 Generating a Certificate Request for Your Custom Domain](#Generating)) or by uploading a new custom domain certificate (for more information, see [5 Uploading Your Own Custom Domain Certificate](#Uploading)).

Now select the new certificate for your custom domain (for more information, see [7 Configuring a Custom Domain](#Configuring)).

### 6.2 Method 2: Renewing by Updating an Existing Custom Domain Certificate

You can also renew your custom domain certificate by editing an existing custom domain certificate. Please be aware that the certificate request that you created in the past is required for that.

## 7 Configuring a Custom Domain<a name="Configuring"></a>

After a custom domain certificate has been uploaded, you can start configuring a custom domain for one of your application environments.

To configure a custom domain on your application environment, follow these steps:

1. Click **Environments** under the **Deploy** category.
2. Click **Details** of the environment you want to configure.

![](attachments/deploy/environmentdetails.jpg)

3. Go to the **Network** tab. 

![](attachments/deploy/network.jpg)

4. Under **Custom Domains** you can manage your Custom Domains.

5. Configure a Custom Domain by:

*   Providing a Domainname (like "myapp.mycompany.com" from the example at the top of this page)
*   Selecting a Custom Domain Certificate you have uploaded above

![](attachments/deploy/21168229.png)

6. Click **Save** to save your Custom Domain. It will be configured for your Application Environment automatically.

<div class="alert alert-info">{% markdown %}

Please make sure you've configured a CNAME record for your Custom Domain at your Domain Registrar / DNS provider (See: 2.1 Preparation).

{% endmarkdown %}</div>


## 8 Frequently Asked Questions

### 8.1 Can I create a wildcard certificate _*.mycompany.com_?

Yes. However, when you create the Certificate Request via the Mendix Cloud you will only be able to use the wildcard certificate for all environments of only 1 application. When you have your own Custom Domain Certificate, you can upload it to all of your applications and use it for all environments of all of your applications. You can select the same wildcard certificate per environment by specifying different subdomains. Example _test.mycompany.com_ _accp.mycompany.com_ and _app.mycompany.com._

### 8.2 How do I properly construct a Intermediate Certificate Chain?

Your Certificate is signed by the Certificate Authority. They sign your certificate with their intermediate certificate. They also sign their Intermediate Certificate with their own root certificate. Almost always the Intermediate Certficate Chain that you will need is just one Intermediate Certificate. Sometimes there are is more then one Intermediate Certificate, this depends on the CA you use. You do not need to provide the Root Certificate as every Internet browser has it in it's trusted keystore.

An Intermediate Certificate Chain chain could look like this from top to bottom:

*   Intermediate Certificate 2
*   Intermediate Certificate 1
*   Root Certificate (optional)

## 9 Related Content

*  [Deploy](/developerportal/deploy)
*  [How to Deploy to the Mendix Cloud](deploying-to-the-cloud)
*  [How to Upgrade Your Free App to a Licensed App](how-to-upgrade-free-app)
