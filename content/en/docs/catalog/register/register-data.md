---
title: "Register Resources in the Catalog"
linktitle: "Register Resources"
url: /catalog/register/register-data/
description: "Describes how to register resources in the Catalog: through Mendix Cloud or in the UI form."
weight: 10
aliases:
    - /catalog/register/
    - /catalog/register-data/
    - /catalog/register-data-sources/register-data/
    - /catalog/register-data-sources/register
    - /data-hub/data-hub-catalog/register
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor registration-form below is mapped, so it should not be removed or changed.
---

## Introduction

There are three ways to register published services in the Catalog. Mendix supports all OData versions, REST, Business Events, and Web Services

This how-to teaches you how to register a service in the following ways:

* Through [Mendix Cloud](#mendix-cloud), where registration occurs automatically when you deploy a [published OData](/refguide/published-odata-services/)/REST/Web service, or Business Event to Mendix Cloud
* Through the [Catalog UI form](#registration-form)
* Through the [Catalog Registration API](/apidocs-mxsdk/apidocs/registration-api/)

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You have Studio Pro [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/) installed
* You have a Mendix account
* You have an exposed OData/REST/Web service or Business Event that you are ready to register (for instructions on how to create an exposed OData service, refer to the sections on creating an app and exposing an entity in [Share Data Between Apps](/howto/integration/share-data/)

## Registering a Service Through Mendix Cloud {#mendix-cloud}

If you have a published service that is deployed to [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), then your service is already [registered in the Catalog](/catalog/register/automatically-registered-services/).

## Registering a Service Without Mendix Cloud {#without-mendix-cloud}

If you are not using Mendix Cloud to deploy your Mendix application, there are two other ways to register an exposed service in the Catalog:

* Through the [Catalog Registration API](/apidocs-mxsdk/apidocs/registration-api/)
* Through the [Catalog UI form](#registration-form)

The Catalog collects metadata about the application and environment where your application is deployed, so you can distinguish services from one another. To register your service, you need to provide details about both the application and the environment where the service is deployed.

For details on working with external entities and the Catalog without Mendix Cloud, see [Register Services without Mendix Cloud](/catalog/data-sources-without-mendix-cloud/).

### Registering a Service Through the Catalog UI Form {#registration-form}

The Catalog has a UI form where you can register a single exposed service. Make sure you have collected the following details before you begin:

* Metadata contract file as an *.xml*, *.json*, *.yaml* or *.wsdl*, depending on the service you want to register, or a *.zip* if there are multiple files
* Service details: `Name`, `Version`, `Path`
* Application `Name`
* Environment details: `Name`, `Location` (URL), `Type`

Follow the steps below:

1. Open the [Catalog home page](https://catalog.mendix.com).
2. On the **Contract** screen, select what type of service you would like to register. Upload a valid contract file corresponding to the service type that is selected, such as: 
    * *.xml* for OData
    * *.yaml* or *.json* for REST
    * *.wsdl* or *.xml* for Web Service

    For more information on the contract, see the [Contract Structure](#contract-structure) section below.
3. On the **Service Details** screen, select the type of service you want to register and specify the following details: 
   1. Service Name
   2. Service Version
   3. Service Relative Path. 
   
   The Service Relative Path is the path of the service contract relative to the environment URL of the application. For more information on versioning, see [Semantic numbering](/refguide/consumed-odata-service/#semantic). The other fields on the form are optional.

    {{% alert color="warning" %}}Once a version is released to production, any updated contracts should be given a new version. This applies even if you are only registering for a non-production environment.<br/><br/>This is because changes to a particular version of a published service are reflected in the entities and attributes available through the Catalog for every environment for which the service is published. For example, if you have version 1.0.0 published to both non-production and production environments, any changes you make to version 1.0.0 of the service in the non-production environment are also reflected in the service in production.{{% /alert %}}

4. Once you have filled out all the required fields, select **Next**.
5. On the **Application** screen, select an existing application by name or register a new one. You will also be able to edit **Technical Owner** and **Business Owner** through the **Curation** feature after registration is completed.
6. Once you have filled out all the required fields, select **Next**.
7. On the **Environment** screen, select an existing environment by name, or provide the **Environment Name**, **Environment Location** (URL), and **Environment Type** to register a new one. The **Environment Type** options indicate what type of data you might find there:

    * **Production** – data is of production quality
    * **Sandbox** – the Mendix Free App environment, data is not of production quality
    * **Non-production** – hosting is paid for, but data is not of production quality

8. Select your **Authentication** method. For details on supported authentication types, see the [Authentication](#authentication) section below. Curators can also [add or change authentication methods](/catalog/manage/curate/#authentication) later.
9. Select **Done!** to complete the registration.

Congratulations! Your service is registered in the Catalog. 

The discoverable status of the service defaults to the value set by the Mendix Admin. For more details, see the [Settings](/control-center/catalog-admin/#settings) section of *Catalog Administration*.

#### Selecting an Authentication Method {#authentication}

Publishers of a service can determine how consuming developers will need to identify themselves when consuming the service.

The Catalog supports the following methods:

* **Basic authentication** – Authenticate from a username and password
* **Active session** – For Mendix services, authenticate from the open and active browser session
* **Mendix SSO** – For Mendix services, authenticate from single sign-on using the [Mendix SSO](/appstore/modules/mendix-sso/) module
* **OAuth** – Authenticate with [OAuth](https://oauth.net/)
* **OpenID Connect** – Authenticate with [OpenID Connect](https://openid.net/connect/), built on top of [OAuth 2.0](https://oauth.net/2/) and used with the [OIDC SSO](/appstore/modules/oidc/) module
* **Other** – Specify other ways to authenticate, including custom modules

Fill in as many details as you can to ensure that consuming developers can easily authenticate themselves to consume your service. 

##### Selecting a Marketplace Module (Optional)

If you are using a module from the Mendix Marketplace, select **Other** and then choose the module in the **Marketplace Module** dropdown list.

#### Contract Structure {#contract-structure}

All ZIP contracts must include a primary document, named *primary*.

The other documents in the ZIP file should be structured within a series of nested folders, in which each segment of the URI path is represented by its own folder. It's possible to use absolute URLs or relative URIs, but these have different top-level folders:

* Absolute URL – The entire URL is represented in the folder structure, starting with an **http** or **https** folder in the root of the ZIP file. This top-level **http** or **https** folder contains a folder named after the domain. The domain folder contains a series of other folders and files representing the rest of the URL path.
* Relative URI – The folders and files must be structured relative to the Document Base URL. In other words, relative URIs use a folder structure that matches the relative path as it is used in the primary document.

The following diagram shows examples of the ZIP contract structure for both URI types. The absolute folder structure is the same in each case, but the relative structure depends on the Document Base URL. Note that **odata**, **v1**, and **docs** are each separate folders, but in the absolute folder structure shown here, they are represented in a condensed format to save space.

{{< figure src="/attachments/catalog/register-data/zip-file-structure.png" alt="Absolute and relative folder structures for two different base URLs." class="no-border" >}}
