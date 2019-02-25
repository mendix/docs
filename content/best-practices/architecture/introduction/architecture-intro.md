---
title: "Introduction"
category: "Architecture"
description: "Best practices for architecture."
menu_order: 1
draft: true
---


The *keytool.exe* program can be found in the “bin” directory of your Java installation. On Windows, it can be found in, for example, *C:\Program Files\Java\jre1.8.0_20\bin*.
2. Upload keystore to Phonegap Build (My Account/Signing Keys): After creating the key store file, upload it to Adobe PhoneGap Build on your [account page](https://build.phonegap.com/). Go to the **Signing Keys** tab and click **Add a key** under **Android**. Select the key store file, fill in a title for the key, and fill in the alias that you noted down in the previous step. After uploading the key store file, unlock the key. Click the yellow lock icon on the right of the key and fill in both the key store and the key passwords. The key is now ready to be used by your build job.

   
## 1 Introduction to Mendix Architecture Best Practices

Mendix is optimized for the easiest and fastest way to develop and maintain apps that fulfill business functions. As the scope of your apps grows larger, architecture becomes more important. At that point, you should leverage best practices in this area.

The Mendix architecture best practices complements the following sections in the Mendix 

* Evaluation Guide:
* Data Management
* Integration
* Deployment
* DevOps
* Architecture
* Security

Mendix best practices around architecture will be valuable for architects, designers, business developers, and more technical developers that work on Mendix app projects. The best practices address common areas where the quality of Mendix solutions can improve by using this information or using the examples in the App Store.

{{% todo %}}[**ADD LINK TO APP STORE WHEN AVAILABLE ABOVE; UPDATE DIAGRAM BELOW**]{{% /todo %}}

![](attachments/arch-over1.png)

## 2 Architecture Best Practice Areas

These are the architecture subject areas that will be covered:

* [Integration](integration/integration-overview)
* [High Performance](performance/performance-overview)
* Microservices
* Security
* CI/CD and Test Automation
* Monitoring and Robustness

## 3 Best Practices Structure

This diagram presents an overview of the structure of the Architecture Best Practices documentation:

{{% todo %}}[**UPDATE DIAGRAM**]{{% /todo %}}

![](attachments/arch-over2.png)

For each subject area there is an overview document, and below that, there are a number of in-depth descriptions and business use cases. Some of these documents link to a module in the App Store that demonstrates example modelling reflecting the theory.

{{% todo %}}[**ADD LINK TO APP STORE WHEN AVAILABLE ABOVE**]{{% /todo %}}

## 4 Read More

* [Architecture Overview](architecture-overview)
