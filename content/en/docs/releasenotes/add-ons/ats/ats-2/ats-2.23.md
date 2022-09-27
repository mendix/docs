---
title: "2.23"
url: /releasenotes/add-ons/ats-2.23/
weight: 77
---

## 2.23.0

**Release date: March 2nd, 2021**

### Dark Theme Support

In the ATS team, we often have fierce debates about light vs dark themes. Luckily, with this new feature, you also have the option to choose for yourself what theme you prefer.

You can change your theme by clicking your profile image and selecting one of the following options:

* **System** (default) – match the theme to your operating system preference
* **Dark** – use a dark theme (NEW!)
* **Light** – use a light theme (this is the standard theme that we have used since ATS [2.0](/releasenotes/add-ons/ats-2.0/))

### Item Locking

As a web-based tool, ATS has many advantages. For one, there is no need to install ATS. However, this also comes with some challenges, one of which is that there is no local repository system. This means that changes are done directly to the project-wide repository. So, if two testers are working on a test case, strange things can happen, like test steps being out of order.

To prevent such incidents, we no longer allow two users to edit a test case simultaneously. If you try to open a test case that is currently being edited by another user, ATS will stop you and show a clear message. The same goes for test suites and custom actions.

### Improvements

* The **Extract action** dialog box has been renamed to **Set details** to avoid confusion.
* All functions that return a web element have had that output parameter renamed to be more consistent. ATS does not distinguish between different types of web elements, and we hope the new naming makes that clearer.
* We fixed several styling issues, most notably, support for responsive mode. On smaller screns, the side menu will now collapse into a slide-over that can be toggled via a hamburger menu. The primary use for this is the recording screen, where you might want to have the recording and the app that you are recording side by side.
* The **Import**/**New** buttons on the repository have now been split into two separate buttons instead of a single action button.

### Fixes

* We fixed a bug where a scheduled test did not start without giving any error message.
* Changes to a dataset name and description were sometimes not saved correctly. This also caused linked test cases to fail. Both issues have now been fixed.
* Due to a bug, a job that failed during the initial stage did not show any logs. This has been fixed. 
* The **Value** drop-down menu closed intermittently. We have made changes to the widget to avoid this as much as possible.
* We fixed a bug where importing failed for a test case that had a step using the output value of a previous step that was a custom action.
* We fixed an issue where the **Log off** button did not work and instead showed some JSON. It now works correctly by first logging the user out of their current ATS session and then redirecting them to the Mendix Developer Portal.
* The links to the documentation and the desktop recorder have both been fixed.
