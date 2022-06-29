---
title: "Database User Setup on SQL Server"
url: /developerportal/deploy/setting-up-the-database-user/
weight: 30
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/setting-up-the-database-user.pdf).
{{% /alert %}}

## 1 General

Determine your login name. If the user you want to use is a local SQL server user select the option SQL Server Authentication. When you want to use an AD account for the database access you can select Windows Authentication. If you choose to use an AD account, the application should also run with this account and you’ll need to configure your database connection to use integrated authentication.

Since we are using an application to connect to the database we don’t want to use the options to expire the password nor the option to require the user to change the password at the next login.

Select the application database as the default database.

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/mendix-on-windows-microsoft-sql-server/setting-up-the-database-user/18580674.png" >}}

## 2 Server Roles

The user does not require any special server roles. SQL server requires every user to be part of the public role, so it is sufficient to keep the ‘public’ server role as the only role for the user.

You can find more information about the authorization level of the server roles on this page: [Server-level roles](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15) in the Microsoft SQL documentation.

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/mendix-on-windows-microsoft-sql-server/setting-up-the-database-user/18580673.png" >}}

## 3 User Mapping

With the User Mapping properties you can grant the user access to the different database. We suggest you use one account per Mendix application. So this means that the user you are creating should only have access to one single application database. 

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/mendix-on-windows-microsoft-sql-server/setting-up-the-database-user/18580672.png" >}}

The Mendix Runtime keeps the database consistent. This means that the runtime validates the database structure at the start-up and automatically generates the SQL scripts to update the table structure. The Mendix Service Console provides you with the option to execute these scripts directly on the database. The Mendix Runtime requires the usage of the schema ‘dbo’

The recommended database role is `db_owner`. If you choose not to assign the `db_owner` role to the user, the following roles should be assigned. The roles `db_datareader`, `db_datawriter` and execute procedure permission on `usp_nextsequencevalue` are the minimum permission the user should get so he can read and write in the contents of all the tables.
You can give the execute procedure permission using the following command:

`GRANT EXECUTE ON OBJECT::usp_nextsequencevalue TO <YourDatabaseUser>`

Additionally, to start the application from a new `.mda` file the `view definition` permission is required, even if no database synchronization is necessary. During the database upgrade, altering the tables and stored functions is required. During that action, it is usually sufficient to have the `db_ddladmin` role, but when the stored functions needs to be added, the `db_owner` role is required (for more information, see [SQL Server Troubleshooter](/developerportal/deploy/troubleshooting-sql-server/)).

## 4 Status

Allow the user to connect to the database. If the user is Denied the privilege to connect to the engine you won’t be able to connect with your application. The credentials used for your application should have the privilege to access the database through a normal login. Otherwise SQL Server considers your account disabled. 

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/mendix-on-windows-microsoft-sql-server/setting-up-the-database-user/18580671.png" >}}

## 5 Read More

*   [Restoring an SQL Server Database](/developerportal/deploy/restoring-a-sql-server-database/)
*   [Troubleshooting SQL Server](/developerportal/deploy/troubleshooting-sql-server/)
*   [Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
*   [Setting Up a New SQL Server Database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
*   [Setting Up a SQL Server User](/developerportal/deploy/setting-up-a-sql-server-user/)
*   [Security Checklist for Your On-Premises Installation](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
*   [Mendix on Windows - Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/)
*   [Deploying Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
*   [Unix-Like Deployment](/developerportal/deploy/unix-like/)
