---
title: "Deploy an App in Private Mendix Platform"
linktitle: "Deploy an App"
url: /private-mendix-platform-user-guide/deploy-app/
description: "Contains information about deploying apps created in Private Mendix Platform."
weight: 50
tags: ["private mendix platform", "private platform", "user guide", "deploy an app"]
---

In the **Deploy** section, you can configure the environment to which your app will be deployed.

1. Click **New Environment**.

    {{< figure src="/attachments/private-platform/pmp-ug6.png" >}}

2. Specify the following details about the environment:

    * **Internal Name** - The name for the environment. The environment name can only contain lowercase letters and numbers. You can have several environments for your app, for example *test*, *acceptance*, and *production*.
    * **Namespace** - An existing namespace. You can select any namespace of which you are a member.
    * **Storage Plan** - A storage plan set up in the namespace which you selected.
    * **Database Plan** - A database plan set up in the namespace which you selected.

3. Click **Create**, and then click **Proceed**.
4. After the environment is created, you can click **Operate** > **Deploy Environment** to deploy your app to this environment.