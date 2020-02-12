---
title: "Implement Mendix Best Practices for Development"
category: "General Info"
menu_order: 7
tags: ["best practice", "development", "develop", "reusable", "prefix"]
#Academy are SMEs for verification, they discuss and link to this doc in training
---

## 1 Introduction

This document can be used as a reference for adopting consistent naming and modeling conventions while developing your Mendix applications. This will help to improve your application’s maintainability and performance, and make it easier to read and understand.

Even with the powerful navigation and search support in Mendix Studio Pro, adhering to naming and modeling conventions is a wise thing because:

* After finishing an application, it is usually handed over to different people for maintenance, so even years later, they will need to understand what you did and how to improve on it
* Anybody should be able to quickly understand an existing app in terms of what is located where and how the different parts are related
* A clear structure helps in identifying reusable code

## 2 Project Setup

### 2.1 The Application Development Language

The language that will be used to develop the application should be determined upfront. This way you have one language for modules, entities, microflows, pages, etc. The preferred language for development is English.

There are some reasons why certain parts of an application may use another language. The main reason to make an exception would be within the domain model of an integration module. For example, when the source data model is in another language already.

For more information, see [How to Translate Your App Content](/howto/collaboration-requirements-management/translate-your-app-content).

### 2.2 Project Name

Every project is named when it is created. Make sure you use a logical name that allows you to easily identify the application. You will probably create more projects in the future, and will want to be able to recognize this project. We recommend leaving out dates or Mendix version numbers in the project name, since that information can be captured and extracted in a different way.

### 2.3 Configurations

Every project has at least one configuration, but it may have many. Every project starts with a single configuration called **default**. When you work with multiple people on an application it is beneficial to create multiple configurations. When doing so, we recommend using relevant names for those configurations, like the name of the developer or the app's purpose, like **Test** or **Acceptance**. Beware that the database passwords defined in the configuration will be visible to other team members, so be careful with using personal passwords you'd like to keep secret.

### 2.4 User Roles

The [user roles](/refguide/user-roles) should have logical names that reflect the different types of users that will use the application. The user roles are singular and use a camel case notation, like **FunctionalAdministrator**. User roles are mostly defined in English, but there is an option to name these in a different language, since the user role is visible in the front-end.

Each user role should correspond to only one module role per module. In other words, a user role should not map to multiple module roles within the same module. This helps to keep the number of applicable module roles for a user to a minimum, which reduces complexity in understanding the security model and reduces the performance impact of complex security rules.

## 3 Naming Conventions

### 3.1 Modules

#### 3.1.1 Module Names

Modules should be treated like stand-alone replaceable services; for example, the customer module should function as a stand-alone customer management system as much as possible, replaceable by a different customer management system. Module names should have camel case names that identify the responsibility of the module, for example, **CustomerManagement** or **SharePointIntegration**.

#### 3.1.2 Module Roles

The [module roles](/refguide/module-security#module-role) should have logical names that reflect the access they should have within a module. In contrast to the user role, the module role should always be in English, for instance **Administrator** or **Employee**.

### 3.2 Domain Model

#### 3.2.1 Entity Names

Most of the time, an [entity](/refguide/entities) reflects a real-world object that people can relate to. Therefore, the entity name should also reflect that object and identify its purpose. There are sometimes project-specific exceptions that lead to creating other types of entity, but that is up to you. The name of an entity is singular since an object is a single instance of the entity. A good example is using **Customer** and not **Customers**. Furthermore, we advise avoiding abbreviations, underscores, mathematical characters or any other special characters in the names of entities. Entity names also use camel case, for example, **HousekeepingRecord** or **LogEntry**.

#### 3.2.2 Entity Attributes

The entity [attribute](/refguide/attributes) should reflect a property of a real-world object that people can relate to and fits the purpose of that property. We advise avoiding abbreviations, underscores (except in the case described in the next paragraph), mathematical characters or any other special characters in the names. Entity attributes should use camel case, for example, **FirstName** or **TelephoneNumber**.

Attributes that do not reflect business-related data, but are only necessary for technical reasons, should start with an underscore (`_`).

{{% alert type="info" %}}
A strong indicator for determining whether or not an attribute is business-related is whether you would still capture it if you were using a paper-only process. If you would, it is likely that the attribute will deliver business value.
{{% /alert %}}

#### 3.2.3 Associations

##### 3.2.3.1 Naming Multiple Associations Between Entities

[Association](/refguide/associations) names in the domain model are automatically generated by Mendix. The auto-generated names follow the best practice and should be used by default.

If you have multiple associations between the same entities we recommend extending the association name. Extending this name with a recognizable purpose clarifies where you should use the association. For example, you can have a relationship between **Person** and **Address**. A person can have multiple addresses but you want to specify what their postal address is and what their delivery address is. An implementation choice could be that you create two associations for that purpose and adjust the names of the associations accordingly. For example, **Person_Address_Delivery**.

##### 3.2.3.2 Renaming Entities

When an association already exists between entities and you change the name on one or both of the entities, Mendix will rename the association automatically. 

With models built in lower versions of Mendix, however, you will need to manually rename the assocation to keep your model consistent and up-to-date.

### 3.3 Folders

The structure for your documents starts with a clear separation of folders. By using a good folder structure you will improve the maintainability of your application; you will be able to find required documents faster and therefore will be able to develop and fix faster. 

The optimal grouping of your documents into folders depends on the circumstances and on the functionality of your application. We recommend combining the guidelines below in a way that fits your project.

#### 3.3.1 Process-Related Sources

Every project consists of processes. Structure your documents for these processes into folders that reflect individual processes and their steps.

#### 3.3.2 Entity-Related Sources

Every project has documents that are needed for specific entities. Think of overview pages for maintenance, validation microflows that prevent commits, or other event triggers. These types of document should be structured into one folder that is named after the entity. Optionally, sub-folders could be used to organize, for example, **events** and **pages**.

### 3.4 Microflows

Generally, [microflow](/refguide/microflows) names should include the type of event which triggers them, the name of the main entity being processed, and the operation being performed: **{Prefix}\_{Entity}\_{Operation}**. For example,  **Act_Vendor_StartWorkflow**.

There are exceptions, such as where there is no main entity, or there is another reason to use a different name to improve understandability. The important thing is to make sure the name of the microflow clearly indicates its purpose.

To easily find and recognize the purpose of a microflow, you can use standard prefixes. Common purposes or events and their standard prefixes are listed below. If a microflow is triggered by several events you can consider using more than one prefix.

#### 3.4.1 Entity Event Microflows

For some entities you use entity [events](/refguide/events) that are always triggered when a specific operation is executed on the entity.

For example, an attribute **TotalOrderAmount** is automatically filled based on the amount values of the order-related order lines. You can define an after-commit event that ensures that **TotalOrderAmount** is updated when a related order line is saved: *ACo_Order_CalculateTotalOrderAmount*.

The microflows related to such an event handler should have the following prefixes:

| Event Type      | Prefix               |
|-----------------|----------------------|
| Before commit   | BCo\_{Entity name} |
| After commit    | ACo\_{Entity name} |
| Before create   | BCr\_{Entity name} |
| After create    | ACr\_{Entity name} |
| Before delete   | BDe\_{Entity name} |
| After delete    | ADe\_{Entity name} |
| Before rollback | BRo\_{Entity name} |
| After rollback  | ARo\_{Entity name} |

#### 3.4.2 Calculated Attribute Microflows

For attributes, you can choose to store the value in the database or to calculate the value based on a microflow. For the microflow which does the calculation you should use **Cal_** as a prefix, and refer to the entity and attribute which is being calculated. The calculation is triggered when you show the entity on a page or use it in a microflow. On a page, the object's calculation attribute refreshes if you navigate away from the object and back to it in any way (via pagination buttons or tabs or by re-entering the page).

| Event Type      | Prefix               |
|-----------------|----------------------|
| Calculation     | Cal\_{Entity name}\_{Attribute name}    |

#### 3.4.3 Page-Based Microflows

[Pages](/refguide/pages) have a number of events that can trigger a microflow. See the following list for the examples and prefixes:

| Event Type                | Prefix             | Used In |
|---------------------------|--------------------|---- |
| On enter event            | OEn\_{Purpose}   | Input widgets   |
| On change event           | OCh\_{Purpose}   | Input widgets   |
| On leave event            | OLe\_{Purpose}   | Input widgets   |
| Data source               | DS\_{Purpose}    | Data view, list view, data grid, template grid |
| Microflow/action button   | ACT\_{Purpose} or IVK\_{Purpose} | Menu item, Navigation item, Microflow and Action button, Drop-down button<br />(“IVK\_” is used historically) |

#### 3.4.4 Validation Microflows

Microflows that are used for [data validation](/howto/data-models/setting-up-data-validation) use the prefix **Val_**.

| Event Type      | Prefix               |
|-----------------|----------------------|
| Validation      | Val\_                 |

#### 3.4.5 Scheduled Event Microflows

For the microflow that you use in your [scheduled events](/refguide/scheduled-events), use the prefix **ScE_**. The event itself should have a descriptive name since it will be shown in the cloud configuration portal. The scheduled event and the microflow should have the same name.

| Event Type      | Prefix               |
|-----------------|----------------------|
| Scheduled Event | ScE\_                 |

#### 3.4.6 Project Microflows

Your [project settings](/refguide/project-settings) provide three events that can trigger a microflow. In these cases we advise writing out the purpose as a microflow name. These microflows are defined only once per project and should preferably call sub-microflows to do the actual processing. These sub-microflows should have a prefix indicated below:

| Event Type      | Microflow Name | Sub-microflow Prefix |
|-----------------|----------------|----------------------|
| After startup   | AfterStartUp   | ASu\_                 |
| Before shutdown | BeforeShutDown | BSd\_                 |
| Health check    | HealthCheck    | HCh\_                 |

#### 3.4.7 Unit Test Microflows

Microflows containing [unit tests](/howto/testing/testing-microflows-using-the-unittesting-module) should have the prefix **Test_**.

| Event Type      | Prefix               |
|-----------------|----------------------|
| Unit Test       | Test\_                |

#### 3.4.8 Integration Microflows

For integrations, you have the following types of microflow:

| Event Type                                | Prefix |
|-------------------------------------------|--------|
| Consumed web service operation microflow  | CWS\_  |
| Published web service operation microflow | PWS\_  |
| Published app service operation microflow | PAS\_  |
| Published REST service operation microflow | PRS\_  |

### 3.5 Other Document Types

#### 3.5.1 Layouts & Snippets

[Layouts](/refguide/layout) and [snippets](/refguide/snippet) should be identified with prefixes.

| Document Type                             | Prefix    |
|-------------------------------------------|-----------|
| Layout                                    | Lay\_  |
| Snippet                                   | Snip\_ |

#### 3.5.2 Enumerations

[Enumerations](/refguide/enumerations) should be identified with a prefix.

| Document Type                             | Prefix    |
|-------------------------------------------|-----------|
| Enumeration                               | Enum\_ |

#### 3.5.3 Pages

Pages use a **suffix** to indicate their use.

Pages that show an [overview](/howto/front-end/create-your-first-two-overview-and-detail-pages) of a single entity should have a suffix of **_Overview**.

Pages that are to create, edit, or view entity data, and that are not part of a process, should have the suffix **_New**, **_Edit**, **_NewEdit**, or **_View**.

Pages that are used to make a selection of one object have a suffix of **_Select** where the multi-object selection pages should have the suffix **_MultiSelect**.

Pages that are used as a tooltip page should have the suffix **_Tooltip**.

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

#### 3.5.4 Integration Documents

Documents used to support integration should have the prefixes listed below.

| Document Type                             | Prefix |
|-------------------------------------------|--------|
| Import mapping                            | ImM\_  |
| Export mapping                            | ExM\_  |
| XML schema                                | XSD\_  |
| JSON structure                            | JSON\_ |
| Deeplink                                  | Dl\_   |

### 3.6 Home Pages

You can define the [home pages](/refguide/show-home-page) per device and role in your navigation. The recommended page names are listed below:

| Event Type           | Device  | Page Name                   |
|----------------------|---------|-----------------------------|
| Default home page    | Desktop | Home_Desktop\_Default      |
| Default home page    | Tablet  | Home_Tablet\_Default       |
| Default home page    | Mobile  | Home_Phone\_Default        |
| Role based home page | Desktop | Home_Desktop\_{Userrole} |
| Role based home page | Tablet  | Home_Tablet\_{Userrole}  |
| Role based home page | Mobile  | Home_Phone\_{Userrole}   |

## 4 General Guidelines & Best Practices

### 4.1 Domain Models

#### 4.1.1 Attributes {#attributes}

Using calculated (virtual) attributes is discouraged. These introduce a performance risk since they need to be calculated every time the object is used, regardless of whether the attribute itself is used.

#### 4.1.2 Inheritance {#inheritance}

When using inheritance (specialization/generalization), it is recommended to use no more than two levels for performance reasons.

#### 4.1.3 Delete Behavior

[Delete behavior](/howto/data-models/create-a-basic-data-layer#delete-behavior) must be specified where possible. Delete behavior must, however, never be relied upon when deleting large amounts of data. For performance reasons it is better to explicitly delete dependent objects when doing batch deletes.

#### 4.1.4 Event Handlers

[Event handlers](/refguide/event-handlers) on domain entities must be used with a lot of caution. They can quickly result in complex and possibly unexpected behavior when several of them are applied to a single entity. It is often best to make the execution of microflows more explicit by using sub-microflows that are called manually, for example, just before committing an object.

### 4.2 Microflows

#### 4.2.1 Size {#size}

The size of a microflow should not exceed 25 elements. An element is any block that Studio Pro allows in a microflow (loops, action activities, decisions, etc.). In some cases exceeding this limit is acceptable; this can occur, for instance, for validation or data copying flows.

Split microflows up into logical, functional elements. If a microflow has more than twenty-five elements, split the microflow up by creating a sub-microflow for a part of it. For example, by separating presentation logic from business logic.

Certain cases (such as validation checks) may require this rule to be ignored to produce an understandable result.

#### 4.2.2 Documentation & Annotations {#documentation-and-annotations}

All complex microflows (more than ten activities or more than two decisions) should have an [annotation](/refguide/annotations) describing the purpose of the microflow, expected parameters, and return values. This annotation should be placed at the start, so it is visible when the microflow is opened. This will assist other developers in quickly understanding the general purpose of a microflow, without having to read through it entirely.

Complex, non-standard or integration-related sections in microflows should also have an accompanying annotation. Examples of these are web service calls, custom loops, and Java calls.

#### 4.2.3 Readability

The normal flow in a microflow should be aligned from left to right to ensure readability. Exceptions to the normal flow may branch out vertically: downwards is preferred, upwards if the downwards direction is already used.

Avoid crossing of lines of the links between the microflow elements.

If you decide to color code the different activities in your project, be sure to align within your team on their meaning.

#### 4.2.4 Complexity

Nested `IF` statements in a single microflow expression are not recommended. If multiple checks depend on one another, this should be represented by multiple decisions in the microflow, so that the complexity is not hidden away in the expressions. You can use `AND` and `OR` operators to produce complex expressions if necessary.

Event triggers on input fields must be kept as simple as possible, since they are potentially executed very often, depending on user behavior. Complex operations here will reduce performance.

The number of parameters for a microflow should be kept to a minimum to facilitate reusability. The more parameters a microflow has, the more difficult it is to determine what should be put into the parameters to make the microflow run correctly.

#### 4.2.5 Error Handling & Logging

Use microflow [error handling](/howto/logic-business-rules/set-up-error-handling) for all integration and Java calls. Make sure to determine the correct rollback behavior. Always log the error that occurred, even if the process can continue, this is essential for later analysis of the error.

Complex processes and important business logic (like workflow processing or validations) must include debug and trace [logging](/refguide/logging). Logging actions must write the current state and progress of the process and must include a request ID or other identifying information. The log node should be the name of the module. This will greatly assist error analysis.

### 4.3 Warnings & Studio Pro Feedback

No warnings should be visible in Studio Pro, unless explicitly documented with a reason. Warnings can indicate many issues, including maintainability and security risks, which must be resolved.

Unused and excluded items should be removed from the model when they are no longer needed. When a version of the application is prepared for a release, all these items should be cleaned up. Make sure to check whether items that appear unused are not actually called from a Java action before removing them. Studio Pro provides the possibility to mark such items as used to override warnings about this.

### 4.4 XPath

[XPath](/refguide/xpath) constraints in any part of the model should be kept as simple as possible. As a general rule, XPaths must not appear when the **Find advanced > XPath** option in Studio Pro is used with all options enabled.

When an XPath needs multiple constraints, each constraint must be put in brackets (`[ ]`) separately, instead of using the `and` keyword. This also applies to sub-constraints.

### 4.5 Security

The [security](/howto/security/index) overview in Studio Pro must not show any incomplete (yellow) parts. All entity, microflow, and page access must be configured completely.

Assigning default rights to new members when defining entity access is NOT recommended. This will ensure that access is only granted after a conscious decision.

### 4.6 Mendix Version

Apps should keep up with new Mendix releases as much as possible.

### 4.7 App Store Content

When introducing a new [Mendix App Store](https://appstore.home.mendix.com/index3.html) component to a project, carefully consider the support level of the component. Using components that are community supported introduces a maintainability and upgrade risk.

App Store modules should NOT be modified. If an App Store module is modified, updating to a new version becomes much harder, because the changes will be overwritten when a new version is downloaded from the App Store. If changing an App Store module is unavoidable, you have two options:

* Mark any changes you make explicitly and clearly, and perform them again when the module is updated
* Copy the contents of the App Store module to another module in your app and use that module instead (remember that your app will no longer reflect updates to the original App Store module)

To minimize the number of changes in the actual App Store module, it is advisable to combine them in a separate extension module wherever possible.
