---
title: "Set Fields as Read-Only or Required"
category: "Pages"
description: "Describes how to set validation and editability in Mendix Studio."
menu_order: 30
tags: ["studio", "pages", "form", "how to", "validation", "required", "read-only", "editability"]
---

## 1 Introduction 

This how-to explains how you can configure fields in a form as required or read-only. 

**This how-to will teach you how to do the following:**

* Configure fields as read-only by setting editability
* Configure fields as required by setting validation

The how-to describes the following use case: 

You have an HR app where employees can view and edit information about themselves, such as contract details and personal information. You have a page with employee details:

<img src="attachments/pages-how-to-set-validation-and-editability/employee-details-page.png" style="zoom:50%;" />

You would like to make some fields on this page obligatory to fill in (required) and some read-only.

Domain model is configured the following way in this use case:

<img src="attachments/pages-how-to-set-validation-and-editability/domain-model.png" style="zoom:60%;" />

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](/studio/pages). 
* Familiarize yourself with editability and input validation properties of input elements. For more information, see [Editability](/studio/page-editor-input-elements#editability) and [Input Validation Section](/studio/page-editor-input-elements#validation) sections in *Input Elements*.
* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/studio/domain-models).

## 3 Setting Fields as Read-Only

You would like to make the following employee details read-only:

* Employee number
* Contract type

To make a field read-only, do the following:

1. Open the **Employee Details** page.

2. Select the **Contract type** field and open its properties.

3. In the **General** section, set the **Editability** property to read-only:

    <img src="attachments/pages-how-to-set-validation-and-editability/editability.png" style="zoom:60%;" />

4. Select the **Employee number** field and open its properties.

5. In the **General** section > **Editability**, you can see that it is already set to read-only and this property cannot be changed. This is because the **EmployeeNumber** attribute in the domain model is of *autonumber* type, which means that this number is generated automatically and cannot be edited:

    ![](attachments/pages-how-to-set-validation-and-editability/autonumber-read-only.png)

Now Employee number and Contract type fields are read-only, they are grayed out, and end-users will not be able to edit them.

<img src="attachments/pages-how-to-set-validation-and-editability/read-only-configured.png" style="zoom:67%;" />

## 4 Setting Fields as Required

You would like to set the following fields as required for employees:

* Name
* Address
* Email
* Phone

To set a field as required, do the following:

1. Open the **Employee Details** page.

2. Select the **Name** field and open its properties.

3. In the **Input Validation** section, set the **Validation Type** property to **Required**:

    <img src="attachments/pages-how-to-set-validation-and-editability/validation-type-required.png" style="zoom: 67%;" />
    
4. When an employee attempts to leave this fields empty, an error message will be displayed under the field. Specify this message in the **Message** property:

    <img src="attachments/pages-how-to-set-validation-and-editability/validation-message.png" style="zoom: 67%;" />
    
5. Repeat steps 2-4 for **Address**, **Email**, and **Phone** fields to set them as required too. 

Good job! Now when an employee attempts to leave **Name**, **Address**, **Email**, or **Phone** fields empty and tries to save changes, an error message will be displayed under the field saying "This field is required":

<img src="attachments/pages-how-to-set-validation-and-editability/validation-example.png" style="zoom:50%;" />

Changes will not be saved until all required fields are filled in.

Congratulations! You have configured fields as read-only and required for the form with employee details.

You can now preview your app and test your page. For more information on how to preview your page, see [Previewing & Publishing Your App](/studio/publishing-app).

You can also add new functionality to your app, for example, enable employees attach images for their business trip reports. For more information, see [How to Enable End-Users to Attach Images](pages-how-to-attach-images).