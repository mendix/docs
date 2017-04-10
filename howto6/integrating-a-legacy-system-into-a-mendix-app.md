---
title: "Integrating a Legacy System into a Mendix App"
space: "Mendix 6 How-to's"
category: "Integration"
tags: []
---
Mendix applications frequently need to communicate with existing systems.  Whether replacing an older platform entirely or leveraging an existing database to enhance your App, the ability to integrate with legacy systems is key to your success.  This article introduces a range of options that exist within the Mendix platform to integrate with legacy systems.

**After this how-to you will know:**

*   Potential options to integrate an existing system with a Mendix App
*   How to import data from a flat file or excel file using app store modules
*   How to integrate with a legacy system using REST

## 1. Importing Legacy data using a Flat File

Consider the following situation: you have a legacy system with valuable data that needs to be translated into Mendix.  This system can produce a **flat or delimeted extract** of data .  In this chapter, you will learn how to use the **Flat & Delimited Import Module** to import this data directly into Mendix.  This process can be used for a one-time data transfer or a regular dump of data from one system to another thanks to the scheduling feature.  This approach is especially useful for **older data systems** that cannot accommodate more modern Web Service integrations.

Before you continue, make sure that you

*  <s> **Have downloaded the Flat & Delimited File Importer App Store Module and all prerequisites** </s> Mendix 6 does not fully support [flat & delimited file importer module], yet.  It causes a lot of linking errors to a missing layout template.

## 3\. Related content

*   [Consuming a complex web service](consume-a-complex-web-service)
*   [Consuming a simple Web Service](consume-a-simple-web-service)
*   [Exporting XML documents](export-xml-documents)
*   [Importing Excel Documents](importing-excel-documents)
*   [Exposing a web service](expose-a-web-service)
*   [Selenium Support](selenium-support)
*   [Synchronizing user accounts using the LDAP module](synchronizing-user-accounts-using-the-ldap-module)
*   [Importing XML documents](importing-xml-documents)
*   [Consuming a REST Service](consume-a-rest-service)
*   [Exposing data to BI tools using OData](exposing-data-to-bi-tools-using-odata)

*   [Extending Salesforce with Mendix, an Alternative to Force. com](https://www.mendix.com/blog/extending-salesforce-mendix-alternative-force-com/)
