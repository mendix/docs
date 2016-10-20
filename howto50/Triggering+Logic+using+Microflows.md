---
title: "Triggering Logic using Microflows"
category: "Logic & Business Rules"
space: "Mendix 5 How-to's"
---

To add custom logic to your Mendix application you can use microflows. Microflows can be triggered in various ways, i.e. buttons, input fields, scheduled events, and more. This how-to will teach you how to configure the properties and settings of a microflow button placed on a grid or reference set selector. You will start with adding the microflow button to the right widget. Next you will need to configure the right properties and settings of the microflow button. 

## 1. Preparations

Before starting this how-to make sure you complete the following prerequisites:

*   [Creating a basic data layer](Creating+a+basic+data+layer)
*   [Creating your first two Overview and Detail pages](Creating+your+first+two+Overview+and+Detail+pages)

## 2\. Triggering Logic Using a Page Button

In this exercise you will add a microflow button to a grid or a reference set selector and configure it. In this example you will add the button to the Datagrid widget, but this way the settings of the button will apply to the reference set selector and all the grid widgets.

### 2.1 Adding a Button to a Datagrid

1.  Open you project in the **Mendix Business Modeler**.
2.  Open page with a **Datagrid**.
3.  Select the **menu bar** of the Datagrid.
4.  Right click the menu bar.
5.  Select **Add button > Microlfow**.
    ![](attachments/8782452/8945879.png)
6.  The **Microflow** button will be visible on the menu bar of the Datagrid.

### 2.2 Configuring the Microflow Properties

At the moment there is only a button with no Microflow behind it yet. In this exercise you will configure the button settings. 

1.  Double click the **Microflow** button to open its properties.
    ![](attachments/8782452/8945881.png)
2.  In the window that opens you can set the following parameters:

    <table><thead><tr><td class="confluenceTd">Caption</td><td class="confluenceTd">This property indicates what text will be shown on this button. This is a translatable text.</td></tr></thead><tbody><tr><td class="confluenceTd">Tooltip</td><td class="confluenceTd">This property indicates what text will be displayed when users mouse over the button.</td></tr><tr><td colspan="1" class="confluenceTd">Image</td><td colspan="1" class="confluenceTd">This property indicates which image will be shown in front of the caption of the trigger.</td></tr><tr><td colspan="1" class="confluenceTd">Is default button</td><td colspan="1" class="confluenceTd">This property indicates whether this button is the default button of the grid or reference set selector. A grid or reference set selector can only have one default button. The default button is triggered when clicking or double clicking a row. Whether a click or a double click triggers it depends on the 'default button trigger' property of the&nbsp;<a href="/refguide5/Data+grid" rel="nofollow">Data grid</a>,&nbsp;<a href="/refguide5/Template+grid" rel="nofollow">Template grid</a>&nbsp;or&nbsp;<a href="/refguide5/Reference+set+selector" rel="nofollow">Reference set selector</a>.<br><img class="confluence-embedded-image confluence-thumbnail" width="300" src="attachments/8782452/8945883.png" data-image-src="attachments/8782452/8945883.png"></td></tr><tr><td colspan="1" class="confluenceTd">Visible&nbsp;</td><td colspan="1" class="confluenceTd">By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met.<p><br><em>Attribute:</em> When checked, this setting hides the widget unless the value of a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose.</p><p><em>Ignore security</em>: Check this box if you want the microflow button to be visible even if security says it should be hidden.</p></td></tr><tr><td colspan="1" class="confluenceTd">On click</td><td colspan="1" class="confluenceTd">This property specifies the microflow that is executed when the button is clicked.</td></tr><tr><td colspan="1" class="confluenceTd">On click settings</td><td colspan="1" class="confluenceTd">With the on click settings you can customize which parameters to pass to the microflow, whether to show a progress bar and more.</td></tr><tr><td colspan="1" class="confluenceTd">Name</td><td colspan="1" class="confluenceTd">This property specifies the name of the microflow in the page builderClass:&nbsp;The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.</td></tr><tr><td colspan="1" class="confluenceTd">Style</td><td colspan="1" class="confluenceTd">The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied&nbsp;<em>after</em>&nbsp;the class.</td></tr></tbody></table>

    The styling is applied in the following order:

    *   Default styling defined by the theme the project uses
    *   The 'Class' property of the widget
    *   The 'Style' property of the widget

3. Click **OK** to save the properties.

    If you single click the microflow button the properties can also be configured on the right side, in the properties section.

    ![](attachments/8782452/8945880.png)

### 2.3 Configuring the Microflow Settings

The microflow button has been added to the grid and the properties have been set. With the properties you can customize the appearance of the microflow button, in this section you are going to set the 'on click settings', which you can use to customize which parameters to pass to the microflow, whether to show a progress bar and more.

1.  **Right click** the microflow button.
2.  Select **Edit microflow settings**.
    ![](attachments/8782452/8945898.png)

    The Microflow Settings window opens with 3 tabs.
    ![](attachments/8782452/8945920.png)

**General tab**

The properties in the 'General' section determine which information is sent to the microflow in the page of parameters. The parameters inside the microflow should match what is specified here.

*   Pass "data grid" object: The first parameter that can be passed to the microflow is the selection of the data grid.

    <table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Selection</td><td class="confluenceTd">The selected object(s) will be sent to the microflow. If the grid allows multi-select the selection will be a list. If not, the selection will be exactly one object.</td></tr><tr><td class="confluenceTd">Nothing</td><td class="confluenceTd">The grid selection is not sent to the microflow.</td></tr><tr><td class="confluenceTd">All pages</td><td class="confluenceTd">All objects will be sent to the microflow in a list.</td></tr></tbody></table>

*   Pass enclosing data view object: If the data grid that refers to the microflow is part of another data view, you can also choose to send the object of that data view to the microflow.

    If you have a grid showing orders inside a data view showing a customer. The control bar of the grid contains a microflow button. Apart from being able to pass the grid selection as a parameter you can choose to send the customer to the microflow as well.

*   Microflow: This is the microflow that will be executed. Its parameters should match the parameters that are passed to it.

    If you create the microflow using the New button in the Select page, a microflow will be created with the correct parameters. Make sure you first select what you want to pass as parameter in the parameter properties. Maintain selection after microflow (only for grid microflow buttons).

*   Maintain selection after microflow: This property specifies whether the selection of the data should be maintained after executing the microflow.

**Confirmation**

You have the option to ask for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete. The user will be prompted with a question whether to continue with this operation.

Note: the title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

**![](attachments/8782452/8945922.png)**

*   Ask confirmation: Here you can specify whether you want to ask for confirmation or not.
*   Question: This is the question that you want to show to the user. For example, "Are you sure you want to empty the trash can?"
*   Proceed button caption: This is the caption for the button that proceeds with the execution of the microflow. For example, "Empty trash can"
*   Cancel button caption: This is the caption for the button that cancels the execution of the microflow. For example, "Cancel"

**Advanced**

**![](attachments/8782452/8945923.png)**

*   Show progress bar: This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">None</td><td class="confluenceTd">No progress bar is shown.</td></tr><tr><td class="confluenceTd">Non-Blocking</td><td class="confluenceTd">A progress bar is shown, but the end user can continue working.</td></tr><tr><td class="confluenceTd">Blocking</td><td class="confluenceTd">A progress bar is shown and the end user must wait until the microflow is done.</td></tr></tbody></table>

*   Progress message:The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).
*   Microflow call type: This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see if the microflow is done executing.

<div class="alert alert-warning">{% markdown %}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{% endmarkdown %}</div>

3\. Click **OK** to save the settings.

## 3\. Related content

*   [Defining access rules using XPath](Defining+access+rules+using+XPath)
*   [Creating a Custom Save Button](Creating+a+Custom+Save+Button)
*   [Extending Your Application with Custom Java](Extending+Your+Application+with+Custom+Java)
*   [Creating a Custom Save Button](Creating+a+Custom+Save+Button)
*   [Working With Lists in a Microflow](Working+With+Lists+in+a+Microflow)
*   [Microflow button](/refguide5/Microflow+button)
