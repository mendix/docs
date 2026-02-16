---
title: "Architecting Adaptable Solutions"
url: /appstore/creating-content/sol-architecting/
linktitle: "Architecting Solutions"
weight: 1
description: "Architect a solution for adaptation"
---

## Introduction

The Mendix Platform is well-suited to supporting the development of solutions. Rapid development with Mendix allows for the adaptation of solutions to fit a customer's needs and context, and to integrate with the customer's existing IT landscape.

## Progressive and Emergent Architecture

The goal for architecting a solution for adaptation is a deep understanding and correct scoping of the [three solution parts](/appstore/creating-content/sol-adapt/#three-parts): the immutable core, the customizable modules, and the customer-specific components.

This requires an iterative approach, where your understanding of the architectural requirements becomes clearer over time. It also requires a certain level of pragmatism in technical design choices, because you have to accept that you do not know everything upfront, and you will have to redo certain design choices as your understanding increases.

## Implementation per Customer {#per-customer}

The customer implementation is a separate upgradable model instance (fork). It shares generic functionality with the original solution model, and is deployed to separate cloud resources. This allows the implementation team to fully customize all the functionality that is not IP-protected. Not all customer implementations require changes to the model. In those cases, the original model can be deployed as is. Depending on the use case, the customer gains access to the app as well.

### Summary

| Options | Dedicated App | Cloud Node per Customer | Customer Access to Mendix Portal¹ | Model Access for Customer¹ |
| --- | --- | --- | --- | --- |
| ISV builds, no design-time adaptation needed | No | Optional | No | No |
| ISV builds and adapts for customer as managed service | Yes | Yes | Optional for collaboration with [Feedback](/developerportal/app-insights/feedback/) and [Epics](/developerportal/project-management/epics/) | No |
| Customized by customer or implementation partner | Yes | Yes | Yes, including access to the customer model | Yes |

¹Including the partner that implements on behalf of the customer.

### Configuration and Adaptation

As mentioned in the [Solution Lifecycle](/appstore/creating-content/sol-adapt/#lifecycle) section of *Adaptable Solutions*, the solution can be tailored to the customer’s need. 

Mendix recommends using the following:

* **Runtime configuration** through [database setting objects](/refguide/custom-settings/#database-settings) or [constants](/refguide/constants/) when configuring for the needs of customer groups. This should be used for light configuration and personalization through developer-built flexibility, for the following purposes:
    * Enable/disable business processes.
    * Provide conditional access to capabilities, such as through feature toggles.
    * Parameterize capabilities for groups of customers, such as through configurable thresholds.
* **Design-time adaptation** for changing the application model to the needs of individual customers. This should be used for larger customizations in order to do the following:
    * Adapt business processes and add rules.
    * Modify integrations with core systems.
    * Add customer-specific extensions that need to reside inside the solution application model.
    * Complete (custom) Integrations.
    * Make (larger) UI customizations.

For some customizations, both approaches can be used, but Mendix recommends taking the following into account:

* How easy is it to build and maintain?
* Is it easy to implement and upgrade afterwards?
* What is the impact on performance?

Mendix recommends design-time model adaptation over building Mendix in Mendix.

### Design-Time Adaptation

For design-time adaptations, Mendix recommends referencing [How to Set Up a Solution](/appstore/creating-content/sol-set-up/) and [How to Upgrade a Solution](/appstore/creating-content/sol-upgrade/). These provide details on creating a dedicated app and Git repository for each customer, including for the partner that implements the solution on behalf of the customer. This allows for the following:

* Full control over who can access the individual customer’s model instance via [app roles](/developerportal/general/app-roles/) 
* Preventing access to [IP-protected](/appstore/creating-content/sol-ip-protection/) content and the development of the original solution template
* Using all [Mendix Portal collaboration features](/developerportal/general/)
* Data isolation per customer tenant by having dedicated environments (at least acceptance and production)

The customer model instances run with [IP protection](/appstore/creating-content/sol-ip-protection/) enabled. This means that parts of the original solution model can be hidden. Once the solution is published with the protected solution models, the consumer of the solution model can no longer unhide the implementation.

### Customers Without Adaptation

Not all customers might require model adaptation. This means they can run on an unmodified version of the original solution model. In this case, Mendix recommends distributing and deploying a deployment package (MDA), which also prevents inspection in the Mendix model and ensures seamless upgrades. This can be combined with [flexible environments](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments) and/or a multi-tenancy setup.

If you need to adapt the model for a customer after it goes live, you can initialize a solution. If a database backup is restored to the newly created environment after initialization, no data is lost.

{{% alert color="info" %}}
Make sure to test this scenario before applying any customizations, since this only works when the application model is based on the same version of the solution.
{{% /alert %}}

## Application Design {#app-design}

### Combining Module Types

An adaptable solution can include multiple core and adaptable modules. When creating a solution, it is important to make a distinction between the different module types and their purpose in the application model:

| Type | Contains | Implementation | Responsibility |
| --- | --- | --- | --- |
| [Solution modules](/refguide/module-settings/#solution-module) | Immutable common core with intellectual property and core logic | Hidden | Build team |
| [(Open) application modules](/refguide/module-settings/#app-module) | Adaptable parts of the app | Visible, can be changed | Shared between build and implementation teams | 
| [UI modules](/refguide/ui-resources-package/) | Theming | Shown, can be changed | Shared between build and implementation teams |
| Customer-specific modules | Customer-specific additions | Visible | Implementation team |

You cannot see or alter the implementation details of solution models. For example, you cannot view the logic inside a microflow, change the parameters, or edit the data model. Implementation details act as a system module for your solution.

However, documents can refer back and forth between solution and app modules. This allows for patterns with partial editability, abstract concepts, and an extensible front-end. To make things easy to maintain, it is a good practice to keep one adaptable module for each core module that is marked as a solution module. These modules will be tightly coupled, and should be considered as one module, so that the core module will have dependencies on the adaptable module, and vice versa.

Studio Pro enforces consistency during both development and implementation, and enables finding usages while protecting the implementation.

{{% alert color="info" %}}

* This is an exception to the cyclic dependency rule, in that a solution module may have an open module counterpart while they work together as one module.  
* Be sure to configure the [Solution](/refguide/app-settings/#solution) tab of **App Settings** to allow for distribution as an adaptable solution and for creating solution modules.

{{% /alert %}}

### Designing Interfaces

When designing the interfaces of your solutions, Mendix recommends the following:

* Split your adaptable solution architecture into the [three main functional parts](/appstore/creating-content/sol-adapt/#three-parts).
* Think about which parts of the shared core are reusable in other parts.
    * Define which shared logic should be reusable, and create entry points to the shared logic under the form of APIs.
    * Define which entities (data/state) are required in which parts of the functionality.
* Design APIs between the common core and extension modules, and consider making public only the parts that are explicitly required in other parts of your current architecture.
* Design APIs for custom-specific modules, while focusing on current customer requests and their value.
* Iterate with customers to make the solution more adaptable by evolving the architecture.
    * The architecture becomes more complex as your solution becomes more successful, so re-architect when necessary.
* Focus on creating a minimum viable product (MVP).

### Applying Intellectual Property (IP) Protection

IP protection can be used to make parts of the application model and the common core immutable by customers. For practical guidance, see [Applying Intellectual Property Protection](/appstore/creating-content/sol-ip-protection/).

### Mendix Platform Version

To [upgrade a solution](/appstore/creating-content/sol-upgrade/), the application's Mendix Platform version must match the version specified in the solution upgrade package. Therefore, Mendix recommends the following:

* Publish a solution with the latest [MTS](/releasenotes/studio-pro/lts-mts/#mts) patch version. This allows customer implementations to be upgraded to the latest patch version independently. It also helps with decoupling release cycles in case of a Mendix Platform bug or security update.
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

Marketplace modules which have data in the database included in the solution should always be upgraded through a solution release upgrade. They should never be upgraded in the customer implementation, as this can lead to loss of data.

For example, a solution contains a module like the [Excel Importer](/appstore/modules/excel-importer/). If the customer decides to update the module with a newer version rather than wait for an upgrade from the solution, they will run into merge conflicts later. As soon as they apply the upgrade from the solution vendor, the Team Server will be unable to properly identify the changes from both sides for the module. If this merge conflict is handled incorrectly, data will be lost.

### Clean Coding

Mendix recommends adhering to the [Mendix Best Practices for Development](/refguide/dev-best-practices/) and having clear coding conventions. 

{{% alert color="warning" %}}
This is even more important for solutions that will be adapted at the model level.
{{% /alert %}}

You should ensure that the modifiable part of the model that will become editable is logically structured and well named, and that the documents have a clear single purpose. This will make it easier to implement, as well as to release newer versions and predict the impact of changes on existing solution implementations.

### Security

For details on security for your solution, see the following resources:

* [Implement Best Practices for App Security](/howto/security/best-practices-security/)
* [Set Up Anonymous User Security](/howto/security/set-up-anonymous-user-security/)
* [Secure Your Commercial Solution](https://academy.mendix.com/link/paths/131/Secure-your-Commercial-Solution) in Mendix Academy
* [When to Use Add-on Roles](https://academy.mendix.com/link/modules/519/lectures/4099/3.1-When-to-use-add-on-roles) in Mendix Academy
