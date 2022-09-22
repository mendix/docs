---
title: "2.16"
url: /releasenotes/add-ons/ats-2.16/
weight: 84
---

## 2.16.0

**Release date: October 16th, 2019**

### Mendix 8.2.2 Compatibility

Apps built with [Mendix 8.2.2](/releasenotes/studio-pro/8.2/#822) can now be tested using ATS.

### Fixes

* Due to a bug, clicking on the navigation menu was not always recorded, or it was recorded with a missing caption. This has been fixed.
* From Mendix 8.0, buttons rendered as links were not recorded properly. This has been fixed.
* When clicking menu items, navigation items, and radio buttons, there was a problem if the caption contained characters such as `"#$%&'()*+,.\/`. These characters have a special meaning in the style selector language that ATS uses. We fixed this by escaping the special characters.
* Due to a bug, a disabled step in a custom action was still executed when the action was run. This has been fixed.
