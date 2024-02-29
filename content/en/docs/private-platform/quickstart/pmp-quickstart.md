---
title: "Install and Configure the Mendix Operator for Private Mendix Platform"
linktitle: "Install and Configure the Mendix Operator"
url: /private-mendix-platform-quickstart/operator/
description: "Documents the installation of the Mendix Operator for the Private Mendix Platform."
weight: 10
tags: ["private mendix platform",  "private platform", "mendix operator", "installation"]
---

## 1 Introduction

This document provides a guide for installing the Mendix Operator and the Private Cloud License Manager for Private Mendix Platform.

## 2 Installing and Configuring the Mendix Operator

To install and configure the Mendix Operator, perform the following steps:

1. Download the release binary from your [Private Mendix Platform download portal](https://privateplatform.mendix.com/). If you do not have access to the download portal, contact your Mendix partner for information.

2. Unzip the release binary to a local folder on your Windows or Linux server. The release binary contains the following files:

    * **Tools** - *mx-pclm-cli*, which can be used to manage PCLM
    * **helm**, and **helmfile** tools, which are used to deploy and manage Private Mendix Platform charts and Svix charts
    * **images** - Private Mendix Platform image, PCLM image, Svix image, test application image
    * **Installer** - installer tools
    * **mxpc-cli** - installation tools which can be used to manage or configure the Mendix Operator
    * **charts**  - charts, including Private Mendix Platform charts and Svix charts
    
    {{< figure src="/attachments/private-platform/pmp-binary.png" >}}

3. Optional: If your clusters can connect to a public registry with a passable network, skip to step 4 below, otherwise initialize the installation by performing the following steps:

    1. Upload the images to your private repository in an air-gapped environment.

        ```text
        ~/mpp-binary-linux$ ./installer init  migrate --help
        Migrate Mendix Private Platform related image to your own registry

        Usage:
        installer init migrate [flags]
        Flags:
            -h, --help                 help for migrate
            -r, --registryurl string   registry url (required)
            -e, --repo string          Repository name
            -u, --username string      Username (required) for your private registry
        ```

        The destination image is named `${registryurl }/${repo}/mendix-private-platform: ${tag}`.
    
    2. The `registryurl` and `repo` are read from the input parameters. The `tag` is automatically read by the installer. If the repository does not exist, you must create it before running the `init migrate` command.

        ```text
        ~/mpp-binary-linux$ ./installer init migrate   -r [registry] -u  user -e [repositoryName]
        Please enter user password: ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

        Confirm password: ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
        the config checksum is empty
        The image destination[REDACTED] svix-server:v0.75.0
        The image destiation [REDACTED] mendix-private-platform:1.4.0.80d447b1
        the config checksum is empty
        The image destiation [REDACTED] mxpc-test:1.0
        the config checksum is empty
        The image destiation [REDACTED] privatecloud-license-manager:0.3.0
        svix-server_v0.75.0 => [REDACTED] svix-server:v0.75.0 - ok
        mendix-private-platform_1.4.0.80d447b1 => [REDACTED] mendix-private-platform:1.4.0.80d447b1 - ok
        mxpc-test_1.0 => [REDACTED] mxpc-test:1.0 - ok
        privatecloud-license-manager_0.3.0 => [REDACTED] privatecloud-license-manager:0.3.0 - ok
        ```

    3. By default, mxpc-cli tools install the latest version of Mendix Operator. You can specify a different Mendix Operator version by using the following command: `./installer operator init -v="version number"`

4. Perform the base installation by doing the following steps:

    1. Run the following command, where `-n` indicates the namespace: `./installer operator configure -n=<namespace name>`
    2. Click **Base Installation**, and then set the following settings:

        * **Cluster Mode** – Select **standalone**.
        * **Cluster Type** – Select **openshift** or **generic**.

        {{< figure src="/attachments/private-platform/pmp-install1.png" >}}

    3. Click **Run Installer** to install the Mendix Operator in your cluster.

5. Configure the namespace by doing the following steps:

    1. Click **Configure Namespace**.
    2. Click **Database Plan** and fill out the required information.
        
        {{< figure src="/attachments/private-platform/pmp-install2.png" >}}

    3. Click **Storage Plan** and fill out the required information.
    4. Click **Ingress** and fill out the required information.
        
        {{< figure src="/attachments/private-platform/pmp-install3.png" >}}
    
    5. Click **Registry** and fill out the required information.
    6. Click **Review and Apply** > **Evaluate Configuration**.
    7. Make any required changes or click **Apply Configuration**.
        
        {{< figure src="/attachments/private-platform/pmp-install4.png" >}}
    
    8. Click **Exit Installer** > **OK**.
    
        {{< figure src="/attachments/private-platform/pmp-install5.png" >}}
    
### 3 Installing Private Cloud License Manager {#install-pclm}

Private Cloud License Manager is a required component of Private Mendix Platform. Before you install the Platform, install PCLM by doing the following steps:

1. Run the command `./installer component -n=<namespace name>`, where `-n` indicates a namespace. The namespace must be the same as the namespace that you plan to use for Private Mendix Platform.
2. Select **PCLM** to install PCLM.
3. Specify the following parameters:

    * **Databasetype** – The database type, either **postgres** (default) or **sqlserver**.
    * **Host** – The host name of the database service.
    * **DBName** – The name of the database where you want to hold the PCLM data.
    * **DBUser** – A database user with the rights described in the prerequisites section.
    * **DBPassword** – The password for the database user.
    * **port** – The port used to access the database. The default value is *5432*.
    * **Strict TLS** – Whether the database uses strict TLS. The default value is *false*.
    * **ssl Cert File** – If Strict TLS is set to *true*, provide the location of the SSL Root certificate file. If Strict TLS is set to *false*, leave this field blank.
    * **ImageRepo** – The location of the image repo, for example, `private-cloud.registry.mendix.com/privatecloud-license-manager`
    * **ImageTag** – The docker image tag, for example, `0.3.0`.
    * **Admin password** – A new PCLM admin password. When the PCLM server is set up, it contains an *administrator* user with a default password. This password should be modified immediately.
    * **PCLM Operator User** – A new PCLM operator user.
    * **PCLM Operator Password** – A new PCLM operator password.

4. Click **Install PCLM**.
