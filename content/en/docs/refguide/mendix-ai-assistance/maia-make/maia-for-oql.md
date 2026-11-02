---
title: "OQL in Maia Make"
linktitle: "OQL"
url: /refguide/maia-for-oql/
weight: 78
description: "Describes how Maia Make generates OQL queries for view entities in Studio Pro."
---

## Introduction

{{% alert color="info" %}}
In Studio Pro 11.9 and above, OQL generation is part of [Maia Make](/refguide/maia-make/). In Studio Pro 11.8 and below, it is a separate tool called Maia for OQL.

To use this capability, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia can generate and manage OQL (Object Query Language) queries. This simplifies query creation and reduces manual effort. For information on the current limitations, see the [Limitations](#limitations) section below.

## Working with OQL in Maia

Describe the data you need. For example, if you type *Show all active orders with customer names*, Maia generates the most relevant OQL query based on the data available in the same module.

Maia interprets your intent and provides a query that fits your requirements, helping you avoid manual query creation and common syntax errors.

### In Studio Pro 11.9 and Above

In Studio Pro 11.9 and above, you can generate OQL queries with Maia in the **Chat** tab, which is enabled by default. There is no dedicated interface for OQL. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

{{% alert type="info" %}}
Studio Pro 11.13 and above, and 11.12.2 and above, include a setting to enable or disable OQL generation with Maia. OQL generation always uses the Mendix Platform regardless of the configured AI provider. To use OQL generation, you must enable both **Enable Maia** and **Enable OQL Tool**.
{{% /alert %}}

### Maia for OQL in Studio Pro 11.8 and Below

In Studio Pro 11.8 and below, to enable Maia for OQL, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for OQL Generation**.

After you enable it, you can access it from the toolbar in the **OQL Editor**:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-oql-generator/maia-for-oql-button.png" alt="" max-width=80% >}}

Clicking **Maia for OQL** opens a dedicated chat interface on the right side of Studio Pro, under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-oql-generator/maia-pane-for-oql-generator.png" alt="" max-width=42% >}}

## Limitations {#limitations}

OQL generation with Maia has the following limitations:

* It currently supports only [view entities](/refguide/view-entities/).
* Associations with a **custom name** are not supported.
* Cross-module associations are not supported.
* The chat history does not retain previous OQL examples.
