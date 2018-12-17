---
title: "Platform SDK"
category: "SDKs"
---

These are the [Platform SDK](/apidocs-mxsdk/mxsdk/) release notes, including all minor versions and patches.

## 4.1.0

**Release date: December 17th, 2018**

* We introduced `PlatformSdkClient.deleteApp()` that allows users to delete an app from the Mendix platform.
* We made the `loadAsPromise()` API compatible with Model SDK 4.18.0.
* The Platform SDK now requires an ES6 environment to run.
* We upgraded the dependencies.
* We upgraded the typings to TypeScript 3.

## 4.0.0

* The minimum Model SDK dependency has been set to 4.0.0.
* We fixed the breaking changes caused by the upgrade to Model SDK 4.0.0.
* The parameter `revision` is now optional for `createOnlineWorkingCopy`.

## 3.0.2

* Minimum Model SDK dependency set to 3.3.0
* We upgraded TypeScript dependency to version 2.2
* We added optional `templateUUID` parameter to the createNewApp function

## 2.0.0

* The only change in this release is a dependency on Mendix Model SDK 2.0.0. The major version number change is because there is a breaking API change in the Model SDK 2.0.0.

## 1.0.2

*   Minimum Model SDK dependency has been set to 1.0.2.
*   We now rely on Model SDK default Model API endpoint instead of setting it explicitly.

## 1.0.1

*   We upgraded a peer dependency on Mendix Model SDK to 1.0.0 so 1.0.1 and later are supported.
