---
title: "2.21"
url: /releasenotes/add-ons/ats-2.21/
weight: 79
---

## 2.21.0

**Release date: December 1st, 2020**

### New Features

* In an effort to reduce the amount of user clicks, ATS now shows the **Most commonly used** functions when the search dialog box is open for a test step. Use this to quickly select a function.
* It is now possible to add comments in test cases and custom actions using the new **Comment** function. This function will be ignored during execution and only serves as a way to add more information to your tests.

### Improvements

* The ATS favicon has been updated with the ATS logo. This should make it easier to make out ATS in the browser if there are multiple tabs open.
* Test configuration no longer shows all settings by default. Only the most frequently changed settings are shown, and the rest are under a new **Advanced** toggle button.
* We have added extra caching for function meta information. This should make editing test cases a bit faster.
* The test case and action logs now show the time of execution in the same format and time zone to avoid confusion.
* It is now possible to cancel a job from a logs page. The **Run** button is now replaced with a **Cancel** button if the test case/suite is still running. There is a known issue with this canceling, where the job might continue after canceling, and this is currently under investigation.
* On the logs page, the **Run** button has been renamed to **Rerun**. The behavior of this button was also changed so that it runs the same test again with the same configuration. To run the test with a different configuration, a new button called **Configure and rerun** has been added as a drop-down menu option.
* We have refactored the recording page in an effort to improve performance, especially when recording long test cases with many steps.

### Fixes

* We fixed a bug where the recorder showed an error if too many events were recorded in a short span of time (usually caused by double/triple clicking). As a consequence, if many events are recorded in a short span of time, there might be a noticeable delay before the events appear in the recording screen. Let us know if this happens often.
* A bug where schedules with a schedule time set in the past were set to disabled without a message has been fixed. Now, a message is corectly shown.
* Due to a bug, it was not possible to download a recording from ATSelenium. This is now fixed.
* We fixed a bug where the **Get Visible Item/Row Count** function returned the wrong result for a data grid. (CP 11186)
* We investigated an issue concerning duplicate parameters in test steps. Additional checks were added to prevent this from happening in the future. (CP 11189)
* A bug that caused the **Run** button to still be active for running test cases has been fixed. (CP 11307)
