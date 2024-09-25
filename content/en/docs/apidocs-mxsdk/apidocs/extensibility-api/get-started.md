---
title: "Get Started with the Extensibility API"
linktitle: "Get Started"
url: /apidocs-mxsdk/apidocs/extensibility-api/getting-started/
weight: 2
---

## Introduction

This document helps you set up a basic development environment for building extensions. Additionally, you can find links here to additional tutorials that help familiarize you to the extensibility API topics.

## Development Setup

The recommended development environment is [Visual Studio 2022](https://visualstudio.microsoft.com/) running on Windows. This documentation is centered on this setup. (You can also use other IDEs and other .NET compatible programming languages like [F#](https://fsharp.org/)).

Install the latest Studio Pro version from the Mendix [Marketplace](https://marketplace.mendix.com/link/studiopro/).

{{% alert color="info" %}}
Make sure to keep this Studio Pro installation up-to-date to benefit from new features and fixes.
{{% /alert %}}

{{% alert color="info" %}}
Extensions can be built on any operating system as the underlying framework is cross-platform.
{{% /alert %}}

## Using Extensions API via a Hosted NuGet Package

You can start extension development by simply including the `Mendix.StudioPro.ExtensionsAPI` NuGet package to your project by searching for *Mendix.Studio.ExtensionsAPI* in NuGet.

{{% alert color="warning" %}}The initial released package version compatible with Mendix 10.12.0 was 10.12.38909. This has been updated to 10.12.0+38909 to match the Studio Pro version.
{{% /alert %}}

Depending on your local environment setup, you possibly need to manually add a NuGet package to your solution. You can add a package source to Visual Studio via the menu: **Tools** > **Options** > **NuGet Package Manager** > **Package Sources**

## Importing Extensions API via a NuGet Package Hosted on a Local Repository

Another option to start extension development is to import a locally hosted `Mendix.StudioPro.ExtensionsAPI` NuGet package into your project.  

To create a local NuGet repository that will let you host and use NuGet packages shared with you, follow the procedure below:

1. Go to **Tools** > **Options** > **NuGet Package Manager** > **Package Sources**.
2. Press the green plus sign and specify a local folder, instead of a network location.
3. Drop the package into the local folder.
4. Refresh the NuGet manager to see the package alongside the other packages.

{{% alert color="info" %}}
To make the search process easier, you can specifically select a certain package source inside the NuGet manager window.
{{% /alert %}}

{{% alert color="info" %}}
For more information on local NuGet repositories, see the official [Local Feeds](https://learn.microsoft.com/en-us/nuget/hosting-packages/local-feeds) in *Microsoft Documentation*.
{{% /alert %}}

## Extensions Development Setup

Extensions load from within your mendix application and will only be loaded while the app is open. 

If you specify the `--enable-extension-development` flag you can debug your extension by placing it into a new subfolder within your app directory. The format of the folder must be `<Mendix app folder>\extensions\<your extension name>` where all extensions that you want to load must exist inside the <`Mendix app folder>\extensions` subfolder.

Studio Pro will load your extension, only if it complies with the following rules:

* Your extension needs to provide a manifest.json file. 
* This manifest file must contain a list of entry points for your extension. For example:

    ```
    {
        "mx_extensions": [ "MyExtension.dll" ]
    }
    ```
