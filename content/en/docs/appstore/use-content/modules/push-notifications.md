---
title: "Push Notifications Connector"
url: /appstore/modules/push-notifications/
description: "Describes the configuration and usage of the Push Notifications module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Push Notifications Connector](https://marketplace.mendix.com/link/component/3003) module enables notifying end-users of events even when they are not actively using your app. This is a native capability provided by both Android and iOS devices and made available via the Google Cloud Messaging (GCM) and Apple Push Notifications service (APNs).

This module makes it easy for Mendix developers who want to include push notifications capability in their Mendix native and hybrid mobile apps.

For more information on adding push notifications to your apps, see the [Push Notifications](/refguide/mobile/using-mobile-capabilities/push-notifications/) guide.

## 2 Development

When using the module in your app, all dependencies are bundled when downloaded from the Marketplace. For developers who want to update and publish a newer version, there are some helpful scripts described below.

These are the development prerequisites:

* Install the [Gradle Build Tool](https://gradle.org/install/)
* For MacOS, install [Mono](https://www.mono-project.com/download/stable/)

Install the dependency *.jar* files:

```bash {linenos=false}
$ gradle prepareDeps
```

Note that all app `test/userlib` content is cleared, including the *.jar* files of the other modules. You need to re-download the following  required modules from the Marketplace:

* [Community Commons Function Library](/appstore/modules/community-commons-function-library/)
* [Encryption](/appstore/modules/encryption/)

Check that the versions are up to date for the *.jar* dependencies:

```bash {linenos=false}
$ gradle dependencyUpdate
```

Check the security for the *.jar* dependencies:

```bash {linenos=false}
$ gradle dependencyCheckAnalyze
```

Before release, update the *build.gradle*, the target version of the module, and the Push Notification Connector version:

``` groovy
PNC_VERSION = '4.0.6'
MXBUILD_VERSION = '7.23.8.58888'
```

Export the module for the Marketplace, including the dependent *userlib* content (the module will be exported to *dist/{version}/module/PushNotifications.mpk*):

```bash {linenos=false}
$ gradle extractModule
```
