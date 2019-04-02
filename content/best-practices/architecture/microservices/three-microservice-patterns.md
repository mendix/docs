---
title: "Three Microservice Patterns"
parent: "microservices-overview"
menu_order: 2
draft: true
tags: ["microservices"]
---

## 1 Introduction

There are three basic types of microservices that may be used in different situations:

{{% todo %}}[**A LINK TO WHERE FOWLER AND LEWIS ACTUALLY SAY THIS WOULD BE GOOD; OTHERWISE, THE IMPRESSION IS THAT THIS IS A PARAPHRASE WITHOUT ATTRIBUTION, AND EVEN THAT ALL 3 TYPES ARE BASED ON THEIR THINKING**]{{% /todo %}}

* **Business-oriented microservices** – Fowler and Lewis suggest these usually cover a business function and are autonomous, giving the full advantage of the microservices architecture pattern. These microservices have UX, logic, and data.
* **API-oriented microservices** – These microservices are smaller and request-reply oriented. These are really closer to SOA layers, and they are good for generic functions behind web portals, for example. These microservices normally have only logic and data, as the UX is externally developed.
* **Shared data microservices** – These are a set of smaller apps sharing a database, which means this microservice pattern is closer to the monolith pattern. The risk here is in creating a monolith if too many apps use the same database. The service has logic and UX.

![](attachments/three-microservices-patterns/tmp-intro.png)

These patterns are better than SOA layers and monoliths, and they are used by Mendix customers in different situations. The most common situation is one where UX, logic, and GUI are all together, which makes it easier to control quality and consistency across deployments.

Mendix contains the UX, logic, and data layers, so it is easy to provide microservices for any of these three patterns. That also makes it is easy to complement a service with missing parts, if that should be required (for administration purposes, for example), as in these examples:

* For an API-oriented microservice used behind a shared UX layer, it is easy to add a business admin UX to manage exceptions and reference data
* For a shared database service, it is easy to add lookup tables for mapping or a business data cache into the app's database, since a database is always available

The sections below will take a closer look at these patterns.

## 2 Business-Oriented Microservices by Lewis and Fowler

Mendix bases its views on the [definition of microservices](https://martinfowler.com/microservices/#what) created by James Lewis and Martin Fowler from Thoughtworks. They recommend keeping all the parts of a business function together in a deployable container and separated from other business functions via explicit service contracts.

{{% todo %}}[**A LINK TO WHERE FOWLER AND LEWIS ACTUALLY SAY THIS WOULD BE GOOD; OTHERWISE, THE IMPRESSION IS THAT THIS IS A QUOTE WITHOUT ATTRIBUTION**]{{% /todo %}}

>The Microservice architecture style is an approach to build large applications as a suite of smaller parts where each microservice:
>- Is built around a business capability,
>-   Runs its own process,
>-   Communicate via a light weight mechanism,
>-   Is independently deployable
>-   by an automated deployment machinery

This approach makes the component more self-contained and autonomous, and the dependencies are clear and explicit.

This diagram shows how a large system can be divided into functionally-independent pieces that work together as actors in a business process:

![](attachments/three-microservices-patterns/0e68e5477045c7c1bce41181f9fd796b.png)

The division is accomplished in this way:

* The system is split into smaller autonomous pieces that work together (which is called a "system" or "cluster" in microservics architecture terminology)
* Each service contains a business function and speaks with other business functions or deep links

{{% alert type="info" %}}
When a large system has GUI, logic, and data, at least some microservices in the microservices architecture will also have a GUI. In fact, the split is functional, so most of them will have all three layers to fulfil a business function.
{{% /alert %}}

## 3 API-Style Microservices (Without UX)

Many people associate microservices with APIs and API gateways, because there are API management platforms that market those types of microservices. This pattern focuses on the “services” part of microservices, and it is closer to an SOA-layered model than the Fowler-Lewis microservices pattern.

API-style microservices provide one or more request-reply functions (usually in REST) that can be used by one or more UX components or web applications. This usually occurs on the other side of an API management layer that handles security and access.

The improvement from SOA-layered architecture is that these microservices are relatively small and independent. They should try to fulfil a business function, and they can have data in them. In this pattern, you are going from 4–8 layers with a central ESB in between, to only 3–4 layers using a lightweight API management gateway between the microservices and UX layer.

Mendix can be used in this way to great advantage. A typical use case here is a marketing-oriented customer portal where some areas contain text and images and some areas are functional. For more information, see the [Marketing Portals](mendix-microservices#marketing-portal) section of *Mendix Microservices*.

This diagram compares the business-oriented microservices approach—where data and functions are shared only via well-defined service calls—to a typical architecture based on “headless” microservices:

![](attachments/three-microservices-patterns/6e3dff3bb697181b31ba4145f5c2c960.png)

Since these microservices are small and contain relatively little data, they often expose and enrich functionality from legacy systems. A simple workflow is usually handled in the UX layer, to the extent that a workflow is required.

This pattern is useful in a large enterprise that wants to provide generic request-reply based services to be used in several channels (for example, in several mobile apps and customer-oriented portals).

This pattern is less efficient for process-heavy business applications and internal business department portals, where often concentrating the functionality in a business-oriented microservices cluster is more efficient.

## 4 Shared Database Microservices 

In Mendix, consistency between the layers of UX, logic, and data is very important. This consistency should be part of the model that is created. Mendix apps on the Mendix Cloud do not share a database, because if they did, the apps would be dependent on each other and it would be hard to guarantee quality and consistency from development to operations. Accordingly, Mendix developers do not need to know about SQL and which database is used.

For most other app-building platforms, the apps are not deployed *with* the database. Rather, they *point* to a database via a configured ease of integration to and from that database. There is often a Database Administrator who sets up a separate database that developers of different apps will use.

In this scenario, the common standard is to share a database between apps. This can be a good pattern when there are a few apps that act like modules in one single application. They will still be separately deployable, which is a benefit, but they will depend on the same database. This means that deployments of one app will contain changes to the database, which can affect the data of other apps. There is some separation of functions, but not as much as for business-oriented microservices.

This diagram presents the shared database pattern (on the right), where apps are using and updating the same database tables:

![](attachments/three-microservices-patterns/0e2dad99c7f5f0a548490fdd58a9e79c.png)

This pattern will gain speed in the short term, but it will make the system very hard to maintain in the long term. For more details, see *Why Not Share a Database?*.

{{% todo %}}[**ADD CROSS-REFERENCE ABOVE ONCE DETERMINED**]{{% /todo %}}

{{% todo %}}[**A LINK TO WHERE FOWLER, LEWIS, AND NEWMAN ACTUALLY SAID THE DETAIL BELOW WOULD BE GOOD; OTHERWISE, THE IMPRESSION IS THAT THIS IS A PARAPHRASE WITHOUT ATTRIBUTION**]{{% /todo %}}

In summary, the explanation of microservices as suggested by Fowler, Lewis, and Newman does not recommend sharing the same database for microservices, at least not if the apps are directly accessing each other’s data. The reason for this is that dependencies will grow in the same way as they would for a monolith.