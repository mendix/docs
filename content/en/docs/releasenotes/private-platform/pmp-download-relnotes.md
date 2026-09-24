---
title: "Private Mendix Platform Download Portal Release Notes"
linktitle: Private Mendix Platform Download Portal
url: /releasenotes/private-platform-download-portal/
description: "Release notes for updates to the Private Mendix Platform Download Portal"
weight: 40
cascade:
    - numberless_headings: true
---

These release notes cover changes made to the Private Mendix Platform Download Portal:

## 2026

### August 27, 2026

#### Fixes

* We have added a fix to retrieve all contents while creating new Marketplace bundles. The API response is now in alignment with the public Marketplace. (Ticket 286142)
* We have added support for adding multiple versions of the same component in Marketplace bundles. (Ticket 286140)
* We have updated the version filter in Marketplace bundles to align with public Mendix Marketplace. (Tickets 286137 and 286143)

## 2024

### February 26, 2024

#### Fixes

We have provided the following fixes:

* VWe have fixed an issue where the admin would revoke the access to the Download Portal, but the user remained logged in.

## 2023

### December 28, 2023

#### Improvements

##### Checksums Added

To ensure the integrity and security of your Private Mendix Platform installer, we have added checksums to the download portal. New releases are signed with an SHA-256 checksum, which can be copied or downloaded to verify the integrity of the downloaded artifact.

#### Fixes

We have provided the following fixes:

* Various fixes for the Download Portal.