---
title: "Frequently Asked Questions on User Metering"
linktitle: FAQs on User Metering
url: /developerportal/deploy/faq/
weight: 40
description: "This document contains a list of frequently asked questions on user metering."
---

## Introduction

This document answers common questions about user metering, outlining user classification and users.

## General Questions

### Is User Metering Automatically Enabled?

User metering is automatically enabled for all Mendix Cloud and Mendix Cloud Dedicated applications without requiring any configuration or setup for usage data collection. All running application environments transmit usage data to the Mendix Platform at regular intervals. Data collection begins as soon as your application is deployed to a production environment. 

### Where Can I View My User Consumption Data?

Navigate to the **Control Center** > **Entitlements** > **End-Users** > **Usage Report**.
For more information, refer to the [Usage Report Tab](/control-center/end-users/#usage-report-tab) section of *End-Users*.  

### When Can I See My Monthly Usage Data?

User subscription utilization is extracted regularly from the apps and available as a daily snapshot in Control Center. 
The daily snapshots are processed and deduplicated across all your apps at the end of each month and become available on the 1st of the following month as monthly usage data. Monthly reports show aggregated subscription usage over the month.    
For details, refer to the [Usage Report Tab](/control-center/end-users/#usage-report-tab) section of *End-Users*.

### What Happens if I Exceed My Entitlement?

If you exceed your subscription entitlements:

* No immediate service disruption: Your applications continue to run normally.    
    Alert displayed: A warning icon appears in the end-of-month Usage Report in Control Center.
* Compliance discussion: Your Customer Success Manager (CSM) will contact you to discuss:

    * Purchasing additional user subscriptions
    * Assessing user classification

Mendix recommends that you monitor your usage regularly and purchase additional capacity before reaching your limit.

### Can I View Usage Data From Previous Months?

Apps across Mendix Cloud began collecting user metering data starting in November 2025. Based on when your application was onboarded on user metering, you may have access to historical usage data. Navigate to the **Usage Report** and select the desired month to see the usage data.

## Questions on User Classification

### How Are Users Classified if I Do Not Assign Single-App Internal User Subscription to an Application?

If no action is taken, all users are classified as Multi-App Internal Users by default.
This means all users in your applications are aggregated together and classified as Multi-App Internal Users. 

### I Have External Users in My Applications. How Do I Ensure They Are Counted Correctly?

Explicitly mark users as `External` in your application to ensure they are counted correctly under your External User Subscription. If you do not have an External User Subscription, these users will be classified as `Internal`, even if they are marked as `External` users. Also, a multi-app user who is marked as `Internal` in one app, but as `External` in another app, will be counted as an Internal Multi-App User.

For more information, refer to [User Classification](/developerportal/deploy/implementing-user-metering/#user-classification).

### I Purchased a Single-App User Subscription for My Application. How Do I Set It Up?

Assign the Single-App User Subscription to your application in Control Center. For more information, refer to the [Assigning Single-App Internal User Subscriptions](/control-center/end-users/#assign-subscriptions) section of the *End-Users* page. 

### How Do I Assign a Single-App User Subscription to Multiple Applications With Unique User Bases?

You must purchase a separate Single-App User Subscription for each application and assign them individually. Contact your CSM or account team to purchase additional subscriptions, if needed.

## User-Specific Questions

### How Are Users Counted If They Log In Only Once Per Year?

Users are counted based on their active status, not login frequency. If they are marked as `Active` in your application, they are counted every month, regardless of whether they log in.

Note that if the user has an active status during any moment in a month, they are counted as an active user for that calendar month.

### What Is the Best Practice for Deactivating Users Who Left the Organization?

Deactivate users as soon as they no longer need access. This ensures that they are not counted in future usage reports and helps maintain security. Deactivate leavers before the month-end to optimize subscription entitlements consumption.

### Should I Delete or Deactivate Users To Save on Subscription Costs?

Technically, you can deactivate or remove users to prevent exceeding your subscription limit.

To prevent over usage of your subscription, you may choose to delete records in the `system.user` object, while maintaining data in custom user objects.

You may also choose to deactivate users by using SCIM integration between your application and your IdP. This requires you to include the [SCIM](/appstore/modules/scim/) module in your application.

{{% alert color="info" %}}
Check your organization's data retention policies before purging any user data. Deactivation usually satisfies both subscription management and compliance requirements.
{{% /alert %}}

### Are Anonymous Users Counted in User Metering?

Anonymous Users are users who access your application without logging in or authenticating. Anonymous users are not reported and hence not counted in user metering. Only Named Users (users with unique login credentials) are counted.

### Are API Users and Service Accounts Counted in User Metering?

API Users (also called Service Accounts or System Users) are non-human accounts used for:

* System-to-system integrations
* Automated processes
* Background jobs
* External system access via web services

API users with authentication count as Named Users and are included in the user metering.

### I Have Users Who Log in Very Infrequently. Does Mendix Allow Reassigning a ‘Seat’ to Different Users?

Yes. A seat can be reassigned at most once per month, meaning that within a single calendar month, a seat can only be used by one user. If a user is active on any day within a calendar month, they will occupy that seat for the entire month, regardless of how often they log in during that period. Over the course of a year, a single seat can therefore be assigned to a maximum of 12 different users.

## Read More

* [User Metering](/developerportal/deploy/user-metering/)
* [Implementing User Metering](/developerportal/deploy/implementing-user-metering/)
