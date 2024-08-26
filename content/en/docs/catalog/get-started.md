---
title: "Get Started with the Catalog"
url: /catalog/get-started/
linktitle: "Get Started with the Catalog"
weight: 1
description: "Describes initial steps beginning users can take with their Catalog."
aliases:
    - /data-hub/data-hub-catalog/get-started/

---

## Introduction

Catalog is an open, standards-based metadata repository that enables Mendix developers and administrators to discover and explore data sources throughout their connected ecosystem. This repository is accessible to [authorized users](/catalog/manage-data-sources/user-roles/) in your company on the web app, catalog.mendix.com, or through [Catalog APIs](/apidocs-mxsdk/apidocs/catalog-apis/).

{{% alert color="info" %}}The Catalog currently supports OData data sources, or services, APIs, or databases that are wrapped in OData.{{% /alert %}}

## Your Company's Catalog

Log in with your company credentials to catalog.mendix.com to see what metadata has been shared in your company. 

Depending on your [user role](/catalog/manage-data-sources/user-roles/) and use case, you can do the following:

* [Register data sources](/catalog/register-data-sources/) to be used in other apps in your company
* [Consume data sources](/catalog/consume/) in your company's Catalog
* [Manage data sources](/catalog/manage-data-sources/) as a data source owner or as an administrator

## Catalog and App Deployment Methods

You can use the Catalog with any deployment method, though there are differences in how data sources are registered for each deployment method. The chart below outlines these differences.

| Deployment Method | How are Data Sources Registered? | 
| --- | --- |
| [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) | Published OData services in a deployed app are [registered automatically](/catalog/register/register-data/#mendix-cloud) as data sources in the Catalog <br> [Register sources using the Registration API](/catalog/register/register-data/#register-services) |
| [Private Cloud](/developerportal/deploy/private-cloud/) | Using the [Registration API](/catalog/register/register-data/#register-services) |
| [On-Premises](/developerportal/deploy/on-premises-design/) | Using the [Registration API](/catalog/register/register-data/#register-services) |

Once data sources are registered, the metadata is stored in the Catalog so that you can share these sources with authorized users in your company.

## Try It Out

Follow [Share Data Between Apps](/howto/integration/share-data/) to use the Catalog to share data between two Mendix apps.

Build on this experience by learning how to [write data to another app](/howto/integration/write-data/).

## Processes and Properties

[Catalog](/catalog/) goes into detailed information on the Catalog's processes and properties. This is helpful if you are looking for explanations of what you see in the Catalog UI (catalog.mendix.com) and how parts of the UI relate to each other.
