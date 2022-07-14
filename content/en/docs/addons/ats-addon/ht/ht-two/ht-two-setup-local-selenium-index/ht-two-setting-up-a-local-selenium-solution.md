---
title: "Set Up a Local Selenium Solution"
url: /addons/ats-addon/ht-two-setting-up-a-local-selenium-solution/
description: "Describes the options to set up a local selenium solution."
tags: ["ATS", "testing", "Selenium hub"]
---

## 1 Introduction

This how-to describes a few possible local Selenium solutions and contains links to the documentation with simple examples on how to set up each solution. Before reading these documents, pay attention to the following:

* These solutions are all under heavy development, and new versions are released on a regular base. The documentation contains examples and we recommend using the official documentation.
* ATS 2 is running in the Mendix cloud. When running a local Selenium solution, ATS should be able to communicate with the machine on port 4444. In most cases, this means your network department has to arrange something to make this work.
* **Security warning!!!** By default, none of the described solutions use SSL or any form of authentication. You might, for example, want to use a web server as a front end to make SSL and authentication possible. This is not covered in the How-tos and it's the responsibility of the party that installs the Selenium solution.
* Docker Selenium and Selenoid are two open-source projects based on Selenium that we cover in this How-to. There are many more, but we limit us to these two. 
* Support for open-source software could be limited or slower, compared to SaaS Selenium providers.

{{% alert color="info" %}}
Mendix does not deliver support for local Selenium solutions. 
{{% /alert %}}

## 2 Setting Up Local Selenium Hub (SeleniumHQ) 

### 2.1 Official Website

The official website of the Selenium hub (SeleniumHQ) is [https://www.seleniumhq.org/](https://www.seleniumhq.org/)

### 2.2 Setting Up the Selenium Solution

For an example of how to set up this Selenium solution, see: [How to Set Up a Local Selenium Hub](/addons/ats-addon/ht-two-setup-local-selenium-hub/)

### 2.3 Characteristics of the Selenium Solution

Characteristics of the Selenium solution are the following:
* Live-view possible only on the machine where Selenium is installed
* No (out-of-the-box) video recording

## 3 Setting Up Local Docker Selenium Hub (Docker Selenium)

### 3.1 Official Website

The official GitHub page of the Docker Selenium hub (Docker Selenium) is [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

### 3.2 Setting up the Selenium Solution

For an example of how to set up this Selenium solution, see: [How to Set Up a Local Docker Selenium hub](/addons/ats-addon/ht-two-setup-local-docker-selenium-hub/)

### 3.3 Characteristics of the Selenium Solution

Characteristics of the Selenium solution are the following:

* Browsers run in Linux containers
* Live-view possible with debug images and VNC (viewer)
* No (out-of-the-box) video recording

## 4 Setting Up Local Selenoid Hub (Aerokube)

### 4.1 Official Website

The official website of the Selenoid hub (Aerokude) is [http://aerokube.com/](http://aerokube.com/)

### 4.2 Setting Up the Selenium Solution

For an example of how to set up this Selenium solution, see: [How to Set Up a Local Selenoid Hub](/addons/ats-addon/ht-two-setup-local-selenoid-hub/)

### 4.3 Characteristics of the Selenium Solution

Characteristics of the Selenium solution are the following:

* Selenoid is a powerful Go implementation of the original Selenium hub code. It is using Docker to launch browsers
* While ATS works fine with Selenoid (since it's based on the official Selenium code) and it even supports parallel testing on the Selenoid hub we can't guarantee that ATS supports it in the future
* Browsers run in Linux containers
* Live-view with a separate to be installed portal. Works with debugging browser images and VNC.
* It has an out-of-the-box video recording option

## 5 Why You Would Prefer a SaaS-solution as Selenium Solution (Like Browserstack or Saucelabs)

The following reasons describe why a SaaS-solution is preferred above a local Selenium solution:

* Active support team
* Secures your connections
* Out-of-the-box video recording and live-view in your personal portal
* Always the latest browsers and drivers
* Out-of-the-box tunneling solution for local testing
* You can easily test on different OS's and browser versions in any combination you like
* No need to maintain your own servers (OS patches, software updates, network, etc.)
* You can easily scale up
