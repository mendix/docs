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

{{% image_container width="350" %}}![]()
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

#### Validation Message Widget

Designates the [validation message widget](validation-message) that should display authentication failure messages. By default no widget is selected, which results in authentication messages being displayed in a pop-up window.

Default value: None

### 2.4 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](page)
* [Login ID Text Box](login-id-text-box)
* [Password Text Box](password-text-box)