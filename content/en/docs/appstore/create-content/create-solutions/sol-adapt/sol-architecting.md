---
title: "Architect Adaptable Solutions"
url: /appstore/creating-content/sol-architecting/
linktitle: "Architect Solutions"
weight: 1
description: "Architect a solution for adaptation"
---

## Introduction

The Mendix Platform is well-suited to supporting the development of solutions. Rapid development with Mendix allows for the adaptation of solutions to fit a customer's needs and context, and to integrate with the customer's existing IT landscape.

## Progressive and Emergent Architecture

The goal for architecting a solution for adaptation is a deep understanding and full specification of the correct scoping of the [three solution parts](/appstore/creating-content/sol-adapt/#three-parts) (meaning, the immutable core, customizable modules, and customer-specific components). This is a level of knowledge you will only reach once you are serving a large number of customers.

When you start work on a solution for an initial customer or handful of customers, you might not have this thorough understanding. Instead, as you deliver the solution to additional customers, you will learn about their needs and will better understand which functionalities will be common and which will be specific.

This requires an iterative approach, where your understanding of the architectural requirements becomes clearer over time. It also requires a certain level of pragmatism in technical design choices, because you have to accept that you do not know everything up-front and you will have to redo certain design choices as your understanding increases.

## Implementation per Customer {#per-customer}

The customer implementation is a separate, upgradable model instance (fork) per customer that shares generic functionality from the original solution model and that is deployed to separate cloud resources. This allows the implementation team to fully customize all the functionality that is not IP-protected. Not all customer implementations require changes to the model. In those cases, the original model can be deployed as is. Depending on the use case, the customer gains access to the app as well.

### Summary

| Options | Dedicated App | Cloud Node per Customer | Customer Access to Mendix Portal¹ | Model Access for Customer¹ |
| --- | --- | --- | --- | --- |
| ISV builds, no design-time adaptation needed | No | Optional | No | No |
| ISV builds and adapts for customer as managed service | Yes | Yes | Optional for collaboration with [Feedback](/developerportal/app-insights/feedback/) and [Epics](/developerportal/project-management/epics/) | No |
| Customized by customer or implementation partner | Yes | Yes | Yes, including access to the customer model | Yes |

¹Including the partner that implements on behalf of the customer.

### Configuration and Adaptation

As discussed in the [Solution Lifecycle](/appstore/creating-content/sol-adapt/#lifecycle) section of *Introduction to Adaptable Solutions*, the solution can be tailored to the customer’s need. 

Mendix recommends using the following:

* **Runtime configuration** (using [database setting objects](/refguide/custom-settings/#database-settings), or [constants](/refguide/constants/)) when configuring for the needs of customer groups. This should be used for light configuration and personalization through developer-built flexibility.
    * Enable/disable business processes
    * Conditionally make capabilities available (for example, feature toggles)
    * Parameterize capabilities for groups of customers (for example, configurable thresholds)
* **Design-time adaptation** for changing the application model to the needs of individual customers. This should be used for the larger customizations in order to do the following:
    * Adapt business processes and add rules
    * Modify integrations with core systems
    * Add customer-specific extensions that need to reside inside the solution application model
    * Complete (custom) Integrations
    * Make (larger) UI customizations

For some customizations, both approaches can be utilized, but Mendix recommends taking the following into account:

* How easy is it to build and maintain?
* Is it easy to implement and upgrade afterwards?
* What is the impact on performance?

Mendix recommends design-time model adaptation over "building Mendix in Mendix."

### Design-Time Adaptation

For design-time adaptations, Mendix recommends referencing [How to Set Up a Solution](/appstore/creating-content/sol-set-up/) and [How to Upgrade a Solution](/appstore/creating-content/sol-upgrade/) in order to create a dedicated app and Git repository per customer (including the partner that implements on behalf of the customer) and keeping these up to date. This allows for the following:

* Full control of who can access the individual customer’s model instance via [app roles](/developerportal/general/app-roles/) 
* Preventing access to [IP-protected](/appstore/creating-content/sol-ip-protection/) content and the development of the original solution template
* Using all [Mendix Portal collaboration features](/developerportal/general/)
* Data isolation per customer tenant by having dedicated environments (at least acceptance and production)

The customer model instances will run with [IP protection](/appstore/creating-content/sol-ip-protection/) enabled, meaning that parts of the original solution model can be hidden. Once the solution is published with the protected solution models, this implementation hiding cannot be undone by the consumer of the solution model.

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/solution-deployment.png" alt="Development and deployment model for Solution Implementation"  width="50%" class="no-border" >}}

### Customers Without Adaptation

It may occur that not all of your customers require model adaptation, so they can run on an unmodified version of the original solution model. In this case, Mendix recommends distributing and deploying a deployment package (MDA), which also prevents inspection in the Mendix model and ensures seamless upgrades. This can be combined with [flexible environments](/developerportal/deploy/environments/#flexible-environments) and/or a multi-tenancy setup.

If after going live it becomes necessary to adapt the model for a customer, a solution can be initialized. If right after initialization a database backup is restored to the newly created environment, no data loss should happen.

{{% alert color="info" %}}
Make sure to test this scenario before applying any customizations, since this only works when the application model is based on the same version of the solution.
{{% /alert %}}

## Application Design {#app-design}

### Combining Module Types

An adaptable solution can exist of multiple core and adaptable modules. When creating a solution, it is important to make a distinction between the different module types and their purpose in the application model:

| Type | Contains | Implementation | Responsibility |
| --- | --- | --- | --- |
| [Solution modules](/refguide/module-settings/#solution-module) | Immutable common core with intellectual property and core logic | Hidden | Build team |
| [(Open) application modules](/refguide/module-settings/#app-module) | Adaptable parts of the app | Visible, can be changed | Shared between build and implementation teams | 
| [UI modules](/refguide/ui-resources-package/) | Contains theming | Shown, can be changed | Shared between build and implementation teams |
| Customer-specific modules | Customer-specific additions | Visible | Implementation team |

Solution modules are unique in the sense that it is not possible to see or alter their implementation details (for example, viewing the logic inside a microflow, changing the parameters, or editing the data model). They act as a "system" module for your solution.

However, documents can refer back and forth between solution and app modules. This allows for patterns with partial editability, abstract concepts, and an extensible front-end. To make things easy to maintain, it is a good practice to keep one adaptable module for each core module that is marked as a solution module. These modules will be tightly coupled, and should be considered as one module, so that the core module will have dependencies on the adaptable module, and vice versa.

Studio Pro enforces consistency during both development and implementation, and enables finding usages while protecting the implementation.

{{% alert color="info" %}}
This is an exception to the cyclic dependency rule, in that a solution module may have an open module counterpart while they work together as one module.
{{% /alert %}}

{{% alert color="info" %}}
Be sure to configure the [Solution](/refguide/app-settings/#solution) tab of **App Settings** to allow for distribution as an adaptable solution and for creating solution modules.
{{% /alert %}}

### Designing the Interfaces

When designing the interfaces of your solutions, you should do the following:

* Split your adaptable solution architecture into the [three main functional parts](/appstore/creating-content/sol-adapt/#three-parts)
* Think about which parts of the shared core are reusable in other parts:
    * Define which shared logic should be reusable, and define entry points to the shared logic as APIs
    * Define which entities (data/state) are required in which parts of the functionality
* Design APIs between the common core and extension modules, and consider making public only the parts that are explicitly required in other parts of your current architecture (meaning, design for today)
* Design APIs for custom-specific modules, focus on current customer requests and their value, and focus on a minimum viable product (MVP) by keeping it small and simple
* Iterate with customers to evolve the adaptability of the solution by evolving the architecture
    * Progressively, the architecture will emerge and become more complex as your solution becomes more successful, so re-architect when necessary

### Applying IP Protection

IP protection can be used to make parts of the application model and the common core immutable by customers. For practical guidance, see [How to Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

### Mendix Platform Version

The [solution upgrade](/appstore/creating-content/sol-upgrade/) mechanism requires the application model to be of the same Mendix Platform version as the version of the solution upgrade package. Therefore, Mendix recommends the following:

* You should preferably publish a solution with the latest [MTS](/releasenotes/studio-pro/lts-mts/#mts) patch version to allow customer implementations to be upgraded to the latest patch version independently. This helps with decoupling of release cycles in case of a Mendix Platform bug or security update.
* Never upgrade a solution implementation to a higher minor or major version on its own (for example, 9.18 to 9.20, or 9 to 10, respectively) when the solution is not upgraded.

This is the process for upgrading a solution to a higher minor or major version:

1. Upgrade the solution to the new Mendix version.
2. If needed, apply the needed changes to make the application model compatible with the new Mendix version.
3. Create a new solution package.
4. Upgrade the solution implementation to the targeted Mendix version and commit. If this causes errors, commit with the errors.
5. Upgrade the solution (all errors in the part of the application model that came from the solution template should be gone).
6. Apply the needed changes to make the adapted part model compatible with the new version of the platform.

For more information, see [How to Deal with Platform Upgrades and Solution Versioning](https://academy.mendix.com/link/modules/507/lectures/4038/3.3-How-to-Deal-with-Platform-Upgrades-and-Solution-Versioning) in Mendix Academy.

### Marketplace Modules

Marketplace modules with data in the database included in the solution should always be upgraded through a solution release upgrade. They should never be upgraded in the customer implementation, as this can lead to loss of data.

For example, a solution contains a module like the [Excel Importer](/appstore/modules/excel-importer/). If at any point the customer decides to update the module with a newer version rather than wait for an upgrade from the solution, the customer will run into merge conflicts later. As soon as they apply the upgrade from the solution vendor, the Team Server will be unable to properly identify the changes from both sides for the module. If this merge conflict is handled incorrectly, data loss will result.

### Clean Coding

Mendix recommends adhering to the [Mendix Best Practices for Development](/refguide/dev-best-practices/) and having clear coding conventions.

{{% alert color="warning" %}}
For solutions that will be adapted at the model level, this is even more important.
{{% /alert %}}

You should ensure the modifiable part of the model that will become editable is logically structured and well named and that the documents have a clear single purpose. This will make it easier to implement as well as to release newer versions and predict the impact of changes on existing solution implementations.

### Security

For details on security for your solution, see the following resources:

* [Implement Best Practices for App Security](/howto/security/best-practices-security/)
* [Set Up Anonymous User Security](/howto/security/set-up-anonymous-user-security/)
* [Secure Your Commercial Solution](https://academy.mendix.com/link/paths/131/Secure-your-Commercial-Solution) in Mendix Academy
* [When to Use Add-on Roles](https://academy.mendix.com/link/modules/519/lectures/4099/3.1-When-to-use-add-on-roles) in Mendix Academy
