---
title: "Deployment Location"
url: /developerportal/deploy/deployment-location/
weight: 60
description: "URL considerations for deploying Mendix"
---

## Introduction

When you deploy your app outside Mendix Cloud, you can choose the URL that points to your app. However, there are some restrictions on where you should deploy your app.

{{% alert color="info" %}}
In this document, `domain` is used to identify the domain registered to you through the Internet Corporation for Assigned Names and Numbers (ICANN). This is sometimes referred to as the [apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-an-apex-domain-for-your-github-pages-site). This includes the top-level domain. For example, `example.com` would be a `domain` as used in this document.
{{% /alert %}}

For apps deployed to Mendix Cloud, you can customize a URL by adding [custom domains](/developerportal/deploy/custom-domains/).

## Paths

If you specify an app URL location on a (sub)path, the Mendix runtime needs to know the public URL of your application. This can be done by setting the [custom runtime setting](/refguide/custom-settings/#applicationrooturl-section) `ApplicationRootUrl`.

When hosting a Mendix application on a subpath, the proxy needs to forward the request from `https://subdomain.domain/my/sub/path` to the internal address where the Mendix runtime is running. For an example configuration for nginx, see the [Hosting Your App on a Subpath](/developerportal/deploy/reverse-proxy/#subpath) section in *Configuring a Reverse Proxy*.

{{% alert color="info" %}}
Routing based on a subpath is possible as of Studio Pro 10.3 (for details, see the [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) section of the *Runtime Customization* page), although it is not supported in Mendix Cloud. For versions below 10.3, it is not possible to use a path to your app. Your app should always be at the root of your subdomain. In other words, it should be at a location like this: `https://subdomain.domain/`.

If you want to deploy several apps on the same domain, use different subdomains to identify the app. For example, use `https://appA.apps.mydomain.com/`, not `https://mydomain.com/apps/appA`.
{{% /alert %}}

## Secure Cookies for On-Premise Applications

The Mendix runtime automatically sets cookies with the `secure` attribute when applications are served over HTTPS. However, when deploying a Mendix application behind a load balancer that uses HTTP for internal communication, additional configuration is required. For more information, see the [Making the Mendix Runtime Aware of HTTPS](/developerportal/deploy/reverse-proxy/#runtime-https) section in *Configuring a Reverse Proxy*.

To set secure cookies for an app that you run locally, see the [Setting Secure Cookies](/developerportal/deploy/reverse-proxy/#local-secure-cookies) section in *Configuring a Reverse Proxy*.

## Main Domain Name

Do not deploy your app directly at the apex domain (`https://domain/`).

This conflicts with the `https://www.domain/` URL because the main domain is often redirected there if there is no subdomain specified.

Also, you would not be able to have additional custom domains for your app because you cannot create a CNAME record that points to an apex domain.
