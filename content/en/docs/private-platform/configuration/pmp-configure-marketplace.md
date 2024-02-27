---
title: "Configure the Marketplace Settings for Private Mendix Platform"
linktitle: "Configure the Marketplace Settings"
url: /private-mendix-platform-configuration/marketplace/
description: "Documents the initial Marketplace configuration for the Private Mendix Platform."
weight: 30
tags: ["private mendix platform",  "private platform", "private marketplace", "marketplace configuration"]
---

## 1 Introduction

For Private Mendix Platform, the Marketplace is also private and hosted entirely within the platform itself. The settings in this section allow you to configure the administrative settings for publishing and downloading content to and from the private Marketplace.

## 2 Approvals

In this tab, you can configure whether contents that users publish to the private Marketplace requires administrator approval before publishing.

## 3 Content Import

You can populate your private Marketplace with contents by importing a zip file that contains the content packages along with a *package.json* file. To enable content import from the import bundle, you must unpack it and point Private Mendix Platform to the location of the json file by following these steps:

1. Download the Marketplace Bundle with contents available in a zip file. If you do not have access to the bundle, contact your Mendix point of contact.
2. Unzip the files to an internal location which Private Mendix Platform can access via HTTP or HTTPS. Do not change the directory structure.
3. If using a self-signed certificate for your internal locations, configure Mendix Operator to trust your private Certificate Authorities. For more information, see [Creating a Private Cloud Cluster](/developerportal/deploy/standard-operator/#custom-tls).
4. In the **Content Import** tab, in the **Marketplace import bundle URL** field, enter the root URL of the *package.json* file included in the Marketplace download. 

    For example, if the *package.json* can be accessed at the URL `https://<your domain>/release/marketplace/Marketplace-1.0/package.json`, enter the following URL: `https://<your domain>/release/marketplace/Marketplace-1.0/`.

5. Set the toggle **Enable content import with external source** to **ON**.
6. Click **Save** to enable content import from this bundle.