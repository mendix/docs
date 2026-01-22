---
title: "App Setup"
url: /appstore/creating-content/best-practices/app-setup/
weight: 8
---

## Introduction {#app-setup}

This section dives into best practices for setting up your app in Studio Pro. For basic instructions, refer to the [Setting Up Your App](/appstore/creating-content/connector-guide-build/#app-setup) section of *Creating Connectors*.

## Studio Pro Version

For people to use your connector, ensure that you are not only targeting end-users that have the latest version Studio Pro. Try to support the latest [LTS](/releasenotes/studio-pro/lts-mts/) version and, if possible, even older supported versions. 

The only reason to deviate from this is when your connector requires a certain platform functionality that is only available in a newer version, or requires another module that is only available on a newer version. In that case, use that newer version as your Mendix required version.

## Modules in the App

Create a Mendix app in Studio Pro with the main connector module and a testing module. You can also add an example module showing some use cases.

* The main module contains all the logic needed to let your connector function in apps that import it. Give the main module the name you want to appear in apps after others import your module.
* The testing module has microflows, pages, and Java code to test your module's functionality. This means that you will not have to add the test logic to the module that you will later export and publish.
* You can publish the example module next to the connector main module and testing module to help end-users better understand the implementation of your connector module, or to try it out without having to do too much configuration from the start.

### Setting Up the Main Connector Module {#main-setup}

Mendix recommends that the main module for your connector include the following:

* **_Docs** (folder) – Contains documentation or a reference to documentation, and a version indicator.
    * **ReadMe** (snippet) – Used to give a reference to documentation and/or some direct documentation on how to use the module.
    * **[ModuleName]_[Version]** (string constant) – Replace [ModuleName] with the name of your module, and [Version] with the version of the module. Use the same standard as the Mendix Marketplace 1.2.3. Refer to the [Versioning](/appstore/creating-content/best-practices/releasing-versioning/#versioning) section in *Releasing and Versioning*.
        * As an alternative to the version constant, you can include a subfolder with the version indication.
* **Private** (folder) – This folder contains all the logic that other developers should not touch when implementing your module.
* **UseMe** (folder) – Contains everything the implementing developer could use to implement your module in their application. It can include subfolders for **Microflows**, **Pages**, **Snippets**, **Templates**, and **Constants**.

Your **App Explorer** should look like this after the initial setup:

{{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/app-initial-setup.png" class="no-border" >}}

{{% alert color="info" %}}
This app folder structure example is based on the **Blank Web App** starter app, and contains Mendix Marketplace modules that your app might not have. The important Marketplace module that is shown is the [Unit Testing](/appstore/modules/unit-testing/) module for testing purposes.
{{% /alert %}}

### Setting Up the App Root {#root-setup}

Mendix recommends adding additional folders to the root of your app, on disk. These include the following:

* **DIST** – This contains the releases of your module kept for reference.
* **MarketplaceResources** – This contains all the assets used in the Mendix Marketplace, such as screenshots, videos, and reference documents. It does not contain the release packages.

The app root of your **App Explorer** should look like this after root setup:

{{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/app-post-setup.png" class="no-border" >}}

### Importing Dependency Modules

Use as few dependency modules as possible. When you must use one, make sure it is either platform supported or, if you are creating a company-only connector, maintained by your own company. This ensure that users are are always supported. Otherwise, you might end up having to maintain those public non-platform supported modules to ensure that your connector operates properly.

## Adding the App to Version Control

If you have not already added your app, add it to the [Team Server](/refguide/version-control/#team-server). An alternative solution that Mendix recommends is having a separate public Git repository next to your private Team Server Git repository. This way, you can continue committing and applying changes while you only push to the public repository for a new release to the Marketplace. The automated integration with GitHub from the Marketplace makes this a good option for your public-facing Git repository.

## Working with Java-Intensive Apps

For Java-intensive apps, consider creating an **Implementation** submodule to keep core implementation separate. You can also make the module a Gradle project in order to better manage dependencies and the release pipeline. Create the *gradle.build* file to manage Java library dependencies and the cleanup of the **userlib** folder for export. For further information, refer to [Extending App Setup for Building Connectors with Java](/appstore/creating-content/best-practices/development/#extend-app-java) in *Development*.

## Licensing

Follow your Java Libraries and default to Mendix EULA. Also, Mendix recommends that you do not use copy-left licenses for commercially available connectors.
