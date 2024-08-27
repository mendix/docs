---
title: "Modules"
url: /refguide9/modules/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A Mendix app consists of modules: a **System** module, a [UI resources package](/refguide9/ui-resources-package/), one or more user-defined **app modules**, [Marketplace modules](/appstore/modules/), [add-on modules](/refguide9/configure-add-on-and-solution-modules/), and [solution modules](/refguide9/configure-add-on-and-solution-modules/). Modules are a way to split the functionality of your application into separate parts. For example, a web shop can put order management in a different module than customer and product management. Studio Pro does not enforce any kind of module structure; it is up to you to choose logical modules for your application. Some modules are part of your app by default, while others you can download in the [Mendix Marketplace](https://marketplace.mendix.com/) to add functionality to app.

The domain model is a data model that describes the information in your application domain in an abstract way.

Within a module you can define [module security](/refguide9/module-security/) via module roles and specify security settings of those module roles for pages, microflows, entities and datasets.

Furthermore, a module can contain many different types of documents. Each type of document is described in its own domain-specific language (DSL). For example, user-interface forms are described by using a visual language with elements like text boxes, tables and grids. Below you see tables grouped by category of all the different kinds of documents you can create within a module.

{{% alert color="info" %}}
Mendix Modules are distinct from React Native modules. Mendix modules are portions of your app which can include a data model, logic, and UI with a portable security model. React Native modules expose native Java/Objective-C and C++ objects allowing for React Native apps (in Mendix apps, you can leverage these modules via widgets or JavaScript actions to use device sensors or capabilities).
{{% /alert %}}

## Module Types {#module-types}

{{% alert color="info" %}}
In Studio Pro 9, add-on modules and solution modules were previously available in preview for select customers and partners as part of an early access program. In Studio Pro 10, this functionality is generally available for all users. For more information, see this page in the [Studio Pro 10 Guide](/refguide/modules/).
{{% /alert %}}

When you create a module, it has a default **app module** type. The type can be changed at any time in [Module Settings](/refguide9/module-settings/). 

There are the following type of modules:

* [App modules](/refguide9/module-settings/#app-module) (standard modules)
* [Add-on modules](/refguide9/module-settings/#add-on-module) 
* [Solution modules](/refguide9/module-settings/#solution-module)

## Common

| Document type | Typical elements | Description |
| --- | --- | --- |
| [Pages](/refguide9/pages/) | [Data view](/refguide9/data-view/), [Data grid](/refguide9/data-grid/), [Table](/refguide9/table/), [Text box](/refguide9/text-box/) | Forms are used to create a user interface for the end-user. They are composed of components that are called widgets. |
| [Microflows](/refguide9/microflows/) | [Activities](/refguide9/activities/), [Sequence Flow](/refguide9/sequence-flow/) | Microflows describe the logic of your application. They are composed of activities that manipulate objects, interact with the client etcetera. |
| [Enumerations](/refguide9/enumerations/) |   | An enumeration is a set of predefined values, for example: in a web shop, an enumeration called MemberType could have the values Gold and Silver. |

## Page Resources

| Document type | Description |
| --- | --- |
| [Images](/refguide9/images/) | Images can be used to brighten up your application. Navigation items and the various kinds of buttons have small images (icons) to left of their captions. |
| [Layouts](/refguide9/layout/) | Layouts specify what comes where. Each [page](/refguide9/page/) is based on a layout. The layout contains widgets and structures that return on every page based on that layout.  |
| [Menus](/refguide9/menu/) | A menu document defines a navigation menu that can be used by a [menu widget](/refguide9/menu-widgets/). |
| [Snippets](/refguide9/snippet/) | Snippets define reusable interface parts. They can be used on [pages](/refguide9/page/) and [layouts](/refguide9/layout/). |

## Resources

| Document type | Description |
| --- | --- |
| [Constants](/refguide9/constants/) | Constants are used to define a constant value, for example: to store an URL to a webservice. |
| [Datasets](/refguide9/data-sets/) | A dataset can be used for reporting and is defined using either an OQL query or a custom Java action. |
| [Document Templates](/refguide9/document-templates/) | Document Templates are used to model a template needed as input for a document export action which can generate all kinds of documents based on application data. They are composed much in the same way as Forms. |
| [Java Actions](/refguide9/java-actions/) | With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow. |
| [Regular Expressions](/refguide9/regular-expressions/) | A regular expression is used by [validation rules](/refguide9/validation-rules/) on an entity to describe a set of criteria that a string can match. |
| [Rules](/refguide9/rules/) | A rule defines a set of criteria, with a certain input the rule will result in a Boolean or enumeration depending on the criteria met. It can be called from a decision to determine the direction the microflow should go once the decision is reached. |
| [Task Queue](/refguide9/task-queue/) | A task queue runs continuously to check if any microflow tasks have been added to it and executes the tasks in the background. |
| [Scheduled Events](/refguide9/scheduled-events/) | A scheduled event is used to execute a microflow at a certain point in time. You can also schedule it to repeat after a given time. For example, a scheduled event can run every morning at 6 AM |

## Consumed Services

| Document type | Description |
| --- | --- |
| [Consumed Web Services](/refguide9/consumed-web-services/) | Importing web services of other applications (Mendix or otherwise) allows you to call those web services from your microflows. |
|  | A domain-to-XML mapping defines a translation from domain model objects to XML objects. |
|  | An XML-to-domain mapping defines a translation from XML objects to domain model objects. |
| [XML Schemas](/refguide9/xml-schemas/) | An XML schema is defined in an XML Schema Definition (XSD) file and can be imported in your model. It describes what a certain XML document should look like. |

## Published Services

| Document type | Description |
| --- | --- |
| [Published REST Services](/refguide9/published-rest-services/) | A microflow can be published as a REST service operation so that it can be consumed by other Mendix applications. |
| [Published OData Services](/refguide9/published-odata-services/) | Persistable entities can be exposed as an OData resource, so that they can be imported by third-party applications such as Excel. |
| [Published Web Services](/refguide9/published-web-services/) | A microflow can be published as a web service operation so that it can be called by third-party applications. |
