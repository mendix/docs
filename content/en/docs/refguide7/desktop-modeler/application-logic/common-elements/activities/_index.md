---
title: "Activities"
url: /refguide7/activities/
parent: "common-elements"
---

Activities represent the actions that are executed in a microflow.

The following types of activities are available:

## Object Activitities

Object activities can be used to create and manipulate objects. The [domain model](/refguide7/domain-model/) defines the object types ([entities](/refguide7/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918013.png)](/refguide7/cast-object/) | [Cast object](/refguide7/cast-object/) | Cast object can be used in combination with an [inheritance split](/refguide7/inheritance-split/) to use the [specialized](/refguide7/entities/) members of the object. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917661.png)](/refguide7/change-object/) | [Change object](/refguide7/change-object/) | Change object can be used to change the members of an object. This can be done with or without commiting and with or without events. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/17661961.png)](/refguide7/committing-objects/) | [Commit object(s)](/refguide7/committing-objects/) | Commit object(s) can be used to commit the changes to one or more objects. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917756.png)](/refguide7/create-object/) | [Create object](/refguide7/create-object/) | Create object can be used to create an object. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918191.png)](/refguide7/deleting-objects/) | [Delete object(s)](/refguide7/deleting-objects/) | Delete object can be used to delete an object. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917866.png)](/refguide7/retrieve/) | [Retrieve](/refguide7/retrieve/) | Retrieve can be used to get one (or more) associated objects of another object. Furthermore the activity can also get one (or more) objects directly from the database. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918119.png)](/refguide7/rollback-object/) | [Rollback object](/refguide7/rollback-object/) | Rollback object can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore it deletes objects that have been created but have never been committed. |

## List Activitities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918028.png)](/refguide7/aggregate-list/) | [Aggregate list](/refguide7/aggregate-list/) | Aggregate list can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918007.png)](/refguide7/change-list/) | [Change list](/refguide7/change-list/) | Change list can be used to change the content of a list variable. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918009.png)](/refguide7/create-list/) | [Create list](/refguide7/create-list/) | Create list can be used to create a (empty) list variable. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917792.png)](/refguide7/list-operation/) | [List operation](/refguide7/list-operation/) | List operation can be used to combine or compare two list with objects of the same entity. |

## Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918018.png)](/refguide7/java-action-call/) | [Java Action call](/refguide7/java-action-call/) | Java Action call can be used to call a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918001.png)](/refguide7/microflow-call/) | [Microflow call](/refguide7/microflow-call/) | Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activitities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918011.png)](/refguide7/change-variable/) | [Change variable](/refguide7/change-variable/) | Change variable can be used to change the value of a variable. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918110.png)](/refguide7/create-variable/) | [Create variable](/refguide7/create-variable/) | Create variable can be used to create a new variable. |

## Client Activitities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918114.png)](/refguide7/close-page/) | [Close page](/refguide7/close-page/) | Close page closes the pagethat is opened last by the user that calls the microflow where this activity is used in. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918108.png)](/refguide7/download-file/) | [Download file](/refguide7/download-file/) | Download file can be used to enable the browser to download a specific file. The user, that calls the microflow where this activity is used in, gets a download popup or the file is shown directly in the browser. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918099.png)](/refguide7/show-message/) | [Show message](/refguide7/show-message/) | Show message can be used to show a blocking or non-blocking message to the user that calls the microflow where this activity is used in. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917544.png)](/refguide7/show-page/) | [Show page](/refguide7/show-page/) | Show page can be used to show a page to the user that calls the microflow where this activity is used in. |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918097.png)](/refguide7/validation-feedback/) | [Validation feedback](/refguide7/validation-feedback/) | Validation feedback can be used to display a red text below a widget that displays an attribute or association. |
| ![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/17661963.png) | [Show home page](/refguide7/show-home-page/) | Show home Page can be used to navigate to the home page for the current user. |

## Integration Activitities

See [Microflow Activities](/refguide7/microflow-activities/).

## Document Generation Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918124.png)](/refguide7/generate-document/) | [Generate document](/refguide7/generate-document/) | Generate document can be used to create a document of a certain type based on a [template](/refguide7/document-templates/). |
