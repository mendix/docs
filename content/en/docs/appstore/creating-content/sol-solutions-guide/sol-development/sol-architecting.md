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

## 2 Architect a Solution for Adaptation

### 2.1 Progressive and Emergent Architecture

The goal for architecting a solution for adaptation is a deep understanding and full specification of the correct scoping of the different parts described above (meaning, the immutable core compared with customizable modules or something which needs to be customer-specific). This is a level of knowledge that you will only reach once you are serving a large number of customers.

When you start work on a solution for an initial customer or handful of customers, you might not have this thorough understanding yet. Instead, as you deliver the solution to additional customers, you will learn about their needs and will better understand which functionalities will be common and which will be specific.

This requires an iterative approach, where your understanding of the architectural requirements becomes clearer over time. It also requires a certain level of pragmatism in technical design choices, because you have to accept that you do not know everything up-front and you will have to redo certain design choices as your understanding increases.

<!-- TODO: add graphic of progressive emergent architecture -->

## 3 Implementation per customer

The customer implementation is a separate, _upgradable_ model instance (fork) per customer, that shares generic functionality from the original Solution model, that's deployed to separate cloud resources. This allows the implementation team to fully customize all non IP protected functionality. Not all customer implementations require changes to the model. In those cases the original model can be deployed as is. Depending on the use case the customer gains access to the project as well.

### 3.1 Summary

| Options                                               | Dedicated project | Cloud node per customer | Customer access to developer portal¹                | Model access for customer¹ |
| ----------------------------------------------------- | -------------------------------- | --------------------------------- | -------------------------------------------------- | ----------------------------------------- |
| ISV builds, no design-time adaptation needed          | No                               | Optional                          | No                                                 | No                                        |
| ISV builds and adapts for customer as managed service | Yes                              | Yes                               | Optional for collaboration with Feedback and Epics | No                                        |
| Customized by customer or implementation partner      | Yes                              | Yes                               | Yes, including access to the customer model        | Yes                                       |

¹Including partner that implements on behalf of the customer.

### 3.2 Configuration and Adaptation

As discussed in the [lifecycle of a solution](/appstore/creating-content/sol-development/#2-the-solution-lifecycle), the solution can be tailored to the customer’s need. The recommendation is to use:

-   **Runtime configuration** (using Database Settings objects, or Constants) when configuring to the need of customer groups. This should be used for lite configuration & personalization through developer-built flexibility.
    -   Enable/disable business processes
    -   Conditionally make capabilities available (e.g. feature toggles)
    -   Parameterize capabilities for groups of customers (e.g. configurable thresholds)
-   **Design-time adaptation** for changing the application model to the needs of individual customers. This should be used for the larger customizations:
    -   Adapting business processes & adding rules
    -   Modify integrations with core systems
    -   Adding customer-specific extensions that need to reside inside the solution application model
    -   (Custom) Integrations
    -   (larger) UI customizations

For some customizations both approaches can be utilized, but we recommend to take into account:

-   How easy is it to build and maintain?
-   Is it easy to implement and upgrade afterwards?
-   What is the impact on performance?

In general we recommend design-time, model adaptation over “building Mendix in Mendix”.

### 3.3 Design-time adaptation

For design-time adaptations we recommend to use the [Solution Initialization](/appstore/creating-content/sol-set-up/) & [Upgrade flow](/appstore/creating-content/sol-upgrade/) to create a dedicated project and Git repository¹ per customer and keep it up to date. This will allow for:

-   [Full control](/developerportal/collaborate/app-roles/) of who can access the individual customer’s model instance
-   Prevent access to [IP protected](/appstore/creating-content/sol-ip-protection/) content and the development of the original solution template
-   Using all [Collaboration features](/developerportal/collaborate/)
-   Data isolation per customer tenant by having dedicated environments (at least Acceptance and Production).

The customer model instances will run with “IP protection” enabled, meaning that parts of the original solution model can be hidden. Once the solution is published with the protected Solution Models, this implementation hiding cannot be undone by the consumer of the solution model.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-guide/sol-development/solution-deployment.png" alt="Development and deployment model for Solution Implementation"  width="50%" >}}

### 3.4 Customers without adaptation

It might be the case that not all your customers require model adaptation and they can therefore run on an unmodified version of the “Original Solution Model”. In this case it's recommended to distribute and deploy a Deployment Package (MDA), which also prevents inspection in the Mendix Model and ensures seamless upgrades. This can be combined with [Flexible Environments](/developerportal/deploy/environments/#222-flexible-environments) and/or a multi-tenancy setup.

If after go-live it becomes necessary to adapt the model for a customer, a solution can be initialized. If right after initialization a database backup is restored to the newly created environment, no data loss should happen.

_Make sure to test this scenario before applying any customizations, since this only works when the application model is based on the same version of the solution._

## 4 Application design

### 4.1 Combine the different module types to achieve IP protection & adaptability

An adaptable solution can exist of multiple core and adaptable modules. When creating a solution it's important to make a distinction between the different module types and their purpose in the application model:

| Type                                                                | Contains                                                    | Implementation          | Responsibility                                                       |
| ------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------- |
| [Solution modules](/refguide/module-settings/#solution-module)      | Immutable common core; Intellectual Property and Core Logic | Hidden                  | “Build” team                                                         |
| [(Open) application modules](/refguide/module-settings/#app-module) | Adaptable parts of the application                          | Visible, can be changed | Shared between “Build” and “Implement" teams                         |
|                                                                     | Customer specific additions                                 | Visible                 | “Implement” team                                                     |
| [UI modules](/refguide/ui-resources-package)                        | Contains theming                                            | Shown, can be changed   | Shared between “Build” and “Implement" teams |

Solution modules are unique in the sense that it's not possible to see or alter their implementation details (e.g. view the logic inside a microflow, change the parameters, or edit the data model). They act as a “System” module for your solution.

However, documents can refer back and forth between Solution and App modules. This allows for patterns with partial editability, abstract concepts and an extensible front-end. To make things easy to maintain it is a good practice to keep one adaptable module for each core module that’s marked as a Solution Module. These modules will be tightly coupled, and should be considered as one module: the Core will have dependencies on the adaptable module and vice versa.

Studio Pro enforces consistency during both development and implementation and will provide find usages (while protecting the implementation).

{{% alert color="info" %}}
This is an exception to the cyclic dependency rule, a Solution Module may have an Open Module counterpart while they work together as one module.
{{% /alert %}}

{{% alert color="info" %}}
Be sure to configure the [Solution](/refguide/app-settings/#solution) tab of **App Settings** to allow for distribution as an adaptive solution and creating Solution modules.
{{% /alert %}}

### 4.2 Designing the Interfaces

When designing the interfaces of your solutions, you should do the following:

-   Split your adaptive solution architecture into the [three main functional parts](/appstore/creating-content/sol-development/#3-three-parts-protected-core-vs-adaptability)
-   Think about which parts of the shared core are reusable in other parts:
    -   Define which shared logic should be reusable and define entry points to the shared logic as APIs
    -   Define which entities (data/state) are required in which parts of the functionality
-   Design APIs between common core and extension modules and consider making public only the parts that are explicitly required in other parts of your current architecture — design for today
-   Design APIs for custom-specific modules, focus on current customer requests and their value, and focus on a minimum viable product (MVP) by keeping it small and simple
-   Iterate with customers to evolve the adaptability of the solution by evolving the architecture
    -   Progressively, the architecture will emerge and become more complex as your solution becomes more successful, so re-architect when necessary

### 4.3 Applying IP Protection

IP protection can be used to make parts of the application model and the common core immutable by customers. For practical guidance, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

### 4.4 Mendix Platform Version

The [Solution Upgrade](/appstore/creating-content/sol-upgrade/) mechanism requires the application model to be of the same platform version as the version of the solution upgrade package. The recommendation is therefore to:

-   Preferrably publish a solution with the latest MTS patch version (e.g. 9.24.x) to allow customer implementations to be upgraded to the latest patch version independently. This helps with decoupling of release cycles in case of a Mendix Platform bug or security update.
-   Never upgrade a solution implementation to a higher minor or major version on its own (e.g. 9.18 to 9.20 or 9 to 10) when the solution is not upgraded.

When upgrading a solution to a higher minor or major version the process is:

-   Upgrade solution to the new version of the Mendix platform.
-   If needed, apply the needed changes to make the application model compatible with the new version of the platform.
-   Create a new solution package.
-   Upgrade the solution implementation to the targeted version of the Mendix Platform and commit. If this causes errors, commit “with errors”.
-   Upgrade the solution, all errors in the part of the application model that came from the solution template should be gone.
-   Apply the needed changes to make the adapted part model compatible with the new version of the platform.

<!-- TODO: add howto on platform upgrade -->
<!-- See also: ![How to Deal with Platform Upgrades and Solution Versioning](https://academy.mendix.com/link/modules/507/lectures/4038/3.3-How-to-Deal-with-Platform-Upgrades-and-Solution-Versioning) -->

### 4.5 Marketplace modules

Marketplace module with data in the database included in the solution should never be upgraded in the customer implementation, but always through a solution release upgrade. Otherwise this can lead to loss of data.

Example: A solution contains the Excel Importer module. If at any point the customer decides to update the module with a newer version rather than wait for an upgrade from the solution, the customer will later on run into merge conflicts. As soon as they would apply the upgrade from the solution vendor the team server will be unable to properly identify the changes from both sides for the Excel Importer module. If this merge conflict is handled incorrectly, data loss would be the result.

### 4.6 Clean coding

In general it is recommended to adhere to [Mendix Best Practices for Development](/refguide/dev-best-practices/) and have clear coding conventions, but for solutions that will be adapted at the model level, this is even more important.

The modifiable part of the model that will become editable is logically structured, well named and in which documents have a clear, single purpose. This will make it easier to implement, as well as to release newer versions and predict the impact of changes on existing solution implementations.

### 4.7 Security

See the following resources:

-   [Mendix Academy - Secure your Commercial Solution](https://academy.mendix.com/link/paths/131/Secure-your-Commercial-Solution)
-   [Implement Best Practices for App Security](https://docs.mendix.com/howto/security/best-practices-security/)
-   [Set Up Anonymous User Security](https://docs.mendix.com/howto/security/set-up-anonymous-user-security/)

Consider using [Add-on roles](https://academy.mendix.com/link/modules/519/lectures/4099/3.1-When-to-use-add-on-roles) to make it easier to configure the security for your customers.
