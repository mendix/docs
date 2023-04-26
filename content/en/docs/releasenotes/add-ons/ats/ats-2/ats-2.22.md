---
title: "2.22"
url: /releasenotes/add-ons/ats-2.22/
weight: 78
---

## 2.22.0

**Release date: January 19th, 2021**

### Reworked Value Entry Widget

Due to increased feedback from users, we have overhauled the widget used to enter test step values. Here are the main changes:

* Major speed improvements – instead of checking for values every time, the widget now caches the possible values leading to a more fluent experience.  
* Literal values are editable – when the selected value is a literal string (for example, `button1`), then clicking to edit the value keeps this literal value so it can easily be edited in place (which means that changing `button1` to `button2` is much easier compared to before, when the entire string had to be retyped).
* Pressing <kbd>Enter</kbd> saves the currently selected value – it is no longer necessary to manually click the recommended value, as pressing <kbd>Enter</kbd> now automatically selects it.

We hope you enjoy these improvements and that they help you speed up your work with ATS.

### More Warnings for Fewer Errors

Test cases in ATS are dynamic with values that come from parameters, datasets, and previous test steps. In this release, we added checks for all of these to ensure that when you delete a test step, for example, its output (meaning, its return value) is not used in subsequent steps. If the value is used, a warning is shown that allows you to cancel the operation. The same applies when removing or deleting datasets and the parameters of a custom action. Disabling test steps is also covered by this check. 

### Improvements

* ATS now adds new icons to indicate if a step is a custom action and/or if the step has a precondition. The icons are visible when editing a test case or action. Also, the **Open** button is no longer shown for test steps that cannot be opened.
* We have made some architecture changes that should improve performance when editing actions, test cases, and test suites.
* ATS now clearly separates the input from output parameters when editing a test step. The output parameter type is also shown and the confusing **Required/optional** label has been changed to **Possibly empty** for optional output values.
* When selecting a value for a test step that references an output value of another step, ATS now shows if that step is disabled. The output values for disabled test steps are always `empty`.

### Fixes

* We fixed a bug where copying a disabled test step resulted in an enabled test step.
