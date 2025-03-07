---
title: "Abstracting Data of Add-On Modules"
url: /refguide/abstracting-view-entity-data/
weight: 100
---

## Introduction

Add-on modules allow you to abstract your domain model and use view entities to only show the user select details. Add-ons are commonly used for building connectors to other systems, which allows you to abstract away the caching mechanism from outside the module, so users who use the add-on do not have to consider it.

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/abstracting-data/domain-model.png" width="500" >}}

You have a module that manages the inventory and stock of your shop products. You want to export this module so you can reuse it in different projects. To increase security, you do not want to expose the persistable entities, so you want to create view entities that represent the data you want to share outside the module. 

## Create an Add-On Module

1. Create a new module.
2. Open the module **Settings** and click the **Export** tab.
3. Select **Add-on module** as the module type, then click **OK**. 

   {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/abstracting-data/module-settings.png" width="500" >}}

  With the add-on enabled, you should see an additional configurable property in the documents and other elements of your module called **Export level**. This is set to **Hidden** by default, which means users of your add-on cannot access them. 

   {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/abstracting-data/export-level.png" width="500" >}}

## Create a View Entity

You want to make an interface that shows products where you can filter the results by category. Do this by creating a view entity what joins the Product and Category entities. Follow the steps below:

1. Open your domain model and create a new view entity named *ProductCategoryVE*.
2. Add the following query to the OQL editor:

    ```sql
    SELECT
      p.ProductId as ProductId
      , p.ProductName as ProductName
      , p.QuantityPerUnit as QuantityPerUnit
      , p.Discontinued as Discontinued
      , c.CategoryName as Category
      , c.CategoryId as CategoryId
    FROM ShopAddOn.Product as p
      JOIN p/ShopAddOn.Product_Category/ShopAddOn.Category as c
    ```

3. Double-click **ProductCategoryVE** and set the export level to **Usable**. 

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/abstracting-data/usable.png" width="500" >}}

4. Export the add-on module by right-clicking it and selecting **Export add-on module package**.
