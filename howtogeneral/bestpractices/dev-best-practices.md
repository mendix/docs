---
title: "Mendix Development Best-Practices"
space: "General How-To's"
category: "Best Practices"
---
#Mendix Development Basic Best-Practices

## 1. Introduction

This document is written to be used as a guideline for adopting consistent
naming and modeling conventions while developing your Mendix applications. This
will help to improve your application’s maintainability, performance and makes
it easier to read and understand.

Even with the powerful navigation and search support in the Mendix modeler,
adhering to naming and modeling conventions is a wise thing because:

-   After finishing an application, it is usually handed over to different
    people for maintenance. Years later they still need to able to understand
    what you did and how to improve on it.

-   When viewing an existing application everybody should quickly understand the
    app, what is located where and how the different parts are interrelated.

-   A clear structure aids in identifying reusable code.

## 2. Project setup

### 2.1 The application development language

The language that will be used to develop the application should be determined
upfront. In this way we have one language for modules, entities, microflows,
pages, etc. The preferred language for development is *English*.

There are some exceptions why certain parts of an application may use another
language. The main exception we see would be in the domain model of an
integration module. For example, in case the source data model is in another
language already.

### 2.2 Project Name

Every project is to be given a name at start. Make sure that you use a logical
name that allows you to easily identify the application. You probably will
create more projects in the future and easily want to recognize this project. We
recommend to not include dates or Mendix version numbers in the project name
since that information can be captured and extracted in a different way.

### 2.3 Configurations

In every project you have one or multiple configurations. Every project starts
with a single configuration called default. When you work with multiple persons
on an application it is beneficial to create multiple configurations. When doing
so please use logical names for those configurations like the name of the
developer or purposes like 'Test' and 'Acceptance'. Beware that the database
passwords defined in the configuration will be visible to other team members as
well, be careful with using personal passwords you like to keep secret.

### 2.4 User roles

The user roles should have logical names that reflect the different types of
persons that will use the application. The user roles are singular and use a
camel-case notation like 'FunctionalAdministrator'. User roles are mostly
defined in English, a choice can be made to define this in the language of the
country since the user role is visible in the front end.

Each user role should correspond to only one module role per module. In other
words, a user role should not map to multiple module roles within the same
module. This helps to keep the number of applicable module roles for a user low,
which reduces complexity in understanding the security model and reduces the
performance impact of complex security rules.

## 3. Naming Conventions

### 3.1 Modules

#### 3.1.1 Module names

Modules should be treated like standalone replaceable services, e.g. the
customer module should function as much as possible as a standalone customer
management system, replaceable by a different customer management system. Module
names should have camel-case names on which we can identify the responsibility
of the module. E.g. CustomerManagement or SharePointIntegration.

#### 3.1.2 Module roles

The modules roles should have logical names that reflect the access they should
have within a module. In comparison to the user role the module role should
always be in English, for instance Administrator or Employee.

### 3.2 Domain model 

#### 3.2.1 Entity names

Most of the time an entity reflects a real object in the world where people can
relate to. Therefore the name should make sense to reflect that entity and be
recognizable for its purpose. There can always be exceptions to create other
type of entities due to project specific needs but that is up to you. The name
of an entity is singular since the entity reflects a single instance of an
object. A good example is to use ‘Customer’ as a name and not to use
‘Customers’. Furthermore we advise to avoid abbreviations, underscores,
mathematical characters or any other special characters in the names of
entities. Entity names also use camel case, e.g. HousekeepingRecord or LogEntry.

#### 3.2.2 Entity attributes

The entity attribute should reflect a property of a real object in the world
where people can relate to and fits the purpose of that property. Furthermore we
advise to avoid abbreviations, underscores, mathematical characters or any other
special characters in the names. Entity attributes use camel case, e.g.
FirstName or TelephoneNumber.

#### 3.2.3 Associations

Association names in the domain model are automatically generated by Mendix. The
auto-generated names are good to use by default. If you have multiple
associations between the same two entities we recommend to extend the
association name. By extending this name with a recognizable part we will be
aware of the purpose of this specific association. E.g. you can have a relation
between **Person** and **Address**. A person can have multiple addresses but you
want to specify what his/her postal address is and what his/her delivery address
is. An implementation choice could be that you create two new associations for
that purpose and adjust the names of the associations accordingly. For example,
 Person\_Address\_Delivery.

A second recommendation is that when an association already exists between
entities and you change the name on one or both of the entities that you will
rename the association. Mendix will not do this automatically for you and this
way you will keep your model consistent and up-to-date.

### 3.3 Folders

The structure for your documents starts with a clear separation of folders. When
using a decent folder structure you will improve the maintainability of your
application and you will be able to find the needed documents faster and
therefore will be able to develop and fix faster. The optimal grouping of your
documents into folders depends on circumstances and is dependent on the
functional setup of your application. We recommend combining the following
guidelines in the way that fits your project:

#### 3.3.1 Process related sources

Every project has processes that are developed so why not structure your needed
documents for this process into folders that reflect those processes and their
steps.

#### 3.3.2 Entity related sources

Every project has documents that are needed for specific entities. Think of
overview pages for maintenance, validation microflows that prevent commits or
other event triggers. Those type of documents should be structured into one
folder that is named after the entity where optional sub-folders could be
applied to order i.e. events and pages.

### 3.4 Microflows


Microflow names must include the name of the main entity being processed, and
the operation being performed. E.g. “Prefix\_Entity\_Operation” or
“ACT\_Vendor\_StartWorkflow”.

If there is no main entity, or there is another reason to use a different name
to improve understandability, this is allowed. Make sure the name of the
microflow clearly indicates the purpose.

To easily find and recognize the purpose for that microflow you can use
prefixes. Below we have listed a number of purposes with the related prefixes.

#### 3.4.1 Entity events

For some entities you want to use entity events that are always triggered when a
specific operation is executed for an entity. Think of a field like
‘TotalOrderAmount’ that is automatically filled based on the amount values of
the order related orderlines. An implementation choice can be to define an after
commit event that ensures that ‘TotalOrderAmount’ is updated when a related
orderline is saved. The microflows related to such an event handler should have
the following prefixes:

| Event type      | Prefix               |
|-----------------|----------------------|
| Before commit   | BCO\_\<Entity name\> |
| After commit    | ACO\_\<Entity name\> |
| Before create   | BCR\_\<Entity name\> |
| After create    | ACR\_\<Entity name\> |
| Before delete   | BDE\_\<Entity name\> |
| After delete    | ADE\_\<Entity name\> |
| Before rollback | BRO\_\<Entity name\> |
| After rollback  | ARO\_\<Entity name\> |

#### 3.4.2 Calculated Attributes

For attributes you can choose to store the value in the database or to calculate
the value based on a microflow. For the microflow that has the calculation
purpose you can use **CAL\_** as a prefix.

#### 3.4.3 Project Settings

In your project settings you can find 3 events that can trigger a microflow. In
these cases we advise to write out the purpose as a microflow name. These
microflows are defined only once per project and should preferably call
submicroflows to do actual processing. These submicroflows should have the
indicated prefix.

| Event type      | Microflow name | Prefix |
|-----------------|----------------|--------|
| After startup   | AfterStartUp   | ASU\_  |
| Before shutdown | BeforeShutDown | BSD\_  |
| Health check    | HealthCheck    | HCK\_  |

#### 3.4.4 Pages

Within your pages you have a number of events that can trigger a microflow. See
below the list for the examples and prefixes.

| Event type                | Prefix                               | Used in                                                                                               |
|---------------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------|
| On enter event            | OEN\_\<Purpose\>                     | Input widgets                                                                                         |
| On change event           | OCH\_\<Purpose\>                     | Input widgets                                                                                         |
| On leave event            | OLE\_\<Purpose\>                     | Input widgets                                                                                         |
| Data source               | DS\_\<Purpose\>                      | Data view, list view, data grid, template grid                                                        |
| Microflow / action button | ACT\_\<Purpose\>                     | Menu item, Navigation item, Microflow & Action button, Drop down button                               |
|                           | *or*                                 | (“IVK\_” is used historically)                                                                        |
|                           | IVK\_\<Purpose\>                     |                                                                                                       |

#### 3.4.5 Unit test microflows

Microflows containing unit tests should have the prefix **TEST\_**.

### 3.5 Integration

In your integrations you have the following type of documents.

| Event type                               | Prefix |
|------------------------------------------|--------|
| Published webservice operation microflow | WOP\_  |
| Published appservice operation microflow | AOP\_  |
| Import mapping                           | INM\_  |
| Export mapping                           | EXM\_  |
| XML schema                               | XML\_  |
| JSON Structure                           | JSON\_ |
| Deeplink                                 | DL\_   |

### 3.6 Scheduled events

For the microflow that you use in your scheduled events we prefer to use the
prefix **SCE\_**. The event itself should have a descriptive name since it will
be shown in the cloud configuration portal. Preferably the scheduled event and
the microflow should have the same name. 

### 3.7 Validation

Microflows that are used for data validation use the prefix **VAL\_**.

#### 3.7.1 Home pages

In your navigation you can define the home pages per device and role. See below
a list of page names that we advise to use.

| Event type           | Device  | Page name                   |
|----------------------|---------|-----------------------------|
| Default home page    | Desktop | Home\_Desktop\_Default      |
| Default home page    | Tablet  | Home\_Tablet\_Default       |
| Default home page    | Mobile  | Home\_Phone\_Default        |
| Role based home page | Desktop | Home\_Desktop\_\<Userrole\> |
| Role based home page | Tablet  | Home\_Tablet\_\<Userrole\>  |
| Role based home page | Mobile  | Home\_Phone\_\<Userrole\>   |

#### 3.7.2 Layouts and Snippets

Layouts should have a prefix of **LAY\_**. Snippets should use **SNIP\_**.

#### 3.7.3 Overview pages

Pages that show an overview of a single entity should have a postfix
of **\_Overview**.

#### 3.7.4 New / Edit / View pages

Pages that are to create, edit or view entity data and that are not part of a
process should have the
postfix **\_New**, **\_Edit**, **\_NewEdit** or **\_View**.

#### 3.7.5 Select pages

Pages that are used to make a selection of one object have a postfix
of **\_Select** where the multi object selection pages should have the
postfix **\_MultiSelect**.

#### 3.7.6 Tooltip pages

Pages that are used as a tooltip page should have the postfix **\_Tooltip**.

## 4. General guidelines and best practices

### 4.1 Domain models

#### 4.1.1 Attributes

Attributes which do not reflect business-related data but are only necessary for
technical reasons must start with an underscore (“\_”). A strong indicator for
determining whether an attribute is business-related is to judge whether you
would also capture it in case the process under consideration was a paper-only
process. If yes, it is likely that the attribute will deliver business value.

Using calculated (virtual) attributes is discouraged. These introduce a
performance risk since they need to be calculated every time the object is used,
regardless of whether the attribute itself is used.

#### 4.1.2 Inheritance

When using Inheritance (specialization/generalization), it is recommended to use
a maximum of two levels for performance reasons.

#### 4.1.3 Delete behavior

Delete behavior must be specified where possible. Delete behavior must, however,
never be relied upon when deleting large amounts of data. For performance
reasons it is better to explicitly delete dependent objects when doing batch
deletes.

#### 4.1.4 Event handlers

Event handlers on domain entities must be used with a lot of caution. They can
quickly result in complex and possibly unexpected behavior when more of them are
applicable to a single entity. It is often best to make the execution of
microflows more explicit by using submicroflows that are called manually, e.g.
just before committing an object.

### 4.2 Microflows

#### 4.2.1 Size

The size of a microflow should not exceed 25 elements. An element is any block
that the modeler allows in a microflow (loops, action activities, splits etc.).
In some cases exceeding this limit is acceptable; this can occur for instance
for validation or data copying flows.

Split microflows up into logical, functional elements. If a microflow has more
than 25 elements, split the microflow up by creating a submicroflow for a part
of it. For example, by separating presentation logic from business logic.

Certain cases (such as validation checks) may require this rule to be ignored to
produce an understandable result.

#### 4.2.2 Documentation and annotations

All complex microflows (more than 10 activities or more than 2 splits) must have
an annotation describing the purpose of the microflow and expected parameters
and return values. This annotation must be put at the start, so it is visible
when the microflow is opened. This will assist other developers in quickly
understanding the general purpose of a microflow, without having to read through
it entirely.

Complex, non-standard or integration-related sections in microflows must have an
accompanying annotation. Examples of these are web service calls, custom loops,
Java calls etc.

#### 4.2.3 Readability

The normal flow in a microflow must be aligned from left to right to ensure
readability. Exceptions to the normal flow may branch out vertically: downwards
is preferred, upwards if the downwards direction is already used.

Avoid crossing of lines of the links between the MF elements.

If you decide to color code the different activities in your project, be sure to
align within your team on their meaning.

#### 4.2.4 Complexity

Nested if statements in a single microflow expression are not allowed. If
multiple checks depend on one another, this must be represented by multiple
splits in the microflow, so that the complexity is not hidden away in the
expressions. It is allowed to use complex and/or expressions if necessary.

Event triggers on input fields must be kept as simple as possible, since they
are potentially executed very often, depending on user behavior. Complex
operations here will reduce performance.

The number of parameters for a microflow should be kept to a minimum, to
facilitate reuse. If a microflow has many parameters, it becomes more difficult
to determine what should be put into the parameters to make the microflow run
correctly.

#### 4.2.5 Logging and error handling

Use microflow error handling for all integration and Java calls. Make sure to
determine the correct rollback behavior. Always log the error that occurred,
even if the process can continue; this is essential for later analysis of the
error.

Complex processes and important business logic (e.g. workflow processing or
validations) must include debug and trace logging. Logging actions must write
the current state and progress of the process and must include a request ID or
other identifying information. The log node must be the name of the module. This
will greatly assist error analysis.

### 4.3 Warnings and modeler feedback

No warnings must be visible in the modeler, unless explicitly documented with a
reason. Warnings can indicate many issues, including maintainability and
security risks, which must be resolved.

Unused and excluded items must be removed from the model when they are no longer
needed. When a version of the application is prepared for a release, all these
items must be cleaned up. Make sure to check whether items that appear unused
are not actually called from a Java action before removing them. The modeler
provides the possibility to mark such items as used to override warnings about
this.

### 4.4 XPath

XPath constraints in any part of the model must be kept as simple as possible.
As a general rule, XPaths must not appear when the “Find advanced \> XPath”
option in the modeler is used with all options enabled.

When an XPath needs multiple constraints, each constraint must be put in
brackets (“[]”) separately, instead of using the “and” keyword. This also
applies to sub-constraints.

### 4.5 Security

The security overview in the modeler must not show any incomplete (yellow)
parts. All entity, microflow and page access must be configured completely. With
regards to entity access, it is recommended to not use the option to assign
default rights to new members, as to ensure access is only granted after a
conscious decision.

### 4.6 Mendix version

Apps should keep up with new Mendix releases as much as possible.

### 4.7 App store components

When introducing a new app store component to a project, carefully consider the
support level of the component. Using components that are community supported
introduces a maintainability and upgrade risk.

App store modules should NOT be modified. If an app store module is modified,
updating to a new version becomes much harder since the changes will be
overwritten when a new version is downloaded from the app store. This means it
is strongly preferred not to change app store modules. If changing an app store
module is unavoidable, changes should be marked explicitly and clearly, and
performed again when the module is updated. To minimize the amount of changes in
the actual app store module, it is advisable to combine them in a separate
extension module wherever possible.
