---
title: "Set Up a Local Docker Selenium Hub"
parent: "setup-local-selenium-index-2"
description: "Describes the options to setup a local selenium solution."
tags: ["ATS", "testing", "Selenium hub"]
---

## 1 Introduction

This how-to shows you an example of a simple setup of a Docker Selenium hub with a Chrome and a Firefox node on a Linux machine. The Docker works on a Windows machine as well, but the commands and configuration could be different. For the official project go to: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

{{% alert type="info" %}}
Mendix does not deliver support for the local Selenium solutions. 
{{% /alert %}}

## 2 Prerequisites

The following components are needed:
* Some basic docker and docker-compose knowledge
* A machine with the latest versions of **docker** and **docker-compose** installed
* Your machine should allow connections from ATS on port 4444
* Since version 2.6, ATS uses the Selenium 3.8.1 API. That's why we recommend using this version of Selenium for the docker images as well


## 3 Installing Your Hub and Nodes with Docker-Compose

The following steps describe how to install your hub and nodes with Docker-Compose:

1. Create a folder or directory to place your docker-compose file
2. Create a docker-compose.yml in your folder/directory: 

    ```
    hub: 
     image: selenium/hub:3.8.1
     environment:
       - TZ=Europe/Amsterdam
       - GRID_TIMEOUT=90
     ports:
       - 4444:4444
    
    firefox:
     image: selenium/node-firefox:3.8.1
     links:
       - hub:hub
     environment:
       - TZ=Europe/Amsterdam
       - SCREEN_WIDTH=1600
       - SCREEN_HEIGHT=900
    
    chrome:
     image: selenium/node-chrome:3.8.1
     links:
       - hub:hub
     environment:
       - TZ=Europe/Amsterdam
       - SCREEN_WIDTH=1600
       - SCREEN_HEIGHT=900
     volumes:
       - /dev/shm:/dev/shm
     privileged: true
    ```

3. Open a console and give the following command from the folder/directory where you placed your docker-compose.yml:

   ```
   sudo docker-compose up -d
   ```

The first time it will start pulling the images from the Docker hub.

4. After the process has started, you can check the status with the following commands:

   ```
   sudo docker-compose ps

         Name                 Command           State           Ports         
   ---------------------------------------------------------------------------
   docker_chrome_1    /opt/bin/entry_point.sh   Up                            
   docker_firefox_1   /opt/bin/entry_point.sh   Up                            
   docker_hub_1       /opt/bin/entry_point.sh   Up      0.0.0.0:4444->4444/tcp
   ```

5.  Check with the following link if the hub works: `http://localhost:4444/grid/console`. Note: You can also replace localhost with the server name or IP-address of the Docker host.

   ![](attachments/setup-local-selenium-index-2/setup-local-docker-selenium-hub-2/docker_grid.png)

   Congratulation, your local Selenium hub is running.

## 4 Starting Testing

You can start testing by sending your test script to: `http://yourmachinenameorIP:4444/wd/hub`. Make sure it is reachable from the outside!

## 5 Optional: Scaling Your Nodes

Each node has one browser, so if you need more nodes of a certain browser, you can scale with docker-compose. With multiple nodes you can run tests in parallel. For example, if you want 3 Chrome browsers:

   ```
   sudo docker-compose up -d --scale chrome=3
   docker_hub_1 is up-to-date
   Starting docker_chrome_1 ... 
   Starting docker_chrome_1 ... done
   Creating docker_chrome_2 ... done
   Creating docker_chrome_3 ... done

   sudo docker-compose ps
         Name                 Command           State           Ports         
   ---------------------------------------------------------------------------
   docker_chrome_1    /opt/bin/entry_point.sh   Up                            
   docker_chrome_2    /opt/bin/entry_point.sh   Up                            
   docker_chrome_3    /opt/bin/entry_point.sh   Up                            
   docker_firefox_1   /opt/bin/entry_point.sh   Up                            
   docker_hub_1       /opt/bin/entry_point.sh   Up      0.0.0.0:4444->4444/tcp
   ```

{{% alert type="info" %}}
By default the hub only accepts a maximum of 5 sessions to run in parallel at a time, even if you configure more, see the official documentation.
{{% /alert %}}

## 6 Optional: Installing a Hub with "Live-view" Through VNC

If you want to watch your test case live for debugging purpose, you can use the following docker-compose.yml:

    ```
    hub: 
     image: selenium/hub:3.8.1
     environment:
       - TZ=Europe/Amsterdam
       - GRID_TIMEOUT=90
     ports:
       - 4444:4444
    
    firefox:
     image: selenium/node-firefox-debug:3.8.1
     links:
       - hub:hub
     environment:
       - TZ=Europe/Amsterdam
       - SCREEN_WIDTH=1600
       - SCREEN_HEIGHT=900
     ports:
       - 5901:5900
    
    chrome:
     image: selenium/node-chrome-debug:3.8.1
     links:
       - hub:hub
     environment:
       - TZ=Europe/Amsterdam
       - SCREEN_WIDTH=1600
       - SCREEN_HEIGHT=900
     ports:
       - 5900:5900
     volumes:
       - /dev/shm:/dev/shm
     privileged: true
     ```

Some side notes in case you follow this step:
* Notice that you are using debug versions and you are mapping the network ports of the browser images 
* You need a VNC-client like Tigervnc, VNC Viewer for Google Chrome or any other favorite client of your choice
* For Chrome you use as an address: localhost:5900 (or machinename/ip:5900) with password "secret"
* For Firefox you use as an address: localhost:5901 (or machinename/ip:5901) with password "secret"
* You cannot scale using this configuration
* Be aware that VNC is not a secure protocol, you might not want to open this port for the world

Congratulations you have finished setting up a local docker Selenium hub. The next how-to is [How to setup a Local Selenoid hub](setup-local-selenoid-hub-2). You find an overview of all the how-tos and the structure on the [ATS 2 How-to's](ht-version-2) page. We advise you to follow the predefined structure.
