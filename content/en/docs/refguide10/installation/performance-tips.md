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

### Antivirus Software (such as Windows Defender)

Add your app folder, or the folder containing all your apps, to the list of exclusions for your antivirus software. You should only do this with app directories you trust. Do not add *studiopro.exe* itself to the ignored processes.

Studio Pro uses different tools and sub-processes that are not covered if you only add Studio Pro to the list of exceptions for virus scanning, which is why it is best to mark the app directory for exclusion.

## Read More

* [Community Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
