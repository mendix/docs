---
title: "Best Practices for Building Connectors"
url: /appstore/creating-content/connector-guide-best-practices/
parent: "Building Connectors"
tags: ["connectors", "data hub", "studio pro", "build", "connector guide", "best practices"]
---

## 1 Introduction

In [Building Connectors](/app-store/creating-content/connector-guide-build/), you learned about the background and basic steps of building connectors. This guide will go into more detail and explore recommended practices for building, testing, and distributing connectors. 

## 2 App Setup: Best Practices {#app-setup}

This section dives into best practices for setting up your app in Studio Pro. For the basic instructions, see the [Setting Up Your App](/appstore/creating-content/connector-guide-build/#app-setup) section of *Building Connectors*.

### 2.1 Studio Pro Version

Use the oldest version of the Studio Pro modeler that still seamlessly upgrades to the latest release. For people to use your connector, ensure that you are not only servicing towards those that have the latest version. Try to support at least the latest [LTS](/releasenotes/studio-pro/lts-mts/), or if possible even older (as long as Mendix still supports that version). 

The only reason to deviate from this is when your connector requires a certain platform functionality that is only available in a newer version, or requires another module that is only available on a newer version. In that case, use that newer version as your Mendix required version.

### 2.2 Modules in the App

Create a Mendix app in Studio Pro with main connector module and a testing module. You can also optionally add an example module showing some use cases.

* Name the *main module* how you want it to appear in projects after others import your module. This module will contain all the logic to let your connector function in projects that import it.
* The *testing module* has microflows, pages, and Java code to test your modules functionality without having to add the test logic to the module that you will later export and publish.
* The *example module* can be published next to the main connector module to help your users understand the implementation of your connector module even better, or to even try it out without having to do to much heavy lifting from the start.

#### 2.2.1 Main Connector Module Setup {#main-setup}

We recommend that the *main module* for your connector include the following:

* **_Docs** (folder) – Contains documentation or a reference to documentation and a version indicator
    * `ReadMe` (snippet) – used to give a reference to documentation and/or some direct documentation on how to use the module
    * `[ModuleName]_Version` (string constant) – replace the [ModuleName] part with your module name and fill the value with the version of the module using the same standard as the Mendix Marketplace 1.2.3 (see the [Versioning](#versioning) section below)
        * As an alternative to the version constant, you can place a sub-folder with the version indication.
* **Private** (folder)– indicates what other developers should not touch when implementing your module by placing all of that logic in this folder
* **UseMe** (folder) – contains everything the implementing developer could use to implement your module in their application, and might include subfolders for **Microflows**, **Pages**, **Snippets**, **Templates**, and **Constants**
    
Your **App Explorer** should look something like this after initial setup:
    
{{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/app-initial-setup.png" >}}

{{% alert color="info" %}}
This project folder structure example is based on the **Blank Web App** starter app and contains [Mendix Marketplace](https://marketplace.mendix.com/) modules that your project might not have. The important Marketplace module that is shown is the [Unit Testing](/appstore/modules/unit-testing/) module for testing purposes.
{{% /alert %}}

#### 2.2.2 App Root Setup {#root-setup}

We recommend that you add additional folders to the root of your project (on disk). These include the following:
* **DIST** – contains the releases of your module kept for reference
* **MarketplaceResources** – contains all the assets used in the Mendix Marketplace (except for the release packages), including screenshots, videos, and reference documents

Your app root of your **App Explorer** should look something like the after root setup:

{{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/app-post-setup.png" >}}

#### 2.2.3 Importing Dependency Modules

Use as few dependency modules as possible. When you must use one, make sure they are either maintained by your own company (when creating a company-only connector) and/or platform-supported so users are not left unsupported. Otherwise, you might end up having to maintain those public non-platform supported modules to ensure that your connector operates properly.

### 2.3 Adding the App to Version Control

Add the project to [Team Server](/refguide/version-control/#team-server) (or GitHub) version control, if you have not already done so when creating the project. 

We recommend that you have a separate public Git repository next to your private Team Server SVN/Git repository, so that you can continue committing and applying changes while you only push to the public repository for a new release to the Marketplace. The automated integration with GitHub from the Marketplace makes this a good option for your public-facing Git repository.

### 2.4 Working with Java-Intensive Apps

For Java-intensive apps, consider creating an **Implementation** sub-module to keep core implementation separate. You can also make the module a Gradle project in order to better manage dependencies and release pipeline. Create the *gradle.build* file to manage Java library dependencies and cleanup of the **userlib** folder for export. For further information, see [Extend App Setup for Building Connectors with Java](#extend-app-java) below.

## 3 Development: Best Practices

This section explores best practices for connector development. You can develop connectors using Java or using Mendix.

### 3.1 Developing Connectors Using Java

Implementing the bulk of the functionality in Java has the following benefits: 

* Complexity is hidden from users and projects are easier to understand.
    * Mendix projects should focus on solving the business requirements. Generic technical constructs should be hidden from the developers. Currently, Java is the best way to achieve this. A module does not have to ship the Java source for its Java functionality. You can also make an (obfuscated) *.jar* in another project, and place that in the connector module **user lib**.
* Users are less likely to change it.
* You can use [unit tests](#unit-testing).

#### 3.1.1 Extend App Setup for Building Connectors with Java {#extend-app-java}

You can extend your app to work with Java and Gradle.

1.   Add an **Implementation** folder next to other project folders. 

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/implementation-folder.png" >}}

2.   Set up an  **Implementation** folder as a Gradle `java-library` project. Please refer to Gradle documentation on [Building Java Libraries Sample](https://docs.gradle.org/current/samples/sample_building_java_libraries.html#run_the_init_task). This is the expansion of the **Implementation** folder:

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/gradle-library.png" >}}
     
     The **Implementation** folder is now a self contained Gradle project which can be opened in any IDE which understands Gradle and expanded with any code you like.

3.   Build the **Implementation** folder and place the resulting jar to the `userlib` folder. 

     If your implementation has additional dependencies, consider creating one `fat jar`  containing all dependent jars. Please note all modules place their jars in the `userlib` folder. In order to specify that this jar is being used by your connector module, add an additional text file named `<jar-file-name>-<modulename>.requiredLib` .

4.   After implementation libraries are placed into the `userlib` folder, they are available in the Mendix application classpath so they can be used in a Java action in your connector module.

You can also also extend your app with Gradle and add the  `Implementation` project as a sub module. In this case, your implementation project becomes part of your Mendix project. You can use it in Java actions without having to copy the jars to the  `userlib` folder. Please note that you must have the jar file placed in the  `userlib` `` folder before exporting the connector module; otherwise implementation jars will not be packaged with the module.

A self-contained Gradle project can do unit testing and integration testing in the same way as you would do in any other Java project. See the [Testing](#testing) section in this document for best testing practices.

### 3.2 Developing Connectors with Mendix

While Java is likely going to be a primary choice for building your connector modules, it is not your only option. Lucky you!

#### 3.2.1 Make Microflows Available as Microflow/Workflow Activities

To ensure that your users can reuse your Mendix build logic as easily as possible, you will need to make Microflows are available as Microflow/Workflow activities. 

To ensure a Microflow is visible in the toolbox, you can specify this in the **Expose as microflow action** section of the Microflow properties. This is only available upon right clicking in the whitespace of your Microflow canvas. Additionally, you can specify a caption for the action, a category for the toolbox and an icon. These will be used in the toolbox, and also in the microflows, so these will be easy to read for your user:

{{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/microflow-action.png" >}}

After this is exposed as microflow action, this can be dragged and dropped inside another microflow.

If you create functionality that requires for example REST API integrations or complex data processing, make sure you have well documented Microflows connecting your  `public` part of the module to the  `private` part of the module. By doing this, you can shield the implementing developer from having to understand the REST API integration or complex data processing logic. 

#### 3.2.2 Naming and Choice of Icon

Make sure the name of your category matches the name of the category for similar functionality. And that the name of the caption for your microflow/workflow exposed action does not overlap with others.

The icon should give instant recognition to your function. Make sure that it has the proper dimensions: icons are square sized and should be 16 by 16 pixels. This is very small so try not to overdo it on the details.

#### 3.2.3 Structuring the Usage of Your Connector

As stated in the [Main Connector Module Setup](#main-setup) section, each connector build will have a  **UseMe** folder where you expose the logic that users of your connector module need when implementing your module. You have the ability to expose your microflows and Java actions in the toolbox. This means that users will be able to use your microflows and Java actions as microflow activities or workflow system tasks. You can also add page templates that are reusable.

When exposing your microflows and Java actions, you need to ensure that your users will be able to find them easily. As an example, take a look at how the platform supported items are listed. Their category, icon and name. Add documentation to your input parameters and for the full Java action/Microflow. This is part of the platform your users will be able to access it easily while using your Java action/microflow activities.

For page templates, make sure to use a representative image, define a category that makes sense based on your module usage and give a name that makes the template easily recognizable.


### 3.3 Logging

When something goes wrong or the module needs to expose information that it is unable to via the regular outputs, logging is a good option. Make sure your connector uses one lognode for all the log messages if they are logged from the Java code or the Mendix code. 

Do make sure that you utilize the right log levels:

* CRITICAL – when the thing that goes wrong harms the stability of the application
* ERROR – when an error occurs that the process the user is executing via your connector can't recover from
* WARNING – when something went wrong, but the process can finish anyway
* INFO – useful information that should always appear in log files
* DEBUG – when the user needs to determine why the connector is not working as expected
* TRACE – when you as a connector author need to determine why the implementation is not working as expected

### 3.4 Data Storage

Depending on your modules functionality, you might need to store data in the users application. The downside is that users might delete your module to resolve issues such as userlibs conflicts. We advise to limit the amount of data stored in persistable entities and pass the data via your exposed logic to the user's application logic instead. Then, the user may decide to store it or only use it during a process. 

### 3.5 Task Queue

Actions that may be batched or divided over multiple threads due to a large load or volume should be offloaded to the task queue. If you are using MX 8 or older you might also consider using the process queue. Using this method you can offload multiple tasks at once to multiple instances (not with process queue) and over multiple threads. It also allows you to run these tasks in the background without the user request waiting for it. Do make sure that the user is aware that something is going on by setting a certain state or maybe even implementing a progress log.

### 3.6 Persistable Entities

If at all possible, try to avoid storing persistable data into persistable entities for your connector module. Developers will remove modules when troubleshooting Java compile issues. Even if they add them back, data stored in persistable entities would be lost. 

It is better to use Non-persistable Entities and let the user decide how to store any data passed back from your connector in their own domain model.

### 3.7 Toolbox Actions and Non-Persistable Entities (NPEs)

Toolbox actions need clear naming, consistent categorization, and documentation, and NPEs should be well-organized visually.

### 3.8 Dependencies

Given that there is no dependency management between Mendix modules, try to minimize the number of dependencies your module has on other modules. If you do have to depend on other modules, make sure those modules are well-maintained by you or by Mendix themselves. Introducing another community-supported module as a dependent module might be to much of a risk for developers wanting to use your module.

Any dependencies your module has should be well documented including the minimum required version to be used. We also suggest using the *.RequiredLib* files that we use for platform-supported Modules, best handled with a build script like Gradle. To learn more about working with Gradle, see [Extend App Setup for Building Connectors with Java](#extend-app-java).

### 3.9 IP Protection

Right now, you will not be able to protect your IP or prevent your users from changing any logic that you ship in a module using Mendix tooling. 

If protecting your IP or preventing users from changing your logic is not a requirement, you can use all the tooling that Mendix provides to build a connector using available Mendix tools. If you want IP protection today, you need to implement the sensitive parts of the module in an (obfuscated) Java library. 

### 3.10 Performance Considerations

Assuming your connector will be processing large sets of data, be aware of how you want to have that data flow through. 

#### 3.10.1 Memory Usage

When importing large datasets into Mendix application, use streamable formats to avoid overconsumption of memory.

#### 3.10.2 Pagination

If using NPEs, data retrieved by the connector is loaded into memory, so it is important to avoid requesting large amounts of data from underlying system in a single call. Limiting/Paginating the size of the retrieved data will lead to better performance for the Mendix App. Use server-side *pagination* for search results. 

To provide a proper user experience, the amount of data loaded and rendered on the page needs to be limited. A typical page size of 25 objects or 100 objects would be advised with "load more" and filter/search options for optimized navigation through the dataset.

#### 3.10.3 Import Mappings (Deep Structures)

Mendix does not support import mappings for recursive structure. Consider simplifying the connector domain model so that import mapping is possible and does not cause performance overhead when data is serialized into Mendix entities.

#### 3.10.4 Caching

Use caching for frequently retrieved objects to reduce redundant database actions.

#### 3.10.5 Domain Model

A connector exposes the data of underlying system using its domain model. Consider following during the domain model design so that app performs well:

* Do not expose the full data model complexity of the underlying source system in the connector domain model to facilitate easy data exchange. Try to only expose those pieces that are relevant for implementing your connector inside of the application of the implementing developer.
* Keep connector logic (Java actions code, microflows) as light as possible. You need the ability to properly connect, but overcomplicating connector logic will be more difficult to implement.
* Limit levels of inheritance to not more than two, and associations to not more than two, using persistable entities. In case of Non-Persistable Entities, this is not an issue, so consider using Non-Persistable Entities where possible.
* Minimize the use of reference set (many to many) associations. Mendix retrieves the IDs (per row for a list retrieve) on every query. As a result, many references—and especially reference sets—cause extra queries and thus extra load on the database
* Consider adding indices where relevant. And make sure to add them in a way that they make sense with the querying logic in your connector and/or use cases for implementing apps.
* Keep your persistable entities from growing too large. You may do this by adding a cleanup scheduled event which in turn you should make configurable via constants. For example, for the batch size used to remove x amount of objects at a time.
* Add a flexible but secure set of entity access rules based on the module roles that you add for access to the module. Keep in mind the use cases for your connector. If you are able to avoid any persistable data, at all that is even better. 

## 4 Configuration: Best Practices

Configuration should ensure that your connector can be used in different settings without changes to the module itself. This means that upon deployment or after deployment your connector can be configured to connect to the relevant services. 

Using constants is the way to deal with configuration that aligns with the [Twelve-Factor Architecture](https://www.mendix.com/evaluation-guide/enterprise-capabilities/twelve-factor-architecture/) cloud native approach.

### 4.1 Simple Configuration

When you are looking for a simple configuration, such as a URL, username, or password, you can use [constants](/refguide/constants/). Constants are ideal for simple flat configurations.

##### 4.1.1 Simple Configuration with a Sandbox

When using Constants in combination with a sandbox, you can use the settings profile to allow for different configuration.

1.   Create a [constant](/refguide/constants/).

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/simple-config-constant.png" >}}

2.   Set the value of the constant to the value you want to use in your Free Cloud Node.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/simple-config-value.png" >}}

3.   Open your application Settings and lookup your Configurations. Click **Duplicate** or **New** to create a new configuration for your local usage.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/simple-config-settings.png" >}}

4.   In your configuration, open the **Constants** tab and click **New**.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/simple-config-new-constants.png" >}}

5.   Look up and select your constant.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/simple-config-select-constant.png" >}}

6.   Change the configuration value of your constant to the value you want to use on your local environment.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/simple-config-change-value.png" >}}

7.   Save all configuration and publish your application to your Free Node. When you run locally, Studio Pro will now use the **Active** configuration, while the Free Node will keep using the value you specified in the **App Explorer**.

### 4.2 Complex Configuration

You might need a more sophisticated configuration to connect to external systems, either because you will need to have dozens of constants or you want to be able to connect to multiple endpoints without having to replicate your constants each time. You will have to maintain these through configuration tables.

#### 4.2.1 Disadvantages of Complex Configuration

- Configuration in the database or the codebase means it is more difficult to deploy your connector/app just to any new environment. 
- Manual configuration could cause more mistakes
- Restoring a DB back to a different environment when the configuration is stored in the DB could cause unwanted behaviour.
- One big risk of using the database to store configuration is something we have all seen go wrong at some point in time: test data going out to production users, or worse.

#### 4.2.2 Advantages of Complex Configuration

The following are the advantages of complex configurations: 
* More complex configuration then you could ever capture in constants
* Easy runtime changes of the configuration
* Option to add wizards/helper flows to guide the user with the configuration.

#### 4.2.3 Setting Up Complex Configuration

The following steps walk you through complex configuration: 

1.   Set up a **Configuration** entity.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/complex-config-entity.png" >}}

2.   Create the microflow.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/complex-config-create-microflow.png" >}}

     Have a single microflow called **DS_GetOrCreateSettings** that is the only place in your application to acquire your settings. This microflow would retrieve your settings from the database and creates it if this does exist with appropriate default values.

3.   Set up security on the microflow and entity.

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/complex-config-security.png" >}}

     {{< figure src="/attachments/appstore/creating-content/connector-guide-best-practices/complex-config-security.png" >}}

4.   Set up the administrator page.

     Have an administration page to manage the configuration. For maximum reusability, have all configuration settings available in a single snippet so your consumer can combine all admin sections from all components into a single area in their application.


6.   Encrypt the password and other sensitive information.

##### 4.2.3.1 Further Considerations

When possible, create a microflow to setup the default or starting configuration for your consumers. Consider adding logic so you can code the configuration in a microflow to easily configure from your code base.

If possible, add an export/import for the configuration to safely move the configuration between environments. This could be achieved via a JSON export/import of the configuration data.

 

## 5 Security: Best Practices

Security for components should be setup in a generic, granular and secure way. When choosing your module roles, think about the most granular configuration, allowing your users maximum flexibility of setting up your roles. 

### 5.1 Module Security

The following recommendations apply to module security:

* Module rules should always be setup even if there is limited to no UI to allow the user to extend your component without having to customize. 
* Use clear granular roles, where the role documentation field clearly explains the purpose of each role.
* Keep security as simple as possible. Find a balance between granularity and simplicity. 
* Always keep configuration and data access separate. In most organizations, administrators should not have access to the data. If your organization is different, you can always combine module roles but consumers cannot split them.
* Make sure to [Implement Best Practices for App Security](/howto/security/best-practices-security/).

### 5.2 Passwords and other API keys

If you store a password or API keys for your endpoint, always encrypt the password and API keys using the encryption module.

### 5.3 Typical Security Schemes

There are several security schemes you might encounter when building a connector to an external application.

#### 5.3.1 Client Credentials

Security via client credentials is a very basic security method. Given that you use the login name and password the only protection when sending it over to the service you are integration with is an encrypted connection over SSL. If that is unavailable, make sure to never use this type of encryption. 

#### 5.3.2 API Tokens

API tokens help when securing an API. But an API payload sent in plain text could still be intercepted. Only use API tokens when you have at least an SSL connection. 

#### 5.3.3 OAuth

OAuth comes in two types. In the first, the user does a login to the service providing the OAuth authentication to give access to their data on a per-user basis. The second type provides a public and private key with access tokens for server to server communication. 

OAuth is a very secure method, because the secret key is never exchanged during API requests. As long as you store the secret key safely in your own app, it will not be possible to hijack your credentials for the API provider. 

#### 5.3.4 SAML
The [SAML](https://marketplace.mendix.com/link/component/1174/) module, available on the Mendix marketplace, can be used as a replacement or extension of your supported authentication methods.

## 6 Testing: Best Practices {#testing}

You can test Mendix by calling microflows with the [UnitTesting](https://marketplace.mendix.com/link/component/390) module for whole pieces of functionality. Use unit tests for smaller, more targeted tests at the method-level of your Java code.

As with any automated testing, it is a great supplement for capturing known, expected behavior. For capturing known unknowns and unknown unknowns, we recommend risk-based exploratory testing.

### 6.1 Testing Microflows
Use the Mendix app where you built the module to test your module. The [UnitTesting](https://marketplace.mendix.com/link/component/390) module can help call microflows and actions to aid in testing. You can learn more about [Unit Testing](/appstore/modules/unit-testing/) or learn [How to Test Microflows Using the Unit Testing Module](/howto/testing/testing-microflows-using-the-unittesting-module/) in the Mendix documentation.

### 6.2 Java Unit Tests {#unit-testing}
Java unit tests are a good way to automate the testing of your Java code. This is helpful when you extend your Mendix app or connector with Java actions.

#### 6.2.1 Java Unit Testing Tools
The following tools are part of the testing process of custom Java code in your Mendix app:

1. JUnit — run Java unit tests easily
2. Mockito — mock Java classes; fake a class during a test so that it thinks that it deals with a real class, but just behaves like one
3. JaCoCo (Java Code Coverage) — how well your code is covered by tests
4. Gradle — pulls everything together manages Java dependencies, gives a way to run with JUnit and Mockito

Gradle can handle managing Java dependencies and running [JUnit](http://junit.org) tests. See more about setting up Gradle in [Extend App Setup for Building Connectors with Java](#extend-app-java). If you have a pipeline, we recommend running your tests as part of it. 

#### 6.2.2 Using the Java Unit Test Reference

Mendix apps need Core classes, and the Core API in Mendix allows you to do things that you usually do in a microflow, like committing an object. CoreProxy serves as a mockable layer between your Java logic and the core API. 

Our [Java unit test reference](https://Github.com/mendixlabs/javaunittestreference) is available to help you through this process. The MendixUnitTestBase.java is extendable and reusable for your own purposes. When extended, it enables Mockito on your test classes and mocks Core API behavior.  This does the following:

* checks that your code sends a certain log message to a log node
* verifies that your code calls a microflow with correct parameters
* makes constants available to your Java code

{{% alert color="warning" %}}
The Java unit test reference is compatible up to and including Studio Pro 9.4. Support for 9.5 and greater is in development.
{{% /alert %}}

Watch how to [run modern unit tests for your custom Java actions](https://events.mendixworld.com/widget/mendix/world21/catalog/session/1615903746739001d8JX) to see how this is implemented.

#### 6.2.3 Writing Java Code

When writing Java code, try to use as much Mendix-independent logic as possible. This helps with testability, so you do not have to mock Mendix Core to unit test the Java code. 

If you code the bulk of the behavior in generic Java classes that can run without Mendix, development and testing becomes a lot simpler and faster. There is no need to run your Mendix app to test, and you can also rely on  Java JUnit tests for testing.

For another example of a Java unit test, see the [Slack Connector test](https://Github.com/ako/SlackConnector/blob/master/javasource/testslackconnector/tests/TestSlackConnector.java).

## 7 Release and Versioning: Best Practices

This section addresses best practices for releasing your connector and using a versioning system. For the basic instructions for releasing, versioning, and distributing your connector, see the [Exporting the Connector](/appstore/creating-content/connector-guide-build/#export) and [Distributing the Connector](/appstore/creating-content/connector-guide-build/#distribute) sections in *Building Connectors*. 

### 7.1 Release

Please ensure a new release includes the following:

* an easy upgrade path
* the version number of the package

### 7.2 Versioning {#versioning}

The [Update Existing Marketplace Content](https://docs.mendix.com/appstore/general/share-app-store-content/#updating) section of *Share Marketplace Content* provides explanations of the recommended versioning system. The following points go into more detail on the versioning number system:

* *Major version* — (this is the first digit) this number goes up when you release major breaking changes, or at the very least a major new feature, as part of your connector. Determining what is major is up to you. You can deploy minor/patch versions for older major versions when you have bugs that need resolving.

* *Minor version* — (this is the second digit) this number goes up when you release minor changes that do not break backwards compatibility, fixes some bugs, or adds small new features. Depending on your development cycle, this could be intermediate releases in smaller batches.

* *Patch version* — (this is the third digit) this number goes up when you really have to patch a bug for a specific version and it can't be released as part of your next major or minor version. While it is allowed to add new patch versions to older major versions, you cannot add patch versions to older minor versions within the Marketplace.

## 8 Licensing: Best Practices

Follow your Java Libraries and default to Mendix EULA. Also, we recommend that you do not use copy-left licenses for commercially available connectors.