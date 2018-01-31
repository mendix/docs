---
title: "MxBuild"
category: "General"
---

MxBuild is a command-line tool that can be used to deploy and build a Mendix Deployment Package from a Mendix Project.

MxBuild can be run in either _Build mode_ or _Service mode_, depending on your needs. These modes are described below.

## Build Mode
In Build mode, you specify on the command-line the Mendix Project file (.mpr) for which you want to build the deployment package (.mda). This file name may be preceded by a relative or absolute path. The project file should be located inside a Mendix project directory.

After creating the deployment package, the MxBuild process quits.

### Options
The following additional options can be specified when running in Build mode:

| Option | Description |
| --- | --- |
| `--target=[package&#124;deploy]` | Use this to choose between creating a deployment package (.mda file) or only performing a deployment of the project. When this option is omitted, a deployment package is created. |
| `--loose-version-check` | Without this option MxBuild only accepts Mendix projects that have the exact same version as the MxBuild version itself. Adding this option makes it possible to create deployment packages from projects that are created with an older Mendix version. The project will then be upgraded to the MxBuild version before the deployment package is created. Note that the changes to the project as a result of this upgrade will not be stored, so your project will not be changed permanently. |
| `--write-errors=FILENAME` | When this option is specified, all errors, warnings and deprecations encountered during deployment of the project are written to the specified file in JSON format. This file is only written when the project contains errors. If the file already exists, it will be overwritten without warning. See the section 'Project errors' for a description of the format of this file. |

The following options are only applicable for the `package` build target:

| Option | Description |
| --- | --- |
| `-o FILENAME` or `--output=FILENAME` | This is the name (with optional relative or absolute path) of the .mda file that is created by MxBuild. When this option is omitted, the name `out.mda` will be used. |
| `--project-name=NAME` | This option can be used to change the name of the application as used by the Mendix Runtime. When this option is not specified, the name of the project is used. |
| `--model-version=VERSION` | This option can be used to specify the version of the model. |
| `--model-description=DESCRIPTION` | This option can be used to describe the model. |

## Service Mode
When you specify the command-line option `--serve`, MxBuild will start in Service mode. In this mode, you do not specify the project to build on the command-line. Instead, MxBuild will run indefinitely and you can tell it to build a project by sending it a POST request.

The command-line option `--port=PORT` can be used to choose the TCP port that MxBuild will use. When this option is omitted, port `6543` is used.

The advantage of running MxBuild in Service mode is that the deployment of a project (`target` = `Deploy`) can be significantly faster for subsequent builds. For example, if no Java files have changed between subsequent builds, the Java compilation step will be skipped. Also, for some changes to the model, such as changes to Pages, the Mendix Runtime supports hot-reloading the model instead of doing a full restart. The response will indicate whether a full restart is required.

### Build Request
A build can be started by sending a POST request to `<serviceLocation>/build`. The body of the POST request should contain a JSON object that specifies the path to the Mendix project (.mpr) file that you want to build, together with some additional options that are similar to the command-line options that can be used when running MxBuild in Build mode. Here is an example of this JSON object:

```js
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

The `target` property is required and its only valid values are `Package` and `Deploy`. When the target is `Package`, the `mdaFilePath` property is also required.

The `projectFilePath` property should contain the absolute path to the project (.mpr) file.

The `projectName`, `modelVersion` and `modelDescription` properties are optional and only used when the target is `Package`.

The `useLooseVersionCheck` property is optional. Its default is `false`, meaning that the project version needs to exactly match the MxBuild version. If set to `true`, MxBuild will also allow older projects to be deployed.

The `forceFullDeployment` property is optional. Its default is `false`, meaning that fast deployment will be used if possible. If set to `true`, fast deployment will never be used.

### Build Response

#### Success
The response to the POST request is a JSON object again. If the build finished without problems, this object contains a success status. In addition, it contains a field that indicates whether a restart of the Runtime is required. Note that in case a restart is **not** required, it is still required to call the M2EE command `reload_model` in order to update a running Runtime. For example:

```js
{
  "status": "Success",
  "restartRequired": true
}
```

#### Busy
If a build is already in progress, the response will indicate this as follows:

```js
{
  "status": "Busy"
}
```

#### Failure
If something goes wrong while processing the request, the status is `Failure` and an additional message describes the problem. For example:

```js
{
  "status": "Failure",
  "message": "Output file should be specified for target 'package'."
}
```

When your Mendix project contains consistency errors, deployment will fail and these errors (together with any warnings and deprecations) will be added to the `problems` property of the response. For example:

```js
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

See the section 'Project errors' below for a description of the error format.

### Shutting Down
To shut down an MxBuild process that is running in Service mode, send a POST request to `<serviceLocation>/shutdown`.

### Return Status
The following table describes the possible HTTP status codes returned by MxBuild in response to requests. Note that status `200 OK` is returned even when your project contains consistency errors.

| Status code | Description |
| --- | --- |
| `200 OK` | The request is handled successfully |
| `400 Bad Request` | This happens when either:<br/>- The request is not a POST request<br/>- Invalid command line options are specified<br/>- An unexpected error occurred |
| `404 Not Found` | A resource is requested that doesn't exist |

## JDK settings
When running MxBuild (either in Build mode or in Service mode), you're required to specify the following two settings on the command-line:

| Setting | Description |
| --- | --- |
| `--java-home=DIRECTORY` | This is the directory in which the JDK is installed, e.g. `--java-home=/usr/lib/jvm/java-8-oracle`. |
| `--java-exe-path=FILENAME` | This is the full path to the Java executable, e.g. `--java-exe-path=/usr/lib/jvm/java-8-oracle/bin/java`. |

## Other options
Specifying `-h` or `--help` on the command-line will show a short description of MxBuild and a list of all available options.

## Return value
When MxBuild exits, one of the following codes will be returned:

| Exit Code | Description |
| --- | --- |
| 0 | MxBuild finished successfully |
| 1 | An internal error occurred |
| 2 | There's something wrong with the command-line options |
| 3 | Deployment of the Mendix project failed |
| 4 | Starting MxBuild in Service mode failed |

If the exit code is larger than 0, MxBuild will also output a message describing the error.

## Project errors
When your Mendix project contains errors, deployment will fail and MxBuild will report these errors. When running in Build mode, you can use the `--write-errors=FILENAME` command-line option to tell MxBuild to write the errors to a file. In Service mode, MxBuild will return the errors as part of the JSON response object.

In both cases, the errors are output in as a JSON object that has one property `problems`. The value of this property is an array of objects that each describe one error, warning or deprecation in your project. For example:

```js
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
