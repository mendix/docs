---
title: "Known Issues"
space: "Release Notes"
category: "Modeler"
---

<div class="alert alert-info">{% markdown %}

This document describes known issues starting with Mendix version 7.0.2. For known issues in earlier Mendix versions, see the [Modeler release notes](index).

{% endmarkdown %}</div>

## 7.2

For details on this release, see [7.2 release notes](7.2).

### 7.2.0

* Changes for reference set members that are read-only for the user are not correctly serialized from the server to the client (browser). This can lead to an `IllegalArgumentException` with this message: “Global identifier should be a number.”

## 7.1

For details on this release, see [7.1 release notes](7.1).

### 7.1.0

* The offline functionality for mobile apps is broken.
    * Fixed in [7.1.1](7.1#711).

## 7.0 

For details on this release, see [7.0 release notes](7.0).

### 7.0.2

* Some users working on Windows 7 and 8.1 might experience issues during installation of the .NET Framework bundled with the Modeler installer. Installing .NET Framework from the [official Microsoft website](https://www.microsoft.com/en-us/download/details.aspx?id=53345) resolves these issues.
* Upgrading an anonymous user to a signed-in user does not transfer the state yet.
* In calculated attribute microflows, objects associated with `$currentUser` or `$currentSession` cannot be retrieved in the calculated microflow if the association has not been committed to the database.
* When triggering multiple microflows from the client concurrently that commit the same new object, you might get a “duplicate key violation” exception. This is due to a race condition. Triggering the microflow again should not raise an exception again. You can avoid this issue by configuring a blocking progress bar for the button or by using the **Disabled during action** property.
* In certain situations, OnChange microflows may not reflect changes done in the UI. Instead, an older version of the object will be used.
* Disallowing concurrent execution of microflows in a multi-node cluster environment does not work. The feature still works on a single node.
