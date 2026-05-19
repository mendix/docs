---
title: "User Metering"
url: /developerportal/deploy/user-metering/
weight: 20
description: "This document describes how user metering works."
---

## Introduction

Mendix uses end-user metering to determine the number and type of users accessing applications in accordance with subscription agreements. Proper user classification ensures accurate reporting and optimal licensing costs for customers. <!-- *Proper user classification ensures accurate reporting, optimal licensing costs and transparency for both customers and Mendix. Customers can access Usage Report through the Control Center application on the Mendix Platform*. Link Usage Report from the Control Center doc -->

{{% alert color="info" %}}
End-user metering is currently applied to applications deployed to Mendix Cloud and Mendix Cloud Dedicated environments.
{{% /alert %}}

Mendix subscriptions include user-based pricing plans. With user-based pricing, customers purchase subscriptions based on the number of users who need access to their Mendix applications. Customers can purchase user subscriptions in the following categories:

* Multi-App Internal User
* Single-App Internal User
* External User

For more information, refer to the [User Types and Definitions](/developerportal/deploy/licensing-apps-outside-mxcloud/#user-types-and-definitions) section of *Licensing apps*.

### Key Features

* Automatic tracking – User logins are automatically tracked from the moment your application is deployed to production and becomes functional.
* Data processing – Usage data is collected, processed, and deduplicated regularly. <!-- Monthly reporting – Usage data is collected regularly, processed monthly, and is available in the Control Center. -->
* User subscription classification – Users are classified by user subscription type as External users, Multi-App Internal users, or Single-App Internal users. This classification yields accurate subscription tracking and helps optimize subscription costs. 

## How User Metering Works

User metering in the Mendix Cloud operates through a four-stage automated process, and it is enabled by default for applications deployed in Mendix Cloud environments. 

### In-App User Classification

A key component of in-app user classification is maintaining a consistent user identifier. This becomes especially important when customers are using multi-app subscriptions. In the Mendix Multi-App Internal User Subscription and External User Subscription, the same individual may access multiple applications under a single subscription agreement. A unique, persistent user identifier ensures accurate tracking and prevents duplication. You are responsible for classifying users as `Internal` or `External`. For more detailed information, refer to the [User Classification](/developerportal/deploy/implementing-user-metering/#user-classification). 

### Data Collection

All applications on the Mendix Cloud and Mendix Cloud Dedicated automatically send user data back to the Mendix platform. Data is collected from all environments throughout the month. However, only data from the production environment is considered for subscription tracking. PII information (username and other user identifiers) is hashed at source before transmission to ensure data privacy.

### Data Aggregation and Deduplication

At the end of each month, the Mendix Platform aggregates the collected data. Users are counted and rolled up to the application portfolio level. This process is detailed in the [User Classification and Deduplication](#classification-deduplication) section below.

### User Classification and Reporting

Users are thereafter automatically classified in the following user buckets based on your user subscriptions:

1. External Users
2. Single-App Internal Users
3. Multi-App Internal Users (default)

<!-- End-of-month usage reports are generated at the beginning of each month and are made available via the Control Center dashboard. The reports are generally available on the 1st of each month and reflect the previous month's usage. -->

## How User Classification and Deduplication Work {#classification-deduplication}

The user classification and deduplication process determines the user type and the number of users accessing one or more of your applications. The process evaluates users in a sequence so that each user is counted according to the correct subscription without duplication. The classification follows the steps below:

### User Identification (Deduplication)

Users are deduplicated based on common identifier values. A user who has different identifier values in the aggregated data cannot be recognized as the same user and is counted as multiple users. The deduplication mechanism evaluates two user attributes. When different values exist, Mendix treats them as different users. For more information, refer to [Guidelines for Unique User Identification (Deduplication)](/developerportal/deploy/implementing-user-metering/#guidelines-for-unique-user-identification-deduplication).

### Classifying External Users

The next step is to determine whether a user is an external user:

* If the customer has a valid External User Subscription, and
* The user type is explicitly marked as `External` within the application.

Then the user is classified as an external user.

Once classified, the user is licensed under the External User Subscription and excluded from further classification steps. For more information, see the [User classification](/developerportal/deploy/implementing-user-metering/#user-classification) section of *Implementing User Metering*.

All remaining users are classified as `Internal` users and further classified as described in the sections below.

{{% alert color="info" %}}
A multi-app user who is marked as `Internal` in one application and `External` in another is counted as an internal user. 
{{% /alert %}}

### Classifying Single-App Internal Users

After `External` users are classified, the classification process further classifies the single-app internal users.

If the application is associated with a Single-App Internal User Subscription, the user of the application is classified as a single-app internal user. This user is then counted against the Single-App Internal User Pack for that application.
<!-- *For more details on how to assign Single-App Internal User Pack to your apps, refer to the Assigning Single-App Internal User Packs section of the Control Center.* Link from the Control Center doc -->

{{% alert color="info" %}}
An internal user accessing multiple applications, one of which is covered under a Single-App Internal User Subscription, is counted as a single-app internal user for that application and is also counted separately for any other applications they use. 
{{% /alert %}}

### Classifying Multi-App Internal Users

After external users and single-app internal users have been identified, any remaining internal users are classified as multi-app internal users.
These users are licensed under the Multi-App Internal User Subscription, and no further action is required from your side.

## Read More

* [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/)
