---
title: "Get Started with Catalog"
url: /catalog/get-started/
category: "Data Hub Catalog"
linktitle: "Catalog Quickstart"
weight: 1
description: "Describes initial steps beginning users can take with their Catalog."
tags: ["data hub", "data hub catalog", "consume", "external entities", "asset", "entities", "data hub pane", "studio pro"]
aliases:
    - /data-hub/data-hub-catalog/get-started/
---

## 1 Introduction

Data Hub Catalog is an open, standards-based metadata repository that enables Mendix developers and administrators to discover and explore data sources throughout their connected ecosystem. This respository is accessible to [authorized users](/data-hub/data-hub-catalog/manage-data-sources/user-roles/) in your company on the web app, hub.mendix.com, or through [Data Hub APIs](/apidocs-mxsdk/apidocs/data-hub-apis/).

{{% alert color="info" %}}The Catalog currently supports OData data sources, or services, APIs, or databases that are [wrapped in OData](/refguide/wrap-services-odata/).{{% /alert %}}

## 2 Your Company's Catalog

Log in with your company credentials to hub.mendix.com to see what metadata has been shared in your company. 

Depending on your [user role](/data-hub/data-hub-catalog/manage-data-sources/user-roles/) and use case, you can do the following:

* [Register data sources](/data-hub/data-hub-catalog/register-data-sources/) to be used in other apps in your company
* [Consume data sources](/data-hub/data-hub-catalog/consume-data-sources/) in your company's Catalog
* [Manage data sources](/data-hub/data-hub-catalog/manage-data-sources/) as a data source owner or as an administrator

## 3 Catalog and App Deployment Methods

You can use the Catalog with any deployment method, though there are differences in how data sources are registered for each deployment method. The chart below outlines these differences.

| Deployment Method | How are Data Sources Registered? | 
| --- | --- |
| [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) | Published OData services in a deployed app are [registered automatically](/data-hub/data-hub-catalog/register-data/#mendix-cloud) as data sources in the Catalog <br> [Register sources using the Registration API](/data-hub/data-hub-catalog/register-data/#register-services) |
| [Private Cloud](/developerportal/deploy/private-cloud/), [Tencent Cloud](/developerportal/deploy/tencent-deploy/) | Using the [Registration API](/data-hub/data-hub-catalog/register-data/#register-services) |
| [On-Premises](/developerportal/deploy/on-premises-design/) | Using the [Registration API](/data-hub/data-hub-catalog/register-data/#register-services) |

Once data sources are registered, the metadata is stored in the Catalog so that you can share these sources with authorized users in your company.

## 4 Try It Out

Follow [Share Data Between Apps](/data-hub/share-data/) to use the Catalog to share data between two Mendix apps.

Build on this experience by learning how to [write data to another app](/data-hub/write-data/).

## 5 Processes and Properties

[Data Hub Catalog](/data-hub/data-hub-catalog/) goes into detailed information on the Catalog's processes and properties. This is helpful if you are looking for explanations of what you see in the Catalog UI (hub.mendix.com) and how parts of the UI relate to each other.
