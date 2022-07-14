---
title: "2.8"
url: /releasenotes/add-ons/ats-2.8/
weight: 92
---

## 2.8.0

**Release date: June 15th, 2018**

### Control of Administration Rights 

It is now possible to give members of an ATS app, administration rights directly from the "App Settings" page in ATS. In other words it is no longer required for an app administrator in ATS to have an administrative role in the project in Mendix Sprintr. Please keep in mind that users still need to be a member of a project in Sprintr for them to be eligible to be app administrators for the corresponding app in ATS.

In order to make sure that administration rights which have been granted to users are not overwritten, we no longer automatically revoke administration rights when the project role for a user in Sprintr changes from administrator to non-administrator. Instead, revoking administration rights can be done manually from the "App Settings" page. Finally, note that a user who has an administrative project role in Sprintr will always have administrative rights in ATS.

### Mendix 7.13, 7.14, and 7.15

Mendix applications which are based on Mendix version 7.13, 7.14 or 7.15, can now be tested and recorded with ATS.

### Mobile Testing Improvements

* In addition to testing on real devices via browserstack it is now possible to test on real devices by using Saucelabs. We have preselected some devices for Saucelabs for different Android versions. Check the [ATS reference guide for more details](/addons/ats-addon/rg-two-mobile/).
* We added support for testing on Android 8 devices.
* When testing on mobile devices we now simulate setting drop-down values via the native dialogs for mobile, same as we do for date and time dialogs.

### Cancelling

We have completely redesigned the back end for canceling jobs. You will see that cancelled jobs stop executing much faster than before. Steps which are interruptible for example, sleep will be interrupted immediately instead of waiting them to finish. We also update the status for test cases or suites which were not started at the time of cancelling.

### Recording Integration

It is now possible to see a video recording for test cases executed on Browserstack in ATS. When looking at the result log for a test case execution you can see the recording under the new **Recording** tab. Please note that we do not store these recordings, we only link to the recorded videos from Browserstack.

### Improvements

* We have made several changes to the wait function making it more stable, especially when running on slow devices or slow selenium servers. 
* We made changes to how recordings are handled internally which makes saving and cancelling a recording much faster.

### Fixes

* The built-in function *Assert Condition Fails* was not working due to a bug . It is now fixed.
* The built-in function *Assert at least one not null* was not working due to a bug. It is now fixed.
* The **Click Widget** action didn't propagate failures properly. As a consequence, a test step that used this action was not marked as failed, even though the actual click was not successful. This has been fixed.
* Coping a data-driven test case did not copy the association to the dataset. This is now fixed.
* When using a dataset field as in an test step where the parameter type is "Any" this was falsely classified as incompatible type issue and shows up under the "Test data" tab. This is now fixed.

### Important Change

The built-in function *Assert not null* behavior has been changed. Up to and including ATS 2.7 this function would pass if an object is null. This was the wrong behavior which directly contradicted the expected behavior based on the function's name. Therefore, we made changes to the function so that, when a null object is asserted the function fails. We updated the functions's description accordingly. 

**IMPORTANT:** To avoid breaking test cases which were already using this function with its past behavior, we decided to replace all past uses of the function *Assert not null* with *Assert null*. This change is done automatically and will not affect the behavior of your existing test cases.

### Limitations

* Regarding _Nanoflows_, we have not explicitly tested their impact on ATS, but so far we have not received issue reports related to them.
