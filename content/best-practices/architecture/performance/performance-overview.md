---
title: "Performance"
category: "Architecture"
menu_order: 4
description: "Presents a set of guidelines for building high-performance Mendix apps."
tags: ["guideline", "best practice", "high performance", "performance", "enterprise", "core"]
draft: true
---

{{% todo %}}[**COULD USE 1 MORE DIAGRAM**]{{% /todo %}}

## 1 Introduction

Mendix is optimized for easily and quickly developing and maintaing apps that perform well under a normal load. In addition, for core systems and high-volume situations, Mendix is an excellent choice for modeling, testing, tuning, and monitoring your solution.

This document goes through the main areas for building high-performance core enterprise systems using the Mendix Platform.

{{% alert type="info" %}}
This document is intended for Enterprise Architects, Lead Developers, and senior stakeholders to consider how to achieve the correct stability and performance when using the Mendix Platform for core enterprise systems.
{{% /alert %}}

## 2 Performance Overview

The subject area of performance deals with all the aspects of planning, designing, sizing, scaling, testing, and maintaining systems that handle significant volumes of data, service calls, or users. This subject area also deals with how to secure the stability and availability of these systems.

High performance with Mendix is achieved by taking a serious approach to designing, building, testing, and maintening apps. By architecting the solution for the specific high-volume use case, doing testing and tuning, automating tests, and using higher-skilled resources, virtually any business problem can be solved in a good way with Mendix. This allows companies to position Mendix for core systems and build a set of microservices that cooperate well at the center of their IT strategy.

The performance best practices will cover the following content areas:

* [Planning & designing for high-volume](plan-design-high-volume)
* [Sizing & scaling](sizing-scaling)
* [Testing & tuning](testing-tuning)
* [Deployments & stability](deployments-stability)
* [Teams & skills](teams-skills)
* [Performance guidelines](performance-guidelines)

### 2.1 Typical Use Cases

These are the typical use cases when performance best practices will be helpful:

* High throughput processing
* Large amount of concurrent users
* Working on large data sets
* Working on a geographically distributed system
* Requirements for [high availability](/developerportal/deploy/high-availability)

## 3 Related Documents

{{% todo %}}[**ADD LINK TO USE CASES WHEN AVAILABLE/CLARIFIED**]{{% /todo %}}

The performance best practices include performance use cases and [guidelines](performance-guidelines).

For more information, see [How to Detect & Resolve Performance Issues](/howto/monitoring-troubleshooting/detect-and-resolve-performance-issues) in the Mendix documentation.

In addition, the Mendix Academy also makes available a Mendix Expert training module called [Performance Guidelines](https://gettingstarted.mendixcloud.com/link/module/127/lecture/1031).

{{% todo %}}[**EXPLAIN DIAGRAM; UX-UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/overview/can-i-use-mendix.png)



