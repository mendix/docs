---
title: "Send REST Request"
url: /refguide10/send-rest-request/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Send REST request** activity allows you to send a REST request, which is configured in a [Consumed REST Service](/refguide10/consumed-rest-service/) document.

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/send-rest-request/rest-microflow.png" width="400" >}}

## Properties 

Double-click the **Send REST request** activity to view its properties:

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/send-rest-request/send-request.png" width="500" >}}

The following are the properties in the **Request** section:

* **REST request** – select the REST request you want to use in your microflow
* **Input entity type** – indicates the type of request entity, which has been configured from the document
* **Value** – select a value for your input entity (applicable only for `POST` , `PUT`, and `PATCH`)
* **Parameters** – edit the parameter values

The following are the properties in the **Output** section:

* **Use return variable** – if set to **Yes**, you can configure the name of the returned object in the **Object name** field 
* **Return type** – indicates the type of response entity, which has been configured from the document 
