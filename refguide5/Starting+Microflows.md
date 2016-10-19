---
title: "Starting Microflows"
parent: "Page+Concepts"
space: "Reference Guide 5"
---


Mendix allows for microflows to be triggered in pages by a variety of methods. These methods share a set of properties that determine the conditions in which the microflow is run. Listed below are all the components that can directly trigger microflows. Also listed are the event that will cause the microflow to trigger, as well as the parameter that can be made available to the triggered microflow. 

<table><thead><tr><th class="confluenceTh">Component</th><th class="confluenceTh">Event/property</th><th class="confluenceTh">Available parameter</th></tr></thead><tbody><tr><td class="confluenceTd">Data view action button</td><td class="confluenceTd">On click</td><td class="confluenceTd">Data view object</td></tr><tr><td class="confluenceTd">Data view</td><td class="confluenceTd">Data source</td><td class="confluenceTd">Object of the data view containing this data view</td></tr><tr><td class="confluenceTd">Grid action button (1)</td><td class="confluenceTd">On click</td><td class="confluenceTd">Grid selection or clicked row (as an object or as a list, depending on the <a href="Data+grid#selection-mode" rel="nofollow">selection mode</a>)</td></tr><tr><td class="confluenceTd">Reference set selector</td><td class="confluenceTd">On change</td><td class="confluenceTd">Data view object</td></tr><tr><td class="confluenceTd">Attribute widget (2)</td><td class="confluenceTd">On change</td><td class="confluenceTd">Data view object</td></tr><tr><td class="confluenceTd">Attribute widget</td><td class="confluenceTd">On enter</td><td class="confluenceTd">Data view object</td></tr><tr><td class="confluenceTd">Attribute widget</td><td class="confluenceTd">On leave</td><td class="confluenceTd">Data view object</td></tr><tr><td class="confluenceTd">Image viewer</td><td class="confluenceTd">On click</td><td class="confluenceTd">Image viewer object</td></tr><tr><td class="confluenceTd">Action button</td><td class="confluenceTd">On click</td><td class="confluenceTd">Enclosing data view object, if available</td></tr><tr><td class="confluenceTd">Reference selector</td><td class="confluenceTd">Data source</td><td class="confluenceTd">Data view object</td></tr></tbody></table>

(1) The following 'grid' widgets have microflow buttons: data grid, template grid and reference set selector.
(2) The following widgets are attribute widgets: check box, date picker, drop-down, text area, and text box.

## Microflow

This is the microflow that will be executed. Its parameters should match the available arguments.

<div class="alert alert-success">{% markdown %}

You can create a new microflow by clicking 'Select...' and then 'New'. Modeler will generate a microflow with parameters matching all available arguments. If a parameter is not used it can simply be deleted.

{% endmarkdown %}</div>

## Microflow arguments

<div class="alert alert-info">{% markdown %}

Since Mendix 5.17\. For older versions see the [following section](Starting+Microflows).

{% endmarkdown %}</div>

The arguments sent to the microflow are automatically configured based on the parameters of the selected microflow and the available arguments. Which arguments are available depends on the widget calling the microflow. For a full listing consult the table above. Additionally, if the widget calling a microflow is contained inside a nested data view, then the object of the enclosing data view is also available.

The arguments available to a data or template grid control bar button are determined by the selection mode of the grid. No selection will result in no parameters and single selection results in a single object. (Simple) multi-selection allows for both all pages and selection, which defaults to selection. This can be configured by drop-down in the microflow settings page. 

## Execution

### Microflow call type

This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see whether the microflow is done executing.

<div class="alert alert-warning">{% markdown %}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{% endmarkdown %}</div><table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Synchronous</td><td class="confluenceTd">The client waits until the microflow is done executing.</td></tr><tr><td class="confluenceTd">Asynchronous</td><td class="confluenceTd">The client executes the microflow and starts polling to determine whether the microflow is done executing.</td></tr></tbody></table>

_Default value_: Synchronous

### Show progress bar

This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">None</td><td class="confluenceTd">No progress bar is shown.</td></tr><tr><td class="confluenceTd">Non-Blocking</td><td class="confluenceTd">A progress bar is shown, but the end user can continue working.</td></tr><tr><td class="confluenceTd">Blocking</td><td class="confluenceTd">A progress bar is shown and the end user must wait until the microflow is done.</td></tr></tbody></table>

### Progress message

The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).

## Confirmation

If a microflow is triggered by a button you have the option to ask for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete. The user will be prompted with a question whether he/she wants to continue with this operation.

Note: the title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

### Ask confirmation

Here you can specify whether you want to ask for confirmation or not.

_Default value_: No

### Question

This is the question that you want to show to the user. For example, "Are you sure you want to empty the trash can?".

### Proceed button caption

This is the caption for the button that proceeds with the execution of the microflow. For example, "Empty trash can"

### Cancel button caption

This is the caption for the button that cancels the execution of the microflow. For example, "Cancel".

## Advanced

### Maintain selection after microflow (only for grid microflow buttons)

This property specifies whether the selection of the data or template grid should be maintained after executing the microflow.

_Default value:_ No

### Abort on validation errors

For microflows that are used within a data view, you can specify whether you want to perform page validations before executing the microflow. There are two kind of page validations:

1.  Required: the input field must be given a value.
2.  Maximum length: the input field must not exceed a given length.

By using this property you can perform page validations _before_ executing the microflow. If the validations fail, the microflow will not be executed.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Yes</td><td class="confluenceTd">This will prevent the microflow from executing on all validation errors.</td></tr><tr><td class="confluenceTd">Only for this widget</td><td class="confluenceTd">This will prevent the microflow from executing on validation errors of the specific widget.</td></tr><tr><td class="confluenceTd">No</td><td class="confluenceTd">The microflow will always be executed.</td></tr></tbody></table>

_Default value:_ Yes

<div class="alert alert-info">{% markdown %}

This following section applies to versions older than 5.17\. For newer versions see the [previous section](Starting+Microflows).

{% endmarkdown %}</div>

## General

The properties in parameters section determine what information is sent to the microflow in the page of parameters. The parameters inside the microflow should match what is specified here.

### Pass "data view/data grid/template grid/reference set selector/image viewer" object

<div class="alert alert-info">{% markdown %}

Removed in Mendix 5.17

{% endmarkdown %}</div>

The first parameter that can be passed to the microflow can be seen in the third column of the table above. It can be the data view object in the case of events on attribute widgets or the selection of the data grid in the case of microflow buttons in the control bar of the grid.

In the case of a data view or image viewer object you can choose whether or not to send this object to the microflow.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Yes</td><td class="confluenceTd">This will pass the object of the data view or image viewer as a parameter to the microflow.</td></tr><tr><td class="confluenceTd">No</td><td class="confluenceTd">This will not pass the object.</td></tr></tbody></table>

_Default value:_ Yes

In the case of a grid button you can choose whether to send the selection, all objects in the grid or nothing to the microflow.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Nothing</td><td class="confluenceTd">The grid selection is not sent to the microflow.</td></tr><tr><td class="confluenceTd">Selection</td><td class="confluenceTd">The selected object(s) will be sent to the microflow. If the grid allows multi-select the selection will be a list. If not, the selection will be exactly one object.</td></tr><tr><td class="confluenceTd">All pages</td><td class="confluenceTd">All objects will be sent to the microflow in a list.</td></tr></tbody></table>

### Pass enclosing data view object

<div class="alert alert-info">{% markdown %}

Removed in Mendix 5.17

{% endmarkdown %}</div>

If the data grid or data view that refers to the microflow is contained by another data view, you can also choose to send the object of that data view to the microflow.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Yes</td><td class="confluenceTd">This will pass the object of the enclosing data view as a parameter to the microflow.</td></tr><tr><td class="confluenceTd">No</td><td class="confluenceTd">No parameter will be passed.</td></tr></tbody></table>

_Default value:_ No

### Microflow

This is the microflow that will be executed. Its parameters should match the parameters that are passed to it.

<div class="alert alert-success">{% markdown %}

If you create the microflow using the New button in the Select page, a microflow will be created with the correct parameters. Make sure you first select what you want to pass as parameter in the parameter properties.

{% endmarkdown %}</div>

### Maintain selection after microflow (only for grid microflow buttons)

This property specifies whether the selection of the data or template grid should be maintained after executing the microflow.

_Default value:_ No

## Confirmation

If a microflow is triggered by a button you have the option to ask for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete. The user will be prompted with a question whether he/she wants to continue with this operation.

Note: the title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

### Ask confirmation

Here you can specify whether you want to ask for confirmation or not.

_Default value_: No

### Question

This is the question that you want to show to the user. For example, "Are you sure you want to empty the trash can?".

### Proceed button caption

This is the caption for the button that proceeds with the execution of the microflow. For example, "Empty trash can"

### Cancel button caption

This is the caption for the button that cancels the execution of the microflow. For example, "Cancel".

## Advanced

### Abort on validation errors

For microflows that are used within a data view, you can specify whether you want to perform page validations before executing the microflow. There are two kind of page validations:

1.  Required: the input field must be given a value.
2.  Maximum length: the input field must not exceed a given length.

By using this property you can perform page validations _before_ executing the microflow. If the validations fail, the microflow will not be executed.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Yes</td><td class="confluenceTd">This will prevent the microflow from executing on all validation errors.</td></tr><tr><td class="confluenceTd">Only for this widget</td><td class="confluenceTd">This will prevent the microflow from executing on validation errors of the specific widget.</td></tr><tr><td class="confluenceTd">No</td><td class="confluenceTd">The microflow will always be executed.</td></tr></tbody></table>

_Default value:_ Yes

### Show progress bar

This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">None</td><td class="confluenceTd">No progress bar is shown.</td></tr><tr><td class="confluenceTd">Non-Blocking</td><td class="confluenceTd">A progress bar is shown, but the end user can continue working.</td></tr><tr><td class="confluenceTd">Blocking</td><td class="confluenceTd">A progress bar is shown and the end user must wait until the microflow is done.</td></tr></tbody></table>

### Progress message

The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).

### Microflow call type

This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see whether the microflow is done executing.

<div class="alert alert-warning">{% markdown %}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{% endmarkdown %}</div><table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Synchronous</td><td class="confluenceTd">The client waits until the microflow is done executing.</td></tr><tr><td class="confluenceTd">Asynchronous</td><td class="confluenceTd">The client executes the microflow and starts polling to determine whether the microflow is done executing.</td></tr></tbody></table>

_Default value_: Synchronous
