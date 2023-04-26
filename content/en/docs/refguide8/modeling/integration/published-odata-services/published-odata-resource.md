---
title: "Published OData Resource"
url: /refguide8/published-odata-resource/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-odata-resource.pdf).
{{% /alert %}}

{{% alert color="warning" %}}

This document describes the properties of a published OData resource. For an overview of OData services, see [Published OData Services](/refguide8/published-odata-services/).

{{% /alert %}}

## 1 Adding or Editing a Resource

### 1.1 Add a Resource

Click **Add** in the **Resources** pane of the **Published OData Service** window to open the **Select Entity** window. Select an entity to publish and click **Select**.

{{< figure src="/attachments/refguide8/modeling/integration/published-odata-services/published-odata-resource/published-odata-service.png" alt="OData service page" >}}

An alternative way to add a resource is in the **Domain Model**: right-click an entity and select **Expose as OData resource**. 

{{< figure src="/attachments/refguide8/modeling/integration/published-odata-services/published-odata-resource/create-odata-resource-from-domain-model.png" alt="Domain model dropdown menu" >}}

To add a resource, click the OData service name in the **Select Published Data Service** window, and click **Select**. 

To create a new OData service and add the entity to it, click **New**  and enter the name of the service you want to create in the **Add Published OData Service** dialog box. 

### 1.2 Edit a Resource

In the **Resources** pane of the **Published OData Service** window, select a resource and click **Edit** to display the **Edit published resource** window. 

{{< figure src="/attachments/refguide8/modeling/integration/published-odata-services/published-odata-resource/published-resource-dialog-box.png" alt="Edit published OData dialog box" >}}

It is possible to select another **Entity** or view the entity in the domain model by clicking **Show**. The [exposed attributes and associations](#exatass) for the selected entity can be set in this window. 

Specify the location where the resource will be published in **Example of location**.

In the **Public documentation** tab, you can provide a summary and a description of the exposed entity.

{{% alert color="info" %}}

[IBM DB2](/refguide8/db2/) does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore, the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. 

{{% /alert %}}

## 2 Selecting Exposed Attributes and Associations {#exatass}

In the **Edit published resource** window, select **Exposed attributes and associations** to display the list of attributes and associations for the entity.

{{% alert color="info" %}}

The **System.ID** attribute is used as a key in OData services and must always be checked.

{{% /alert %}}

Attributes of published entities are **Nillable** by default. This means that if their value is empty then they will be encoded as explicit nulls in the OData content. If **Nillable** is unchecked for an attribute, the attribute cannot be empty (as this will result in a runtime error).

{{% alert color="info" %}}

Attributes of the type **Binary** cannot be exported through OData services except for the **Contents** field of the **System.FileDocument** attribute.

{{% /alert %}}

## 3 Mapping from Internal Names to Exposed Names

Use **Exposed entity name** in the **Edit published resource** window to customize the name of the resource that is exposed to the outside world. The default is the name of the exposed entity in the domain model. The **Exposed entity name** must start with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert color="info" %}}

Location URIs must be unique. Exposing two different resources at the same location will result in a consistency error.

{{% /alert %}}

Attributes and associations can be customized in the same way in the **Exposed attributes and associations** list window under the the **Exposed name** column. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). The default is the same as the name of the association in the domain model.

{{% alert color="info" %}}

When names have been customized in this way, the name of the entity, attribute, or association as defined in the domain model will not be exposed to the outside world. For all OData communication, the exposed name is used.

{{% /alert %}}

These features make it easier to refactor the domain model without affecting external APIs.

## 4 Exposed Set Name

It is possible to customize the name of the entity set that is displayed in the **Exposed set name** field of the **Edit published resource** window. This forms the last part of the URL of the resource as given in the **Example of location**.

Default: *{Entity name}s*

## 5 Use Paging

The **Use paging** option is used to set a maximum number of objects per response and include a link to the next set of objects. A client such as [Tableau](https://www.tableau.com) is able use this to display progress and automatically continue to follow the links until all the data is retrieved. The memory usage of the clients can be improved if paging is set to a reasonable page size.

Default: *No*

Setting **Use paging** to **Yes** may result in inconsistency in the retrieved data because the data will not be retrieved in a single transaction. As an example, sorting on the **Age** attribute in an entity called **Customer** and retrieving customers set to 1000 objects per page. If a customer is deleted between two calls, then the customer with **Age** 23 at position 1001 then moves to position 1000. This means that the object that would be the first item on the second page is moved to the first page and is no longer retrieved. Similarly, data inserted between calls can result in a duplication of the data. This option should only be used when this kind of inconsistency is acceptable.

## 6 Page Size

When **Use paging** is set to **Yes**, the number of objects per page can be set in **Page size**.

Default: *10000*
