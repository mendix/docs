---
title: The Guidelines for Creating a Custom Action
space: ATS Add-On
category: ATS Best Practices
---

## Guidelines for building a custom action

Please see our reference guide, for a definition on [Custom Actions](refguide-ats-1/custom-actions) in the reference guide.
 
Also take a look at the how to's for building a custom action:

* [How to Create a Combined Action](refguide-ats-1/create-a-combined-action)
* [How to Create a Search Context Action](howtos-ats-1/create-search-context-action)
* [How to Create an Unsupported Widget Action](refguide-ats-1/create-unsupported-widget-action)
* [How to Create a Function Action](howtos-ats-1/create-function-action)

Definitions of Mendix actions and Core actions: 
* Mendix actions are a combination [Mendix actions](refguide-ats-1/mendix-actions) and [Mendix App Store Widgets actions](refguide-ats-1/mendix-appstore-widgets-actions). 
* Core actions are a combination of [ATS Core actions](refguide-ats-1/ats-core-actions) and [Selenium actions](refguide-ats-1/selenium-actions).

<div class="alert alert-info">

Note: These are guidelines, not rules. It's possible that you encounter situations in which the guidelines can't be followed.
</div>


###1. Use the Mendix actions

Always first try to use a Mendix action. If this gets too complex, due to required input parameters, use a Core action. Why use a Mendix action? 

| **Reason** | **Description** |
| :--- | :--- |
| Automatic Context | A Mendix action will automatically adjust to the Mendix platform ensuring a correct working.  | 
| Visibility Checks | A Mendix action only searches for elements that are _visible_. |
| Browser Support | A Mendix action always works in the supported browser. |
| Mendix Support | A Mendix action always works on the latest version of Mendix.  |
| Waits for background processes | A Mendix action waits untill the Mendix App is finished rendering. This aspect is also covered by the [Mendix Wait](refguide-ats-1/mendix-wait) action.<br>   |

We say try because there are reasons not to use the Mendix actions. 
Sometimes a custom action can get too complex using Mendix actions because of the input parameters that are _Required_. 
For example, when using the Mendix actions you have 6 input parameters, see screenshot below.

![](/bestpractices/attachments/guidelines-custom-action/mendix-action-input-parameters.png)  

And when using the Core actions you have 4 input parameters.
![](/bestpractices/attachments/guidelines-custom-action/core-action-input-parameters.png)

The difference is because of the _Required_ Widget Name input parameter in the Mendix actions. When you use a Core action this is not always _Required_. So if you don't need the Widget Name, the  Core actions are a better solution.

This is a valid reason to use the Core actions, otherwise the custom action is not user friendly.
<div class="alert alert-info">

Note: Use Mendix actions when possible, if not then use the Core actions.
</div>

### 2. Use visual/optical components 
Only use items that are visually present on the page, like text inside a certain widget. Sometimes, it seems easier to use an attribute or a certain class from a widget, but doing it first time right will save you time in the future. Invest time and use the visual components, instead of taking the easy way out.

_A visual component_

![](/bestpractices/attachments/guidelines-custom-action/visual-component-widget.png)

<div class="alert alert-info">

Note: This guideline focuses on how to find certain widgets. 
</div>

###3. The user approach  
When building a custom action always think about what the user does. Also, keep in mind the things you do without performing an event, like reading a datagrid, these are important when building _Search Context Actions_.

Some examples of questions you should ask yourself are:

• How do I find the widget using visual components?

• How do I trigger an event? \(Clicking, entering text etc.\)

Another example, with a checkbox don't set it using the JavaScript check function, but click it, because that's what a user would do. If you want to set the checkbox based on its current state, use precondition and the click action. By doing this, you invest time in a more complex solution to save time later.

###4. Built it generic  
When building an action for an unsupported widget keep in mind that the action should work on the widget on every occasion. When a widget has two ways for entering information, use the most obvious one. An example:

When using jQuery to find child nodes, make sure you use generic aspects of the child node to specify it. Some class names are application specific and you cannot use them. You don’t want to have to rebuild it when you need it for another application. 

This also applies to optional components in the class name. Some widgets have optional components that you can add. For example, when using a selector to find the child node; avoid using classes like glyphicon. These classes are most likely optional. Therefore, if the application doesn’t use the glyphicon option your action will not work.

Try to find the generic aspect of the child node. In most cases the mx-name- is unique; therefore, use the mx-name- of the widget to find the widget for the Mendix actions. When the mx-name- is available use it!


_The mx-name in the debugger_

![](/bestpractices/attachments/guidelines-custom-action/mx-name-in-debugger.png)

<div class="alert alert-info">

Note: This guideline focuses on unsupported widget actions.
</div>

###5. Background processes 
When using core actions to trigger an event, always use a Mendix Wait action after triggering the event. The Mendix Wait action covers the Mendix app rendering process. The Mendix Wait action waits until the application has finished its background processes, like communicating with the database. If the Mendix App no longer renders, then the action passes. It only works on Mendix applications, so when you need to cover a bit of HTML for logging in, the Mendix Wait won’t work.

_The Mendix wait action_
![](/bestpractices/attachments/guidelines-custom-action/mendix-wait-action.png)

For more information, please see [Mendix wait](refguide-ats-1/mendix-wait).

<div class="alert alert-info">

Note: This guideline does not apply to the Search Context action since it does not trigger any events.
</div>

###6. Action parameters 
When defining the action parameters always use the ATS [Naming Conventions](refguide-ats-1/best-practices). 
Also include optional input parameters in the action parameters for an _Unsupported Widget action_. 
In almost every situation include the Search Context input parameter. When an AUT has a lot of snippets, mx-names are not unique. Use Search Context to specify in which element ATS should look.


_Some most used action parameters_

| **Action parameter** | **Description** | **Required/Optional or Both** | **Datatype** |
| :--- | :--- | :--- | :--- |
| Widget Name | The mx-name of the widget. | Required | String |
| Value | The value that needs to be set or found inside a widget. | Both | String |
| Search Context | Provide an element in which ATS will look for the widget. | Optional | WebElement |
| Index | The index of the widget/item to find. | Optional | Integer |
| Column Name | The name of the column. | Both | String |
| Row Name | The name of the row. | Both | String |
| Widget | Returns the widget. | Required | WebElement |

_Three most used action parameters_
![](/bestpractices/attachments/guidelines-custom-action/standard-input-parameters.png)

![](/bestpractices/attachments/guidelines-custom-action/standard-input-parameters-2.png)

Last but not least, give a description to the action parameters especially when it requires specific information. You can also give a generic example of what the user should enter, making it more user friendly.

<div class="alert alert-info">

Note: Follow the naming convention, only deviate when there is no standard name. 
</div>

###7. Describe the steps and define the output  
By describing your test steps in ATS, delivering support and updating the action is a lot easier. It refreshes your memory and it is easier to understand for other people.

Also describe the output of each test step to make it easier to understand the custom action. Another person should be able to understand what the action does by reading the description and output of the steps.


An example:
![](/bestpractices/attachments/guidelines-custom-action/describe-teststeps-define-output.png)

###8. Datatype awareness
Be aware of datatypes. All action parameters require a certain datatype, which means it will only accept or suggest that datatype. For example, an input parameter that requires an _Integer_, will not accept 3.8, because it only accepts whole numbers.
Set each action parameter to a certain parameter. A Search Context action most likely returns a _WebElement_. An Unsupported Widget action that gets the value of a label, returns a _String_. And so on.


_Different datatypes in ATS_

| **Datatype** | **Description** | **Examples** |
| :--- | :--- | :--- |
| String | A piece of text that can contain letters, numbers, spaces and other characters. | "ATS123", "Helloworld!"
| Integer | A whole number. | 123, 4423 |
| Boolean | A truth value. | `true` and `false` |
| Date/Time | A point in time consisting of a date and a time component accurate up to milliseconds. | Tuesday 13 June 2017, 16:17:44 |
| Web Element | Represents a DOM element. | See screenshot below table |
| Undefined | Lets the user choose the datatype. | Choose _String_ for "Helloworld!" |
| Enumeration | One of the values of the given enumeration. | Red, Green, Blue; Todo, Running, Done |
| Float | **The Float type is deprecated and should not be used.** | N/A |
| Currency | **The Currency type is deprecated and should not be used** | N/A |

![](/bestpractices/attachments/guidelines-custom-action/datatype-web-element.png)

The JavaScript actions have three different versions based on datatypes:

* [Execute Javascript Integer](refguide-ats-1/execute-javascript-integer)
* [Execute Javascript String](refguide-ats-1/execute-javascript-string)
* [Execute Javascript WebElement](refguide-ats-1/execute-javascript-webelement)

They all produce output based on their datatype. This means that you cannot return a _String_ inside the Execute Javascript WebElement action.

Good luck building custom actions! Please post any questions about customer actions on the Mendix Forum under Category: testing. 
