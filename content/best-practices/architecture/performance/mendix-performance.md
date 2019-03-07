---
title: "High Performance with Mendix"
parent: "performance-overview"
description: ""
menu_order: 1
tags: ["guideline", "best practice", "high performance", "performance", "enterprise", "core"]
draft: true
---

{{% todo %}}[**COULD USE 1-2 MORE DIAGRAMS**]{{% /todo %}}

## 1 Introduction

This document is intended for architects, senior stake-holders and lead developers to consider how to achieve correct stability and performance when using Mendix as the Platform for Core Enterprise systems.

### 1.1 Positioning, Portfolio Management & Project Planning

This document can be used by Enterprise Architects to create positioning documents or in the work of portfolio planning. It can also be used as a baseline for technology selection and project initiation.

![](C:/Users/adu/Documents/_Repositories/Documentation/GitHub%20docs/content/best-practices/architecture/performance/attachments/overview/high-perf-mendix.png)

### 1.2 Program or Product Expansion

The document is also relevant for expanding projects or programs via increased functionality, more users, more geographical regions, or significantly increased volume. It is a guide to what additional measures, methods, and skills are recommended for achieving the next level of volume and stability.

### 1.3 Operational Planning

The document can be helpful when sizing, configuring, managing, operating, and maintaining larger Mendix solutions. It can be useful for discussing infrastructure, operational procedures, and testing.

## 2 Overview of High Performance

### 2.1 The Right Level of Attention {#right-level}

Mendix is optimized for the easy and fast development and maintenance of apps and microservices that fulfill meaningful business functions. The Mendix modelling best practices enable you to achieve a good snappy performance, especially if you are working on core data in the Mendix app database or using back-end services that perform well to populate screens.

However, in cases when the volume of users or service calls is very high, special recommendations become relevant. Some modelling patterns are preferred, performance testing is required, tuning of the domain model and microflows is recommended, and scaling of infrastructure should be clear and tested.

In other cases, the criticality of the system is very high, which mandates doing performance and redundancy testing, increased monitoring, and planning well-tested failover scenarios.

<a name="table1"></a>This table presents an overview of the recommended attention levels required for different apps:

|                                          | Level 1               | Level 2                      | Level 3                                 | Level 4                                                      | Level 5                                                      |
| ---------------------------------------- | --------------------- | ---------------------------- | --------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Tuning & Monitoring Requirement**      | No action required    | Peer review & best practices | Occasional performance testing & tuning | Mendix Expert does regular performance testing, tuning, monitoring health | Architect does full-scale performance testing & professional monitoring |
| **Criticality of System**                | Low                   | Medium                       | High                                    | Core                                                         | Business critical                                            |
| **Uptime Requirement**                   | 95% of business hours | 98% of business hours        | 99% of business hours                   | 99% 24/7                                                     | 99.5% 24/7                                                   |
| **Number of Records in the Database**    | \< 100k               | \< 1m                        | \< 5m                                   | \< 50m                                                       | 500m or more                                                 |
| **Number of Concurrent Users**           | \< 20                 | \< 100                       | \< 500                                  | \< 5k                                                        | 200k or more                                                 |
| **Number of Service Calls (per Second)** | \< 5                  | \< 10                        | \< 50                                   | \< 500                                                       | 2k or more                                                   |

### 2.2 Potentially Massive Performance Improvements

Mendix has proven itself in several scenarios with the ability to tune the model where app size matters. These are some examples:

* Handling the throughput of 1000 orders per second in a supply-chain scenario
* Supporting the 20,000 concurrent users on a normal sized retail-oriented app
* Searching within the text of 30 million records within 0.2 seconds in a master data management (MDM) system

These are not absolute limits, but the examples present how much it was required to tune the respective Mendix apps based on business requirements. In some cases, the improvement was in the scale of 100 times better by doing significant tuning.

As a result, the customers could maintain their flexibility with using Mendix while still handling significant performance challenges.

### 2.3 Tuning

Normally, app functionality is built first to make sure it works as the business
wants it to, and then the tuning is started. But it is always good to read Mendix best
practices ahead of any app project.

When performance-tuning a Mendix app, the focus should always be on the highest-volume area or the most critical part of the logic. For example, in a high-volume straight-through processing (STP) app, the highest-volume area or most critical logic should be tuned, but the UI will not need tuning. In an app with a large number of users, the amount of traffic from the GUI to the app server may be minimized.

Some tuning can be done directly by a knowledgeable developer. More professional
tuning requires iterating over full-scale performance tests, tuning, more testing, and
so on, where metrics on execution times, CPU, and database usage are required.

Consider these tuning best pracatices:

* Small apps do not normally need any performance testing or tuning
* For a medium-sized app with some volume, it is a good idea to do peer reviewing and look at the Mendix Expert learning path [Optimize the Performance of Your Apps](https://gettingstarted.mendixcloud.com/link/path/39)
* For high-volume or critical apps, tuning and performance testing should be done at least occasionally, and the focus should be on the critical areas of the app
* When volume and criticality increase even further, a professional level of tuning is recommended, and professional monitoring in production is required
* For the most critical and high-volume apps, the performance testing and tuning need to be professional, so a professional performance expert should regularly assist the project, and the monitoring should be top-class.

### 2.4 Why Not Always Maximize Performance & Stability?

The reason why Mendix does not recommend full performance testing and professional
monitoring for all apps is that these measures add to the cost and time for development, maintenance, changes, and operations.

In some cases, tuning may use Java actions, SQL, and blobbing data. This can improve performance, but it makes maintenance harder and may require higher skill levels for changes and operations.

The most cost-effective way for an organization to operate an app landscape is to approach performance and stability with a conscious knowledge of what is required for each app. Then, you should focus time, investment, and attention on the most critical systems, while leaving other systems lightweight and agile.

## 3 Designing for Volume

When preparing to design and build a system that requires high- volume processing and high levels of availability, it is important to focus in on the specifics of the situation at hand and make the design work in favor of the situation.

{{% todo %}}[**ADD SENTENCE WHEN CROSS-REFERENCED DOC/SECTION AVAILABLE: "For more information on how to design for volume, see "Designing for Volume," which looks at different architecture approaches."**]{{% /todo %}}

You can also reference these use cases:

{{% todo %}}[**ADD LINKS WHEN DOCS/SECTIONS AVAILABLE**]{{% /todo %}}

* High throughput processing
* Large amount of concurrent users
* Working on large datasets
* Working on a geographically distributed system
* Requirements for high availability

When moving towards core systems with a large amount of functionality, Mendix recommends looking at a microservices architecture.

## 4 Sizing & Scaling

After designing and architecting a system, you need to do a preliminary sizing. There may be more than one app that needs to be sized, in the case of functional scaling or a microservices architecture. For each app, you need to determine the criticality and an initial estimate on the following factors:

* How large the app container should be
* Should there be load balancing
* What the app server-level failover is
* Database fallback scenarios
* Whether you need customized containers or dynamic scaling

At the end of development, you should revisit the sizing based on realistic tests with realistic test data.

For more information, see [Sizing & Scaling](sizing-scaling).

## 5 Performance Testing & Tuning

For most apps, there is no need for performance testing and tuning during the creation of an app. Functional testing is enough, as it will reveal pages that load slowly that can be tuned.

However, for more critical and high-volume systems, Mendix recommends taking a careful look at how to secure testing and tuning for good performance. This is an iterative approach that can be done during and/or after the creation of a new app or system of apps.

To read more, see [Testing & Tuining](testing-tuning).

{{% todo %}}[**ADD TO ABOVE WHEN CROSS-REFERENCED DOC/SECTION AVAILABLE: "Detecting & Resolving Performance Issues."**]{{% /todo %}}

## 6 Deployments & Stability

Next step is to make sure that deployments are safe and that the apps run correctly in production once they are deployed. There are a number of different strategies to achieve high availability and avoid disturbing business operations.

For details, see [Deployments & Stability](deployments-stability).

## 7 Team & Skills

As the necessary levels of design, architecture, testing, tuning, and app-criticality become clear, you may need to adjust the skills level of your team. Naturally, more critical apps that need to handle more volume will need more experienced designers and developers.

{{% todo %}}[**ADD TO WHEN CROSS-REFERENCED DOC/SECTION AVAILABLE: "For details, see Team and Skills."**]{{% /todo %}}

## 8 Guidelines for Performance

Mendix also provides a set of useful guidelines for the Developers and Testers of Mendix apps that require high-performance. 

{{% todo %}}[**ADD TO WHEN CROSS-REFERENCED DOCS/SECTIONS AVAILABLE: "These are divided into the following documents: "Overview of Performance Guidelines," "-   UX Design for Good Performance," "Modelling Guidelines for Performance," "Domain Model & Indexing," "Data Retrieval/Storage for High Volume," and "Integration Guidelines for High Volume." **]{{% /todo %}}

For more information, see [How to Implement Community Best Practices for App Performance ](/howto/general/community-best-practices-for-app-performance) as well as [Three Tools to Test Your Mendix Application](https://www.mendix.com/blog/three-tools-to-test-your-mendix-application/).

## 9 Summary

In summary, the Mendix Platform can be used for almost all situations found in the business application landscape of a typical enterprise. The most important thing to do is pay the correct amount of attention to team skills, good modelling, tuning, performance-testing, sizing, scaling, and operational monitoring and procedures.

Mendix will often not play well in the area of business intelligence, analytics, and data warehousing. There are also better tools for content management. In addition, there are a lot of great SaaS tools out there that make sense when the functionality is standard across industries and very little customization is needed.

But for almost all other cases, Mendix is a good choice due to the following characteristics:

* Seamless development
* Operational experience
* Speed of development
* Ease of use

As a Mendix customer, you can decide on system borders, align to your own processes, and make smart functional microservices that fit your functional and technical needs. In addition, as this overview demonstrates, you can build microservices that adapt to the volumes and criticality of your system.