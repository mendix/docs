---
title: "Upgrading to Mendix SSO from AppCloudServices"
parent: "mendix-sso"
menu_order: 20
description: "How to upgrade existing apps using AppCloudServices to use MendixSSO"
tags: ["SSO", "Single Sign On", "Upgrade", "AppCloudServices"]
#Ownership claimed by Identity Services Team.
---

## 1 Introduction

The AppCloudServices implementation of single sign on (SSO) for Mendix has been deprecated. The [MendixSSO module](https://appstore.home.mendix.com/link/app/111349/) can replace this implementation completely. It comes with a default implementation of user administration which gives you all the tools you need to manage SSO as described in [Mendix Single Sign-on](mendix-sso).

MendixSSO has been designed to easily replace the AppCloudServices SSO. How to do this depends on how AppCloudServices was implemented in your app. There are two different situations:

* AppCloudServices was implemented with no additional customization
* The AppCloudServices domain model has been enhanced with additional attributes and/or associations

Dealing with these to situations is described in the two sections below.

## 2 Replacing a Standard Implementation of AppCloudServices with Mendix SSO

If you have an app which uses AppCloudServices in its default implementation then you can just replace the existing AppCloudServices App Store module, with the MendixSSO App Store module.

Perform the following steps to replace AppCloudServices with MendixSSO.

1. MendixSSO apps must be built using Mendix version 7.23.3 or above. If your app is built using Mendix version 7.23.2 or below, you need to upgrade it. Apps in a previous version 7 release of Mendix can be updated automatically by opening them in a new version of Studio Pro. Apps in version 6 of Mendix will need to be updated to version 7 first – see the instructions in [Moving from Modeler Version 6 to 7](/refguide7/moving-from-6-to-7).

2. Upgrade your UI to AtlasUI. MendixSSO pages are written using AtlasUI, so to make use of the default MendixSSO implementation, you need to upgrade your app. See the instructions in [How To Migrate Existing App Projects to Atlas UI](/howto/front-end/migrate-existing-projects-to-atlasui).

3. Import the MendixSSO module from the App Store, and implement it using the instructions in the [Setting Up Mendix Single Sign-On](mendix-sso#setting-up) section of *Mendix Single Sign-On*.

4. Delete the **AppCloudServices** module. You will also need to delete or exclude the **OnFirstLoginAppCloudUser** microflow which will have been added to your app.

5. If you had local users who had access to the app, these will still be available through the **Account** entity in the **Administration** App Store Module. You can continue to administer these users through the Administration module

    If you wish, you can copy the information about local users into the **MendixSSOUser** entity in the MendixSSO module. If you do this, you will need to use the same techniques as described for customized implementations in the next section.

6. Deploy your app to the Mendix Cloud.

{{% alert type="success" %}}
You have now upgraded your app to use the MendixSSO module. Because all the end-user information and credentials are held in their Mendix account, they are already known to the app and can continue to use it as before.
{{% /alert %}}

## 3 Replacing a Customized Implementation of AppCloudServices with Mendix SSO

If you have modified the domain model for AppCloudServices (ACS) single sign-on, and you want to keep this information, then you will need to take some extra steps.

For example, say you have added an attribute, **CustomAttribute** to the user information which you are managing through the **CustomACSUser** entity. Additionally, you have associated the **CustomACSAssociatedEntity** entity which contain more information.

![Modified ACS Domain Model](attachments/upgrading-to-mendix-sso-from-acs/modified-domain-model.png)

This is information which is not available from the Mendix Developer Portal, so if you just delete the AppCloudServices implementation, you will lose this extra information about the users. To keep it, you need to ensure that the information is copied across. This is described below.

### 3.1 Adding Mendix SSO to Your App

The first steps you need to take are the same as for a non-customized implementation:

1. MendixSSO apps must be built using Mendix version 7.23.3 or above. If your app is built using Mendix version 7.23.2 or below, you need to upgrade it. Apps in a previous version 7 release of Mendix can be updated automatically by opening them in a new version of Studio Pro. Apps in version 6 of Mendix will need to be updated to version 7 first – see the instructions in [Moving from Modeler Version 6 to 7](/refguide7/moving-from-6-to-7).

2. Upgrade your UI to AtlasUI. MendixSSO pages are written using AtlasUI, so to make use of the default MendixSSO implementation, you need to upgrade your app. See the instructions in [How To Migrate Existing App Projects to Atlas UI](/howto/front-end/migrate-existing-projects-to-atlasui).

3. Import the MendixSSO module from the App Store, and implement it using the instructions in the [Setting Up Mendix Single Sign-On](mendix-sso#setting-up) section of *Mendix Single Sign-On*.

### 3.2 Copying Data from AppCloudServices Users to Mendix SSO Users

#### 3.2.1 Creating the Domain Model

{{% todo %}}[WHAT DO WE NEED TO DO HERE?

Should we only be adding a new Domain Model and not copying anything else?]{{% /todo %}}

Now you need to set up a second, customized version of the Mendix SSO module which has the same modifications as the ACS implementation.

1. Create a new MendixSSO module, by importing it from the App Store and using the option **Add as new module**.

    ![Create a second Mendix SSO module with a new name](attachments/upgrading-to-mendix-sso-from-acs/import-custom-mxsso.png)

2. You will get errors because of duplicate names for the services created in the module. Exclude the duplicate services in the new module from your project. You will also need to clear any other errors by excluding microflows which refer to these services.

    ![Exclude duplicate services](attachments/upgrading-to-mendix-sso-from-acs/exclude-duplicate-services.png)

3. In the new MendixSSO module, add the custom attributes used in the ACS user entity and add associations to any related entities. Ensure that the associations have the correct type and direction.

    ![Set On delete of user to keep associated entities](attachments/upgrading-to-mendix-sso-from-acs/updated-domain-models.png)

4. In the original ACS SSO domain model, ensure that deleting the user will not delete the associated entities.

    ![Set On delete of user to keep associated entities](attachments/upgrading-to-mendix-sso-from-acs/keep-associated-entities.png)

5. Update the **AfterStartup_MendixSSO** microflow in the new, customized, MendixSSO module to use the **CreateMendixSSOUser** and **UpdateMendixSSOUser** microflows from the customized MendixSSO module.

    ![Set On delete of user to keep associated entities](attachments/upgrading-to-mendix-sso-from-acs/custom-afterstartup-microflow.png)

6. Change the app after startup microflow to be the one in your customized MendixSSO module.

Now the domain model is set up, and the app will use the custom module to save the user data. However, the data you want is still associated with the old, ACS, implementation. You need to copy the existing data across.

#### 3.2.2 Writing a Migration Microflow

In the Mendix SSO module, there is an example of a microflow which you can update to copy your existing data to your customized Mendix SSO module.

![Where to find example migration microflow](attachments/upgrading-to-mendix-sso-from-acs/migration-microflow.png)

Copy this microflow and page to your own module, or use the version in the *customized* Mendix SSO module to avoid overwriting it when you upgrade the Mendix SSO module.

The microflow has the structure shown in the image below. The steps below explain the process, and describe what you will need to change in your own microflow.

![Annotated and simplified microflow to migrate data](attachments/upgrading-to-mendix-sso-from-acs/migration-concepts.png)

1. **Retrieve** a list of all the System.User entities. Here, this is called **OldUserList**.
    * In the sample microflow in the module, this appears more complicated. This is because it is written to work on batches of users, rather than all users in a single pass. This improves performance. For more information on retrieving using custom ranges, see the [Retrieve from Database Properties](/refguide/retrieve#4-retrieve-from-database) section of *Retrieve*.

2. **Create** an empty **list** of MendixSSOUser objects (the modified users in your customized module). Here the list is called **MendixSSOUserList**.

3. **Loop** through each user – here the object being processed is called **OldUser**.

4. Perform an **object type decision** based on the type of **OldUser**.

5. **Remove** the **OldUser** from the **OldUserList** if it is not one of the entity types you are processing. This means that it will not be deleted from the database later on.

6. **Cast** the **OldUser** object to its specialization – if you need to process more than one type of user object you will need to use separate flows. Here, the specialization is called **CustomACSUser**.

7. **Generate Random Password**. MendixSSO end-users do not need a password to login as local users, but the password attribute is still required and validated in the Mendix model. Therefore you create the new **MendixSSOUser** object with a randomized password value. If an end-user still needs to login with username/password credentials they will have to reset their password.

8. **Create** a new customized **MendixSSOUser** object (from your customized module). This needs to have all the required members (attributes and associations) set:

    ![The different sorts of attribute and association which need to be changed](attachments/upgrading-to-mendix-sso-from-acs/attributes-to-change.png)

    1. Attributes for the default implementation of Mendix SSO (**DisplayName**, for example) need to be selected from the ACS object.

    2. The **HasSSOEnabled** attribute is the _inverse_ of the ACS **IsLocalUser** attribute. Do not forget to add `not()`.

    3. Assign the appropriate value to any custom attributes which you have added to your MendixSSOUser entity. In this example **CustomAttibute**.

    4. Existing associations from **OldUser** are also set but you will need to add any additional attributes which are owned by **CustomMendixSSOUser**. Other associated objects are dealt with below.

9. If there are no associated entities which own associations to the **OldUser** or **CustomACSUser**, then you can flow straight to the last step in the loop (step 13).

10. **Retrieve** a list of all objects of an entity (in this case **CustomACSAssociatedEntity**) which are associated to this **OldUser**. To retrieve the correct objects, use the **XPath constraint** `[{association to ACS user} = $OldUser]`.

    ![Use an XPath constraint to retrieve associated objects](attachments/upgrading-to-mendix-sso-from-acs/retrieve-associated-objects.png)

    {{% alert type="info" %}}If there are several entities associated with **CustomACSUser**, you will need to associate each entity separately{{% /alert %}}

11. For each object in the retrieved list (in this case called **CustomACSAssociatedEntityList**), use a loop to add an association to the **NewUser** object suing **Change object**.

    ![Settings in Change Object to set the association](attachments/upgrading-to-mendix-sso-from-acs/add-association.png)

12. **Commit** the list of associated entities.

13. Add **NewUser** to the **MendixSSOUserList** using **Change list**.

    After all the iterations of the loop, you now have a list of **CustomMendixSSOUser** objects which have the correct attribute and association values, but which has not been committed. You also have a list of **User** entities which contains only the users which you have processed.

14. Delete all the objects in **OldUserList**. This removes all the old users, so that the new users (which have the same name) will not be rejected because of the uniqueness constraint on the user **Name**.

15. **Commit** the list of new users (**MendixSSOUserList**).

Your custom Mendix SSO users now have the same values as the old customized ACS users.

### 3.3 Configuring Your App For the Customized Mendix SSO Module

{{% todo %}}[WHAT DO WE NEED TO DO HERE?

This depends on how we make a copy of the Domain Model etc.]{{% /todo %}}
