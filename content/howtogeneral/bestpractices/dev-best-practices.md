---
title: "Best Practices for Mendix Development"
category: "Best Practices"
---

## 1 Introduction

This document can be used as a guideline for adopting consistent naming and modeling conventions while developing your Mendix applications. This will help to improve your application’s maintainability and performance, and makes it easier to read and understand.

Even with the powerful navigation and search support in the Mendix Modeler, adhering to naming and modeling conventions is a wise thing because:

* After finishing an application, it is usually handed over to different people for maintenance. Years later they still need to be able to understand what you did and how to improve on it
* When viewing an existing application everybody should quickly understand the app, what is located where, and how the different parts are related
* A clear structure helps in identifying reusable code

## 2 Project setup

### 2.1 The Application Development Language

The language that will be used to develop the application should be determined upfront. This way you have one language for modules, entities, microflows, pages, etc. The preferred language for development is English.

There are some exceptions why certain parts of an application may use another language. The main exception would be in the domain model of an integration module. For example, in case the source data model is in another language already.

### 2.2 Project Name

Every project is named when it's created. Make sure you use a logical name that allows you to easily identify the application. You will probably create more projects in the future, and want to be able to recognize this project. We recommend leaving out dates or Mendix version numbers in the project name, since that information can be captured and extracted in a different way.

### 2.3 Configurations

Every project has one or multiple configurations. Every project starts with a single configuration called *default*. When you work with multiple people on an application it is beneficial to create multiple configurations. When doing so, we recommend using logical names for those configurations, like the name of the developer or the app's purpose, like "Test" and "Acceptance". Beware that the database passwords defined in the configuration will be visible to other team members, so be careful with using personal passwords you'd like to keep secret.

### 2.4 User Roles

The user roles should have logical names that reflect the different types of users that will use the application. The user roles are singular and use a camel case notation, like *FunctionalAdministrator*. User roles are mostly defined in English, a choice can be made to define this in the language of the country since the user role is visible in the front end.

Each user role should correspond to only one module role per module. In other words, a user role should not map to multiple module roles within the same module. This helps to keep the number of applicable module roles for a user to a minimum, which reduces complexity in understanding the security model and reduces the performance impact of complex security rules.

## 3. Naming Conventions

### 3.1 Modules

#### 3.1.1 Module Names

Modules should be treated like standalone replaceable services, for example, the customer module should function as a standalone customer management system as much as possible, replaceable by a different customer management system. Module names should have camel case names that identify the responsibility of the module. For example, *CustomerManagement* or *SharePointIntegration*.

#### 3.1.2 Module Roles

The module roles should have logical names that reflect the access they should have within a module. In comparison to the user role, the module role should always be in English, for instance *Administrator* or *Employee*.

### 3.2 Domain Model

#### 3.2.1 Entity Names

Most of the time an entity reflects a real-world object that people can relate to. Therefore, the name should make sense to reflect that entity and be recognizable for its purpose. There are always exceptions that lead to creating other types of entities due to project specific needs, but that is up to you. The name of an entity is singular since the entity reflects a single instance of an object. A good example is using *Customer* and not *Customers*. Furthermore, we advise avoiding abbreviations, underscores, mathematical characters or any other special characters in the names of entities. Entity names also use camel case, for example, *HousekeepingRecord* or *LogEntry*.

#### 3.2.2 Entity Attributes

The entity attribute should reflect a property of a real-world object that people can relate to and fits the purpose of that property. Furthermore we advise avoiding abbreviations, underscores, mathematical characters or any other special characters in the names. Entity attributes use camel case, for example, *FirstName* or *TelephoneNumber*.

#### 3.2.3 Associations

Association names in the domain model are automatically generated by Mendix. The auto-generated names are good to use by default. If you have multiple associations between the same entities we recommend extending the association name. By extending this name with a recognizable part you will be aware of the purpose of this specific association. For example, you can have a relation between *Person* and *Address*. A person can have multiple addresses but you want to specify what their postal address is and what their delivery address is. An implementation choice could be that you create two new associations for that purpose and adjust the names of the associations accordingly. For example, Person\_Address\_Delivery.

A second recommendation is that when an association already exists between entities, and you change the name on one or both of the entities, that you will rename the association. Mendix will not do this automatically for you and this way you will keep your model consistent and up-to-date.

### 3.3 Folders

The structure for your documents starts with a clear separation of folders. When using a decent folder structure you will improve the maintainability of your application and will be able to find required documents faster and therefore will be able to develop and fix faster. The optimal grouping of your documents into folders depends on the circumstances and on the functional setup of your application. We recommend combining the guidelines below in a way that fits your project.

#### 3.3.1 Process Related Sources

Every project has processes that are developed, so structure your documents for this process into folders that reflect those processes and their steps.

#### 3.3.2 Entity Related Sources

Every project has documents that are needed for specific entities. Think of overview pages for maintenance, validation microflows that prevent commits, or other event triggers. Those type of documents should be structured into one folder that is named after the entity where optional sub-folders could be applied to order for, example, *events and pages*.

### 3.4 Microflows

Microflow names must include the name of the main entity being processed, and the operation being performed. For example, *Prefix\_Entity\_Operation* or *ACT\_Vendor\_StartWorkflow*.

If there is no main entity, or there is another reason to use a different name to improve understandability, this is allowed. Make sure the name of the microflow clearly indicates its purpose.

To easily find and recognize the purpose for that microflow, you can use prefixes. Below are listed a number of purposes with the related prefixes.

#### 3.4.1 Entity Events

For some entities you want to use entity events that are always triggered when a specific operation is executed for an entity. Think of a field like *TotalOrderAmount* that is automatically filled based on the amount values of the order-related orderlines. An implementation choice can be to define an after-commit event that ensures that *TotalOrderAmount* is updated when a related orderline is saved. The microflows related to such an event handler should have the following prefixes:

| Event Type      | Prefix               |
|-----------------|----------------------|
| Before commit   | BCo\_\<Entity name\> |
| After commit    | ACo\_\<Entity name\> |
| Before create   | BCr\_\<Entity name\> |
| After create    | ACr\_\<Entity name\> |
| Before delete   | BDe\_\<Entity name\> |
| After delete    | ADe\_\<Entity name\> |
| Before rollback | BRo\_\<Entity name\> |
| After rollback  | ARo\_\<Entity name\> |

#### 3.4.2 Calculated Attributes

For attributes, you can choose to store the value in the database or to calculate the value based on a microflow. For the microflow that has the calculation purpose you can use *CAL\_* as a prefix.

#### 3.4.3 Project Settings

Your project settings provide three events that can trigger a microflow. In these cases we advise writing out the purpose as a microflow name. These microflows are defined only once per project and should preferably call sub-microflows to do the actual processing. These sub-microflows should have a prefix indicated below:

| Event Type      | Microflow Name | Prefix |
|-----------------|----------------|--------|
| After startup   | AfterStartUp   | ASu\_  |
| Before shutdown | BeforeShutDown | BSd\_  |
| Health check    | HealthCheck    | HCh\_  |

#### 3.4.4 Pages

Pages have a number of events that can trigger a microflow. See the following list for the examples and prefixes:

| Event Type                | Prefix             | Used In |
|---------------------------|--------------------|--------------------------------|
| On enter event            | OEn\_\<Purpose\>   | Input widgets                  |
| On change event           | OCh\_\<Purpose\>   | Input widgets                  |
| On leave event            | OLe\_\<Purpose\>   | Input widgets                  |
| Data source               | DS\_\<Purpose\>    | Data view, list view, data grid, template grid |
| Microflow/action button   | ACT\_\<Purpose\> or IVK\_\<Purpose> | Menu item, Navigation item, Microflow and Action button, Drop down button<br />(“IVK\_” is used historically) |

#### 3.4.5 Unit Test Microflows

Microflows containing unit tests should have the prefix *TEST\_*.

### 3.5 Integration

In your integrations you have the following type of documents:

| Event Type                                | Prefix |
|-------------------------------------------|--------|
| Consumed web service operation microflow  | CWS\_  |
| Published web service operation microflow | PWS\_  |
| Published app service operation microflow | PAS\_  |
| Published REST service operation microflow| PRS\_  |
| Import mapping                            | ImM\_  |
| Export mapping                            | ExM\_  |
| XML schema                                | XSD\_  |
| JSON structure                            | JSON\_ |
| Deeplink                                  | Dl\_   |

### 3.6 Scheduled Events

For the microflow that you use in your scheduled events we prefer using the prefix *SCE\_*. The event itself should have a descriptive name since it will be shown in the cloud configuration portal. Preferably the scheduled event and the microflow should have the same name. 

### 3.7 Validation

Microflows that are used for data validation use the prefix *VAL\_*.

#### 3.7.1 Home Pages

You can define the home pages per device and role in your navigation. See the list below for page names we recommend using:

| Event Type           | Device  | Page Name                   |
|----------------------|---------|-----------------------------|
| Default home page    | Desktop | Home\_Desktop\_Default      |
| Default home page    | Tablet  | Home\_Tablet\_Default       |
| Default home page    | Mobile  | Home\_Phone\_Default        |
| Role based home page | Desktop | Home\_Desktop\_\<Userrole\> |
| Role based home page | Tablet  | Home\_Tablet\_\<Userrole\>  |
| Role based home page | Mobile  | Home\_Phone\_\<Userrole\>   |

#### 3.7.2 Layouts and Snippets

Layouts should have a prefix of *LAY\_*. Snippets should use *SNIP\_*.

#### 3.7.3 Overview pages

Pages that show an overview of a single entity should have a postfix of *\_Overview*.

#### 3.7.4 New, Edit, and View Pages

Pages that are to create, edit, or view entity data, and that are not part of a process, should have the
postfix *\_New*, *\_Edit*, *\_NewEdit* or *\_View*.

#### 3.7.5 Select Pages

Pages that are used to make a selection of one object have a postfix of *\_Select* where the multi-object selection pages should have the postfix *\_MultiSelect*.

#### 3.7.6 Tooltip Pages

Pages that are used as a tooltip page should have the postfix *\_Tooltip*.

## 4. General Guidelines and Best Practices

### 4.1 Domain Models

#### 4.1.1 Attributes<a name="411-attributes"></a>

Attributes that do not reflect business-related data, but are only necessary for technical reasons, must start with an underscore (\_). A strong indicator for determining whether an attribute is business-related is to judge whether you would also capture it in case the process under consideration was a paper-only process. If so, it is likely that the attribute will deliver business value.

Using calculated (virtual) attributes is discouraged. These introduce a performance risk since they need to be calculated every time the object is used, regardless of whether the attribute itself is used.

#### 4.1.2 Inheritance<a name="412-inheritance"></a>

When using inheritance (specialization/generalization), it is recommended to use a maximum of two levels for performance reasons.

#### 4.1.3 Delete Behavior

Delete behavior must be specified where possible. Delete behavior must, however, never be relied upon when deleting large amounts of data. For performance reasons it is better to explicitly delete dependent objects when doing batch deletes.

#### 4.1.4 Event Handlers

Event handlers on domain entities must be used with a lot of caution. They can quickly result in complex and possibly unexpected behavior when more of them are applicable to a single entity. It is often best to make the execution of microflows more explicit by using sub-microflows that are called manually, for example, just before committing an object.

### 4.2 Microflows

#### 4.2.1 Size<a name="421-size"></a>

The size of a microflow should not exceed twenty-five elements. An element is any block that the Modeler allows in a microflow (loops, action activities, splits, etc.). In some cases exceeding this limit is acceptable; this can occur, for instance, for validation or data copying flows.

Split microflows up into logical, functional elements. If a microflow has more than twenty-five elements, split the microflow up by creating a sub-microflow for a part of it. For example, by separating presentation logic from business logic.

Certain cases (such as validation checks) may require this rule to be ignored to produce an understandable result.

#### 4.2.2 Documentation and Annotations<a name="422-documentation-and-annotations"></a>

All complex microflows (more than ten activities or more than two splits) must have an annotation describing the purpose of the microflow and expected parameters and return values. This annotation must be placed at the start, so it is visible when the microflow is opened. This will assist other developers in quickly understanding the general purpose of a microflow, without having to read through it entirely.

Complex, non-standard or integration-related sections in microflows must have an accompanying annotation. Examples of these are web service calls, custom loops, Java calls etc.

#### 4.2.3 Readability

The normal flow in a microflow must be aligned from left to right to ensure readability. Exceptions to the normal flow may branch out vertically: downwards is preferred, upwards if the downwards direction is already used.

Avoid crossing of lines of the links between the microflow elements.

If you decide to color code the different activities in your project, be sure to align within your team on their meaning.

#### 4.2.4 Complexity

Nested *if* statements in a single microflow expression are not allowed. If multiple checks depend on one another, this must be represented by multiple splits in the microflow, so that the complexity is not hidden away in the expressions. It is allowed to use complex and/or expressions if necessary.

Event triggers on input fields must be kept as simple as possible, since they are potentially executed very often, depending on user behavior. Complex operations here will reduce performance.

The number of parameters for a microflow should be kept to a minimum to facilitate reusability. The more parameters a microflow has, the more difficult it is to determine what should be put into the parameters to make the microflow run correctly.

#### 4.2.5 Logging and Error Handling

Use microflow error handling for all integration and Java calls. Make sure to determine the correct rollback behavior. Always log the error that occurred, even if the process can continue, this is essential for later analysis of the error.

Complex processes and important business logic (like workflow processing or validations) must include debug and trace logging. Logging actions must write the current state and progress of the process and must include a request ID or other identifying information. The log node must be the name of the module. This will greatly assist error analysis.

### 4.3 Warnings and Modeler Feedback

No warnings must be visible in the Modeler, unless explicitly documented with a reason. Warnings can indicate many issues, including maintainability and security risks, which must be resolved.

Unused and excluded items must be removed from the model when they are no longer needed. When a version of the application is prepared for a release, all these items must be cleaned up. Make sure to check whether items that appear unused are not actually called from a Java action before removing them. The Modeler provides the possibility to mark such items as used to override warnings about this.

### 4.4 XPath

XPath constraints in any part of the model must be kept as simple as possible. As a general rule, XPaths must not appear when the *Find advanced \> XPath* option in the Modeler is used with all options enabled.

When an XPath needs multiple constraints, each constraint must be put in brackets ([]) separately, instead of using the *and* keyword. This also applies to sub-constraints.

### 4.5 Security

The security overview in the Modeler must not show any incomplete (yellow) parts. All entity, microflow, and page access must be configured completely. With regards to entity access, it is recommended to not use the option to assign default rights to new members, to ensure access is only granted after a conscious decision.

### 4.6 Mendix Version

Apps should keep up with new Mendix releases as much as possible.

### 4.7 App Store Components

When introducing a new App Store component to a project, carefully consider the support level of the component. Using components that are community supported introduces a maintainability and upgrade risk.

App Store modules should NOT be modified. If an App Store module is modified, updating to a new version becomes much harder because the changes will be overwritten when a new version is downloaded from the App Store. This is why we strongly recommended not changing App Store modules. If changing an App Store module is unavoidable, changes should be marked explicitly and clearly, and performed again when the module is updated. To minimize the amount of changes in the actual App Store module, it is advisable to combine them in a separate extension module wherever possible.
