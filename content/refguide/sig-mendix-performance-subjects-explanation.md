---
title: "SIG–Mendix Performance Subjects"
category: "Runtime"
---

## 1 Introduction

This document outlines the communication patterns used by the Mendix Runtime environment for some typical application use cases.

These are the goals for this document:

*   Present information for assessing the quality of the Mendix Runtime environment regarding efficiency of communication
*   Present information for determining the impact of their design decisions on communication efficiency and performance

This document was written to address the missing information required by SIG to assess the performance efficiency of communication of Mendix applications. The last section of the document outlines the SIG scoring on this subject and how this document addresses these requirements.

## 2 Outline of Communication Within the Mendix Runtime Environment

The Mendix Platform consists of the following components:

*   Mendix Platform – completely integrated application platform-as-a-service (aPaaS) for designing, building, deploying, and managing apps
*   Developer Portal – web-based collaborative environment for design, development, and deployment of apps
*   Cloud Portal – for managing users and environments, deploying apps to the cloud with a single click, and managing and monitoring their performance

*   App Store – a portal with hundreds of publicly available building blocks to speed up app development
*   Mendix Modeler – multi-user modeling studio of the Mendix Platform
*   Team Server – a central repository for managing application model versions
*   Runtime environment – runs applications using a server part (Mendix Runtime) and a client part (Mendix Client)
*   Build – creates deployment packages from artifacts such as models, style sheets, and custom Java classes
*   MxID – a user management and provisioning service that applies the OpenID standard

The focus of this document is on the Mendix Runtime environment, more specifically the collaboration between the following parts:

*   Mendix Client – JavaScript client running in the browser of a user
*   Mendix Runtime – Java/Scala runtime running on a server, responsible for executing microflow logic, business rules, and persisting objects
*   RDBMS – where the data is persisted
*   Optionally, a state store to share state between horizontally scaled runtime instances

Communication between these components operates as follows:

*   The Mendix Client issues two types of requests:
    *   Static resources like pages, stylesheets, widgets, images, etc.
    *   Application data-related communication, which includes CRUD commands on data and logic that may require data
*   The Mendix Runtime communicates with different RDBMSs using SQL statements handled by a JDBC library
    *   Application data is stored in a ER-model in an RDBMS

## 3 Basic CRUD Communication Pattern

The core of most Mendix applications involves variations on the CRUD pattern – create, read, update, and delete data stored in Mendix entities.

This basic scenario can be modeled in Mendix using the following two pages:

* An overview page displaying a table of data for a specific entity, like this:

  ![](attachments/19202918/19399028.png)

* A details page where a specific object of an entity can be edited, like this:

  ![](attachments/19202918/19399029.png)

  * This page can be reached from the first page using the New and Edit buttons


The following sections outline the actions involved when executing these pages. As stated earlier, this pattern can be seen in many Mendix applications, but the exact runtime result depends on many details and design decisions taken while building the application using the Mendix Modeler. More advanced data models and pages will result in more (complex) queries.

### 3.1 Read Object Required to Display Object Table

Displaying a table of objects consists of the following steps:

1. Getting the definition of the page (if not already cached by the browser).
2. Getting the data to be displayed in the page.
3. Updating the page.

A basic sequence diagram looks like this:

![](attachments/19202918/19399030.png)

The Mendix Client uses a REST-like protocol to request data from the Mendix Runtime. The following example shows what this looks like when requesting objects from the Employees entity:

```java
{
   "action":"retrieve_by_xpath",
   "params":{
      "xpath":"//MyFirstModule.Employee",
      "schema":{
         "id":"a2916c7c-af2f-4267-a8e9-99604f045861",
         "offset":0,
         "sort":[
            [
               "Firstname",
               "asc"
            ]
         ],
         "amount":20
      },
      "count":true,
      "aggregates":false
   },
   "context":[
   ],
   "profiledata":{
      "204ee5ad0c056a0":15
   }
}
```

The XPath expression states what data is needed. This can be an entity—or just some attributes of an entities—as required by the application.

The schema section can be used to specify additional restrictions on what data is required (what attributes and how many records). This approach ensures that the amount of data transferred between Mendix Runtime and Mendix Client is minimized.

This retrieve action results in two SQL queries – one to retrieve the data, and one to retrieve the total number of objects.

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 ORDER BY "myfirstmodule$employee"."firstname" ASC,
 "myfirstmodule$employee"."id" ASC LIMIT 20
 SELECT COUNT(*)
 FROM "myfirstmodule$employee"
```

Depending on the data displayed and the domain model (usage of inheritance and row or attribute security), a retrieve may result in more queries or additional where clauses.

The response of the Mendix Runtime to the Mendix Client is as follows:

```sql
{"count":2,"mxobjects":[{"objectType":"MyFirstModule.Employee","guid":"281474976710757","attributes":{"Firstname":{"value":"peter1"},"DateOfBirth":{"value":-315622800000},"Jobtitle":{"value":"sales"},"Department":{"value":"sales"},"Lastname":{"value":"jones"&#125;&#125;},{"objectType":"MyFirstModule.Employee","guid":"281474976710657","attributes":{"Firstname":{"value":"piet"},"DateOfBirth":{"value":476406000000},"Jobtitle":{"value":"consultant"},"Department":{"value":"expert services"},"Lastname":{"value":"jansen"&#125;&#125;}]}
```

### 3.2 Create New Object

The typical create-new-object flow consists of these steps:

1. Instantiate a new object (the primary key is generated by the database, and Mendix Runtime keeps a cache of PKS).
2. Get the edit form (if not already cached by the browser).
3. Save the updated object in the Mendix Runtime.
4. Commit the updated object to the database.

![](attachments/19202918/19399031.png)

Create a new object:

```java
{
   "action":"instantiate",
   "params":{
      "objecttype":"MyFirstModule.Employee",
      "preventCache":1455032246146
   },
   "context":[
   ],
   "profiledata":{
      "204ee68c92aea60":27
   }
}
```

Save the object to the database:

```java
{
   "action":"change",
   "params":{
      "281474976710757":{
         "Firstname":"peter",
         "Lastname":"jones",
         "Jobtitle":"sales",
         "Department":"sales",
         "DateOfBirth":-315622800000
      }
   },
   "context":[
   ],
   "profiledata":{
      "204ee6970d53960":18
   }
}
```

Commit the updates to the database:

```java
{"action":"commit","params":{"guid":"281474976710757"},"context":[],"profiledata":{"204ee6e9b5eddc0":25&#125;&#125;
```

The commit will cause the Mendix Runtime to save the object to the RDBMS. Before the commit, the data is only kept in the Mendix Runtime to optimize performance and minimize impact on the database.

```sql
 INSERT INTO "myfirstmodule$employee" ("id",
 "firstname",
 "dateofbirth",
 "jobtitle",
 "department",
 "lastname")
 VALUES (?,
 ?,
 ?,
 ?,
 ?,
 ?)
```

### 3.3 Edit an Existing Object

The typical edit-existing-object flow consists of these steps:

1. Select an object in a table of objects page (overview page).
2. Get the edit form (if not already cached by the browser).
3. Show object values already available in the browser in the form.
4. Save the changed attributes of the object to the Mendix Runtime.
5. Retrieve the object from the database.
6. Validate the object changes.
7. Commit the changes in the database.

![](attachments/19202918/19399032.png)

Save the changes to the database:

```java
{"action":"change","params":{"281474976710757":{"Firstname":"peter1"&#125;&#125;,"context":[],"profiledata":{"204ee8bb633f9a0":25&#125;&#125;
```

This will trigger the following actions on the database:

*   Get the original object from the database
*   Update the attribute changed by the user in the Runtime

The first step is required to determine all the data business logic and validations defined on the entity.

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 WHERE "myfirstmodule$employee"."id" = (281474976710857)
```

If all validations run correctly, the client can commit the changes to the database:

```java
{"action":"commit","params":{"guid":"281474976710757"},"context":[],"profiledata":{"204ee8ca8f775a0":20&#125;&#125;
```

This will trigger the actual database update and commit.

```sql
 UPDATE "myfirstmodule$employee"
 SET "dateofbirth" = ?
 WHERE "id" = ?
```

### 3.4 Delete an Existing Object

The typical delete flow consists of these steps:

1. Select an object in a table of objects (overview page).
2. Send a delete request to the Mendix Runtime.
3. Mendix Runtime validates the delete request.
4. Mendix Runtime deletes object from database.
5. Commit the changes in the database.
6. Inform the client that the delete has succeeded.
7. Refresh the data and update page.

The following sequence diagram outlines the typical delete scenario:

![](attachments/19202918/19399033.png)

Delete the object:

```java
{"action":"delete","params":{"guids":["281474976710757"]},"context":[],"profiledata":{"204eeae128284c0":323&#125;&#125;
```

Get the object to enable the running of business logic, rules, and events before the actual deletion of the data:

```sql
 SELECT "myfirstmodule$employee"."id",
 "myfirstmodule$employee"."firstname",
 "myfirstmodule$employee"."dateofbirth",
 "myfirstmodule$employee"."jobtitle",
 "myfirstmodule$employee"."department",
 "myfirstmodule$employee"."lastname"
 FROM "myfirstmodule$employee"
 WHERE "myfirstmodule$employee"."id" = (281474976710857)
```

Delete the object from database:

```sql
DELETE FROM "myfirstmodule$employee"
WHERE "id" = ?
```

Refesh the data grid:

```java
{"action":"retrieve_by_xpath","params":{"xpath":"//MyFirstModule.Employee","schema":{"id":"a2916c7c-af2f-4267-a8e9-99604f045861","offset":0,"sort":[["Firstname","asc"]],"amount":20},"count":true,"aggregates":false},"context":[],"releaseids":["281474976710757"],"profiledata":{"204eeb2972550c0":28&#125;&#125;
```

## 4 Executing Business Logic

The business logic is modeled using microflows in Mendix. The following sections present some typical  flows involving microflows.

### 4.1 Displaying the Grid of Data Retrieved by Microflow

A data grid on a page is often directly linked to an entity in the domain model. An alternative approach is to use a microflow to create a list of objects to be displayed in a data grid.

A microflow retrieving all objects from an entity can be modeled as follows:

![](attachments/19202918/19399034.png) 

In this situation, all objects are transported to the browser in one request. A user can page through all the objects without triggering communication to the Mendix Runtime.

A high-level sequence diagram for this scenario looks like this:

![](attachments/19202918/19399035.png)

JSON action executed from Mendix Client to Mendix Runtime:

```java
{"action":"executeaction","params":{"actionname":"MyFirstModule.GetAllEmployees","applyto":"none"},"context":[],"profiledata":{"204f418ba05e7c0":55&#125;&#125;
```

SQL statement executed on the database:

```sql
SELECT "myfirstmodule$employee"."id",
"myfirstmodule$employee"."firstname",
"myfirstmodule$employee"."dateofbirth",
"myfirstmodule$employee"."jobtitle",
"myfirstmodule$employee"."department",
"myfirstmodule$employee"."lastname"
FROM "myfirstmodule$employee"
```

Response from the Mendix Runtime to the Mendix Client:

```java
{"actionResult":[{"objectType":"MyFirstModule.Employee","guid":"281474976710657","attributes":{"Firstname":{"value":"piet"},"DateOfBirth":{"value":476406000000},"Jobtitle":{"value":"consultant"},"Department":{"value":"expert services"},"Lastname":{"value":"jansen"&#125;&#125;},{"objectType":"MyFirstModule.Employee","guid":"281474976710957","attributes":{"Firstname":{"value":"wee"},"DateOfBirth":{"value":1454886000000},"Jobtitle":{"value":"ewji"},"Department":{"value":"wew"},"Lastname":{"value":"ewfeew"&#125;&#125;},{"objectType":"MyFirstModule.Employee","guid":"281474976710958
…
}]}
```

## 5 Mendix Runtime Internals

As can be seen in the description of the CRUD scenario, the Mendix Platform ensures efficiency while running the application in a number of ways:

*   Only data required for user actions is involved in communication and processing
*   An efficient transport protocol is used when communicating between different processes
	* Terse JSON format between Mendix Client and Mendix Runtime
	* Native SQL protocol for RDBMS communication
*   Data already available in the Mendix Client is reused if possible (see the edit scenario where the data fetched for the data grid is reused in the edit form)

### 5.1 Data Transformation

Data is transported between Mendix Client and database as required. The following transformation are applied when going full circle from Mendix Client to database and back again:

*   Data entered by a user in a form is stored in JavaScript objects
*   For communication to the Mendix Runtime, JavaScript objects are serialized to JSON
*   The Mendix Runtime transforms the JSON objects to java MxObjects
*   MxObject properties are bound to SQL statement parameters as needed by SQL queries
*   JDBC result set data is transformed to MxObjects
*   MxObjects are serialized to JSON when send to the Mendix Client

### 5.2 State

To facilitate (horizontal) scalability, the Mendix Platform minimizes the state kept in the Mendix Runtime memory. The overall strategy is to only have dirty objects in memory, and other objects are cleaned up at the end of a request. Objects are considered dirty if they have been changed, but the changes have not yet been persisted to the RDBMS. The state is maintained per session.

![](attachments/19202918/19399036.png)

### 5.3 Persistency

Mendix automatically takes care of the translation of an application-specific entity model (domain model) to a technical RDBMS specific ER-model. As illustrated in the read part of the CRUD scenarios, data retrieval is expressed by an XPath construct that is easy to understand. For example, to retrieve all employee objects, the following XPath can be used:

`//MyFirstModule.Employee`

This XPath expression is processed in a number of steps to a database query:

1. XPath is translated to an internal OQL syntax. OQL is similar to SQL, but still expresses application data in terms of the application domain model entities, instead of technical tables.
2. Additional required expressions are added to the OQL statement as specified in the domain model (for example, to add information from a superclass entity).
3. Domain model security constraints are applies to the OQL statement.
4. OQL is translated to SQL and executed through JDBC on the configured RDBMS.

### 5.4 Scalability

The Mendix Runtime can run as a single process, or it can be horizontally scaled to facilitate more concurrent users and improve availability. In this scenario, multiple Mendix Modeler instances are running. These instances run independently, there will not be any communication between the processes.

#### 5.4.1 Single Instance

Within a single instance, the Scala Akka actor model is used to handle all processing in the Mendix Runtime efficiently. Using an actor model for concurrency has this benefit:  The number of concurrent users that can be processed is not limited by the amount of threads available, as threads are not allocated per request, but rather by processing responsibility

To process Mendix Client requests received by the Mendix Runtime, the actions required are dispatched to an Akka actor. This actor has a dedicated thread pool. Every (microflow) action is handled by a separate message to the action dispatcher actor. This optimizes usage of threads for blocking actions. For example, if an action part of a microflow calls an external web service and is blocked waiting for a response, this only impacts the threadpool for the action dispatcher, not for the HTTP request handler.

#### 5.4.1 Multi-Instance

When running in a horizontally scaled scenario, Mendix Runtime state is coordinated via a Redis statestore. At the end of every request, all the dirty objects of a session are written to the Redis statestore. At the start of a new request, this state is read from the Redis statestore.

![](attachments/19202918/19399037.png)
