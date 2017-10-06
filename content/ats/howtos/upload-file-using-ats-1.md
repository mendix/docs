---
title: "Upload a file in your app using ATS"
Parent: "version-1"
description: "Describes how to upload a file in your app using ATS and the restrictions it has."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to upload a file in your app using ATS. You have some test situations in which you must upload a file to finish that test situation. During manual testing, you upload this file from your local computer into your app. ATS works similar, the only difference is that the local computer is your selenium hub.

This is regarding file uploads by ATS.

Quick summary:

| Selenium Set Up | Uploading your own file | Uploading a file | Uploading possible? |
| :-------------- | :---------------------- | :--------------- | :------------------ |
| Local Selenium Server (Docker) | ![](version-1/attachments/upload-file-using-ats-1/grey.png) Limited<sup>1</sup> | ![](version-1/attachments/upload-file-using-ats-1/green.png) Yes | ![](version-1/attachments/upload-file-using-ats-1/green.png) Yes |
| BrowserStack (SaaS) | ![](version-1/attachments/upload-file-using-ats-1/red.png) No | ![](version-1/attachments/upload-file-using-ats-1/green.png) Yes | ![](version-1/attachments/upload-file-using-ats-1/green.png) Yes |
| SauceLabs (SaaS) | ![](version-1/attachments/upload-file-using-ats-1/red.png) No | ![](version-1/attachments/upload-file-using-ats-1/red.png) No | ![](version-1/attachments/upload-file-using-ats-1/red.png) No |
| Selenium SaaS Agent | ![](version-1/attachments/upload-file-using-ats-1/grey.png) Limited<sup>2</sup> | ![](version-1/attachments/upload-file-using-ats-1/green.png) Yes | ![](version-1/attachments/upload-file-using-ats-1/red.png) No |

<sup>1</sup> This only possible when you prepare your own files on that server. <br>
<sup>2</sup> This depends on where the agent is installed.

**This how-to will teach you how to do the following:**

* Understand why it is difficult to upload files in your app using automated testing.
* Uploading a file using ATS
* The approach for each selenium set-up.

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Complete [How to Create a Test Case](create-a-test-case)
* Know your selenium set-up. (A provider like Browsertack, Local server etc.)

## 3 The process of uploading a file

### 3.1 Introduction

To upload a file in your app, ATS must have access to that file. Selenium simulates a user on a local computer. When ATS gives the command to upload a file, it provides a file path to the file you want to upload. Since there are three different selenium setups there are also three different situations.

1. You use selenium on a local server. This means selenium has no access to your local files. But you can add these files to the server or create a set of generic test files for that server.

1. You use Selenium SaaS. This means selenium has no access to your local files unless you use an agent. When you use the agent, situation 1 applies. If you do not use an agent the selenium SaaS creates a VM session for each test case you run. This means there are no constant values like on your local selenium server. Some Selenium SaaS providers upload a generic set of test files into each VM session that you can use in your test case. In the quick summary in the [Introduction](#1Introduction) chapter you see which selenium SaaS provides these files.

1. You use a Selenium SaaS agent. ATS executes the test on the machine you installed the agent. In most cases this is a server inside your network. ATS can find all the files on this machine.

### 3.2 Uploading a file using ATS

ATS has a standard action for uploading files into your Mendix app.  The  [Set File Manager](../refguide-ats-1/set-file-manager)  action uploads a file from the local computer into the app using a file path. As explained earlier the file must be on the local machine for this to work.

_The Set File Manager action_

![](version-1/attachments/upload-file-using-ats-1/set-file-manager-action.png)

A possible filepath is:

C:\users\ats\documents\receipt-1.png

_File Uploader widget in the app_

![](version-1/attachments/upload-file-using-ats-1/file-uploader-widget-app.png)

### 3.3 Advice

All the different selenium set ups have different possibilities. We advise that if you want to test the uploading of files in your Mendix app, you must use a generic test file set. Create a set of files to use in your tests and make sure that your selenium set up has access to that.

| Selenium Set Up | Advice |
| :-------------- | :----- |
| Local Selenium Server (Docker) | Put all the generic files a test folder on your server. |
| Selenium SaaS | Depends on the chosen provider. |
| Selenium SaaS Agent | Install the agent on a server with your Mendix App. Also put the generic test files there. |

## 4 Uploading a file using Local Selenium Server (Docker)

When testing using a local selenium server. ATS executes the test on that server. The _Set File Manager_ action only has access to the files on that server. You can create a generic set of test files or just add files to the server and use them in your tests.

## 5 Uploading a file in Browserstack (SaaS)

When testing using the Browserstack. ATS executes the test against a new VM session everytime. So every run gets a new VM session and afterwards Browserstack deletes the entire session. With this set up it is not possible to upload your own files. Browserstack does provide a large set of test files that they upload in each VM session. You use the _Set File Manager_ action to achieve this.

Those files are always present so you don't have to change the filepath everytime.

You can find the Browserstack test files [here](https://raw.githubusercontent.com/mendix/docs/content/howtos/version-1/selenium-files/browserstack-test-files.md).

{{% alert type="info" %}}

These files are possibly outdated and not maintained by Mendix. For the latest version please contact Browserstack.

{{% /alert %}}

## 6 Uploading a file with a Selenium SaaS agent

When you use a Selenium SaaS provider you can also use their agent. Each provider gives access to an agent that allows you to test on a local machine. In the _Set File Manager_ action, you can provide the filepath. This filepath depends on where you activated the local machine. Either a local server or a local computer.