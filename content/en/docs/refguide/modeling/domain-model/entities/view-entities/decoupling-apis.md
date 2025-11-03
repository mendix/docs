---
title: "Decoupling APIs"
url: /refguide/decoupling-apis/
weight: 30
---

## Introduction

Exposing view entities instead of the underlying persistable entity takes away the complexity of the underlying schema. This helps you prevent frequent API changes if the data model changes. It also allows you to consolidate data from multiple tabs in a single API.

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/decoupling-apis/domain-model.png" >}}

For example, you want to make an API call that returns **Products**, and allows you to filter the results by **Category**. 

## Creating a View Entity

Create a single view entity and expose it as an OData resource. To do this, follow these steps: 

1. Open your domain model and create a view entity called *ProductCategoryVE*.
2. Add the following query to the OQL editor:

  ```sql
  SELECT
    p.ProductId as ProductId
    , p.ProductName as ProductName
    , p.QuantityPerUnit as QuantityPerUnit
    , p.Discontinued as Discontinued
    , c.CategoryName as Category
    , c.CategoryId as CategoryId
  FROM Shop.Product as p
    JOIN p/Shop.Product_Category/Shop.Category as c
  ```

3. Right-click this entity and select **Publish in OData service**. Name this service *POS_ProductCategory*.
4. Add `ProductId` as a key attribute, then click **OK**.

     {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/decoupling-apis/key-attribute.png" >}}

5. In the **Entity** field, double-click the **ProductId** attribute. 
6. Uncheck the box **Can be empty**, then click **OK**. 
   
    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/decoupling-apis/can-be-empty.png" >}}

7. Run your app locally and test the functionality. 
