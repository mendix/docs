---
title: "Use the CI/CD API"
parent: "ht-version-2"
description: "Describes how to configure Jenkins to use the ATS 2.0 CI/CD API."
tags: ["ATS", "testing", "CI/CD"]
---

## 1 Introduction

ATS 2.0 introduces an API for your CI/CD integration, so you can run your test scripts from your CI/CD tool of choice. 
In this How-to we show you an example of how you could add a step for ATS in your Jenkins project.

## 2 Prerequisites

* Have some Jenkins experience
* Know how to configure CI/CD in ATS ([see CI/CD API reference guide](https://mansystems.gitbooks.io/ats-public-documentation/content/refguide-ats-2/cicd-api.html/)):
  * Configure a CI/CD Template in ATS
  * Configure a Webservice user in ATS
  * Create the CI/CD API key in ATS
  * Find your AppID in Mendix Sprintr

## 3 Adding an extra Step in Jenkins

This is only an example for Jenkins on Linux in shell scripting and can be written in another scripting language of your choice like for example Powershell (for Windows) or Groovy.

* Make sure that curl and xmllint are installed on your Linux server.
* In your Jenkins project, add a build step of type Execute shell and use the following shell script. 

![](attachments/use-cicd-api/script-cicd-jenkins.jpg)

```
#/bin/bash
# Shell script example for Jenkins (linux). You must have curl and xmllint installed.
#set -x

# Set your CI/CD variables
USERNAME=<put username>
PASSWORD=<put password>
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
