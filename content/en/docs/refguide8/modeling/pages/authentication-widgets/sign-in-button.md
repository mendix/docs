---
title: "Sign-In Button"
url: /refguide8/sign-in-button/
tags: ["studio pro", "sign-in button", "sign in", "authentication widget", "authentication" ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/sign-in-button.pdf).
{{% /alert %}}

{{% alert color="warning" %}}The **Sign-in button** is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The **Sign-in button** sends a user's login ID and password to the server for authentication:

{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button/sign-in-button.png" alt="Sign-In Button" >}}

Any errors are displayed in a [validation message widget](#validation-message-widget) or in a pop-up window. 

The **Sign-in button** should be placed on a page together with a [Login ID text box](/refguide8/login-id-text-box/) and a [Password text box](/refguide8/password-text-box/).

## 2 Properties

An example of sign-in button properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button/sign-in-button-properties.png" alt="Sign-In Button Properties"   width="250"  >}}

Sign-in button properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}}

### 2.3 General Section {#general}

Most properties of a sign-in button are the same as properties of button widgets. For more information on button properties in the **General** section, see the [General Section](/refguide8/button-properties/#general) in *Button Properties*.

#### 2.3.1 Validation Message Widget {#validation-message-widget}

**Validation message widget** is a specific property of a sign-in button. It defines the [Validation message widget](/refguide8/validation-message/) that displays authentication failure messages on a page. If no widget is selected in this property, authentication failure messages will be displayed in a pop-up window:
{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button/validation-failure.png" alt="Validation Failure" >}}

Default: *None*

### 2.4 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 3 Read More

* [Page](/refguide8/page/)
* [Login ID Text Box](/refguide8/login-id-text-box/)
* [Password Text Box](/refguide8/password-text-box/)
* [Validation Message](/refguide8/validation-message/)