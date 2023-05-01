---
title: "Develop Adaptive Solutions"
url: /appstore/creating-content/sol-development/
weight: 20
description: "Presents documentation for developing solutions"
tags: ["solutions", "development", "adaptive solutions"]
---

## 1 Introduction

This section provides information and best practices on how to develop adaptive solutions on the Mendix Platform that are ready to be sold on the Mendix Marketplace.

While [Mendix best practices for development](/refguide/dev-best-practices/) apply, there are additional considerations when architecting and developing a Mendix solution. The overview of [Architect Adaptive Solutions](/appstore/creating-content/sol-architecting/) is a good starting point.

## 2 What is an Adaptive Solution?

In an adaptive solution, up to 20% of the _end solution_ can be adapted through customizations, extensions, integrations, or new customer-specific modules. Instead of being tied to a prescriptive software-as-a-service (SaaS) solution that only allows for configuration at runtime, adaptive solutions allow for design-time adaptation through model-level changes to cater to the needs of your specific implementation.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/sol-architecting/adaptive-solution-architecture.png" alt="Adaptive Solution architecture" >}}

## 2.1 Use cases

Adaptive Solutions as a concept work both for ISVs (e.g. in the [Commercial Solution program](/appstore/creating-content/comm-sol-partner-program/)) as well as in the enterprise context.

### 2.1.1 ISV Commercial Solutions

ISVs can create and sell solutions which can be adapted for every individual customer. This allows them to be more relevant to their customers by being able to adapt the application to specific requirements in UI/UX, process, data and integration. The delivered solution is upgradable so the ISV can deliver innovations and improvements.

### 2.1.2 Enterprise context

In larger enterprises there's the typical situation in which different departments or regionals have the same need, but are also (slightly) different from each other. Adaptive Solutions allow for centralized development of the core solution, while different teams can make adaptations themselves. Through upgrades the centralized team can push common functionality to the different teams. An IP-protected and immutable core will ensure that the implementation teams only adapt what's needed, to minimize the impact of upgrades and adaptation effort.

<!-- ### 2.1 Adaptive Solution Examples

An adaptive solution is a solution where each customer gets an instance of the solution based on a common core. This instance is adapted to the customer’s specific needs and context, and integrated with the customer’s existing IT landscape.

The Mendix Marketplace contains numerous adaptive solutions, for example:

-   [Mendix PLM for Fashion and Retail](https://marketplace.mendix.com/link/component/118343)
-   [Siemens FSM](https://marketplace.mendix.com/link/component/117710)
-   [Omnichannel Integration Layer](https://marketplace.mendix.com/link/component/118344)

Each solution is useable as is, but it can also be adapted to become even more suitable for the customer.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/sol-architecting/mendix-plm-for-fashion-and-retail.png" alt="Mendix PLM for Fashion and Retail" >}} -->

## 2 The Solution Lifecycle

This image presents the typical solution value chain containg:

-   The 3 fases a solution goes through: "building the solution core", "implementation for a customer" and "production usage",
-   Who's involved in what phase,
-   The interaction of the dev-ops, feedback & upgrade cycles for the different phases.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/solution-lifecycle.png" alt="Adaptive Solution Lifecycle" >}}

There are three main stages a solution goes through during its lifecycle:

| Phase     | Party                                          | Purpose                                                                                                                               |
| --------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Build     | ISV                                            | Create a solution that's designed for adaptation. New versions are periodically released.                                             |
| Implement | ISV, the Customer or an implementation partner | Adapt the solution to the individual customer's need. Including changes on UI, data, logic or integration into the customer landscape |
| Consume   | Customer                                       | Production usage of the application by the customer. Functional admins can perform day-to-day tasks                                   |

The customer implementation is a separate, _upgradable_ model instance (fork) per customer, that shares generic functionality from the original Solution model, that's deployed to separate cloud resources. This allows the implementation team to fully customize all non IP protected functionality.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/solution-deployment.png" alt="Adaptive Solution Deployment"  width="50%" >}}

For more details on this read [INSERT LINK HERE](/appstore/creating-content/sol-development/sol-architecting/).

## 3 Three parts: protected core vs adaptability

Architecting a solution for adaptation requires an understanding of your customers' needs: You need to know which functional requirements are common across your customers and which are specific to individual customers. This enables splitting the application model into the following three main functional parts:

-   A shared and immutable common core
-   Common modules that can be adapted to a customer’s needs
-   Customer-specific extension modules

For the customer production usage they are all part of the same model, and will all be deployed to the same application container.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/solution-three-parts.png" alt="3 parts of the adaptable solution">}}

These different parts work together in the customer implementation. It is important to maintain the distinction because theres an inherent tradeoff: what's part of the common core and IP protected, cannot be adapted or modified, while what can be adapted, can never be protected. This boundary can be created at a fine grained level. All adaptation (both extensions and adaptable core) can make use of functionality from the common core. To read more about this, please read: [INSERT LINK HERE](/appstore/creating-content/sol-development/sol-architecting/).

| Part                         | IP Protected | Responsibility                                                            | Upgradable              | Purpose                                                                                                                                                                         |
| ---------------------------- | ------------ | ------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Immutable Core               | Yes          | Build team                                                                | Yes, drop-in            | Core of the application<br />e.g., data model, workflow actions, standard integrations                                                                                          |
| Adaptable Core               | No           | Shared documents: Build team<br />Customer documents: Implementation team | Yes, fine-grained merge | Customer specific changes to the model<br />e.g., workflows, data model extensions, customizable pages &amp; snippets, theming, extendable microflows, translation &amp; jargon |
| Customer Specific Extensions | No           | Implementation team                                                       | Not needed              | Added features for the customer<br />e.g., Integration with existing systems, additional visualisations                                                                         |

## 4 IP Protection

To ensure that the intellectual property (IP) that is created during the "Build" phase will not be disclosed to implementation teams or customers, you can [apply IP Protection](/appstore/creating-content/sol-ip-protection/). This will also render those components "immutable", making it easier to upgrade because there will never be any merge conflicts.

## 6 Documents in This Section

-   [Architect Adaptive Solutions](/appstore/creating-content/sol-architecting/)
-   [Apply IP Protection](/appstore/creating-content/sol-ip-protection/)
