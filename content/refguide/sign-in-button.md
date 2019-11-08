---
title: "Sign In Button"
parent: "authentication-widgets"
tags: ["studio pro", "sign-in button", "sign in", "authentication widget", "authentication" ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The **Sign-in button** is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The **Sign-in button** sends a user's login id and password to the server for authentication. Any errors are displayed in a [validation message widget](validation-message) or in a pop-up window. 

The **Sign-in button** should be placed on a page together with a [Login ID text box](login-id-text-box) and a [Password text box](password-text-box).

## 2 Properties

An example of sign-in button properties is represented in the image below:

{{% image_container width="250" %}}![](../releasenotes/studio/attachments/8.0/sign-in-button-properties.png)
{{% /image_container %}}

Sign-in properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Design Properties Section {#design-properties}

{{% snippet file="refguide/design-section-link.md" %}}

###2.3 General Section {#general}

Most properties of a sign-in button are the same as properties of button widgets. For more information on button properties in the **General** section, see the [General Section](button-properties#general) in *Button Properties*.

#### 2.3.1 Validation Message Widget

**Validation message widget** is a specific property of a sign-in button. It defines the [Validation message widget](validation-message) that displays authentication failure messages on a page. If no widget is selected in this property, authentication failure messages will be displayed in a pop-up window:
![Validation Failure](../releasenotes/studio/attachments/8.0/validation-failure.png)

*Default value*: None

### 2.4 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](page)
* [Login ID Text Box](login-id-text-box)
* [Password Text Box](password-text-box)
* [Validation Message Widget](validation-message)