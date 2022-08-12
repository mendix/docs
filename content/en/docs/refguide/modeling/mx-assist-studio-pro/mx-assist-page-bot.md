---
title: "Validation Assist"
url: /refguide/mx-assist-page-bot/
weight: 40
description: "Describes Mendix Validation Assist on pages."
tags: ["studio pro", "mendix assist", "AI", "assistant", "bot", "page bot", "validation bot", "validation"]
---

## 1 Introduction 

MxAssist Page Bot is a new intelligent virtual co-developer bot that helps you build pages more efficiently in Mendix Studio Pro. Page modeling is an iterative process consisting of various tasks and steps. The aim of the MxAssist Page Bot is to help the developers in some of the most time-consuming activities that can be smartly automated. 

The MxAssist Page Bot has the Validation Assist as part of it. [Validation rules](https://docs.mendix.com/refguide/validation-rules/) are conditions that should be satisfied before an object is committed. There are different ways to [set up data validations](https://docs.mendix.com/howto/data-models/setting-up-data-validation/) in Mendix. Currently, building data validations in microflows is a manual and repetitive task. The Validation Assist helps developers to build validation microflows in a more automated way using pre-built expressions. 

The main features of the Validation Assist are the following:

* List of checks for all members which data type can be empty, for example, when a customer’s name is not filled in a form  
* Prefilled dialog box with microflow and validation properties
* Ability to extract validations as a sub-microflow 
* Ability to call an existing validation sub-microflow in a new validation microflow
* Auto-generation of the validation microflow 

## 2 Validation Assist Overview

To enable the Validation Assist, open **Edit** > **Preferences** > the **Mendix Assist** tab > the **Page Bot** section > **Enable Validation Assist**. For more information, see [Preferences](/refguide/preferences-dialog/).

The Validation Assist is activated in the page elements where data validation might be needed. These elements are the following:

* Button with the **Save changes** on-click event

* Button with the **Call microflow** on-click event

* Majority of input widgets:

    * **Text box**
    * **Text area**
    * **Drop-down**
    * **Check box**
    * **Radio button**
    * **Date picker**
    * **Reference selector**
    * **Input reference set selector**

To access the Validation Assist, right-click a button or an input widget and select **Generate validation microflow.** 

The **Generate Validation Microflow** dialog box is where you can configure all validations. It consists of two sections:

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
    * **Extract** **submicroflow** – extracts a list of validations and saves it as a new validation sub-microflow to reuse later

## 3 Using Validation Assist to Build Data Validations

You can configure a custom **Save** button with the help of the Validation Assist. 

For example, you have a form for users to create a hairdresser’s appointment. They need to select the type of a treatment (haircut, haircoloring, etc.) and pick the date and time. These fields are obligatory and the **Save** button should show an error message if any of them are empty. 

To configure the **Save** button for the use case above, do the following:

1. Open the page with the form called *Appointment_NewEdit* and righ-click the **Save** button in it.
2. In the drop-down list, select **Generate validation microflow**.
3. In the **Generate Validation Microflow** dialog box, you can see that **Microflow** properties, such as microflow name, and validations were configured for you. Two expressions were added to validations: to check if treatment is empty and to check if the date and time is selected. is empty. 
    You also would like to add one more validation that checks that date and time is picked in the future. To add a validation, do the following:
    1. Click **New** in the **Generate Validation Microflow** dialog box. 
    2. In the **Add Validation** dialog box, make sure that **Type** is set to **Based on expression**.
    3. For **Member**, select an attribute for date and time.
    4. In the **Expression** field, fill in 
    5. Click **OK** to save changes.

4. In the **Generate Validation Microflow** dialog box, click **Generate microflow**. 
5. In the **Page Assist** dialog box, click **Open the microflow** to view the configured microflow:

6. In the Studio Pro topbar, click the **Play** button to run your app locally and test validations.

You can use one of the validations generated by the Validation Assist in several places, you need to extract a validation as a sub-microflow. 

For example, you have the appointment validation described above and would like to use the check whether the treatment type is not empty in another page: a pop-up page where users can change the type of their upcoming appointments called *Change_TreatmentType*.  Do the following:

1. Open the page *Appointment_NewEdit* that already has the validation. 
2. Right-click the **Save** button and select **Generate validation microflow**.
3. In the **Generate Validation Microflow** dialog box, select the validation that checks that treatment type is selected (not empty): 

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-page-bot/generate-validation-microflow-dialog.png" alt="Generate Validation Microflow List" >}}

4. Click **Extract submicroflow**.
5. In the **Extract Validation Sub Microflow,** click **Extract Microflow**.

     {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-page-bot/extract-sub-microflow-dialog.png" alt="Extract Sub-Microflow Dialog" >}}

6. Open the *Change_TreatmentType* page where users can select another type of treatment. 
7. In the **Toolbox**, select **Call microflow** **button** and drag it to the form. 
8. In the **Select Microflow** dialog box, select *VAL_Treatment_Type* and click **Select**.

     {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-page-bot/select-microflow.png" alt="Select Microflow" >}}

9. In the button properties, click the **Caption** property and change caption to **Save Changes**.
10. Delete the old **Save** button if there was one on the page.

Now when users click **Save Changes**, the validation checks that they did not leave the treatment type empty. 

## 4 Read More 

* [MxAssist Performance Bot](/refguide/mx-assist-performance-bot/)
* [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/)
* [Validation Rules](/refguide/validation-rules/)
