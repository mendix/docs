---
title: "Offline Troubleshooting"
url: /refguide/mobile/using-mobile-capabilities/offlinefirst-data/troubleshooting/
parent: /refguide/mobile/using-mobile-capabilities/offlinefirst-data/
weight: 50
description: "Describes how to troubleshoot synchronization issues and optimize app performance."
tags: ["offline", "offline-first"]
---

## Synchronization
- Why does a Mendix native app needs to synchronize data when it is started for the first time?
- Why is my synchronization so slow?
- How can I improve the speed of my synchronization?
    - Limit data synchronized. Link to the Synchronization customization docs.
    - Optimize the images / files synchronized to the device. Do not store images with raw resolutions.
    - Synchronize the part of the data on lazily whenever needed. (link to the related pattern doc)
- I get a “Synchronization failed” message, where should I look?
- What happens if I synchronize an object that is deleted on the server?
- Which order are objects with changes committed to the runtime?
- Will a commit error of one object fail the whole sync?
- What happens if there is a connection error during sync? Can I retry?
- What happens if a before/after commit microflow fails during sync?
- How many network requests are made during sync? and for what?
- I created a new object in an offline-first app, but did not commit. Can I synchronize this object?
- Can I synchronize non-persistable objects?
- I have synchronized an object using Synchronize action with “certain objects” mode. Then the object is removed from the device. Why?
    - Either the synchronization of the object has failed (it was new) (link to the sync failures), or it is no longer accessible to the current user after sync. This can happen if there is an access rule.

## Over-the-Air Updates
- When a OTA update is pushed to a native app, the local data is kept? And depending on what changed a full sync might be performed?

## Offline-Client
- I have changed a constant’s value which is used in a nanoflow and restarted the runtime. Will the users receive the new value immediately?
- I have changed the the roles of a user. Will this be immediately reflected in the user’s app?
    - On the runtime - yes (sync, mf calls behavior). On the device - no (pages, nf behavior), User’s session need to expire first.
- I have changed a nanoflow in my app and redeployed to the cloud. Will the apps on user’s devices automatically update?
    - No. You need to do OTA to complete to update. (Give link to OTA resources)
    
## Session management
- I want to automatically logout a user after certain amount of inactivity. How can I do that?
    - We recommend to model this out by yourself and also decide to really logout the user (losing unsynced data) or relogin the current user instead. (Link to the pattern docs). We don’t recommend using a short authentication token duration for that.
