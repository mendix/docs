---
title: "Best Practices for Building Connectors"
url: /appstore/creating-content/connector-guide-best-practices/
weight: 7
tags: ["connectors", "data hub", "studio pro", "build", "connector guide", "best practices"]
---

## 1 Introduction

In [Building Connectors](/appstore/creating-content/connector-guide-build/), you learned about the background and basic steps of building connectors. This guide will go into more detail and explore recommended practices for building, testing, and distributing connectors. 

## 2 App Setup {#app-setup}

This section dives into best practices for setting up your app in Studio Pro. For the basic instructions, see the [Setting Up Your App](/appstore/creating-content/connector-guide-build/#app-setup) section of *Building Connectors*.

### 2.1 Studio Pro Version

For people to use your connector, ensure that you are not only servicing toward end-users that have the latest version. Try to support the latest [LTS](/releasenotes/studio-pro/lts-mts/) version, or if possible even older supported versions. 

The only reason to deviate from this is when your connector requires a certain platform functionality that is only available in a newer version, or requires another module that is only available on a newer version. In that case, use that newer version as your Mendix required version.

### 2.2 Modules in the App

Create a Mendix app in Studio Pro with the main connector module and a testing module. You can also optionally add an example module showing some use cases.

* Name the *main module* how you want it to appear in apps after others import your module. This module will contain all the logic to let your connector function in projects that import it.
* The *testing module* has microflows, pages, and Java code to test your module's functionality without having to add the test logic to the module that you will later export and publish.
* The *example module* can be published next to the main connector module to help end-users better understand the implementation of your connector module, or to try it out without having to do too much configuration from the start.

#### 2.2.1 Main Connector Module Setup {#main-setup}

We recommend that the *main module* for your connector include the following:

* **_Docs** (folder) – contains documentation or a reference to documentation and a version indicator
    * **ReadMe** (snippet) – used to give a reference to documentation and/or some direct documentation on how to use the module
    * **[ModuleName]_Version** (string constant) – replace the [ModuleName] part with your module name and fill the value with the version of the module using the same standard as the Mendix Marketplace 1.2.3 (see the [Versioning](#versioning) section below)
        * As an alternative to the version constant, you can place a subfolder with the version indication
* **Private** (folder)– indicates what other developers should not touch when implementing your module by placing all of that logic in this folder
* **UseMe** (folder) – contains everything the implementing developer could use to implement your module in their application, and might include subfolders for **Microflows**, **Pages**, **Snippets**, **Templates**, and **Constants**
  

Your **App Explorer** should look like this after initial setup:
    
{{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/app-initial-setup.png" >}}

{{% alert color="info" %}}
This project folder structure example is based on the **Blank Web App** starter app and contains Mendix Marketplace modules that your project might not have. The important Marketplace module that is shown is the [Unit Testing](/appstore/modules/unit-testing/) module for testing purposes.
{{% /alert %}}

#### 2.2.2 App Root Setup {#root-setup}

We recommend that you add additional folders to the root of your project (on disk). These include the following:
* **DIST** – contains the releases of your module kept for reference
* **MarketplaceResources** – contains all the assets used in the Mendix Marketplace (except for the release packages), including screenshots, videos, and reference documents

The app root of your **App Explorer** should look like this after root setup:

{{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/app-post-setup.png" >}}

#### 2.2.3 Importing Dependency Modules

Use as few dependency modules as possible. When you must use one, make sure they are either maintained by your own company (when creating a company-only connector) and/or platform-supported so users are not left unsupported. Otherwise, you might end up having to maintain those public non-platform supported modules to ensure that your connector operates properly.

### 2.3 Adding the App to Version Control

Add the app to [Team Server](/refguide/version-control/#team-server) (or GitHub) version control, if you have not already done so when creating the app. 

We recommend that you have a separate public Git repository next to your private Team Server SVN/Git repository, so that you can continue committing and applying changes while you only push to the public repository for a new release to the Marketplace. The automated integration with GitHub from the Marketplace makes this a good option for your public-facing Git repository.

### 2.4 Working with Java-Intensive Apps

For Java-intensive apps, consider creating an **Implementation** sub-module to keep core implementation separate. You can also make the module a Gradle project in order to better manage dependencies and release pipeline. Create the *gradle.build* file to manage Java library dependencies and cleanup of the **userlib** folder for export. For further information, see [Extend App Setup for Building Connectors with Java](#extend-app-java) below.

## 3 Development

This section explores best practices for connector development. You can develop connectors using Java or using Mendix.

### 3.1 Developing Connectors Using Java

Implementing the bulk of the functionality in Java has the following benefits: 

* Complexity is hidden from end-users and apps are easier to understand.     
{{% alert color="info" %}}
Mendix apps should focus on solving the business requirements. Generic technical constructs should be hidden from the developers. Currently, Java is the best way to achieve this. A module does not have to ship the Java source for its Java functionality. You can also make a (hidden) *.jar* in another app, and place that in the connector module **user lib**.
{{% /alert %}}
* End-users are less likely to change it.
* You can use [unit tests](#unit-testing).

#### 3.1.1 Extending App Setup for Building Connectors with Java {#extend-app-java}

You can extend your app to work with Java and Gradle.

1.   Add an **Implementation** folder next to other app folders. 

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/implementation-folder.png" >}}

2.   Set up an  **Implementation** folder as a Gradle `java-library` project. For details, see Gradle documentation on [Building Java Libraries Sample](https://docs.gradle.org/current/samples/sample_building_java_libraries.html#run_the_init_task). This is the expansion of the **Implementation** folder:

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/gradle-library.png" >}}
     
     The **Implementation** folder is now a self contained Gradle project which can be opened in any IDE which understands Gradle and expanded with any code you like.

3.   Build the **Implementation** folder and place the resulting *.jar* to the **userlib** folder. 

     If your implementation has additional dependencies, consider creating one `fat jar`  containing all dependent *.jar* files.     
{{% alert color="info" %}}
All modules have their *.jar* files in the **userlib** folder. In order to specify that this *.jar* is being used by your connector module, add an additional text file named `<jar-file-name>-<modulename>.requiredLib` .
{{% /alert %}}

4.   After implementation libraries are placed into the **userlib** folder, they are available in the Mendix application classpath so they can be used in a Java action in your connector module.

You can also also extend your app with Gradle and add the **Implementation** project as a sub-module. In this case, your implementation project becomes part of your Mendix app. You can use it in Java actions without having to copy the *.jar* files to the **userlib** folder. 

{{% alert color="warning" %}}
You must have the *.jar* file placed in the  **userlib** folder before exporting the connector module. Otherwise, **Implementation** *.jar* files will not be packaged with the module.
{{% /alert %}}

A self-contained Gradle project can do unit testing and integration testing in the same way as you would do in any other Java project. See the [Testing](#testing) section of this document for best testing practices.

### 3.2 Developing Connectors with Mendix

While Java is likely going to be a primary choice for building your connector modules, it is not your only option. Lucky you!

#### 3.2.1 Making Microflows Available as Microflow or Workflow Activities

To ensure that end-users can reuse your Mendix build logic as easily as possible, you will need to make microflows available as microflow or workflow activities (see the [Triggering a Workflow via a Microflow](/refguide/workflows/#trigger-microflow) section of *Workflows*).

Ensure that a microflow is visible in the **Toolbox** in the [Expose as microflow action](/refguide/java-actions/#expose-microflow-action) section of the microflow properties. You can do this by right-clicking in the whitespace of your microflow canvas. Additionally, you can specify a caption for the action, a category for the **Toolbox**, and an icon. These will be used in the **Toolbox**, and also in the microflows, so these will be easy to read for the end-user:

{{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/microflow-action.png" >}}

After you [expose as microflow action](/refguide/java-actions/#expose-microflow-action), this can be dragged and dropped inside another microflow.

If you create functionality that requires for example REST API integrations or complex data processing, make sure you have well-documented microflows connecting your  *public* part of the module to the  *private* part. By doing this, you can shield the implementing developer from having to understand the REST API integration or complex data processing logic. 

#### 3.2.2 Naming and Choice of Icon

Make sure the name of your category matches the name of the category for similar functionality, and that the name of the caption for your microflow or workflow exposed action does not overlap with others.

The icon should give instant recognition to your function. Make sure that it square and 16 by 16 pixels. This is very small, so try not to overdo it on the details.

#### 3.2.3 Structuring the Usage of Your Connector

As stated in the [Main Connector Module Setup](#main-setup) section, each connector build will have a  **UseMe** folder where you expose the logic that users of your connector module need when implementing your module. You have the ability to expose your microflows and Java actions in the toolbox. This means that users will be able to use your microflows and Java actions as microflow activities or workflow system tasks. You can also add page templates that are reusable.

When exposing your microflows and Java actions, you need to ensure that end-users will be able to find them easily. As an example, take a look at how the category, icon, and name are listed for platform-supported items. Add documentation to your input parameters and for the full Java action/Microflow. This is part of the platform end-users will be able to access easily while using your Java action/microflow activities.

For page templates, make sure to use a representative image, define a category that makes sense based on your module usage, and give a name that makes the template easily recognizable.


### 3.3 Logging

When something goes wrong or the module needs to expose information that it is unable to expose via the regular outputs, logging is a good option. Make sure your connector uses one log node for all the log messages if they are logged from the Java code or the Mendix code. 

Do make sure that you utilize the right log levels:

* `CRITICAL` – when the thing that goes wrong harms the stability of the application
* `ERROR` – when an error occurs that the process the end-user is executing via your connector cannot recover from
* `WARNING` – when something went wrong, but the process can finish anyway
* `INFO` – useful information that should always appear in log files
* `DEBUG` – when the user needs to determine why the connector is not working as expected
* `TRACE` – used to determine why the implementation is not working as expected

### 3.4 Data Storage

Depending on your module's functionality, you might need to store data in the end-user's application. The downside is that end-users might delete your module to resolve issues such as **userlib** conflicts. We advise limiting the amount of data stored in persistable entities and passing the data via your exposed logic to the end-user's application logic instead. Then, the user may decide to store it or only use it during a process. 

### 3.5 Task Queue

Actions that may be batched or divided over multiple threads due to a large load or volume should be offloaded to the [task queue](/refguide/task-queue/). Using this method, you can offload multiple tasks at once to multiple instances and over multiple threads. You can also run these tasks in the background without the user request waiting for it. Make sure that the end-user is aware that something is going on by setting a certain Task Status, or maybe implementing a progress log.

If you are using Studio Pro [8.18](/releasenotes/studio-pro/8.18/) or older, you can consider using the process queue. See the [Replacing Process Queue](/refguide/task-queue/#process-queue) section of *Task Queue* for the difference between these functionalities.

### 3.6 Persistable Entities

If possible, avoid storing persistable data into persistable entities for your connector module. Developers will remove modules when troubleshooting Java compile issues. If they add them back, data stored in persistable entities is lost. 

It is better to use non-persistable entities and let the user decide how to store any data passed back from your connector in their own domain model.

### 3.7 Toolbox Actions and Non-Persistable Entities (NPEs)

Toolbox actions need clear naming, consistent categorization, and documentation, and NPEs should be well-organized visually.

### 3.8 Dependencies

Given that there is no dependency management between Mendix modules, try to minimize the number of dependencies your module has on other modules. If you do have to depend on other modules, make sure those modules are well-maintained by you or by Mendix themselves. Introducing another community-supported module as a dependent module might be too much of a risk for developers wanting to use your module.

Any dependencies your module has should be well documented including the minimum required version to be used. It is also recommended to use the *.RequiredLib* files that Mendix uses for platform-supported modules, best handled with a build script like Gradle. To learn more about working with Gradle, see [Extending App Setup for Building Connectors with Java](#extend-app-java).

### 3.9 IP Protection

Right now, you will not be able to protect your IP or prevent end-users from changing any logic that you ship in a module using Mendix tooling. Access to this functionality is currently limited and can be gained through the [Mendix Vendor Program](/appstore/creating-content/vendor-program/).

If protecting your IP or preventing end-users from changing your logic is not a requirement, you can use all the tooling that Mendix provides to build a connector using available Mendix tools. If you want IP protection today, you need to implement the sensitive parts of the module in a hidden Java library. 

### 3.10 Performance Considerations

Assuming your connector will be processing large sets of data, be aware of how you want to have that data flow through. 

#### 3.10.1 Memory Usage

When importing large datasets into Mendix application, use streamable formats to avoid overconsumption of memory.

#### 3.10.2 Pagination

If using NPEs, data retrieved by the connector is loaded into memory, so it is important to avoid requesting large amounts of data from an underlying system in a single call. Limiting or paginating the size of the retrieved data will lead to better performance for the Mendix app. Use server-side pagination for search results.

To provide a proper user experience, the amount of data loaded and rendered on the page needs to be limited. A typical page size of 25 objects or 100 objects is recommend, with "load more" and filter/search options for optimized navigation through the dataset.

#### 3.10.3 Import Mappings (Deep Structures)

Mendix does not support import mappings for recursive structure. Consider simplifying the connector domain model so that import mapping is possible and does not cause performance overhead when data is serialized into Mendix entities.

#### 3.10.4 Caching

Use caching for frequently retrieved objects to reduce redundant database actions.

#### 3.10.5 Domain Model

A connector exposes the data of underlying system using its domain model. Consider the following during the domain model design so that app performs well:

* Do not expose the full data model complexity of the underlying source system in the connector domain model to facilitate easy data exchange. Try to only expose those pieces that are relevant for implementing your connector inside of the application of the implementing developer.
* Keep connector logic (Java actions code, microflows) as light as possible. You need the ability to properly connect, but overcomplicating connector logic will be more difficult to implement.
* Limit levels of inheritance and associations to not more than two, using persistable entities. In case of NPEs, this is not an issue, so consider using NPEs where possible.
* Minimize the use of reference set (many-to-many) associations. Mendix retrieves the IDs (per row for a list retrieve) on every query. As a result, many references—and especially reference sets—cause extra queries and thus extra load on the database.
* Consider adding indices where relevant. And make sure to add them in a way that they make sense with the querying logic in your connector and/or use cases for implementing apps.
* Keep your persistable entities from growing too large. You may do this by adding a cleanup scheduled event scheduled event, which you should make configurable via constants (for example, for the batch size used to remove {x} amount of objects at a time).
* Add a flexible but secure set of entity access rules based on the module roles that you add for access to the module. Keep in mind the use cases for your connector. If you are able to avoid any persistable data, that is recommended. 

## 4 Configuration

Configuration should ensure that your connector can be used in different settings without changes to the module itself. This means that upon deployment or after deployment your connector can be configured to connect to the relevant services. 

Using constants is the way to deal with configuration that aligns with the [Twelve-Factor Architecture](https://www.mendix.com/evaluation-guide/enterprise-capabilities/twelve-factor-architecture/) cloud-native approach.

### 4.1 Simple Configuration

When you are looking for a simple configuration, such as a URL, username, or password, you can use [constants](/refguide/constants/). Constants are ideal for simple flat configurations.

##### 4.1.1 Simple Configuration with a Free App Environment

When using constants in combination with a Free App, you can use the settings profile to allow for different configuration.

1.   Create a constant.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/simple-config-constant.png" >}}

2.   Set the value of the constant to the value you want to use in your free cloud node.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/simple-config-value.png" >}}

3.   Open your application **Settings**. Click **Duplicate** or **New** to create a new configuration for your local usage.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/simple-config-settings.png" >}}

4.   In your configuration, open the **Constants** tab and click **New**.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/simple-config-new-constants.png" >}}

5.   Look up and select your constant.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/simple-config-select-constant.png" >}}

6.   Change the configuration value of your constant to the value you want to use on your local environment.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/simple-config-change-value.png" >}}

7.   Save all configuration and publish your application to your free node. When you run locally, Studio Pro will now use the **Active** configuration, while the free cloud node will keep using the value you specified in the **App Explorer**.

### 4.2 Complex Configuration

You might need a more sophisticated configuration to connect to external systems, either because you will need to have dozens of constants or you want to be able to connect to multiple endpoints without having to replicate your constants each time. You will have to maintain these through configuration tables.

#### 4.2.1 Disadvantages of Complex Configuration

The following are the disadvantages of complex configuration:

* Configuration in the database or the codebase means it is more difficult to deploy your connector/app just to any new environment
* Manual configuration could cause more mistakes
* Restoring a database to a different environment when the configuration is stored in the database could cause unwanted behavior

One big risk of using the database to store configuration is something we have all seen go wrong at some point in time: test data going out to production users, or worse.

#### 4.2.2 Advantages of Complex Configuration

The following are the advantages of complex configuration: 

* More complex configuration then you could ever capture in constants
* Easy runtime changes of the configuration
* Option to add wizards/helper flows to guide the user with the configuration

#### 4.2.3 Setting Up Complex Configuration

The following steps walk you through complex configuration: 

1.   Set up a **Configuration** entity.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/complex-config-entity.png" >}}

2.   Create the microflow. Have a single microflow called **DS_GetOrCreateSettings** that is the only place in your application to acquire your settings. This microflow would retrieve your settings from the database and creates it if this does exist with appropriate default values.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/complex-config-create-microflow.png" >}}

3.   Set up security on the entity and the microflow.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/complex-config-security.png" >}}

     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/connector-guide-best-practices/complex-config-security-2.png" >}}

4.   Set up the administrator page. Have an administration page to manage the configuration. For maximum reusability, have all configuration settings available in a single snippet so your consumer can combine all admin sections from all components into a single area in their application.

5.   Encrypt the password and other sensitive information.

##### 4.2.3.1 Further Considerations

When possible, create a microflow to set up the default or starting configuration for your consumers. Consider adding logic so you can code the configuration in a microflow to easily configure from your code base.

If possible, add an export/import option for the configuration to safely move the configuration between environments. This could be achieved via a JSON export/import of the configuration data.

## 5 Security

Security for components should be set up in a generic, granular, and secure way. When choosing your module roles, think about the most granular configuration, allowing end-users maximum flexibility in setting up roles. 

### 5.1 Module Security

The following recommendations apply to module security:

* Module roles should always be set up even if there is limited or no UI to allow the user to extend your component without having to customize. 
* Use clear granular roles, in which the role **Documentation** field clearly explains the purpose of each role.
* Keep security as simple as possible. Find a balance between granularity and simplicity. 
* Always keep configuration and data access separate. In most organizations, administrators should not have access to the data. If your organization is different, you can always combine module roles but consumers cannot split them.
* Make sure to [implement best practices for app security](/howto/security/best-practices-security/).

See [Module Security](/refguide/module-security/) for more detailed information.

### 5.2 Passwords and Other API keys

If you store a password or API keys for your endpoint, always encrypt the password and API keys using the [Encryption](/appstore/modules/encryption/) module.

### 5.3 Typical Security Schemes

There are several security schemes you might encounter when building a connector to an external application.

#### 5.3.1 Client Credentials

Security via client credentials is a very basic security method. Given that you use the login name and password, the only protection when sending it over to the service you are integrating with is an encrypted connection over SSL. If that is unavailable, make sure to never use this type of encryption. 

#### 5.3.2 API Tokens

API tokens help when securing an API. But an API payload sent in plain text could still be intercepted. Only use API tokens when you have at least an SSL connection. 

#### 5.3.3 OAuth

OAuth comes in two types. In the first, the user does a login to the service providing the OAuth authentication to give access to their data on a per-user basis. The second type provides a public and private key with access tokens for server-to-server communication. 

OAuth is a very secure method, because the secret key is never exchanged during API requests. As long as you store the secret key safely in your own app, it will not be possible to hijack your credentials for the API provider. 

#### 5.3.4 SAML
The [SAML](/appstore/modules/saml/) module, available on the Mendix Marketplace, can be used as a replacement or extension of your supported authentication methods.

## 6 Testing {#testing}

You can test Mendix by calling microflows with the [Unit Testing](/appstore/modules/unit-testing/) module for whole pieces of functionality. Use unit tests for smaller, more targeted tests at the method-level of your Java code.

As with any automated testing, it is a great supplement for capturing known, expected behavior. For capturing known unknowns and unknown unknowns, we recommend risk-based exploratory testing.

### 6.1 Testing Microflows
Use the Mendix app where you built the module to test your module. The Unit Testing module can help call microflows and actions to aid in testing. See [How to Test Microflows Using the Unit Testing Module](/howto/testing/testing-microflows-using-the-unittesting-module/) for more information.

### 6.2 Java Unit Tests {#unit-testing}
Java unit tests are a good way to automate the testing of your Java code. This is helpful when you extend your Mendix app or connector with Java actions.

#### 6.2.1 Java Unit Testing Tools
The following tools are part of the testing process of custom Java code in your Mendix app:

* [JUnit](https://junit.org/junit5/) — This allows you to run Java unit tests easily.
* [Mockito](https://site.mockito.org/) — This allows you to mock Java classes. You can fake a class during a test so that it thinks that it deals with a real class, while it is actually just behaving like one.
* [JaCoCo](https://www.jacoco.org/jacoco/trunk/index.html) (Java Code Coverage) — This helps you check how well your code is covered by tests.
* Gradle — This pulls everything together to manage Java dependencies, and provides a way to work with JUnit and Mockito.

Gradle can handle managing Java dependencies and running [JUnit](http://junit.org) tests. Read about setting up Gradle in [Extending App Setup for Building Connectors with Java](#extend-app-java). If you have a pipeline, we recommend running your tests as part of it. 

#### 6.2.2 Using the Java Unit Test Reference

Mendix apps need `Core` classes, and the [Core API](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html) allows you to do things that you usually do in a microflow, like committing an object. `CoreProxy` serves as a mockable layer between your Java logic and the `Core` API. 

Our [Java unit test reference](https://Github.com/mendixlabs/javaunittestreference) is available to help you through this process. `MendixUnitTestBase.java` is extendable and reusable for your own purposes. When extended, it enables Mockito on your test classes and mocks `Core` API behavior.  This does the following:

* Checks that your code sends a certain log message to a log node
* Verifies that your code calls a microflow with correct parameters
* Makes constants available to your Java code

{{% alert color="info" %}}
The Java unit test reference has been tested up to and including Studio Pro [9.12](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

Java unit testing is discussed in more detail in this Mendix World presentation, [Run Modern Unit Tests for Your Custom Java Actions](https://events.mendixworld.com/widget/mendix/world21/catalog/session/1615903746739001d8JX). You will need to register with your business email address to view this video.

#### 6.2.3 Writing Java Code

When writing Java code, try to use as much Mendix-independent logic as possible. This helps with testability, so you do not have to mock Mendix Core to unit test the Java code. 

If you code the bulk of the behavior in generic Java classes that can run without Mendix, development and testing becomes a lot simpler and faster. There is no need to run your Mendix app to test, and you can also rely on  Java JUnit tests for testing.

For another example of a Java unit test, see the [Slack Connector test](https://Github.com/ako/SlackConnector/blob/master/javasource/testslackconnector/tests/TestSlackConnector.java).

## 7 Release and Versioning

This section addresses best practices for releasing your connector and using a versioning system. For the basic instructions for releasing, versioning, and distributing your connector, see the [Exporting the Connector](/appstore/creating-content/connector-guide-build/#export) and [Distributing the Connector](/appstore/creating-content/connector-guide-build/#distribute) sections in *Building Connectors*. 

### 7.1 Release

Ensure a new release includes the following:

* An easy upgrade path
* The version number of the package

### 7.2 Versioning {#versioning}

The [Update Existing Marketplace Content](/appstore/general/share-app-store-content/#updating) section of *Share Marketplace Content* provides explanations of the recommended versioning system. The following points go into more detail on the versioning number system:

* *Major version* — This is the first digit. This number goes up when you release major breaking changes, or at the very least a major new feature, as part of your connector. Determining what is major is up to you. You can deploy minor/patch versions for older major versions when you have bugs that need resolving.

* *Minor version* — This is the second digit. This number goes up when you release minor changes that do not break backwards compatibility, fixes some bugs, or adds small new features. Depending on your development cycle, this could be intermediate releases in smaller batches.

* *Patch version* — This is the third digit. This number goes up when you really have to patch a bug for a specific version and it cannot be released as part of your next major or minor version. While it is allowed to add new patch versions to older major versions, you cannot add patch versions to older minor versions within the Marketplace.

## 8 Licensing

Follow your Java Libraries and default to Mendix EULA. Also, we recommend that you do not use copy-left licenses for commercially available connectors.
