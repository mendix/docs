---
title: "Published OData Microflow"
url: /refguide/published-odata-microflow/
weight: 20
aliases:
  - /refguide/published-odata-microflow-parameter/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

As of Mendix 10.2.0, Studio Pro allows you to publish microflows as part of an OData service. A published microflow becomes an [external action](/refguide/call-external-action/) which can be called by an application consuming this service. This allows you to model and publish operations that are more complex than straightforward create, read, update, and delete operations on a single entity.

## Adding or Editing a Published Microflow

### Add a Microflow

Open your [published OData service](/refguide/published-odata-services/) or create a new one.

{{< figure src="/attachments/refguide/modeling/integration/published-odata-services/published-odata-microflow/microflows-grid.png" alt="Published microflows" width="600" class="no-border" >}}

In the **Microflows** tab of the published OData service, click **Add**. This opens a selector dialog box where you can select the microflow you want to publish. You can also click **New** to create a new microflow.

Click **Select** to add the microflow with the microflow name as its default **Exposed name**. If you want to change this and add documentation, [edit the published microflow](#edit-microflow).

Another way of publishing a microflow is from the microflow itself. You can do one of the following:

* Right-click the canvas and select **Publish as OData action**
* Drag the microflow from the **Connector** pane onto the **Microflows** grid within the published OData service's **Microflows** tab

When you publish a microflow that has object, list, enumeration parameters, or return types, these entities and enumerations must also be published. To enable consumers of your service to send or retrieve associated objects, you must publish these associations and the associated entities as well.

{{% alert color="warning" %}}
If an entity is used as the return type and this entity has exposed associations, the associated objects that are present in the microflow context [can also be retrieved](/refguide/supported-odata-operations/#retrieving-associated-objects) by the client. 
{{% /alert %}}

### Edit a Published Microflow{#edit-microflow}

Either select the microflow and click **Edit**, or double-click the microflow to open its properties. In the **Edit published microflow** dialog box, you can change the **Exposed name** and the **Microflow**. 

Below that, in the **Example of location** field, you can find the URI where the action will be located when the app is running.

You can also choose to specify an **Alternative name (in URL)**. This name will be use in the OpenAPI document of the service. If you specify an alternative name, the microflow will be available on two different URLs: one that uses the exposed name, and one that uses the alternative name. Use an alternative name when you require the microflow to be available on a URL that would be invalid in OData but valid in OpenAPI, such as `my-first-microflow`.

{{% alert color="info" %}}
The resulting location must be unique. This means a published microflow cannot have the same exposed name or alternative name as another published microflow or published entity.
{{% /alert %}}

In the **Public documentation** tab, you can add a short **Summary** and a longer **Description** to describe the behavior of the action.

### Return Type

This shows the return type of the published microflow.

## Editing Published Microflow Parameters{#pub-odata-mflow-parameters}

### Add a Parameter

When you publish a microflow for the first time, the current microflow parameters are added to the **Parameters for microflow** grid of the published microflow. 

{{< figure src="/attachments/refguide/modeling/integration/published-odata-services/published-odata-microflow/parameters-grid.png" alt="published microflow parameters" width="600" class="no-border" >}}

You can **Add** or **Delete** parameters from the published microflow.

### Edit a Parameter

To edit a published parameter, either select the parameter and click **Edit** or double-click the parameter. The **Edit published microflow parameter** dialog box lets you edit the **Exposed name** of the published parameter.

You can also select **Can be empty**. If this checkbox is cleared, calls to the published microflow will fail unless the parameter is provided.

{{< figure src="/attachments/refguide/modeling/integration/published-odata-services/published-odata-microflow/published-parameter.png" alt="Published microflow parameter" width="700" class="no-border" >}}

{{% alert color="info" %}}
Boolean and list parameters can never be empty.
{{% /alert %}}
