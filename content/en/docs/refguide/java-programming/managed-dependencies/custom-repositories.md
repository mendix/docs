---
title: "Custom Repositories"
url: /refguide/managed-dependencies/custom-repositories
weight: 2
description: "Describes how to setup a custom repository locally"
---

# Introduction

This document will guide you on how you can setup a custom repository like JFrog locally and configure Studio Pro to use it to resolve the Mendix project dependencies. We'll also cover how to use a simple flat file folder to store your `.jar` files. This will allow you to manage your project's dependencies more efficiently, especially for internal libraries or when internet access is limited.

## 1. Understanding Custom Repositories

Think of a custom repository as your own personal library for software components (like `.jar` files). Instead of downloading everything from the public internet (like Maven Central), you can store frequently used or private components in your own repository. This can make your builds faster and more reliable.

* **JFrog Artifactory** and **Sonatype Nexus** are popular tools that act as these "personal libraries." They can store your own libraries, and also "proxy" public repositories, meaning they download from the internet once and then serve it to everyone in your team from their local cache.
* **Flat Directory:** This is the simplest option. You just put your `.jar` files into a regular folder on your computer and Studio Pro can read them directly from there.

## 2. Using custom repositories with Studio Pro

### 2.1 Setting up to a Remote repository

In this example, we have made use of JFrog. You can opt for any tool of your choice. Most of the repositories in the market have very similar capabilities.

#### Installing JFrog

Follow the installation steps from the [official documentation page](https://jfrog.com/help/r/jfrog-installation-setup-documentation/installation-steps) of JFrog to install it on your local system. If you don't have permissions to install software on your system, you can request your IT department to create a remote instance for you and provide credentials to access it.

#### Important Configuration for JFrog/Nexus

When setting up your custom repository (JFrog), it's crucial to ensure it can access public repositories like Maven Central and Gradle Plugin Portal. If your repository doesn't have these configured as "proxy" sources, you might encounter errors when Studio Pro tries to sync the required dependencies. Following are the two public repositories you will have to configure.

* **Maven Central URL:** `https://repo1.maven.org/maven2/`
* **Gradle Plugins Repository URL:** `https://plugins.gradle.org/m2/`

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/jfrog-remote-repositories.png" class="no-border" >}}

### 2.2 Setting up a directory with required dependencies

For some scenarios, you may want to keep your setup simple and minimal. For such cases, you can create folders on your system and store the dependencies in it. 

We make use of the CycloneDx Gradle Plugin to generate the `vendorlib-sbom.json` file. You will have to create a `m2` (Maven) style directory which will contain this plugin. You can download it from the [Mendix GitHub repo](broken-link)

For the project level dependencies, you can simply place them in the directory and point Studio Pro to it. 

Insert image - folder containing cycloneDx
Insert image - flat dir

### 2.3 Configuring Studio Pro to use the custom repository

Now that your local repository is set up, you need to tell Studio Pro where to find these dependencies.

- Go to `Edit -> Preferences -> Deployment -> Use custom repository`. Enable this option.
- Input the following settings into the text area field that will appear once your enable the above option
    ```gradle        
    // Use this configuration to configure Studio Pro to fetch dependencies from an artifactory.  
    
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
    ```
    // Use this configuration if you dont prefer using a remote repository.
    
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

## Troubleshooting

