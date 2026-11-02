---
title: "How to Setup Custom Repositories"
url: /refguide/managed-dependencies/custom-repositories
weight: 2
description: "Describes how to setup a custom repository locally"
---

{{% alert color="info" %}}
This document is relevant for developers who want to use managed dependencies with an internet-restricted or air-gapped setup.
{{% /alert %}}

## Introduction

If your development environment has restricted or no access (air-gapped) to the internet, the background job that automatically resolves your project dependencies will fail. This means you will not be able to build and run your Mendix project. In such cases, Mendix recommends that you set up a custom repository so that Studio Pro can resolve the required dependencies.   

This document explains how you can set up a local repository or a remote artifactory like JFrog and configure Studio Pro to use it to resolve the project dependencies. It also covers how to use a simple flat file folder to store your `.jar` files. This allows you to manage your project's dependencies more efficiently, especially internal libraries or when internet access is limited.

## Understanding Custom Repositories

Think of custom repositories as your own personal library for software components (like `.jar` files). Instead of downloading everything from the public internet (like Maven Central), you can store frequently used or private components in your own repository. This can make your builds faster and more reliable.

This is also the recommended setup when there is limited or no access to the internet. 

* **JFrog Artifactory** and **Sonatype Nexus** are popular tools that act as these "personal libraries." They can store your own libraries, and also "proxy" public repositories, meaning they download from the internet once and then serve it to everyone in your team from their local cache.
* **Local repository:** This is a folder on your network which contains your project dependencies. The folder can either follow the Maven-style layout or can be a simple folder containing your dependencies.

## Custom Repositories and the Build Process

When building Mendix applications in Mendix Cloud, dependencies are not downloaded. Instead, the build process relies on the dependencies being present in the `vendorlib` folder.

Studio Pro manages this by downloading dependencies from the configured repositories using Gradle and then committing the `vendorlib` folder to version control. When you set up a custom Gradle repository, this is used during the download phase, meaning all dependencies stored in vendorlib originate from that repository.

## How to Set up a Remote Repository 

### Prerequisites

The following example uses JFrog, but you can opt for any tool of your choice. Most of the repositories in the market have very similar capabilities. You can install your chosen tool on your local machine or host it on a local network.

{{% alert color="info" %}}
For this option, you will need some access to the internet. If you have absolutely no access to the internet (air-gapped) use a [local repository](#local-repo), described below.
{{% /alert %}}

#### Installing JFrog

Follow the installation steps from the [Installing Artifactory](https://jfrog.com/help/r/jfrog-installation-setup-documentation/installation-steps) page of the JFrog documentation to install it on your local system. If you don't have permissions to install software on your system or local network, you can request your IT department to create a remote instance for you and provide credentials to access it.

### Configuring the Repository

When setting up your remote repository (JFrog), it is crucial to ensure it can access public repositories like Maven Central and Gradle Plugin Portal. If your repository doesn't have these configured as "proxy" sources, you might encounter errors when Studio Pro tries to sync the required dependencies. You will have to configure the following two public repositories.

* **Maven Central URL:** `https://repo1.maven.org/maven2/`
* **Gradle Plugins Repository URL:** `https://plugins.gradle.org/m2/`

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/jfrog-remote-repositories.png" >}}

### Configuring Studio Pro to Use the Remote Repository

Once you have set up your remote repository, you need to add a few configuration settings in Studio Pro. This will enable Studio Pro to resolve dependencies from the remote repository. 

1. Enable the `Edit -> Preferences -> Deployment -> Use custom repository` option.
1. Enter the following settings into the text area field that will appear once your enable the above option

    ```groovy      
    maven {
        url = uri("http://localhost:8046/artifactory/maven-remote/") // Make sure to use the correct url to your repository
        // If the repository requires authentication, then uncomment the following config
        // credentials {
        //    username = 'username'
        //    password = 'password'
        //}
    }

    // This is for the CycloneDx Gradle plugin
    maven {
       url = uri("http://localhost:8046/artifactory/gradle-remote/") // Make sure to use the correct url to your repository
       // If the repository requires authentication, then uncomment the following config
       // credentials {
       //    username = 'username'
       //    password = 'password'
       //}
    }
    ```

1. Click Ok and Studio Pro will start syncing the dependencies for the project.

    If everything goes well, you will see your `vendorlib` directory populated with the required project dependencies and a `vendorlib-sbom.json` file.

1. Run the app to verify if it works.

## How to Set up a Local Repository{#local-repo}

### Prerequisites

For scenarios where you have absolutely no access to the internet (air-gapped), you can create a folder on your local system which will contain all the project dependencies. Then you can configure Studio Pro to resolve dependencies from this folder.

#### Downloading the M2 Repository

You will have to create an `m2` (Maven) style directory which will contain the [CycloneDx Gradle Plugin](https://github.com/CycloneDX/cyclonedx-gradle-plugin). You can download the content for this directory from the [Mendix GitHub repo](https://github.com/mendix/m2Repo-with-cycloneDX). The CycloneDx Gradle plugin is used to meet compliance and security requirements when generating the `vendorlib-sbom.json` file.

### Configuring the Repository

Create a folder containing your project dependencies. You can download them from [Maven Central](https://mvnrepository.com/repos/central). Make sure you store this on your local system where Studio Pro has read/write access to it.

{{% alert color="info" %}}
One option is to open Studio Pro from a device which has internet access and allow the dependencies to sync. You can then combine the `userlib` and `vendorlib` into a folder and share it with everyone in your team.
{{% /alert %}}

### Configuring Studio Pro to Use Local Repository

Once you have set up your local repository, you need to add a few configuration settings in Studio Pro. This will enable Studio Pro to resolve dependencies from the local repository.

1. Enable the `Edit -> Preferences -> Deployment -> Use custom repository` option.
1. Enter the following settings into the text area field that will appear once your enable the above option

    ```groovy      
    flatDir {
      dirs '/Users/username/Documents/libs' // This is the path to the project level dependencies. It is recommended to use absolute paths. But relative path can also be used.
    } 
    
    // This is for the CycloneDx Gradle plugin
    maven {
      url = uri("C:/Users/user/Documents/gradle-remote")  // Replace with your local m2 repo path
    }  
    ```

1. Click Ok and Studio Pro will start syncing the dependencies for the project.

    If everything goes well, you will see your `vendorlib` directory populated with the required project dependencies and a `vendorlib-sbom.json` file.

1. Run the app to verify if it works.
