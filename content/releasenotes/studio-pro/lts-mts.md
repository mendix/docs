---
title: "LTS, MTS & Monthly Release Versions"
category: "Studio Pro"
---

-lts: should always prioritize lts versions if valuing stability and security - happy path
-mts: if you are on an innovation track and need to get latest/greatest every month for new features and functionality, then go to an mts, stay on that with the patches until the next mts - or go by monthly releases to next mts
-monthly release

## 1 Introduction

The goal of this system is to help customers to make a decision on which version of Mendix Studio Pro to run their applications on by clarifying what options they have.

To define different types of releases, consider the example of [8.18.1](8.18#8181):

* **8** – the first number in a release indicates the major version
	* A major version is generally released every year
		* We reserve the right to change this schedule with a minimum of 12 months for each major release and a maximum of 24 months
	* Includes new features and fixes
	* Can include breaking changes
* **18** – the second number in a release indicates the minor version 
	* A minor  version is generally released every month
	* Includes new features and fixes
	* Does not include breaking changes
* **1** – the third number in a release indicates the patch version 
	* A patch version is released on an as-needed basis
	* Includes security fixes and critical bug fixes
	* Does not include new features or breaking changes

By "support" - we mean supporting with Customer Support, security patches, documentation, etc. If a version is not supported, it is discontinued.

## 2 Long-Term Support (LTS) Version

[**THE LATEST MINOR VERSION BEFORE A NEWER MAJOR VERSION IS RELEASED**]

This is the longest supported minor version of a specific major version of Studio Pro that will not have new features added to it. The support duration can last from a minimum of 3 years to a maximum of 6 years.

An LTS is only introduced with a new major version of Studio Pro, as this is when the previous major version becomes an LTS.

The current LTS versions of Studio Pro are:

* [8.18](8.18) (started in January 2021)
* [7.23](7.23) (started in February 2019)

### 2.1 Support Duration

The support duration for an LTS version is at least 3 years, which is the longest of these options.

For the support duration, the LTS version will receive patch releases only. 

### 2.2 Upgrading Impact

The upgrading impact to an LTS version is the lowest of these options. That is because an LTS version has the longest support duration and only gets critical fixes, which results in high stability over time.

### 2.3 Release Cycle

There are no regular releases for an LTS version, only patch releases on an as-needed basis.

[**ADD CROSS-REFERENCE TO PATCH DETAILS**]

### 2.4 Support with Patch Releases

In relation to our SLA and to clarify our current offering, today Mendix supports versions 7, 8, and 9. Once version 10 has been released, the support on version 7 will be dropped (in reference to this requirement stated above: "Mendix has released at least two (2) newer major releases").

## 3 Mid-Term Support (MTS) Version

MTS versions are introduced as minor versions every 6 months after a new major version release (for example, in the past these have been [8.6](8.6), [8.12](8.12), [8.18](8.18)). Once a version becomes an MTS, it only receives patch releases until that major version becomes an LTS version (for example, [8.18](8.18) is an LTS, so there are no longer any MTS versions for version 8, there will only be upcoming MTS versions for version 9).

### 3.1 Support Duration

[**CLARIFY**]

The support duration for an MTS version depends on the release of a new major version and thus the establishment of a new LTS.

For the support duration, the MTS version will receive patch releases only. 

### 3.2 Upgrading Impact

The impact of upgrading to an MTS version is higher than that of an LTS version. That is because an MTS version has a shorter support duration than an LTS, which means it has less time to become as stable as an LTS verison.

[**ALSO MTS HAS DEVELOPER HOURS PUT INTO IT - THAT YOU HAVE TO REPEATEDLY DO PER EVERY MTS - THIS WILL BE MORE PAINFUL THAN GOING FROM LTS TO LTS (WHICH IS HAPPY PATH)**]

### 3.3 Release Cycle

There are no regular releases for an MTS version, only patch releases on an as-needed basis.

### 3.4 Support with Patch Releases

Patch releases are provided for an MTS version until a new LTS version starts (which corresponds to the release of a new major version). 

To relate this to our current offering, the latest version released is 9, which positions [8.18](8.18) as the latest LTS version. This means the MTS versions to be supported will be 9.6 and 9.12. [**CLEAN UP**]

## 4 Monthly Release Version

A monthly release is a minor release that has no support with patch releases.

### 4.1 Support Duration

All the bugs found on a monthly minor release are only fixed rolling forward to the next minor version.

[**CLEAN BELOW**]

For example, 9.2. and 9.3 are released, and you are using 9.2 and find a critical bug, their fix will only come out in the next minor release, which would be 9.4. (On at MTS, on the other hand, the fix would be on a patch of the MTS).

### 4.2 Upgrading Impact

The upgrading impact to a monthly release is the highest of these options.  That is because every month, all new features are shipped with such a minor version, including all bug fixes and security patches.

[**ALSO: THE FULL MONTHLY INNOVATION OF R&D IS ADDED TO EACH MONTHLY RELEASE**]

### 4.3 Release Cycle

This is a monthly release that includes new features. A monthly release also includes security patches that are applied to existing MTS and LTS versions. (**VERIFY**) 

### 4.4 Support with Patch Releases

A monthly release is a non-MTS/LTS release that thus receives no patches. Bugs found in such a minor version will only be fixed rolling forward to the next minor version or as patch release on an existing LTS version.

[**CORRELATE BELOW EXAMPLE TO ABOVE EXAMPLE**]

For example, if a bug is found in version 9.1.0 (a monthly release), it will only be fixed in version 9.2.0 (the next monthly release).

[**THIS EXAMPLE SHOULD BE HERE OR IN LTS**]

As another example, if a bug is found in version [8.16.0](8.16#8160), it will only be fixed for a patch release on the LTS version [8.18](8.18). 
