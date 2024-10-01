---
title: "Set Up Personal Access Token in ATS"
url: /appstore/partner-solutions/ats/ht-two-ats-setup-pat-key/
description: "Describes how you can setup pat key in ATS."
---

## Introduction

With the introduction of the new Mendix Projects API, every user needs a valid Personal Access Token (PAT) to use the Application Test Suite (ATS).
This guide will walk you through the process of configuring your Mendix PAT in ATS.


## Prerequisites

Before starting, please ensure you have completed the following:

* Generated a Personal Access Token (PAT) by following the instructions in [Generating a PAT](/apidocs-mxsdk/apidocs/pipelines-api/#generate)

## Setting Up Your PAT key in ATS

1. Log in to ATS and click on your profile menu in the top-right corner:

   {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-user-dashboard-page.png" alt="ATS dashboard page" class="no-border" >}}

2. Select **Account Settings** from the dropdown menu.

   In the Account Settings page, you'll see a section for your PAT. If you haven't set one up yet, it will show as **Personal access token is not configured yet.**:

   {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-pat-key-not-confirmed.png" alt="PAT not confirmed" class="no-border" >}}

3. Click on **New PAT** and enter the PAT you generated earlier:

   {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-new-pat-key-page.png" alt="New PAT key" class="no-border" >}}

4. Click **Save** to confirm your PAT:

   {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-ats-setup-pat-key/ats-pat-key-confirm.png" alt="Save PAT key" class="no-border" >}}

5. After saving your PAT, click on **Can't find your app** and then **Refresh my apps** to view your applications in ATS.

By following these steps, you'll successfully set up your Personal Access Token in ATS, allowing you to access and use the full functionality of the Application Test Suite.





