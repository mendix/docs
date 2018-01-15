---
title: "Tutorial for the Mendix SDK"
category: "Mendix Platform SDK"
---

## 1 Introduction

Before the Mendix SDK can make your life easier, there's some learning to do. Follow the step-by-step guides listed below to learn everything you need about using the SDK. After finishing the tutorial, you'll not only know how to use the SDK, but also how all the parts fit together.

If you'd rather find your own way, just scroll through this page to get an overview of the available documents and examples, and start wherever you want. To get set up quickly, take a look at [Setting Up Your Development Environment](setting-up-your-development-environment).

## 2 Tutorial

### 2.1 Setting Up Your Development Environment

To start working with the Mendix SDK, you'll first need to install the SDK and its dependencies. Luckily, that's easily done, as you can see in [Setting Up Your Development Environment](setting-up-your-development-environment).

### 2.2 Creating Your First Script

Following the installation of the Mendix SDK, you will get a script that will:

*   create a new app
*   make that app available as an online workingCopy
*   make a simple change to that workingCopy
*   commit the change to the workingCopy

You'll be able to run that script and see the results in the Desktop Modeler.

For details, see [Creating Your First Script](creating-your-first-script)

### 2.3 Creating the Domain Model

Now that you have an idea about what the Mendix SDK can do, it's time to dig a little deeper. In this step you will create a new app that's a little more complicated: it will contain a domain model with several entities and inheritance. Through this example we will explain how exactly the Model SDK API and the Meta Model are related. This will give you the conceptual framework needed to go through the reference documentation of both the [metamodel](reference-documentation) and the [Mendix Model SDK](https://apidocs.mendix.com/modelsdk/latest/index.html).

To learn how to navigate to the main documentation sources, refer to the [Creating the Domain Model](creating-the-domain-model).

## 3 Taking the Mendix SDK Further

### 3.1 Development Workflow

The script you used in the Creating your first script step was doing a full round-trip. It created an app, made it available as a working copy and committed it back to the TeamServer after making changes. Depending on what exactly you're using the SDK for (see [Use Case Examples](use-case-examples)), this may or may not be a good idea. If you're interested in, for instance, analyzing your model, you want to start from an existing project instead of a newly created app and you won't have any changes to your model to commit.

### 3.2 Manipulating Existing Models

For an explanation on this topic, see [Manipulating Existing Models](manipulating-existing-models).

Some more explanation on manipulating existing models can be found in these documents:

*   [Changing Things in the Model](changing-things-in-the-model)
*   [Closing the Server Connection](closing-the-server-connection)
*   [Finding Things in the Model](finding-things-in-the-model)
*   [Loading Units and Elements](loading-units-and-elements)

### 3.3 Generating Code from the Model

The reverse engineering tool as described in [Generating Code from the Model](generating-code-from-the-model) will take one of your existing apps and create the Mendix SDK code that will create that exact same app. Use this tool to quickly bootstrap scripts based on your existing apps, which can then be customized to your needs.
