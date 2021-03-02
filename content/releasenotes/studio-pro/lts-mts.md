---
title: "LTS, MTS & Monthly Release Versions"
category: "Studio Pro"
menu_order: 1
---

## 1 Introduction

The goal of this document is to clarify Mendix Studio Pro version options and help you decide which version to run your applications on.

To define different types of versions and releases, consider the example of [8.18.1](8.18#8181):

* **8** – the first number in a release indicates the major version
	* A major version is generally released every year (please note we reserve the right to change this timeline with a minimum of 12 months for each major release and a maximum of 24 months)
	* Includes new features and fixes
	* Can include breaking changes
	* In relation to our SLA and to clarify our current offering, today Mendix supports major versions 7, 8, and 9
		* Once version 10 has been released, the support on version 7 will be dropped
* **18** – the second number in a release indicates the minor version 
	* A minor version is generally released every month
	* Includes new features and fixes
	* Does not include breaking changes
* <a name="patch"></a>**1** – the third number in a release indicates the patch version 
	* A patch version is released on an as-needed basis
	* Includes security fixes and critical bug fixes
	* Does not include new features or breaking changes

## 2 Long-Term Support Version (LTS)

An LTS version is the latest minor version before a new major version is released. Once a minor version becomes an LTS, it will not have new features added to it. 

These are the current LTS versions of Studio Pro:

* [8.18](8.18) (started in January 2021)
* [7.23](7.23) (started in February 2019)

If you value version stability and security, then moving only between LTS versions is the happy path.

### 2.1 Support Duration

The support duration for an LTS is a minimum of 3 years, which is the longest of these options. The maximum support duration for an LTS is 6 years.

### 2.2 Release Cycle

There are no regular releases for an LTS, as they only start with the release of a new higher major version. There will only be [patch](#patch) releases for an LTS on an as-needed basis.

### 2.3 Support with Patch Releases

For the support duration, the LTS will receive [patch](#patch) releases only. 

### 2.4 Upgrading Impact

The impact of upgrading from an LTS to an LTS is the lowest of these options. That is because an LTS has the longest support duration and only gets critical fixes, which results in high stability over time. In addition, the upgrade only has to be done only once, as opposed to multiple times between MTS versions or monthly release versions.

## 3 Mid-Term Support Version (MTS)

An MTS is a minor version released approximately every 6 months after a new major version release.

In the past, MTS versions have been [8.6](8.6), [8.12](8.12), and [8.18](8.18). However, with the release of version 9, [8.18](8.18) is now an LTS, so there are no longer any MTS versions for version 8. Furthermore, there are no current MTS versions for Studio Pro. There will only be upcoming MTS versions for version 9.

If you are on an innovation track with your development and need to get the latest and greatest Mendix has to offer every month, then upgrade to an MTS and stay on that version with its patch releases until the next MTS version is released.

### 3.1 Support Duration

The support duration for an MTS depends on when a new higher major version is released, which thus creates a new LTS and discontinues all MTS versions for that respective major version.

### 3.2 Release Cycle

MTS versions are introduced as minor versions approximately every 6 months after a new major version release. There will only be [patch](#patch) releases for an MTS on an as-needed basis.

### 3.3 Support with Patch Releases

For the support duration, the MTS will receive [patch](#patch) releases only.

### 3.4 Upgrading Impact

The impact of upgrading betwen MTS versions is higher than upgrading between LTS versions. That is because an MTS has a shorter support duration than an LTS, which means it has less time to become as stable as an LTS verison. In addition, the upgrade has to be done approximately every six months.

## 4 Monthly Release Version

A monthly release is a a non-MTS/LTS minor release that has no support with patch releases.

### 4.1 Support Duration

The support duration for a monthly release is limited, as all bugs found on a monthly release will only be fixed rolling forward to the next minor version. 

For example, if a bug is found in version 9.1, it will only be fixed in the next monthly release, which would be version 9.2.

For another example, if you are using version 9.1 after 9.2 has been released and you find a critical bug in 9.1, that fix will only be released in the next monthly release, which would be 9.3.

### 4.2 Release Cycle

This is a monthly release that includes new features as well as security patches that are applied to existing MTS and LTS versions.

### 4.3 Support with Patch Releases

A monthly release receives no patches. Bugs found in a monthly release will only be fixed rolling forward to the next minor version. 

If a bug is found in a monthly-release version for an older major version, it will only be fixed as a patch on the existing LTS (for example, a bug found in [8.16](8.16#8160) will only be fixed for a patch release on the LTS version [8.18](8.18)). 

### 4.4 Upgrading Impact

The impact of upgrading between monthly releases is the highest of these options. That is because every month, all new features are shipped in such minor versions, including all bug fixes and security patches. In addition, the upgrade has to be done monthly, which can be a significant drain on resources.
