---
title: "2.17"
parent: "ats-2"
---

## 2.17.1

**Release date: May 4th 2020**

### Improvements

* When running test cases/suites it no longer possible to queue unlimited number of them. Instead up to 5 items can be queued/running at one time. Any additional test cases/suites will be automatically canceled with a warning. This affects test cases/suites that are started manually, scheduled or started by CI/CD.

### Fixes

* When running scheduled test cases/suites if there was a problem running one of the schedules this blocked the execution of all scheduled items. This is now fixed so that an error in one schedule does not block other schedules from running.

## 2.17

**Release date: April 30th 2020**

### Mendix 8.9 compatibility

Apps built with Mendix version 8.9 can now be tested and recorded using ATS.

### Improvements

* When trying to click an element that is off screen ATS automatically scrolls to that element before clicking it. In the past this scrolling was always intended to align the element to either the top/bottom of the screen. This is not very natural and caused problems for example when fsticky header/footers were used.
Now scrolling will try to put the element to click in the center of the screen before proceeding with the click.

* When copying elements with very long name, such that the new name would go over the limit for name length we now show a warning message.

### Fixes

* Due to the use of an outdated appium library it was not possible to test a web application on mobile. This is now fixed.
