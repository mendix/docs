---
title: "Maia for OQL"
url: /refguide/maia-for-oql/
weight: 70
description: "Describes the features in Maia for OQL Generation."
---

## Introduction

{{% alert color="info" %}}
An internet connection and signing in to Studio Pro are required to use Maia for OQL.
{{% /alert %}}

Maia for OQL is a powerful feature that enables you to generate and manage OQL (Object Query Language) queries through an intuitive interface. It is designed to simplify query creation and reduce manual effort. Currently it has some limitations. For more details, see the [Limitations](#limitations) section below.

## Using Maia for OQL

To enable this feature, navigate to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for OQL Generation**.

Once enabled, you can access it from the toolbar in the **OQL Editor**:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-oql-generator/maia-for-oql-button.png" max-width=80% >}}

Clicking **Maia for OQL** opens a dedicated chat interface on the right side of Studio Pro, under the **Maia** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-oql-generator/maia-pane-for-oql-generator.png" max-width=42% >}}

To use Maia for OQL, simply describe the data you need. For example, if you type *Show all active orders with customer names*, Maia will generate the most relevant OQL query based on the data available in the same module.

Maia interprets your intent and provides a query that fits your requirements, helping you avoid manual query creation and common syntax errors.

## Limitations {#limitations}

Maia for OQL has the following limitations:

* Maia for OQL currently supports only [view entities](/refguide/view-entities/).
* Associations with a **custom name** are not supported.
* Cross-module associations are not supported.
* The chat history does not retain previous OQL examples.
