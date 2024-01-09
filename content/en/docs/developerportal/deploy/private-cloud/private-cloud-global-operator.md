---
title: "Global Operator"
url: /developerportal/deploy/global-operator/
description: "Describes the processes for using the Mendix Operator directly to deploy a Mendix app in the Private Cloud"
weight: 30
tags: ["Deploy", "Private Cloud", "Environment", "Operator", "CI/CD", "CLI"]
---

## 1 Introduction

The current form of the Mendix Operator requires its installation per every new namespace where one or more Mendix Application are deployed, this alongside with the Kubernetes Agent which leads to high repetition and redundancy of configuration.

But most importantly the [Custom Resource Definitions (CRDs)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) are always global and installed at the cluster level - shared and visible among all namespaces in a given Kubernetes/OpenShift cluster. This potentially creates operational problems:

-   Customers deploying multiple versions of the Mendix Operator in different namespaces in the same cluster, could potentially have CRDs conflicts and/or missing properties that are crucial to operation.

-   The Kubernetes Agent is installed in all namespaces alongside the Mendix Operator.

-   Mendix Operator Upgrades - of one namespace - potentially involving CRDs updates, might break other Mendix Operators installations running in other namespaces.

* With the introduction of Global Operator, customers **will only** need to install **one global Operator and Agent to manage applications across multiple namespaces.***

Considering the fact that some customer still wants to continue with the current operator set up of having one instance per operating namespace, both the options are available for the customers.

Moving forward the Operator would be having two modes:

1.  **Operator *Standard* mode**, to support existing customers, without disrupting their operations neither compromising their deployments.

2.  ***Global* Operator mode**, tailored for new customers, or customers that want to streamline and simplify their deployments and operations.

***Note***: This is a beta release, considering which we suggest to install the Global mode in a new namespace

While it\'s technically feasible to integrate Global and local Operators, or even deploy multiple Global operators within a single cluster, it\'s essential to ensure that each namespace is exclusively managed by a single Operator.

The deployment of two Operators, particularly with distinct versions, to manage the same namespace may lead to conflicts, resulting in the cancellation and rollback of each other\'s modifications. Therefore, it is strongly recommended to avoid such configurations.

-   In the context of **Global Operator management**, a Global Operator namespace comprises the Operator itself, the Agent, and the configuration that instructs the Operator on the namespaces it should oversee.

> Conversely, a **Managed namespace** encompasses applications, namespace specific configuration settings (Storage Plans, Ingress, Registry, Proxy and Custom TLS), but excludes the presence of the Operator itself.

## 2 Installing the Global Operator

Global Operator installation will be done in two steps:

1.  **Base Installation**: During the initial installation phase, the Mendix Operator and Agent are deployed within the Global Operator namespace. This deployment is executed by executing the base installation command for the Global Operator namespace.

2.  **Post Configuration Installation**: Following the base installation, additional configuration steps are undertaken within the namespace managed by the Global Operator. These post-installation tasks encompass the setup of storage plans, database plans, Ingress configurations, and Registry settings, all of which are tailored to the specific requirements of the managed namespace. Furthermore, the application is created within the managed namespace as a part of this post-configuration installation process.

Lets create a global operator namespace, perform base install and then configure the managed namespaces.

In order to do so, follow below steps:

1.  Go to Private Cloud Portal and create a cluster and select the Installation type as Global Installation.

[!IMAGE HERE]

2.  Provide the Cluster Name, Cluster type and Description

3.  Click on Create. Once the Global Operator cluster is created, there will be only one Global Namespace and multiple managed namespaces under it.

4.  Once the global operator cluster is created, we need to create Global Operator Namespace under it by clicking on **Add Global Operator Main Namespace**.

[!IMAGE HERE]
5.  Provide the Global Operator Namespace name, select the Installation type and click on Done.

[!IMAGE HERE]

6.  Once, the main operator namespace is created, select the Operating system and follow the steps as specified in [Download Configuration Tool](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#download-configuration-tool), [Signing into the Platform](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#openshift-signin) and [Base Installation](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#base-installation)

[!IMAGE HERE]

7.  Once the base installation is done, you can configure the managed namespace.

***Note***: Ensure that the base installation is not done for the managed namespace, as this might result into unexpected outcomes.

Once the base installation is done, the deployments for Operator and Agent are installed under this namespace.

8.  You can check the above installations using below command:

kubectl -n \<globalOperatorNamespace\> get deployments

9.  Verify that the status of Operator and Agent pod is Running by using below command:

kubectl -n \<globalOperatorNamespace\> get pods

10. Check that the status of the global operator namespace is *Connected* in the portal

11. Click on **Namespaces**, you will be redirected to namespaces overview page under which you can see the Global Operator namespace and Managed namespace.

12. Now, we need to install managed namespace under the Global Operator namespace. Click on **Add Managed Namespace.**

13. Enter the managed namespace and Click on Done.

14. Once, the managed namespace is created, it needs to be configured as specified in [[Namespace configuration.]{.underline}](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#configure-namespace)

15. Click on Configuration page, select the Operating system and run the Configuration command as specified under Configuration section.

***Note***: Ensure that the post installation is not done for the Global Operator namespace, as this might result into unexpected outcomes.

10. Click on *Configure Namespace* and select the items which needs to be configured

11. Under Global Operator section, provide the **global operator namespace name**.

***Note***: Ensure that the managed namespace name is not provided here.

12. Enter the remaining configuration for the managed namespace as specified in [Configure Namespace](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#configure-namespace) and apply the configuration.

***Note***: Upgrade procedure is not applicable for managed namespace.

Once the post installation is complete, the Agent and Operator pod are restarted automatically. This will allow global namespace to process the newly added managed namespace.

The Operator Configuration for Global Namespace will have an additional section under spec field:

globalOperator:

namespaces:

\- \<managedNamespace\>

Also, the storage plans configured in post installation will be created inside the managed namespace.

The operator configuration specific for managed namespace will also be created. The changes inside the managed namespace will be taking precedence every time.

13. After the successful post installation, the status of managed namespace is changed to **Configured**

14. Once everything is configured, you can deploy the application as specified in [Deploy Application](https://docs.mendix.com/developerportal/deploy/private-cloud-deploy/)

## 3 Installing Private Cloud License Manager

Configure PCLM as documented in <https://docs.mendix.com/developerportal/deploy/private-cloud/private-cloud-license-manager/> in the global operator namespace.

*Recommendation*: It is crucial to maintain consistent operator configuration for Private Cloud License Management (PCLM) in both the global operator and managed namespaces. This requires uniformity in server URLs and credential secret names used both in managed and global operator namespace. Any deviations from this practice may lead to unexpected and undesired outcomes