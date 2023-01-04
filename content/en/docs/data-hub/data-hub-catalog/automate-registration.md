---
title: "Automate Catalog Registration"
url: /data-hub/data-hub-catalog/automate-registration/
category: "Data Hub Catalog"
weight: 70
description: "Learn how to automate Catalog registration in a pipeline."
tags: ["data hub catalog", "security", "registration", "pipeline","register services"]
---

## 1 Introduction

The [Data Hub Catalog](/data-hub/data-hub-catalog/) is a metadata hub for managing shared registered assets made available through OData services.

## 2 Prerequisites

To automate registration to the Data Hub Catalog in your pipeline that deploys to a (private) cloud, you need the following:

* A working pipeline that deploys your Mendix app
* A [Personal Access Token](/developerportal/community-tools/warden/) to access the Data Hub Catalog APIs

See [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for the first steps on deploying to a private cloud.

## 3 


    1. explanation of where to begin: .mda from Studio Pro or mxbuild outputs a dependencies.json file that gives you the info you need for the next three API calls
    2. recommend PUT over POST because then people can run the pipeline more than once!
    3. pointer to something about how to authenticate
    4. call the Transform API to change the data structure
    5. call the Registration API to register the application
    6. the things that you’ve already decided about this app the first time you deployed it are: the name, location, and prod/non-prod-ness of the environment. if you’re on the Mendix for Private Cloud, check the info using this API endpoint.
    7. call the Registration API to register the environment
    8. call the Registration API to register the endpoint