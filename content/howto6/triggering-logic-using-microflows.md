---
title: "Triggering Logic using Microflows"
category: "Logic & Business Rules"
tags: []
---
To add custom logic to your Mendix application you can use microflows. Microflows can be triggered in various ways, i.e. buttons, input fields, scheduled events, and more. This how-to will teach you how to configure the properties and settings of a microflow button placed on a grid or reference set selector. You will start with adding the microflow button to the right widget. Next you will need to configure the right properties and settings of the microflow button.

## 1. Preparations

Before starting this how-to make sure you complete the following prerequisites:

*   [Creating a basic data layer](create-a-basic-data-layer)
*   [Creating your first two Overview and Detail pages](create-your-first-two-overview-and-detail-pages)

## 2\. Triggering Logic Using a Page Button

In this exercise you will add a microflow button to a grid or a reference set selector and configure it. In this example you will add the button to the Datagrid widget, but this way the settings of the button will apply to the reference set selector and all the grid widgets.

### 2.1 Adding a Button to a Datagrid

1.  Open you project in the **Mendix Modeler**.
2.  Open page with a **Datagrid**.
3.  Select the **menu bar** of the Datagrid.
4.  Right click the menu bar.
5.  Select **Add button > Microlfow**.
    ![](attachments/18448675/18580943.png)
6.  The **Microflow** button will be visible on the menu bar of the Datagrid.

### 2.2 Configuring the Microflow Properties

At the moment there is only a button with no Microflow behind it yet. In this exercise you will configure the button settings.

1. Double click the **Microflow** button to open its properties.
    ![](attachments/18448675/18580941.png)
2. In the window that opens you can set the following parameters:

| Property | Description |
| --- | --- |
| Caption | This property indicates what text will be shown on this button. This is a translatable text. |
| Tooltip | This property indicates what text will be displayed when users mouse over the button. |
| Image | This property indicates which image will be shown in front of the caption of the trigger. |
| Is default button | This property indicates whether this button is the default button of the grid or reference set selector. A grid or reference set selector can only have one default button. The default button is triggered when clicking or double clicking a row. Whether a click or a double click triggers it depends on the 'default button trigger' property of the [Data grid](/refguide6/data-grid), [Template grid](/refguide6/template-grid) or [Reference set selector](/refguide6/reference-set-selector). ![](attachments/18448675/18580939.png) |
| Visible | By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. **Attribute**: When checked, this setting hides the widget unless the value of a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose. **Ignore security**: Check this box if you want the microflow button to be visible even if security says it should be hidden. |
| On click | This property specifies the microflow that is executed when the button is clicked. |
| On click settings | With the on click settings you can customize which parameters to pass to the microflow, whether to show a progress bar and more. |
| Name | This property specifies the name of the microflow in the page builderClass: The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget. |
| Style | The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class. |

{{% alert type="warning" %}}

The styling is applied in the following order:

*   Default styling defined by the theme the project uses
*   The 'Class' property of the widget
*   The 'Style' property of the widget

{{% /alert %}}

Click **OK** to save the properties. If you single click the microflow button the properties can also be configured on the right side, in the properties section.

![](attachments/18448675/18580942.png)

### 2.3 Configuring the Microflow Settings

The microflow button has been added to the grid and the properties have been set. With the properties you can customize the appearance of the microflow button, in this section you are going to set the 'on click settings', which you can use to customize which parameters to pass to the microflow, whether to show a progress bar and more.

1.  **Right click** the microflow button.
2.  Select **Edit microflow settings**.
    ![](attachments/18448675/18580938.png)

    The Microflow Settings window opens with 3 tabs.
    ![](attachments/18448675/18580937.png)

**General tab**

The properties in the 'General' section determine which information is sent to the microflow in the page of parameters. The parameters inside the microflow should match what is specified here.

*   Pass "data grid" object: The first parameter that can be passed to the microflow is the selection of the data grid.

| value | Description |
| --- | --- |
| Selection | The selected object(s) will be sent to the microflow. If the grid allows multi-select the selection will be a list. If not, the selection will be exactly one object. |
| Nothing | The grid selection is not sent to the microflow. |
| All pages | All objects will be sent to the microflow in a list. |

*   Pass enclosing data view object: If the data grid that refers to the microflow is part of another data view, you can also choose to send the object of that data view to the microflow.

    {{% alert type="info" %}}

    If you have a grid showing orders inside a data view showing a customer. The control bar of the grid contains a microflow button. Apart from being able to pass the grid selection as a parameter you can choose to send the customer to the microflow as well.

    {{% /alert %}}

*   Microflow: This is the microflow that will be executed. Its parameters should match the parameters that are passed to it.

	{{% alert type="info" %}}

    If you create the microflow using the New button in the Select page, a microflow will be created with the correct parameters. Make sure you first select what you want to pass as parameter in the parameter properties.
    Maintain selection after microflow (only for grid microflow buttons).

    {{% /alert %}}

*   Maintain selection after microflow: This property specifies whether the selection of the data should be maintained after executing the microflow.

**Confirmation**

You have the option to ask for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete. The user will be prompted with a question whether to continue with this operation.

Note: the title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

**![](attachments/18448675/18580936.png)**

*   Ask confirmation: Here you can specify whether you want to ask for confirmation or not.
*   Question: This is the question that you want to show to the user. For example, "Are you sure you want to empty the trash can?"
*   Proceed button caption: This is the caption for the button that proceeds with the execution of the microflow. For example, "Empty trash can"
*   Cancel button caption: This is the caption for the button that cancels the execution of the microflow. For example, "Cancel"

**Advanced**

**![](attachments/18448675/18580935.png)**

*   Show progress bar: This property indicates whether a progress bar is shown during the execution of the microflow. The message shown in the progress bar can be set with the 'Progress message' property.

|

Value

 |

Description

 |
| --- | --- |
|

None

 |

No progress bar is shown.

 |
|

Non-Blocking

 |

A progress bar is shown, but the end user can continue working.

 |
|

Blocking

 |

A progress bar is shown and the end user must wait until the microflow is done.

 |

*   Progress message:The progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking (see above).
*   Microflow call type: This property indicates whether the connected microflow is executed synchronously or asynchronously. With synchronously executed microflows the microflow is started and the client waits for the result. With asynchronously called microflows the microflow is started on the server but the client does not wait for the result. It will check the server every ten seconds to see if the microflow is done executing.

{{% alert type="warning" %}}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{{% /alert %}}

3\. Click **OK** to save the settings.

## 3\. Related content

*   [Defining access rules using XPath](define-access-rules-using-xpath)
*   [Extending Your Application with Custom Java](extending-your-application-with-custom-java)

*   [Working With Lists in a Microflow](working-with-lists-in-a-microflow)
*   [Triggering Logic using Microflows](triggering-logic-using-microflows)
*   [Creating a Custom Save Button](create-a-custom-save-button)
*   [Optimizing Retrieve Activities](optimizing-retrieve-activities)
*   [Error Handling](set-up-error-handling)
*   [Optimizing Microflow Aggregates](optimizing-microflow-aggregates)
*   [Extract and use sub microflows](extract-and-use-sub-microflows)
*   [Grid Microflow Button](/refguide6/grid-microflow-button)
