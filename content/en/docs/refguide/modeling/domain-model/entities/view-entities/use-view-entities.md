---
title: "Use View Entities"
url: /refguide/use-view-entities/
weight: 10
---

## Introduction

View entities enable the retrieval, transformation, and aggregation of data within Mendix applications. Each view entity is defined by a corresponding **Object Query Language (OQL) query** specifying the data retrieval logic. This configuration allows view entities to function similarly to [persistable entities]( /refguide/persistability/#persistable). The data that view entities contain is determined when you retrieve the data.

You can perform operations such as sorting, paging, and filtering using view entities. The entire query is executed by the database, often resulting in faster performance compared to executing multiple independent retrieves. A view entity fetches the data you need from the database and allows data transformation and aggregation. With view entities, you can:

* Attribute values
* Concatenate attributes
* Calculate aggregates and averages

## Use Cases

A view entity can be seen as a named OQL query that behaves like a persistable entity. Because of this, it offers most features that any other entity has. 

### Data Preparation

When you need data from multiple entities in your widgets, view entities make it faster and simpler to retrieve all necessary data. For example, when using data grids with associations from multiple entities, view entities increase speed and allow for full sorting, pagination, and filtering functions.

### Charting

View entities can execute aggregation and calculations required for charts, dashboards, and KPIs within the database, providing the necessary data for your widgets. For more information, see [Charting with View Entities](/refguide/charting-with-view-entities/).

### API Stability 

To decouple data usage from data storage, especially for APIs, view entities allow you to expose data while keeping your domain model flexible. This ensures API stability for external applications and allows you to change your domain model as needed without affecting the API. For more information, see [Decoupling APIs](/refguide/decoupling-apis/).

## Creating Maintainable View Entities Using Composability

Retrieving data from your database can result in very large and complex queries. You may have seen examples of this in SQL, where it is not uncommon to have queries of 100 lines or more. OQL hides some of the complexity, for example, by simplifying joins on associations between entities.

View entities offer an additional powerful way to improve reusability, readability, and maintainability. You can use them to combine simple queries into more complex ones. A query defines a set of data, which can then be further refined to retrieve more detailed information. A view entity can be also composed of data defined by other view entities.

For example, the view entity pictured below lists all customers at an organization that are over age 18. The view entity includes their full name, age, and delivery and billing addresses.
 
 ```sql
 FROM Shop.Customer AS c
  LEFT JOIN c/Shop.BillingAddress/Shop.Address as ba
  LEFT JOIN c/Shop.DeliveryAddress/Shop.Address as da
 WHERE datediff(YEAR,c.DateOfBirth,'[%CurrentDateTime%]') > 18
 SELECT
  c.CustomerId                                                                                   as CustomerId
 ,c.LastName + ', ' + FirstName                                                                  as FullName
 ,datediff(YEAR, c.DateOfBirth,'[%CurrentDateTime%]')                                            as Age
 ,ba.Streetname + ' ' + ba.StreetNumber + ' ' + ba.Zipcode + ' ' + ba.City + ' ' +  ba.Country   as BillingAddress
 ,da.Streetname + ' ' + da.StreetNumber + ' ' + da.Zipcode + ' ' + da.City + ' ' +  da.Country   as DeliveryAddress
 ```

Age is determined for each customer by calculating the difference in years between the current day and the customer’s date of birth. Another view entity can then count the number of customers that were born in each decade and group them appropriately. 

```sql
 FROM
   (
    FROM HowToThink.CustomerWithAddressVE as c SELECT CAST(c.Age:10 as integer) * 10 as AgeBucket ,
                                                      c.CustomerId as CustomerId) as b
 GROUP BY b.AgeBucket
 SELECT b.AgeBucket as AgeBucketStart ,
        b.AgeBucket + 9 as AgeBucketEnd ,
        COUNT(b.CustomerId) as CustomerCount
 ORDER BY b.AgeBucket
 LIMIT 10
 ```

The original customer view included address information, but most database optimizers will see that this information is not relevant when counting customers by age, so this information is excluded when retrieving the data. However, the information is still present and can be generated, if requested. 

## Sorting of View Entity Results {#sorting}

Similar to other types of Mendix entity, view entities represent data without enforcing any specific order. As a result, it is not possible to use the `ORDER BY` clause in the view entity OQL to sort query results. However, data retrieved from a view entity can be sorted on retrieval (like regular entities) using options like the [Sorting](/refguide/retrieve-objects/#sorting) feature in a Retrieve microflow activity.

### `ORDER BY` in Combination with `LIMIT` and `OFFSET`

The `ORDER BY` clause can be used in a view entity in combination with `LIMIT` or `OFFSET` clauses to define a specific set of data to retrieve. If you do this, you still should not rely on the order of the output. If you want the results in particular order, they can be sorted on retrieval.

For example, the following OQL query defines a view entity `Books.Bestseller`, which contains data of the ten books which have sold the most copies. When using this view entity in your app, you should still explicitly specify sorting of the results.

```sql
FROM Books.Book
SELECT Name AS Name,
       ISBN AS ISBN,
       Sold AS Sold
ORDER BY Sold DESC
LIMIT 10
```

## View Entities and Parameters

You may have previously used the OQL module or datasets to execute OQL queries. There, you use parameters to configure the query to retrieve the correct data. View entities do not have parameters, but you can dynamically specify what data you want to retrieve.

Filtering attributes is one way to configure your queries. For example, assume you have an entity with the attributes `FirstName` and `LastName`. In a view entity, you combine both the first name and last name into a `FullName` attribute. When you select from this entity, you can specify an XPath expression that limits the data on the full attribute name.

Alternatively, you can store the parameter value in the database, then use that value in your view entity.  For example, the image below is of a view entity that returns the data of the *Product* entity in the language of the current user. 

 ```sql
 FROM Shop.Product as p
 LEFT JOIN System.User as u ON (u.ID = '[%CurrentUser%]')
 LEFT JOIN u/System.User_Language/System.Language as l
 LEFT JOIN p/Shop.ProductTranslations_Product/Shop.ProductTranslations as t ON (t.LanguageCode = l.Code)
 SELECT p.ID as ID,
        p.ProductId as ProductId,
        COALESCE(t.Name, p.Name) as Name,
        COALESCE(t.Description, p.Description) as Description,
        p.WeightInGrams as WeightInGrams,
        l.Code as UserLanguageCode
 ```

This is done by joining an entity that has all the necessary translations and filtering it by the language of the current user. Coalesce is used to return the default language in case there is no translation is available.

This approach can also be useful for multitenant applications. If you have a multitenant system where every user has a tenant ID, you can ensure through view entities that any data that is tenant-specific will only return data for the tenant of the current user. For more information, see [Multitenant Applications](/refguide/view-entity-multitenant-apps/).

## Data Security 

Use the [`WHERE` clause]( /refguide/oql-expressions/) of a view entity to ensure only data that should be available to the user is returned. This is an alternative to the access rules you can have on both persistable entities and view entities.

Persistable entity access rules are not applied when using view entities. Instead, you must specify the access rules. You can define what users have access to while still allowing access to aggregated data. For example, you may want to know how many employees are part of each department of a company. However, you should not be able to see the detailed information of each employee. View entities allow you to give a user access to specific employee data without revealing sensitive information. 

### Multitenant Security 

In the following example, a view entity is used to implement multitenant security. The view entity *CustomersVE* only returns the customers that belong to the tenant of the current user. Any additional view entity that uses *CustomersVE* instead of the persistable entity *Customer* will only get data belonging to the tenant of the user. 

 ```sql
 FROM Shop.Customer as c
 JOIN ShopViewSamples.CurrentUserVe u ON (u.UserTenantId = c.TenantId)
 SELECT c.CustomerId as CustomerId,
        c.FirstName as FirstName,
        c.LastName as LastName,
        c.EmailAddess as EmailAddess,
        c.DateOfBirth as DateOfBirth
 ```

Instead of joining with the `[%CurrentUser%]` expression, this example joins with a view entity that only returns one object: the current user and related details, such active language and tenant ID. This simplifies use of user information for other view entities. 

 ```sql
 FROM System.User as u
 LEFT JOIN u/System.User_Language/System.Language as l
 LEFT JOIN u/Shop.UserTenant_User/Shop.UserTenant as t
 WHERE (u.ID = '[%CurrentUser%]')
   SELECT u.Name as UserName ,
          l.Code as UserLanguageCode ,
          t.TenantId as UserTenantId
 ```

## Performance

When working with large amounts of data, using the database optimizer to get required information from your database is usually faster than processing in the application itself. A database knows the data’s characteristics, and therefore can find the fastest path to access the data. It can also aggregate data in the database, minimizing unnecessary data movement. 

In the example above where customers are counted in age brackets, the query result contains approximately 10 objects. To determine these 10 objects, the database may need to process thousands or even millions of objects. A database can do this more efficiently than if all objects are read into a Mendix Runtime for aggregation.

### Understanding Query Plans

To understand the performance impact of database queries, it is best to determine the query plan the database creates. A query plan explains how the database will execute your query. For a query, the fastest way to retrieve data can be different for every call, as it depends on many factors, such as:

* The query
* Parameters
* The size of your data
* Distribution of your data
* Availability of indexes that suit your query and parameters

Below, you see how the data for customers per age bracket is fetched by a database (read bottom up):

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/query-plans.png" >}}

The database follows the below process:

1. It reads through all customer records and determines if the customer is older than 18. It typically reads through all records, but often uses an index to increase efficiency.
2. It sorts the data by age bracket.
3. It groups and counts the customers in every bracket.
4. It sorts the results again by the number of customers per bracket, in descending order.

Even though the query is using a view that also includes address information, the database ignores this information, as it is not relevant when counting customers by age.

If you set the `DataStorage_QueryPlan` log node to Debug, you see the query plan for all your queries in the Mendix Runtime log.

{{% alert color="warning" %}}
The `DataStorage_QueryPlan` log node has a very large performance impact and should never be enabled in production.
{{% /alert %}}

## Read More

For more information on how to enable view entities in your app, see [View Entities]( /refguide/view-entities/) and [OQL]( /refguide/oql/).

For specific use case scenarios, see the following:

* [Creating Overview Pages](/refguide/view-entity-overview-pages/)
* [Decoupling APIs](/refguide/decoupling-apis/)
* [Charting with View Entities](/refguide/charting-with-view-entities/)
* [Multilingual Apps and Translations](/refguide/multilingual-apps/)
* [View Archived Data](/refguide/view-archived-data/)
* [Create a Pivot Table with View Entities](/refguide/view-entity-pivot-table/)
* [Data Versioning with View Entities](/refguide/view-entity-data-versioning/)
* [Exporting Data with View Entities](/refguide/view-entity-expport-data/)
* [Abstracting Data of Add-On Modules](/refguide/abstracting-view-entity-data/)
* [Multitenant Applications](/refguide/view-entity-multitenant-apps/)
