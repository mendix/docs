---
title: "Offline Data Security"
url: /refguide/mobile/using-mobile-capabilities/offlinefirst-data/local-data-security/
weight: 85
description: "This documentation describes best practices to keep your offline data secure."
tags: ["offline-first", "database", "security", "encryption"]
aliases:
    - /howto/mobile/encryption-database/
---

## 1 Introduction

Offline-first apps built with Mendix store data in the local database to provide smooth end-user experiences. Consequently, user devices store a copy of the data locally. This documentation explains techniques to ensure that local data is stored securely and other data best practices.

How does local database encryption work? Local database encryption works by creating a random key when the app is started for the first time. The database file is encrypted with this key, which is stored in the app's local storage and encrypted with another key, which is stored in the secure storage system of the OS (IOS/Keychain and Android/Keystore). The Mendix Client reads and decrypts the database key stored in the local storage and uses it to unlock the database.

## 2 Local Data Safety

In native mobile apps, the Mendix Client stores the data and files in the file system—often sandboxed and encrypted by the operating system. This ensures that other apps, external entities, or end-users cannot access the app's data. 

Data stored in a Mendix app is excluded from standard backup mechanisms to prevent data from leaking outside the app's boundaries. However, the built-in mechanisms can be bypassed in cases where the operating system is compromised, such as rooting an Android device.

Offline-first progressive web apps (PWAs) use the underlying browser APIs to store data in the host environment. The browser often keeps the data in a hidden folder in the user's directory. Depending on the operating system's configuration, this folder's contents may or may not be encrypted.

## 3 Best Practices

It is a best practice to synchronize as little data as possible to the device and avoid synchronizing any confidential or privacy-related data that does not pertain to the current user.

### 3.1 Ensure Domain-Model Access Rules are Configured Correctly

The Mendix Client only stores objects and attributes that the current user has read access to. Incomplete or misconfigured access rules on the domain model may cause too much data to be synchronized to the device databases.

To learn more about configuring access rules, see [Access Rules](/refguide/access-rules/).

### 3.2 Limit Data with XPath Constraints

In apps where you want to grant end-users working with objects access to the responsive profile, but you do not wish to grant them access to an offline-first navigation profile, it is possible to limit the amount of data by an XPath constraint using the **Configure Synchronization** screen.

To learn more about customizing the synchronization behavior, see [Customizable Synchronization](/refguide/mobile/using-mobile-capabilities/offlinefirst-data/synchronization/#customizable-synchronization).

### 3.3 Use Non-Persistent Entities

For sensitive data that should never be stored locally, consider using non-persistent entities to store the data temporarily and use microflow calls to securely process the data on the server. 

The app keeps the non-persistent objects only in the memory and removes them when they are no longer needed. However, this approach requires connectivity to the Mendix Runtime to call microflows, and thus limits the app's offline-first capabilities.

### 3.4 Encrypt the Local Database

Suppose you have to store sensitive data on a device and cannot control the operating system your app is running on. In that case, you should enable database encryption for your app. This ensures that all data in the local database is encrypted before storing it on the device. Note that encryption will impact your app's performance. Full synchronization of all clients is required to enable it.

To learn more, see [Encrypted Local Database](#encrypted-local-database)

## 4 Encrypted Local Database {#encrypted-local-database)

Mendix 9.18 and above offer to encrypt the local database of native apps. Database encryption can be enabled using the checkbox in the native mobile navigation profile screen:

{{< figure src="/attachments/refguide/mobile/offline-first/enable-native-db-encryption.png" alt="Encrypt local database checkbox placed at the bottom of the native mobile navigation profile screen" width="450"  >}}

### 4.1 Prerequisites {#encryption-prerequisites}

Before enabling local database encryption, ensure that these prerequisites are met:

* Use Mendix Studio Pro v9.18 (or a higher version) 
* Upgrade your Native Template to v6.3.0 (or a higher version) 
* Upgrade Make It Native to the latest version

{{% alert color="alert" %}}
Local database encryption works in Native Template v6.3.0 and higher. If this setting is enabled using an older version of the native template, the app will not start. Thus, be careful about the template version when using over-the-air updates to enable database encryption.
{{% /alert %}}

### 4.2 Enabling Database Encryption for New Apps

Suppose you are working on a new Mendix app that you haven't released to your users before. In that case, you can check the check box shown above and use the latest version of the native template to build and release your app.

### 4.3 Enabling Database Encryption for Existing Apps

Upgrading an existing app with an encrypted database requires careful strategy, because the app already has users using an unencrypted database. 

Encrypting the existing database is not possible. Therefore, the Mendix Client needs to remove the current database and create a new encrypted database to use this feature.

Enabling database encryption and deploying a new version of the Mendix app to the cloud does not affect the existing devices. This setting takes effect once users update their apps, either through OTA or an app update. After the app is updated on the device, it will sign out the current user and start with an empty database. This step may cause unsynchronized data to be lost. 

Consider the [prerequisites above](#encryption-prerequisites) before enabling database encryption, especially for existing apps

### 4.4 Disabling Database Encryption

Disabling database encryption will apply only to newly-installed apps. Existing app users will continue to work with an encrypted local database until they uninstall and reinstall the app by hand.   

### 4.5 Native Database Encryption and Make It Native App

Local database encryption also works with the Make It Native App and a custom developer app. Ensure that you upgrade the Make It Native app and your application template to v6.3.0 or higher, otherwise the app may not start.

### 4.6 Verifying a Database is Encrypted

Verifying the database encryption requires access to the database file stored on the device (or emulator), which is only possible for debug builds of your app. 

Once you access the database file, you can attempt to open it using any SQLite viewer. The viewer will open it immediately for unencrypted databases, whereas the same operation will fail for encrypted databases.

#### 4.6.1 Locate the Database File on Android

Viewing the file system of an Android device requires [Android Studio](https://developer.android.com/studio/). Once you have that software, do the following:

1. Ensure that you are running a debug build of your app (or custom developer app).
1. Enable [USB debugging](https://developer.android.com/studio/debug/dev-options) on your device and connect it to your computer.
1. Start Android Studio, and activate the [Device File Explorer](https://developer.android.com/studio/debug/device-file-explorer).
1. Navigate to this folder: */data/data/{your_app_id}/databases/*.
1. Find the database file in this folder (often named *default* without an extension). Right-click this file, then click **Save as**. 
1. Save the file in a folder on your computer.

#### 4.6.2 Locate the Database File on iOS

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