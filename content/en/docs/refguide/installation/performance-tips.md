---
title: "Performance tips"
url: /refguide/performance-tips/
category: "Installation"
weight: 20
description: "Presents performance tips to Studio Pro."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document presents suggestions that can help improve Studio Pro performance.

## 2 Basic

Simple actions you can take to improve your experience with Studio Pro.

### 2.1 Update Studio Pro to the latest version (LTS)

Update your Studio Pro to the LTS version, Mendix is constantly releasing improvements in all supported major versions.

### 2.2 Software

* Use a Windows version currently listed on the [System Requirements](/refguide9/system-requirements/)
* Keep Windows updated

### 2.2 Hardware

Check if your hardware meets the [System Requirements](/refguide9/system-requirements/).

Consider installing the Operating System (OS), Studio Pro, and storing the Mendix Apps in a solid-state drive (SSD).

Additionally, don't run your solution from a USB drive. Copy it to your hard disk drive (HDD) or SSD.

#### 2.2.1 Try enabling software rendering mode

Hardware acceleration in some exceptional cases can cause some errors when rendering desktop applications when that is the case, we can recommend users enable Software Rendering instead.

In Studio Pro, navigate to the menu **Preference** > **Work Environment**, then check the option "Enable software rendering mode" and restart Studio Pro. After restarting Studio Pro, check if you notice improvements, otherwise preferably restore the default value of this setting.

### 2.3 Running Studio Pro on Parallels?

* Store your apps in the Virtual Machine (VM) local disk "c:\"
* Run Parallels in full-screen mode instead of Coherence mode

## 3 Advanced

These tips are recommended if you are an advanced user with admin privileges to make these changes in your configuration.

### 3.1 Configuring Windows Defender

Add studiopro.exe to the ignored processes list, and the apps folders, and the installation folder to the ignored list of folders of Windows Defender (and other antivirus software).