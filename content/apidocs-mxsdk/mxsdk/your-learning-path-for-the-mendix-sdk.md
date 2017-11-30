---
title: "Your Learning Path for the Mendix SDK"
category: "Mendix Platform SDK"
---
Before the Mendix SDK can make your life easier, there's some learning to do. Follow the step-by-step guides listed below to learn everything you need about using the SDK. After finishing the learning path, you'll not only know how to use the SDK, but also how all the parts fit together.

If you'd rather find your own way, just scroll through this page to get an overview of the available documents and examples, and start wherever you want. To get set up quickly, we suggest taking a look at [for the impatient](setting-up-your-development-environment).

## Learning Path

### [Setting up your development environment](setting-up-your-development-environment)

To start working with the Mendix SDK, you'll first need to install the SDK and its dependencies. Luckily, that's easily done, as you can see on the [Setting up your development environment](setting-up-your-development-environment) page.

### [Creating your first script](creating-your-first-script)

Following the installation of the Mendix SDK you will get a script that will:

*   create a new app
*   make that app available as an online workingCopy
*   make a simple change to that workingCopy
*   commit the change to the workingCopy

You'll be able to run that script and see the results in the Desktop Modeler.

### [Creating the domain model](creating-the-domain-model)

Now that you have an idea about what the Mendix SDK can do, it's time to dig a little deeper. In this step you will create a new app that's a little more complicated: it will contain a domain model with several entities and inheritance. Through this example we will explain how exactly the Model SDK API and the Meta Model are related. This will give you the conceptual framework needed to go through the reference documentation of both the [Meta Model](reference-documentation) and the [Mendix Model SDK](https://apidocs.mendix.com/modelsdk/latest/index.html).

To learn how to navigate to the main documentation sources, refer to the [Creating the domain model](creating-the-domain-model) page.

## Taking the Mendix SDK further

### Development Workflow

The script you used in the Creating your first script step was doing a full round-trip. It created an app, made it available as a working copy and committed it back to the TeamServer after making changes. Depending on what exactly you're using the SDK for (see [Use case examples](use-case-examples)), this may or may not be a good idea. If you're interested in, for instance, analyzing your model, you want to start from an existing project instead of a newly created app and you won't have any changes to your model to commit.

### [Manipulating existing models](manipulating-existing-models)

Some more explanation on manipulating existing models can be found on these sub-pages:

*   [Changing things in the model](changing-things-in-the-model)
*   [Closing the server connection](closing-the-server-connection)
*   [Finding things in the model](finding-things-in-the-model)
*   [Loading units and elements](loading-units-and-elements)

### [Generating code from the model](generating-code-from-the-model)

The [Reverse engineering tool](generating-code-from-the-model) will take one of your existing apps and create the Mendix SDK code that will create that exact same app. Use this tool to quickly bootstrap scripts based on your existing apps, which can then be customized to your needs.
