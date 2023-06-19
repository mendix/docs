---
title: "Automate Catalog Registration"
linktitle: "Automate Catalog Registration"
<<<<<<< HEAD:content/en/docs/data-hub/data-hub-catalog/register-data-sources/automate-registration.md
url: /data-hub/mendix-connect-catalog/automate-registration/
description: "Learn how to automate Catalog registration in a pipeline deploying to a (virtual) private Cloud."
weight: 40
tags: ["Catalog", "security", "registration", "pipeline","register services"]
=======
url: /catalog/register/automate-registration/
description: "Learn how to automate Catalog registration in a pipeline deploying to a (virtual) private Cloud."
weight: 40
tags: ["data hub catalog", "security", "registration", "pipeline","register services"]
aliases:
    - /data-hub/data-hub-catalog/automate-registration/
>>>>>>> development:content/en/docs/catalog/register-data-sources/automate-registration.md
---

## 1 Introduction

The [Catalog](/data-hub/mendix-connect-catalog/) is a metadata hub for managing shared registered assets made available through OData services. Registering data to the Catalog happens automatically when deploying an app with a published OData service to the Mendix Cloud. 

For people deploying to a (virtual) private cloud, you can follow the steps in this document to automate registration to the Catalog in your pipeline.

## 2 Prerequisites

Before you begin, ensure that you have the following:

* A working pipeline that deploys your Mendix app (see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for the first steps on deploying to a private cloud)
* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat) to access the Catalog APIs

## 3 Starting Point: dependencies.json

A file called *dependencies.json* lists all published and consumed OData services in your app. This file contains information you will need to make the API calls in the next steps.

* Create an .mda package that includes *dependencies.json*. 
Go to the **Environments** page in the Developer Portal and click Create Package From Teamserver, or run `mxbuild` (see [MxBuild](/refguide/mxbuild/)).

You can also find *dependencies.json* in the *deployment > model* folder of your Mendix application. 

## 4 Change the Data Structure {#transform}

Ensure that your contract metadata will be accepted by transforming *dependencies.json* using the **Transform** endpoint of the **Registration API**.

For this section, you will need:

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The dependencies.json file 
* Endpoint location `Name` (found in the *metadata.json* file for your exposed OData service, in an array called **Constants**, under **Name**)
* Endpoint location `Value` (found in the *metadata.json* file for your exposed OData service, in an array called **Constants**, under **DefaultValue**)

<<<<<<< HEAD:content/en/docs/data-hub/data-hub-catalog/register-data-sources/automate-registration.md
Follow the steps for [preparing your service details using the Transform endpoint of the Registration API](/data-hub/mendix-connect-catalog/register-data/#transform-api).
=======
Follow the steps for [preparing your service details using the Transform endpoint of the Registration API](/catalog/register/register-data/#transform-api).
>>>>>>> development:content/en/docs/catalog/register-data-sources/automate-registration.md

## 5 Register the Application

Then, register the application.

For this section, you will need: 

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The application **Name**

<<<<<<< HEAD:content/en/docs/data-hub/data-hub-catalog/register-data-sources/automate-registration.md
Follow the steps for [registering an application through the Data Hub Registration API](/data-hub/mendix-connect-catalog/register-data/#register-application).
=======
Follow the steps for [registering an application through the Data Hub Registration API](/catalog/register/register-data/#register-application).
>>>>>>> development:content/en/docs/catalog/register-data-sources/automate-registration.md

Upon completion, you will have the `application_UUID`.

## 6 Register the Environment 

Next, register the environment.

For this section, you will need:

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The `application_UUID`
* Environment `Name`
* Environment `Location`
* Environment `Type`

<<<<<<< HEAD:content/en/docs/data-hub/data-hub-catalog/register-data-sources/automate-registration.md
Follow the steps for [registering an environment through the Catalog Registration API](/data-hub/mendix-connect-catalog/register-data/#register-environment).
=======
Follow the steps for [registering an environment through the Data Hub Catalog Registration API](/catalog/register/register-data/#register-environment).
>>>>>>> development:content/en/docs/catalog/register-data-sources/automate-registration.md

Upon completion, you will have the `environment_UUID`.

## 7 Register the Endpoint(s)

Last, register the service endpoint(s).

For this section, you will need:

* A [Personal Access Token](/developerportal/community-tools/mendix-profile/#pat)
* The `application_UUID`
* The `environment_UUID`
* The Service `Path`, `Name`, and `ContractType`
* Service `Version` and `Security Scheme`
* Service `Contract` with `Type` and `Value`

<<<<<<< HEAD:content/en/docs/data-hub/data-hub-catalog/register-data-sources/automate-registration.md
Follow the steps for [registering services (endpoints) through the Catalog Registration API](/data-hub/mendix-connect-catalog/register-data/#register-services).
=======
Follow the steps for [registering services (endpoints) through the Data Hub Catalog Registration API](/catalog/register/register-data/#register-services).
>>>>>>> development:content/en/docs/catalog/register-data-sources/automate-registration.md

If you want to register more than one service for the same application and environment at once, add another object to the Endpoints list in the request body.
