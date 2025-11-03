---
title: "Support Guidelines for Native Mobile"
url: /releasenotes/mobile/native-support/
description: "These guidlines explain the support guidelines specific to native mobile applications."
weight: 5
---

## Introduction

This document defines the support guidelines specific to **native mobile applications**. It outlines how support policies for native mobile apps differ from those pertaining to regular applications, and provides recommendations for update frequency and cadence.

For more information on Mendix support guidelines, see [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/).

## Native Mobile Support Duration

Native mobile apps have shorter support durations than non-native because the operating systems they run on introduce major updates each year — often with breaking changes. Regular updates are necessary to ensure compatibility with the latest versions of these operating systems.

The reduced support durations for native mobile apps do not apply to progressive web apps. Progressive web apps follow the [standard Mendix support durations](/releasenotes/studio-pro/lts-mts/).

### Long-Term Support Version (LTS)

Native mobile apps built using a Mendix LTS version are supported for 15 months from the official release date. This support period is much shorter than standard Mendix support durations.

### Mid-Term Support Version (MTS)

Native mobile apps built with a Mendix MTS version are supported for 15 months from the official release date, unless an LTS version of the same Mendix major version is released earlier. In that case, support ends 3 months after the release of the LTS version. This support period is up to 6 months shorter than standard Mendix support durations.

### Monthly Release Version

Native mobile apps built with a Mendix monthly release follow the same support duration as standard Mendix applications.

## Update Recommendations

We recommend updating your native mobile app to each new Mendix MTS or LTS version shortly after its release, in order to maintain compatibility and support. This means you need to update your app every six months.

Following this recommendation provides the following benefits:

* **Minimized risk of compatibility issues** with newer mobile operating system versions
* **Reduced update effort**, as smaller, more frequent updates involve fewer changes
* **Access to the latest features and improvements** available in Mendix Studio Pro

As an alternative, you can choose to skip every other MTS version and update your native mobile app once per year. With this approach, you must still update to the LTS version as soon as it is released.

Consider this update path as an example of what you could do: Mendix 10 LTS {{% icon name="chevron-right" %}} Second Mendix 11 MTS {{% icon name="chevron-right" %}} Mendix 11 LTS
