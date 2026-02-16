---
title: "Sign-In Button"
url: /refguide/sign-in-button/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The **sign-in button** widget is a Dojo widget.

This widget is not supported on native mobile pages.

This widget is not supported in the [React client](/refguide/mendix-client/react/).

Upgrade it to the normal input and action widgets as shown in the Atlas login page template. See the Mendix React Client's [Migration Guide](/refguide/mendix-client/react/#sign-in-widgets) for more information.

If you [switch to the React client](/refguide/app-settings/#react-client), the widget will not appear in the **Toolbox**.

The Dojo client is deprecated and will be removed in Mendix 12. It continues receiving security and stability updates until the end of support of Mendix 11.24.
{{% /alert %}}

## Introduction

The **Sign-in button** sends a user's login ID and password to the server for authentication:

{{< figure src="/attachments/refguide/modeling/pages/authentication-widgets/sign-in-button/sign-in-button.png" alt="Sign-In Button" class="no-border" >}}

Any errors are displayed in a [validation message widget](#validation-message-widget) or in a pop-up window. 

The **Sign-in button** should be placed on a page together with a [Login ID text box](/refguide/login-id-text-box/) and a [Password text box](/refguide/password-text-box/).

## Properties

An example of sign-in button properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/authentication-widgets/sign-in-button/sign-in-button-properties.png" alt="Sign-In Button Properties"   width="250"  class="no-border" >}}

Sign-in button properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}}

### General Section {#general}

Most properties of a sign-in button are the same as properties of buttons. For more information on button properties in the **General** section, see the [General Section](/refguide/button-properties/#general) in *Button Properties*.

#### Validation Message Widget {#validation-message-widget}

**Validation message widget** is a specific property of a sign-in button. It defines the [Validation message widget](/refguide/validation-message/) that displays authentication failure messages on a page. If no widget is selected in this property, authentication failure messages will be displayed in a pop-up window:
{{< figure src="/attachments/refguide/modeling/pages/authentication-widgets/sign-in-button/validation-failure.png" alt="Validation Failure" class="no-border" >}}

Default: *None*

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## Read More

* [Page](/refguide/page/)
* [Login ID Text Box](/refguide/login-id-text-box/)
* [Password Text Box](/refguide/password-text-box/)
* [Validation Message](/refguide/validation-message/)
