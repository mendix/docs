---
title: "Component-Based Architecture"
parent: "microservices-overview"
menu_order: 6
draft: true
tags: ["best practice", "component", "component-based development", "component-based", "cbd"]
---

## 1 What is Component-Based Architecture (CBA)?

CBA is based on component-based software engineering (CBSE). This is the definition of CBSE as given by [Wikipedia](https://en.wikipedia.org/wiki/Component-based_software_engineering):

> Component-based software engineering (CBSE), also called as component-based development (CBD), is a branch of software engineering that emphasizes the separation of concerns in respect of the wide-ranging functionality available throughout a given software system. It is a reuse-based approach to defining, implementing and composing loosely coupled independent components into systems.

For Mendix applications, this translates into architecting applications and landscapes that consist of functionally independent components that are deployed independently and communicate through well-defined interfaces.

### 1.1 Advantages of CBA

CBA has many advantages that improve the software development life cycle for apps:

* **Maintainability** – Component-based (CB) applications are easier to maintain, in particular since regressions are reduced as components interact through clear and explicit integration services. In addition, since modules form smaller apps, they are easier to understand and modify.
* **Distributed development** – The components of CB applications can be developed by distributed teams without having to deal with the complex branching and merging challenges of a monolithic application. Well-defined interfaces form a clear boundary to each component that allows teams to work independently.
* **Independent release & deployment cycles** – CB applications support independent releases of components without the need to synchronize these release cycles. This too is facilitated by the stable interfaces between components.
* **Ease of roll-out** – CB applications can be rolled-out internationally more easily, for example, since they allow for the deployment of a blend of localized and generic components that communicate together.

### 1.2 CBA Trade-offs

Applying CBA in a development process requires taking the following trade-offs or risks into account:

*   **Time to market** – CBA generally slows initial time to market, as it requires investment in upfront design and higher levels of architect involvement. This is generally compensated for by lower maintenance costs.
*   **Initial development cost** – The design, development, and testing of interfaces between components comes with associated costs that are typically not included in monolithic projects. However, these will be offset by lower subsequent maintenance costs.
*   **Risk of over-engineering** – If the need for CBA is not clear in the project up front, there is a risk of investing in a solution for a problem that will not manifest. This should be evaluated with the project architect in the project initiation phase.
*   **Risk of missing out on crucial details** – Small functional details may have huge architectural implications and could be overlooked. This is not always preventable in an Agile project, since details and requirements can pop up at any point during the development cycle. Continuous involvement of the project architect is essential for mitigating this risk.

### 1.3 The Mendix-Recommended Approach

This is the recommended approach for applying CBA in Agile Mendix app projects:

*   Apply the KISS principle ("keep it simple, stupid")
*   Apply CBA when triggered by a real demand
*   Manage the CBA process using measurements of model quality
*   Model with CBA in mind by using the Mendix Platform's module development tools
    *   Minimize unexpected dependencies between modules
    *   Make use of Mendix [App Services](/developerportal/deploy/app-services)

From experience, Mendix distinguishes two main patterns that can trigger the need to introduce CBA in an application:

*   Re-use of services – this pattern manifests when multiple applications make use of generic services such as master data, identity management, and document management
*   Divide & conquer – this pattern manifests when applications become too large to manage them as single monolithic applications with efficient and effective development and release cycles

## 2 CBA for Reuse of Services

In a situation where the architecture of a target landscape describes multiple applications that use similar services, Mendix recommends adopting a CBA approach. Examples of this situation include shared identity management, back-end connections, or reporting services.

Mendix recommends a phased approach to introducing CBA in a reuse-triggered situation:

*   Phase 1 – include reusable services in the application as modules
*   Phase 2 – extract reusable services from the application as App Services

By including services in the initial applications as modules, they are prepared for later extraction without the relatively large initial effort needed to actually deploy them as services. This enables initial projects to be delivered quickly, without sacrificing the possibility of creating a service-oriented landscape in phase 2. Mendix application modules allow for the pre-wiring of reusable services from the start without necessarily introducing the overhead and complexity of CBA.

To transit from modules to a CB architecture, Mendix recommends the following approach:

1. Extract reusable services from the application module on demand only if and when another application needs the same functionality.
2. Publish the service in your [private App Store](/developerportal/app-store/app-store-overview#privateappstore)
3. Designate an owner to be in charge of maintaining the awareness of reusable services so that similar functionality is not rebuilt elsewhere.

## 3 CBA for Divide & Conquer

When your organization has a Mendix app that has been in development for a longer time and has grown large enough to require increased maintenance effort, CBA can enable increasing the maintainability of the application. The issue of maintainability is often triggered in similar situations, like the following:s

*   A global/distributed rollout of an app, leasing to increased system load, or more functional requirements
*   Reduced quality indicators:
    *   Proactive via reviews and measurement, such as architecture reviews or model analysis (for example, by tools from SIG)
    *   Reactive as triggered by production incidents or a drop in developer productivity

In this case, Mendix recommends creating a CBA up front to the refactoring of the application. The following approach is recommended:

*   Follow the team/organizational structure of the business
    *   Architecture follows organization – this ensures that the components are functionally separate and business requirements are handled by distinct applications
    *   Responsibility and decision-making at the right and lowest possible level – this enables quick iteration times, since decisions can be made close to the issues that occur
    *   Components should function autonomously – this ensures components can be individually developed, tested, and deployed with minimal impact on others
*   Define business requirements for the architecture
    *   Focus especially on application growth scenarios
    *   Also include the need for variability and configurability in your design
*   Measure application quality during the refactoring process to keep the process on track
    *   Perform architecture reviews through experts
    *   Leverage model analysis through the Mendix Platform SDK or tools from SIG, for example

## 4 Mendix Implementation Recommendations

Mendix recommends the following best practices for use in a CBD scenario. For single monolithic applications, it is also recommended to follow this approach as far as possible, to ease a future transition towards a CB architecture.

### 4.1 Modeling Best Practices

*   Avoid cross-module associations – use keys instead, as these are easier to abstract away in an integration
*   Integrate only by using microflows and forms:
    *   In a CB scenario, a microflow will become an App Service
    *   In a CB scenario, a form will become a deep link
*   Ensure that identity management is implemented for the component apps – by default, you can use MxID in the Mendix Cloud, but a third-party identity management solution can also be used, which can be integrated using the [SAML](https://appstore.home.mendix.com/link/app/1174/) module, for example
*   Avoid circular dependencies – a module that is identified as candidate for a reusable service should not call or invoke other modules in the application, because such a module should only expose itself a a service

### 4.2 Use of Mendix App Services

*   Mendix recommends making use of the Mendix App Service features in the platform rather than using plain web services, as they feature versioned APIs out of the box – this makes modifying the interface later on more manageable
*   Additional advantages of using the Mendix Cloud for deployment:
    *   Out-of-the-box monitoring of App Service consumption (for addressing the question, which applications are using which version of the App Service APIs?)
    *   MxID offered out of the box as an identity management service

### 4.3 Principles of CBA

The general principles that should be taken into account when designing system components are the following:

*   Autonomous – components should be independent from each other, and they should be able to continue to function when other components are not available
*   Loosely coupled – components should be loosely coupled through explicit service definitions and be re-usable across applications
*   Performance – components should be capable of handling load as multiple applications may use one and the same component
