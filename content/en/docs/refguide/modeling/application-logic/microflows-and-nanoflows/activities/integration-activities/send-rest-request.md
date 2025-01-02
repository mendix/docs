---
title: "Send REST Request (Beta)"
url: /refguide/send-rest-request/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

The **Send REST request (beta)** activity allows you to send a REST request, which is configured in a [Consumed REST Service (beta)](/refguide/consumed-rest-services-beta/) document.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/send-rest-request/rest-microflow.png" class="no-border" >}}

## Properties 

Double-click the **Send REST request (beta)** activity to view its properties:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/send-rest-request/send-request.png" class="no-border" >}}

The following are the properties in the **Request** section:

* **REST request** – select the REST request you want to use in your microflow
* **Input entity type** – indicates the type of request entity, which has been configured from the document
* **Value** – select a value for your input entity (applicable only for `POST`)
* **Parameters** – edit the parameter values

The following are the properties in the **Output** section:

* **Use return variable** – if set to **Yes**, you can configure the name of the returned object in the **Object name** field 
* **Return type** – indicates the type of response entity, which has been configured from the document 
