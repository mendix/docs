---
title: "(Un)Mask Your Data"
url: /appstore/partner-solutions/ats/ht-two-mask-your-password/
description: "Describes the steps for unmasking your password in ATS."
---

## Introduction

To test your application, you need to open it and log in. For this, you need to enter a username and a password in the **Login** action. Your password will automatically be encrypted to anonymize the data. But you might not want to have your login password masked. ATS has the functionality that makes unmasking your password possible. This how-to explains how to do that.

This how-to teaches you how to do the following:

* Unmask your password

## Prerequisites

Before starting this how-to, make sure you have the following prerequisites in place:

* Complete [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)
* Understand [How to Create a Custom Action](/appstore/partner-solutions/ats/ht-two-custom-action-general/)

## Unmasking Your Password

To unmask your password, follow these steps:

1. Open your app in ATS and go to the **Test Cases** menu item.
2. Click the **Repository** tab.
3. Click the **Actions** drop-down menu and then click **New Action**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/create_new_action.png" class="no-border" >}}

    Clicking **New Action** opens the **Create new** dialog box:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-case/repository-create-new.png" class="no-border" >}} 

4. Enter a name in the **Name** field (for example, *Open app and Login*).     
5. Enter a description in the **Description** field (for example, *This action opens the app and logs into the app as Admin*).
6. Click **Create**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/create-new-action-dialog-c.png" class="no-border" >}}

    This opens the **Action Details** page. ATS displays the **Name** and **Description** on this page.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/action_details-page.png" class="no-border" >}}

7. Add the **Open application** action.
8. Enter a description of the test step. Also, set the **Application URL** input parameter to **Environment URL** below **Global constant values**.
9. Add the **Login** action.
10. Enter a description of the test step:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/description_added.png" class="no-border" >}}

11. Click the **Settings** tab.
12. Add a new input parameter by clicking **New** below **Input Parameters**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/add_input_parameter.png" class="no-border" >}}

    Clicking **New** opens the **Edit Input Parameter** dialog box:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/edit_input_paremeter.png" class="no-border" >}}

13. Enter **Username** in the **Name** field. This field represents the name you have to link to the input parameter **Username** in your test step. So, using the same names makes it easier to connect the parameter to the correct input parameter.
14. Enter a description in the **Description** field. Give a clear description of the parameter (for example, *This input parameter unmasks your password*).
15. Click **Save**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/Username_input_parameter_edit.png" class="no-border" >}}

16. Enter **Password** in the **Name** field. This field represents the name you have to link to the input parameter **Password** in your test step. So, using the same names makes it easier to connect the parameter to the correct input parameter. 
17. Enter a description in the **Description** field. Give a clear description of the parameter (for example, *This input parameter unmasks your password*).
18. Make sure that **Show as password** is set to **No**.
19. Click **Save**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/unmask_password_edit.png" class="no-border" >}}

20. Click the **Test Step** tab and open the **Login** action:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/Test_steps_tab.png" class="no-border" >}}

21. Click the drop-down menu for the **Username** input parameter.
22. Select **Username [String]** below **Input values**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/Username_input_value.png" class="no-border" >}}

23. Click the drop-down menu for the **Password** input parameter.
24. Select **Password [String]** below **Input values**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/selected_input_parameters.png" class="no-border" >}}

### Verifying That Your Password Is Unmasked

To verify that your password is unmasked, follow these steps:

1. Open your app, click the **Test Cases** menu item, and click the **Repository** tab.
2. Create a new test case and add the **Open app and Login** action.
3. Click the drop-down menu next to the **Password** input parameter. Clicking the drop-down opens the input field:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/input_field_password.png" class="no-border" >}}

4. Enter the password in the **Password** field.
5. Select the **Constant value**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/password_entered.png" class="no-border" >}}

After selecting the constant value, the entered password represents the **Password** input parameter of your test step instead of five aterisks:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-mask-your-password/unmasked_password.png" class="no-border" >}}

You can now unmask your password using ATS. You can use these steps as well to mask data in ATS.

## Next Up

You have now learned how to unmask your password in a login action. The next how-to to complete is [How to Upload a File in Your App Using ATS](/appstore/partner-solutions/ats/ht-two-upload-file-using-ats/). You can find an overview of all the how-tos and the structure on [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/). We advise you to follow the predefined structure.
