---
title: "Example Implementation"
parent: "deploy-api"
---

This is a PowerShell script to build and redeploy a Mendix app; this is only an example and can be written in the language of your choice.

This script uses the Invoke-RestMethod cmdlet with alias 'irm' many times. This cmdlet is introduced in PowerShell 3.0.
Windows 7 comes with PowerShell 2.0, so you will have to download a newer version. This version also requires a recent .NET Framework version.

Download links:

*   [.NET Framework 4.5](http://www.microsoft.com/en-us/download/details.aspx?id=30653)
*   [PowerShell 4.0](http://www.microsoft.com/en-us/download/details.aspx?id=40855) (Choose Download, Windows 6.1-KB___x64 or x86__.msu)

1.  To execute this script in a command prompt, execute: `powershell -file CI-build.ps1`
2.  To execute this script in a PowerShell session, execute `.\CI-build.ps1`
3.  To change and test the script, you can open this file in Windows PowerShell ISE (in Administrative Tools).

If you get the following error you have to set a execution policy:

`File <script file name> cannot be loaded because the execution of scripts is disabled on this system`

To run any scripts that you wrote yourself, or to run scripts downloaded from internet (signed by a trusted publisher), open a PowerShell prompt as administrator and execute:

```java
Set-ExecutionPolicy RemoteSigned
```

This example shows how to create your own continuous deployment script using our APIs. Most functions in this example you may recognize from our Dev Center. The idea of this example is to create a new build of the latest revision every night. You can of course run this as often as you want. If the latest revision has not been built yet our buildserver will create a new build for you, otherwise nothing needs to be done for continuous deployment. While our buildserver is creating a new build for you, you can poll the result of the buildjob using the jobId parameter.

After the buildserver is the environment is cleaned to have a clean start. First the application needs to be stopped before the environment can be cleaned. When that's done you can transport the package created by the buildserver to the cleaned environment. Because starting can take a while, it stars asynchronous. You can poll to see if the application has been started with the _startJobId_. When the application has been started you can use the application for your tests.

```java
Function Get-Branch($headers, $url, $appName, $branchName) {
    irm -Headers $headers ${url}apps/$appName/branches/$branchName
}

Function Start-Build($headers, $url, $appName, $branchName, $revision, $version) {
    $buildinput = "{
        'Branch' = '$branchName',
        'Revision' = $revision,
        'Version' = '$version',
        'Description' = 'CI Build $((Get-Date).ToString('s'))'
    }"

    Write-Host "Start build with the following input: $buildinput"
    $buildResult = $buildinput | irm -Headers $headers -ContentType "application/json" -Method Post ${url}apps/$appName/packages/
    $buildResult.PackageId
}

Function Wait-For-Built($headers, $url, $appName, $packageId, $timeOutSeconds) {
   $date = Get-Date

    while($true) {
        $duration = ((Get-Date) - $date).TotalSeconds

        if($duration -gt $timeOutSeconds) {
            Write-Host "Build timed out after $duration"

            return $false
        }

        sleep -s 10
        $package = Get-Package $headers $url $appName $packageId

        if($package.Status -eq 'Succeeded') {
            Write-Host "Built package: $package"

            return $true
        }
    }
}

Function Get-Package($headers, $url, $appName, $packageId) {
    irm -Headers $headers ${url}apps/$appName/packages/$packageId
}

Function Transport-Package($headers, $url, $appName, $environment, $packageId) {
    $transportInput = "{ 'PackageId' = '$packageId' }"
    Write-Host "Transport package with the following input: $transportInput"
    $transportInput | irm -Headers $headers -ContentType "application/json" -Method Post ${url}apps/$appName/environments/$environment/transport
}

Function Stop-App($headers, $url, $appName, $environment) {
    Write-Host "Stop app $appName ($environment)"
    irm -Headers $headers -Method Post ${url}apps/$appName/environments/$environment/stop
}

Function Start-App($headers, $url, $appName, $environment) {
    Write-Host "Start app $appName ($environment)"
    $startJob = "{ 'AutoSyncDb' = true }" | irm -Headers $headers -ContentType "application/json" -Method Post ${url}apps/$appName/environments/$environment/start
    $startJob.JobId
}

Function Get-Start-App-Status($headers, $url, $appName, $environment, $jobId) {
    irm -Headers $headers ${url}apps/$appName/environments/$environment/start/$jobId
}

Function Wait-For-Start($headers, $url, $appName, $environment, $jobId, $timeOutSeconds) {
   $date = Get-Date

    while($true) {
        $duration = ((Get-Date) - $date).TotalSeconds

        if($duration -gt $timeOutSeconds) {
            Write-Host "Start app timed out after $duration"

            return $false
        }

        sleep -s 10
        $startStatus = Get-Start-App-Status $headers $url $appName $environment $jobId

        if($startStatus.Status -eq 'Started') {
            return $true
        }
    }
}

Function Clean-App($headers, $url, $appName, $environment) {
    Write-Host "Clean app $appName ($environment)"
    irm -Headers $headers -Method Post ${url}apps/$appName/environments/$environment/clean
}

$url = 'https://deploy.mendix.com/api/0.1/'
$headers = @{
    'Mendix-Username' = 'richard.ford51@example.com'
    'Mendix-ApiKey' = '26587896-1cef-4483-accf-ad304e2673d6'
}

$appName = 'richardford'
$environment = 'Acceptance'
$branchName = 'trunk'

$branch = Get-Branch $headers $url $appName $branchName
"Branch to build: $branch"
$latestBuiltRevision = $branch.LatestTaggedVersion.Substring($branch.LatestTaggedVersion.LastIndexOf('.') + 1)

if ($latestBuiltRevision -eq $branch.LatestRevisionNumber) {
    "It is not needed to build, as the latest revision is already built."
    exit
}

$versionWithoutRevision = $branch.LatestTaggedVersion.Remove($branch.LatestTaggedVersion.LastIndexOf('.'))
$packageId = Start-Build $headers $url $appName $branchName $latestBuiltRevision $versionWithoutRevision
$built = Wait-For-Built $headers $url $appName $packageId 600

if($built -eq $false) {
    "No build succeeded within 10 minutes."
    exit
}

Stop-App $headers $url $appName $environment
Clean-App $headers $url $appName $environment
Transport-Package $headers $url $appName $environment $packageId
$startJobId = Start-App $headers $url $appName $environment
$started = Wait-For-Start $headers $url $appName $environment $startJobId 600

if($started -eq $true) {
    "App successfully started."
}

```
