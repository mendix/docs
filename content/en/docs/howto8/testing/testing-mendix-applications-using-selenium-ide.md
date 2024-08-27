---
title: "Test Mendix Apps Using Selenium IDE"
url: /howto8/testing/testing-mendix-applications-using-selenium-ide/
weight: 40
---

## Introduction

Selenium IDE is a Firefox plugin that records and plays back user interactions with the browser. 

**After using this how-to, you will know how to do the following:**

* Record a simple test scripts with Selenium IDE
* Find unique CSS selectors

## Prerequisites

This how-to teaches you how to do the following:

* Download and install [Firefox](https://www.mozilla.org/nl/firefox/new/)
* Download and install [Selenium IDE](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/) (when Selenium IDE is installed, it is then available as a Firefox plugin)

These are the software versions used in this how-to:

| Software | Version Used in This How-To |
| --- | --- |
| Firefox | 67.0.1 |
| Selenium IDE | 3.8.1 |

{{% alert color="warning" %}}
All images, names, and steps in this how-to are based on these versions. When using other versions, the images and/or names on your screen may be different than what is used in this how-to.
{{% /alert %}}

{{% alert color="warning" %}}
This how-to uses the Company Expenses app template for an example scenario. However, this app template is no longer platform-supported by Mendix. Therefore, sections using this app template can only be used as reference and not as sections that can be completed step-by-step.
{{% /alert %}}

## Installing and Running the Company Expenses App

Follow these steps to install and run the Company Expenses app:

1. Open Mendix Studio Pro.
2. Click the Marketplace icon in the top toolbar:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/app-store.png" class="no-border" >}}

3. Search for *Company Expenses*, then select **Company Expenses**:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/company-ex.png" class="no-border" >}}

4. Click **Download** and then **OK**. This will open the Company Expenses app in Studio Pro.

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/download.png" class="no-border" >}}

5. Click **Run Locally**, then **View**.

## Create Your First Automated Test

To create an automated test by using the record button in Selenium IDE, follow these steps:

1. Open **Firefox** and click the **Selenium IDE** icon in the browser toolbar:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/icon.png" class="no-border" >}}

2. Select **Record a new test in a new project**:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/sel-menu.png" class="no-border" >}}

3. Enter a name for your new Selenium project (for example, *CompanyExpenses*).
4. Enter the URL for your Company Expenses app's login screen (`http://localhost:8080/login.html`), then click **START RECORDING**. This will open up your app in a new browser window. The Selenium IDE is now recording.
5. Sign in with default [administrator credentials](/refguide8/administrator/#administrator-properties): 
    * **User name**: MxAdmin
    * **Password**: 1

6. After you logged in, click **Sign out** on the right side of the app:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/sign-out.png" class="no-border" >}}

7. In the Selenium IDE, click the record icon to stop recording: 

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/record.png" class="no-border" >}}

8. Enter a name for your new test, (for example, *Test1*). The Selenium IDE should now look like this:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/after-test.png" class="no-border" >}}

9. Now that you have a test, click the **Run current test** icon:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/run-current-test.png" class="no-border" >}}

    Every passed test step will be marked green:

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/green-test.png" class="no-border" >}}

## Locating and Changing a Test Target

It is possible that you will need to edit your Selenium IDE test script before you can run it regularly. This may happen because, for example, HTML tag IDs are generated dynamically and will be different with each run of the same page.

When necessary, you will need to find the right locators in order to tell Selenium IDE the GUI targets (for example, buttons, text boxes, and data grids) on which it needs to operate. To make it easier to create a locator for Mendix elements, `mx-name` is added to the class of an element. If you change the position of an element in a document, there is thus no need to rewrite the script.

In this example scenario, a running test has failed on the target `id=mxui_widget_Wrapper_23`:

{{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/fail.png" class="no-border" >}}

The element with this target does not exist on the page for Selenium IDE, because the number in the ID is not always the same. You need to find another target selector for the same element that Selenium IDE will pick up. Mendix uses CSS classes to identify page content like widgets and pop-up windows, so you can use these classes in Selenium IDE to manipulate pages and verify data. 

A widget can be given a name in Mendix Studio Pro, and this name will appear in the HTML document as a class name prefixed by `mx-name-`. For instance, a grid named `EmployeeGrid` will get the CSS class `mx-name-EmployeeGrid`. This is true for all Mendix widgets.

In this example scenario, you need to do the following:

1. Open the page in Studio Pro that corresponds to where the Selenium IDE test failed.
2. Highlight the element where the Selenium IDE test failed.
3. The **Name** property for the **User name** field is **textBox10**. Every Mendix element automatically gets the CSS class `mx-name-[Name]`, so note that this field will have the CSS class `mx-name-textBox10`.

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/name.png" class="no-border" >}}

4. Open the developer tools for your browser (with the app still open to where the Selenium IDE test failed) and search for `mx-name-textBox10`. There is a matching node, so you have now verified a unique selector for the **User name** field.

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/inspector.png" class="no-border" >}}

5. In Selenium IDE, change the **Target** `id=mxui_widget_Wrapper_23` into `css=.mx-name-textBox6`: 

    {{< figure src="/attachments/howto8/testing/testing-mendix-applications-using-selenium-ide/change.png" class="no-border" >}}

6. Click the **Run current test** icon to see if your test passes. 

## Read More

* [Automated Tests with TestNG](/howto8/testing/create-automated-tests-with-testng/)
* [Test Microflows Using the Unit Testing Module](/howto8/testing/testing-microflows-using-the-unittesting-module/)
* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto8/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto8/integration/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)

Learn more about this topic using the following helpful link:

* [Selenium IDE Documentation](https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started)
