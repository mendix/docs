---
title: "Data Versioning with View Entities"
url: /refguide/view-entity-data-versioning/
weight: 80
---

## Introduction

View entities allow you to work with versioned data. In this example, you will implement versioned data within a domain model. 

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-data-versioning/domain-model.png" width="500" >}}

The domain model above is for an ordering system of a shop. The entities contain the following:

* *OrderInfo* - information about an order, such as the fulfillment deadline 
* *OrderLine* -  information about purchased items, such as price or quantity
* *Customer* - information about the purchasing customer 
* *OrderUpdate* - information about the status of an order, such as when the order ships or is delivered; a new row is added every time an order status changes

An advantage of separating *OrderUpdate* from *OrderLine* is that it is easier to keep track of the order history. You can create an entity that includes information from both entities, but it works on the assumption that the workflow remains the same with each order (for example, order placed > order processed > order shipped). However, this may make it difficult to see other statuses, such as which orders have been processed. To avoid this, use a view entity to implement data versioning.

## Data Versioning

To view the latest status of an order, follow the steps below:

1. Open your domain model and add a view entity named *LatestOrderStatusVE*.
2. Add the following query to the OQL editor:

    ```sql
    SELECT
        o.OrderId as OrderId,
        o.RequiredDate as RequiredDate,
        u.OrderStatus as OrderStatus,
        u.UpdateDate as UpdateDate
    FROM Shop.OrderInfo o
    JOIN o/Shop.OrderUpdate_OrderInfo/Shop.OrderUpdate u
    JOIN (
        SELECT
            u.OrderId as OrderId,
            MAX(u.UpdateDate) as UpdateDate
        FROM Shop.OrderUpdate u
        GROUP BY u.OrderId
    ) latest ON (latest.OrderId = o.OrderId AND latest.UpdateDate = u.UpdateDate)
    ```

{{% alert color="info" %}}

The above query is a nested query. It retrieves information from the *OrderInfo* table, then joins it with the *OrderUpdate* table. The result is a table with every update of every order. If you are only interested in the latest update of each table, retrieve the latest date an order is updated using `MAX(u.UpdateDate)` and combine it with the previous `JOIN`.

For more information on different OQL clauses, see [OQL Version 2 Features](/refguide/oql-v2/).

{{% /alert %}}

The final result is a list with only the latest update of each order: 

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-data-versioning/entity-properties.png" width="500" >}}

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-data-versioning/data-grid.png" width="500" >}}

## Order Status on Specific Date

Another advantage of data versioning is that you can take a snapshot of the order status on any given date. For example, if you want to know the status of orders on 8/17/1997, add the following line at the end of your existing query:

```sql
WHERE u.UpdateDate < CAST('1997/08/17' as DATETIME)
```

This addition retrieves the order status for one specific date:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-data-versioning/entity-properties-2.png" width="500" >}}

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-data-versioning/data-grid-2.png" width="500" >}}
