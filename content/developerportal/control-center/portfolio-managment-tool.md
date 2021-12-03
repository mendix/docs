---
title: "Portfolio Management Tool"
category: "Control Center"
description: "Describes the Portfolio Management Tool "
tags: ["Portfolio Management"]
---

## 1 Introduction

The  [portfolio management tool](https://portfolio.mendix.com) enables you to manage projects within your company and outside your company. Each portfolio contains multiple projects. The tool empowers you to manage projects throughout the whole project lifecycle – from the start as an idea until the release as a product. The tool shows you the project timelines, gives you insights into the value created by your projects, and provides you with other useful project details. The portfolio management tool is available to all Mendix Cloud customers.

{{% alert type="info" %}}
Mendix Admins can access all portfolios within their company. If a company has no portfolio, when a Mendix Admin starts the portfolio management tool for the first time, the system will automatically create a portfolio for the company.
{{% /alert %}}

{{% todo %}}[Add an image]{{% /todo %}}

When you start the portfolio management tool, click a portfolio to get an overview of all the projects in this portfolio.

## 2 Projects Overview

{{% todo %}}[Add an image]{{% /todo %}}

The **Portfolio Overview** page gives you an overview of all the projects in this portfolio.

### 2.1 Switching Between the Kanban Board and the List View

On the **Projects Overview** page, you can switch between the Kanban board and the list view. You can do so by clicking the view icon in the upper-right corner.

#### 2.1.1 Kanban Board

{{% todo %}}[Add an image]{{% /todo %}}

In the Kanban board, projects are put in different columns. Each column represents a different stage. You can drag a project to a different column to change its stage. You can click the name of a column to sort the table.

#### 2.1.2 List View

{{% todo %}}[Add an image]{{% /todo %}}

In the list view, you can select a filter from the drop-down list in the upper-right corner to filter the projects.

### 2.2 Viewing the Project Details

In the Kanboard board, {{% todo %}}to be determined by the development team{{% /todo %}}

{{% todo %}}[Add an image]{{% /todo %}}

In the list view, click the project name to see the project details.

{{% todo %}}[Add an image]{{% /todo %}}

{{% alert type="info" %}}
When you view the project details, you can only add notes. You cannot change any other info. To change other info, you need [edit the project](#edit-project).
{{% /alert %}}

### 2.3 Creating a New Project

#### 2.3.1 Prerequisite

* Your access role must be [Portfolio Manager](#difference-portfolio-managers-users).

#### 2.3.2 Procedure

1.  Go to **Projects Overview**.

    {{% todo %}}[Add an image]{{% /todo %}}

2. Click **Create New Project**.
3. Enter the **Name** and the **Description** of the project.
4.  Select the **Stage**, **Department**, **Country** the project.

    {{% alert type="info" %}}Portfolio Managers can customize the lists of **Stage**, **Department**, and **Country** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

5.  Set the **Owner** to a user who has access to this portfolio.
   
    {{% alert type="info" %}} Portfolio Managers can give a user access to the portfolio on the [Access Management](#access-management) page.{{% /alert %}}
   
6.  If there is an existing app that you want to change or if development is already in progress, you can link the app to this project as follows:
    1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.
    2. Select the app that you want to link to the project.
    3. To see more information about a linked app, click the app after it is linked.   
7. Click **Scope** to show all the fields in this section. The **Scope** section helps you define the effort and risk profile of the project.
8.  Select the **Use Case** of the project.

    {{% alert type="info" %}}Portfolio Managers can customize the list of **Use Case** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

9. Select the **App Size.**
10. Enter the **Numbers of Users** who you expect will use the app.
11. Select **Complexity** and **Exposure** of the project. For more information about complexity and exposure, see the [Complexity Matrix](https://www.mendix.com/resources/digital-execution-manual/) in *Digital Execution Manual*.
12. Click **Estimated Value** to show all the fields in this section. The **Estimated Value** section helps you solidify your business case and drive internal adoption. It also allows you to map the realized value upon completion.
13.  Select the **Value Type**, which is the type of the value that is created by the project.

     {{% alert type="info" %}}Portfolio Managers can customize the list of **Value Type** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}
    
14. Select whether the value is **one-off** or **Recurring**.
15. Enter the **Monetary Value** of the value.
16. Enter **Supporting Information** for the estimated value.
17. If the project creates more than one type of value, click **Add Value** to add more value. After you enter all value, system shows the **Total Recurring Value** and the **Total One-Off Value**.
18. Click **Planning** to show all the fields in this section. In the **Planning** section, you define the deadlines for the project. 
19. Enter the **Start Date** and the **Go-Live Date**. You can use the go-live date to estimate when you need to start.
20. Click **Notes** to show all the fields in this section.
21. Enter **Notes** for the project.
22. Click **Create Project**.

You have successfully created a project. Your new project is displayed on the **Projects Overview** page.

### 2.4 Editing a Project {#edit-project}

In the Kanban board, click the **...** on the upper-right corner of the project card and click **Edit**.

{{% todo %}}[Add an image]{{% /todo %}}

In the list view, click the edit icon at the end of the row for the project.

{{% todo %}}[Add an image]{{% /todo %}}

### 2.5 Deleting a Project

In the Kanban board, click the **...** on the upper-right corner of the project card and click **Delete**.

{{% todo %}}[Add an image]{{% /todo %}}

In the list view, click the delete icon at the end of the row for the project.

{{% todo %}}[Add an image]{{% /todo %}}


## 3 Access Management {#access-management}

{{% todo %}}[Add an image]{{% /todo %}}

The **Access Management** page has a table that shows all the users who have access to this portfolio. Their access roles are either Portfolio Managers or Users. Mendix Admins are Portfolio Mangers by default. Portfolio Managers can give other users access to the portfolio and define their access roles.

At the end of the row for each user, there is an edit icon and a delete icon. Click the edit icon to update the permissions and roles of a user. Click the delete icon on to remove a user.

### 3.1 Differences Between Portfolio Managers and Users {#difference-portfolio-managers-users}

| Action                            | Portfolio Manager                                            | User                                                         |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Invite new users                  | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| Remove user permissions and roles | ![check-mark](attachments/portfolio-management-tool/check-mark.svg){{% alert type="info" %}}You cannot remove permissions and roles of Mendix Admins in a company.{{% /alert %}} | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| Update user permissions and roles | ![check-mark](attachments/portfolio-management-tool/check-mark.svg){{% alert type="info" %}}You cannot update permissions and roles of Mendix Admins in a company.{{% /alert %}} | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| View user access information      | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) |
| Manage portfolio settings         | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| Create new projects               | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| Edit existing projects            | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| Delete projects                   | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![cross-mark](attachments/portfolio-management-tool/cross-mark.svg) |
| View project details              | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) |
| Create notes                      | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) |
| Edit notes                        | Own notes                                                    | Own notes                                                    |
| Delete notes                      | Own notes                                                    | Own notes                                                    |
| View notes                        | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) | ![check-mark](attachments/portfolio-management-tool/check-mark.svg) |

### 3.2 Adding New Users

#### 3.2.1 Prerequisite

* Your access role must be [Portfolio Manager](#difference-portfolio-managers-users).

#### 3.2.2 Procedure

1. Go to **Access Management**.
2. In the upper-right corner, click **Add New Users**.
3.  In the dialog box, enter the **Email Address** of the user who you want to invite. They can be someone within your company or outside your company.

    {{% alert type="info" %}}For users outside your company, their names and profile pictures will not be displayed.{{% /alert %}}

4. Select an **Access Role** for the user – **Portfolio Manager** or **User**. This determines the user's access level to all the projects in this portfolio.
5. Click **Add to List**.
6. Repeat steps 2 and 4 until you add all the users.
7. Click **Send Invites**.

You have successfully sent an email invitation to the users. Their names are added to the **Access Management** page.

{{% todo %}}[Add an image]{{% /todo %}}

{{% alert type="info" %}}

For users outside your company, they need to accept the invitation via the link in the email that they receive. Before they accept the invitation, their **Status** on the **Access Management** page is **Pending**. After they accept the invitation, their **Status** will change to **Active**. <br />For users within your company who do not have a Mendix account, their **Status** on the **Access Management** page is also **Pending**. After they make a Mendix account, their **Status** will become **Active**. 

{{% /alert %}}

## 4 Portfolio Settings {#portfolio-settings}

The **Portfolio Settings** page is only available for Portfolio Managers. On this page, Portfolio Managers can customize **Stages**, **Use Cases**, **Value Types**, **Departments**, and **Countries**.

## 5 Read More

{{% todo %}}[Add the learning path]{{% /todo %}}