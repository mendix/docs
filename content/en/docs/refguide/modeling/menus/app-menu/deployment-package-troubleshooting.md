---
title: "Deployment Package troubleshooting"
url: /refguide/deployment-package-troubleshooting/
tags: ["studio pro", "project menu", "deployment package"]
---

## 1 Introduction

Sometimes it is impossible to create a package from a certain revision. This page contains description and troubleshooting steps for the most common cases.

## 2 Missing metadata

When you commit (and push) changes to the repository Studio Pro adds an additional commit with so called metadata to a special refspec refs/notes/mx_metadata (to hide this from your commits history).
This metadata contains the information needed to create a deployment package (for instance the version of StudioPro that was used to create this revision -- Mendix version). To create the deployment package Studio Pro downloads the specific revision into a temporary folder and then creates the packge from there. So StudioPro needs to check the Mendix version of the selected revision to confirm no conversion is needed to open it. 

Without this metadata it is impossible to check it. 

### Solution

1. Checkout the revision you want to create a deployment package from into a separate directory.
2. Open it with correct version of StudioPro.
3. Create branch out of it and switch to it. 
4. Do a cosmetic change (e.g. move an activity in a microflow a few pixels)
5. Commit and Push changes from StudioPro.

Now you should be able to create a deployment package from this new revision.
