---
title: "SDK Introduction"
url: /apidocs-mxsdk/mxsdk/sdk-intro/
weight: 1
#When content is updated here, it should also be updated on https://developers.mendix.com/sdk/, contact Ben.
---

## Introduction

The Mendix Platform and Model SDKs are TypeScript- and JavaScript-based SDKs, which give you access to the inner-workings of every Mendix app. These SDKs enable you to work with your app efficiently via code, and automate any tedious or error-prone task.

With the Mendix Platform SDK and Mendix Model SDK, you can do the following:

* "Read" from your app model (for example, analyze the quality of your app model, or generate a high-level diagram to document your app)
* "Write" to your app model (for example, create a new entity in your domain model, add an activity to an existing microflow, or even generate a whole new Mendix app based on a legacy code base)

{{% alert color="info" %}}
For more information, see [Importing Legacy Code](/apidocs-mxsdk/mxsdk/sdk-use-cases/#importing) in *SDK Use Cases*.
{{% /alert %}}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/sdk-diagram.png" class="no-border" >}} 

### Mendix Platform SDK

The [Mendix Platform SDK](https://apidocs.rnd.mendix.com/platformsdk/latest/index.html) allows you to work at the app level. Currently, the Mendix Platform SDK implements the following functionality: 

* Create a new app
* Delete an app
* Create a temporary working copy for editing an app model using the Mendix Model SDK
* Commit the changes in a temporary working copy back to the Mendix Team Server
* Get information about a repository, its branches and commits

### Mendix Model SDK

With the [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html), you can read, modify, and analyze every metamodel element of your app model. This includes domain models, microflows, pages, integrations (consumed and published web services), Java actions, custom widgets, security constraints, and so on. Anything you can access with Studio Pro, and all the technical details we abstract away in the UI, are part of the app model.

When analyzing app models you get a lot of power: you can access every tiny detail in the model so that you can reason about the entire model, analyze it for quality, or export it completely.

{{% alert color="info" %}}

Because we provide full read-write access, you can also break the model easily. We have taken measures against this, of course, and it is safe to use on most of the metamodel. However, Mendix recommends only doing read access actions on the following metamodel components, because it is easy to create an invalid model:

* Consumed and published web services
* XML schemas
* Import and export mappings
* Custom widgets
* Rest services: PublishedRestService is an unsupported, experimental feature.

When changing these components, make sure to use the [reverse engineering tool](/apidocs-mxsdk/mxsdk/generating-code-from-the-model/) to increase your chances of successfully building a script that creates valid models.

{{% /alert %}}

## Getting Started

### Quick Setup

To set up the Mendix Platform and Model SDKs, perform the following steps using a command line console.

1. `npm init --yes`
2. `npm install -g typescript`
3. `npm install mendixmodelsdk mendixplatformsdk when @types/when --save`
4. `tsc --init`

### Detailed Resources

For detailed information on getting started with the Mendix Platform SDK and Mendix Model SDK, see [How to Set Up Your Development Environment](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/).
