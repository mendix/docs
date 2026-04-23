---
title: "Installing Components through  UI"
url: /developerportal/deploy/helm-charts/
description: "Describes how to configure your installation with Helm charts in Mendix on Kubernetes."
weight: 50
---

## Introduction

By default, Mendix on Kubernetes uses the mxpc-cli tool for configuring namespaces and performing base installations. However, you can also integrate Helm charts into your pipelines in order to directly install components and run the configurations through the Helm chart UI.

The solution consists of two main components: the Helm charts themselves, and a tool called Mendix CLI. The Mendix CLI acts as a user interface, allowing you to input configurations and then generate Helm charts values from the helm charts.

{{% alert color="info" %}}
Before using Helm charts, make sure to review the official Helm documentation.
{{% /alert %}}

### Benefits of Using the Helm Charts

Using the solution offers the following advantages when compared to the traditional method of using the mxpc-cli tool:

* Helm-based installation does not require elevated permissions, and can be run on individual workstations. Because of that, you can implement them if you use GitOps and similar DevOps practices.
* By using Helm charts, you can integrate configuration deployment into their existing pipelines. This reduces the need for manual intervention. For users who are familiar with Helm charts, it is a more intuitive and preferred method compared to manual CLI operations.
* The deployment process is streamlined, consistent, and repeatable. 
* Managing the configurations is easy.
* In future releases, upgrade process will be simplified.

### Current Limitations

The solution currently has the following limitations compared to using the mxpc-cli tool:

* The Helm chart UI cannot be used to configure the Global Operator.
* We do not have any UI-driven upgrade approach.
* With the current release, namespaces initially created with mxpc-cli cannot be migrated and managed with Helm charts. The option to use Helm charts is only available for newly created namespaces.
* The Helm chart does not cover [advanced operator configurations](/developerportal/deploy/private-cloud-cluster/#advanced-operator-configuration).
* Currently, we do not provide a public repository to download the Helm chart. The Helm charts are currently only be downloaded through our in house mx-ops-cli web UI.

## Installing and Configuring the Mendix on Kubernetes with Helm Charts

To install the solution, perform the following steps:

1. [Create a Mendix on Kubernetes cluster.](/developerportal/deploy/private-cloud-cluster/)
2. Create a namespace in your cluster.
3. Toggle the option **Use new Helm chart installation** to **On**.
4. Select your operating system, and then click **Download Executable**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard.png" >}}
   
5. Click the **Copy** icon in the **Run the command in your terminal section**, and then run it on the machine where you want to install Mendix on Kubernetes.

    The Web UI application opens locally in your browser, using `localhost:3000` as the default address. You can now select one of the following options:

    * **Start from scratch** - Creates a new configuration file.
    * **Import from file** - Allows you to import configurations from an existing yaml file.
    * **Download artifacts** - Downloads the latest Helm charts or [Custom Resource Definitions](/developerportal/deploy/private-cloud-technical-appendix-01/#custom-resources), so you can open and view them. You can use this option to check the expected format, so you can use them as a template for your own charts.

6. For an initial configuration, select **Start from Scratch**. The configuration wizard opens.

    The configuration wizard offers light and dark modes for the UI. To switch between them, click the **Light Mode** or **Dark Mode** button in the top right corner.

7. In the **General Settings** tab, select the environment for the installation. The other settings are pre-populated for the namespace that you created.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard1.png" >}}

8. Optional: In the **Service Accounts** tab, specify a custom Kubernetes service account for the Mendix environment to use instead of the default account.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard2.png" >}}

9. In the **Database Plans** tab, select your desired database type, and then specify one or more database plans. For more information about the available options, see [Supported Database Types](/developerportal/deploy/private-cloud-storage-plans/#supported-database-types).

    If you want to use a custom Kubernetes service account for any of your plans, select it in the **K8s Service Account** field.

        {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard3.png" >}}

10. In the **Storage Plans** tab, select your desired database type, and then specify one or more blob storage plans. For more information about the available options, see [Blob File Storage Plans](/developerportal/deploy/private-cloud-storage-plans/#blob-storage).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard4.png" >}}

11. In the **Ingress** tab, specify your network ingress settings. For more information about the available options, see [Network Ingress Settings in Mendix on Kubernetes](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard5.png" >}}

{{% alert color="info" %}}
Keep in mind that changing the ingress type resets the value of all fields in this tab.
{{% /alert %}}

12. In the **Registry** tab, specify your network ingress settings. For more information about the available options, see [Registry Configuration](/developerportal/deploy/private-cloud-registry/).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard6.png" >}}

{{% alert color="info" %}}
Keep in mind that changing the registry type resets the value of all fields in this tab.
{{% /alert %}}

13. Optional: In the **Proxy** tab, specify a proxy server.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard7.png" >}}

14. Optional: If your servers use a self-signed certificate, in the **Custom TLS** tab, configure custom TLS so that the self-signed certificate is accepted.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard8.png" >}}

15. Click **Generate & Download** to generate the yaml file with the configurations that you provided.
16. Run the following commands:

    1. Install the required [Custom Resource Definitions](/developerportal/deploy/private-cloud-technical-appendix-01/#custom-resources) by running `kubectl apply -f mx-privatecloud-operator-crd/crds/`.
    2. Install Mendix on Kubernetes by running `helm install --createnamespace -n <your namespace> -f <yaml file name> <release name> mx-privatecloud-operator-installer`.

{{% alert color="info" %}}
Ensure that your cluster have access to the Mendix on Kubernetes Portal for adding the storage plans, and that the Private Cloud Portal is safelisted in the cluster.
{{% /alert %}}

The installer performs the basic installation and applies the configurations at the same time.

## Updating the Configuration

If you want to update your configuration (for example, to change the database), perform the following steps:

1. In the Web UI application, click **Import from file**. 
2. Update the imported yaml file by following the same wizard as above.
3. Update the configuration with the new yaml file by running the following command: `helm upgrade -n <your namespace> -f <yaml file name> <release name> mx-privatecloud-operator-installer`.

## Upgrading to a New Version of the Mendix Operator

When upgrading the Mendix Operator, perform the following steps:

1. In the Web UI application, click **Download charts** to download the Helm charts for your current configuration.
2. Extract the yaml file from the download.
3. Update the [Custom Resource Definitions](/developerportal/deploy/private-cloud-technical-appendix-01/#custom-resources) by running `kubectl apply -f mx-privatecloud-operator-crd/crds/`.
4. Update the configuration by running the following command: `helm upgrade -n <your namespace> -f <yaml file name> <release name> mx-privatecloud-operator-installer`.

## Uninstalling the Cluster

To uninstall the cluster, perform the following steps:

1. [Delete the environment](/developerportal/deploy/private-cloud-deploy/#delete-environment) in the Mendix on Kubernetes portal.
2. [Ensure all Mendix apps are fully deleted](/developerportal/deploy/private-cloud-cluster/#delete-namespace), especially the Storage Instances.
3. Use the `helm uninstall` command to complete the process. For more information, see [helm uninstall] (https://helm.sh/docs/helm/helm_uninstall) in the Helm documentation.
