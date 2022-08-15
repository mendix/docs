---
title: "2.12"
url: /releasenotes/add-ons/ats-2.12/
weight: 88
---

## 2.12.0

**Release date: July 21st, 2019**

### Test Step Settings

We are very excited to bring you new features that are geared towards making it easier to create and modify tests with ATS. With this release, we are adding settings for test steps that allow you to do the following:

* Disable a test step
* Abort execution on not passed
* Negate the assert in a test case 

#### Disabling a Test Step

This feature lets you temporarily disable a test step without deleting it. This is similar to commenting out lines of code. Use this to test how the test script behaves without certain steps. If it turns out that the step is needed, simple enable it again. This feature can be used in test suites, test cases, and actions.

#### Abort Execution on Not Passed

We have often seen that large test suites need a kind of setup script at the beggining that creates certain data and other conditions. When case this script fails, it makes no sense to continue with the execution of the test suite anymore. This is exaclty the scenario that we had in mind when we created this feature. When a step is flaged as abort not passed, if it is not passed any subsequent test, the steps will not be executed. This saves time and money. The feature is only available for test suites with sequential execution.

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
