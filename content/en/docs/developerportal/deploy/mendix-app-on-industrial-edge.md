---
title: "Mendix Applications on Industrial Edge"
url: /developerportal/deploy/mendix-app-on-industrial-edge/
category: "Deployment"
weight: 49
description: "Describes how to bring a Mendix app to the Industrial Edge"
tags: ["Mendix app", "Industrial Edge", "edge", "docker image", "Mendix Buildpack"]
---

## 1 Introduction

[Industrial Edge](https://new.siemens.com/global/en/products/automation/topic-areas/industrial-edge/production-machines.html) is the SIEMENS platform for hosting applications from different vendors on a computing platform close to the shopfloor. Industrial Edge enables extensions to automation, deployments of demanding streamprocessing, and learning algorithms as well as hosting your apps from integration code to site automation.

Industrial Edge empowers factory operators to create custom applications with the Mendix low-code platform that run locally as Edge Apps. Among its other tools, Industrial Edge provides the [Industrial Edge App Publisher (IEAP)](https://support.industry.siemens.com/cs/us/en/view/109799477), a tool installed on a development PC to convert Mendix apps to Industrial Edge Apps. The Industrial Edge App Publisher is available for both Windows and Linux operating systems.

This documentation is meant for Mendix developers who want to use their apps in the Industrial Edge environment.

## 2 Prerequisites

To convert your Mendix app to an Industrial Edge App, the following are required:

* A **deployment package (.mda)** of your Mendix app
* The Industrial Edge App Publisher UI/CLI installed on your development PC

   You need the following versions of the Industrial Edge App Publisher:
   * IEAP UI: minimum V1.2.8  
   * IEAP CLI: minimum V1.3.3
* [Docker](https://docs.docker.com/get-docker/) with [tcp Socket enabled](https://docs.docker.com/engine/reference/commandline/dockerd/) for Docker daemon
* An Industrial Edge Management (IEM) to deploy your app 

The following is also required if you want to test and deploy your converted Mendix app:

* An Industrial Edge Device (IED) on which to install the Mendix app

## 3 Convert Your Mendix App to an Edge App

To convert your Mendix app into an Industrial Edge App, follow the instructions below.

### 3.1 Create a deployment package of your Mendix app

[Create a deployment package(.mda)](/refguide/create-deployment-package-dialog/) for your Mendix app.

### 3.2 Create a Docker Image of Your Mendix App  

You can create your Docker image in one of two ways:

* through the [Industrial Edge App Publisher UI](#ieapui)
* using the [Industrial Edge App Publisher CLI](#ieapcli)

For more information on the steps described below, refer to the [Industrial Edge App Publisher - Operation](https://support.industry.siemens.com/cs/us/en/view/109799477) manual.

#### 3.2.1 Industrial Edge App Publisher UI{#ieapui}

To create your docker image using the IEAP UI, do the following:

1. Select the workspace (an empty folder) which will be used by the Industrial Edge App Publisher to store the app related data.

   {{< figure src="/attachments/developerportal/deploy/mendix-app-on-industrial-edge/App_Publisher_Workspace.png" alt="Select Workspace" >}}

2. Connect to the Docker daemon.

3. Connect to an Industrial Edge Management.

4. Create a Docker image of your Mendix app by doing the following: 
    1. Click **Create Image** and select **Mendix**.
    2. Enter the name of the Docker image you want to create.
    3. Click **Browse** and select the **deployment package(.mda)** of your Mendix app.
    4. Click **Create**.

      {{< figure src="/attachments/developerportal/deploy/mendix-app-on-industrial-edge/select_mda_file.png" alt="Create docker image of Mendix app" >}}
      
Once the Docker image is built, the next step is to create the Mendix Edge App.

#### 3.2.2 Industrial Edge App Publisher CLI{#ieapcli}

Alternatively, to create the Docker image of your Mendix app using the IEAP CLI, enter the following commands into the CLI:
  
1. Use the following command to connect to the Docker daemon:
   ```shell
   ie-app-publisher-linux de c -u http://127.0.0.1:2375
   ```
2. Use the following command to create a Docker image of your Mendix app, `mymendixapp`:
   ```shell
   ie-app-publisher-linux im c -n mendixedge:latest -f /root/mymendixapp.mda
   ```

Once the Docker image is built, the next step is to create the Mendix Edge App.

## 4 Create Mendix Edge App 

After you have created the Docker image of your Mendix app, you must create the corresponding Industrial Edge App and its version. To do so, follow the steps below.

### 4.1 Create Mendix App on the IEM Side

{{% alert color="info" %}}
You can skip this step if you just want to create a standalone app which does not require an IEM connection in the Industrial Edge App Publisher.
{{% /alert %}}

1. Log into your IEM.
2. Create a project and the related Mendix app inside the project.

   You can find the procedure and additional information on how to create a project and an app inside of it in the **Applications > My Projects** section of the [Industrial Edge Management - Operation](https://support.industry.siemens.com/cs/us/en/view/109799510) manual.

   {{< figure src="/attachments/developerportal/deploy/mendix-app-on-industrial-edge/IEM_Created_app.png" alt="Create docker image of Mendix app" >}}

Once you have created the Mendix app on IEM side, you must create a version of your Mendix app in the Industrial Edge App Publisher.

### 4.2 Create App Version

Mendix Applications on Industrial Edge support Configuration Files. You can add a configuration file for each Edge device, with specific environment variables in addition to the default variables which are configured within the docker compose file.

The container will search the location, specified in the environment variable: `IEM_CONFIG_PATH`, for files with the extention `.env`. The `.env` files can contain one or more environment variables, which will be added to the environment variables of the container. This can be used to set Edge device specific constants, scheduled events, or custom runtime settings. Check the [configuring constants](https://github.com/mendix/cf-mendix-buildpack#configuring-constants) section of the Mendix buildpack for the syntax to use. 

See the next section for an example compose file including the `IEM_CONFIG_PATH`, which is set in the example to `/cfg-data'.

As above, you can publish your app using the IEAP UI, or the IEAP CLI.

#### 4.2.1 Industrial Edge App Publisher UI

Perform the following steps to create a version of your app on Industrial Edge using IEAP UI.

1. Open the IEAP UI.
2. Login to the IEM and you will see the Applications which are created on IEM
3. Click the Mendix Edge App which you have created in step 4.1.
4. Click **Add New Version**.
5. Enter all the required Docker Compose configurations and information for your Mendix app in the wizard. 
6. In the wizard, select the Docker image which you have created above.
   {{< figure src="/attachments/developerportal/deploy/mendix-app-on-industrial-edge/Select_Mendix_Image.png" alt="Create docker image of Mendix app" >}}
7. Click **Save** and then **Review**.

   The docker-compose.yml file for your Mendix app will resemble this example:
   ```yaml
    version: '2.3'
        services:
            mendixapp:
                image: mendixedge:latest
                healthcheck:
                    test: ['CMD', 'curl', '-f', 'http://localhost']
                    interval: 15s
                    retries: 2
                    start_period: 10s
                    timeout: 3s
                environment:
                    ADMIN_PASSWORD: *******
                    DATABASE_ENDPOINT: 'jdbc:hsqldb:file:~/data/database/db:mem:mendix'
                    MXRUNTIME_DatabaseType: HSQLDB
                    MXRUNTIME_DatabaseJdbcUrl: 'jdbc:hsqldb:file:~/data/database/db:mem:mendix'
                    IEM_CONFIG_PATH: /cfg-data
                volumes:
                   - './publish/:/publish/'
                   - './cfg-data/:/cfg-data/'
                mem_limit: 1gb
                restart: unless-stopped
                ports:
                   - '60000:8080'
                
   ```

8. Click **Validate & Create**.

   This will create the version metadata in the workspace you selected earlier.
   
9. Click **Start Upload** to upload the created app version. 

#### 4.2.2 Industrial Edge App Publisher CLI

To create the app version by using the IEAP CLI, use the following commands.

1. Create an empty folder, and run the following command inside that folder to initialize a workspace:
   ```shell
   ie-app-publisher-linux ws i
   ```
2. Connect the Industrial Edge App Publisher to an Industrial Edge Management using the appropriate credentials:
   ```shell
   ie-app-publisher-linux em li -u "https://int.portal.t.edge.siemens.cloud" -e user@siemens.com -p P@ssword123
   ```
3. List the project including its apps and fetch the `applicationId` which will be needed for creating an app version:
   ```shell
   ie-app-publisher-linux em pr l -k "projectId, name"
   ie-app-publisher-linux em pr la -p "758aa412254545465" -k "applicationId, title"
   ```
4. Create a version of your Mendix app using the `applicationId` you have just retrieved:
   ```shell
   ie-app-publisher-linux em app cuv -a '39853716a55048c9935e451a63eecc89' -v '0.0.1' -y './docker-compose.yml' -c 'change logs' -n -n {"mendixapp":[{"name":"mendix","protocol":"HTTPS","port":"8080","headers":"","rewriteTarget":"/"}]}  -s 'mendix' -t 'FromBoxReverseProxy' -u '8080' -r '' 
   ie-app-publisher-linux em app uuv -a '39853716a55048c9935e451a63eecc89' -v '0.0.1' 
   ```

## 5 Install Your Mendix App on an Edge Device 

### 5.1 Prerequisites

To install your Mendix app on an Edge Device, you need the following prerequisites:

* An Edge Device added to your IEM.

The procedure and additional information on how to add an Edge Device to the IEM is in the **Operations in the Management UI > Connecting an Edge Device** section of the [Industrial Edge Device - Operation](https://support.industry.siemens.com/cs/us/en/view/109799507) manual.

### 5.2 Procedure

To install your Mendix app on your Edge Device, perform the following steps:

1. Log into your IEM.
2. Navigate to **Applications > My Projects**.
3. Click the tile of the Mendix app.
4. To install an app version, click the install action icon of the corresponding version.
5. Select the Edge Devices on which you want to install the Mendix app version.
6. Click **Install**.

For more information on how to install an app (version), refer to the [Industrial Edge Management - Operation](https://support.industry.siemens.com/cs/us/en/view/109799510) manual.

## 6 Read More

The following documents give more information on Industrial Edge operations:

* [Industrial Edge Device - Operation](https://support.industry.siemens.com/cs/us/en/view/109799507) 
* [Industrial Edge Management - Operation](https://support.industry.siemens.com/cs/us/en/view/109799510)
* [Industrial Edge App Publisher - Operation](https://support.industry.siemens.com/cs/us/en/view/109799477)
