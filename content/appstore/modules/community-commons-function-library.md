---
title: "Community Commons Function Library"
category: "Modules"
description: "Describes the configuration and usage of the Community Commons Function Library module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "community commons function library", "community commons", "java action call", "platform support"]
draft: true
#README exists
---

## 1 Introduction

The [Community Commons Function Library](https://appstore.home.mendix.com/link/app/170/) module adds a number of reusable Java methods to your app project, which can be called from microflows or custom Java actions. The module also adds functionality for working with dates, batches, strings, internet, files, and configuration.

## 2 Usage

All the functions in this package can be invoked using a [Java action call](/refguide/java-action-call) in a microflow or from your own Java code by calling `communitycommons.<Action Folder>.<Action name>;` (for example, `commonitycommons.StringUtils.hash("Mendix", 20);`).

The module contains one constant: `CommunityCommons.MergeMultiplePdfs_MaxAtOnce`. This is used in the `MergeMultiplePdfs` Java action to restrict the number of PDFs processed at the same time. The default restriction is 10 files at once for Mendix Cloud v4-compatibility. If you need to merge more than 10 files, increase the number here. Setting the value to `<= 0` means unlimited.

## 3 Testing

The Community Commons container project contains a variety of predesigned unit tests. To use these tests, download the [Unit Testing](https://appstore.home.mendix.com/link/app/390/) module from the Mendix App Store . This module has a dependency on the [ObjectHandling](https://appstore.home.mendix.com/link/app/37114/) module, so that module should also be imported to your app project if you want to run the tests.

## 4 Function List

### 4.1 Batches

* `RecommitInBatches` – Given an XPath and a batch size, this commits all the matching objects in batches of the given size.
* `DeleteAll` – This removes all instances of a certain domain object type using batches.

### 4.2 DateTime

* `DateTimeToLong` – This converts a DateTime to a Unix timestamp (Milliseconds from 1-1-1970).
* `LongToDateTime` – This converts a Unix timestamp(ms) to a DateTime object.
* `YearsBetween` – This calculates the number of years between two dates.
* `MonthsBetween` – This calculates the number of months between two dates.
* `GetIntFromDateTime` – This extracts a part of a date (year, month, or day) to an integer.

### 4.3 Files

* `Base64DecodeToFile` – This stores a base 64-encoded string plain in the provided target file document.
* `Base64EncodeFile` – This converts an un-encoded file to a base 64-encoded string.
* `StringToFile` – This stores a string in the provided file document. Multiple encodings are supported since version 7.4.1 of the module.
* `StringFromFile` – This reads the contents form the provided file document and return it as string. Multiple encodings are supported since version 7.4.1 of the module.
* `StoreURLToFileDocument` – This retrieves a document from an URL using an `HTTP GET` request.
* `DuplicateFileDocument` – This clones the contents of one file document into another.
* `GetFileSize` – This returns the file size of a file document in bytes.
* `OverlayPdfDocument` – This overlays a generated PDF document with another PDF (containing the company stationary, for example).

### 4.4 Logging

* `CreateLogNode` – This initializes a log node without having a log line.
* `TimeMeasureStart` – This sets the start for timing something and prints the result to the log.
* `TimeMeasureEnd` – This sets the end for timing something and prints the result to the log.

### 4.5 Misc

* `AssertTrue` – This is shorthand for checking something and throwing an error if that something is not true. This function saves creating three microflow items for things that MUST be true.
* `CreateUserIfNotExists` – This creates a user with a predefined password and role. This is useful during startup for integration purposes. The user always gets updated, even if the user already exists.
* `Delay` – This causes a request to sleep for a number of milliseconds. This is useful for preventing brute force attacks or simulating latency delays.
* `GetCFInstanceIndex` – This returns the Cloud Foundry instance index that is set during the deployment of the app in a cloud-native environment. Returns `0` for the leader instance, `1` or higher for slave instances, or `-1` when the environment variable could not be read (when running locally or on premises).
* `GetApplicationUrl` – This returns the runtime URL of this application.
* `GetRuntimeVersion` – This returns the runtime version of this application.
* `RetrieveURL` – This retrieves data (such as an HTML page) from an URL using the HTTP protocol and returns it as string.
* `ThrowException` – This action always throws an exception (of the `communityutils.UserThrownError` type), which is, in combination with custom error handling, quite useful to end a microflow prematurely or bail out to the calling action/ microflow.
* `ThrowWebserviceException` – This throws an exception, which can be very useful if the microflow is called by a web service. If you throw this kind of exception, a fault message will be generated in the output (instead of a "501 Internal server" error).
* `GetDefaultLanguage` – This gets the language object for the default language as defined in the model.

### 4.6 Execute Microflow

* `executeMicroflowAsUser` – This executes the given microflow as if the `$currentuser` is the provided user (delegation).
* `RunMicroflowAsyncInQueue` – This runs a microflow asynchronously (meaning, this function immediately returns and schedules the microflow to be run in the near future). The queue guarantees a first-come-first-serve order of the microflows, and only one action is served at a time. The microflow is run with system rights in its own transaction. This is very useful for running heavy microflows in the background.
* `executeMicroflowInBackground` – This is similar to `RunMicroflowAsyncInQueue`, but it accepts one argument as parameter.
* `executeMicroflowInBatches` – This performs a batch operation on a large dataset by invoking the microflow on small sub-sets of the data, each with its own database transaction.
* `recommitInBatches` – This recommits (with events) all the s returned by an XPath query. This is recommended for migration scenerios.

### 4.7 ORM

* `CommitWithoutEvents` – Commits an object but without events.
* `Clone` – Clones the objects.
* `DeepClone` – Clones the objects, their associations, and their referred objects.
* `GetGUID` – Teturns the global unique identifier (GUID) or the ID of an object.
* `GetOriginalValueAsString` – Returns the original value of an object member, that is, the last committed value.
* `GetTypeAsString` – Returns the actual type of an entity. Useful as an alternative way to split upon inheritance or as input for other functions in this module.
* `MemberHasChanged` – Checks whether a member has changed since the last commit. This is useful in combination with `GetOriginalValueAsString`.
* `RefreshClass` – This refreshes a certain domain object in the client. This is useful for enforcing a data grid to refresh, for example.
* `refreshClassByObject` – This refreshes a certain class via the domain object type in the client. This is useful for enforcing a data grid to refresh, for example.
* `getLastChangedByUser` – This returns the user that last changed an object as `System.User`.
* `getCreatedByUser` – This returns the user that created an object.
* `encryptMemberIfChanged` – This automatically encrypts the attributes of an object during, for example, a before commit.
* `EndTransaction` – This commits the transaction, which will end the transaction or remove a save point from the queue if the transaction is nested.
* `StartTransaction` – This starts a transaction. If a transaction is already started for this context, a savepoint will be added.

### 4.8 Regexes

* `EmailAddressRegex` – This is an email address regular expression that is not too restrictive.
* `GUIDOrEmpty` – This is the same as `GUIDRegex` (below), but it accepts an empty string as well.
* `GUIDRegex` – This supports alphanumeric characters, dashes, and underscores.
* `Identifier` – This is an identifier.

### 4.9 StringUtils

* `Hash` – This hashes a value using the SHA-256 hash algorithm.
* `HTMLEncode` – This encodes a string to HTML entities so that they can be displayed in the browser without breaking any layout.
* `HTMLToPlainText` – This converts HTML text to plain text. It will preserve line breaks, but it will strip out all other markup, including HTML entity decoding.
* `IsStringSimplified` – This determines whether a string can be further simplified by removing diacritics.
* `RandomString` – This generates a random alphanumeric string of the desired length.
* `RandomHash` – This generates a random hash perfectly to use as a random unique identifier.
* `RegexReplaceAll` – This performs a regular expression replace, which is identical to the microflow expression function `replaceAll`. (DEPRECATED)
* `RegexQuote` – This escapes a string value so that it can be used literally with Mendix built-in `regex` replacement functions (for example, so the `$` sign is not interpreted as a back reference to a match).
* `StringLeftPad` – This pads a string on the left to a certain length.
* `StringRightPad` – This pads a string on the right to a certain length.
* `StringSimplify` – This removes all the diacritics from a string.
* `StringTrim` – This trims a string to the left and right (meaning, it removes all the surrounding whitespace characters such as tabs, spaces and returns).
* `SubstituteTemplate` – Given an object and a template, this substitutes all the fields in the template. This supports attributes, references, reference sets, and constants. Enums are displayed using their caption instead of the key.
* `Base64Encode` – This converts a plain string to a base-64 encoded string.
* `Base64Decode` – This converts a base-64 encoded string to the plain original string.
* `XSSSanitize` – This removes all the potentially dangerous HTML from a string so that it can be safely displayed in a browser. This function should be applied to all HTML, which is displayed in the browser and can be entered by (untrusted) users.
* `RandomStrongPassword` – This returns a random strong password containing at least one number, lower-case character,upper-case character, and strange character.
* `EncryptString` – This decrypts an AES-encrypted string. The key length should exactly be 16 characters (128 bit).
* `DecryptString` – This applies AES encryption to the value string using a symmetric key. The keylength should be exactly 16 characters (at 128 bit).
* `GenerateHMAC_SHA256_hash` - This generates an asymmetric hash using the `HMAC_SHA256` hash algorithm.
* `SubstringAfter` – This returns the sub-string of a string after the first occurrence of a given separator.
* `SubstringAfterLast` – This returns the sub-string of a string after the last occurrence of a given separator.
* `SubstringBefore` – This returns the sub-string of a string before the first occurrence of a given separator.
* `SubstringBeforeLast` – Returns the sub-string of a string before the last occurrence of a given separator.

## 5 Important When Updating

### 5.1 Deprecated Function Removal

The `RegexTest` function had been deprecated, because you could use the `isMatch()` function in microflow expressions instead. In version 8.0.1 of this module, this function was removed.

### 5.2 Deleting Obsolete Dependencies First

As of version 7.2.0 of this module, it is highly recommended that you manually remove all the *jar* files that have an accompanying *.CommunityCommons.RequiredLib* file from the **userlib** folder before importing the module into Studio Pro. Otherwise, you may encounter strange compilation or runtime errors.

### 5.3 Java 8

As of version 7.2.0 of this module, some Java 8-native APIs are utilized that replace functionality that was previously imported from external libraries. This means that for upgrading, Java 8 is a minimum requirement! You can change your JDK directory in Studio Pro via **Edit** > **Preferences**. As of [Studio Pro 8](/releasenotes/studio-pro/8.0), AdoptOpenJDK 11 is supported.

### 5.4 Breaking Change to XSSSanitize

In order to mitigate some security vulnerabilities in dependent libraries, in version 7.2.0 of this module, the XSSSanitize action was re-implemented using the [OWASP Java HTML Sanitizer](https://github.com/OWASP/java-html-sanitizer) library. This means that any usage of this action in your app needs to be reconfigured. It now takes six policy parameters, of which at least one must be non-empty. Make sure that the non-applicable policy parameters are explicitly filled in with the value `empty`. Possible policy values are defined in the `SanitizerPolicy` enumeration. The meaning of the policies are defined in [Class Sanitizers](https://static.javadoc.io/com.googlecode.owasp-java-html-sanitizer/owasp-java-html-sanitizer/20180219.1/org/owasp/html/Sanitizers.html).

### 5.5 Gradle

In version 7.2.0 of this module, we introduced a new way of dependency management using a Gradle build file. Unfortunately, this does not mean that obsolete JARs are automatically deleted from your app projects' **userlib** folders when you import this module into your app model.

To download the dependencies and copy them to the **userlib** folder of the Community Commons container project, execute `gradle prepareDeps` from the command line. Afterwards, you will be able to export a *CommunityCommons.mpk* module from the Community Commons main project. Select only the dependencies listed below in the [Dependencies](#dependencies) section as dependencies in **userlib** for the exported module.

### 5.6 Dependencies {#dependencies}

For security reasons, Guava was upgraded to version 27 in version 7.4.0 of this module. This unfortunately means a number of new required JARs in the **userlib** folder.

* *animal-sniffer-annotations-1.17.jar*
* *checker-qual-2.5.2.jar*
* *commons.io-2.6.jar*
* *commons.lang3-3.7.jar*
* *error-prone-annotations-2.2.0.jar*
* *j2objc-annotations-1.1.jar*
* *jsr305-3.0.2.jar*
* *pdfbox-2.0.13.jar*
* *fontbox-2.0.13.jar*
* *guava-27.0-jre.jar*
* *owasp-java-html-sanitizer-20181114.1.jar*

## 6 Read More

* [How to Implement Community Best Practices for App Performance](https://docs.mendix.com/howto/general/community-best-practices-for-app-performance)
* [How to Implement Best Practices for App Security](https://docs.mendix.com/howto/security/best-practices-security)
