---
title: "Use Calypso"
parent: "atlas-ui"
menu_order: 70
tags: ["Atlas", "UI", "UX", "user experience"]
---

## 1 Introduction

Calypso is a tool which allows you to customize your Mendix apps. Designers and front-enders, Mac users and Windows users — everyone can easily use this tool without installing any external dependencies. Everything is packaged inside Calypso. You simply need to install Calypso, choose your Mendix app, and start customizing.

## 2 Prerequisites

* Download Calypso from its [GitHub repository](**LINK HERE PLZ**)

## 2 Calypso Features

* Dark mode
* Checks Sass files for errors
* Compiles Sass files to CSS
* Shows notifications on error
* Moves watched (compiled) files to deployment folder (**todo which is it**?)
* Injects Sass files in browser for instant changes


## 3 Setting Up Calypso

1. Install Calypso.
2. After you opened the app you see a couple of configurations. First of all, select the hostname or host ip on which your Mendix app is running. If you are using Windows, this will likely be localhost. If you are using another Operating System with Windows as Virtual Machine, you should look up the IP of this Virtual Machine, or as an alternative, install Calypso on the Virtual Machine and choose localhost.
3. Next up is the port. A Mendix app normally runs on port 8080. However, if you are running multiple Mendix apps, or changed this configuration for another reason, the port can be different. You can find the port you need by going to _Project 'YourProjectName'_ > _Settings_. Here you will see the used port at the default configuration.
4. After this we need to configure the Apps Collection folder. This is the folder in which all of your Mendix apps are located. This is mainly meant for switching in an easy way between apps. 
5. The App Folder would be the folder of your Mendix app.
6. At last you can specify which files you want to be processed by Calypso. Most people will only need the *theme/styles* path. However, when you are building custom error pages, or are using Javascript on your pages, the other paths could be needed.