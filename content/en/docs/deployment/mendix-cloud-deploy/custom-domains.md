---
title: "Custom Domains"
url: /developerportal/deploy/custom-domains/
weight: 80
description: "How Technical Contacts configure custom domains in Mendix Cloud."
aliases:
    - /mendixcloud/custom-domains.html
    - /howtogeneral/mendixcloud/custom-domains.html
    - /mendixcloud/custom-domains
    - /howtogeneral/mendixcloud/custom-domains
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Linked from Mendix Portal > Environments > Cloud Settings > Custom Domains
---

## Introduction

Mendix Cloud supports adding custom domains, such as `https://myapp.mycompany.com`, to your application environments. 
This document describes how Technical Contacts can configure custom domains for applications on Mendix Cloud.

## Prerequisites

### General Prerequisites

Before starting this how-to, you need to have the following prerequisites:

* Basic knowledge of DNS (Domain Name System)
* A licensed node for which you have [transport rights](/developerportal/deploy/node-permissions/#transport-rights)
* A certificate must have been uploaded either at the [application level](/developerportal/deploy/application-level-certificates/) by the Technical Contact or [centrally](/developerportal/deploy/certificates/centralized-certificates/) by the Mendix Admin.

{{% alert color="info" %}}
Custom domains can be added only to licensed apps. You cannot add custom domains to Free Apps.
{{% /alert %}}

### Create and Configure a CNAME Record{#DNS}

{{% alert color="info" %}}
Changes that affect DNS routing may not display immediately. This is because of DNS caching, where changes are not visible until the cache is updated.
{{% /alert %}}

Before configuring your custom domain in Mendix Cloud, you need to set up a DNS record for your custom domain with your domain registrar or DNS provider.

Create a CNAME (Canonical Name) record and point it to `[YOUR-CUSTOM-DOMAIN].cname.mendix.net.`. For example, if your custom domain is `myapp.mycompany.com`, create a CNAME record pointing to `myapp.mycompany.com.cname.mendix.net.` so that Mendix can direct your custom domain to your Mendix app.

{{% alert color="info" %}}
It is not possible to create a CNAME record for an apex/naked domain (meaning, a domain without a subdomain, like `mycompany.com`). If you want to use a custom apex/naked domain, redirect it to a subdomain (for example, `subdomain.mycompany.com`) and create a CNAME for the subdomain instead.
{{% /alert %}}

## Managing Custom Domains in Mendix Cloud

While custom domain certificates (or just "certificates") can be managed centrally or at the application level, custom domains are mainly managed per environment.

You can choose which certificate to use when you configure a custom domain for an environment (test, acceptance, or production).

{{< figure src="/attachments/deployment/mendix-cloud-deploy/custom-domains/app-env-certificates.png" class="no-border" >}}

To manage custom domains, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
2. Click **Cloud Settings** ({{< icon name="settings-slider-1" >}}) from any of the [available tabs](/developerportal/deploy/environments/#available-tabs) to open the **Manage Cloud Settings** page.
3. Switch to the **Custom Domains** tab.

## Configuring a Custom Domain {#Configuring}

Once a custom domain certificate has been uploaded, you can configure the custom domain for one of your application environments.

To configure a custom domain for your application environment, follow these steps:

1. Go to your app's **Environments** page.

2. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the environment you want to configure.

3. On the **Environment Details** page, go to the **Network** tab.

4. In the **Custom Domains** section, click **Add** to create a new custom domain (or **Edit** to edit an existing one).

5. Type the **Domain name**.

6. Select a **Certificate** from the drop-down list of uploaded certificates.

7. Click **Save** to save your custom domain. It will be configured for your application environment automatically.
    
{{% alert color="info" %}}
Make sure you have configured a CNAME record for your custom domain with your domain registrar/DNS provider (for details, see [Create and Configure a CNAME Record](#DNS)), above.
{{% /alert %}}

## Frequently Asked Questions

### How Do You Get my SAML Metadata or CommunityCommons.GetApplicationUrl to Use the Custom URL? {#use-custom-url}

For certain use cases, it is important for the Mendix runtime to know the public URL of your applications. This is most commonly needed when your app generates links back to itself.

To tell the runtime where it lives, set the `ApplicationRootUrl` [custom runtime setting](/refguide/custom-settings/#applicationrooturl-section). To set the custom runtime setting, follow the instructions in the [Custom Runtime Settings](/developerportal/deploy/environments-details/#custom-runtime-settings) section of *Environment Details*.

### Can You Configure Multiple Custom Domains for the Same Application? {#multiple-custom-domains}

Yes, you can configure multiple custom domains for the same application.

For application-level certificates, you need to [upload](/developerportal/deploy/application-level-certificates/#Upload) a separate certificate for each custom domain. You can only [generate](/developerportal/deploy/application-level-certificates/#Generating) one certificate signing request (CSR) per custom domain.

For central certificates, a single certificate managed by the Mendix Admin can be reused across multiple custom domains and applications, if applicable.

## Read More

* [Certificate Management](/control-center/certificate-management/)
* [Certificates](/developerportal/deploy/certificates/)
* [Environments](/developerportal/deploy/environments/)
* [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [App Roles](/developerportal/general/app-roles/)
* [Control Center](/control-center/)
