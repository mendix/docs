---
title: "Mendix Cloud v4 - FAQ"
category: "Mendix Cloud"
---

## 1 What Will Change for Me?

Nothing right now. We are working with early customers to upgrade. 

New apps will be launched on Mendix Cloud v4 by default starting from Q1 2017. However, customers that need to stay on v3 because they use a VPN can still get new apps on v3 for the foreseeable future.

## 2 Can I Upgrade All My Apps?

Your app needs to be on **Mendix 6.0 or higher**. 

We also recommend that your apps are built as [12-factor apps](https://12factor.net/). 

The main change will be for apps that use long-running scheduled events. Our recommendation is to split these up into smaller chunks and use the Amazon SQS connector to spread the work out over multiple instances. 

Initially, the new platform is only for new applications. We will be starting a migration program in 2017.

## 3 Where Will My Data Be Hosted?

The primary hosting locations are as follows:

*   Mendix Cloud EU: AWS Frankfurt
*   Mendix Cloud US: AWS North Virginia

The data will always be stored in the same political region: 

*   Data in the EU, including backups, will stay within the EU
*   Data in the US, including backups, will stay within the US

## 4 What Are the Limitations?**

Initially, we won't have a **mail server**. You can use a third-party email provider instead. 

A VPN (which is already deprecated in favor of client certificates) will not be possible in the Mendix Cloud v4. 

For more details, see [Certificates](/refguide/certificates) in the Mendix Reference Guide.

## 5 Is the Java Security Manager Still in Place?

No. In the previous generation we used the Java Security Manager to enforce standardization and to act as an additional security layer. In Cloud Foundry, short-lived containers already ensure standardization, and apps are completely isolated from the management network. Therefore, the Java Security Manager will not be enabled on the new environment.

## 6  Differences between Mendix Cloud v3 and Mendix Cloud v4	

* The order of the download archive buttons differs between v3 and v4
* Upload buttons in v3/v4 are called Upload Data/Upload Archive

## 7 Missing in Mendix Cloud v4

There some functionalities missing in v4. Mendix will implement these features in the near future:

* Client Certificate validation is not available
* Detailed information on Alerts is missing
* File storage usage is not visible
* Health Check Microflow is not implemented
* There are no application CPU alerts
* There is no SMTP server running on localhost
* It is not possible to change the Java Heap size for the application
* Archived logs can only be downloaded, not seen in browser
* Implement error pages (green monsters)
* Restore Backup does not ask in which environment the archive should be restored
* The database status is not visible on the Node Details screen

##  8 Known Issues in Mendix Cloud v4

* Apps on v4 get a false recovery email after initializing
* Upload Backup Screen: styling does not conform to Mendix UX standards
* Upload archive will run out of space on large archives than 4 GB
* The Amazon Relational Database Service maintenance window is not aligned with the CP maintenance window for an application