---
title: "Getting Started Guide"
url: /extensions-api/getting_started/
weight: 2
---

# Getting Started with Studio Pro Extensibility API

Hi this page will help you set up a basic development environment for building extensions. Additionally, you can find links here to additional tutorials that will help familiarize you to the extension Api topics.

## Intended Audience

The api is intended for closed partner beta within Mendix partner network. At a later stage we would like to make this available to third party developers.

## Development setup

The recommended development environment is [Visual Studio 2022](https://visualstudio.microsoft.com/) running on Windows. Using other IDEs and other .NET
compatible programming languages (like [F#](https://fsharp.org/)) is possible, but the documentation is centered on the above setup.

Install the latest Studio Pro version from [Marketplace](https://marketplace.mendix.com/link/studiopro/).
> [!WARNING]
> Make sure to keep this Studio Pro installation up-to-date to benefit from new features and fixes.

> [!NOTE]
> Extensions can be built on any OS as the underlying framework is cross-platform.

### Use Extensions API via a hosted NuGet package

You can start extension development by simply including the Mendix.StudioPro.ExtensionsAPI NuGet package to your project by searching for "Mendix.Studio.ExtensionsAPI" in Nuget.

Depending on your local environment setup you might need to manually add a NuGet package to your solution. You can add a package source to visual studio via the menu:

    Tools -> Options -> NuGet Package Manager -> Package Sources

### Importing Extensions API via a NuGet package hosted on a local repository

Another option to start extension development is to import a locally hosted Mendix.StudioPro.ExtensionsAPI NuGet package into your project.  

To create a local NuGet repository that will let you host and use NuGet packages shared with you, please follow the guide below:

    1) Go to Tools -> Options -> NuGet Package Manager -> Package Sources.
    2) Press the green plus sign and specify a local folder, instead of a network location.
    3) Drop the package into that folder.
    4) Refresh the NuGet manager to see the package alongside the other packages.

>[!NOTE]
>To make the search process easier, you can specifically select a certain package source inside the NuGet manager window.

>[!NOTE]
>If you'd like to learn more on the topic of local nuget repos, please read the official **[documentation on local feeds](https://learn.microsoft.com/en-us/nuget/hosting-packages/local-feeds)** by Microsoft. 

### Extensions Development Setup

Extensions load from within your mendix application and will only be loaded while the App is open. 

If you specify the `--enable-extension-development` flag you can debug your extension by placing it into a new subfolder within your project directory. The format of the folder must be (Mendix App folder)\extensions\(Your extension Name) where all extensions that you which to load must exist inside the (Mendix App folder)\extensions subfolder.

Studio Pro will only load your extension if it complies with the following rules:
 - Your extension needs to provide a manifest.json file. 
 - This manifest file must contain a list of entry points for your extension.

manifest.json example:

```
{
    "mx_extensions": [ "MyExtension.dll" ]
}
```