---
title: "Platform SDK"
url: /releasenotes/sdk/platform-sdk/
weight: 2
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These are the [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/) release notes, including all minor versions and patches.

## 5.1.3

**Release date: May 13, 2024**

* Change the default repository type from `svn` to `git`.
* Deprecate `templateDownloadURL` field in the app creation options.
* Remove unnecessary dependency `@types/eventsource`.

## 5.1.0

**Release date: March 11, 2022**

* It is no longer mandatory to include the `branches/` prefix for SVN branch names that are not `trunk`.

## 5.0.0

**Release date: February 23, 2022**

* With this new version, you can use new public APIs and support apps with a Git repository.

## 4.1.1

**Release date: June 11, 2019**

* We fixed the incorrect return type for the `createNewApp` method. We downgraded the `rest` dependency to 1.3.2 to always return a `When.js` promise (instead of a regular `ES6` promise).

## 4.1.0

**Release date: December 17, 2018**

* We introduced `PlatformSdkClient.deleteApp()`, which allows users to delete an app from the Mendix Platform.
* We made `loadAsPromise()` compatible with the [Model SDK version 4.18.0](/releasenotes/sdk/model-sdk-4/#418).
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

* Minimum Model SDK dependency has been set to 1.0.2.
* We now rely on Model SDK default Model API endpoint instead of setting it explicitly.

## 1.0.1

* We upgraded a peer dependency on Mendix Model SDK to 1.0.0 so 1.0.1 and later are supported.
