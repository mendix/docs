---
title: "Setting Up Data Validation"
url: /refguide/setting-up-data-validation/
weight: 70
description: "Describes how to set up both required and advanced data validation with Studio Pro."
aliases:
    - /howto/data-models/setting-up-data-validation/
---

## Introduction

This document explains how you can set up data validation with Mendix. Make sure you have set up a basic data structure, otherwise there is no data to validate. For more information on how to set up a basic data structure, see [Configuring a Domain Model](/refguide/configuring-a-domain-model/).

## Data Validation on Entity Level

This section explains how you can add validation rules to the domain model of your module. Validation rules are always triggered when changes to an object are committed. 

{{% alert color="info" %}}
Validation rules can only be applied on entities that are [persistable](/refguide/persistability/).
{{% /alert %}}

To add validation rules on entity level, follow the steps below:

1. Open your [domain model](/refguide/configuring-a-domain-model/) in Studio Pro.
2. Double-click a persistable entity to open its properties.
3. Go to the **Validation rules** tab.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/validation-rules-tab.png" width="500px" class="no-border" >}}

4. Click **New** to start configuring a new validation rule for this entity.
5. Select an **Attribute** whose value should be validated.
6. Enter an **Error message** that is shown to the end-user if the validation fails.
7. Select a **Type** for the validation rule.
8. Click **OK** to save this validation rule. 

An example of an already-configured validation rule is shown below:

{{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/validation-rule-example.png" width="500px" class="no-border" >}}

For more information on adding validation rules on entity level, see [Validation Rules](/refguide/validation-rules/). 

## Required Validation on Inputs, Reference Selectors, and Drop-downs

The page editor of Studio Pro allows you to configure mandatory inputs and add error messages shown to end-users if the inputs are empty. To do so, you first need to have a detail page. For more information on how to create a detail page, see [How to Create Your First Two Overview and Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/).

To set required validation on input elements through the page editor, follow the steps below:

1. Open a **detail page** and double-click an input widget to open its properties.
2. Go to the **Validation** section and select a **Type** of validation.
3. Enter a message for **Placeholder text** if applicable.
4. A custom error message can also be added to **Message** in the **Validation** section. This error message is shown to the end-user if the validation fails.

An example of checking the input for the **Name** attribute of a **Customer** entity is shown below:

{{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/input-widget-validation.png" width="500px" class="no-border" >}}

{{% alert color="info" %}}
**Required** validation on **Input elements** in a page editor is always checked before the validation rule on the entity level. This means that if you set both as **Required** and have different error messages, the page error message is shown to the end-user.  
{{% /alert %}}

For more information on input widget validation, see the [Validation](/refguide/common-widget-properties/#validation) section in *Properties Common in the Page Editor*. 

## Advanced Data Validation with the Before Commit Event {#validation-before-commit-event}

Validation rules are great for simple validations, but Mendix also offers ways to handle more complex validations. The domain model allows you to define event handlers on entity level. The **Before Commit** and **After Commit** events are triggered when an object is committed to the database. The **After Commit** is most commonly used to calculate values of denormalized data. With the **Before Commit** event, you can run a microflow that must return a Boolean value. If the microflow returns `false`, the entire commit is aborted, otherwise the object is stored in the database. This mechanism is great for data validation. 

This section explains how you can validate data using the **Before Commit** event. To do so, follow these steps:

1. Open your [domain model](/refguide/configuring-a-domain-model/) in Studio Pro.
2. Double-click an entity to open its properties.
3. Go to the **Event handlers** tab.
4. Click **New** to start configuring a new event handler for this entity.
5. Select **Before** as **Moment** and **Commit** as **Event**. This forces the event to trigger every time an object of this entity is committed.
6. Make sure to select **Yes** for **Pass event object**, because the object holds the data that you want to validate.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/event-handler.png" width="500px" class="no-border" >}}

7. Click **Select** to connect a microflow to this event.
8. Click **New** in the **Select Microflow** dialog box to create a new microflow.
9. Click **OK** to save the event handler and open the created microflow. It should look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/microflow-1.png" class="no-border" >}}

As long as this microflow returns a Boolean value, you are free to add any logic to determine whether the data is valid or not. If the microflow returns `false`, the commit is cancelled. Returning `true` commits the object. 

For more information on working with microflows, see [Microflows](/refguide/microflows/).

## Advanced Validation with a Custom Save Button {#custom-validation-save-button}

Validating user input can also be achieved by overriding the default **Save** button on a detail page. For more information on how to create a detail page, see [How to Create Your First Two Overview and Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/).

There are two ways to configure a custom **Save** button for data validation. 

{{% alert color="info" %}}
You can do this with the help of [Validation Assist](/refguide/validation-assist/). With Validation Assist, you can build validation microflows automatically by using pre-built expressions. For more information on how to use the Validation Assist, see the [Using Validation Assist to Build Data Validations](/refguide/validation-assist/#data-validations) section in *Validation Assist*. 
{{% /alert %}}

You can also configure a custom **Save** button manually. To do so, follow these steps:

1. Right-click the **Save** button and select **Delete** to remove it from the page.
2. Right-click the drop-zone below the **Cancel** button and select **Add widget > Buttons > Call microflow**.
3. In the **Select Microflow** dialog box, click **New** to create a new microflow. It should look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/microflow-2.png" class="no-border" >}}

4. Create a **Commit** activity to store the object in the database.
5. Create a **Close page** activity to close the detail page.

    You now created a microflow that mimics the default **Save** button behavior. It should look like this:
    
    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/microflow-3.png" class="no-border" >}}

    You can now extend the microflow to validate user input.
6. After the start event, insert a **decision**.
7. Double-click the decision to open its properties.
8. Type in an expression that returns `true` or `false`. For example: *$Customer/Name != 'John'*. As you can see, you can use the **Customer** input parameter in the expression to validate its values.
9. Save the properties by clicking **OK**.
10. Right-click the flow between the decision and the commit activity and select **true** as the condition value. In this case, if the customer's name is not 'John', the object is stored in the database and the page is closed.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/microflow-4.png" width="500px" class="no-border" >}}

11. Draw an additional flow from the decision and add another end event.
12. Right-click the flow between the decision and the end event and select **false** as the condition value.
13. Insert a **Validation feedback** activity between the decision and the new end event. In the activity's properties dialog box, configure the activity in the following way:

    1. Select your input parameter as **Variable** (in the example, the **Customer** entity is the input parameter).
    2. Select an attribute of the **Customer** entity as **Member** (for example, **Name**).
    3. Enter an error message in the **Template** field. You can use indexes to dynamically insert parameters in the template.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/validation-feedback.png" width="550px" class="no-border" >}}

    Your microflow should now look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/microflow-5.png" width="500px" class="no-border" >}}

## Validating Multiple Attributes

If you want to validate multiple attributes, it is best to do this in a sub-microflow:

1. Create a Boolean variable set to `true`. Be sure to mark this variable as the **Return value**.
2. Create your validations as described in the above section.
3. Configure the sub-microflow to change the Boolean variable to `false` after the validation feedback or error message. Connect this flow back to the main sequence flow using a merge, and continue with the next validation.
4. At the end of the sub-microflow, the variable should be `true` if it successfully passed all validations, and `false` when one or more validations have failed. 
5. Add a [decision](/refguide/decision/) that checks the return value and only allows the microflow to continue to the **Commit** event if all validations have passed. In this way, you can keep the logic while performing all necessary validations at once.

## Read More

* [Denormalize Data to Improve Performance](/howto/data-models/denormalize-data-to-improve-performance/)
