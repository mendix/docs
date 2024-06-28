---
title: "Validation Message"
url: /refguide9/validation-message/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The validation message widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The **Validation message** widget displays an authentication failure message on a page:

{{< figure src="/attachments/refguide9/modeling/pages/authentication-widgets/validation-message/validation-message.png" alt="Validation Message Widget" class="no-border" >}}

It is only displayed to an end-user when both of the following conditions are met:

1. The validation message selected in the **Validation message widget** property of a sign-in button. For more information on this property, see the [Validation Message Widget](/refguide9/sign-in-button/#validation-message-widget) section in *Sign-In Button*. 
2. An authentication fails, that is the end-user entered invalid credentials.

## 2 Properties

An example of validation message properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/authentication-widgets/validation-message/validation-message-properties.png" alt="Validation Message Properties"   width="300"  class="no-border" >}}

Validation message properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### 2.2 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}}

## 3 Read More

* [Page](/refguide9/page/)
* [Login ID Text Box](/refguide9/login-id-text-box/)
* [Password Text Box](/refguide9/password-text-box/)
* [Sign-In Button](/refguide9/sign-in-button/)
