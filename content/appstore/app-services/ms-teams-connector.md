---
title: "Microsoft Teams Connector"
category: "App Services"
description: " "
tags: ["marketplace", "marketplace component", "app service", "microsoft", "microsoft teams", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

{{% todo %}}[**Add link to component**]{{% /todo %}}

{{% todo %}}[**Verify Marketplace Docs tabs**]{{% /todo %}}

The Microsoft Teams Connector is an importable module that enables sending messages to a Microsoft Teams channel.

## 2 Configuration

The connector activity can be used in a microflow for Mendix versions [9.0](/releasenotes/studio-pro/9.0) and above.

![](attachments/ms-teams-connector/microflow.png)

It can also be used in a [workflow](/refguide/workflows):

![](attachments/ms-teams-connector/workflow.png)

Just provide the Teams channel webhook (`channelEndpoint` is the webhook URL) and the text message (only text messages are currently supported) to post on the channel: 

![](attachments/ms-teams-connector/action.png)

{{% alert type="info" %}}
For more information on Teams webhooks, see [Create a Webhook URL for a channel in Microsoft Teams](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/site-reliability-ops/task/create-webhook-url-channel-ms-teams.html).
{{% /alert %}}

You can post the message using a microflow or a workflow:

![](attachments/ms-teams-connector/message.png)
