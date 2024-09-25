---
title: "Translation Generator"
url: /refguide/translation-generator/
weight: 80
description: "Describes the features in Translation Generator."
---

## Introduction 

{{% alert color="info" %}}
Translation Generator is currently an experimental feature introduced in Studio Pro 10.12.0. For more information on experimental features, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

Translation Generator is an AI-powered translation tool available in Mendix Studio Pro. You can use it for [batch translate](/refguide/batch-translate/). In Studio Pro 10.14.0 and above, you can also use it to translate [system texts](/refguide/system-texts/).

For more information on how to enable and use it in Studio Pro, see the sections below.

## Modeling Using Translation Generator

To enable Translation Generator, go to **Preferences** > the **New Features** tab > the **Maia** section.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/enable-translation-generator.png" max-width=100% >}}

### Generating Translation for Batch Translate {#batch-translate}

Once enabled, you will find the **Generate Translations...** option in **Language** > **Batch translate**. 

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/batch-translate.png" max-width=80% >}}

It helps you to translate your model to different languages for which you may not have a translation. It gives translations for the languages that you have selected, using parameters in the way that works specifically for the selected languages.

After clicking **Generate Translations...**, you will be asked to confirm your choice and be advised to review the generated translations.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/confirmation.png" max-width=80% >}}

Once translations are generated, you need to Click **Translate** to save the changes. You can then go to the next language to translate further.

{{% alert color="warning" %}}
Currently, if you encounter an error after clicking **Generate Translations...**, try to sign out and sign in to Studio Pro again.
{{% /alert %}}

### Generating Translation for System Texts {#translate-system-text}

In Studio Pro 10.14.0 and above, you can also use Translation Generator in the web version of the [system texts](/refguide/system-texts/) editor. 

The web-based system texts editor was released in Studio Pro 10.14.0 as an experimental feature. You can enable it via **Preferences** > the **New Features** tab > the **System Texts Editor** section.

After enabling the new editor and Translation Generator, make sure to restart Studio Pro. You will then see the **Generate translation** option from **App Explorer** > **App '*APP_NAME*'** > **System texts**.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/translation-generator/translate-system-text.png" max-width=80% >}}

It generates translation for the system texts based on what the [current language](/refguide/translatable-texts/#current-language) is for app end-users. 

## Read More

* [Batch Translate](/refguide/batch-translate/)
* [System Texts](/refguide/system-texts/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
