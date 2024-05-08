---
title: "Snowflake REST SQL Connector"
description: "Describes in steps how to use the Role Base Access control of Snowflake in a Mendix application."
---

## 1 Introduction

Snowflake’s Role-based access control (RBAC)  approach allows you to assign privileges that define levels of access to data within Snowflake. To an object, to roles, which are then assigned to users or other roles. This model provides both control and flexibility, making it easier to manage access to data and resources within Snowflake. 

This is relevant when data is presented within Mendix applications, to ensure the data being exposed to a certain user or role within Snowflake is guaranteed to be the same as to when presented in a Mendix app to for the same user.

Role-Based Access Control (RBAC) is crucial for Snowflake integration due to several reasons. First, it adheres to the “Least Privilege” principle, ensuring that users have access only to the necessary information and functionalities based on their job roles. Note that the Least Privilege principle does not come by default, it needs to be followed by the person configuring the access in snowflake. Second, RBAC provides granularity and flexibility, allowing fine-grained control over access to securable objects. Third, the structured hierarchy in Snowflake ensures organized and manageable access control. Finally, RBAC mitigates risks by preventing unauthorized actions and reducing the likelihood of data breaches and insider threats.

Remember, implementing RBAC is essential for maintaining security and managing access effectively in Snowflake link.

## 2 Set up 

### 2.1 Prerequisites

* Download the Rest SQL Connector for Mendix [Rest SQL Connector module](https://marketplace.mendix.com/link/component/225717 "https://marketplace.mendix.com/link/component/225717") from Mendix marketplace that supports Snowflake integration.
* Ensure your Mendix app has the necessary domain model and entities.
* For the Role Base access control the Connection Details is associated with the account

### 2.2 Key-Pair Authentication Method

* Decide on the authentication method. Since we’re using Snowflake, consider using key-pair authentication.
* Configure the necessary keys and credentials in your Snowflake account based on the documentation   and make sure to assign the public Key to a Snowflake user.

### 2.3 Create Connection Details object and Associate it with the Account

* A new connection Details record is needed for every user that have access to Data at Snowflake. 
* To apply Mendix best practices when it come to market place modules, and security, create a new account overview page where you can add the Connection details to the Users
* When using the Key pair authentication a private key object is also needed to store the user's Private Key.
* Below is an example of a microflow that gets a Connection details object associate with the account if it exist or creates one along with the private key object if it doesn’t.
* And a example of a microflow to redirect to the ConnectionDetails_NewEdit_Step1 page

### 2.4 Connection Details at End User Level

* The Connection Details object should be filled in at the end-user level.
* To fill in the connection details (such as Snowflake credentials), test the connection and/or generate a JWT Token (if applicable), the ConnectionDetails_NewEdit_Step1 and Step2 pages can be used.
* Read the documentation about the Snowflake REST SQL Connector to find out more about how to set up the Key-Pair authentication.

## 3 Execute Statement Action

To interact with Snowflake, SQL queries need to be executed.

To execute the SQL Statement the Execute Create a microflow or Nanoflow that performs the following steps:

* In the microflow create an object Statement so that SQL statement can be executed.
