---
title: "Activities"
parent: "microflows"
space: "Reference Guide 5"
---


Activities are the actions that are executed in a microflow.

## Object Activitities

Graphic | Name | Description
----- | ---- | ----
[![](attachments/819203/918013.png)](/refguide5/cast-object)      | [Cast Object](/refguide5/cast-object)           | Cast Object can be used in combination with an [inheritance split](/refguide5/inheritance-split) to use the [specialized](/refguide5/entities) members of the object.
[![](attachments/819203/917661.png)](/refguide5/change-object)    | [Change Object](/refguide5/change-object)       | Change Object can be used to change the members of an object. This can be done with or without commiting and with or without events.
[![](attachments/819203/917756.png)](/refguide5/create-object)    | [Create Object](/refguide5/create-object)       | Create Object can be used to create an object.
[![](attachments/819203/918191.png)](/refguide5/deleting-objects) | [Delete Object(s)](/refguide5/deleting-objects) | Delete Object can be used to delete an object.
[![](attachments/819203/918119.png)](/refguide5/rollback-object)  | [Rollback Object](/refguide5/rollback-object)   | Rollback Object can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore it deletes objects that have been created but have never been committed.
[![](attachments/819203/917866.png)](/refguide5/retrieve)         | <Retrieve>                           | Retrieve can be used to get one (or more) associated objects of another object. Furthermore the activity can also get one (or more) objects directly from the database.


## List Activitities

Graphic | Name | Description
----- | ---- | ----
[![](attachments/819203/918028.png)](/refguide5/aggregate-list) | [Aggregate List](/refguide5/aggregate-list) | Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.
[![](attachments/819203/918007.png)](/refguide5/change-list)    | [Change List](/refguide5/change-list)       | Change List can be used to change the content of a list variable.
[![](attachments/819203/918009.png)](/refguide5/create-list)    | [Create List](/refguide5/create-list)       | Create List can be used to create a (empty) list variable.
[![](attachments/819203/917792.png)](/refguide5/list-operation) | [List Operation](/refguide5/list-operation) | List operation can be used to combine or compare two list with objects of the same entity.


## Action Call Activities

Graphic | Name | Description
----- | ---- | ----
[![](attachments/819203/918001.png)](/refguide5/microflow-call)   | [Microflow Call](/refguide5/microflow-call)     | Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable.
[![](attachments/819203/918018.png)](/refguide5/java-action-call) | [Java Action Call](/refguide5/java-action-call) | Java action call can be used to call a Java action. Arguments can be passed to the action and the result can be stored in a variable.


## Variable Activitities

Graphic | Name | Description
----- | ---- | ----
[![](attachments/819203/918011.png)](/refguide5/change-variable) | [Change Variable](/refguide5/change-variable) | Change Variable can be used to change the value of a variable.
[![](attachments/819203/918110.png)](/refguide5/create-variable) | [Create Variable](/refguide5/create-variable) | Create Variable can be used to create a new variable.


## Client Activitities

Graphic | Name | Description
----- | ---- | ----
[![](attachments/819203/918114.png)](/refguide5/close-form)          | [Close Form](/refguide5/close-form)                   | Close Form closes the form that is opened last by the user that calls the microflow where this activity is used in.
[![](attachments/819203/918108.png)](/refguide5/download-file)       | [Download File](/refguide5/download-file)             | Download File can be used to enable the browser to download a specific file. The user, that calls the microflow where this activity is used in, gets a download popup or the file is shown directly in the browser.
[![](attachments/819203/918099.png)](/refguide5/show-message)        | [Show Message](/refguide5/show-message)               | Show Message can be used to show a blocking or non-blocking message to the user that calls the microflow where this activity is used in.
[![](attachments/819203/917544.png)](/refguide5/show-page)           | [Show Page](/refguide5/show-page)                     | Show Form can be used to show a form to the user that calls the microflow where this activity is used in.
[![](attachments/819203/918097.png)](/refguide5/validation-feedback) | [Validation Feedback](/refguide5/validation-feedback) | Validation feedback can be used to display a red text below a widget that displays an attribute or association.


## Integration Activitities

Graphic | Name | Description
----- | ---- | ----
[![](attachments/819203/918003.png)](/refguide5/call-web-service)  | [Call Web Service](/refguide5/call-web-service)   | Call Web Service can be used to call one of the [imported web services](/refguide5/consumed-web-services). The content of the request can be edited. Furthermore the response of the webservice can be mapped to entities, stored in a variable or be ignored.
[![](attachments/819203/918124.png)](/refguide5/generate-document) | [Generate Document](/refguide5/generate-document) | Generate Document can be used to create a document of a certain type based on a [template](/refguide5/document-templates).
[![](attachments/819203/918121.png)](/refguide5/import-xml)        | [Import XML](/refguide5/import-xml)               | Import XML can be used to save the data stored in a XML document in the structure defined in the [domain model](/refguide5/domain-model) of the database.
