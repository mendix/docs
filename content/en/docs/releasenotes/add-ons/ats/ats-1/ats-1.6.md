---
title: "1.6"
url: /releasenotes/add-ons/ats-1.6/
weight: 99
---

## 1.6.0

***Date: August 29, 2016***

### Data-Driven Testing

ATS 1.6 is equipped with a highly demanded feature, namely data-driven testing. It is now possible to outsource test data from test cases and manage both separately. There is a new tab in the repository to define datasets and create records. You can import existing data from Excel sheets or export all data for easier maintenance.

The apparent benefit of this is the improved maintenance because test logic and data can now be clearly separated. Moreover, you can remove redundancy and re-use the same test data for multiple test cases.

The most beneficial use however is to cover multiple test scenarios with a single test case. A test case runs once for every record in a connected dataset. By putting all scenario’s inputs and outputs into a record the same test case can be reused for similar scenarios.

Check the documentation on how to [create/maintain test data](/addons/ats-addon/rg-one-data-management/#test-data) and [use it within a test case](/addons/ats-addon/rg-one-data-driven-tests/).

### Other Fixes

*   Click Widget action now doesn’t try to click invisible widgets
*   Recorder now also records when there is no mxname class on the lowest element
*   Recorder now never returns the _NO_UNIQUE_PATH_ message if there is any possible unique combination of mxnames to identify the widget
*   The actions _Get Value_, _Assert Value_ and _Find Widget_ (with _Value_ parameter set) now also recognize all text widgets
*   Improved layout and usability on import dialog and overview page
*   Several theme fixes

### Deprecations

*   The _Click Item/Row_ action has been deprecated in favor of the generic _Click Widget_ action. To click a certain listview/templategrid/datagrid item/row you simply use the index classes (index-0 for the first, index-1 for the second item/row etc.).

### Notes

*   The data-driven testing feature lead to a change in the file format for exported repository items (test cases/suites, actions, folders, enumerations). As a consequence exports from 1.6 cannot be imported on older releases.
