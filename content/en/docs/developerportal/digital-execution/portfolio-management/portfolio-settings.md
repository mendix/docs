---
title: "Portfolio Settings"
url: /developerportal/portfolio-management/portfolio-settings/
weight: 20
description: "Describes the Portfolio Settings page in the Mendix Portfolio Management app."
---

## Introduction

On the **Portfolio Settings** page, you can manage the portfolio settings, such as editing portfolio details and changing privacy settings, and you can also delete portfolios.

{{% alert color="info" %}}
The **Portfolio Settings** page is only available for Portfolio Managers.
{{% /alert %}}

## Changing Portfolio Settings

On the **Portfolio Settings** page, Portfolio Managers can change the following settings:

* **Portfolio Name** – Click **Edit Portfolio Details** to change the portfolio name.

* **Portfolio Description** – Click **Edit Portfolio Details** to change the portfolio description.

* **Privacy Settings** – You can set the settings to **Private**, **Restricted**, or **Open**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](/developerportal/portfolio-management/#privacy-settings) section.

  {{% alert color="info" %}}If the toggle on the [Privacy Requests](/control-center/portfolios/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve any change of **Privacy Settings**. In that case, a Mendix Admin will receive a notification about your change request and can approve or reject your request from Control Center. You can cancel a pending request by clicking **Cancel Request**.{{% /alert %}}

* **Stages** – Click **Move Up** ({{% icon name="chevron-up" %}}) or **Move Down** ({{% icon name="chevron-down" %}}) to move a stage upwards or downwards.

  {{< figure src="/attachments/developerportal/portfolio-management/move-upwards-downwards.png" >}}

* **Prioritization Model**

* **Currency**

* **Departments**

* **Locations**

* **Countries**

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

To delete or edit an existing option for a setting, hover over the option to show the **Delete** button ({{% icon name="trash-can" %}}) or the **Edit** button ({{% icon name="pencil" %}}) at the end of the row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/portfolio-management/delete-edit-stage.png" >}}

To add an option for a setting, click **Add Department**, **Add Country**, **Add Stage**, **Add Use Case**, or **Add Value Type** below the corresponding list.

## Deleting a Portfolio

1. On the **Portfolio Settings** page, click **Delete** at the bottom of the page. The **Delete Portfolio** Dialog box opens.
2. Read the warning carefully. Deleting a portfolio means that you permanently delete the portfolio, including all the data in it. This change cannot be reverted.
3. If you decide to continue, type *DELETE* in the text box.
4. Click **Delete**. The portfolio is permanently deleted.

{{% alert color="info" %}}A Mendix Admin can also delete a portfolio in the [Portfolios](/control-center/portfolios/#delete-portfolio) section of Control Center.{{% /alert %}}
