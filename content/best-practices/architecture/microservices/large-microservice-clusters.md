---
title: "Large Microservices Clusters"
parent: "microservices-overview"
menu_order: 3
draft: true
tags: ["microservices"]
---

## 1 Introduction

As the business function grows very large, you can consider splitting it in several systems. You can also consider creating a tribe of DevOps teams that will cooperate to own such a large cluster, which can replace one-to-many core systems in a regular architecture.

These are the typical microservices seen in such clusters:

* **Internal dashboard or landing page** – This is where internal end-users can get overviews, simple reports, and links to other functionality. Some data from processes are copied up to the dashboard to allow for good overviews. However, when an end-users wants to work on a specific process, that is done in one of the sub-apps.
* **Customer portal** – This can be separated as a case of keeping external end-users and security separated. If you want external end-users to see only a sub-set of the data and processes, you can copy that to a customer portal so that you know exactly what can be accessed. Widgets can be shared via the [Mendix App Store](https://appstore.home.mendix.com/index3.html) if relevant.
* **Mobile portal** – This kind of portal can be used for end-uses on mobile devices. Such a portal often has a larger amount of end-users and/or events, but much smaller functionality. With very different operational features, this is a candidate for a separate specialized app.
* **Product definitions** – These definitions along with other relatively static master data management is often good to set up in a separate app. This is a different phase of the process, often with a different user group. It also often only needs to be synced daily or monthly.
* **Historical data** – Thos data can be separated with views created from the dashboard, since this makes the operational databases smaller (which is always good for performance). Quite often, there is a different process that uses historical data.
* **Operational data store (ODS)** – Quite often this exists, but it is rarely needed. However, this can be considered when you need to keep data from different processes together to in order to join the data in views and reports. An ODS should only be considered if the dashboard is not suited for this.

![](attachments/large-microservice-clusters/lmc-intro.png)

## 2 Good Integration

Mendix cannot make good integration easy, but we can make it easier. It takes the right thinking to find the right apps and integrate them well with minimal contracts in order to create smart and minimal dependencies. When dependencies are defined, it is easy in Mendix to implement and maintain them using REST, OData, SOAP, or file contracts sent via FTP(S).

This is why when you build larger systems, you need experienced people, best practices, and a careful approach. In addition, you should consider an "app factory" or a group of teams that owns one functional area.

## 3 Approach to Size & Changes

As the size of what you build increases, the approach needs to change. More care needs to be taken with the following actions:

* Architecting and designing before building
* Involving a more experienced Lead Developer
* Involving more technical developers
* Conducting more peer reviews
* Conducting more testing, automated testing, and tuning
* Performing more refactoring (for example, 1–2 times per year)
* Implementing more monitoring

Speed does slow down with size, in whichever direction you turn. However, you can minimize that consequence of this by implementing a solid microservices architecture with a good team and a professional approach.

## 4 Positioning for Core Systems

As seen above, a microservices architecture makes it possible to build any size of system using smaller deployable parts. For core systems, legacy migration, and shared large systems, the Biz-DevOps strategy can become less relevant as efficiency, economies of scale, thoroughness, and stability may dominate.

Positioning for core systems should be based on both technology *and* approach, as expalined in the [Gartner Pace-Layered Application Strategy](https://www.gartner.com/binaries/content/assets/events/keywords/applications/apn30/pace-layered-applications-research-report.pdf). In short, you need to optimize for what each system requires.

Sometimes speed is important, sometimes size. Sometimes stability and performance are even more important, and your app project should adapt accordingly. With a mature and careful approach, Mendix can be used for almost any challenging business problem.

In these situations, there is often a "factory model" adopted. This approach combines a set of DevOps tribes (with each tribe owning an area of functionality) with an automation team and a CoE for reuse, governance, specialists, and control. 

## 5 The Rate of Feature Realization

This diagram shows how in any technology, the speed of feature realization will slow down as the system grows over time:

![](attachments/large-microservice-clusters/rate.png)

You can see the following points illustrated in the diagram above:

* Both monoliths and microservices are better than traditional service-oriented architecture (SOA) layers, where dependencies between components realizing the same business feature are maximized rather than minimized
* Monolith development will be faster to start with, since you only have one single component and do not need integration
* As the scope grows, there will be benefits in separating the concerns from each other

If it is not very clear from the beginning which apps should be created, it is generally advised to start coarse-grained and split things up later.
