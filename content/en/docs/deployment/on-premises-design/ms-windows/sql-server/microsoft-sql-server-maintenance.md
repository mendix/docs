---
title: "Maintenance of SQL Server"
url: /developerportal/deploy/microsoft-sql-server-maintenance/
weight: 40
---

When deploying Mendix on-premise using the Microsoft SQL Server platform, several guidelines have to be kept in order to keep your Mendix database (or databases) in good health. The how-to section on this website contains a step-by-step guide on how to set up your DBMS to Mendix standards by configuring a uniform set of maintenance and backup plans. Best practice dictates the following set of requirements:

* Appoint a dedicated SQL server operator. It will be this operator that receives (maintenance) alerts an status messages
* Inventory the expected load on your Mendix databases. Heavily used databases will require different maintenance intervals than databases with lighter request loads.
* Based on the expected usage of your databases, define the frequency in which integrity checks and index-rebuilding has to be performed.
* Form a backup plan that suits the needs of your organization. Find a balance between organizational needs and technical specifications of your storage environment. Beware of overlaps with, for example, tape backups and consider backup vaulting.

For more information, see [How to Configure Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/).
