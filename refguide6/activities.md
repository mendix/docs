---
title: "Activities"
space: "Reference Guide 6"
parent: "microflows"
---


Activities represent the actions that are executed in a microflow.

The following types of activities are available:

## Object Activitities

Object activities can be used to create and manipulate objects. The [domain model](/refguide6/domain-model) defines the object types ([entities](/refguide6/entities)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918013.png)](/refguide6/cast-object) | [Cast Object](/refguide6/cast-object) | Cast Object can be used in combination with an [inheritance split](/refguide6/inheritance-split) to use the [specialized](/refguide6/entities) members of the object. |
| [![](attachments/819203/917661.png)](/refguide6/change-object) | [Change Object](/refguide6/change-object) | Change Object can be used to change the members of an object. This can be done with or without commiting and with or without events. |
| [![](attachments/16713769/17661961.png)](/refguide6/committing-objects) | [Commit Object(s)](/refguide6/committing-objects) | Commit Object(s) can be used to commit the changes to one or more objects. |
| [![](attachments/819203/917756.png)](/refguide6/create-object) | [Create Object](/refguide6/create-object) | Create Object can be used to create an object. |
| [![](attachments/819203/918191.png)](/refguide6/deleting-objects) | [Delete Object(s)](/refguide6/deleting-objects) | Delete Object can be used to delete an object. |
| [![](attachments/819203/917866.png)](/refguide6/retrieve) | [Retrieve](/refguide6/retrieve) | Retrieve can be used to get one (or more) associated objects of another object. Furthermore the activity can also get one (or more) objects directly from the database. |
| [![](attachments/819203/918119.png)](/refguide6/rollback-object) | [Rollback Object](/refguide6/rollback-object) | Rollback Object can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore it deletes objects that have been created but have never been committed. |

## List Activitities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918028.png)](/refguide6/aggregate-list) | [Aggregate List](/refguide6/aggregate-list) | Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects. |
| [![](attachments/819203/918007.png)](/refguide6/change-list) | [Change List](/refguide6/change-list) | Change List can be used to change the content of a list variable. |
| [![](attachments/819203/918009.png)](/refguide6/create-list) | [Create List](/refguide6/create-list) | Create List can be used to create a (empty) list variable. |
| [![](attachments/819203/917792.png)](/refguide6/list-operation) | [List Operation](/refguide6/list-operation) | List operation can be used to combine or compare two list with objects of the same entity. |

## Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918018.png)](/refguide6/java-action-call) | [Java Action Call](/refguide6/java-action-call) | Java action call can be used to call a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| [![](attachments/819203/918001.png)](/refguide6/microflow-call) | [Microflow Call](/refguide6/microflow-call) | Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activitities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918011.png)](/refguide6/change-variable) | [Change Variable](/refguide6/change-variable) | Change Variable can be used to change the value of a variable. |
| [![](attachments/819203/918110.png)](/refguide6/create-variable) | [Create Variable](/refguide6/create-variable) | Create Variable can be used to create a new variable. |

## Client Activitities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918114.png)](/refguide6/close-form) | [Close Form](/refguide6/close-form) | Close Form closes the form that is opened last by the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/918108.png)](/refguide6/download-file) | [Download File](/refguide6/download-file) | Download File can be used to enable the browser to download a specific file. The user, that calls the microflow where this activity is used in, gets a download popup or the file is shown directly in the browser. |
| [![](attachments/819203/918099.png)](/refguide6/show-message) | [Show Message](/refguide6/show-message) | Show Message can be used to show a blocking or non-blocking message to the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/917544.png)](/refguide6/show-page) | [Show Page](/refguide6/show-page) | Show Form can be used to show a form to the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/918097.png)](/refguide6/validation-feedback) | [Validation Feedback](/refguide6/validation-feedback) | Validation feedback can be used to display a red text below a widget that displays an attribute or association. |
| ![](attachments/16713769/17661963.png) | [Show Home page](/refguide6/show-home-page) | Show Home Page can be used to navigate to the home page for the current user. |

## Integration Activitities

See [Integration Microflow Activities](/refguide6/microflow-activities).

## Document Generation Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918124.png)](/refguide6/generate-document) | [Generate Document](/refguide6/generate-document) | Generate Document can be used to create a document of a certain type based on a [template](/refguide6/document-templates). |
