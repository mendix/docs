---
title: "Starting Microflows"
url: /refguide7/starting-microflows/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix allows for microflows to be triggered in pages by a variety of widgets. These widgets share a set of properties that determine the conditions in which the microflow is run. Listed below are all the widgets that can directly trigger microflows. Also listed are the events that will cause the microflow to trigger, in addition to the object that can be passed to the triggered microflow.

| Widget | Event/Property | Available Parameter |
| --- | --- | --- |
| Action button (data view) | On click | Data view object |
| Data view | Data source | Object of the data view containing this data view |
| Action button (grid)<sup><a name="ref1" href="#fn1">1</a></sup> | On click | Grid selection or clicked row (as an object or as a list, depending on the [selection mode](/refguide7/data-grid/)) |
| Reference set selector | On change | Data view object |
| Input widget<sup><a name="ref2" href="#fn2">2</a></sup> | On change | Data view object |
| Input widget | On enter | Data view object |
| Input widget | On leave | Data view object |
| Image viewer | On click | Image viewer object |
| Action button | On click | Enclosing data view object, if available |
| Reference selector | Data source | Data view object |

<small><sup><a name="fn1" href="#ref1" title="Jump back to footnote 1 in the text.">1</a></sup> The following grid widgets have grid action buttons: *data grid*; *template grid*; and *reference set selector*.</small><br/>
<small><sup ><a name="fn2" href="#ref2" title="Jump back to footnote 2 in the text.">2</a></sup> The following widgets are input widgets: *check box*; *date picker*; *drop-down*; *text area*; and *text box*.</small>

## 2 Microflow

This is the microflow that will be executed. Its parameters should match the available arguments.

{{% alert color="success" %}}

You can create a new microflow by clicking 'Select...' and then 'New'. Modeler will generate a microflow with parameters matching all available arguments. If a parameter is not used it can simply be deleted.

{{% /alert %}}

## 3 Microflow arguments

The arguments sent to the microflow are automatically configured based on the parameters of the selected microflow and the available arguments. Which arguments are available depends on the widget calling the microflow. For a full listing consult the table above. Additionally, if the widget calling a microflow is contained inside a nested data view, then the object of the enclosing data view is also available.

{{% alert color="info" %}}

For Mendix version 7.19.0 and above, in addition to passing the object of the enclosing data view, objects from the data views above that one all the way up to the top of page can also be passed.

{{% /alert %}}

The arguments available to a data or template grid control bar button are determined by the selection mode of the grid and the parameters of the selected microflow. Single selection results in the selected object being passed to the microflow if the microflow has an object parameter. If the microflow has an object list parameter, all the pages will be passed instead, ignoring the selection. Simple multi-selection allows for both all pages and selection, which defaults to selection. This can be configured via the drop-down menu in the microflow settings page.

## 4 Execution

### 4.1 Microflow Call Type

This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see whether the microflow is done executing.

{{% alert color="warning" %}}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{{% /alert %}}

| Value | Description |
| --- | --- |
| Synchronous | The client waits until the microflow is done executing. |
| Asynchronous | The client executes the microflow and starts polling to determine whether the microflow is done executing. |

_Default value_: Synchronous

### 4.2 Show Progress Bar

This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

| Value | Description |
| --- | --- |
| None | No progress bar is shown. |
| Non-Blocking | A progress bar is shown, but the end user can continue working. |
| Blocking | A progress bar is shown and the end user must wait until the microflow is done. |

### 4.3 Progress Message

The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).

## 5 Confirmation

If a microflow is triggered by a button you have the option to ask for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete. The user will be prompted with a question whether he/she wants to continue with this operation.

Note: the title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

### 5.1 Ask Confirmation

Here you can specify whether you want to ask for confirmation or not.

_Default value_: No

### 5.2 Question

This is the question that you want to show to the user. For example, "Are you sure you want to empty the trash can?".

### 5.3 Proceed Button Caption

This is the caption for the button that proceeds with the execution of the microflow. For example, "Empty trash can"

### 5.4 Cancel Button Caption

This is the caption for the button that cancels the execution of the microflow. For example, "Cancel".

## 6 Advanced

### 6.2 Maintain Selection After Microflow (Only for Grid Microflow Buttons)

This property specifies whether the selection of the data or template grid should be maintained after executing the microflow.

_Default value:_ No

### 6.2 Abort on Validation Errors

For microflows that are used within a data view, you can specify whether you want to perform page validations before executing the microflow. There are two kind of page validations:

1.  Required: the input field must be given a value.
2.  Maximum length: the input field must not exceed a given length.

By using this property you can perform page validations _before_ executing the microflow. If the validations fail, the microflow will not be executed.

| Value | Description |
| --- | --- |
| Yes | This will prevent the microflow from executing on all validation errors. |
| Only for this widget | This will prevent the microflow from executing on validation errors of the specific widget. |
| No | The microflow will always be executed. |

_Default value:_ Yes
