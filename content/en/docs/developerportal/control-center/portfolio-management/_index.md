---
title: "Portfolio Management"
url: /developerportal/control-center/portfolio-management/
category: "Control Center"
weight: 5
description: "Describes the Portfolio Management app in Control Center."
tags: ["Portfolio Management"]
---

## 1 Introduction

The [Portfolio Management](https://portfolio.mendix.com) app helps companies maximize project value throughout the app lifecycle. This application allows you to plan, track progress, estimate, and assess the value of different projects.

{{% todo %}}Add information where to find portfolio management in the navigation within the mx platform{{%  /todo  %}}

The Portfolio Management app is available to all Mendix Cloud customers. Mendix Admins can access all portfolios within their company. 

## 2 Projects Overview Page {#projects-overview}

When you start the Portfolio Management app, you see all the portfolios of your company. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/landing-page.png" >}}

{{% alert type="info" %}}
When a Mendix Admin starts the Portfolio Management app for the first time and if their company has no portfolio, the system will automatically create a portfolio for the company.
{{% /alert %}}

Click a portfolio to open the **Project Overview** page, which gives an overview of all the projects in this portfolio.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/projects-overview.png" >}}

{{% alert type="info" %}}
For the Public Beta version, it is only possible to have one portfolio board for an organization. We aim to provide the capability to create multiple portfolio boards in later versions. Stay tuned.
{{% /alert %}}

On the top of the page, you can search for a project in the search bar.

On the upper-right corner, you can use the **Filters** to filter projects. Using the drop-down list next to the **Filters**, you can [change your view](#change-view). Clicking the **Create New Project** button allows you to [create a new project](#create-new-project).

### 2.1 Creating a New Project {#create-new-project}

{{% alert type="info" %}}
Only Portfolio Managers can create a new project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

In the Portfolio Management app, the term "Project" refers to a software project that you manage as you work along the development lifecycle. An app can be the result of multiple projects (if the app is complex and big) or only one project. For progress tracking, we recommend you to break down an app into smaller projects whenever possible.

To create a new project, do as follows:

1. Go to the **Projects Overview** page.

2. Click **Create New Project**.

3. Enter the **Project Name** and the **Stage** in which the project is. 

4. Click **Create Project**. The project is created and appears on the **Projects Overview** page. The **Edit Project** side pane opens on the right side of the page where you can add the details of the new project.

5. Select **Tags** for the project. You can use tags to classify your projects, for example by departments or types. You can select existing tags, or create new tags. 

   {{% alert color="info" %}}For more information about how to create new tags, edit existing tags, or delete existing tags, see the [Managing Tags](#manage-tags) section.{{% /alert %}}

6. Enter the **Description** of the project.

7. If there is an existing app that you want to change or if development is already in progress, you can link the app to this project:

   1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.

   2. Select the app that you want to link to the project.

   If you woud like to see more information about a linked app, click the app name after it is linked.

8. Set the **Owner** for the project.

9. Select the **Stage**, **Department**, **Country**, and **Use Case** for the project.

   {{% alert type="info" %}}A Portfolio Manager can customize the options for **Stage**, **Department**, **Country**, and **Use Case** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

10. If you want to add attachments, click **+** to add them. Once an attachment is added, all the users can open and download it.

11. Click **Planning** to show all the fields in this section. Set the following dates in this section:

    * **Intake** – This is the time when the project is accepted based on business requirements.
    * **Start Date** – This is the time when the first actions are taken to start implementation.
    * **Go-Live date** – This is the time when the app is expected to be up and running.

12. Click **Prioritization** to show all the fields in this section. Set the values for the fields in this section.

    {{% alert color="info" %}}The title of this section can be **Prioritization: WSFJ Model** or **Prioritization: RICE Model**, depending on the prioritization model selected on the [Portfolio Settings](#portfolio-settings) page. </br></br>For more information about these models and the components of each model, see the [WSJF](/developerportal/control-center/prioritization-models/#wsjf) section or the [RICE](/developerportal/control-center/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management.*{{% /alert %}}

13. Click **Estimated Value** to show all the fields in this section. These fields can solidify your business case and drive internal adoption, and help you map the realized value upon completion. Enter information in the following fields in this section:

    * **Type of Value** – This is the type of the value that is created by the project.

      {{% alert type="info" %}}A Portfolio Manager can customize the options for **Type of Value** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

    * **Frequency** – This indicates whether the value is **Once-off** or **Recurring**.

    * **Value** – This is the amount of the value in numbers. Use a comma every third digit from the right, for example, *1,000,000*.

    * **Additional Information**, enter anything that can help clarify how estimated value may impact the overall costs of the project. 

      If the project creates more than one type of value, click **Add Value** to add more value. After you enter all values, the system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

14. If you want to add a note, click **Notes**, and then click **Post Note** after you add the note.

15. Click **Save**. All the details are saved for the new project.

#### 2.1.1 Managing Tags {#manage-tags}

While you are in the process of [creating a new project](#create-new-project) or [editing a project](#edit-delete-project), you can manage tags as follows:

In the **Edit Project** side pane, click the settings icon next to the **Tags** text box.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/manage-tags.png" >}}

The **Manage Tags** dialog box opens.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/manage-tags-dialog-box.png" >}}

To create a new tag, do as follows:

1. Click **Add Tag**. A text box appears, with a colored circle indicating the color of the new tag.
2. In the text box, enter the name for the new tag.
3. If you want to change the color of the new tag, click the colored circle and select a different color.
4. Click the check mark icon to save the new tag.

To edit an existing tag, do as follows:

1. To change the tag name, click the name of the tag. After the name becomes editable. Edit the name in the text box, and then click outside the text box to save the change.
2. To change the tag color, click the colored circle, and select a different color.

To delete an existing tag, do as follows:

1. Hover over the row where the tag is listed, a delete icon (red trashcan) appears at the end of the row.
2. Click the delete icon. The **Confirmation** dialog box opens.
3. Click **Delete Tag**.

### 2.2 Changing Your View {#change-view}

To change your view on the **Projects Overview** page, click the drop-down list on the upper-right corner, and then select one of the following views:

{{< figure src="/attachments/developerportal/control-center/portfolio-management/switch-view.png" >}}

* [Kanban view](#kanban-view)

* [List view](#list-view)

* [WSJF Prioritization](#wsjf) or [RICE Prioritization](#rice)

  {{% alert color="info" %}}You can see either **WSFJ Prioritization** or **RICE Prioritization** here, depending on the prioritization model selected on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

#### 2.2.1 Kanban View {#kanban-view}

In Kanban view, all the projects are represented by project cards, and are categorized in different columns. A column indicates a the stage that a project is currently in. To move a project to a different stage, hover over the project card, and then click the **>** or **<** icon on the left or right side of the card. 

{{% alert type="info" %}}A Portfolio Manager can set up custom stages for projects on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

To filter projects, you can select a filter from the **Filters** drop-down list on the top of the page.

Each project card shows the following information:

{{< figure src="/attachments/developerportal/control-center/portfolio-management/project-card.png" >}}

* Project name (①) –  Clicking it opens a [side pane](#view-project) that shows project details.

* Ellipsis icon (**...**) (②) – Clicking the icon opens a pop-up menu that enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

* Tags for the project (③) – These are the tags used to classify the project. Tags can be used, for example, to indicate the types of projects.

* Department (④) – This is the department to which the project belongs.

* Calendar icon (⑤) – Hovering over the icon shows the following defined dates of the project lifecycle:

  * **Intake** – This is the time when the project is accepted based on business requirements.
  * **Start Date** – This is the time when the first actions are taken to start implementation.
  * **Go-Live Date** – This is the time when the app is expected to be up and running.

* Icon of the linked app (⑥) – Clicking the icon shows the information about the Mendix app that is linked with the project.

* Avatar of the project owner (⑦) – Hovering over the avatar shows the name of the project owner.

#### 2.2.2 List View {#list-view}

In the list view, projects are shown in a list.  Clicking the header of a column sequences the projects using the values in that column.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/list-view.png" >}}

The list contains the following information:

* **Project name** – Clicking it opens a [side pane](#view-project) that shows project details.

* **Department** – This is the department to which the project belongs.

* **Stage** – This shows which stage the project is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for projects on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

* **Intake** – This is the time when the project is accepted based on business requirements.

* **Start Date** – This shows the time when the first actions are taken to start implementation.

* **Go-Live Date** – This shows the time when the app is expected to be up and running.

* **Linked App** – Clicking the icon shows the information about the Mendix app that is linked with the project.

* **Owner** – This shows the name of the project owner.

* Ellipsis icon (**...**) – Clicking the icon opens a pop-up menu that enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

#### 2.1.3 WSJF Prioritization {#wsjf}

{{% alert type="info" %}}For more information about WSJF and each individual component of WSJF, see the [WSJF](/developerportal/control-center/prioritization-models/#wsjf) section in *Prioritization Models Supported by Portfolio Management*.{{% /alert %}}

In the WSJF prioritization view, all the projects are sequenced by their WSJS scores by default. Clicking the header of a different column sequences the projects using the values in that column.

The list contains the following information:

* **Project** – Clicking it opens a [side pane](#view-project) that shows project details.

* **Stage** – This shows which stage the project is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for projects on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

* **Business Value** – This indicates how much business value this project will generate. You can select **Highest**, **High**, **Medium**, **Low**, or **Lowest**.

* **Time Criticality** – This indicates how time-critical this project is. You can select **Highest**, **High**, **Medium**, **Low**, or **Lowest**.

* **Risk Reduction** – This indicates how much this project will help mitigate or reduce future risks. You can select **Highest**, **High**, **Medium**, **Low**, or **Lowest**.

* **Size** – The is the job size of the project. You can select **XL**, **L**, **M**, **S**, or **XS**.

* **Score** – This is the WSJF score of the project.

* Ellipsis icon (**...**) – Clicking the icon opens a pop-up menu that enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

#### 2.1.4 RICE Prioritization {#rice}

{{% alert type="info" %}}For more information about RICE and each individual component of RICE, see the [RICE](/developerportal/control-center/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management*.{{% /alert %}}

In the RICE prioritization view, all the projects are sequenced by their RICE scores by default. Clicking the header of a different column sequences the projects using the values in that column.

The list contains the following information:

* **Project** – Clicking it opens a [side pane](#view-project) that shows project details.

* **Stage** – This shows which stage the project is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for projects on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

* **Reach** – This is the estimated number of relevant users that the project may affect within a time period. You must enter an integer in this field.

* **Impact** – This is the estimated amount of impact that the project may have on individual users. You can select **Massive**, **High**, **Medium**, **Low**, or **Minimal**.

* **Confidence** – This indicates how confident you are about your Impact and Reach estimates. You can select **High**, **Medium**, or **Low**.

* **Effort** – This is the estimated total amount of time that the project will require from all members of your team: product, design, and development. You must enter an integer in this field.

* **Score** – This is the RICE score of the project.

* Calendar icon – Hovering over the icon shows the following defined dates of the project lifecycle:

  * **Intake** – This is the time when the project is accepted based on business requirements.
  * **Start Date** – This is the time when the first actions are taken to start implementation.
  * **Go-Live Date** – This is the time when the app is expected to be up and running.

* Icon of the linked app – Clicking the icon shows the information about the Mendix app that is linked with the project.

* Avatar of the project owner – Hovering over the avatar shows the name of the project owner.

* Ellipsis icon (**...**) – Clicking the icon opens a pop-up menu that enables you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project.

  {{% alert type="info" %}}
  Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}

### 2.3 Viewing Project Details {#view-project}

On the **Project Overview** page, if you click a project, a side pane opens on the right side to show project details.

On the upper-right corner of the pane, there is a link icon, an ellipsis icon (**…**), and a close (**x**) icon. Clicking the link icon copies the link to the project. Clicking the ellipsis icon opens a pop-up menu that allows you to [edit](#edit-delete-project), [archive](#archive-project), or [delete](#edit-delete-project) the project. Clicking the close icon closes the side pane.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/side-pane.png" >}}

{{% alert type="info" %}}
Only Portfolio Managers can edit, archive, or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

When you view project details, you can only **Post Note**. You cannot change any other information. To change other information, you need to [edit the project](#edit-delete-project).

### 2.4 Editing or Deleting a Project {#edit-delete-project}

{{% alert type="info" %}}
Only Portfolio Managers can edit or delete an existing project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

To edit or delete a project, go to the **Projects Overview** page, click the ellipsis icon (**...**) for that project, and then select **Edit** or **Delete**. Alternatively, you can also click the ellipsis icon (**...**) in the [side pane](#view-project) where you view project details, and then select **Edit** or **Delete**.

### 2.5 Archiving a Project {#archive-project}

When a project is finished or the project is not relevant for the current time being, you can archive a project.

{{% alert type="info" %}}
Only Portfolio Managers can archive a project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

To archive a project, perform the following steps:

1. On the **Projects Overview** page, click the ellipsis icon (**...**) for that project, and then select **Archive**. Alternatively, you can also click the ellipsis icon (**...**) in the [side pane](#view-project) where you view project details, and then select **Archive**.

2. In the dialog box that opens, select the reason why the project is archived: **Completed**, **Canceled**, **On Hold** or **Other Reason**, and also enter any information that other people should know about this change, and then click **Archive**.

   {{< figure src="/attachments/developerportal/control-center/portfolio-management/archive-dialog-box.png" >}}

A pop-up window opens and tells you that the project is successfully archived. Once the project is archived, you can find it on the [Archived Projects](#archived-projects) page.

## 3 Archived Projects Page{#archived-projects}

The **Archived Projects** page shows all the projects that are archived. You can search for a project in the search bar. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/archived-projects.png" >}}

The list contains the following information:

* **Project Name** – Clicking it opens a side pane that shows the details of the archived project as well as why the project was archived, additional notes, who archived the project, and when.

  {{% alert type="info" %}}When you view the details of a archived project, you can only **Post Note**. You cannot edit any other information.{{% /alert %}}

* **Department** – This is the department to which the project belongs.

* **Stage** – This shows which stage the project is currently in.

* **Archiving reason** – This is the reason why the project was archived.

* **Archived date** – This shows the date when the project was archived.

* **Archived by** – This is the name of the person who archived the project.

* Ellipsis (**...**) icon – Clicking the icon opens a pop-up menu that enables you to [restore](#restore-delete-archived-project) or [delete](#restore-delete-archived-project) the archived project.

  {{% alert type="info" %}}
  Only Portfolio Managers can restore or delete a project. For more information on roles and permissions, see [Access Management](#access-management).
  {{% /alert %}}
### 3.1 Restoring or Deleting an Archived Project {#restore-delete-archived-project}

{{% alert type="info" %}}
Only Portfolio Managers can restore or delete an archived project. For more information on roles and permissions, see [Access Management](#access-management).
{{% /alert %}}

To restore or delete an archived project, go to the **Archived Projects** page, click the ellipsis icon (**...**) for that project, and then select **Restore** or **Delete**. After you restore an archived project, it goes back to the [Projects Overview](#projects-overview) page.

Alternatively, to delete an archived project, you can also click the ellipsis icon (**...**) in the side pane where you view the archived project details, and then select **Delete**.

## 4 Access Management Page {#access-management}

The **Access Management** page shows all the users who have access to this portfolio. 

{{< figure src="/attachments/developerportal/control-center/portfolio-management/access-management.png" >}}

There are two access roles: Portfolio Managers or Users. Mendix Admins are by default Portfolio Managers.

The table below shows the permissions of Portfolio Managers and Users:

| Action                            | Portfolio Manager                                            | User                                                         |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Invite new users                  | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Remove user permissions and roles | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}}{{% alert type="info" %}}A Portfolio Manager cannot remove the permissions and role of another Portfolio Manager if the latter is a Mendix Admin.{{% /alert %}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
| Update user permissions and roles | {{< figure src="/attachments/developerportal/control-center/portfolio-management/check-mark.svg" >}}{{% alert type="info" %}}A Portfolio Manager cannot update the permissions and role of another Portfolio Manager if the latter is a Mendix Admin.{{% /alert %}} | {{< figure src="/attachments/developerportal/control-center/portfolio-management/cross-mark.svg" >}} |
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
3.  In the dialog box, enter the **Email Address** of the user who you want to invite. They can be someone within your company or outside your company. For users outside your company, their names and profile pictures are not displayed.

4. Select an **Access Role** for the user – **Portfolio Manager** or **User**. This determines the user's access level to all the projects in this portfolio.
5. Click **Add to List**.
6. Repeat steps 2 and 4 until you add all the users.
7. Click **Send Invites**.

The users that you added now appear on the **Access Management** page. 

For users outside your company, they will receive an invitation email. Once they accept the invitation, their **Status** will change from **Pending** to **Active**. 

For users within your company, if they have a Mendix account, their **Status** will be **Active** immediately; and if they do not have an Mendix account, their **Status** will change from **Pending** to **Active** after they create a Mendix account.

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

To add an option, click **Add Department**, **Add Country**, **Add Stage**, **Add Use Case**, or **Add Value Type** below the corresponding list.

To delete or edit an existing option, hover over the option to show the **Delete** button or the **Edit** button at the end of row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/control-center/portfolio-management/delete-edit-stage.png" >}}

## 6 Read More

{{% todo %}}Add the learning path{{% /todo %}}
