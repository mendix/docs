---
title: "Save button"
parent: "button-widgets"
---


The save button works in conjunction with a top-level [Data view](data-view). Pressing the button will commit any changes made on the object shown in the data view.

## Button properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Render+Mode+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

{{% snippet file="refguide6/Button+Close+Page+Property.md" %}}

## Common properties

{{% snippet file="refguide6/Name+Property.md" %}}

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

{{% snippet file="refguide6/Tab+index+Property.md" %}}

## Visibility properties

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Extended.md" %}}

## Offline

### Sync automatically

{{% alert type="info" %}}

Added in Mendix 6.6.0

{{% /alert %}}

When an object is saved in a Mendix application running in an [offline profile,](offline-device-profile) this information is stored in a local database until it can be synchronized with the server. In practice, this means that uploading a new object to the server requires two distinct actions; saving the object and [syncing it.](sync-button)

Enabling this setting will trigger an automatic synchronization event when the save button is clicked. This will streamline the user experience, saving them the trouble of tapping a sync button, though it will require the user to wait for the sync event to complete. Like any other sync event, this will also prevent the user from editing objects already queued for synchronization.
