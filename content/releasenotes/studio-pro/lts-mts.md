---
title: "LTS, MTS & Monthly Release Versions"
category: "Studio Pro"
---

## 1 Introduction

The goal of this system is to help customers to make a decision on which version of Mendix Studio Pro to run their applications on by clarifying what options they have.

To define different types of releases, consider the example of [8.18.1](8.18#8181):

* **8** – the first number in a release indicates the major version
	* A major version is generally released every 1.5 years 
		* We reserve the right to change this schedule with a minimum of 12 months for each major release and a maximum of 24 months
	* Includes new features and fixes
	* Can include breaking changes
* **18** – the second number in a release indicates the minor version 
	* A minor  version is generally released every month
	* Includes new features and fixes
	* Does not include breaking changes
* **1** – the third number in a release indicates the patch version 
	* A patch version is released on an as-needed basis
	* Includes bug fixes and security fixes
	* Does not include new features or breaking changes

## 2 Long-Term Support (LTS) Version

This is the longest supported minor (**VERIFY**) version of a specific major (**VERIFY**) version of Studio Pro that will not have new features added to it. The support duration can last from 1 year to 5 years or longer, depending on how often a new major version is released.

An LTS is only introduced with a new major version of Studio Pro, as this is when the previous major version becomes an LTS.

The current LTS versions of Studio Pro are:

* [8.18](8.18) (started in January 2021)
* [7.23](7.23) (started in February 2019

### 2.1 Support Duration

(**HOW TO DEFINE "SUPPORT DURATION"?**)

The support duration for an LTS version is at least 2 years, which is the longest of these options. (**VERIFY: DOES THIS CONFLICT WITH THIS OTHER STATEMENT: "A minimum of three years of support is guaranteed and a maximum of six years for any major release" ?)

For the support duration, the LTS version will receive patch releases only. 

### 2.2 Upgrading Impact

The upgrading impact to an LTS version is the lowest of these options. That is because an LTS version has the longest support duration and only gets critical fixes, which results in high stability over time.

### 2.3 Release Cycle

There are no regular releases for an LTS version, only patch releases on an as-needed basis.

### 2.4 Support with Patch Releases

Our official SLA states: "Mendix will only support the current major release and the two (2) prior major releases (LTS) of the platform. Mendix shall (a) at least support any major release for a minimum period of twenty-four (24) months from its release date, and (b) not cease to support any major release prior to expiration of said 24 months and after Mendix has released at least two (2) newer major releases ('End-of-Life-Date')."

To relate this to our current offering, today Mendix supports versions 7, 8, and 9. Once version 10 has been released, the support on version 7 will be dropped (in reference to this requirement stated above: "Mendix has released at least two (2) newer major releases").

## 3 Mid-Term Support (MTS) Version

MTS versions are introduced as minor versions every 6 months after a new major version release (for example, in the past these have been [8.6](8.6), [8.12](8.12), [8.18](8.18)). Once a version becomes an MTS, it only receives patch releases until that major version becomes an LTS version (for example, [8.18](8.18) is an LTS, so there are no longer any MTS versions for version 8, there will only be upcoming MTS versions for version 9).

### 3.1 Support Duration

The support duration for an MTS version is 1 year.

For the support duration, the MTS version will receive patch releases only. 

### 3.2 Upgrading Impact

The upgrading impact to an MTS version is higher than that of an LTS version. That is because an MTS version has a shorter support duration than an LTS, which means it has less time to become as stable as an LTS verison.

### 3.3 Release Cycle

There are no regular releases for an MTS version, only patch releases on an as-needed basis.

### 3.4 Support with Patch Releases

Patch releases are provided for an MTS version until a new LTS version starts (which corresponds to the release of a new major version). 

To relate this to our current offering, the latest version released is 9, which positions [8.18](8.18) as the latest LTS version. This means the MTS versions to be supported will be upcoming minor versions for 9. (**VERIFY)

## 4 Monthly Release Version

A monthly release is a minor release that enjoys no support with patch releases. All the bugs found on a monthly minor release are only fixed rolling forward to the next minor version.

### 4.1 Support Duration

The support duration for a monthly release 1 month.

### 4.2 Upgrading Impact

The upgrading impact to a monthly release is the highest of these options.  That is because every month, all new features are shipped with such a minor version, including all bug fixes and security patches.

### 4.3 Release Cycle

This is a monthly release that includes new features. A monthly release also includes security patches that are applied to existing MTS and LTS versions. (**VERIFY**) 

### 4.4 Support with Patch Releases

A monthly release is a non-MTS/LTS release that thus receives no patches. Bugs found in such a minor version will only be fixed rolling forward to the next minor version or as patch release on an existing LTS version.

For example, if a bug is found in version 9.1.0 (a monthly release), it will only be fixed in version 9.2.0 (the next monthly release).

As another example, if a bug is found in version [8.16.0](8.16#8160), it will only be fixed for a patch release on the LTS version [8.18](8.18). 
