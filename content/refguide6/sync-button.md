---
title: "Sync button"
parent: "button-widgets"
---


{{% alert type="warning" %}}

The documentation in this section describes a new feature that is still in beta, and is subject to change before the final release.

{{% /alert %}} 

The sync button synchronizes the data stored locally on your device with the server database. Any changes made online will transfer into your offline application and any objects created offline will be committed to the online database. After synchronization is complete any relevant widgets on the page will be updated to include the new changes. 

The button will only function while running a hybrid application with offline capability enabled. When triggered in an online page it will throw an exception. 

Please note that if the server returns an exception during synchronization, all newly created objects queued for upload will be lost. As such, it is strongly recommended you configure your uploads without restrictions that might cause an exception. For example, if your domain model is configured to require a unique name attribute and one of the many objects you are submitting has a duplicate name, the entire transaction will be reverted and all new objects will be removed. To circumvent this, use a before commit flow to manage your validation. 

## Button properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Render+Mode+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

## Common properties

{{% snippet file="refguide6/Name+Property.md" %}}

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

{{% snippet file="refguide6/Tab+index+Property.md" %}}

## Visibility properties

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Extended.md" %}}
