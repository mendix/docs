---
title: "Microflows"
category: "Modeler"
space: "Reference Guide 5"
---


<div class="alert alert-info">{% markdown %}

This part is an overview of all the elements that can be used in a microflow. For the properties of the microflow itself, see [Microflow](Microflow).

{% endmarkdown %}</div>

Microflows allow you to express the logic of your application. A microflow can perform actions like creating and updating objects, opening forms and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

## Keyboard Support

In Mendix 5.1.0 keyboard navigation in the microflow editor was improved. See the table for the meaning of the various keys. In older versions only the home and end key are supported plus typing to change the caption of an element.

<table><thead><tr><th class="confluenceTh">Key</th><th class="confluenceTh">Effect</th></tr></thead><tbody><tr><td class="confluenceTd">Arrow</td><td class="confluenceTd">Select nearby element (activity, event, loop or parameter) in the direction of the arrow.</td></tr><tr><td class="confluenceTd">Enter</td><td class="confluenceTd">Edit the properties of the selected element.</td></tr><tr><td class="confluenceTd">F2</td><td class="confluenceTd">Rename the variable introduced by the selected element.</td></tr><tr><td class="confluenceTd">Shift+F2 or just start typing</td><td class="confluenceTd">Edit the caption of the selected element.</td></tr><tr><td class="confluenceTd">Ctrl+Arrow</td><td class="confluenceTd">Move the selected element in the direction of the arrow.</td></tr><tr><td class="confluenceTd">Tab</td><td class="confluenceTd">If a loop is selected, the first element inside the loop will be selected.</td></tr><tr><td class="confluenceTd">Shift+Tab</td><td class="confluenceTd">If an element inside a loop is selected, the loop itself will be selected.</td></tr><tr><td class="confluenceTd">Home</td><td class="confluenceTd">Select the start event.</td></tr><tr><td class="confluenceTd">End</td><td class="confluenceTd">Cycle through the end events.</td></tr><tr><td class="confluenceTd">Context-menu key or Shift-F10</td><td class="confluenceTd">Open the context-menu for the currently selected element.</td></tr></tbody></table>

## Notation

The graphical notation of microflows is based on the Business Process Modeling Notation (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A microflow is composed of elements. Below is a categorized overview of all elements. The following categories are used:

*   [Events](Microflows) represent start and end points of a microflow and special operations in a loop.
*   [Flows](Microflows) form the connection between elements.
*   [Gateways](Microflows) deal with making choices and merging different paths again.
*   [Activities](Microflows) are the actions that are executed in a microflow.
*   [Artifacts](Microflows) provide the microflow with input and allow comments to be made.
*   [Error handlers](Microflows) can be set on an activity, gateway or loop to define how to handle an error.

## Events

Events represent start and end points of a microflow and special operations in a loop.

<table><thead><tr><th class="confluenceTh">Graphic</th><th class="confluenceTh">Name</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd"><a href="Start+Event"><img class="confluence-embedded-image" src="attachments/819203/917902.png" ></a></td><td class="confluenceTd"><a href="Start+Event">Start Event</a></td><td class="confluenceTd">A start event is the starting point of the microflow. A microflow can only have one start event.</td></tr><tr><td class="confluenceTd"><a href="End+Event"><img class="confluence-embedded-image" src="attachments/819203/918113.png" ></a></td><td class="confluenceTd"><a href="End+Event">End Event</a></td><td class="confluenceTd">An end event defines the location where the microflow will stop. Depending on the return type of the microflow in some cases a value must be specified. There can be more than one end event.</td></tr><tr><td colspan="1" class="confluenceTd"><img class="confluence-embedded-image confluence-thumbnail" width="23" src="attachments/4522004/12451844.png" ></td><td colspan="1" class="confluenceTd"><a href="Error+Event">Error Event</a></td><td colspan="1" class="confluenceTd">An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not.</td></tr><tr><td class="confluenceTd"><a href="Continue+Event"><img class="confluence-embedded-image" src="attachments/819203/918115.png" ></a></td><td class="confluenceTd"><a href="Continue+Event">Continue Event</a></td><td class="confluenceTd">A continue event is used to stop the current iteration of a loop and continue with the next iteration. Please note that continue events can only be used inside a <a href="Loop">Loop</a>.</td></tr><tr><td class="confluenceTd"><a href="Break+Event"><img class="confluence-embedded-image" src="attachments/819203/918026.png" ></a></td><td class="confluenceTd"><a href="Break+Event">Break Event</a></td><td class="confluenceTd">A break event is used to stop iterating over the list of objects and continue with the rest of the flow after the loop. Please note that break events can only be used inside a <a href="Loop">Loop</a>.</td></tr></tbody></table>

## Flows

Flows form the connection between elements.

<table><thead><tr><th class="confluenceTh">Graphic</th><th class="confluenceTh">Name</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd"><a href="Sequence+Flow"><img class="confluence-embedded-image" src="attachments/819203/917883.png" ></a></td><td class="confluenceTd"><a href="Sequence+Flow">Sequence Flow</a></td><td class="confluenceTd">A sequence flow is an arrow that links events, activities, splits and merges with each other. Together they defined the order of execution within a microflow.</td></tr><tr><td class="confluenceTd"><a href="Annotation+flow"><img class="confluence-embedded-image" src="attachments/819203/917688.png" ></a></td><td class="confluenceTd"><a href="Annotation+flow">Annotation flow</a></td><td class="confluenceTd">An association is a connection that can be used to connect an annotation to another element.</td></tr></tbody></table>

## Gateways

Gateways deal with making choices and merging different paths again..

<table><thead><tr><th class="confluenceTh">Graphic</th><th class="confluenceTh">Name</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd"><a href="Exclusive+Split"><img class="confluence-embedded-image" src="attachments/819203/917726.png" ></a></td><td class="confluenceTd"><a href="Exclusive+Split">Exclusive Split</a></td><td class="confluenceTd">An exclusive split makes a decision based on a condition and follows one and only one of the outgoing flows.<br class="atl-forced-newline"><strong>Note</strong>: There is no parallell execution in microflows.</td></tr><tr><td class="confluenceTd"><a href="Inheritance+Split"><img class="confluence-embedded-image" src="attachments/819203/918122.png" ></a></td><td class="confluenceTd"><a href="Inheritance+Split">Inheritance Split</a></td><td class="confluenceTd">An inheritance split is an element that makes a choice based on the <a href="Entities">specialization</a> of the selected object. You can give the specialized object a name using a <a href="Cast+Object">Cast Object</a> action.</td></tr><tr><td class="confluenceTd"><a href="Merge"><img class="confluence-embedded-image" src="attachments/819203/918116.png" ></a></td><td class="confluenceTd"><a href="Merge">Merge</a></td><td class="confluenceTd">A merge can be used to combine multiple sequence flows into one. If a choice is made in a microflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge.</td></tr></tbody></table>

## Activities

Activities are the actions that are executed in a microflow.

<table><thead><tr><th class="confluenceTh">Graphic</th><th class="confluenceTh">Name</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd"><a href="Activities"><img class="confluence-embedded-image" src="attachments/819203/918096.png" ></a></td><td class="confluenceTd"><a href="Activities">Activity</a></td><td class="confluenceTd">An activity can be used to execute a specific action in a microflow.</td></tr><tr><td class="confluenceTd"><a href="Loop"><img class="confluence-embedded-image" src="attachments/819203/917804.png" ></a></td><td class="confluenceTd"><a href="Loop">Loop</a></td><td class="confluenceTd">A looped activity is used to iterate over a list of objects. For every object the flow inside the looped activity is executed. A looped activity can contain all elements used in microflows, with the exception of start and stop events. The flow starts at the first element with no incoming flows.</td></tr></tbody></table>

## Artifacts

Artifacts provide the microflow with input and allow comments to be made.

<table><thead><tr><th class="confluenceTh">Graphic</th><th class="confluenceTh">Name</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd"><a href="Parameter"><img class="confluence-embedded-image" src="attachments/819203/918019.png" ></a></td><td class="confluenceTd"><a href="Parameter">Parameter</a></td><td class="confluenceTd">A parameter is data that serves as input for the microflow. Parameters are filled at the location from where the microflow is triggered.</td></tr><tr><td class="confluenceTd"><a href="Annotation"><img class="confluence-embedded-image" src="attachments/819203/917689.png" ></a></td><td class="confluenceTd"><a href="Annotation">Annotation</a></td><td class="confluenceTd">An annotation is an element that can be used to put comments in a microflow.</td></tr></tbody></table>

## Variable usages

The Modeler visualizes which variables are used by the selected object(s). It does this by showing the used variables in white text on a blue background. Conversely, elements that use the variable(s) defined by the selected object(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter AccountPasswordData is highlighted because it is used in the selected activity. And the activity 'Save password' has a usage label because it uses the variable defined by the selected activity.

In versions older than Mendix 5.20, usages were highlighted by blue and green borders.

![](attachments/4522004/16285744.png)

## Errors

When an error occurs in a microflow, all changes that have been made to objects are rolled back and the microflow is aborted. Optionally, you can handle errors in the microflow itself by configuring different error handling settings. You can even inspect the details of the error by looking at the predefined variables `$latestError` and `$latestSoapFault`.

### Error handlers

An error handler can be set on an activity, gateway or loop.
On an activity or gateway it gives you three options:

*   Rollback (default)
*   Custom with rollback
*   Custom without rollback

For the latter two options you can draw an additional flow from the block and mark this flow as the error handler flow. When selecting 'Custom with rollback' it will trigger this path when the error occurs and still rollback your objects afterwards. The 'Custom without rollback' option does not rollback the objects. After you selected a flow as the error handler it will show this as in the following image.

![](attachments/819203/918247.png)

On a loop you get two options:

*   Rollback (default)
*   Continue

The continue option means that when an error occurs, the loop will simply continue to the next iteration. It will show as a continue icon on the exit flow of the loop.

![](attachments/819203/918246.png)

### Inspecting errors

When an error occurs inside a microflow, under the hood a Java exception is raised that contains information about the error that occurred. Inside a custom error handler (i.e. after an error handling flow), you can inspect the type of this Java exception as well as several other properties. Every microflow contains two predefined error variables, `$latestError` and `$latestSoapFault`. `$latestError` is an object of entity System.Error, while `$latestSoapFault` is an object of entity System.SoapFault, which is a specialization of System.Error.

In a custom error handler that is executed after an error occurs, `$latestError` is set to an object containing information about the error that occurred. If the error is a SOAP fault (an error that occurs as a result of a web service call), `$latestSoapFault` is set to an object that contains more specific information about the SOAP fault. Otherwise, `$latestSoapFault` is `empty`.

<div class="alert alert-success">{% markdown %}

You can determine whether an error was a SOAP fault by checking `$latestSoapFault` for `empty`.

{% endmarkdown %}</div>

The following table shows the attributes of System.Error and System.SoapFault.

<table><thead><tr><th class="confluenceTh">Entity</th><th class="confluenceTh">Attribute</th><th class="confluenceTh">Type</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">System.Error</td><td class="confluenceTd">ErrorType</td><td class="confluenceTd">String</td><td class="confluenceTd">The Java exception type of the error that occurred.</td></tr><tr><td class="confluenceTd">System.Error</td><td class="confluenceTd">Message</td><td class="confluenceTd">String</td><td class="confluenceTd">The message of the Java exception.</td></tr><tr><td class="confluenceTd">System.Error</td><td class="confluenceTd">Stacktrace</td><td class="confluenceTd">String</td><td class="confluenceTd">The stacktrace of the Java exception.</td></tr><tr><td class="confluenceTd">System.SoapFault</td><td class="confluenceTd">Code</td><td class="confluenceTd">String</td><td class="confluenceTd">The Code element of the SOAP fault.</td></tr><tr><td class="confluenceTd">System.SoapFault</td><td class="confluenceTd">Reason</td><td class="confluenceTd">String</td><td class="confluenceTd">The Reason element of the SOAP fault.</td></tr><tr><td class="confluenceTd">System.SoapFault</td><td class="confluenceTd">Node</td><td class="confluenceTd">String</td><td class="confluenceTd">The Node element of the SOAP fault.</td></tr><tr><td class="confluenceTd">System.SoapFault</td><td class="confluenceTd">Role</td><td class="confluenceTd">String</td><td class="confluenceTd">The Role element of the SOAP fault.</td></tr><tr><td class="confluenceTd">System.SoapFault</td><td class="confluenceTd">Detail</td><td class="confluenceTd">String</td><td class="confluenceTd">The Detail element of the SOAP fault.</td></tr></tbody></table>

Click [here](http://www.w3.org/TR/soap12-part1/#soapfault) for more information on SOAP faults.

<div class="alert alert-warning">{% markdown %}

In microflows that apply entity access, which are recognizable by their yellow background, it is not possible to inspect the attributes of error objects for security reasons. You can pass the error object to a submicroflow that does not apply entity access and inspect the attributes there.

{% endmarkdown %}</div>

## Microflow Debugging

If you want to see what happens while a microflow is executing, you can use the microflow debugger. See the following how-tos:

*   [Debugging Microflows](/howto50/Debugging+Microflows)
*   [Debugging Microflows Remotely](/howto50/Debugging+Microflows+Remotely)
