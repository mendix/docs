---
title: "Use View Entities"
url: /refguide/use-view-entities/
weight: 10
---

## Introduction

View entities allow you to retrieve, transform, and aggregate your data. They represent a set of stored OQL queries that can be used similarly to [persistable entities]( /refguide/persistability/#persistable). The data that view entities contain is determined when you retrieve the data.

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

For example, the view entity pictured below lists all customers at an organization that are over age 18. The entity includes their full name, age, and delivery and billing addresses.

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/customer-with-address.png" width="500" >}}

Age is determined for each customer by calculating the difference in years between the current day and the customer’s date of birth. Another view entity can then count the number of customers that were born in each decade and group them appropriately. 

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/customer-per-decade.png" width="500" >}}

The original customer view included address information, but most database optimizers will see that this information is not relevant when counting customers by age, so this information is excluded when retrieving the data. However, the information is still present and can be generated, if requested. 

## View Entities and Parameters

You may have previously used the OQL module or datasets to execute OQL queries. There, you use parameters to configure the query to retrieve the correct data. View entities do not have parameters, but you can dynamically specify what data you want to retrieve.

Filtering attributes is one way to configure your queries. For example, assume you have an entity with the attributes `FirstName` and `LastName`. In a view entity, you combine both the first name and last name into a `FullName` attribute. When you select from this entity, you can specify an XPath expression that limits the data on the full attribute name.

Alternatively, you can store the parameter value in the database, then use that value in your view entity.  For example, the image below is of a view entity that returns the data of the *Product* entity in the language of the current user. 

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/product-language.png" width="500" >}}

This is done by joining an entity that has all the necessary translations and filtering it by the language of the current user. Coalesce is used to return the default language in case there is no translation is available.

This approach can also be useful for multitenant applications. If you have a multitenant system where every user has a tenant ID, you can ensure through view entities that any data that is tenant-specific will only return data for the tenant of the current user. For more information, see [Multitenant Applications](/refguide/view-entity-multitenant-apps/).

## Data Security 

Use the [`WHERE` clause]( /refguide/oql-expressions/) of a view entity to ensure only data that should be available to the user is returned. This is an alternative to the access rules you can have on both persistable entities and view entities.

Persistable entity access rules are not applied when using view entities. Instead, you must specify the access rules. You can define what users have access to while still allowing access to aggregated data. For example, you may want to know how many employees are part of each department of a company. However, you should not be able to see the detailed information of each employee. View entities allow you to give a user access to specific employee data without revealing sensitive information. 

### Multitenant Security 

In the following example, a view entity is used to implement multitenant security. The view entity *CustomersVE* only returns the customers that belong to the tenant of the current user. Any additional view entity that uses *CustomersVE* instead of the persistable entity *Customer* will only get data belonging to the tenant of the user. 

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/active-tenant.png" width="500" >}}

Instead of joining with the `[%CurrentUser%]` expression, this example joins with a view entity that only returns one object: the current user and related details, such active language and tenant ID. This simplifies use of user information for other view entities. 

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/current-user.png" width="500" >}}

## Performance

When working with large amounts of data, using the database optimizer to get required information from your database is usually faster than processing in the application itself. A database knows the data’s characteristics, and therefore can find the fastest path to access the data. It can also aggregate data in the database, minimizing unnecessary data movement. 

In the example above where customers are counted in age brackets, the query result contains approximately 10 objects. To determine these 10 objects, the database may need to process thousands or even millions of objects. A database can do this more efficiently if all objects are read into a Mendix Runtime for aggregation.

## Understanding Query Plans

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

If you set the `DataStorage_QueryPlan` log node to Trace, you see the query plan for your queries in the Mendix Runtime log.

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
