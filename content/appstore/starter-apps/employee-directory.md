---
title: "Employee Directory"
category: "Starter Apps"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Employee Directory](https://appstore.home.mendix.com/link/app/257/) starter app is one of the basic Mendix business templates. Every Mendix business template is a stand-alone application that covers some generic functionality. 

This template focuses on the main aspects of managing a big group of people, as in a company or institution, and enables viewing a simple and brief overview of this group. On clicking an employee, a more informative view is shown. Not only does this template give the user the ability to add lots of detailed user information, but it also brings different user roles, each with other abilities, such as adding and modifying employees and departments.

## 2 Getting Started

If you want to use your own data in this app, follow these steps:

1. Go to your app project folder and delete the **deployment** folder there.
2. Re-deploy your project. The database should now be empty.
3. Create departments. You can select their managers later on.
4. Create accounts, and select the proper user role along with each account.
5. Accounts where the user role is **Manager** can be used as managers in the drop-down menu view under **Departments**.
6. Edit the personal details (or add a photo) under **My Details** while logged in with the proper account.

The default password is *welcome* and is automatically generated. To change this, sign in and edit it under **My Details**.

## 3 User Stories

User stories are created as the basis of the functionality that will be implemented in the template. A user story is one or more sentences describing what the user wants to achieve, usually with this pattern: *As a <role> I want <achievement>*. The advantage of working with user stories is that it is an easy way to capture the requirements in collaboration with the customer, which helps to avoid administrative work and keep flexibility. 

For the Employee Directory template, the user stories below were created:

* As an administrator/manager, I want to add/edit a department [**Department_NewEdit**]
* As an administrator, I want to add/edit an account [**Account_NewEdit**]
* As a manager, I want to edit other people's detailed accounts [**CurrentAccount_Edit**]
* I want to edit my own account [**MyDetails**]
* I want to get a detailed info block for an account [**More_Info**]
* I want to generate a PDF file for an account [**Generate_PDF**]

## 4 Accounts

Accounts consist of the attributes listed below.

These attributes can be edited by administrators only:

* Full name
* User name (which will be used to sign in)
* Department
* Location
* Entry date
* User role (determining which abilities the user will have)

These attributes can be edited by managers and users (only with their own accounts):

* Mobile phone
* Email
* Location
* Extension
* Birthday
* IM Username
* New Password (and confirmation)

A photo can also be uploaded.

## 5 User Roles

* Administrators have all rights, but the MxAdmin cannot see the **My Account** form, since there is no account to view.
* Managers have the most rights, but they cannot see the account overview, nor can they add new accounts; they can, however, edit their own and other people's accounts
* Users cannot see the department overview, nor can they edit or add any departments; they can only edit their own accounts

The conjunct user rights consist of the following:

* Viewing an overall list of employees
* Viewing their location on [Google Maps](https://appstore.home.mendix.com/link/app/48911/)
* Viewing a more detailed info block for an employee
* Generating a PDF file of any employee.

## 6 Advanced Features

This starter app contains several advanced features worth mentioning. For instance, the **Directory** folder contains a lot of microflows that start with "Get". These are microflows that get a certain value from a certain attribute of a certain object. This value is then converted into a new value (sometimes as a new type) and then returned to the proper object. 

### 6.1 Example 1

An easy example is `GetLocation`, returning `'@ ' + $Account/Location`, which puts an `@` in front of the location.

### 6.2 Example 2

A slightly harder example is `GetExtension`, returning `'Ext. ' + toString($Account/Extension)`, which not only puts `Ext.` in front of the extension, but also converts the extension (which is an integer-value) into a string so that `Ext.` can be placed in front of it.

### 6.3 Example 3

An even harder example is the `GetReportsTo` microflow, returning `'Reports to: ' + $Account/FullName`. Here, the question is, whose account is that? Well, as the annotation shows, the goal is to display the name of the person whose user role equals `Manager` and whose department equals the department of the person whose detailed information form has been selected. This is why you first have to retrieve the proper object from the database using this XPath-constraint: 

```
[System.UserRoles = '[%UserRole_Manager%]']

[Directory.Account_Department/Directory.Department/Name = $Department/Name]
```

The first line above simply makes sure that the database only selects objects with the user role `Manager`. The second line makes sure that the name of the department associated with the account you have currently selected equals the name of the department of the manager. Provided that each department only has one manager, this should only leave one object, which is the person to whom you have to report.