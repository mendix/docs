---
title: "Apply Intellectual Property Protection"
linktitle: "Apply IP Protection"
url: /appstore/creating-content/sol-ip-protection/
weight: 2
description: "Protect intellectual property in solutions, app services, and connectors"
---

## Introduction

When selling solutions or components that are created in Mendix and the customer or partner will get access to the model, you as a publisher want to consider protecting the intellectual property (IP) contained within the model that makes up the content you are selling. In addition, you want to ensure that developers use the implementation as intended and protect any custom usage metering so that customers cannot accidentally (or intentionally) disable usage metering. Therefore, it is a good idea to consider applying at least some IP protection in your solutions and components.

## Why IP Protection?

Reusable solutions, app services, connectors, and other modules contain IP in the form of app model content (for example, microflows) that is reusable and can be monetized. When you build a business around these types of sellable content, there is a risk associated with the loss of your IP. If customers copy your IP without compensating you as the publisher, then you lose out on part of your potential revenue.

Therefore, when distributing such content, it is desirable to hide parts of the implementation from the eyes of your customers while making sure that the functionality can be used via well-designed APIs into your module (meaning, through explicitly defined microflows, nanoflows, and entities while all other documents and internal concerns are hidden).

You can also apply the concept of IP protection to protect your modules from being modified accidentally or intentionally. In this case, rather than protecting your IP for monetary reasons, you are protecting your IP to guarantee the functionality is used as intended. This will help streamline your maintenance and upgrade paths. This is relevant regardless of whether your application model is shared with external parties or not.

## Using a Legal Framework on Top of Technical Restrictions

When using IP protection and [solution modules](/refguide/module-settings/#solution-module), the implementation is hidden in Studio Pro and from the Model SDK. This helps to protect your IP and prevent others from duplicating it. However, it does not prevent people from reverse-engineering how specific logic is built or analyzing the parts of the application that they do have access to. Therefore, make sure you have the right terms and conditions in place to protect your IP, which also allows you to act on any misuse of your application.

## What Should Be Protected?

To allow for [adaptability](/appstore/creating-content/sol-adapt/#three-parts), not all parts of a solution or component need to be protected. It is often desirable to protect the following:

* **The core IP of the solution** – analyze the business logic (for example, scheduling or planning algorithms), complex data mappings, business rules, and decision logic that needs protection
* **Custom usage metering** – ensure that the metering is tamper-proof (whether done accidentally or intentionally)
* **Entitlement management** - control the use of your solution against a valid subscription
* **Any part of the solution that the customer should never modify** – hide implementation details behind APIs to ensure customers or implementation teams focusing on extensions are not distracted by implementation details

## Applying IP Protection Effectively

### Best Practices for Architecting

* Identify your core IP
    * Think about which parts of the solution are most critical
    * Think about which parts of the solution will be adjusted by your customer (those parts cannot be protected)
* Define the API
    * Identify the API of the IP-protected content
    * Think about extension needs, but keep it simple
    * Create simple interfaces with a limited feature set instead of over-engineering to support everything
    * Remember that APIs with lots of options are much harder to use, so simplicity is key
    * Limit API exposure, as it is easier to add more later than to retract interfaces
    * Apply proper naming and simple documentation for clarity
    * Consider the unhappy flow with the right validations and error handling

For more details, see [How to Architect Adaptable Solutions](/appstore/creating-content/sol-architecting/).

### Benefits of Hiding Implementations {#implementation}

#### For the Publisher

Mendix supports the hiding of module implementations as a means to protect your IP. As a publisher, you can control which parts of the app model are visible and editable, and which parts of the app model are hidden from your consumers. On top of the hidden model documents and elements, you can define an API to make it possible to reuse and extend the functionality in other parts of the app.

In this way, adaptable solutions can have a [common core](/appstore/creating-content/sol-architecting/#app-design) shared across all customers which is protected with an adaptable shell on top. The adaptable shell is customized for each customer, either by making model changes into the customizable core or by extending the app with entirely new modules. Both the customizations and extensions make use of the APIs of the common core.

#### For the Consumer

Consumers of a solution with this kind of IP protection see only a well-designed API. This has the following results:

* Simplified customization and clarification of how and where to extend, because the customer only needs to know those APIs, and it clarifies how and where to extend
* Simplified usage of app services, connectors, and other modules, because the implementation details are hidden
* Reduced maintenance efforts, because hidden content cannot be altered (this also makes in-place upgrades easier, as there is no need to check whether customizations have been applied)

### Protecting Component Types

#### Adaptable Solutions

Adaptable solutions that will be customized by your customer, by a third-party implementation partner, or even by your own professional services teams can benefit from IP protection. By protecting the common core that is shared across customers, maintenance efforts are brought under control and the core is protected from accidental (or intentional) changes.

To protect your solutions, Mendix recommends these steps:

1. Identify the shared [common core](/appstore/creating-content/sol-adapt/#three-parts) that will be unchanged across customers and protect it.
2. Identify the parts that make up the flexible shell that customers might want to adapt.
3. Define clear APIs between the common core and the flexible shell. This ensures good architecture so that the core does not need to be adjusted and can be extended with limited effort.

Approach this iteratively, as it is often very hard to define these boundaries right the first time. Instead, open up as little as possible and increase API surface with incremental releases.

#### Full Solution Model

Regardless of how the Mendix model is designed (with or without Solution Modules), implementation can always be hidden by sharing the MDA with the customer instead. This will allow for custom deployment, without being able to open the Mendix model.

#### App Services, Connectors, and Modules

App services, connectors, and modules that are made available on the Marketplace often contain intellectual property and custom [usage metering](#metering). It is important to protect that content.

Additionally, [hiding implementation details](#implementation) can simplify the consumption of app services, connectors, and modules by developers who use those in their apps.

To protect your app services, connectors, and modules, follow these steps:

1. Start by designing an API for your customers. Validate it with prospective customers (do not assume how they are going to use it).
2. Implement an agreed-upon subset of the desired API to cover around 80% of use cases.
3. Apply the “protect what’s behind the API” principle. Apply IP protection to relieve your customers of concerns about what is happening behind the API.
4. When not applying IP protection to an entire module or set of modules, at least protect any modules that implement custom usage metering. This will protect against (accidental) tampering by customers.

### Protecting Usage Metering {#metering}

To ensure customers do not accidentally or intentionally break usage metering, it is a good practice to hide the implementation of custom usage metering in a protected module.

There are two common scenarios for custom usage metering:

* **Tracking the assets managed in a solution** – when the asset is managed as an entity in the domain model, a gauge metric can be used to track the number of managed assets at regular intervals using a scheduled event
* **Counting transactions handled by the solution through APIs or UIs** – on every invocation of a transaction, you can use an incrementing counter metric to track the total number of transactions handled over a period of time

These are the best practices for usage metering:

* Verify that usage metering is "on the right side" and hidden behind the API
* Make sure the usage metering does not depend on the specific invocation of an API
    * Relying on an after-startup microflow to start regular-interval usage metering is not a good idea, because it can be accidentally disabled
    * However, you can safely use an after-startup microflow if it is also used for functional purposes (for example, starting a custom request handler, or initializing a module when the module will not function without it)
* Have a legal agreement for your solution or app service in place that includes a clause requiring the customer to ensure that any custom usage metering functions as intended
    * This means that where for some reason you cannot protect the metering implementation at the technical level, you are still covered at the legal level

### Entitlement Management

Applying IP protection will prevent the people consuming your solution from inspecting details of the model and copying the implementation thereof. On top of that, Mendix recommends considering implementing entitlement management.

Every implementation can have a cryptographically signed license key, which will allow the application to validate what entitlements are available for the implementation. This will prevent misuse and can enable features like the following:

* Free evaluation of the product on a *localhost*
* Freemium models using Free Apps on *.mxapps.io*
* Multiple editions of your product by enabling specific functionality or rate-limiting specific actions
* Expiration of license keys in time
* Validity of license key for specific runtime URLs
