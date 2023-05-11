---
title: "2.17"
url: /releasenotes/add-ons/ats-2.17/
weight: 83
---

## 2.17.1 {#2171}

**Release date: May 4th, 2020**

### Improvements

* When running test cases/suites, it no longer possible to queue an unlimited number of them. Instead, up to 5 items can be queued/running at one time. Any additional test cases/suites will be automatically canceled with a warning. This affects test cases/suites that are started manually, scheduled, or started by CI/CD.

### Fixes

* When running scheduled test cases/suites, if there was a problem running one of the schedules, this blocked the execution of all scheduled items. This is now fixed so that an error in one schedule does not block other schedules from running.

## 2.17.0

**Release date: April 30th, 2020**

### Mendix 8.9 Compatibility

Apps built with [Mendix 8.9](/releasenotes/studio-pro/8.9/) can now be tested and recorded using ATS.

### Improvements

* When trying to click an element that is off screen, ATS automatically scrolls to that element before clicking it. In the past, this scrolling was always intended to align the element to either the top or bottom of the screen. This is not very natural and caused problems (for example, when sticky headers or footers were used). Now, scrolling will try to put the element to click in the center of the screen before proceeding with the click.
* When copying an element with a very long name that would cause the new name to go over the limit for name length, we now show a warning message.

### Fixes

* Due to the use of an outdated appium library, it was not possible to test a web application on mobile. This is now fixed.
