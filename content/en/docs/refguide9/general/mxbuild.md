---
title: "MxBuild"
url: /refguide9/mxbuild/
weight: 50
description: "Describes MxBuild, which is a command-line tool for building and deploying Mendix Apps."
---

## Introduction

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package from a Mendix app.

The version of MxBuild you need depends on the version of the Mendix model you would like to build, as well as the host operating system you would like to use.

The table below can help you find the correct MxBuild. Copy a URL from the corresponding row into your browser and replace `mxversion` with your full Mendix version number:

| Operating System | Mendix Version | URL                                                          |
| ---------------- | -------------- | ------------------------------------------------------------ |
| Linux (x64)      | All versions   | `https://cdn.mendix.com/runtime/mxbuild-{mxversion}.tar.gz`  |
| Windows (x64)    | Below 9.20     | `https://cdn.mendix.com/runtime/mxbuild-{mxversion}.tar.gz`  |
| Windows (x64)    | 9.20 – 9.22    | `https://cdn.mendix.com/runtime/mono-mxbuild-{mxversion}.tar.gz` |
| Windows (x64)    | 9.23 and above | `https://cdn.mendix.com/runtime/win-mxbuild-{mxversion}.tar.gz` |

{{% alert color="info" %}}

A build number is included in the version, and this has to be included in the link path mentioned above — for example, `8.12.1.3458` is the 3458 build of the 8.12.1 Studio Pro release.

You can find the build number in path of your Mendix installation (for example if your installation looks like this `C:\Program Files\Mendix\8.12.1.3458`, use this URL to get your files: [https://cdn.mendix.com/runtime/mxbuild-8.12.1.3458.tar.gz](https://cdn.mendix.com/runtime/mxbuild-8.12.1.3458.tar.gz)).

Any public version of Studio Pro in this [Studio Pro Releases List](https://marketplace.mendix.com/link/studiopro/) will allow you to download MxBuild files. If you experience trouble downloading files, make sure your build is listed there.

{{% /alert %}}

You can extract the files using your favorite archival tool, such as [7-Zip](https://www.7-zip.org/).

For details on the system requirements for MxBuild, see [System Requirements](/refguide9/system-requirements/#mxbuild).

{{% alert color="info" %}}
Except where specifically mentioned, the examples used in this document are for Windows.
{{% /alert %}}

## Command Line

To build your package, you specify the Mendix app file (.mpr) for which you want to build the deployment package (.mda) on the command-line. The file name may be preceded by a relative or absolute path. The app file should be located inside a Mendix app directory.

MxBuild takes a number of command-line options which control how the Mendix app is processed. These options precede the name of the app file.

In Windows, use the following format for the command line:

`MxBuild --java-home="JDKDirectory" --java-exe-path="javaExecutable" [options] projectFile`

You can also run MxBuild under Linux using the following command line format:

`mono mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" [options] projectFile`

After creating the deployment package, the MxBuild process quits.

### General Command-Line Options

Command-line options are described in the table below:

| Option | Description |
| --- | --- |
| `-h`, `--help` | Prints a short description of the MxBuild and a list of all available options. |
| `--java-home=DIRECTORY` | (Required). The directory in which the JDK is installed.<br/>For example, `--java-home=/usr/lib/jvm/java-8-oracle`.<br/>For Windows the *DIRECTORY* should be enclosed in double-quotes `"`. |
| `--java-exe-path=FILENAME` | (Required). The **full path** to the Java executable.<br/>For example, `--java-exe-path=/usr/lib/jvm/java-8-oracle/bin/java`.<br/>For Windows the *DIRECTORY* should be enclosed in double-quotes `"`, and must contain the complete file name `...\java.exe`. |
| <code>––target=[package&#124;deploy]</code> | `package`: default if option is omitted. Creates a deployment package (.mda file)<br/>`deploy`: deploys the app without making a deployment package. |
| `--loose-version-check` | Creates a deployment package from an app which was created with a lower Mendix version.<br/>The app will be upgraded to the MxBuild version before the deployment package is created.<br /> Any changes included as a result of this upgrade will **not** be stored in your app. |
| `--write-errors=FILENAME` | Writes all errors, warnings, and deprecations encountered during deployment of the app to the specified file in JSON format.<br />This file is only written when the app contains errors.<br />If the file already exists, it will be overwritten without a warning.<br />For a description of the format of this file, see the [App Errors](#app-errors) section below. |

### Options When Creating a Package

{{% alert color="info" %}}
The following options are only applicable with the `--target=package` option:
{{% /alert %}}

Options when creating a package are described in the table below:

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `-o FILENAME` or<br/>`--output=FILENAME` | The name (with optional relative or absolute path) of the .mda file that is created by MxBuild.<br />If this option is omitted, the file will be saved in the *current* directory under a name `out.mda`. |
| `--project-name=NAME` | Changes the name of the application to the one used by the Mendix Runtime.<br />When this option is not specified, the name of the app is used. |
| `--model-version=VERSION` | Applies a specific version number to the model in the package. |
| `--model-description=DESCRIPTION` | Embeds a description of the model in the package. |

For example, to create a deployment package `out.mda` in the current directory using the app `MyApp` using the *Windows* version of MxBuild, you can use the following command:

```bat
mxbuild --target=package --java-home="C:\Program Files\Java\jdk1.8.0_144" --java-exe-path="C:\Program Files\Java\jdk1.8.0_144\bin\java.exe" "C:\Users\username\Documents\Mendix\MyApp\MyApp.mpr"
```

## Return Code

When MxBuild exits, one of the following codes will be returned:

| Exit Code | Description |
| --- | --- |
| 0 | MxBuild finished successfully. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |
| 3 | Deployment of the Mendix app failed. |

If the exit code is larger than 0, MxBuild will show you the message describing the error.

## App Errors {#app-errors}

When your Mendix app contains errors, deployment will fail and MxBuild will report these errors. You can use the `--write-errors=FILENAME` command-line option to tell MxBuild to write the errors to a file.

The errors are output as a JSON object that has one property: `problems`. The value of this property is an array of objects that each describe one error, warning, or deprecation in your app. For example:

```json
{
  "problems": [
    {
      "name": null,
      "severity": "Error",
      "message": "Start event cannot be the last object of a flow.",
      "locations": [
        {
          "elementId": "252e1008-d795-4e49-b3e3-2ba38eb0a56d",
          "unitId": "1a8a3593-6f01-43a3-bc22-bd22f9244983",
          "element": "Start event",
          "document": "Microflow 'MyMicroflow'",
          "module": "MyModule"
        }
      ]
    }
  ]
}
```

The following table describes the various properties of the *problems* JSON object:

| Property | Description |
| --- | --- |
| `name` | A unique identifier of the problem or `null` when the consistency check is not yet defined in the Mendix Metamodel. |
| `severity` | Describes the type of problem: `Warning`, `Error`, or `Deprecation`. |
| `message` | The description of the problem. This is the same as the message in the [Errors pane](/refguide9/errors-pane/) of Mendix Studio Pro. |
| `locations` | Contains zero or more objects that describe the location in the Mendix app where the problem occurs (see the following table). |

The location(s) associated with the problem have the following properties:

| Property | Description |
| --- | --- |
| `elementId` | The unique id of the model element in which the problem occurs. |
| `unitId` | The unique id of the document in which the problem occurs. |
| `element` | A description of the model element in which the problem occurs. |
| `document` | A description of the document in which the problem occurs. |
| `module` | A description of the module in which the problem occurs. |
