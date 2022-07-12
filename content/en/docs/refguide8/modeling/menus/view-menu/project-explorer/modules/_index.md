---
title: "Modules"
url: /refguide8/modules/
weight: 20
tags: ["studio pro", "module", "modules"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/modules.pdf).
{{% /alert %}}

## 1 Introduction

A Mendix project consists of modules: a **System** module, a [UI resources package](/refguide8/ui-resources-package/), and one or more user-defined modules. Modules are a way to split the functionality of your application into separate parts. For example, a web shop can put order management in a different module than customer and product management. Studio Pro does not enforce any kind of module structure; it is up to you to choose logical modules for your application.

A module always contains exactly one [domain model](/refguide8/domain-model/). The domain model is a data model that describes the information in your application domain in an abstract way.

Within a module you can define [module security](/refguide8/module-security/) via module roles and specify security settings of those module roles for pages, microflows, entities and datasets.

Furthermore, a module can contain many different types of documents. Each type of document is described in its own domain-specific language (DSL). For example, user-interface forms are described by using a visual language with elements like text boxes, tables and grids. Below you see tables grouped by category of all the different kinds of documents you can create within a module.

## 2 Common

| Document type | Typical elements | Description |
| --- | --- | --- |
| [Pages](/refguide8/pages/) | [Data view](/refguide8/data-view/), [Data grid](/refguide8/data-grid/), [Table](/refguide8/table/), [Text box](/refguide8/text-box/) | Forms are used to create a user interface for the end-user. They are composed of components that are called widgets. |
| [Microflows](/refguide8/microflows/) | [Activities](/refguide8/activities/), [Sequence Flow](/refguide8/sequence-flow/) | Microflows describe the the logic of your application. They are composed of activities that manipulate objects, interact with the client etcetera. |
| [Enumerations](/refguide8/enumerations/) |   | An enumeration is a set of predefined values, for example: in a web shop, an enumeration called MemberType could have the values Gold and Silver. |

## 3 Page Resources

| Document type | Description |
| --- | --- |
| [Images](/refguide8/images/) | Images can be used to brighten up your application. Navigation items and the various kinds of buttons have small images (icons) to left of their captions. |
| [Layouts](/refguide8/layout/) | Layouts specify what comes where. Each  [page](/refguide8/page/) is based on a layout. The layout contains widgets and structures that return on every page based on that layout.  |
| [Menus](/refguide8/menu/) | A menu document defines a navigation menu that can be used by a  [menu widget](/refguide8/menu-widgets/). |
| [Snippets](/refguide8/snippet/) | Snippets define reusable interface parts. They can be used on  [pages](/refguide8/page/) and  [layouts](/refguide8/layout/) . |

## 4 Resources

| Document type | Description |
| --- | --- |
| [Constants](/refguide8/constants/) | Constants are used to define a constant value, for example: to store an URL to a webservice. |
| [Datasets](/refguide8/data-sets/) | A dataset can be used for reporting and is defined using either an OQL query or a custom Java action. |
| [Document Templates](/refguide8/document-templates/) | Document Templates are used to model a template needed as input for a document export action which can generate all kinds of documents based on application data. They are composed much in the same way as Forms. |
| [Java Actions](/refguide8/java-actions/) | With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow. |
| [Regular Expressions](/refguide8/regular-expressions/) | A regular expression is used by [validation rules](/refguide8/validation-rules/) on an entity to describe a set of criteria that a string can match. |
| [Rules](/refguide8/rules/) | A rule defines a set of criteria, with a certain input the rule will result in a Boolean or enumeration depending on the criteria met. It can be called from a decision to determine the direction the microflow should go once the decision is reached. |
| [Scheduled Events](/refguide8/scheduled-events/) | A scheduled event is used to execute a microflow at a certain point in time. You can also schedule it to repeat after a given time. For example, a scheduled event can run every morning at 6 A.M. |

## 5 Consumed Services

| Document type | Description |
| --- | --- |
| [Consumed Web Services](/refguide8/consumed-web-services/) | Importing web services of other applications (Mendix or otherwise) allows you to call those web services from your microflows. |
|  | A domain-to-XML mapping defines a translation from domain model objects to XML objects. |
|  | An XML-to-domain mapping defines a translation from XML objects to domain model objects. |
| [XML Schemas](/refguide8/xml-schemas/) | An XML schema is defined in an XML Schema Definition (XSD) file and can be imported in your model. It describes what a certain XML document should look like. |

## 6 Published Services

| Document type | Description |
| --- | --- |
| [Published REST Services](/refguide8/published-rest-services/) | A microflow can be published as a REST service operation so that it can be consumed by other Mendix applications. |
| [Published OData Services](/refguide8/published-odata-services/) | Persistable entities can be exposed as an OData resource, so that they can be imported by third-party applications such as Excel. |
| [Published Web Services](/refguide8/published-web-services/) | A microflow can be published as a web service operation so that it can be called by third-party applications. |
