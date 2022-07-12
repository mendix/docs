---
title: "2.7"
url: /releasenotes/add-ons/ats-2.7/
weight: 93
---

## 2.7.1

**Release date: May 15th, 2018**

### Mobile Testing

We are happy to announce that ATS now supports mobile testing for web applications. With a Browserstack account, you can test on Android 6 and 7 on real mobile devices. 

* The format of test cases and the functions that are used to test on desktop devices work the same way on mobile devices.
* ATS functions are context-aware, meaning, they detect the device and interact accordingly. For example, when setting a date field on mobile, the native date dialog box is used. All native input elements are set by automating the native dialog boxes, with the exception of drop-down menus, which are set directly.
* You can use the ATS recorder even if you have different pages for desktop and mobile. 

For more details, refer to [Mobile](/addons/ats-addon/rg-two-mobile/) in the *ATS Reference Guide*.

_Please note that this feature is still in beta._

### Option

When a job or a test suite has not passed it is now possible to do another run of it with only those test cases that not passed. We think that this feature will save time both by not having to manually select the not passed test cases and also by not having to run the whole test suite again.

### Changes in Calculation

In order to make it easier to read and understand the results of a test run we are making some changes. Here are the main points: 
* The result **Skipped** has been renamed to **Not executed**.
* Test cases that fail durin the initialization will have the result **Not executed** instead of **Failed**.
* **Canceled** is no longer a result but a flag that can be set additionally to the result.
* Whenever a test case is canceled it will keep the result and will get an additional canceled flag. For example, tests that were canceled during teardown will get the passed result and a canceled flag.
* Test suites do not have a result per se, but maintain a counter of passed / total test cases. 
* With regards to the charts on the dashboard we no longer distinguish between failed and not executed. Instead we only distinguish between passed and not passed.

For all the details please refer to [results section in the ATS reference guide](/addons/ats-addon/rg-two-results/).

### Changes in Provider and platform support

#### Removed Support for Windows XP, MacOS 9, and MacOS 10

These platforms were not able to work properly with the browser versions that we officially support. In some cases for example, MacOS10 in combination with Firefox browser, the selenium driver v3.8.1, which is the official selenium version that we support, is simply not supported for MacOS10. By removing support for these outdated platforms we are able to focus on the performance and stability for the platforms that are used much more in the real world.

#### Removed Support for Testingbot

Testingbot did not support the latest browsers versions and/or the latest selenium driver versions for some platforms. Because of this and the fact that it was almost not used in ATS we decided to drop support for it, choosing instead to focus on the other providers which support the newest versions of browsers and drivers. If you still have this provider configured as a hub, you can no longer use it to run jobs. Any schedules or job templates that are configured to use this provider will return an error when executed.

### Integrated Function Documentation

We understand that it is not optimal to have to switch to another page in order to check the documentation for a certain function in a test case. Therefore we integrated the function documentation into ATS itself. When searching for functions and also when editing a test step in a test case you can see the function documentation by hovering over the function name.
The same holds for the function parameters.

### Data-Driven Test Cases

* We added the option to sequentially execute data driven test cases (DDTC). Until now DDTCs were always executed in parallel. We have now made it possible to chose if you want to execute DDTCs parallel or sequentially, as in, one-by-one. The selection works in exactly the way it works for test suites, but it is only available for test cases that are related to a dataset. This overcomes issues where DDTC could be interfering with each other because they were always running in parallel.
* We have also added the screenshot feature to data driven test cases. Whenever a data driven test case fails for a given record in the dataset, a screen shot will be recorded and will be accessible in the logs. This will work in the same way as it is working now for standard test cases.
* Selecting a dataset for a test case now uses the sidebar search dialog.

### Improvements

* We added the corresponding provider logos for Browserstack and Saucelabs.
* We sped up the opening of the edit page for large datasets.
* When editing a value for parameter of type number it is now possible to use the edit dialog, same as for text parameters.
* When running from Browserstack or Saucelabs we select by default the Windows 10 platform and FullHD resolution. For MacOS the resolution UXGA is selected by default. We hope that this will save a few clicks.
* We have changed the platform selection to use icons instead of a drop-down. This also enabled us to limit the choices to only those which make sense, for example you can no longer select Internet Explorer and MacOS.
* We removed the "View" button for pre-conditions where the condition is related to a function. Since function can not be viewed this button is not needed.
* In the search dialog there is now an indicator when multi selection is available.
* When a test case/suite that is related to a schedule/job template is deleted the related schedule/job is also deleted.
* We added a progress bar on the sidebar search dialog. We hope that this helps prevent error due to accidentally double clicking on the select button.
* When running a job on Browserstack or Saucelabs the job name is set as the the session name in their portals. This should make it easier to correlate the provider sessions with jobs in ATS.

### Fixes

* Due to an artificial limitation only the first 20 fields were shown when editing a dataset. This limitation has been removed.
* When a test step in the logs refers to a function it is not possible to open/edit this function. However, due to a bug the edit icon was still shown for such test steps. This has been fixed.
* When a test case with an empty test step in the middle was executed, the test case failed with a null pointer exception. This is now fixed and the empty test step is not interfering with the execution.
* In some cases the tooltip for action/parameter documentation was not showing the full description. This is now fixed.
* When pasting items in the repository it was possible to click the paste button multiple times. This is fixed by adding a progress bar to prevent pasting an item multiple times by accident.
* In rare instances the numbers in the selective report did not match the numbers on the dashboard. This is now fixed.
* When a test case failed in a teardown step any existing screenshot from a regular step was overwritten. In order to fix this we do not take a screenshot during teardown steps anymore.
* It was possible to add records to a dataset with no fields. This is now fixed.
* When editing a folder and clicking cancel, the changes to the folder name were still saved. We fixed this so that clicking cancel does not result in any changes being applied.
* When moving a folder it would sometimes happen the the name is suffixed with "(moved) (moved)" to avoid a conflict. This is fixed so that the folder name gets the suffix "(moved)" instead.
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
