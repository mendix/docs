---
title: "Object Types in ATS"
url: /appstore/partner-solutions/ats/rg-one-object-types-in-the-ats/
weight: 1
---

## Introduction

In ATS, a test can consist of test cases, test suites and actions. There are also folders in the *Repository* to order objects.

## Test Case

Test cases are being built up by actions and are designed to test one specific requirement of your app. Since actions are Mendix agnostic, you can use a working test case on different Mendix versions of your app – given you did not add any changes to the app, of course. Your test cases are therefore reusable, reducing the regression test effort significantly. Test cases can be completed by ATS (actions can’t).

Test cases are built by utilizing a set of predefined actions, allowing to easily create and manage software test cases.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-object-types-in-the-ats/21168176.png" alt="A test case in the ATS repository" class="no-border" >}}

To create a new test case go to the ATS *Repository* page and click the *Add Test* button.

## Actions

An action describes a clearly defined set of steps in a test case. Actions exist on different abstraction layers or levels, whereas the highest abstraction layer (which is very close to terms that are easily understandable by end-users, such as “Click Button” or “Confirm Dialog”) will usually be composed by lower level actions. The deeper you step down towards the lower level actions (getting closer to the “metal”), it will get more and more technical. But that’s not a problem: as a test case designer, you do not need to care about the underlying technical actions – you will just use the high level ones that are available out of the box.

## Test Suite

Test suites are basically lists that can contain other test suites as well as test cases. You can even mix test suites and test cases within the same test suite. Test suites are very handy to organize your test cases contextually and let them run in sequence. If one element of test suite fails, the test suite will continue to run the following elements. The failed test case will be marked as such in the *Reporting*. You can schedule test suites in the same way as you can schedule test cases. Please note that you need to respect the order of test suite elements, since those elements will be completed in strict sequence and thus need to fit together logically.
