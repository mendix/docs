---
title: "2.14"
url: /releasenotes/add-ons/ats-2.14/
weight: 86
---

## 2.14.1

**Release date: September 18th, 2019**

### Fixes

* We fixed an issue where clicking an item in the sidebar menu did not work as expected when the menu item did not have an icon.

## 2.14.0

**Release date: September 17th, 2019**

### Improvements

* You can now customize the starting page per app. You can choose this to be the **Dashboard**, **Test cases**, or **Test runs**.
* By popular request, we simplified the usage of XPath as a way to find elements. The function `Find/Assert Element by XPath` is now available under the **Web** category.

### Fixes

* We fixed an issue where clicking an item in the sidebar menu did not work as expected when the menu was collapsed.
* Due to a bug in the Mozilla Firefox web driver, clicking a data grid row did not work correctly for this browser. We have implemented a workaround for this until the issue is addressed by Mozilla Firefox.
