---
title: "Error Event"
space: "Mendix 7 Reference Guide"
parent: "microflows"
---


An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. This event throws the error again, so the caller of the microflow can catch them.

<div class="alert alert-warning">{% markdown %}

You can only use an Error Event if an error is in scope: the Modeler does not accept it if you connect the normal execution flow to an error event, because there would not be an error to rethrow.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

In this example, an error is caught while committing an object to the database, and is rethrown at the error event. From outside the microflow, you can catch this error with custom error handling and react appropriately. So you can implement your error handling on multiple levels.

![](attachments/16713807/16843954.png)

{% endmarkdown %}</div>
