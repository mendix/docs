---
title: "Link Test Cases and Test Suites to User Stories"
linktitle: "Link Test Cases and Suites to User Stories"
url: /appstore/partner-solutions/ats/ht-two-connect-stories-to-testcases/
description: "Describes the steps for linking Test Cases and Test Suites to User Stories."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Mendix ATS is a testing tool designed for automated testing of Mendix applications. With your automated tests, you want to test functionalities of the application. Descriptions of those functionalities are in your User Stories. As you want to test those functionalities, ATS has the ability to retrieve User Stories from the Mendix Portal project. In ATS you can link the retrieved User Stories to test cases and test suites. This is useful for you and your team to see what can be tested automatically and which functionalities are covered by a test case. Additionally linking user stories to test cases and test suites is useful for stakeholders. By linking them, you can show that the functionalities build in the Sprint are tested.

This how-to teaches you how to do the following

* Set the Mendix API key
* Set the Mendix PAT
* Retrieve User Stories in ATS
* Link test cases/test suites to User Stories
* Link User Stories to test cases/test suites

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Read [How to Get Started](/appstore/partner-solutions/ats/ht-two-getting-started/)
* Read [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)

## Set the Mendix API Key / Personal Access Token {#set}

The following steps describe how you can set your Mendix API Key in ATS:

1. Go to ATS and login.
2. Open the app where you want to add the Mendix API Key.
3. Inside your app click the profile menu and click **Show App Settings**.

   {{% alert color="info" %}} **Show App Settings** is only present if you have Scrum Master rights in the Mendix Portal project {{% /alert %}}

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/show-test-settings.png" class="no-border" >}}

4. On the **Settings** page click **Set API Key**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/set-api-key.png" class="no-border" >}}

### Integrating with Mendix Epics

Clicking **Set API Key** opens this **Mendix API Key** dialog box:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/pat-api-key-dialog.png" class="no-border" >}}

1. Follow the steps in the [Generating a PAT](/apidocs-mxsdk/apidocs/epics-api/#generate) section in *Epics API*.
2. Copy and paste the `{GENERATED_PAT}` into the **Personal Access Token** field in ATS.
3. Click **Save**.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/mendix-api-key-filled-e.png" class="no-border" >}}

You have now set the Mendix API key or personal access token (PAT). ATS can now retrieve the user stories from your Mendix Portal app.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/set-mendix-api-key.png" class="no-border" >}}

## Retrieve User Stories in ATS

The following steps explain how to retrieve user stories from the Mendix Portal project in ATS:

1. Open your project in ATS and go to **Test Cases**.
2. Click the **Stories** tab.
3. Click the **Refresh button** to retrieve the User Stories from the Mendix Portal:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/go-to-stories-tab-e.png" class="no-border" >}}

If you filled in a correct Mendix API Key you can now see the User Stories in ATS:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/user-stories-in-ats.png" class="no-border" >}}

{{% alert color="danger" %}}If you are using Mendix Epics, stories that have already been archived are not shown in ATS. This is because the Epics API only returns non-archived stories as their response. Stories that have not been archived yet when retrieved via ATS are archived and shown in ATS. {{% /alert %}}

## Linking Test Cases/Test Suites to User Stories

In this example, I link a test case to a user story. Follow the same steps to link a test suite to a user story.

The following steps describe how to link a test case to a user story:

1. Open your project in ATS and go to **Test Cases**.
2. Click the **Stories** tab.
3. Search for the user story you want to link to a test case.
4. Click **Add test**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/add-test-to-story.png" class="no-border" >}}

    Clicking **Add test** opens the **Select item** Dialog box:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/add-test-case-to-story-dialog.png" class="no-border" >}}

In the **Add Test Case/Suite to Story** dialog you can select to create a new test case or use an existing test case. See below for the explanation of both.

### Connecting a New Test Case to a User Story

1. In the **Select item** Dialog box click **Create new test case**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/create-new-test-case.png" class="no-border" >}}

2. Set the type to **Test Case**.
3. Enter a name in the **Name** field. Use the predefined naming structure.
4. Enter a description in the **Description** field.
5. Use the **Template** referenceSelector in case you have a test case that you want to use as a template. ATS copies all the test steps of the template to the new test case.

    * To add a template click the arrow icon. This opens the **Select item** Dialog box.
    * In the Dialog search and select the test case you want to add as template and click **Select**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/select-template.png" class="no-border" >}}

6. Click **Create & Open** to create and open your test case. This is useful if you want to edit your test case. Click **Create** to create the test case, but not open it:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/new-test-case-e.png" class="no-border" >}}

    Clicking **Create & Open** or **Create** links the test case to the user story:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/test-case-added.png" class="no-border" >}}

To see the added test case double-click the Story name. This opens the **Edit Story** page. This page shows the added test case:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/edit-story-page.png" class="no-border" >}}

On the **Edit Story** page you can do the following:

* Add a new test case in the same way as described above by clicking **Add test** (1).
* Go to the **Test Case Details** page and edit the test case by clicking **Edit** (2).
* Remove the linked test case by clicking **Remove** (3).

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/edit-story-page-options-e.png" class="no-border" >}}

### Linking an Existing Test Case to a User Story

1. In the **Select Item** Dialog search and select the test case you want to link to the Story.
2. Click **Select**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/add-existing-test-case-e.png" class="no-border" >}}

Clicking **Add selected** links the test case to the user story. As this test case ran successfully, the **Success** is 100%:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/existing-test-case-added-e.png" class="no-border" >}}

To see the added test case double-click the Story name. This opens the **Edit Story** page. This page shows the added test case:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/edit-story-page.png" class="no-border" >}}

On the **Edit Story** page you can do the following:

* Add a new test case in the same way as described above by clicking **Add test** (1).
* Go to the **Test Case Details** page and edit the test case by clicking **Edit** (2).
* Remove the linked test case by clicking **Remove** (3).

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/edit-story-page-options-e.png" class="no-border" >}}

## Linking User Stories to Test Cases

In this example, I link a user story to an existing test case. Follow the same steps to link a user story to a test suite.

To link an existing test case to a user story you should have created a test case.

To link an existing test case to a user story follow these steps:

1. Open your project in ATS, open the **Test Cases** menu item and open the test case to which you want to link a user story.
2. Go to the **Stories** tab.
3. Click **Link new story**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/test-case-stories-tab-e.png" class="no-border" >}}

    Clicking **Link new story** opens the **Link Story** Dialog:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/link-story-dialog.png" class="no-border" >}}

4. Search and select the user story you want to add to the test case.
5. Click **Add selected**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/link-story-selected-e.png" class="no-border" >}}

Clicking **Add selected** links the story to the test case:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-connect-stories-to-testcases/story-linked-to-test-case.png" class="no-border" >}}

You can go to the **Edit story** page by clicking **Open story**. You can unlink a story by clicking **Unlink selected story**.

You can now link test cases to stories and link stories to test cases.

## Next Up

You now learned how to link user stories to your test cases. The next how-to is [Use ATS in Combination with CI/CD](/appstore/partner-solutions/ats/ht-two-ats-and-ci-cd/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.
