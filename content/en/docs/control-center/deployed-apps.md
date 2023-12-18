---
title: "Deployed Apps"
url: /control-center/deployed-apps/
category: "Control Center"
description: "Describes the Deployed Apps page in the Mendix Control Center."
tags: ["control center", "mendix admin", "deployed app"]
weight: 55
no_list: true

---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

The **Deployed Apps Overview** page is a self-service tool that enables you to provision and offboard environments.

The **Deployed Apps Overview** page shows a list of all the apps within your company. You can use it to view an app's name, ID, Technical Contact, number of environments, or status. The page has separate tabs for **Mendix Cloud Apps** and **Free Apps**.

{{< figure src="/attachments/control-center/deployed-app/apps-overview.png" alt="Deployed Apps - apps overview" >}}

You can click the name of an app to see a list of environments available for the app.

{{< figure src="/attachments/control-center/deployed-app/cloud-provisioning.png" alt="cloud provisioning page for an app" >}}

Click the icon in the top right corner to access the following pages that allow you to [make requests to Mendix Support](/developerportal/support/submit-support-request/#submitting):

* [Resize Environment](/developerportal/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/developerportal/support/new-app-node-request-template/#offboard) – requests that an app is offboarded
