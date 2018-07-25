---
title: "Howto use Mendix DataStorage APIs to build reusable microflow actions"
category: "Extensibility"
description: "Describes creating custom Microflow actions using Data Storage APIs."
tags: ["Java","Connector Kit","microflow action","parameter type","SQL","XPath","OQL","DataStorage"]
output:
  word_document: default
  html_document: default
---

## 1 Introduction

The Mendix business modeler supports two query languages to retrieve data:

* Xpath as an easy to use query language to retrieve objects
* OQL is a SQL based lagnuage, more focussed on powerful reporting facilities

You can use these query languages in the Mendix Modeler, but both languages are also available through a Java
API. You can use these APIs to implement powerful reusable Microflow Activities through the Connector Kit.
In addition to Xpath and OQL, the Mendix APIs also enable you to use standard SQL on your Mendix database.

This howto describes how you can build the following Microflow actions:

* Retrieve advanced Xpath - returns a list of entities as specified by the Xpath expression,
* Retrieve advanced OQL - returns a list of entities as specified by a OQL query,
* Retrieve Dataset OQL - returns a list of entities as specified by a Dataset OQL query
* Retrieve advanced SQL - returns a list of entities as specified by a SQL query,
* Create first Monday of month list - returns a list of dates of the first Monday of every month in a specified range.
* Register global entity listeners - run custom java code for every object change.

 ![Microflow actions toolbox][1]

## 2 Retrieve advanced Xpath

The goal is to create a Microflow action where a user can specify an Xpath expression and what result entities
are expected. The action will execute the XPath statement and return the resulting list of objects.

In practice, this is not a very useful Microflow action, as you can already do this with the standard Retrieve
action in the Mendix modeler. The goal however is to illustrate how you can use the Xpath java API.

The java action need the following parameters:

* A string where the user can specify the xpath expression to be executed.
* A result entity where the user specifies what entity is to be returned.
* A return type which specified that the action returns a list with entities specified in the previous
parameter.

 ![][3]
 
A type parameter is required to define what object types should be returned in the list. This is specified using the ResultEntity parameter:
 
 ![][5]
 
Finally, we should define how we want to display the microflow in the microflow toolbox. This consists of a caption, a category and an icon:

 ![][7]
 
The implementation of this java action is pretty straight forward, you can use the [Core.retrieveXPathQuery](https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#retrieveXPathQuery-com.mendix.systemwideinterfaces.core.IContext-java.lang.String-)
API to execute your Xpath expression and return a list of Mendix objects.
 
The implementation also validates that the list returned contains objects of the entity specified.

 ![][9]
 
Now we have a new Microflow action in the toolbox that we can use in our microflows.

Here’s an example data model with two entities, Department and Employee.
 
 ![][11]
 
We can drag the java action created above from the toolbox on a microflow. In this example we want to retrieve all Employee objects and return a list of these objects.
 
 ![][13]

## 3 Retrieve objects using OQL

The following example illustrates how you can use the OQL APIs for reporting purposes. OQL is the general
purpose Mendix query language, very much resembling SQL. Biggest differences between OQL and SQL are:

*	OQL is expressed in entity and attribute names instead of table names and column names. This makes it easier to use as you do not have to know the technical datamodel as stored in the database.
*	OQL is database vendor independent, so you can run the same OQL statement on all databases supported by Mendix.

The following Non-persistent entity shows what data we are interested in for our report:

* For every department we want to know its name,
* The birthday of the oldest employee,
* The birthday of the youngest employee,
* Total salary for all employees,
* Avarage salary for all employees, 
* Minimum salary paid per department.
 
 ![][17]
 
Using OQL you can query this data as follows:

 ![][18]
 
We can create a generic microflow action to execute OQL queries and return a list of objects. The java action has the following parameters:

* OqlQuery – a string containing the OQL query
* ResultEntity – what entity will hold the retrieved data
* A list of the ResultEntity specified as a return type.

As in the xpath example above, a Type parameter is defined to specify that the Return list uses the type specified in ResultEntity.

Additionally, we need to expose the java action as a microflow action, provide caption and an icon.
 
 ![][20]
 
The implementation of the Java action illustrated below does the following:

* Retrieve all data using Mendix API Core.retrieveOQLDataTable()
* Loops through all rows, creates a new object of the type specified by the used in ResultEntity. A java action parameter of type Entity results in a java string containing the name of the entity. This can be passed to Core.instantiate to create a new object.
* Loops through all columns of a record and copy the column value to an attribute with the same name. If an attribute with a column name does not exist, a message is printed, and the loop continues.
* The Mendix object created is added to the list to be returned.

Note in the domain model screenshot and the OQL screenshot above, the names of the ttributes and columns match exactly even on case.

 ![][21]
 
The result is a generic OQL action that you can use in your microflows as follows:

 ![][23]

## 4 Retrieve objects using OQL specified in a Dataset

Instead of coding the OQL statement in a string parameter, you can also use a Dataset. This has the benefit the that Mendix Modeler will validate your OQL query.

 ![][40]
 
Now we need to define a java action that will take the name of the dataset. This action will get the OQL of the DataSet, execute it, and return a list of mendix objects.

 ![][41]

Microflow to execute the Java action is similar to the previous example, but instead of an OQL query, you specify the name of the Dataset.

 ![][42]

The java code to get the Dataset OQL, execute the OQL, and retrieve the Objects. You can use the [Core.createOQLTextGetRequestFromDataSet](https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#createOQLTextGetRequestFromDataSet-java.lang.String-) method to get te OQL query of the Dataset specified.

 ![][43]

 
## 5 Retrieving objects using SQL

As of Mendix 7 a new API is available to allow you to execute SQL queries on the application database.
(This feature is currently in beta). Using this API, we can create a Microflow action to execute SQL,
similar to the action for OQL in the previous section.

The definition of the Java action resembles the OQL action, but instead of a OQL parameter we have a
SQL parameter.

 ![][25]

The java implementation below uses the following steps:

*	Use the new *Core.dataStorage().executeWithConnection()* to execute some java statements that receive
a jdbc connection from the internal connection pool. The way this API is constructed enables the Mendix
platform to guarantee that connections are returned to the pool after usage.

 ![][26]
 
*	With the jdbc connection we can now implement our java as you would with a regular jdbc connection. 
*	A prepared statement is created, executed and the resulting records are made available through a ResultSet.
 
 ![][27]
 
*	Next we loop through all the records in the ResultSet and create a Mendix object as specified by the
user with ResultEntity.
 
 ![][28]
 
You can find the complete java source code on GitHub: [LINK].

We now have a generic SQL action that can be used in microflows to retrieve data from your application
database. The query in this example returns the same data as the OQL earlier, so we can reuse the non-persistent
entity DepartmentSummary as defined previously.
 
 ![][29]
 
Please note that in case of SQL statements you need to implement security constraints yourself.

## 6 PostgreSQL specific SQL

Using the JDBC connection you can benefit from vendor specific database extension, like Oracle Pl/SQL or
Postgres user defined function.

 *A word of warning: if you use vendor specific database functionality you will not be able to seamlessly
 deploy your application on other platforms and databases. So we advise you to only use SQL if you have no
 alternative way of implementing your requirements. I most cases you should be able to use OQL to achieve
 the same, while keeping your application database independent.*

The following example illustrates the use of PostgreSQL specific functionality. It serves as an example of
how you can do this, but in this specific case you should prefer an alternative solution, either using
microflows or java actions, as that will keep your application database independent.

The requirement for this example is to generate a list of dates for all first Mondays of the months between
a range specified by the user.

Our example has a page where a user can enter a start and end date. The microflow triggered by the “Generate
first Mondays of the month” button will print all the respective dates.
 
 ![][31]
 
In postgres we can query a list of the dates of all Mondays between these dates using the following postgres
specific query:

*	Using a common table expression (CTE) we create a set of all first dates of every month in the range
*	Using another CTE we determine the dates of the Mondays for these months
*	Finally, we selected these dates if they still fall in range specified.
 
 ![][32]
 
We create a java action with parameters for the start date and the end date. We have a specific entity to return
a list of the dates, Hr.FirstMondayDate.
 
 ![][33]

The java code to implement this action:

*	Specify the required sql statement in the java method. Jdbc queries expect the parameters to be specified
by questionmarks (?) in the sql statement.
 
 ![][34]
 
*	Next we use the Mendix API to execute some statements using the jdbc connection. Here we create a prepared
statement, define the jdbc parameter values and execute the sql query.
 
 ![][35]
 
*	Using the FirstMondayDate java proxy we can instantiate a new Mendix object and set the date attribute. 
*	Finally, we need to return the created list of dates.
 
 ![][36]
 
When you use this in a microflow, you just need to specify the start and end date and the name of the variable
that will hold the resulting list. This example iterates through all the data objects in the list and prints
the date of that object.
 
 ![][37]
 
You will see the list of dates in the console.
 
 ![][39]
 
## 7 Global custom entity event listeners

Global entity event listeners enable you to define generic event handlers on all entities. This enables you
to build generic validations or create a real-time data export to a central datastore. You can use a Java
action to register any desired event handler, most likely in the *After App Startup Microflow*.

Example code to illustrate how to register the event listener. This code will log old and new attribute value for
all changes attributes before making changes in the database:

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

This example will trigger a listener for every object change before writing the changes to the database. To find out
what attributes have been changed, you
 
 [1]: attachments/dsapi/image001.png
 [2]: attachments/dsapi/image002.jpg
 [3]: attachments/dsapi/image003.png
 [4]: attachments/dsapi/image004.jpg
 [5]: attachments/dsapi/image005.png
 [6]: attachments/dsapi/image006.jpg
 [7]: attachments/dsapi/image007.png
 [8]: attachments/dsapi/image008.jpg
 [9]: attachments/dsapi/image009.png
 [10]: attachments/dsapi/image010.jpg
 [11]: attachments/dsapi/image011.png
 [12]: attachments/dsapi/image012.jpg
 [13]: attachments/dsapi/image013.png
 [14]: attachments/dsapi/image014.jpg
 [15]: attachments/dsapi/image015.png
 [16]: attachments/dsapi/image016.jpg
 [17]: attachments/dsapi/image017.png
 [18]: attachments/dsapi/image018.png
 [19]: attachments/dsapi/image019.jpg
 [20]: attachments/dsapi/image020.png
 [21]: attachments/dsapi/image021.png
 [22]: attachments/dsapi/image022.jpg
 [23]: attachments/dsapi/image023.png
 [24]: attachments/dsapi/image024.jpg
 [25]: attachments/dsapi/image025.png
 [26]: attachments/dsapi/image026.png
 [27]: attachments/dsapi/image027.png
 [28]: attachments/dsapi/image028.png
 [29]: attachments/dsapi/image029.png
 [30]: attachments/dsapi/image030.jpg
 [31]: attachments/dsapi/image031.png
 [32]: attachments/dsapi/image032.png
 [33]: attachments/dsapi/image033.png
 [34]: attachments/dsapi/image034.png
 [35]: attachments/dsapi/image035.png
 [36]: attachments/dsapi/image036.png
 [37]: attachments/dsapi/image037.png
 [38]: attachments/dsapi/image038.jpg
 [39]: attachments/dsapi/image039.png
 [40]: attachments/dsapi/image040.PNG
 [41]: attachments/dsapi/image041.PNG
 [42]: attachments/dsapi/image042.PNG
 [43]: attachments/dsapi/image043.PNG
 
