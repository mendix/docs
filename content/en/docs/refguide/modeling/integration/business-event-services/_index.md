---
title: "Business Event Services"
url: /refguide/business-event-services/
weight: 4
description: "Overview of business event services in Studio Pro"
tags: ["studio pro", "consumed business event", "published business event"]
---

## 1 Introduction

Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above integrates with Mendix Business Events module functionality. With the [Mendix Business Events](/appstore/modules/business-events/) module, applications can signal when something important happens, and can independently subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps.

{{% alert color="warning" %}}
You must have the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) module installed for it to work properly. If it is not installed, you will be prompted to download it and add it to your app.
{{% /alert %}}

### 2 Adding a Business Event Service

Adding a business event service depends on which version of Studio Pro you are using. 

#### 2.1 Business Event Services in Studio Pro 9.18 through 9.23

Business event services in Studio Pro 9.18 through 9.23 are published by one app and consumed by one or more other apps.

##### 2.1.1 Published Business Event Services

A **Published Business Event Service** is the contract defining various events, like a REST API spec. To add a published business event service, right-click on a module in your app and go to **Add other** > **Published Business Event Service**.

See the [Publishing Business Events](/appstore/modules/business-events/#publish-be) section of *Mendix Business Events* for more extensive documentation.

##### 2.1.2 Consumed Business Event Services

In order to start consuming a business event contract, you first need to create a **Consumed Business Event Service**. Right-click on a module in your app and go to **Add other** > **Consumed Business Event Service**.

See the [Consuming Business Events](/appstore/modules/business-events/#consume-be) section of *Mendix Business Events* for more extensive documentation.

#### 2.2 Business Event Services in Studio Pro 9.24 and Above

Business event services in Studio Pro 9.24 and above are defined centrally by one app for a specific use case, and other apps can send or receive these predefined events.

To either add a new service or use an existing one, right-click on a module in your app and go to **Add other** > **Business Event Service**. 

{{< figure src="/attachments/refguide/modeling/integration/business-event-services/be-create-or-use.png" >}}
