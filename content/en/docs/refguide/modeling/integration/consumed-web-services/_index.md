---
title: "Consumed Web Services"
url: /refguide/consumed-web-services/
weight: 25
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes imported web services. For further information on the consumed web services screen, see [Consumed Web Service](/refguide/consumed-web-service/).

## 2 Web Services

Web services (see also [Wikipedia](http://en.wikipedia.org/wiki/Web_service)) are a way of exposing or absorbing functions and data entities between systems. They can be used to enable applications to "talk" to each other through the network (or Internet).

Mendix supports the interaction between servers using SOAP. This can either be Mendix-to-Mendix, Mendix-to-ThirdParty or ThirdParty-to-Mendix.

### 2.1 Consumed Web Services

Using third party web services is easy in Mendix. There is a microflow activity available which calls a web service on another system and imports the XML in the Mendix database.

### 2.2 Published web Services

To expose functionality in a Mendix Server (thus enabling other systems to make use of certain functions) a microflow can easily be published as a web service. For further information, see [Published Web Services](/refguide/published-web-services/).

## 3 XML

To enable systems to understand each other, a standard way of "encoding" data is needed. XML (eXtensible Markup Language) is a format in which data is encoded (or wrapped) so that both parties understand what the message means. The following is a simple example of XML coding:

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

In this case, the object 'person' is described with the corresponding values for the attributes 'name', 'age' and the referred object 'address'.

XML can be used in Mendix for serialization and de-serialization in order to export and import data.

See [XML Schemas](/refguide/xml-schemas/) for further information on importing XSDs into your application.
See  [Import Mappings](/refguide/import-mappings/) for further information on mapping XML documents to domain model entities and [Export Mappings](/refguide/export-mappings/) for further information on exporting domain entities as XML.

## 4 SOAP {#soap}

In the enterprise market, SOAP (see also [Wikipedia](http://en.wikipedia.org/wiki/SOAP_(protocol))) is a common protocol for web services. It defines a standard way for systems to communicate with each other. XML is used as the message format.

## 5 XSD

An XSD (XML Schema Definition) document is a document that describes how the XML is structured so that both parties know what the message means. An XSD itself is written in XML.

## 6 WSDL

A WSDL (Web Service Definition Language) document is a document that describes how a client can interact with the server that publishes it. It describes the types of messages (incoming and outgoing) and where the messages must be sent to (an endpoint URL).

Using imported web services, you can import a web service from an external application to use in your own application. You can import web services from third parties (such as the
[w3schools example service](http://www.w3schools.com/xml/tempconvert.asmx?WSDL)) or from other Mendix apps.

To use these imported web services in a microflow, see [Call Web Service](/refguide/call-web-service-action/).

## 7 Proxies

If you are behind a firewall, you may have to use a proxy to call a web service. Specific information on how to configure the JVM to use a proxy can be found in [Using a Proxy to Call a Web Service](/refguide/using-a-proxy-to-call-a-webservice/).

## 8 Protocols

Mendix supports consuming web service data according to the following protocols:

*   SOAP 1.1
*   SOAP 1.2
*   MTOM/XOP
*   WS-MetadataExchange v1.1
*   WS-Policy v1.2
*   WS-Policy v1.5
*   WS-PolicyAttachment 1.5
*   WS-ReliableMessaging 1.1
*   WS-Addressing 1.0 (from Mendix version 8.16)

To connect to a Microsoft .NET web service, you have to configure your web service to use basicHttpBinding (SOAP 1.1) or wsHttpBinding (SOAP 1.2). For a secure connection, you have to configure SSL and to set the security mode to `Transport` with clientCredentialType `Basic` in the **web.config** file. The user credentials can be configured in Studio Pro as a **Call Web Service** activity as described in [Use HTTP authentication](/refguide/call-web-service-action/#http-headers).
