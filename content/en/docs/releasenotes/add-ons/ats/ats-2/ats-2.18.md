---
title: "2.18"
url: /releasenotes/add-ons/ats-2.18/
weight: 82
---

## 2.18.0

**Release date: May 14th, 2020**

### Improvements

* ATS now supports the recording and execution of clicking on containers and list views. 

### Fixes

* We fixed a bug where ATS did not record clicking a drop-down `div` converter.
* We fixed a bug where ATS did not correctly click a radio button.
* Due to a bug, cutting elements whose total length exceeded 200 characters resulted in an error. This is no longer allowed and is preceded by a warning message.
* We fixed a bug where clicking an association radio button list was not properly recorded or executed.
* We fixed a bug introduced in [2.17.1](/releasenotes/add-ons/ats-2.17/#2171) where unique names no longer included list item names.
