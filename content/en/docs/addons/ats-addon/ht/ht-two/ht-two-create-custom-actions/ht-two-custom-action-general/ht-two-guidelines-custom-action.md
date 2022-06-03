---
title: "Guidelines for Creating a Custom Action"
url: /addons/ats-addon/ht-two-guidelines-custom-action/
parent: "ht-two-custom-action-general"
---

## 1 Introduction

For details on custom actions, please see [Custom Actions](/addons/ats-addon/rg-one-custom-actions/) in the ATS 1 Reference Guide.
 
These are the definitions of Mendix actions and core actions:

* Mendix actions include [Mendix actions](/addons/ats-addon/rg-one-mendix-actions/) and [Mendix Marketplace widget actions](/addons/ats-addon/rg-one-appstore-widg-acts/)
* Core actions include [ATS Core actions](/addons/ats-addon/rg-one-ats-core-actions/) and [Selenium actions](/addons/ats-addon/rg-one-selenium-actions/)

{{% alert color="info" %}}

These are guidelines, not rules. It is possible that you will encounter situations in which these guidelines cannot be followed.

{{% /alert %}}

## 2 Using Mendix Actions

Always try to use a Mendix action first. This table explains why you should use a Mendix action:

| Reason | Description |
| :--- | :--- |
| Automatic context | A Mendix action will automatically adjust to the Mendix platform, ensuring that it will work correctly. | 
| Visibility checks | A Mendix action only searches for elements that are *visible*. |
| Browser support | A Mendix action always works in the supported browser. |
| Mendix support | A Mendix action always works on the latest version of Mendix. |
| Waiting for background processes | A Mendix action waits untill the Mendix app is finished rendering. This aspect is also covered by the [Mendix Wait](/addons/ats-addon/rg-one-mendix-wait/) action.<br> |

However, there are reasons to not use Mendix actions. For example, sometimes a custom action can get too complex using a Mendix action, because of the input parameters that are required. For another example, when using a Mendix action, you have six input parameters:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/mendix-action-input-parameters.png" >}}

But when you use a core action, you have four input parameters: 

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/core-action-input-parameters.png" >}}

The difference is because of the required **Widget Name** input parameter in a Mendix action. When you use a core action, this is not always required. So if you don not need the widget name, a core action is a better solution. This is a valid reason to use the core actions; otherwise, the custom action is not user-friendly.

## 3 Using Visual/Optical Components

Only use items that are visually present on the page, like the text inside a certain widget. Sometimes it seems easier to use an attribute or a certain class from a widget, but doing this right the first time will save you time in the future. Invest the time and use the visual components instead of taking the easy way out.

This is a visual component:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/visual-component-widget.png" >}}

{{% alert color="info" %}}

This guideline focuses on how to find certain widgets.

{{% /alert %}}

## 4 The User Approach

When building a custom action, always think about what the user is doing. In addition, keep in mind the things you do without performing an event (like reading a data grid), as these are important when building Search Context Actions.

Some examples of questions you should ask yourself are:

* How do I find the widget using visual components?
* How do I trigger an event? (click, enter text, etc.)

Another example is with a check box. Do not set it using the JavaScript check function, but click it, because that's what a user would do. If you want to set the check box based on its current state, use the precondition and the click action. By doing this, you invest time in a more complex solution to save time later.

## 5 Building It Generically

When building an action for an unsupported widget, keep in mind that the action should work on the widget on every occasion. When a widget has two ways for entering information, use the most obvious one. For example, when using jQuery to find child nodes, make sure you use the generic aspects of the child node to specify it. Some class names are application-specific, and you cannot use them. You don’t want to have to rebuild this when you need it for another application.

This also applies to optional components in the class name. Some widgets have optional components that you can add. For example, when using a selector to find a child node, avoid using classes like glyphicon. These classes are most likely optional. Therefore, if the application does not use the glyphicon option, your action will not work.

Try to find the generic aspect of the child node. In most cases, the `mx-name-` is unique; therefore, use the `mx-name-` of the widget to find the widget for the Mendix actions. When the `mx-name-` is available, use it!

This is the `mx-name` in the debugger:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/mx-name-in-debugger.png" >}}

{{% alert color="info" %}}

This guideline focuses on unsupported widget actions.

{{% /alert %}}

## 6 Background Processes

When using core actions to trigger an event, always use a Mendix Wait action after triggering the event. The Mendix Wait action covers the Mendix app rendering process. The action waits until the application has finished its background processes, like communicating with the database. If the Mendix app no longer renders, then the action passes. This only works on Mendix applications, so when you need to cover a bit of HTML for logging in, the Mendix Wait action will not work.

This is the Mendix Wait action:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/mendix-wait-action.png" >}}

For more information, please see [Mendix Wait](/addons/ats-addon/rg-one-mendix-wait/).

{{% alert color="info" %}}

This guideline does not apply to the Search Context action, since it does not trigger any events.

{{% /alert %}}

## 7 Action Parameters

When defining action parameter names, always use the ATS [naming conventions](/addons/ats-addon/rg-one-best-practices/).

In addition, include the optional input parameters in the action parameters for an unsupported widget action.

In almost every situation, include the **Search Context** input parameter. When an AUT has a lot of snippets, `mx-names` are not unique. Use Search Context to specify the element in which ATS should look.

These are some of the most used action parameters:

| Action parameter | Description | Required, Optional, or Both | Data Type |
| :--- | :--- | :--- | :--- |
| Widget Name | The mx-name of the widget. | Required | String |
| Value | The value that needs to be set or found inside a widget. | Both | String |
| Search Context | Provides the element in which ATS will look for the widget. | Optional | Web Element |
| Index | The index of the widget/item to find. | Optional | Integer |
| Column Name | The name of the column. | Both | String |
| Row Name | The name of the row. | Both | String |
| Widget | Returns the widget. | Required | Web Element |

These are the three most used action parameters:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/standard-input-parameters.png" >}}

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/standard-input-parameters-2.png" >}}

Last but not least, give a description to the action parameters, especially when it requires specific information. You can also give a generic example of what the user should enter, making it more user-friendly.

{{% alert color="info" %}}

Follow the naming conventions. Only deviate when there is no standard name.

{{% /alert %}}

## 8 Describing the Steps and Defining the Output

When you describe your test steps in ATS, delivering support and updating the action is a lot easier. This will refresh your memory, and it will make it easier to understand for other people.

In addition, describe the output of each test step to make it easier to understand the custom action. Another person should be able to understand what the action does by reading the description and output of the steps.

This is an example:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/describe-teststeps-define-output.png" >}}

## 9 Data Type Awareness

Be aware of data types. All the action parameters require a certain data type, which means it will only accept or suggest that data type. For example, an input parameter that requires an integer will not accept `3.8`, because it only accepts whole numbers.

Set each action parameter to a certain parameter. A Search Context action most likely returns a web element. An unsupported widget action that gets the value of a label returns a string, and so on.

These are the different data types in ATS:

| Data Type | Description | Examples |
| :--- | :--- | :--- |
| Text | A piece of text that can contain letters, numbers, spaces, and other characters. | "ATS123", "Helloworld!" |
| Number | A whole number. | 123, 4423 |
| Boolean | A truth value. | true, false |
| Date/Time | **The Date/Time type is deprecated and should not be used.** | N/A |
| Page Element | Represents a DOM element. | (See the image below this table.)|
| Any | Lets the user choose the data type. | Choose String for "Helloworld!" |
| Drop-Down | One of the values of the given drop-down menu. | Red, Green, Blue; Todo, Running, Done |
| Float | **The Float type is deprecated and should not be used.** | N/A |
| Currency | **The Currency type is deprecated and should not be used** | N/A |

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-custom-actions/ht-two-custom-action-general/ht-two-guidelines-custom-action/datatype-web-element.png" >}}

The JavaScript actions have three different versions, based on the data types:

* [Execute Javascript Integer](/addons/ats-addon/rg-one-execute-javascript-integer/)
* [Execute Javascript String](/addons/ats-addon/rg-one-execute-javascript-string/)
* [Execute Javascript WebElement](/addons/ats-addon/rg-one-execute-javascript-webelement/)

They all produce outputs based on their data type. This means that you cannot return a string inside the Execute Javascript web element action.

Good luck building custom actions! Please post any questions about custom actions on the [Mendix Forum](https://forum.mendixcloud.com/index4.html) under the category **Testing**.

