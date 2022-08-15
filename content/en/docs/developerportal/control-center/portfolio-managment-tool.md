---
title: "Portfolio Management Tool"
category: "Control Center"
menu_order: 9
description: "Describes the Portfolio Management Tool "
tags: ["Portfolio Management"]
---

## 1 Introduction

The [portfolio management tool](https://portfolio.mendix.com) empowers you to manage projects within your company and outside your company. With this tool, you can manage projects throughout the whole project lifecycle – from the start as an idea until the release as a product. The portfolio management tool provides you with project timelines, insights into the value created by your projects, and other useful project details. The tool is available to all Mendix Cloud customers.

{{% todo %}}Check the final name of the product is "Portfolio Management" or "Portfolio Management Tool"?{{% /todo %}}

{{% alert type="info" %}}
Mendix Admins can access all portfolios within their company. When a Mendix Admin starts the portfolio management tool for the first time and if their company has no portfolio, the system will automatically create a portfolio for the company.
{{% /alert %}}

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/landing-page.png" >}}

## 2 Projects Overview

When you start the portfolio management tool, click a portfolio to get an overview of all the projects in this portfolio.

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/projects-overview.png" >}}

The **Portfolio Overview** page gives you an overview of all the projects in this portfolio. You can search for a project in the search bar. Clicking a project name shows the details of that project.

{{% alert type="info" %}}
When you view the project details, you can only **Post Note**. You cannot change any other info. To change other info, you need [edit the project](#edit-project).
{{% /alert %}}

### 2.1 Different Views

You can view projects in a Kanban board or a list view.

To switch between the views, click the view icon on the right-upper part of the page:

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/view-icon.png" >}}

#### 2.1.1 Kanban Board

In the Kanban board, projects are categorized in different columns. Each column represents a different stage. You can click the **>** or **<** icon on a project card to move the project to a different column. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/kanban-board.png" >}}

You can select a filter from the **Filters** drop-down list on the upper-right part to filter the projects.

#### 2.1.2 List View

In the list view, projects are categorized in a list.

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/list-view.png" >}}

### 2.3 Creating a New Project

{{% alert type="info" %}}
Only [Portfolio Managers](#access-management) can create a new project.
{{% /alert %}}

1. Go to **Projects Overview**.

2. Click **Create New Project**.

3. Enter the **Project Name** and the **Description** of the project.

4. Select the **Stage**, **Department**, **Country** the project.

   {{% alert type="info" %}}A Portfolio Manager can customize the possible options for **Stage**, **Department**, **Country** on the **Portfolio Settings** page. For more information, see the [Portfolio Settings](#portfolio-settings) section.{{% /alert %}}

5. Set the **Owner** to a user who owns this portfolio.

6.  If there is an existing app that you want to change or if development is already in progress, you can link the app to this project as follows:
    1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.
    2.  Select the app that you want to link to the project.

        {{% alert type="info" %}}To see more information about a linked app, click the app name after it is linked.{{% /alert %}}

7.  Click **Scope Estimation** to show all the fields in this section. In this section, you can define the effort and risk profile of the project as follows:

    1.  Select the **Use Case** of the project.

        {{% alert type="info" %}}A Portfolio Manager can customize the possible options for **Use Case** on the **Portfolio Settings** page. For more information, see the [Portfolio Settings](#portfolio-settings) section.{{% /alert %}}

    2. Select the **App Size** from the operational point of view.
    3. Enter the **Numbers of Users** who you expect will use the app.
    4. Select **Complexity** and **Exposure** of the project. For more information about complexity and exposure, see the [Complexity Matrix](https://www.mendix.com/resources/digital-execution-manual/) in *Digital Execution Manual*.

8.  Click **Estimated Monetary Value** to show all the fields in this section. In this section, you can solidify your business case and drive internal adoption. It can also helps you map the realized value upon completion.

    1. Select the **Type of Value**, which is the type of the value that is created by the project.

       {{% alert type="info" %}}A Portfolio Manager can customize the possible options for **Type of Value** on the **Portfolio Settings** page. For more information, see the [Portfolio Settings](#portfolio-settings) section.{{% /alert %}}
    
    2. For **Frequency**, select whether the value is **Once-off** or **Recurring**.
    
    3. For **Value**, enter the amount of the value in numbers. Use a comma every third digit from the right, for example, *1,000,000*.
    
    4. For **Additional Information**, enter anything that can help clarify how estimated value may impact the overall project costs.
    
    5. If the project creates more than one type of value, click **Add Value** to add more value. After you enter all values, system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

9. Click **Planning** to show all the fields in this section. In this section, you can enter **Intake Date**, **Start Date** and the **Go-Live Date**.

10. If you want to add a note, click **Notes**, add a note, and then click **Post Note**.

11. Click **Create Project**.

You can find your new project on the **Projects Overview** page.

### 2.4 Editing, Archiving, and Deleting a Project {#edit-archive-delete-project}

In the Kanban board, click the **...** icon on the upper-right corner of the project card, and then select **Edit**, **Archive**, or **Delete**.

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/edit-project-kanban-board.png" >}}

In the list view, click the **...** icon at the end of the row, and then select **Edit**, **Archive**, or **Delete**.

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/edit-project-list-view.png" >}}

{{% alert color="info" %}}All the archived projects can be found on the [Archived Projects](#archived-projects) page.{{% /alert %}}

## 3 Archived Projects {#archived-projects}

The **Archived Projects** page show all the projects that are archived. You can search for a project in the search bar. Clicking a project name shows the details of that project.

### 3.1 Restoring and Deleting an Archived Project

Click the **...** icon at the end of the row and then select **Restore** or **Delete**.

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/archived-projects.png" >}}

## 4 Access Management {#access-management}

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/access-management.png" >}}

The **Access Management** page shows all the users who have access to this portfolio. Their access roles are either Portfolio Managers or Users. Mendix Admins are Portfolio Mangers by default. Portfolio Managers can give other users access to the portfolio and define their access roles. 

The table below shows the permissions of Portfolio Managers and Users:

| Action                            | Portfolio Manager                                            | User                                                         |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Invite new users                  | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Remove user permissions and roles | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}}{{% alert type="info" %}}You cannot remove permissions and roles of Mendix Admins in a company.{{% /alert %}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Update user permissions and roles | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}}{{% alert type="info" %}}You cannot update permissions and roles of Mendix Admins in a company.{{% /alert %}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| View user access information      | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Manage portfolio settings         | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Create new projects               | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Edit existing projects            | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Delete projects                   | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| View project details              | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Create notes                      | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |
| Edit notes                        | Own notes                                                    | Own notes                                                    |
| Delete notes                      | Own notes                                                    | Own notes                                                    |
| View notes                        | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/check-mark.svg" >}} |

### 4.1 Adding New Users

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can add new users.{{% /alert %}}

1. Go to **Access Management**.
2. In the upper-right corner, click **Add New Users**.
3.  In the dialog box, enter the **Email Address** of the user who you want to invite. They can be someone within your company or outside your company.

    {{% alert type="info" %}}For users outside your company, their names and profile pictures will not be displayed.{{% /alert %}}

4. Select an **Access Role** for the user – **Portfolio Manager** or **User**. This determines the user's access level to all the projects in this portfolio.
5. Click **Add to List**.
6. Repeat steps 2 and 4 until you add all the users.
7. Click **Send Invites**.

You can find the user that you just added on the **Access Management** page.

{{% alert type="info" %}}
For users outside your company, they need to accept the invitation via the link in the email that they receive. Before they accept the invitation, their **Status** on the **Access Management** page is **Pending**. After they accept the invitation, their **Status** will change to **Active**. <br />For users within your company who do not have a Mendix account, their **Status** on the **Access Management** page is also **Pending**. After they make a Mendix account, their **Status** will become **Active**. 
{{% /alert %}}

### 4.2 Editing and Deleting a User

If you hover over a row, you can see the edit (pencil) icon or the delete (trashcan) icon at the end of a row. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/edit-delete-user.png" >}}

To update the permissions and the role of a user, click the edit icon.

To delete a user, click the delete icon.

## 5 Portfolio Settings {#portfolio-settings}

The **Portfolio Settings** page is only available for Portfolio Managers. On this page, Portfolio Managers can customize the following items that are used in a portfolio:

* **Stages**

  * You can click the **^** icon or the **v** icon to move a stage upwards or downwards.

    {{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/move-upwards-downwards.png" >}}

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

* **Main Details - Departments**

* **Main Details - Currency**

* **Main Details - Countries**

To delete or edit an existing item, hover over the row to show the **Delete** button or the **Edit** button at the end of row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/control-center/portfolio-management-tool/delete-edit-stage.png" >}}

To add an item, click one of these buttons: **Add Stage**, **Add Use Case**, **Add Value Type**, **Add Department**, or **Add Country**.

## 6 Read More

{{% todo %}}Add the learning path{{% /todo %}}
