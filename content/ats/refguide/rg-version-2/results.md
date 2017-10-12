---
title: "Results"
parent: "rg-version-2"
---

## Results

Under **Results**, you find all running and executed tests from your app. The tests are sorted based on the finishing date.

![](attachments/results/test-runs.png)

The first column shows the status or the result of a test. The following table explains all the different icons:

| Icon | Meaning |
| --- | --- |
|![](attachments/icons/queued.png) | Queued. The test is waiting for a free running slot on the selenium hub. |
| ![](attachments/icons/running.gif)| Running. The test is currently running. |
| ![](attachments/icons/passed-icon.png)| Passed. The test has passed. |
| ![](attachments/icons/failed-icon.png)| Failed. The test has failed. |
| ![](attachments/icons/canceled-icon.png)| Canceled. The test was canceled by an user. |
| ![](attachments/icons/skipped-icon.png)| Skipped. The test was skipped. This happens, if a test step has not met the set precondition. |

The second column shows the type of the test.

| Icon                                     | Meaning    |
| ---------------------------------------- | ---------- |
| ![Test Case](attachments/project/test-case-icon.png) | Test Case  |
| ![Test Suite](attachments/project/test-suite-icon.png) | Test Suite |
| ![Datadriven Test Case](attachments/project/ddt-icon.png)| Datadriven Test Case |

The duration column is formatted as followed:

`HH:MM:SS`

You can search most recent tests by:

* Result
* Name
* Browser
* After date
* Before date
* Run by

## Result log

When you click your test case the **result log** opens. The **result log** shows detailed information about the results of a test. It contains the results of all test steps, the run configuration, and if a step failed, screenshots of that step. The results are updated every time, a step finished its execution.

If the test was not successful, you can check the error log, for more information.

### Test steps

Under **Test steps** you find the result, start time and the duration of every step of your test.

You drill down deeper into the log by clicking the name of the test step. You can always go back to a parent step, by clicking its name in the breadcrumbs.

![result-log-breadcrumbs](attachments/results/result-log-breadcrumbs.png)

### Actions

On the top right you find the **Edit** and **run** buttons:

* Edit opens the corresponding test case/test suite.
* Run opens the Job Configuration page, where you edit the run configuration and rerun the test.

### Run Configuration

The **Run Configuration** shows the configuration that the test was executed with. It shows the name of the environment, the selenium hub and the icon of the browser.

![result-log-run-config](attachments/results/result-log-run-config.png)

### Screenshots

All screenshots ATS takes during the test run are available under **Screenshots**. Screenshots are only taken, if a test step fails.

![result-log-screenshots](attachments/results/result-log-screenshots.png)

### Error log

The **Error log** shows detailed information about a failed test step.

![result-log-error-log](attachments/results/result-log-error-log.png)
