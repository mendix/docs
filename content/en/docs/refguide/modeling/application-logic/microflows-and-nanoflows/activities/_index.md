---
title: "Activities"
url: /refguide/activities/
weight: 40
---

## Introduction

Activities define the actions that are executed in a microflow or a nanoflow.

There are different types of activity, and they are grouped together in the Studio Pro **Toolbox**. All the activities are listed below. Click on each activity for more details.

{{% alert color="info" %}}
Most activities can be used in both microflows and nanoflows. However, some can only be used in one of these types of flow, or the behavior may differ between in microflows and in nanoflows.
{{% /alert %}}

## Object Activities

Object activities can be used to create and manipulate objects. The [domain model](/refguide/domain-model/) defines the object types ([entities](/refguide/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/cast-object.png" alt="cast object" link="/refguide/cast-object/" max-width=80% class="no-border" >}} | [Cast object](/refguide/cast-object/) | In combination with an [object type decision](/refguide/object-type-decision/) allows you to use the specialized members of the object. For more information on the specialized members of an object, see [Entities](/refguide/entities/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-object.png" alt="change object" link="/refguide/change-object/" max-width=80% class="no-border" >}} | [Change object](/refguide/change-object/) |Allows you to change the members of an object. This can be done with or without committing, and with or without events. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/commit-object.png" alt="commit object" link="/refguide/committing-objects/" max-width=80% class="no-border" >}} | [Commit object(s)](/refguide/committing-objects/) | Allows you to commit changes to one or more objects. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/create-object.png" alt="create object" link="/refguide/create-object/" max-width=80% class="no-border" >}} | [Create object](/refguide/create-object/) | Creates an object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/delete-object.png" alt="delete object" link="/refguide/deleting-objects/" max-width=80% class="no-border" >}} | [Delete object(s)](/refguide/deleting-objects/) | Deletes an object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/retrieve.png" alt="retrieve" link="/refguide/retrieve/" max-width=80% class="no-border" >}} | [Retrieve](/refguide/retrieve/) | Gets one (or more) associated objects of another object. Furthermore, this activity can also get one or more objects directly from a database. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/rollback.png" alt="rollback object" link="/refguide/rollback-object/" max-width=80% class="no-border" >}} | [Rollback object](/refguide/rollback-object/) | Rolls uncommitted changes back that were made to an object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed. |

## List Activities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/aggregate-list.png" alt="aggregate list" link="/refguide/aggregate-list/" max-width=65% class="no-border" >}} | [Aggregate list](/refguide/aggregate-list/) | Allows you to calculate aggregated values such as the maximum, minimum, sum, average, and total amount of objects over a list of objects. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-list.png" alt="change list" link="/refguide/change-list/" max-width=65% class="no-border" >}} | [Change list](/refguide/change-list/) | Allows you to change the content of a list variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/create-list.png" alt="create list" link="/refguide/create-list/" max-width=65% class="no-border" >}} | [Create list](/refguide/create-list/) | Creates a (empty) list variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-operation.png" alt="list operation" link="/refguide/list-operation/" max-width=65% class="no-border" >}} | [List operation](/refguide/list-operation/) | Combines or compares two lists with objects of the same entity. |

## Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-java-action.png" alt="Java action call" link="/refguide/java-action-call/" max-width=65% class="no-border" >}} | [Call Java action](/refguide/java-action-call/) (microflows only) | Calls a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-javascript-action.png" alt="javascript action call" link="/refguide/javascript-action-call/" max-width=65% class="no-border" >}} | [Call JavaScript action](/refguide/javascript-action-call/) (nanoflows only) | Calls a JavaScript action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-microflow.png" alt="microflow call" link="/refguide/microflow-call/" max-width=65% class="no-border" >}} | [Microflow call](/refguide/microflow-call/) | Calls a microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activities

Variable activities can be used to create or change a variable.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-variable.png" alt="change variable" link="/refguide/change-variable/" max-width=55% class="no-border" >}} | [Change variable](/refguide/change-variable/) | Allows you to changes the value of a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/create-variable.png" alt="create variable" link="/refguide/create-variable/" max-width=55% class="no-border" >}} | [Create variable](/refguide/create-variable/) | Allows you to creates a new variable. |

## Client Activities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-nanoflow.png" alt="nanoflow call" link="/refguide/nanoflow-call/" max-width=100% class="no-border" >}} | [Call nanoflow](/refguide/nanoflow-call/) (nanoflows only) | Calls another nanoflow. Arguments can be passed to the nanoflow and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/close-page.png" alt="close page" link="/refguide/close-page/" max-width=100% class="no-border" >}} | [Close page](/refguide/close-page/) | Closes the page that was opened last by the user who called the microflow or nanoflow in which this activity is used. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/download-file.png" alt="download file" link="/refguide/download-file/" max-width=100% class="no-border" >}} | [Download file](/refguide/download-file/) (microflows only) | Can be used to enable the browser to download a specific file. The user who calls the microflow in which this activity is used gets a download pop-up window, or the file is shown directly in the browser. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/show-home-page.png" alt="show home page" link="/refguide/show-home-page/" max-width=100% class="no-border" >}} | [Show home page](/refguide/show-home-page/) (microflows only) | Navigates to the home page for the current user. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/show-message.png" alt="show message" link="/refguide/show-message/" max-width=100% class="no-border" >}} | [Show message](/refguide/show-message/) | Allows you to show a blocking or non-blocking message to the user that calls the microflow or nanoflow in which this activity is used. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/show-page.png" alt="show page" link="/refguide/show-page/" max-width=100% class="no-border" >}} | [Show page](/refguide/show-page/) | Allows you to show a page to the user that calls the microflow or nanoflow in which this activity is used. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/synchronize-to-device.png" alt="synchronize to device" link="/refguide/synchronize-to-device/" max-width=100% class="no-border" >}} | [Synchronize to device](/refguide/synchronize-to-device/) (microflows only) | Can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/synchronize.png" alt="synchronize" link="/refguide/synchronize/" max-width=100% class="no-border" >}} | [Synchronize](/refguide/synchronize/)  (nanoflows only) | Synchronizes data. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/validation-feedback.png" alt="validation feedback" link="/refguide/validation-feedback/" max-width=100% class="no-border" >}} | [Validation feedback](/refguide/validation-feedback/) | Allows you to display a red text below a widget that displays an attribute or association. |

## Integration Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-external-action.png" alt="call external action" link="/refguide/call-external-action/" max-width=100% class="no-border" >}} | [Call external action](/refguide/call-external-action/) | Can be used to call an external action from a consumed OData service. You can configure the parameters and if available, store the result in a variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-rest-service.png" alt="call REST service" link="/refguide/call-rest-action/" max-width=100% class="no-border" >}} | [Call REST service](/refguide/call-rest-action/) | Can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-web-service.png" alt="call web service action" link="/refguide/call-web-service-action/" max-width=100% class="no-border" >}} | [Call web service](/refguide/call-web-service-action/) | Can be used to call one of the [imported web services](/refguide/consumed-web-services/). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/import-with-mapping.png" alt="import with mapping" link="/refguide/import-mapping-action/" max-width=100% class="no-border" >}} | [Import with mapping](/refguide/import-mapping-action/) | Can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide/domain-model/) of the database. An [import mapping](/refguide/import-mappings/) is used to map the incoming XML or JSON to entities. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/export-with-mapping.png" alt="export with mapping" link="/refguide/export-mapping-action/" max-width=100% class="no-border" >}} | [Export with mapping](/refguide/export-mapping-action/) | Can be used to export the data stored in [domain model](/refguide/domain-model/) entities into an XML or JSON string. It can also be stored in a file document. An [export mapping](/refguide/export-mappings/) is used to map domain model entities into XML or JSON. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/query-external-database.png" alt="query external database" link="/refguide/query-external-database/" max-width=100% class="no-border" >}} | [Query external database](/refguide/query-external-database/) | Can be used with the [External Database Connector](/appstore/modules/external-database-connector/) to use preconfigured database queries and display retrieved data in your app.|
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/send-rest-request.png" alt="send rest request" link="/refguide/send-rest-request/" max-width=100% class="no-border" >}} | [Send REST request (beta)](/refguide/send-rest-request/) | Can be used to send a REST request, which is configured in a [consumed REST service (beta)](/refguide/consumed-rest-services-beta/) document.|

## Logging Activities

| Graphic | Name | Description |
| ---| --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/log-message.png" alt="log message" link="/refguide/log-message/" max-width=60% class="no-border" >}} | [Log message](/refguide/log-message/) | Allows you to create messages that appear in the log of your Mendix application. |

## Document Generation Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/generate-document.png" alt="generate document" link="/refguide/generate-document/" max-width=60% class="no-border" >}} | [Generate document](/refguide/generate-document/) (microflows only) | Allows you to create a document of a certain type based on a [template](/refguide/document-templates/). |

## Metrics Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/counter.png" alt="counter" link="/refguide/metrics-counter/" max-width=55% class="no-border" >}} | [Counter](/refguide/metrics-counter/) | Allows you to increment a counter by the specified value. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/increment-counter.png" alt="increment-counter" link="/refguide/metrics-increment-counter/" max-width=55% class="no-border" >}} | [Increment counter](/refguide/metrics-increment-counter/) | Allows you to increment a counter by 1. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/gauge.png" alt="gauge" link="/refguide/metrics-gauge/" max-width=55% class="no-border" >}} | [Gauge](/refguide/metrics-gauge/) | Allows you to specify the value of a gauge. |

## ML Kit Activities

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/call-ML-model.png" alt="call ml model" link="/refguide/call-ml-model/" max-width=60% class="no-border" >}} | [Call ML model](/refguide/call-ml-model/) (microflows only) | Allows you to call an [ML model mapping](/refguide/ml-model-mapping/) document. |

## Workflow Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

Workflow activities are used in relation to workflows and their user tasks. 

| Graphic | Name | Description |
| --- | ---| --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/apply-jump-to-option.png" link="/refguide/apply-jump-to-option/" max-width=100% class="no-border" >}} | [Apply jump-to option](/refguide/apply-jump-to-option/) | Allows the workflow to jump to a selected activity. This activity should be used after the [Generate jump-to options](/refguide/generate-jump-to-options/) activity that generates the list of possible workflow activities the workflow can jump to. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-call.png" link="/refguide/workflow-call/" max-width=100% class="no-border" >}} | [Call workflow](/refguide/workflow-call/) | Triggers the selected workflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/change-workflow-state.png" link="/refguide/change-workflow-state/" max-width=100% class="no-border" >}} | [Change workflow state](/refguide/change-workflow-state/) | Allows you to add **Abort**, **Continue**, **Pause**, **Unpause**, **Restart**, and **Retry** operations to a workflow and control workflow instances. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/complete-user-task.png" link="/refguide/complete-user-task/" max-width=100% class="no-border" >}} | [Complete user task](/refguide/complete-user-task/) | Sets which outcome the [user task](/refguide/user-task/) should follow. For example, this activity can be used to complete a user task using a microflow with custom validations. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/generate-jump-to-options.png" link="/refguide/generate-jump-to-options/" max-width=100% class="no-border" >}} | [Generate jump-to options](/refguide/generate-jump-to-options/) | Allows you to generate a list of workflow activities where the workflow can jump to as its next step. The [Apply jump-to option](/refguide/apply-jump-to-option/) activity should be used after the **Generate jump-to options** activity to let the workflow continue from the selected activity. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflow-activity-records.png" link="/refguide/retrieve-workflow-activity-records/" max-width=100% class="no-border" >}} | [Retrieve workflow activity records](/refguide/retrieve-workflow-activity-records/) | Allows you to retrieve a list of **System.WorkflowActivityRecord** objects for a given workflow instance. Each **System.WorkflowActivityRecord** represents a snapshot of a workflow activity. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflow-context.png" link="/refguide/retrieve-workflow-context/" max-width=100% class="no-border" >}} | [Retrieve workflow context](/refguide/retrieve-workflow-context/) | Allows you to retrieve the selected [workflow context](/refguide/workflow-parameters/) entity. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflows.png" link="/refguide/retrieve-workflows/" max-width=100% class="no-border" >}} | [Retrieve workflows](/refguide/retrieve-workflows/) | Allows you to retrieve a list of **System.Workflow** objects associated with the given [workflow context](/refguide/workflow-parameters/) object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/open-task-page.png" link="/refguide/show-task-page/" max-width=100% class="no-border" >}} | [Show user task page](/refguide/show-task-page/) | Opens a user task page specified in [user task properties](/refguide/user-task/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/open-workflow-page.png" link="/refguide/show-workflow-page/" max-width=100% class="no-border" >}} | [Show workflow admin page](/refguide/show-workflow-page/) | Opens a workflow overview page. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/lock-workflow.png" link="/refguide/lock-workflow/" max-width=100% class="no-border" >}} | [Lock workflow](/refguide/lock-workflow/) | Allows you to lock a workflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/unlock-workflow.png" link="/refguide/unlock-workflow/" max-width=100% class="no-border" >}} | [Unlock workflow](/refguide/unlock-workflow/) | Allows you to unlock a workflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/notify-workflow.png" link="/refguide/notify-workflow/" max-width=100% class="no-border" >}} | [Notify workflow](/refguide/notify-workflow/) | Allows you to notify a workflow that is suspended on the [Wait for notification](/refguide/wait-for-notification/) activity. |

## External Object Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/delete-external-object.png" link="/refguide/delete-external-object/" max-width=55% class="no-border" >}} | [Delete external object](/refguide/delete-external-object/) | Allows you to delete an external object. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/send-external-object.png" link="/refguide/send-external-object/" max-width=55% class="no-border" >}} | [Send external object](/refguide/send-external-object/) | Allows you to send an external object. |
