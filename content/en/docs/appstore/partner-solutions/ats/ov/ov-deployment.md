---
title: "Deployment Options"
url: /appstore/partner-solutions/ats/ov-deployment/
weight: 3
---

## Introduction

This document describes the supported deployment scenarios for the Application Test Suite (ATS).

Every customer situation is different. We want to make sure there's a convenient deployment option for ATS in all scenarios. The main determinant is where your app is running, either in the cloud or on-premises. The second determinant is the Selenium component, which either can run in the cloud or be hosted on-premises by the customer. For each scenario, we need to ensure secure and reliable communication between the components.

All in all, there are four different supported deployment scenarios. This document describes and compares them.

Please be aware that not every option supports the full set of features. Take a look at [Comparing the Options](#comparing-the-options) to understand the differences.

## Components

Every ATS deployment consists of four components: the ATS application, the Mendix Portal, a Selenium Runner, and your Application Under Test (AUT).

The following diagram illustrates how the components are connected:

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/ATS_architecture_simplified.png" alt="ATS simplified architecture" class="no-border" >}}

### Application Test Suite (ATS) Application

The ATS application provides the GUI to create, manage, and run your tests.

### Mendix Portal

The Mendix Portal is provided as a cloud service by Mendix. It hosts your projects, user stories, and other related data that is also used by the ATS application.

### Selenium Runner

The Selenium Runner is used to execute your tests. Once you trigger a test run from ATS, ATS will connect to your Selenium Service provider to start the test. The Selenium Runner then starts the browser and executes the commands that it receives from ATS.

### Application Under Test (AUT)

The AUT is the deployed Mendix application that you want to test.

## Deployment Options

There are three deployment options. The first option with the SaaS Selenium provider is recommended.

### SaaS Selenium Provider

This option is highly recommended for all customers. It supports all current and future features, is easy to set up, annd is maintenance-free (the SaaS provider takes care of that). It also gets the best support.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/deploymentoption_standard.png" alt="SaaS Selenium Option" class="no-border" >}}

### Public App On-Premises

This option is meant for customers who run their app on premises. Since the app runs on premises, it is protected from external access via a firewall. In order to allow the Selenium Runner to access the app, you have to configure your firewall.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/deploymentoption_alternative1.png" alt="Public app on-premise" class="no-border" >}}

### Private App On-Premises

This option is meant for customers who run their app on premises and who don't want to open their firewall for the Selenium Runner. In order to enable communication between the Selenium Runner and your local application, you have to deploy a Selenium Saas Agent in your local network. This agent will establish a VPN tunnel to your Selenium Service Provider and route all traffic between the Selenium Runner and your application.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/deploymentoption_alternative2.png" alt="Private app on-premise" class="no-border" >}}

### Customer-Hosted Selenium

This option is meant for customers who run their app on premises and who also want to run their own Selenium Runner. The challenging part of this option is that the customer needs to set up, maintain, and operate its own Selenium Runner. Because of the large effort this requires, this option should only be a last resort if no other option fits your use case.

{{% alert color="warning" %}}
Selenium is an open-source third-party component and there is no active support from Mendix.
{{% /alert %}}

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/deploymentoption_alternative3.png" alt="Customer hosted Selenium" class="no-border" >}}

Since the Selenium Runner offers fewer features compared to Selenium SaaS Providers, it is not possible to make use of the full ATS feature set.

{{% alert color="warning" %}}
The feature set in this option is limited.
{{% /alert %}}

## Comparing the Options {#comparing-the-options}

Before you pick your option, you need to be aware of the differences. The following two sections will help you to make your choice.

### Features

Feature                       | Standard          | SaaS Selenium Provider | Public App On-Premises        | Private App On-Premises       | Customer-Hosted Selenium
----------------------------- | ----------------- | ---------------------- | ----------------------------- | ----------------------------- | -----------------------------
Test Automation               | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes
Test Recording                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes
OS Selection                  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No       | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No
Responsive Testing            | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No
Multiple Browsers<sup>1</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} All         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} All                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} All                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited<sup>3</sup>
Mobile Testing<sup>2</sup>    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No       | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No
Mendix Platform Integration   | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} All    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} All         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited<sup>4</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited<sup>4</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited<sup>4</sup>
Live View & Video<sup>2</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No
Future Proof<sup>5</sup>      | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes    | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes         | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No

<small><sup>1</sup> Only if supported by ATS.<br />
<sup>2</sup> Feature not available yet.<br />
<sup>3</sup> Additional setup for every browser required.<br />
<sup>4</sup> ATS will integrate with several APIs from Mendix Cloud to improve the testing experience. Since some of these APIs are only available for apps that run in Mendix Cloud, certain features cannot be offered for on-premises apps.<br />
<sup>5</sup> Future features may depend on the functionality offered by Mendix Cloud or the Selenium service providers. They may not be available if you run your app on-premises or host your own Selenium server.</small>

### Setup and Maintenance

The following matrix compares the efforts for setup and maintenance of the different options.

Aspect                                | Standard                   | SaaS Selenium Provider     | Public App On-Premises     | Private App On-Premises     | Customer-Hosted Selenium
------------------------------------- | ---------------------------| -------------------------- | -------------------------- | ----------------------------| ----------------------------
Firewall Setup                        | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No              | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} None<sup>1</sup>| {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} Required          | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} None<sup>1</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} Required
Selenium<sup>2</sup> Runner Setup     | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>3</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>3</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>3</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>3</sup>   | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} Customer responsibility
Selenium<sup>2</sup> SaaS Agent Setup | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No              | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>4</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>4</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} Yes                | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No<sup>4</sup>
Selenium<sup>2</sup> Maintenance      | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No              | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes<sup>3</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes<sup>3</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes<sup>3</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} Customer responsibility
Selenium<sup>2</sup> Support          | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} No              | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes<sup>3</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes<sup>3</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes<sup>3</sup>  | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No

<small><sup>1</sup> A Selenium SaaS Agent with VPN is used to surpass the company network firewall.<br />
<sup>2</sup> Selenium is an open-source third-party component that is not maintained/supported by Mendix.<br />
<sup>3</sup> Provided by your Selenium SaaS provider.<br />
<sup>4</sup> Not required in this option.</small>

### Uploading Files

ATS does not support the uploading of files in every situation. This table presents a summary of the different possibilities:

| Selenium Setup | Uploading Your Own File | Uploading a File | Uploading Possible? |
| :-------------- | :---------------------- | :--------------- | :------------------ |
| Local Selenium Server (Docker) | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited<sup>1</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes |
| BrowserStack (SaaS) | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes |
| Sauce Labs (SaaS) | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/red.png" class="no-border" >}} No |
| Selenium SaaS Agent | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/grey.png" class="no-border" >}} Limited<sup>2</sup> | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes | {{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-deployment/green.png" class="no-border" >}} Yes |

<small><sup>1</sup> This is only possible when you prepare your own files on that server.<br />
<sup>2</sup> This depends on where the agent is installed.</small>

For more information, see [How to Upload a File in Your App Using ATS](/appstore/partner-solutions/ats/ht-two-upload-file-using-ats/).

## Selenium SaaS Subscription

### General Solutions

{{% alert color="warning" %}}
This section presents generic advice on which subscription type you need when using a Selenium SaaS provider. Always look at what fits best for your situation!
{{% /alert %}}

Selenium SaaS providers in general provide the following three solutions:

* **Live testing** – With live testing, you can manually test your application using a virtual machine that resembles a chosen device. This option is not needed for ATS, since it is an automated testing tool. ATS only supports automated browser testing, so this solution is not viable.
* **Automated testing** – With automated testing, you use the Selenium SaaS provider servers to execute your test cases. The provider hosts Selenium/Appium and enables all kind of extras. This is the solution you need when using ATS.
* **Mobile testing** – With mobile testing, you use the Selenium SaaS provider servers to execute your mobile test cases. The providers host Appium and enable all kind of extras. ATS is only for browser testing, so this solution is not viable.

To test your application for desktops and mobile, you need **automated browser testing**.

ATS has two supported Selenium providers (for details, see [Supported Selenium Providers](/appstore/partner-solutions/ats/rg-two-supported-selenium-hub-provider/)). The solutions of these providers are discussed in the next sections.

### BrowserStack Solutions/Products

{{% alert color="warning" %}}
BrowserStack is a third party, so the information displayed here may be out of date! This section is purely to help you understand the different solutions.
{{% /alert %}}

These BrowserStack solutions are compatible with ATS:

* **Automate Pro** – unlimited automated browser testing for desktop sites
    * If you only want to test your application on desktop browsers, you should select this option
    * For more information, see [BrowserStack Automate](https://www.browserstack.com/automate)
* **Automate Mobile** – unlimited automated browser testing for desktop and mobile sites
    * If you want to test your application on desktop and mobile browsers, you should select this option
    * For more information, see [BrowserStack Automate](https://www.browserstack.com/automate)
* **Enterprise** – personalized pricing

For more information on pricing, see [BrowserStack Pricing](https://www.browserstack.com/pricing).

### Sauce Labs Solutions/Products

{{% alert color="warning" %}}
Sauce Labs is a third party, so the information displayed here may be out of date! This section is purely to help you understand the different solutions.
{{% /alert %}}

These Sauce Labs solutions are compatible with ATS:

* **Automated** – limited browser testing for desktop and mobile sites
    * If you want to test your application on desktop and mobile browsers, you should select this option
    * For more information, see [Sauce Labs Automated](https://saucelabs.com/products/web-testing)
* **Unlimited Automated** – unlimited browser testing for desktop and mobile sites
    * If you want to test your application on unlimited desktop and mobile browsers, you should select this option
    * For more information, see [Sauce Labs Automated](https://saucelabs.com/products/web-testing)
* **Enterprise** – personalized pricing

{{% alert color="info" %}}
There is also a difference between virtual machines and real devices, which does not matter for ATS.
{{% /alert %}}

For more information on pricing, see [Sauce Labs Pricing](https://saucelabs.com/pricing).

## Setup Instructions

### Standard

There are no additional steps required to set up the standard option.

### Public App On-Premises

This option requires configuring your firewall in order to allow Selenium to establish a connection to your AUT.

#### Firewall Configuration

The firewall should accept connections from the internet either on port 80 (if you use http) or port 443 (if you use https) and forward to the web server of your Mendix application.

### Private App On-Premises

This option requires you to deploy an agent component on-premise.

#### Agent Setup

The setup of the agents depends on your provider.

Selenium Service | Agent Name          | Setup Instructions
---------------- | ------------------- | ------------------
BrowserStack     | BrowserStack Local  | [Here](https://www.browserstack.com/local-testing)
Sauce Labs        | Sauce Connect Proxy | [Here](https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Sauce+Connect+Proxy)

### Customer-Hosted Selenium {#customer-hosted-selenium}

This option requires you to set up your own Selenium Server on-premises.

{{% alert color="warning" %}}
Selenium is an open-source third-party component and there is no active support from Mendix.
{{% /alert %}}

{{% alert color="info" %}}
Selenium standalone support has been dropped with ATS 2.0. Only Selenium Grid is supported. By following the instructions below, you will set up a Selenium Grid.
{{% /alert %}}

#### Selenium Runner Setup

We provide basic installation instructions for the Selenium Runner based on Docker containers. For details, see [Get Started with Docker](https://docs.docker.com/engine/getstarted/), [Selenium Documentation](https://www.seleniumhq.org/docs/), and [Docker-Selenium](https://github.com/SeleniumHQ/docker-selenium).

{{% alert color="info" %}}
The current ATS version requires Selenium version 3.141.59. If ATS upgrades to a newer Selenium version, the customer is obligated to upgrade its Selenium Runner to the new version as well.
{{% /alert %}}

Before you start, make sure that your server has internet access to download the container images.

1. Install Docker on your server, as described in [Install Docker Engine](https://docs.docker.com/engine/installation/).
2. Install Docker Compose, as described in [Install Docker Compose](https://docs.docker.com/compose/install/).
3. Create a folder called **selenium** in the user's home directory.
4. Change to the folder and create a file called **docker-compose.yml** with this content:

    ```yaml
    seleniumhub:
        image: selenium/hub:3.141.59
        ports:
        - 4444:4444
    
    firefoxnode:
        image: selenium/node-firefox-debug:3.141.59
        ports:
        - 5900
        links:
        - seleniumhub:hub
        environment:
        - SCREEN_HEIGHT=1080
        - SCREEN_WIDTH=1920
        - SCREEN_DEPTH=24
    
    chromenode:
        image: selenium/node-chrome-debug:3.141.59
        ports:
        - 5900
        links:
        - seleniumhub:hub
        environment:
        - SCREEN_HEIGHT=1080
        - SCREEN_WIDTH=1920
        - SCREEN_DEPTH=24
    ```

5. Start up the Selenium grid with this command:

    ```shell
    docker-compose up -d
    ```

6. You now have a grid running on `http://myserver:4444/wd/hub`. Attached to this grid are two nodes: one for Chrome and one for Firefox. You can easily scale by starting new nodes with a simple command. This example will start up a second node for both Firefox and Chrome:

    ```shell
    docker-compose scale firefoxnode=2 chromenode=2
    ```

#### Firewall Configuration

The firewall should accept TCP connections from the internet on port 4444 (the standard port for Selenium Server). This port should forward to your Selenium Server.
