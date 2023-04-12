---
title: "2.28"
url: /releasenotes/add-ons/ats-2.28/
weight: 72
---

## 2.28.10

**Release date: April 11th, 2023**

### Fixes
- We fixed a styling issue causing a button in ATS to be missplaced.
- We fixed an issue causing users to see all import runs across their apps instead of their current app.
- We fixed an issue causing the app admin panel not displaying any environments or selenium hubs.

### Improvements
- We upgraded to the latest Mendix patch version 8.18.24 for security fixes in the platform.

## 2.28.9

**Release date: March 28th, 2023**

### Fixes

* We fixed an issue that caused the dashboard not to show all recently run test suites and test cases.
* We fixed an issue that caused the **Confirm subscription** link to show a message stating something went wrong when confirming the subscription, even when the subscription was successfully confirmed.
* We fixed an issue that caused the **Search** panel to show custom actions from another app the user was a member of when editing a test case or custom action.
* We fixed an issue that caused newly created drop-down values not to appear initially on a new input parameter.
* We fixed an issue that caused the discontinued **ATSelenium** Selenium hub to be used when running a test case or test suite with default values.

## 2.28.8

**Release date: March 7th, 2023**

### Fixes

* When (un)subscribing to schedules, the browser showed HTML instead of rendering it as a page. This has been fixed.
* We fixed an issue where a "Wrong browser" notification was not shown when trying to record steps in Microsoft Edge. As Edge is Chromium-based, it did not detect that the browser was not the Chrome browser.
* We fixed an issue where old test-case and test-suite executions were not deleted after 90 days, despite the log retention time being set to 90 days.
* On sign-up, links to the privacy statement and terms and conditions no longer return a 404 error.

## 2.28.7

**Release date: January 31st, 2023**

### Fixes

* We fixed an issue with the Desktop Recorder, which caused it to stop recording any actions when clicking in the recorder browser.

## 2.28.6

**Release date: January 17th, 2023**

### Fixes

* We fixed an issue that occurred when copying a test case that had a data set and even though the copy had the data set associated, it did not use the data set values.

## 2.28.5

**Release date: January 3rd, 2023**

### Fixes

* We fixed a generic error that occurred when trying to add a test case/suite to a test suite.
* We fixed false positives from the Find/Assert DataGrid Row action.
* We fixed a UI issue that caused the **Save** and **Cancel** buttons in a pop-up window to not be clickable when the zoom level was greater than 100%.

## 2.28.4

**Release date: December 6th, 2022**

### Fixes

* We applied security fixes related to administrators.

## 2.28.3

**Release date: November 29th, 2022**

### Fixes

* We applied security fixes related to administrators.

## 2.28.2

**Release date: November 9th, 2022**

### Fixes

* We applied security fixes related to used libraries.
* We fixed an issue where videos of run test suites and test cases were not loaded.

## 2.28.1

**Release date: October 25th, 2022**

### Fixes

* We applied security fixes related to used libraries.

## 2.28.0

**Release date: October 11th, 2022**

### Fixes

* We fixed a UI error that occurred when deleting a scheduled test case/suite.
* We fixed recording of TabContainer, NavigationListItem, and InputReferenceSetSelector for Studio Pro 9.
* We added support for the drop-down container (as the replacement for the custom `DropDownDivConverter` widget in Studio Pro 9).
