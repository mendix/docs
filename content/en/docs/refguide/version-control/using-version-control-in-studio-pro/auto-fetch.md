---
title: "Automatic Fetching"
url: /refguide/auto-fetch/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
Automatic fetching was introduced in Mendix version 10.3.
{{% /alert %}}

## Introduction

When collaborating with someone on the same branch, they may push their changes to the server before you. Studio Pro has an automatic fetch mechanism that periodically checks the version control server for changes that are not yet present on your machine. 

Being aware of what happened on the server allows Studio Pro to guide you during the various version control operations, so you can integrate those changes at an earlier stage. By integrating earlier rather than later, you will typically encounter fewer conflicts while collaborating.

## Repository State Indicator

When automatic fetching is enabled, the repository state indicator is displayed at the bottom right of Studio Pro window.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/repository-state-bar.png" class="no-border" >}}

This indicator shows the following:

* the name of the current branch
* the number of incoming commits that exist on this branch of the remote but are not pulled to your machine yet
* the number of outgoing commits that exist on this branch on your machine (local commits) but are not pushed to the remote 

## Configuration

You can enable or disable automatic fetching, and configure the fetch interval, on the [Version Control Tab of the Preferences dialog](/refguide/preferences-dialog/#enable-auto-fetch).
