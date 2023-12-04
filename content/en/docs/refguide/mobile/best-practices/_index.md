---
title: "Best Practices for Mobile Apps"
url: /refguide/mobile/best-practices
category: Mobile
weight: 60
description: "Best practices for building mobile apps with Mendix."
tags: ["mobile", "best practices", "patterns"]
---
## 1 Introduction

Guides in this section will help you understand and apply best practices for building mobile apps with Mendix. 

### Best Practices for Offline-First Apps
* [Deleted Flag](/refguide/mobile/best-practices/deleted-flag) – Remove objects from the offline database without actually deleting the object or requiring a full synchronization.
* [Incremental Synchronization](/refguide/mobile/best-practices/incremental-synchronization) – Improve synchronization performance by only transmitting changed objects.
* [Batch Synchronization](/refguide/mobile/best-practices/batch-synchronization) – Synchronize objects in batches while reporting progress to users.
* [Compound Object](/refguide/mobile/best-practices/compound-object) – Improve performance by combining multiple objects into one before synchronizing it to the device.
* [Request Object](/refguide/mobile/best-practices/request-object) – Collect changes to your data model on the mobile device while offline and process them on your server while online.
