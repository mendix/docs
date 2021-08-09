---
title: "How to Register OData resources in the Data Hub Catalog"
description: "How to register OData resources in the Data Hub Catalog: through the Mendix Cloud, using the Registration API, or in the UI form"
tags: ["data hub catalog", "data hub", "external entities", "register", "published OData service" ,"how to", "registration"]
---

## 1 Introduction

There are three ways to register exposed OData services in the Data Hub Catalog.

**This how-to will teach you how to register a service:**

* Through the Mendix Cloud
* Through the Data Hub Catalog Registration API
* Through the Data Hub Catalog UI form


## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro version [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/)
* Have an exposed OData service that you're ready to register, or follow sections 3 and 4 in [this how-to](https://docs.mendix.com/data-hub/share-data/) to create one.


## 3 Registering a service through the Mendix Cloud

If you've got:

1. an exposed OData service, that's
2. deployed to the Mendix Cloud,

then congratulations! Your service is already registered in the Data Hub Catalog. This is the power of the Mendix Data Hub.

## 4 Registering a service without the Mendix Cloud

If you aren't using the Mendix Cloud to deploy your Mendix application, there are two other ways to register an exposed OData service in the Data Hub Catalog:

* Through the Data Hub Catalog Registration API
* Through the Data Hub Catalog UI form

The Data Hub Catalog collects metadata about the application and environment where your application is deployed, so you can distinguish similar-looking services from one another. You'll need to provide details about both the application and environment to register your service.

### 4.1 Registering a service through the Data Hub Catalog Registration API

Calling the Data Hub Catalog Registration APIs will allow you to register one (or several at a time) exposed OData service(s). Overall, we'll register: 
1. the application, and use the resulting application UUID to register:
2. the environment, and use the application UUID together with the resulting environment UUID to register:
3. the service, or multiple services.

#### 4.1.1 Registering an application through the Data Hub Catalog Registration API

#### 4.1.2 Registering an environment through the Data Hub Catalog Registration API

#### 4.1.3 Registering one service through the Data Hub Catalog Registration API

#### 4.1.4 Registering more than one service through the Data Hub Catalog Registration API


### 4.2 Registering a service through the Data Hub Catalog UI form
