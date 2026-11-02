---
title: "Business Event Services"
url: /refguide/business-event-services/
weight: 10
description: "Overview of the [Business Event services module](https://marketplace.mendix.com/link/component/202649) in Studio Pro, downloaded from the Mendix Marketplace."
---

## Introduction

Studio Pro integrates with the Mendix Business Events module. With [Mendix Business Events](/appstore/services/business-events/), apps can signal when something important happens and subscribe to these events to receive notifications. Business events work like a mailing list that shares event notifications between apps.

This page describes **Business Event Service** documents in Studio Pro. For complete documentation, see [Mendix Business Events](/appstore/services/business-events/). 

{{% alert color="warning" %}}
You must install the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) module for business event services to work. If the module is not installed, Studio Pro prompts you to download and add it to your app.
{{% /alert %}}

### Business Event Service Documents

When you create a business event service, Studio Pro adds a **Business Event Service** document to your app.

#### Business Event Services {#be-services}

One app defines business event services centrally for a specific use case. Other apps can then send or receive these predefined events.

##### Creating a New Business Event Service {#create-new}

To create a new business event service, right-click a module in your app and go to **Add other** > **Business event service** > **Create a new business event service**. Studio Pro opens the business event service document:

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/business-event-services/new-business-event-service.png" class="no-border" width="700" >}}

See the [Creating a New Business Event Service](/appstore/services/business-events-configuration/#two-way-be-create) section of *Mendix Business Events* for more information.

##### Using an Existing Business Event Service {#use-existing}

To use an existing business event service, right-click a module in your app and go to **Add other** > **Business event service** > **Use an existing business event service**. After you import the YAML file, Studio Pro opens the business event service document:

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/business-event-services/existing-business-event-service.png" class="no-border" width="700" >}}

See the [Using an Existing Business Event Service](/appstore/services/business-events-configuration/#two-way-be-existing) section of *Mendix Business Events* for more information.
