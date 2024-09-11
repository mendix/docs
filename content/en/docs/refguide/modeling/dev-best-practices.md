---
title: "Mendix Best Practices for Development"
linktitle: "Best Practices for Development"
url: /refguide/dev-best-practices/
weight: 12
description: "Describes Mendix best practices for developing Mendix applications."
aliases:
    - /howto/general/dev-best-practices/
#Academy are SMEs for verification, they use/link to this doc in training; microflow prefix naming convention from ES and Academy
---

## Introduction

This document can be used as a reference for adopting consistent naming and modeling conventions while developing your Mendix applications. This will help to improve your application’s maintainability and performance, and make it easier to read and understand.

Even with the powerful navigation and search support in Mendix Studio Pro, adhering to naming and modeling conventions is a wise thing because:

* After finishing an application, it is usually handed over to different people for maintenance, so even years later, they will need to understand what you did and how to improve on it
* Anybody should be able to quickly understand an existing app in terms of what is located where and how the different parts are related
* A clear structure helps in identifying reusable code

For a deep-dive look into implementing such best practices, check out this video:

{{< vidyard "exmmApZY4jMYxqidrzehEQ" >}}

## App Setup

### The Application Development Language

The language that will be used to develop the application should be determined upfront. This way you have one language for modules, entities, microflows, pages, etc. The preferred language for development is English.

There are some reasons why certain parts of an application may use another language. The main reason to make an exception would be within the domain model of an integration module. For example, when the source data model is in another language already.

For more information, see [Translating Your App Content](/refguide/translate-your-app-content/).

### App Name

Every app is named when it is created. Make sure you use a logical name that allows you to easily identify the application. You will probably create more apps in the future, and will want to be able to recognize this app. Mendix recommends leaving out dates or Mendix version numbers in the app name, since that information can be captured and extracted in a different way.

### Configurations

Every app has at least one configuration, but it may have many. Every app starts with a single configuration called **default**. When you work with multiple people on an application it is beneficial to create multiple configurations. When doing so, Mendix recommends using relevant names for those configurations, like the name of the developer or the app's purpose, like **Test** or **Acceptance**. Beware that the database passwords defined in the configuration will be visible to other team members, so be careful with using personal passwords you'd like to keep secret.

### User Roles

The [user roles](/refguide/user-roles/) should have logical names that reflect the different types of users that will use the application. The user roles are singular and use an UpperCamelCase notation, like **FunctionalAdministrator**. User roles are mostly defined in English, but there is an option to name these in a different language, since the user role is visible in the front end.

Each user role should correspond to only one module role per module. In other words, a user role should not map to multiple module roles within the same module. This helps to keep the number of applicable module roles for a user to a minimum, which reduces complexity in understanding the security model and reduces the performance impact of complex security rules.

### Passwords and Other Secrets

Always store secret information in a safe place. A safe place is the database. Use the [Encryption](https://marketplace.mendix.com/link/component/1011) module to encrypt, store, retrieve, and decrypt the information.

In Mendix version 10.9.0 and above, you can also store [private constants](/refguide/configuration/#constants) in configurations. These are encrypted and stored on your local machine so will not be shared with others. In versions of Mendix below 10.9.0, all configuration values are shared.

Using either the default value of a constant or the project's shared configuration settings is unsafe. Both these places are readable by others and visible in the version management copies. 

## Naming Conventions {#naming-conventions}

### Modules

#### Module Names

Modules should be treated like standalone replaceable services; for example, the customer module should function as a standalone customer management system as much as possible, replaceable by a different customer management system. Module names should have UpperCamelCase names that identify the responsibility of the module, for example, **CustomerManagement** or **SharePointIntegration**.

#### Module Roles

The [module roles](/refguide/module-security/#module-role) should have logical names that reflect the access they should have within a module. In contrast to the user role, the module role should always be in English, for instance **Administrator** or **Employee**.

### Domain Model

#### Entity Names

Most of the time, an [entity](/refguide/entities/) reflects a real-world object that people can relate to. Therefore, the entity name should also reflect that object and identify its purpose. There are sometimes app-specific exceptions that lead to creating other types of entity, but that is up to you. The name of an entity is singular since an object is a single instance of the entity. A good example is using **Customer** and not **Customers**. Furthermore, we advise avoiding abbreviations, underscores, mathematical characters or any other special characters in the names of entities. Entity names also use UpperCamelCase, for example, **HousekeepingRecord** or **LogEntry**.

{{% alert color="info" %}}
Following these entity naming conventions will prevent issues with naming conflicts between modules and entities. For example, if a module named **Customer** contains an entity named **customer** (note the lower-case "c"), there will be a Java compilation error and the app will not run. Renaming the entity to **Customer** will solve the problem.
{{% /alert %}}

#### Entity Attributes

The entity [attribute](/refguide/attributes/) should reflect a property of a real-world object that people can relate to and fits the purpose of that property. We advise avoiding abbreviations, underscores (except in the case described in the next paragraph), mathematical characters or any other special characters in the names. Entity attributes should use UpperCamelCase, for example, **FirstName** or **TelephoneNumber**.

Attributes that do not reflect business-related data, but are only necessary for technical reasons, should start with an underscore (`_`).

{{% alert color="info" %}}
A strong indicator for determining whether or not an attribute is business-related is whether you would still capture it if you were using a paper-only process. If you would, it is likely that the attribute will deliver business value.
{{% /alert %}}

#### Associations

##### Naming Multiple Associations Between Entities

[Association](/refguide/associations/) names in the domain model are automatically generated by Mendix. The auto-generated names follow the best practice and should be used by default.

If you have multiple associations between the same entities, Mendix recommends extending the association name. Extending this name with a recognizable purpose clarifies where you should use the association. For example, you can have a relationship between **Person** and **Address**. A person can have multiple addresses but you want to specify what their postal address is and what their delivery address is. An implementation choice could be that you create two associations for that purpose and adjust the names of the associations accordingly. For example, **Person_Address_Delivery**.

##### Renaming Entities

When an association already exists between entities and you change the name on one or both of the entities, Mendix will rename the association automatically. 

With models built in lower versions of Mendix, however, you will need to manually rename the association to keep your model consistent and up-to-date.

### Folders

#### Folder Names

Mendix recommends to use unique folder names that clearly identify their contents. You can use any combination of letters and symbols to identify a folder. For example, when adding a Published OData Service to your app, you could name the folder holding the service *ODataAPIs* or *OData_APIs* to reflect its function. 

Keep in mind that folders do not affect the full path of the resource. For example, when referencing the folder **ODataAPIs** in MyFirstModule, the path name would be *MyFirstModule.ODataAPIs*. 

#### Folder Structure

The structure for your documents starts with a clear separation of folders. By using a good folder structure you will improve the maintainability of your application; you will be able to find required documents faster and therefore will be able to develop and fix faster. 

The optimal grouping of your documents into folders depends on the circumstances and on the functionality of your application. Mendix recommends combining the guidelines below in a way that fits your app.

##### Process-Related Sources

Every app consists of processes. Structure your documents for these processes into folders that reflect individual processes and their steps.

##### Entity-Related Sources

Every app has documents that are needed for specific entities. Think of overview pages for maintenance, validation microflows that prevent commits, or other event triggers. These types of document should be structured into one folder that is named after the entity. Optionally, sub-folders could be used to organize, for example, **events** and **pages**.

### Microflows {#microflow-naming-conventions}

Generally, [microflow](/refguide/microflows/) names should include the type of event which triggers them, the name of the main entity being processed, and the operation being performed: **{PREFIX}\_{Entity}\_{Operation}**. For example, **ACT_Vendor_StartWorkflow**.

There are exceptions, such as where there is no main entity, or there is another reason to use a different name to improve understandability. The important thing is to make sure the name of the microflow clearly indicates its purpose.

To easily find and recognize the purpose of a microflow, you can use standard prefixes. Common purposes or events and their standard prefixes are listed below. If a microflow is triggered by several events, consider using more than one prefix. If a microflow does not comply to any of the patterns listed below, it should not have a prefix.

#### Entity Event Microflows

For some entities you use entity [events](/refguide/events/) that are always triggered when a specific operation is executed on the entity.

For example, an attribute **TotalOrderAmount** is automatically filled based on the amount values of the order-related order lines. You can define an after-commit event that ensures that **TotalOrderAmount** is updated when a related order line is saved: *ACO_Order_CalculateTotalOrderAmount*.

The microflows related to such an event handler should have the following prefixes:

| Event Type      | Prefix               |
|-----------------|----------------------|
| Before commit   | BCO\_{Entity name} |
| After commit    | ACO\_{Entity name} |
| Before create   | BCR\_{Entity name} |
| After create    | ACR\_{Entity name} |
| Before delete   | BDE\_{Entity name} |
| After delete    | ADE\_{Entity name} |
| Before rollback | BRO\_{Entity name} |
| After rollback  | ARO\_{Entity name} |

#### Calculated Attribute Microflows

For attributes, you can choose to store the value in the database or to calculate the value based on a microflow. For the microflow that does the calculation, you should use **CAL_** as a prefix and refer to the entity and attribute which is being calculated. The calculation is triggered when you show the entity on a page or use it in a microflow. On a page, the object's calculation attribute refreshes if you navigate away from the object and back to it in any way (via pagination buttons or tabs or by re-entering the page).

| Event Type      | Prefix               |
|-----------------|----------------------|
| Calculation     | CAL\_{Entity name}\_{Attribute name}    |

#### Page-Based Microflows

[Pages](/refguide/pages/) have a number of events that can trigger a microflow. See the following list for the examples and prefixes:

| Event Type                | Prefix             | Used In |
|---------------------------|--------------------|---- |
| On enter event            | OEN\_{Purpose}   | Input elements   |
| On change event           | OCH\_{Purpose}   | Input elements   |
| On leave event            | OLE\_{Purpose}   | Input elements   |
| Data source               | DS\_{Purpose}    | Data view, list view, data grid, template grid |
| Action button             | ACT\_{Purpose}   | Menu item, navigation item, microflow and action button, drop-down button<br />(“IVK\_” is used historically) |

#### Workflow Microflows

You can call a microflow from a [workflow](/refguide/workflows/). See the list of examples and prefixes in the table below:

| Event Type       | Prefix | Description                                                  |
| ---------------- | ------ | ------------------------------------------------------------ |
| User assignment  | WFA_   | Returns a list of users who can perform the workflow task.   |
| System action    | WFS_   | Accepts a workflow object and returns a workflow task result. |
| On Created Event | WFC_   | Starts when a user task is created, accepts a workflow object. |

#### Validation Microflows

Microflows that are used for [data validation](/refguide/setting-up-data-validation/) use the prefix **VAL_**.

| Event Type      | Prefix               |
|-----------------|----------------------|
| Validation      | VAL\_                 |

#### Scheduled Event Microflows

For the microflow that you use in your [scheduled events](/refguide/scheduled-events/), use the prefix **SCE_**. The event itself should have a descriptive name since it will be shown in the cloud configuration portal. The scheduled event and the microflow should have the same name.

| Event Type      | Prefix               |
|-----------------|----------------------|
| Scheduled Event | SCE\_                 |

#### App Microflows {#app-microflows}

Your [app settings](/refguide/app-settings/) provide three events that can trigger a microflow. In these cases we advise writing out the purpose as a microflow name. These microflows are defined only once per app and should preferably call sub-microflows to do the actual processing. These sub-microflows should have a prefix indicated below:

| Event Type      | Microflow Name | Sub-Microflow Prefix |
|-----------------|----------------|----------------------|
| After startup   | AfterStartUp   | ASU\_                 |
| Before shutdown | BeforeShutDown | BSD\_                 |
| Health check    | HealthCheck    | HCH\_                 |

#### Sub-Microflows

To clearly identify a [sub-microflow](/refguide/extracting-and-using-sub-microflows/), use the prefix **SUB_**. Exceptions can happen if there are other sub-microflow prefixes that are generally accepted too, for instance, the sub-microflow prefixes mentioned in the [App Microflows](#app-microflows) section above.

| Event Type      | Prefix                     |
|-----------------|----------------------------|
| Sub-microflow   | SUB_{MicroflowDescription} |

#### Unit Test Microflows

Microflows containing unit tests should have the prefix **TEST_** or **UT_** (case-insensitive). For more information about the Unit Testing module, see [Unit Testing](/appstore/modules/unit-testing/).

| Event Type      | Prefix               |
|-----------------|----------------------|
| Unit Test       | TEST\_ or UT_ |

#### Integration Microflows

For integrations, you have the following types of microflow:

| Event Type                                | Prefix |
|-------------------------------------------|--------|
| Consumed web service operation microflow  | CWS\_  |
| Published web service operation microflow | PWS\_  |
| Published REST service operation microflow | PRS\_  |
| Published OData service operation microflow | POS\_  |

You can also use the [Find Advanced](/refguide/find-and-find-advanced/#find-advanced) option in Studio Pro to search for microflows by service type.

### Other Document Types

#### Layouts and Snippets

[Layouts](/refguide/layout/) and [snippets](/refguide/snippet/) should be identified with prefixes.

| Document Type                             | Prefix    |
|-------------------------------------------|-----------|
| Layout for responsive (web)               | Responsive\_  |
| Layout for tablet (web)                   | Tablet\_  |
| Layout for phone (web)                    | Phone\_  |
| Layout for native phone                   | NativePhone\_  |
| Layout for popup                          | Popup\_  |
| Layout Atlas specific                     | Atlas\_  |
| Snippet                                   | SNIP\_ |

#### Enumerations

[Enumerations](/refguide/enumerations/) should be identified with a prefix.

| Document Type                             | Prefix    |
|-------------------------------------------|-----------|
| Enumeration                               | ENUM\_ |

#### Pages

Pages use a **suffix** to indicate their use.

Pages that show an [overview](/howto/front-end/create-your-first-two-overview-and-detail-pages/) of a single entity should have a suffix of **_Overview**.

Pages that are to create, edit, or view entity data, and that are not part of a process, should have the suffix **_New**, **_Edit**, **_NewEdit**, or **_View**.

Pages that are used to make a selection of one object have a suffix of **_Select** where the multi-object selection pages should have the suffix **_MultiSelect**.

Pages that are used as a tooltip page should have the suffix **_Tooltip**.

Pages that are called when a [user task](/refguide/user-task/) in a workflow is executed, have suffix **_Workflow**. There is one task page per user task. These pages always have a WorkflowUserTask data view and are specific to performing workflow tasks. 

| Page Purpose                             | Suffix |
|-------------------------------------------|--------|
| List objects of a single entity type  | \_Overview |
| Create an object | \_New |
| Update an object | \_Edit |
| Create *or* Update an object | \_NewEdit |
| View an object (read-only) | \_View |
| Select a single object | \_Select |
| Select multiple objects | \_MultiSelect |
| Tooltip | \_Tooltip |
| Interact with a user task | _Workflow |

#### Integration Documents

Documents used to support integration should have the prefixes listed below.

| Document Type                             | Prefix |
|-------------------------------------------|--------|
| Import mapping                            | IMM\_  |
| Export mapping                            | EXM\_  |
| XML schema definition                     | XSD\_  |
| JSON structure                            | JSON\_ |
| Deeplink                                  | DL\_   |

{{% alert color="warning" %}}
The [Deep Link](/appstore/modules/deep-link/) module is deprecated from Studio Pro 10.6.0. It is replaced by [page URLs](/refguide/page-properties/#url) and [microflow URLs](/refguide/microflow/#url). For instructions on migrating to page and microflow URLs, see the [Migrating to Page and Microflow URLs](/appstore/modules/deep-link/#migrate-page-micro) section in *Deep Link*.

We will continue to actively support this module for Mendix 9.
{{% /alert %}}

### Home Pages

You can define the [home pages](/refguide/show-home-page/) per device and role in your navigation. The recommended page names are listed below:

| Event Type           | Device  | Page Name                   |
|----------------------|---------|-----------------------------|
| Default home page    | Desktop | Home_Desktop\_Default      |
| Default home page    | Tablet  | Home_Tablet\_Default       |
| Default home page    | Mobile  | Home_Phone\_Default        |
| Role based home page | Desktop | Home_Desktop\_{Userrole} |
| Role based home page | Tablet  | Home_Tablet\_{Userrole}  |
| Role based home page | Mobile  | Home_Phone\_{Userrole}   |

## General Guidelines and Best Practices

### Domain Models

#### Attributes {#attributes}

Using calculated (virtual) attributes is discouraged. These introduce a performance risk since they need to be calculated every time the object is used, regardless of whether the attribute itself is used.

#### Inheritance {#inheritance}

When using inheritance (specialization/generalization), it is recommended to use no more than two levels for performance reasons.

#### Delete Behavior

[Delete behavior](/refguide/configuring-a-domain-model/#delete-behavior) must be specified where possible. Delete behavior must, however, never be relied upon when deleting large amounts of data. For performance reasons it is better to explicitly delete dependent objects when doing batch deletes.

#### Event Handlers

[Event handlers](/refguide/event-handlers/) on domain entities must be used with a lot of caution. They can quickly result in complex and possibly unexpected behavior when several of them are applied to a single entity. It is often best to make the execution of microflows more explicit by using sub-microflows that are called manually, for example, just before committing an object.

### Microflows {#microflow-dev-best-practices}

#### Size {#size}

The size of a microflow should not exceed 25 elements. An element is any block that Studio Pro allows in a microflow (loops, action activities, decisions, etc.). In some cases exceeding this limit is acceptable; this can occur, for instance, for validation or data copying flows.

Split microflows up into logical, functional elements. If a microflow has more than twenty-five elements, split the microflow up by creating a sub-microflow for a part of it. For example, by separating presentation logic from business logic.

Certain cases (such as validation checks) may require this rule to be ignored to produce an understandable result.

#### Documentation and Annotations {#documentation-and-annotations}

All complex microflows (more than ten activities or more than two decisions) should have an [annotation](/refguide/annotations/) describing the purpose of the microflow, expected parameters, and return values. This annotation should be placed at the start, so it is visible when the microflow is opened. This will assist other developers in quickly understanding the general purpose of a microflow, without having to read through it entirely.

Complex, non-standard or integration-related sections in microflows should also have an accompanying annotation. Examples of these are web service calls, custom loops, and Java calls.

#### Readability

The normal flow in a microflow should be aligned from left to right to ensure readability. Exceptions to the normal flow may branch out vertically: downwards is preferred, upwards if the downwards direction is already used.

Avoid crossing of lines of the links between the microflow elements.

If you decide to color code the different activities in your app, be sure to align within your team on their meaning.

#### Complexity

Nested `IF` statements in a single microflow expression are not recommended. If multiple checks depend on one another, this should be represented by multiple decisions in the microflow, so that the complexity is not hidden away in the expressions. You can use `AND` and `OR` operators to produce complex expressions if necessary. 

The example below shows a low-code approach that Mendix recommends, because it presents a clear picture of what is happening in the microflow:

{{< figure src="/attachments/refguide/modeling/dev-best-practices/recommended-microflow.png" width="700px" class="no-border" >}}

The example below shows an approach that we do not recommend. You can rewrite the microflow expression in this example as `if ($currentDeviceType = System.DeviceType.Phone and $Parameter = true) then true else false` using the `AND` operator. However, it is still not clear enough and the low-code approach shown in the above example is preferable.

{{< figure src="/attachments/refguide/modeling/dev-best-practices/not-recommended-microflow.png" width="450px" class="no-border" >}}

Event triggers on input fields must be kept as simple as possible, since they are potentially executed very often, depending on user behavior. Complex operations here will reduce performance.

The number of parameters for a microflow should be kept to a minimum to facilitate reusability. The more parameters a microflow has, the more difficult it is to determine what should be put into the parameters to make the microflow run correctly.

#### Error Handling and Logging

Use microflow [error handling](/refguide/error-handling-in-microflows/) for all integration and Java calls. Make sure to determine the correct rollback behavior. Always log the error that occurred, even if the process can continue, this is essential for later analysis of the error.

Complex processes and important business logic (like workflow processing or validations) must include debug and trace [logging](/refguide/logging/). Logging actions must write the current state and progress of the process and must include a request ID or other identifying information. The log node should be the name of the module. This will greatly assist error analysis.

#### Validating Inputs in Microflows

When microflows are invoked from the client side, it is important to validate the inputs. By having validations, you prevent incorrect, inappropriate, or potentially harmful data from being used in your microflows. This protects your application against security vulnerabilities. The following presents the best practices regarding the integrity and validation of inputs in your microflows.

##### Implementing Validation Checks

Adding validation checks is vital for ensuring that input data conforms to the expected data type, format, range, or other application-specific constraints. For instance, if a numeric input is expected within a defined range, validation checks should confirm that the input is indeed numeric and falls within the specified range.

##### Managing Unexpected Values

When building microflows, it is important to account for the potential occurrence of unexpected values. These could be empty values, or values outside the expected range or format. It is also important to ensure that read-only attributes only contain expected values.

{{% alert color="warning" %}}
We strongly recommend adding validation checks to all microflows inputs, including read-only attributes. 

We also recommend avoiding storing intermediary values in attributes (such as, *TotalPrice*). Instead, calculate these values when needed to ensure you have the correct values.
{{% /alert %}}

Microflows should incorporate mechanisms to detect unexpected values and respond suitably – this might involve returning an error message to the end-user or executing a fallback operation. 

##### Updating Validation Logic Regularly

As the application evolves, the validation logic within microflows should be updated accordingly to reflect changes in business logic or data models. This regular review and update of validation checks ensures that microflows remain secure and function correctly over time.

By prioritizing the validation of inputs in microflows, you not only enhance the security of your application, but also ensure a more predictable and stable user experience. This practice underscores the development of reliable and robust applications.

### Workflows

Guidelines below can help you choose a short yet meaningful name for your workflow:

* The name matches the context entity name
* The name consists of a noun + verb (for example, *EmployeeOnboarding*)
* The name reflects what the process is about, what the goal of the process is

### Warnings 

No warnings should be visible in Studio Pro, unless explicitly documented with a reason. Warnings can indicate many issues, including maintainability and security risks, which must be resolved.

### Excluded and Unused Documents

Excluded documents are documents that are in a project but excluded from deployment. These documents can be kept in your app for reference, but Studio Pro will act as if they do not exist. 

Unused documents are documents that are still being considered while being deployed that can be used if you want to replace a document with another document. 

Unused and excluded documents should be removed from the model when they are no longer needed. When a version of the application is prepared for a release, all these items should be cleaned up. Make sure to check whether items that appear unused are not actually called from a Java action before removing them. Studio Pro provides the possibility to mark such items as used to override warnings about this.

### XPath

[XPath](/refguide/xpath/) constraints in any part of the model should be kept as simple as possible. As a general rule, XPaths must not appear when the **Find advanced > XPath** option in Studio Pro is used with all options enabled.

### Security

The [security](/howto/security/) overview in Studio Pro must not show any incomplete (yellow) parts. All entity, microflow, and page access must be configured completely.

Assigning default rights to new members when defining entity access is NOT recommended. This will ensure that access is only granted after a conscious decision.

### Mendix Version

Apps should keep up with new Mendix releases as much as possible.

### Marketplace Content

When introducing a new [Mendix Marketplace](https://marketplace.mendix.com/) component to an app, carefully consider the support level of the component. Using components that are community supported introduces a maintainability and upgrade risk.

Marketplace modules should NOT be modified. If a Marketplace module is modified, updating to a new version becomes much harder, because the changes will be overwritten when a new version is downloaded from the Marketplace. If changing an Marketplace module is unavoidable, you have two options:

* Mark any changes you make explicitly and clearly, and perform them again when the module is updated
* Copy the contents of the Marketplace module to another module in your app and use that module instead (remember that your app will no longer reflect updates to the original Marketplace module)

To minimize the number of changes in the actual Marketplace module, it is advisable to combine them in a separate extension module wherever possible.
