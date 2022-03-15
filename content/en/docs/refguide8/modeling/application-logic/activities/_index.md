---
title: "Activities"
url: /refguide8/activities/
parent: "application-logic"
weight: 40
tags: ["studio pro", "microflows", "nanoflows", "activity"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/activities.pdf).
{{% /alert %}}

## 1 Introduction

Activities define the actions that are executed in a microflow or a nanoflow.

There are different types of activity, and these are grouped together in the Studio Pro toolbox. All the activities are listed below, follow the links for more information.

{{% alert color="info" %}}
Most activities can be used in both microflows and nanoflows. However, some can only be used in one of these types of flow, or the behavior may differ between microflows and nanoflows. Follow the links for more information.
{{% /alert %}}

## 2 Object Activities

Object activities can be used to create and manipulate objects. The [domain model](/refguide8/domain-model/) defines the object types ([entities](/refguide8/entities/)) that can be used.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/cast-object.png" alt="cast object" >}}](/refguide8/cast-object/) | [Cast object](/refguide8/cast-object/) *(microflows only)* | In combination with an [object type decision](/refguide8/object-type-decision/) allows you to use the specialized members of the object. For more information on the specialized members of an object, see [Entities](/refguide8/entities/). |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/change-object.png" alt="change object" >}}](/refguide8/change-object/) | [Change object](/refguide8/change-object/) |Allows you to change the members of an object. This can be done with or without committing, and with or without events. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/commit-object.png" alt="commit object" >}}](/refguide8/committing-objects/) | [Commit object(s)](/refguide8/committing-objects/) | Allows you to commit changes to one or more objects. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/create-object.png" alt="create object" >}}](/refguide8/create-object/) | [Create object](/refguide8/create-object/) | Creates an object. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/delete-object.png" alt="delete object" >}}](/refguide8/deleting-objects/) | [Delete object(s)](/refguide8/deleting-objects/) *(microflows only)* | Deletes an object. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/retrieve.png" alt="retrieve" >}}](/refguide8/retrieve/) | [Retrieve](/refguide8/retrieve/) | Gets one (or more) associated objects of another object. Furthermore, this activity can also get one or more objects directly from a database. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/rollback.png" alt="rollback object" >}}](/refguide8/rollback-object/) | [Rollback object](/refguide8/rollback-object/) | Rolls uncommitted changes back that were made to an object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed. |

## 3 List Activities

List activities can be used to create and manipulate lists of objects.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/aggregate-list.png" alt="aggregate list" >}}](/refguide8/aggregate-list/) | [Aggregate list](/refguide8/aggregate-list/) | Allows you to calculate aggregated values such as the maximum, minimum, sum, average, and total amount of objects over a list of objects. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/change-list.png" alt="change list" >}}](/refguide8/change-list/) | [Change list](/refguide8/change-list/) | Allows you to change the content of a list variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/create-list.png" alt="create list" >}}](/refguide8/create-list/) | [Create list](/refguide8/create-list/) | Creates a (empty) list variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/list-operation.png" alt="list operation" >}}](/refguide8/list-operation/) | [List operation](/refguide8/list-operation/) | Combines or compares two lists with objects of the same entity. |

## 4 Action Call Activities

Action call activities can be used to call another microflow or to call a Java action.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/call-java-action.png" alt="java action call" >}}](/refguide8/java-action-call/) | [Call Java action](/refguide8/java-action-call/) *(only in microflows)* | Calls a Java action. Arguments can be passed to the action and the result can be stored in a variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/call-javascript-action.png" alt="javascript action call" >}}](/refguide8/javascript-action-call/) | [Call JavaScript action](/refguide8/javascript-action-call/) *(only in nanoflows)* | Calls a JavaScript action. Arguments can be passed to the action and the result can be stored in a variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/call-microflow.png" alt="microflow call" >}}](/refguide8/microflow-call/) | [Microflow call](/refguide8/microflow-call/) | Calls a microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |

## 5 Variable Activities

Variable activities can be used to create or change a variable within a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/change-variable.png" alt="change variable" >}}](/refguide8/change-variable/) | [Change variable](/refguide8/change-variable/) | Allows you to changes the value of a variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/create-variable.png" alt="create variable" >}}](/refguide8/create-variable/) | [Create variable](/refguide8/create-variable/) | Allows you to creates a new variable. |

## 6 Client Activities

Client activities can be used to have the web client of your application perform an action, such as showing a different page or downloading a file.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/call-nanoflow.png" alt="nanoflow call" >}}](/refguide8/nanoflow-call/) | [Call nanoflow](/refguide8/nanoflow-call/) *(only in nanoflows)* | Calls another nanoflow. Arguments can be passed to the nanoflow and the result can be stored in a variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/close-page.png" alt="close page" >}}](/refguide8/close-page/) | [Close page](/refguide8/close-page/) | Closes the page that was opened last by the user who called the microflow in which this activity is used. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/download-file.png" alt="download file" >}}](/refguide8/download-file/) | [Download file](/refguide8/download-file/) *(only in microflows)* | Can be used to enable the browser to download a specific file. The user who calls the microflow in which this activity is used gets a download pop-up window, or the file is shown directly in the browser. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/show-home-page.png" alt="show home page" >}}](/refguide8/show-home-page/) | [Show home page](/refguide8/show-home-page/) *(only in microflows)* | Navigates to the home page for the current user. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/show-message.png" alt="show message" >}}](/refguide8/show-message/) | [Show message](/refguide8/show-message/) | Allows you to show a blocking or non-blocking message to the user that calls the microflow in which this activity is used. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/show-page.png" alt="show page" >}}](/refguide8/show-page/) | [Show page](/refguide8/show-page/) | Allows you to show a page to the user that calls the microflow in which this activity is used. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/synchronize-to-device.png" alt="synchronize to device" >}}](/refguide8/synchronize-to-device/) | [Synchronize to device](/refguide8/synchronize-to-device/) *(only in microflows)* | Can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/synchronize.png" alt="synchronize" >}}](/refguide8/synchronize/) | [Synchronize](/refguide8/synchronize/)  *(only in nanoflows)* | Synchronizes data. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/validation-feedback.png" alt="validation feedback" >}}](/refguide8/validation-feedback/) | [Validation feedback](/refguide8/validation-feedback/) | Allows you to display a red text below a widget that displays an attribute or association. |

## 7 Integration Activities

Integration activities can be used to integrate with other systems, for example by calling a web service.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/call-rest-service.png" alt="call REST service" >}}](/refguide8/call-rest-action/) | [Call REST service](/refguide8/call-rest-action/)        | Can be used to call a REST endpoint. You can use mappings to map results to entities or entities to requests. You can also use string templates and store the result in a string variable. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/call-web-service.png" alt="call web service action" >}}](/refguide8/call-web-service-action/) | [Call web service](/refguide8/call-web-service-action/)  | Can be used to call one of the [imported web services](/refguide8/consumed-web-services/). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/import-with-mapping.png" alt="import with mapping" >}}](/refguide8/import-mapping-action/) | [Import with mapping](/refguide8/import-mapping-action/) | Can be used to parse the data in a string variable or data stored in a file document, and store them to entities defined in the [domain model](/refguide8/domain-model/) of the database. An [import mapping](/refguide8/import-mappings/) is used to map the incoming XML or JSON to entities. |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/export-with-mapping.png" alt="export with mapping" >}}](/refguide8/export-mapping-action/) | [Export with mapping](/refguide8/export-mapping-action/) | Can be used to export the data stored in [domain model](/refguide8/domain-model/) entities into an XML or JSON string. It can also be stored in a file document. An [export mapping](/refguide8/export-mappings/) is used to map domain model entities into XML or JSON. |

## 8 Logging Activities

| Graphic                                                      | Name                       | Description                                                  |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------ |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/log-message.png" alt="log message" >}}](/refguide8/log-message/) | [Log message](/refguide8/log-message/) | Allows you to create messages that appear in the log of your Mendix application. |

## 9 Document Generation Activities

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide8/modeling/application-logic/activities/generate-document.png" alt="generate document" >}}](/refguide8/generate-document/) | [Generate document](/refguide8/generate-document/) *(only in nanoflows)* | Allows you to create a document of a certain type based on a [template](/refguide8/document-templates/). |