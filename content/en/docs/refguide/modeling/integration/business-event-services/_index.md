---
title: "Business Event Services"
url: /refguide/business-event-services/
weight: 49
description: "Overview of business event services in Studio Pro"
tags: ["studio pro", "consumed business event", "published business event"]
---

## 1 Introduction

Studio Pro 10 integrates with Mendix Business Events module functionality. With the [Mendix Business Events](/appstore/modules/business-events/) module, applications can signal when something important happens, and can subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps.

This page references the **Business Event Service** documents in Studio Pro. See [Mendix Business Events](/appstore/modules/business-events/) for the complete documentation. 

{{% alert color="warning" %}}
You must have the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) module installed for it to work properly. If it is not installed, you will be prompted to download it and add it to your app.
{{% /alert %}}

### 2 Business Event Service Documents

The **Business Event Service** document is added to your app in Studio Pro when you create a business event service.

#### 2.1 Business Event Services {#be-services}

Business event services in are defined centrally by one app for a specific use case. Other apps can send or receive these predefined events.

##### 2.1.1 Creating a New Business Event Service {#create-new}

To create a new business service, right-click on a module in your app and go to **Add other** > **Business event service** > **Create a new business event service**. The business event service document is open in Studio Pro:

{{< figure src="/attachments/refguide/modeling/integration/business-event-services/new-business-event-service.png" >}}

See the [Creating a New Business Event Service](/appstore/modules/business-events/#two-way-be-create) section of *Mendix Business Events* for more extensive documentation.

##### 2.1.2 Using an Existing Business Event Service {#use-existing}

To create a new business service, right-click on a module in your app and go to **Add other** > **Business event service** > **Use an existing business event service**. After importing the YAML file, the business event service document is open in Studio Pro:

{{< figure src="/attachments/refguide/modeling/integration/business-event-services/existing-business-event-service.png" >}}

See the [Using an Existing Business Event Service](/appstore/modules/business-events/#two-way-be-existing) section of *Mendix Business Events* for more extensive documentation.
