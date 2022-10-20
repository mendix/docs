---
title: "Integrate Kubernetes with Secret Stores"
url: /developerportal/deploy/private-cloud-secrets/
description: "Describes the process for using external secret stores for Kubernetes secrets"
weight: 20
tags: ["Deploy", "Private Cloud", "Secrets", "Secret Stores", "Vault", "Kubernetes", "AWS"]
---

## 1 Introduction

[text]

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* A k8s ServiceAccount (used for authentication), it needs to match the environment’s internal name (MendixApp CR name) and a few provider-specific annotations
* - [A SecretProviderClass](https://secrets-store-csi-driver.sigs.k8s.io/getting-started/usage.html#create-your-own-secretproviderclass-object) – this is the mapping rules configuration that specifies what should be mounted and where. The format is vendor-specific, but one thing is in common – Mx4PC expects keys to have specific names, there’s a [table listing all keys](https://paper.dropbox.com/doc/Research-to-support-Secrets-Store-CSI-Driver-in-Mendix-Operator.--Brbm2tME4jdxV3zWYTqBdkr6Ag-KvC23pXzgowSeAVOd8Qeh) and what Mx4PC expects to find in each one. Just like the ServiceAccount, it needs to match the environment’s internal name.
* Permissions to read secrets specified in the SecretProviderClass (this is very provider-specific, but typically involves allowing the k8s ServiceAccount to access specific keys – in the Vault or AWS console)
* All the core preparations – the actual secret storage (Vault, AWS SM), a k8s Secret provider such as [the one for AWS](https://paper.dropbox.com/doc/How-to-AWS-Secrets-Manager-CSI-Secrets-Store--Bra7qAbjMeURsK7WxZjWj~l2Ag-EfMEAVkxwbHMgFLfr4YhL)
* at the moment the storage provisioners don’t support CSI Secrets Storage. Any new environment would require a database and blob file storage (S3 bucket) to be created separately, Mx4PC just uses credentials from the secrets as an alternative to environment variables.

## 3 [text]

Document MVP/PoC examples for Vault and AWS SM: 

To [text], follow these steps:

1. Typically, any customer using a Secret Storage would already have a working solution and an expert who knows how to set it up correctly (e.g. storing all credentials in one place increases risks anyone can read/write any password). 
2. To allow customers validate this works just like in our lab environment
3. To provide an additional example so that a customer can use it for troubleshooting – to compare their current setup with our “reference” one.
4. Simplified a much as possible, even when this decreases security. Customers are responsible for making the whole thing secure – from our side, most security features don’t affect the way an app gets its database password.
5. There are some cool provider-specific features that a customer can enable and use – automatic password rotation, automatically generating credentials on-demand and possibly even more. However from our side most of that’s transparent, anything works as long as it matches the spec from the first section.

## 4 [text]

Document the process for an citizen developer:

To [text], follow these steps:

1. It’s not possible to use Storage Plans at the moment with CSI Secret Storage. Instead, a k8s ServiceAccount and SecretProviderClass would be attached to an app by an infrastructure admin before or after an environment is created.
2. Environment internal names need to match an existing ServiceAccount and SecretProviderClass (a cluster admin can probably just tell a user to which environment internal name to use).
3. CSI Secret Storage can override app settings. At the moment it’s just the MxAdmin password, but in the future this can also include app constants and other settings. This is similar to how Mendix Public Cloud sets up configuration for MendixSSO and infrastructure (database and file credentials).