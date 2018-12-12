---
title: "Hybrid Tablet Profile"
parent: "navigation-before-72"
description: "Describes usage of the Hybrid Tablet profile in a Mendix app for Mendix versions 7.0 and 7.1."
---

{{% alert type="warning" %}}

For details on how this works in Mendix versions 7.2 and 7.3, see [Navigation in 7.2 and 7.3](navigation-in-72-and-73). For Mendix version 7.4 and above, see [Navigation](navigation).

{{% /alert %}}

When the hybrid tablet profile is enabled, every user that accesses the Mendix application from a PhoneGap hybrid application running on a tablet device will automatically be redirected to this profile. If the hybrid tablet profile is disabled, tablet users will be redirected to the [hybrid phone profile](hybrid-phone-profile). If the hybrid phone profile is disabled, users will be redirected to the [desktop profile](desktop-profile).

{{% snippet file="refguide/Profile+properties.md" %}}
