---
title: "Introduction to Integration"
parent: "integration-overview"
menu_order: 1
draft: true
---

## 1 Introduction

Integration is something you will always need, but it is often the most difficult part of implementations. This is partly because the variation in patterns is so large, and partly because there are unavoidable dependencies on other components and teams (who may not be able to easily help with the integration).

## 2 Dependencies

Integration means dependencies, and we have to learn to live with them. The sections below describe some common dependencies and scenarios.

### 2.1 Team Dependencies

Even in a seemingly fully decoupled situation where an app is supposed to receive a file and import it, it could happen that because you are implementing a new business function, there is a field you need that is not in that file. That means you are dependent on another team to make an update in the file export program.

### 2.2 Good Services for the Purpose & Avoiding Loops

In another scenario, you want to show which customers are impacted when a ship with hundreds of containers is stranded in a port. There are services providing the right data, but they are not good for your purpose.

If you have to retrieve all the containers, call a separate service for each of them that will give you the shipment, and then call another service for each shipment to find the company that ordered it, your system will not perform well.

Ideally, you should ask the sub-system to create a new service optimized for this new business function. If that system is old and impossible to touch, it could make sense to create a new microservice/integration dashboard app that has the single purpose of providing this data. This app will import data from the source systems and keep it up to date by polling for changes. It will be a simle app for the business to use that will make real-time calls to the integration app and provide sub-second responses.

### 2.3 Scoping Integration Early & Implementing Late

Because integration is an external dependency, it makes sense to scope out the required integration early. This will allow for teams to have the maximum time to provide updated services or files before the go-live date. While waiting, users can use mock services and/or files, and then connect to the final version towards the end of the project.

### 2.4 Request-Reply Decoupling

Decoupling for real-time request-reply interfaces just means there is a point in the middle that is forwarding requests, so the systems are still not independent. Both the service provider and consumer must be up and running for the interface to work.

### 2.6 Asynchronous Decoupling

Decoupling for asynchronous interfaces or files is a clearer scenario. This is because one side of the interface finalizes its work at one time and the other system receives information or data later.

### 2.7 Functional Dependencies

{{% todo %}}[**UNCLEAR WHAT "both cases above" EXACTLY REFERS TO BELOW - PLEASE CLARIFY**]{{% /todo %}}

However, in both cases above, there is a functional dependency that cannot be removed and that you have to worked with through new and more frequent releases of other apps. If changing a file format or message format, every user using that service or file must be informed.

### 2.8 Service Versioning 

The standard way to handle service versioning is via the following steps:

1. Provide two separate endpoints for each service version.
2. Preferably, insert the service version in the service endpoint name (so that users are not mistaken when using it).
3. Allow consumers to migrate within a certain time limit.

{{% todo %}}[**DIAGRAM NEEDS EXPLANATION?**]{{% /todo %}}

![](attachments/recommendations/service.png)

### 2.9 Consumer-Oriented Services

The best practice is to *not* make services that are too large and generic. This will help in security and limiting dependencies, because each app will get a service adequate for what it needs. Not more and not less.

## 3 Minimize Integration

The overall solution of one-to-many apps working together should always be designed to include the functional components and interfaces that require the least integration. In turn, this means the solution design should include the least complicated integration.

That will make the overall solution easier to build and maintain, and it will simplify the dependencies between apps. This means that even deciding which microservices and apps to build should incorporate integration analysis.

### 3.1 Learn to Work with Dependencies

Apps working together are dependent on each other – that is part of the business process and cannot be avoided. Trying to eliminate a functional dependency between two apps via a technical solution is not recommended, because that will usually create other functional issues with more complex error-handling. 

In an example use case, you are sending data from app A to app B. You may put these apps on a queue in between in an asynchronous event, which would seem to eliminate an online dependency from a synchronous request-reply. But in fact, the error-handling will become  more difficult, since neither app will be aware of the entire travel path of the event. Furthermore, if something goes wrong in the middle of the path, nobody is properly notified. A better solution is often to poll from app B to app A and get all recently updated records. The app that needs the data is in control of the entire interface, and error-handling is confined to one single place.

In this use case, the development dependency is almost eliminated. However, the runtime situation is less optimal with the events than with request-reply. 

Still, there are many use cases when events make more sense. For example, in real event streams from logging or metrics, the data should only flow one way, and a message can be lost without breaking the business.

There are also technical reasons to go for events. For example, in situations with very high volume, distributed infrastructure, poor network connectivity, or many-to-many situations, events should be considered. To guarantee delivery, you can make asynchronous request-replies, or use a state/process engine to monitor all the events in a large supply chain process.

### 3.2 Keep It Simple

Event-driven integration will increase drastically in the future. For example, LinkedIn is already using Kafka to distribute posts, metrics, and user statistics. Siemens and the rest of the world are bracing for the era of IoT, when almost all devices will be connected.

But this event-driven trend does not change what already works well for normal business apps. A regular app developer who is integrating a few systems for regular business processes should keep it as simple as possible.

That usually means implementing request-reply using, for example, REST over Http(s). This allows for control in case of the non-delivery of information or events, which should be managed for normal business processes.

## 4 Overall Recommendations

Apps should act as actors in a business process. They typically do different things, and often they have different views of the data.

In an example scenario where a customer portal, sales funnel, support, and operations all have product and customer data, they will likely have very different views of the data. This is good, because they specialize in their specific tasks. When the specialization is local, you should allow for smaller interfaces, and thereby more autonomous services.

Here are some basic recommendations that Mendix endorses:

* Seek the overall solution that minimizes integration, because integration is complexity and it creates dependencies in releases and operations
* Do not start from the solution – instead, think functionally first, define what is really needed, and consider more than one technical solution option
* Use explicit contracts that only transfer the data required, which will make dependencies smaller and shelter apps from each other’s data models
* Use request-reply when possible for easier error-handling 
* Do not be afraid of copying data from one app to another, because that will increase processing speed and remove online dependencies – but, you should only copy the data that is required, to limit dependencies
* Consider consumer-specific contracts if a service is not truly generic and stable, because they augment autonomy and flexibility in releases

Continue reading about specific scenarios for integration in [Integration Examples](integration-examples).