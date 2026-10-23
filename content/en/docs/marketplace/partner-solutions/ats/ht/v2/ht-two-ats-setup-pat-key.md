---
title: "Set Up Your Personal Access Token in ATS"
linktitle: "Set Up Your Personal Access Token"
url: /appstore/partner-solutions/ats/ht-two-ats-setup-pat-key/
description: "Describes how you can set up the personal access token in ATS."
---

## Introduction

With the introduction of the [Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/), you need a valid personal access token (PAT) to use the Application Test Suite (ATS).

This document guides you through the process of configuring your Mendix PAT in ATS.

## Prerequisites

Before starting, ensure you have completed the following:

* Generate a Personal Access Token (PAT) by following the instructions in [Generating a PAT](/apidocs-mxsdk/apidocs/pipelines-api/#generate).

## Setting Up Your PAT key in ATS

1. Log in to ATS.

2. Click your profile on the upper-right corner:

   {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-user-dashboard-page.png" alt="ATS dashboard page" >}}

3. From the drop-down menu, select **Account Settings**.

   In the **Account Settings** page, you can see a section for your PAT. If you have not set up a PAT yet, the dialog box shows **Personal access token is not configured yet.**

   {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-pat-key-not-confirmed.png" alt="PAT not confirmed" >}}

4. Click **New PAT** and enter the PAT you generated earlier:

   {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-new-pat-key-page.png" alt="New PAT key" >}}

5. Click **Save** to confirm your PAT:

   {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-pat-key-confirm.png" alt="Save PAT key" >}}

6. After saving your PAT, click **Can't find your app** and then **Refresh my apps** to view your applications in ATS.

You have successfully set up your Personal Access Token in ATS. This allows you to access and use the full functionality of ATS.
