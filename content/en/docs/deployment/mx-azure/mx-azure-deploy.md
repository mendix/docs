---
title: "Deploying Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/deploy/
description: "Documents the pre-implementation tasks for Mendix on Azure."
weight: 5
---

## Introduction

Before deploying your Mendix on Azure cluster, ensure all prerequisites are met. Once confirmed, you can proceed with the deployment.

## Prerequisites

To deploy Mendix on Azure, make sure you have the following available:

* A Mendix platform account
* An Azure account with the following permissions:
    * Permission to grant admin consent on the Mendix on Azure portal app registration (e.g. Global Administrator in Entra ID)
    * Owner role assigned on the target subscription (temporary elevated Privileged Identity Management - PIM - access does not suffice)
* In case you want to integrate the Mendix on Azure environment into your existing corporate network, be sure to consider the [network configuration options](/developerportal/deploy/mendix-on-azure/configuration/#networking-settings) that cannot be changed after initial environment deployment

## Deploying the Mendix on Azure offering from Azure Marketplace

To deploy the solution, perform the following steps:

1. Open the [Mendix on Azure marketplace offering](https://portal.azure.com/#create/mendixtechbv.mxonazure) in the Azure Portal while signed into the correct Azure account.
2. Choose the **Standard** plan and proceed to the next step by clicking **Create**.

    {{< figure src="/attachments/deployment/mx-azure/create-managed-app.png" class="no-border" >}}
    
3. Deploy the offering in a resource group and Azure location (region) of your choosing. Keep in mind that the Azure location chosen here will be used to host *all* Mendix on Azure resources.

    {{< figure src="/attachments/deployment/mx-azure/resource-group-name.png" class="no-border" >}}

4. Finish the wizard by clicking **Create** in order to start the deployment of the managed application.
5. After deployment of the Mendix on Azure managed application has succesfully completed,  please navigate to the Mendix on Azure portal by clicking on the **Mendix on Azure Portal** button or, alternatively, by using [this](https://mendixonazure.mendix.com) direct link.
6. Connect to your Azure account by clicking **Connect Azure Account**, and then login with the same account that you used to deploy the Mendix on Azure offering.

    After successfully connecting the accounts, the Mendix Portal shows a list of clusters with the following possible statuses: 
    
    * Ready to initialize clusters (=clusters that have not been initialized yet to start hosting Mendix apps)
    * Initialized cluster (=clusters ready to start hosting Mendix apps)
    * Failed clusters (= cluster that failed to initialize for any reason). 

    {{< figure src="/attachments/deployment/mx-azure/available-clusters.png" class="no-border" >}}

7. Identify the entry belonging to the Managed Application you deployed in previous steps. In the **Actions** column, click the dropdown menu icon, and then select **Initialize**. 

    The preflight check launches to verify the conditions are in place to successfully initialize a Mendix on Azure cluster. 

    {{< figure src="/attachments/deployment/mx-azure/preflight-check.png" class="no-border" >}}

8. In the **Preflight Check** screen, click **Next** to be redirected to the **Provision** screen. When all preflight checks have passed, the status is displayed as **Done** in the **Preflight Check** section, as shown below:

    {{< figure src="/attachments/deployment/mx-azure/preflight-check-successful.png" class="no-border" >}}

9. In the **Provision** screen, optionally add any custom tags that will be used to tag deployed resoources and optionally review the configuration in the **Advanced Options** section.

    For more information, refer to the [configuration documentation](/developerportal/deploy/mendix-on-azure/configuration/). The default settings suffice for a test deployment. Note that certain settings have influence on the Azure costs charged by Microsoft.

10. In the **Review & Initialize** screen, review the information and click **Initialize**.

    {{< figure src="/attachments/deployment/mx-azure/initializeCluster.png" class="no-border" >}}

    The initialization process takes approximately 15 minutes. It deploys resource into the managed resource group belonging to the Managed App that you created in step 3 above as shown below:

    {{< figure src="/attachments/deployment/mx-azure/resourceGroup.png" class="no-border" >}}

11. To view the cluster's initialization progress, click **Details** in the **Actions** column.  

    {{< figure src="/attachments/deployment/mx-azure/infrastructure-details.png" class="no-border" >}}

12. If there are deployment issues, the cluster status is **Failed**. To view details about which component(s) failed (if available), click **Details**.

    {{< figure src="/attachments/deployment/mx-azure/failed-cluster.png" class="no-border" >}}

    Some issues can be resolved by retrying the deployment. You can do this by clicking **Rerun** to manually re-trigger the cluster deployment. If the cluster still fails after a second rerun, a support ticket is automatically created with Mendix Support, and the Mendix team will contact you to resolve the issue.

    After the cluster is initialized successfully, the status of the cluster in the Portal changes to **INITIALIZED**. The cluster and its namespace are immediately available for deploying apps.

{{% alert color="info" %}} Due to the managed nature of Mendix on Azure, creating additional namespaces within a Mendix on Azure cluster is not supported. Similarly, it is not possible to create a Mendix on Azure cluster using APIs. Furthermore, Mendix on Azure clusters cannot be deleted through either the Mendix on Kubernetes Portal or the Mendix on Azure Portal. 

For detailed steps on how to properly delete a Mendix on Azure cluster, see [Offboarding Mendix on Azure](/developerportal/deploy/mendix-on-azure/offboarding/). {{% /alert %}}

## Deploying a Mendix App to a Mendix on Azure Cluster

After creating your cluster in Microsoft Azure, you can proceed to deploy your applications to it. The deployment process is identical to that used with Mendix on Kubernetes. For more information, see [Deploying a Mendix App to a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-deploy/).

{{% alert color="info" %}} Mendix on Azure app environments will begin to consume cloud tokens starting from 120 days after their creation. For more information, see [Licensing Mendix on Azure](/developerportal/deploy/mendix-on-azure/license/). {{% /alert %}}
