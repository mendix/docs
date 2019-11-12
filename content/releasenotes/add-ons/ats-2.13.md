---
title: "2.13"
parent: "ats-2"
---

## 2.13.2

**Release date: August 4st 2019**

## Mendix 8 compatibility

Apps built with Mendix version 8 can now be tested using ATS.

### Fixes

* Since the update to Selenium v3.14 the click coordinates behaviour was changed to refer from the center of the web element instead of the top-left corner. Unlike Selenium we here at ATS like to keep the behaviour of our functions consistent between upgrades, therefore we implemented an offset to make sure that *Click Coordinates* works with respect to the top-left corner. (Ticket 8752)
* We fixed an issue introduced in 2.13 were error logs were missing for data driven test cases. (Ticket 8760)
* We fixed a minor issue where the warning tooltip would show the same text multiple times.


## 2.13.1

**Release date: August 1st 2019**

### Fixes

* We dixed an issue where test suites within test suites would not finish properly.
* We fixed an issue where click coordinates did not work properly if elements were outisde of the viewport.

## 2.13

**Release date: July 31th 2019**

### Upgraded Selenium from version 3.8 to version 3.141.59

This lets ATS run testx on the latest browser versions which gives improvements in both speed and stability.  
If you are using Browserstack or Saucelabs ATS will automatically use the new version and you do not have to do anything.  
If you use another selenium hub we highly recommend to update it to use selenium version 3.141.59 as the current version will no longer be supported. You can the download selenium version 3.141.59 from the [official website](https://www.seleniumhq.org/download/).


### Improvements

* We improved the performance when processing test results
* The error log tab now shows the exact date and time when a test case is started and when it has finished with execution.


### Fixes

* In some cases the automatic wait did not work correctly for Firefox. This is now fixed.
* We fixed an issue where the Test Runs page would not load.
