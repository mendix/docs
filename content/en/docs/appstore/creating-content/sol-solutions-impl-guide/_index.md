---
title: "Implementing Solutions"
url: /appstore/creating-content/sol-solutions-impl/
linktitle: "Implementing Solutions"
category: "Creating Content"
weight: 4
description: "Provides information and guidance on how to implement Mendix solutions."
tags: ["solutions guide", "adaptive solutions", "solutions", "implement solution", "set-up solution", "upgrade solution"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
These guides for creating content in the Marketplace are under active development and will be regularly extended with new sections. Make sure to check in regularly to stay up to date with the latest documentation!
{{% /alert %}}

## 1 Introduction

This section provides information and guidance on how to set-up and upgrade solutions.

## 2 Solution lifecycle

Typical solution lifecycle is shown on the image below:
{{< figure src="/attachments/appstore/creating-content/sol-solutions-impl-guide/solution-lifecycle.png" alt="Adaptive Solution Lifecycle" >}}

There is 3 main stages a solution goes thru during it's lifecycle. 


- Build

This stage is performed by ISVs. They create solutions and keep working on the improvements releasing new versions every now and then (it is advised to release new version of the solutions together with Mendix Studio Pro LTS releases).

- Implement

At this stage solutions are adapted to fit specific customer's needs. This can be done by either ISV itself or Implementation partner or even the customer itself.

- Consume

This stage is actual production use of the application.

## 3 Implement stage

As the Build stage is an iterative process, a new version is periodically released by ISV. Then the implementor needs to incorporate the changes from this new version into the current implementation. 

In order to so that, there are 2 procedures to follow:

- Solution needs to be set-up the proper way to enable future upgrades to the new ISV provided versions. Set-up procedure is described in [Set-up section](/appstore/creating-content/sol-solutions-impl/setup) 

- The Upgrade procedure of a correctly set-up solution is described in [Upgrade section](/appstore/creating-content/sol-solutions-impl/sol-upgrade) 

## 4 Read More

For more details on building solutions, see [Architecting Adaptive Solutions](/appstore/creating-content/sol-architecting/).

You can check out [Developing Solutions](/appstore/creating-content/sol-development/) section, which presents principles and best practices for developing solutions on the Mendix Platform that are ready to be sold on the Marketplace.
