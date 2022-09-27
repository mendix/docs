---
title: "2.24"
url: /releasenotes/add-ons/ats-2.24/
weight: 76
---

## 2.24.0

**Release date: April 8th, 2021**

### Mendix 9 Support

With this release, ATS officially supports testing apps that are built with Mendix 9. This includes both recording test steps and executing tests.

### Improvements

* We added a confirmation dialog box when extracting steps into a reusable action. This is to prevent accidentally extracting an action.

### Fixes

* We fixed a bug where values did not accept more than 500 characters. (CP13883)
* We fixed a bug where setting the value for test steps based on an input parameter in a custom action caused an error to be thrown. (CP13922)
* We fixed a bug where ATSelenium was not available as a Selenium provider for newly onboarded apps.
* We fixed a bug where values in test steps were not shown correctly if they included special HTML characters.
* We fixed a bug where auto-suggestions for Boolean, any, and enumeration fields did not suggest all possible constant values.
