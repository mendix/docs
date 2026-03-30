---
title: "Create a Database with Amazon RDS and the Mendix Database Connector"
linktitle: "Amazon RDS"
url: /appstore/modules/aws/amazon-rds-database-connector/
description: "Describes the steps required to use the Amazon Relational Database Service (RDS) with the Mendix Database Connector."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-rds-database-connector/
---

## Introduction

Amazon Relational Database Service (Amazon RDS) is a collection of managed services that makes it simple to set up, operate, and scale databases in the cloud. You can choose from seven popular engines — [Amazon Aurora with MySQL compatibility](https://aws.amazon.com/rds/aurora/?pg=ln&sec=hiw), [Amazon Aurora with PostgreSQL compatibility](https://aws.amazon.com/rds/aurora/?pg=ln&sec=hiw), [MySQL](https://aws.amazon.com/rds/mysql/?pg=ln&sec=hiw), [MariaDB](https://aws.amazon.com/rds/mariadb/?pg=ln&sec=hiw), [PostgreSQL](https://aws.amazon.com/rds/postgresql/?pg=ln&sec=hiw), [Oracle](https://aws.amazon.com/rds/oracle/?pg=ln&sec=hiw), and [SQL Server](https://aws.amazon.com/rds/sqlserver/?pg=ln&sec=hiw) — and deploy on-premises with [Amazon RDS on AWS Outposts](https://aws.amazon.com/rds/outposts/?pg=ln&sec=hiw).

This how-to uses PostgreSQL as an example to integrate your Mendix app with Amazon RDS.

## Configuring the Mendix Database Connector for Amazon RDS

To configure the Mendix Database Connector for Amazon RDS, follow these steps: 

1. Create a database in Amazon RDS by doing the following steps:
    1. Select **PostgreSQL** as the database type.
    2. Select the required template.
    3. Enter a database instance identifier. 
    4. Create the **Master Username** and **Master Password**. 
    Make sure to store the username and password in a safe location.
    5. In the **Connectivity** section, set **Public access** to **yes**.
    6. Make sure that **Database Authentication** is set to **Password authentication**.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-rds/rds.jpg" alt="Amazon RDS database configuration" class="no-border" >}}

2. Optional: If you want to limit access to the database to specific apps, do the following steps:
    1. After the database is created, access the [security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules).
    2. Select the first security group.
    3. Click **Edit inbound rules**.
    4. Click **Add rule**.
    5. Select **PostgreSQL** as the database type.
    6. Select the IP address of your Mendix app as the source. If your app is hosted on Mendix Cloud, see [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safe-list.
    7. Save the security group rule.
3. Download the Database module and import it into your Mendix app. For more information, see [Database](/appstore/modules/database-connector/).
4. Configure the Database module to [connect to AWS RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToPostgreSQLInstance.html#USER_ConnectToPostgreSQLInstance.JDBCDriverPostgreSQL) by doing the following steps:
    1. Use one of the microflow actions provided in the Database connector in a microflow, as described in [Database](/appstore/modules/database-connector/).
        For example, add the *ExecuteStatement* action.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-rds/microflow.jpg" alt="The ExecuteStatement action in a microflow" class="no-border" >}}

    2. In the AWS console, in the RDS Database dashboard, find and copy the **Connectivity & Security** endpoint.
    3. In the microflow that you created, in the *ExecuteStatement* microflow action, configure the **jdbcUrl** parameter in the following way: `jdbc:postgresql://{endpoint copied from the AWS console}:5432/`
    4. In the **User name** and **Password** parameters, enter the Master Username and Master Password that you configured in AWS RDS in step 1d above, or other credentials with equivalent access rights for AWS RDS. 
    5. In the **Sql** parameter, enter your SQL statement.
        For example, to create a table, you can use the following statement:

        ```sql
        CREATE TABLE employee (
            emp_id INT PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL)
        ```

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-rds/setup.jpg" alt="The Execute Statement configuration dialog" class="no-border" >}}

    {{% alert color="info" %}}For the PostgreSQL database, you do not need to download the JDBC jar file because the library exists in the *userlib* folder.{{% /alert %}}

5. Run your Mendix application and trigger the microflow that you configured.
6. Verify that your Amazon RDS PostgreSQL database contains a new employee table.
