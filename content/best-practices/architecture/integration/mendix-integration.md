---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 1
draft: true
---

## 1 Introduction

Mendix makes it easy to build, update, and maintain an apps and microservices that
fulfill business functions. Usually business functions need a GUI, logic, and data. The internal integration of those layers is handled by Mendix, but for most apps and microservice architectures, integration with other systems is necessary.

{{% todo %}}[**UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/mendix-integration/feature-requirements.png)

So, you do not have to worry about the integration of internal app layers. However, the Solution Architect or Lead Developer does need to design good microservices and interfaces that can integrate seamlessly with other apps and systems in the enterprise.

Mendix handles a large array of formats and protocols. For more information, see the [Integration how-to's](/howto/integration/).

The most important thing to do is to choose the right integration option from a lot of possibilities. These best practices will present an overview of integration methods and typical use cases.

## 2 Always Think *Functionally* First

The first best practice is to have an open mind regarding integration requirements. Think about what the integration need really is and consider more than one option for the solution.

It is important to remember that an interface starts inside one system and ends inside one or more other systems. There could also be integration components in the middle, so the
number of options to decide on can be quite large.

First, consider the following questions:

* What triggers the interface?
* Who needs what data when?
* Who should handle functional errors if they occur?
* Who should handle technical errors?
* How can integration be minimized?
* How can a UX be built that requires very few service calls to load?

Next, consider which use case applies and which options are available. 

Finally, make a conscious choice about why one method is chosen over another.

## 3 Use Cases & Solutions

### 3.1 Use Case Categories

"Integration" means any kind of interaction between any person, thing, app, or system for any type of purpose. The scope is enormous, and there are hundreds of use cases. When scoping out a new project, there is a fair chance you may find a new type of use case, even if you have worked on integration for years. So, there is reason to keep your eyes open for what is similar and what is different in the use cases we already know.

However, there are typical use cases for which Mendix is creating example implementations. These best practices are related to such typical use cases.

{{% todo %}}[**UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/mendix-integration/common-use-cases.png)

For each use case, we need to consider which solution is most suitable under which condition.

### 3.2 Solution Categories

For most integration related to Mendix, there are five solution categories that are almost always used. Sometimes just one is used, and sometimes a combination is used:

{{% todo %}}[UPDATE DIAGRAM]{{% /todo %}}

![](attachments/mendix-integration/solution-categories.png)

* **UI Integration** – This solution category includes, for example, using a deep link from the UI of one app to open the UI of another app (either in the same browser tab or another tab). It also includes content management system integration with, for example, Akamai and other CMSs.

* **Services** – This is otherwise known as remote procedure call (RPC) integration. This category uses request and reply, and it almost always synchronous.

* **Event-Driven** – This category usually does not have a response, and it is used to distribute data at large scales or large distances, or simply distribute data in a decoupled way.

* **Batch-Oriented** – This category includes exporting, moving, and importing files.

* **Central Data** – This category uses a pattern where data is landed and combined in a central place before it is distributed. This could be, for example, an operational data store (ODS); extract, transform, load (ETL); business intelligence (BI); or data lake solution.

### 3.3 Uses Case & Solution Options

Plotting functional use cases against basic methods of integration allows us to see that there are several common options available. That is good, because integration needs to be flexible in a solution in order to adapt to how systems, things, or people communicate. 

The table below presents use cases that you can reference  for more detail. The table uses the following key:

* A <span>&#9989;</span> indicates the common or preferred use of the method
	* In some of the latter cases (for example, "Integration with IoT solutions"), the solution will require several methods, so there are several instances of <span>&#9989;</span>
* An <span>&#10004;</span> indicates possible use in some cases

{{% todo %}}[**ADD LINKS AS DOCS AVAILABLE**]{{% /todo %}}

| *Use Case* | *UI Integration* | *RPC / Services* | *Events / Queues* | *Export, Import, Batch* | *Central Data* |
| --- | --- | --- | --- | --- | --- |
| SSO, AD & Identity integration | <p>&#10003;</p> | <p>&#9989;</p> | | | |
| Import & Distribute Reference Data | | <p>&#9989;</p> | <p>&#10003;</p> | <p>&#9989;</p> | <p>&#10004;</p> |
| View & Search Data in Another System  | <p>&#10003;</p> | <p>&#9989;</p> | | | |
| Use & Refer to Data in Another System | | <p>&#9989;</p> | | | <p>&#10003;</p> |
| [Process Integration](process-integration) (continue workflow) | <p>&#9989;</p> | <p>&#10003;</p> | <p>&#10003;</p> | | |
| [Export, Import & Batch Processing](export-import-batch) | | <p>&#10003;</p> | <p>&#10003;</p> | <p>&#9989;</p> | <p>&#10003;</p> |
| Update Data in the Master App | <p>&#9989;</p> | <p>&#9989;</p> | <p>&#10003;</p> | | |
| Distribute Master & Transactional Data | | <p>&#9989;</p> | <p>&#10003;</p> | <p>&#10003;</p> | <p>&#10003;</p> |
| Integration with BI & Reporting | | <p>&#10003;</p> | <p>&#10003;</p> | <p>&#9989;</p> | <p>&#10003;</p> |
| Mobile Integration & Offline | | <p>&#9989;</p> | <p>&#10003;</p> | | |
| CMS & CDN Integration | <p>&#9989;</p> | <p>&#10003;</p> | | | |
| Process Orchestration & State Engines | | <p>&#9989;</p> | <p>&#10003;</p> | | <p>&#9989;</p> |
| Integration with Ops & Monitoring | <p>&#10003;</p> | <p>&#10003;</p> | <p>&#9989;</p> | <p>&#10003;</p> | <p>&#9989;</p> |
| Integration with IoT Solutions | | <p>&#9989;</p> | <p>&#9989;</p> | <p>&#10003;</p> | <p>&#9989;</p> |
| Integration with AI & Machine Learning | | <p>&#9989;</p> | <p>&#10003;</p> | | <p>&#9989;</p> |

## 4 Integration Styles

### 4.1 Request–Reply (Most Frequently Used)

Request–reply is a collaboration style in which whoever initiates the integration expects a response back from the destination. For most standard interfaces, a request–reply scenario is the easiest way to integrate, because the side of the interface that starts the integration knows directly if the call worked or not.

Request–reply is more deterministic and therefore easier to think about. If it times out, it is possible to try again later (if relevant). If it there is an error message, the calling system can react directly by setting a flag, starting an error workflow, or displaying an error message on the screen that helps the end-user correct the problem immediately.

### 4.2 UI Integration

Integration via a UI link is becoming more common. This enables developing a UI only once in the app where it belongs, and then linking and directing other users there when they need to perform that process.

In microservice systems, there is often a dashboard app, portal, or landing page where people sign in (for example, via single sign-on). This often contains workflows, overviews, and statuses. When the end-user wants to perform real work in an area, they are deep-linked into another app to work there.

Depending on the business requirements, the second app can be opened in the same tab so that the end-user is unaware of working in several apps. If parallel work in two areas is preferred, there could be a separate tab opened.

UI integration can also have an advantage for mastering data, since the process and UX validations of information are always done in the same way. When the work is done, a relevant part of the new data can be copied back to the other app.

### 4.3 Event-Driven Trends

At the moment, event-driven architectures are making their return into the mainstream of integration. This follows an increased interest in and focus on, for example, IoT solutions, distributed networks of actors, and central monitoring. Several solution providers are promoting new paradigms for managing large, distributed, high-volume event driven architectures.

The key to event-streams is that they (often) only flow in one direction. A device leaving metrics in an IoT system does not expect an immediate answer to the data it ships. Additionally, there could be very many devices that are geographically distributed and shipping a lot of data. Request–reply is neither needed nor practical for inbound IoT, but for commanding a drone or other device, for example, it is highly recommended.

IoT, AI, and Big-Data integration is only the beginning of an expected explosion of new IT that will be built alongside the existing IT landscape. In the coming years, Mendix and Siemens will invest heavily in this area. With this perspective, Kafka and other event-based architectures will play an important role in the coming years.

{{% todo %}}[**VERIFY THAT SIEMENS/INVESTMENT MENTION ABOVE IS OKAY**]{{% /todo %}}

In conclusion, we foresee IoT, AI, and business intelligence (BI) counting as professional systems and requiring professional developers that handle queues, Kafka, and large databases.

### 4.4 Batch-Oriented, Export & Import

Batch oriented integration runs a large set of data at a certain moment. Interfaces towards data warehouse (DWH) and BI are often bulk and/or snapshot oriented. The same is true for initial loads of systems or the distribution of reference data.

More processes are becoming real-time, but a lot of business processes are still periodic in nature (for example, salary payments and interest calculations). These use cases are best implemented in batch-oriented interfaces.

Files and database dumps will remain important in the future. The advantage of batch is that systems are decoupled and the export and import operations can run at different times. The interface can be “re-run” again and/or use a workflow that handles errors.

Processing data in bulk is also more CPU efficient. If it is periodic, it can usually be done at night, when other loads are much lower.

### 4.5 API Management & ESBs

All real-time interfaces can be routed via an ESB or API management. It does not
change very much for the publisher and the consumer except there is a technical
decoupling point and/or a queueing system.

API management or ESBs start making sense when there are \>100 systems and
several business domains that are organizationally separated. It creates a level
of stability for services used across the enterprise

This document will not separate that from the case of direct service
interaction, because functionally it is almost the same thing. Microservice
recommendation is to use a very thin integration layer, or no layer at all.

Many people use direct integration within a system, business domain or area,
while having some API management for external and intra-domain integration.

### 4.6 Integration Layers and Data Hubs

If the integration layer in the middle stores and combines business data before
re-distributing it to other parties, it is a “central data” integration pattern.

A typical use-case is if a company has 10 business lines with all different
ordering systems, but only one single support desk. It then makes sense to store
all orders in a central point where they can be searched together using SQL
instead of composite service calls.

Maybe this is the Support system itself, but it could also be an Integration App
or ODS (Operational Data Store), serving via services a global search on orders.

Many people use Mendix Apps to create this pattern for a specific area. It is
easy to define the data, the logic and lookups and any human workflow to manage
errors.

ETL systems also work in a similar way, extracting data from one system, storing
the data from last extract, maybe combining with reference data, and then
sending it on.

Data Lakes are like an enterprise wide ODS, that doubles as a BI and DWH system.
It is a big undertaking to make this work, and there is an issue when trying to
combine operational data, and snap-shot type data that is used for statistics.

The statistics part of Data Lakes can feed BI and AI solutions of the future,
but we do not recommend using Data Lakes as Operational Data, because of the
varying time-stamps, and various layers the data goes through. For Operational
Data a relational DB, ODS is preferred, as mentioned above.

### 4.7 Ops Integration and Test Services

A new trend, part of Microservices and DevOps, is also to build services and
interfaces from live systems that are specifically oriented towards automated
testing and health checks on live systems.

A service that is used to test things in CICD pipelines, may later be re-used to
verify a production deployment, or to check a live system, or to collect user
metrics to a dashboard etcetera.

For professional Ops solutions there is often an agent per node, shipping in
near-real-time, data towards an APM (Application Performance Monitoring) system,
used for root-cause analysis, trend analysis, sizing metrics and alarms

Microservices also often have an Admin page with collected important
information, both technival and functional KPIs that help maintain the solution,
and from a local Ops dashboard or App management module, one can deep-link into
these pages.

## 5 Recommendations

Minimize Integration
--------------------

It may seem obvious, but it is still worth pointing out that the overall
Solution Design of 1-N Apps working together, should always attempt at finding
the functional components and interfaces with the least amount of integration
need, and the least complicated integration.

That will make the overall solution easier to build and maintain, and it
simplifies dependencies between Apps. This means that even the decision on which
Microservices/Apps to build should incorporate integration analyses

Dependencies are there – Learn to Work with them
------------------------------------------------

Apps working together are dependent on each other. That is part of the business
process and can not be avoided. Trying to eliminate a functional dependency
between two Apps, by a technical solution, is not recommended, because it
usually creates other functional issues with more complex error handling.

E.g. sending data from App A to App B, we may put them on a queue in between in
an asynchronous event, which seems to eliminate an on-line dependency from a
synchronous request reply. But in fact error handling becomes much more
difficult since neither App is aware of the entire travel path of the event, and
if it goes wrong in the middle nobody is properly notified. A better solution is
often to poll from App B to App A and get all recently updated records. The App
that needs the data is in control of the entire interface, and error handling is
confined to one single place.

I.e. in the case above the development dependency is almost eliminated, but the
run-time situation is less optimal with events than request reply.

Still there are many cases when events make more sense, e.g. real event streams
from e.g. IoT, Logging or metrics, where data should only flow one way and a
message can be lost without breaking the business.

There are also technical reasons to go for events, e.g. very high volume,
distributed infrastructure, poor network connectivity, many-to-many situations.
To guarantee delivery one can make asynchronous request replies or use a state /
process engine monitoring all events in a large supply chain process

Keep it Simple
--------------

Event Driven integration increase drastically in the future, where Linked in is
using Kafka to distribute posts, metrics and user statistics, and Siemens and
the rest of the world is bracing for the era of IoT, when almost all devices
will be connected.

But the event driven trend does not change what is already working well for
normal business Apps. The regular App developer, integrating a few systems for
regular business processes should keep it as simple as possible.

That usually means request-reply using e.g. REST over Http(s). It allows control
of the case of non-delivery of information or events, which for normal business
processes should be managed.

Overall Recommendations
-----------------------

Apps should act as actors in a business process. They typically do different
things, and often they have a different view of the data.

E.g. the customer portal, the sales funnel, the support and the operations will
all have product and customer data, but they will have very different views of
the data. This is good, because they specialize in what is their specific task.
When specialization is local, we allow smaller interfaces, and thereby more
autonomous services.

It is good to endorse some basic recommendations:

1.  Seek the overall solution that minimizes Integration, because integration is
    complexity and it creates dependencies in releases and operations

2.  Think functionally first, do not start from the solution, rather define what
    is really needed, and consider more than one technical solution option

3.  Use explicit contracts that only transfer the data required, in order to
    make dependencies smaller, and shelter Apps from each other’s data-models

4.  Use request-reply when possible, for easier error handling

5.  Do not be afraid of copying data from one App to another, because it
    increases processing speed, and removes on-line dependencies

    1.  Only copy the data that is required, to limit dependencies

6.  Consider consumer specific contracts if a service is not truly generic and
    stable, because they augment autonomy and flexibility in releases

Now continue to look into the specific *Integration Use Cases \<link\>*, and
example provided.
