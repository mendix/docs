---
title: "Validation Assist"
url: /refguide/validation-assist/
weight: 40
description: "Describes Mendix Validation Assist on pages."
tags: ["studio pro", "mendix assist", "validation assist", "bot", "validation bot", "validation", "data validations", "field validation", "form validation"]
---

## 1 Introduction 

The Validation Assist helps you build validation microflows in a more automated way using pre-built expressions.  [Validation rules](https://docs.mendix.com/refguide/validation-rules/) are conditions that should be satisfied before an object is committed. There are different ways to [set up data validations](/refguide/setting-up-data-validation/) in Mendix. Building data validations in microflows is a manual and repetitive task and Validation Assist helps automate it. 

The main features of the Validation Assist are the following:

* List of checks for all members which data type can be empty, for example, when a customer’s name is not filled in a form  
* Prefilled dialog box with microflow and validation properties
* Ability to extract validations as a sub-microflow 
* Ability to call an existing validation sub-microflow in a new validation microflow
* Auto-generation of the validation microflow 

## 2 Validation Assist Overview

The Validation Assist is activated by default in the page elements where data validation might be needed. These elements are the following:

* a button with the **Save changes** on-click event
* a button with the **Call microflow** on-click event
* a button with no on-click event set for it
* the following input widgets:

    * **Text box**
    * **Text area**
    * **Drop-down**
    * **Checkbox**
    * **Radio button**
    * **Date picker**
    * **Reference selector**
    * **Input reference set selector**

To access the Validation Assist, right-click a button or an input widget listed above and select **Generate validation microflow**. 

{{% alert color="info" %}}
The page should contain at least one input widget, for the **Generate validation microflow** option to be available. 
{{% /alert %}} 

The **Generate Validation Microflow** dialog box is where you can configure all validations:

{{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-validation-assist/generate-validation-microflow-dialog.png" alt="Generate Validation Microflow Dialog Box" >}}

The dialog box consists of two sections:

* **Microflow Properties,** where the general properties of the validation microflow are configured. Properties contain the following:

    * **Microflow** – microflow name
    * **Commit** – defines whether changes should be committed to the database (only for buttons)
    * **Close Page** – defines whether the page should be closed after clicking the button (only for buttons)
    * **On Event** – defines when to trigger the validation check (only for input widgets), for more information on events, see [On Click Events and Events Section](/refguide/on-click-event/)

* **Validations** where validations for the microflow are configured. This section contains the following: 

    * List of checks for all members which data type can be empty. These checks are automatically configured with prefilled **Caption**, **Rule**, **Error message** (only for the buttons)
    * **New** – adds new validations  
    * **Edit**– edits existing out-of-the-box empty check validations or other validations created by the user
    * **Delete** – deletes the selected validation
    * **Move up** and **Move** **down** – changes the order of validations in the list
    * **Duplicate** – duplicates selected validation
    * **Extract** **submicroflow** – extracts a list of validations and saves it as a new validation sub-microflow to reuse later

## 3 Using Validation Assist to Build Data Validations

You can configure a custom **Save** button with the help of the Validation Assist. 

For example, you have an app for a hairdresser salon, where customers can view information on types of treatments, their prices, they have a customer profile and can schedule appointments. Your app has a validation microflow that checks the selected date and time: that the selected date is in the future, and that it is within the opening hours (from 8 a.m. till 5 p.m. and not on a weekend). 

Your app also has a form where customers can schedule a hairdresser’s appointment. They need to fill in their name, select the type of a treatment (haircut, haircoloring, etc.) and pick the date and time. You would like the **Save** button to show an error message when any of the following conditions are *not* met:

* one or several fields in the form are not filled in
* the selected date and time is in the future and it is within the opening hours (from 8 a.m. till 5 p.m. and not on a weekend)
* the name of the customer is valid (the name has only alphabetical symbols)

To configure the **Save** button for the use case above, do the following:

1. Open the page with the form called *Appointment_NewEdit* and right-click the **Save** button in it.
2. In the drop-down list, select **Generate validation microflow**:

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-validation-assist/generate-validation-microflow-option.png" alt="Generate Validation Microflow Option" >}}

3. In the **Generate Validation Microflow** dialog box, you can see that **Microflow** properties, for example, a microflow name, and validations were configured for you. Three expressions were added to validations: to check if the name, treatment type, and date and time fields are filled in:

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-validation-assist/generate-validation-microflow-dialog.png" alt="Generate Validation Microflow Dialog Box" >}}

4. In your app, you already have a validation microflow that checks the selected date and time, you can call the microflow in the current validation. Do the following:

    1. Click **New** in the **Generate Validation Microflow** dialog box.
    2. In the **Add Validation** dialog box, set **Type** to **Call a validation microflow**.
    3. Select the existing validation microflow for **Microflow** and click **OK**. 

        The microflow is added to validations. 

5. You also would like to add one more validation that checks that the name of the customer is valid (the name has only alphabetical symbols). To add a validation, do the following:

    1. Click **New** in the **Generate Validation Microflow** dialog box. 
    2. In the **Add Validation** dialog box, make sure that **Type** is set to **Based on expression**.
    3. For **Member**, select the **Customer_Name** attribute.
    4. In the **Expression** field, fill in *$Appointment/Customer_Name*. 
    5. Click **OK** to save changes.

6. You would like to save validations for the **Customer_Name** attribute (that the name is not empty and that it is alphabetical) as a sub-microflow to use them as a separate validation on a different page.  Do the following:

    1. In the **Generate Validation Microflow** dialog box, select two validations for *Customer_Name* and click **Extract submicroflow**:

        {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-validation-assist/extract-sub-microflow.png" alt="Extract Sub-Microflow" >}}

    2. In the **Extract Validation Sub Microflow,** click **Extract Microflow**.

        {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-validation-assist/extract-sub-microflow-dialog.png" alt="Extract Sub-Microflow Dialog" >}}

        The microflow is saved separately containing selected validations.

7. In the **Generate Validation Microflow** dialog box, click **Generate microflow**. 
8. In the **Validation Assist** dialog box, click **Open the microflow** to view the configured microflow:

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-validation-assist/validation-microflow.png" alt="Validation Microflow" >}}

The created microflow is used for the **Save** button to validate all conditions. The sub-microflow can be used on a different page to validate the customer name. 
You can now  click the **Play** button in the Studio Pro top bar to run your app locally and test validations.

## 4 Read More 

* [MxAssist Best Practice Bot](/refguide/mx-assist-performance-bot/)
* [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/)
* [Validation Rules](/refguide/validation-rules/)     
