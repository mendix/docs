---
title: "Performance Tips"
url: /refguide/performance-tips/
weight: 50
description: "Presents performance tips for installing and using Studio Pro."
---

## Introduction

This document presents suggestions that can help improve Studio Pro performance.

## Basic

These are simple actions you can take to improve your experience with Studio Pro.

### LTS or MTS Version

Update your Studio Pro to the latest [LTS](/releasenotes/studio-pro/lts-mts/#lts) or [MTS](/releasenotes/studio-pro/lts-mts/#mts) version, as Mendix is constantly releasing improvements in all supported major versions.

### Software

Use a Microsoft Windows version that is currently listed in the [System Requirements](/refguide/system-requirements/#software).

Keep your Microsoft Windows updated.

### Hardware

Ensure your hardware meets the [System Requirements](/refguide/system-requirements/#hardware).

Consider installing the operating system (OS) and Studio Pro and storing your Mendix apps in a solid-state drive (SSD).

Additionally, do not run your solution from a USB drive. Copy it to your hard-disk drive (HDD) or SSD.

#### Software Rendering Mode

In some exceptional cases, hardware acceleration can cause errors when rendering desktop applications. When this occurs, Mendix recommends enabling software rendering.

To do this, navigate to **Preferences** > **Work Environment** and select [Enable software rendering mode](/refguide/preferences-dialog/#rendering). Then, restart Studio Pro. After restarting, check if you notice improvements. If you do not notice improvements, it is preferable to turn this setting off.

### Parallels

For tips on using Parallels, see the [Improving Performance](/refguide/using-mendix-studio-pro-on-a-mac/#performance) section of *Configuring Parallels*.

## Advanced

These tips are recommended if you are an advanced user with admin privileges to make these changes in your configuration.

### Windows Defender

Add *studiopro.exe* to the ignored processes list. 

In addition, add the apps folders and the installation folder to the ignored list of folders of Windows Defender (and other anti-virus software).

## Read More

* [Community Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
