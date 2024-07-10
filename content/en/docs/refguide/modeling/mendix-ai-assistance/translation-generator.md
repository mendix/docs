---
title: "Translation Generator"
url: /refguide/translation-generator/
weight: 30
description: "Describes the features in Translation Generator."
---

## 1 Introduction 

{{% alert color="info" %}}
Translation Generator is currently an experimental feature introduced in Studio Pro 10.12.0. For more information on experimental features, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

Translation Generator is an AI-powered translation tool that you can use for [Batch translate](/refguide/batch-translate/). It helps you to translate your model to different languages for which you may not have a translation. It gives translations for the languages that you have selected, using parameters in the way that works specifically for the selected languages.

## 2 Modeling Using Translation Generator

To enable Translation Generator, go to **Preferences** > the **New Features** tab > the **Maia** section.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/enable-translation-generator.png" max-width=100% >}}

Once enabled, you will find the **Generate Translations...** option in **Language** > **Batch translate**. 

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/translation-generator.png" max-width=80% >}}

After clicking **Generate Translations...**, you will be asked to confirm your choice and be advised to review the generated translations.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/confirmation.png" max-width=80% >}}

Once translations are generated, you need to Click **Translate** to save the changes. You can then go to the next language to translate further.

{{% alert color="warning" %}}
Currently, if you encounter an error after clicking **Generate Translations...**, try to sign out and sign in to Studio Pro again.
{{% /alert %}}

## 3 Read More

* [Batch Translate](/refguide/batch-translate/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
