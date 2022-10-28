---
title: "Integration"
url: /refguide/integration/
category: "App Modeling"
weight: 110
description: "Introduces the services that Mendix uses for application integration, for instance, OData, REST, and SOAP/Web Services. Mendix can also import and export data from XML and JSON."
tags: ["studio pro"]
---

## 1 Introduction

Integration with other applications (other Mendix apps, or applications built with different technology) can be done using REST, OData, SOAP/Web Services, or Business Events. Mendix can import and export data from XML and JSON.

Integration between Mendix applications is done best with REST services (for details, see [Published REST Service](/refguide/published-rest-services/) and [Call REST Service](/refguide/call-rest-action/)). 

### 2 REST Services

Representational state transfer (REST) is an approach to consuming or exposing resources. It has gained popularity because of its simplicity, because no extensive schemas or contracts are needed to transfer data between endpoints. It uses the following:

* HTTP URLs to locate resources
* HTTP headers to authenticate and specify content types (such as XML or JSON)
* HTTP methods to identify operations on resources, such as GET (retrieve data) or POST (send data)

Lack of contracts and schemas give you an easy start to using REST. However, many REST endpoints return complex data.

To publish REST services, see:

* [Published REST Services](/refguide/published-rest-services/), an overview in the Studio Pro guide
* [Publish a REST Service](/howto/integration/publish-rest-service) for step-by-step instructions

To consume REST services, see:

* [Consumed REST Services](/refguide/consumed-rest-services/), an overview in the Studio Pro guide
* [Call REST Service](/refguide/call-rest-action/), a description of the microflow action
* [Consume a REST Service](/howto/integration/consume-rest-service/) for step-by-step instructions

### 3 OData Services

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide filtering, sorting, and pagination on your resources, as well as how you should provide nested data structures. Using OData best practices ensures that your APIs are compatible with tools like Excel and PowerBI out of the box (see Expose Data to BI Tools Using OData), and also ensures that API clients can optimize payload size and minimize roundtrips for the best possible usage performance.

To publish OData services, see:

To consume OData services, see:

### 4 Web Services

You can publish your own web services in a Mendix application. Published web services are based on SOAP 1.1. These web services are made up of operations. Other applications can then call operations of this webservice and you can return a result. This result is based on a microflow that will be executed when the webservice is called.

To publish web services, see:

To consume web services, see:

### 5 Business Event Services

With [Mendix Business Events](/appstore/modules/mendix-business-events/), applications can signal when something important happens, and can independently subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps.

The key difference between business events and traditional communication between apps, like REST or Web Services, is that there is no direct communication between the different apps. Applications publish events to, or subscribe to events with, an event broker. This results in much better availability for your applications, as applications are not impacted by downtime of other applications. It also simplifies your applications, as you reduce the fact that applications need to be aware of other applications, this simplifying dependency management and impact analysis when changing your software.

To publish and consume business event services, see:




{{% alert color="info" %}}
For a [call REST service](/refguide/call-rest-action/) activity and JSON support in [mapping documents](/refguide/mapping-documents/), see [Consumed REST Services](/refguide/consumed-rest-services/).
{{% /alert %}}{{% alert color="info" %}}
For a [call web service](/refguide/call-web-service-action/) activity and support for SOAP web services/XML, see [Consumed Web Services](/refguide/consumed-web-services/).
{{% /alert %}}

## 2 Other Documents in This Section

* [HttpRequest and HttpResponse System Entities](/refguide/http-request-and-response-entities/)
* [JSON Structures](/refguide/json-structures/)
* [Message Definitions](/refguide/message-definitions/)
* [Published OData Services](/refguide/published-odata-services/)
* [XML Schemas](/refguide/xml-schemas/)
* [Business Events Services](/refguide/business-event-services/)
