---
title: "SDK Introduction"
url: /apidocs-mxsdk/mxsdk/sdk-intro/
category: "Mendix Platform SDK"
weight: 1
tags: ["SDK", "Mendix SDK", "Platform SDK", "Model SDK", "metadata"]
#When content is updated here, it should also be updated on https://developers.mendix.com/sdk/, contact Ben.
---

## 1 Introduction

The Mendix Platform SDK and Model SDK are TypeScript- & JavaScript-based SDKs. They provide you with access to the inner-workings of every Mendix app.

### 1.1 Mendix Platform SDK

The Platform SDK allows you to work at the app level. Currently, the Platform SDK implements the following functionality: 

* Creating a new app
* Deleting an app
* Creating a temporary working copy for editing an app model using the Mendix Model SDK
* Committing the changes to a temporary working copy back to the Mendix Team Server
* Getting info about a repository, its branches and commits

### 1.2 Mendix Model SDK

With Model SDK, you can read, modify, analyze every meta model elements of your app model. That includes domain models, microflows, pages, integrations (consumed  and published web services), Java actions, custom widgets, security constraints and so on. Anything you can access with Studio Pro - and all the technical details we abstract away from in the UI, are part of the app model.

When analyzing app models this gives you a lot of power: you can access every tiny detail in the model, so that you can reason about the entire model, analyze it for quality, or export it completely.

{{% alert color="info" %}}

However, because we provide full read-write access, you can also break the model easily. We have taken measures against this, of course, and most of the meta model is safe to use. However, we recommend only  doing read access actions on the following specific meta model  components, because it is easy to create an invalid model:

- Consumed and published web services
- XML schemas
- Import and export mappings
- Custom widgets
- Rest services: PublishedRestService is an unsupported, experimental feature.

{{% /alert %}}

### 1.3 The Combined Power of Mendix Platform SDK and Model SDK

With the Platform SDK and Model SDK, you can do the following:

* "Read" from your app model (for example, analyze the quality of your app model, or generate a high-level diagram to document your app)
* "Write" to your app model (for example, create a new entity in your domain model, add an activity to an existing microflow, even generate  a whole new Mendix app based on a legacy code base)

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/sdk-diagram.png" >}} 

The combination of Platform SDK and Model SDK basically enables you to automate any tedious or error-prone task. If you imagine it, there's probably a way to do it via these SDKs.

{{% alert color="info" %}}When changing these components, make sure to use the [reverse engineering tool](https://docs.mendix.com/apidocs-mxsdk/mxsdk/generating-code-from-the-model/) to increase your chances of successfully building a script that creates valid models.{{% /alert %}}

## 2 Getting Started

### 2.1 Quick Setup

1. `npm init --yes`
2. `npm install -g typescript`
3. `npm install mendixmodelsdk mendixplatformsdk when @types/when --save`
4. `tsc --init`

### 2.2 Detailed Resources

For detailed information on getting started with the Platform SDK and Model SDK, see [How to Set Up Your Development Environment](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/).

## 3 Read More

* [SDK Use Cases](sdk-use-cases)
* [Mendix SDK Reference Documentation](/apidocs-mxsdk/mxsdk/sdk-refguide/)

