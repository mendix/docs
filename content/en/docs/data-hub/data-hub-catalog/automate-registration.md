---
title: "Automate Catalog Registration"
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

Before you begin, you need the following:

* A working pipeline that deploys your Mendix app (see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for the first steps on deploying to a private cloud)
* A [Personal Access Token](/developerportal/community-tools/warden/) to access the Data Hub Catalog APIs

## 3 Starting Point: dependencies.json

A file called *dependencies.json* lists all published and consumed OData services in your app. This file contains all of the information you will need to make the API calls in the next steps.

* Create an .mda package that includes *dependencies.json*. 
Go to the **Environments** page in the Developer Portal and click Create Package From Teamserver, or run `mxbuild` (see [MxBuild](/refguide/mxbuild/)).


## 4 Change the Data Structure with the Transform API

Use the [Transform](/data-hub/data-hub-catalog/register-data/#transform-api) operation to transform the contents of *dependencies.json* into payloads for other operations.

For detailed steps, see [Preparing Your Service Details Using the Transform API](/data-hub/data-hub-catalog/register-data/#transform-api).

## 5 Register the Application with the Registration API



## 6 Register the Environment with the Registration API

## 7 Register the Endpoint with the Registration API


    1. explanation of where to begin: .mda from Studio Pro or mxbuild outputs a dependencies.json file that gives you the info you need for the next three API calls
    2. recommend PUT over POST because then people can run the pipeline more than once!
    3. pointer to something about how to authenticate
    4. call the Transform API to change the data structure
    5. call the Registration API to register the application
    6. the things that you’ve already decided about this app the first time you deployed it are: the name, location, and prod/non-prod-ness of the environment. if you’re on the Mendix for Private Cloud, check the info using this API endpoint.
    7. call the Registration API to register the environment
    8. call the Registration API to register the endpoint