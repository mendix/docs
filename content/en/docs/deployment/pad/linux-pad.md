---
title: "Best Practices for Linux Deployments"
url: /developerportal/deploy/linux-pad/
description: "How to install and configure Mendix on a Linux system using Mendix Portable Runtime."
weight: 80
---

## Introduction

Mendix Portable Runtime refers to packaging applications in a self-contained format that includes all necessary dependencies, allowing them to run on various Linux systems without requiring traditional installation.

This documentation provides guidance for deploying Mendix Portable Runtime in a Linux environment and serves as a helpful reference rather than official implementation support.

{{% alert color="info" %}}
Unlike the M2EE-based deployment, where Mendix provides full end-to-end tooling support, the Mendix Portable Runtime approach only requires Java to run, with Mendix's support strictly limited to the Mendix Portable Runtime package itself. All implementation, configuration, and deployment activities, including Linux deployment, remain the customer's sole responsibility.
For information about the scope of support, see [Support for Different Deployment Strategies](/support/deployment-strategy-support/).
{{% /alert %}}

## Prerequisites

To deploy your app to an on-premises Linux configuration using [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/), ensure that you fulfill the following prerequisites:

* A Linux environment. This can be a virtual machine, a physical server, or a cloud instance (for example, AWS EC2, Azure VM, Google Cloud VM). You will need `sudo` or `root` privileges for some commands.
* Java Development Kit (JDK). Your application requires a compatible Java runtime. For installation instructions, refer to the following sections. 
* Your [Mendix Portable Runtime .zip file](/developerportal/deploy/portable-app-distribution-deploy/).
* A method to transfer the .zip file onto your Linux machine, for example:

    * Cloud storage - If your Linux machine is in the cloud, you can use the cloud provider's CLI (for example, AWS S3, Azure Blob Storage, Google Cloud Storage).
    * SFTP/SCP - For direct file transfer from your local machine.
    * Version Control System (VCS) - If your .zip is stored in a repository.
    * Artifactory/Nexus: For artifact management.

## Deploying an App with Mendix Portable Runtime

To deploy your app to Linux, perform the following steps:

1. Connect to your Linux server by running the following command: `ssh -i "<your SSH private key, if applicable>.pem" <your username on the Linux instance>@<public IP address or host name of your server>`

2. Optional: Update your package lists and installed packages by running one of the following commands:

    * For Debian/Ubuntu-based systems:

        ```text
        sudo apt update -y
        sudo apt upgrade -y
        ```

    * For RHEL/CentOS/Amazon Linux-based systems: `sudo yum update -y` or `sudo dnf update -y`

3. Install the Java Development Kit by running one of the following commands:

    * For Amazon Linux: `sudo yum install java-21-amazon-corretto -y`
    * For Debian/Ubuntu-based systems: `sudo apt install temurin-21-jdk -y`
    * For RHEL/CentOS-based systems: `sudo yum install temurin-21-jdk -y` or `sudo dnf install temurin-21-jdk -y`

    If your application requires it, you can change the Java version on vendor as needed, for example, `openjdk-21-jdk` or `java-21-amazon-corretto`.

    {{% alert color="info" %}} Your Mendix Portable Runtime only requires a Java Runtime Environment (JRE) to run, but it is often recommended to install a full JDK as it includes the JRE and development tools. {{% /alert %}}

4. Verify that Java is correctly installed by running the following command: `java -version`.
5. Upload the Mendix Portable Runtime .zip file to a location where your Linux server can access it by using one of the following options, depending on the location and configuration of your Linux machine.

    * For Azure Blob Storage (often done as part of a CI/CD pipeline): `az storage blob upload --account-name <your storage account name> --container-name <your container name> --name <your app>.zip --file <your project folder>/build/distributions/your-app.zip --auth-mode login`
    
        You may need to log in to Azure CLI first with the `az` login.

    * For Cloud Storage (often done as part of a CI/CD pipeline): `<cloud provider, for example, aws s3> cp <your project folder>/build/distributions/your-app.zip s3://<your bucket>/`

        Adjust the `cp` command for your specific cloud provide (for example, `gsutil cp` for Google Cloud, or `aws s3` for AWS S3).

    * For SFTP/SCP (when transferring directly from your local machine to the Linux server): `scp -i "<your SSH private key if app>.pem" <path to the .zip file on your local machine> <your user name>@<your Linux server IP or host name>:/home/<your user>/`

    * For JFrog Artifactory or similar: `curl -u "<your Artifactory user name>:<your Artifactiory password>" -X PUT "https://<path to your file>.zip" -T <your app>.zip`

        Use the `-O` flag to save the file with its original name.

    * From a public URL using `wget`: `wget https://<path to your file>.zip`

6. Download the .zip file onto your Linux server by using one of the following options, depending on the location and configuration of your Linux machine.

    * For Azure Blob Storage: `az storage blob download --account-name <your storage account name> --container-name <your container name> --name <your app>.zip --file /home/<your user name>/<your app>.zip --auth-mode login`
    
        Ensure that the user running this command on the Linux instance has the necessary permissions to access the Azure Storage account and container. You may need to log in to Azure CLI first with the `az` login.

    * For Cloud Storage: `<cloud provider, for example, aws s3> cp s3://<your bucket name>/<your app>.zip /home/<your user name>/<your app>.zip`

        Adjust the `cp` command for your specific cloud provide (for example, `gsutil cp` for Google Cloud, or `aws s3` for AWS S3).

        Ensure that the user running this command on the EC2 instance has read permissions for the specified S3 Bucket.

    * For SFTP/SCP (when transferring directly from your local machine to the Linux server): `scp -i "<your SSH private key if app>.pem" <path to the .zip file on your local machine> <your user name>@<your Linux server IP or host name>:/home/<your user>/`

    * For JFrog Artifactory or similar: `curl -u "<your Artifactory user name>:<your Artifactiory password>" -0 "https://<path to your file>.zip" -T <your app>.zip`

        You can also retrieve the files using `wget`.

7. Extract the .zip file by running the following command: `unzip <your app>.zip -d <your desired directory>`.
8. Navigate into the extracted directory and execute the start script by running the following command:

    ```text
    cd your-desired-directory
    sh bin/start
    ```

    The `bin/start` script is a common convention for Mendix Portable Runtimes using the Default configuration. If your application uses a different configuration, start script, or command, adjust accordingly.

9. Verify that the application is running by opening the following URL in your browser: `http://<public IP of your Linux instance>:8080`.

    `8080` is the default port. If your application is configured to run on a different port, adjust accordingly.

    Ensure that the port is open in your Linux server's firewall (for example, `firewalld`, `ufw`), and any cloud security groups or network access control lists (NACLs).
