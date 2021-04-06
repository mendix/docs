---
title: "Activities"
parent: "microflows-and-nanoflows"
menu_order: 40
tags: ["studio pro", "microflows", "nanoflows", "activity"]
---

## 1 Introduction

Activities define the actions that are executed in a microflow or a nanoflow.

There are different types of activity, and these are grouped together in the Studio Pro toolbox. All the activities are listed below, follow the links for more information.

{{% alert type="info" %}}
Most activities can be used in both microflows and nanoflows. However, some can only be used in one of these types of flow, or the behavior may differ between microflows and nanoflows. Follow the links for more information.
{{% /alert %}}

## 2 Object Activities

Object activities can be used to create and manipulate objects. The [domain model](domain-model) defines the object types ([entities](entities)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| [![cast object](attachments/activities/cast-object.png)](cast-object) | [Cast object](cast-object) *(microflows only)* | In combination with an [object type decision](object-type-decision) allows you to use the specialized members of the object. For more information on the specialized members of an object, see [Entities](entities). |
| [![change object](attachments/activities/change-object.png)](change-object) | [Change object](change-object) |Allows you to change the members of an object. This can be done with or without committing, and with or without events. |
| [![commit object](attachments/activities/commit-object.png)](committing-objects) | [Commit object(s)](committing-objects) | Allows you to commit changes to one or more objects. |
| [![create object](attachments/activities/create-object.png)](create-object) | [Create object](create-object) | Creates an object. |
| [![delete object](attachments/activities/delete-object.png)](deleting-objects) | [Delete object(s)](deleting-objects) *(microflows only)* | Deletes an object. |
| [![retrieve](attachments/activities/retrieve.png)](retrieve) | [Retrieve](retrieve) | Gets one (or more) associated objects of another object. Furthermore, this activity can also get one or more objects directly from a database. |
| [![rollback object](attachments/activities/rollback.png)](rollback-object) | [Rollback object](rollback-object) | Rolls uncommitted changes back that were made to an object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed. |

## 3 List Activities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| [![aggregate list](attachments/activities/aggregate-list.png)](aggregate-list) | [Aggregate list](aggregate-list) | Allows you to calculate aggregated values such as the maximum, minimum, sum, average, and total amount of objects over a list of objects. |
| [![change list](attachments/activities/change-list.png)](change-list) | [Change list](change-list) | Allows you to change the content of a list variable. |
| [![create list](attachments/activities/create-list.png)](create-list) | [Create list](create-list) | Creates a (empty) list variable. |
| [![list operation](attachments/activities/list-operation.png)](list-operation) | [List operation](list-operation) | Combines or compares two lists with objects of the same entity. |

## 4 Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| [![java action call](attachments/activities/call-java-action.png)](java-action-call) | [Call Java action](java-action-call) *(only in microflows)* | Calls a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| [![javascript action call](attachments/activities/call-javascript-action.png)](javascript-action-call) | [Call JavaScript action](javascript-action-call) *(only in nanoflows)* | Calls a JavaScript action. Arguments can be passed to the action and the result can be stored in a variable. |
| [![microflow call](attachments/activities/call-microflow.png)](microflow-call) | [Microflow call](microflow-call) | Calls a microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## 5 Variable Activities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| [![change variable](attachments/activities/change-variable.png)](change-variable) | [Change variable](change-variable) | Allows you to changes the value of a variable. |
| [![create variable](attachments/activities/create-variable.png)](create-variable) | [Create variable](create-variable) | Allows you to creates a new variable. |

## 6 Client Activities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| [![nanoflow call](attachments/activities/call-nanoflow.png)](nanoflow-call) | [Call nanoflow](nanoflow-call) *(only in nanoflows)* | Calls another nanoflow. Arguments can be passed to the nanoflow and the result can be stored in a variable. |
| [![close page](attachments/activities/close-page.png)](close-page) | [Close page](close-page) | Closes the page that was opened last by the user who called the microflow in which this activity is used. |
| [![download file](attachments/activities/download-file.png)](download-file) | [Download file](download-file) *(only in microflows)* | Can be used to enable the browser to download a specific file. The user who calls the microflow in which this activity is used gets a download pop-up window, or the file is shown directly in the browser. |
| [![show home page](attachments/activities/show-home-page.png)](show-home-page) | [Show home page](show-home-page) *(only in microflows)* | Navigates to the home page for the current user. |
| [![show message](attachments/activities/show-message.png)](show-message) | [Show message](show-message) | Allows you to show a blocking or non-blocking message to the user that calls the microflow in which this activity is used. |
| [![show page](attachments/activities/show-page.png)](show-page) | [Show page](show-page) | Allows you to show a page to the user that calls the microflow in which this activity is used. |
| [![synchronize to device](attachments/activities/synchronize-to-device.png)](synchronize-to-device) | [Synchronize to device](synchronize-to-device) *(only in microflows)* | Can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. |
| [![synchronize](attachments/activities/synchronize.png)](synchronize) | [Synchronize](synchronize)  *(only in nanoflows)* | Synchronizes data. |
| [![validation feedback](attachments/activities/validation-feedback.png)](validation-feedback) | [Validation feedback](validation-feedback) | Allows you to display a red text below a widget that displays an attribute or association. |

## 7 Integration Activities

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| [![call REST service](attachments/activities/call-rest-service.png)](call-rest-action) | [Call REST service](call-rest-action)        | Can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| [![call web service action](attachments/activities/call-web-service.png)](call-web-service-action) | [Call web service](call-web-service-action)  | Can be used to call one of the [imported web services](consumed-web-services). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| [![import with mapping](attachments/activities/import-with-mapping.png)](import-mapping-action) | [Import with mapping](import-mapping-action) | Can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](domain-model) of the database. An [import mapping](import-mappings) is used to map the incoming XML or JSON to entities. |
| [![export with mapping](attachments/activities/export-with-mapping.png)](export-mapping-action) | [Export with mapping](export-mapping-action) | Can be used to export the data stored in [domain model](domain-model) entities into an XML or JSON string. It can also be stored in a file document. An [export mapping](export-mappings) is used to map domain model entities into XML or JSON. |

## 8 Logging Activities

| Graphic                                                      | Name                       | Description                                                  |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------ |
| [![log message](attachments/activities/log-message.png)](log-message) | [Log message](log-message) | Allows you to create messages that appear in the log of your Mendix application. |

## 9 Document Generation Activities

| Graphic | Name | Description |
| --- | --- | --- |
| [![generate document](attachments/activities/generate-document.png)](generate-document) | [Generate document](generate-document) *(only in nanoflows)* | Allows you to create a document of a certain type based on a [template](document-templates). |

## 10 Workflow Activities

Workflow activities are used in relation to workflows and their user tasks. 

| Graphic                                                      | Name                                           | Description                                                  |
| ------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------ |
| [![](attachments/activities/complete-task.png)](complete-task) | [Complete user task](complete-task)            | Sets which outcome the [user task](user-task) should follow. For example, this activity can be used to complete a user task using a microflow with custom validations. |
| [![](attachments/activities/open-task-page.png)](show-task-page) | [Show user task page](show-task-page)          | Opens a user task page specified in [user task properties](user-task). |
| [![](attachments/activities/open-workflow-page.png)](show-workflow-page) | [Show workflow admin page](show-workflow-page) | Opens a workflow overview page.                              |
| [![](attachments/activities/workflow-call.png)](workflow-call) | [Workflow call](workflow-call)                 | Triggers the selected workflow.                              |
