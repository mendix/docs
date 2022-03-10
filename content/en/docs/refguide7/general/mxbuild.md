---
title: "MxBuild"
url: /refguide7/mxbuild/
category: "General"
menu_order: 50
description: "Describes MxBuild which is a command-line tool for building and deploying Mendix Apps"
tags: ["Build", "Deploy", "deployment package", "command-line"]
---

## 1 Introduction

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package from a Mendix Project.

The version of MxBuild which you need is dependent on the version of the Mendix model you want to build. You can find the correct MxBuild download at a link with the format `https://cdn.mendix.com/runtime/mxbuild-{mxversion}.tar.gz`.

{{% alert color="info" %}}

Mendix versions 7.18.1 and above include a build number in the version, and this has to be included in the link path. For example:

* 7.17.2
* 7.18.1.40272

You can find the build number in path of your Mendix installation (for example `C:\Program Files\Mendix\7.18.1.40272`).

{{% /alert %}}

So, MxBuild for Mendix version 7.18.1 is found at [https://cdn.mendix.com/runtime/mxbuild-7.18.1.40272.tar.gz](https://cdn.mendix.com/runtime/mxbuild-7.18.1.40272.tar.gz).

You can extract the files using your favorite archival tool, such as [7-Zip](https://www.7-zip.org/).

The system requirements for MxBuild are documented here: [System Requirements](/refguide7/system-requirements/#mxbuild).

{{% alert color="info" %}}
Except where specifically mentioned, the examples used in this document are for Windows.
{{% /alert %}}

## 2 Command Line

To build your package, you specify the Mendix Project file (.mpr) for which you want to build the deployment package (.mda) on the command-line. The file name may be preceded by a relative or absolute path. The project file should be located inside a Mendix project directory.

MxBuild takes a number of command-line options which control how the Mendix project is processed. These options precede the name of the project file.

In Windows, use the following format for the command line:

`MxBuild --java-home="JDKDirectory" --java-exe-path="javaExecutable" [options] projectFile`

You can also run MxBuild under Linux using the the following command line format:

`mono mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" [options] projectFile`

After creating the deployment package, the MxBuild process quits.

{{% alert color="info" %}}
The examples used in this document are for Windows.
{{% /alert %}}

### 2.1 General Command-Line Options

<!-- Note to editor: the &nbsp; here makes the column wider so that options are not broken at hyphens
  The alternative of using non-breaking hyphens means that a cut and paste may not work -->

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `-h`, `--help` | prints a short description of MxBuild and a list of all available options. |
| `--java-home=DIRECTORY` | (required) the directory in which the JDK is installed<br/>for example: `--java-home=/usr/lib/jvm/java-8-oracle`<br/>for Windows the *DIRECTORY* should be enclosed in double-quotes, `"`.|
| `--java-exe-path=FILENAME` | (required) the **full path** to the Java executable<br/>for example `--java-exe-path=/usr/lib/jvm/java-8-oracle/bin/java`<br/>for Windows the *DIRECTORY* should be enclosed in double-quotes, `"`, and must contain the complete file name `...\java.exe`.|
| <code>––target=[package&#124;deploy]</code> | `package` (default if option is omitted): create a deployment package (.mda file)<br/>`deploy`: make a deployment of the project without making a deployment package. |
| `--loose-version-check` | create a deployment package from a project which was created with a lower Mendix version.<br/>The project will be upgraded to the MxBuild version before the deployment package is created.<br /> Any changes included as a result of this upgrade will **not** be stored in your project. |
| `--write-errors=FILENAME` | Write all errors, warnings and deprecations encountered during deployment of the project to the specified file in JSON format.<br />This file is only written when the project contains errors.<br />If the file already exists, it will be overwritten without warning.<br />See section 4, [Project Errors](#project-errors) for a description of the format of this file. |

### 2.2 Options When Creating a Package

{{% alert color="info" %}}
The following options are only applicable with the `--target=package` option:
{{% /alert %}}

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `-o FILENAME` or<br/>`--output=FILENAME` | The name (with optional relative or absolute path) of the .mda file that is created by MxBuild.<br />If this option is omitted, the file will be saved in the *current* directory with the name `out.mda`. |
| `--project-name=NAME` | Change the name of the application as used by the Mendix Runtime.<br />When this option is not specified, the name of the project is used. |
| `--model-version=VERSION` | Apply a specific version number to the model in the package. |
| `--model-description=DESCRIPTION` | Embed a description of the model in the package. |

For example, to create a deployment package `out.mda` in the current directory using the app `MyApp` using the *Windows* version of MxBuild, you could use the command:

```bat
mxbuild --target=package --java-home="C:\Program Files\Java\jdk1.8.0_144" --java-exe-path="C:\Program Files\Java\jdk1.8.0_144\bin\java.exe" "C:\Users\username\Documents\Mendix\MyApp\MyApp.mpr"
```

## 3 Return Code

When MxBuild exits, one of the following codes will be returned:

| Exit Code | Description |
| --- | --- |
| 0 | MxBuild finished successfully |
| 1 | An internal error occurred |
| 2 | There's something wrong with the command-line options |
| 3 | Deployment of the Mendix project failed |


If the exit code is larger than 0, MxBuild will also output a message describing the error.

## 4 Project Errors {#project-errors}

When your Mendix project contains errors, deployment will fail and MxBuild will report these errors. You can use the `--write-errors=FILENAME` command-line option to tell MxBuild to write the errors to a file.

The errors are output as a JSON object that has one property: `problems`. The value of this property is an array of objects that each describe one error, warning, or deprecation in your project. For example:

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
| `name` | A unique identifier of the problem, or `null` when the consistency check is not yet defined in the Mendix Metamodel. |
| `severity` | Describes the type of problem: `Warning`, `Error` or `Deprecation`. |
| `message` | The description of the problem. This is the same as the message in the 'Errors' dock of the Mendix Modeler. |
| `locations` | Contains zero or more objects that describe the location in the Mendix project where the problem occurs (see the following table). |

The location(s) associated with the problem have the following properties:

| Property | Description |
| --- | --- |
| `elementId` | The unique id of the model element in which the problem occurs. |
| `unitId` | The unique id of the document in which the problem occurs. |
| `element` | A description of the model element in which the problem occurs. |
| `document` | A description of the document in which the problem occurs. |
| `module` | A description of the module in which the problem occurs. |
