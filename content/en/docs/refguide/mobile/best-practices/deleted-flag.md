---
title: "Deleted Flag"
url: /refguide/mobile/best-practices/deleted-flag
weight: 10
description: "This pattern lets you remove deleted objects from the offline database via Sync-to-device."
---

## Introduction

This pattern lets you remove deleted objects from the offline database via the [Synchronize to Device](/refguide/synchronize-to-device/) action.

## Challenge

Using **Synchronize to device from a Microflow** allows for fine-grained control over which objects are synchronized. However, it cannot be used to synchronize deleted objects to the offline database. This means that if an object is deleted on the server, it will remain on the client unless a full synchronization is run.

## Solution

The deleted flag overcomes this limitation by introducing a new Boolean attribute (the deleted flag). This attribute is used to flag deleted objects instead of actually deleting them. This is achieved by configuring access rules for all user roles to prevent access to all flagged objects. This lets you flag objects for deletion on the server and synchronize these objects to the offline database, removing them in the process.

## Implementation

To implement this pattern, do the following:

1. Set the synchronization mode of the target entity to **Nothing (preserve data)**.
1. Add a Boolean attribute to the target entity (for example, **IsDeleted**) to flag objects that have been deleted and set the default value to *false*.
1. Replace any logic that deletes objects of the target entity with a microflow that sets this attribute to *true.*
1. Add the following XPath constraint to all access rules of the target entity to limit access to objects that are not flagged as deleted: `[not(IsDeleted)]`.

## Recommendations

To improve your apps further, consult the following recommendations:

* Add an index for the created attribute to optimize database performance.
* Deny read or write access to the created attribute for all roles.
* Objects using this pattern are no longer deleted from the server database, which can lead to performance and storage problems. Cleaning up flagged objects after a set time can overcome this, but you must ensure that all clients are synchronized before cleaning up. Not doing so can lead to synchronization errors.

## Read More

* To increase the clarity, organization, and documentation of your apps, see [Mendix Best Practices for Development
](/refguide/dev-best-practices/)
