---
title: "2.11"
url: /releasenotes/add-ons/ats-2.11/
weight: 89
#Known issues here need to be followed up on for fixes.
---

## 2.11.2

**Release date: June 17th 2019**

### Extended API

As more people embrace CI/CD in the development process, we saw a need for more functionality and information from our API. 

On the functionality side, we added the operation **Rerun not passed** to the ATS API. Now you can set up your CI/CD pipeline to rerun failed test cases automatically. 

On the information side, we added options to retrieve the following data for a job using the existing **GetJobStatus** operation:

* Flags (canceled and warning)
* Breakdown per test case (meaning, the number of passed, failed, and not-executed test cases)
* Details per test case with name, result, duration, and error message

For more details, see the [ATS 2 Reference Guide](/addons/ats-addon/rg-two-cicd-api/).

### Linmitations

* The customizable **Mendix Wait** function does not time out properly on Mozilla Firefox when configured with a timeout less than the default of 60 seconds.

## 2.11.1

**Release date: June 11th 2019**

### Fixes

* We fixed a bug introduced with release [2.11.0](#2-11-0) that caused tests on Mozilla Firefox to fail during login.

### Linmitations

* The customizable **Mendix Wait** function does not time out properly on Mozilla Firefox when configured with a timeout less than the default of 60 seconds.

## 2.11.0 {#2-11-0}

**Release date: June 4th 2019**

### Support for More Mendix Marketplace Widgets

We are constantly on the lookout for popular widgets that we can support with ATS. With this release, we are happy to announce support for recording and testing the following widgets:

* [AutoComplete Widget](https://marketplace.mendix.com/link/component/2695/)
* [Switch](/appstore/widgets/switch/)
* [Format String](/appstore/widgets/format-string/)
* [CustomString](https://marketplace.mendix.com/link/component/1426/)

### Improvements

* We added a customizable timeout to the **Mendix Wait**  function. Use this whenever you know that a certain microflow will take a long time to respond (> 60 seconds) in order to avoid a timeout exception. The wait function will ensure that the Selenium session is active by sending **Keep alive** signals.
* The **Rerun not passed** functionality now also works for data-driven test cases. 

### Fixes

* We fixed an issue where a test case related to a dataset with an empty value could not be started.
* There was an issue where clicking a reference set selector select button was recorded as a regular **click widget** function. This led to an error during execution. We fixed this by correctly mapping to a **click widget button** function instead.
* In certain cases, setting a value for a radio button list failed with a **StaleElementException**. This has been fixed by correctly dealing with the exception when it occurs.
