---
title: "2.14"
parent: "ats-2"
---


## 2.14.1

**Release date: September 18th 2019**

### Fixes

* We fixed an issue where clicking an item in the sidebar menu did not work as expected when the menu item did not have an icon.


## 2.14

**Release date: September 17th 2019**

### Improvements

* You can now customize the starting page per app. You can choose this to be the **Dashboard**, **Test cases** or **Test runs**.
![Project preferences gif](https://github.com/MansystemsCorp/ATS-Documentation/raw/master/ats-public-documentation/releasenotes/ats/projectpreferences.gif)

* Due to popular request we have simplified the usage of XPath as a way to find elements. The function **Find/Assert Element by XPath** is now available under the **Web** category.

### Fixes

* We fixed an issue where clicking an item in the sidebar menu did not work as expected when the menu was collapsed.
* Due to a bug in the firefox web driver clicking on a datagrid row did not work correctly for Firefox. We have implemented a workaround for this until the issue is addressed by Firefox.
