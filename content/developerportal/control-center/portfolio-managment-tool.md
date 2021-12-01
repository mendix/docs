---
title: "Portfolio Management Tool"
category: "Control Center"
description: "Describes the Portfolio Management Tool "
tags: ["Portfolio Management"]
---

## 1 Introduction

The [portfolio management tool](https://portfolio.mendix.com) empowers you to manage your projects throughout the whole project lifecycle – from its start as an idea until its release as a product.  With this tool, you can manage a portfolios within your company and outside your company.

You can easily get an overview of all the projects, and manage their stages, the timelines and estimated values, and more other details.

{{% alert type="info" %}}
The portfolio management tool is a public tool on Mendix Cloud. It is not the same as the portfolio app in the Mendix App Factory Suite, which is private per customer.
{{% /alert %}}

If you are an administrator of the company, you can access all the portfolios of the company. If there is no portfolio in your company, the system will create a portfolio for your company.

Click the portfolio to see the overview of all the projects in this portfolio.

## 2 Projects Overview

{{% todo %}}[Add an image]{{% /todo %}}

On the **Portfolio Overview** page, you have an overview of all the projects in this portfolio.

### 2.1 Switching Between the Kanban Board and the List View

In the **Projects Overview**, you can switch between the Kanban board and the list view. You can do so by clicking the view icon in the upper-right corner.

#### 2.1.1 Kanban Board

In the Kanban board, projects are put under different columns. Each column represents a different stage. You can drag a project to a different column to change its stage.

{{% todo %}}[Add an image]{{% /todo %}}

### 2.1.2 List View

In the list view, you can select a filter in the drop-down list in the upper-right corner to filter the projects in the list.

{{% todo %}}[Add an image]{{% /todo %}}

### 2.2 Viewing the Project Details

In the Kanboard board, {{% todo %}}to be determined by the development team{{% /todo %}}

{{% todo %}}[Add an image]{{% /todo %}}

In the list view, click the project name to see the project details.

{{% todo %}}[Add an image]{{% /todo %}}

{{% alert type="info" %}}
When you view the project details, you can add notes to the project, but you cannot change any other info. To change any other info, you should [editing the project][#edit-project].
{{% /alert %}}

### 2.3 Creating a New Project

#### 2.3.1 Prerequisite

* You access role must be [Portfolio Manager](#difference-portfolio-managers-users).

#### 2.3.2 Procedure

1. Go to **Projects Overview**.

   {{% todo %}}[Add an image]{{% /todo %}}

2. Click **Create New Project**.

3. Enter the **Name** and the **Description** of the project.

4.  Select the **Stage**, **Department**, **Country** the project.

    {{% alert type="info" %}}
    Portfolio Managers can customize the lists of **Stage**, **Department**, and **Country** on the [Portfolio Settings](#portfolio-settings) page.
    {{% /alert %}}

5.  Select the **Owner** the project.
   
    {{% alert type="info" %}}
    You can only set **Owner** to a user who has access to this portfolio. Portfolio Managers can give a user access to the portfolio on the [Access Management](#access-management) page.
    {{% /alert %}}
   
5.  If there is an existing app that you want to change or if development is already in progress, you can link the app to this project as follows:
    1. In the search box below **Link Existing App**, search the app. The search displays the first 50 results.
    2. Select the app that should be linked.
    3. To see more information about a linked app, click the app.   
    
6. Click **Scope** to show all the fields in this section. The **Scope** section helps you define the effort and risk profile of the project.

7.  Select the **Use Case** of the project.

    {{% alert type="info" %}}
    Portfolio Managers can customize the list of **Use Case** on the [Portfolio Settings](#portfolio-settings) page.
    {{% /alert %}}

8. Select the **App Size.**

9. Enter the **Numbers of Users** who you expect will use the app.

10. Select **Complexity** and **Exposure** of the project. For more information about complexity and exposure, see [The Complexity Matrix](https://www.mendix.com/resources/digital-execution-manual/) in *Digital Execution Manual*.

11. Click **Estimated Value** to show all the fields in this section. The **Estimated Value** section helps you solidify your business case and drive internal adoption. It also allows you to map the realised value upon completion.

12. Select the **Value Type** for the value that this project will create.

    {{% alert type="info" %}}
    Portfolio Managers can customize the lists of **Value Type** on the [Portfolio Settings](#portfolio-settings) page.
    {{% /alert %}}
    
13. Select whether the value is **one-off** or **Recurring**.    

14. Enter the **Monetary Value** of the value.

15. Enter **Supporting Information** for the estimated value.

16. If necessary, click **Add Value** to add another value. After you enter all the values, system shows you the **Total Recurring Value** and the **Total One-Off Value**.

17. Click **Planning** to show all the fields in this section. The **Planning** section defines the deadlines for the project. 

18. Enter the **Start Date** and the **Go-Live Date**. You can use the go-live date to estimate when you need to start.

19. Click **Notes** to show all the fields in this section.

20. Enter **Notes** for the project.

21. Click **Create Project**.

You have successfully created a project. You can find your new project in the Kanban board in the **Projects Overview** page.

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

On the **Access Management** page, you can see a table that shows all the users who have access to this portfolio. The access roles of these accounts are either Portfolio Managers or Users. Administrators of a company are Portfolio Mangers automatically. Portfolio Managers can give other users access to this portfolio and define their access roles. 

At the end of the row for each user, there is an edit icon and a delete icon. Click the edit icon to update the permissions and roles of the user. Click the delete icon on to remove the user.

### 3.1 Differences Between Portfolio Managers and Users {#difference-portfolio-managers-users}

{{% todo %}}[Replace "Yes" by emojis]{{% /todo %}}

| Actions                           | Portfolio Manager                                            | Users     |
| --------------------------------- | ------------------------------------------------------------ | --------- |
| Invite new users                  | Yes                                                          |           |
| Remove user permissions and roles | Yes<br /> {{% todo %}}Can Portfolio Managers be removed? How?{{% /todo %}} |           |
| Update user permissions and roles | Yes<br /> {{% todo %}}Same as above.{{% /todo %}}}           |           |
| View user access information      | Yes                                                          | Yes       |
| Manage portfolio settings         | Yes                                                          |           |
| Create new projects               | Yes                                                          |           |
| Edit existing projects            | Yes                                                          |           |
| Delete projects                   | Yes                                                          |           |
| View project details              | Yes                                                          | Yes       |
| Create notes                      | Yes                                                          | Yes       |
| Edit notes                        | Own notes                                                    | Own notes |
| Delete notes                      | Own notes                                                    | Own notes |
| View notes                        | Yes                                                          | Yes       |

### 3.2 Adding New Users

#### 3.2.1 Prerequisite

* You access role must be [Portfolio Manager](#difference-portfolio-managers-users).

#### 3.2.2 Procedure

1. Go to **Access Management**.

1. In the upper-right corner, click **Add New Users**.

2. In the dialog box, enter the **Email Address** of the user. The user can be someone from your company or someone from outside of your company.

   {{% alert type="info" %}}

   The name and profile photo of the users from outside of the company will always be invisible in the portfolio.
   {{% /alert %}}

3. Select an **Access Role** for this user: **Portfolio Manager** or **User**. This determines the user's access level to all the projects in this portfolio.

4. Click **Add to List**.

5. Repeat steps 2 and 4 until you add all the users.

6. Click **Send Invites**.

You have successfully sent an email invitation to the users. Their names are added to the table.

{{% todo %}}[Add an image]{{% /todo %}}

{{% alert type="info" %}}

For users from outside of your company, they need to accept the invitation via the link in the email that they will receive. Before they accept the invitation, their **Status** in the table in the **Access Management** page is shown as **Pending**. After they accept the invitation, their **Status** will become **Active**. <br />For users from your company who do not have a Mendix account, their **Status** in the table in the **Access Management** page is shown as **Pending**. After they make a Mendix account, their **Status** will become **Active**. 

{{% /alert %}}

## 4 Portfolio Settings {#portfolio-settings}

The **Portfolio Settings** page is only available for Portfolio Managers. The **Portfolio Settings** page allows the Portfolio Managers to customize **Stages**, **Use Cases**, **Value Types**, **Departments**, and **Countries**.

## 5 Read More

{{% todo %}}[Add the learning path]{{% /todo %}}