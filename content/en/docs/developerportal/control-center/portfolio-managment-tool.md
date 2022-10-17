---
title: "Portfolio Management"
url: /developerportal/control-center/portfolio-management/
category: "Control Center"
menu_order: 9
description: "Describes the Portfolio Management app in Control Center."
tags: ["Portfolio Management"]
---

## 1 Introduction

The [Portfolio Management](https://portfolio.mendix.com) app has powerful project portfolio management capabilities. It empowers you to maximize the project value in line with your business strategy by offering visibility and tools for value assessment, effort estimation, planing, and tracking.

With Portfolio Management app, you launch and manage your projects – a project is what you manage as you work along the project development lifecycle, and an app can be the result of one project, or multiple projects – if the app is complex and big. For progress tracking, we recommend you to break down an app into smaller projects whenever possible.

The Portfolio Management app is available to all Mendix Cloud customers. Mendix Admins can access all portfolios within their company. 

## 2 Projects Overview Page

When you start the Portfolio Management app, you see all the portfolios of your company. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/landing-page.png" >}}

{{% alert type="info" %}}
When a Mendix Admin starts the Portfolio Management app for the first time and if their company has no portfolio, the system will automatically create a portfolio for the company.
{{% /alert %}}

Click a portfolio to open the **Project Overview** page, which gives an overview of all the projects in this portfolio.

On the top, you can search for a project in the search bar. Clicking **Create New Project** allows you to [create a new project](#create-new-project).

{{< figure src="/attachments/developerportal/control-center/portfolio-management/projects-overview.png" >}}

{{% alert type="info" %}}
For the Public Beta version, it is only possible to have one portfolio board for an organization. We aim to provide the capability to create multiple portfolio boards in later versions. Stay tuned.
{{% /alert %}}

The **Project Overview** page offers multiple views. You can [change your view](#change-view).

### 2.1 Changing Your View {#change-view}

To change your view on the **Projects Overview** page, click the drop-down list on the upper-right corner, and then select one of the following views:

{{< figure src="/attachments/developerportal/control-center/portfolio-management/switch-view.png" >}}

* [Kanban view](#kanban-view)

* [List view](#list-view)

* [WSJF Prioritization](#wsjf) or [RICE Prioritization](#rice)

  {{% alert color="info" %}}You can see either **WSFJ Prioritization** or **RICE Prioritization** here, depending on the prioritization model selected on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

#### 2.1.1 Kanban View {#kanban-view}

In Kanban view, all the projects are categorized in different columns. Each column represents a different stage.

To move the project to a different stage, hover over the project card, and then click the **>** or **<** icon on the left or right side of the card. 

To filter projects, you can select a filter from the **Filters** drop-down list on the top of the page.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/project-card.png" >}}

Each project card shows the following information:

* Project name (①) –  Clicking it opens a [side pane](#view-project) that shows project details.

* Ellipsis icon (**...**) (②) – Clicking it enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

* Tags for the project (③) – These are the tags used to classify the project. Tags can be used, for example, to indicate the types of projects.

* Department (④) – This is the department to which the project belongs.

* Calendar icon (⑤) – Hovering over the icon shows the following defined dates of the project lifecycle:

  * **Intake** – This is the time when the project is accepted based on business requirements.
  * **Start Date** – This is the time when the first actions are taken to start implementation.
  * **Go-Live Date** – This is the time when the app is expected to be up and running.

* Icon of the linked app (⑥) – Hovering over the icon shows the existing Mendix app that is linked with the project.

* Avatar of the project owner (⑦) – Hovering over the avatar shows the name of the project owner.

#### 2.1.2 List View {#list-view}

In the list view, projects are shown in a list.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/list-view.png" >}}

The list contains the following information:

* **Project name** – Clicking it opens a [side pane](#view-project) that shows project details.

* **Department** – This is the department to which the project belongs.

* **Stage** – This shows which stage the project is currently in.

* **Intake** – This is the time when the project is accepted based on business requirements.

* **Start Date** – This shows the time when the first actions are taken to start implementation.

* **Go-Live Date** – This shows the time when the app is expected to be up and running.

* **Linked App** – This shows the existing Mendix app that is linked with the project.

* **Owner** – This shows the name of the project owner.

* Ellipsis icon (**...**) – Clicking it enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

#### 2.1.3 WSJF Prioritization {#wsjf}

{{% alert color="info" %}}Weighted Shortest Job First (WSJF) is a model that can help you prioritize a list of projects. Each project's score is calculated as the the cost of delay (CoD) divided by the job size or the duration of the job. For more information, see [Weighted Shorted Job First](https://www.scaledagileframework.com/wsjf/).{{% /alert %}}

In the WSJF prioritization view, all the projects are sequenced by their WSJS scores by default. Clicking the header of a different column sequences the projects using the values in that column.

The list contains the following information:

* **Project** – Clicking it opens a [side pane](#view-project) that shows project details.

* **Stage** – This shows which stage the project is currently in.

* **Business Value** – This indicates how much business value this project generates.

* **Time Criticality** – This indicates how time-critical this project is.

* **Risk Reduction** – This indicates how much risk this project reduces.

* **Size** – The is the job size of the project.

* **Score** – This is the WSJF score of the project.

* Ellipsis icon (**...**) – Clicking it enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

#### 2.1.4 RICE Prioritization {#rice}

{{% alert color="info" %}}Reach Impact Confident Effort (RICE) is a prioritization framework for quantifying the potential value of projects. You get each project's score by multiplying the Reach, Impact, and Confidence estimates, and then dividing the product by the Effort estimate. For more information, see [Rice: Simple Prioritization for Product managers](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/).{{% /alert %}}

In the RICE prioritization view, all the projects are sequenced by their RICE scores by default. Clicking the header of a different column sequences the projects using the values in that column.

The list contains the following information:

* **Project** – Clicking it opens a [side pane](#view-project) that shows project details.

* **Stage** – This shows which stage the project is currently in.

* **Reach** – This is the estimated number of people the project will affect.

* **Impact** – This is the estimated amount of impact that the project will have on individual users.

* **Confidence** – This indicates how confident you are about your Impact and Reach estimates.

* **Effort** – This is the estimated total amount of time that the project will require from all members of your team: product, design, and development.

* **Score** – This is the RICE score of the project.

* Calendar icon – Hovering over the icon shows the following defined dates of the project lifecycle:

  * **Intake** – This is the time when the project is accepted based on business requirements.
  * **Start Date** – This is the time when the first actions are taken to start implementation.
  * **Go-Live Date** – This is the time when the app is expected to be up and running.

* Icon of the linked app – Hovering over the icon shows the existing Mendix app that is linked with the project.

* Avatar of the project owner – Hovering over the avatar shows the name of the project owner.

* Ellipsis icon (**...**) – Clicking it enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

### 2.3 Creating a New Project {#create-new-project}

{{% alert type="info" %}}
Only Portfolio Managers can create a new project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

1. Go to the **Projects Overview** page.

2. Click **Create New Project**.

3. Enter the **Project Name** and the **Stage** in which the project is. 

4. Click **Create Project**. The **Project** is created and shown in the **Projects Overview** page. A side pane opens on the right side where you can add the details of the new project.

5. Select **Tags** for the project. You can select existing tags or create new tags.

6. Enter the **Description** of the project.

7. If there is an existing app that you want to change or if development is already in progress, you can link the app to this project:

   1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.

   2. Select the app that you want to link to the project.

      {{% alert type="info" %}}To see more information about a linked app, click the app name after it is linked.{{% /alert %}}

8. Set the **Owner** for the project.

9. Select the **Stage**, **Department**, **Country**, and **Use Case** for the project.

   {{% alert type="info" %}}A Portfolio Manager can customize the options for **Stage**, **Department**, **Country**, and **Use Case** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

10. If you want to add attachments, click **+** to add them. Once an attachment is added, all the users can open and download it.

11. Click **Planning** to show all the fields in this section. Set the following dates in this section:

    * **Intake** – This is the time when the project is accepted based on business requirements.
    * **Start Date** – This is the time when the first actions are taken to start implementation.
    * **Go-Live date** – This is the time when the app is expected to be up and running.

12. Click **Prioritization** to show all the fields in this section. Set the values for the fields in this section.

    {{% alert color="info" %}}The title of this section can be **Prioritization: WSFJ Model** or **Prioritization: RICE Model**, depending on the prioritization model selected on the [Portfolio Settings](#portfolio-settings) page. For information about the meaning of all the fields in this section, see [WSJF Prioritization](#wsjf) or [RICE Prioritization](#rice).{{% /alert %}}

13. Click **Estimated Value** to show all the fields in this section. These fields can solidify your business case and drive internal adoption, and help you map the realized value upon completion. Enter information in the following fields in this section:

    * **Type of Value** – This is the type of the value that is created by the project.

      {{% alert type="info" %}}A Portfolio Manager can customize the options for **Type of Value** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

    * **Frequency**– This indicates whether the value is **Once-off** or **Recurring**.
    * **Value** – This is the amount of the value in numbers. Use a comma every third digit from the right, for example, *1,000,000*.

    *  **Additional Information**, enter anything that can help clarify how estimated value may impact the overall costs of the project. 

      If the project creates more than one type of value, click **Add Value** to add more value. After you enter all values, the system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

14. If you want to add a note, click **Notes**, add a note, and then click **Post Note**.

15. Click **Save**. All the details are saved for the new project.

### 2.4 Viewing Project Details {#view-project}

On the **Project Overview** page, if you click a project, a side pane opens on the right side to show project details.

On the upper-right corner of the pane, there is a link icon, an ellipsis icon (**…**), and a close icon. Clicking the link icon copies the link to the project. Clicking the ellipsis icon opens a pop-up menu that allows you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project. Clicking the close icon closes the side pane.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/side-pane.png" >}}

{{% alert type="info" %}}
When you view project details, you can only **Post Note**. You cannot change any other information. To change other information, you need to [edit the project](#edit-delete-project).
{{% /alert %}}

### 2.5 Editing or Deleting a Project {#edit-delete-project}

{{% alert type="info" %}}
Only Portfolio Managers can edit or delete an existing project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

To edit or delete a project, go to the **Projects Overview** page, click the ellipsis icon (**...**) for that project, and then select **Edit** or **Delete**. Alternatively, you can also click ellipsis icon (**...**) in the [side pane](#view-project) where you view project details, and then select **Edit** or **Delete**.

### 2.6 Archiving a Project {#archive-project}

{{% alert type="info" %}}
Only Portfolio Managers can archive a project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

When a project is finished or the project is not relevant for the current time being, you can archive a project.

To archive a project, perform the following steps:

1. On the **Projects Overview** page, click the ellipsis icon (**...**) for that project, and then select **Archive**. Alternatively, you can also click ellipsis icon (**...**) in the [side pane](#view-project) where you view project details, and then select **Archive**.

2. In the dialog box that opens, select the reason why the project is archived: **Completed**, **Canceled**, **On Hold** or **Other Reason**, and also enter any information that other people should know about this change, and then click **Archive**.

   {{< figure src="/attachments/developerportal/control-center/portfolio-management/archive-dialog-box.png" >}}

A pop-up window opens and tells you that the project is successfully archived. Once the project is archived, you can find it on the [Archived Projects](#archived-projects) page.

## 3 Archived Projects Page{#archived-projects}

The **Archived Projects** page show all the projects that are archived. You can search for a project in the search bar. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/archived-projects.png" >}}

The list shows the following information:

* **Project Name** – Clicking it opens a [side pane](#view-project) that shows the details of the archived project, such as the reason why the project was archived, additional notes, who archived the project, and when.

* **Department** – This is the department to which the project belongs.

* **Stage** – This shows which stage the project is currently in.

* **Archiving reason** – This is the reason why the project was archived.

* **Archived date** – This shows the date when the project was archived.

* **Archived by** – This is the name of the person who archived the project.

* Ellipsis (**...**) icon – Clicking it enables you to restore or delete the archived project.

  {{% alert type="info" %}}
  Only Portfolio Managers can restore or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

## 4 Access Management Page {#access-management}

The **Access Management** page shows all the users who have access to this portfolio. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/access-management.png" >}}

The access roles are either Portfolio Managers or Users. Mendix Admins are Portfolio Mangers by default. Portfolio Managers can give other users access to the portfolio and define their access roles. 

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
3.  In the dialog box, enter the **Email Address** of the user who you want to invite. They can be someone within your company or outside your company. For users outside your company, their names and profile pictures will not be displayed.

4. Select an **Access Role** for the user – **Portfolio Manager** or **User**. This determines the user's access level to all the projects in this portfolio.
5. Click **Add to List**.
6. Repeat steps 2 and 4 until you add all the users.
7. Click **Send Invites**.

You can find the users that you just added on the **Access Management** page. Their **Status** should be as follows:

* For users outside your company, they need to accept the invitation via the link in the email that they receive. Before they accept the invitation, their **Status** on the **Access Management** page is **Pending**. After they accept the invitation, their **Status** will change to **Active**.
* For users within your company who do not have a Mendix account, their **Status** on the **Access Management** page is also **Pending**. After they make a Mendix account, their **Status** will become **Active**.

### 4.2 Editing and Deleting a User

If you hover over a row, you can see the edit icon (pencil) or the delete icon (trashcan) at the end of a row. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/edit-delete-user.png" >}}

To update the permissions and the role of a user, click the edit icon. To delete a user, click the delete icon.

## 5 Portfolio Settings Page{#portfolio-settings}

{{% alert color="info" %}}The **Portfolio Settings** page is only available for Portfolio Managers.{{% /alert %}}

On the **Portfolio Settings** page, Portfolio Managers can customize the options for the following items:

* **Prioritization Model**

* **Currency**

* **Departments**

* **Countries**

* **Stages**

  * You can click the **^** icon or the **v** icon to move a stage upwards or downwards.

    {{< figure src="/attachments/developerportal/control-center/portfolio-management/move-upwards-downwards.png" >}}

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

* **Main Details - Departments**

To add an option, click **Add Stage**, **Add Use Case**, **Add Value Type**, **Add Department**, or **Add Country** below the corresponding list.

To delete or edit an existing item, hover over the row to show the **Delete** button or the **Edit** button at the end of row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/delete-edit-stage.png" >}}

## 6 Read More

{{% todo %}}Add the learning path{{% /todo %}}
