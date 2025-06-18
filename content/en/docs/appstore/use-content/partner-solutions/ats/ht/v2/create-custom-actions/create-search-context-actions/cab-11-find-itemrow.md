---
title: "CAB.11 - Find Item/Row by Unique Text Value"
url: /appstore/partner-solutions/ats/ht-two-cab-11-find-itemrow/
description: "This how-to explains step by step how to create a Search Context action for finding an item/row by using a unique text value."
---

## Introduction

This how-to explains how to create a Search Context action. That returns an item/row based on a description inside that item/row.

This how-to applies to all situations in which you must find an item/row using a unique text value inside. If you need to get an item/row by its child element, you can follow this how-to. Keep in mind that it might need some adjustments according to the widget!

This how-to teaches you how to do the following:

* Approach a situation where there are multiple widgets with the same `mx-name`
* Create the custom action needed to return an item/row that is used to find the right widget

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Read [General](/appstore/partner-solutions/ats/ht-two-custom-action-general/)

## Defining the User Approach

First, you define the user approach and how you find the widget. It is important to remember that you want to find an element that surrounds the widget. You will use this element as the Search Context for the action performing the event.

In this how-to, ATS must click this button:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick.png" class="no-border" >}}

However, there are multiple buttons on this page that have the same `mx-name`:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-multiple.png" class="no-border" >}}

To define the user approach, follow these steps:

1. Use the recorder to see if there is a unique path to the button. In this case, if you click the button using the recorder, it uses `index-0` in the path:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-recorderpath.png" class="no-border" >}}

    The `index-0` is the `mx-name` of an item/row within a list view, template grid, etc. This is the unique element you use to find the button. The recorder uses `index-0` this is hard-coded. The test case works, but as soon as you add an item to the grid, the test case breaks.

    To avoid this, retrieve the item/row during the sessions based on a text value.

2. When you open the debugger, you see that the button is a child element of the listview item:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-listviewitem.png" class="no-border" >}}

3. Now that you found the unique element you want to retrieve, you cannot use the `mx-name` to find it. Then how do you find the element? You do this by looking for other unique elements within that list view item. There is a text box inside the list view item that has a unique value. The text box on itself has the `mx-name-textBox5` like in the other list view items. By adding the unique value to the search, you can find it. Combining the `mx-name` with the unique value ensures that the right element is found.

    This is a text box as a child element of a list view item:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/buttontoclick-listviewitem-textbox.png" class="no-border" >}}

This is a summary:

* ATS must find the text box with the unique value
* Retrieve the parent list view item in session
* Return the list view item

## Action Structure

ATS has a Mendix action called [*Find Item/Row (by child element)*](/appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/), which finds the parent item/row of a widget. This action returns the list view item that the element is currently in. The index number does not matter.

To define the action structure, follow these steps:

1. Use the [*Find/Assert Widget*](/appstore/partner-solutions/ats/rg-one-findassert-widget/) action to find the text box containing a specific value. Add the Find/Assert Widget action, provide a proper test step description, and provide an output description:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-textbox.png" class="no-border" >}}

    You will create and connect the input parameters later.

2. Use the *Find Item/Row (by child element)* action to retrieve the list view item surrounding the text box from test step 1. Add the action, provide a proper test step description, provide an output description, and connect the output from test step 1:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-finditemrow.png" class="no-border" >}}

3. The last step is that you must return the found list view as an output parameter. To use the output parameter, you must add the [Set Return Value](/appstore/partner-solutions/ats/rg-one-set-return-value/) action and connect the output of test step 2. This action does not need any descriptions. The Set Return Value action gives the connected input to the output parameter as a Page Element, because the item/row is a Page Element:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-setreturnvalue.png" class="no-border" >}}

## Action Parameters

Next, you need to add the action input and output parameters:

* Input parameters:
    * Widget Name
    * Value
    * Search Context

* Output parameters:
    * Item/Row

{{% alert color="info" %}}
Keep the [guidelines for creating a custom action](/appstore/partner-solutions/ats/ht-two-guidelines-custom-action/) in mind while creating action parameters.
{{% /alert %}}

1. Configure the **Widget Name** input parameter like this:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/widget-name-parameter.png" class="no-border" >}}

2. Configure the **Value** input parameter like this:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-inputparameter-Value.png" class="no-border" >}}

3. Configure the **Search Context** input parameter like this:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/search-context-parameter.png" class="no-border" >}}

4. Configure the **Item/Row** output parameter like this:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-outputparameter-itemrow.png" class="no-border" >}}

5. Next, connect the input parameters to the right actions. The input parameters are connected to the *Find/Assert Widget* action:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-inputparameters-connected.png" class="no-border" >}}

There is no need to add logic to this custom action. Its only returning an item/row.

## Final Check

Now check for the following:

* Use of the ATS naming convention for parameters
* A clear description of test steps, input parameters, output parameters, and action returns
* Interpunction usage in pieces of code (if used)
* Use of data types on the different parameters to avoid errors

After checking these items, you can run the test case that uses this action.

Congratulations! You created your own custom action to find an item/row by using a unique value.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/create-custom-actions/create-search-context-actions/cab-11-find-itemrow/listviewitem-actionfinished.png" class="no-border" >}}
