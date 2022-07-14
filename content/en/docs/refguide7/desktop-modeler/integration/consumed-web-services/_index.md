---
title: "Consumed Web Services"
url: /refguide7/consumed-web-services/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}

This document describes imported web services. If you're looking for specific information on the consumed web services screen, you can check the [Consumed web service](/refguide7/consumed-web-service/) documentation.

{{% /alert %}}

## Web Services

Web services (see also [wikipedia](http://en.wikipedia.org/wiki/Web_service)) are a way of exposing or absorbing functions and/or data entities between systems. They can be used to enable applications to "talk" to each other through the network (or internet).

Mendix supports the interaction between servers using SOAP. This can either be Mendix-to-Mendix, Mendix-to-ThirdParty or ThirdParty-to-Mendix.

### Consumed web services

Using third party web services is easy in Mendix. There is a Microflow activity available which calls a web service on another system and imports the XML in the Mendix database.

### Published web services

To expose functionality in a Mendix server (thus enabling other systems to make use of certain functions) a Microflow can easily be published as a web service. See [Published Web Services](/refguide7/published-web-services/).

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

See [XML Schemas](/refguide7/xml-schemas/) for information on importing XSDs into your application.
See  [Import Mappings](/refguide7/import-mappings/) for info on mapping XML documents to domain entities and [Export Mappings](/refguide7/export-mappings/) for info on exporting domain entities as XML.

## SOAP

In the enterprise market, SOAP (see also [wikipedia](http://en.wikipedia.org/wiki/SOAP_(protocol))) is a common protocol for web services. It defines a standard way by which systems know how to communicate with each other. XML is used as the message format.

## XSD

An XSD (XML Schema Definition) document is a document that describes how the XML is structured, so that both parties know what the message means. An XSD itself is written in XML.

## WSDL

A WSDL (Web Service Definition Language) document is a document that describes how a client can interact with the server that publishes it. It describes the types of messages (incoming and outgoing) and where the messages must be sent to (an endpoint URL).

Using imported web services, you can import a web service from an external application so they can be used in your own application. You can import web services from third parties (such as the
[w3schools example service](http://www.w3schools.com/xml/tempconvert.asmx?WSDL)) or from other mendix projects.

To actually use these imported web services in a microflow, see [Call Web Service Action](/refguide7/call-web-service-action/).

## Proxies

If you are behind a firewall, you might need to use a proxy to call a webservice. Specific information on how to configure the JVM to use a proxy can be found [here](/refguide7/using-a-proxy-to-call-a-webservice/)

## Protocols

Mendix supports consuming web service data according to the following protocols:

*   SOAP 1.1
*   SOAP 1.2
*   MTOM/XOP
*   WS-MetadataExchange v1.1
*   WS-Policy v1.2
*   WS-Policy v1.5
*   WS-PolicyAttachment 1.5
*   WS-ReliableMessaging 1.1

To connect to a Microsoft .NET web service, you have to configure your web service to use basicHttpBinding (SOAP 1.1) or wsHttpBinding (SOAP 1.2). For a secure connection, you have to configure SSL and to set the security mode to 'Transport' with clientCredentialType 'Basic' in the file 'web.config'. The user credentials can be configured in the Modeler as [described here](/refguide7/call-web-service-action/) (see 'Use HTTP authentication').
