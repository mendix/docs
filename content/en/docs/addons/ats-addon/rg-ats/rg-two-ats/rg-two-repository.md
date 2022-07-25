---
title: "Repository"
url: /addons/ats-addon/rg-two-repository/
---

## 1 Introduction

The repository is the heart of ATS, as it allows you to create and manage folders, test suites, test cases, drop-down menus, and actions. You can also create test data for data-driven testing. For more information on how to use data-driven testing in ATS, see [Test Data](/addons/ats-addon/rg-two-data-driven-testing/).

You can access the repository by clicking **Test Cases** in the navigation menu.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-repository/repository.png" >}}

You search for a specific item by using the search bar in the repository. ATS searches for the desired item in the current folder and all sub-folders. So, if you start searching ATS, only searches inside your current folder and its sub-folders.

The breadcrumbs in the repository allow for quick navigation between folders. Click the name of the folder to go back to that parent folder.

With the type icons on the left side of the item name, you can identify at a glance the type of an item. The following list describes all the type icons used in the repository:

*  This is a folder:

    {{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-repository/folder-icon.png" >}}

*  This is a test case:

    {{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-repository/test-case-icon.png" >}}

*  This is test suite:

    {{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-repository/test-suite-icon.png" >}}

*  This is a action:

    {{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-repository/action-icon.png" >}}

If you want to cut, copy, or delete an item in the repository, you can do so by marking it with the check-box. After that, the actions become available.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-repository/repository-actions.png" >}}

## 2 Actions

In the repository, you use the **Actions** drop-down menu to perform the following actions:

* Create a **New Folder**
* Create a **New Test Case** (for details on creating a test case, see [Test Case](/addons/ats-addon/rg-two-test-case/))
* Create a **New Test Suite** (for detailson creating a test suite, see [Test Suite](/addons/ats-addon/rg-two-test-suite/))
* Create a **New Action** (for details on creating an action, see [Action](/addons/ats-addon/rg-two-action/))
* Create a **New Drop-Down** (for details on creating a drop-down menu, see [Drop-Down](/addons/ats-addon/rg-two-drop-down/))
* **Import** items into the repository

ATS stores all created items in the repository.

## 3 Importing and Exporting

ATS allows you to export to and import data from an XML file. It is possible to move data between different apps or to save test definitions on your hard drive.

You can export the following data:

* folders
* test cases/test suites
* actions
* parameters set in actions/test cases

### 3.1 Importing

There are two ways of using the import:

* By creating data, which means that you import new data for the first time into your target project
* By updating data, which means that you overwrite existing data (this includes actions, test cases, test suites, or folders)

When importing, ATS solves all the conflicts by overwriting existing data with the imported ones.

To import data in ATS, do the following:

* Click **Actions** and **Import**  to open the data import form
* On the data import form, click **Import from file** to open the import data dialog box

### 3.2 Exporting

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
