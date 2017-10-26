---
title: "Desktop Modeler Known Issues"
toc-level: 1
category: "Desktop Modeler"
frontpage_featured: true
---

{{% alert type="info" %}}

This document describes known issues starting with Mendix version 7.0.2. For known issues in earlier Mendix versions, see the [Desktop Modeler release notes](index).

{{% /alert %}}

## 7.6

For details on this release, see [7.6 release notes](7.6).

### 7.6.0<a name="KI760"></a>

* When retrieving an entity with a virtual attribute without using a schema ID, references are not returned. This impacts the following scenarios:
  * A template grid containing an entity with a virtual attribute will not show any data over an association (for example, nested data views).
  * Custom widgets requesting Mendix objects with a virtual attribute through XPath will have no access to their associations.
* Offline pages containing custom widgets might fail to render in the following scenario:
  * User logs in (not as anonymous user) into an offline app, uses the app and logs out
  * Mendix app is redeployed with a change that removes all instances of a custom widget used in the offline app
  * User starts app again, selects "No" when asked to update the app, logs in, and navigates to the page that contains the custom widget
  * Widget is not rendered

## 7.5

For details on this release, see [7.5 release notes](7.5).

### 7.5.1<a name="KI751"></a>

* For Atlas-based apps, it is not possible to use the **Generate page** functionality for buttons in the **Tablet** and **Phone** profiles. The **Create Page** dialog box shows no selectable page templates for these profiles.
  * Workaround: select **File** > **New Document** > **Page** and set this newly created page in the **Page** property of the button.

### 7.5.0<a name="KI750"></a>

* The Mendix Web Modeler is not enabled when you create an Atlas UI-based app in the Mendix Desktop Modeler.
  * Fixed in [7.5.1](7.5#RN751).
* For Atlas-based apps, it is not possible to use the **Generate page** functionality for buttons. The **Create Page** dialog box shows no selectable page templates for these profiles.
  * Workaround: select **File** > **New Document** > **Page** and set this newly created page in the **Page** property of the button.

## 7.4

For details on this release, see [7.4 release notes](7.4).

### 7.4.0<a name="KI740"></a>

* Downloading FileDocuments (as in, images) on Mendix Cloud V4 is broken. The FileDocument download functionality in combination with AWS S3 storage has an issue that prevents files from being found; therefore, images are not being shown. (Ticket 54304)
  * Fixed in [7.5.0](7.5#RN750).

## 7.3

For details on this release, see [7.3 release notes](7.3).

### 7.3.0<a name="KI730"></a>

* When you have a conditionally visible container that contains a conditionally visible widget, the widget is not always initialized properly.
   * Fixed in [7.4.0](7.4#RN740).

## 7.2

For details on this release, see [7.2 release notes](7.2).

### 7.2.0<a name="KI720"></a>

* Changes for reference set members that are read-only for the user are not correctly serialized from the server to the client (browser). This can lead to an `IllegalArgumentException` with this message: “Global identifier should be a number.” (Ticket 52317)
    * Fixed in [7.3.0](7.3#RN730).

## 7.1

For details on this release, see [7.1 release notes](7.1).

### 7.1.0<a name="KI710"></a>

* Currently you can configure expression-based conditional visibilitity/editability on any element. But this will be ignored on elements outside of a data container: on data views, list views, and template grids. Note that you still cannot configure attribute-based conditions on such elements.
    * Fixed in [7.2.0](7.2#RN720).
* The offline functionality for mobile apps is broken.
    * Fixed in [7.1.1](7.1#RN711).

## 7.0

For details on this release, see [7.0 release notes](7.0).

### 7.0.2<a name="KI702"></a>

#### Stateless runtime known issues

* The `RuntimeStatistics` page in the administration module is broken, as the `System.Statistics` entity is not created anymore. This was used for an earlier version of horizontal scalability and has become obsolete. In a future version, the `System.Statistics` entity will be removed from the `System` module, and the `Administration.RuntimeStatistics` page and the `Administration.ViewStatistics` microflow will be removed automatically from the `Administration` module.
  * Fixed in [7.1.0](7.1#RN710).
* Pages showing objects that contain accessible hashed string attributes with empty values are broken. You cannot call a microflow or open a different page. Please note that this is not easy to model, so you might not encounter this issue.
  * Fixed in [7.1.0](7.1#RN710).
* Hybrid apps will not start if they contain a reporting widget.
  * Fixed in [7.1.0](7.1#RN710).
* Offline hybrid apps are not supported yet.
  * Fixed in [7.1.0](7.1#RN710).

#### Other known issues

* In certain situations, OnChange microflows may not reflect changes done in the UI. Instead, an older version of the object will be used.
  * Fixed in [7.3.0](7.3).
* Some users working on Windows 7 and 8.1 might experience issues during installation of the .NET Framework bundled with the Modeler installer. Installing .NET Framework from the [official Microsoft website](https://www.microsoft.com/en-us/download/details.aspx?id=53345) resolves these issues.
* Upgrading an anonymous user to a signed-in user does not transfer the state yet.
* In calculated attribute microflows, objects associated with `$currentUser` or `$currentSession` cannot be retrieved in the calculated microflow if the association has not been committed to the database.
* When triggering multiple microflows from the client concurrently that commit the same new object, you might get a “duplicate key violation” exception. This is due to a race condition. Triggering the microflow again should not raise an exception again. You can avoid this issue by configuring a blocking progress bar for the button or by using the **Disabled during action** property.
* Disallowing concurrent execution of microflows in a multi-node cluster environment does not work. The feature still works on a single node.
