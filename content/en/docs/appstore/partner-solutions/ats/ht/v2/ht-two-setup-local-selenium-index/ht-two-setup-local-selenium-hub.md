---
title: "Set Up a Local Selenium Hub"
url: /appstore/partner-solutions/ats/ht-two-setup-local-selenium-hub/
description: "Describes how to set up a local Selenium hub."
---

## Introduction

This how-to shows you an example of a simple installation of a Selenium hub with a Google Chrome/Mozilla Firefox node on a Windows machine. For the official documentation go to: [https://www.seleniumhq.org/projects/](https://www.seleniumhq.org/projects/)

{{% alert color="info" %}}
Mendix does not deliver support for local Selenium solutions. 
{{% /alert %}}

## Prerequisites

The following components are needed:

* Install Java on your machine [https://java.com](https://java.com)
* Install Chrome and Firefox on your machine
* Your machine should allow connections from ATS on port 4444
* From version 2.6, ATS uses the Selenium 3.8.1 API; therefore, using this version of Selenium is recommended

## Downloading Selenium Server

The following steps describe how to download the Selenium server:

1. Create a folder on your disk (for example, *C:\Selenium*).
2. Download [Selenium Server standalone version 3.8.1](https://selenium-release.storage.googleapis.com/3.8/selenium-server-standalone-3.8.1.jar) and place it in the folder

## Downloading the Latest Chrome and Gecko (Firefox) Drivers

The following steps describe how to download the latest Chrome and Gecko (Firefox) drivers:

1. With the following link you can download the latest Chrome driver:[https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads) (*chromedriver_win32.zip*)
2. With the following link you can download the latest Gecko driver: [https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases) (Make sure it matches the version (win32bits or win64bits) of Firefox you installed on the machine).
3. Place the unzipped items in the same folder as the Selenium jar.

## Starting the Selenium Hub

The following steps describe how to start the Selenium hub: 

1. Go to the folder and open a command box (<kbd>Shift<kbd> + right-click and choose the **Open command** window here)
2. Start your Selenium hub (version number can be different):

    ```powershell
    java -jar selenium-server-standalone-3.8.1.jar -role hub
    ```

    You should see logging like this:

    ```powershell
    C:\Selenium>java -jar selenium-server-standalone-3.8.1.jar -role hub
    11:30:27.208 INFO - Selenium build info: version: '3.8.1', revision: '6e95a6684b'
    11:30:27.208 INFO - Launching Selenium Grid hub
    2018-03-30 11:30:28.130:INFO::main: Logging initialized @2751ms to org.seleniumhq.jetty9.util.log.StdErrLog
    11:30:28.161 INFO - Will listen on 4444
    2018-03-30 11:30:28.286:INFO:osjs.Server:main: jetty-9.4.7.v20170914
    2018-03-30 11:30:28.333:INFO:osjs.session:main: DefaultSessionIdManager workerName=node0
    2018-03-30 11:30:28.333:INFO:osjs.session:main: No SessionScavenger set, using defaults
    2018-03-30 11:30:28.349:INFO:osjs.session:main: Scavenging every 600000ms
    2018-03-30 11:30:28.349:INFO:osjsh.ContextHandler:main: Started o.s.j.s.ServletContextHandler@667a738{/,null,AVAILABLE}
    2018-03-30 11:30:28.395:INFO:osjs.AbstractConnector:main: Started ServerConnector@2b546384{HTTP/1.1,[http/1.1]}{0.0.0.0:4444}
    2018-03-30 11:30:28.395:INFO:osjs.Server:main: Started @3014ms
    11:30:28.395 INFO - Nodes should register to http://10.20.101.63:4444/grid/register/
    11:30:28.395 INFO - Selenium Grid hub is up and running
    ```

3. Check with the following link if the hub works: `http://localhost:4444/grid/console`.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-setup-local-selenium-index/ht-two-setup-local-selenium-hub/grid_hub.png" class="no-border" >}}

    Congratulations, your local Selenium hub is running.

## Configuring and Starting Your Chrome/Firefox Node

The following steps describe how to start the node with three Chrome and three Firefox browsers:

1. Go to the folder and open a command box (Shift+Right click and choose the **Open command** window here)
2. Start the node:

    ```powershell
    java -Dwebdriver.chrome.driver=C:\Selenium\chromedriver.exe  -Dwebdriver.firefox.driver=C:\Selenium\geckodriver.exe -jar selenium-    server-standalone-3.8.1.jar -role node -hub http://localhost:4444/grid/register -browser "browserName=firefox, maxInstances=3"  -browser "browserName=chrome, maxInstances=3"
    ```

    The output should look something like this:

    ```powershell
    C:\Selenium>java -Dwebdriver.chrome.driver=C:\Selenium\chromedriver.exe  -Dwebdriver.firefox.driver=C:\Selenium\geckodriver.exe -   jar selenium-server-standalone-3.8.1.jar -role node -hub http://localhost:4444/grid/register -browser "browserName=firefox,    maxInstances=3"  -browser "browserName=chrome, maxInstances=3"
    13:12:18.198 INFO - Selenium build info: version: '3.8.1', revision: '6e95a6684b'
    13:12:18.198 INFO - Launching a Selenium Grid node
    2018-03-30 13:12:19.026:INFO::main: Logging initialized @2677ms to org.seleniumhq.jetty9.util.log.StdErrLog
    13:12:19.073 INFO - Using `new FirefoxOptions()` is preferred to `DesiredCapabilities.firefox()`
    13:12:19.088 INFO - Using `new ChromeOptions()` is preferred to `DesiredCapabilities.chrome()`
    13:12:19.088 INFO - Using `new EdgeOptions()` is preferred to `DesiredCapabilities.edge()`
    13:12:19.088 INFO - Driver class not found: com.opera.core.systems.OperaDriver
    13:12:19.088 INFO - Using `new OperaOptions()` is preferred to `DesiredCapabilities.operaBlink()`
    13:12:19.088 INFO - Using `new SafariOptions()` is preferred to `DesiredCapabilities.safari()`
    13:12:19.088 INFO - Driver class not found: org.openqa.selenium.phantomjs.PhantomJSDriver
    13:12:19.119 INFO - Driver provider class org.openqa.selenium.safari.SafariDriver registration is skipped:
    registration capabilities Capabilities {browserName: safari, platform: MAC, version: } does not match the current platform WIN8
    13:12:19.166 INFO - Using `new ChromeOptions()` is preferred to `DesiredCapabilities.chrome()`
    13:12:19.182 INFO - Using `new EdgeOptions()` is preferred to `DesiredCapabilities.edge()`
    13:12:19.182 INFO - Using `new FirefoxOptions()` is preferred to `DesiredCapabilities.firefox()`
    13:12:19.182 INFO - Using `new OperaOptions()` is preferred to `DesiredCapabilities.operaBlink()`
    13:12:19.182 INFO - Using `new SafariOptions()` is preferred to `DesiredCapabilities.safari()`
    13:12:19.198 INFO - Using the passthrough mode handler
    2018-03-30 13:12:19.229:INFO:osjs.Server:main: jetty-9.4.7.v20170914
    2018-03-30 13:12:19.260:WARN:osjs.SecurityHandler:main: ServletContext@o.s.j.s.ServletContextHandler@1190200a{/,null,STARTING}   has uncovered http methods for path: /
    2018-03-30 13:12:19.276:INFO:osjsh.ContextHandler:main: Started o.s.j.s.ServletContextHandler@1190200a{/,null,AVAILABLE}
    2018-03-30 13:12:19.307:INFO:osjs.AbstractConnector:main: Started ServerConnector@2f465398{HTTP/1.1,[http/1.1]}{0.0.0.0:5555}
    2018-03-30 13:12:19.307:INFO:osjs.Server:main: Started @2961ms
    13:12:19.307 INFO - Selenium Grid node is up and ready to register to the hub
    13:12:19.338 INFO - Starting auto registration thread. Will try to register every 5000 ms.
    13:12:19.338 INFO - Registering the node to the hub: http://localhost:4444/grid/register
    13:12:19.416 INFO - The node is registered to the hub and ready to use
    ```

3. Check in the console whether your Selenium hub node is active `http://localhost:4444/grid/console`:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-setup-local-selenium-index/ht-two-setup-local-selenium-hub/grid_nodes.png" class="no-border" >}}

## Starting Testing

You can start testing by sending your test script to `http://yourmachinenameorIP:4444/wd/hub`.

{{% alert color="warning" %}}
Make sure it is reachable from the outside!
{{% /alert %}}

## Optional: Starting Selenium Hub and Node with JSON Configuration File

This step is recommended because you can easily change options (for example timeout) in the JSON files.

The following steps describe how to start the selenium hub and the node with a JSON configuration file:

1. Create JSON files in the created folder:

    *gridHubConfig.json*:

    ```json
       {
        "port": 4444,
        "newSessionWaitTimeout": -1,
        "servlets" : [],
        "withoutServlets": [],
        "custom": {},
        "capabilityMatcher": "org.openqa.grid.internal.utils.DefaultCapabilityMatcher",
        "throwOnCapabilityNotPresent": true,
        "cleanUpCycle": 5000,
        "role": "hub",
        "debug": false,
        "browserTimeout": 0,
        "timeout": 1800
       }
    ```

    *node.json*:

    ```json
       {
        "capabilities":
        [
       {
        "browserName": "chrome",
        "maxInstances": 5,
        "seleniumProtocol": "WebDriver"
       },
       {
        "browserName": "firefox",
        "marionette": true,
        "maxInstances": 5,
        "seleniumProtocol": "WebDriver"
       }
        ],
        "proxy": "org.openqa.grid.selenium.proxy.DefaultRemoteProxy",
        "maxSession": 5,
        "port": 5555,
        "register": true,
        "registerCycle": 5000,
        "hub": "http://localhost:4444",
        "nodeStatusCheckTimeout": 5000,
        "nodePolling": 5000,
        "role": "node",
        "unregisterIfStillDownAfter": 60000,
        "downPollingLimit": 2,
        "debug": false,
        "servlets" : [],
        "withoutServlets": [],
        "custom": {}
        }
    ```

2. Start the hub:

    ```powershell
    java -jar selenium-server-standalone-3.8.1.jar -role hub -hubConfig gridHubConfig.json
    ```

3. Start the node:

    ```powershell
    java -Dwebdriver.chrome.driver=C:\Selenium\chromedriver.exe -Dwebdriver.firefox.driver=C:\Selenium\geckodriver.exe -jar selenium- server-standalone-3.8.1.jar -role node -nodeConfig node.json   
    ```

## Optional: Batching File to Start Up Everything at Once

The following steps describe how to create a batch file to start up everything at once:

1. Create start.bat:

    ```batch
    start /B java -jar C:\Selenium\selenium-server-standalone-3.8.1.jar -role hub -hubConfig C:\Selenium \gridHubConfig.json
    timeout /t 10
    start /B java -Dwebdriver.chrome.driver=C:\Selenium\chromedriver.exe -Dwebdriver.firefox.driver=C:\Selenium\geckodriver.exe -jar C:\Selenium\selenium-server-standalone-3.8.1.jar -role node -nodeConfig C:\Selenium\node.json
    exit
    ```

2. Start from the cmd box:

    ```powershell
    start.bat
    ```

Congratulations you have finished setting up a local Selenium hub. The next how-to is [How to Set Up a Local Docker Selenium Hub](/appstore/partner-solutions/ats/ht-two-setup-local-docker-selenium-hub/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.
