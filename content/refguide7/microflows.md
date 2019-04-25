---
title: "Microflows"
parent: "application-logic"
menu_order: 10
description: "Presents an overview of all the elements that can be used in a microflow."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="info" %}}

This page is an overview of all the elements that can be used in a microflow. For the properties of the microflow itself, see [Microflow Properties](microflow).

{{% /alert %}}

Microflows allow you to express the logic of your application. A microflow can perform actions such as creating and updating objects, showing pages and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

## 2 Keyboard Support

The microflow editor offers keyboard support for navigating and manipulating microflows. The following table shows the keys that can be used.

| Key | Effect |
| --- | --- |
| Arrow Keys | Select nearby element (activity, event, loop or parameter) in the direction of the arrow. |
| Enter | Edit the properties of the selected element. |
| F2 | Rename the variable introduced by the selected element. |
| Shift+F2 or just start typing | Edit the caption of the selected element. |
| Ctrl+Arrow Keys | Move the selected element in the direction of the arrow. |
| Tab | If a loop is selected, the first element inside the loop will be selected. |
| Shift+Tab | If an element inside a loop is selected, the loop itself will be selected. |
| Home | Select the start event. |
| End | Cycle through the end events. |
| Context-menu key or Shift-F10 | Open the context-menu for the currently selected element. |

## 3 Notation

The graphical notation of microflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A microflow is composed of elements. Below is a categorized overview of all elements. The following categories are used:

*   [Events](#events) represent start and end points of a microflow and special operations in a loop.
*   [Flows](#flows) form the connection between elements.
*   [Gateways](#gateways) deal with making choices and merging different paths again.
*   [Activities](#activities) are the actions that are executed in a microflow.
*   [Artifacts](#artifacts) provide the microflow with input and allow comments to be made.
*   [Error handlers](#errorhandlers) can be set on an activity, gateway or loop to define how to handle an error.

## 4 Events<a name="events"></a>

Events represent start and end points of a microflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/917902.png)](start-event) | [Start Event](start-event) | A start event is the starting point of the microflow. A microflow can only have one start event. |
| [![](attachments/819203/918113.png)](end-event) | [End Event](end-event) | An end event defines the location where the microflow will stop. Depending on the return type of the microflow in some cases a value must be specified. There can be more than one end event. |
| ![](attachments/16713739/16843951.png) | [Error Event](error-event) | An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. |
| [![](attachments/819203/918115.png)](continue-event) | [Continue Event](continue-event) | A continue event is used to stop the current iteration of a loop and continue with the next iteration. Please note that continue events can only be used inside a [Loop](loop). |
| [![](attachments/819203/918026.png)](break-event) | [Break Event](break-event) | A break event is used to stop iterating over the list of objects and continue with the rest of the flow after the loop. Please note that break events can only be used inside a [Loop](loop). |

## 5 Flows<a name="flows"></a>

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/917883.png)](sequence-flow) | [Sequence Flow](sequence-flow) | A sequence flow is an arrow that links events, activities, splits and merges with each other. Together they defined the order of execution within a microflow. |
| [![](attachments/819203/917688.png)](annotation-flow) | [Annotation flow](annotation-flow) | An association is a connection that can be used to connect an annotation to another element. |

## 6 Gateways<a name="gateways"></a>

Gateways deal with making choices and merging different paths again..

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/917726.png)](exclusive-split) | [Exclusive Split](exclusive-split) | An exclusive split makes a decision based on a condition and follows one and only one of the outgoing flows.
**Note**: There is no parallell execution in microflows. |
| [![](attachments/819203/918122.png)](inheritance-split) | [Inheritance Split](inheritance-split) | An inheritance split is an element that makes a choice based on the [specialization](entities) of the selected object. You can give the specialized object a name using a [Cast Object](cast-object) action. |
| [![](attachments/819203/918116.png)](merge) | [Merge](merge) | A merge can be used to combine multiple sequence flows into one. If a choice is made in a microflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

## 7 Activities<a name="activities"></a>

Activities are the actions that are executed in a microflow.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918096.png)](activities) | [Activity](activities) | An activity can be used to execute a specific action in a microflow. |
| [![](attachments/819203/917804.png)](loop) | [Loop](loop) | A looped activity is used to iterate over a list of objects. For every object the flow inside the looped activity is executed. A looped activity can contain all elements used in microflows, with the exception of start and stop events. The flow starts at the first element with no incoming flows. |

## 8 Artifacts<a name="artifacts"></a>

Artifacts provide the microflow with input and allow comments to be made.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/819203/918019.png)](parameter) | [Parameter](parameter) | A parameter is data that serves as input for the microflow. Parameters are filled at the location from where the microflow is triggered. |
| [![](attachments/819203/917689.png)](annotation) | [Annotation](annotation) | An annotation is an element that can be used to put comments in a microflow. |

## 9 Variable Usages

The Modeler visualizes which variables are used by the selected object(s). It does this by showing the used variables in white text on a blue background. Conversely, elements that use the variable(s) defined by the selected object(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity. And the activity **Save password** has a usage label because it uses the variable defined by the selected activity.

![](attachments/16713739/16843950.png)

## 10 Errors

When an error occurs in a microflow, all changes that have been made to objects are rolled back and the microflow is aborted. Optionally, you can handle errors in the microflow itself by configuring different error handling settings. You can even inspect the details of the error by looking at the predefined variables `$latestError` and `$latestSoapFault`.

### 10.1 Error Handlers<a name="errorhandlers"></a>

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

### 10.2 Inspecting Errors

When an error occurs inside a microflow, under the hood a Java exception is raised that contains information about the error that occurred. Inside a custom error handler (i.e. after an error handling flow), you can inspect the type of this Java exception as well as several other properties. Every microflow contains two predefined error variables, `$latestError` and `$latestSoapFault`. `$latestError` is an object of entity System.Error, while `$latestSoapFault` is an object of entity System.SoapFault, which is a specialization of System.Error.

In a custom error handler that is executed after an error occurs, `$latestError` is set to an object containing information about the error that occurred. If the error is a SOAP fault (an error that occurs as a result of a web service call), `$latestSoapFault` is set to an object that contains more specific information about the SOAP fault. Otherwise, `$latestSoapFault` is `empty`.

{{% alert type="success" %}}

You can determine whether an error was a SOAP fault by checking `$latestSoapFault` for `empty`.

{{% /alert %}}

The following table shows the attributes of System.Error and System.SoapFault.

| Entity | Attribute | Type | Description |
| --- | --- | --- | --- |
| System.Error | ErrorType | String | The Java exception type of the error that occurred. |
| System.Error | Message | String | The message of the Java exception. |
| System.Error | Stacktrace | String | The stacktrace of the Java exception. |
| System.SoapFault | Code | String | The Code element of the SOAP fault. |
| System.SoapFault | Reason | String | The Reason element of the SOAP fault. |
| System.SoapFault | Node | String | The Node element of the SOAP fault. |
| System.SoapFault | Role | String | The Role element of the SOAP fault. |
| System.SoapFault | Detail | String | The Detail element of the SOAP fault. |

Click [here](http://www.w3.org/TR/soap12-part1/#soapfault) for more information on SOAP faults.

{{% alert type="warning" %}}

In microflows that apply entity access, which are recognizable by their yellow background, it is not possible to inspect the attributes of error objects for security reasons. You can pass the error object to a submicroflow that does not apply entity access and inspect the attributes there.

{{% /alert %}}

## 11 Microflow Debugging

If you want to see what happens while a microflow is executing, you can use the microflow debugger. See the following how-tos:

*   [Debugging Microflows](/howto7/monitoring-troubleshooting/debug-microflows)
*   [Debugging Microflows Remotely](/howto7/monitoring-troubleshooting/debug-microflows-remotely)
