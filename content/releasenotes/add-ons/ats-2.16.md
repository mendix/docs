---
title: "2.16"
parent: "2"
---

## 2.16

**Release date: October 16th 2019**

### Mendix 8.2.2 compatibility

Apps built with Mendix version 8.2.2 can now be tested using ATS.

### Fixes

* Due to a bug click on navigation menu was not always recorder, or was recorder with missing caption. This has been fixed.
* Since Mendix 8 buttons rendered as links were no longer recorder properly. This has been fixed.
* When clicking menu and navigation items and radio buttons there was a problem if the caption contained characters such as `"#$%&'()*+,.\/`. These characters have a special meaning in the style selector language that ATS uses and interfered with it. We fixed this by escaping the special characters.
* Due to a bug a disabled step in a custom action was still executed when the action was run. This has been fixed.
