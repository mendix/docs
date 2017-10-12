---
title: "Hybrid App"
toc-level: 1
description: "Hybrid App release notes."
---

{{% alert type="info" %}}
The known issues are described in [Hybrid App Known Issues](hybrid-app-known-issues).
{{% /alert %}}

These are the release notes for the Hybrid App.

The version numbers for each release refer to the Hybrid App Base and the Hybrid App Template package, respectively.

If you're building the app using the regular PhoneGap Build approach from within the Mendix Developer Portal, you do not need to worry about these numbers. Downloading and building a new package will set you up with the latest version.

If you're using the advanced flow, you can get the latest version of the Hybrid App Base by running `npm update` from your hybrid app project directory. To upgrade to the latest version of the Hybrid App Template, either pull in the latest changes from GitHub, or download a new copy from the Mendix Cloud Portal.

## 2017

### October 11th, 2017 (1.4.0 / 1.3.0)

* This release improves support for the PIN login feature.
  * We improved support for switching users in combination with the PIN login feature.
  * We fixed an issue with the remaining session data.

### September 25th, 2017 (1.3.0 / 1.3.0)

* Based on feedback from the Mendix community, we decided to iterate on the command set that is at your disposal while building your Mendix hybrid mobile app. For instructions on how to use the updated commands, refer to the [Mendix PhoneGap Build App Template README](https://github.com/mendix/hybrid-app-template/blob/master/README.md).

### September 20th, 2017 (1.3.0 / 1.2.0)

* We added support for iOS 11 (ticket 56209). For existing hybrid apps, you can also update the `cordova-plugin-wkwebview-engine-nextgen plugin` in the *config.xml* to version to 1.1.0 and publish again.
* We changed the keyboard type on the PIN login page to `tel`. (Ticket 54380)

### August 28th, 2017 (1.2.0 / 1.2.0)

* Whenever a new version of your Mendix application is deployed, the hybrid app will now ask the user to confirm that they are ready to update.

### August 25th, 2017 (1.1.2 / 1.1.1)

* We fixed the "malformed JSON" issue.
* We removed the dependency on the BlueBird library.
* We updated to Webpack 3.

### August 1st, 2017 (1.1.0 / 1.1.0)

* You can now automatically log in if credentials are provided.
* We replaced the SQLite library with our own fork.

### June 13th, 2017 (1.0.7 / 1.0.3)

* The build for Android ARM is now by default.

### June 13th, 2017 (1.0.6 / 1.0.3)

* We now facilitate the overriding of `entry.js`.

### June 13th, 2017 (1.0.5 / 1.0.3)

* We cleaned up the *resources* folder.

### June 13th, 2017 (1.0.4 / 1.0.3)

* We fixed the issue where the *package.json* was removed on cleanup.

### June 13th, 2017 (1.0.3 / 1.0.3)

* `WkWebview` is now enabled by default.
* We fixed the issues with UglifyJS and added the NPM5 lockfile.

### June 13th, 2017 (1.0.2 / 1.0.2)

* We fixed the resource paths and the debug mode.

### June 13th, 2017 (1.0.1 / 1.0.1)

* There are now more iOS icons.
* We improved the documentation.
* We fixed the image URLs in `WkWebview`.

### June 13th, 2017 (1.0.0 / 1.0.0)

* There is now a new Mendix Hybrid App package format.
