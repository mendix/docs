---
title: "2.19"
url: /releasenotes/add-ons/ats-2.19/
weight: 81
---

## 2.19.0

**Release date: June 9th 2020**

### License Improvements

* In the last thirty days before a license expires, a message will now appear in the **My Apps** screen.
* After a license expires, the app will now continue to be visible in the **My Apps** screen with a message saying **License expired**. At this point, it will not be possible to open the app or run any tests. However, all data is still kept for some time and will be available again if you decide to extend the license.
* Testers without any licensed apps were up to now not allowed to use ATS. From now on, if a tester had a license for an app in the past, they will be allowed to visit ATS and see a list of apps that were licensed.
* In total, we have tried to make the expiry of a license more transparent and improve the user experience around it.

### Fixes

* We fixed a bug where it was not possible to log in to ATS without clearing browser cookies.
