---
title: "Automate Mendix Deployment on Microsoft Windows"
url: /developerportal/deploy/automate-mendix-deployment-on-microsoft-windows/
linktitle: "Automate Mendix Deployment"
description: "How to automate Mendix deployment on servers running Windows"
weight: 5
---

## Introduction

On Windows servers, instead of deploying your application manually, you can automate that part of your CI/CD pipeline by using [PowerShell cmdlets](https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/cmdlet-overview). Automating deployment makes the process of updating your application faster and lessens the potential for user errors by replacing the manual deployment steps with automation scripts. This document describes the required configuration, and provides sample automation scripts that you can use as basis for scripting your own deployment.

## Prerequisites

Before starting this how-to, make sure you complete the following prerequisites:

* Manually deploy your Mendix app and ensure that there are no errors during the deployment. For more information, see [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/).
* Ensure that your Windows PowerShell version is 5.1. Other versions are currently not supported.
* Ensure that your Mendix Service Console version is 4.7.4 or above.
* Familiarize yourself with the update process for Mendix apps running on Windows. For more information, see [MS Windows: Update a Mendix App](/developerportal/deploy/updating-a-mendix-application/).

## Importing Mendix-Specific Cmdlets into Windows PowerShell

To install Mendix-specific cmdlets that you can use to script your app deployment, follow these steps:

1. Build a Mendix Deployment Package by choosing one of the following options:
    * Use the Mendix Build API. For more information, see [Build API](/apidocs-mxsdk/apidocs/build-api/).
    * Fetch the source from Team server and build the package locally with [MxBuild.exe](/refguide/mxbuild/).
    * Create the package manually. For more information, see [Create Deployment Package](/refguide/create-deployment-package-dialog/).
2. In Windows PowerShell, run the following command: `Import-Module '{<Mendix Service Console installation directory>}\Mendix.Service.Commands.dll'`.
    For example, if Mendix Service Console is installed at *C:\Program Files\Mendix\Service Console*, enter `Import-Module 'C:\Program Files\Mendix\Service Console\Mendix.Service.Commands.dll'`
3. Verify that the following commands are now available in PowerShell:
    * `Start-MxApp`
    * `Stop-MxApp`
    * `Update-MxApp`
    * `Install-MxServer`
    
    For more information about each command and its parameters, add `-?` after the command, for example, `Start-MxApp -?`.

After installing the Mendix-specific cmdlets, you can use them to write your own scripts that start, stop, or update your Mendix app.

## Sample Scripts

In this section, you can find sample scripts to help you script your app deployment.

{{% alert color="info" %}}
The scripts are intended to show the range of available deployment options. They are presented as examples only, and may require significant adaptation to work in your own environment.
{{% /alert %}}

### Sample Script - Update App {#update}

The following script example demonstrates the process required to update your app. Firstly, it imports the necessary cmdlets. After that, it stops your app and updates it with files extracted from the Mendix Deployment Package. Finally, the script restarts the app with the `SynchronizeDatabase` parameter to synchronize the database without user input.

```text
Import-Module '{<Mendix Service Console installation directory>}\Mendix.Service.Commands.dll'

$mdaPath = '{Location of your Mendix Deployment Package}'
$mdaFile = '{Name of your Mendix Deployment Package}' 
$literalPath = $mdaPath + "\" + $mdaFile
$appName = '{Name of your app}'

"Deploying " + $mdaPath + " to app " + $appName

# stop app
Stop-MxApp $appName

# unpack app                                                    
Update-MxApp $appName -LiteralPath $literalPath

# start app, update database                                     
Start-MxApp $appName -SynchronizeDatabase
```

{{% alert color="info" %}}
To start your app as a local process instead of a service, add a `-NoService` argument to the `Start-MxApp` cmdlet, as in the following example:

```
Start-MxApp $appName -NoService -SynchronizeDatabase 
```

{{% /alert %}}

{{% alert color="warning" %}}
Stopping your app before you update it is a necessary part of the process. Do not attempt to extract the deployment package into your app while the app is running.
{{% /alert %}}

### Sample Script - Determine the Mendix Runtime Version

The following script demonstrates how you can check which version of the Mendix Runtime is required for your app. It inspects a deployment package, finds the Mendix Runtime version it needs, and downloads the correct version.

```text
Copy-Item -Path 'C:\Mendix\Some_Deployment.mda'-Destination C:\Temp\temp.zip
Expand-Archive -LiteralPath 'C:\Temp\temp.zip' -DestinationPath C:\temp\MxApp
$mxJson = Get-Content "C:\temp\MxApp\model\metadata.json" | ConvertFrom-Json
Remove-Item C:\Temp\temp.zip
Remove-Item C:\Temp\MxApp\ -Recurse

# determine the Mendix Runtime version
$mxJson.RuntimeVersion

# download the Mendix Runtime version
$targetURL = 'https://cdn.mendix.com/runtime/mendix-' + $mxJson.RuntimeVersion + ".tar.gz"
$targetFile = 'C:\Mendix\runtimes\mendix-' + $mxJson.RuntimeVersion + '.tar.gz'
wget $targetURL -OutFile $targetFile
```

### Sample Script - Update the Mendix Runtime

The following script example demonstrates how you can update the [Mendix Runtime](/refguide/runtime/) to a version that matches the app that you are deploying. This is only required when you upgrade Mendix versions. The sample script first downloads the required Mendix Runtime version through PowerShell, and then extracts the Mendix Platform libraries into the server distribution folder. In this case, the app can remain running, as this process only extracts the new server version without affecting previously installed Mendix Platform versions.

```text
# download Mendix Runtime
wget https://cdn.mendix.com/runtime/mendix-{<major>.<minor>.<patch>.<build>}.tar.gz -OutFile {<target folder for the downloaded file>}\mendix-{<major>.<minor>.<patch>.<build>}.gz

# extract Mendix Platform into the distribution folder
Install-MxServer -LiteralPath {<target folder for the downloaded file>}\mendix-{<major>.<minor>.<patch>.<build>}.gz
```

### Sample Script - Create new Mendix app

The following script example demonstrates how to create a new Mendix app with its own folder and basic `Settings.yaml` file. You still need to extend the `Settings.yaml` file with database settings and a valid Java path before the app can really start.

```text
$appName = 'Name of Mendix app'

# Create new Mendix app
New-MxApp -Name $appName -Credential (Get-Credential)
```

### Sample Script - Set Log Level for Mendix app

The following script example demonstrates how to set a log level for all log nodes of a log subscriber at once. This is only applicable when you have defined your own log subscribers in the `Settings.yaml` file.

```text
$appName = 'Name of Mendix app'
$subscriberName = 'Log subscriber name of the app'
$level = 'Log level which needs to be assigned'

# Set log level for all nodes of a log subscriber at once
Set-MxLogLevel $appName -SubscriberName $subscriberName -Level $level
```

## Troubleshooting

If you encounter any issues while automating Mendix deployment on Windows using cmdlets, use the following troubleshooting tips to help you solve them.

### Could Not Load File or Assembly

PowerShell shows an error message similar to the following:

```text
Could not load file or assembly, Version=3.3.0.0, Culture=neutral, PublicKeyToken= {token number}' or one of its dependencies. The system cannot find the file specified.
```

#### Cause

This error, or any similar error message, is likely to be related to a mismatch in the .NET version between PowerShell and the Mendix cmdlets. The Mendix cmdlets require .NET version 4, so the error may show if PowerShell is using .NET 2 or 3.

#### Solution

To solve this issue, follow these steps:

1. Determine the .NET version currently used by PowerShell by running one of the following commands:
    * `[System.Reflection.Assembly]::GetExecutingAssembly().ImageRuntimeVersion`
    * `$PSVersionTable`
2. If the .NET version is different than 4, create the following configuration file:
    * File location – the folder that contains the *powershell.exe* file, for example *C:\Windows\System32\WindowsPowerShell\v1.0*
    * File name: *powershell.exe.config*
3. In the *powershell.exe.config* file, provide the following configuration:
    
    ```text
    <?xml version="1.0"?> 
    <configuration> 
    <startup useLegacyV2RuntimeActivationPolicy="true"> 
        <supportedRuntime version="{<Latest build of .NET version 4, for example, v4.0.30319>}"/> 
        <supportedRuntime version="{<.NET version currently used by PowerShell, for example, v2.0.50727>}"/> 
    </startup> 
    </configuration> 
    ```

With the above configuration, PowerShell primarily uses .NET version 4, but also supports the version that it previously used, for example, version 2.

### Could Not Load File or Assembly System.Management.Automation

PowerShell shows an error message similar to the following:

```text
Could not load file or assembly 'System.Management.Automation, Version=3.0.0.0, Culture=neutral, PublicKeyToken={token number}' or one of its dependencies. The system cannot find the file specified.
```

#### Cause

Windows Management Framework 3.0 is not installed.

#### Solution

Install [Windows Management Framework 3.0](https://www.microsoft.com/en-us/download/details.aspx?id=34595).

### Cannot Open {App Name} Service on Computer

PowerShell shows an error message similar to the following:

```text
Start-MxApp : Cannot open App1 service on computer '.'.
At line:1 char:1
+ Start-MxApp App1 -synchronizedatabase
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (App1:String) [Start-MxApp], InvalidOperationException
    + FullyQualifiedErrorId : AppProcessError,Mendix.Service.Commands.StartAppCommand
```

#### Cause

PowerShell is run without administrator privileges.

#### Solution

Run PowerShell as an administrator.

### Could Not Load File or Assembly Mendix.Service

PowerShell shows an error message similar to the following:

```text
Start-MxApp: Could not load file or assembly 'Mendix.Service, Version=4.7.0.0, Culture=neutral, PublicKeyToken=null'. Het systeem kan het opgegeven bestand niet vinden.
```

#### Cause

You ran the `Start-MxApp` cmdlet in a version of PowerShell other than 5.1.

#### Solution

Use Windows PowerShell 5.1 to run Mendix cmdlets. Other versions of PowerShell are currently not supported.

### Unable to Start the App. Reason: The Database Does Not Exist

When you run the `Start-MxApp $APP_NAME` or `Start-MxApp $APP_NAME -synchronizedatabase` cmdlets, PowerShell shows an error message similar to the following:

```text
Start-MxApp : Unable to start the app. Reason: The database does not exist. 
At line:1 char:1 
+ Start-MxApp MyFirstApp -synchronizedatabase 
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
+ CategoryInfo : InvalidOperation: (MyFirstApp:String) [Start-MxApp], Exception 
+ FullyQualifiedErrorId : AppProcessError,Mendix.Service.Commands.StartAppCommand
```

#### Cause

You tried to start the app without first creating the app database.

#### Solution

Deploy your app manually before you running automated deployment scripts. For more information, see [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/).

### Unable to Start the App. Reason: The Database Is Not Synchronized with the Model

When you run the `Start-MxApp $APP_NAME` cmdlet, PowerShell shows an error message similar to the following:

```text
Start-MxApp : Unable to start the app. Reason: The database is not synchronized with the model.
At line:1 char:1
+ Start-MxApp MyFirstApp
+ ~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (MyFirstApp:String) [Start-MxApp], Exception
    + FullyQualifiedErrorId : AppProcessError,Mendix.Service.Commands.StartAppCommand
```

#### Cause

You tried to restart the app without using the `SynchronizeDatabase` parameter.

#### Solution

Run the `Start-MxApp` command with the `SynchronizeDatabase` parameter. For an example, see [Sample Script - Update App](#update) above.
