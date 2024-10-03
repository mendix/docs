---
title: "ATS Release Notes"
url: /appstore/partner-solutions/ats/release-notes/
description: "The release notes for Mendix Application Test Suite (ATS) with details on new features, bug fixes, and known issues."
weight: 100
numberless_headings: true
---

## 3.0.0

**Release date: September 24, 2024**

### Improvements

* The ATS source code and model have been upgraded to Mendix [9.24.27](/releasenotes/studio-pro/9.24/#92427).
* Apps built with Studio Pro [10.12](/releasenotes/studio-pro/10.12/) can now be tested using ATS.
* We have removed support for Selenium 3.

## 2.29.4

**Release date: August 13, 2024**

### Fixes

* We have added support for the new [projects api](/apidocs-mxsdk/apidocs/projects-api/).

## 2.29.3

**Release date: March 26, 2024**

### Fixes

* We fixed an issue that resulted in the improper functioning of the **Assert value** action for Selenium 4 hubs.

## 2.29.2

**Release date: January 16, 2024**

### Improvements

* Apps built with Studio Pro [10.6](/releasenotes/studio-pro/10.6/) can now be tested using ATS.
* We upgraded to Studio Pro [8.18.27](/releasenotes/studio-pro/8.18/#81827) for security fixes.
* We addressed support for the MacOs versions (11, 12, 13) and resolutions (2K, 4K) for Selenium 4.
* We added support for the [Accordion](/appstore/widgets/accordion/) widget.

### Deprecations

* Selenium version 3 is now deprecated and will be disabled after April 30, 2024.

## 2.29.1

**Release date: November 7, 2023**

### Improvements

* We added support for [Mendix Epics](/appstore/partner-solutions/ats/ht-two-connect-stories-to-testcases/#set).

### Fixes

* We fixed an issue that resulted in the improper functioning of the **Find element by sizzle** action.
* We fixed an issue where **Assert Validation Message** failed when **Negate** was set to true.
* We fixed an issue that caused the **Open Mendix application** action to fail with a rendering timeout for Selenium 4.

## 2.29.0

**Release date: July 25, 2023**

### Improvements

* We have added support for Mendix 10.
* We have added support for Selenium version 4 (beta).
* We have added support for the latest compatible browser versions for Chrome, Firefox, and Edge for Selenium 4.
* We have removed support for the Internet Explorer browser.

## 2.28.13

**Release date: June 20, 2023**

### Fixes

* We updated the certificate authority certificates to fix connect issues with custom Selenium hubs.
* We released a new extension to fix the removal of the ATS Web Recorder from the Google Chrome Web Store.
* We changed our email service.

## 2.28.12

**Release date: May 23, 2023**

### Improvements

* We made preparations for a new recorder extension

## 2.28.11

**Release date: May 9, 2023**

### Fixes

* We fixed an issue that caused the incorrect display of test suite results when they had a failed data-driven test case execution.
* We fixed an issue that caused test suite results to show double the number of activities executed.
* We fixed an issue that made the user have to reset the access key when updating a Selenium hub.

## 2.28.10

**Release date: April 11, 2023**

### Improvements

* We upgraded to Mendix [8.18.24](/releasenotes/studio-pro/8.18/#81824) for security fixes.

### Fixes

* We fixed a styling issue that caused a button to be misplaced.
* We fixed an issue that caused users to see all the import runs across their apps instead of their current app.
* We fixed an issue that caused the **App Admin** panel to not display any environments or Selenium hubs.

## 2.28.9

**Release date: March 28, 2023**

### Fixes

* We fixed an issue that caused the dashboard not to show all recently run test suites and test cases.
* We fixed an issue that caused the **Confirm subscription** link to show a message stating something went wrong when confirming the subscription, even when the subscription was successfully confirmed.
* We fixed an issue that caused the **Search** panel to show custom actions from another app the user was a member of when editing a test case or custom action.
* We fixed an issue that caused newly created drop-down values not to appear initially on a new input parameter.
* We fixed an issue that caused the discontinued **ATSelenium** Selenium hub to be used when running a test case or test suite with default values.

## 2.28.8

**Release date: March 7, 2023**

### Fixes

* When (un)subscribing to schedules, the browser showed HTML instead of rendering it as a page. This has been fixed.
* We fixed an issue where a "Wrong browser" notification was not shown when trying to record steps in Microsoft Edge. As Edge is Chromium-based, it did not detect that the browser was not the Chrome browser.
* We fixed an issue where old test-case and test-suite executions were not deleted after 90 days, despite the log retention time being set to 90 days.
* On sign-up, links to the privacy statement and terms and conditions no longer return a 404 error.

## 2.28.7

**Release date: January 31, 2023**

### Fixes

* We fixed an issue with the Desktop Recorder, which caused it to stop recording any actions when clicking in the recorder browser.

## 2.28.6

**Release date: January 17, 2023**

### Fixes

* We fixed an issue that occurred when copying a test case that had a data set and even though the copy had the data set associated, it did not use the data set values.

## 2.28.5

**Release date: January 3, 2023**

### Fixes

* We fixed a generic error that occurred when trying to add a test case/suite to a test suite.
* We fixed false positives from the Find/Assert DataGrid Row action.
* We fixed a UI issue that caused the **Save** and **Cancel** buttons in a pop-up window to not be clickable when the zoom level was greater than 100%.

## 2.28.4

**Release date: December 6, 2022**

### Fixes

* We applied security fixes related to administrators.

## 2.28.3

**Release date: November 29, 2022**

### Fixes

* We applied security fixes related to administrators.

## 2.28.2

**Release date: November 9, 2022**

### Fixes

* We applied security fixes related to used libraries.
* We fixed an issue where videos of run test suites and test cases were not loaded.

## 2.28.1

**Release date: October 25, 2022**

### Fixes

* We applied security fixes related to used libraries.

## 2.28.0

**Release date: October 11, 2022**

### Fixes

* We fixed a UI error that occurred when deleting a scheduled test case/suite.
* We fixed recording of TabContainer, NavigationListItem, and InputReferenceSetSelector for Studio Pro 9.
* We added support for the drop-down container (as the replacement for the custom `DropDownDivConverter` widget in Studio Pro 9).

## 2.27.0

**Release date: July 25, 2022**

### Fixes

* We fixed an issue that caused **Assert Value** to fail due to the mismatch of new lines.
* We fixed **Set Value** and **Get Value**.
* We fixed the Switch widget not being recorded in Studio Pro 9.
* We fixed an issue where clicking the navigation menu was not recorded in Studio Pro 9.

### Improvements

* We added execution support for the Tree Node and Gallery Marketplace widgets.

## 2.26.0

**Release date: July 5, 2022**

### Fixes

* We fixed an issue about the loss of dataset fields and parameter bindings that occurred when copy-pasting or duplicating custom actions.
* ATS now prevents editing while updating parameters to prevent possible data loss.
* ATS now shows a waiting pop-up window while fetching the fields of custom actions, which can be useful when there are lots of parameters in a custom action.

### Improvements

* ATS now support [Data Grid 2](/appstore/modules/data-grid-2/).

## 2.25.1

**Release date: April 27, 2022**

### Fixes

* We fixed a bug that occurred when modifying a test case and linking the test case to a story.
* We fixed a typo in the generic error message.

## 2.25.0

**Release date: November 2, 2021**

### Improvements

* The ATS source code and model has been upgraded to Mendix [8.18.7](/releasenotes/studio-pro/8.18/#8187).
* The ATS Job running web service no longer needs a user name and password combination to authenticate the requests. The API token is enough to authenticate the request.

## 2.24.0

**Release date: April 8, 2021**

### Mendix 9 Support

With this release, ATS officially supports testing apps that are built with Mendix 9. This includes both recording test steps and executing tests.

### Improvements

* We added a confirmation dialog box when extracting steps into a reusable action. This is to prevent accidentally extracting an action.

### Fixes

* We fixed a bug where values did not accept more than 500 characters. (CP13883)
* We fixed a bug where setting the value for test steps based on an input parameter in a custom action caused an error to be thrown. (CP13922)
* We fixed a bug where ATSelenium was not available as a Selenium provider for newly onboarded apps.
* We fixed a bug where values in test steps were not shown correctly if they included special HTML characters.
* We fixed a bug where auto-suggestions for Boolean, any, and enumeration fields did not suggest all possible constant values.

## 2.23.0

**Release date: March 2, 2021**

### Dark Theme Support

In the ATS team, we often have fierce debates about light vs dark themes. Luckily, with this new feature, you also have the option to choose for yourself what theme you prefer.

You can change your theme by clicking your profile image and selecting one of the following options:

* **System** (default) – match the theme to your operating system preference
* **Dark** – use a dark theme (NEW!)
* **Light** – use a light theme (this is the standard theme that we have used since ATS 2.0.

### Item Locking

As a web-based tool, ATS has many advantages. For one, there is no need to install ATS. However, this also comes with some challenges, one of which is that there is no local repository system. This means that changes are done directly to the project-wide repository. So, if two testers are working on a test case, strange things can happen, like test steps being out of order.

To prevent such incidents, we no longer allow two users to edit a test case simultaneously. If you try to open a test case that is currently being edited by another user, ATS will stop you and show a clear message. The same goes for test suites and custom actions.

### Improvements

* The **Extract action** dialog box has been renamed to **Set details** to avoid confusion.
* All functions that return a web element have had that output parameter renamed to be more consistent. ATS does not distinguish between different types of web elements, and we hope the new naming makes that clearer.
* We fixed several styling issues, most notably, support for responsive mode. On smaller screens, the side menu will now collapse into a slide-over that can be toggled via a hamburger menu. The primary use for this is the recording screen, where you might want to have the recording and the app that you are recording side by side.
* The **Import**/**New** buttons on the repository have now been split into two separate buttons instead of a single action button.

### Fixes

* We fixed a bug where a scheduled test did not start without giving any error message.
* Changes to a dataset name and description were sometimes not saved correctly. This also caused linked test cases to fail. Both issues have now been fixed.
* Due to a bug, a job that failed during the initial stage did not show any logs. This has been fixed.
* The **Value** drop-down menu closed intermittently. We have made changes to the widget to avoid this as much as possible.
* We fixed a bug where importing failed for a test case that had a step using the output value of a previous step that was a custom action.
* We fixed an issue where the **Log off** button did not work and instead showed some JSON. It now works correctly by first logging the user out of their current ATS session and then redirecting them to the Developer Portal.
* The links to the documentation and the desktop recorder have both been fixed.

## 2.22.0

**Release date: January 19, 2021**

### Reworked Value Entry Widget

Due to increased feedback from users, we have overhauled the widget used to enter test step values. Here are the main changes:

* Major speed improvements – instead of checking for values every time, the widget now caches the possible values leading to a more fluent experience.
* Literal values are editable – when the selected value is a literal string (for example, `button1`), then clicking to edit the value keeps this literal value so it can easily be edited in place (which means that changing `button1` to `button2` is much easier compared to before, when the entire string had to be retyped).
* Pressing <kbd>Enter</kbd> saves the currently selected value – it is no longer necessary to manually click the recommended value, as pressing <kbd>Enter</kbd> now automatically selects it.

We hope you enjoy these improvements and that they help you speed up your work with ATS.

### More Warnings for Fewer Errors

Test cases in ATS are dynamic with values that come from parameters, datasets, and previous test steps. In this release, we added checks for all of these to ensure that when you delete a test step, for example, its output (meaning, its return value) is not used in subsequent steps. If the value is used, a warning is shown that allows you to cancel the operation. The same applies when removing or deleting datasets and the parameters of a custom action. Disabling test steps is also covered by this check.

### Improvements

* ATS now adds new icons to indicate if a step is a custom action and/or if the step has a precondition. The icons are visible when editing a test case or action. Also, the **Open** button is no longer shown for test steps that cannot be opened.
* We have made some architecture changes that should improve performance when editing actions, test cases, and test suites.
* ATS now clearly separates the input from output parameters when editing a test step. The output parameter type is also shown and the confusing **Required/optional** label has been changed to **Possibly empty** for optional output values.
* When selecting a value for a test step that references an output value of another step, ATS now shows if that step is disabled. The output values for disabled test steps are always `empty`.

### Fixes

* We fixed a bug where copying a disabled test step resulted in an enabled test step.

## 2.21.0

**Release date: December 1, 2020**

### New Features

* In an effort to reduce the amount of user clicks, ATS now shows the **Most commonly used** functions when the search dialog box is open for a test step. Use this to quickly select a function.
* It is now possible to add comments in test cases and custom actions using the new **Comment** function. This function will be ignored during execution and only serves as a way to add more information to your tests.

### Improvements

* The ATS favicon has been updated with the ATS logo. This should make it easier to make out ATS in the browser if there are multiple tabs open.
* Test configuration no longer shows all settings by default. Only the most frequently changed settings are shown, and the rest are under a new **Advanced** toggle button.
* We have added extra caching for function meta information. This should make editing test cases a bit faster.
* The test case and action logs now show the time of execution in the same format and time zone to avoid confusion.
* It is now possible to cancel a job from a logs page. The **Run** button is now replaced with a **Cancel** button if the test case/suite is still running. There is a known issue with this canceling, where the job might continue after canceling, and this is currently under investigation.
* On the logs page, the **Run** button has been renamed to **Rerun**. The behavior of this button was also changed so that it runs the same test again with the same configuration. To run the test with a different configuration, a new button called **Configure and rerun** has been added as a drop-down menu option.
* We have refactored the recording page in an effort to improve performance, especially when recording long test cases with many steps.

### Fixes

* We fixed a bug where the recorder showed an error if too many events were recorded in a short span of time (usually caused by double/triple clicking). As a consequence, if many events are recorded in a short span of time, there might be a noticeable delay before the events appear in the recording screen. Let us know if this happens often.
* A bug where schedules with a schedule time set in the past were set to disabled without a message has been fixed. Now, a message is correctly shown.
* Due to a bug, it was not possible to download a recording from ATSelenium. This is now fixed.
* We fixed a bug where the **Get Visible Item/Row Count** function returned the wrong result for a data grid. (CP 11186)
* We investigated an issue concerning duplicate parameters in test steps. Additional checks were added to prevent this from happening in the future. (CP 11189)
* A bug that caused the **Run** button to still be active for running test cases has been fixed. (CP 11307)

## 2.20.1

**Release date: August 24, 2020**

### Fixes

* We fixed a bug where running a test case for the first time showed a message to select a Selenium hub instead of pre-selecting the default Selenium hub.
* Due to a bug, if an error occurred while starting a job, a generic error was thrown instead of collecting the error as part of the job log. This is now fixed.

## 2.20.0

**Release date: August 17, 2020**

### Built-in Selenium (Preview)

One of the biggest hurdles when starting with ATS is setting up a Selenium instance. Finally, we are now offering this out-of the box. Every enterprise licensed app will include a pre-configured Selenium hub for free that can run up to three parallel sessions (one session for single-app licenses). Please note that this is a preview feature, and the main goal is to gather feedback before it is officially released and is subject to change without notice.

### Live View (Preview)

When using the built-in Selenium, we now provide a live view of the running Selenium sessions in ATS. Use this to monitor how your test is progressing in real time.

### Start Testing Faster

The main goal of ATS is to test your Mendix application. Therefore, with this release, we tried to reduce any the extra configuration around running tests.

#### Fetch Environment Information from the Developer Portal

ATS now fetches information such as the name and URL of existing app environments for an app from [Apps](/developerportal/).

To distinguish these environments from ones that are manually managed, the name is suffixed with `(Sprintr)` and an additional flag is added.

These environments are not editable and will be updated daily.

We hope this makes it easier to start using ATS on new apps.

{{% alert color="info" %}}
This feature is only available for licensed Mendix apps and only if the user **smartdigitalfactory@clevr.nl** is invited to the app.
{{% /alert %}}

#### Configure a Default Selenium Hub and Environment

When starting a new test case/suite, it was always required to select an environment and a Selenium hub for that execution.

To speed this up, we added the option to choose a default hub and environment. They can be configured from the app settings page. The built-in Selenium will be set as a default.

#### Run with Default Settings

Related to the above point, if both a default Selenium hub and environment are configured, then a test case can be started without having to select anything.

To make this process even faster and skip one click, we added the option to run tests directly without going through the configuration screen.

### Results Page Improvements

* When starting a test, the view no longer goes to the **Test Runs** page but to the **Results** page for that specific test instead.
* The **Results** page received a new progress indicator that shows how many of the tests are passed, failed, or not executed.

### Other Changes

* We upgraded to the latest [Mendix SSO](/appstore/modules/mendix-sso/) version, which includes some security patches.

## 2.19.0

**Release date: June 9 2020**

### License Improvements

* In the last thirty days before a license expires, a message will now appear in the **My Apps** screen.
* After a license expires, the app will now continue to be visible in the **My Apps** screen with a message saying **License expired**. At this point, it will not be possible to open the app or run any tests. However, all data is still kept for some time and will be available again if you decide to extend the license.
* Testers without any licensed apps were up to now not allowed to use ATS. From now on, if a tester had a license for an app in the past, they will be allowed to visit ATS and see a list of apps that were licensed.
* In total, we have tried to make the expiry of a license more transparent and improve the user experience around it.

### Fixes

* We fixed a bug where it was not possible to log in to ATS without clearing browser cookies.

## 2.18.0

**Release date: May 14, 2020**

### Improvements

* ATS now supports the recording and execution of clicking on containers and list views.

### Fixes

* We fixed a bug where ATS did not record clicking a drop-down `div` converter.
* We fixed a bug where ATS did not correctly click a radio button.
* Due to a bug, cutting elements whose total length exceeded 200 characters resulted in an error. This is no longer allowed and is preceded by a warning message.
* We fixed a bug where clicking an association radio button list was not properly recorded or executed.
* We fixed a bug introduced in 2.17.1 where unique names no longer included list item names.

## 2.17.1 {#2171}

**Release date: May 4, 2020**

### Improvements

* When running test cases/suites, it no longer possible to queue an unlimited number of them. Instead, up to 5 items can be queued/running at one time. Any additional test cases/suites will be automatically canceled with a warning. This affects test cases/suites that are started manually, scheduled, or started by CI/CD.

### Fixes

* When running scheduled test cases/suites, if there was a problem running one of the schedules, this blocked the execution of all scheduled items. This is now fixed so that an error in one schedule does not block other schedules from running.

## 2.17.0

**Release date: April 30, 2020**

### Mendix 8.9 Compatibility

Apps built with [Mendix 8.9](/releasenotes/studio-pro/8.9/) can now be tested and recorded using ATS.

### Improvements

* When trying to click an element that is off screen, ATS automatically scrolls to that element before clicking it. In the past, this scrolling was always intended to align the element to either the top or bottom of the screen. This is not very natural and caused problems (for example, when sticky headers or footers were used). Now, scrolling will try to put the element to click in the center of the screen before proceeding with the click.
* When copying an element with a very long name that would cause the new name to go over the limit for name length, we now show a warning message.

### Fixes

* Due to the use of an outdated Appium library, it was not possible to test a web application on mobile. This is now fixed.

## 2.16.0

**Release date: October 16, 2019**

### Mendix 8.2.2 Compatibility

Apps built with [Mendix 8.2.2](/releasenotes/studio-pro/8.2/#822) can now be tested using ATS.

### Fixes

* Due to a bug, clicking on the navigation menu was not always recorded, or it was recorded with a missing caption. This has been fixed.
* From Mendix 8.0, buttons rendered as links were not recorded properly. This has been fixed.
* When clicking menu items, navigation items, and radio buttons, there was a problem if the caption contained characters such as `"#$%&'()*+,.\/`. These characters have a special meaning in the style selector language that ATS uses. We fixed this by escaping the special characters.
* Due to a bug, a disabled step in a custom action was still executed when the action was run. This has been fixed.

## 2.15.0

**Release date: September 26, 2019**

### Desktop Recorder

A new recorder has been released for ATS. For more information, see [Desktop Recorder](/appstore/partner-solutions/ats/rg-two-recorder/).

### Improvements

When deleting an action that is being used somewhere else, a warning is now shown in the **Confirm Delete** pop-up window.

## 2.14.1

**Release date: September 18, 2019**

### Fixes

* We fixed an issue where clicking an item in the sidebar menu did not work as expected when the menu item did not have an icon.

## 2.14.0

**Release date: September 17, 2019**

### Improvements

* You can now customize the starting page per app. You can choose this to be the **Dashboard**, **Test cases**, or **Test runs**.
* By popular request, we simplified the usage of XPath as a way to find elements. The function `Find/Assert Element by XPath` is now available under the **Web** category.

### Fixes

* We fixed an issue where clicking an item in the sidebar menu did not work as expected when the menu was collapsed.
* Due to a bug in the Mozilla Firefox web driver, clicking a data grid row did not work correctly for this browser. We have implemented a workaround for this until the issue is addressed by Mozilla Firefox.

## 2.13.2

**Release date: August 4, 2019**

### Mendix 8 Compatibility

Apps built with [Studio Pro 8](/releasenotes/studio-pro/8/) can now be tested using ATS.

### Fixes

* Since the update to Selenium v3.14, the click coordinates behavior was changed to refer from the center of the web element instead of the upper-left corner. Because we like to keep the behavior of our functions consistent between upgrades, we implemented an offset to make sure that **Click Coordinates** works with respect to the upper-left corner. (Ticket 8752)
* We fixed an issue introduced in 2.13 where error logs were missing for data-driven test cases. (Ticket 8760)
* We fixed a minor issue where the warning tooltip showed the same text multiple times.

## 2.13.1

**Release date: August 1, 2019**

### Fixes

* We fixed an issue where test suites within test suites did not finish properly.
* We fixed an issue where click coordinates did not work properly if the elements were outside the viewport.

## 2.13.0

**Release date: July 31, 2019**

### Upgraded Selenium from Version 3.8 to 3.141.59

This lets ATS run tests on the latest browser versions, which provides improvements in both speed and stability.

If you are using BrowserStack or Sauce Labs, ATS will automatically use the new version, and you do not have to do anything.

If you are using another Selenium hub, we highly recommend updating it to use Selenium version 3.141.59, as the current version will no longer be supported. You can the download Selenium version 3.141.59 [here](https://www.seleniumhq.org/download/).

### Improvements

* We improved the performance when processing test results.
* The **Error Log** tab now shows the exact date and time when a test case was started and when it finished with execution.

### Fixes

* In some cases, the automatic wait did not work correctly for Mozilla Firefox. This is now fixed.
* We fixed an issue where the **Test Runs** page did not load.

## 2.12.0

**Release date: July 21, 2019**

### Test Step Settings

We are very excited to bring you new features that are geared towards making it easier to create and modify tests with ATS. With this release, we are adding settings for test steps that allow you to do the following:

* Disable a test step
* Abort execution on not passed
* Negate the assert in a test case

#### Disabling a Test Step

This feature lets you temporarily disable a test step without deleting it. This is similar to commenting out lines of code. Use this to test how the test script behaves without certain steps. If it turns out that the step is needed, simple enable it again. This feature can be used in test suites, test cases, and actions.

#### Abort Execution on Not Passed

We have often seen that large test suites need a kind of setup script at the beginning that creates certain data and other conditions. When case this script fails, it makes no sense to continue with the execution of the test suite anymore. This is exactly the scenario that we had in mind when we created this feature. When a step is flagged as abort not passed, if it is not passed any subsequent test, the steps will not be executed. This saves time and money. The feature is only available for test suites with sequential execution.

#### Negate Test Result

Most of the time, tests assert the presence of elements on a page and assert that text or number have an expected value. However, sometimes there is a need to assert the opposite (meaning, assert that an element is NOT on the page) or that a text does not have a certain value. This is now possible with the negate toggle.

This is a complete list of all the functions that can be negated:

* `Logic`
    * `Assert Contains String`
    * `Assert endsWith`
    * `Assert startsWith`
    * `Assert equalTo` – `Assert not equalTo`, `assert null`, `assert not null`, `assert not true`, and `assert not false` have all been deprecated in favor of `Assert equalTo`; if these functions were used in a test case or action, they have been automatically replaced with an `Assert equalTo` with the correct `Negate` value
    * `Assert equalToIgnoringCase`
    * `Assert equalToIgnoringWhitespace`
* `Web`
    * `Assert Element Attribute Equals`
    * `Assert Element Matches Selector`
    * `Find Element`
    * `Find Element By Id`
    * `Find Element By CSS`
    * `Find Element By Sizzle`
* `Mendix`
    * `Assert Current Page Title`
* `Widget:Find`
    * `Find Checkbox Set Selector`
    * `Find DataGrid Row`
    * `Find/Assert Dialog`
    * `Find Grid Selector`
    * `Find Item/Row`
    * `Find Menu Item`
    * `Find Selected Item/Row`
    * `Find Widget Child Node`
    * `Find/Assert Widget`
* `Widget:Assert`
    * `Assert Active Tab Name`
    * `Assert Checkbox Set Selector Value`
    * `Assert Checkbox Value`
    * `Assert Grid Selector Value`
    * `Assert Simple Checkbox Set Selector Value`
    * `Assert Validation Message`

#### Improvements

* We reduced the timeout for **Set Value** from 60 seconds to 5 seconds. This helps a test to fail faster when a widget is not found or not editable.

#### Fixes

* We fixed a bug where the function name was not shown for a test step with no parameters (for test cases and actions).
* We fixed a bug where in rare circumstances logs were missing for test cases.
* We fixed a bug where ATS did not wait for the page to load after logging in.

## 2.11.2

**Release date: June 17 2019**

### Extended API

As more people embrace CI/CD in the development process, we saw a need for more functionality and information from our API.

On the functionality side, we added the operation **Rerun not passed** to the ATS API. Now you can set up your CI/CD pipeline to rerun failed test cases automatically.

On the information side, we added options to retrieve the following data for a job using the existing **GetJobStatus** operation:

* Flags (canceled and warning)
* Breakdown per test case (meaning, the number of passed, failed, and not-executed test cases)
* Details per test case with name, result, duration, and error message

For more details, see the [ATS 2 Reference Guide](/appstore/partner-solutions/ats/rg-two-cicd-api/).

### Limitations

* The customizable **Mendix Wait** function does not time out properly on Mozilla Firefox when configured with a timeout less than the default of 60 seconds.

## 2.11.1

**Release date: June 11 2019**

### Fixes

* We fixed a bug introduced with release [2.11.0](#2-11-0) that caused tests on Mozilla Firefox to fail during login.

### Limitations

* The customizable **Mendix Wait** function does not time out properly on Mozilla Firefox when configured with a timeout less than the default of 60 seconds.

## 2.11.0 {#2-11-0}

**Release date: June 4 2019**

### Support for More Mendix Marketplace Widgets

We are constantly on the lookout for popular widgets that we can support with ATS. With this release, we are happy to announce support for recording and testing the following widgets:

* [AutoComplete Widget](https://marketplace.mendix.com/link/component/2695/)
* [Switch](/appstore/widgets/switch/)
* [Format String](/appstore/widgets/format-string/)
* [CustomString](https://marketplace.mendix.com/link/component/1426/)

### Improvements

* We added a customizable timeout to the **Mendix Wait** function. Use this whenever you know that a certain microflow will take a long time to respond (> 60 seconds) in order to avoid a timeout exception. The wait function will ensure that the Selenium session is active by sending **Keep alive** signals.
* The **Rerun not passed** functionality now also works for data-driven test cases.

### Fixes

* We fixed an issue where a test case related to a dataset with an empty value could not be started.
* There was an issue where clicking a reference set selector select button was recorded as a regular **click widget** function. This led to an error during execution. We fixed this by correctly mapping to a **click widget button** function instead.
* In certain cases, setting a value for a radio button list failed with a **StaleElementException**. This has been fixed by correctly dealing with the exception when it occurs.

## 2.10.0

**Release date: May 18 2019**

### Alerting Improvements

The option to receive alerts when a scheduled test is done is a feature that received a lot of requests. Starting with this release, you can opt in to receive emails for schedules either always or only when they do not pass. The emails include the result of the scheduled run; flags (if present); a breakdown of the number of passed, not-executed, and failed test cases; and additional information. You can individually choose per app if you want to receive these alerts or not.

For more details, see [Schedules](/appstore/partner-solutions/ats/rg-two-schedule/) in the *ATS 2 Reference Guide*.

### Better Integration with BrowserStack

After the great reception of the **Recording** tab in ATS, we decided to invest more time into integrating BrowserStack and ATS by adding the features described below.

These are the new features on BrowserStack side:

* Different apps in ATS show up as different **Projects** in BrowserStack. This is useful, if you use the same BrowserStack account to test multiple apps.
* When multiple test cases are executed in ATS as part of a test suite, they are now also grouped in BrowserStack under a **Build**. The build name is a concatenation of the test suite/test case name followed by the ATS job GUID between two colons.
* Individual test case executions in BrowserStack (meaning, **Sessions**) now correctly display the test case name instead of the job name. For test cases with an attached dataset, the test case name is suffixed with the index of the dataset record.
* Test case executions in BrowserStack now show the result from ATS.

  {{< figure src="/attachments/releasenotes/add-ons/ats/ats-2/ats-2.10/browserstack.png" alt="BrowserStack-ATS integration" class="no-border" >}}

These are the new features on the ATS side:

* We added a link to the Selenium session in BrowserStack for each test case that was executed in BrowserStack. You can use this in case the recording video does not load in ATS or if you want to see the BrowserStack logs. You can find the link under the **Recording** tab.
* To make it easier to navigate from BrowserStack to ATS, we added options to look up jobs by the job GUID as well as individual test case logs by the BrowserStack session ID. Both can be found on the **Test Runs** page under the **Jobs** tab.

{{< figure src="/attachments/releasenotes/add-ons/ats/ats-2/ats-2.10/lookup.gif" alt="BrowserStack-ATS integration" class="no-border" >}}

This table compares the nomenclature:

| ATS              | BrowserStack |
| ---------------- | ------------ |
| App              | Project      |
| Job              | Build        |
| Single test case | Session      |

### Other Improvements

* The custom search dialog boxes for creating schedules and job templates have been replaced with the standard ATS search dialog box.
* With the growth in popularity of ATS, we see that users are creating bigger test suites, which was putting stress on the ATS back end. Therefore, we are releasing several optimizations for processing the results from a test run. We expect this to improve performance for all users, but especially for users with large test suites.

### Fixes

* When re-running a failed test suite, the configuration would default to the latest used for that test suite, instead of to the configuration that was used in the original run of the test suite. This is now fixed.

## 2.9.5

**Release date: February 12, 2019**

### Support for Mendix 7.22.2

Mendix applications that are based on Mendix 7.22.2 can now be recorded and tested with ATS.

### Improvements

* We added support for authentication widgets. Login pages built with authentication widgets can now be recorded and tested with ATS.
* We added support for clicking on static images. Clicks on images can now be recorded and tested with ATS.

### Fixes

* We fixed an issue where a click was not be recorded on some buttons in Mendix 7.18 and above.
* In rare cases under a very high testing load, jobs got stuck in the queued status. We have added additional checks to prevent this from happening.
* In some scenarios, the **Recordings** tab was not available in ATS. We addressed this issue by changing the way recordings are retrieved.
* We fixed a UI issue where double-clicking on an item in an ATS repository showed a generic error message.

## 2.9.4

**Release date: December 4, 2018**

### Improvements

* We have added the option to refresh the app roles from the App Settings page. After clicking the refresh button, the app roles for all users currently in the current app will be queried from the Developer Portal and updated in ATS, according to the standard rules for updating roles in ATS. Users who no longer have access to the corresponding project in the Developer Portal will be removed from the app. New members of an app in the Developer Portal have to log in to ATS and accept the terms and conditions before they can become members of an app in ATS.
* We have continued optimize how tests results are processed in ATS. We expect that this will reduce the delay in seeing the results for a test.

### (Potentially) Breaking change

Due to complaints about flaky tests that were caused by long on-change change microflows (>500 ms), we have decided to change the behavior of the **Set Value** function.

In previous versions, the Set Value function typed in a value in an input field and kept the focus on the field. Therefore, the on-change and on-leave microflows were not triggered until a later test step, where another element on the page was focused (for example, via a click). This was done deliberately, as we felt that it was natural user behavior (as in, keeping the focus until an interaction occurs with another element on the page).

Since ATS version 2.9.4, the Set Value function unfocuses the widget after setting the value and waits for the on-change and on-leave microflows to finish before proceeding with the next steps in a test case. We hope that this makes tests more stable when on-change microflows are used, since the wait ensures that such microflows have finished executing before proceeding with the test.

We do not expect this change to cause any issues with existing tests. However, if you notice strange behavior related to the Set Value function after the update, please inform us by submitting a Support ticket.

## 2.9.3

**Release date: October 15, 2018**

### Improvements

* We have optimized the way dataset records are stored for executed data-driven test cases. We expect this will improve the performance of processing the results for data-driven test cases.
* We have refactored the code for fetching video recordings, making the recordings available sooner in ATS.

### Fixes

* Due to a bug, it was possible to change the name of an item (meaning, an action, test case, or test suite) to be not-unique. This resulted in a generic error message and a partially changed name in the UI. This is now fixed and a proper validation message is shown when changing the name. As a consequence, it is no longer possible to edit the name of an item inline. Instead, this is done in a dialog box with the standard save and cancel options.
* The formatting of the job duration was incorrect when the duration was larger than one hour. This is now fixed.
* Due to a bug, it was not possible to extract an action if the a multiple output parameters from previous steps were used in the extracted action. This is now fixed.
* We discovered unexpected behavior in the function **Find/assert data grid row** where the function still returned a result even if a required parameter (meaning, a column name or value) was left. Changing the behavior of the function would potentially break many test cases. Instead, we changed the description of the function to match this behavior. In addition, all the column name and value parameters for this function have been made optional. If no column name/value pair is specified, then the first row is returned. To sum up, functionally nothing has been changed, only the description has been updated.

## 2.9.2

**Release date: August 21, 2018**

### Mendix 7.17

Mendix applications that are based on Mendix 7.17 can now be tested and recorded with ATS.

### Fixes

* We fixed an issue where it was possible to create two keywords with the same name within the same folder. This occurred when using the extract action. This is now fixed, so attempting to save a keyword with a name that already exists triggers a proper validation.
* When generating a PDF report for a set of selected items, some nested test cases were not correctly added to the report, resulting in incorrect values for the doughnut chart. This is now fixed.
* When running a test suite that contains other nested test suites, the result for the corresponding job on the **Test runs** page showed no result, even when the job had finished. This also caused the CI/CD to return incorrect values for such jobs. This is now fixed.
* We fixed an issue where changing the name of an output parameter for a custom action cleared references to that output parameter in test cases where it was used.
* When jobs that were initiated via the API were canceled, the job result was set as passed. This is now fixed, and canceled jobs always return failed as result.

## 2.9.1

**Release date: August 9, 2018**

### Fixes

* We fixed an issue where new projects from the Developer Portal were not synched to ATS.

## 2.9.0

**Release date: July 10, 2018**

### Improvements

#### No Access App Role

It is now possible to specify that certain members of a project in the Developer Portal do not get any access to a project in ATS. This can be configured by app administrators from the **App settings**. Members of an app that have the **No access** role will not see this app in their **My apps** page and will not be able to view, edit, and run test cases from this app.

{{% alert color="info" %}}

Scrum Masters in the Developer Portal always keep the administrator role in ATS.

{{% /alert %}}

#### Default App Role

We have implemented a functionality to set a default role per app. This role will be applied to the new members of an app. The default role can be changed by app administrators in **App settings**.

{{% alert color="info" %}}

Scrum Masters in the Developer Portal get an administrator role in ATS even if the default role is set to **No access** or **Tester**.

{{% /alert %}}

### On-Premises

We are reintroducing **On-Premises** as a deployment option for ATS. At this point we have introduced a new user role **Tenant administrator** which will only be used in on-premises instances of ATS. The tenant administrator will be able to create and edit accounts and apps.

For more details on tenant administration, see [Administration](/appstore/partner-solutions/ats/rg-two-administration/) in *ATS 2 Reference Guide*.

### Mendix 7.16

Mendix applications based on Mendix 7.16 can now be tested and recorded with ATS.

### Fixes

* We fixed the issue where it was not possible to export documentation for test cases/suites with a description longer than 200 characters
* We fixed the issue that occurred in version 2.8, where clicking a button that triggered an asynchronous microflows after a confirmation dialog would cause a **Timeout exception while waiting the application to be idle**.

### Limitations

* For Mendix 7.13 and above, it is likely that test will not properly wait for the execution of asynchronous microflows. As a temporary workaround please manually add the **Sleep** step with a proper duration after triggering asynchronous microflows.
* We did not explicitly test the impact of nanoflows on ATS, but we have not yet received any issue reports related to them

## 2.8.0

**Release date: June 15, 2018**

### Control of Administration Rights

It is now possible to give members of an ATS app, administration rights directly from the "App Settings" page in ATS. In other words it is no longer required for an app administrator in ATS to have an administrative role in the project in Mendix Sprintr. Please keep in mind that users still need to be a member of a project in Sprintr for them to be eligible to be app administrators for the corresponding app in ATS.

In order to make sure that administration rights which have been granted to users are not overwritten, we no longer automatically revoke administration rights when the project role for a user in Developer Portal changes from administrator to non-administrator. Instead, revoking administration rights can be done manually from the "App Settings" page. Finally, note that a user who has an administrative project role in Developer Portal will always have administrative rights in ATS.

### Mendix 7.13, 7.14, and 7.15

Mendix applications which are based on Mendix 7.13, 7.14 or 7.15, can now be tested and recorded with ATS.

### Mobile Testing Improvements

* In addition to testing on real devices via browserstack it is now possible to test on real devices by using Sauce Labs. We have preselected some devices for Sauce Labs for different Android versions.
* We added support for testing on Android 8 devices.
* When testing on mobile devices we now simulate setting drop-down values via the native dialogs for mobile, same as we do for date and time dialogs.

### Cancelling

We have completely redesigned the back end for canceling jobs. You will see that cancelled jobs stop executing much faster than before. Steps which are interruptible for example, sleep will be interrupted immediately instead of waiting them to finish. We also update the status for test cases or suites which were not started at the time of cancelling.

### Recording Integration

It is now possible to see a video recording for test cases executed on BrowserStack in ATS. When looking at the result log for a test case execution you can see the recording under the new **Recording** tab. Please note that we do not store these recordings, we only link to the recorded videos from BrowserStack.

### Improvements

* We have made several changes to the wait function making it more stable, especially when running on slow devices or slow Selenium servers.
* We made changes to how recordings are handled internally which makes saving and cancelling a recording much faster.

### Fixes

* The built-in function **Assert Condition Fails** was not working due to a bug. It is now fixed.
* The built-in function **Assert at least one not null** was not working due to a bug. It is now fixed.
* The **Click Widget** action didn't propagate failures properly. As a consequence, a test step that used this action was not marked as failed, even though the actual click was not successful. This has been fixed.
* Coping a data-driven test case did not copy the association to the dataset. This is now fixed.
* When using a dataset field as in an test step where the parameter type is "Any" this was falsely classified as incompatible type issue and shows up under the "Test data" tab. This is now fixed.

### Important Change

The built-in function **Assert not null** behavior has been changed. Up to and including ATS 2.7, this function would pass if an object is null. This was the wrong behavior which directly contradicted the expected behavior based on the function's name. Therefore, we made changes to the function so that, when a null object is asserted the function fails. We updated the function's description accordingly.

**IMPORTANT:** To avoid breaking test cases which were already using this function with its past behavior, we decided to replace all past uses of the function**Assert not null** with **Assert null**. This change is done automatically and will not affect the behavior of your existing test cases.

### Limitations

* Regarding nanoflows, we have not explicitly tested their impact on ATS, but so far we have not received issue reports related to them.

## 2.7.1

**Release date: May 15, 2018**

### Mobile Testing

We are happy to announce that ATS now supports mobile testing for web applications. With a BrowserStack account, you can test on Android 6 and 7 on real mobile devices.

* The format of test cases and the functions that are used to test on desktop devices work the same way on mobile devices.
* ATS functions are context-aware, meaning, they detect the device and interact accordingly. For example, when setting a date field on mobile, the native date dialog box is used. All native input elements are set by automating the native dialog boxes, with the exception of drop-down menus, which are set directly.
* You can use the ATS recorder even if you have different pages for desktop and mobile.

{{% alert color="warning" %}}
This beta feature has been discontinued.
{{% /alert %}}

### Option

When a job or a test suite has not passed it is now possible to do another run of it with only those test cases that not passed. We think that this feature will save time both by not having to manually select the not passed test cases and also by not having to run the whole test suite again.

### Changes in Calculation

In order to make it easier to read and understand the results of a test run we are making some changes. Here are the main points:

* The result **Skipped** has been renamed to **Not executed**.
* Test cases that fail during the initialization will have the result **Not executed** instead of **Failed**.
* **Canceled** is no longer a result but a flag that can be set additionally to the result.
* Whenever a test case is canceled it will keep the result and will get an additional canceled flag. For example, tests that were canceled during teardown will get the passed result and a canceled flag.
* Test suites do not have a result per se, but maintain a counter of passed / total test cases.
* With regards to the charts on the dashboard we no longer distinguish between failed and not executed. Instead we only distinguish between passed and not passed.

For all the details please refer to [results section in the ATS reference guide](/appstore/partner-solutions/ats/rg-two-results/).

### Changes in Provider and platform support

#### Removed Support for Windows XP, MacOS 9, and MacOS 10

These platforms were not able to work properly with the browser versions that we officially support. In some cases for example, MacOS10 in combination with Firefox browser, the Selenium driver v3.8.1, which is the official Selenium version that we support, is simply not supported for MacOS10. By removing support for these outdated platforms we are able to focus on the performance and stability for the platforms that are used much more in the real world.

#### Removed Support for TestingBot

TestingBot did not support the latest browsers versions and/or the latest Selenium driver versions for some platforms. Because of this and the fact that it was almost not used in ATS we decided to drop support for it, choosing instead to focus on the other providers which support the newest versions of browsers and drivers. If you still have this provider configured as a hub, you can no longer use it to run jobs. Any schedules or job templates that are configured to use this provider will return an error when executed.

### Integrated Function Documentation

We understand that it is not optimal to have to switch to another page in order to check the documentation for a certain function in a test case. Therefore we integrated the function documentation into ATS itself. When searching for functions and also when editing a test step in a test case you can see the function documentation by hovering over the function name.
The same holds for the function parameters.

### Data-Driven Test Cases

* We added the option to sequentially execute data driven test cases (DDTC). Until now DDTCs were always executed in parallel. We have now made it possible to chose if you want to execute DDTCs parallel or sequentially, as in, one-by-one. The selection works in exactly the way it works for test suites, but it is only available for test cases that are related to a dataset. This overcomes issues where DDTC could be interfering with each other because they were always running in parallel.
* We have also added the screenshot feature to data driven test cases. Whenever a data driven test case fails for a given record in the dataset, a screen shot will be recorded and will be accessible in the logs. This will work in the same way as it is working now for standard test cases.
* Selecting a dataset for a test case now uses the sidebar search dialog.

### Improvements

* We added the corresponding provider logos for BrowserStack and Sauce Labs.
* We sped up the opening of the edit page for large datasets.
* When editing a value for parameter of type number it is now possible to use the edit dialog, same as for text parameters.
* When running from BrowserStack or Sauce Labs we select by default the Windows 10 platform and FullHD resolution. For MacOS the resolution UXGA is selected by default. We hope that this will save a few clicks.
* We have changed the platform selection to use icons instead of a drop-down. This also enabled us to limit the choices to only those which make sense, for example you can no longer select Internet Explorer and MacOS.
* We removed the "View" button for pre-conditions where the condition is related to a function. Since function can not be viewed this button is not needed.
* In the search dialog there is now an indicator when multi selection is available.
* When a test case/suite that is related to a schedule/job template is deleted the related schedule/job is also deleted.
* We added a progress bar on the sidebar search dialog. We hope that this helps prevent error due to accidentally double-clicking the select button.
* When running a job on BrowserStack or Sauce Labs the job name is set as the session name in their portals. This should make it easier to correlate the provider sessions with jobs in ATS.

### Fixes

* Due to an artificial limitation only the first 20 fields were shown when editing a dataset. This limitation has been removed.
* When a test step in the logs refers to a function it is not possible to open/edit this function. However, due to a bug the **Edit** icon ({{% icon name="pencil" %}}) was still shown for such test steps. This has been fixed.
* When a test case with an empty test step in the middle was executed, the test case failed with a null pointer exception. This is now fixed and the empty test step is not interfering with the execution.
* In some cases the tooltip for action/parameter documentation was not showing the full description. This is now fixed.
* When pasting items in the repository it was possible to click the paste button multiple times. This is fixed by adding a progress bar to prevent pasting an item multiple times by accident.
* In rare instances the numbers in the selective report did not match the numbers on the dashboard. This is now fixed.
* When a test case failed in a teardown step any existing screenshot from a regular step was overwritten. In order to fix this we do not take a screenshot during teardown steps anymore.
* It was possible to add records to a dataset with no fields. This is now fixed.
* When editing a folder and clicking cancel, the changes to the folder name were still saved. We fixed this so that clicking cancel does not result in any changes being applied.
* When moving a folder it would sometimes happen the name is suffixed with "(moved) (moved)" to avoid a conflict. This is fixed so that the folder name gets the suffix "(moved)" instead.
* Due to a bug it was no longer possible to expand certain items on the dashboard anymore. This is now fixed.
* When testing on Internet Explorer the calculation of the application context for example, dialog was not working. This had the effect that sometimes an element was found that was not within the current context which probably then causes a test case to fail. This is now fixed.
* We fixed an issue in the recorder where the recorder would send too much information to ATS causing it to slow down significantly.
* Due to a bug it was possible to create a test case with a non-unique name from a story. This is now fixed.
* We fixed a bug where an update of a story type in Sprintr would not be updated correctly in ATS.
* We fixed a bug where it was not possible to run a test suite if it contained a test case with an empty test step.
* When hovering over a parameter only a part of the description would be shown in some cases. This is now fixed.
* Due to a bug it was not possible to copy a test case and paste it in another folder. We fixed this.
* We fixed a bug where it was possible to create an action with a non-unique name by using the "Extract action" button.
* On the dashboard the "Show logs" button was sometimes shown even though there were no logs to show. This is now fixed.
* We fixed a bug where the automatic mendix wait functionality would in some scenarios wait too long or even timeout.
* We fixed several bugs related to the results on the dashboard.
* We fixed a major issue where the toolbar buttons to cut/copy/paste/delete were not working in an action/test case/test suite if the item was opened by searching for it in the repository.

### Limitations

* When opening a folder after searching for it in the repository, the toolbar buttons do not work anymore. Please open folders by navigating to them in the repository.
* A data-driven test case, which was executed before ATS 2.7, doesn't show a passed bar on the monitoring page and on the test runs page

## 2.6.1

**Release date: April 5, 2018**

### Fixes

* Due to a bug, it was not possible to create parameters of the type "Drop-Down" for custom actions anymore. This is now fixed.

## 2.6.0

**Release date: March 27, 2018**

### Selective Reporting

We know that the ability to generate reports is important in order to get an overview of software quality. This is why we are always looking for ways to improve the reporting capabilities of ATS. Starting with this release, it is now possible to configure a custom report that only contains the test cases and/or test suites that you want to be part of the report. This functionality is available through the dashboard, by clicking **Download report**, which opens a dialog box with two options for reporting: **All** and **Selected**. If you select **All**, the PDF report will contain all the test cases and suites in the project (this is the same as the default behavior until now). If you select **Selected**, then you can customize the report by specifying which test cases, test suites, and folders should be included in the report.

### Upgraded Selenium Version and Support for Newer Browser Versions

In order to add support for newer browser version, we upgraded the ATS Selenium drivers from version 2.53.0 to version 3.8.1. For the supported providers (BrowserStack, Sauce Labs, and TestingBot), we set 3.8.1 as the Selenium version. However, if you have an on-premises Selenium grid, we advise you to update it to Selenium version 3.8.1. We also upgraded ATS with support for Chrome version 64 and Firefox version 58, which are now the officially supported browser versions. For more information on supported provider, platform, and browser combinations, see [Compatibility Table](/appstore/partner-solutions/ats/rg-two-provider_platform_browser_compatiblitiy_table/) in the ATS Reference Guide.

### Internet Explorer 11

You can now run ATS tests against Internet Explorer 11. We are happy to announce that, because Internet Explorer is still one of the most used browsers and is even more important when looking at enterprise businesses. Internet Explorer 11 is supported for Windows 7, Windows 8.1, and Windows 10.

### Mendix 7.11 and 7.12

Mendix applications built on Mendix 7.11 or 7.12 can now be tested and recorded with ATS. We have not explicitly tested the impact of nanoflows (the newest feature added in Mendix 7.12) on ATS, but we do not expect any significant problems here.

### Improvements

* You can now see the description of a parameter when hovering over the parameter name in an action or function call.
* We added support for the Radiobutton List widget and for the Input Reference Set Selector widget. They can be recorded as well as tested with the standard ATS function.
* We now support the newest macOS version: macOS High Sierra.
* You can now select multiple items in the search dialog box by holding down <kbd>Ctrl</kbd> while clicking the items. This is possible when you are adding a test case/suite to a test suite, adding test cases/suites to a story, and adding stories to a test case/suite.
* A parameter of the text type now also shows the **Edit** icon ({{% icon name="pencil" %}}) when it is empty.

### Fixes

* The icons of a test case and a test suite were interchanged at the schedules overview. This is fixed now.
* We fixed the issue where the execution type (serial/parallel) of a test suite was always set to serial during the import.
* The drop-down values of a parameter of a custom action were not being created during import when not a single drop-down value was in use. This has been fixed.
* The color of test case that was not executed was different in the PDF report and on the project dashboard. This has been fixed.
* ATS will now wait for the login process to be finished (on dynamic login pages as well) before continuing with the next step.
* We fixed the **Unfocus Web Element** function.
* We removed the second set value action from the search dialog box when you are adding a new test step to a test case or action.
* We fixed the issue that sometimes set the selected values in a function/action call to empty when adding a new step to the test case or action.
* Data-driven test cases can now also be executed also when the dataset contains an empty number. This previously worked only for empty text fields.
* Custom actions did not work when used as a pre-condition for a test step. This has been fixed.
* A recorded login action was not working when executed because of an incorrect password. We fixed that.
* Recording the login step did not capture the password properly, so it had to be set again after recording. Also, the login via Mendix SSO (MxID) was not recorded. Both issues have been been fixed.
* The **Find Element by ID** function did not work in ATS 2.5. This has been fixed.

### Limitations

* When you click **Download** on the newly added **Download report** dialog box before the doughnut chart has finished rendering, the chart will not be shown in the PDF.

## 2.5.0

**Release date: March 8, 2018**

### Functions

Core actions lie at the heart of ATS. They enable testers to interact with Mendix widgets without having to worry about the internal structures and functions of the widgets. Naturally, we are constantly looking for ways to improve our core actions. In that regard, we are happy to announce that we designed and developed a completely new architecture for core actions. Because this new architecture is very different from the way actions were implemented in the past, we decided to rename core actions to **functions** to make the distinction clearer. The new function architecture will enable us to write functions that are smarter than their core action counterparts. This change is completely in the back end (meaning, "under the hood"), so you do not have to change anything in the way you are using ATS in order to benefit from the new architecture.

This opens up a lot exciting possibilities for us as ATS developers. For example, we were able to write **context-aware** Get/Set Value functions. Previously, the corresponding core actions could only handle a few widgets. The new functions, on the contrary, support much more widgets, such as the Boolean slider widget, Bootstrap WYSIWYG editor, CKEditor, input reference selector, date picker, and radio button list. Furthermore, with the new architecture, functions should be more stable and more reliable. For a detailed list of the updated functions make sure to check the [ATS Reference Guide](/appstore/partner-solutions/ats/rg-two-ats/). In the future, we plan to utilize the new architecture to bring you even more improvements to the functions.

### Improvements

* We added support for Mendix 7.10. You can now test a Mendix application that you've created on Mendix 5.14.1 up to Mendix 7.10.

### Fixes

* When you had a data-driven test case, a bug was preventing the usage of dataset fields as input parameters of assert actions. This is now fixed.
* The PDF report still showed the result category **Unknown**, which was removed from the dashboard some time ago. To keep the reporting consistent between the dashboard and the PDF, we removed the category Unknown from the PDF report as well.
* Under rare circumstances, the test suite results progress bar (shown on the dashboard) turned green, even though the percentage of passed test cases was below 100%. This is now fixed, and the progress bar will only be green if the percentage of past cases is exactly 100%.
* When recording the **Click Widget button** action (which is used to click special list view, template grid, and data grid buttons such as search, clear, reset, etc.), the recorded action did not save the information about which button was clicked in the test step. This is now fixed.
* Moving items from one project to another was not possible if the items' parent folder (or folders) still existed in another app. This is now possible. Please note that although importing items that already exist in another app is not allowed, you can circumvent this by, for example, copying a test case from app A, exporting the copy from app A, deleting the copy from app A, then importing the copy into app B.
* In some rare circumstances, importing a complex test set failed due to an internal error. This is now fixed.
* Exporting items that contained empty test steps (for example, a test step was added but no action was selected for the test step) was not possible. Items with empty test steps can now be exported.
* A validation check was missing that allowed users to execute a test case with a dataset that has no records. This execution was followed by an error that did not provide much information to end-users. We added an extra validation check and improved the message that the user sees.
* While working on a test case, when you added a test step manually after a teardown step, it got the wrong step number and the wrong step type (by default, this should be teardown). This is now fixed.
* When you related a dataset to a test case that was previously related to a non-existing dataset, an error message was shown that falsely informed the user that "the old dataset could not be found." Closing and reopening the test case eliminated the error. We fixed this, so now you do not have to close and reopen the test case to get rid of the error message anymore.
* The application UI got generally slower if you used the app for longer periods of time without refreshing your browser tab. We made several improvements related to the performance of the application's UI to improve this.

### Other Changes

* When you open ATS, you will now see a new screen that requests your approval to share your Mendix Profile information with the ATS application. Every user has to confirm in order to continue using ATS. This needs to be done only once.
* On the dashboard report, we have changed the way the success rate is displayed. The success rate was previously displayed as percentages (from 0-100), but we replaced this with the exact numbers of **successfully executed test cases/total test cases**. For example, if a test suite has 10 test cases, of which 8 pass, previously this was displayed as "80 %", while now it is displayed as "8/10".

### Known Issues

* The grid that shows the jobs on the **Test Runs** page is refreshing every 3 seconds. This can result in flickering on the highlighted row. If you try to click a button in the exact moment of the refresh, it will not work. The effect is more pronounced on slower computers that take longer to render the refreshed data.

## 2.4.1

**Release date: February 5, 2018**

### Fixes

* It was not possible to import an item into a project when the parent folder of the item still existed in another project. This has been fixed.
* It was possible for an imported item to have a test step that referred to an item of another app. That is not possible anymore.
* During the import of some test data, the import failed due to an internal error. This has been fixed.

## 2.4.0

**Release date: January 24, 2018**

### Improvements

* We've introduced categories for our built-in core actions. You will now find each in one of the following categories: **Widget/Set**, **Widget/Get**, **Widget/Assert**, **Widget/Find**, **Widget/Other**, **Mendix**, **Web**, **Mouse & Keyboard**, **Logic**, **Generators**. This change will help you to find the action that you need much faster.
* Based on the new core action categories, we've also redesigned the UI. Searching and selecting an action is now easier than ever before. Previously, we had a simple drop-down menu with an integrated search field. It was difficult if you didn't know what to search for. It was also not prepared to show a lot of results. Now, there is a full-height dialog box with lots of space. A nice tree structure shows all the data. Categories and sub-categories hold the core actions, and folders hold your custom actions. The dialog box also includes a lightning-fast search. If you know what you're looking for, start typing, and the tree filters with every key stroke. If you want to explore the full set of core actions, click the **Expand All** button and browse the full tree.
* We like consistency and ease of use. So, we decided to roll out the new **Search Select** dialog box for other scenarios. Whether you want to add a test case to a test suite or connect a user story with a test case you'll see the same dialog.
* We've increased the number of execution logs that are shown in lists. We now show the first 50 instead of only the first 10. If you have a very large job, test case or test suite you no longer need t click the **Load more** button so many times.

### Fixes

* Test steps in actions or test cases didn't show conditional actions if they had no parameters. Only if the action had input parameters was it was shown in the test steps. This has been resolved.
* Recorded test steps are now saved back into the action or test case. In the recording screen, it was possible to click the save button twice. This resulted in disorganized steps in the originating action or test case.
* When editing the parameter values in a test step, it was possible to open a separate editing dialog box. This dialog box is supposed to be used only for constant values. However, that button was sometimes also shown for non-constants. This has been changed.
* Sometimes when jobs are not executed properly, they have no end date/time. As a result, they were stuck at the top of the list of jobs, which is sorted by end date. To work around this, these "broken" jobs now get a fixed end date after the application restart.
* When adding a test case to a story, it is also possible to create a new test case. You can then select another test case as a template and select **Create & Open**. However, this opened the template instead of the new test case. We've changed this so it opens the new test case instead.
* The scheduled deletion of jobs and logs resulted in many long-running server actions and slowed down the environment. The reason was the cascaded deletes in big jobs. We've improved this by deleting only small chunks. This doesn't impact server performance.
* The configuration for Selenium hubs allows for the addition of custom capabilities. There was a bug that custom capabilities of the Boolean type could not have the value **false**. This has been fixed.
* In test cases and actions, you can extract multiple test steps into a new action. You define a name and description for the action, and a new step to call this action is automatically created. In the last step, we accidentally copied the description of the new action into the test step. We've removed this.
* When a test cases/suite was deleted, we did not properly update our stored statistics. As a consequence, the dashboard showed the wrong data for test suites.
* The **Click Widget** action didn't propagate failures properly. As a consequence, a test step that used this action was not marked as failed, even though the actual click was not successful. This has been fixed.
* The **Set Value** action could not be used to set an empty value. While the field was emptied in the UI, the actual value didn't change. We've fixed this.
* The **Get Validation Message** and **Assert Validation Message** actions were broken. They're now working again.

### Other Changes

* When you open ATS, you will now see a new screen that requests your approval to share your Mendix Profile information with the ATS application. Every user has to confirm this once per environment.

### Known Issues

* The grid that shows the jobs on the **Test Runs** page is refreshing every 3 seconds. This can result in a flickering on the highlighted row. If you try to click a button in the exact moment of the refresh, it won't work.

## 2.3.1

**Release date: December 5, 2018**

### Improvements

* The support for Mendix 7.6 is no longer experimental. Furthermore, we added compatibility for Mendix 7.8. You can now test a Mendix application that you've created on Mendix 5.14.1 up to Mendix 7.8.
* ATS will now automatically detect and wait on many additional scenarios that are designated to block the execution of your tests:
    * The execution of asynchronous microflows with a non-blocking progress bar
    * The download of microflow result data (the objects returned from a microflow)
    * UI rendering changes (for example, with conditional visibility)

## 2.3.0

**Release date: November 29, 2017**

### Improvements

* When editing a long action, test case, or test suite, the top-bar buttons were scrolled out of the screen. We've made the top-bar sticky so that it is always visible, even if you scroll down to your last test step. This makes editing a lot faster.
* We've added experimental support for apps that are running on Mendix 7.6. As there was a major change in the release of Mendix 7.6, we can not yet guarantee the same stability for your tests as on other Mendix versions. Thus, support for 7.6 is currently experimental.

### Fixes

* The test step type (setup/regular/teardown) was not refreshed when you dragged and dropped a test step. There is now a proper refresh after drag-and-drop if the type has changed.
* Adding a step in a test suite removed the order of all the steps. As a result, all the steps were randomly sorted. This is now fixed.
* Adding the first parameter or removing the last parameter of an action did not update the parameter section in the corresponding test steps. This is now fixed.
* When you cancelled a test suite job only the test suite itself was marked as cancelled. The content of the test suite was still marked as running. All test suites and test cases in the job are cancelled now, if they're still running or queued. Test cases/suites that had already finished before keep their result (passed or failed).
* The **Error log** tab was visible for failed test suites but never showed any logs. The tab is now invisible for test suites. Error logs can be found in the logs of test cases and actions only.
* The logic that checks for test suite loops sometimes returned true if though there was no loop. As a result, you couldn't execute some test suites. This is now fixed.
* The **Get Current DateTime String** action did not have proper documentation of the **Date Format** parameter. We've added the description to the parameter.
* Cancelling a job sometimes had the side-effect of manipulating the concurrent execution limit of a Selenium endpoint. As a consequence, ATS could attempt to run more concurrent tests than the endpoint actually supported. This side effect has been removed.

## 2.2.0

**Release date: November 14, 2017**

### Terms of Use and Privacy Policy

With this release, we introduce Terms of Use and a Privacy Policy for ATS.

After your first login to this release, you'll see a pop-up window, which will ask you to read and agree to the new Terms of Use and Privacy Policy. No worries, you only have to do this once.

### Improvements

* We've improved our in-app notification mechanism. You can now close messages that you have read and don't want to see again. We want to make sure you we do not disturb when we inform you about scheduled maintenance or new release features.

### Fixes

* The dashboard shows a **Success** rate for every test case and test suite. This value was not always calculated correctly for test suites. This is now fixed.
* From the app dashboard you can drill down into the latest execution logs by using the **Show log** button. Sometimes ATS also showed this button when there was no log available. We've fixed this so that ATS only shows the button when there's an execution log to open.
* When you pasted test steps into another action or test case some details in the test steps were not visible. This issue has been resolved. Copy-and-paste now works as expected in all scenarios.
* The layout broke when you used a very long description in your test step. We've optimized the layout to cut off very long descriptions.
* When you cancelled the import of a test case or test suite, it was not possible to import it again. We fixed this.
* It was not possible to start a test suite when two test cases within the suite used the same dataset. This now works as expected.
* The **Get Value** action always returned empty if you tried to get the value from a date picker field. This is now fixed so you can also read values from date pickers.
* When cancelling a recording session, it sometimes took a few seconds before ATS returned to the previous page. This delay is now gone.
* The two actions **Assert Active Tab Caption** and **Get Active Tab Caption** had misleading names, as they work for the tab name and not the tab caption. Consequently, they're now named **Assert Active Tab Name** and **Get Active Tab Caption**.
* The **Test settings** allow you to set a **Log retention time**. This defines how long ATS keeps your execution log. We forgot to validate the input for this setting. The setting now only accepts a value between 1 and 365.
* The **refresh my apps** button in the **Can't find your app?** dialog box didn't show a progress bar for user feedback. Also, the dialog box was not closed after clicking the button. Both of these issues have been fixed.

## 2.1.0

**Release date: October 27, 2017**

### Performance

We saw decreasing performance in some parts of the UI when you had a lot of data, so we took immediate action. We've analyzed and significantly improved performance on the following screens:

* **Test case edit**
* **Action edit**
* **Repository**

### Improvements

* Helping new users to get on board is important. We've added instructions on some screens to help you onboard your app in ATS.
* There is a very powerful search function in the repository. Yet, it was not possible to use the standard copy, cut, or delete buttons on the search results. These buttons are now available.
* Configuring a Selenium provider is one of the few things you need to do before getting started. To make this step smoother, we've introduced different screens for each provider type. Whether it's BrowserStack, Sauce Labs, or TestingBot, we'll explain what information is needed and where to find it.

### Fixes

* Due to the speed of the new test runner, we faced some race conditions in the execution of test cases. The result was test cases that failed when they should have passed. We've improved the test runner to make tests more reliable.
* A **Go back** button was missing on some screens. It's no longer missing.
* It was not possible to open a job that had no log because it was never executed. This is now possible.
* We've removed the **Apps** link in the breadcrumb, as it is no longer required.
* When you used the **Extract Action** twice in a row, the extracted actions got mixed up. We've fixed this. Extracting actions is safe again.
* The validations for new datasets were not good enough. It was possible to not set a name and leave out the template file. There's now proper validation on this dialog.
* The import functionality suffered from a timeout when there was a lot of data to process. This is now fixed, and you can also import also large sets of data.
* Jobs that were triggered by the scheduler or via API had no proper status while being in the queue. This is now fixed.
* The search results in the repository sometimes disappeared after a second. This no longer happens.
* When adding a precondition to a test step, the description of the step was emptied. This has been fixed.
* When adding a test case or test suite from a story, it was not possible to set a description. It is now possible to edit the description field.
* When a user ran a test case with a reference to a deleted dataset, an incorrect error message was returned. The new error message will tell the user what actually happened.
* The dashboard statistics of imported test cases and test suites was not correct. As a result, the dashboard may have shown the wrong data. This has been fixed.

## 2.0.0

**Release date: October 19, 2017**

### More Platform Integration

Getting started with ATS has never been easier. We’ve put a lot of effort into ensuring that the onboarding of new users is as smooth as possible. Existing users can enjoy zero maintenance and a well-known user interface.

We accomplished this by providing a single, multi-tenant SaaS instance of ATS in Mendix Cloud. This instance comes with the same styling and usability as Mendix Cloud facilities.

#### Application Test Suite as a Service

ATS is now offered as a service. There is a single multi-tenant instance in Mendix Cloud to serve all customers:

[https://ats.mendix.com](https://ats.mendix.com)

This instance is operated and maintained by CLEVR and Mendix. As a customer, you can enjoy the typical SaaS benefits. CLEVR and Mendix deliver maintenance, updates, and fixes faster than ever. You can access new features as soon as we publish a new release.

All customers can use this instance without affecting each other's work. Data is strictly separated per app. Each user can only access the data from their apps.

#### SSO and App Synchronization

You should not have to spend time on setting up and configuring an application before using it the first time. So, as soon as you open [https://ats.mendix.com](https://ats.mendix.com), you will automatically be signed in with your Mendix account.

After login, the ATS dashboard shows all your licensed apps. From there, you can select one of your apps and start testing.

### New Style and Improved Usability

When you open the new ATS, it will look very familiar.

Earlier this year, Mendix released a restyled version of the Mendix Cloud facilities. We liked it so much that we decided to adopt it for ATS.

There is more than just new styling. We have simplified the navigation structure and reduced the number of screens. Finally, the most important screens have been completely rebuilt. These are described in the sections below.

#### Dashboard

This is the first screen you see when you open your app in ATS. It shows you all test results and statistics on one page (and is exportable into a PDF).

We have improved the load time of the dashboard by precalculating all the required data. It updates as soon as a job has finished.

#### Repository

You are able to browse all your folders, actions, test cases, and test suites via the repository. We've introduced a new layout on this page similar to file system explorers. You can perform actions on a single item or many items at once. The powerful search-on-type function will search within subfolders.

#### Test Case Editing

Editing test cases is one of the main tasks in ATS. We've listened to your feedback to improve this page. Test cases can become very large, so Mendix uses the same list-like view as in the repository to show all test steps. When you click a step, it will expand and expose all the details for you to edit. Click it again to collapse. Reordering of steps has been a pain, but it is now a joy. You can now drag and drop!

#### Results and Logs

Browsing job results and logs is another common task. Again, we're making use of the same list view as in the repository in order to be consistent and provide similar functions. Also, all the jobs are now updated in real-time down to the test case level. Run a big test suite and drill down into a job to see the live status and results of all the contained items.

### Faster Test Execution

A new hope with a new test runner. The core component of ATS is the test runner, which interprets your test cases, test suites, and actions, then executes them and returns a result. We've rebuilt it from scratch with a single purpose in mind: performance.

We increased the speed of the test execution by over 100%. This enables you to do more testing in less time.

Running test cases in parallel is another way to speed up execution time. While this was already possible before, we have optimized it. The test runner can now retrieve the supported concurrency level from your Selenium provider. It is no longer up to the user to configure this.

### Getting a Grip On Test Case Dependencies

While not preferred, having dependencies between test cases can be unavoidable. If there is a dependency between two test cases, you need to run them in order, there is no way around that. But this should not affect other test cases without this dependency.

So far, your only option was to scale down your concurrency and run everything sequentially. Effectively, you had to give up the time win of concurrency. This is no longer necessary.

We have introduced a new setting for test suites. With this setting, you can control whether the content of your test suite is executed in parallel or sequentially.

The best part of this new setting is that you can combine test suites with different settings and create any structure that you need. Sequentialize where necessary, parallelize where possible, and get your test results in the shortest possible time.

### Cross-Platform Testing

Mendix apps are cross-platform and responsive. Users can access your app from different browsers, operating systems, and screen resolutions. To ensure quality across all platforms, you will need to cover more than just one configuration.

It was already possible to switch between the Chrome and Firefox browsers. On top of that, it is now possible to select between different operating systems and screen sizes.

Since the number of possible options is very high, we have made a pre-selection that gives you good real-world coverage. You can select between two browsers, eight operating systems, and five screen resolutions:

* Browsers: Chrome and Firefox (Internet Explorer 11 & Edge are planned)

* Operating systems: Windows 10/8/7/XP, Mac OS 10.9–10.12

* Screen resolutions: FullHD (1920x1080), UXGA (1600x1200), SXGA (1280x1024), UVGA (1280x960), XGA (1024x768)

### Introducing an API for Continuous Delivery and Deployment

Do you practice DevOps on your team? Then you will want to put in place continuous delivery or even continuous deployment. To do so, you need to automate as much as possible, including testing. You need to not only automate the tests, but also the whole process, from triggering the test run to checking the results. With ATS, this is now possible.

We've extended ATS with a new simple API. Via this API, you can run your automated tests from any external tool. A good option for such a tool is Jenkins. We've documented how to set up Jenkins with ATS in a [How-to](/appstore/partner-solutions/ats/ht-two-ats-and-ci-cd/).

### More Changes and Fixes

* There's a completely new [ATS Reference Guide](/appstore/partner-solutions/ats/rg-two-ats/) for version 2.0.
* We've introduced a new setting per app to schedule the cleanup of your execution logs. The default retention time for your logs is 90 days. The last log of a test case is always kept.
* We've improved the overall performance by optimizing security rules.
* Drop-down menus are now configured as part of the parameter where they are used. They are no longer considered independent, and they are only an option for parameters.
* The cancelling of jobs was sometimes not reliable. We fixed this.
* We improved the log output so that it is more readable.
* We added an autocomplete function to search for actions, test cases, or values.
* We centralized the settings page per app.
* We implemented application-wide type icons with tooltips.
* We added description text on many pages.
* We dropped the support for a Selenium Standalone Server.

### Terminology

The following terminology has changed:

* "package" --&gt; "folder"
* "project" --&gt; "app"
* data types:
    * "integer" --&gt; "number"
    * "string" --&gt; "text"
    * "enumeration" --&gt; "drop-down"
    * "web element" --&gt; "page element"
    * "undefined" --&gt; "any"
* "test run" --&gt; "job"

There are new statuses and results in the test runner:

* Statuses: queued, running, done
* Results: passed, failed, cancelled, skipped

### Removals

Some of changes described above made existing functionality obsolete:

* The whole setup and administration of tenants, apps, permissions, accounts, and roles has become obsolete and is no longer available
* The option to set the concurrency limit for a Selenium endpoint has been removed; the limit is now determined by the test runner
* The log depth settings has been removed; we now log your test cases down to every step and custom actions down to the core actions

The following features have been removed as a result of design decisions:

* Data types: DateTime, float, and currency (which is deprecated now and will be removed soon)
* Folder visibility
* Custom error message
* Proxy settings
* Enabling screenshots (both on job and test step configuration)
* Quick run

### Minor Fixes

Many bug fixes and small changes have been made, including everything from the 1.8 branch. For an overview of these changes, see 1.8.

## 1.8.8

**Release date: December 14, 2017**

### Fixes

* We fixed a bug that sometimes caused an error when opening the test error logs. More specifically, if the error log contained HTML characters it caused issues with Mendix. HTML characters in the error messages are now correctly escaped and rendered as a string.
* We fixed an issue where some images were not displayed in cloud version v4.

## 1.8.7

**Release date: July 3, 2017**

### Fixes

* We fixed a bug where Mendix actions were not shown in the search results if there were more than 25 results.
* We fixed a bug where the error log was lost due to being too long.
* We fixed a bug where the action **Set Value** could set a value on a read only widget.
* We fixed a bug where the statistics of **Passed** test cases was reported differently on the **Dashboard** as compared to the **My projects** page.

## 1.8.6

**Release date: June 2, 2017**

### New Action: Hover

* We added a new action, which will simulate the mouse hovering over a given web element.

### ATS Helper

* ATS Helper now also works in Internet Explorer.
* ATS Helper will now show the Mendix name of more widgets, like the navigation list item and the search input field.

### Improvements

* We improved the login action so that it is more stable.
* We improved the **Find/Assert DataGrid Row** action. You can now search in three columns at once instead of just one.
* We improved the **Open** application action. It will now wait for sleeping sandbox apps to resume.
* Notifications and other pop-up messages are now disabled in Google Chrome, which has lead to ATS not finding covert elements.

### Fixes

* We fixed the bug for sandbox apps where the execution of a test case failed with the error "MTF not defined."
* We fixed the test result calculation on the dashboard where data-driven tests were not taken into account.
* We fixed the bug on the import of a test case where the parameter of a conditional action was mistakenly added to the regular action if the conditional action had a dataset field as the input parameter value.
* We fixed the selection of applications and Selenium hubs for scheduled tests where it was possible to select an application or Selenium hub from another project.

## 1.8.5

**Release date: February 24, 2017**

### Compatibility with Mendix 7

ATS now supports testing the recently released Mendix 7.

### Improvements

* We improved the performance of the project dashboard. The loading time should now be much faster.
* We removed the log depth setting for schedules to avoid log flooding. The setting is still available for manual test runs.

### Fixes

* The error logs now show correct timestamps with the "UTC" suffix.
* We fixed two scenarios in which the results of data-driven test cases were not counted correctly on the dashboard and in the report.
* We fixed a bug on the project dashboard where the **Show log** button would not show the correct execution log for a data-driven test case.
* We fixed a bug on the project dashboard where the **Show log** button would not show the execution log for test suites.
* We fixed the PDF report generation on the project dashboard, which crashed when the descriptions in test cases/suites were too long.
* We fixed the bug in the repository where it wasn't possible to add multiple items one after another because the "add item" function would work only once.
* We added a validation for test cases to prevent empty names.
* We added a validation to schedules so that you can't save a schedule without selecting your Selenium server.
* We removed the naming restriction on projects so that projects in different tenants can have the same name.

## 1.8.4

**Release date: February 1, 2017**

### New Action

* We added a new action to click an x-y coordinate within the browser window or a certain UI element. For more details, see [Click Coordinates](/appstore/partner-solutions/ats/rg-one-click-coordinates/) in the ATS Reference Guide 1.

### Improvements

* We improved the sorting of scheduler items. The items are now shown in order of next execution time. The top item is the one that is executed next.
* We added a new warning icon on the **Monitoring/Results** page that indicates a failure in the tear down procedure of a test.

### Fixes

* We fixed a bug where the dialog box to link a story to a test case was not closed properly.
* If you configured a dataset with more than 30 fields for your test case, only the first 30 fields could be used due to a UI bug. This has been fixed.
* A change of the project name now also updates the root folder in the repository.
* We fixed the bug where users were able to select Selenium configurations and applications from other projects in the test run configuration.
* We fixed the bug where the chart on the project selection page did not show the same results as the chart on the project dashboard.
* The **Show Log** link on the project dashboard is now hidden for tests that have never been executed.
* We fixed the bug where test cases were added in the wrong order to an empty test suite.

## 1.8.3

**Release date: December 19, 2016**

### Improvements

* Added a function for the System Administrator role to delete old execution logs from the database.

## 1.8.2

**Release date: December 13, 2016**

### Fixes

* Fixed a bug where a data-driven test case within a test suite was not executed and prevented the test suite from finishing.

## 1.8.1

**Release date: November 7, 2016**

### Fixes

* Fixed the bug where the **View Project** button on the dashboard returned an error message.

## 1.8.0

**Release date: November 6, 2016**

### Supporting Mendix Marketplace Widgets

Everybody uses widgets from the Mendix Marketplace in their applications. And of course you want them to be tested like all other parts of your application. Now they can be tested.

We've selected the top widgets from the Marketplace and added support for testing with ATS.

These are the new widgets now supported by ATS:

* [Dropdown Div Converter](https://marketplace.mendix.com/link/component/2089/Mendix/DropdownDivConverter)
* [OnChange Inputbox/Textarea](https://marketplace.mendix.com/link/component/89/Mendix/OnChange-Inputbox)
* [Boolean Slider](https://marketplace.mendix.com/link/component/1798/Mendix/Boolean-Slider)
* [Simple Checkbox Set Selector](https://marketplace.mendix.com/link/component/2349/Mendix/Simple-Checkbox-Set-Selector)
* [Checkbox Set Selector](/appstore/widgets/check-box-set-selector/)
* [Grid Selector](https://marketplace.mendix.com/link/component/266)
* [Input Reference Selector](https://marketplace.mendix.com/link/component/99/Mendix/Input-Reference-Selector) (not supported in recording yet)
* [CKEditor](https://marketplace.mendix.com/link/component/1715/Mendix/CKEditor-For-Mendix) (not supported in recording yet)
* [Bootstrap Wysiwyg Editor](https://marketplace.mendix.com/link/component/902/Mendix/Bootstrap-Wysiwyg-Editor) (not supported in recording yet)

The [Action Reference Guide](/appstore/partner-solutions/ats/rg-one-std-actions-ref/) lists the new actions.

### Action Reference Guide and Tutorial

If you use a widget that is not supported by ATS, you can help yourself and create your own actions. To help you with this, we now provide a Tutorial that explains how to create an action based on the example of the Boolean Slider widget.

We've also documented all our actions in a [Reference Guide](/appstore/partner-solutions/ats/rg-one-std-actions-ref/). It describes all the actions that you can use in your test cases. In addition to that, it also references the internal actions that are very helpful if you want to create your own actions.

### Improved Recording

We've improved the recording functionality to get rid of some unwanted recordings. Previously the recorder would also record a test step when you clicked elements like a table or a dataview. With this release, this does not happen anymore.

### Known Issue

Unfortunately recording for the Input Reference Selector, CKEditor, and Bootstrap Wysiwyg Editor is not possible yet. However, the widgets can still be tested by manually inserting the actions into your test case.

## 1.6.0

**Date: August 29, 2016**

### Data-Driven Testing

ATS 1.6 is equipped with a highly demanded feature, namely data-driven testing. It is now possible to outsource test data from test cases and manage both separately. There is a new tab in the repository to define datasets and create records. You can import existing data from Excel sheets or export all data for easier maintenance.

The apparent benefit of this is the improved maintenance because test logic and data can now be clearly separated. Moreover, you can remove redundancy and re-use the same test data for multiple test cases.

The most beneficial use however is to cover multiple test scenarios with a single test case. A test case runs once for every record in a connected dataset. By putting all scenario’s inputs and outputs into a record the same test case can be reused for similar scenarios.

Check the documentation on how to [create/maintain test data](/appstore/partner-solutions/ats/rg-one-data-management/#test-data) and [use it within a test case](/appstore/partner-solutions/ats/rg-one-data-driven-tests/).

### Other Fixes

* Click Widget action now doesn’t try to click invisible widgets
* Recorder now also records when there is no mxname class on the lowest element
* Recorder now never returns the **NO_UNIQUE_PATH** message if there is any possible unique combination of mxnames to identify the widget
* The actions **Get Value**, **Assert Value**, and **Find Widget** (with **Value** parameter set) now also recognize all text widgets
* Improved layout and usability on import dialog and overview page
* Several theme fixes

### Deprecations

* The **Click Item/Row** action has been deprecated in favor of the generic **Click Widget** action. To click a certain listview/templategrid/datagrid item/row you simply use the index classes (index-0 for the first, index-1 for the second item/row etc.).

### Notes

* The data-driven testing feature lead to a change in the file format for exported repository items (test cases/suites, actions, folders, enumerations). As a consequence exports from 1.6 cannot be imported on older releases.

## 1.5.0

**Date: July 18, 2016**

### User Experience

Automated testing should be available to anyone on the Mendix Platform. That’s why we put a high focus on user experience. With this release we’ve made a big step by creating a new theme and redesigning many parts of the user interface.

We’ve created the new, modern and appealing theme based on the Mendix UI Framework. With the new look and feel we can not only present data in a better and nicer way, we also put visual focus to where it’s really needed.

Several pages and dialogs have been redesigned to improve user flow and reduce the number of clicks. A new landing page dashboard gives you a quick overview of your projects and their status right after login. Open a project from there and the project dashboard shows you detailed data and your user stories. Adding a new test case to a user story is now only one click away. And by using a template for the new test case you are able to save even more time.

Details can make a difference. That’s why there will now be a UX improvement in every release.

### Test Recording

What could be easier than recording your manual actions taken inside your application and transforming them into an automated test case? It’s possible as of now.

Generic recording solutions only look promising until you’ve tried to record your first test case. You benefit from a recorder that has been tuned and optimized for the Mendix Platform. It couldn’t be easier to use. Simply install the browser extension and hit the ‘Record’ button in ATS. That’s it. Every action is translated into a test step and mapped onto one of the actions. The outcome is the same as of creating a test step manually, but multiple times faster.

You can switch between manual editing and recording whenever you want. You can enrich a recorded test case with manually inserted assertions and checks.

### Projects

Creating new test cases – especially with recording – is a simple activity, so you can quickly end up with a lot. Are you testing multiple applications or even have different teams creating tests in the same environment? Eventually you want to separate, structure and protect this data.

We added a new project layer on top of this data. All data – may it be test cases, test suites or actions – is now enclosed in a project. This provides clear separation between data of different applications. Every user can create a new project and as its owner manage other user’s access to it. See ReferenceGuide_Projects page in the reference guide for more information.

There’s also a special type of project, the Action Library. Action Libraries are limited in that they can only contain actions. These actions can be shared with projects without the need to duplicate. Every project can include an action library and gets read access to all its actions. Thus, you can use them to create test cases in these projects. Your actions can be reused, but are still maintainable in a single place and protected against unintentional modifications.

### New Actions

The predefined Actions for Mendix are a key for the efficient and simple creation of test cases. And we’ve made them even better.

All actions now make use the ‘mx-name’ classes that Mendix assigns to all widgets on a page. This standardization allowed us to significantly reduce the number of actions. There are no longer several actions per widget type. Instead, every action is now either completely generic or supports at least a number of widgets. Furthermore, the new actions are smarter. We reduce the number of required parameters for all actions to simplify usage. See ref-ActionOverview for a list of available actions.

All actions support the latest Mendix Platform release at the time of release, 6.6.0.

### Browser Support

ATS has upgraded to the latest version of Selenium Webdriver, 2.53\. Users benefit from support for Firefox 44/45, Firefox 38/45 ESR as well as Chrome 46-50.
