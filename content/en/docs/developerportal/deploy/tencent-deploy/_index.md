---
title: "Tencent Cloud (腾讯云)"
url: /developerportal/deploy/tencent-deploy/
category: "Deployment"
description: "Describes the processes for deploying a Siemens Low Code Platform app to the Tencent Cloud"
weight: 45
tags: ["Deploy", "Tencent", "Environment", "Cluster", "Namespace"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/tencent-deploy.pdf).
{{% /alert %}}

{{% alert color="info" %}}
**Siemens Low-Code Platform** is called **Mendix** in other parts of the documentation.
{{% /alert %}}

## 1 Introduction

To deploy apps to Tencent, you will first have to purchase your cloud resources. You can then manage these resources from within App & Team Management (ATM) of Siemens Low Code Platform as described below in [Cluster and Namespace Management](#cluster-namespace).

Once the cluster has been registered, and a namespace created, team members with *Deploy App* rights can create environments and deploy an app.

This document explains how to use ATM to manage your clusters and namespaces, and deploy an app.

## 2 Prerequisites for Deploying an App

To deploy an app to Tencent, you need the following:

* A Siemens Low Code Platform account set up with your Tencent ID

* A cluster and namespace (see [Cluster and Namespace Management](#cluster-namespace), below)

* Siemens Low Code Platform Studio Pro China Edition

    * You will be able to download Siemens Low Code Platform Studio Pro, as the first step of the onboarding during your initial sign up.
    * You can also get a copy from the **下载 Studio Pro** option in the **切换到** menu at the top left of **App & Team Management**.

* A Siemens Low Code Platform app created with Studio Pro

## 3 Cluster and Namespace Management{#cluster-namespace}

### 3.1 Cluster Overview {#overview}

Go to the Cluster Manager page by clicking the **切换到** menu and selecting **集群管理**.

If you have not got any clusters, you will first have to purchase one. Alternatively, you can use a free trial cluster to try out the Siemens Low-Code Platform experience, or register your own cluster (running Kubernetes versions 1.19 to 1.22).

* Click **[前往腾讯云门户网站](https://cloud.tencent.com/solution/slp)** to go to Tencent and purchase the necessary Siemens Low-Code Platform on Tencent Cloud resources.
* Click **请求访问免费的应用集群** to request access to a free cluster to try out Siemens Low-Code Platform. You will need to create an app first, see [App & Team Management](/developerportal/app-team-management/) for more information.
* Click **注册集群** to register an existing cluster to use for deploying your app.

When you have one or more clusters, you can see a summary of them with all their namespaces and an indication of the namespace status and how long it has been running (**上线时间**).

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/cluster-overview.png" >}}

Each cluster resource you purchase from Tencent automatically contains a number of namespaces and you will run your Siemens Low Code Platform app inside one of these namespaces. The namespaces are designed to hold separate test, acceptance, and production versions of your app so that resource sharing between the versions is minimized.

You can also see the activities logged for all you clusters by clicking **活动** at the top of the page. This shows the following:

* When a cluster has been added
* When a cluster description is added
* When name of the cluster is changed
* When cluster description is changed

The cluster overview will refresh automatically, but you can force a refresh by clicking **刷新** at the top of the page.

### 3.2 Cluster Details

Click **详情** next to the cluster name to see information about the entire cluster.

In the **命名空间** tab you can see the namespaces in the cluster and their current status. This duplicates the information you can see in the cluster overview.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/cluster-details.png" >}}

There are two other tabs:

* **集群管理员** – where you can see other people who have access to the cluster and can manage them
* **活动** – where you can see all the activities which have taken place on this cluster

#### 3.2.1 Members

The **集群管理员** tab will show you all the cluster managers for this cluster. **状态** indicates whether the user has accepted an invitation. Click **移除** to remove the cluster manager from the cluster.

Click **邀请集群管理员** to invite another Tencent user to manage this cluster. You will need to know the other person's Tencent ID to invite them.

Click **发送邀请** to confirm the invitation

{{% alert color="info" %}}
When you invite a cluster manager, the user will have most of the access which the original cluster manager had, such as the abilities to add a member, change the permissions of the cluster member, and delete another cluster manager. 

The only limitations are that:

* an added cluster manager will not be able to operate on or manage the environments created in the namespaces which are already in the cluster — they need to be added as a member of the namespace if they want to manage environments in the namespaces
* cluster managers who are added to the cluster cannot remove the cluster manager who purchased the cluster resources
{{% /alert %}}

### 3.3 Namespace Management

If you are a member of a namespace, you can also manage a namespace in the cluster.

Click the **详情** button for the namespace you want to manage.

On the namespace management page, there are a number of tabs which allow you to manage aspects of your namespace :

* **应用** – all the apps deployed in this namespace
* **成员** – users who have access to this namespace
* **操作** – links to pages where operational information is displayed
* **计划** – manage database and file plans
* **安装** - download installation files for the Operator
* **附加信息** - information about the namespace

See the sections below for more information.

You can also see an activity log containing the following information for all namespaces within the cluster:

* When a namespace has been added
* When a namespace has been deleted
* When a cluster manager has been added
* When a cluster manager invitation is removed
* When a cluster manager accepts the invitation
* When a cluster manager is removed from the cluster
* When a new database plan is added in a namespace
* When a database plan is deactivated
* When a new storage plan is added in a namespace
* When a storage plan is deactivated
* When Metrics/Alerts/Logs/Backups URLs are added in the namespace
* When Metrics/Alerts/Logs/Backups URLs are removed from the namespace
* When Metrics/Alerts/Logs/Backups URLs are changed in the namespace
* When a user is invited as a namespace member
* When a user invitation for namespace member is removed
* When a user accepts the invitation as a namespace member
* When a user is removed as a namespace member
* When user's permission is changed in the namespace

#### 3.3.1 Apps

The **应用** tab of namespace details lists all the apps which are deployed to this namespace.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/namespace-apps.png" >}}

Click **配置** to make Pod, Ingress, or service annotations or configure runtime metrics for this environment.

If you are a team member of the app, click **详情** to go to the **环境详情** page for that app.

{{% alert color="info" %}}
You can only see the environment details of an app if you are a member of the app team with the appropriate authorization.
{{% /alert %}}

#### 3.3.2 Members{#members}

The **成员** tab allows you to manage the list of members of the namespace and control what rights they have.

By default, the cluster manager, who created the cluster in Siemens Low Code Platform, and anyone added as a cluster manager can invite and manage users of the cluster and its namespaces.

The following rights are available to the person who purchased the cluster resources, and members of a namespace with appropriate authorization:

* Set up operating URLs for the namespace
* View all environments in the namespace
* Manage own environments – user can create and manage an environment in any namespace in the cluster

The following actions require the appropriate access to the namespace **and** access to the app environment as a team member with appropriate authorization:

* Deploy App – user can deploy a new app to the environment or start and stop existing apps
* Scale App – user can change the number of replicas
* Edit App Constants
* Manage App Scheduled Events
* View App Logs
* View App Alerts
* View App Metrics
* Manage App Backups
* Manage Debugger
* Manage TLS configurations
* Manage Custom Runtime Settings
* Manage Log levels

##### 3.3.2.1 Adding Members

You can invite additional members to the namespace, and configure their role depending on what they should be allowed to do.

The **成员** tab displays a list of current members (if any).

1. Click **邀请成员**.

2. Enter the **腾讯ID** of the person you want to invite.

3. Give them the rights they need. This can be:
   
    1. **开发人员** – a standard set of rights needed by a developer, these are listed on the screen
    2. **管理员** – a standard set of rights needed by an administrator, these are listed on the screen
    3. **自定义** – you can select a custom set of rights by checking the box next to each role you want to give to this person

4. Click **发送邀请** to send an invite to this person.

5. The next time the user signs in to ATM, they will be added to the namespace.

##### 3.3.2.2 Editing and Removing Members

You can remove existing members.

1. On the **成员** tab of the namespace details, click **编辑** next to the member you want to remove.
2. Search for the member in the **编辑成员** dialog box by entering their email address.
3. To remove the member, click **移除成员**.
4. To edit the member, select or deselect the checkboxes to change their privileges.
5. Click **保存** to save the changes.

If you want to change the rights for an existing member, you will have to remove them and then add them again with the updated rights.

#### 3.3.3 Operate {#operate}

The **操作** tab allows you to add a set of links which are used when users request a page from the Operate category for their app in the ATM, as shown below.

The following pages can be configured:

* **指标**
* **告警**
* **日志**
* **备份**

The specification of these pages is optional.

Open the **操作** tab, enter the URLs relevant to your namespace, and click **保存** for each one.

#### 3.3.4 Plan

The **计划** tab shows you the database and storage plans which are currently configured for your namespace. Here you can activate and deactivate individual plans.

#### 3.3.5 Install

The **安装** tab allows you to download the Configuration Tool by specifying the operating system of the local computer on which you are going to run it.

#### 3.3.6 Additional Information

The **附加信息** tab displays information about the namespace, such as software versions (for example, the Operator version).

The **计划** tab shows you the database and storage plans which are currently configured for your namespace. Here you can activate and deactivate individual plans.

## 4 Deploying an App for the First Time

### 4.1 Creating a Deployment Package {#create-deployment-package}

Before you can deploy your app, you will need to create a deployment package. Ensure that you have committed the version of the app you want to deploy before continuing.

{{% alert color="info" %}}
Follow the instructions below to create a deployment package from the Team Server. Alternatively, if you already have an MDA package, you can upload it by clicking **上传**.
{{% /alert %}}

{{% alert color="warning" %}}
There is a limit of 200 MB on the size of a deployment package which can be deployed on the Tencent Cloud.
{{% /alert %}}

1. On the **环境概览** page for your app in the ATM, click **从 Team Server 创建包**.
   
2. Select the branch which contains the commit for which you want to create a deployment package and click **下一步**.
   
    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/image10.png" >}}

3. Select the revision/commit for which you want to create a deployment package and click **下一步**.
   
    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/image11.png" >}}

4. Enter a **新版本** and **标签描述** according to your own deployment procedure.

5. If you want to deploy and start your package immediately, check **自动部署** and select an existing environment in **用于自动部署的环境**. You need to make sure that the environment is ready using the techniques described in [Deploying the Deployment Package](#deploy-package), below, where you can also see how to deploy a deployment package manually.

6. Click **构建此修订版**.
   
    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/image12.png" >}}

7. Confirm the information message and you will be returned to the **环境概览** page.

### 4.2 Creating an Environment{#create-environment}

{{% alert color="info" %}}
If you request access to a free cluster you will not need to create your own environment, this will be done for you as part of the request you made. An environment will be created for you using the latest MDA package you created in [Creating a Deployment Package](#create-deployment-package), above.

You can deploy updated deployment packages by following the instructions in [Deploying the Deployment Package](#deploy-package), below.
{{% /alert %}}

When deploying your app for the first time, there will be no environment to deploy to. To create an environment, you will need to create a deployment package as described in [Creating a Deployment Package](#create-deployment-package), above.

1. Go to the **环境概览** page for your app in the ATM.

2. Click **创建环境**.

    If there are no clusters available to you, you will have to create one or get access to an existing one before you can continue. You will be taken to the Cluster Manager page. See [Cluster and Namespace Management](#cluster-namespace), above, for information on the three ways you can get a cluster, then start this section again.

3. Choose the deployment package you want to use to create the environment and click **下一步**.

    A **内部名称** will be generated for you. This will be used when creating your environment to ensure that all the environment names in your namespace are unique.

    {{% alert color="info" %}}You can change the UUID if you wish, but do not reuse one which has already been used in this namespace, even if the environment it was used for has been deleted.{{% /alert %}}

4. Enter **环境名称**, the name for the environment. The environment name can only contain lowercase (latin) letters, numbers and dashes and must start and end with an alphanumeric character. You can have several environments for your app, for example test, acceptance, and production.

5. Use the drop-down **选择命名空间** to select an existing namespace. You will see all namespaces of which you are a member.

6. Select the **目的**.
   
    1. For development of the app, for example acceptance testing, choose **开发环境**.

    2. For production deployment, select **生产环境**. If you select **生产环境**, then you will be asked for the **订阅密钥** which you received when you purchased Tencent resources.

        {{% alert color="warning" %}}Your app can only be deployed to a production environment if security is set on. You will not receive an error if security is set off, but the deployment will appear to hang with a spinner being displayed.{{% /alert %}}

7. Click **下一步**.

8. Select **核心资源**.

    For core resources, there are two sets of values. The **请求** value is the amount of core resources which are initially requested. The **限制** value is the maximum amount of resource that the environment can use.

    There are three pre-defined sets of resources, **小**, **中等**, and **大**. Choosing these will set the **CPU** and **Memory** values automatically.

    | **Name** | **CPU cores**: Limit | **Memory (Gb)**: Limit | **CPU cores**: Request | **Memory (Gb)**: Request |
    | --- | --- | --- | --- | --- |
    | Small | 1 | 0.5 | 0.1 | 0.5 |
    | Medium | 2 | 2 | 1 | 1 |
    | Large | 4 | 4 | 2 | 2 |
    | Custom | own choice | own choice | own choice | own choice |

    Alternatively, you can choose **自定义**, and enter your own requirements for **CPU** and **内存**. Ensure that these values are the same or greater than the values for a 小 environment, otherwise you may run into problems running your app.

9. Select a **数据库计划** from the list of plans in the dropdown. This will have the format `db-plan-…` where the suffix reflects the environment.

10. Select a **存储计划** from the list of plans in the dropdown. This will have the format `file-plan-…` where the suffix reflects the environment.

11. Click **创建环境**.

You will see your new environment listed. An *in-progress* icon will be shows next to the resource plans until they have been provisioned.

You will not be able to deploy to this environment until it has been fully prepared. This means that all the resource plans have been confirmed and that the placeholder app has been successfully deployed. See [Deploying the Deployment Package](#deploy-package), below, for instructions on how to check that the environment has been created successfully.

### 4.3 Deploying the Deployment Package{#deploy-package}

You can also deploy an existing deployment package to an environment without having to create a new one. This also allows you to specify constant values and control scheduled events before the app is started.

After creating an environment and deployment package (see [Creating an Environment](#create-environment) and [Creating a Deployment Package](#create-deployment-package), above) you will now have a deployment package and an environment with an app running in it. Check that there is a green tick next to the deployment package and the resources of the environment, as well as the build and runtime of the app. If any of these have failed, try to create the environment or the deployment package again, and contact your cluster manager. If neither of these solves the problem. contact Tencent support using the **help** option in the [Tencent Cloud Console](https://console.cloud.tencent.com/).

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image13.png" >}}

If everything has been created successfully, and the app has been built and is running, you can deploy a new deployment package of your app by doing the following:

1. Click **部署** next to the deployment package you wish to deploy.

2. Confirm the **目标** environment (you can select a different one here if one is available).

3. Confirm that the **状态** is *准备好*.

4. Click **传输**.
   
    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/image15.png" >}}

5. Change any constants in the **常量** tab: select the constant you want to edit and then click **编辑**.

6. Toggle any scheduled events in the **计划事件** tab: select the scheduled event you want to enable or disable and click **启停**.

7. Click **继续** to continue to the Start Application confirmation page.

8. Click **应用更改** to deploy the application to the selected environment. The app will start automatically once the deployment is successful.

You will be taken to the Environment Details page for the selected environment. You can find information about managing your environment from this page in [Managing Your Environments from the Environment Details Page](#environment-details), below.

## 5 Environments Page

The **环境概览** page of the ATM contains three sections:

* **部署包仓库**
* **环境**
* **活动日志**

### 5.1 Deployment Package Repository

The **部署包仓库** section lists the deployment packages which have been created for this app.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image17.png" >}}

There are five buttons:

* **刷新**
* **从 Team Server 创建包**
* **上传**
* **详情**
* **部署**

These are described in more detail below.

#### 5.1.1 Refresh

Sometimes the page will not be automatically refreshed with the latest information. Click **刷新** to update the information on the page.

{{% alert color="info" %}}
Using the browser refresh button will take you away from this environments page, so use this button instead.
{{% /alert %}}

#### 5.1.2 Create Package

The **从 Team Server 创建包** button creates a new package as described in [Creating a Deployment Package](#create-deployment-package), above.

#### 5.1.3 Upload Package

The **上传** button allows you to upload an MDA package you have already created. The uploaded package is added to the list of packages for the app and can be deployed in the same way as a package created using **从 Team Server 创建包**.

#### 5.1.4 Details

The **详情** button displays details of the deployment package.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image18.png" >}}

The information shows here is labeled to help you. The indicators in the environment description are described in the next section, [Environments](#environments), below.

There are three additional actions you can take while looking at the deployment package details:

* **展开以查看构建输出** – shows the output from the build process
* **下载包** – allows you to download the deployment package and save it locally
* **删除包** – deletes the deployment package – you will be asked to confirm this action

#### 5.1.5 Deploy

The **部署** button deploys the package to an existing environment as described in [Deploying the Deployment Package](#deploy-package), above.

### 5.2 Environments {#environments}

This section shows all the environments created for this app.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image19.png" >}}

For each environment, you can see a summary of the status of the resources and details of the package which is running in the environment (if there is one).

You can use one of the following buttons:

* **创建环境**
* **详情**
* **操作**

These are described in more detail, below.

In addition, there are several indicators describing the status of the environment. These are described in [Environment Status Indicators](#environment-status), below.

#### 5.2.1 Add Environment

The **创建环境** button adds a new environment as described in [Creating an Environment](#create-environment), above.

#### 5.2.2 Details

The **详情** button opens the **环境详情** page which is described in more detail in [Managing Your Environments from the Environment Details Page](#environment-details), below.

#### 5.2.3 Actions

The **操作** button opens a list of actions which you can perform quickly on the environment. Most of these actions will be disabled if the app is currently starting or stopping. These actions are:

* **设置为 Studio Pro 部署目标** – sets this environment as the target if you publish the app from Studio Pro
* **启动应用** (only shown if app is stopped) – allows you to start a stopped application
* **传输包** – allows you to deploy the deployment package in the current environment to another environment within the app, or to redeploy it in the current environment
* **环境日志** – takes you to the log page defined by the cluster manager when they registered the namespace
* **模型选项** – allows you to change the running of scheduled events and the values of constants for your app by taking you to the **模型选项** tab of the **环境详情** page
* **停止应用** (only shown if at least one replica is running) — stops the application by reducing the number of replicas to zero
* **删除环境** – this deletes the environment (see [Current Limitations](#limitations), below, for additional details about what is deleted) — you will be asked to confirm this action

#### 5.2.4 Environment Status Indicators{#environment-status}

##### 5.2.4.1 Network

The **网络** indicator has the following values:

* Tick – the network is operational
* Cross – the network is not operational
* Spinner – the network is being provisioned

##### 5.2.4.2 Storage

The **存储** indicator has the following values:

* Tick – storage is provisioned
* Cross – storage is not provisioned
* Spinner – storage is being provisioned

##### 5.2.4.3 Database

The **数据库** indicator has the following values:

* Tick – the database is provisioned
* Cross – the database is not provisioned
* Spinner – the database is being provisioned

##### 5.2.4.4 Development

The word **开发环境** indicates that this environment is set up for development.

The word changes to **生产环境** if the environment is set up for production.

See [Creating an Environment](#create-environment), above, for more information.

### 5.3 Activity

The **活动日志** section shows all the activities, such as creating environments and deploying apps, which have taken place in this environment. You can sort the activities in either descending or ascending date and time order.

## 6 Managing Your Environments from the Environment Details Page{#environment-details}

Each environment you create has an **环境详情** page which allows you to monitor and manage your environments. You can reach this by clicking the **详情** button next to the environment you want to manage.

If you have any outstanding changes to your environment the page will display a warning message. If you click **应用更改**, the environment will be stopped and restarted.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image21.png" >}}

The environment details page consists of seven tabs:

* **常规设置**
* **模型选项**
* **网络**
* **运行时**
* **日志级别**
* **TLS**
* **调试器**

These tabs are described below.

### 6.1 General Tab

The **常规设置** tab shows information about your running app.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image22.png" >}}

Most of the information is self-explanatory, but the status information gives you a quick summary of the status of the environment and the app deployed there.

#### 6.1.1 Loaded Deployment Details > Status

The **状态** status in **部署详细信息** shows you the following information – how many replicas are running, whether there was a successful build, and how long since the app was last started.

#### 6.1.2 Environment Details > Status

The **状态** status in **环境详情** shows you the status of the environment and is the same as the status shown on the Environments page and described in [Environment Status Indicators](#environment-status), above.

#### 6.1.3 Action Buttons

There are also buttons which allow you to perform various actions on your app and environment. These are described in the sections below.

##### 6.1.3.1 Stop/Start Application

If the app is not currently running (**运行时** is shown in gray) you will see **启动应用**. Clicking this will immediately trigger the app to begin running by increasing the number of replicas.

If the app is currently running, clicking **停止应用** immediately stops the application by reducing the number of replicas to zero.

##### 6.1.3.2 Transport Package

The **传输包** button allows you to deploy the deployment package in the current environment to another environment within the app, or to redeploy it in the current environment. See [Deploying the Deployment Package](#deploy-package), above, for more information.

##### 6.1.3.3 Scale Application

The **伸缩应用** button allows you to scale your app by increasing the number of replicas.

To apply the new value, click **伸缩**. Because you restart your app, it will be unavailable for a short time.

##### 6.1.3.4 Clear Admin Password

The **清除管理员密码** button allows you to clear the password for the local admin user in your app to disable the user without having to clear it in Studio Pro and redeploy the app.

##### 6.1.3.5 Change Admin Password{#change-admin-password}

The **更改管理员密码** button allows you to change the password for the local admin user in your app without having to change it in Studio Pro and redeploy the app.

##### 6.1.3.6 Delete Environment

The **删除环境** button deletes the environment — you will be asked to confirm this action.

If the cluster is standalone, or the Gateway Agent is not connected for some other reason, you can still delete the environment information in the ATM. However, the actual environment will not be deleted and you will have to do this manually.

If the environment cannot be deleted, you will receive a warning, but can go ahead and remove it from the ATM.

##### 6.1.3.7 Change Purpose

You can use the **编辑** button for **目的** to change the purpose of your app environment. You can label an environment as one used for development of the app, for example acceptance testing. In this case choose **开发环境** and the app will be deployed as an unlicensed App.

For production deployment, select **生产环境**. If you select **生产环境**, then you will be asked for the Subscription Secret which ensures that your app runs as a licensed app. For the differences between unlicensed/test apps and licensed apps, see the [Free App](/developerportal/deploy/mendix-cloud-deploy/#free-app) section in *Mendix Cloud*.

{{% alert color="warning" %}}
Your app can only be deployed to a production environment if security is set on. You will not receive an error if security is set off, but the deployment will appear to hang with a spinner being displayed.
{{% /alert %}}

##### 6.1.3.8 Change Subscription Secret

If you select production as the **目的** of the app environment, then you will need to use a Subscription Secret which ensures that your app runs as a licensed app. If you need to enter or change the subscription secret, then you can do that here.

Subscription secrets are obtained from Tencent.

### 6.2 Model Options Tab

The **模型选项** tab allows you to change the configuration of scheduled events and constants in your app.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/image24.png" >}}

To toggle any scheduled events, select the scheduled event you want to enable or disable and click **启停**.

To change any constants, select the constant you want to edit and then click **编辑**.

### 6.3 Network Tab

On the **网络** tab, you add client certificates (in the PKCS12 format) or certificate authorities (in the PEM format) for outgoing connections. These will be used when your application initiates SSL/TLS connections.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/network-tab.png" >}}

### 6.4 Runtime Tab

On the **运行时** tab, you can change various runtime settings for your app environment. For more details of these, see the [Runtime Tab](/developerportal/deploy/environments-details/#runtime-tab) section of *Environment Details*.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/runtime-tab.png" >}}

### 6.5 Log Levels Tab

On the **日志级别** tab, you can change the log levels which are used for the log nodes in your app. For more details of these, see the [Log Levels Tab](/developerportal/deploy/environments-details/#log-levels) section of *Environment Details*.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/log-levels-tab.png" >}}

### 6.6 TLS

If you are using Operator version 1.5.0 or above, you can configure TLS for your environment from the ATM.

In the TLS pane, you can choose whether to **应用默认配置** or a **自定义 TLS 配置**. If you apply the default configuration, then the configuration made when you ran the configuration script for the namespace will be used.

{{% alert color="info" %}}
If you are using a version of Operator before 1.5.0, the settings in this tab will have no effect and the default configuration will be applied.
{{% /alert %}}

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/tls-configuration.png" >}}

If you choose a custom TLS configuration, you will need to enter the following information:

* **启用 TLS** – is TLS enabled for this environment?

* **使用现有的 TLS 密钥或添加新的 tls 私钥和证书** – Use existing TLS secret or add new TLS private key and certificate?

* **现有的密钥名称** – if you choose an existing TLS secret then you will be asked to enter its name

* **TLS 私钥文件** and **TLS 证书文件** – if you choose to add a new key you will need to upload these two files

Click **保存并应用** to confirm your new configuration.

### 6.7 Debugger

On the **调试器** tab you can set up and view the credentials you need to debug your app when it is running on Tencent.

Clicking **启用调试器** allows you to set the type of password to be one of the following:

* **自动生成** – The password is generated automatically.
* **自定义** – The password is set manually.

Click **保存并应用** to confirm your new configuration.

## 7 Current Limitations{#limitations}

### 7.1 Reserved Names for Siemens Low Code Platform Apps{#reserved-names}

All names beginning **mendix-** are reserved for use by the Tencent cluster.

### 7.2 Deleting Your App

Delete all environments before you delete an app. If you delete an app which has environments on Tencent, you will not be able to reach the environments through the ATM.

### 7.3 App Security and Production

If you attempt to deploy an app with security not set to production into a production environment you will not get an error, however the deployment will appear to hang with **副本正在运行** and **运行时** showing a spinner.

### 7.4 ApplicationRootUrl Needs to be Set Manually

In some cases, your Siemens Low Code Platform app will need to know its own URL - for example when using SSO or sending emails.

For this to work properly, you need to set the [ApplicationRootUrl](/refguide/custom-settings/#general) **自定义运行时设置** in the **运行时** tab to the app's URL.

To add this setting:

1. Copy the **应用URL** value from the **常规设置** tab.
2. Switch to the **运行时** tab.
3. Add a **自定义运行时设置**: use `ApplicationRootUrl` as **设置** and the URL you copied from **应用URL** as the **值**.

{{% alert color="info" %}}
If you change **应用URL** in the **常规设置** tab, you should update the `ApplicationRootUrl` value as well.
{{% /alert %}}

## 8 Troubleshooting

This section covers an issue which can arise where Siemens Low Code Platform cannot recover automatically and manual intervention may be required.

### 8.1 Status Reporting

Under some circumstances changes in the status of the environment and its apps will not be updated automatically. To ensure you are seeing the current status, you may need to click the **刷新** button on the screen (not the browser page refresh button).
