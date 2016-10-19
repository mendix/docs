---
title: "Save button"
space: "Reference Guide 6"
parent: "Button+Widgets"
---


The save button works in conjunction with a top-level [Data view](Data+view). Pressing the button will commit any changes made on the object shown in the data view.

## Button properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Render+Mode+Property.md %}

{% snippet Button+Style+Property.md %}

{% snippet Button+Close+Page+Property.md %}

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## Visibility properties

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}

## Offline

### Sync automatically

<div class="alert alert-info">{% markdown %}

Added in Mendix 6.6.0

{% endmarkdown %}</div>

When an object is saved in a Mendix application running in an [offline profile,](Offline+device+profile) this information is stored in a local database until it can be synchronized with the server. In practice, this means that uploading a new object to the server requires two distinct actions; saving the object and [syncing it.](Sync+button)

Enabling this setting will trigger an automatic synchronization event when the save button is clicked. This will streamline the user experience, saving them the trouble of tapping a sync button, though it will require the user to wait for the sync event to complete. Like any other sync event, this will also prevent the user from editing objects already queued for synchronization.
