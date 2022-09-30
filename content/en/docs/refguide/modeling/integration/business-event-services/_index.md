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
You must have the Mendix Business Events module installed for it to work properly. If it is not installed, you will be prompted to download it and add it to your app.
{{% /alert %}}

### 2 Published Business Event Service

A **Published Business Event Service** is the contract defining various events, like a REST API spec. To add a published business event service, right-click on a module in your app and go to **Add other** > **Published Business Event Service**.

See the [Publishing Business Events](/appstore/modules/business-events/#publish-be) section of *Mendix Business Events* for more extensive documentation.

### 3 Consumed Business Event Service

In order to start consuming a business event contract, you first need to create a **Consumed Business Event Service**. Right-click on a module in your app and go to **Add other** > **Consumed Business Event Service**.

See the [Consuming Business Events](/appstore/modules/business-events/#consume-be) section of the *Mendix Business Events* module for more extensive documentation.
