---
title: "Suppression Rules"
parent: "errors-pane"
menu_order: 10
description: "Describes suppression rules for warnings in Studio Pro."
tags: ["Studio Pro", "consistency errors", "checks", "warnings"]
---

## 1 Introduction  {#intro}

When you work on a project, Studio Pro performs consistency checks, which may result in warnings. Warnings identify issues that are not critical, but point to something that might be a problem. These warnings are shown in the **Errors** pane.

![Warnings in the Errors pane](attachments/suppression-rules/errors-pane-with-warnings.png)

While warnings can be valuable, there are some situations where you might want to disable them, such as the following ones:

* You made a deliberate choice in your project that leads to a warning, and you know this will not lead to problems.
* You are using an App Store module that contains warnings and you do not want to change the App Store module.
* The number of warnings is so large that the **Warnings** tab is not usable anymore, and you want to temporarily disable some of them.

With **Suppression rules** it is possible to disable warnings. You can [suppress warnings](#suppress-warning) from the **Errors** pane and [manage them](#managing-rules) via the **Suppression rules** option. It is also possible to [suppress warnings for all App Store modules](#suppress-appstore-warnings). 

## 2 Suppression Rule Logic {#suppression-rules-logic}

Suppression rules are for one user and for one instance of a project. The warnings that you suppress are not shared between users or projects, so warnings will not be suppressed for your team members working on the same project. 

Suppression rules are stored locally in the project directory, in a file called *project-settings.user.json*. When committing your changes to the Team Server, Studio Pro will ignore this file. 

![The settings file shown in Windows Explorer](attachments/suppression-rules/windows-explorer-showing-settings-files.png)

However, it is possible to export and import suppression rules manually. For more information on how to export and import warning, see [Exporting Your Suppression Rules](#export) and [Importing Your Suppression Rules](#import) sections. 

## 3 Suppressing a Warning in the Errors Pane {#suppress-warning}

From the **Errors** pane, you can suppress a warning for a document, a module, or the entire project:
![Suppressing a Warning](attachments/suppression-rules/suppressing-warning.png)

### 3.1 Suppressing a Warning for a Specific Document

To suppress a warning for a specific document only, do the following:

1. Right-click the warning you would like to suppress.

2. Select **Suppress this warning** > **For the document {Document name}**. 


The warning is only suppressed for the specific document. If the same warning appears in another document (for example, on another page), it will still be displayed for that document.

### 3.2 Suppressing a Warning for a Specific Module

To suppress a warning for a specific module, do the following:

1. Right-click the warning you would like to suppress.

2. Select **Suppress this warning** > **For the module {Module name}**. 


The warning is suppressed for the whole module. If the same warning appears in another module, it will still be displayed for that module.

### 3.3 Suppress a Warning for the Entire Project

To suppress a warning for the entire project, do the following:

1. Right-click the warning you would like to suppress.

2. Select **Suppress this warning** > **For the entire project**.


The warning is suppressed for the whole project and the list of warnings is updated in the **Errors** pane.

For more information on how to edit or delete a suppression rule, see the [Managing Suppression Rules](#managing-rules) section.

## 4 Managing Suppression Rules {#managing-rules}

You can add, edit, delete, export, or import suppression rules. You can also suppress warnings from the App Store. 

{{% alert type="info" %}}
After modifying suppression rules, click **OK** to close the **Manage Suppression Rules** dialog box and apply changes. 
{{% /alert %}}

### 4.1 Suppressing App Store Warnings {#suppress-appstore-warnings}

To suppress App Store warnings, do the following:

1.  Click the **Suppression rules** button in the **Errors** pane.

	![Viewing the suppress warnings rules](attachments/suppression-rules/errors-pane-suppress-warnings-button.png)

2. In the **Manage Suppression Rules** dialog box, check the **Suppress warnings from App Store modules** option.

    ![Suppressing App Store warnings](attachments/suppression-rules/rules-dialog-app-store-setting.png)

3. Click **OK** to apply the new setting.

Warnings from App Store modules are suppressed. 

### 4.2 Adding a Rule

For more advanced cases, you may want to manually add a new rule. This gives you full control over the settings that the rule uses, when deciding which warnings to suppress.

To manually add a new rule, follow the steps below:

1. Click the **Suppression rules** button in the **Errors** pane.

2. In the **Manage Suppression Rules** dialog box, select the **New** button:

    ![Rules window - new button](attachments/suppression-rules/rules-dialog-new-button.png)

3. In the **Add Suppression Rule** dialog box, set the necessary options to add the rule (for more information on settings, see the [Rule Setting](#rule-settings) section.  

    ![Rules window - add suppression](attachments/suppression-rules/new-warning-window.png)
   
4. Confirm your choice by clicking **OK**.

5. Click **OK** in the **Manage Suppression Rules** dialog box to save your changes.

The suppression rule is created.


### 4.3 Editing a Rule

To edit an existing rule, follow the steps below:

1. Click the **Suppression rules** button in the **Errors** pane.

2.  In the **Manage Suppression Rules** dialog box, select the **Edit** button:

    ![Rules window - edit button](attachments/suppression-rules/rules-dialog-edit-button.png)

3.  In the **Edit Suppression Rule** dialog box, edit options to change the rule (for more information on settings, see the [Suppression Rule Settings](#rule-settings) section. 

    ![Rule settings window](attachments/suppression-rules/rule-settings-window.png)

4. Confirm your choice by clicking **OK**.

5. Click **OK** in the **Manage Suppression Rules** dialog box to save your changes.

The suppression rule is edited. 


### 4.4 Deleting a Rule

To delete the existing rule, follow the steps below:

1. Click the **Suppression rules** button in the **Errors** pane.

2.   In the **Manage Suppression Rules** dialog box, click the **Delete** button:

    ![Rules window - delete button](attachments/suppression-rules/rules-dialog-delete-button.png)

The suppression rule is deleted.


### 4.5 Importing Suppression Rules {#import}

To import suppression rules, do the following:

1. Click the **Suppression rules** button in the **Errors** pane.

2.  In the **Manage Suppression Rules** dialog box, select the **Import** button:

    ![Import rules button](attachments/suppression-rules/import-rules.png)

3. Browse to the folder where you would like to import (the file extension that you are importing must be *.suppressions.json*).

4. Click **Open** to select the file.

5.  In a confirmation pop-up window, click **OK** to dismiss it:

    ![Import rules confirmation](attachments/suppression-rules/confirmation-dialog-after-rules-imported.png)

6. Click **OK** in the **Manage Suppression Rules** dialog box. 

The list of warnings is updated.


### 4.6 Exporting Your Suppression Rules {#export}

To export your suppression rules, do the following:

1. Click the **Suppression rules** button in the **Errors** pane.

2.  In the **Manage Suppression Rules** dialog box, select the **Export** button:

    ![Export rules button](attachments/suppression-rules/export-rules.png)

3. Browse to the folder where you wish to export the rules (by default the file name is `<your app name>.suppressions.json`). 

4. Click the **Save** button to save the exported rules.

5.  In a confirmation pop-up window, click **OK** to dismiss it:

    ![Export rules confirmation](attachments/suppression-rules/confirmation-dialog-after-rules-exported.png)

6. Click **OK** in the **Manage Suppression Rules** dialog box. 

Your suppression rules are exported. Another user can [import](#import) that file to use the same suppression rules.


## 5 Suppression Rule Settings {#rule-settings}

The table below describes the available settings:

| Setting          | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Module           | Suppresses warnings within the selected module. When **(All)** is selected, the rule applies to all modules. |
| Document         | Suppresses warnings within the selected document. When **(All)** is selected, the rule applies to all documents in the selected module. **Note**: to select a particular document, you first need to select a **Module**. |
| Suppress for | Allows you to suppress a warning for a specific *error code* or for *all* warnings. |
| Value            | Only displayed when the **Error code** option is selected in the **Suppress for** selector above. You can type in a specific error code, for example **CW1234**, to suppress only this specific warning. |

## 6 Read More {#read-more}

* [Errors Pane](errors-pane)
* [Consistency Errors](consistency-errors)
