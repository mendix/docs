---
title: "Activities"
url: /refguide10/activities/
weight: 40
---

## Introduction

Activities define the actions that are executed in a microflow or a nanoflow.

There are different types of activity, and they are grouped together in the Studio Pro **Toolbox**. All the activities are listed below. Click on each activity for more details.

{{% alert color="info" %}}
Most activities can be used in both microflows and nanoflows. However, some can only be used in one of these types of flow, or the behavior may differ between in microflows and in nanoflows. For more information, see the [Differences between Microflows and Nanoflows](/refguide10/microflows-and-nanoflows/#differences) section in *Microflows and Nanoflows*.
{{% /alert %}}

## Object Activities

[Object activities](/refguide10/object-activities/) can be used to create and manipulate objects. The [domain model](/refguide10/domain-model/) defines the object types ([entities](/refguide10/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/cast-object.png" alt="cast object" link="/refguide10/cast-object/" max-width=80% class="no-border" >}} | [Cast object](/refguide10/cast-object/) | In combination with an [object type decision](/refguide10/object-type-decision/) allows you to use the specialized members of the object. For more information on the specialized members of an object, see [Entities](/refguide10/entities/). |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/change-object.png" alt="change object" link="/refguide10/change-object/" max-width=80% class="no-border" >}} | [Change object](/refguide10/change-object/) |Allows you to change the members of an object. This can be done with or without committing, and with or without events. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/commit-object.png" alt="commit object" link="/refguide10/committing-objects/" max-width=80% class="no-border" >}} | [Commit object(s)](/refguide10/committing-objects/) | Allows you to commit changes to one or more objects. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/create-object.png" alt="create object" link="/refguide10/create-object/" max-width=80% class="no-border" >}} | [Create object](/refguide10/create-object/) | Creates an object. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/delete-object.png" alt="delete object" link="/refguide10/deleting-objects/" max-width=80% class="no-border" >}} | [Delete object(s)](/refguide10/deleting-objects/) | Deletes an object. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/retrieve.png" alt="retrieve" link="/refguide10/retrieve/" max-width=80% class="no-border" >}} | [Retrieve](/refguide10/retrieve/) | Gets one (or more) associated objects of another object. Furthermore, this activity can also get one or more objects directly from a database. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/rollback.png" alt="rollback object" link="/refguide10/rollback-object/" max-width=80% class="no-border" >}} | [Rollback object](/refguide10/rollback-object/) | Rolls uncommitted changes back that were made to an object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed. |

## List Activities

[List activities](/refguide10/list-activities/) can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/aggregate-list.png" alt="aggregate list" link="/refguide10/aggregate-list/" max-width=65% class="no-border" >}} | [Aggregate list](/refguide10/aggregate-list/) | Allows you to calculate aggregated values such as the maximum, minimum, sum, average, and total amount of objects over a list of objects. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/change-list.png" alt="change list" link="/refguide10/change-list/" max-width=65% class="no-border" >}} | [Change list](/refguide10/change-list/) | Allows you to change the content of a list variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/create-list.png" alt="create list" link="/refguide10/create-list/" max-width=65% class="no-border" >}} | [Create list](/refguide10/create-list/) | Creates a (empty) list variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/list-operation.png" alt="list operation" link="/refguide10/list-operation/" max-width=65% class="no-border" >}} | [List operation](/refguide10/list-operation/) | Combines or compares two lists with objects of the same entity. |

## Action Call Activities

[Action call activities](/refguide10/action-call-activities/) can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-java-action.png" alt="Java action call" link="/refguide10/java-action-call/" max-width=65% class="no-border" >}} | [Call Java action](/refguide10/java-action-call/) (microflows only) | Calls a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-javascript-action.png" alt="javascript action call" link="/refguide10/javascript-action-call/" max-width=65% class="no-border" >}} | [Call JavaScript action](/refguide10/javascript-action-call/) (nanoflows only) | Calls a JavaScript action. Arguments can be passed to the action and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-microflow.png" alt="microflow call" link="/refguide10/microflow-call/" max-width=65% class="no-border" >}} | [Microflow call](/refguide10/microflow-call/) | Calls a microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## Variable Activities

[Variable activities](/refguide10/variable-activities/) can be used to create or change a variable.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/change-variable.png" alt="change variable" link="/refguide10/change-variable/" max-width=55% class="no-border" >}} | [Change variable](/refguide10/change-variable/) | Allows you to changes the value of a variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/create-variable.png" alt="create variable" link="/refguide10/create-variable/" max-width=55% class="no-border" >}} | [Create variable](/refguide10/create-variable/) | Allows you to creates a new variable. |

## Client Activities

[Client activities](/refguide10/client-activities/) can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-nanoflow.png" alt="nanoflow call" link="/refguide10/nanoflow-call/" max-width=100% class="no-border" >}} | [Call nanoflow](/refguide10/nanoflow-call/) (nanoflows only) | Calls another nanoflow. Arguments can be passed to the nanoflow and the result can be stored in a variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/close-page.png" alt="close page" link="/refguide10/close-page/" max-width=100% class="no-border" >}} | [Close page](/refguide10/close-page/) | Closes the page that was opened last by the user who called the microflow or nanoflow in which this activity is used. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/download-file.png" alt="download file" link="/refguide10/download-file/" max-width=100% class="no-border" >}} | [Download file](/refguide10/download-file/) (microflows only) | Can be used to enable the browser to download a specific file. The user who calls the microflow in which this activity is used gets a download pop-up window, or the file is shown directly in the browser. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/show-home-page.png" alt="show home page" link="/refguide10/show-home-page/" max-width=100% class="no-border" >}} | [Show home page](/refguide10/show-home-page/) (microflows only) | Navigates to the home page for the current user. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/show-message.png" alt="show message" link="/refguide10/show-message/" max-width=100% class="no-border" >}} | [Show message](/refguide10/show-message/) | Allows you to show a blocking or non-blocking message to the user that calls the microflow or nanoflow in which this activity is used. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/show-page.png" alt="show page" link="/refguide10/show-page/" max-width=100% class="no-border" >}} | [Show page](/refguide10/show-page/) | Allows you to show a page to the user that calls the microflow or nanoflow in which this activity is used. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/synchronize-to-device.png" alt="synchronize to device" link="/refguide10/synchronize-to-device/" max-width=100% class="no-border" >}} | [Synchronize to device](/refguide10/synchronize-to-device/) (microflows only) | Can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/synchronize.png" alt="synchronize" link="/refguide10/synchronize/" max-width=100% class="no-border" >}} | [Synchronize](/refguide10/synchronize/)  (nanoflows only) | Synchronizes data. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/validation-feedback.png" alt="validation feedback" link="/refguide10/validation-feedback/" max-width=100% class="no-border" >}} | [Validation feedback](/refguide10/validation-feedback/) | Allows you to display a red text below a widget that displays an attribute or association. |

## Integration Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

[Integration activities](/refguide10/integration-activities/) can be used to integrate with other systems, for example by calling a web service.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-external-action.png" alt="call external action" link="/refguide10/call-external-action/" max-width=100% class="no-border" >}} | [Call external action](/refguide10/call-external-action/) | Can be used to call an external action from a consumed OData service. You can configure the parameters and if available, store the result in a variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-rest-service.png" alt="call REST service" link="/refguide10/call-rest-action/" max-width=100% class="no-border" >}} | [Call REST service](/refguide10/call-rest-action/) | Can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-web-service.png" alt="call web service action" link="/refguide10/call-web-service-action/" max-width=100% class="no-border" >}} | [Call web service](/refguide10/call-web-service-action/) | Can be used to call one of the [imported web services](/refguide10/consumed-web-services/). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/import-with-mapping.png" alt="import with mapping" link="/refguide10/import-mapping-action/" max-width=100% class="no-border" >}} | [Import with mapping](/refguide10/import-mapping-action/) | Can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide10/domain-model/) of the database. An [import mapping](/refguide10/import-mappings/) is used to map the incoming XML or JSON to entities. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/export-with-mapping.png" alt="export with mapping" link="/refguide10/export-mapping-action/" max-width=100% class="no-border" >}} | [Export with mapping](/refguide10/export-mapping-action/) | Can be used to export the data stored in [domain model](/refguide10/domain-model/) entities into an XML or JSON string. It can also be stored in a file document. An [export mapping](/refguide10/export-mappings/) is used to map domain model entities into XML or JSON. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/query-external-database.png" alt="query external database" link="/refguide10/query-external-database/" max-width=100% class="no-border" >}} | [Query external database](/refguide10/query-external-database/) | Can be used with the [External Database Connector](/appstore/modules/external-database-connector/) to use preconfigured database queries and display retrieved data in your app.|
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/send-rest-request.png" alt="send rest request" link="/refguide10/send-rest-request/" max-width=100% class="no-border" >}} | [Send REST request (beta)](/refguide10/send-rest-request/) | Can be used to send a REST request, which is configured in a [consumed REST service](/refguide10/consumed-rest-service/) document.|

## Logging Activities

| Graphic | Name | Description |
| ---| --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/log-message.png" alt="log message" link="/refguide10/log-message/" max-width=60% class="no-border" >}} | [Log message](/refguide10/log-message/) | Allows you to create messages that appear in the log of your Mendix application. |

## Document Generation Activities

{{% alert color="warning" %}}
Document generation using Document Templates was deprecated in 10.24.0. See [Document Templates](/refguide10/document-templates/) for alternatives.
{{% /alert %}}

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/generate-document.png" alt="generate document" link="/refguide10/generate-document/" max-width=60% class="no-border" >}} | [Generate document](/refguide10/generate-document/) (microflows only) | Allows you to create a document of a certain type based on a [template](/refguide10/document-templates/). |

## Metrics Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

[Metrics activities](/refguide10/metrics-activities/) are used to provide custom metrics from your app.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/counter.png" alt="counter" link="/refguide10/metrics-counter/" max-width=55% class="no-border" >}} | [Counter](/refguide10/metrics-counter/) | Allows you to increment a counter by the specified value. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/increment-counter.png" alt="increment-counter" link="/refguide10/metrics-increment-counter/" max-width=55% class="no-border" >}} | [Increment counter](/refguide10/metrics-increment-counter/) | Allows you to increment a counter by 1. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/gauge.png" alt="gauge" link="/refguide10/metrics-gauge/" max-width=55% class="no-border" >}} | [Gauge](/refguide10/metrics-gauge/) | Allows you to specify the value of a gauge. |

## ML Kit Activities

[ML Kit activities](/refguide10/ml-kit-activities/) are used with a machine learning model.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/call-ML-model.png" alt="call ml model" link="/refguide10/call-ml-model/" max-width=60% class="no-border" >}} | [Call ML model](/refguide10/call-ml-model/) (microflows only) | Allows you to call an [ML model mapping](/refguide10/ml-model-mapping/) document. |

## Workflow Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

[Workflow activities](/refguide10/workflow-activities/) are used in relation to workflows and their user tasks. 

| Graphic | Name | Description |
| --- | ---| --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/apply-jump-to-option.png" link="/refguide10/apply-jump-to-option/" max-width=100% class="no-border" >}} | [Apply jump-to option](/refguide10/apply-jump-to-option/) | Allows the workflow to jump to a selected activity. This activity should be used after the [Generate jump-to options](/refguide10/generate-jump-to-options/) activity that generates the list of possible workflow activities the workflow can jump to. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/workflow-call.png" link="/refguide10/workflow-call/" max-width=100% class="no-border" >}} | [Call workflow](/refguide10/workflow-call/) | Triggers the selected workflow. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/change-workflow-state.png" link="/refguide10/change-workflow-state/" max-width=100% class="no-border" >}} | [Change workflow state](/refguide10/change-workflow-state/) | Allows you to add **Abort**, **Continue**, **Pause**, **Unpause**, **Restart**, and **Retry** operations to a workflow and control workflow instances. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/complete-user-task.png" link="/refguide10/complete-user-task/" max-width=100% class="no-border" >}} | [Complete user task](/refguide10/complete-user-task/) | Sets which outcome the [user task](/refguide10/user-task/) should follow. For example, this activity can be used to complete a user task using a microflow with custom validations. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/generate-jump-to-options.png" link="/refguide10/generate-jump-to-options/" max-width=100% class="no-border" >}} | [Generate jump-to options](/refguide10/generate-jump-to-options/) | Allows you to generate a list of workflow activities where the workflow can jump to as its next step. The [Apply jump-to option](/refguide10/apply-jump-to-option/) activity should be used after the **Generate jump-to options** activity to let the workflow continue from the selected activity. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflow-activity-records.png" link="/refguide10/retrieve-workflow-activity-records/" max-width=100% class="no-border" >}} | [Retrieve workflow activity records](/refguide10/retrieve-workflow-activity-records/) | Allows you to retrieve a list of **System.WorkflowActivityRecord** objects for a given workflow instance. Each **System.WorkflowActivityRecord** represents a snapshot of a workflow activity. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflow-context.png" link="/refguide10/retrieve-workflow-context/" max-width=100% class="no-border" >}} | [Retrieve workflow context](/refguide10/retrieve-workflow-context/) | Allows you to retrieve the selected [workflow context](/refguide10/workflow-parameters/) entity. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/retrieve-workflows.png" link="/refguide10/retrieve-workflows/" max-width=100% class="no-border" >}} | [Retrieve workflows](/refguide10/retrieve-workflows/) | Allows you to retrieve a list of **System.Workflow** objects associated with the given [workflow context](/refguide10/workflow-parameters/) object. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/open-task-page.png" link="/refguide10/show-task-page/" max-width=100% class="no-border" >}} | [Show user task page](/refguide10/show-task-page/) | Opens a user task page specified in [user task properties](/refguide10/user-task/). |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/open-workflow-page.png" link="/refguide10/show-workflow-page/" max-width=100% class="no-border" >}} | [Show workflow admin page](/refguide10/show-workflow-page/) | Opens a workflow overview page. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/lock-workflow.png" link="/refguide10/lock-workflow/" max-width=100% class="no-border" >}} | [Lock workflow](/refguide10/lock-workflow/) | Allows you to lock a workflow. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/unlock-workflow.png" link="/refguide10/unlock-workflow/" max-width=100% class="no-border" >}} | [Unlock workflow](/refguide10/unlock-workflow/) | Allows you to unlock a workflow. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/notify-workflow.png" link="/refguide10/notify-workflow/" max-width=100% class="no-border" >}} | [Notify workflow](/refguide10/notify-workflow/) | Allows you to notify a workflow that is suspended on the [Wait for notification](/refguide10/wait-for-notification/) activity. |

## External Object Activities

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

[External object activities](/refguide10/external-object-activities/) allow you to call the service to update the state of the object in the other system.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/delete-external-object.png" link="/refguide10/delete-external-object/" max-width=55% class="no-border" >}} | [Delete external object](/refguide10/delete-external-object/) | Allows you to delete an external object. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/send-external-object.png" link="/refguide10/send-external-object/" max-width=55% class="no-border" >}} | [Send external object](/refguide10/send-external-object/) | Allows you to send an external object. |
