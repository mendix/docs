---
title: "Maia for OQL"
url: /refguide/maia-for-oql/
weight: 78
description: "Describes the features in Maia for OQL Generation."
---

## Introduction

{{% alert color="info" %}}
To use Maia for OQL, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia for OQL enables you to generate and manage OQL (Object Query Language) queries. It simplifies query creation and reduces manual effort. It has some limitations. For more details, see the [Limitations](#limitations) section below.

## Using Maia for OQL

### In Studio Pro 11.9 and Above

In Studio Pro 11.9 and above, Maia for OQL is incorporated into the unified Maia Make capabilities, which are enabled by default. Maia for OQL does not have a dedicated interface. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

{{% alert type="info" %}}
Studio Pro 11.13 and above, and 11.12.2 and above, include a setting to enable or disable OQL generation with Maia. OQL generation always uses the Mendix Platform regardless of the configured AI provider. To use OQL generation, you must enable both **Enable Maia** and **Enable OQL Tool**.
{{% /alert %}}

### In Studio Pro 11.8 and Below

In Studio Pro 11.8 and below, to enable Maia for OQL, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for OQL Generation**.

After you enable it, you can access it from the toolbar in the **OQL Editor**:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-oql-generator/maia-for-oql-button.png" alt="" max-width=80% >}}

Clicking **Maia for OQL** opens a dedicated chat interface on the right side of Studio Pro, under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-oql-generator/maia-pane-for-oql-generator.png" alt="" max-width=42% >}}

Describe the data you need. For example, if you type *Show all active orders with customer names*, Maia generates the most relevant OQL query based on the data available in the same module.

Maia interprets your intent and provides a query that fits your requirements, helping you avoid manual query creation and common syntax errors.

## Limitations {#limitations}

Maia for OQL has the following limitations:

* Maia for OQL currently supports only [view entities](/refguide/view-entities/).
* Associations with a **custom name** are not supported.
* Cross-module associations are not supported.
* The chat history does not retain previous OQL examples.
