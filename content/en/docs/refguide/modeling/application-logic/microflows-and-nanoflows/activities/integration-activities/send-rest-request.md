---
title: "Send REST Request (beta) Activity"
url: /refguide/send-rest-request/
tags: ["studio pro", "integration activity", "Send REST request"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The **Send REST request (beta)** activity allows you to send a REST request, which is configured in a [Consumed REST Service (beta) document](/refguide/consumed-rest-services-beta/).

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/send-rest-request/rest-microflow.png" >}}

## 2 Properties 

Double-click the **Send REST request (beta)** activity to view its properties:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/send-rest-request/send-request.png" >}}

The following are the properties in the **Input** section:

* **REST request** – select the REST request you want to use in your microflow
* **Value** – select a value for your input entity (applicable only for `POST`)

The following are the properties in the **Output** section:

* **Use return variable** – if set to **Yes**, you can configure the name of the returned object in the **Object name** field 
* **Return type** – indicates the type of response entity, which has been configured throughout the document 
