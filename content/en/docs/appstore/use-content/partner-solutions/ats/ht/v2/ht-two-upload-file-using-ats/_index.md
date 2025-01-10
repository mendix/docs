---
title: "Upload a File in Your App Using ATS"
url: /appstore/partner-solutions/ats/ht-two-upload-file-using-ats/
description: "Describes how to upload a file in your app using ATS and the restrictions it has."
---

## Introduction {#introduction}

This how-to explains how to upload a file in your app using ATS. You have some test situations in which you must upload a file to finish that test situation. During manual testing, you upload this file from your local computer into your app. ATS works similar, the only difference is that the local computer is your Selenium hub.

This is regarding file uploads by ATS.

Quick summary:

| Selenium Setup | Uploading your own file | Uploading a file | Uploading possible? |
| :-------------- | :---------------------- | :--------------- | :------------------ |
| Local Selenium Server (Docker) | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/grey.png" class="no-border" >}} Limited<sup>1</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/green.png" class="no-border" >}} Yes | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/green.png" class="no-border" >}} Yes |
| BrowserStack (SaaS) | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/red.png" class="no-border" >}} No | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/green.png" class="no-border" >}} Yes | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/green.png" class="no-border" >}} Yes |
| Sauce Labs (SaaS) | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/red.png" class="no-border" >}} No | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/red.png" class="no-border" >}} No | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/red.png" class="no-border" >}} No |
| Selenium SaaS Agent | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/grey.png" class="no-border" >}} Limited<sup>2</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/green.png" class="no-border" >}} Yes | {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/red.png" class="no-border" >}} No |

<small><sup>1</sup> This only possible when you prepare your own files on that server. <br>
<sup>2</sup> This depends on where the agent is installed.</small>

This how-to teaches you how to do the following:

* Understand why it is difficult to upload files in your app using automated testing
* Uploading a file using ATS
* The approach for each Selenium setup

## Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Complete [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)
* Know your Selenium setup (a provider like Browsertack, local server, etc.)

## Uploading a File

### Introduction

To upload a file in your app, ATS must have access to that file. Selenium simulates a user on a local computer. When ATS gives the command to upload a file, it provides a file path to the file you want to upload. Since there are three different Selenium setups, there are also three different situations.

The first situation is that you use Selenium on a local server. This means Selenium has no access to your local files. But you can add these files to the server or create a set of generic test files for that server.

The second situation is that you use Selenium SaaS. This means Selenium has no access to your local files unless you use an agent. When you use the agent, situation 1 applies. If you do not use an agent the Selenium SaaS creates a VM session for each test case you run. This means there are no constant values like on your local Selenium server. Some Selenium SaaS providers upload a generic set of test files into each VM session that you can use in your test case. In the quick summary in [1 Introduction](#introduction) chapter you see which Selenium SaaS provides these files.

The third situation is that you use a Selenium SaaS agent. ATS executes the test on the machine on which you installed the agent. In most cases this is a server inside your network. ATS can find all the files on this machine.

### Uploading a File Using ATS

ATS has a standard action for uploading files into your Mendix app. The [Set File Manager](/appstore/partner-solutions/ats/rg-one-set-file-manager/) action uploads a file from the local computer into the app using a file path. As explained earlier the file must be on the local machine for this to work.

*The Set File Manager action*

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/set-file-manager.png" class="no-border" >}}

A possible filepath is:

C:\users\ats\documents\receipt-1.png

*File Uploader widget in the app*

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-upload-file-using-ats/file-uploader-widget-app.png" class="no-border" >}}

### Advice

Each Selenium setup has different possibilities. We advise that if you want to test the uploading of files in your Mendix app, you must use a generic test file set. Create a set of files to use in your tests and make sure that your Selenium setup has access to it.

| Selenium Setup | Advice |
| :-------------- | :----- |
| Local Selenium Server (Docker) | Put all the generic files a test folder on your server. |
| Selenium SaaS | Depends on the chosen provider. |
| Selenium SaaS Agent | Install the agent on a server with your Mendix app. Also put the generic test files there. |

## Uploading a File Using a Local Selenium Server (Docker)

When testing using a local Selenium server, ATS executes the test on that server. The *Set File Manager* action only has access to the files on that server. You can create a generic set of test files or just add files to the server and use them in your tests.

## Uploading a File in BrowserStack (SaaS)

When testing using the BrowserStack, ATS executes the test against a new VM session every time. So every run gets a new VM session and afterwards BrowserStack deletes the entire session. With this setup it is not possible to upload your own files. BrowserStack does provide a large set of test files that they upload in each VM session. You can use the Set File Manager action to achieve this.

Those files are always present so you don't have to change the filepath every time.

You can find the BrowserStack test files [here](/appstore/partner-solutions/ats/ht-two-browserstack-test-files/).

{{% alert color="info" %}}
These files are possibly outdated and not maintained by Mendix. For the latest version please contact BrowserStack.
{{% /alert %}}

## Uploading a File with a Selenium SaaS Agent

When you use a Selenium SaaS provider you can also use their agent. Each provider gives access to an agent that allows you to test on a local machine. In the *Set File Manager* action, you can provide the filepath. This filepath depends on where you activated the local machine. Either a local server or a local computer.

## Next Up

You now learned how to upload a file and if it is possible with your Selenium set up. The next how-to is [How to Assert Data Grid Rows](/appstore/partner-solutions/ats/ht-two-assert-datagrid-rows/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.
