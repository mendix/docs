---
title: "Modules"
category: "Modeler"
space: "Reference Guide 5"
---


A Mendix project consists of modules: a System module and one or more user-defined modules. Modules are a way to split the functionality of your application into separate parts. For example, a web shop can put order management in a different module than customer and product management. The Modeler does not enforce any kind of module structure; it is up to you to choose logical modules for your application.

A module can contain many different types of documents. Each type of document is described in its own domain-specific language (DSL). For example, user-interface forms are described by using a visual language with elements like text boxes, tables and grids. Below you see tables grouped by category of all the different kinds of documents you can create within a module.

## Common

Document type                | Typical elements                                                              | Description
---------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
[Domain Model](/refguide5/domain-model) | [Entities](/refguide5/entities), [Attributes](/refguide5/attributes), [Associations](/refguide5/associations)                                      | The domain model is a data model that describes the information in your application domain in an abstract way. It is central to the architecture of your application.
[Pages](/refguide5/pages)                      | [Data view](/refguide5/data-view), [Data grid](/refguide5/data-grid), [Table](/refguide5/table), [Text box](/refguide5/text-box) | Forms are used to create a user interface for the end user. They are composed of components that are called widgets.
[Microflows](/refguide5/microflows)               | [Activities](/refguide5/activities), [Sequence Flow](/refguide5/sequence-flow)                                  | Microflows describe the the logic of your application. They are composed of activities that manipulate objects, interact with the client etcetera.


## Resources

Document type                              | Description
------------------------------------------ | ------------------------------------------
[Constants](/refguide5/constants)                                | Constants are used to define a constant value, for example: to store an URL to a webservice.
[Data Sets](/refguide5/data-sets)                     | A data set can be used for reporting and is defined using either an OQL query or a custom Java action.
[Document Templates](/refguide5/document-templates)   | Document Templates are used to model a template needed as input for a document export action which can generate all kinds of documents based on application data. They are composed much in the same way as Forms.
[Enumerations](/refguide5/enumerations)                            | An enumeration is a set of predefined values, for example: in a webshop, an enumeration called MemberType could have the values Gold and Silver.
[Java Actions](/refguide5/java-actions)               | With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow.
[Regular Expressions](/refguide5/regular-expressions) | A regular expression describes a set of criteria that a string can match.
[Rules](/refguide5/rules)                                    | A rule defines a set of criteria, with a certain input the rule will result in a boolean or enumeration depending on the criteria met. It can be called from an exclusive split to determine the direction the microflow should go once the exclusive split is reached.
[Scheduled Events](/refguide5/scheduled-events)       | A scheduled event is used to execute a microflow at a certain point in time. You can also schedule it to repeat after a given time. For example, a scheduled event can run every morning at 6 A.M.


## Integration

Document type                                        | Description
---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------
[Domain-to-XML Mappings](/refguide5/domain-to-xml-mappings)     | A domain-to-XML mapping defines a translation from domain model objects to XML objects.
[Consumed Web Services](/refguide5/consumed-web-services)       | Importing web services of other applications (Mendix or otherwise) allows you to call those web services from your microflows.
[Published Web Services](/refguide5/published-web-services)     | A microflow can be published as a web service operation so that it can be called by third-party applications.
[Published App Services](/refguide5/published-app-services)     | A microflow can be published an an app service action so that it can be consumed by other Mendix applications.
[Published OData Services](/refguide5/published-odata-services) | Persistent entities can be exposed as an OData resource, so that they can be imported by third-party applications such as Excel.
[XML Schemas](/refguide5/xml-schemas)                           | An XML schema is defined in an XML Schema Definition (XSD) file and can be imported in your model. It describes what a certain XML document should look like.
[XML-to-Domain Mappings](/refguide5/xml-to-domain-mappings)     | An XML-to-domain mapping defines a translation from XML objects to domain model objects.
