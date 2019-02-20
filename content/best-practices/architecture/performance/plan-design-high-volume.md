---
title: "Planning & Designing for High Volume"
parent: "mendix-performance"
description: ""
menu_order: 1
tags: [ ]
draft: true
---

## 1 Introduction

Some systems require high-volume processing and high levels of availability. The
approach should be adapted to achieve the required performance.

It starts in the planning and design phase, and it’s important to optimize
architecture, design, modelling and App structure for the specific case.

Planning for critical and high-performance systems will include some extra items
and require some additional skills:

-   A design phase in the beginning with UX ideation and architecture workshop,
    where the process flow and potential *Microservice architecture* \<link\> is
    defined

-   Initial *Sizing* \<link\> exercise, for a draft Infra design

-   More peer review of code, trying to constantly tune the model and maintain a
    good structure of the App

-   *Performance testing and Tuning* \<link\> during and/or after the App build,
    and *automated testing* \<link\> is recommended if the scope is large

-   Re-factoring phase at least once per year, to re-optimize structure

-   Automation and training for *Deployments* \<link\> and Recovery, for high
    availability

-   Good Monitoring in production

When deciding on which steps to add, the team should be set up, and the
necessary skills should be added to the team, see *Create and Team for
Performance* \<link\>. Naturally more technical specialists are needed to reach
maximum performance.

| **Approach**             | **No action** | **Peer Review & good App structure** | **Design Phase some Perf Test** | **Arch Workshop**  **Prof. Perf Test and Tuning** | **Full attention on Performance** |
|--------------------------|---------------|--------------------------------------|---------------------------------|---------------------------------------------------|-----------------------------------|
| *\# Records in DB*       | \< 100k       | \< 1m                                | \< 5m                           | \< 50m                                            | 500m or more                      |
| *\# Concurrent Users*    | \< 20 users   | \< 100 users                         | \< 500 users                    | \< 5k users                                       | 200k users or more                |
| *\# Service calls / sec* | \< 5 calls/s  | \< 10 calls/s                        | \< 50 calls/s                   | \< 500 calls/s                                    | 2k calls/s or more                |

### 2.1 Common Use Cases

-   High through-put processing \<link\>

-   Large amount of concurrent users \<link\>

-   Working on Large Data-sets\<link\>

-   Working on a geographically distributed system \<link\>

-   Requirements for high availability \<link\>


## 2 Architect for Performance

When architecting a normal App the focus is mostly on making it functionally
sound, with good modules that make it easy to develop and maintain, separating
concerns and sticking with other best practices considerations.

When the volume reaches a certain level, the main focus for the architecture
will switch towards high performance as the first consideration.

For example, in high volume straight through processing, we may choose to import
all data needed for decisions, to have it in the Database instead of making
outbound calls at very high volume. As a next step we will minimize database
retrievals and saves and then we may cache some of the data needed in the
high-volume logic.

## 3 Functionally Scaled Architecture 

A way to manage risk and very-high-volume situations is functional scaling. If
there is a reasonable functional separation between different areas, one can
deploy the same App several times for each functional area, so they run
separately, and thereby both divide the load and decrease the risk of
catastrophic failure.

An example could be a supply-chain scenario with a large set of distribution
centres running the same functionality but on different data, e.g. only 10% of
the orders go to one App. This also allows phased go-lives, additionally
reducing risk.

## 4 Microservice Architecture 

Another good way to manage scale is to divide processing into more components. One can build a core enterprise system as a set of separate functional microservices that cooperate and can be scaled separately. This splits the load and allows for optimizing the size per functional area.

A good microservice architecture improves on agility, ease of deployments, and separation of concerns. This makes it a very attractive way to build large systems.

An example here is a dashboard app use as a landing page. Users log in via SSO, master data is imported and distributed, and workflows can be managed while each specific phase of the business process gets another specific app. 

## 5 Geo-Scaling Architecture

For global and (often) customer-facing apps, having a snappy user interaction is critical. However, the geographical distance from the browser to the app instance serving the GUI functionality can be so large that it adds a noticeable lag. From Asia to the EU, this could be anywhere between 0.2–1.0 seconds, depending on the network and other factors.

The recommended scaling in this case is a geo-scaled instance running a regional install on each continent (for example, EU, US, Asia, South America, and often China).

In many cases, a CDN and DNS resolution via Akamai, for example, is in front and the closest instance is used. Naturally, this option may require additional functionality to synchronize any data that is needed in more than one geo-location app.

In some cases, a separate URL is acceptable. Users will then use a regional app that is 90% the same as the other instances. This also helps to eliminate risks from deployments and allows for easier regional specialization and localization.

### 6 Functional Scaling

{{% todo %}}[**VERIFY THIS SECTION SHOULD STAY HERE IN THIS DOC**]{{% /todo %}}

A way to manage risky and high-volume situations is functional scaling. If there is a reasonable functional separation between different areas, one can deploy the same app several times for each functional area so that they run separately. That will both divide the load and decrease the risk of catastrophic failure.

An example here is a supply-chain scenario with a large set of distribution centers running the same functionality but on different data (for example, only 10% of the orders go to one app). This scaling also allows for phased go-lives, which helps to additionally reduced risk.

## 7 Technical Scaling

When Functional scaling is optimal, we turn to technical *Sizing and Scaling*
\<link\>
