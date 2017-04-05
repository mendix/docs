---
title: "Hybrid Tablet Profile"
space: "Mendix 7 Reference Guide"
parent: "navigation-before-72"
description: "Describes usage of the Hybrid Tablet profile in a Mendix app."
---

<div class="alert alert-info">{% markdown %}

For details on how this works in Mendix version 7.2 and higher, see [Navigation Profile](navigation-profile).

{% endmarkdown %}</div>

When the Hybrid Tablet profile is enabled, every user that accesses the Mendix application from a PhoneGap hybrid application running on a tablet device will automatically be redirected to this profile. If the Hybrid Tablet profile is disabled, tablet users will be redirected to the [Hybrid Phone Profile](hybrid-phone-profile). If the Hybrid Phone profile is disabled, users will be redirected to the [Desktop Profile](desktop-profile).

{% snippet Profile+properties.md %}
