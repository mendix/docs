---
title: "Policies"
url: /control-center/policies/
description: "Describes the Policies page in the Mendix Control Center."
weight: 30
---

## Introduction

Policies help ensure that your app landscape is secure, compliant, and consistent. On the **Policies** page, you can define policies that your apps need to adhere to. If they do not, violations are automatically detected and reported in Software Composition, allowing you to react accordingly. For details on how policy violations are displayed in Software Composition, refer to [Policy Status](/control-center/policy-status/).

The **Policies** page allows you to create new policies, lists all of your existing policies, and displays a **Help & Support** pane with useful information about creating policies.

## Defining Policies

You can define policies by either using a template or starting from scratch. The following sections describe the process for each scenario.

### Creating a Policy From a Template

You can use one of the existing templates to create your own policy. 

1. Click **Create from Template**.

2. Select one of the available templates:

    * Only allow Marketplace components that are platform-supported
    * Only medium or low findings are allowed
    * Only Mendix runtime versions >= 9.24.43 are allowed

3. In the **Policy Name** field, add a name for the new policy.

4. Select one of these actions:

    * **Edit** – Make changes to the template, such as adjusting the Mendix runtime version.
    * **Save as Inactive** – Save the policy, but do not enforce it yet.
    * **Save & Activate** – Save the policy and enforce it.

### Creating a Policy From Scratch

You can create a policy by defining your own details.

1. Click **Create from Scratch**.

2. On the **Policy Definition** tab, fill in the following details:

* **Policy Name** – A relevant name for your policy, such as one indicating what the policy checks.
* **Description** – A description of the goal of the policy, which covers why it needs to be adhered to, and how to fix its violations.
* **Policy Conditions** – Define the conditions under which the policy is considered violated. These are the available conditions and their values:

    * **Any finding severity is** – Choose which severity level violates the policy. You can select one or more of the following values:

        * **LOW**
        * **MEDIUM**
        * **HIGH**
        * **CRITICAL**

        For example, if you select **CRITICAL**, apps with critical findings violate this policy.

    * **Mendix runtime version is lower than** – Indicate which Mendix version is the minimum that your apps must use.

    * **Marketplace component license is not** – Select the licenses that are acceptable. If a Marketplace component has a license which is not one of the ones you select here, the policy is violated. These are the possible values:

        * MIT
        * BSD_2_0
        * APACHE_V2
        * APACHE_1_0
        * MENDIX_EULA
        * PARTNER_LICENSES
        * CREATIVE_COMMONS_CC0
        * GNU_GENERAL_PUBLIC_LICENSE_V3
        * MENDIX_MARKETPLACE_CONTENT_TERMS

    * **Marketplace component support is not** – Select the support types that are acceptable. If a Marketplace component has a support type which is not one of the ones you select here, the policy is violated. These are the possible values:

        * PARTNER
        * SIEMENS
        * PLATFORM
        * COMMUNITY

* **Checkpoints & Action(s)** – Select the trigger which causes the policy to be checked, and the action that is taken if the policy is violated. Currently, policy violations are checked at the time of package creation, and violations generate warnings.

3. On the **Policy Scope** tab, select whether you want the policy to apply to all licensed apps, or only to specific apps in your environment.

4. Select one of these actions:

    * **Cancel** – Discard the policy.
    * **Save as Inactive** – Save the policy, but do not enforce it yet.
    * **Save & Activate** – Save the policy and enforce it.

## Policy Details

These are the details you can see for every existing policy:

* **Policy Name** – The policy's name.
* **ID** – The policy's unique ID, which you can copy.
* **Policy Scope** – The policy's app scope.
* **Last Updated By** – The unique ID of the user who most recently updated the policy.
* **Last Updated Date** – The date when the policy was most recently updated.
* **Status** – Whether the policy is active or not.
* Actions:

    * **Edit Policy**
    * **Deactivate Policy**
    * **Delete Policy**
