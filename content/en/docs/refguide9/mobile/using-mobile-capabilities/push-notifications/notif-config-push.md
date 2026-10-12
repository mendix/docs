---
title: "Part 4: Configure Push Notifications"
linktitle: "4. Configure Push Notifications"
url: /refguide9/mobile/using-mobile-capabilities/push-notifications/notif-config-push/
weight: 50
description: Tutorial for configuring push notifications.
aliases:
    - /howto9/mobile/notif-config-push/
---

## Introduction

This section teaches you how to configure the runtime for using push notifications in native apps. 

### Configuring Your Notifications

If you have completed [Add Module Dependencies](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-add-module-depends/) and [Implement the Push Notifications Module](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-implement-module/) per your use case, do the following to configure your push notifications:

1. Open your app in Mendix Studio Pro.
1. Log in as the Administrator user you [previously designated](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-implement-module/#config).
1. Navigate to the **Administration** page.

The first time you open this page it will present you with a wizard to set up the Firebase configuration. If you have not set up Firebase yet, see [Set Up the Google Firebase Cloud Messaging Server](/refguide9/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/). 

{{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/notif-config-push/push-setup-wizard.png" alt="test entity"   width="400"  class="no-border" >}}

When selecting a platform to support, the wizard will ask for the Google Firebase project ID and service account private key. Upload the private key file here.

| **File**    | **Source**   | **Usage**      |
| -------- | -------- | ------- |
| **{project_id}-firebase-adminsdk-{identifier}.json** | Google Firebase | Private key for the Firebase service account, used in runtime configuration. |  

Now you completed the initial setup wizard, you can move on the next section to set up push notifications in your native mobile app or to part 6 do so in a progressive web app.
