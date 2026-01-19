---
title: "User Classification"
url: /appstore/modules/user-classification/
description: "Describes the configuration and usage of the User Classification module, which is available in the Mendix Marketplace."
---

## Introduction

The [User Classification](https://marketplace.mendix.com/link/component/245015) module allows your Mendix application to accurately classify end-users—an essential capability for ensuring compliance with the [Mendix Pricing Plan](/developerportal/deploy/mendix-cloud-deploy/#plans). The module provides logic to set the [user type](/developerportal/deploy/populate-user-type/) as external or internal based on the user roles in your app. If needed, you can implement custom logic instead. Keep in mind that Mendix’s user metering processes will count users as internal unless their user type is explicitly set to external, which may impact licensing calculations.

This document guides you in implementing the classification logic and configuring the required elements within your Mendix application. For details on the available classification logic options, see the [Configuring Classification Logic](#configure-classification-logic) section below. Using this module, organizations can ensure reliable user classification and maintain accurate metering within their Mendix environment. 

{{% alert color="info" %}}
If external users are not classified, Mendix user metering will consider them as internal users.
{{% /alert %}}

### Typical Use Cases

The User Classification module supports the following use cases:

* Role-based classification: automatically classifies users as internal or external based on customer-defined roles.

* Custom classification logic: automatically classifies users as internal or external using a custom-configured microflow.

* Classification of new users: classifies users created after the User Classification module is implemented. This is triggered by the After Commit Event (ACO_EVT) on the user entity used for provisioning.

* Classification of previously provisioned users: allows classification of users from non-SSO modules who were provisioned earlier but do not yet have a defined user type. These users require a one-time admin action for classification.

### Prerequisites

To use the User Classification module, your app must be running on one of the following Mendix versions:

* Mx9 LTS
* Mx10 LTS
* Mx11 and above

## Installation

Download the [User Classification](https://marketplace.mendix.com/link/component/245015) module from the Marketplace. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the module into your app.

## Configuration

### Configuring User Classification for New and Existing Users

The User Classification module supports both new users through an After Commit Event (ACO_EVT) for automated classification and existing users, who can be classified with a one-time update microflow.

#### After Commit Event (ACO_EVT)

For new users created after the User Classification module is implemented, configure the After Commit Event (ACO_EVT) on the user entity used for provisioning, using the event `ACO_EVT_StartUserClassification`.

* If you are using the [Administration](/appstore/modules/administration/) module, implement the event on the `Administration.Account` entity. Reapply this configuration after every upgrade to the Administration module.
* If you are not using the [Administration](/appstore/modules/administration/) module, configure the microflow on your custom user entity instead. If you are not using any specialization of `system.user`, you need to create such an entity first.

#### Classifying Existing Users

For users provisioned before the User Classification module is implemented, trigger a one-time classification. You can do this by adding a button on an admin screen that triggers a `UserClassification.UpdateUsersClassificationType` microflow. The execution of this microflow may take some time, depending on the number of users to be classified.

### Configuring Classification Logic {#configure-classification-logic}

Based on your use case, choose the classification logic that best suits your needs:

1. Role-based classification
2. Custom classification logic

#### Role-based Classification

The Role-based classification method classifies users as internal or external based on customer-defined roles. By assigning roles, for example, `ExternalRole` or other custom roles to the User Classification module, your application ensures accurate classification.

Use any microflow that returns a list of external roles. For example, set the `UserClassification.Custom_GetExternalUserRoles` microflow name in the constant to enable role-based classification in the User Classification module. For more information on the constants, see the [Configuring Microflow Constants](#microflow-constants) section below.

{{% alert color="info" %}}
Any roles defined in the role-based classification setup (for example, `ExternalRole` or other custom roles specified in the microflow) are treated as external, while all remaining roles are considered internal by default.
{{% /alert %}}

#### Custom Classification

If your classification logic differs from the role-based approach, create a custom microflow to implement your logic. You can use the sample microflow ` UserClassification.Custom_GetClassificationType ` given in the module as a reference. 

Set your custom microflow in the constant to enable custom classification in the User Classification module. For more information on constants, see the [Configuring Microflow Constants](#microflow-constants) section below.

### Configuring Microflow Constants {#microflow-constants}

To enable your classification logic, configure the following constants in your application:

1. `EXTERNAL_ROLES_MICROFLOW_NAME` (for role-based classification): specify the name of the microflow that returns a list of roles to be treated as external.

2. `CUSTOM_MICROFLOW_NAME` (for custom classification logic): specify the name of the microflow that implements your custom logic to determine the user type.

Based on your classification logic, use one of the above constants. If both constants are used, the role-based classification (`EXTERNAL_ROLES_MICROFLOW_NAME`) will take precedence and be executed.

## Read More

* [Populate User Types](/developerportal/deploy/populate-user-type/)
