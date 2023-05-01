---
title: "Architect Adaptive Solutions"
url: /appstore/creating-content/sol-architecting/
linktitle: "Architect Solutions"
weight: 1
description: "Architect a solution for adaptation"
tags: ["solutions", "adaptive solutions", "architecting solutions"]
---

## 1 Introduction

The Mendix Platform is well-suited to supporting the development of solutions. Rapid development with Mendix allows for the adaptation of solutions to fit a customer's needs and context, and to integrate with the customer's existing IT landscape.

## 3 Architect a Solution for Adaptation

### 3.2 Progressive and Emergent Architecture

The goal for architecting a solution for adaptation is a deep understanding and full specification of the correct scoping of the different parts described above (meaning, the immutable core compared with customizable modules or something which needs to be customer-specific). This is a level of knowledge that you will only reach once you are serving a large number of customers.

When you start work on a solution for an initial customer or handful of customers, you might not have this thorough understanding yet. Instead, as you deliver the solution to additional customers, you will learn about their needs and will better understand which functionalities will be common and which will be specific.

This requires an iterative approach, where your understanding of the architectural requirements becomes clearer over time. It also requires a certain level of pragmatism in technical design choices, because you have to accept that you do not know everything up-front and you will have to redo certain design choices as your understanding increases.

<!-- TODO: add graphic of progressive emergent architecture -->

### 3.3 Designing the Interfaces

When designing the interfaces of your solutions, you should do the following:

-   Split your adaptive solution architecture into the [three main functional parts](#three-parts) described above
-   Think about which parts of the shared core are reusable in other parts:
    -   Define which shared logic should be reusable and define entry points to the shared logic as APIs
    -   Define which entities (data/state) are required in which parts of the functionality
-   Design APIs between common core and extension modules and consider making public only the parts that are explicitly required in other parts of your current architecture — design for today
-   Design APIs for custom-specific modules, focus on current customer requests and their value, and focus on a minimum viable product (MVP) by keeping it small and simple
-   Iterate with customers to evolve the adaptability of the solution by evolving the architecture
    -   Progressively, the architecture will emerge and become more complex as your solution becomes more successful, so re-architect when necessary

### 3.4 Applying IP Protection

IP protection can be used to make parts of the application model and the common core immutable by customers. For practical guidance, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

### 3.5 Configuring App Settings

Be sure to configure the [Solution](/refguide/app-settings/#solution) tab of **App Settings** to allow for distribution as an adaptive solution.
