---
title: "Upgrading Teamcenter Extension"
url: /appstore/modules/siemens-plm/teamcenter-extension/upgrading-teamcenter-extension/
description: "Describes Teamcenter Extension from the Mendix Marketplace. Teamcenter Extension facilitates a low-code approach to integrating with Siemens Teamcenter."
weight: 3
---

## Upgrading Teamcenter Extension V 1.0.0 to V 3.0.0 {#upgrade}

{{% alert color="info" %}} To prevent conflicts (such as integration duplications), it is advised that one developer in a team upgrades the Teamcenter Extension and commits changes before other developers continue working with the extension.{{% /alert %}}

If you use Teamcenter Extension V 1.0.0 with Teamcenter Connector V 3.6.1 or below, and want to upgrade to Teamcenter Extension V 3.0.0 and Teamcenter Connector V 2406.3.0, perform the following procedure:

1. Open your app in a Studio Pro version compatible with Teamcenter Extension V 3.0.0. For details, refer to the version matrix in the [Dependencies](/appstore/modules/siemens-plm/teamcenter-extension/#dependencies) section of *Teamcenter Extension*.
2. Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to download [Teamcenter Extension V 3.0.0](https://marketplace.mendix.com/link/component/225544) from the Marketplace and install it.
3. When a warning dialog box opens, click **Trust module and enable extension**. Otherwise, Teamcenter Extension will not be installed.
4. Follow the instructions in [How to Upgrade the Module to a Newer Version](/appstore/use-content/#update-module) to upgrade Teamcenter Connector to V 2406.0.0.

    {{% alert color="info" %}}Teamcenter Connector V 2406.3.0 has an updated domain model that makes certain entities and associations in Teamcenter Extension V 1.0.0 redundant. As a result, you will get errors after the upgrade.{{% /alert %}}

5. To resolve the errors, use one of the solutions described the sections below:

    * [Solution 1](#solution-1) – Delete and recreate microflows—using Solution 1 has the advantage that after completing the procedure, the integrations will appear on the **History** tab.

    * [Solution 2](#solution-2) – Update references and parameters.

### Resolving the Errors – Solution 1 {#solution-1} 

{{% alert color="info" %}}
Using Solution 1 has an advantage: after completing the procedure, the integrations will appear on the **History** tab.
{{% /alert %}}

Perform the following steps:

1. Delete the microflows generated with Teamcenter Extension V 1.0.0. This will cause errors in the locations where these microflows were used. Keep these errors so that you can identify where the microflows need to be implemented again.
2. Go to Teamcenter Extension V 3.0.0 and repeat the steps you did before in Teamcenter Extension V 1.0.0. Simply select the same entities and associations, as they already exist in your domain model.
3. Go over the errors caused by the missing microflows and implement the newly-generated microflows. 

### Resolving the Errors – Solution 2 {#solution-2}

Follow the instructions in the table below:

| Error message                                           | How to Solve the Error                                       |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `TeamcenterToolkit.BOMWindow` no longer exists          | <ol><li>Update all references to <br/>`TcConnector.BOMWindow`.</li><li>Search for `TeamcenterToolkit.BOMWindow` to find `BOMapping` parameters where the entity is used, and change it to `TcConnector.BOMWindow`.</li></ol> |
| `TeamcenterToolkit.top_line` no longer exists           | Update all associations to `TcConnector.top_line`.           |
| The selected Java action parameter […] no longer exists | Set all the Java action parameters again.                    |
