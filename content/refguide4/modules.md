---
title: "Modules"
category: "Modeler"
---
A Mendix project consists of modules: a System module and one or more user-defined modules. Modules are a way to split the functionality of your application into separate parts. For example, a web shop can put order management in a different module than customer and product management. The Modeler does not enforce any kind of module structure; it is up to you to choose logical modules for your application.

A module can contain many different types of documents. Each type of document is described in its own domain-specific language (DSL). For example, user-interface forms are described by using a visual language with elements like text boxes, tables and grids. Below you see tables grouped by category of all the different kinds of documents you can create within a module.

## Common

| Document type | Typical elements | Description |
| --- | --- | --- |
| [Domain Model](domain-model) | [Entities](entities), [Attributes](attributes), [Associations](associations) | The domain model is a data model that describes the information in your application domain in an abstract way. It is central to the architecture of your application. |
| [Forms](forms) | [Data View](data-view), [Data Grid](data-grid), [Table](table), [Text Box](text-box) | Forms are used to create a user interface for the end user. They are composed of components that are called widgets. |
| [Microflows](microflows) | [Activities](activities), [Sequence Flow](sequence-flow) | Microflows describe the the logic of your application. They are composed of activities that manipulate objects, interact with the client etcetera. |

## Resources

| Document type | Description |
| --- | --- |
| [Constants](constants) | Constants are used to define a constant value, for example: to store an URL to a webservice. |
| [Data sets](data-sets) | A data set can be used for reporting and is defined using either an OQL query or a custom Java action. |
| [Document templates](document-templates) | Document Templates are used to model a template needed as input for a document export action which can generate all kinds of documents based on application data. They are composed much in the same way as Forms. |
| [Enumerations](enumerations) | An enumeration is a set of predefined values, for example: in a webshop, an enumeration called MemberType could have the values Gold and Silver. |
| [Java actions](java-actions) | With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow. |
| [Regular expressions](regular-expressions) | A regular expression describes a set of criteria that a string can match. |
| [Rules](rules) | A rule defines a set of criteria, with a certain input the rule will result in a boolean or enumeration depending on the criteria met. It can be called from an exclusive split to determine the direction the microflow should go once the exclusive split is reached. |
| [Scheduled Events](scheduled-events) | A scheduled event is used to execute a microflow at a certain point in time. You can also schedule it to repeat after a given time. For example, a scheduled event can run every morning at 6 A.M. |

## Integration

| Document type | Description |
| --- | --- |
| [Domain-to-XML mappings](domain-to-xml-mappings) | A domain-to-XML mapping defines a translation from domain model objects to XML objects. |
| [Imported web services](imported-web-services) | Importing web services of other applications (Mendix or otherwise) allows you to call those web services from your microflows. |
| [Published web services](published-web-services) | A microflow can be published as a web service so that it can be called by other applications. |
| [XML schemas](xml-schemas) | An XML schema is defined in an XML Schema Definition (XSD) file and can be imported in your model. It describes what a certain XML document should look like. |
| [XML-to-Domain Mappings](xml-to-domain-mappings) | An XML-to-domain mapping defines a translation from XML objects to domain model objects. |
