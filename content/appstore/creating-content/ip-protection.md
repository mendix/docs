---
title: "IP Protection"
parent: "development"
description: "Protect intellectual property in Solutions, App Services & Connectors"
tags: ["adaptive solutions", "ip protection"]
---

{{% alert type="info" %}}
The Solutions Guide for creating content in the Marketplace is under active development and will be regularly extended with new sections. Make sure to check in regularly to stay up to date with the latest content!
{{% /alert %}}

## 1 Introduction

Subscriptions for Solutions, App Services, Connectors, and Modules are sold on the Mendix Marketplace. As a publisher, you will have Intellectual Property (IP) protection concerns. You will want to protect the IP contained within the model that makes up your Solution, App Service, Connector or Module. In addition, you will want to protect any custom usage metering so that customers cannot accidentally (or intentionally) disable usage metering. Therefore, it is a good idea to consider applying at least some IP protection in your Solutions, App Services, Connectors, and other Modules.

## 2 Why IP Protection?

### 2.1 Protecting Intellectual Property

Reusable Solutions, App Services, Connectors, and other Modules contain IP: model content like microflows that is reusable and which can be monetized. When you build a business around these types of sellable content, there is a risk associated with the loss of your IP. If customers copy your IP without compensating you as the publisher, then you lose out on part of your potential revenue. Therefore, when distributing such content, it is desirable to hide parts of the implementation from the eyes of your customers while making sure that the functionality can be used through well-designed APIs.

### 2.2 Guaranteeing Proper Functioning and Guarding Against Misuse

You can also apply the concept of IP protection to protect your modules from being used in your organization and avoid the misuse of their functionality. In this case, rather than protecting your IP for monetary reasons, you are protecting your IP to guarantee the functionality is used as intended. This will help streamline your maintenance and upgrade paths. 

## 3. What should be protected?

Not all parts of a Solution, App Service, Connector or Module need to be protected. It is often desirable to protect the following:

* *The core IP of the solution* – this is often the business logic, for example scheduling or planning algorithms, complex data mappings, business rules, or decision logic
* *Custom usage metering* – applying IP protection ensures that the metering is temper-proof, whether this is accidental or intentional
* *Any part of the solution that the customer should never modify* – hide implementation details behind APIs to ensure customers or implementation teams focusing on extensions are not distracted by implementation details

## 4. Applying IP Protection effectively

{{% alert type="info" %}}
IP protection is currently in private beta and only available to select early adopters. Reach out to the Solutions Vendor Program team to request access.
{{% /alert %}}

### 4.1 IP Protection Through Implementation Hiding

Mendix supports module implementation hiding as a means to protect your IP. The publisher can control which parts of the app model are visible and editable, and which parts of the app model are hidden from your customers. On top of the hidden model documents and elements, the publisher defines an API to make it possible to reuse the functionality in other parts of the app. In this way, adaptive solutions can have a common core shared across all customers which is protected, with a flexible shell on top of that which is customized for each customer, either by making model changes or by extending the app with entirely new modules that make use of the APIs of the common core.

<!-- [Visual describing 80/20 rule with common core and flexible shell with model customizations & extensions] -->

Customers that adapt the solution see only a well-designed API. This simplifies customization and extension because they only need to know those APIs and it clarifies how and where to extend. In the case of App Services, Connectors, and other Modules, this simplifies their usage, because implementation details are hidden.

Maintenance efforts are also reduced, because hidden content cannot be altered, which makes in-place upgrades easier: there is no need to check whether customizations have been applied.

### 4.2 Architecting for IP Protection

#### 4.2.1 Identify Your Core IP

- Think about which parts of the solution are most critical
- Think about which parts of the solution will be adjusted by your customer - those parts cannot be protected.

#### 4.2.2 Define the API

* Identify the API of the IP protected content
* Think about extension needs, but keep it simple
* Create simple interfaces with a limited feature set instead of over-engineering to support everything
* Remember that APIs with lots of options are much harder to use, so simplicity is key
* Limit API exposure – it is easier to add more later than to retract interfaces

#### 4.2.3 Protect Usage Metering

See the section [Protecting Usage Metering](#protect-metering) for more information.

### 4.3 Protecting Solutions

Adaptive solutions that will be customized by your customer, a third-party implementation partner, or even by your own professional services teams, can benefit from IP protection. By protecting the common core that is shared across customers, maintenance efforts are brought under control and the core is protected from accidental (or intentional) changes made to the core.

To protect your solutions, do the following.

1. Identify the shared, common core that will be unchanged across customers and protect it.
2. Identify the parts that make up the flexible shell that customers might want to adapt.
3. Define clear APIs between the common core and the flexible shell. This ensures good architecture so that the core does not need to be adjusted and can be extended with limited effort.

Approach this iteratively: it is often very hard to define these boundaries “right first time”. Instead, open up as little as possible and increase API surface with incremental releases.

### 4.4 Protecting App Services, Connectors, and Modules

App Services, Connectors and Modules that are made available on the Marketplace often contain intellectual property and custom usage metering. It is important to protect that content.

Additionally, IP protection can be used to hide implementation details. This simplifies consumption of App Services, Connectors, and Modules by developers who use those in their apps.

1. Start by designing an API for your customers. Validate it with prospective customers – do not assume how they are going to use it.
2. Implement an agreed-upon subset of the desired API to cover around 80% of use cases.
3. Apply the principle: “Protect what’s behind the API”. Apply IP protection to relieve your customers of concerns about what is happing behind the API.
4. When not applying IP protection to an entire (set of) module(s), at least protect any modules that implement custom usage metering, to protect against (accidental) tampering by customers.

<!--

#### References

TODO: Add references to App Services & Connectors guides

-->

### 4.5 Protecting Usage Metering{#protect-metering}

To ensure customers do not accidentally nor intentionally break usage metering, it is a good practice to hide the implementation of custom usage metering in a protected module.

There are two common scenarios for custom usage metering:

* Tracking assets managed in a solution
* Counting transactions handled by the solution, through APIs or user interfaces

#### 4.5.1 Tracking Assets

When the asset is managed as an entity in the domain model, a gauge metric can be used to track the number of managed assets at regular intervals using a scheduled event.

<!-- TODO: Check limitation: Scheduled events can be disabled by the operator of an app. -->

#### 4.5.2 Transactions

On every invocation of a transaction, you can use an incrementing counter metric to track the total number of transactions handled over a period of time.

#### 4.5.3 Do's and Don'ts for Usage Metering

Verify that usage metering is ‘on the right side’, hidden behind the API.

Make sure the usage metering does not depend on specific invocation of an API. Relying on an AfterStartup microflow to start regular interval usage metering is not a good idea because it can be accidentally disabled. However, you can safely use the AfterStartup microflow if it is also used for functional purposes, for example starting a custom request handler, or initializing a module, without which the module does function.

You should also have a legal agreement for your Solution or App Service which includes a clause that requires the customer to ensure that any custom usage metering functions as intended. This means that, even in the case where for some reason you cannot protect the metering implementation at the technical level, you are still covered at the legal level.

<!-- TODO: Examples -->
