---
title: "Hybrid Phone Profile"
space: "Mendix 7 Reference Guide"
parent: "navigation-before-72"
description: "Describes usage of the Hybrid Phone profile in a Mendix app for Mendix versions 7.0 and 7.1."
---

<div class="alert alert-warning">{% markdown %}

For details on how this works in Mendix versions 7.2 and 7.3, see [Navigation In 7.2 and 7.3](navigation-in-72-and-73). For Mendix version 7.4 and higher, see [Navigation](navigation).

{% endmarkdown %}</div>

When the Hybrid Phone profile is enabled, users who accesses the Mendix application from a PhoneGap hybrid application running on a phone device will automatically be redirected to this profile. If the Hybrid Phone profile is disabled, phone users will be redirected to the [Hybrid Tablet Profile](hybrid-tablet-profile). If there is no Hybrid Tablet profile, users will be redirected to the [Desktop Profile](desktop-profile).

{% snippet Profile+properties.md %}
