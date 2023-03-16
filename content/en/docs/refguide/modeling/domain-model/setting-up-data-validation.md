---
title: "Setting Up Data Validation"
url: /refguide/setting-up-data-validation/
weight: 70
description: "Describes how to set up both required and advanced data validation with Studio Pro."
tags: ["studio pro", "data validation"]
aliases:
    - /howto/data-models/setting-up-data-validation/
---

## 1 Introduction

This how-to explains how you can set up data validation with Mendix. Before you can start with this how-to, you need to set up a basic data structure, otherwise there is no data to validate. If you do not know how to set up a basic data structure, you can take a look at [Creating a Basic Data Layer](/refguide/create-a-basic-data-layer/).

## 2 Data Validation on Entity Level

This section explains how you can add validation rules to the domain model of your module. Validation rules are always triggered when changes to an object are committed. Note that validation rules can only be applied on entities that are persistable.

1. Open a **domain model** in Studio Pro.
2. Double-click a persistable entity to open its **properties.**
3. Open the **Validation Rules** tab page.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582149.png" >}}

4. Click **New** to start configuring a new validation rule for this entity.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582148.png" >}}

5. Select the **attribute** of which the value should be validated.
6. Enter an **error message** that is shown to the end-user if the validation fails.
7. Select the **rule type**.
8. Click **OK** to save this validation rule.

## 3 Required Validation on Inputs, Reference Selectors, and Drop-downs

The page builder of Studio Pro allows you to configure which inputs are mandatory and what message is shown to the end-user if the input is empty. If you do not have a detail page yet, take a look at [How to create Your First Two Overview and Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/).

1. Open a **detail page** and double-click an input to open its properties.
2. Enter a message for **Placeholder text**. This message is shown below the input if an end-user clicks the **Save** button without filling in a value.

{{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582144.png" >}}

Note that a **Required** validation rule on entity level overrules this property.

## 4 Advanced Data Validation with the 'Before Commit' Event

Validation rules are great for simple validations, but Mendix also offers ways to handle more complex validations. The domain model allows you to define event handlers on entity level. The 'Before Commit' and 'After Commit' events are always triggered when an object is committed to the database. The 'After Commit' is most commonly used to calculate values of denormalized data. With the 'Before Commit' event, you can run a microflow that must return a Boolean value. If the microflow returns 'false', the entire commit is aborted, otherwise the object is stored in the database. This mechanism is great for data validation. 

This section explains how you can validate data using the 'Before Commit' event. Follow these steps:

1. Open a **domain model** in Studio Pro.
2. Double-click an entity to open its **properties**.
3. Open the **Event handlers** tab page.
4. Click **New** to start configuring a new event handler for this entity.
5. Select **Before** as moment and **Commit** as event. This forces the event to trigger every time an object of this entity is committed.
6. Make sure that the event object is passed, because this object holds the data that you want to validate.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582146.png" >}}

7. Click **Select** to connect a microflow to this event.
8. Click **New** in the **Select Microflow** dialog box to create a new one.
9. Click **OK** to save the event handler and open the created microflow. It should look similar to this:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582145.png" >}}

As long as this microflow returns a Boolean value, you are free to add any logic to determine if the data is valid or not. If the microflow returns 'false', the commit is cancelled. Returning 'true' commits the object. For more information on working with microflows, see [Microflows](/refguide/microflows/).

## 5 Advanced Validation with a Custom 'Save' Button

Validating user input can also be achieved by overriding the default **Save** button on a detail page. 
Start by creating overview and detail pages. If you do not know how to create overview and detail pages, take a look at [How to Create Your First Two Overview and Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/). Your detail page should look similar to this:

{{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582143.png" >}}

There are two ways to configure a custom **Save** button for data validation. You can do this with the help of [Validation Assist](/refguide/validation-assist/). With Validation Assist, you can build validation microflows in a more automatic way using pre-built expressions. For more information on how to use the Validation Assist, see the section [Using Validation Assist to Build Data Validations](/refguide/validation-assist/#3-using-validation-assist-to-build-data-validations) in *Validation Assist*. 

You can also configure a custom **Save** button for data validation manually. Follow these steps:

1. Right-click the **Save** button and select **Delete** to remove it from the page.
2. Right-click the drop-zone below the **Cancel** button and select **Add widget > Buttons > Call microflow**.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582142.png" >}}

3. In the **Select Microflow** dialog box, click **New** to create a new microflow. It should look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582141.png" >}}

4. Create a **Commit** activity to store the object in the database.
5. Create a **Close page** activity to close the detail page.

    You have now created a microflow that mimics the default **Save** button behavior. It should look like this:
    
    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582140.png" >}}

    You can now extend the microflow to validate user input.
6. After the start event, insert a **decision**.
7. Double-click the decision to open its properties and type in an expression that returns true or false. For example: *$Customer/Name != 'John'*. As you can see, you can use the **Customer** input parameter in the expression to validate its values.
8. Save the properties by clicking **OK**.
9. Right-click the line between the Decision and commit activity and select **true** as the condition value. In this case, if the customer's name is not 'John', the object is stored in the database and the page is closed.

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582139.png" >}}

10. Add an **End event** to the decision.
11. Draw an additional line from the decision to the new end event.
12. Right-click the line between the decision and the end event and select **false** as the condition value.
13. Insert a **Validation feedback** activity between the decision and the end event. In the activity's properties editor, enter these details:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582137.png" >}}

    Your microflow should now look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/setting-up-data-validation/18582138.png" >}}

14. Select the **input parameter** as variable.
15. Select for example **Name** as member.
16. Enter an error message in the **Template** field. You can use indexes to dynamically insert parameters in the template.

## 6 Validating Multiple Attributes

If you want to validate multiple attributes, it is best to do this in a sub-microflow:

1. Create a Boolean variable set to `true`. Be sure to mark this variable as the **Return value**.
2. Create your validations as described above.
3. Configure the sub-microflow to change the Boolean variable to `false` after the validation feedback or error message. Connect this flow back to the main sequence flow using a merge, and continue with the next validation.
4. At the end of the sub-microflow, the variable should be `true` if it successfully passed all validations, and `false` when one or more validations have failed. 
5. Add a [decision](/refguide/decision/) that checks the return value and only allows the microflow to continue to the **Commit** event if all validations have passed. In this way, you can keep the logic while performing all necessary validations at once.

## 7 Read More

* [Creating a Basic Data Layer](/refguide/create-a-basic-data-layer/)
* [Denormalize Data to Improve Performance](/howto/data-models/denormalize-data-to-improve-performance/)
* [Find the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Stories](/developerportal/collaborate/stories/)
