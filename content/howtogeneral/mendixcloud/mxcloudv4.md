---
title: "Mendix Cloud v4 - FAQ"
space: "General How-To's"
category: "Mendix Cloud"
---

## What Will Change for Me?

Nothing right now. We are working with early customers to upgrade. 

New apps will be launched on Mendix Cloud v4 by default starting from Q1 2017. However, customers that need to stay on v3 because they use a VPN can still get new apps on v3 for the foreseeable future.

## Can I Upgrade All My Apps?

Your app needs to be on **Mendix 6.0 or higher**. 

We also recommend that your apps are built as [12-factor apps](https://12factor.net/). 

The main change will be for apps that use long-running scheduled events. Our recommendation is to split these up into smaller chunks and use the Amazon SQS connector to spread the work out over multiple instances. 

Initially, the new platform is only for new applications. We will be starting a migration program in 2017.

## Where Will My Data Be Hosted?

The primary hosting locations are as follows:

*   Mendix Cloud EU: AWS Frankfurt
*   Mendix Cloud US: AWS North Virginia

The data will always be stored in the same political region: 

*   Data in the EU, including backups, will stay within the EU
*   Data in the US, including backups, will stay within the US

## What Are the Limitations?**

Initially, we won't have a **mail server**. You can use a third-party email provider instead. 

A VPN (which is already deprecated in favor of client certificates) will not be possible in the Mendix Cloud v4. 

For more details, see [Certificates](/refguide/certificates) in the Mendix Reference Guide.

## Is the Java Security Manager Still in Place?

No. In the previous generation we used the Java Security Manager to enforce standardization and to act as an additional security layer. In Cloud Foundry, short-lived containers already ensure standardization, and apps are completely isolated from the management network. Therefore, the Java Security Manager will not be enabled on the new environment.
