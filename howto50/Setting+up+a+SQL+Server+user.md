---
title: "Setting up a SQL Server user"
parent: "Mendix+on+Windows+-+Microsoft+SQL+Server"
space: "Mendix 5 How-to's"
---


## Description

This article describes how to configure the users of a SQL server to create a secure environment for a Mendix based application.
To create a secure environment it is important to make a clear distinction between an user with an administrator role and a regular user of the application.

## Instructions

*   **Create an administrator:** Create a user with the administrator role, for example 'MendixAdmin'.
*   **Set the server roles for the administrator:** Depending on the tasks this user has to execute the administrator role should be connected to the following database roles:

    <table><thead><tr><td class="confluenceTd"><span><strong>&nbsp;</strong></span></td><td class="confluenceTd"><div class="" align="center"><strong>Create databases</strong></div></td><td class="confluenceTd"><div class="" align="center"><strong>Create users</strong></div></td><td class="confluenceTd"><div class="" align="center"><strong>Database maintenance</strong></div></td><td class="confluenceTd"><div class="" align="center"><strong>Complete maintenance</strong></div></td></tr></thead><tbody><tr><td class="confluenceTd">dbcreator</td><td class="confluenceTd"><div class="" align="center"><strong>V</strong></div></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">diskadmin</td><td class="confluenceTd"><div class="" align="center"><strong>V</strong></div></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">processadmin</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">securityadmin</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd"><div class="" align="center"><strong>V</strong></div></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">serveradmin</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd"><div class="" align="center"><strong>V</strong></div></td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">setupadmin</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">sysadmin</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd"><div class="" align="center"><strong>V</strong></div></td></tr></tbody></table>
*   **Define the user mapping for the administrator:** Associate all the databases related to Mendix with the administrator. The template for these databases should be _dbo_ and the role of the administrator should be: _db_owner_.
*   **Create (a) database user(s) for each Mendix application:** Each Mendix application should have its own database user(s).
*   **Set the server role for each user:** Associate each user with the role _public_.
*   **Define the user mapping for each user:** Associate all the databases related to Mendix with their respective user(s). The template for these databases should be: _dbo_ and the roles for each corresponding user should be: _db_datareader_ and _datawriter_.

On this page you can find a step by step instruction on how to: [Set up the database user](Setting+up+the+database+user)

## Related content

*   [Activating a Mendix license on Microsoft Windows](Activate+your+Mendix+license)
*   [Troubleshooting](Troubleshooting)
*   [Setting up the database user](Setting+up+the+database+user)
*   [How to execute an SQL statement on an external database](/bestpractices/How+to+execute+an+SQL+statement+on+an+external+database)
*   [Setting up Internet Information Services](Setting+up+Internet+Information+Services)
*   [Restoring a SQL Server database](Restoring+a+SQL+Server+database)
