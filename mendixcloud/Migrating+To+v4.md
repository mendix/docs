---
title: "Migrating to v4
space: "Mendix Cloud"
category: "Mendix Cloud"
---

What will change for me?
===

Nothing right now. We are working with early customers to upgrade. New apps will be launched on v4 by default starting from Q1 2017, however, customers that need to stay on v3 as they use VPN can still get new apps on v3 for the foreseeable future.

Will I just be able to upgrade?
===

Your app needs to be on Mendix 6.0 or higher. Also, we recommend your apps to be built as 12 factor apps. The main change will be for apps that use long-running scheduled events. Our recommendation is to split these up into smaller chunks and use the Amazon SQS connector to split the work out over multiple instances. Initially the new platform is only for new applications. We will be starting a migration program in 2017.

Where will my data be hosted?
===

The primary hosting locations will be as follows. Mendix Cloud EU: AWS Frankfurt. Mendix Cloud US: AWS North Virginia.
The data will always be stored in the same political region. Data in the EU, including backups, will stay within the EU. Data in the US, including backups, will stay within the US.

What are the limitations?
===

Initially we won't have a mail server, you can use a third party email provider instead. VPN, which is already deprecated in favor of client certificates, will not be possible in the Mendix Cloud v4. See this documentation page for more details.

Is the Java Security Manager still in place?
===

No. In the previous generation we used the Java Security Manager to enforce standardization and to act as an additional security layer. In Cloud Foundry, short lived containers already ensure standardization and apps are completely isolated from the management network. Therefore, the Java Security Manager will not be enabled on the new environment.
