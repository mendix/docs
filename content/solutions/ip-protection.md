---
title: "IP Protection"
category: "Development"
description: "Protect intellectual property in Solutions, App Services & Connectors"
tags: ["adaptive solutions", "ip protection"]
---

## 1 Introduction

As a publisher of Solutions, App Services, Connectors and Modules for which subscriptions are sold on the Mendix Marketplace, you will have Intellectual Property (IP) Protection concerns. You will want to protect the intellectual property or IP contained within the model that makes up your Solution, App Service, Connector or Module. This includes any custom usage metering: by hiding the implementation, consumers cannot accidentally or intentionally disable usage metering. Therefore, it is a good idea to consider applying at least some IP Protection in your Solutions, App Services, Connectors and other Modules.

## 2 Why IP Protection?

### 2.1 Protecting intellectual property

Reusable Solutions, App Services, Connectors and other Modules contain intellectual property or IP: model content like microflows that is reusable and which can be monetized. When you build a business around these types of sellable content, there is a risk of the loss of your IP: If consumers copy your IP without compensating you as the publisher, then you lose out on part of your potential revenue. Therefore, when distributing such content, it is desirable to hide parts of the implementation from the eyes of your consumers while making sure the functionality can be used through well-designed APIs.

### 2.2 Guaranteeing proper functioning & guarding against misuse

You can also apply the concept of IP protection to protect your modules from being used in your organization and avoid misuse of its functionality. In this case rather than protecting your IP for monetary reasons you’re protecting your IP to guarantee the functionality is used as intended to streamline your maintenance and upgrade paths. 

### 2.3 Implementation hiding

Mendix supports module implementation hiding as a means to protect your IP. The publisher can control which parts of the app model are visible and editable, and which parts of the app model are hidden from your consumers. On top of the hidden model documents and elements, the publisher defines an API to make it possible to reuse the functionality in other parts of the app. In this way, adaptive solutions can have a common core shared across all consumers and which is protected, and on top of that they can have a flexible shell which is customized for each consumer, either by making model changes or by extending the app with entirely new modules that make use of the APIs of the common core.

<!-- [Visual describing 80/20 rule with common core and flexible shell with model customizations & extensions] -->

Consumers that adapt the solution only see a well-designed API. This simplifies customization & extension because they only need to know those APIs and it clarifies how and where to extend. In the case of App Services, Connectors and other Modules, this simplifies their usage, because implementation details are hidden.

Maintenance efforts are also reduced, because hidden content cannot be altered, which makes in-place upgrades easier: there is no need to check whether customizations have been applied.

## 3. What should be protected?

Not all parts of a Solution, App Service, Connector or Module need to be protected. It is often desirable to protect:


* *The core IP of the solution.* This is often the business logic, for example scheduling or planning algorithms, complex data mappings, business rules or decision logic.
* *Custom usage metering.* Applying IP Protection ensures that the metering is temper-proof - whether it is accidental or intentional.
* *Any part of the solution that the consumer should never modify.* Hide implementation details behind APIs to ensure consumers or implementation teams focusing on extensions are not distracted by implementation details.

## 4. Applying IP Protection effectively

### 4.1 Architecting for IP Protection

#### Identify your core IP

- Think about which parts of the solution are most critical
- Think about which parts of the solution will be adjusted by your consumer - those parts cannot be protected.

#### Define the API

* Identify the API of the IP
* Think about extension needs, but: keep it simple.
* Simple interfaces with a limited feature set instead of over-engineering to support everything
* APIs with lots of options are much harder to use, so simplicity is key
* Limit API exposure: it is easier to add more later then to retract interfaces

#### Protect usage metering

* Verify that usage metering is ‘on the right side’, hidden behind the API
* Hiding usage metering guarantees that consumers neither accidentally nor intentionally disable it.

### 4.2 Protecting Solutions

Adaptive solutions that will be customized by your consumer or a third-party implementation partner, or even by your own professional services teams, can benefit from IP Protection. By protecting the common core that is shared across consumers, maintenance efforts are brought under control and the core is protected from accidental (or intentional) changes made to the core.

1. Identify the shared, common core that will be unchanged across consumers and protect it.
2. Identify the parts that make up the flexible shell that consumers might want to adapt.
3. Define clear APIs between the common core and the flexible shell. This ensures good architecture so that the core does not need to be adjusted and can be extended with limited effort.

Approach this iteratively: it is often very hard to define these boundaries “first time right”. Instead, open up as little as possible and increase API surface with incremental releases.

### 4.3 Protecting App Services, Connectors & Modules

App Services, Connectors and Modules that are made available on the Marketplace often contain intellectual property and custom usage metering. It is important to protect that content.

Additionally, IP Protection can be used to hide implementation details. This simplifies consumption of App Services, Connectors & Modules by developers who use those in their apps.

1. Start by designing an API for your consumers. Validate it with prospective consumers - do not assume to know how they’re going to use it.
2. Implement an agreed-upon subset of the desired API to cover ~80% of use cases.
3. Apply the principle: “Protect what’s behind the API”. Apply IP protection to relieve your consumers from being concerned about what’s happing behind the API.
4. When not applying IP protection to an entire (set of) module(s), at least protect any modules that implement custom usage metering, to ensure (accidental) tampering by consumers.

<!--

#### References

TODO: Add references to App Services & Connectors guides

-->

### 4.4 Protecting usage metering

To ensure consumers do not accidentally nor intentionally break usage metering, it is a good practice to hide the implementation of custom usage metering in a protected module.

There are two common scenarios for custom usage metering:

* Tracking assets managed in a solution
* Counting transactions handled by the solution, through APIs or user interfaces

#### Tracking assets

When the asset is managed as an entity in the domain model, a gauge metric can be used to track the amount of managed assets at a regular interval with a scheduled event.

<!-- TODO: Check limitation: Scheduled events can be disabled by the operator of an app. -->

#### Transactions

On every invocation of a transaction, with an incrementing counter metric the total number of transactions handled over a period of time can be tracked.

#### Do's and don'ts

Make sure the usage metering does not depend on specific invocation of API. Using an AfterStartup microflow only to start regular interval usage metering is not a good idea because it can be accidentally disabled. However, if the AfterStartup microflow is also used for functional purposes, e.g. starting a custom request handler, or initializing a module, without which the module does function, then it can be safely used to also start usage metering if necessary.

In any case, the legal agreement for your Solution or App Service should include a clause that requires the consumer to ensure that any custom usage metering functions as intended. This ensures that even in the case where for some reason you cannot protect the metering implementation at the technical level, you are still covered at the legal level.

<!-- TODO: Examples -->
