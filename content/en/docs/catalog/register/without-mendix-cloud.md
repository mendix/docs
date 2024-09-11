---
title: "Register Data Sources (On-Prem or Private Cloud)"
description: "Describes how to use Catalog and external entities for local deployments, or for private cloud or on-premises solutions."
url: /catalog/register/data-sources-without-mendix-cloud/
linktitle: "Private Cloud/On-Premises Registration"
weight: 40
aliases:
    - /data-hub/data-hub-without-mendix-cloud/
    - /catalog/data-sources-without-mendix-cloud/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## Introduction

This guide explains how to use [published OData services](/refguide/published-odata-services/) and [external entities](/refguide/external-entities/) with or without the [Catalog](/catalog/) when deploying locally, to a Private Cloud or an On-Premises solution.

## Use Cases

This document covers the following use cases:

* You are developing both the service and the client on a local machine, without deploying to a cloud environment (deploying locally)
* You are deploying to a [Private Cloud](/developerportal/deploy/private-cloud/) or [On-Premises](/developerportal/deploy/on-premises-design/), rather than the Mendix Cloud

In these cases, you can still publish and consume external entities. This guide will explain how to work with the Catalog and external entities by taking a step back and distinguishing between design time (when you are modeling your app) and runtime (after it has been deployed to a development server).

## Using Data in Design Time{#dh-design-time}

During design time, when you are [modeling](/refguide/modeling/) your app, you are finding, registering, or importing data source [metadata](#metadata) into Studio Pro. This metadata is in the form of contracts, and is registered automatically in the Catalog if your application is hosted on the Mendix Cloud. See the [Metadata Contracts](#metadata) section below for more details.

If you will be deploying locally, to a Private Cloud, or On-Premises, you can add an app, the environments on which it is deployed, and the [published OData entity](/refguide/published-odata-entity/) it provides using the metadata contract. For general resources on using data when modeling your app during design time, check out [Share Data Between Apps](/data-hub/share-data/) and [Write Data to Another App](/catalog/write-data/).

### Metadata Contracts {#metadata}

The Catalog acts as a phonebook or map to the data and capabilities provided by software in your organization. It contains metadata about the applications, environments, services, and versions deployed. For every system registered, the contracts describing its services are parsed and stored, so users can easily find the descriptions of the datasets, logic, and events provided by these systems. The Catalog does not contain any data, only the metadata required to describe these applications and services.

See the [Registering a Service Through the Mendix Cloud](/catalog/register/register-data/#mendix-cloud) section of *Register Resources in the Catalog to read how this works if you are deploying to the Mendix Cloud. 

### Supported Metadata Contract Types

We support ZIP (for multiple file contracts) or XML (for single file contracts).

### Manually Registering Contracts to the Catalog with Team Server {#manual-team-server}

If you deploy to a Private Cloud or On-Premises setup, and use the [Mendix Team Server](/refguide/version-control/#team-server), you can manually register applications, environments, services, or data sources to the Catalog. Registering the data source contracts to the Catalog ensures that it can be found and imported into an application by members of the company that owns it. 

To manually register an OData contract metadata file to the Catalog, follow these basic steps:

1. Create an `.mda` package to deploy. To do this, go to the **Environments** page in the **Mendix Portal** and click **Create Package From Teamserver**. The `.mda` package contains a `dependencies.json` file that lists all published and consumed OData services.
2. Use the [Transform](/catalog/register/register-data/#transform-api) operation to transform the contents of `dependencies.json` into payloads for other operations (see the [Transform operation specs](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/registration_v5.html#/Endpoints/post_transform_dependenciesjson)).
3. Use the [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/#registration) to register the data source.

For detailed steps, see the [Registering a Service without the Mendix Cloud](/catalog/register/register-data/#without-mendix-cloud) section of *Register Resources in the Catalog*.

### Manually Registering Contracts to the Catalog without Team Server {#manual-no-team-server}

To manually register contracts to the Catalog without the Mendix Team Server, do the following:

1. Export the contract from the publishing app and download it to your computer. </br> Go to **Settings** tab of the **Published OData Service** document, and click **Export** next to the **Metadata** field. Save the `$metadata.xml` file.
2. Register the contract into the Catalog manually. </br> See the [Registering a Service without the Mendix Cloud](/catalog/register/register-data/#without-mendix-cloud) section of *Register Resources in the Catalog*.

### Importing Contracts Directly into Studio Pro (Bypassing the Catalog) {#import-contracts}

If you are deploying locally, or do not want to register the data sources in the Catalog, you can import the metadata contracts or service URLs directly into Studio Pro to consume a published OData service.

#### Importing from a File

To import a metadata contract file of a published OData service, do the following:

1. Export the contract from the publishing app and download it to your computer.

    Go to **Settings** tab of the **Published OData Service** document, and click **Export** next to the **Metadata** field. Save the `$metadata.xml` file.

2. Import the contract into the consuming app.

    Right-click the **App Explorer** where you would like to add the service, then click **Add other** > **Consumed OData Service**. Select the `$metadata.xml` file you exported.

The service will now appear in the [Integration pane](/refguide/integration-pane/).

#### Importing from a URL

To import a published OData service URL, do the following:

1. Copy the OData service URL.

    To find the published OData service URL from Mendix apps, go to the **Settings** tab of the **Published OData Service** document, and copy the entire link in the **Metadata** field.

2. Add a **Consumed OData service** to your consuming app.

    Right-click the **App Explorer** in the module where you would like to add the service, then click **Add other** > **Consumed OData Service**.

3. In the **Add Consumed OData Service** dialog box, make sure **From URL** is selected, and paste the copied URL into the field.

The service will now appear in the [Integration pane](/refguide/integration-pane/).

### Updating a Manually Registered Contract

To update the metadata of a manually registered contract, follow the same steps as an initial registration. Then, indicate during the registration that the updated source is a new version in an existing environment of an existing app. 

To update a data set in Studio Pro, do the following:

1. Open your app and the published OData service you want to update.
2. Under **Entities**, select **Customer**, and click **Edit**.
3. Select the checkbox for **Updateable** and click **OK**.
4. Click **Publish**.

See the [Update or Switch](/refguide/consumed-odata-service/#update-switch) section of *Consumed OData Service*  to see how this works for automatically registered contracts.

## Using Data in Runtime {#dh-runtime}

During runtime, after you have deployed your app to a development server, the exchange of external entities via OData services occurs between publishing and consuming apps. Anyone who deploys to a Private Cloud or On-Premises can consume the OData resources that are set up when [using data in design time](#dh-design-time). The Catalog is not involved during runtime.

{{% alert color="info" %}}
Publishing and consuming services need to have network access to each other, but do not necessarily need to be on cloud or network. {{% /alert %}}
