---
title: "Managed Dependencies"
url: /refguide/managed-dependencies/
category: "Java Programming"
weight: 50
description: "Describes how to use the managed dependencies feature in Studio Pro"
tags: ["managed dependencies", "gradle", "java", "maven", "custom repository", "maven central", "dependency synchronization", "vendorlib"]
---

{{% alert color="info" %}}
This feature was introduced in Mendix 10.3.0.
{{% /alert %}}

## 1 Introduction

Mendix Studio Pro allows you to manage your Java dependencies. By specifying Java dependencies and their versions per module, Studio Pro can automatically download them and resolve conflicts by leveraging Gradle.

In versions of Mendix below 10.3.0, Java dependencies were put into the `userlib` folder manually. This process has been simplified using managed dependencies, although `userlib` can still be used for custom jars. For more information see [Unmanaged Dependencies](#unmanaged), below. 

## 2 Adding or Updating Managed Dependencies

You can specify Java dependencies through the module settings of each module. For each module, you can configure your dependencies on the **Java Dependencies** tab of [**Module settings**](/refguide/module-settings/). 

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/module-settings.png" alt="Java Dependencies" >}}

The tab shows a list of currently specified Java dependencies for this module. You can add add, edit, or delete these dependencies. Dependencies are identified through their [Maven notation](https://maven.apache.org/guides/mini/guide-naming-conventions.html)

To enter a dependency, do the following:

1. Enter the **Group ID**, **Artifact ID**, and **Version**. For example, `org.apache.poi`, `poi`, and `5.2.3`.

    {{< figure src="/attachments/refguide/java-programming/managed-dependencies/edit-java-dependencies.png" alt="Edit Java Dependencies" >}}

1. Click **OK** to confirm your changes.

    Studio Pro will attempt to retrieve these dependencies. We call this process ‘synchronization’. The dependencies are downloaded from a central repository and cached locally. The default repository is Maven Central, but custom repositories can also be configured, see [Custom Repositories](#custom-repos), below. Synchronization will happen in the background so users can continue working in Studio Pro.

    {{% alert color="info" %}}When multiple modules use the same library it can happen that they use a different version. In this case, dependency management will select the newest version of the library, based on the VersionId of the identifier.{{% /alert %}}

### 2.1 Finding the Right Dependency

Sonatype’s [Maven Central Repository](https://central.sonatype.com/) is a good place to start to find the proper identifier.

After finding the package of your choice, locate the Snippets part, containing the identifier:

{{% todo %}}Need to ask Leroy for the SS{{% /todo %}}

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/edit-java-dependencies.png" alt="Edit Java Dependencies" >}}

## 3 Dependency Synchronization

When a change is made to a specified dependency, for example, the dependency is removed or the module is updated in the Marketplace, dependency synchronization will automatically run in the background.

You can trigger a manual synchronization in the menu **App** > **Synchronize dependencies**. You may want to do this, for example, when synchronization failed due to connectivity issues. Additionally, dependency synchronization also occurs when a project is opened in Studio Pro.

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/synchronize-app-dependencies.png" alt="App Menu Synchronize Dependencies" >}}

Once Gradle has resolved and downloaded all dependencies successfully, it places them in the `vendorlib` directory. This directory is used to store .jar files of all the managed dependencies. Contrary to the `userlib`  folder, the `vendorlib` folder is completely managed by Studio Pro. Files here will automatically be added and removed based on the specified dependencies. The `vendorlib` folder will be committed to your version control just like the `userlib`.

Once `Gradle` has resolved and downloaded all dependencies successfully, it places them in the `vendorlib` directory. This directory is used to store `.jar` files of all the managed dependencies. Contrary to the `userlib`  folder, the `vendorlib` folder is completely managed by Studio Pro. Files here will automatically be added and removed based on the specified dependencies. The `vendorlib` folder will be committed to your version control just like the `userlib`.

## 4 Unmanaged Dependencies{#unmanaged}

Most dependencies can be managed using this new Dependency Synchronization feature. But sometimes, users can have a custom jar which they are experimenting on, or which is simply not available in any remote repositories. In such cases, users can still place these unmanaged `.jar` files in the `userlib` to build their Mendix projects. 

## 5 Migrating from Unmanaged to Managed Dependencies 

When you have created a module that contains `.jar` files in the `userlib` folder we advise you to port this to managed dependencies if the `.jar` is available on a Maven repository. Add the specified dependency to your module and simply remove the old `.jar` file from the `userlib` folder to prevent a conflict.

The platform-supported Marketplace modules created by Mendix have been updated with a custom mechanism to automatically migrate to managed dependencies. Each module with Java dependencies contains a migration file that will clean up specific files from the `userlib` folder and adds them as managed dependencies.

## 6 Custom Repositories{#custom-repos}

By default, dependencies are downloaded from the [Maven Central](https://maven.apache.org/) repository. In some scenarios, it might be preferable to specify a custom location. For example, your organization might have its own repository to cache downloads or as an alternative when internet access is restricted in an air-gapped setup.

Custom repositories are configured through the setting under `Edit → Preferences → Deployment → Build` using the same syntax as Gradle. For example, to resolve dependencies from a directory `lib`, enter the following:

```
flatDir {
    dirs 'lib'
}
```

For more details, you can refer to the [Gradle documentation on Declaring repositories](https://docs.gradle.org/current/userguide/declaring_repositories.html).

{{< figure src="/attachments/refguide/java-programming/managed-dependencies/custom-repository.png" alt="Custom Repository" >}}

## 7 Marketplace Modules

The dependency information is included when importing and exporting a module and is therefore also included in Marketplace Modules. The actual dependency artifacts are not included, as these are automatically synchronized upon import.

When there’s an issue with the managed dependencies of a marketplace module, it is possible to revert to an earlier version by removing the new version and download an earlier version from the marketplace.

## 8 Troubleshooting

There can be multiple reasons for dependency resolution to fail. We have listed several failure causes with steps how to fix the issue.

1. CE9804 - Incorrect specification: the specified dependency could not be found in the configured Maven repository. 
    * Check whether you specified the correct `GroupId:ArtifactId:VersionId`. This is case-sensitive.
    * If you are using a [custom repository](magnet-link), check whether the dependency exists in the repository.
    {{< figure src="/attachments/refguide/java-programming/managed-dependencies/unknown-dependency.png" alt="Failed to resolve dependency" >}}

2. CE9806 - Unable to reach repository / mis-configuration of custom repository:
    * Check if a repository is configured if [Custom Repository](magnet-link) setting is enable.
    {{< figure src="/attachments/refguide/java-programming/managed-dependencies/unknown-repositories.png" alt="Misconfigured Custom Repository" >}}

3. CE9805 - Network connection failure
    * Check whether you have a working internet connection
    * If you are using a custom repository, check whether the repository can be reached
    {{< figure src="/attachments/refguide/java-programming/managed-dependencies/unknown-host.png" alt="Network connection failure" >}}

4. CE9803 - Any failure which is not covered in the above scenarios
    * Try manually synchronizing dependencies once more.
    * Reach out to Mendix Support if the issue persists.
