---
title: "Test Suite"
url: /appstore/partner-solutions/ats/rg-two-test-suite/
---

## Introduction

A test suite is a set of test cases or other test suites. ATS uses test suites to execute a collection of test cases and/or suites in a sequence or parallel.

In ATS, you create a new test suite by clicking **New Test Suite** in the **Actions** drop-down menu in the repository. A dialog box opens where you give your test suite a name and an optional description. After you create a new test suite, the **Test Suite Details** page opens.

## Test Suite Details

In the top left corner of the **Test Suite Details** page, you find the name and the description of the test case.  To change them, click them and edit the text. ATS saves the changes automatically.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-suite/testsuite-details.png" alt="Edit Test Suite" class="no-border" >}}

With the parallel/sequential switch, you change the run behavior of the test suite. If it is set to **parallel**, ATS tries to run all the containing tests of your test suite in parallel. This is limited through the concurrency limit of your Selenium hub. With the switch set to **sequential**, the tests run in succession.

In the upper-right corner of the page, you find the **Export** and **Run** buttons:

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| Export Test Definition | Creates an XML representation of your test suite, which you can import into another app. |
| Run                    | The [run configuration page](/appstore/partner-solutions/ats/rg-two-test-run/) opens, where you edit the run configuration. If the test suite was run before, the prior configuration is copied. |

### Test Steps

Under **Test Steps**, you can find all test cases and test suites that are used in the current test suite. Add a new test case or test suite by searching for it in the **Add step** box.

For a more detailed search, use the **Test Step Setup** dialog box by clicking this button:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-suite/search-testcase-testsuite.png" class="no-border" >}}

Then search for the desired test case or test suite in your project. You can also navigate through your project and explore all the available tests in it. 

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-suite/dialog-testcase-testsuite.png" class="no-border" >}}

Add a new step above or below an existing test step by clicking **Add above** or **Add below**. The buttons appear when you hover over an existing test step.

#### Delete

To delete a test step in a test suite, click this icon on the right side of the test step:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-suite/delete-2.png" class="no-border" >}}

You can delete multiple test steps at once by marking them with the checkbox and clicking **Delete**.

#### Drag and Drop

When you hover over an existing test step, the drag-and-drop handle appears. By clicking and holding it, you can move the test step to the new position.

### Show Usages

The **Show Usages** tab gives an overview of all the test cases and test suites used in your test suite. Besides that, it also shows other test suites that the test suite is used by.

### Stories

Under **Stories**, you can add user stories to your test suite. This tab displays the connected stories, the number of test cases within each story, and the success rate of the user story.

* **Open story** – opens the linked user story
* **Unlink selected story** – removes the link between the test suite and user story
* **Link new story** – links an existing story to the test suite
