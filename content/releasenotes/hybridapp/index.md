---
title: "Hybrid App"
toc-level: 1
description: "Hybrid App release notes."
---

{{% alert type="info" %}}
The known issues are described in [Hybrid App Known Issues](hybrid-app-known-issues).
{{% /alert %}}

These are the release notes for the Hybrid App.

The numbers behind each release refer to the Hybrid App Base and the Hybrid App Template package, respectively.

If you're building the app using the regular PhoneGap Build approach from within the Mendix Developer Portal, you don't need to worry about these numbers. Downloading and building a new package will set you up with the latest version.

If you're using the advanced flow, you can get the latest version of the Hybrid App Base by running `npm update` from your hybrid app project directory. To upgrade to the latest version of the Hybrid App Template, either pull in the latest changes from GitHub, or download a new copy from the Mendix Cloud Portal.

## 2017

### October 11th, 2017 (1.4.0 / 1.3.0)

* This release improves support for the PIN login feature.
  * We improved support for switching users in combination with the PIN login feature.
  * We fixed an issue with the remaining session data.

### September 25th, 2017 (1.3.0 / 1.3.0)

* Based on feedback from the community, we decided to iterate on the command set that's at your disposal while building your Mendix hybrid mobile app. Please refer to the [README](https://github.com/mendix/hybrid-app-template/blob/master/README.md) for instructions on how to use the updated commands.

### September 20th, 2017 (1.3.0 / 1.2.0)

* Added support for iOS 11 (ticket #56209). For existing hybrid apps you can also update the cordova-plugin-wkwebview-engine-nextgen plugin in the config.xml to version to 1.1.0 and publish again.
* Changed keyboard type on PIN login page to 'tel' (ticket #54380).

### August 28th, 2017 (1.2.0 / 1.2.0)

* Whenever a new version of your Mendix application is deployed, the hybrid app will ask the user to confirm that they are ready to update.

### August 25th, 2017 (1.1.2 / 1.1.1)

* Fixed 'malformed JSON' issue
* Remove dependency on BlueBird library
* Update to Webpack 3

### August 1st, 2017 (1.1.0 / 1.1.0)

* Automatically log in if credentials are provided
* Replaced SQLite library with our own fork

### June 13th, 2017 (1.0.7 / 1.0.3)

* Build for Android ARM by default

### June 13th, 2017 (1.0.6 / 1.0.3)

* Facilitate overriding of entry.js

### June 13th, 2017 (1.0.5 / 1.0.3)

* Clean up resources folder

### June 13th, 2017 (1.0.4 / 1.0.3)

* Fix issue where package.json was removed on cleanup

### June 13th, 2017 (1.0.3 / 1.0.3)

* Enable WkWebview by default
* Fix issues with UglifyJS & add NPM5 lockfile

### June 13th, 2017 (1.0.2 / 1.0.2)

* Fixed resource paths & debug mode

### June 13th, 2017 (1.0.1 / 1.0.1)

* More iOS icons
* Improved documentation
* Fix image URLs in WkWebview

### June 13th, 2017 (1.0.0 / 1.0.0)

* New Mendix Hybrid App package format


