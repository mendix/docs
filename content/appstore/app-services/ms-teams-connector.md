---
title: "MS Teams Connector"
category: "App Services"
description: " "
tags: ["marketplace", "marketplace component", "app service", "microsoft", "microsoft teams", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

Microsoft Teams Connector is importable module, which will allow user to send messages to Microsoft Teams channel.

The connector activity can be used in a microflow for Mendix versions 9.X.

![](attachments/ms-teams-connector/microflow.png)

It can can used in a workflow from Mendix versions 9 and above.

![](attachments/ms-teams-connector/workflow.png)

Just provide the channel webhook and text message to post on Microsoft teams, are it is ready to 

![](attachments/ms-teams-connector/action.png)

Only text messages are supported as of now.

channelEndpoint is the webhookUrl that user can get from the Microsoft Teams channel.

[cross-reference?: https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/site-reliability-ops/task/create-webhook-url-channel-ms-teams.html]

Message can be posted using microflow as well as workflow.

![](attachments/ms-teams-connector/message.png)
