---
title: "Modules"
url: /refguide/modules/
parent: "project-explorer"
weight: 20
tags: ["studio pro", "module", "modules"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A Mendix app consists of modules: a **System** module, a [UI resources package](/refguide/ui-resources-package/), and one or more user-defined modules. Modules are a way to split the functionality of your application into separate parts. For example, a web shop can put order management in a different module than customer and product management. Studio Pro does not enforce any kind of module structure; it is up to you to choose logical modules for your application.

Some modules are part of your app by default, while others you can download in the [Mendix Marketplace](https://marketplace.mendix.com/) to add functionality to app. For more information on downloading and installing a module from the Marketplace, see [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) in the *Marketplace Guide*.

A module always contains exactly one [domain model](/refguide/domain-model/). The domain model is a data model that describes the information in your application domain in an abstract way.

Within a module you can define [module security](/refguide/module-security/) via module roles and specify security settings of those module roles for pages, microflows, entities and datasets.

Furthermore, a module can contain many different types of documents. Each type of document is described in its own domain-specific language (DSL). For example, user-interface forms are described by using a visual language with elements like text boxes, tables and grids. Below you see tables grouped by category of all the different kinds of documents you can create within a module.

{{% alert color="info" %}}
Mendix Modules are distinct from React Native modules. 

Mendix modules are portions of your app which can include a data model, logic, and UI with a portable security model. 

React Native modules expose native Java/Objective-C and C++ objects allowing for React Native apps (in Mendix apps you can leverage these modules via widgets or JavaScript actions to use device sensors or capabilities).
{{% /alert %}}

## 2 Common

| Document type | Typical elements | Description |
| --- | --- | --- |
| [Pages](/refguide/pages/) | [Data view](/refguide/data-view/), [Data grid](/refguide/data-grid/), [Table](/refguide/table/), [Text box](/refguide/text-box/) | Forms are used to create a user interface for the end-user. They are composed of components that are called widgets. |
| [Microflows](/refguide/microflows/) | [Activities](/refguide/activities/), [Sequence Flow](/refguide/sequence-flow/) | Microflows describe the the logic of your application. They are composed of activities that manipulate objects, interact with the client etcetera. |
| [Enumerations](/refguide/enumerations/) |   | An enumeration is a set of predefined values, for example: in a web shop, an enumeration called MemberType could have the values Gold and Silver. |

## 3 Page Resources

| Document type | Description |
| --- | --- |
| [Images](/refguide/images/) | Images can be used to brighten up your application. Navigation items and the various kinds of buttons have small images (icons) to left of their captions. |
| [Layouts](/refguide/layout/) | Layouts specify what comes where. Each  [page](/refguide/page/) is based on a layout. The layout contains widgets and structures that return on every page based on that layout.  |
| [Menus](/refguide/menu/) | A menu document defines a navigation menu that can be used by a  [menu widget](/refguide/menu-widgets/). |
| [Snippets](/refguide/snippet/) | Snippets define reusable interface parts. They can be used on  [pages](/refguide/page/) and  [layouts](/refguide/layout/) . |

## 4 Resources

| Document type | Description |
| --- | --- |
| [Constants](/refguide/constants/) | Constants are used to define a constant value, for example: to store an URL to a webservice. |
| [Datasets](/refguide/data-sets/) | A dataset can be used for reporting and is defined using either an OQL query or a custom Java action. |
| [Document Templates](/refguide/document-templates/) | Document Templates are used to model a template needed as input for a document export action which can generate all kinds of documents based on application data. They are composed much in the same way as Forms. |
| [Java Actions](/refguide/java-actions/) | With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow. |
| [Regular Expressions](/refguide/regular-expressions/) | A regular expression is used by [validation rules](/refguide/validation-rules/) on an entity to describe a set of criteria that a string can match. |
| [Rules](/refguide/rules/) | A rule defines a set of criteria, with a certain input the rule will result in a Boolean or enumeration depending on the criteria met. It can be called from a decision to determine the direction the microflow should go once the decision is reached. |
| [Task Queue](/refguide/task-queue/) | A task queue runs continuously to check if any microflow tasks have been added to it and executes the tasks in the background. |
| [Scheduled Events](/refguide/scheduled-events/) | A scheduled event is used to execute a microflow at a certain point in time. You can also schedule it to repeat after a given time. For example, a scheduled event can run every morning at 6 A.M. |

## 5 Consumed Services

| Document type | Description |
| --- | --- |
| [Consumed Web Services](/refguide/consumed-web-services/) | Importing web services of other applications (Mendix or otherwise) allows you to call those web services from your microflows. |
|  | A domain-to-XML mapping defines a translation from domain model objects to XML objects. |
|  | An XML-to-domain mapping defines a translation from XML objects to domain model objects. |
| [XML Schemas](/refguide/xml-schemas/) | An XML schema is defined in an XML Schema Definition (XSD) file and can be imported in your model. It describes what a certain XML document should look like. |

## 6 Published Services

| Document type | Description |
| --- | --- |
| [Published REST Services](/refguide/published-rest-services/) | A microflow can be published as a REST service operation so that it can be consumed by other Mendix applications. |
| [Published OData Services](/refguide/published-odata-services/) | Persistable entities can be exposed as an OData resource, so that they can be imported by third-party applications such as Excel. |
| [Published Web Services](/refguide/published-web-services/) | A microflow can be published as a web service operation so that it can be called by third-party applications. |
