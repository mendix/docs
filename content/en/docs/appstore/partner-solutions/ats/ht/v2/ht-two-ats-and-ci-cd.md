---
title: "Use ATS in Combination with CI/CD"
url: /appstore/partner-solutions/ats/ht-two-ats-and-ci-cd/
description: "Describes how you can use ATS 2.0 in your CI/CD pipeline."
---

## Introduction

This how-to explains the basics of a CI/CD pipeline, how ATS fits in and an example is shown on how-to implement ATS into your CI/CD pipeline in Jenkins.

This how-to teaches you how to do the following:

* Understand the basics of a CI/CD pipeline
* Prepare your test case in ATS for CI/CD
* Implement your ATS test case into your CI/CD pipeline in Jenkins

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Complete [How to Get Started](/appstore/partner-solutions/ats/ht-two-getting-started/)
* Complete [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)
* Complete Mendix Rapid App Developer course

## CI/CD Basics

In this chapter the three components of CI/CD are described. There are two possible combinations:

* Continuous Integration and Continuous Delivery
* Continuous Integration and Continuous Deployment

The difference is in the final phase either manually deploy to the customer or use Continuous Deployment to do it automatically.

### Continuous Integration

Developers practicing continuous integration merge their changes back to the main branch as often as possible. The developer's changes are validated by creating a build and running automated tests against the build. By doing so, you avoid the integration hell that usually happens when people wait for release day to merge their changes into the release branch.

Continuous integration puts a great emphasis on testing automation to check that the application is not broken whenever new commits are integrated into the main branch.

### Continuous Delivery

Continuous delivery is an extension of continuous integration. Continuous delivery focuses on making sure that you can release new changes to your customers in a quick and sustainable way. This means that on top of having automated your testing, you also have automated your release process and you can deploy your application at any point in time by clicking on a button.

In theory, with continuous delivery, you can decide to release daily, weekly, fortnightly, or whatever suits your business requirements. However, if you want to get the full benefit of continuous delivery, you should deploy to production as early as possible to make sure that you release small batches, that are easy to troubleshoot in case of a problem.

### Continuous Deployment

Continuous deployment goes one step further than continuous delivery. With this practice, every change that passes all stages of your production pipeline is released to your customers. There's no human intervention, and only a failed test will prevent a new change to be deployed to production.

Continuous deployment is an excellent way to accelerate the feedback loop with your customers and take pressure off the team as there isn't a Release Day anymore. Developers can focus on building software, and they see their work go live minutes after they've finished working on it.

### Conclusion

The CI/CD process ensures that everything committed is tested and deployed. An example:
A Mendix developer commits a change into their team server branch. The branch is then automatically deployed into the test environment and tested. If the tests passes, the branch is deployed into the acceptance environment and also tested. You can even use Continuous Deployment to directly deploy to production and perform a regression test.

## ATS and CI/CD {#ats-and-ci-cd}

ATS can do the testing of your Mendix app in the CI/CD pipeline. In ATS 2.0 a CI/CD API is added, so that customers can access their test cases or test suites from outside ATS. This way you can use a CI/CD tool to execute your test cases and test suites in ATS and retrieve the results. To access those specific test cases and test suites you must generate a CI/CD API key. This chapter explains how to generate a CI/CD API key for accessing ATS and how to generate a CI/CD template for a test case or test suite. The CI/CD template is a pre-configured test case or test suite with a set run configuration which can be fired from a CI/CD pipeline.

### CI/CD Access API

To generate a CI/CD API key follow these steps:

1. Login to ATS 2.0.
2. Open up the app you want to access for CI/CD.
3. Inside your app open the profile menu and click **Show Test Settings**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/show-test-settings.png" class="no-border" >}}

4. On the **Settings** page you find the **CI/CD API Key** section.
5. Click **Generate new CI/CD API key**. You need this to get access to ATS in your CI/CD tool.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/generate-new-ci-cd-api-key.png" class="no-border" >}}

6. A **confirmation** dialog box appears that warns you that an existing CI/CD API key will become invalid once you generate a new one.
7. Click **Continue**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/confirmation-continu.png" class="no-border" >}}

8. The **Your new API key:** dialog box appears.

    {{% alert color="info" %}}This is the only time ATS shows the API. Write it down in a secure place.{{% /alert %}}

9. Make sure you wrote down the API key. Now close the dialog box. 

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/your-new-api-key.png" class="no-border" >}}

Keep your API key at hand, you need it later on. 

You now generated the CI/CD API key, you need this to gain access to your app in ATS. Next, the CI/CD template is explained.

### CI/CD Template

To create a CI/CD template follow these steps:

1. Login to ATS 2.0.
2. Open up the app in which you find your test case or test suite.
3. Inside your app click the **Test Runs** navigation item.
4. Click the **CI/CD Templates** tab.
5. Click either **Add Testcase** or **Add Testsuite** depending on what you want to execute.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/ci-cd-templates-tab.png" class="no-border" >}}

6. The **Select Testcase** dialog box opens. Where you select your test case.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/ci-cd-template-select-test-case.png" class="no-border" >}}

7. After selecting your test case the **New CI/CD Template** dialog box opens.  Here you select your run configuration and click **Save**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/new-ci-cd-template.png" class="no-border" >}}

8. After clicking **Save** the CI/CD template for test case appears with a unique ID.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/ci-cd-template-with-uid.png" class="no-border" >}}

Keep the unique ID at hand for later on.

You now created a CI/CD template which you can execute using a CI/CD pipeline.

### CI/CD Web Service User

The CI/CD in ATS is using a webservice with authentication. Please use the standard username which is ATSAPIUser and the standard password which is ATSAPIUser.

## Configure ATS in Your Pipeline (Example)

Using the CI/CD API key and the unique ID of the CI/CD template you can execute a test case from your CI/CD pipeline. In this section, you find an example for Jenkins.

### Prerequisites

* Have some Jenkins experience
* Know how to configure CI/CD in ATS:
    * Configure a CI/CD Template in ATS
    * Create the CI/CD API key in ATS
    * Find your AppID in the Mendix Portal

### Adding an Extra Step in Jenkins on a Linux Server

This is only an example for Jenkins on Linux in shell scripting and can be written in another scripting language of your choice like for example Powershell (for Windows) or Groovy.

* Make sure that curl and xmllint are installed on your Linux server
* In your Jenkins project, add a build step of type Execute shell and use the following shell script

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-and-ci-cd/script-cicd-jenkins.png" class="no-border" >}}

```bash
#/bin/bash
# Shell script example for Jenkins (linux). You must have curl and xmllint installed.
#set -x

# Set your CI/CD variables
USERNAME=ATSAPIUser
PASSWORD=ATSAPIUser
APPAPITOKEN=<put AppAPIToken>
APPID=<put AppID>
JOBTEMPLATEID=<put JobTemplateID>
URL2=<put ATS URL>


echo _"ATS Testing will start..."
echo ""
#Call ATS API

JOBID=$(curl -s -H 'Content-Type: text/xml' -d "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:men=\"http://www.mendix.com/\"><soapenv:Header><men:authentication><username>$USERNAME</username><password>$PASSWORD</password></men:authentication></soapenv:Header><soapenv:Body><men:RunJob><TestRun><AppAPIToken>$APPAPITOKEN</AppAPIToken><AppID>$APPID</AppID><JobTemplateID>$JOBTEMPLATEID</JobTemplateID></TestRun></men:RunJob></soapenv:Body></soapenv:Envelope>" ${URL2}/ws/RunJob -X POST |xmllint --xpath "string(//JobID)" -)

sleep 5

STATUS=$(curl -s -H 'Content-Type: text/xml' -d "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:men=\"http://www.mendix.com/\"><soapenv:Header><men:authentication><username>$USERNAME</username><password>$PASSWORD</password></men:authentication></soapenv:Header><soapenv:Body><men:GetTestRun><TestRun><AppAPIToken>$APPAPITOKEN</AppAPIToken><JobID>$JOBID</JobID><AppID>$APPID</AppID></TestRun></men:GetTestRun></soapenv:Body></soapenv:Envelope>" ${URL2}/ws/GetJobStatus -X POST |xmllint --xpath "string(//ExecutionStatus)" -)

# Loop till status is Done
while [ ${STATUS} != Done ]
do
        echo "Status Test Run is ${STATUS}"
        sleep 300
        STATUS=$(curl -s -H 'Content-Type: text/xml' -d "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:men=\"http://www.mendix.com/\"><soapenv:Header><men:authentication><username>$USERNAME</username><password>$PASSWORD</password></men:authentication></soapenv:Header><soapenv:Body><men:GetTestRun><TestRun><AppAPIToken>$APPAPITOKEN</AppAPIToken><JobID>$JOBID</JobID><AppID>$APPID</AppID></TestRun></men:GetTestRun></soapenv:Body></soapenv:Envelope>" ${URL2}/ws/GetJobStatus -X POST |xmllint --xpath "string(//ExecutionStatus)" -)
done

RESULT=$(curl -s -H 'Content-Type: text/xml' -d "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:men=\"http://www.mendix.com/\"><soapenv:Header><men:authentication><username>$USERNAME</username><password>$PASSWORD</password></men:authentication></soapenv:Header><soapenv:Body><men:GetTestRun><TestRun><AppAPIToken>$APPAPITOKEN</AppAPIToken><JobID>$JOBID</JobID><AppID>$APPID</AppID></TestRun></men:GetTestRun></soapenv:Body></soapenv:Envelope>" ${URL2}/ws/GetJobStatus -X POST |xmllint --xpath "string(//ExecutionResult)" -)

# Write Result to file that you can inject as variable for your email
echo EMAILTEXT="Test Run Status is ${RESULT}" >> email.txt
```

The last API call results in a "Passed" or "Failed", you can email this result or for example use the outcome in a conditional step for continuing deploying on different environments or failing this build. 

### Adding an Extra Step in Jenkins on a Windows Server

This is only a PowerShell example for Jenkins on Windows, and it can be written in another scripting language of your choice.

* Make sure to install the [PowerShell plugin](https://wiki.jenkins.io/display/JENKINS/PowerShell+Plugin)
* In your Jenkins project, add a build step of type `Execute powershell` and use the following PowerShell script
* In the script, you will find the parameters displayed here – change the values in the script with your own values:

| Parameter | Value |
| --- | --- |
| $url | 'ENTERURL' |
| $appapitoken | 'APPAPITOKEN' |
| $appid | 'APPID' |
| $jobtemplate | 'JOBTEMPLATE' |

```powershell
function Execute-SOAPRequest 
( 
        [Xml]    $SOAPRequest, 
        [String] $URL 
) 
{ 
        write-host "Sending SOAP Request To Server: $URL" 
        $soapWebRequest = [System.Net.WebRequest]::Create($URL) 
        $soapWebRequest.Headers.Add("SOAPAction","`"http://www.facilities.co.za/valid8service/valid8service/Valid8Address`"")

        $soapWebRequest.ContentType = "text/xml;charset=`"utf-8`"" 
        $soapWebRequest.Accept      = "text/xml" 
        $soapWebRequest.Method      = "POST" 
        
        write-host "Initiating Send." 
        $requestStream = $soapWebRequest.GetRequestStream() 
        $SOAPRequest.Save($requestStream) 
        $requestStream.Close() 
        
        write-host "Send Complete, Waiting For Response." 
        $resp = $soapWebRequest.GetResponse() 
        $responseStream = $resp.GetResponseStream() 
        $soapReader = [System.IO.StreamReader]($responseStream) 
        $ReturnXml = [Xml] $soapReader.ReadToEnd() 
        $responseStream.Close() 
        
        write-host "Response Received."

       
        return $ReturnXml 

}

$url = 'ENTERURL'
$appapitoken = 'APPAPITOKEN'
$appid = 'APPID'
$jobtemplate = 'JOBTEMPLATE'
$soap = [xml]@"
<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:men="http://www.mendix.com/">
   <soapenv:Header>
      <men:authentication>
         <username>ATSAPIUser</username>
         <password>ATSAPIUser</password>
      </men:authentication>
   </soapenv:Header>
   <soapenv:Body>
      <men:RunJob>
         <TestRun>
            <AppAPIToken>$appapitoken</AppAPIToken>
            <AppID>$appid</AppID>
            <JobTemplateID>$jobtemplate</JobTemplateID>
         </TestRun>
      </men:RunJob>
   </soapenv:Body>
</soapenv:Envelope>
"@

write-host "Starting the RunJob API call..."
$ret = Execute-SOAPRequest $soap $url
$jobid = $ret.Envelope.Body.RunJobResponse.RunJob.JobID.'#cdata-section'

$url2 = 'https://ats100.mendixcloud.com/ws/GetJobStatus'
$soap2 = [xml]@"
<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:men="http://www.mendix.com/">
   <soapenv:Header>
      <men:authentication>
         <username>ATSAPIUser</username>
         <password>ATSAPIUser</password>
      </men:authentication>
   </soapenv:Header>
   <soapenv:Body>
      <men:GetTestRun>
         <TestRun>
            <AppAPIToken>$appapitoken</AppAPIToken>
            <JobID>$jobid</JobID>
            <AppID>$appid</AppID>
         </TestRun>
      </men:GetTestRun>
   </soapenv:Body>
</soapenv:Envelope>
"@

Start-Sleep -s 5
write-host "Starting the GetJobStatus API call..."
$ret2 = Execute-SOAPRequest $soap2 $url2

$executionstatus = $ret2.Envelope.Body.GetTestRunResponse.TestRun.ExecutionStatus.'#cdata-section'

while($executionstatus -ne 'Done')
    {
        write-host "Status Test Run is: $executionstatus, please wait..."
        Start-sleep -s 30
        $ret2 = Execute-SOAPRequest $soap2 $url2
        $executionstatus = $ret2.Envelope.Body.GetTestRunResponse.TestRun.ExecutionStatus.'#cdata-section'
    }

$executionresult = $ret2.Envelope.Body.GetTestRunResponse.TestRun.ExecutionResult.'#cdata-section'
write-host "Result of Test Run is: $executionresult"
```

The last API call results in a "Passed" or "Failed". You can email this result or, for example, use the outcome in a conditional step for continuing deploying on different environments or failing this build.
