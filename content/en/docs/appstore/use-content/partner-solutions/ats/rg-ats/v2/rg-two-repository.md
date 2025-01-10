---
title: "Repository"
url: /appstore/partner-solutions/ats/rg-two-repository/
---

## Introduction

The repository is the heart of ATS, as it allows you to create and manage folders, test suites, test cases, drop-down menus, and actions. You can also create test data for data-driven testing. For more information on how to use data-driven testing in ATS, see [Test Data](/appstore/partner-solutions/ats/rg-two-data-driven-testing/).

You can access the repository by clicking **Test Cases** in the navigation menu.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-repository/repository.png" class="no-border" >}}

You search for a specific item by using the search bar in the repository. ATS searches for the desired item in the current folder and all sub-folders. So, if you start searching ATS, only searches inside your current folder and its sub-folders.

The breadcrumbs in the repository allow for quick navigation between folders. Click the name of the folder to go back to that parent folder.

With the type icons on the left side of the item name, you can identify at a glance the type of an item. The following list describes all the type icons used in the repository:

* This is a folder:

    {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-repository/folder-icon.png" class="no-border" >}}

* This is a test case:

    {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-repository/test-case-icon.png" class="no-border" >}}

* This is test suite:

    {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-repository/test-suite-icon.png" class="no-border" >}}

* This is an action:

    {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-repository/action-icon.png" class="no-border" >}}

If you want to cut, copy, or delete an item in the repository, you can do so by marking it with the checkbox. After that, the actions become available.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-repository/repository-actions.png" class="no-border" >}}

## Actions

In the repository, you use the **Actions** drop-down menu to perform the following actions:

* Create a **New Folder**
* Create a **New Test Case** (for details on creating a test case, see [Test Case](/appstore/partner-solutions/ats/rg-two-test-case/))
* Create a **New Test Suite** (for details on creating a test suite, see [Test Suite](/appstore/partner-solutions/ats/rg-two-test-suite/))
* Create a **New Action** (for details on creating an action, see [Action](/appstore/partner-solutions/ats/rg-two-action/))
* Create a **New Drop-Down** (for details on creating a drop-down menu, see [Drop-Down](/appstore/partner-solutions/ats/rg-two-drop-down/))
* **Import** items into the repository

ATS stores all created items in the repository.

## Importing and Exporting

ATS allows you to export to and import data from an XML file. It is possible to move data between different apps or to save test definitions on your hard drive.

You can export the following data:

* folders
* test cases/test suites
* actions
* parameters set in actions/test cases

### Importing

There are two ways of using the import:

* By creating data, which means that you import new data for the first time into your target project
* By updating data, which means that you overwrite existing data (this includes actions, test cases, test suites, or folders)

When importing, ATS solves all the conflicts by overwriting existing data with the imported ones.

To import data in ATS, do the following:

* Click **Actions** and **Import**  to open the data import form
* On the data import form, click **Import from file** to open the import data dialog box

### Exporting

There are different scenarios for exporting data from ATS:

* Exporting a single action
* Exporting several actions
* Exporting test cases
* Exporting test suites
* Exporting folders containing the following:

    * Actions
    * Actions and test cases
    * Actions, test cases, and test suites
    * Folders, actions, test cases, and test suites

To export the data, you have to mark the items in the **Repository** and then click **Export** in the top menu. You can also export the item right away from the edit view by clicking **Export** on the upper-right side of the screen.
