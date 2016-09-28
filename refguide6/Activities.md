---
title: "Activities"
parent: "Microflows"
---


Activities represent the actions that are executed in a microflow.

The following types of activities are available:

## Object Activitities

Object activities can be used to create and manipulate objects. The [domain model](Domain+Model) defines the object types ([entities](Entities)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918013.png)](Cast+Object) | [Cast Object](Cast+Object) | Cast Object can be used in combination with an [inheritance split](Inheritance+Split) to use the [specialized](Entities) members of the object. |
| [![](attachments/819203/917661.png)](Change+Object) | [Change Object](Change+Object) | Change Object can be used to change the members of an object. This can be done with or without commiting and with or without events. |
| [![](attachments/16713769/17661961.png)](Committing+Objects) | [Commit Object(s)](Committing+Objects) | Commit Object(s) can be used to commit the changes to one or more objects. |
| [![](attachments/819203/917756.png)](Create+Object) | [Create Object](Create+Object) | Create Object can be used to create an object. |
| [![](attachments/819203/918191.png)](Deleting+Objects) | [Delete Object(s)](Deleting+Objects) | Delete Object can be used to delete an object. |
| [![](attachments/819203/917866.png)](Retrieve) | [Retrieve](Retrieve) | Retrieve can be used to get one (or more) associated objects of another object. Furthermore the activity can also get one (or more) objects directly from the database. |
| [![](attachments/819203/918119.png)](Rollback+Object) | [Rollback Object](Rollback+Object) | Rollback Object can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore it deletes objects that have been created but have never been committed. |

## List Activitities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918028.png)](Aggregate+List) | [Aggregate List](Aggregate+List) | Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects. |
| [![](attachments/819203/918007.png)](Change+List) | [Change List](Change+List) | Change List can be used to change the content of a list variable. |
| [![](attachments/819203/918009.png)](Create+List) | [Create List](Create+List) | Create List can be used to create a (empty) list variable. |
| [![](attachments/819203/917792.png)](List+Operation) | [List Operation](List+Operation) | List operation can be used to combine or compare two list with objects of the same entity. |

## Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918018.png)](Java+Action+Call) | [Java Action Call](Java+Action+Call) | Java action call can be used to call a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| [![](attachments/819203/918001.png)](Microflow+Call) | [Microflow Call](Microflow+Call) | Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activitities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918011.png)](Change+Variable) | [Change Variable](Change+Variable) | Change Variable can be used to change the value of a variable. |
| [![](attachments/819203/918110.png)](Create+Variable) | [Create Variable](Create+Variable) | Create Variable can be used to create a new variable. |

## Client Activitities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918114.png)](Close+Form) | [Close Form](Close+Form) | Close Form closes the form that is opened last by the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/918108.png)](Download+File) | [Download File](Download+File) | Download File can be used to enable the browser to download a specific file. The user, that calls the microflow where this activity is used in, gets a download popup or the file is shown directly in the browser. |
| [![](attachments/819203/918099.png)](Show+Message) | [Show Message](Show+Message) | Show Message can be used to show a blocking or non-blocking message to the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/917544.png)](Show+Page) | [Show Page](Show+Page) | Show Form can be used to show a form to the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/918097.png)](Validation+Feedback) | [Validation Feedback](Validation+Feedback) | Validation feedback can be used to display a red text below a widget that displays an attribute or association. |
| ![](attachments/16713769/17661963.png) | [Show Home page](Show+Home+Page) | Show Home Page can be used to navigate to the home page for the current user. |

## Integration Activitities

See [Integration Microflow Activities](Microflow+Activities).

## Document Generation Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918124.png)](Generate+Document) | [Generate Document](Generate+Document) | Generate Document can be used to create a document of a certain type based on a [template](Document+Templates). |
