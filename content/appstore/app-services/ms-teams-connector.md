---
title: "Microsoft Teams Connector"
category: "App Services"
description: " "
tags: ["marketplace", "marketplace component", "app service", "microsoft", "microsoft teams", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

{{% todo %}}[**Verify Marketplace Docs tabs**]{{% /todo %}}

The [Microsoft Teams Connector](https://marketplace.mendix.com/link/component/118391) app service is a module that enables sending messages to a Microsoft Teams channel.

![](attachments/ms-teams-connector/message.png)

### 1.1 Typical Use Cases

*  You can send messages to a Microsoft Teams channel using a microflow

   ![](attachments/ms-teams-connector/microflow.png)

*  You can send messages to a Microsoft Teams channel using a [workflow](/refguide/workflows)

   ![](attachments/ms-teams-connector/workflow.png)

### 1.2 Limitations

* Currently, only text messages are supported

### 1.3 Prerequisites

The app service can only be used with Studio Pro 9 versions starting from [9.0](/releasenotes/studio-pro/9.0).

## 2 Installation

1. Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content) to import the component into your application.

2. In the **Toolbox**, drag the **Microsoft Teams Connector** activity into your microflow or workflow.

   {{% todo %}}[**validate the workflow part in the second step**]{{% /todo %}}

## 3 Configuration

1. In Microsoft Teams, [create a webhook URL for the channel](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/site-reliability-ops/task/create-webhook-url-channel-ms-teams.html).

2. In Studio Pro, click the **Microsoft Teams Connector** activity that is used in a microflow or workflow to configure it.

   {{% todo %}}[**check how to set the arguments**]{{% /todo %}}

3. Set the Microsoft Teams channel webhook (**channelEndpoint** is the webhook URL).

4. Set the text message to post on the channel.

   ![values-added-in-microsoft-teams-connector-dialog-box](attachments/ms-teams-connector/action.png)

5. Click **OK** to save the changes and close the window.
