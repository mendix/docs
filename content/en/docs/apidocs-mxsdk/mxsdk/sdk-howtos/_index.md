---
title: "SDK How-tos"
url: /apidocs-mxsdk/mxsdk/sdk-howtos/
weight: 4
---

## Introduction

Before the Mendix SDK can make your life easier, there's some learning to do. Follow the step-by-step how-tos listed below to learn everything you need about using the SDK. After finishing the how-tos, you'll not only know how to use the SDK, but also how all the parts fit together.

If you'd rather find your own way, just scroll through this page to get an overview of the available documents and examples, and start wherever you want. To get set up quickly, take a look at [How to Set Up Your Development Environment](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/).

## How-tos

### How to Set Up Your Development Environment

To start working with the Mendix SDK, you'll first need to install the SDK and its dependencies. Luckily, that's easily done, as you can see in [How to Set Up Your Development Environment](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/).

### How to Create Your First Script

Following the installation of the Mendix SDK, you will get a script that will:

* create a new app
* make that app available as an online workingCopy
* make a simple change to that workingCopy
* commit the change to the workingCopy

You'll be able to run that script and see the results in Studio Pro.

For details, see [How to Create Your First Script](/apidocs-mxsdk/mxsdk/creating-your-first-script/)

### How to Create the Domain Model

Now that you have an idea about what the Mendix SDK can do, it's time to dig a little deeper. In this step you will create a new app that's a little more complicated: it will contain a domain model with several entities and inheritance. Through this example we will explain how exactly the Model SDK API and the Meta Model are related. This will give you the conceptual framework needed to go through the reference documentation of both the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/sdk-refguide/) and the [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html).

To learn how to navigate to the main documentation sources, refer to the [How to Create the Domain Model](/apidocs-mxsdk/mxsdk/creating-the-domain-model/).

## How to Take the Mendix SDK Further

### Development Workflow

The script you used in the Creating your first script step was doing a full round-trip. It created an app, made it available as a working copy and committed it back to the TeamServer after making changes. Depending on what exactly you're using the SDK for (see [Use Case Examples](/apidocs-mxsdk/mxsdk/sdk-use-cases/)), this may or may not be a good idea. If you are interested in, for instance, analyzing your model, you want to start from an existing app instead of a newly created app and you will not have any changes to your model to commit.

### How to Manipulate Existing Models

For an explanation on this topic, see [How to Manipulate Existing Models](/apidocs-mxsdk/mxsdk/manipulating-existing-models/).

Some more explanation on manipulating existing models can be found in these documents:

* [How to Change Things in the Model](/apidocs-mxsdk/mxsdk/changing-things-in-the-model/)
* [How to Close the Server Connection](/apidocs-mxsdk/mxsdk/closing-the-server-connection/)
* [How to Find Things in the Model](/apidocs-mxsdk/mxsdk/finding-things-in-the-model/)
* [How to Load Units and Elements](/apidocs-mxsdk/mxsdk/loading-units-and-elements/)

### How to Generate Code from the Model

The reverse engineering tool as described in [How to Generate Code from the Model](/apidocs-mxsdk/mxsdk/generating-code-from-the-model/) will take one of your existing apps and create the Mendix SDK code that will create that exact same app. Use this tool to quickly bootstrap scripts based on your existing apps, which can then be customized to your needs.
