---
title: "Business Event Services"
url: /refguide9/business-event-services/
weight: 49
description: "Overview of business event services in Studio Pro"
---

## Introduction

Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above integrates with Mendix Business Events module functionality. With the [Mendix Business Events](/appstore/services/business-events/) module, applications can signal when something important happens, and can subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps.

This page references the **Business Event Service** documents in Studio Pro. See [Mendix Business Events](/appstore/services/business-events/) for the complete documentation. 

{{% alert color="warning" %}}
You must have the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) module installed for it to work properly. If it is not installed, you will be prompted to download it and add it to your app.
{{% /alert %}}

### Business Event Service Documents

The **Business Event Service** document is added to your app in Studio Pro when you create a business event service.

The service documents themselves, and way to create a business event service, differ depending on which version of Studio Pro you are using. 

#### Business Event Services in Studio Pro 9.18 through 9.23

Business event services in Studio Pro 9.18 through 9.23 are published by one app and consumed by one or more other apps.

##### Published Business Event Services {#published-event-service-doc}

A **Published Business Event Service** is the document defining various events, like a REST API spec. To add a published business event service, right-click on a module in your app and go to **Add other** > **Published Business Event Service**. The published business event service document is open in Studio Pro:

{{< figure src="/attachments/refguide9/modeling/integration/business-event-services/published-business-event-service.png" class="no-border" >}}

##### Consumed Business Event Services {#consumed-event-service-doc}

To subscribe to a business event, you first need to create a **Consumed Business Event Service**. Right-click on a module in your app and go to **Add other** > **Consumed Business Event Service**. The published business event service document is open in Studio Pro:

{{< figure src="/attachments/refguide9/modeling/integration/business-event-services/consumed-business-event-service.png" class="no-border" >}}

#### Business Event Services in Studio Pro 9.24 and Above {#be-924}

Business event services in Studio Pro 9.24 and above are defined centrally by one app for a specific use case. Other apps can send or receive these predefined events.

##### Creating a New Business Event Service {#create-new}

To create a new business service in Studio Pro 9.24 and above, right-click on a module in your app and go to **Add other** > **Business event service** > **Create a new business event service**. The business event service document is open in Studio Pro:

{{< figure src="/attachments/refguide9/modeling/integration/business-event-services/new-business-event-service.png" class="no-border" >}}

See the [Creating a New Business Event Service](/appstore/services/business-events/#two-way-be-create) section of *Mendix Business Events* for more extensive documentation.

##### Using an Existing Business Event Service {#use-existing}

To create a new business service in Studio Pro 9.24 and above, right-click on a module in your app and go to **Add other** > **Business event service** > **Use an existing business event service**. After importing the YAML file, the business event service document is open in Studio Pro:

{{< figure src="/attachments/refguide9/modeling/integration/business-event-services/existing-business-event-service.png" class="no-border" >}}

See the [Using an Existing Business Event Service](/appstore/services/business-events/#two-way-be-existing) section of *Mendix Business Events* for more extensive documentation.
