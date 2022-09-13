---
title: "Automate Mendix Deployment on Microsoft Windows"
url: /developerportal/deploy/automate-mendix-deployment-on-microsoft-windows/
description: "How to automate Mendix deployment on servers running Windows by using a CI/CD pipeline"
weight: 5
tags: ["deploy", "Windows", "Mendix Service Console", "Microsoft", "CI/CD pipeline", "cmdlets"]
---

## 1 Introduction

!!!On a Windows deployment with Mendix Service Console, it is possible to script the main build and deploy steps of your Mendix deployment.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Manually deploy your Mendix app and ensure that there are no errors during the deployment. For more information, see [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/).
* Activate your Mendix license. For more information, see [Activate a Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/).
* Familiarize yourself with the update process for Mendix apps. For more information, see [MS Windows: Update a Mendix App](/developerportal/deploy/updating-a-mendix-application/).

## 3 !!!

The first step in the deployment process is to build a Mendix deployment package from the source model. The deployment package (MDA file) can be built in a few ways:

Build manually in Studio Pro using the Create Deployment Package menu item

Build and download an MDA using the Mendix Build API

Build using the Cloud Portal UI and download manually or via the Build API

Fetch source from the team server and build locally with MxBuild.exe (as discussed below)

1. 

## 7 Read More

* link
