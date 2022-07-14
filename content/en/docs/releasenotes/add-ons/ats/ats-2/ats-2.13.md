---
title: "2.13"
url: /releasenotes/add-ons/ats-2.13/
weight: 87
---

## 2.13.2

**Release date: August 4th, 2019**

### Mendix 8 Compatibility

Apps built with [Studio Pro 8](/releasenotes/studio-pro/8/) can now be tested using ATS.

### Fixes

* Since the update to Selenium v3.14, the click coordinates behavior was changed to refer from the center of the web element instead of the upper-left corner. Because we like to keep the behavior of our functions consistent between upgrades, we implemented an offset to make sure that **Click Coordinates** works with respect to the upper-left corner. (Ticket 8752)
* We fixed an issue introduced in 2.13 where error logs were missing for data-driven test cases. (Ticket 8760)
* We fixed a minor issue where the warning tooltip showed the same text multiple times.

## 2.13.1

**Release date: August 1st, 2019**

### Fixes

* We fixed an issue where test suites within test suites did not finish properly.
* We fixed an issue where click coordinates did not work properly if the elements were outisde the viewport.

## 2.13.0

**Release date: July 31st, 2019**

### Upgraded Selenium from Version 3.8 to 3.141.59

This lets ATS run tests on the latest browser versions, which provides improvements in both speed and stability.

If you are using Browserstack or Saucelabs, ATS will automatically use the new version, and you do not have to do anything. 

If you are using another Selenium hub, we highly recommend updating it to use Selenium version 3.141.59, as the current version will no longer be supported. You can the download Selenium version 3.141.59 [here](https://www.seleniumhq.org/download/).

### Improvements

* We improved the performance when processing test results.
* The **Error Log** tab now shows the exact date and time when a test case was started and when it finished with execution.

### Fixes

* In some cases, the automatic wait did not work correctly for Mozilla Firefox. This is now fixed.
* We fixed an issue where the **Test Runs** page did not load.
