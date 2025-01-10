---
title: "System Texts"
url: /refguide/system-texts/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
In Studio Pro 10.14.0, the web version of the system texts editor was released as an [experimental](/releasenotes/beta-features/) feature. You can enable it via **Preferences** > **New Features**. 

If Translation Generator is also enabled, you can use this AI-powered translation tool in the new editor to translate the system texts. For more information, see the [Generating Translation for System Texts](/refguide/translation-generator/#translate-system-text) section in *Translation Generator*.
{{% /alert %}}

System texts are texts that are shown automatically to end-users by the server or the client. 

For example, if an end-user enters a string into a search field that expects a number, the system will show the error message 'Invalid number' to the end-user:

{{< figure src="/attachments/refguide/modeling/app-explorer/app/system-texts/example-invalid-number.png" width="300px" class="no-border" >}}

You can change the system texts in the following way:

1. Go to the system texts editor: **App Explore** > **App 'AppName'** > **System texts** > **Text**.
2. Click on the texts in the **Text** column to edit the texts.

## Languages

In the [App Settings](/refguide/project-settings/), you can manage the available languages of your application. For each language, you can specify the translation of the system texts. If you do not provide a translation, the text will be shown in the default language.

## Parameters

Some system texts have parameters that can be inserted into the text. 

For example, if you delete items in a data grid, the following question will appear: 'Delete {1} items?'. At the position of the text {1} the first parameter will be inserted. In this case, the parameter is the number of objects that are selected for deletion. You are not required to use the parameter and the text 'Delete these items?' would also be a valid text.
