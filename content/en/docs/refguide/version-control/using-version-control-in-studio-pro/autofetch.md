---
title: "Automatic fetching"
url: /refguide/auto-fetch/
weight: 30
tags: ["git", "auto-fetch", "version-control"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

When collaborating with someone on the same branch, they may push their changes to the server before you. Studio Pro has an automatic fetch mechanism that periodically checks the version control server for changes that are not yet present on your machine. 

Being aware of what happened on the server allows Studio Pro to guide you during the various version control operationrs, so you can integrate those changes in an earlier state. By integrating earlier rather than later, you will typically encounter less conflicts while collaborating.

## 2 Repository state indicator

When autofetch is enabled, the repository state indicator is displayed at the bottom right of Studio Pro window.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/repository-state-bar.png" alt="Repository state indicator" >}}

This indicator shows:
- the name of the current branch
- the number of _Incoming commits_ -- Commits that exist on the remote but are not pulled to your machine yet
- the number of _Outgoing commits_ -- Commits that exist on your machine (local commits) but are not pushed to the remote 

## 3 Configuration

Enabling or disabling automatic fetching, as well as configuring the fetch interval, can be done on the [Version Control Tab of the Preferences dialog](/refguide/preferences-dialog/#536-enable-automatic-fetching-from-a-repository)
