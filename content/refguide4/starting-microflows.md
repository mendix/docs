---
title: "Starting Microflows"
parent: "form-concepts"
---
In places where microflows are started from forms there are a number of properties that can be set. The following components can start microflows. The first column is the component that triggers the microflow; the second column tells you when the microflow is started. Finally, the third column shows what the first parameter of the microflow will be (see the category Parameters below).

| Component | Event/property | First parameter |
| --- | --- | --- |
| Data view microflow button | On click | Data view object |
| Data view | Data source | Object of the data view containing this data view |
| Grid microflow button (1) | On click | Grid selection |
| Reference set selector | On change | Data view object |
| Attribute widget (2) | On change | Data view object |
| Attribute widget | On enter | Data view object |
| Attribute widget | On leave | Data view object |
| Image viewer | On click | Image viewer object |
| Microflow trigger | On click | Data view object |
| Reference selector | Data source | Data view object |

(1) The following 'grid' widgets have microflow buttons: data grid, template grid and reference set selector.
(2) The following widgets are attribute widgets: check box, date picker, drop-down, text area, and text box.

## General

The properties in parameters section determine what information is sent to the microflow in the form of parameters. The parameters inside the microflow should match what is specified here.

### Pass "data view/data grid/template grid/reference set selector/image viewer" object

The first parameter that can be passed to the microflow can be seen in the third column of the table above. It can be the data view object in the case of events on attribute widgets or the selection of the data grid in the case of microflow buttons in the control bar of the grid.

In the case of a data view or image viewer object you can choose whether or not to send this object to the microflow.

| Value | Description |
| --- | --- |
| Yes | This will pass the object of the data view or image viewer as a parameter to the microflow. |
| No | This will not pass the object. |

_Default value:_ Yes

In the case of a grid button you can choose whether to send the selection, all objects in the grid or nothing to the microflow.

| Value | Description |
| --- | --- |
| Nothing | The grid selection is not sent to the microflow. |
| Selection | The selected object(s) will be sent to the microflow. If the grid allows multi-select the selection will be a list. If not, the selection will be exactly one object. |
| All pages | All objects will be sent to the microflow in a list. |

### Pass enclosing data view object

If the data grid or data view that refers to the microflow is contained by another data view, you can also choose to send the object of that data view to the microflow.

{{% alert type="info" %}}

Let us say you have a grid showing orders inside a data view showing a customer. The control bar of the grid contains a microflow button. Apart from being able to pass the grid selection as a parameter you can choose to send the customer to the microflow as well.

{{% /alert %}}

| Value | Description |
| --- | --- |
| Yes | This will pass the object of the enclosing data view as a parameter to the microflow. |
| No | No parameter will be passed. |

_Default value:_ No

### Microflow

This is the microflow that will be executed. Its parameters should match the parameters that are passed to it.

{{% alert type="success" %}}

If you create the microflow using the New button in the Select form, a microflow will be created with the correct parameters. Make sure you first select what you want to pass as parameter in the parameter properties.

{{% /alert %}}

### Maintain selection after microflow

This property specifies whether the selection of the data or template grid should be maintained after executing the microflow.

_Default value:_ No

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

### Abort on validation errors (only in web forms)

For microflows that are used within a data view, you can specify whether you want to perform form validations before executing the microflow. There are two kind of form validations:

1.  Required: the input field must be given a value.
2.  Maximum length: the input field must not exceed a given length.

By using this property you can perform form validations _before_ executing the microflow. If the validations fail, the microflow will not be executed.

| Value | Description |
| --- | --- |
| Yes | This will prevent the microflow from executing on all validation errors. |
| Only for this widget | This will prevent the microflow from executing on validation errors of the specific widget. |
| No | The microflow will always be executed. |

_Default value:_ Yes (was No before 4.1)

### Show progress bar (only in web forms)

This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

| Value | Description |
| --- | --- |
| None | No progress bar is shown. |
| Non-Blocking | A progress bar is shown, but the end user can continue working. |
| Blocking | A progress bar is shown and the end user must wait until the microflow is done. |

### Progress message (only in web forms)

The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).

### Microflow call type (only in web forms)

This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see whether the microflow is done executing.

{{% alert type="warning" %}}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{{% /alert %}}

| Value | Description |
| --- | --- |
| Synchronous | The client waits until the microflow is done executing. |
| Asynchronous | The client executes the microflow and starts polling to determine whether the microflow is done executing. |

_Default value_: Synchronous
