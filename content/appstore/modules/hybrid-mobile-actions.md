---
title: "Hybrid Mobile Actions"
category: "Modules"
description: "Describes the configuration and usage of the Hybrid Mobile Actions module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "platform support", "hybrid mobile", "hybrid mobile actions",  "mobile"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Hybrid Mobile Actions](https://appstore.home.mendix.com/link/app/112063/) module contains the following nanoflow actions that can be used for hybrid mobile applications:

| Category            | Action                                |
| :------------------ | :------------------------------------ |
| Authentication      | Is biometric authentication supported |
|                     | Biometric authentication              |
| Calendar            | Open calendar                         |
|                     | Save calendar event                   |
| Camera              | Take picture                          |
|                     | Scan barcode                          |
| Clipboard           | Get clipboard content                 |
|                     | Set clipboard content                 |
| Contacts            | Save contact                          |
|                     | Search contacts                       |
|                     | Select contact                        |
| Mobile              | Get device info                       |
|                     | Vibrate                               |
| Network             | Is connected                          |
|                     | Is cellular connection                |
|                     | Is Wi-Fi connection                   |

## 2 Dependencies

The actions above are dependent on Cordova phonegap plugins. Most dependencies are already provided in the standard template. When building your [hybrid mobile app](/refguide/getting-the-mendix-app), make sure you add and enable the dependencies by first enabling in **Permissions** by selecting the following:

* Calendar
* Camera
* Photo Library
* Contacts

Next, add the following snippet to the custom Phonegap/Cordova configuration:

```
<plugin name="cordova-plugin-android-fingerprint-auth" source="npm" spec="1.5.0" /> <plugin name="cordova-plugin-touch-id" source="npm" spec="3.4.0" /> <plugin name="cordova-clipboard" source="npm" spec="1.3.0" /> <plugin name="cordova-plugin-media" source="npm" spec="5.0.2" />
```

Note that the standard *config.xml* template already includes `cordova-plugin-contacts`, but due to a permission structure change for Android 9 that causes a crash on saving, it has to be replaced by the following snippet:

```
<plugin name="cordova-plugin-contacts" spec="https://github.com/mendixlabs/cordova-plugin-contacts.git#3.0.2" />
```

{{% alert type="info" %}}
Please note that the above plugins are not available in the in standard [Mendix](/refguide/getting-the-mendix-app) mobile app and can only be tested with a custom built mobile app.
{{% /alert %}}

These configurations can also be set when building a [custom PhoneGap package](/howto/mobile/customizing-phonegap-build-packages).
