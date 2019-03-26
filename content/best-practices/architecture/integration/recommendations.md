---
title: "Integration Recommendations"
parent: "integration-overview"
menu_order: 8
draft: true
---

## 1 Introduction

Integration is something you will always need, but it is often the most difficult part of implementations. This is partly because the variation in patterns is so large, and partly because there are unavoidable dependencies on other components and teams (who may not be able to easily help with the integration).

## 2 Dependencies

### 2.1 Team Dependencies

Even in a seemingly fully decoupled situation where an app is supposed to receive a file and import it, it could happen that because you are implementing a new business function, there is a field you need that is not in that file. That means you are still dependent on the other team to make an update in the file export program.

Integration means dependencies, and you have to learn to live with them. You have to be extremely adaptable, and you have to be ready for issues along the line.

### 2.2 Good Services for the Purpose & Avoiding Loops

In another case there are services providing the right data, but they are not good for my purpose. I want to show which customers are impacted when a ship with 1000s of containers is stranded in a port.

If I have to retrieve all the containers and then for each of them have to call a separate service that gives me the shipment, and for each shipment I have to call another service to find the company that ordered it, it will not perform well.

Ideally in this case, ask the sub-system to create a new service that is optimized for this new business function. If that system is old and impossible to touch, it could make sense to either create a new Microservice / Integration App that has the single purpose to provide this data. It will import data from source systems and keep it up to date by polling for changes.

The Dashboard app that the business uses can now be simple and make a real-time call to the Integration App, that gives a sub-second response.

### 2.3 Scoping Integration Early & Implementing Late

Because integration is an external dependency it makes sense to scope out early the required integration, to leave maximum time to get other teams to provide updated services or files, before the go-live date. While waiting one can use mock services and/or files, and connect to the final version towards the end of the project.

### 2.4 Request-Reply Decoupling

Decoupling for real-time request reply interfaces just means there is a point in the middle forwarding requests, so the systems are still not independent. Both service provider and consumer must be up and running for the interface to work.

### 2.6 Asynchronous Decoupling

Decoupling for asynchronous interfaces or for files is more obvious, since one side of the interface finalizes it’s work at one time and the other system receives information or data later.

### 2.7 Functional Dependencies

However, in both cases above there is a functional dependency that cannot be removed and that we have to worked with through new and more frequent releases of other Apps. If changing a file format or message format, everybody that uses that service or file must be informed.

### 2.8 Service Versioning 

The standard way to handle this is by:

1.  Providing two separate End-point for each service version
2.  Preferably putting the service version in the service end-point name, so that nobody can be mistaken when using it
3.  Allowing consumers to migrate within a certain time limit

![](attachments/recommendations/service.png)

### 2.9 Consumer-Oriented Services

Not making too large and generic services is good standard both for security and for limiting dependencies, because each App gets a service that is just adequate to what he needs, not more and not less.

## 3 Minimize Integration

It may seem obvious, but it is still worth pointing out that the overall Solution Design of 1-N Apps working together, should always attempt at finding the functional components and interfaces with the least amount of integration need, and the least complicated integration.

That will make the overall solution easier to build and maintain, and it simplifies dependencies between Apps. This means that even the decision on which Microservices/Apps to build should incorporate integration analyses

### 3.1 Dependencies Are There, So Learn to Work with Them

Apps working together are dependent on each other. That is part of the business process and can not be avoided. Trying to eliminate a functional dependency between two Apps, by a technical solution, is not recommended, because it usually creates other functional issues with more complex error handling. 

E.g. sending data from App A to App B, we may put them on a queue in between in an asynchronous event, which seems to eliminate an on-line dependency from a synchronous request reply. But in fact error handling becomes much more difficult since neither App is aware of the entire travel path of the event, and if it goes wrong in the middle nobody is properly notified. A better solution is often to poll from App B to App A and get all recently updated records. The App that needs the data is in control of the entire interface, and error handling is confined to one single place.

I.e. in the case above the development dependency is almost eliminated, but the run-time situation is less optimal with events than request reply. 

Still there are many cases when events make more sense, e.g. real event streams from e.g. IoT, Logging or metrics, where data should only flow one way and a message can be lost without breaking the business.

There are also technical reasons to go for events, e.g. very high volume, distributed infrastructure, poor network connectivity, many-to-many situations. To guarantee delivery one can make asynchronous request replies or use a state / process engine monitoring all events in a large supply chain process

### 3.2 Keep It Simple

Event Driven integration increase drastically in the future, where Linked in is using Kafka to distribute posts, metrics and user statistics, and Siemens and the rest of the world is bracing for the era of IoT, when almost all devices will be connected.

But the event driven trend does not change what is already working well for normal business Apps. The regular App developer, integrating a few systems for regular business processes should keep it as simple as possible. 

That usually means request-reply using e.g. REST over Http(s). It allows control of the case of non-delivery of information or events, which for normal business processes should be managed

## 4 Overall Recommendations

Apps should act as actors in a business process. They typically do different things, and often they have a different view of the data.

E.g. the customer portal, the sales funnel, the support and the operations will all have product and customer data, but they will have very different views of the data. This is good, because they specialize in what is their specific task. When specialization is local, we allow smaller interfaces, and thereby more autonomous services.

It is good to endorse some basic recommendations:

1. Seek the overall solution that minimizes Integration, because integration is complexity and it creates dependencies in releases and operations
2. Think functionally first, do not start from the solution, rather define what is really needed, and consider more than one technical solution option
3. Use explicit contracts that only transfer the data required, in order to make dependencies smaller, and shelter Apps from each other’s data-models
4. Use request-reply when possible, for easier error handling 
5. Do not be afraid of copying data from one App to another, because it increases processing speed, and removes on-line dependencies. In addition, only copy the data that is required, to limit dependencies
6. Consider consumer specific contracts if a service is not truly generic and stable, because they augment autonomy and flexibility in releases

Now continue to look into the specific *Integration Use Cases \<link\>*, and example provided.
