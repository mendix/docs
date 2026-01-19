---
title: "Translation Generator"
url: /refguide/translation-generator/
weight: 80
description: "Describes the features in Translation Generator."
---

## Introduction 

{{% alert color="info" %}}
To use Translation Generator, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Translation Generator is a translation tool powered by AI in Mendix Studio Pro. You can use this AI tool in Studio Pro to [batch translate](/refguide/batch-translate/) your Mendix app into a different language. You can also use it to translate [system texts](/refguide/system-texts/).

For more information on how to enable and use this AI translation tool in Studio Pro, see the sections below.

## Modeling Using Translation Generator

To enable Translation Generator, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable translation generator**.

### Generating Translation for Batch Translate {#batch-translate}

Once enabled, the **Generate Translations...** option appears in **Language** > **Batch translate**. 

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/batch-translate.png" max-width=80% >}}

Translation Generator helps you to translate your model to different languages. It gives translations for the languages that you have selected, using parameters in the way that works specifically for the selected languages.

{{% alert color="info" %}}
Translation Generator only translates the texts that do not have a translation yet, so only when their corresponding **Translation** field is empty.
{{% /alert %}}

After clicking **Generate Translations...**, you will be asked to confirm your choice and be advised to review the generated translations.

Once translations are generated, you need to Click **Translate** to save the changes. You can then go to the next language to translate further.

{{% alert color="warning" %}}
Currently, if you encounter an error after clicking **Generate Translations...**, try to sign out and sign in to Studio Pro again.
{{% /alert %}}

### Generating Translation for System Texts {#translate-system-text}

You can also use Translation Generator in the web version of the [system texts](/refguide/system-texts/) editor. 

After enabling Translation Generator, you will see the **Generate translation** option from **App Explorer** > **App '*APP_NAME*'** > **System texts**:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/translate-system-text.png" max-width=80% >}}

It generates translation for the system texts based on what the [current language](/refguide/translatable-texts/#current-language) is for app end-users. 

## Read More

* [Batch Translate](/refguide/batch-translate/)
* [System Texts](/refguide/system-texts/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
