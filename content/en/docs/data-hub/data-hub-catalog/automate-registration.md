---
title: "Automate Catalog Registration on a (Virtual) Private Cloud"
linktitle: "Automate Catalog Registration"
url: /data-hub/data-hub-catalog/automate-registration/
category: "Data Hub Catalog"
weight: 70
description: "Learn how to automate Catalog registration in a pipeline deploying to a (virtual) private Cloud."
tags: ["data hub catalog", "security", "registration", "pipeline","register services"]
---

## 1 Introduction

The [Data Hub Catalog](/data-hub/data-hub-catalog/) is a metadata hub for managing shared registered assets made available through OData services. Registering data to the Catalog happens automatically when deploying an app with a published OData service to the Mendix Cloud. 

For people deploying to a (virtual) private cloud, you can follow the steps in this document to automate registration to the Data Hub Catalog in your pipeline.

## 2 Prerequisites

Before you begin, ensure that you have the following:

* A working pipeline that deploys your Mendix app (see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for the first steps on deploying to a private cloud)
* A [Personal Access Token](/developerportal/community-tools/warden/) to access the Data Hub Catalog APIs

## 3 Starting Point: dependencies.json

A file called *dependencies.json* lists all published and consumed OData services in your app. This file contains information you will need to make the API calls in the next steps.

* Create an .mda package that includes *dependencies.json*. 
Go to the **Environments** page in the Developer Portal and click Create Package From Teamserver, or run `mxbuild` (see [MxBuild](/refguide/mxbuild/)).

You can also find your dependencies.json in the `deployment > model` folder of your Mendix application. 

## 4 Change the Data Structure

For this section, you will need:
* A [Personal Access Token](/developerportal/community-tools/warden/)
* The dependencies.json file 
* Endpoint location `Name` (found in the *metadata.json* file for your exposed OData service, in an array called **Constants**, under **Name**)
* Endpoint location `Value` (found in the *metadata.json* file for your exposed OData service, in an array called **Constants**, under **DefaultValue**)

Use the [Transform](/data-hub/data-hub-catalog/register-data/#transform-api) operation to transform the contents of *dependencies.json* into payloads for other operations.

For detailed steps, see [Preparing Your Service Details Using the Transform Endpoint of the Registration API](/data-hub/data-hub-catalog/register-data/#transform-api).

## 5 Register the Application

For this section, you will need: 
* A [Personal Access Token](/developerportal/community-tools/warden/)
* The application **Name**

Next, follow the steps for [registering an application through the Data Hub Registration API](/data-hub/data-hub-catalog/register-data/#register-application).

Upon completion, you will have the application UUID.

## 6 Register the Environment 

For this section, you will need:

    Personal Access Token
    application_UUID
    Environment Name
    Environment Location
    Environment Type


Now that you have the UUID, follow the steps for [registering an environment through the Data Hub Catalog Registration API](/data-hub/data-hub-catalog/register-data/#register-environment).



## 7 Register the Endpoint 

For this section, you will need:

    Personal Access Token
    application_UUID
    environment_UUID
    Service Path, Name, and ContractType
    Service version Version and Security Scheme
    Service Contract with Type and Value
