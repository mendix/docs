---
title: "Integration"
parent: "modules"
---
Integrating with other applications (Mendix or otherwise) is preferably done by using web services and XML. Below the some often used terms are explained in the context of the Mendix technology.

## Web Services

Web services (see also [wikipedia](http://en.wikipedia.org/wiki/Web_service)) are a way of exposing or absorbing functions and/or data entities between systems. They can be used to enable applications to "talk" to each other through the network (or internet).

Mendix supports the interaction between servers using SOAP. This can either be Mendix-to-Mendix, Mendix-to-ThirdParty or ThirdParty-to-Mendix.

### Imported web services

Using third party web services is easy in Mendix. There is a Microflow activity available which calls a web service on another system and imports the XML in the Mendix database. See [Imported Web Services](imported-web-services).

### Published web services

To expose functionality in a Mendix server (thus enabling other systems to make use of certain functions) a Microflow can easily be published as a web service. See [Published Web Services](published-web-services).

## XML

To enable systems to understand each other, a standard way of "encoding" data is needed. XML (eXtensible Markup Language) is a format in which data is encoded (or wrapped) so that both parties understand what the message means. A simple example:

```xml
<person>
	<name>John Smith</name>
	<age>23</age>
	<address>
		<street>Dopeylane 14</street>
		<city>Worchestire</city>
	</address>
</person>

```

Above the object 'person' is described with the corresponding values for the attributes 'name', 'age' and the referred object 'address'.

XML can be used in Mendix for serialization and deserialization, in order to export and import data.

See [XML Schemas](xml-schemas) for information on importing XSDs into your application.
See [XML to domain mappings](xml-to-domain-mappings) for info on mapping XML documents to domain entities and [domain to XML mappings](domain-to-xml-mappings) for info on exporting domain entities as XML.

## SOAP

In the enterprise market, SOAP (see also [wikipedia](http://en.wikipedia.org/wiki/SOAP_(protocol))) is the most common protocol for web ervices. It defines a standard way by which systems know how to communicate with each other. XML is used as the message format.

## XSD

An XSD (XML Schema Definition) document is a document that describes how the XML is structured, so that both parties know what the message means. An XSD itself is written in XML.

## WSDL

A WSDL (Web Service Definition Language) document is a document that describes how a client can interact with the server that publishes it. It describes the types of messages (incoming and outgoing) and where the messages must be sent to (a URL).

## Analogy explaining how these concepts relate

An analogy: XML can be seen as a message written down on a piece of paper (the language on the paper is specified by an XSD, or WSDL). SOAP can then be seen as the system whereby a person knows that if he gives the paper in an envelope to a mailman, that that mailman will deliver the envelope to the address specified on the envelope. SOAP can be seen as the specific documentation of a mail service. (there are different ways in which delivery men expect a message)
