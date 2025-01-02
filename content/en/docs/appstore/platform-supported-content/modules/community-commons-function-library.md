---
title: "Community Commons"
url: /appstore/modules/community-commons-function-library/
description: "Describes the configuration and usage of the Community Commons Function Library module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Community Commons](https://marketplace.mendix.com/link/component/170/) module adds a number of reusable Java methods to your app, which can be called from microflows or custom Java actions. The module also adds functionality for working with dates, batches, strings, internet, files, and configuration.

## Usage

All the functions in this package can be invoked using a [Java action call](/refguide/java-action-call/) in a microflow or from your own Java code by calling `communitycommons.<Action Folder>.<Action name>;` (for example, `communitycommons.StringUtils.hash("Mendix", 20);`).

The module contains one constant: `CommunityCommons.MergeMultiplePdfs_MaxAtOnce`. This is used in the `MergeMultiplePdfs` Java action to restrict the number of PDFs processed at the same time. The default restriction is 10 files at once for Mendix Cloud compatibility. If you need to merge more than 10 files, increase the number here. Setting the value to `<= 0` means unlimited.

## Function List

### Batches

* `deleteAll` – This removes all instances of a certain domain object type using batches.
* `recommitInBatches` – Given an XPath and a batch size, this commits all the matching objects in batches of the given size. 

### DateTime

* `DateTimeToLong` – This converts a DateTime to a Unix timestamp (Milliseconds from 1-1-1970).
* `GetIntFromDateTime` – This extracts a part of a date (year, month, or day) to an integer.
* `LongToDateTime` – This converts a Unix timestamp(ms) to a DateTime object.
* `MonthsBetween` – This calculates the number of months between two dates.
* `ParseDataTimeWithTimezone` – This parses a date from a string with a given pattern according to a specific timezone. The timezone has to be a valid [timezone ID](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/).
* `YearsBetween` – This calculates the number of years between two dates.

### Execute Microflow

* `executeMicroflowAsUser` – This runs the given microflow as if the `$currentuser` is the provided user (delegation).
* `executeMicroflowAsUser_1` – This is identical to `executeMicroflowAsUser` , except that it accepts one arguement.
* `executeMicroflowAsUser`_2 – This is identical to `executeMicroflowAsUser` , except that it accepts two arguement.
* `executeMicroflowInBackground` – This is similar to `RunMicroflowAsyncInQueue`, but it accepts one argument as parameter.
* `executeMicroflowInBatches` – This performs a batch operation on a large dataset by invoking the microflow on small sub-sets of the data, each with its own database transaction.
* `executeUnverifiedMicroflowAsUser` – This runs the given microflow as if the `$currentuser` is the provided user (delegation). Use `sudoContext` to determine if 'apply entity access' should be used.
* `executeUnverifiedMicroflowAsUser_1` – This is identical to `executeUnverifiedMicroflowAsUser`, except that it takes one argument.
* `executeUnverifiedMicroflowAsUser_2` – This is identical to `executeUnverifiedMicroflowAsUser`, except that it takes two argument.
* `executeUnverifitedMicroflowInBackground` – This action allows an microflow to run independently from this microflow. This function is similar to `RunMicroflowAsyncInQueue`, except that it accepts one argument.
* `executeUnverifiedMicrolfowInBatches` – This invokes a microflow in batches. The microflow is invoked for each individual item returned by the XPath query. 
* `RunMicroflowAsyncInQueue` – This runs a microflow asynchronously (meaning, this function immediately returns and schedules the microflow to be run in the near future). The queue guarantees a first-come-first-serve order of the microflows, and only one action is served at a time. The microflow is run with system rights in its own transaction. This is very useful for running heavy microflows in the background.

### Files

* `Base64DecodeToFile` – This stores a base 64-encoded string plain in the provided target file document.
* `Base64EncodeFile` – This converts an un-encoded file to a base 64-encoded string.
* `DuplicateFileDocument` – This clones the contents of one file document into another and instantly commits the `cloneTarget`.
* `DuplicateImageDocument` – This clones the contents of one image document into another, and generates a thumbnail as well.
* `FileDocumentFromFile` – This loads a file from the local (server) storage and stores it inside a `FileDocument`.
* `FileFromFileDocument` – This reads contents from a `FileDocument` and stores it in a file on the local (server) storage.
* `GetFileContentsFromResource` – This sets the contents of a `FileDocument` with the contents of a file which is a resource.
* `getFileSize` – This returns the file size of a file document in bytes.
* `GetImageDimentsions` – This returns the dimensions of an image.
* `MergeMultiplePdfs` – This is restricted to 10 files at once for Mendix Cloud v4 compatibility. If you need to merge more than 10 files at once, merge recursively instead or change the `MergeMultiplePdfs_MaxAtOnce` constant.
* `OverlayPdfDocument` – This overlays a generated PDF document with another PDF (containing the company stationary, for example).
* `storeURLToFileDocument` – This retrieves a document from an URL using an `HTTP GET` request.
* `StringFromFile` – This reads the contents from the provided file document and returns it as string. Multiple encodings are supported since version 7.4.1 of the module.
* `StringToFile` – This stores a string in the provided file document. Multiple encodings are supported since version 7.4.1 of the module.

### Logging

* `CreateLogNode` – This initializes a log node without having a log line.
* `TimeMeasureEnd` – This sets the end for timing something and prints the result to the log, and returns the time taken in milliseconds.
* `TimeMeasureStart` – This sets the start for timing something and prints the result to the log.

### Misc

* `AssertTrue` – This is shorthand for checking something and throwing an error if that something is not true. This function saves creating three microflow items for things that MUST be true.
* `CreateUserIfNotExists` – This microflow creates a user with a predefined password and role. This is useful during startup for integration purposes. The user always gets updated, even if the user already exists.
* `Delay` – This causes a request to sleep for a number of milliseconds. This is useful for preventing brute force attacks or simulating latency delays.
* `EnumerationFromString` – Use this Java action as a template for your own string-to-enumeration conversions.
* `GetApplicationUrl` – This returns the runtime URL of this application.
* `GetCFInstanceIndex` – This returns the Cloud Foundry instance index that is set during the deployment of the app in a cloud-native environment. Returns `0` for the leader instance, `1` or higher for follower instances, or `-1` when the environment variable could not be read (when running locally or on premises).
* `GetDefaultLanguage` – This gets the language object for the default language as defined in the model.
* `GetModelVersion` – This returns the model version of the deployed application.
* `GetRuntimeVersion` – This returns the runtime version of this application.
* `IsInDevelopment` – This returns `true` if the environment is a development environment.
* `ListTop` – This takes the top n items of a given list and returns the resulting list.
* `retrieveURL` – This retrieves data (such as an HTML page) from an URL using the HTTP protocol, and returns it as string. 
* `ThrowException` – This action always throws an exception (of the `communityutils.UserThrownError` type), which is, in combination with custom error handling, quite useful to end a microflow prematurely or bail out to the calling action or microflow.
* `ThrowWebserviceException` – This throws an exception, which can be very useful if the microflow is called by a web service. If you throw this kind of exception, a fault message will be generated in the output (instead of a "501 Internal server" error).

### ORM

* <a id="clone"></a>`Clone` – This clones the objects.
* `commitInSeparateDatabaseTransaction` – This function commits an object in a seperate context and transaction, making sure it gets persisted in the database (regarding which exception happens after invocation).
* `commitWithoutEvents` – This commits an object but without events.
* `copyAttributes` – This copies all common primitive attributes from source to target, which are not necessarily of the same type. This is useful to, for example, translate database object into view objects.
* <a id="deepclone"></a>`DeepClone` – This clones the objects, their associations, and their referred objects. For more information, see the [Limitations](#limitations) section below.
* `EndTransaction` – This commits the transaction. It will end this transaction or remove a save point from the queue if the transaction is nested.
* `getCreatedByUser` – This returns the user who created an object.
* `getGUID` – This returns the global unique identifier (GUID) or the ID of an object.
* `getLastChangedByUser` – This returns the user that last changed an object as `System.User`.
* `getOriginalValueAsString` – This returns the original value of an object member, that is, the last committed value.
* `getTypeAsString` – This returns the actual type of an entity. Useful as an alternative way to split upon inheritance or as input for other functions in this module.
* `memberHasChanged` – This checks whether a member has changed since the last commit. This is useful in combination with `GetOriginalValueAsString`.
* `objectHasChanged` – This returns true if at least one member (including owned associations) of this object has changed.
* `objectisNew` – This returns `true` if this object is new (not committed in the database).
* `refreshClass` – This refreshes a certain domain object in the client. This is useful for enforcing a data grid to refresh, for example.
* `refreshClassByObject` – This refreshes a certain class via the domain object type in the client. This is useful for enforcing a data grid to refresh, for example.
* `StartTransaction` – This starts a transaction. If a transaction is already started for this context, a savepoint will be added.
* `encryptMemberIfChanged` – This automatically encrypts the attributes of an object during, for example, a before commit.
* `EndTransaction` – This commits the transaction, which will end the transaction or remove a save point from the queue if the transaction is nested.

### Regexes

* `EmailAddressRegex` – This is an email address regular expression that is not too restrictive.
* `GUIDOrEmpty` – This is the same as `GUIDRegex` (below), but it accepts an empty string as well.
* `GUIDRegex` – This supports alphanumeric characters, dashes, and underscores.
* `Identifier` – This is an identifier.

### StringUtils

* `Base64Decode` – This converts a base-64 encoded string to the plain original string.
* `Base64Encode` – This converts a plain string to a base-64 encoded string.
* `EscapeHTML` – This escapes a string to HTML code.
* `GenerateHMAC_SHA256` – This generates a hexadecimal encoded asymmetric hash using the `HMAC_SHA256` hash algorithm.
* `GenerateHMAC_SHA256_hash` – This generates a base-64 encoded asymmetric hash using the `HMAC_SHA256` hash algorithm.
* `Hash` – This hashes a value using the `SHA-256` hash algorithm.
* `HTMLEncode` – This encodes a string to HTML entities so that they can be displayed in the browser without breaking any layout.
* `HTMLToPlainText` – This converts HTML text to plain text. It will preserve line breaks, but it will strip out all other markup, including HTML entity decoding.
* `IsStringSimplified` – This determines whether a string can be further simplified by removing diacritics.
* `RandomHash` – This generates a random hash that can be perfectly used as a random unique identifier.
* `RandomString` – This generates a random alphanumeric string of the desired length.
* `RandomStrongPassword` – This returns a random strong password containing a specified minimum number of digits, upper-case characters, and special characters.
* `RandomStrongPasswordWithLowercase` – This returns a random strong password containing a specified minimum number of digits, upper-case characters, lower-case characters, and special characters.
* `RegexQuote` – This escapes a string value so that it can be used literally with Mendix built-in `regex` replacement functions (for example, so the `$` sign is not interpreted as a back reference to a match).
* `RegexReplaceAll` – This performs a regular expression replace, which is identical to the microflow expression function `replaceAll` but supports more constructs.
* `RemoveEnd` – This removes a string from the end of another string, if present.
* `StringLeftPad` – This pads a string on the left to a certain length.
* `StringRightPad` – This pads a string on the right to a certain length.
* `StringSimplify` – This removes all the diacritics from a string.
* `StringSplit` – This splits a string using a regex separator.
* `StringTrim` – This trims a string to the left and right (meaning, it removes all the surrounding whitespace characters such as tabs, spaces, and returns).
* `SubstituteTemplate` – Given an object and a template, this substitutes all the fields in the template. This supports attributes, references, reference sets, and constants. Enumerations are displayed using their caption instead of the key.
* `SubstituteTemplate` – This is identical to `SubstituteTemplate, except that it adds an DateTime format argument.
* `SubstringAfter` – This returns the sub-string of a string after the first occurrence of a given separator.
* `SubstringAfterLast` – This returns the sub-string of a string after the last occurrence of a given separator.
* `SubstringBefore` – This returns the sub-string of a string before the first occurrence of a given separator.
* `SubstringBeforeLast` – Returns the sub-string of a string before the last occurrence of a given separator.
* `XSSSanitize` – This removes all the potentially dangerous HTML from a string so that it can be safely displayed in a browser. This function should be applied to all HTML, which is displayed in the browser and can be entered by (untrusted) users.
* `EncryptString` – This decrypts an AES-encrypted string. The key length should exactly be 16 characters (128 bit).
* `DecryptString` – This applies AES encryption to the value string using a symmetric key. The keylength should be exactly 16 characters (at 128 bit).

## Important When Updating

### Deprecated Function Removal

⚠ The `RegexTest` function had been deprecated, because you could use the `isMatch()` function in microflow expressions instead. In version 8.0.1 of this module, this function was removed.

### Deleting Obsolete Dependencies First

As of version 7.2.0 of this module, it is highly recommended that you manually remove all the *jar* files that have an accompanying *.CommunityCommons.RequiredLib* file from the **userlib** folder before importing the module into Studio Pro. Otherwise, you may encounter strange compilation or runtime errors.

### Java 8

As of version 7.2.0 of this module, some Java 8-native APIs are utilized that replace functionality that was previously imported from external libraries. This means that for upgrading, Java 8 is a minimum requirement! You can change your JDK directory in Studio Pro via **Edit** > **Preferences**. As of [Studio Pro 8](/releasenotes/studio-pro/8.0/), AdoptOpenJDK 11 is supported.

### Breaking Change to XSSSanitize

In order to mitigate some security vulnerabilities in dependent libraries, in version 7.2.0 of this module, the XSSSanitize action was re-implemented using the [OWASP Java HTML Sanitizer](https://github.com/OWASP/java-html-sanitizer) library. This means that any usage of this action in your app needs to be reconfigured. It now takes six policy parameters, of which at least one must be non-empty. Make sure that the non-applicable policy parameters are explicitly filled in with the value `empty`. Possible policy values are defined in the `SanitizerPolicy` enumeration. The meaning of the policies are defined in [Class Sanitizers](https://static.javadoc.io/com.googlecode.owasp-java-html-sanitizer/owasp-java-html-sanitizer/20180219.1/org/owasp/html/Sanitizers.html).

### Dependencies {#dependencies}

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

## Limitations {#limitations}

* [Generalizations](/refguide/generalization-and-association/) are not supported (specifically in the [Clone](#clone) and [DeepClone](#deepclone) functions).

## Read More

* [Community Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
* [How to Implement Best Practices for App Security](/howto/security/best-practices-security/)
