---
title: "Cloud Tokens"
url: /control-center/cloud-tokens/
description: "Describes the Cloud Tokens page in the Mendix Control Center."
weight: 20
no_list: false 

#This page contains the Cloud Tokens equivalence of all Cloud Resource Packs. It is referenced in the legal documentation and in the Order Forms that customers sign. Any changes to this page must be validated by Peter Koemans and Satyam Singh.
---

## Introduction

The **Cloud Tokens** page displays your company's Mendix Cloud Token balance: the number of available, consumed, and total Tokens. The page also includes a list of transactions that use Mendix Cloud Tokens. 

## Cloud Token Details

These are the details available for each transaction that uses Mendix Cloud Tokens:

* **Date** – The date when the transaction took place.
* **App** – The app that triggered the transaction.
* **Transaction** – The type of transaction.
* **Cloud Resource Pack** – The Cloud Resource Pack that corresponds to the transaction. For more information, refer to [Cloud Resource Packs](#crps).
* **Cloud Credits** – The number of Mendix Cloud Tokens consumed by the transaction.
* **Tokens Remaining** – The number of Mendix Cloud Tokens remaining after the transaction was completed.

## Mendix Cloud Tokens {#cloud-tokens}

Mendix Cloud Tokens are a type of Token that can be used within the Mendix Platform to consume Cloud Resources, such as  [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) (CRPs), for your Mendix Cloud deployments. The contractual definitions of Tokens and Mendix Cloud Tokens can be found on our [Order Form Definitions](https://www.mendix.com/legal/platform-usage/order-form-definitions/#section-9) page.

## Cloud Resource Packs {#crps}

{{% alert color="info" %}}
For the technical details of each cloud resource pack, see the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section of *Mendix Cloud*.
{{% /alert %}}

The number of Mendix Cloud Tokens required for each type of Cloud Resource Pack is specified in the [Cloud Resource Packs](#crps) section of this document. All your current CRPs will be converted to their equivalent Mendix Cloud Tokens and aggregated with any other Mendix Cloud Tokens. You can then use these to provision Cloud resources of any type and size, as specified in your contracts. 

You can see available and used Mendix Cloud Tokens on the **Entitlements** page. If you cannot, contact your Customer Success Manager (CSM).

These tables show how many Mendix Cloud Tokens each CRP requires:

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
| --- | --- |
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

{{% alert color="info" %}} 
You can no longer purchase Legacy Cloud Resources Packs. You can now only purchase and provision Standard, Premium, and Premium Plus CRPs. Any legacy Cloud Resource Packs that you have already purchased will be converted into Mendix Cloud Tokens if they are deprovisioned. This will use the rate specified in the [Cloud Resource Packs](/control-center/cloud-tokens/#crps) section of *Cloud Tokens*, and the Mendix Cloud Tokens will be added to your Token pool.
{{% /alert %}}

## Key Takeaways

* Mendix Cloud Tokens are a specific type of Token used to access Cloud Resources in the Mendix Platform.
* The number of Mendix Cloud Tokens required depends on the CRP you want.
* You buy Tokens in advance, and can use them to obtain CRPs.
* If you no longer need those resources, you can reuse the Token to obtain other CRPs, or keep it to be used later.