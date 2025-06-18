---
title: "Snowflake Role-Based Access Control"
url: /appstore/modules/snowflake/snowflake-rbac/
description: "Describes how to use the role-based access control of Snowflake in a Mendix application."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Snowflake's [role-based access control (RBAC)](https://www.snowflake.com/trending/what-rbac/) approach allows you to assign privileges that define levels of access to data within Snowflake. You can assign these privileges to roles, which are then assigned to users or other roles. This model provides both control and flexibility, making it easier to manage access to data and resources within Snowflake. 

In the context of integration between Snowflake and Mendix, RBAC helps ensure that the data being exposed to a certain user or role within Snowflake is the same as the data presented to the same user in a Mendix app.

### Features

RBAC has the following features:

* It enables Snowflake administrators to adhere to the Least Privilege principle by giving them the tools to ensure that users have access only to the necessary information and functionalities based on their job roles.
* It provides granularity and flexibility, allowing fine-grained control over access to securable objects. 
* The structured hierarchy in Snowflake ensures organized and manageable access control. 
* RBAC mitigates risks by preventing unauthorized actions and reducing the likelihood of data breaches and insider threats.

Because of the above, implementing RBAC is essential for maintaining security and effectively managing data access in your Snowflake-integrated Mendix app.

You can implement RBAC by using the following methods:

* [Key-pair authentication](/appstore/modules/snowflake/key-pair-auth/)
* [Snowflake SSO](/appstore/modules/snowflake/snowflake-sso/)
