---
title: "Portfolio Management"
url: /developerportal/control-center/portfolio-management/
category: "Control Center"
menu_order: 9
description: "Describes the Portfolio Management app in Control Center."
tags: ["Portfolio Management"]
---

## 1 Introduction

The [Portfolio Management](https://portfolio.mendix.com) app has powerful functionality for project portfolio management.

You can use Portfolio Management app to launch and manage your initiatives. You can invite people within and outside your company to work on the projects in your portfolio and develop the initiatives into Mendix apps that can be released into the market.

The Portfolio Management app empowers you to manage the projects and maximize their value in line with your business strategy by offering visibility and tools for value assessment, effort estimation, planing, and tracking,

The Portfolio Management app is available to all Mendix Cloud customers.

{{% alert type="info" %}}
Mendix Admins can access all portfolios within their company. When a Mendix Admin starts the Portfolio Management app for the first time and if their company has no portfolio, the system will automatically create a portfolio for the company.
{{% /alert %}}

{{< figure src="/attachments/developerportal/control-center/portfolio-management/landing-page.png" >}}

## 2 Projects Overview Page

When you start the Portfolio Management app, click a portfolio to open the **Project Overview** page, which gives an overview of all the projects in this portfolio.

On the top, you can search for a project in the search bar. Clicking **Create New Project** allows you to [create a new project](#create-new-project).

{{< figure src="/attachments/developerportal/control-center/portfolio-management/projects-overview.png" >}}

### 2.1 Different Views

The **Project Overview** page offers three views. To switch between the views, click the drop-down list on the upper-right corner of the **Projects Overview** page, and then select one of the following views:

* **Kanban view**

* **List view**

* **WSJF Prioritization**

{{< figure src="/attachments/developerportal/control-center/portfolio-management/switch-view.png" >}}

#### 2.1.1 Kanban View

In Kanban view, you can select a filter from the **Filters** drop-down list on the top to filter projects.

All the projects are categorized in different columns. Each column represents a different stage. 

You can move the project to a different column by hovering over the project card, and then clicking the **>** or **<** icon on the left or right side of the project card.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/project-card.png" >}}

Each project card shows the following information:

* Project name (①) –  Clicking it opens a side panel that shows the details of the project.

  {{% alert type="info" %}}
  When you view the project details, you can only **Post Note**. You cannot change any other information. To change other information, you need to [edit the project](#edit-archive-delete-project).
  {{% /alert %}}

* Ellipsis icon (**...**) (②) – Clicking it enables you to edit, [archive](#archive-project), or delete the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit and delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

* Tags for the project (③) – These are the tags used to classify the project, for example, you can use tags to indicate the types of projects.

* Department (④) – This is the department to which the project belongs.

* Calendar icon (⑤) – Hovering over it shows the following defined dates of the project lifecycle:

  * Intake – This is the time for the project acceptance based on business requirements.
  * Start Date – This is the time when the first actions are taken to start implementation.
  * Go-Live date – This is the time when the app is expected to be up and running.

* Icon of the linked app (⑥) – Hovering over it shows the existing Mendix app that is linked with the project.

* Avatar of the project owner (⑦) – Hovering over it shows the name of the project owner.

#### 2.1.2 List View

In the list view, projects are shown in a list.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/list-view.png" >}}

The list shows the following information:

* **Project name** – Clicking it opens a side panel that shows the details of the project.

  {{% alert type="info" %}}
  When you view the project details, you can only **Post Note**. You cannot change any other information. To change other information, you need to [edit the project](#edit-archive-delete-project).
  {{% /alert %}}

* **Department** – This is the department to which the project belongs.

* **Stage** – This shows in which stage the project is currently.

* **Intake** – This shows the time for the project acceptance based on business requirements.

* **Start Date** – This shows the time when the first actions are taken to start implementation.

* **Go-Live date** – This shows the time when the app is expected to be up and running.

* **Linked App** – This shows the existing Mendix app that is linked with the project.

* **Owner** – This shows the name of the project owner.

* Ellipsis (**...**) icon – Clicking it enables you to edit, [archive](#archive-project), or delete the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit and delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

#### 2.1.3 WSJF Prioritization

{{% alert color="info" %}}Weighted Shortest Job First (WSJF) is a model that can help you prioritize a list of initiatives. Each initiative's score is calculated as the the cost of delay (CoD) divided by the job size or the duration of the job. Then the initiatives with the highest scores should be prioritized. For more information, see [Weighted Shorted Job First](https://www.scaledagileframework.com/wsjf/).{{% /alert %}}

In the WSJF prioritization view, all the projects are ranked by their WSJS scores in the list. The ranking helps you prioritize your projects. 

The list shows the following information:

* **Project** –  Clicking it opens a side panel that shows the details of the project.

  {{% alert type="info" %}}
  When you view the project details, you can only **Post Note**. You cannot change any other information. To change other information, you need to [edit the project](#edit-archive-delete-project).
  {{% /alert %}}

* **Stage** – This shows in which stage the project is currently.

* **Business Value** – This indicates how much business value this project generates

* **Time Criticality** – This indicates how time-critical this project is

* **Risk Reduction** – This indicates how much risk this project reduces

* **Size** – The is the job size of the project.

* **Scores** – This is the WSJF score of the project.

* Ellipsis (**...**) icon – Clicking it enables you to edit, [archive](#archive-project), or delete the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit and delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

### 2.3 Creating a New Project {#create-new-project}

{{% alert type="info" %}}
Only Portfolio Managers can create a new project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

1. Go to **Projects Overview**.

2. Click **Create New Project**.

3. Enter the **Project Name** and the **Description** of the project.

4. Select the **Stage**, **Department**, **Country** the project.

   {{% alert type="info" %}}A Portfolio Manager can customize the possible options for **Stage**, **Department**, **Country** on the **Portfolio Settings** page. For more information on custom settings, see the [Portfolio Settings](#portfolio-settings) section.{{% /alert %}}

5. Set the **Owner** to a user who owns this portfolio.

6.  If there is an existing app that you want to change or if development is already in progress, you can link the app to this project as follows:
    1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.
    2.  Select the app that you want to link to the project.

        {{% alert type="info" %}}To see more information about a linked app, click the app name after it is linked.{{% /alert %}}

7.  Click **Scope Estimation** to show all the fields in this section. In this section, you can define the effort and risk profile of the project as follows:

    1.  Select the **Use Case** of the project.

        {{% alert type="info" %}}A Portfolio Manager can customize the possible options for **Use Case** on the **Portfolio Settings** page. For more information on custom setting, see the [Portfolio Settings](#portfolio-settings) section.{{% /alert %}}

    2. Select the **App Size** from the operational point of view.
    3. Enter the **Numbers of Users** who you expect will use the app.
    4. Select **Complexity** and **Exposure** of the project. For more information about complexity and exposure, see the [Complexity Matrix](https://www.mendix.com/resources/digital-execution-manual/) in *Digital Execution Manual*.

8.  Click **Estimated Monetary Value** to show all the fields in this section. In this section, you can solidify your business case and drive internal adoption. It can also help you map the realized value upon completion.

    1. Select the **Type of Value**, which is the type of the value that is created by the project.

       {{% alert type="info" %}}A Portfolio Manager can customize the possible options for **Type of Value** on the **Portfolio Settings** page. For more information on custom setting, see the [Portfolio Settings](#portfolio-settings) section.{{% /alert %}}
    
    2. For **Frequency**, select whether the value is **Once-off** or **Recurring**.
    
    3. For **Value**, enter the amount of the value in numbers. Use a comma every third digit from the right, for example, *1,000,000*.
    
    4. For **Additional Information**, enter anything that can help clarify how estimated value may impact the overall costs of the project.
    
    5. If the project creates more than one type of value, click **Add Value** to add more value. After you enter all values, system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

9. Click **Planning** to show all the fields in this section. In this section, you can enter **Intake Date**, **Start Date** and the **Go-Live Date**.

10. If you want to add a note, click **Notes**, add a note, and then click **Post Note**.

11. Click **Create Project**.

You can find your new project on the **Projects Overview** page.

### 2.4 Archiving a Project {#archive-project}

After a project is finished or the project is not relevant for the current time being, you can archive a project. When you archive the project,

In the **Projects Overview** page, you can archive a project no matter which view you use. 

To archive a project, perform the following steps:

1. Click the ellipsis icon (**...**) for that project and then select **Archive**.

2. In the dialog box that opens, select the reason why the project is archived: **Completed**, **Canceled**, **On Hold** or **Other Reason**, and also enter any information that other people should know about this change, and then click **Archive**.

   {{< figure src="/attachments/developerportal/control-center/portfolio-management/archive-dialog-box.png" >}}

A pop-up window opens and tells you that the project is successfully archived. Once the project is archived, you can find it on the [Archived Projects](#archived-projects) page.

## 3 Archived Projects Page{#archived-projects}

The **Archived Projects** page show all the projects that are archived in a list. You can search for a project in the search bar. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/archived-projects.png" >}}

The list shows the following information:

* **Project** – Clicking it opens a side panel that shows the details of the archived project, such as the reason why the project was archived, additional notes, who archived the project, and when.

* Who archived the project

* When the project was archived

* **Department** – This is the department to which the project belongs.

* **Stage** – This shows in which stage the project is currently.

* **Archive reason** – This is the reason why the project was archived.

* **Archive date** – This shows the date when the project was archived.

* **Archived by** –  This is the name of the person who archived the project.

* Ellipsis (**...**) icon – Clicking it enables you to restore or delete the archived project.

  {{% alert type="info" %}}
  Only Portfolio Managers can delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

## 4 Access Management Page {#access-management}

{{< figure src="/attachments/developerportal/control-center/portfolio-management/access-management.png" >}}

The **Access Management** page shows all the users who have access to this portfolio. Their access roles are either Portfolio Managers or Users. Mendix Admins are Portfolio Mangers by default. Portfolio Managers can give other users access to the portfolio and define their access roles. 

The table below shows the permissions of Portfolio Managers and Users:

| Action                            | Portfolio Manager                                            | User                                                         |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Invite new users                  | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Remove user permissions and roles | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}}{{% alert type="info" %}}You cannot remove permissions and roles of Mendix Admins in a company.{{% /alert %}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Update user permissions and roles | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}}{{% alert type="info" %}}You cannot update permissions and roles of Mendix Admins in a company.{{% /alert %}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| View user access information      | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} |
| Manage portfolio settings         | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Create new projects               | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Edit existing projects            | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Delete projects                   | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| View project details              | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} |
| Create notes                      | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} |
| Edit notes                        | Own notes                                                    | Own notes                                                    |
| Delete notes                      | Own notes                                                    | Own notes                                                    |
| View notes                        | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} |

### 4.1 Adding New Users

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can add new users.{{% /alert %}}

1. Go to **Access Management**.
2. On the upper-right corner, click **Add New Users**.
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

{{< figure src="/attachments/developerportal/control-center/portfolio-management/edit-delete-user.png" >}}

To update the permissions and the role of a user, click the edit icon.

To delete a user, click the delete icon.

## 5 Portfolio Settings Page{#portfolio-settings}

The **Portfolio Settings** page is only available for Portfolio Managers. On this page, Portfolio Managers can customize the following items that are used in a portfolio:

* **Stages**

  * You can click the **^** icon or the **v** icon to move a stage upwards or downwards.

    {{< figure src="/attachments/developerportal/control-center/portfolio-management/move-upwards-downwards.png" >}}

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

* **Main Details - Departments**

* **Main Details - Currency**

* **Main Details - Countries**

To delete or edit an existing item, hover over the row to show the **Delete** button or the **Edit** button at the end of row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/delete-edit-stage.png" >}}

To add an item, click one of these buttons: **Add Stage**, **Add Use Case**, **Add Value Type**, **Add Department**, or **Add Country**.

## 6 Read More

{{% todo %}}Add the learning path{{% /todo %}}
