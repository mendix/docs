---
title: "Test Case Dependencies"
url: /appstore/partner-solutions/ats/bp-two-test-case-dependencies/
---

## Introduction

This document describes what a test case dependency is and explains the best way of handling test case dependencies within ATS.

## What Is a Test Case Dependency?

A test case dependency exists in a situation where the behavior or outcome of one test case depends on the preceding execution or result of another test case.

Here are two examples to explain the definition. 

### Example 1

You have a test case that creates a new expense in a company expenses app. It creates the new expense using a random number in the **Amount** field and a random string for the **Description** field. 

These are the fields in the app:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/amount-and-description-field.png" class="no-border" >}}

This is the **TC.01 - Create New Expense** screen:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/random-number-and-random-string.png" class="no-border" >}}

The test case creates a new expense with values that you don't know upfront. ATS does not allow for the sharing of values between test cases, meaning, it does not allow for any dependencies between test cases. 

You have another test case that deletes an expense using the description of that expense. 

This is the **TC.02 - Delete Expense** screen:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/delete-expense-by-datagrid-row.png" class="no-border" >}}

As you see, TC.02 - Delete Expense cannot delete the expense from TC.01 - Create New Expense, because the description is a randomly generated value.

### Example 2

To get to a functionality, you have to walk through four different pages. This is also a test case dependency, caused by the GUI. 

## Why You Must Not Use Test Case Dependencies {#why}

This chapter explains why you must not use dependencies between test cases by defining the impact on your tests. The criteria for a good test case is used. The first example of the first chapter is used, in which there are the TC.01 - Create New Expense and TC.02 - Delete Expense test cases, but TC.02 can only be run after TC.01.

| Aspect       | Consequence of Having Dependencies |
| :----------- | :--------------------------------- |
| Availability | <ul><li>If TC.01 is broken or in maintenance, TC.02 is not available.</li><li>You also have to run TC.01 first.</li></ul> |
| Speed        | <ul><li>TC.02 can only run after TC.01 has finished.</li><li>TC.01 and TC.02 cannot run parallel.</li></ul> |
| Reliability  | <ul><li>If TC.01 is unreliable, then TC.02 is also unreliable.</li><li>If you change TC.01, this may affect TC.02.</li></ul> |
| Precision, <br> Understandability, <br> Analyzability, <br> Lack of ambiguity | <ul><li>If TC.02 fails, you must test TC.01 and TC.02 for bugs.</li><li>If TC.02 fails, the problem may be in TC.01 or TC.02.</li></ul> |

As you see, this does not line up with testing standards; therefore, you must not use it. For this same reason, ATS does not allow data sharing between test cases. In the next section, different options are explained.

## Handling Test Case Dependencies

### Course of Action

The previous section explains the reasons for not using test case dependencies. You must only accept a dependency if you have a very good reason. When it comes to test case dependencies, follow these steps:

1. Avoid them.
2. Get rid of them.
3. Minimize them.
4. Manage them.

### Dealing with Test Case Dependencies

Assuming you want to test a function that depends on a previous execution (like in the TC.01 and TC.02 example), you have three options. The first two options also cover data dependency. The TC.01 and TC.02 example is used to explain the options:

1. Option 1 is the preferred choice.
2. Option 2 only applies if you have a very long setup routine and the scenarios to test are simple.
3. Only use option 3 if 1 and 2 are not possible.

The options are described below.

#### Option 1 – Separate Test Cases Without Direct Dependency

Create two separate test cases (for example, one test case that creates a new expense, and another test case that deletes a new expense).

First, create the test case that creates the new expense: TC.01 - Create New Expense. Now combine these steps and use that action as a setup step in the TC.02 - Delete Expense test case. 

This is TC.01 - Create New Expense as a setup step:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/delete-expense-create-new-expense-setup-step.png" class="no-border" >}}

This table presents the conclusions:

| Positive       | Negative |
| :------------ | :--------------------------------- |
| No dependence between the test cases, they can run in any order and parallel. | Functional dependency, if you cannot create an expense you cannot delete it. |
| Use of combined actions for better maintainability. | Execution time of TC.02 is raised, it has to perform extra steps. |
| When the functionality of TC.01 is broken, the result of TC.02 is not Executed. | |

This table presents aspects against the good test case criteria:

| Aspect       | Result                             |
| :----------- | :--------------------------------- |
| Availability | <ul><li>If TC.01 is broken or in maintenance, TC.02 is still available.</li><li>You don't have to run TC.01 first.</li></ul> |
| Speed        | <ul><li>TC.02 can run at the same time as TC.01 and also parallel.</li></ul> |
| Reliability  | <ul><li>If TC.01 is unreliable, it has no effect on TC.02.</li><li>If you change TC.01, this does not affect TC.02.</li></ul> |
| Precision, <br> Understandability, <br> Analyzability, <br> Lack of ambiguity | <ul><li>If TC.02 fails, you don't have to check TC.01.</li><li>If TC.02 fails, the problem can only be in TC.02.</li></ul> |

Option 1 is the best option.

#### Option 2 – Multiple Scenarios in One Test Case

This option only applies if you have a very long setup routine and the scenarios are very short. For example, you have a scenario for creating a new expense, and you have a scenario for deleting an expense. You can combine these scenarios into one test case.

These are the two scenarios:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/multiple-scenarios-create-new-expense-and-delete-expense.png" class="no-border" >}}

This table presents aspects against the good test case criteria:

| Aspect       | Result                             |
| :----------- | :--------------------------------- |
| Availability | <ul><li>There is no dependency to other test cases. But if one of the scenarios within the test case fails, the other scenarios will not be run.</li></ul> |
| Speed        | <ul><li>No parallelization is possible, because there is only one test case. But, you save the time of having the same setup procedure in multiple test cases.</li></ul> |
| Reliability  | <ul><li>The more scenarios you put into a single test case, the less reliable your outcomes will be, because there can be side-effects between the scenarios.</li></ul> |
| Precision, <br> Understandability, <br> Analyzability, <br> Lack of ambiguity | <ul><li>If the test case fails, you always need to check the test log to find out the scenario in which the cause of this failure is located.</li></ul> |

#### Option 3 – Separate Test Cases with Dependency

This is the last option, and you must only use this option if option 1 and option 2 do not work. This option does not work for data sharing between test cases. 

Create two separate test cases and combine them in a test suite. Make sure there is no data dependency.

This is TC.01 - Create New Expense:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/tc.01-create-new-expense.png" class="no-border" >}}

This is TC.02 - Delete Expense:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/tc.02-delete-expense.png" class="no-border" >}}

This is TS.01 - Create New Expense and Delete Expense:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/ts.01-create-new-expense-and-Delete-expense.png" class="no-border" >}}

Because TC.02 depends on the result of TC.01, ATS must execute TC.01 first. To ensure ATS does so, set the execution type to **Sequential**. 

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/ts.01-create-new-expense-and-Delete-expense-type-sequential.png" class="no-border" >}}

ATS will then execute the contents of the test suite based on the order they are in.

The consequences of option 3 are the same as those described in [2 Why You Must Not Use Test Case Dependencies](#why).
