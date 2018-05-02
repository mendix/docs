---
title: "Setup a local Selenium solution"
parent: "setup-local-selenium-index-2"
description: "Describes the options to setup a local selenium solution."
tags: ["ATS", "testing", "Selenium hub"]
---

# Setting up a local Selenium Solution

This How-to describes a few possible local Selenium solutions and contains links to documentation that contain a small example on how to set up each one. Before reading these documents keep the following points in mind:

- These solutions are all under heavy development and new versions are released on a regular base. The documentation contains examples and we recommend using the official documentation.
- ATS 2 is running in the Mendix cloud. When running a local Selenium solution, ATS should be able to communicate with the machine on port 4444. In most cases, this means your network department has to arrange something to make this work.
- **Security warning!!!:** By default, none of the described solutions use SSL or any form of authentication. You might, for example, want to use a web server as a frontend to make SSL and authentication possible. This is not covered in the How-to's and it's the responsibility for the party that installs the Selenium solution.
- Docker Selenium and Selenoid are two opensource projects based on Selenium that we cover in this How-to. There are many more, but we limit us to these two. 
- Support for open source software could be limited or slower, compared to SaaS Selenium providers.

{{% alert type="info" %}}
 Note: Mendix does not deliver support for local Selenium solutions. 
  {{% /alert %}}

## 1. Setup Local Selenium hub (SeleniumHQ) ##

### Official website
The official website of the Selenium hub (SeleniumHQ) is [https://www.seleniumhq.org/](https://www.seleniumhq.org/)

### How to set up the selenium solution
The following document describes an example of how to setup this selenium solution: [How to setup a Local Selenium hub](setup-local-selenium-hub-2)

### Characteristics of the selenium solution
- Live-view only on the machine where Selenium is installed
- No (out-of-the-box) video recording

## 2. Setup Local Docker Selenium hub (Docker Selenium) ##

### Official website
The official GitHub page of the Docker Selenium hub (Docker Selenium) is [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

### How to set up the selenium solution
The following document describes an example of how to setup this selenium solution: [How to setup a Local Docker Selenium hub](setup-local-docker-selenium-hub-2)

### Characteristics of the selenium solution
- Browsers run in Linux containers
- Live-view possible with debug images and VNC (viewer)
- No (out-of-the-box) video recording

## 3. Setup Local Selenoid hub (Aerokube) ##

### Official website
The official website of the Selenoid hub (Aerokude) is [http://aerokube.com/](http://aerokube.com/)

### How to set up the selenium solution
The following document describes an example of how to setup this selenium solution: [How to setup Local Selenoid hub](setup-local-selenoid-hub-2)

### Characteristics of the selenium solution
- Selenoid is a powerful Go implementation of original Selenium hub code. It is using Docker to launch browsers.
- While ATS works fine with Selenoid (since it's based on the official Selenium code) and it even supports parallel testing on the Selenoid hub we can't guarantee that ATS supports it in the future.
- Browsers run in Linux containers
- Live-view with a separate to be installed portal. Works with debugging browser images and VNC.
- It has an out-of-the-box video recording option

## 4. Why you would prefer a SaaS-solution as Selenium solution (like Browserstack or Saucelabs) ##

The following points describe why a SaaS-solution is preferred above a local Selenium solution:
- Active support team
- Secures your connections
- Out-of-the-box video recording and live-view in your personal portal
- Always the latest browsers and drivers
- Out-of-the-box tunneling solution for local testing
- You can easily test on different OS's and browser versions in any combination you like
- No need to maintain your own servers (OS patches, software updates, network, etc.)
- You can easily scale up
