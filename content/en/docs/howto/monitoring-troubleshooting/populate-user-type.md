---
title: "Populate User Types"
url: /howto/monitoring-troubleshooting/populate-user-type/
description: "Describes how to classify existing app end-users as either internal or external."
---

## Introduction

In your Mendix Pricing Plan there is a distinction between Internal and External Named Users of a Mendix App. This document helps you to set up your apps to meter External Users correctly. It describes a sample solution that can help you in External User classification for existing users of your apps.

{{% alert color="info"  %}}
**Definitions** 

* *Named User* – an individual authorized by you to have access to your apps with unique login credentials, or an authorized external system that accesses or is accessed by your application.
* *Internal User* – a *Named User* who is an employee or contractor of your business.
* *External User* – a *Named User* who is not an employee or contractor of your business, and is designated as an External User in the Mendix Platform.
{{% /alert %}}

## Background

Every Mendix app has a system module containing an entity `UserReportInfo`. This entity has an attribute `UserType` that is used to classify end-users as External or Internal Users. This attribute needs to be maintained for all existing and new end-users of a Mendix app. If this attribute is not set, the end-user is classified as an Internal User.

The *Mendix Metering* module relies on this attribute to ascertain the end-user type and report it back to us.

{{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/user-type-enumeration.png" class="no-border" >}}

## Approach

{{% alert color="info" %}}
This approach is for end-users who are already set up in your app. For new end-users who onboard into your app, you can implement a similar logic to set the UserType attribute during initial end-user creation.
{{% /alert %}}

Outlined below is an example of a module that can be used to update UserType attribute. You will need to adapt the module logic for classifying your own internal and external end-users. 

### Domain model

In the example below, our aim is to update UserType attribute of UserReportInfo entity. However, the entity `UserReportInfo` is protected in the System module and has no access rules. As a result, it cannot be exposed directly in the UI pages. 
Therefore, the approach we take is to create a new non-persistable entity, `UserTypeReport`, which we will populate based on the values of `UserReportInfo` to show in the UI.

{{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/usertypereport.png" class="no-border" >}}

{{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/usertypereport-properties.png" class="no-border" >}}

### Populating **UserType** for Existing Users of an App

1. Create a microflow `User_RetrieveOrCreateUserReportInfo` which will ensure that a `UserReportInfo` object exists for a given `User`.

    {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/retrieve-userreportinfo.png" alt="Microflow: User_RetrieveOrCreateUserReportInfo" class="no-border" >}}

2. Create a microflow `User_EvaluateAndSetUserType` which will populate the `UserType` attribute on the `UserReportInfo` entity for a given `User`. 

    In this example, we decide whether a user is `Internal` or `External` based on the email address of the user. To do that, we need to retrieve the email address of each user from the database. Note that the `System.User` entity itself does not have the email address. The email address is stored in specializations of `System.User`.

    Here, we show how to do it for two specializations of the `System.User` entity, namely `Administration.Account` and `MendixSSO.MendixSSOUser`. In the `Administration.Account` entity, the email is in attribute named `Email`. And in the `MendixSSO.MendixSSOUser` entity, it’s in an attribute named `EmailAddress`. Hence we need to use an [Object Type Decision](/refguide/object-type-decision/) activity to split the `System.User` into `Administration.Account` and `MendixSSO.MendixSSOUser` and then fetch the email address according to the name of the attribute.

    {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/set-user-type.png" alt="Microflow: User_EvaluateAndSetUserType" class="no-border" >}}

    * The logic to determine whether the end-user is internal or external is up to the developer. The example below returns `true`, to indicate that the user is internal, if the user has no email address, or if the domain for their email address is `mendix.com` or `myorg.com`.

        {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/user-type-split.png" alt="Split: Decide if user is internal" class="no-border" >}}

3. Create a new microflow `User_Correct_UserType` which will use the microflows `User_RetrieveOrCreateUserReportInfo`  and `User_EvaluateAndSetUserType` created above. In this microflow, we create and populate the `UserTypeReport` entity and return a list of these entities at the end of the microflow.

    {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/correct-user-type.png" alt="Microflow: User_Correct_UserType" class="no-border" >}}

4. Create a page `UserTypeReport` with a DataGrid which uses the microflow `User_Correct_UserType` as its source.

    {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/grid-general.png" class="no-border" >}}

    {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/grid-data-source.png" class="no-border" >}}

5. Add the page to the **Navigation**.
6. When you go to that page it will set the `UserType` as per your logic and show you the UserType report.

    {{< figure src="/attachments/howto/monitoring-troubleshooting/populate-user-type/user-type-report.png" class="no-border" >}}

7. The report can be exported into an Excel file.
