---
title: "System Texts"
url: /refguide7/system-texts/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


System texts are texts that are shown to end users by the server or the client. For example, if you enter invalid text into a field that expects a number, the system will give the message 'This value should be a number without fractions'. This text can be changed and translated to other languages in the system texts editor.

## Languages

In the [project settings](/refguide7/project-settings/) you can manage the available languages of your application. For each language you can specify the translation of the system texts. If you do not provide a translation the text will be shown in the default language.

## Parameters

Some system texts have parameters that can be inserted into the text. For example, if you delete items in a data grid, the following question will appear: 'Delete {1} items?'. At the position of the text {1} the first parameter will be inserted. In this case, the parameter is the number of objects that are selected for deletion. You are not required to use the parameter and the text 'Delete these items?' would also be a valid text.
