---
title: "Exporting Data with View Entities"
url: /refguide/view-entity-expport-data/
weight: 90
---

## Introduction

Use view entities to export data from your domain model with JSON. 

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/exporting-data/domain-model.png" width="400" >}}

The domain model contains two entities that store customer data and their associated delivery and billing addresses. 

You want to export a report of customer information in JSON format. The report should contain the customer's billing address and delivery address, all contained in the same field. This can be done in one view entity, rather than having to decide the logic for a Customer-Address association in a microflow.

## Transform and Export Data with JSON

Create a view entity to join the customer and address tables. To do this, follow the steps below: 

1. Create a view entity and name it *CustomerVE*. 
2. Add the following query to the OQL editor:

    ```sql
    SELECT
        c.CustomerId as CustomerID,
        c.CompanyName as Company,
        (c.FirstName + ' ' + c.LastName) as FullName,
        c.Phone as Phone, 
        c.Fax as Fax,
        (ba.Address + ', ' + ba.City + ' ' + ba.PostalCode + ', ' + ba.Country) as BillingAddress,
        (da.Address + ', ' + da.City + ' ' + da.PostalCode + ', ' + da.Country) as DeliveryAddress
    FROM Shop.Customer c
        LEFT JOIN c/Shop.BillingAddress/Shop.Address ba
        LEFT JOIN c/Shop.DeliveryAddress/Shop.Address da
    ```

3. Click **Run Query** to view the data. Then, click **OK**.

### Create a JSON Structure

Create a JSON structure that represents the customer entity. To do this, follow these steps:

1. Right-click your module and select **Add other** > **JSON structure**.
2. Create an example snippet of the JSON object.

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/exporting-data/json-structure.png" width="500" >}}

3. Click **Refresh**, then click **OK** to save. 

### Create an Export Mapping

1. Right-click your module and select **Add other** > **Export mapping**. Name this mapping *EM_Customer*.
2. In the **Schema source** field, select the JSON structure you created in the previous section.
3. In the **Schema elements** field, select **Check all**, then click **OK**. 

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/exporting-data/export-mapping-data.png" width="500" >}}

4. In the Integration pane, open the **Connectors** tab.
5. Drag **CustomerVE** to the export mapping document.

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/exporting-data/connectors-pane.png" width="500" >}}

6. Map the CustomerVE attributes to their corresponding schema field.

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/exporting-data/mapping.png" width="500" >}}

7. Click **OK** to save.
