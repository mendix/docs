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
*   Mendix Cloud Asia Pacific: AWS Tokyo

Data will always be stored in the same political region for the following regions:

*   Data in the EU, including backups, will stay within the EU
*   Data in the US, including backups, will stay within the US

## 4 Is the Java Security Manager Still in Place?

No. In the previous generation we used the Java Security Manager to enforce standardization and to act as an additional security layer. In Cloud Foundry, short-lived containers already ensure standardization, and apps are completely isolated from the management network. Therefore, the Java Security Manager will not be enabled on the new environment.

## 5 What Are the Limitations?

There is no included mail server in Mendix Cloud v4. You can use a third-party email provider instead. For more information, see [Sending Email](/howtogeneral/mendixcloud/sending-email).

A VPN (which is already deprecated in favor of client certificates) will not be possible in the Mendix Cloud v4. For alternatives, see [Securing Outgoing Connections from your Application](/howtogeneral/mendixcloud/securing-outgoing-connections-from-your-application).

## 6 Differences Between Mendix Cloud v3 and Mendix Cloud v4	

* The order of the download archive buttons differs between v3 and v4
* Upload buttons in v3/v4 are called **Upload Data**/**Upload Archive**
* In Cloud v4, the debugger is always active, and the button shows the credentials to connect the Desktop Modeler to it

## 7 Missing in Mendix Cloud v4

There are some functionalities missing in v4. Mendix will implement these in the near future:

* Using client certificates for access restriction profiles is not available; for outgoing connections, client certificates are available
* There is no detailed description for alerts in the **Alerts** overview
* File storage usage only shows the number of files, not the amount of used storage
* The custom health check microflow is not used by the alerting system
* Application CPU alerts are not sent
* Archived logs can only be downloaded, not viewed in browser
* Cross-environment backup restoring is not available; you can download and upload data instead
* The database status is not visible on the node details screen

## 8 Known Issues in Mendix Cloud v4

* New apps on v4 get a recovery email after initializing
* The styling of the **Upload Backup** screen does not conform to Mendix UX standards
* Upload archive only supports archives of maximum 4 GB
* The Amazon RDS maintenance window is not aligned with the CP maintenance window for an application
* To use the debugger, you need to scale down to one instance

## 9 Related Content

* [Migrate to Mendix Cloud v4](/howtogeneral/mendixcloud/migrating-to-v4)
