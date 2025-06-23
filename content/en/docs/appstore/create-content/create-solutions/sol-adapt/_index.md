---
title: "Introduction to Adaptable Solutions"
url: /appstore/creating-content/sol-adapt/
weight: 20
no_list: false
description_list: true
description: "Presents introductory information on adaptable solutions."
---

## Introduction

This section provides information and best practices on how to develop adaptable solutions on the Mendix Platform that are ready to be sold on the Mendix Marketplace.

While [Mendix best practices for development](/refguide/dev-best-practices/) apply, there are additional considerations when [architecting](/appstore/creating-content/sol-architecting/) and developing a Mendix solution.

## What Is an Adaptable Solution?

In an adaptable solution, up to 20% of the end solution can be adapted through customizations, extensions, integrations, or new customer-specific modules. Instead of being tied to a prescriptive software-as-a-service (SaaS) solution that only allows for configuration at runtime, adaptable solutions allow for design-time adaptation through model-level changes to cater to the needs of your specific implementation.

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/sol-architecting/adaptable-solution-architecture.png" alt="Adaptable Solution architecture" class="no-border" >}}

## Use Cases

As a concept, adaptable solutions work both for ISVs (for example, in the [Mendix Commercial Solution Partner Program](/appstore/creating-content/comm-sol-partner-program/)) and in the enterprise context.

### ISV Commercial Solutions

ISVs can create and sell solutions that can be adapted for every individual customer. This allows them to be more relevant to their customers by being able to adapt the application to specific requirements in UI/UX, process, data, and integration. The delivered solution is upgradable so the ISV can deliver innovations and improvements.

### Enterprise Context

In larger enterprises, a typical situation occurs in which various departments or regionals have the same need, but they are also (slightly) different from each other. Adaptable solutions allow for the centralized development of the core solution while different teams can make adaptations themselves. Through upgrades, the centralized team can push common functionality to the different teams. An IP-protected and immutable core ensures that the implementation teams only adapt what is needed in order to minimize the impact of upgrades and adaptation effort.

## Solution Lifecycle {#lifecycle}

The solution value chain and lifecycle consists of three important phases:

| Phase | Party | Purpose |
| --- | --- | --- |
| Building the solution core | ISV | Create a solution that is designed for adaptation. New versions are periodically released. |
| Implementing for a customer | ISV, the customer, or an implementation partner | Adapt the solution to the individual customer's need and apply upgrades. Include changes to UI, data, logic, or integration in the customer landscape. |
| Consuming in production | Customer | Production usage of the application by the customer. Functional admins can perform day-to-day tasks. |

The solution lifecycle can be visualized in this diagram:

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-lifecycle.png" alt="Adaptable Solution Lifecycle" class="no-border" >}}

### Implementation as a Separate Model Instance and Cloud Node

The customer implementation is a separate upgradable model instance (fork) per customer that shares generic functionality from the original solution model and that is deployed to separate cloud resources.

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-deployment.png" alt="Adaptable Solution Deployment"  width="50%" class="no-border" >}}

The separate model instance allows the implementation team to fully customize all [non-IP protected](#ip-protection) functionality. Not all customer implementations require changes to the model. In those cases, the original model can be deployed as is.

{{% alert color="info" %}}
It is at the solution developer's discretion to determine who can implement a solution, who can access the model, and whether their delivery model is software-as-a-service (SaaS) or a solution template with a subscription for updates.
{{% /alert %}}

For more details, see the [Implementation per Customer](/appstore/creating-content/sol-architecting/#per-customer) section of *How to Architect Adaptable Solutions*.

## Three Parts (Core, Adaptations, Extensions) {#three-parts}

Architecting a solution for adaptation requires an understanding of your customers' needs. You need to know which functional requirements are common across your customers and which are specific to individual customers. This enables grouping the modules in the application model into three main functional parts:

* A shared and immutable common core
* Common modules that can be adapted to a customer’s needs
* Customer-specific extension modules

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-three-parts.png" alt="Three parts of the adaptable solution" class="no-border" >}}

These different parts work together in the customer implementation. It is important to maintain these distinctions, because there is an inherent tradeoff: What is part of the common core and IP-protected cannot be adapted or modified, while what can be adapted can never be protected. This boundary can be created at a fine-grained level. All adaptation (both extensions and adaptable core) can make use of functionality from the common core. For more information, see the [Application Design](/appstore/creating-content/sol-architecting/#app-design) section of *How to Architect Adaptable Solutions*.

This table describes the three main functional parts in more detail:

| Part | IP-Protected | Responsibility | Upgradable | Purpose |
| --- | --- | --- | --- | --- |
| Immutable common core | Yes | Build team | Yes, drop-in | Core of the application (for example, data model, workflow actions, standard integrations) |
| Adaptable core | No | Build team for shared documents, implementation team for customer documents | Yes, fine-grained merge | Customer specific changes to the model (for example: workflows, data model extensions, customizable pages and snippets, theming, extendable microflows, translation and jargon) |
| Customer-specific extensions | No | Implementation team | Not needed | Added features for the customer (for example, integration with existing systems, additional visualizations) |

## IP Protection {#ip-protection}

To ensure that the intellectual property (IP) that is created during the [building the solution core](#lifecycle) phase is not disclosed to implementation teams or customers, you can [apply IP protection](/appstore/creating-content/sol-ip-protection/). This will also render those components immutable and make it easier to upgrade, as there will never be any merge conflicts.

## Documents in This Section
