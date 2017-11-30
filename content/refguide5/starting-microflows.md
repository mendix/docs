---
title: "Starting Microflows"
parent: "page-concepts"
---


Mendix allows for microflows to be triggered in pages by a variety of methods. These methods share a set of properties that determine the conditions in which the microflow is run. Listed below are all the components that can directly trigger microflows. Also listed are the event that will cause the microflow to trigger, as well as the parameter that can be made available to the triggered microflow. 

Component               | Event/property | Available parameter
----------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------
Data view action button | On click       | Data view object
Data view               | Data source    | Object of the data view containing this data view
Grid action button (1)  | On click       | Grid selection or clicked row (as an object or as a list, depending on the [selection mode](data-grid#selection-mode))
Reference set selector  | On change      | Data view object
Attribute widget (2)    | On change      | Data view object
Attribute widget        | On enter       | Data view object
Attribute widget        | On leave       | Data view object
Image viewer            | On click       | Image viewer object
Action button           | On click       | Enclosing data view object, if available
Reference selector      | Data source    | Data view object


(1) The following 'grid' widgets have microflow buttons: data grid, template grid and reference set selector.
(2) The following widgets are attribute widgets: check box, date picker, drop-down, text area, and text box.

## Microflow

This is the microflow that will be executed. Its parameters should match the available arguments.

{{% alert type="success" %}}

You can create a new microflow by clicking 'Select...' and then 'New'. Modeler will generate a microflow with parameters matching all available arguments. If a parameter is not used it can simply be deleted.

{{% /alert %}}

## Microflow arguments

{{% alert type="info" %}}

Since Mendix 5.17\. For older versions see the [following section](starting-microflows).

{{% /alert %}}

The arguments sent to the microflow are automatically configured based on the parameters of the selected microflow and the available arguments. Which arguments are available depends on the widget calling the microflow. For a full listing consult the table above. Additionally, if the widget calling a microflow is contained inside a nested data view, then the object of the enclosing data view is also available.

The arguments available to a data or template grid control bar button are determined by the selection mode of the grid. No selection will result in no parameters and single selection results in a single object. (Simple) multi-selection allows for both all pages and selection, which defaults to selection. This can be configured by drop-down in the microflow settings page. 

## Execution

### Microflow call type

This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see whether the microflow is done executing.

{{% alert type="warning" %}}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{{% /alert %}}

Value        | Description
------------ | ----------------------------------------------------------------------------------------------------------
Synchronous  | The client waits until the microflow is done executing.
Asynchronous | The client executes the microflow and starts polling to determine whether the microflow is done executing.


_Default value_: Synchronous

### Show progress bar

This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

Value        | Description
------------ | -------------------------------------------------------------------------------
None         | No progress bar is shown.
Non-Blocking | A progress bar is shown, but the end user can continue working.
Blocking     | A progress bar is shown and the end user must wait until the microflow is done.


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

Value                | Description
-------------------- | -------------------------------------------------------------------------------------------
Yes                  | This will prevent the microflow from executing on all validation errors.
Only for this widget | This will prevent the microflow from executing on validation errors of the specific widget.
No                   | The microflow will always be executed.


_Default value:_ Yes

{{% alert type="info" %}}

This following section applies to versions older than 5.17\. For newer versions see the [previous section](starting-microflows).

{{% /alert %}}

## General

The properties in parameters section determine what information is sent to the microflow in the page of parameters. The parameters inside the microflow should match what is specified here.

### Pass "data view/data grid/template grid/reference set selector/image viewer" object

{{% alert type="info" %}}

Removed in Mendix 5.17

{{% /alert %}}

The first parameter that can be passed to the microflow can be seen in the third column of the table above. It can be the data view object in the case of events on attribute widgets or the selection of the data grid in the case of microflow buttons in the control bar of the grid.

In the case of a data view or image viewer object you can choose whether or not to send this object to the microflow.

Value | Description
----- | -------------------------------------------------------------------------------------------
Yes   | This will pass the object of the data view or image viewer as a parameter to the microflow.
No    | This will not pass the object.


_Default value:_ Yes

In the case of a grid button you can choose whether to send the selection, all objects in the grid or nothing to the microflow.

Value     | Description
--------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Nothing   | The grid selection is not sent to the microflow.
Selection | The selected object(s) will be sent to the microflow. If the grid allows multi-select the selection will be a list. If not, the selection will be exactly one object.
All pages | All objects will be sent to the microflow in a list.


### Pass enclosing data view object

{{% alert type="info" %}}

Removed in Mendix 5.17

{{% /alert %}}

If the data grid or data view that refers to the microflow is contained by another data view, you can also choose to send the object of that data view to the microflow.

Value | Description
----- | -------------------------------------------------------------------------------------
Yes   | This will pass the object of the enclosing data view as a parameter to the microflow.
No    | No parameter will be passed.


_Default value:_ No

### Microflow

This is the microflow that will be executed. Its parameters should match the parameters that are passed to it.

{{% alert type="success" %}}

If you create the microflow using the New button in the Select page, a microflow will be created with the correct parameters. Make sure you first select what you want to pass as parameter in the parameter properties.

{{% /alert %}}

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

Value                | Description
-------------------- | -------------------------------------------------------------------------------------------
Yes                  | This will prevent the microflow from executing on all validation errors.
Only for this widget | This will prevent the microflow from executing on validation errors of the specific widget.
No                   | The microflow will always be executed.


_Default value:_ Yes

### Show progress bar

This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

Value        | Description
------------ | -------------------------------------------------------------------------------
None         | No progress bar is shown.
Non-Blocking | A progress bar is shown, but the end user can continue working.
Blocking     | A progress bar is shown and the end user must wait until the microflow is done.


### Progress message

The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).

### Microflow call type

This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see whether the microflow is done executing.

{{% alert type="warning" %}}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{{% /alert %}}

Value        | Description
------------ | ----------------------------------------------------------------------------------------------------------
Synchronous  | The client waits until the microflow is done executing.
Asynchronous | The client executes the microflow and starts polling to determine whether the microflow is done executing.


_Default value_: Synchronous
