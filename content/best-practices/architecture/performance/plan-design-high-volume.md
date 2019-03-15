---
title: "Planning & Designing for High Volume"
parent: "mendix-performance"
description: ""
menu_order: 1
tags: [ ]
draft: true
---

{{% todo %}}[**NEEDS DIAGRAMS**]{{% /todo %}}

## 1 Introduction

Some systems require high-volume processing and high levels of availability. The architecture approach should thus be adapted to achieve the required performance. 

The approach starts with a planning and design phase, during which it is important to optimize the architecture, design, modelling, and app structure for the specific case. Planning for critical and high-performance systems will include some extra items and require some additional skills:

{{% todo %}}[**ADD LINKS BELOW WHEN AVAILABLE**]{{% /todo %}}

* A design phase in the beginning with UX ideation and architecture workshop, where the process flow and potential [microservice architecture]() is defined
* Initial [sizing and scaling](sizing-scaling) exercise for a draft design 
* More peer review of code for trying to tune the model and maintain a good app structure
* [Performance testing and tuning]() during and/or after the app build, and [automated testing]() is recommended if the scope is large
* Re-factoring at least once per yearc to re-optimize the structure
* Automation and training for [deployments] and recovery for high availability
* Good monitoring in production

When deciding which steps to add, the team should be set up, and the necessary skills should be added to the team (for more information, see [Creating a Team for Performance](teams-skills). Naturally, more technical specialists are needed to reach maximum performance.

{{% todo %}}[**EXPLAIN TABLE BELOW**]{{% /todo %}}

| Approach | No Action | Peer Review & App Structure | Design Phase & Some Perf. Test | Arch. Workshop & Prof. Perf. Test & Tuning | Full Attention on Perf. |
| --- | --- | --- |--- | --- |--- |
| # Records in Database | < 100k | < 1m | < 5m | < 50m | 500m or more |
| # Concurrent Users | < 20 | < 100 | < 500 | < 5k | 200k or more |
| # Service Calls (per Sec) | < 5  | < 10 calls | < 50 calls | < 500 calls  | 2k calls or more |

### 2.1 Common Use Cases

{{% todo %}}[**EXPLAIN THIS SECTION, ADD LINKS BELOW WHEN AVAILABLE**]{{% /todo %}}

* High throughput processing 
* Large amount of concurrent users 
* Working on large datasets
* Working on a geographically distributed system
* Requirements for high availability

## 2 Architect for Performance

When architecting a normal app, the focus is mostly on making it functionally sound. This involves building modules that are easy to develop and maintain, separating concerns, and sticking with other best practice considerations.

When the app volume reaches a certain level, the main focus for the architecture will switch towards high performance as the first consideration.

As an example of architecting for performance in high-volume straight-through processing, you may choose to import all the data needed for decisions in order to have it in the database instead of making outbound calls at very high volume. As a next step, you would minimize database retrievals and saves. And then you could cache some of the data needed in the high-volume logic.

## 3 Functionally-Scaled Architecture 

A way to manage risk and very high-volume situations is functional scaling. If there is a reasonable functional separation between different areas, you can deploy the same app several times for each functional area so that they run separately. That will both divide the load and decrease the risk of catastrophic failure.

An example of functionally-scaled architecture is a supply-chain scenario with a large set of distribution centers running the same functionality but on different data (for example, only 10% of the orders go to one app). This also allows for phased go-lives, additionally reducing risk.

When functional scaling is optimal, you should turn to technical sizing and scaling. For more information, see [Sizing & Scaling](sizing-scaling).

## 4 Microservice Architecture 

Another good way to manage scale is to divide processing into more components. One can build a core  enterprise system as a set of separate functional microservices that cooperate and can be scaled separately. This splits the load and allows for optimizing the size per functional area.

A good microservice architecture improves on agility, ease of deployments, and separation of concerns. This makes it a very attractive way to build large systems.

An example of microservice architecture is a dashboard app used as a landing page. Users log in via SSO, master data is imported and distributed, and workflows can be managed while each specific phase of the business process gets another specific app.

## 5 Geo-Scaling Architecture

For global and (often) customer-facing apps, having a snappy user interaction is critical. However, the geographical distance from the browser to the app instance serving the GUI functionality can be so large that it adds a noticeable lag. From Asia to the EU, this could be anywhere between 0.2–1.0 seconds, depending on the network and other factors.

The recommended scaling in this case is a geo-scaled instance running a regional install on each continent (for example, EU, US, Asia, South America, and often China).

In many cases, a content delivery network (CDN) and domain name system (DNS) resolution via Akamai, for example, is in front and the closest instance is used. Naturally, this option may require additional functionality to synchronize any data that is needed in more than one geo-location app.

In some cases, a separate URL is acceptable. Users will then use a regional app that is 90% the same as other instances. This also helps to eliminate risks from deployments and allows for easier regional specialization and localization.
