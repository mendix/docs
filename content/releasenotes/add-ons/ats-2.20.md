---
title: "2.20"
parent: "2"
---

## 2.20.1

**Release date: August 24th, 2020**

### Fixes

* We fixed a bug where running a test case for the first time would show a message to select a selenium hub instead of preselecting the default selenium hub.
* Due to a bug if an error occured while starting a job a generic error would be thrown instead of collecting the error as part of the job log. This is now fixed.



## 2.20

**Release date: August 17th, 2020**


### Built-in Selenium (Preview)

One of the biggest hurdles when starting with ATS is setting up a selenium instance. Finally, we are offering this out-of the box. Every enteprise licensed app will include a pre-configured selenium hub for free that can run up to three parallel sesions (one session for single-app licenses). Please note that this is a preview feature, and the main goal is to gather feedback before it is officially released and is subject to change without notice.

### Live view (Preview)

When using the built-in selenium we now provide live view of the running selenium sessions in ATS. Use this to monitor how your test is progressing in real time.

### Start testing faster

The main goal of ATS is to test your Mendix application, therefore with this release, we tried to reduce any the extra configuration around running tests.

#### Fetch environment info from Sprintr

ATS now fetches information such as name and URL about the existing app environments for an app from Sprintr.
To distinguish these environments from ones that are manually managed the name is suffixed with `(Sprintr)` and an additional flag is added.
These environments are not editable and will be updated daily.
We hope this makes it easier to start using ATS on new projects.
Note that this feature is only available for licensed Mendix apps and only if the user `smartdigitalfactory@mansystems.nl` is invited to the project.

#### Configure a default selenium hub and environment

When starting a new test case/suite it was always required to select an environment and a selenium hub for that execution. 
To speed this up we added the option to choose a default hub and environment. They can be configured from the app settings page. The built-in selenium will be set as a default.

#### Run with default settings

Related to the previous point if both a default selenium hub and environment are configured then a test case can be started without having to select anything.
To make this process even faster and skip one click we added the option to run tests directly without going through the configuration screen.

### Results page improvements

* When starting a test the view no longer goes to the `Test Runs` page but goes instead to the results page for that specific test.
* The results page received a new progress indicator which shows how many of the tests are passed/failed/not executed.
<!-- * Last but not least, the results page will now be updated during the execution as new information comes in.
The updates include the status and result of test steps as well as any new test steps that have been started. -->

### Other changes

* We upgraded to the latest MendixSSO version which includes some security patches.
