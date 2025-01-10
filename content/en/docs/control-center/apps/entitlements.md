---
title: "Entitlements"
url: /control-center/entitlements/
description: "Describes the Entitlements page in the Mendix Control Center."
weight: 50
beta: true
no_list: true 

---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

The **Entitlements** page is a self-service tool that displays the transactions using cloud tokens. You can use the page to monitor your consumption of cloud tokens.

{{< figure src="/attachments/control-center/apps/entitlements/entitlements.png" alt="entitlements page" >}}

## What Are Mendix Cloud Tokens? {#cloud-tokens}

Mendix cloud tokens are annual capacity-based virtual credits that allow you to provision and allocate any Mendix [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) for your Mendix Cloud deployments.

To use cloud tokens, you need to enable self-service. If you want to enable self-service or have questions about cloud tokens, contact your Customer Success Manager (CSM).

{{% alert color="info" %}}
If you previously worked with cloud credits, please note that cloud tokens have now replaced cloud credits. Cloud tokens will be available as a product on the Mendix pricelist, starting in early 2025. One cloud credit is equivalent to ten cloud tokens. For more information, see the [Transition from Cloud Credits to Cloud Tokens](#cloud-tokens-faq).
{{% /alert %}}

{{% alert color="info" %}}
From now on, you can only purchase and provision standard, premium, and premium plus cloud resource packs, not legacy resource packs. The cloud tokens for legacy resource packs that you already purchased will be credited back to your account if you deprovision an environment.
{{% /alert %}}

## Cloud Resource Packs

{{% alert color="info" %}}
For the technical details of each cloud resource pack, see the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section in *Mendix Cloud*.
{{% /alert %}}

The tables below show how many cloud tokens each cloud resource pack costs:

| Standard Resource Packs | Cloud Tokens |
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

|Premium Resource Packs | Cloud Tokens |
| --- | --: |
| S21 | 30 |
| M21 | 60 |
| L21 | 120 |
| XL21 | 240 |
| 2XL21 | 480 |
| 3XL21 | 960 |
| 4XL21 | 1920 |
| 4XL-5XLDB | 3360 |

|Premium Plus Resource Packs | Cloud Tokens |
| --- | --: |
| XL21 | 400 |
| 2XL21 | 800 |
| 3XL21 | 1600 |
| 4XL21 | 3200 |
| 4XL-5XLDB | 5600 |

| Legacy Resource Packs | Cloud Tokens |
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

## Transition from Cloud Credits to Cloud Tokens{#cloud-tokens-faq}

If you previously worked with cloud credits, you can see the following changes after Mendix cloud tokens are introduced:

* Name change: cloud tokens are the successor to cloud credits and completely replace this concept. Cloud tokens have replaced cloud credits throughout the Mendix Platform. This name change has primarily affected the **Entitlements** page and the [Deployed Apps](/control-center/deployed-apps/) page in Control Center.
* Value adjustment: A cloud credit is equivalent to ten cloud tokens. As a result, Mendix cloud resource packs are valued differently with cloud tokens compared to cloud credits. For example, the smallest cloud resource pack, XS standard resource pack, which was valued at one cloud credit, is now equivalent to ten cloud tokens. Your existing transactions and the number of cloud tokens are automatically adjusted. You can see this change on the **Entitlements** page in Control Center. 
* Direct ordering: you can order Mendix cloud tokens directly from the Mendix pricelist. You can use your available cloud tokens to provision any cloud resource pack for your apps.

For any questions, contact your Mendix Customer Success Manager. If you experience any issues, create a support ticket with Mendix Support.
