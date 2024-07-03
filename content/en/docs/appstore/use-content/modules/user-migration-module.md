---
title: "User Migration"
url: /appstore/modules/user-migration-module/
description: "Describes how to migrate users to a different specialization of System.User using the User Migration module."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Use the [User Migration](https://marketplace.mendix.com/link/component/118015) module to migrate users from any user entity (that uses a generalization of `System.User`) to the `SapAuthentication.SapUser` entity of [SAP XSUAA Connector](https://marketplace.mendix.com/link/component/78091). This allows you to use SAP XSUAA Connector as a user management module and migrate all the existing users of your app to it.

This is a one-time admin activity required to be run just after deployment of the application.

## 2 Prerequisites

To perform a user migration, you need the following prerequisites:

* A copy of the User Migration module imported into your app – see the instructions in [Using Marketplace Content](/appstore/use-content/) for more details
* An existing user management module using an entity with the generalization `System.User`
* A new user management module which also uses an entity with the generalization `System.User`
* Add all attributes and associations that you want to migrate to the Domain Model of the new user management module
* Add the microflow `StartMigrationWizard` in the **USE_ME** section of the **UserMigration** module to the navigation or pages which can be accessed by administrators of the app

    {{< figure src="/attachments/appstore/modules/user-migration-module/start-migration-wizard-microflow.png" alt="Graphical user interface, text, application Description automatically generated" class="no-border" >}}

## 3 Migrating Users

To migrate your users, follow the instructions below. For the examples, assume that you are migrating users from the default Mendix user management module, **Administration** to the SAP module, **SapAuthentication**.

{{% alert color="info" %}}
You should migrate your users immediately after first deploying the app containing the new user management functionality. Until you do this, your existing users will not be able to sign in to the app.

If you have specializations of the user entities you are migrating, you must migrated the specializations first followed by the main account entity. For example, if you have specialized your `Account` entity into `CompanyA_Account` and `CompanyB_Account`, you must migrate `CompanyA_Account` and `CompanyB_Account` into their related specializations of your new account entity (for example `CompanyA_NewAccount`) before migrating `Account`.
{{% /alert %}}

1. Sign in to your app with the default administrator account.

2. Run the microflow *StartMigrationWizard* from wherever it has been placed in the administration functions of the app.

3. Select the user entity being used by the old user management module. The dropdown list will show only entities which have a generalization of `System.User`. In our example, this is `Authentication.Account`.

    {{< figure src="/attachments/appstore/modules/user-migration-module/user-migration-step1.png" class="no-border" >}}

4. Select the user entity being used by the new user management module. In our example, this is `SapAuthentication.SapUser`.

5. Click **Map according to names** to map attributes with the same names. This means, for example, that data in the `Email` attribute in `Authentication.Account` will be migrated to the `Email` attribute in `SapAuthentication.SapUser`.

    {{< figure src="/attachments/appstore/modules/user-migration-module/user-migration-step2.png" class="no-border" >}}

6. Edit any mappings which are missing or incorrect using the **Edit** buttons.

    {{% alert color="info" %}}Attributes must be of same type.{{% /alert %}}

7. Click **Next**.

8. Click **Edit** next to set up any associations from the old entity that you want to migrate to the new entity.

    {{% alert color="info" %}}As with the new attributes, the new associations must already exist in the Domain Model for the new user management module and must have the same multiplicity and ownership as the association they are being mapped from.{{% /alert %}}

    {{< figure src="/attachments/appstore/modules/user-migration-module/user-migration-step3.png" class="no-border" >}}

9. Click **Next**.

10. Check **Keep … users after migration** to keep the existing user in the old account entity after migration. The message will contain the name of the entity which will be retained, for example `Administration.Account`.

    {{% alert color="info" %}}If you keep the old users after migration, the new user created will have the `_new` postfix for the *Name* attribute of `System.User`, since `System.User/Name` must be  unique.{{% /alert %}}

    {{< figure src="/attachments/appstore/modules/user-migration-module/user-migration-step4.png" class="no-border" >}}

11. Click **Migrate**.

Your users have now been migrated to the new user management module and can sign in using their existing credentials.
