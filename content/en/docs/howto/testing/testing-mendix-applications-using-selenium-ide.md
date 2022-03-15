---
title: "Test Mendix Apps Using Selenium IDE"
url: /howto/testing/testing-mendix-applications-using-selenium-ide/
category: "Testing"
menu_order: 40
tags: ["test", "testing", "selenium"]
---

## 1 Introduction

Selenium IDE is a Firefox plugin that records and plays back user interactions with the browser. 

**After using this how-to, you will know how to do the following:**

* Record a simple test scripts with Selenium IDE
* Find unique CSS selectors

## 2 Prerequisites

This how-to will teach you how to do the following:

* Download and install [Firefox](https://www.mozilla.org/nl/firefox/new/)
* Download and install [Selenium IDE](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/) (when Selenium IDE is installed, it is then available as a Firefox plugin)

These are the software versions used in this how-to:

| Software | Version Used in This How-To |
| --- | --- |
| Firefox | 67.0.1 |
| Selenium IDE | 3.8.1 |

{{% alert type="warning" %}}
All images, names, and steps in this how-to are based on these versions. When using other versions, the images and/or names on your screen may be different than what is used in this how-to.
{{% /alert %}}

{{% alert type="warning" %}}
This how-to uses the Company Expenses app template for an example scenario. However, this app template is no longer platform-supported by Mendix. Therefore, sections using this app template can only be used as reference and not as sections that can be completed step-by-step.
{{% /alert %}}

## 3 Installing & Running the Company Expenses App

Follow these steps to install and run the Company Expenses app:

1. Open Mendix Studio Pro.
2.  Click the Marketplace icon in the top toolbar:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/app-store.png)

3.  Search for *Company Expenses*, then select **Company Expenses**:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/company-ex.png)

4.  Click **Download** and then **OK**. This will open the Company Expenses app in Studio Pro.

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/download.png)

5. Click the play button (**Run Locally**), then **View App**.

## 4 Create Your First Automated Test

To create an automated test by using the record button in Selenium IDE, follow these steps:

1.  Open **Firefox** and click the **Selenium IDE** icon in the browser toolbar:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/icon.png)

2.  Select **Record a new test in a new project**:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/sel-menu.png)

3. Enter a name for your new Selenium project (for example, *CompanyExpenses*).
4. Enter the URL for your Company Expenses app's login screen (`http://localhost:8080/login.html`), then click **START RECORDING**. This will open up your app in a new browser window. The Selenium IDE is now recording.
5.  Sign in with default [administrator credentials](/refguide/administrator/#administrator-properties): 
	* **User name**: MxAdmin
	* **Password**: 1
	
6.  After you logged in, click **Sign out** on the right side of the app:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/sign-out.png)

7.  In the Selenium IDE, click the record icon to stop recording: 

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/record.png)

8.  Enter a name for your new test, (for example, *Test1*). The Selenium IDE should now look like this:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/after-test.png)

7.  Now that you have a test, click the **Run current test** icon:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/run-current-test.png)

	Every passed test step will be marked green:

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/green-test.png)

## 5  Locating  & Changing a Test Target

It is possible that you will need to edit your Selenium IDE test script before you can run it regularly. This may happen because, for example, HTML tag IDs are generated dynamically and will be different with each run of the same page.

When necessary, you will need to find the right locators in order to tell Selenium IDE the GUI targets (for example, buttons, text boxes, and data grids) on which it needs to operate. To make it easier to create a locator for Mendix elements, `mx-name` is added to the class of an element. If you change the position of an element in a document, there is thus no need to rewrite the script.

In this example scenario, a running test has failed on the target `id=mxui_widget_Wrapper_23`:

![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/fail.png)

The element with this target does not exist on the page for Selenium IDE, because the number in the ID is not always the same. You need to find another target selector for the same element that Selenium IDE will pick up. Mendix uses CSS classes to identify page content like widgets and pop-up windows, so you can use these classes in Selenium IDE to manipulate pages and verify data. 

A widget can be given a name in Mendix Studio Pro, and this name will appear in the HTML document as a class name prefixed by `mx-name-`. For instance, a grid named `EmployeeGrid` will get the CSS class `mx-name-EmployeeGrid`. This is true for all Mendix widgets.

In this example scenario, you need to do the following:

1. Open the page in Studio Pro that corresponds to where the Selenium IDE test failed.
2. Highlight the element where the Selenium IDE test failed.
2. The **Name** property for the **User name** field is **textBox10**. Every Mendix element automatically gets the CSS class `mx-name-[Name]`, so note that this field will have the CSS class `mx-name-textBox10`.

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/name.png)

4. Open the developer tools for your browser (with the app still open to where the Selenium IDE test failed) and search for `mx-name-textBox10`. There is a matching node, so you have now verified a unique selector for the **User name** field.

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/inspector.png)

5. In Selenium IDE, change the **Target** `id=mxui_widget_Wrapper_23` into `css=.mx-name-textBox6`: 

	![](/attachments/howto/testing/testing-mendix-applications-using-selenium-ide/change.png)

6. Click the **Run current test** icon to see if your test passes. 

## 6 Read More

* [Automated Tests with TestNG](/howto/testing/create-automated-tests-with-testng/)
* [Test Microflows Using the Unit Testing Module](/howto/testing/testing-microflows-using-the-unittesting-module/)
* [Find the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Clear Warning Messages in Mendix](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)

Learn more about this topic using the following helpful link:

* [Selenium IDE Documentation](http://docs.seleniumhq.org/docs/02_selenium_ide.jsp)
