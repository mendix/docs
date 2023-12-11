---
title: "Managed Dependencies"
url: /refguide/managed-dependencies/
category: "Java Programming"
weight: 50
description: "Describes how to use the managed dependencies feature in Studio Pro"
tags: ["managed dependencies", "Gradle", "java", "maven", "custom repository", "maven central", "dependency synchronization", "vendorlib"]
---

{{% alert color="info" %}}
This feature was introduced in Mendix 10.3.0.
{{% /alert %}}

## 1 Introduction

Mendix Studio Pro allows you to manage your Java dependencies. By specifying Java dependencies and their versions per module, Studio Pro can automatically download them and resolve conflicts by leveraging Gradle.

In versions of Mendix below 10.3.0, Java dependencies were put into the `userlib` folder manually. This process has been simplified using managed dependencies, although the `userlib` folder can still be used for custom `.jar`s. For more information see [Unmanaged Dependencies](#unmanaged), below.

## 2 Adding or Updating Managed Dependencies

You can specify Java dependencies through the module settings of each module. For each module, you can configure your dependencies on the **Java Dependencies** tab of [**Module settings**](/refguide/module-settings/).

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/module-settings.png" >}}

The tab shows a list of currently specified Java dependencies for this module. You can add **New** dependencies and **Edit** or **Delete** existing dependencies. Dependencies are identified through their Maven [Naming Convention](https://maven.apache.org/guides/mini/guide-naming-conventions.html).

To enter a dependency, do the following:

1. Enter the **Group ID**, **Artifact ID**, and **Version**. For example, `org.apache.poi`, `poi`, and `5.2.3`.

    {{< figure src="/attachments/refguide/java-programming/managed-dependencies/edit-java-dependencies.png" >}}

1. Click **OK** to confirm your changes.

    Studio Pro will attempt to retrieve these dependencies. This process is termed ‘synchronization’. The dependencies are downloaded from a central repository and cached locally. The default repository is Maven Central, but custom repositories can also be configured, see [Custom Repositories](#custom-repos), below. Synchronization will happen in the background so you can continue working in Studio Pro.

    {{% alert color="info" %}}When multiple modules use the same library they may be using different versions. In this case, dependency management will select the newest version of the library, based on the version of the recorded dependency.{{% /alert %}}

### 2.1 Finding the Right Dependency

Sonatype’s [Maven Central Repository](https://central.sonatype.com/) is a good place to start to find the proper identifier.

After finding the package of your choice, locate the Snippets part, containing the identifier:

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/junit-notation-example.png" >}}

## 3 Dependency Synchronization

When a change is made to a specified dependency, for example, the dependency is removed or the module is updated from the Marketplace, dependency synchronization will automatically run in the background.

Dependency synchronization also occurs when you open your app in Studio Pro.

You can trigger a manual synchronization in the menu **App** > **Synchronize dependencies**. You may want to do this, for example, when synchronization failed due to connectivity issues.

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/synchronize-app-dependencies.png" >}}

Once Gradle has resolved and downloaded all dependencies successfully, it places them in the `vendorlib` directory. This directory is used to store `.jar` files of all the managed dependencies. Unlike the `userlib` folder, which needs to be updated manually, the `vendorlib` folder is completely managed by Studio Pro. Files here will automatically be added and removed based on the specified dependencies. The `vendorlib` folder will be committed to your version control just like the `userlib`.

## 4 Unmanaged Dependencies{#unmanaged}

Most dependencies can be managed using the managed dependencies feature. However, you may have a custom jar which you are experimenting on, or which is simply not available in any remote repositories. In this case, you can still place these unmanaged `.jar` files in the `userlib` folder to make it a dependency of your Mendix app.

## 5 Migrating from Unmanaged to Managed Dependencies

When you have created a module that contains `.jar` files in the `userlib` folder, the best practice is to port these to managed dependencies if the `.jar`s are available in a Maven repository. Add the specified dependency to your module and simply remove the old `.jar` file from the `userlib` folder to prevent a conflict.

Platform-supported Marketplace modules created by Mendix have been updated with a custom mechanism to automatically migrate to managed dependencies.

## 6 Custom Repositories{#custom-repos}

By default, dependencies are downloaded from the [Maven Central](https://central.sonatype.com/) repository. In some scenarios, you may want to specify a custom location. For example, if your organization has its own repository to cache downloads or as an alternative if internet access is restricted in an air-gapped setup.

Custom repositories are configured in the **Repositories** setting of the **Deployment** tab in the [Preferences](/refguide/preferences-dialog/) dialog box. This setting uses the same syntax as Gradle. For internal usage of the platform, some dependencies are required which are also resolved using the configured repositories. For example, to resolve dependencies from a directory `lib`, enter the following:

```groovy {linenos=false}
flatDir {
    dirs 'lib'
}
```

By default the repositories are configured as:

``` {linenos=false}
gradlePluginPortal()
mavenCentral()
```

For more details, refer to the Gradle documentation on [Declaring repositories](https://docs.gradle.org/current/userguide/declaring_repositories.html).

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/custom-repository.png" >}}

### 6.1 Required Dependencies{#custom-repos-required-dependencies}

There are some dependencies that are required by Mendix. These need to be added to your configured repository. Below is a list of these dependencies:

* The Gradle plugin [cyclonedx-gradle-plugin](https://github.com/CycloneDX/cyclonedx-gradle-plugin), which generates a Software Bill of Materials (SBoM) required in certain contexts

## 7 Marketplace Modules

Dependency information is included per module and included in Marketplace Modules. The actual artifacts (`.jar` files) are not part of the module. They are downloaded to the `vendorlib` folder automatically when synchronization is run when the module is imported.

If you have an issue with the managed dependencies of a Marketplace module, you can revert to an earlier version by removing the new version and downloading an earlier version from the Marketplace.

## 8 Troubleshooting

There can be multiple reasons the dependencies cannot be resolved. See the following for some common failure causes with steps on how to fix the issue.

1. CE9804 – Incorrect specification: the specified dependency could not be found in the configured repository.

    * Check whether you specified the correct **Group ID**, **Artifact ID**, and **Version**. These are case-sensitive.
    * If you are using a [custom repository](#custom-repos), check whether the dependency exists in the repository.

2. CE9805 – Network connection failure.

    * Check that you have a working internet connection.
    * If you are using a [custom repository](#custom-repos), confirm that the repository can be reached.

3. CE9806 – Unable to reach repository / mis-configuration of custom repository.

    * Check that **Repositories** are configured if [**Use custom repositories**](#custom-repos) is set to *Yes*.

4. CE9807 - Required dependency could not be found in the configured repository.

    * Ensure that all the [required dependencies](#custom-repos-required-dependencies) exist in the configured repository. 

5. CE9802 - Java dependency synchronization never done.

    This is just an internal state we maintain for completeness. This should never occur unless something unexpectedly fails in the background in Studio Pro. If you do encounter this, you can try to resolve this by doing either, or both, of the following:
   
    * Manually synchronizing dependencies once more
    * Restarting Studio Pro

6. CE9803 – Any failure which is not covered in the above scenarios.

    * Try manually synchronizing dependencies once more.
    * Reach out to [Mendix Support](https://support.mendix.com/) if the issue persists.
