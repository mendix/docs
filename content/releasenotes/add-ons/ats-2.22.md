---
title: "2.21"
parent: "ats-2"
---

## 2.21

**Release date: January 19th, 2021**

### Reworked Value entry widget

Due to increased feedback from users we have overhauled the widget used to enter test step values. Here are the main changes:

* Major speed improvements. Instead of checking for values every time it now caches the possible values leading to a more fluent experience.  
* Literal values are editable. When the selected value is a literal string e.g. "button1" then clicking to edit the value, keeps this literal value so it can easily be edited in place. Thus changing "button1" to "button2" is much easier compared to before where the entire string had to be retyped.
* Pressing enter saves the currently selected value. It is no longer necessary to manually click on the recommended value, pressing enter automatically selects it.

We hope you enjoy this improvement and that it helps you speed up your work with ATS.

### More warnings for less errors

* Test cases in ATS are dynamic with values that come from parameters, datasets and previous test steps to name a few.
In this new release we added checks for all of the above to ensure that when you delete e.g. a test step its output (i.e. return value) is not used in subsequent steps.
If the value is used a warning is shown allowing you to cancel the operation. The same applies when removing or deleting datasets and parameters of custom action.
Disabling test steps is also covered by the check. 

### Improvements

* ATS now adds new icons to indicate if a step is a custom action and/or if the step has a precondition. The icons are visilbe when editing a test case or action.
Also the "Open" button is no longer shown for test steps that can not be opened.
* We have made some architecture changes that should improve performance when editing actions, test cases and test suties.
* ATS now clearly separates the input from output parameters when editing a test step.
The output parameter type is also shown and the confusing "required/optional" label has been changed to "possibly empty" for optional output values.
* When selecting a value for a test step that references an output value of another step ATS know shows if that step is disabled or not. The output values for disabled test steps are always 'empty'.

### Fixes

* We fixed a bug where copying a disabled test step would result in an enabled test step.
