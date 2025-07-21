---
title: "How to setup Custom Repositories"
url: /refguide/managed-dependencies/custom-repositories
weight: 2
description: "Describes how to setup a custom repository locally"
---

{{% alert color="info" %}}
This document is relevant to developers who want to use Managed Dependencies and an internet-restricted or air-gapped setup 
{{% /alert %}}

# Introduction

If your development environment has restricted or no access(air-gapped) to the internet, the background job that automatically resolves your project dependencies will fail. Due to this, you'll not be able to build and run your Mendix project. For such cases, we would recommend you to setup a custom repository so that Studio Pro can resolve the required dependencies.   
This document will guide you on how you can set up a local repository or a remote artifactory like JFrog and configure Studio Pro to use it to resolve the project dependencies. We'll also cover how to use a simple flat file folder to store your `.jar` files. This will allow you to manage your project's dependencies more efficiently, especially for internal libraries or when internet access is limited.

# Understanding Custom Repositories

Think of custom repositories as your own personal library for software components (like `.jar` files). Instead of downloading everything from the public internet (like Maven Central), you can store frequently used or private components in your own repository. This can make your builds faster and more reliable.
This is also the recommended setup when there is limited or no access to the internet. 

* **JFrog Artifactory** and **Sonatype Nexus** are popular tools that act as these "personal libraries." They can store your own libraries, and also "proxy" public repositories, meaning they download from the internet once and then serve it to everyone in your team from their local cache.
* **Local repository:** This is a folder on your network which potentially contains your project dependencies. The folder can either follow the maven-style layout or can be a simple folder containing your dependencies.

# How to set up a Remote Repository 

## 1. Prerequisites

In this example, we have made use of JFrog. You can opt for any tool of your choice. Most of the repositories in the market have very similar capabilities. You can install this on your local machine or host it on a local network.

### Installing JFrog

Follow the installation steps from the [official documentation page](https://jfrog.com/help/r/jfrog-installation-setup-documentation/installation-steps) of JFrog to install it on your local system. If you don't have permissions to install software on your system or local network, you can request your IT department to create a remote instance for you and provide credentials to access it.

## 2. Configuring the repository

When setting up your remote repository (JFrog), it's crucial to ensure it can access public repositories like Maven Central and Gradle Plugin Portal. If your repository doesn't have these configured as "proxy" sources, you might encounter errors when Studio Pro tries to sync the required dependencies. Following are the two public repositories you will have to configure.

* **Maven Central URL:** `https://repo1.maven.org/maven2/`
* **Gradle Plugins Repository URL:** `https://plugins.gradle.org/m2/`

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/jfrog-remote-repositories.png" class="no-border" >}}

## 3. Configuring Studio Pro to use remote repository

Once you have set up your remote repository, you need to add a few configuration settings in Studio Pro. This will enable Studio Pro to resolve dependencies from the remote repository. 

- Go to `Edit -> Preferences -> Deployment -> Use custom repository`. Enable this option.
- Input the following settings into the text area field that will appear once your enable the above option
    ```gradle        
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
- Press Ok and Studio Pro will start syncing the dependencies for the project.
- If everything goes well, you'll be able to see your `vendorlib` directory populated with the required project dependencies and `vendorlib-sbom.json` file.
- Then you can run the app to verify if it works.

# How to set up a local Repository

## 1. Prerequisites

For scenarios where you have absolutely no access to the internet(air-gapped), you can create a folder on your local system which will contain all the project dependencies. Then you can configure Studio Pro to resolve dependencies from this folder.

### Downloading M2 repository
We use [CycloneDx Gradle Plugin](https://github.com/CycloneDX/cyclonedx-gradle-plugin) to generate the `vendorlib-sbom.json` file. This is for Compliance and Security requirements. You will have to create a `m2` (Maven) style directory which will contain this plugin. You can download it from the [Mendix GitHub repo](broken-link)

## 2. Configuring the repository

Create a folder containing a flattened list of all the project dependencies. Make sure you store this on your local system where Studio Pro has read/write access to it.  

## 3. Configuring Studio Pro to use local repository

Once you have set up your local repository, you need to add a few configuration settings in Studio Pro. This will enable Studio Pro to resolve dependencies from the local repository.

- Go to `Edit -> Preferences -> Deployment -> Use custom repository`. Enable this option.
- Input the following settings into the text area field that will appear once your enable the above option
  ```gradle      
  flatDir {
    dirs '../libs' // This is the path to the project level dependencies. It is recommended to use absolute paths. But relative path can also be used.
  } 
  
  // This is for the CycloneDx Gradle plugin
  maven {
    url = uri("C:/Users/user/Documents/gradle-remote")  // Replace with your local m2 repo path
  }  
  ```
- Press Ok and Studio Pro will start syncing the dependencies for the project.
- If everything goes well, you'll be able to see your `vendorlib` directory populated with the required project dependencies and `vendorlib-sbom.json` file.
- Then you can run the app to verify if it works.
