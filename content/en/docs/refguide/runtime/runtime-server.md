---
title: "Runtime Server"
url: /refguide/runtime-server/
description: "Describes the Runtime Server and how it functions."
weight: 10
---

## Introduction

The Runtime Server is the part of the Mendix Runtime which executes microflows and connects to files, the relational database, and any other required services. It received requests from the Mendix Client and provides data in response.

This description of the Runtime Server is based on an app running in the cloud. You can also run Mendix locally for testing, but this is conceptually the same.

## Description

The Runtime Server is [deployed](/refguide/runtime-deployment/) and waits for requests from the Mendix Client or a call from another app or service. It processes the request and returns the requested data, plus any additional state information where appropriate; for more information, see [Communication Patterns in the Mendix Runtime](/refguide/communication-patterns/). The Runtime Server itself is stateless, which allows it to be efficiently scaled to multiple instances.

Below is a chart showing the components of the Runtime Server. Each of the components is described below the chart.

{{< figure src="/attachments/refguide/runtime/runtime-server/runtime-server.png" alt="The makeup of the Runtime Server" class="no-border" >}}

### M2ee

M2ee is used to launch the Runtime Server when your app is deployed to the cloud. Once the Runtime Server is running, m2ee can be used to connect back to the Runtime Server, issuing commands like setting log levels, asking how many users are logged in, showing currently running actions inside the application, or shutting the application down.

M2ee communicates with the Runtime Server through authenticated POST requests, in JSON format, which are sent to the administration port of the Runtime Server.

### Runtime Core

This is an interpreter written in Java and Scala, which uses the app model to decide how to process a request from the Mendix Client or a request from an external service, and controls the various processes which need to take place to service the request.

### Project Model

This contains the model which defines how the app behaves, including domain models, microflows, import mappings, and so on. This is what the runtime core interprets to run the app.

### Temporary Object Storage

This holds objects which are used in the Runtime Server but which are not yet committed to the database. These might be committed in the future (for example, if they are new or changed objects), or may remain uncommitted (for example, if they are non-persistable objects).

### File Storage Manager

This controls retrieving and storing non-relational data associated with *FileDocument* entities.

### File Storage

This is the storage location for data files used by the app. More specifically, it contains the value of *FileDocument* objects, including images, which are binary objects that are stored outside the database to avoid size and performance restrictions.

### Database Synchronization

Database Synchronization is initiated when an app is started. It manages changes to the database structure which must be applied when you deploy an app after updating the domain model. For example, if a user adds a new attribute to an entity, the database structure must be updated to support this.

If there is more than one instance of the Runtime Server, this activity is carried out by the cluster leader. While this activity takes place, all other instances pause until the database synchronization is complete.

### External Service Calls

This manages calls to external services to obtain data. An app can make calls to multiple external services, using a variety of different API formats, for example OData or REST.

### External Service

This is a service which provides data to the app. A service could be another Mendix app accepting external service requests, or a third-party service such as SAP or Google Maps.

### Relational Database

This is the database (or sometimes the schema of a shared database) which holds the objects as defined in the domain models in the app.

### Query Executor

This manages the CRUD (create, read, update, and delete) operations for retrieving and storing data in the relational database which is bound to the app. The operations are performed using SQL which is tailored to the underlying database. Where queries are not formatted in SQL, the query executor converts them from their original format (for example, XPath or OQL).

The query executor also applies the security which is set within the app.

### Object Manager

This manages the objects which are maintained in the Runtime Server (non-persistable, new, and changed objects) and ensures that they are passed back to the Mendix Client at the end of the request.

### Microflow Engine

This runs the logic which is defined in the microflows in the app model.

### Scheduler

The scheduler triggers microflow actions at preconfigured times, or intervals.

### License Server

This is a service which provides information about the license which is being used to run the app. The license defines how many named users can be added to the app, and how many users can use the app simultaneously.

### Custom Java

This runs custom Java which is held as Java actions in the app model.

### Mendix Client API

This receives requests from the Mendix Client, decodes them and passes them to the runtime core or the object manager, and formats a response to the Mendix Client once the request has been processed. The Mendix Client API is known as xas (XML Application Server).

### External Service Requests

This receives requests from other services, decodes them, and passes them to the runtime core or the object manager. After the request has been processed, this component formats a response to the request. The following requests can be processed:

* Webservice – this exposes microflows via a SOAP interface
* REST – this exposes microflows via a REST endpoint
* OData – this exposes entity data as an OData endpoint
* Other – these are metadata interfaces including WSDL and Swagger

### HTTPS Server

This decodes HTTPS requests from Mendix Clients or other services, and passes them to the Runtime Server.

### Mendix Client

This is the web browser (for example, Google Chrome) or mobile device (for example, an iPhone) which allows the user to interact with the app. It typically has a screen, pointer device, and input device to allow users to use the app.

The Runtime Server communicates with the Mendix Client using a number of [request handlers](/refguide/request-handlers/) called over a private API. One of these, for example, is called xas.

For a description of the Mendix Client, see [Mendix Client](/refguide/mendix-client/).
