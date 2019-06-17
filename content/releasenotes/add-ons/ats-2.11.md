---
title: "2.11"
parent: "2"
---

## 2.11.2

**Release date: June 17th 2019**

### Extended API

As more people embrace CI/CD in the development process we saw a need for more functionality and information from our API. 

On the functionality side, we added the operation **Rerun not passed** to the ATS API. Now you can set up your CI/CD pipeline to rerun failed test cases automatically. 

On the information side we added options to retrieve the following data for a job using the existing **GetJobStatus** operation:

* flags (cancelled and warning)
* breakdown per test case i.e. number of passed/failed/not executed test cases
* details per test case with name, result, duration and error message.

For all the details make sure to check the [ATS 2 Reference guide](./../../ats/refguide/rg-version-2/cicd-api.md).

## 2.11.1

**Release date: June 11th 2019**

### Bugfixes

* We fixed a bug introduced with release 2.11 that caused tests on Firefox to fail during login.

### Known issues

* The customizable *Mendix Wait* function does not time out properly on Firefox when configured with a timeout less than the default 60 seconds.

## 2.11

**Release date: June 4th 2019**

### Support for more app store widgets

We are constantly on the look out for popular widgets that we can support with ATS. With this release we are happy to announce support for recording and testing of the following widgets:

* auto complete
* switch
* format string
* custom string

### Improvements

* We added customizable timeout to the *Mendix Wait*  function. Use this whenever you know that a certain microflow will take a long time to respond (> 60 seconds) to avoid a timeout exception. The wait function will ensure that the selenium session is active by sending *keep alive* signals.
* The *rerun not passed* functionality now also works for data driven test cases. 

### Bugfixes

* Due to a bug, a test case related to a dataset with an empty value could not be started. This has been fixed.
* Due to a bug, clicking a reference set selector select button was recorded as a regular *click widget* function. This led to an error during execution. We fixed this by correctly mapping to a *click widget button* function instead.
* In certain cases, setting a value for a radio button list, failed with a *StaleElementException*. This has been fixed by correctly dealing with the exception when it occurs.
