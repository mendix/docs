---
title: "Integration"
url: /refguide/integration/
category: "App Modeling"
weight: 110
description: "Introduces the services that Mendix uses for application integration, for instance, OData, REST, and SOAP/Web Services. Mendix can also import and export data from XML and JSON."
tags: ["studio pro"]
---

## 1 Introduction

Integration with other applications (other Mendix apps, or applications built with different technology) can be done using REST, OData, SOAP/Web Services, or Business Events. Mendix can also import and export data from XML and JSON, and supports integrating with machine learning models.

## 2 REST Services

Representational state transfer (REST) is an approach to consuming or exposing resources. It has gained popularity because of its simplicity, because no extensive schemas or contracts are needed to transfer data between endpoints. It uses the following:

* HTTP URLs to locate resources
* HTTP headers to authenticate and specify content types (such as XML or JSON)
* HTTP methods to identify operations on resources, such as GET (retrieve data) or POST (send data)

To publish REST services, see:

* [Published REST Services](/refguide/published-rest-services/), an overview in the Studio Pro guide
* [Publish a REST Service](/howto/integration/publish-rest-service/) for step-by-step instructions
* [HttpRequest and HttpResponse System Entities](/refguide/http-request-and-response-entities/), an overview of these system entities in your domain model

To consume REST services, see:

* [Consumed REST Services](/refguide/consumed-rest-services/), an overview in the Studio Pro guide
* [Call REST Service](/refguide/call-rest-action/), a description of the microflow action
* [Consume a REST Service](/howto/integration/consume-a-rest-service/) for step-by-step instructions
* [HttpRequest and HttpResponse System Entities](/refguide/http-request-and-response-entities/), an overview of these system entities in your domain model

## 3 OData Services

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide filtering, sorting, and pagination on your resources, as well as how you should provide nested data structures. Using OData best practices ensures that your APIs are compatible with tools like Excel and PowerBI out of the box (see [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/)), and also ensures that API clients can optimize payload size and minimize roundtrips for the best possible usage performance. 

Published OData services are registered automatically in the [Data Hub Catalog](/data-hub/data-hub-catalog/), making them easily usable in other Mendix apps. Discovering and using OData resources in [external entities](/refguide/external-entities/) is made easy for users deploying to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), as [published OData Services](/refguide/published-odata-services/) are registered automatically in the [Data Hub Catalog](/data-hub/data-hub-catalog/) and made available in the Studio Pro [Data Hub pane](/refguide/data-hub-pane/).

To publish OData services, see:

* [Published OData Services](/refguide/published-odata-services/), an overview in the Studio Pro guide
* [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/), step-by-step instructions for a specific use case

To consume OData services, see:

* [Consumed OData Services](/refguide/consumed-odata-services/), an overview in the Studio Pro guide

To wrap services, APIs, or databases in OData, see:

* [Wrap Services, APIs, or Databases with OData](/refguide/wrap-services-odata/).

## 4 Web Services

You can publish your own web services in a Mendix application. Published web services are based on SOAP 1.1. These web services are made up of operations. Other applications can then call operations of this webservice and you can return a result. This result is based on a microflow that will be executed when the webservice is called.

To publish web services, see:

* [Published Web Services](/refguide/published-web-services/), an overview in the Studio Pro guide
* [Expose a Web Service](/howto/integration/expose-a-web-service/) for step-by-step instructions

To consume web services, see:

* [Consumed Web Services](/refguide/consumed-web-services/), an overview in the Studio Pro guide
* [Call Web Service](/refguide/call-web-service-action/), a description of the microflow action
* [Consume a Simple Web Service](/howto/integration/consume-a-simple-web-service/) for step-by-step instructions
* [Consume a Complex Web Service](/howto/integration/consume-a-complex-web-service/) for step-by-step instructions

## 5 Business Event Services

With [Mendix Business Events](/appstore/modules/business-events/), applications can signal when something important happens, and can independently subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps.

The key difference between business events and traditional communication between apps, like REST or Web Services, is that there is no direct communication between the different apps. Applications publish events to, or subscribe to events with, an event broker. This results in much better availability for your applications, as applications are not impacted by downtime of other applications. It also simplifies your applications, as you reduce the fact that applications need to be aware of other applications, thus simplifying dependency management and impact analysis when changing your software.

To publish and consume business event services, see:

* [Business Events Services](/refguide/business-event-services/), an overview in the Studio Pro guide
* [Mendix Business Events](/appstore/modules/business-events/), detailed instructions about the required business events module

## 6 XML and JSON

Mendix can import and export data from and to JSON and XML. To learn more, see the following:

* [JSON Structures](/refguide/json-structures/), an overview in the Studio Pro guide
* [Message Definitions](/refguide/message-definitions/), an overview in the Studio Pro guide
* [XML Schemas](/refguide/xml-schemas/), an overview in the Studio Pro guide
* [Import XML Documents](/howto/integration/importing-xml-documents/) for step-by-step instructions
* [Export XML Documents](/howto/integration/export-xml-documents/) for step-by-step instructions

## 7 Machine Learning (ML) Models

In Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above, you can integrate machine learning (ML) models into your Mendix apps.

To work with machine learning models, see:

* [Machine Learning Kit](/refguide/machine-learning-kit/), an introduction in the Studio Pro guide
* [Using ML Kit](/refguide/machine-learning-kit/using-ml-kit/), a comprehensive overview of working with machine learning model functionality in Studio Pro
* [Design Patterns](/refguide/machine-learning-kit/design-patterns/), an overview page that links to two documents about machine learning design patterns:
    * [Advanced Inference Design Patterns](/refguide/machine-learning-kit/design-patterns/advanced-inference/)
    * [Pre- and Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/)
* [ML model mapping](/refguide/ml-model-mapping/), an entry in the Studio Pro guide about the service document for machine learning models
* [Call ML Model](/refguide/call-ml-model/), about the microflow [activity](/refguide/activities/) to call an imported ML model in a microflow
