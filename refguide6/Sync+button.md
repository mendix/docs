---
title: "Sync button"
parent: "Button+Widgets"
---


<div class="alert alert-warning">{% markdown %}

The documentation in this section describes a new feature that is still in beta, and is subject to change before the final release.

{% endmarkdown %}</div> 

The sync button synchronizes the data stored locally on your device with the server database. Any changes made online will transfer into your offline application and any objects created offline will be committed to the online database. After synchronization is complete any relevant widgets on the page will be updated to include the new changes. 

The button will only function while running a hybrid application with offline capability enabled. When triggered in an online page it will throw an exception. 

Please note that if the server returns an exception during synchronization, all newly created objects queued for upload will be lost. As such, it is strongly recommended you configure your uploads without restrictions that might cause an exception. For example, if your domain model is configured to require a unique name attribute and one of the many objects you are submitting has a duplicate name, the entire transaction will be reverted and all new objects will be removed. To circumvent this, use a before commit flow to manage your validation. 

## Button properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Render+Mode+Property.md %}

{% snippet Button+Style+Property.md %}

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## Visibility properties

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}
