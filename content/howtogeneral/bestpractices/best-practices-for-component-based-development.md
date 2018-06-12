---
title: "Best Practices for Component-Based Development"
category: "Best Practices"
---
## What is Component-Based Development?

The definition of Component Based Development as given by [Wikipedia](https://en.wikipedia.org/wiki/Component-based_software_engineering) is:

> Component-based development (CBD) is a branch of software engineering that emphasizes the separation of concerns in respect of the wide-ranging functionality available throughout a given software system. It is a reuse-based approach to defining, implementing and composing loosely coupled independent components into systems.

For Mendix applications, this translates into designing applications and landscapes that consist of functionally independent components that are deployed independently and communicate through well-defined interfaces.

### Advantages of Component Based Development

CBD has many advantages that improve the software development life cycle for apps:

*   Maintainability – CB applications are easier to maintain, in particular since regressions are reduced as components interact through clear and explicit integration services. In addition, since modules form smaller apps, they are easier to understand and modify.
*   Distributed Development – The components of CB applications can be developed by distributed teams without having to deal with the complex branching and merging challenges of a monolithic application. Well-defined interfaces form a clear boundary to each component that allows teams to work independently.
*   Independent Release & Deployment Cycles – CB applications support independent releases of components without the need to synchronize these release cycles. This too is facilitated by the stable interfaces between components.
*   Ease of roll-out – CB applications can be rolled-out e.g. internationally more easily, since they allow deployment of a blend of localized and generic components that communicate together.

### Component Based Development Trade-offs

Applying CBD in a development process requires taking some trade-offs or risks into account.

*   **Time to Market** – CBD generally slows initial time to market as it requires investment in upfront design and higher level of involvement of architect. This is generally compensated for by lower maintenance cost.
*   **Initial Development Cost** – The design, development and testing of interfaces between components comes with associated cost that is typically not included in monolithic projects. However, this too will contribute to lower subsequent maintenance cost.
*   **Risk of over-engineering** – If the need for CBD isn’t clear in the project up front, there is a risk of investing in a solution for a problem that will not manifest. This should be evaluated with the project architect in the project initiation phase.
*   **Risk of missing out on crucial details** - Small functional details may have huge architectural implications and could be overlooked. This is not always preventable in an Agile project, since details and requirements can pop up at any point during the development cycle. Continuous involvement of the project architect is essential to mitigate this risk.

### Mendix Recommended Approach

The recommended approach to apply Component Based Development in Agile Mendix projects is outlined by the points below.

*   Apply KISS principle – Keep it Simple Stupid
*   Apply CBD when triggered by a real demand
*   Manage the CBD process using measurements of model quality
*   Model with CBD in mind – Use the platform's module development tools
    *   Apply best practices for modeling
    *   Minimize unexpected dependencies between modules
    *   Make use of Mendix App Services

From experience, Mendix distinguishes two main patterns that can trigger the need to introduce CBD in an application:

*   Re-use of Services
    This pattern manifests when multiple applications make use of generic services such as Master Data, Identity Management, Document Management etc.
*   Divide & Conquer
    This pattern manifests when applications become too large to manage them as single monolithic applications with efficient and effective development and release cycles.

## CBD for Re-use of Services

In a situation where the architecture of a target landscape describes multiple applications that use similar services, Mendix recommends adopting a CBD approach. Examples of this situation include shared Identity Management, back-end connections or reporting services.

Mendix recommends a phased approach to introduce CBD in a re-use triggered situation:

*   Phase 1 – Include re-usable services in the application as Modules.
*   Phase 2 – Extract re-usable services from the Application as App Services.

By including services in the initial applications as modules, they are prepared for later extraction without the relatively large initial effort needed to actually deploy them as services. This enables initial project to be delivered quickly, without sacrificing the possibility to create a service-oriented landscape in phase 2. Mendix Application Modules allow for pre-wiring of re-usable services from start without necessarily introducing the overhead and complexity of CBD.

To transit from modules to a Component Base architecture, Mendix recommends the following approach:

*   Extract re-usable service from application module on demand only if and when another applications needs the same functionality.
*   Publish the service in a private App Store.
*   Designate an owner to be in charge of overlooking the awareness of re-usable services, so that similar functionality is not rebuilt elsewhere.

## CBD for Divide & Conquer

When your organisation has a Mendix application that has been in development for a longer time, and has grown large enough to lead to increased maintenance effort, CBD can enable you to increase the maintainability of the application. The issue of maintainability is often triggered in similar situations, which can include:

*   A global / distributed roll-out of an application, leasing to increased system load or more functional requirements.
*   Reduced quality indicators:
    *   Pro-active through Reviews & Measurement, such as architecture reviews or Model analysis (e.g. by tools from SIG).
    *   Reactive triggered by production Incidents or a drop in Developer Productivity.

In this case, Mendix recommends creating a Component Based design up front to the refactoring of the application. The following approach is recommended:

*   Follow the team / organizational structure of the business
    *   Architecture follows organization. This makes sure the components are functionally separate and business requirements are handled by distinct applications.
    *   Responsibility / decision making at the right level and lowest possible level. This enables quick iteration times, since decisions can be made close to issues that occur.
    *   Components should function autonomously. This makes sure components can be individually developed, tested and deployed with minimal impact on others.
*   Define business requirements for the architecture
    *   Focus especially on application growth scenarios
    *   Also include the need for variability and configurability in your design
*   Measure application quality during the refactoring process to keep the process on track
    *   Perform architecture reviews through experts
    *   Leverage model analysis through the Mendix Platform SDK, or for example tools from SIG.

## Mendix Implementation Recommendations

Mendix recommends the following best practices for use in a CBD scenario. For single monolithic applications, it is also recommended to follow this approach as far as possible, to ease a future transition towards a CB architecture.

### Modeling Best Practices

*   Avoid cross module associations. Use keys instead, these are easier to abstract away in an integration.
*   Integrate only by using microflows and Forms
    *   In a CB scenario, a microflow will become App Service
    *   In a CB scenario, a form will become a Deep link
*   Ensure that Identity Management is implemented for the component apps. By default you can use MxID in the Mendix Cloud. Alternatively a 3rd party Identity Management solution can be used, which can be integrated using for example the SAML module.
*   Avoid circular dependencies: A module that is identified as candidate for a re-usable service should not call / invoke other modules in the application. Such a module should only expose itself a a service.

### Use of Mendix App Services

*   Mendix recommends to make use of the Mendix App Service features in the platform rather than using plain web services, as they feature versioned APIs out-of-the-box. This makes modifying the interface later on more manageable.
*   Additional advantages of using the Mendix Cloud for deployment:
    *   Out-of-the-box monitoring of App Service consumption – Which applications are using which version of the App Service APIs?
    *   MxID offered out of the box as Identity Management service.

### Principles of Component Based Development

The general principles that should be taken into account when designing system components are the following:

*   Autonomous – Components should be independent from each other. Components should be able to continue to function when other components are not available.
*   Loosely coupled – Components should be loosely coupled through explicit service definitions and be re-usable across applications.
*   Performance – Components should be capable of handling load as multiple applications may use one and the same component.
