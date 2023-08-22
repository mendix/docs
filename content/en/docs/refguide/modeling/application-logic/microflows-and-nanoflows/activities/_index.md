---
title: "Activities"
url: /refguide/activities/
weight: 40
tags: ["studio pro", "microflows", "nanoflows", "activity"]
---

## 1 Introduction

Activities define the actions that are executed in a microflow or a nanoflow.

There are different types of activity, and these are grouped together in the Studio Pro toolbox. All the activities are listed below, follow the links for more information.

{{% alert color="info" %}}
Most activities can be used in both microflows and nanoflows. However, some can only be used in one of these types of flow, or the behavior may differ between microflows and nanoflows. Follow the links for more information.
{{% /alert %}}

## 2 Object Activities

Object activities can be used to create and manipulate objects. The [domain model](/refguide/domain-model/) defines the object types ([entities](/refguide/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/cast-object.png" alt="cast object" link="/refguide/cast-object/" width="160px" >}} | [Cast object](/refguide/cast-object/) *(microflows only)* | In combination with an [object type decision](/refguide/object-type-decision/) allows you to use the specialized members of the object. For more information on the specialized members of an object, see [Entities](/refguide/entities/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-object.png" alt="change object" link="/refguide/change-object/" width="160px" >}} | [Change object](/refguide/change-object/) |Allows you to change the members of an object. This can be done with or without committing, and with or without events. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/commit-object.png" alt="commit object" link="/refguide/committing-objects/" width="160px" >}} | [Commit object(s)](/refguide/committing-objects/) | Allows you to commit changes to one or more objects. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/create-object.png" alt="create object" link="/refguide/create-object/" width="160px" >}} | [Create object](/refguide/create-object/) | Creates an object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/delete-object.png" alt="delete object" link="/refguide/deleting-objects/" width="160px" >}} | [Delete object(s)](/refguide/deleting-objects/) *(microflows only)* | Deletes an object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/retrieve.png" alt="retrieve" link="/refguide/retrieve/" width="160px" >}} | [Retrieve](/refguide/retrieve/) | Gets one (or more) associated objects of another object. Furthermore, this activity can also get one or more objects directly from a database. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/rollback.png" alt="rollback object" link="/refguide/rollback-object/" width="160px" >}} | [Rollback object](/refguide/rollback-object/) | Rolls uncommitted changes back that were made to an object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed. |

## 3 List Activities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/aggregate-list.png" alt="aggregate list" link="/refguide/aggregate-list/" width="120px" >}} | [Aggregate list](/refguide/aggregate-list/) | Allows you to calculate aggregated values such as the maximum, minimum, sum, average, and total amount of objects over a list of objects. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-list.png" alt="change list" link="/refguide/change-list/" width="120px" >}} | [Change list](/refguide/change-list/) | Allows you to change the content of a list variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/create-list.png" alt="create list" link="/refguide/create-list/" width="120px" >}} | [Create list](/refguide/create-list/) | Creates a (empty) list variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-operation.png" alt="list operation" link="/refguide/list-operation/" width="120px" >}} | [List operation](/refguide/list-operation/) | Combines or compares two lists with objects of the same entity. |

## 4 Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-java-action.png" alt="java action call" link="/refguide/java-action-call/" width="120px" >}} | [Call Java action](/refguide/java-action-call/) *(only in microflows)* | Calls a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-javascript-action.png" alt="javascript action call" link="/refguide/javascript-action-call/" width="120px" >}} | [Call JavaScript action](/refguide/javascript-action-call/) *(only in nanoflows)* | Calls a JavaScript action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-microflow.png" alt="microflow call" link="/refguide/microflow-call/" width="120px" >}} | [Microflow call](/refguide/microflow-call/) | Calls a microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## 5 Variable Activities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-variable.png" alt="change variable" link="/refguide/change-variable/" width="100px" >}} | [Change variable](/refguide/change-variable/) | Allows you to changes the value of a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/create-variable.png" alt="create variable" link="/refguide/create-variable/" width="100px" >}} | [Create variable](/refguide/create-variable/) | Allows you to creates a new variable. |

## 6 Client Activities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-nanoflow.png" alt="nanoflow call" link="/refguide/nanoflow-call/" width="160px" >}} | [Call nanoflow](/refguide/nanoflow-call/) *(only in nanoflows)* | Calls another nanoflow. Arguments can be passed to the nanoflow and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/close-page.png" alt="close page" link="/refguide/close-page/" width="160px" >}} | [Close page](/refguide/close-page/) | Closes the page that was opened last by the user who called the microflow in which this activity is used. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/download-file.png" alt="download file" link="/refguide/download-file/" width="160px" >}} | [Download file](/refguide/download-file/) *(only in microflows)* | Can be used to enable the browser to download a specific file. The user who calls the microflow in which this activity is used gets a download pop-up window, or the file is shown directly in the browser. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/show-home-page.png" alt="show home page" link="/refguide/show-home-page/" width="160px" >}} | [Show home page](/refguide/show-home-page/) *(only in microflows)* | Navigates to the home page for the current user. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/show-message.png" alt="show message" link="/refguide/show-message/" width="160px" >}} | [Show message](/refguide/show-message/) | Allows you to show a blocking or non-blocking message to the user that calls the microflow in which this activity is used. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/show-page.png" alt="show page" link="/refguide/show-page/" width="160px" >}} | [Show page](/refguide/show-page/) | Allows you to show a page to the user that calls the microflow in which this activity is used. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/synchronize-to-device.png" alt="synchronize to device" link="/refguide/synchronize-to-device/" width="160px" >}} | [Synchronize to device](/refguide/synchronize-to-device/) *(only in microflows)* | Can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/synchronize.png" alt="synchronize" link="/refguide/synchronize/" width="160px" >}} | [Synchronize](/refguide/synchronize/)  *(only in nanoflows)* | Synchronizes data. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/validation-feedback.png" alt="validation feedback" link="/refguide/validation-feedback/" width="160px" >}} | [Validation feedback](/refguide/validation-feedback/) | Allows you to display a red text below a widget that displays an attribute or association. |

## 7 Integration Activities

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-rest-service.png" alt="call REST service" link="/refguide/call-rest-action/" width="160px" >}} | [Call REST service](/refguide/call-rest-action/) | Can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-web-service.png" alt="call web service action" link="/refguide/call-web-service-action/" width="160px" >}} | [Call web service](/refguide/call-web-service-action/) | Can be used to call one of the [imported web services](/refguide/consumed-web-services/). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/import-with-mapping.png" alt="import with mapping" link="/refguide/import-mapping-action/" width="160px" >}} | [Import with mapping](/refguide/import-mapping-action/) | Can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide/domain-model/) of the database. An [import mapping](/refguide/import-mappings/) is used to map the incoming XML or JSON to entities. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/export-with-mapping.png" alt="export with mapping" link="/refguide/export-mapping-action/" width="160px" >}} | [Export with mapping](/refguide/export-mapping-action/) | Can be used to export the data stored in [domain model](/refguide/domain-model/) entities into an XML or JSON string. It can also be stored in a file document. An [export mapping](/refguide/export-mappings/) is used to map domain model entities into XML or JSON. |

## 8 Logging Activities

| Graphic | Name | Description |
| ---| --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/log-message.png" alt="log message" link="/refguide/log-message/" width="100px" >}} | [Log message](/refguide/log-message/) | Allows you to create messages that appear in the log of your Mendix application. |

## 9 Document Generation Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/generate-document.png" alt="generate document" link="/refguide/generate-document/" width="120px" >}} | [Generate document](/refguide/generate-document/) *(only in microflows)* | Allows you to create a document of a certain type based on a [template](/refguide/document-templates/). |

## 10 Metrics Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/counter.png" alt="counter" link="/refguide/metrics-counter/" width="100px" >}} | [Counter](/refguide/metrics-counter/) | Allows you to increment a counter by the specified value. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/increment-counter.png" alt="increment-counter" link="/refguide/metrics-increment-counter/" width="100px" >}} | [Increment Counter](/refguide/metrics-increment-counter/) | Allows you to increment a counter by 1. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/gauge.png" alt="gauge" link="/refguide/metrics-gauge/" width="100px" >}} | [Gauge](/refguide/metrics-gauge/) | Allows you to specify the value of a gauge. |

## 11 ML Kit Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-ML-model.png" alt="call ml model" link="/refguide/call-ml-model/" width="100px" >}} | [Call ML model](/refguide/call-ml-model/) *(only in microflows)* | Allows you to call an [ML model mapping](/refguide/ml-model-mapping/) document. |

## 12 Workflow Activities

Workflow activities are used in relation to workflows and their user tasks. 

| Graphic | Name | Description |
| --- | ---| --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/apply-jump-to-option.png" link="/refguide/apply-jump-to-option/" width="160px" >}} | [Apply Jump-To Option](/refguide/apply-jump-to-option/) | Allows the workflow to jump to a selected activity. This activity should be used after the [Generate Jump-To Options](/refguide/generate-jump-to-options/) activity that generates the list of possible workflow activities the workflow can jump to. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-call.png" link="/refguide/workflow-call/" width="160px" >}} | [Call workflow](/refguide/workflow-call/) | Triggers the selected workflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-workflow-state.png" link="/refguide/change-workflow-state/" width="160px" >}} | [Change workflow state](/refguide/change-workflow-state/) | Allows you to add **Abort**, **Continue**, **Pause**, **Unpause**, **Restart**, and **Retry** operations to a workflow and control workflow instances. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/complete-task.png" link="/refguide/complete-task/" width="160px" >}} | [Complete task](/refguide/complete-task/) | Sets which outcome the [user task](/refguide/user-task/) should follow. For example, this activity can be used to complete a user task using a microflow with custom validations. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/generate-jump-to-options.png" link="/refguide/generate-jump-to-options/" width="160px" >}} | [Generate Jump-To Options](/refguide/generate-jump-to-options/) | Allows you to generate a list of workflow activities where the workflow can jump to as its next step. The [Apply Jump-To Option](/refguide/apply-jump-to-option/) activity should be used after the Generate Jump-To Options to let the workflow continue from the selected activity. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflow-context.png" link="/refguide/retrieve-workflow-context/" width="160px" >}} | [Retrieve workflow context](/refguide/retrieve-workflow-context/) | Allows you to retrieve the selected [Workflow Context](/refguide/workflow-parameters/) entity. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/open-task-page.png" link="/refguide/show-task-page/" width="160px" >}} | [Show user task page](/refguide/show-task-page/) | Opens a user task page specified in [user task properties](/refguide/user-task/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/open-workflow-page.png" link="/refguide/show-workflow-page/" width="160px" >}} | [Show workflow admin page](/refguide/show-workflow-page/) | Opens a workflow overview page. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/lock-workflow.png" link="/refguide/lock-workflow/" width="160px" >}} | [Lock Workflow](/refguide/lock-workflow/) | Allows you to lock a workflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/unlock-workflow.png" link="/refguide/unlock-workflow/" width="160px" >}} | [Unlock Workflow](/refguide/unlock-workflow/) | Allows you to unlock a workflow. |

## 13 External Object Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/delete-external-object.png" link="/refguide/delete-external-object/" width="100px" >}} | [Delete external object](/refguide/delete-external-object/) | Allows you to delete an external object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/send-external-object.png" link="/refguide/send-external-object/" width="100px" >}} | [Send external object](/refguide/send-external-object/) | Allows you to send an external object. |
