---
title: "Activities"
url: /refguide9/activities/
weight: 40
---

## Introduction

Activities define the actions that are executed in a microflow or a nanoflow.

There are different types of activity, and these are grouped together in the Studio Pro toolbox. All the activities are listed below, follow the links for more information.

{{% alert color="info" %}}
Most activities can be used in both microflows and nanoflows. However, some can only be used in one of these types of flow, or the behavior may differ between microflows and nanoflows. Follow the links for more information.
{{% /alert %}}

## Object Activities

Object activities can be used to create and manipulate objects. The [domain model](/refguide9/domain-model/) defines the object types ([entities](/refguide9/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/cast-object.png" alt="cast object" link="/refguide9/cast-object/" class="no-border" >}} | [Cast object](/refguide9/cast-object/) *(microflows only)* | In combination with an [object type decision](/refguide9/object-type-decision/) allows you to use the specialized members of the object. For more information on the specialized members of an object, see [Entities](/refguide9/entities/). |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/change-object.png" alt="change object" link="/refguide9/change-object/" class="no-border" >}} | [Change object](/refguide9/change-object/) |Allows you to change the members of an object. This can be done with or without committing, and with or without events. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/commit-object.png" alt="commit object" link="/refguide9/committing-objects/" class="no-border" >}} | [Commit object(s)](/refguide9/committing-objects/) | Allows you to commit changes to one or more objects. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/create-object.png" alt="create object" link="/refguide9/create-object/" class="no-border" >}} | [Create object](/refguide9/create-object/) | Creates an object. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/delete-object.png" alt="delete object" link="/refguide9/deleting-objects/" class="no-border" >}} | [Delete object(s)](/refguide9/deleting-objects/) *(microflows only)* | Deletes an object. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/retrieve.png" alt="retrieve" link="/refguide9/retrieve/" class="no-border" >}} | [Retrieve](/refguide9/retrieve/) | Gets one (or more) associated objects of another object. Furthermore, this activity can also get one or more objects directly from a database. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/rollback.png" alt="rollback object" link="/refguide9/rollback-object/" class="no-border" >}} | [Rollback object](/refguide9/rollback-object/) | Rolls uncommitted changes back that were made to an object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed. |

## List Activities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/aggregate-list.png" alt="aggregate list" link="/refguide9/aggregate-list/" class="no-border" >}} | [Aggregate list](/refguide9/aggregate-list/) | Allows you to calculate aggregated values such as the maximum, minimum, sum, average, and total amount of objects over a list of objects. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/change-list.png" alt="change list" link="/refguide9/change-list/" class="no-border" >}} | [Change list](/refguide9/change-list/) | Allows you to change the content of a list variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/create-list.png" alt="create list" link="/refguide9/create-list/" class="no-border" >}} | [Create list](/refguide9/create-list/) | Creates a (empty) list variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/list-operation.png" alt="list operation" link="/refguide9/list-operation/" class="no-border" >}} | [List operation](/refguide9/list-operation/) | Combines or compares two lists with objects of the same entity. |

## Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/call-java-action.png" alt="Java action call" link="/refguide9/java-action-call/" class="no-border" >}} | [Call Java action](/refguide9/java-action-call/) *(only in microflows)* | Calls a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/call-javascript-action.png" alt="javascript action call" link="/refguide9/javascript-action-call/" class="no-border" >}} | [Call JavaScript action](/refguide9/javascript-action-call/) *(only in nanoflows)* | Calls a JavaScript action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/call-microflow.png" alt="microflow call" link="/refguide9/microflow-call/" class="no-border" >}} | [Microflow call](/refguide9/microflow-call/) | Calls a microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/change-variable.png" alt="change variable" link="/refguide9/change-variable/" class="no-border" >}} | [Change variable](/refguide9/change-variable/) | Allows you to changes the value of a variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/create-variable.png" alt="create variable" link="/refguide9/create-variable/" class="no-border" >}} | [Create variable](/refguide9/create-variable/) | Allows you to creates a new variable. |

## Client Activities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/call-nanoflow.png" alt="nanoflow call" link="/refguide9/nanoflow-call/" class="no-border" >}} | [Call nanoflow](/refguide9/nanoflow-call/) *(only in nanoflows)* | Calls another nanoflow. Arguments can be passed to the nanoflow and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/close-page.png" alt="close page" link="/refguide9/close-page/" class="no-border" >}} | [Close page](/refguide9/close-page/) | Closes the page that was opened last by the user who called the microflow in which this activity is used. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/download-file.png" alt="download file" link="/refguide9/download-file/" class="no-border" >}} | [Download file](/refguide9/download-file/) *(only in microflows)* | Can be used to enable the browser to download a specific file. The user who calls the microflow in which this activity is used gets a download pop-up window, or the file is shown directly in the browser. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/show-home-page.png" alt="show home page" link="/refguide9/show-home-page/" class="no-border" >}} | [Show home page](/refguide9/show-home-page/) *(only in microflows)* | Navigates to the home page for the current user. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/show-message.png" alt="show message" link="/refguide9/show-message/" class="no-border" >}} | [Show message](/refguide9/show-message/) | Allows you to show a blocking or non-blocking message to the user that calls the microflow in which this activity is used. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/show-page.png" alt="show page" link="/refguide9/show-page/" class="no-border" >}} | [Show page](/refguide9/show-page/) | Allows you to show a page to the user that calls the microflow in which this activity is used. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/synchronize-to-device.png" alt="synchronize to device" link="/refguide9/synchronize-to-device/" class="no-border" >}} | [Synchronize to device](/refguide9/synchronize-to-device/) *(only in microflows)* | Can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/synchronize.png" alt="synchronize" link="/refguide9/synchronize/" class="no-border" >}} | [Synchronize](/refguide9/synchronize/)  *(only in nanoflows)* | Synchronizes data. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/validation-feedback.png" alt="validation feedback" link="/refguide9/validation-feedback/" class="no-border" >}} | [Validation feedback](/refguide9/validation-feedback/) | Allows you to display a red text below a widget that displays an attribute or association. |

## Integration Activities

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/call-rest-service.png" alt="call REST service" link="/refguide9/call-rest-action/" class="no-border" >}} | [Call REST service](/refguide9/call-rest-action/)        | Can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/call-web-service.png" alt="call web service action" link="/refguide9/call-web-service-action/" class="no-border" >}} | [Call web service](/refguide9/call-web-service-action/)  | Can be used to call one of the [imported web services](/refguide9/consumed-web-services/). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/import-with-mapping.png" alt="import with mapping" link="/refguide9/import-mapping-action/" class="no-border" >}} | [Import with mapping](/refguide9/import-mapping-action/) | Can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide9/domain-model/) of the database. An [import mapping](/refguide9/import-mappings/) is used to map the incoming XML or JSON to entities. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/export-with-mapping.png" alt="export with mapping" link="/refguide9/export-mapping-action/" class="no-border" >}} | [Export with mapping](/refguide9/export-mapping-action/) | Can be used to export the data stored in [domain model](/refguide9/domain-model/) entities into an XML or JSON string. It can also be stored in a file document. An [export mapping](/refguide9/export-mappings/) is used to map domain model entities into XML or JSON. |

## Logging Activities

| Graphic                                                      | Name                       | Description                                                  |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/log-message.png" alt="log message" link="/refguide9/log-message/" class="no-border" >}} | [Log message](/refguide9/log-message/) | Allows you to create messages that appear in the log of your Mendix application. |

## Document Generation Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/generate-document.png" alt="generate document" link="/refguide9/generate-document/" class="no-border" >}} | [Generate document](/refguide9/generate-document/) *(only in microflows)* | Allows you to create a document of a certain type based on a [template](/refguide9/document-templates/). |

## Workflow Activities

Workflow activities are used in relation to workflows and their user tasks. 

| Graphic                                                      | Name                                           | Description                                                  |
| ------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/complete-task.png" link="/refguide9/complete-task/" class="no-border" >}} | [Complete Task](/refguide9/complete-task/) | Sets which outcome the [user task](/refguide9/user-task/) should follow. For example, this activity can be used to complete a user task using a microflow with custom validations. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/open-task-page.png" link="/refguide9/show-task-page/" class="no-border" >}} | [Show user task page](/refguide9/show-task-page/)          | Opens a user task page specified in [user task properties](/refguide9/user-task/). |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/open-workflow-page.png" link="/refguide9/show-workflow-page/" class="no-border" >}} | [Show workflow admin page](/refguide9/show-workflow-page/) | Opens a workflow overview page.                              |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-call.png" link="/refguide9/workflow-call/" class="no-border" >}} | [Workflow call](/refguide9/workflow-call/)                 | Triggers the selected workflow.                              |
