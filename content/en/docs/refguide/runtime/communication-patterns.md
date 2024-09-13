---
title: "Communication Patterns in the Mendix Runtime"
linktitle: "Communication Patterns"
url: /refguide/communication-patterns/
weight: 50
description: "Outlines the communication patterns used by the Mendix Runtime environment for some typical application use cases."
---

## Introduction

This document outlines the communication patterns used by the Mendix Runtime environment for some typical application use cases.

The goals of this document are to present information for:

* assessing the quality of the Mendix Runtime regarding efficiency of communication
* determining the impact of their design decisions on communication efficiency and performance

## Outline of Communication Within the Mendix Runtime

The Mendix Platform consists of the following components:

* Mendix Platform – a completely integrated application platform-as-a-service (aPaaS) for designing, building, deploying, and managing apps
* Mendix Portal – a web-based collaborative environment for designing, developing, and deploying apps, managing users and environments, deploying apps to the cloud with a single click, and managing and monitoring their performance
* Marketplace – a portal with hundreds of publicly-available building blocks to speed up app development
* Mendix Studio Pro – the modeling studio of the Mendix platform
* Team Server – a central repository for managing application model versions
* Mendix Runtime – runs applications using a server part (the [Runtime Server](/refguide/runtime-server/)) and a client part ([Mendix Client](/refguide/mendix-client/))
* Build – a process which creates deployment packages from artifacts such as models, style sheets, and custom Java classes
* MxID – a user management and provisioning service that applies the OpenID standard

The focus of this document is on the Mendix Runtime, more specifically the collaboration between the following parts:

* [Mendix Client](/refguide/mendix-client/) – a React, React Native, or JavaScript client running on the device of a user
* [Runtime Server](/refguide/runtime-server/) – a Java/Scala runtime running on a server, responsible for executing microflow logic, business rules, and persisting objects
* database – where the data is persisted

Communication between these components operates as follows:

* The Mendix Client issues two types of requests:
    * Static resources like pages, stylesheets, widgets, images, etc.
    * Application data-related communication, which includes CRUD commands on data and logic that may require data. These are executed using [Runtime Operations](#RO).
* The Runtime Server communicates with different (relational) databases using SQL statements handled by a JDBC library
    * Application data is stored in an ER-model in an database

## Runtime Operations {#RO}

Data-related communication between the Mendix Client and the Runtime Server is controlled by Runtime Operations over a REST-like protocol. This uses the `/xas` [request handler](/refguide/request-handlers/) of the app's runtime server.

For every data-related Client action, there is a corresponding Runtime Operation type:

* Create - creates new objects or variables.
* Retrieve - retrieves an object or list of objects.
* Rollback - undoes changes.
* Commit - commits objects and updates them if there are changes.
* CallMicroflow - executes a microflow.

The above operations are requested by the Client and are executed by the Runtime.

During building, Studio Pro analyzes your application. All data-related Client actions used in pages, widgets, or nanoflows are registered in the Runtime registry as a Runtime Operation.

A registration of the Runtime Operation has the following properties:

| Property             | Explanation                                                  |
|----------------------|--------------------------------------------------------------|
| Unique ID            | For every individual Runtime Operation, an unique ID is generated. |
| Type                 | The generic type of Runtime Operation, e.g. “create” |
| Constants            | Any constant specific to the Runtime Operation type, e.g. the entity name for “create”. |
| Parameters           | Which parameters are expected and what should be their type, e.g. the attribute values of the entity for “create” |
| Allowed module roles | Only these users with an allowed module is able to execute the operation, e.g. “User” and “Admin”. |

After all Runtime Operations are registered, they are exported to the Client. Within the Client, the Runtime Operation ID and its parameters are stored at the locations where they are utilized.

| Property             | Explanation                                                  |
|----------------------|--------------------------------------------------------------|
| Runtime Operation ID | The unique ID                                                |
| Parameters           | The parameters that the Runtime Operation expects for its operation. |

Because we are only exporting the ID and the parameters, it is harder for outsiders to understand what data is being requested. Additionally, only the CRUD commands registered as a Runtime Operation with the corresponding ID can be executed. This architecture enhances the security of your application.

When a request is submitted from the Client to the Runtime, the Runtime Operation ID is matched to the corresponding Runtime Operation in the registry. The Runtime Operation is then executed, and its response is sent back to the Client.

## Basic CRUD Communication Pattern{#crud}

The core of most Mendix applications involves variations on the CRUD (create, read, update, and delete) pattern on data stored in Mendix entities.

A basic scenario using an *Employee* entity can be modeled in Mendix using the following two pages:

* An overview page displaying a table of data for a specific entity, like this:
    {{< figure src="/attachments/refguide/runtime/communication-patterns/19399028.png" class="no-border" >}}
* A details page where a specific object of an entity can be edited, like this:
    {{< figure src="/attachments/refguide/runtime/communication-patterns/19399029.png" class="no-border" >}}
    * This details page can be reached from the first page using the New and Edit buttons

The following sections outline the actions involved when processing these pages. As stated earlier, this pattern can be seen in many Mendix applications, but the exact runtime result depends on many details and design decisions taken while building the application. More advanced data models and pages will result in more (and more complex) queries.

### Read the Objects Required to Display a Datagrid

Displaying a list of objects in a data grid consists of the following steps:

1. Getting the definition of the page (which may already be cached).
2. Getting the data to be displayed in the page.
3. Updating the page.

A basic sequence diagram looks like this:

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399030.png" class="no-border" >}}

The following example shows what a Runtime Operation request to retrieve objects from the Employee entity looks like:

```json
{
  "action": "runtimeOperation",
  "operationId": "reyg/iaSXkaXmyztuaHbsA",
  "params": {},
  "options": {
    "offset": 0,
    "amount": 20,
    "sort": [],
    "wantCount": true,
    "extraXpath": ""
  },
  "changes": {},
  "objects": [],
}
```

The action property indicates to the Runtime that the request is for a Runtime Operation, as specified by the `operationId` property.

The Runtime queries its registry to locate any Runtime Operation associated with the ID `reyg/iaSXkaXmyztuaHbsA` In this instance, it identifies an operation type "Retrieve."

Under the params section, parameters can be transmitted to the Runtime if required. In this example, no parameters are necessary.

As indicated, the majority of the information concerning the Runtime Operation is maintained internally within the Runtime. This approach minimizes the amount of data transmitted in the client's request, thereby enhancing security. However, this can also make in debugging the application more difficult.

To assist with debugging, you can set the `IDResolution` log node to 'debug'. This log node records every time a new Runtime Operation ID is resolved to its corresponding Runtime Operation. It includes the stored registration details and any parameter inputs received from the Client.

Additionally, the Runtime Registry is stored in the app's deployment directory under `model/operations.json` for debugging purposes.

For our retrieve operation, it looks as follows:

```json
{
    "constants": {
        "UsedAttributes": [
            "MyFirstModule.Employee/MyFirstModule.Employee.Firstname",
            "MyFirstModule.Employee/MyFirstModule.Employee.Lastname",
            "MyFirstModule.Employee/MyFirstModule.Employee.Jobtitle",
            "MyFirstModule.Employee/MyFirstModule.Employee.Department",
            "MyFirstModule.Employee/MyFirstModule.Employee.DateOfBirth"
        ],
        "XPath": "//MyFirstModule.Employee",
        "UsedAssociations": [],
        "PageName": "MyFirstModule.Employee_Overview",
        "WidgetName": "MyFirstModule.Employee_Overview.dataGrid2_1"
    },
    "id": "reyg/iaSXkaXmyztuaHbsA",
    "parameters": {},
    "type": "retrieve"
}
```

As seen above, the following constants are stored for the "Retrieve" operation: 

* UsedAttributed - lists all the attributes retrieved from the entity.
* XPath - specifies the XPath Constraint used for retrieving the data, in this instance targeting all "Employee" entities.
* UsedAssociations - enumerates all associations of the entity, which are nonexistent in this case.
* PageName - indicates the name of the page where the retrieve operation is utilized.
* WidgetName - since the data retrieval is performed by a widget, the name of the widget is recorded.

Additionally, the ID of the Runtime Operation, the parameters (none are required for the retrieve operation), and the operation type are logged.

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
    "changes": {},
    "commits": [],
    "committedObjectsOmitted": false,
    "count": 2,
    "deletes": [],
    "extraGuids": [],
    "hasMoreItems": false,
    "newpersistable": [],
    "objects": [],
    "partialObjects": [
        {
            "objectType": "MyFirstModule.Employee",
            "guid": "11540474045137130",
            "attributes": {
                "Department": {
                    "value": "Sales"
                },
                "Jobtitle": {
                    "value": "Sales Executive"
                },
                "Firstname": {
                    "value": "Peter"
                },
                "Lastname": {
                    "value": "Jones"
                },
                "DateOfBirth": {
                    "value": 867189600000
                }
            }
        },
        {
            "objectType": "MyFirstModule.Employee",
            "guid": "11540474045137256",
            "attributes": {
                "Department": {
                    "value": "Finance"
                },
                "Jobtitle": {
                    "value": "Accountant"
                },
                "Firstname": {
                    "value": "Elisa"
                },
                "Lastname": {
                    "value": "Walkers"
                },
                "DateOfBirth": {
                    "value": 454629600000
                }
            }
        }
    ],
    "resets": {},
    "resultGuids": [
        "11540474045137130",
        "11540474045137256"
    ]
}
```

### Create New Object

The typical create-new-object flow consists of these steps:

1. Create a new object (the primary key is generated by the database).
2. Display the Edit/New page (which may already be cached).
3. Change and commit the updated object in the Runtime Server.

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399031.png" class="no-border" >}}

Create a new object:

```json
{
    "action": "runtimeOperation",
    "operationId": "ntjTpU3TgkGh/QiiBMR1PQ",
    "params": {},
    "changes": {},
    "objects": []
}
```

Which resolves to the following in the Runtime:

```json
{
    "constants": {
        "ObjectType": "MyFirstModule.Employee"
    },
    "id": "ntjTpU3TgkGh/QiiBMR1PQ",
    "parameters": {},
    "type": "create"
}
```

Change and commit the updates to the database:

```json
{
    "action": "runtimeOperation",
    "operationId": "EjuFdBJ7EUC93YSYtlb7Mg",
    "params": {
        "Objects": {
            "guids": [
                "11540474045150458"
            ]
        }
    },
    "changes": {
        "11540474045150458": {
            "Firstname": {
                "value": "Peter"
            },
            "Lastname": {
                "value": "Jones"
            },
            "Jobtitle": {
                "value": "Sales Executive"
            },
            "Department": {
                "value": "Sales"
            },
            "DateOfBirth": {
                "value": 674863200000
            }
        }
    },
    "objects": [
        {
            "objectType": "MyFirstModule.Employee",
            "guid": "11540474045150458",
            "attributes": {
                "Department": {
                    "value": null
                },
                "Jobtitle": {
                    "value": null
                },
                "Firstname": {
                    "value": null
                },
                "Lastname": {
                    "value": null
                },
                "DateOfBirth": {
                    "value": null
                }
            },
            "hash": "r6PDyFGEXK98NSmSniNLQBzuyodENJpD4x/6Y/QCoy4="
        }
    ]
}
```

Which is resolved in the Runtime to:

```json
{
    "constants": {},
    "id": "EjuFdBJ7EUC93YSYtlb7Mg",
    "parameters": {
        "Objects": [
            "AnyObjectList"
        ]
    },
    "type": "commit"
}
```

The commit will cause the Runtime Server to save the object to the database. Before the commit, the data is only kept in the client. This optimizes performance and minimizes the impact on the runtime and the database.

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
4. Change and validate the changed attributes of the object in the Runtime Server.
5. Retrieve the object from the database.
6. Validate the object changes.
7. Commit the changes to the database.

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399032.png" class="no-border" >}}

Change and validate the changed attributes of the object in the Runtime Server:

```json
{
    "action": "runtimeOperation",
    "operationId": "EjuFdBJ7EUC93YSYtlb7Mg",
    "params": {
        "Objects": {
            "guids": [
                "11540474045137256"
            ]
        }
    },
    "changes": {
        "11540474045137256": {
            "Firstname": {
                "value": "Ellie"
            }
        }
    },
    "objects": [],
}
```

In the Runtime this resolves to:

```json
{
    "constants": {},
    "id": "EjuFdBJ7EUC93YSYtlb7Mg",
    "parameters": {
        "Objects": [
            "AnyObjectList"
        ]
    },
    "type": "commit"
}
```

This will trigger the following actions on the database:

* Get the original object from the database
* Update the attribute (or attributes) changed by the user in the Runtime Server

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

If all validations run correctly, the actual database will be triggered to update and commit.

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

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399033.png" class="no-border" >}}

Delete the object:

```json
{
    "action": "runtimeOperation",
    "operationId": "FrPcy03Wm0u/u3QdXKqw6Q",
    "params": {
        "Objects": {
            "guids": [
                "11540474045149887"
            ]
        }
    },
    "changes": {},
    "objects": [],
}
```

In the Runtime:

```json
{
    "constants": {},
    "id": "FrPcy03Wm0u/u3QdXKqw6Q",
    "parameters": {
        "Objects": [
            "[MyFirstModule.Employee]"
        ]
    },
    "type": "delete"
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

Request from the client to refresh the data grid:

```json
{
    "action": "runtimeOperation",
    "operationId": "d7OowNqyCU+2ZqE2+Fv6rg",
    "params": {},
    "options": {
        "offset": 0,
        "amount": 20,
        "sort": [],
        "wantCount": true,
        "extraXpath": ""
    },
    "changes": {},
    "objects": [],
    "profiledata": {
        "1714641974355-33": 158
    }
}
```

Which resolves to the following in the Runtime:

Runtime:

```json
{
    "constants": {
        "UsedAttributes": [
            "MyFirstModule.Employee/MyFirstModule.Employee.Firstname",
            "MyFirstModule.Employee/MyFirstModule.Employee.Lastname",
            "MyFirstModule.Employee/MyFirstModule.Employee.Jobtitle",
            "MyFirstModule.Employee/MyFirstModule.Employee.Department",
            "MyFirstModule.Employee/MyFirstModule.Employee.DateOfBirth"
        ],
        "XPath": "//MyFirstModule.Employee",
        "UsedAssociations": [],
        "PageName": "MyFirstModule.Employee_Overview",
        "WidgetName": "MyFirstModule.Employee_Overview.dataGrid2_1"
    },
    "id": "d7OowNqyCU+2ZqE2+Fv6rg",
    "parameters": {},
    "type": "retrieve"
}
```

### Security Issues{#security}

The security model of Mendix ensures that attributes that the user cannot see are never transferred to the client. This means that changes made in the Runtime Server (for example, in a microflow) to an attribute that the user cannot see will not be persisted if an object is sent to the Mendix Client without being committed to the database. See the blog post [Transient attributes and access rights - be careful](https://gandy84.medium.com/transient-attributes-and-access-rights-be-careful-mendix-and-me-57cf0aa1c98e) published on *Medium* for a deeper discussion of this.

<!-- Diagram created here:
https://www.plantuml.com/plantuml/uml/ZL9DRzD04BtxLmpD6QajAX8zL7NY-5IaYd3CPUATn4Fsm-pE9WJ2VySV8Tv64U9axvitRzxEs-SWw2KQdRsJcWp1IaVQU3naOSksGOy6LbXjDzv5gsPEEm-JVSr22I7GzqYs8lYLvPKuNpeh9-hjnuTYce_mWdyItDzckVTkVy7fe3Fdxdu4hcXDdLVaXq91r2osXwcEbBtmcbxOKbgVv1_c3-Lqh2NtIUklw8KhRj1AOlK2lZ3pEyFE3iH07JZBf-Mdh1axuEOpMSK_OAQPhDm01gZwt_FOD-mlqGeRWWNv7VcU7lfVc1HtvNrPlA4NABZ2G32PjtFBUTRRUF_qz7V68tprlDcqOEK9XPq5jmPBUt2hRrH9vvvtA7Hgo8PFBp7C7HKCLzwjjTk3k46E4gMbNP10S8O0HJoleb0OvGUnRFWaygt3l6dqeJrMqRCSm4TDOMddfcaFKgToxH6bnxfxBgroBMQTG8qx0gmg2Yt7ZLEIFIp8gfDhTRQyPwbT72HhLefiQbxHXVrqEp7qvWiEZSR3MV5I1NXmg0OUgNz45737TjC597MosYkXmFLKEWNgcizsNZ44K2W8Q-_CwH6c5nka_okdBb_gKqaJSQ1eZL4Bx5172adh-3mVOUQCORcoqkFnc3sJLT7eFm00
-->

{{< figure src="/attachments/refguide/runtime/communication-patterns/attribute-security.png" class="no-border" >}}

## Executing Business Logic

The business logic is modeled using microflows in Mendix. The following sections present some typical flows involving microflows.

### Displaying the Grid of Data Retrieved by Microflow

A data grid on a page is often directly linked to an entity in the domain model. An alternative approach is to use a microflow to create a list of objects to be displayed in a data grid.

A microflow retrieving all objects from an entity can be modeled as follows:

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399034.png" class="no-border" >}} 

In this situation, all objects are transported to the browser in one request. A user can page through all the objects without triggering communication to the Runtime Server.

A high-level sequence diagram for this scenario looks like this:

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399035.png" class="no-border" >}}

JSON action executed from Mendix Client to Runtime Server:

```json
{
    "action": "runtimeOperation",
    "operationId": "5i0E8lZXMFaIhjn/9ZdEYA",
    "params": {},
    "validationGuids": [],
    "changes": {},
    "objects": [],
}
```

In the Runtime:

```json
{
    "constants": {
        "MicroflowName": "MyFirstModule.GetAllEmployees"
    },
    "id": "5i0E8lZXMFaIhjn/9ZdEYA",
    "parameters": {},
    "type": "callMicroflow"
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
    "actionResult": {
        "type": "ObjectReferenceSet",
        "value": [
            "11540474045137130",
            "11540474045137256",
            "11540474045150458"
        ]
    },
    "changes": {},
    "commits": [],
    "committedObjectsOmitted": false,
    "deletes": [],
    "newpersistable": [],
    "objects": [
        {
            "objectType": "MyFirstModule.Employee",
            "guid": "11540474045137130",
            "attributes": {
                "Department": {
                    "value": "Sales"
                },
                "Jobtitle": {
                    "value": "Sales Executive"
                },
                "Firstname": {
                    "value": "Peter"
                },
                "Lastname": {
                    "value": "Jones"
                },
                "DateOfBirth": {
                    "value": 867189600000
                }
            }
        },
        {
            "objectType": "MyFirstModule.Employee",
            "guid": "11540474045137256",
            "attributes": {
                "Department": {
                    "value": "Finance"
                },
                "Jobtitle": {
                    "value": "Accountant"
                },
                "Firstname": {
                    "value": "Ellie"
                },
                "Lastname": {
                    "value": "Walkers"
                },
                "DateOfBirth": {
                    "value": 454629600000
                }
            }
        }
    ],
    "resets": {}
}
```

## Mendix Runtime Internals

As can be seen in the description of the CRUD scenario, the Mendix Platform ensures efficiency while running the application in a number of ways:

* Only data required for user actions is involved in communication and processing
* An efficient transport protocol is used when communicating between different processes
    * Terse JSON format between Mendix Client and Runtime Server
    * Native SQL protocol for database communication
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

To facilitate (horizontal) scalability, the Mendix Runtime retains no state between requests. The overall strategy is to only have dirty objects in memory during a request. Objects are considered dirty if they have been changed, but the changes have not yet been persisted to the database.

{{< figure src="/attachments/refguide/runtime/communication-patterns/19399036.png" class="no-border" >}}

### Persistency

Mendix automatically takes care of the translation of an application-specific entity model (domain model) to a technical database specific ER-model. As illustrated in the read part of the CRUD scenarios, data retrieval is expressed by an XPath construct that is easy to understand. For example, to retrieve all employee objects, the following XPath can be used:

`//MyFirstModule.Employee`

This XPath expression is translated in a number of steps to a database query:

1. XPath is translated to an internal OQL syntax. OQL is similar to SQL, but still expresses application data in terms of the application domain model entities, instead of actual database tables.
2. Additional required expressions are added to the OQL statement as specified in the domain model (for example, to add information from a superclass entity).
3. Domain model security constraints are applied to the OQL statement.
4. OQL is translated to SQL and executed through JDBC on the configured database.

### Scalability

The Runtime Server can run as a single process, or it can be horizontally scaled to facilitate more concurrent users and improve availability. In this scenario, multiple Mendix Studio Pro instances are running. These instances run independently, there will not be any communication between the processes.

#### Multi-Instance

Mendix Runtime state is stored in the Mendix Client. This means that, when running in a horizontally scaled scenario, all instances run behind a load balancer and requests are sent to whichever instance is available.
