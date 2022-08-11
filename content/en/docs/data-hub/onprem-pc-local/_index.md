---
title: "Data Hub without Mendix Cloud"
description: "This guide explains how to use Mendix Data Hub and external entities for local deployments, or for private cloud or on-premises solutions."
url: /data-hub/non-mendix-cloud/
weight: 20
tags: ["entity", "external entities", "private cloud", "on prem", "local", "studio pro", "consumed OData Service"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 1 Introduction

This guide explains how to use Data Hub for users who do not deploy to the Mendix Cloud. This includes users who are deploying locally, or users who deploy to a Private Cloud or On-Premises solution.

## 1.1 Background

The [Mendix Data Hub](/data-hub/) includes two main features:

* [External entities](/refguide/external-entities) in Mendix Studio Pro version [8.14](/releasenotes/studio-pro/8.14/#data-hub) and above, purple entity containers in the Domain Model that represent the links to [published OData Services](/refguide/published-odata-services/)
* The [Data Hub Catalog](hub.mendix.com), documented in our [Data Hub Catalog](/data-hub/data-hub/catalog/) guide, a metadata hub for managing shared registered assets made available through OData services

Publishing [external entities](/refguide/external-entities/) is made easy for licensed users on a [Mendix Cloud](developerportal/deploy/mendix-cloud-deploy/), as [published OData Services](/refguide/published-odata-services/) are registered automatically in the [Data Hub Catalog](/data-hub/data-hub-catalog/) and made available in the Studio Pro [Data Hub pane](/refguide/data-hub-pane/).

But what happens in the following situations?

* You are developing on a local machine for testing, without deploying to a development environment (deploying locally)
* You are deploying to a [Private Cloud](developerportal/deploy/private-cloud/) or [On-Premises](developerportal/deploy/on-premises-design/), rather than the Mendix Cloud

In these cases, you can still publish and consume external entities. This guide will explain how by taking a step back and distinguishing between design time and runtime for Data Hub.

## 2 Using Data Hub in Design Time {#dh-design-time}

During design time, you are finding, registering, or importing data source metadata into Studio Pro. This metadata is in the form of contracts, and are registered automatically in the Data Hub Catalog if your application is hosted on the Mendix Cloud.

If you will be deploying locally, to a Private Cloud, or On-Premises, you can add a [published OData resource](/refguide/published-odata-resource) using the metadata contract.

### 2.1 Manually Registering Contracts to the Data Hub Catalog

If you deploy to a Private Cloud or On-Premises setup, you can manually register applications, environments, services, or data sources to the Data Hub Catalog. Registering the data source contracts to the Catalog ensures that it can be found and imported into an application by members of the company that owns it. 

To manually register an OData contract metadata file to the Data Hub Catalog, follow these basic steps:

1. Create an `.mda` package to deploy. To do this, go to the **Environments** page in the **Developer Portal** and click **Create Package From Teamserver**. The `.mda` package contains a `dependencies.json` file that lists all published and consumed OData services.
2. Use the [Transform](/data-hub/data-hub-catalog/register-data/#transform-api) operation to transform the contents of `dependencies.json` into payloads for other operations (see the [Transform operation specs](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/registration_v4.html#/Endpoints/post_transform_dependenciesjson))
3. Use the [Registration API](/apidocs-mxsdk/apidocs/data-hub-apis/#registration) to register the data source.

For detailed steps, see the [Registering a Service without the Mendix Cloud](/data-hub/data-hub-catalog/register-data/#without-mendix-cloud) section of *Register OData Resources in the Data Hub Catalog*.

### 2.2 Importing Contracts Directly into the Studio Pro and the Data Hub Pane (Bypassing the Data Hub Catalog)

If you are deploying locally, or just do not want to register the data sources in the Catalog, you can import the metadata contracts or service URLs directly into Studio Pro to consume a published OData service.

#### 2.2.1 Importing from a File

To import a metadata contract file of a published OData service, do the following:

1.  Export the contract from the publishing app and download it to your computer. 
    Go to **Settings** tab of the **Published OData Service** document, and click **Export** next to the **Metadata** field. Save the `$metadata.xml` file.

2.  Import the contract into the consuming app. 
    Right-click the **App Explorer** where you would like to add the service, then click **Add other** > **Consumed OData Service**. Select the `$metadata.xml` file you exported.

The service will now appear in the Data Hub pane.

#### 2.2.2 Importing from a URL

To import a published OData service URL, do the following:

1.  Copy the OData service URL. 
    To find the published OData service URLs from Mendix apps, go to the **Settings** tab of the **Published OData Service** document, copy the entire link in the **Metadata** field.
2.  Add a **Consumed OData service**.
    Right-click the **App Explorer were you would like to add the service, then click **Add other** > **Consumed OData Service**.
3.  In the **Add Consumed OData Service** dialog box, make sure **From URL** is selected, and paste the copied URL into the field.

The service will now appear in the Data Hub pane.

### 2.3 Updating a Manually Registered Contract

To update the metadata of a manually registered contract, follow the same steps as an initial registration. Then, indicate during the registration that the updated source is a new version in an existing environment of an existing app.

See the [Update or Switch](/refguide/consumed-odata-service/#update-switch) section of *Consumed OData Service*  to see how this works for automatically registered contracts.

## 3 Using Data Hub in Runtime {#dh-runtime}

During runtime, the exchange of external entities via OData services occurs between publishing and consuming apps. Anyone who deploys to a Private Cloud or On-Premises can consume the OData resources that are set up when [using Data Hub in design time](#dh-design-time).

### 3.1 Licensing 

A [Data Hub License](/data-hub/#data-hub-licences) is necessary for using Mendix Data Hub during runtime. A [Data Hub Free Edition](/data-hub/#dh-free) licenses limits use to 1000 Odata objects per day for each runtime instance. For further details on limitations during runtime, see the [Limitations](/data-hub/#dh-free-limitations) section of the *Data Hub Guide*.
