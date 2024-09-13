---
title: "Use Mendix Data Storage APIs to Build Reusable Microflow Actions"
linktitle: "Data Storage APIs for Reusable Microflows"
url: /howto9/extensibility/howto-datastorage-api/
weight: 90
description: "Describes how to create custom microflow actions using Data Storage APIs."
---

## Introduction

Mendix Studio Pro supports two query languages to retrieve data:

* XPath as an easy to use query language to retrieve objects
* OQL is a SQL based language, more focused on powerful reporting facilities

You can use these query languages in Mendix Studio Pro, but both languages are also available through a Java API. You can use these APIs to implement powerful reusable microflow actions. In addition to XPath and OQL, the Mendix APIs also enable you to use standard SQL on your Mendix database.

This how to describes how you can build the following microflow actions:

* Retrieve advanced XPath - returns a list of entities as specified by an XPath expression
* Retrieve advanced OQL - returns a list of entities as specified by an OQL query
* Retrieve Dataset OQL - returns a list of entities as specified by a Dataset OQL query
* Retrieve advanced SQL - returns a list of entities as specified by a SQL query
* Create first Monday of month list - returns a list of dates of the first Monday of every month in a specified range
* Register global entity listeners - run custom Java code for every object change

    {{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image001.png" alt="Microflow actions toolbox" class="no-border" >}}

For more information on Java programming for Mendix, see [Java Programming](/refguide9/java-programming/).

For more information on calling Java actions from a microflow, see [Java Actions](/refguide9/java-actions/).

## Retrieving Advanced XPath

The goal is to create a microflow action where a user can specify an XPath expression and which result entities are expected. The action will execute the XPath statement and return the resulting list of objects.

In practice, this is not a very useful microflow action as you can already do this with the standard retrieve action in Mendix Studio Pro. The goal, however, is to illustrate how you can use the XPath Java API.

The Java action needs the following parameters:

* A string where the user can specify the XPath expression to be executed
* A result entity where the user specifies which entity is to be returned
* A return type which specifies that the action returns a list of the entities specified in the previous parameter.

    {{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image003.png" class="no-border" >}}

A type parameter is required to define what object types should be returned in the list. This is specified using the ResultEntity parameter:

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image005.png" class="no-border" >}}

Finally, you should define how you want to display the microflow in the microflow toolbox. This consists of a caption, a category and an icon:

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image007.png" class="no-border" >}}

The implementation of this Java action is pretty straightforward; you can use the [Core.createXPathQuery](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) API to execute your XPath expression and return a list of Mendix objects.

The implementation also validates that the list returned contains objects of the entity specified.

```java
@Override
public java.util.List<IMendixObject> executeAction() throws Exception
{
    //BEGIN USER CODE
    List<IMendixObject> result = null;
    result = Core.createXPathQuery(this.XPath).execute(getContext());
    if (!result.isEmpty() && !result.get(0).isInstanceOf(this.ResultEntity)) {
        throw new MendixRuntimeException(String.format("Unexpected result entity: %s vs %s",
            result.get(0).getMetaObject().getName(), this.ResultEntity));
    }
    return result;
    // END USER CODE
}
```

Now you have a new microflow action in the toolbox that you can use in your microflows.

Here’s an example domain model with two entities: Department and Employee.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image011.png" class="no-border" >}}

You can drag the Java action created above from the toolbox into a microflow. In this example, you want to retrieve all Employee objects and return a list of these objects.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image013.png" class="no-border" >}}

## Retrieving Objects Using OQL

The following example illustrates how you can use the OQL APIs for reporting purposes. OQL is the general-purpose Mendix query language, very much resembling SQL. The biggest differences between OQL and SQL are:

* OQL is expressed in entity and attribute names instead of table names and column names. This makes it easier to use, as you do not have to know the technical data model as stored in the database
* OQL is database vendor independent, so you can run the same OQL statement on all databases supported by Mendix

The following non-persistable entity shows what data you are interested in for your report:

* For every department you want to know
    * its name,
    * the birthday of the oldest employee
    * the birthday of the youngest employee
    * the total salary bill
    * the average salary of the employees
    * the minimum salary paid to an employee

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image017.png" class="no-border" >}}

Using OQL, you can query this data as follows:

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image018.png" class="no-border" >}}

Note that here you use the alias (**as ...**) to map the results of the selection to the attributes in the entity.

You can create a generic microflow action to execute OQL queries and return a list of objects. The Java action has the following parameters:

* **OqlQuery** – a string containing the OQL query
* **ResultEntity** – which entity will hold the retrieved data
* A list of the **ResultEntity** specified as a return type.

As in the XPath example above, a **Type parameter** is defined to specify that the return list uses the type specified in ResultEntity.

Additionally, you need to expose the Java action as a microflow action, provide a caption and an icon.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image020.png" class="no-border" >}}

The Java action illustrated below does the following:

* Retrieves all data using the Mendix API `Core.retrieveOQLDataTable()`
* Loops through all the rows, creates a new object of the type specified by ResultEntity.

    {{% alert color="info" %}}Setting a Java action parameter of type **Entity of type parameter...** (*ResultEntity* in the example above) creates a Java string in the action which contains the name of the entity type. This string can be passed to Core.instantiate to create a new object.{{% /alert %}}

* Loops through all columns of a record and copies the column value to an attribute with the same name. If an attribute with a column name does not exist, a message is printed, and the loop continues
* The Mendix object created is added to the list to be returned

Note that in this case, as show in the domain model screenshot and the OQL screenshot above, the names of the attributes and columns match exactly.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image021.png" class="no-border" >}}

The result is a generic OQL action that you can use in your microflows as follows:

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image023.png" class="no-border" >}}

## Retrieving Objects Using OQL Specified in a Dataset

Instead of coding the OQL statement in a string parameter, you can also use a Dataset. This has the benefit the that Mendix Studio Pro will validate your OQL query.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image040.png" class="no-border" >}}

This time, you need to define a Java action that will take the name of the dataset. This action will get the OQL from the DataSet, execute it, and return a list of Mendix objects.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image041.png" class="no-border" >}}

The microflow to execute the Java action is similar to the previous example, but instead of an OQL query, you specify the name of the Dataset.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image042.png" class="no-border" >}}

Below is the Java code to get the Dataset OQL, execute the OQL, and retrieve the Objects. You use the [Core.createOQLTextGetRequestFromDataSet](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html#createOQLTextGetRequestFromDataSet(java.lang.String)) method to get the OQL query of the Dataset specified.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image043.png" class="no-border" >}}

## Retrieving Objects Using SQL

An API is available to allow you to execute SQL queries on the application database (this feature is in beta). Using this API, you can create a microflow action to execute SQL: similar to the action for OQL in the previous sections.

The definition of the Java action resembles the OQL action, but instead of an OQL parameter you have an SQL parameter.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image025.png" class="no-border" >}}

The Java implementation below implements the following steps:

* Use *Core.dataStorage().executeWithConnection()* to execute some Java statements that receive a JDBC connection from the internal connection pool. This API is constructed to enable the Mendix Platform to guarantee that connections are returned to the pool after usage.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image026.png" class="no-border" >}}

* With the JDBC connection you can now implement your Java as you would with a regular JDBC connection. 
* A prepared statement is created, executed and the resulting records are made available through a `ResultSet`.

    {{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image027.png" class="no-border" >}}

* Next you loop through all the records in the `ResultSet` and create a Mendix object as specified by the user via ResultEntity.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image028.png" class="no-border" >}}

You can find the complete Java source code on GitHub: [RetrieveAdvancedSQL](https://github.com/ako/QueryApiBlogPost/blob/master/javasource/hr/actions/RetrieveAdvancedSql.java).

You now have a generic SQL action that can be used in microflows to retrieve data from your application database. The query in this example returns the same data as the OQL earlier, so you can reuse the non-persistable entity DepartmentSummary as defined previously.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image029.png" class="no-border" >}}

{{% alert color="info" %}}
Note that in case of SQL statements you need to implement security constraints yourself.
{{% /alert %}}

## PostgreSQL-specific SQL

Using the JDBC connection you can benefit from vendor specific database extensions, like Oracle Pl/SQL or Postgres user-defined functions.

{{% alert color="warning" %}}
If you use vendor specific database functionality you will not be able to deploy your application seamlessly on other platforms and databases. Therefore, we advise you to use SQL only if you have no alternative way of implementing your requirements. In most cases you should be able to use OQL to achieve the same result, whilst keeping your application database independent.
{{% /alert %}}

The following example illustrates the use of PostgreSQL-specific functionality. It serves as an example of how you can do this, but in this specific case an alternative solution, either using microflows or Java actions, is better as it would keep your application database independent.

The requirement for this example is to generate a list of dates for all first Mondays of the month between a range specified by the user.

This example has a page where a user can enter a start and end date. The microflow triggered by the **Generate first Mondays of the month** button will print all the respective dates.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image031.png" class="no-border" >}}

In Postgres you can query a list of the dates of all Mondays between these dates using the following Postgres specific query:

* Using a common table expression (CTE), you create a set of all first dates of every month in the range
* Using another CTE you determine the dates of the Mondays for these months
* Finally, you select these dates if they still fall in range specified

For example:

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image032.png" class="no-border" >}}

### Creating the Java Action

You create a Java action with parameters for the start date and the end date. You have a specific entity to return a list of the dates: *Hr.FirstMondayDate*.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image033.png" class="no-border" >}}

### Creating the Java Code

1. Specify the required SQL statement in the Java method. JDBC queries expect the parameters to be specified by question marks (?) in the SQL statement.

    {{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image034.png" class="no-border" >}}

2. Next, use the Mendix API to execute some statements using the JDBC connection. Here you create a prepared statement, define the JDBC parameter values, and execute the SQL query.

    {{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image035.png" class="no-border" >}}

3. Using the `FirstMondayDate` Java proxy, instantiate a new Mendix object and set the date attribute. 
4. Finally, return the created list of dates.

    {{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image036.png" class="no-border" >}}

When you use this in a microflow, you just need to specify the start and end dates, and the name of the resulting list. This example iterates through all the data objects in the list and prints the date of that object.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image037.png" class="no-border" >}}

You will see the list of dates in the console.

{{< figure src="/attachments/howto9/extensibility/howto-datastorage-api/image039.png" class="no-border" >}}

## Global Custom Entity Event Listeners

Global entity event listeners enable you to define generic event handlers on all entities. This enables you to build generic validations or create a real-time data export to a central datastore. You can use a Java action to register any desired event handler, most likely in the *After App Startup Microflow*.

### Example code to Register the Event Listener.

This code will log old and new attribute value for all changes to attributes before making changes in the database:

```java
public java.lang.Boolean executeAction() throws Exception {
    // BEGIN USER CODE
    Core.getListenersRegistry().registerBeforeCommitListener(objects -> {
        ILogNode logger = Core.getLogger("BeforeCommitListener");
        for (IMendixObject obj : objects) {
            logger.info("ObjectType: " + obj.getType());

            List<? extends IMendixObjectMember<?>> changedMembers = obj.getChangedMembers(getContext());

            logger.info(String.format("Has changed members: %b? Number of changed members: %d", obj.isChanged(), changedMembers.size()));
            for (IMendixObjectMember member : changedMembers) {
                logger.info(
                        String.format("Changed member %s : %s -> %s", member.getName(),
                                member.getOriginalValue(getContext()) != null ? member.getOriginalValue(getContext()).toString() : "",
                                member.getValue(getContext()) != null ? member.getValue(getContext()).toString() : ""
                        )
                );
            }
        }
    });
    return true;
    // END USER CODE
}
```

This example will trigger a listener for every object change before writing the changes to the database. To find out what attributes have been changed, you can use the `getChangedMembers` method, as illustrated above.
