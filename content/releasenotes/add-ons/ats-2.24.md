---
title: "2.24"
parent: "ats-2"
---

## 2.24

**Release date: April 8th, 2021**

### Mendix 9 support

With this release ATS officially supports testing apps that are built with Mendix 9. This includes both recording test steps and executing tests.

### Fixes

* We added a confirmation dialog when extracting steps into a reusable action. This is to prevent accidentally extracting an action.
* We fixed a bug where ATSelenium was not available as a selenium provider for newly onboarded apps.
* Due to a bug values in test steps were not shown correctly if they included special html characters. This has been fixed.
* We fixed a bug where the auto-suggestions for boolean, any, and enumeration fields did not suggest all possible constant values.
* Due to a bug values did not accept more than 500 characters. This has now been fixed. CP#13883
* We fixed a bug where setting the value for a test steps based on an input parameter in a custom action caused an error to be thrown. CP#13922
