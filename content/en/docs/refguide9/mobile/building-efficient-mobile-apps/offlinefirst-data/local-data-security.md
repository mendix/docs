---
title: "Offline Data Security"
url: /refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/
weight: 85
description: "This documentation describes best practices to keep your offline data secure."
aliases:
    - /howto9/mobile/encryption-database/
---

## Introduction

Offline-first apps built with Mendix store data in the local database to provide smooth end-user experiences. Consequently, user devices store a copy of the data locally. This documentation explains techniques to ensure that local data is stored securely and other data best practices.

## Local Data Safety

In native mobile apps, the Mendix Client stores the data and files in the file system—often sandboxed and encrypted by the operating system. This ensures that other apps, external entities, or end-users cannot access the app's data. 

Data stored in a Mendix app is excluded from standard backup mechanisms to prevent data from leaking outside the app's boundaries. However, the built-in mechanisms can be bypassed in cases where the operating system is compromised, such as rooting an Android device.

Offline-first progressive web apps (PWAs) use the underlying browser APIs to store data in the host environment. The browser often keeps the data in a hidden folder in the user's directory. Depending on the operating system's configuration, this folder's contents may or may not be encrypted.

## Best Practices

It is a best practice to synchronize as little data as possible to the device and avoid synchronizing any confidential or privacy-related data that does not pertain to the current user.

### Configuring Domain Model Access Rules 

The Mendix Client only stores objects and attributes that the current user has read access to. Incomplete or misconfigured access rules on the domain model may cause too much data to be synchronized to the device databases.

To learn more about configuring access rules, see [Access Rules](/refguide9/access-rules/).

### Limiting Data with XPath Constraints

In apps where you want to grant end-users working with objects access to the responsive profile, but you do not wish to grant them access to an offline-first navigation profile, it is possible to limit the amount of data by an XPath constraint using the **Configure Synchronization** screen.

To learn more about customizing the synchronization behavior, see [Customizable Synchronization](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#customizable-synchronization).

### Using Non-Persistent Entities

For sensitive data that should never be stored locally, consider using non-persistent entities to store the data temporarily and use microflow calls to securely process the data on the server. 

The app keeps the non-persistent objects only in the memory and removes them when they are no longer needed. However, this approach requires connectivity to the Mendix Runtime to call microflows, and thus limits the app's offline-first capabilities.

### Encrypting the Local Database

Suppose you have to store sensitive data on a device and cannot control the operating system your app is running on. In that case, you should enable database encryption for your app. This ensures that all data in the local database is encrypted before storing it on the device. Note that encryption will impact your app's performance. Full synchronization of all clients is required to enable it.

To learn more, see [Encrypting Local Databases](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/#encrypting-local-databases)

### Encrypting User Files and Images {#encrypting-files-images}

Similar to encrypting the local database, you should enable local file encryption for extra protection if the files or images your app stores are sensitive. This option ensures that file contents for entities that specialize from either `System.FileDocument` or `System.Image` are encrypted. This option also includes files added to the app by the end-user, for example, when a user takes a photo using the camera of the device and store it in an entity that specialized from `System.Image`.

To learn more, see the [Encrypting User Files](#encrypting-user-files) section below.

## Encrypting Local Databases {#encrypting-local-databases}

Studio Pro 9.18 and above allows you to encrypt the local databases of native apps. Database encryption can be enabled using the checkbox in the native mobile navigation profile screen:

{{< figure src="/attachments/refguide9/mobile/offline-first/enable-native-db-encryption.png" alt="Encrypt local database checkbox placed at the bottom of the native mobile navigation profile screen" width="450"  class="no-border" >}}

### Prerequisites {#encryption-prerequisites}

Before enabling local database encryption, ensure that these prerequisites are met:

* Use Mendix Studio Pro 9.18 (or a higher version) 
* Upgrade your Native Template to v6.3.0 (or a higher version) 
* Upgrade Make It Native to the latest version

{{% alert color="info" %}}
Local database encryption works in Native Template v6.3.0 and higher. If this setting is enabled using an older version of the native template, the app will not start. Thus, be careful about the template version when using over-the-air updates to enable database encryption.
{{% /alert %}}

### Enabling Database Encryption for New Apps

Suppose you are working on a new Mendix app that you have not released to your users before. In that case, you can check the checkbox shown above and use the latest version of the native template to build and release your app.

### Enabling Database Encryption for Existing Apps

Upgrading an existing app with an encrypted database requires careful strategy, because the app already has users using an unencrypted database. 

Encrypting the existing database is not possible. Therefore, the Mendix Client needs to remove the current database and create a new encrypted database to use this feature.

Enabling database encryption and deploying a new version of the Mendix app to the cloud does not affect the existing devices. This setting takes effect once users update their apps, either through OTA or an app update. After the app is updated on the device, it will sign out the current user and start with an empty database. This step may cause unsynchronized data to be lost. 

Consider the [prerequisites above](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/#encryption-prerequisites) before enabling database encryption, especially for existing apps

### Disabling Database Encryption

Disabling database encryption will apply only to newly-installed apps. Existing app users will continue to work with an encrypted local database until they uninstall and reinstall the app by hand.   

### Native Database Encryption and the Make It Native App

Local database encryption also works with the Make It Native App and a custom developer app. Ensure that you upgrade the Make It Native app and your application template to v6.3.0 or higher, otherwise the app may not start.

### How Local Database Encryption Works

Local database encryption works by creating a random key when the app is started for the first time. The database file is encrypted with this key, which is stored in the app's local storage and encrypted with another key, which is stored in the mobile operating system's secure storage system (iOS uses Keychain, while Android uses Keystore). The Mendix Client reads and decrypts the database key stored in the local storage, and then uses it to unlock the database.

### Verifying a Database is Encrypted

Verifying the database encryption requires access to the database file stored on the device (or emulator), which is only possible for debug builds of your app. 

Once you access the database file, you can attempt to open it using any SQLite viewer. The viewer will open it immediately for unencrypted databases, whereas the same operation will fail for encrypted databases.

#### Locating the Database File on Android

Viewing the file system of an Android device requires [Android Studio](https://developer.android.com/studio/). Once you have that software, do the following:

1. Ensure that you are running a debug build of your app (or custom developer app).
1. Enable [USB debugging](https://developer.android.com/studio/debug/dev-options) on your device and connect it to your computer.
1. Start Android Studio, and activate the [Device File Explorer](https://developer.android.com/studio/debug/device-file-explorer).
1. Navigate to this folder: */data/data/{your_app_id}/databases/*.
1. Find the database file in this folder (often named *default* without an extension). Right-click this file, then click **Save as**. 
1. Save the file in a folder on your computer.

#### Locating the Database File on iOS

To locate the database file on iOS, do the following:

1. Ensure that you are running a debug build of your app in a simulator, not on a physical device.
1. Open Finder on your Mac and click **Go** > **Go to the folder**.
1. Enter *~/Library/Developer/CoreSimulator/Devices* to the prompt.
1. Once the **Devices** folder is opened, sort the folders by **Date Modified (descending)**.
1. Go to the first folder (for example **9DA843C5-089F-44F6-AB1A-3ECEF6D3D05C**).
1. Go to **data** > **Containers** > **Data** > **Application**.
1. Sort folders by **Date Modified (descending)** and open the first one.
1. Go to **Library** > **LocalDatabase**.
1. You will see a file named *default* (without an extension). This file is the database file used by the Mendix Client.
1. Save the *default* file in a folder on your computer.

## Encrypting User Files {#encrypting-user-files}

Studio Pro 9.22 and above allows you to encrypt the files and images stored in native apps. Enable file encryption by selecting the checkbox in the **Native mobile** navigation profile tab:

{{< figure src="/attachments/refguide9/mobile/offline-first/enable-native-file-encryption.png" alt="Encrypt native file encryption checkbox placed at the bottom of the native mobile navigation profile screen" width="450"  class="no-border" >}}

### Prerequisites

Before enabling local file encryption, ensure that these prerequisites are met:

* Install and use Mendix Studio Pro 9.22 (or a higher version) 
* Upgrade your Native Template to v6.3.0 (or a higher version)
* Upgrade your Make It Native app to the latest version

{{% alert color="info" %}}
Local database encryption works in Native Template v6.3.0 and higher. If this setting is enabled using an older version of the native template, the app will not encrypt the files, and the client will log the following warning message:

"Encrypting user files and images is enabled; however, the current native template does not support this functionality. Please update your app's native template to support encryption. User files and images will not be encrypted."

If you are using Native Template 6.3.0 or higher and building the app locally on your computer, you may need to reinstall the dependencies of your app using the `npm i` command.
{{% /alert %}}

### Enabling Local File Encryption

You can enable file encryption for both new and existing apps. Once the users update the app, any new files written to the device's storage will be encrypted. Any existing files stored before the update stay unencrypted until they are overwritten.

### Disabling Local File Encryption

Disabling local file encryption is not supported and may cause unexpected behaviors for end-users with encrypted files on their devices. You can disable the encryption if you have not released the encrypted version of your app to your users.
