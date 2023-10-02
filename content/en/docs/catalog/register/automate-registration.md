---
title: "Automate Catalog Registration"
linktitle: "Automate Catalog Registration"
url: /catalog/register/automate-registration/
description: "Learn how to automate Catalog registration in a pipeline deploying to a (virtual) private Cloud."
weight: 40
tags: ["data hub", "Catalog", "security", "registration", "pipeline","register services"]
aliases:
    - /catalog/automate-registration/
---

## 1 Introduction

The [Catalog](/catalog/) is a metadata hub for managing shared registered assets made available through OData services. Registering data to the Catalog happens automatically when deploying an app with a published OData service to Mendix Cloud.

For users deploying to a (virtual) private cloud, you can follow the steps in this document to automate registration to the Catalog in your pipeline.

## 2 Prerequisites

Before you begin, make sure you have the following:

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat) to access the Catalog APIs
* A working pipeline that deploys your Mendix app (see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for the first steps on deploying to a private cloud) 

## 3 Starting Point: dependencies.json

A file called *dependencies.json* lists all published and consumed OData services in your app. This file contains information you will need to make the API calls in the next steps.

Create an `.mda` package that includes *dependencies.json*. Go to the **Environments** page in the Developer Portal and click **Create Package** From Team server, or run `mxbuild` (see [MxBuild](/refguide/mxbuild/) for information on how to build a Mendix Deployment Package).

You can also find *dependencies.json* in **Deployment** > **Model** folder of your Mendix application. 

## 4 Change the Data Structure {#transform}

Ensure your contract metadata will be accepted by transforming *dependencies.json* using the **Transform** endpoint of the Registration API (see the [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/) section in *Catalog APIs*).

For this section, you will need:

* A [personal access token](/developerportal/community-tools/mendix-profile/#pat)
* The `dependencies.json` file 
* Endpoint location `Name` (found in the *metadata.json* file for your exposed OData service, in an array called **Constants**, under **Name**)
* Endpoint location `Value` (found in the *metadata.json* file for your exposed OData service, in an array called **Constants**, under **DefaultValue**)

Follow the steps in [Registering an environment through the Catalog Registration API](/catalog/register/register-data/#register-environment) to prepare your service details. When finished, [register the application](#5-register-the-application).

## 5 Register the Application

To register the application, you need: 

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The application **Name**

Follow the steps for [registering an application through the Registration API](/catalog/register/register-data/#register-application).

Upon completion, you will have the `application_UUID`.

## 6 Register the Environment 

To register the environment, you will need:

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The `application_UUID`
* Environment `Name`
* Environment `Location`
* Environment `Type`

Follow the steps in [Registering an environment through the Catalog Registration API](/catalog/register/register-data/#register-environment) to register the environment of your application. When finished, [register the endpoint(s)](#7-register-the-endpoints).

Upon completion, you will have the `environment_UUID`.

## 7 Register the Endpoint(s)

To register the service endpoint(s), you will need:

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The `application_UUID`
* The `environment_UUID`
* The Service `Path`, `Name`, and `ContractType`
* Service `Version` and `Security Scheme`
* Service `Contract` with `Type` and `Value`

Follow the steps for [registering services (endpoints) through the Catalog Registration API](/catalog/register/register-data/#register-services).

If you want to register more than one service for the same application and environment at once, add another object to the Endpoints list in the request body.
