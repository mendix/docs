---
title: "Sign-In Button"
url: /refguide9/sign-in-button/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The **Sign-in button** is not supported on native mobile pages.{{% /alert %}}

## Introduction

The **Sign-in button** sends a user's login ID and password to the server for authentication:

{{< figure src="/attachments/refguide9/modeling/pages/authentication-widgets/sign-in-button/sign-in-button.png" alt="Sign-In Button" class="no-border" >}}

Any errors are displayed in a [validation message widget](#validation-message-widget) or in a pop-up window. 

The **Sign-in button** should be placed on a page together with a [Login ID text box](/refguide9/login-id-text-box/) and a [Password text box](/refguide9/password-text-box/).

## Properties

An example of sign-in button properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/authentication-widgets/sign-in-button/sign-in-button-properties.png" alt="Sign-In Button Properties"   width="250"  class="no-border" >}}

Sign-in button properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}}

### General Section {#general}

Most properties of a sign-in button are the same as properties of buttons. For more information on button properties in the **General** section, see the [General Section](/refguide9/button-properties/#general) in *Button Properties*.

#### Validation Message Widget {#validation-message-widget}

**Validation message widget** is a specific property of a sign-in button. It defines the [Validation message widget](/refguide9/validation-message/) that displays authentication failure messages on a page. If no widget is selected in this property, authentication failure messages will be displayed in a pop-up window:
{{< figure src="/attachments/refguide9/modeling/pages/authentication-widgets/sign-in-button/validation-failure.png" alt="Validation Failure" class="no-border" >}}

Default: *None*

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## Read More

* [Page](/refguide9/page/)
* [Login ID Text Box](/refguide9/login-id-text-box/)
* [Password Text Box](/refguide9/password-text-box/)
* [Validation Message](/refguide9/validation-message/)
