---
title: "MxBuild"
category: "General"
menu_order: 50
description: "Describes MxBuild which is a command-line tool for building and deploying Mendix Apps"
tags: ["Build", "Deploy", "deployment package", "POST", "command-line"]
---

## 1 Introduction

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package from a Mendix Project.

The version of MxBuild which you need is dependent on the specific version of the Mendix model you want to build. You can find the correct MxBuild download at a link with the format `https://cdn.mendix.com/runtime/mxbuild-{mxversion}.tar.gz`.

{{% alert type="info" %}}

Mendix versions 7.18.1 and above include a build number in the version, and this has to be included in the link path. For example:

* 7.17.2
* 7.18.1.40272

You can find the build number in path of your Mendix installation (for example `C:\Program Files\Mendix\7.18.1.40272`)

{{% /alert %}}

So, MxBuild for Mendix version 7.18.1 is found at [https://cdn.mendix.com/runtime/mxbuild-7.18.1.40272.tar.gz](https://cdn.mendix.com/runtime/mxbuild-7.18.1.40272.tar.gz).

You can extract the files using your favorite archival tool, such as [7-Zip](https://www.7-zip.org/).

{{% alert type="warning" %}}
You need to run 7-Zip *as an Administrator* to successfully extract the MxBuild files.
{{% /alert %}}

The system requirements for MxBuild are documented here: [System Requirements](system-requirements#mxbuild).

## 2 Command-line Options

MxBuild takes a number of command-line options which control how the Mendix project is processed.

<!-- Note to editor: the &nbsp; here makes the column wider so that options are not broken at hyphens
  The alternative of using non-breaking hyphens means that a cut and paste may not work -->

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `-h`, `--help` | prints a short description of MxBuild and a list of all available options |
| `--java-home=DIRECTORY` | the directory in which the JDK is installed<br/>for example: `--java-home=/usr/lib/jvm/java-8-oracle`<br/>for Windows the *DIRECTORY* should be enclosed in double-quotes `"`|
| `--java-exe-path=FILENAME` | the **full path** to the Java executable<br/>for example `--java-exe-path=/usr/lib/jvm/java-8-oracle/bin/java`<br/>for Windows the *DIRECTORY* should be enclosed in double-quotes `"` and must contain the complete file name `...\java.exe`|

MxBuild can be run in either [build mode](#build-mode), to build a package once, or [service mode](#service-mode), which optimizes building a package several times. Most scenarios will use *build mode*. The remaining command-line options depend on which of these modes you are running in.

The modes are described in the sections below.

## 3 Build Mode{#build-mode}

In Build mode, you specify the Mendix Project file (.mpr) for which you want to build the deployment package (.mda) on the command-line. The file name may be preceded by a relative or absolute path. The project file should be located inside a Mendix project directory.

After creating the deployment package, the MxBuild process quits.

### 3.1 Command-line Options

The following additional options can be specified when running in Build mode:

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| <code>––target=[package&#124;deploy]</code> | `package` (default if option is omitted): create a deployment package (.mda file)<br/>`deploy`: make a deployment of the project without making a deployment package. |
| `--loose-version-check` | create a deployment package from a project which was created with a lower Mendix version.<br/>The project will be upgraded to the MxBuild version before the deployment package is created.<br /> Any changes included as a result of this upgrade will **not** be stored in your project. |
| `--write-errors=FILENAME` | Write all errors, warnings and deprecations encountered during deployment of the project to the specified file in JSON format.<br />This file is only written when the project contains errors.<br />If the file already exists, it will be overwritten without warning.<br />See section 5, [Project Errors](#project-errors) for a description of the format of this file. |

{{% alert type="info" %}}
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

## 4 Return Code

When MxBuild exits, one of the following codes will be returned:

| Exit Code | Description |
| --- | --- |
| 0 | MxBuild finished successfully |
| 1 | An internal error occurred |
| 2 | There's something wrong with the command-line options |
| 3 | Deployment of the Mendix project failed |
| 4 | Starting MxBuild in Service mode failed |

If the exit code is larger than 0, MxBuild will also output a message describing the error.

## 5 Project Errors{#project-errors}

When your Mendix project contains errors, deployment will fail and MxBuild will report these errors. When running in Build mode, you can use the `--write-errors=FILENAME` command-line option to tell MxBuild to write the errors to a file. In Service mode, MxBuild will return the errors as part of the JSON response object.

In both cases, the errors are output in as a JSON object that has one property: `problems`. The value of this property is an array of objects that each describe one error, warning or deprecation in your project. For example:

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

The following table describes the various properties of the problems JSON object:

| Property | Description |
| --- | --- |
| `name` | A unique identifier of the problem, or `null` when the consistency check is not yet defined in the Mendix Metamodel. |
| `severity` | Describes the type of problem: either `Warning`, `Error` or `Deprecation`. |
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


## 6 Service Mode{#service-mode}

When you specify the command-line option `--serve`, MxBuild will start in Service mode. In this mode, you do not specify the project to build on the command-line. Instead, MxBuild will run indefinitely and you can tell it to build a project by sending it a POST request.

| Option | Description |
| --- | --- |
|`--port=PORT` | The TCP port that MxBuild will use. <br />When this option is omitted, port `6543` is used. |
| `--host=ADDRESS` | The listening ADDRESS (ip/hostname) that MxBuild will use.<br /> The default ADDRESS is `localhost`. |

The advantage of running MxBuild in Service mode is that the deployment of a project (`"target": "Deploy"`) can be significantly faster for subsequent builds. For example, if no Java files have changed since the previous build, the Java compilation step will be skipped. Also, for some changes to the model such as changes to Pages, the Mendix Runtime supports hot-reloading the model instead of doing a full restart. The response will indicate whether a full restart is required.

### 6.1 Build Request

A build can be started by sending a **POST** request to `<serviceLocation>/build`. By default `<servicelocation>` will be `localhost:6543`.

The body of the POST request should contain a JSON object that specifies the path to the Mendix project (.mpr) file that you want to build, together with some additional options that are similar to the command-line options that can be used when running MxBuild in Build mode.

Here is an example of this JSON object:

```json
{
  "target": "Package",
  "projectFilePath": "/home/user/projects/MyProject/MyProject.mpr",
  "useLooseVersionCheck": false,
  "forceFullDeployment": false,
  "mdaFilePath": "/home/user/mdas/MyProject/MyProject.mda",
  "projectName": "MyApp",
  "modelVersion": "0.4.2",
  "modelDescription": "My Deployed App"
}
```

| Property | Required? | Description |
| --- | --- | --- |
| `target` | Y | `Package` or `Deploy`.<br/>When the target is `Package`, `mdaFilePath` is also required. |
| `projectFilePath` | Y | the absolute path to the project (.mpr) file. |
| `useLooseVersionCheck` | N | `true` or `false`.<br/>If set to `true`, MxBuild process lower-version projects to be deployed.<br/>`false` (the default) means that the project version needs to match the MxBuild version exactly.|
| `forceFullDeployment` | N | `true` or `false`.<br/>`false` (the default) specifies that fast deployment will be used if possible.<br/>`true` specifies that fast deployment will not be used.
| `mdaFilePath` | ? | Required if target is `Package`.<br/>The absolute path to the .mda file which will be created. |
| `projectName` | N | only used for a `Package`. |
| `modelVersion` | N |  only used for a `Package`. |
| `modelDescription` | N |  only used for a `Package`. |

### 6.2 Build Response

#### 6.2.1 Return Status

The following table describes the possible HTTP status codes returned by MxBuild in response to requests. Note that status `200 OK` is returned even when your project contains consistency errors.

| Status code | Description |
| --- | --- |
| `200 OK` | The request is handled successfully.<br/>See the sections below for the different responses to a successful request |
| `400 Bad Request` | This happens in one of the following circumstances:<br/>&#8226; The request is not a POST request<br/>&#8226; Invalid command line options are specified<br/>&#8226; An unexpected error occurred |
| `404 Not Found` | A resource is requested that doesn't exist |

#### 6.2.2 Success

The response to the POST request is a JSON object. If the build finished without problems, this object contains a success status. In addition, it contains a field that indicates whether a restart of the Runtime is required.

{{% alert type="info" %}}
Even if a restart is **not** required, you still need to call the M2EE command `reload_model` to update a running Runtime.
{{% /alert %}}

For example:

```json
{
  "status": "Success",
  "restartRequired": true
}
```

#### 6.2.3 Busy
If a build is already in progress, the response will indicate this as follows:

```json
{
  "status": "Busy"
}
```

#### 6.2.4 General Failure

If something goes wrong while processing the request, the status is `Failure` and an additional message describes the problem. For example:

```json
{
  "status": "Failure",
  "message": "Output file should be specified for target 'package'."
}
```

#### 6.2.5 Failure Due to Consistency Errors

When your Mendix project contains consistency errors, deployment will fail and these errors (together with any warnings and deprecations) will be added to the `problems` property of the response. For example:

```json
{
  "status": "Failure",
  "message": "The project cannot be deployed, because it contains errors.",
  "problems": {
    "problems": [
      {
        "name": null,
        "severity": "Error",
        "message": "No action defined.",
        "locations": [
          {
            "elementId": "5554b5a8-873f-4c47-9f4b-b3f42c4e88d4",
            "unitId": "1a8a3593-6f01-43a3-bc22-bd22f9244983",
            "element": "Action activity 'Activity'",
            "document": "Microflow 'MyMicroflow'",
            "module": "MyModule"
          }
        ]
      }
    ]
  }
}
```

See section 5, [Project Errors](#project-errors) for a description of this error format.

### 6.3 Shutting Down

To shut down an MxBuild process that is running in Service mode, send a POST request to `<serviceLocation>/shutdown`.
