---
title: "Communication Patterns in the Mendix Runtime"
linktitle: "Communication Patterns"
url: /refguide8/communication-patterns/
---

## Introduction

This document outlines the communication patterns used by the Mendix Runtime environment for some typical application use cases.

The goals of this document are to present information for:

* assessing the quality of the Mendix Runtime regarding efficiency of communication
* determining the impact of their design decisions on communication efficiency and performance

## Outline of Communication Within the Mendix Runtime

The Mendix Platform consists of the following components:

* Mendix Platform – a completely integrated application platform-as-a-service (aPaaS) for designing, building, deploying, and managing apps
* Apps – a web-based collaborative environment for designing, developing, and deploying apps, managing users and environments, deploying apps to the cloud with a single click, and managing and monitoring their performance
* Marketplace – a portal with hundreds of publicly-available building blocks to speed up app development
* Mendix Studio Pro – multi-user modeling studio of the Mendix Platform
* Team Server – a central repository for managing application model versions
* Mendix Runtime – runs applications using a server part (the [Runtime Server](/refguide8/runtime-server/)) and a client part ([Mendix Client](/refguide8/mendix-client/))
* Build – a process which creates deployment packages from artifacts such as models, style sheets, and custom Java classes
* MxID – a user management and provisioning service that applies the OpenID standard

The focus of this document is on the Mendix Runtime, more specifically the collaboration between the following parts:

* [Mendix Client](/refguide8/mendix-client/) – a React, React Native, or JavaScript client running on the device of a user
* [Runtime Server](/refguide8/runtime-server/) – a Java/Scala runtime running on a server, responsible for executing microflow logic, business rules, and persisting objects
* RDBMS – where the data is persisted

Communication between these components operates as follows:

* The Mendix Client issues two types of requests:
    * Static resources like pages, stylesheets, widgets, images, etc.
    * Application data-related communication, which includes CRUD commands on data and logic that may require data
* The Runtime Server communicates with different RDBMSs using SQL statements handled by a JDBC library
    * Application data is stored in an ER-model in an RDBMS

## Basic CRUD Communication Pattern

The core of most Mendix applications involves variations on the CRUD (create, read, update, and delete) pattern on data stored in Mendix entities.

A basic scenario using an *Employee* entity can be modeled in Mendix using the following two pages:

* An overview page displaying a table of data for a specific entity, like this:
    {{< figure src="/attachments/refguide8/runtime/communication-patterns/19399028.png" class="no-border" >}}
* A details page where a specific object of an entity can be edited, like this:
    {{< figure src="/attachments/refguide8/runtime/communication-patterns/19399029.png" class="no-border" >}}
    * This details page can be reached from the first page using the New and Edit buttons

The following sections outline the actions involved when processing these pages. As stated earlier, this pattern can be seen in many Mendix applications, but the exact runtime result depends on many details and design decisions taken while building the application. More advanced data models and pages will result in more (and more complex) queries.

### Read the Objects Required to Display an Object Table

Displaying a table of objects consists of the following steps:

1. Getting the definition of the page (which may already be cached).
2. Getting the data to be displayed in the page.
3. Updating the page.

A basic sequence diagram looks like this:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399030.png" class="no-border" >}}

The Mendix Client uses a REST-like protocol to request data from the Runtime Server. The following example shows what this looks like when requesting objects from the Employee entity:

```json
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
   "context":[],
   "profiledata":{
      "204ee5ad0c056a0":15
   }
}
```

The XPath expression states what data is needed. This can be an object containing data of an entity — or just some attributes of an object — as required by the application.

The schema section can be used to specify additional restrictions on what data is required (what attributes and how many objects). This approach ensures that the amount of data transferred between Runtime Server and Mendix Client is minimized.

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

Depending on the data displayed and the domain model (for example the security applied to objects or attributes, or the usage of inheritance to support generalizations and specializations), a retrieve may result in more queries or additional WHERE clauses.

The response of the Runtime Server to the Mendix Client is as follows:

```json
{
   "count":2,
   "mxobjects":[
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710757",
         "attributes":{
            "Firstname":{"value":"peter1"},
            "DateOfBirth":{"value":-315622800000},
            "Jobtitle":{"value":"sales"},
            "Department":{"value":"sales"},
            "Lastname":{"value":"jones"}
         }
      },
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710657",
         "attributes":{
            "Firstname":{"value":"piet"},
            "DateOfBirth":{"value":476406000000},
            "Jobtitle":{"value":"consultant"},
            "Department":{"value":"expert services"},
            "Lastname":{"value":"jansen"}
         }
      }
   ]
}
```

### Create New Object

The typical create-new-object flow consists of these steps:

1. Instantiate a new object (the primary key is generated by the database, and the Runtime Server keeps a cache of PKS).
2. Display the Edit/New page (which may already be cached).
3. Save the updated object in the Runtime Server.
4. Commit the updated object to the database.

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399031.png" class="no-border" >}}

Create a new object:

```json
{
   "action":"instantiate",
   "params":{
      "objecttype":"MyFirstModule.Employee",
      "preventCache":1455032246146
   },
   "context":[],
   "profiledata":{
      "204ee68c92aea60":27
   }
}
```

Save the object to the database:

```json
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
   "context":[],
   "profiledata":{
      "204ee6970d53960":18
   }
}
```

Commit the updates to the database:

```json
{
   "action":"commit",
   "params":{
      "guid":"281474976710757"
   },
   "context":[],
   "profiledata":{
      "204ee6e9b5eddc0":25
   }
}
```

The commit will cause the Runtime Server to save the object to the RDBMS. Before the commit, the data is only kept in the Runtime Server to optimize performance and minimize impact on the database.

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

### Edit an Existing Object

The typical edit-existing-object flow consists of these steps:

1. Select an object in a table of objects page (overview page).
2. Display the Edit/New page (which may already be cached).
3. Show object values already available in the page displayed by the browser.
4. Save the changed attributes of the object to the Runtime Server.
5. Retrieve the object from the database.
6. Validate the object changes.
7. Commit the changes in the database.

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399032.png" class="no-border" >}}

Save the changes to the database:

```json
{
   "action":"change",
   "params":{
      "281474976710757":{
         "Firstname":"peter1"
      }
   },
   "context":[],
   "profiledata":{
      "204ee8bb633f9a0":25
   }
}
```

This will trigger the following actions on the database:

* Get the original object from the database
* Update the attribute(s) changed by the user in the Runtime

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

```json
{
   "action":"commit",
   "params":{
      "guid":"281474976710757"
   },
   "context":[],
   "profiledata":{
      "204ee8ca8f775a0":20
   }
}
```

This will trigger the actual database update and commit.

```sql
 UPDATE "myfirstmodule$employee"
 SET "dateofbirth" = ?
 WHERE "id" = ?
```

### Delete an Existing Object

The typical delete flow consists of these steps:

1. Select an object in a table of objects (overview page).
2. Send a delete request to the Runtime Server.
3. Runtime Server validates the delete request.
4. Runtime Server deletes object from database.
5. Commit the changes in the database.
6. Inform the client that the delete has succeeded.
7. Refresh the data and update page.

The following sequence diagram outlines the typical delete scenario:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399033.png" class="no-border" >}}

Delete the object:

```json
{
   "action":"delete",
   "params":{
      "guids":["281474976710757"]
   },
   "context":[],
   "profiledata":{
      "204eeae128284c0":323
   }
}
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

Refresh the data grid:

```json
{
   "action":"retrieve_by_xpath",
   "params":{
      "xpath":"//MyFirstModule.Employee",
      "schema":{
         "id":"a2916c7c-af2f-4267-a8e9-99604f045861",
         "offset":0,
         "sort":[["Firstname","asc"]],
         "amount":20
      },
      "count":true,
      "aggregates":false
   },
   "context":[],
   "releaseids":["281474976710757"],
   "profiledata":{
      "204eeb2972550c0":28
   }
}
```
 
## Executing Business Logic

The business logic is modeled using microflows in Mendix. The following sections present some typical flows involving microflows.

### Displaying the Grid of Data Retrieved by Microflow

A data grid on a page is often directly linked to an entity in the domain model. An alternative approach is to use a microflow to create a list of objects to be displayed in a data grid.

A microflow retrieving all objects from an entity can be modeled as follows:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399034.png" class="no-border" >}} 

In this situation, all objects are transported to the browser in one request. A user can page through all the objects without triggering communication to the Runtime Server.

A high-level sequence diagram for this scenario looks like this:

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399035.png" class="no-border" >}}

JSON action executed from Mendix Client to Runtime Server:

```json
{
   "action":"executeaction",
   "params":{
      "actionname":"MyFirstModule.GetAllEmployees",
      "applyto":"none"
   },
   "context":[],
   "profiledata":{
      "204f418ba05e7c0":55
   }
}
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

Response from the Runtime Server to the Mendix Client:

```json
{
   "actionResult":[
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710657",
         "attributes":{
            "Firstname":{"value":"piet"},
            "DateOfBirth":{"value":476406000000},
            "Jobtitle":{"value":"consultant"},
            "Department":{"value":"expert services"},
            "Lastname":{"value":"jansen"}
         }
      },
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710957",
         "attributes":{
            "Firstname":{"value":"wee"},
            "DateOfBirth":{"value":1454886000000},
            "Jobtitle":{"value":"ewji"},
            "Department":{"value":"wew"},
            "Lastname":{"value":"ewfeew"}
         }
      },
      {
         "objectType":"MyFirstModule.Employee",
         "guid":"281474976710958"
         …
      }
      …
   ]
}
```

## Mendix Runtime Internals

As can be seen in the description of the CRUD scenario, the Mendix Platform ensures efficiency while running the application in a number of ways:

* Only data required for user actions is involved in communication and processing
* An efficient transport protocol is used when communicating between different processes
    * Terse JSON format between Mendix Client and Runtime Server
    * Native SQL protocol for RDBMS communication
* Data already available in the Mendix Client is reused if possible (see the edit scenario where the data fetched for the data grid is reused in the Edit/New page)

### Data Transformation

Data is transported between Mendix Client and database as required. The following transformation are applied when going full circle from Mendix Client to database and back again:

* Data entered by a user in a page is stored in JavaScript objects
* For communication to the Runtime Server, JavaScript objects are serialized to JSON
* The Runtime Server transforms the JSON objects to Java MxObjects
* MxObject properties are bound to SQL statement parameters as needed by SQL queries
* JDBC result set data is transformed to MxObjects
* MxObjects are serialized to JSON when send to the Mendix Client

### State

To facilitate (horizontal) scalability, the Mendix Runtime retains no state between requests. The overall strategy is to only have dirty objects in memory during a request. Objects are considered dirty if they have been changed, but the changes have not yet been persisted to the RDBMS.

{{< figure src="/attachments/refguide8/runtime/communication-patterns/19399036.png" class="no-border" >}}

### Persistency

Mendix automatically takes care of the translation of an application-specific entity model (domain model) to a technical RDBMS specific ER-model. As illustrated in the read part of the CRUD scenarios, data retrieval is expressed by an XPath construct that is easy to understand. For example, to retrieve all employee objects, the following XPath can be used:

`//MyFirstModule.Employee`

This XPath expression is translated in a number of steps to a database query:

1. XPath is translated to an internal OQL syntax. OQL is similar to SQL, but still expresses application data in terms of the application domain model entities, instead of actual RDBMS tables.
2. Additional required expressions are added to the OQL statement as specified in the domain model (for example, to add information from a superclass entity).
3. Domain model security constraints are applied to the OQL statement.
4. OQL is translated to SQL and executed through JDBC on the configured RDBMS.

### Scalability

The Runtime Server can run as a single process, or it can be horizontally scaled to facilitate more concurrent users and improve availability. In this scenario, multiple Mendix Studio Pro instances are running. These instances run independently, there will not be any communication between the processes.

#### Single Instance

Within a single instance, the Scala Akka actor model is used to handle all processing in the Runtime Server efficiently. Using an actor model for concurrency has this benefit: The number of concurrent users that can be processed is not limited by the number of threads available, as threads are not allocated per request, but rather by processing responsibility

To process Mendix Client requests received by the Runtime Server, the actions required are dispatched to an Akka actor. This actor has a dedicated thread pool. Every (microflow) action is handled by a separate message to the action dispatcher actor. This optimizes usage of threads for blocking actions. For example, if an action part of a microflow calls an external web service and is blocked waiting for a response, this only impacts the threadpool for the action dispatcher, not for the HTTP request handler.

#### Multi-Instance

Mendix Runtime state is stored in the Mendix Client. This means that, when running in a horizontally scaled scenario, all instances run behind a load balancer and requests are sent to whichever instance is most appropriate.
