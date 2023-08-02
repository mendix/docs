---
title: "System Texts"
url: /refguide/system-texts/
tags: ["studio pro", "system text"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

System texts are texts that are shown automatically to end-users by the server or the client. 

For example, if an end-user enters a string into a search field that expects a number, the system will show the error message 'Invalid number' to the end-user:

{{< figure src="/attachments/refguide/modeling/app-explorer/app/system-texts/example-invalid-number.png" width="300px" >}}

You can change the system texts in the following way:

1. Go to the system texts editor: **App Explore** > **App 'AppName'** > **System texts** > **Text**.
2. Click on the texts in the **Text** column to edit the texts.

## 2 Languages

In the [App Settings](/refguide/project-settings/), you can manage the available languages of your application. For each language, you can specify the translation of the system texts. If you do not provide a translation, the text will be shown in the default language.

## 3 Parameters

Some system texts have parameters that can be inserted into the text. 

For example, if you delete items in a data grid, the following question will appear: 'Delete {1} items?'. At the position of the text {1} the first parameter will be inserted. In this case, the parameter is the number of objects that are selected for deletion. You are not required to use the parameter and the text 'Delete these items?' would also be a valid text.
