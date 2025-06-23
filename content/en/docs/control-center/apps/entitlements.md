---
title: "Entitlements"
url: /control-center/entitlements/
description: "Describes the Entitlements page in the Mendix Control Center."
weight: 50
no_list: true 

---

## Introduction

The **Entitlements** page is a self-service tool that displays the transactions using Mendix Cloud Tokens. You can use this page to manage and monitor the consumption of your Mendix Cloud Tokens.

{{< figure src="/attachments/control-center/apps/entitlements/entitlements.png" >}}

## What Are Mendix Cloud Tokens? {#cloud-tokens}

Mendix Cloud Tokens are a type of Token that can be used within the Mendix Platform to consume Cloud Resources, such as  [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) (CRPs), for your Mendix Cloud deployments. The contractual definitions of Tokens and Mendix Cloud Tokens can be found on our [Order Form Definitions](https://www.mendix.com/legal/platform-usage/order-form-definitions/#section-9) page.

The number of Mendix Cloud Tokens required for each type of Cloud Resource Pack is specified in the [Cloud Resource Packs](#crps) section of this document. All your current CRPs will be converted to their equivalent Mendix Cloud Tokens and aggregated with any other Mendix Cloud Tokens. You can then use these to provision Cloud resources (of any type and size) as specified in your contracts. 

To use Mendix Cloud Tokens, you need to enable self-service. If you want to enable self-service or have questions about Mendix Cloud Tokens, contact your Customer Success Manager (CSM).

### Legacy Cloud Resource Packs

{{% alert color="info" %}}
It is no longer possible to purchase Legacy Cloud Resources Packs. It is now only possible to purchase and provision the following CRPs: Standard; Premium; and Premium Plus. Any legacy Cloud Resource Packs you already purchased will be converted into Mendix Cloud Tokens if they are deprovisioned. This will use the rate specified in the [Cloud Resource Packs](#crps) section and the Mendix Cloud Tokens will be added to your Token pool.
{{% /alert %}}

### Key Takeaways

* Mendix Cloud Tokens are a specific type of Token used to access Cloud Resources in the Mendix Platform.
* The number of tokens required depends on the CRP you want, as listed below.
* You buy tokens in advance and can use them to obtain CRPs.
* If you no longer need those resources, you can reuse the token to obtain other CRPs or keep it to be used later.

## Cloud Resource Packs {#crps}

{{% alert color="info" %}}
For the technical details of each cloud resource pack, see the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section of *Mendix Cloud*.
{{% /alert %}}

The tables below show how many Mendix Cloud Tokens each CRP requires:

| Standard Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XS21 | 10 |
| S21 | 20 |
| M21 | 40 |
| L21 | 80 |
| XL21 | 160 |
| 2XL21 | 320 |
| 3XL21 | 640 |
| 4XL21 | 1280 |
| 4XL-5XLDB | 2240 |

|Premium Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| S21 | 30 |
| M21 | 60 |
| L21 | 120 |
| XL21 | 240 |
| 2XL21 | 480 |
| 3XL21 | 960 |
| 4XL21 | 1920 |
| 4XL-5XLDB | 3360 |

|Premium Plus Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XL21 | 400 |
| 2XL21 | 800 |
| 3XL21 | 1600 |
| 4XL21 | 3200 |
| 4XL-5XLDB | 5600 |

| Legacy Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XS20 | 10 |
| S20 | 20 |
| M20 | 40 |
| L20 | 80 |
| XL20 | 160 |
| 2XL20 | 320 |
| Strato | 12 |
| Meso | 47 |
| Iono | 67 |
| Magneto | 147 |
| S | 8 |
| M | 16 |
| L | 37 |
| XL | 73 |
| 2XL | 167 |
| 3XL | 640 |

## Transition from Cloud Credits to Mendix Cloud Tokens{#cloud-tokens-faq}

{{% alert color="info" %}}
If you previously worked with Cloud Credits, please note that Mendix Cloud Tokens have now replaced Cloud Credits. Ten Mendix Cloud Tokens are equivalent to one Cloud Credit. Mendix Cloud Tokens are available as a product on the Mendix pricelist.
{{% /alert %}}

If you previously worked with Cloud Credits, you will see the following changes:

* **Name change** – Mendix Cloud Tokens are the successor to Cloud Credits and have replaced Cloud Credits throughout the Mendix Platform. This name change has primarily affected the Entitlements page and the Deployed Apps page in Control Center.
* **Value adjustment** – Ten Mendix Cloud Tokens are equivalent to one Cloud Credit. As a result, Mendix Cloud Resource Packs (CRPs) have different Mendix Cloud Token values compared to their previous value in Cloud Credits. For example, the smallest CRP, XS Standard Resource Pack, which was valued at one Cloud Credit, is now equivalent to ten Mendix Cloud Tokens. Your existing transactions and the number of Mendix Cloud Tokens are automatically adjusted. You can see this change on the Entitlements page in Control Center.
* **Direct ordering** – you can order Mendix Cloud Tokens directly from the Mendix pricelist and you can use your available Mendix Cloud Tokens to provision any CRPs for your apps.

For any questions, contact your Mendix Customer Success Manager. If you experience any issues, create a support ticket with Mendix Support.
