---
title: "Development"
url: /appstore/creating-content/best-practices/development/
weight: 9
---

## Introduction

This section explores best practices for connector development. You can develop connectors using Java or Mendix.

## Developing Connectors Using Java

Implementing the bulk of the functionality in Java has the following benefits: 

* Complexity is hidden from end-users, making apps easier to understand.     
{{% alert color="info" %}}
Mendix apps should focus on solving business requirements. Generic technical constructs should be hidden from developers. Currently, Java is the best way to achieve this. A module does not have to ship the Java source for its Java functionality. You can also make a (hidden) *.jar* in another app, and place that in the connector module **user lib**.
{{% /alert %}}
* End-users are less likely to change it.
* You can use [unit tests](/appstore/creating-content/best-practices/testing/#unit-testing).

### Extending App Setup for Building Connectors with Java {#extend-app-java}

You can extend your app to work with Java and Gradle. Follow these steps to do that:

1. Add an **Implementation** folder next to other app folders. 

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/implementation-folder.png" class="no-border" >}}

2. Set up an  **Implementation** folder as a Gradle `java-library` project. For details, see the Gradle documentation on [Building Java Libraries Sample](https://docs.gradle.org/current/samples/sample_building_java_libraries.html#run_the_init_task). This is the expansion of the **Implementation** folder:

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/gradle-library.png" class="no-border" >}}

    The **Implementation** folder is now a self contained Gradle project. It can be opened in any IDE that understands Gradle, and expanded with any code you like.

3. Build the **Implementation** folder and place the resulting *.jar* in the **userlib** folder. 

    If your implementation has additional dependencies, consider creating one `fat jar`  containing all dependent *.jar* files.     
{{% alert color="info" %}}
All modules have their *.jar* files in the **userlib** folder. In order to specify that this *.jar* is being used by your connector module, add an additional text file named `<jar-file-name>-<modulename>.requiredLib` .
{{% /alert %}}

4. After implementation, libraries are placed in the **userlib** folder, and are available in the Mendix application classpath so they can be used in a Java action in your connector module.

You can also extend your app with Gradle and add the **Implementation** project as a sub-module. In this case, your implementation project becomes part of your Mendix app. You can use it in Java actions without having to copy the *.jar* files to the **userlib** folder. 

{{% alert color="warning" %}}
You must have the *.jar* file placed in the  **userlib** folder before exporting the connector module. Otherwise, **Implementation** *.jar* files will not be packaged with the module.
{{% /alert %}}

A self-contained Gradle project can do unit testing and integration testing in the same way as you would do in any other Java project. Refer to [Testing](/appstore/creating-content/best-practices/testing/) for best practices.

## Developing Connectors with Mendix

While Java is likely going to be a primary choice for building your connector modules, you can also use Mendix.

### Making Microflows Available as Microflow or Workflow Activities

To ensure that end-users can reuse your Mendix build logic as easily as possible, you need to make microflows available as microflow or workflow activities. For details, see the [Triggering a Workflow via a Microflow](/refguide/perform-workflow-basic-functions/#trigger-microflow) section of *Performing Workflow Basic Functions*).

Ensure that a microflow is visible in the **Toolbox**, in the [Expose as microflow action](/refguide/java-actions/#expose-microflow-action) section of the microflow properties. You can do this by right-clicking in your microflow working area. Additionally, you can specify a caption for the action, a category for the **Toolbox**, and an icon. These will be used in the **Toolbox**, and also in the microflows, so they need to be easy to read for the end-user.

{{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/microflow-action.png" class="no-border" >}}

After you [expose as microflow action](/refguide/java-actions/#expose-microflow-action), this can be dragged and dropped inside another microflow.

If you create functionality that requires REST API integrations or complex data processing, make sure you have well-documented microflows connecting the public part of your module to the  private part. This way, the implementing developer will not have to understand the intricacies of the integration.

If you create functionality that requires REST API integrations or complex data processing, make sure you have well-documented microflows connecting the public part of your module to the  private part. This way, the implementing developer will not have to understand the intricacies of the integration.

Follow these guidelines for names and icons:

* The name of your category must match the name of the category which covers similar functionality.
* The name of the caption for your microflow or workflow exposed action does not overlap with others.
* The icon should give instant recognition to your function. Make sure that it is square and 16 by 16 pixels. This size is very small, so try not to add too many details.

### Structuring the Usage of Your Connector

As stated in the [Setting Up the Main Connector Module](/appstore/creating-content/best-practices/app-setup/#main-setup) section of *App Setup*, each connector build will have a  **UseMe** folder where you expose the logic that users of your connector module need when implementing your module. You can expose your microflows and Java actions in the toolbox. This means that users will be able to use your microflows and Java actions as microflow activities or workflow system tasks. You can also add page templates that are reusable.

When exposing your microflows and Java actions, you need to ensure that end users can find them easily. As an example, take a look at how the category, icon, and name are listed for platform-supported items. Add documentation to your input parameters and for the full Java action/microflow. This is part of the platform end users will be able to access easily while using your Java action/microflow activities.

For page templates, make sure to use a representative image, define a category that makes sense based on your module usage, and give a name that makes the template easily recognizable.

## Logging

When something goes wrong or the module needs to expose information that it is unable to expose via regular outputs, logging is a good option. 

Make sure your connector uses one log node for all log messages if they are logged from the Java code or the Mendix code. 

Ensure you utilize the right log levels:

* `CRITICAL` – The error harms the stability of the application.
* `ERROR` – The process cannot recover from the error.
* `WARNING` – Something went wrong, but the process can finish anyway.
* `INFO` – Useful information that should always appear in log files.
* `DEBUG` – The user needs to determine why the connector is not working as expected.
* `TRACE` – Determine why the implementation is not working as expected.

## Data Storage

Depending on your module's functionality, you might need to store data in the end user's application. The downside is that end users might delete your module to resolve issues such as **userlib** conflicts. 

We advise limiting the amount of data stored in persistable entities, and passing the data via your exposed logic to the end user's application logic instead. Then, they may decide to store it, or to only use it during a process. 

## Task Queue

Actions that may be batched or divided over multiple threads due to a large load or volume should be offloaded to the [task queue](/refguide/task-queue/). Using this method, you can simultaneously offload multiple tasks to multiple instances, and over multiple threads. You can also run these tasks in the background without having to wait for a user request. Make sure that the end user is aware that something is going on by setting a certain Task Status, or by implementing a progress log.

If you are using Studio Pro [8.18](/releasenotes/studio-pro/8.18/) or older, you can consider using the process queue. See the [Replacing Process Queue](/refguide9/task-queue/#process-queue) section of *Task Queue* for the difference between these functionalities.

## ConnectionDetails Entity

Use a **ConnectionDetails** entity for all general connection and security settings for the call. Use a **ConnectionDetails_Get** microflow in all your operations. This makes it easy to change all the settings in one location. Individual settings can be stored in a constant or in the database, and set during creation. Using constants is recommended because this avoids a dependency on the encryption module.  

{{% alert color="warning" %}} Using either the default value of a constant, or the project’s configuration setting is unsafe. Both these places are readable by others and visible in the version management. If you can share these settings with other developers, set them in the project configuration and leave the default values blank. This will limit the risk of accidentally exposing the settings when exporting the module.{{% /alert %}}

If you need to store sensitive information in the database, always use the [Encryption](/appstore/modules/encryption/) module to encrypt and store, and to retrieve and decrypt the information.

## Persistable Entities

If possible, avoid storing persistable data in persistable entities for your connector module. Developers will remove modules when troubleshooting Java compiling issues. If they add them back, data stored in persistable entities is lost. 

It is better to use non-persistable entities, and let the user decide how to store any data passed back from your connector in their own domain model.

## Toolbox Actions and Non-Persistable Entities (NPEs)

Toolbox actions need clear naming, consistent categorization, and documentation.

NPEs should be well-organized visually.

## Attributes

Consider doing the following for all entity attributes:

* Set all string values to unlimited.
* Check all date values. If the service only returns a date (no time), then set **localize** to **No**.
* Check all number values (decimal, integer, long), and remove the default value of 0.

{{% alert color="info" %}}
Databases like SAP HANA and Oracle do not support CLOBs for order by or group by clauses. Because of this, attributes that are used for sorting or group by operations should not be set to unlimited.
{{% /alert %}}

## Dependencies

Given that there is no dependency management between Mendix modules, try to minimize the number of dependencies your module has on other modules. If you do have to depend on other modules, make sure those modules are well-maintained by you or by Mendix themselves. Introducing another community-supported module as a dependent module might be too much of a risk for developers wanting to use your module.

Any dependencies your module has should be well documented, including the minimum required version to be used. It is also recommended to use the *.RequiredLib* files that Mendix uses for platform-supported modules, best handled with a build script like Gradle. To learn more about working with Gradle, refer to [Extending App Setup for Building Connectors with Java](#extend-app-java).

## IP Protection

Members of the [Mendix Partner Program](/appstore/partner-program/) and of the [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/) can protect their intellectual property (IP) or prevent end users from changing any logic shipped in a module using Mendix tooling. For details, see [Applying Intellectual Property Protection](/appstore/creating-content/sol-ip-protection/).

If protecting your IP or preventing end users from changing your logic is not a requirement, you can build a connector using available Mendix tools. If you want IP protection today, you need to implement the sensitive parts of the module in a hidden Java library. 

## Performance Considerations

Assuming your connector will be processing large sets of data, be aware of how you want to have that data flow through. 

### Memory Usage

When importing large datasets into Mendix application, use streamable formats to avoid overconsumption of memory.

### Pagination

If using NPEs, data retrieved by the connector is loaded into memory, so it is important to avoid requesting large amounts of data from an underlying system in a single call. Limiting or paginating the size of the retrieved data will lead to better performance for the Mendix app. Use server-side pagination for search results.

To provide a proper user experience, the amount of data loaded and rendered on the page needs to be limited. A typical page size of 25 objects or 100 objects is recommend, with options to load more and filter or search for optimized navigation through the dataset.

### Import Mappings (Deep Structures)

Mendix does not support import mappings for recursive structure. Consider simplifying the connector domain model so that import mapping is possible and does not cause performance overhead when data is serialized into Mendix entities.

### Caching

Use caching to reduce redundant database action for frequently retrieved objects.

### Domain Model

A connector exposes the data of the underlying system using its domain model. Consider the following during the domain model design to ensure proper app performance:

* Do not expose the full data model complexity of the underlying source system in the connector domain model to facilitate easy data exchange. Try to only expose those pieces that are relevant for implementing your connector in the application of the implementing developer.
* Keep connector logic, such as Java actions code and microflows, as light as possible. An overcomplicated connector logic is more difficult to implement.
* Limit levels of inheritance and associations to no more than two, using persistable entities. This is not an issue for NPEs, so consider using them where possible.
* Minimize the use of reference set (many-to-many) associations. Mendix retrieves the IDs (per row for a list retrieve) on every query. As a result, many references, and especially reference sets, cause extra queries, and thus extra load on the database.
* Consider adding indices where relevant. Make sure to add them in a way that they make sense with the querying logic in your connector and/or use cases for implementing apps.
* Keep your persistable entities from growing too large. You may do this by adding a scheduled cleanup event, which you should make configurable via constants. An example of this is removing {x} amount of objects at a time.
* Add a flexible but secure set of entity access rules based on the module roles that you add. Keep in mind the use cases for your connector. Mendix recommends you avoid any persistable data. 
