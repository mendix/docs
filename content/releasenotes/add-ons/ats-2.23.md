---
title: "2.23"
parent: "ats-2"
---

## 2.23


**Release date: March 2nd, 2021**

### Dark theme support

In the ATS team, we often have fierce debates about light vs dark themes. Luckily, with this new feature, you also have the option to choose for yourself what theme you prefer.

You can change your theme by clicking on your profile image and selecting one of the following options:
- system (default) - match the theme to your operating system preference
- dark - use a dark theme (NEW!)
- light - use a light theme (this is the standard theme that we have used since ATS v2)

### Item locking

As a web-based tool ATS has many advantages. For one there is no need to install it. However, this also comes with some challenges, one of which is that there is no local repository system.
Any changes that are done are done directly to the project-wide repository. So if two testers are working on a test case, strange things can happen sometimes, like test steps being out of order.
To prevent such incidents we no longer allow two people to edit a test case simultaneously.
If you try to open a test case that is currently being edited by someone else then ATS will stop you and show a clear message. The same goes for test suites and custom actions.

### Improvements

* The extract action dialog has been renamed to "Set details" to avoid confusion.
* All functions that return a web element have had that output parameter renamed to be more consistent. ATS does not distinguish between different types of web elements and we hope with the new naming that is made clearer.
* We fixed several styling issues notably, support for responsive mode. On smaller screns the side menu will now collapse into a slide over that can be toggled with a hamburger menu. The primary use for this is the recording screen, where you might want to have the recording and the app that you are recording side by side.
* The import and new buttons on the repository have now been split into two separate buttons instead of a single action button.

### Fixes

* We fixed a bug where a scheduled test would not start without giving any error message.
* Changes to a data set name and description were sometimes not saved correctly. This would also cause any linked test cases to fail. Both have now been fixed.
* Due to a bug a job that failed during the initial stage would not show any logs. This has now been fixed. 
* The value dropdown would close intermittently. We have made changes to the widget to avoid this as much as possible.
* We fixed a bug where importing a test case where a step is using the output value of a previous step which is a custom action would fail.
* We fixed an issue where the logoff button would not work and instead show some json. It now works correctly by first logging out the user of their current ATS session then redirecting them to sprintr.
* The link to the documentation and the desktop recorder are both fixed.
