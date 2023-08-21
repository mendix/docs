---
title: "Published OData Microflow"
url: /refguide/published-odata-microflow/
tags: ["studio pro","OData","publish"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

As of Mendix 10, Studio Pro allows you to publish microflows as part of an OData service. A published microflow will be exposed as an OData action which can be called by an application consuming this service. This allows you to model and expose operations that are more complex than straightforward read, create, update and delete operations on a single entity.

## 2 Adding or editing a published microflow

### 2.1 Add a microflow

In the **Microflows** tab of the published OData service, click the **Add** button. This will open a selector dialog where you can select the microflow you want to publish. From here you can also press **New** to create a new microflow for this purpose. Upon clicking **Select** the microflow will be added with the microflow name as its default **Exposed name**. In order to change this and add documentation, you can edit the published microflow.

Another way of publishing a microflow is from the microfow itself, by right-clicking on the canvas and clicking **Publish as OData action...**, or dragging the microflow from the connector pane unto the **Microflows** grid within the published OData service's **Microflows** tab.

### 2.2 Edit a published microflow

Either select the microflow and click **Edit** or double-click the microflow to open its properties. In the **Edit published microflow** dialog you can change the **Exposed name** and change the **Microflow**. Below that, in the box **Example of location**, you will find the URI where the action will be located when the app is running.

{{% alert color="info" %}}
The resulting location URI must be unique. This means that a published microflow should not have the same exposed name as another published microflow or published entity. Doing so will result in a [consistency error](/refguide/consistency-errors/).
{{% /alert %}}

In the **Public documentation** tab you can add a short **Summary** and a longer **Description** to describe the behaviour of the action.

## 3 Editing published microflow parameters

By default, upon publishing a microfow all its parameters will be published. They will be shown in the **Parameters for microflow** grid on the right. 

For information on these published parameters, check out [Published OData Microflow Parameters](/refguide/published-odata-microflow-parameters/).