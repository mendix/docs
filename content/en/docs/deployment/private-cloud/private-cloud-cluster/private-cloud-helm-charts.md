---
title: "Installing Components through Helm Chart UI"
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
* With the current release, namespaces initially created with mxpc-cli cannot be migrated and managed with Helm charts.
* The Helm chart does not cover [advanced operator configurations](/developerportal/deploy/private-cloud-cluster/#advanced-operator-configuration).
* Currently, we do not provide a public repository to download the Helm chart. The Helm charts are currently only be downloaded through our in house mx-ops-cli web UI.

## Installing and Configuring the Mendix on Kubernetes with Helm Charts

To install the solution, perform the following steps:

1. [Create a Mendix on Kubernetes cluster.](/developerportal/deploy/private-cloud-cluster/)
2. Create a namespace in your cluster.
3. Download the Helm charts from the *privatecloud-ops-cli* Gitlab.
4. Run the following command: `./mx-ops-cli web-ui`.

    The Web UI application opens locally in your browser. You can now select one of the following options:

    * **Start from Scratch** - Creates a new configuration file.
    * **Import from File** - Allows you to import configurations from an existing yaml file.
    * **Download Helm Charts** - Downloads the latest Helm charts so you can open and view them. You can use this option to check the expected Helm chart format, so you can use them as a template for your own charts.

5. For an initial configuration, select **Start from Scratch**. The configuration wizard opens.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/helm-chart-wizard.png" >}}

6. In the **General Settings** tab, enter the cluster that you created in step 1.
7. Follow the wizard to configure the other options according to your requirements.

    You must specify the database, [storage plan](/developerportal/deploy/private-cloud-storage-plans/), [ingress](/deploy/private-cloud-cluster/private-cloud-ingress-settings/), and [registry](/developerportal/deploy/private-cloud-registry/).
    
8. Click **Generate & Download** to generate the yaml file with the configurations that you provided.

9. Run the following command: `helm install -n <your namespace> -f <yaml file name> <your namespace> ./mx-privatecloud-operator-installer`.

10. Ensure that your cluster have access to the Mendix on Kubernetes Portal for adding the storage plans, and that the Private Cloud Portal is safelisted in the cluster.

The installer performs the basic installation and applies the configurations at the same time.

## Applying the Configuration Changes with Helm Charts

If you want to update your configuration (for example, change the database), recreate the yaml file by using the same wizard as above, and then run the following command: `helm update -n <your namespace> -f <yaml file name> <your namespace> ./mx-privatecloud-operator-installer`.