---
title: "Activities"
parent: "microflows"
---
Activities are the actions that are executed in a microflow.

## Object Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918013.png)](cast-object) | [Cast Object](cast-object) | Cast Object can be used in combination with an [inheritance split](inheritance-split) to use the [specialized](entities) members of the object. |
| [![](attachments/819203/917661.png)](change-object) | [Change Object](change-object) | Change Object can be used to change the members of an object. This can be done with or without commiting and with or without events. |
| [![](attachments/819203/917756.png)](create-object) | [Create Object](create-object) | Create Object can be used to create an object. |
| [![](attachments/819203/918191.png)](delete-objects) | [Delete Object(s)](delete-objects) | Delete Object can be used to delete an object. |
| [![](attachments/819203/918119.png)](rollback-object) | [Rollback Object](rollback-object) | Rollback Object can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore it deletes objects that have been created but have never been committed. |
| [![](attachments/819203/917866.png)](retrieve) | [Retrieve](retrieve) | Retrieve can be used to get one (or more) associated objects of another object. Furthermore the activity can also get one (or more) objects directly from the database. |

## List Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918028.png)](aggregate-list) | [Aggregate List](aggregate-list) | Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects. |
| [![](attachments/819203/918007.png)](change-list) | [Change List](change-list) | Change List can be used to change the content of a list variable. |
| [![](attachments/819203/918009.png)](create-list) | [Create List](create-list) | Create List can be used to create a (empty) list variable. |
| [![](attachments/819203/917792.png)](list-operation) | [List Operation](list-operation) | List operation can be used to combine or compare two list with objects of the same entity. |

## Action Call Activities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918001.png)](microflow-call) | [Microflow Call](microflow-call) | Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable. |
| [![](attachments/819203/918018.png)](java-action-call) | [Java Action Call](java-action-call) | Java action call can be used to call a Java action. Arguments can be passed to the action and the result can be stored in a variable. |

## Variable Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918011.png)](change-variable) | [Change Variable](change-variable) | Change Variable can be used to change a Boolean, DateTime, Enumeration, Float/Currency, Integer/Long or String variable. |
| [![](attachments/819203/918110.png)](create-variable) | [Create Variable](create-variable) | Create Variable can be used to create a Boolean, DateTime, Enumeration, Float/Currency, Integer/Long or String variable. |

## Client Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918114.png)](close-form) | [Close Form](close-form) | Close Form closes the form that is opened last by the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/918108.png)](download-file) | [Download File](download-file) | Download File can be used to enable the browser to download a specific file. The user, that calls the microflow where this activity is used in, gets a download popup or the file is shown directly in the browser. |
| [![](attachments/819203/918099.png)](show-message) | [Show Message](show-message) | Show Message can be used to show a blocking or non-blocking message to the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/917544.png)](show-form) | [Show Form](show-form) | Show Form can be used to show a form to the user that calls the microflow where this activity is used in. |
| [![](attachments/819203/918097.png)](validation-feedback) | [Validation Feedback](validation-feedback) | Validation feedback can be used to display a red text below a widget that displays an attribute or association. |

## Integration Activitities

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918003.png)](call-web-service) | [Call Web Service](call-web-service) | Call Web Service can be used to call one of the [imported web services](imported-web-services). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored. |
| [![](attachments/819203/918124.png)](generate-document) | [Generate Document](generate-document) | Generate Document can be used to create a document of a certain type based on a [template](document-templates). |
| [![](attachments/819203/918121.png)](import-xml) | [Import XML](import-xml) | Import XML can be used to save the data stored in a XML document in the structure defined in the [domain model](domain-model) of the database. |
