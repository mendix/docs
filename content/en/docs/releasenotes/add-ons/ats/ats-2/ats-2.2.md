---
title: "2.2"
url: /releasenotes/add-ons/ats-2.2/
weight: 98
---

## 2.2.0

**Release date: November 14th, 2017**

### Terms of Use and Privacy Policy

With this release, we introduce Terms of Use and a Privacy Policy for ATS.

After your first login to this release, you'll see a pop-up window, which will ask you to read and agree to the new Terms of Use and Privacy Policy. No worries, you only have to do this once.

### Improvements

* We've improved our in-app notification mechanism. You can now close messages that you have read and don't want to see again. We want to make sure you we do not disturb when we inform you about scheduled maintenance or new release features.

### Fixes

* The dashboard shows a **Success** rate for every test case and test suite. This value was not always calculated correctly for test suites. This is now fixed.
* From the app dashboard you can drill down into the latest execution logs by using the **Show log** button. Sometimes ATS also showed this button when there was no log available. We've fixed this so that ATS only shows the button when there's an execution log to open.
* When you pasted test steps into another action or test case some details in the test steps were not visible. This issue has been resolved. Copy-and-paste now works as expected in all scenarios.
* The layout broke when you used a very long description in your test step. We've optimized the layout to cut off very long descriptions.
* When you cancelled the import of a test case or test suite, it was not possible to import it again. We fixed this.
* It was not possible to start a test suite when two test cases within the suite used the same dataset. This now works as expected.
* The **Get Value** action always returned empty if you tried to get the value from a date picker field. This is now fixed so you can also read values from date pickers.
* When cancelling a recording session, it sometimes took a few seconds before ATS returned to the previous page. This delay is now gone.
* The two actions **Assert Active Tab Caption** and **Get Active Tab Caption** had misleading names, as they work for the tab name and not the tab caption. Consequently, they're now named **Assert Active Tab Name** and **Get Active Tab Caption**.
* The **Test settings** allow you to set a **Log retention time**. This defines how long ATS keeps your execution log. We forgot to validate the input for this setting. The setting now only accepts a value between 1 and 365.
* The **refresh my apps** button in the **Can't find your app?** dialog box didn't show a progress bar for user feedback. Also, the dialog box was not closed after clicking the button. Both of these issues have been fixed.
