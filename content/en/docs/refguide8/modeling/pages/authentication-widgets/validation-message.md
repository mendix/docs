---
title: "Validation Message"
url: /refguide8/validation-message/
parent: "authentication-widgets"
tags: ["studio pro", "validation message", "authentication widget", "authentication"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/validation-message.pdf).
{{% /alert %}}

{{% alert type="warning" %}}The validation message widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The **Validation message** widget displays an authentication failure message on a page:

![Validation Message Widget](/attachments/refguide8/modeling/pages/authentication-widgets/validation-message/validation-message.png)

 It is only displayed to an end-user when both of the following conditions are met:

1.  The validation message selected in the **Validation message widget** property of a sign-in button. For more information on this property, see the [Validation Message Widget](/refguide8/sign-in-button/#validation-message-widget) section in *Sign-In Button*. 
2.  An authentication fails, that is the end-user entered invalid credentials.

## 2 Properties

An example of validation message properties is represented in the image below:

{{% image_container width="300" %}}![Validation Message Properties](/attachments/refguide8/modeling/pages/authentication-widgets/validation-message/validation-message-properties.png)
{{% /image_container %}}

Validation message properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)

### 2.1 Common Section {#common}

{{% snippet file="refguide8/common-section-link.md" %}}

### 2.2 Design Properties Section {#design-properties}

{{% snippet file="refguide8/design-section-link.md" %}}

## 3 Read More

* [Page](/refguide8/page/)
* [Login ID Text Box](/refguide8/login-id-text-box/)
* [Password Text Box](/refguide8/password-text-box/)
* [Sign-In Button](/refguide8/sign-in-button/)