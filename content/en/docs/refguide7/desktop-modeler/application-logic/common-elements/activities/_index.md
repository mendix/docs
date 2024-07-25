---
title: "Activities"
url: /refguide7/activities/
---

Activities represent the actions that are executed in a microflow.

The following types of activities are available:

## Object Activities

Object activities can be used to create and manipulate objects. The [domain model](/refguide7/domain-model/) defines the object types ([entities](/refguide7/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918013.png" link="/refguide7/cast-object/" class="no-border" >}} | [Cast object](/refguide7/cast-object/) | Cast object can be used in combination with an [inheritance split](/refguide7/inheritance-split/) to use the [specialized](/refguide7/entities/) members of the object. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917661.png" link="/refguide7/change-object/" class="no-border" >}} | [Change object](/refguide7/change-object/) | Change object can be used to change the members of an object. This can be done with or without committing and with or without events. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/17661961.png" link="/refguide7/committing-objects/" class="no-border" >}} | [Commit object(s)](/refguide7/committing-objects/) | Commit object(s) can be used to commit the changes to one or more objects. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917756.png" link="/refguide7/create-object/" class="no-border" >}} | [Create object](/refguide7/create-object/) | Create object can be used to create an object. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918191.png" link="/refguide7/deleting-objects/" class="no-border" >}} | [Delete object(s)](/refguide7/deleting-objects/) | Delete object can be used to delete an object. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917866.png" link="/refguide7/retrieve/" class="no-border" >}} | [Retrieve](/refguide7/retrieve/) | Retrieve can be used to get one (or more) associated objects of another object. Furthermore the activity can also get one (or more) objects directly from the database. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918119.png" link="/refguide7/rollback-object/" class="no-border" >}} | [Rollback object](/refguide7/rollback-object/) | Rollback object can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore it deletes objects that have been created but have never been committed. |

## List Activities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918028.png" link="/refguide7/aggregate-list/" class="no-border" >}} | [Aggregate list](/refguide7/aggregate-list/) | Aggregate list can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918007.png" link="/refguide7/change-list/" class="no-border" >}} | [Change list](/refguide7/change-list/) | Change list can be used to change the content of a list variable. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918009.png" link="/refguide7/create-list/" class="no-border" >}} | [Create list](/refguide7/create-list/) | Create list can be used to create a (empty) list variable. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917792.png" link="/refguide7/list-operation/" class="no-border" >}} | [List operation](/refguide7/list-operation/) | List operation can be used to combine or compare two list with objects of the same entity. |

## Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918018.png" link="/refguide7/java-action-call/" class="no-border" >}} | [Java Action call](/refguide7/java-action-call/) | Java Action call can be used to call a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918001.png" link="/refguide7/microflow-call/" class="no-border" >}} | [Microflow call](/refguide7/microflow-call/) | Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918011.png" link="/refguide7/change-variable/" class="no-border" >}} | [Change variable](/refguide7/change-variable/) | Change variable can be used to change the value of a variable. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918110.png" link="/refguide7/create-variable/" class="no-border" >}} | [Create variable](/refguide7/create-variable/) | Create variable can be used to create a new variable. |

## Client Activities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918114.png" link="/refguide7/close-page/" class="no-border" >}} | [Close page](/refguide7/close-page/) | Close page closes the page that is opened last by the user that calls the microflow where this activity is used in. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918108.png" link="/refguide7/download-file/" class="no-border" >}} | [Download file](/refguide7/download-file/) | Download file can be used to enable the browser to download a specific file. The user, that calls the microflow where this activity is used in, gets a download popup or the file is shown directly in the browser. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918099.png" link="/refguide7/show-message/" class="no-border" >}} | [Show message](/refguide7/show-message/) | Show message can be used to show a blocking or non-blocking message to the user that calls the microflow where this activity is used in. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/917544.png" link="/refguide7/show-page/" class="no-border" >}} | [Show page](/refguide7/show-page/) | Show page can be used to show a page to the user that calls the microflow where this activity is used in. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918097.png" link="/refguide7/validation-feedback/" class="no-border" >}} | [Validation feedback](/refguide7/validation-feedback/) | Validation feedback can be used to display a red text below a widget that displays an attribute or association. |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/17661963.png" link="/refguide7/show-home-page/" class="no-border" >}} | [Show home page](/refguide7/show-home-page/) | Show home Page can be used to navigate to the home page for the current user. |

## Integration Activities

See [Microflow Activities](/refguide7/microflow-activities/).

## Document Generation Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/918124.png" link="/refguide7/generate-document/" class="no-border" >}} | [Generate document](/refguide7/generate-document/) | Generate document can be used to create a document of a certain type based on a [template](/refguide7/document-templates/). |
