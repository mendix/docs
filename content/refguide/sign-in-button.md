---
title: "Sign In Button"
parent: "authentication-widgets"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The sign in button widget is not supported on native mobile pages.{{% /alert %}}

The sign in button sends a user's login id and password to the server for authentication. Any errors are displayed in a [validation message widget](validation-message) or in a pop-up window. 

It must be placed on a page together with a [login id text box](login-id-text-box) and a [password text box](password-text-box).

## Common Properties

{{% snippet file="refguide/name+property.md" %}}

{{% snippet file="refguide/class+property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## General Properties

{{% snippet file="refguide/caption+property.md" %}}

{{% snippet file="refguide/Tooltip+Property.md" %}}

{{% snippet file="refguide/image+property.md" %}}

{{% snippet file="refguide/Render+Mode+Property.md" %}}

{{% snippet file="refguide/button+style+property.md" %}}

### Validation Message Widget

Designates the [validation message widget](validation-message) that should display authentication failure messages. By default no widget is selected, which results in authentication messages being displayed in a pop-up window.

Default value: None

## Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Extended.md" %}}
