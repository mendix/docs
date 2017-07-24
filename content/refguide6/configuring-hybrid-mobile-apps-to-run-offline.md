---
title: "Configuring Hybrid Mobile Apps To Run Offline"
category: "Mobile"
---


[Hybrid apps](developing-hybrid-mobile-apps) are built in either connected or [offline](offline) mode. This allows you to maintain two mobile device profiles; one for users that are always online and one for users with intermittent connectivity. The Developer Portal builds connected apps by default. Configuring a hybrid app to run in offline-enabled mode requires minor manual adjustments. 

To build an offline version of your app you will need to customize the build package and send it to Phonegap Build yourself. Follow the steps to build an app package for either iOS or Android in [Customizing PhoneGap Build packages](customizing-phonegap-build-packages). Selecting Windows Phone will disable offline functionality as offline is not supported on this platform. Download the build package and unzip it. In the build package, locate the file `index.html` and open it in an editor. Find the line containing

```js
var enableOffline = false;
```

and change it to

```js
var enableOffline = true;
```

Now, zip the files again into a build package and upload it to PhoneGap Build.
