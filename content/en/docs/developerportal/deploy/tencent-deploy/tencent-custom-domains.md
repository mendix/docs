---
title: "Custom Domains on Tencent"
url: /developerportal/deploy/tencent-custom-domains/
weight: 10
description: "How to configure custom domains on the Tencent platform as well as generate, upload, and renew certificates for HTTPS connections."
tags: ["Custom Domain","Tencent Cloud", "certificates"]
---

## 1 Introduction

When running Mendix on Tencent, you can add custom domains such as `https://myapp.mycompany.com/` to your environments. This how-to walks you through the process.

{{% alert color="info" %}}
This documentation is describing certificates for *incoming* connections. For information on setting up certificates for *outgoing* connections, see [Certificates](/developerportal/deploy/certificates/).
{{% /alert %}}

{{% alert color="warning" %}} You may not immediately see changes which affect DNS routing. This is because of DNS caching, where changes are not visible until the cache is updated.
{{% /alert %}}

This how-to will teach you how to do the following:

* Configure a custom domain for your environment
* Upload a custom domain certificate
* Renew a custom domain certificate

## 2 Prerequisites

### 2.1 General Prerequisites

Before starting this how-to, you will need to have the following prerequisites:

* a basic knowledge of DNS (Domain Name System)
* the correct permission to your app environment to **Manage TLS configurations** (for example having the cluster manager, developer, or admin role) – see [Namespace Management](/developerportal/deploy/tencent-deploy/#members) for information on the permissions granted to roles
* if you are going to use HTTPS to connect to your app:
    * a basic knowledge of SSL/TLS certificates:
        * What is an SSL/TLS certificate and what it is used for?
        * What is an intermediate certificate chain and what it is used for?
        * What is an SSL/TLS private key and what it is used for?
        * What is a certificate request and what it is used for?
    * a basic knowledge of certificate authorities

### 2.2 Register Domain Name and Configure A Record{#DNS}

Before configuring your custom domain in the Developer Portal, you will need to register a domain name and configure a DNS A record for your custom domain with your domain registrar or DNS provider.

You can register a domain from the console of the Tencent cloud by choosing the **Domain Registration** ([域名注册](https://console.cloud.tencent.com/domain)) product.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/domain-registration-product.png" >}}

Click **register a domain name** (注册域名). 

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/register-domain-name.png" >}}

Here you can register your domain.

You then need to configure an A Record. 

1. Choose the **DNS Parsing DNSPod** ([DNS 解析 DNSPod](https://console.cloud.tencent.com/cns)) product from the console of Tencent cloud.  

2. Select the **Records management** (记录管理) tab.

3. Choose **add records** (添加记录) and make a record of type **A**.

You can bind the IP address, which you get during onboarding to the Mendix Platform, to a specific domain name, like `myapp.mxapps.cn` as in the example below. You can also bind it to a wildcard domain name like `*.mxapps.cn` or `*.mendix.mxapps.cn`. If you use a wildcard domain name, you don’t need to bind the IP for every Mendix app.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/create-a-records.png" >}}

## 3 Adding Custom Domains

To add a custom domains, follow these steps:

1. Go to the [Developer Portal](https://apps.mendix.tencent-cloud.com/).

2. Open the **Environments Details** page for your app.

3. Click **Edit** next to the **App URL**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/edit-app-url.png" >}}

4. Click **Apply Changes** to apply the changes to the environment.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/apply-environment-changes.png" >}}

{{% alert color="info" %}}
Make sure you have configured an A record for your custom domain with your domain registrar/DNS provider (for details, see [Register Domain Name and Configure A Record](#DNS), above).
{{% /alert %}}

## 4 Adding Certificates for Connecting Via HTTPS

If you want users to connect to your app using HTTPS connections, you have to provide a custom domain certificate (an SSL/TLS certificate). If you already have a signed SSL/TLS certificate, continue with [Uploading Your Own Custom Domain Certificate](#Uploading), below.

Custom domain certificates (or just "certificates") are managed at the *application* level while custom domains are managed per *environment*.

### 4.1 Obtaining a New Signed Certificate

If you do not have an SSL/TLS certificate, you can purchase one from the Tencent cloud **SSL certificate** (SSL 证书) product or apply for a free certificate.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/get-signed-certificate.png" >}}


### 4.2 Uploading the Custom Domain Certificate{#Uploading}

To upload a custom domain certificate, you need to have the following things prepared:

* An SSL/TLS certificate that is self-signed, or signed by your certificate authority
* An SSL/TLS private key

To enable TLS and upload the custom domain certificate, follow these steps:

1. Click the **TLS** tab on the *Environment Details* page for your app.
2. Select **Custom TLS Configuration**.
3. Select **Yes** for **Enable TLS?**.
4. Upload files containing the following:
    1. the **TLS Private Key**
    2. the signed **TLS Certificate**
        {{< figure src="/attachments/developerportal/deploy/tencent-deploy/tencent-custom-domains/upload-certificate.png" >}}

5. Click **Save** to save your new custom domain certificate. It will be uploaded to the Developer Portal automatically.
6. Click **Apply Changes** to apply the changes to the environment.

### 4.3 Renewing a Custom Domain Certificate

Custom domain certificates have an expiry date. You will need to upload a new one before the current one expires to ensure that you can continue to use TLS connections to your app. Follow the instructions above to upload the new certificate.

## 5 Frequently Asked Questions

### 5.1 Can I Create a `*.mycompany.com` Wildcard Certificate?

Yes. You can upload your custom domain certificate to all of your apps and use it for all the environments of all of your apps.

You can select the same wildcard certificate per environment by using it with different subdomains. For example, `test.mycompany.com`, `accp.mycompany.com`, and `app.mycompany.com`.

### 5.2 How Do I Construct an Intermediate Certificate Chain Properly?

Your certificate is signed by the certificate authority (CA). They sign your certificate with their intermediate certificate, rather than directly with the root certificate. Their intermediate certificate is signed with their own root certificate.

To reach the root certificate, you have to link your certificate via the intermediate certificate chain, which is usually just one intermediate certificate. Occasionally a CA requires more than one intermediate certificate. You do not need to provide the root certificate, as every web browser has it in its trusted keystore.

### 5.3 How Do I Get my SAML Metadata or CommunityCommons.GetApplicationUrl to Use the Custom URL?

For certain use cases, it is important for the Mendix runtime to know the public URL of your applications. This is most commonly needed when your app generates links back to itself. To tell the runtime where it lives, set the ApplicationRootUrl [custom runtime setting](/refguide/custom-settings/#general). To set the custom runtime setting, follow the instructions in the [Custom Runtime Settings](/developerportal/deploy/environments-details/#custom-runtime-settings) section of *Environment Details*.

## 6 Read More

* [Certificates](/developerportal/deploy/certificates/)
