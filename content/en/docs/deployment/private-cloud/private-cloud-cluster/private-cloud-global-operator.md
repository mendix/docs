---
title: "Running the Mendix Operator in Global Mode"
url: /developerportal/deploy/global-operator/
description: "Describes the processes of installing and configuring the Mendix Operator in the Private Cloud in Global mode"
weight: 30
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

When running the Mendix Operator in Global mode, one installation of the Mendix Operator and Agent is sufficient to manage applications across multiple namespaces. This Operator mode is recommended for new customers, or customers that want to streamline and simplify their deployments and operations. For existing customers, and for use cases that require having a separate Operator instance for every namespace, the [Standard mode](/developerportal/deploy/standard-operator/) is still available and supported.

{{% alert color="warning" %}}
It is essential to ensure that each namespace is exclusively managed by a single Operator. The deployment of two Operators, particularly with distinct versions, to manage the same namespace, may lead to conflicts, resulting in the cancellation and rollback of each operator's modifications.
{{% /alert %}}

## Installing the Global Operator

While installing the Mendix Operator in Global mode, you must first deploy the Mendix Operator and Agent within the *Global Operator namespace*. A Global Operator namespace comprises the Operator itself, the Agent, and the configuration that instructs the Operator on the namespaces it should oversee.

After configuring the Global Operator namespace, you must configure the *managed namespaces*, that is, namespace-specific configuration settings. This may include setting up storage plans, ingress configurations, registry settings, proxy, or custom TLS, all of which are tailored to the specific requirements of the managed namespace. The post-installation configuration process also includes creating an application within the managed namespace.

To install and configure the Global Operator, perform the following steps:

1. In the Private Cloud Portal, create a cluster and select **Global Installation** as the **Installation Type**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator1.png" >}}

2. Provide the **Cluster Name**, **Cluster Type** and **Description**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator2.png" >}}

3. Click **Create**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator3.png" class="no-border" >}}

4. After the Global Operator cluster is created, click **Add Global Operator Main Namespace**.

    {{% alert color="warning" %}}Ensure that you do not use a namespace that is intended to be a managed namespace, that is, a namespace where you plan to deploy a Mendix app. The Global Operator namespace must be separate from managed namespaces, otherwise you may encounter unexpected results.{{% /alert %}}

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator4.png" class="no-border" >}}

5. Provide the Global Operator **Namespace name**, select the **Installation type**, and then click **Done**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator5.png" class="no-border" >}}

6. Select the **Operating system** and install the Mendix Operator by performing the following steps:

    1. [Download the Configuration Tool](/developerportal/deploy/standard-operator/#download-configuration-tool).
    2. [Sign into the Platform](/developerportal/deploy/standard-operator/#openshift-signin).
    3. Perform the [Base Installation](/developerportal/deploy/standard-operator/#base-installation).

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator6.png" class="no-border" >}}

7. Verify that the installation was successful by using the following command: 

    ```shell
    kubectl -n {globalOperatorNamespace} get deployments
    ```

8. Verify that the status of the Operator and Agent pod is *Running* by using the following command:

    ```shell
    kubectl -n {globalOperatorNamespace} get pods
    ```

9. In the Private Cloud Portal, verify that the status of the Global Operator namespace is *Connected*, as in the following figure:

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator7.png" class="no-border" >}}

10. Click **Namespaces** to go to the **Namespaces Overview** page.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator8.png" >}}

11. Install the managed namespace under the Global Operator namespace by clicking **Add Managed Namespace**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator9.png" class="no-border" >}}

    {{% alert color="warning" %}}Ensure that you use the same name for the managed namespace in the Portal and in the cluster. Using different names may result in unwanted issues.{{% /alert %}}

12. Open the managed namespace and click **Done**.

13. [Configure the namespace](/developerportal/deploy/standard-operator/#configure-namespace).

14. On the **Configuration** page, select the **Operating system** and run the **Configuration** command under the **Configuration** section.

    {{% alert color="warning" %}}Ensure that you do not use a namespace that is already used as a Global Operator namespace. The Global Operator namespace must be separate from managed namespaces, otherwise you may encounter unexpected results.{{% /alert %}}

15. Click **Configure Namespace** and select the items which you want to configure.
16. In the **Global Operator** section, enter the **Global Operator namespace name**.

    {{% alert color="warning" %}}Ensure that you do not use the name of a managed namespace (that is, a namespace where you plan to deploy a Mendix app).{{% /alert %}}

17. [Configure any remaining namespace settings](/developerportal/deploy/standard-operator/#configure-namespace) and apply the configuration.

### Results

After you configure the managed namespace, the Agent and Operator pod are restarted automatically, so that the Global Operator namespace can process the newly added managed namespace. The managed namespace is added to the Operator configuration for the Global Operator namespace, and the required storage plans are created in the managed namespace.

The Operator configuration for the managed namespace is created as well. The configuration changes inside the managed namespace will take precedence over the global configuration.

After configuration, the status of managed namespace changes to **Configured**.

Once the managed namespace is configured, you can find the list with all the namespaces managed by the globally installed operator in **Addition Information** section of Global Operator Namespace.

{{% alert color="info" %}}
If the managed namespaces are deleted from the portal, the namespaces will not be deleted from the cluster. The managed namespaces needs to be manually deleted from the cluster. Additionally, you also need to remove the managed namespace from the list of managed namespaces in the Operator configuration of the main namespace.
{{% /alert %}}

### Next Steps

After everything is configured, you can deploy the application. For more information, see [Deploy Application](/developerportal/deploy/private-cloud-deploy/).

## Convert Namespace from Standard to Global Operator {#convert-standard-operator-to-global-operator}

You can convert a namespace which currently uses the standard operator to be a Global Operator managed namespace by completing the following steps.

1. On the Cluster Overview page, click **Convert Namespace**.

   {{< figure src="/attachments/deployment/private-cloud/global-operator/convert-namespace.png" >}}

2. Choose the namespace you want to convert to a managed namespace. The displayed namespaces match the Cluster type of the Global Operator Cluster. If your namespace is not listed, click **here** at the bottom of the page to expand the list.
 
    {{< figure src="/attachments/deployment/private-cloud/global-operator/choose-standard-namespace.png" >}}

3. After selecting the namespace, click **Next**. You will be redirected to a page with the command needed to convert the standard namespace to a global operator managed namespace.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/convert-namespace-command.png" >}}

4. Run the command.

    Once the command has been run successfully, your namespace will be converted to managed namespace as part of Global Operator installation on the cluster side.

    If the conversion command is not run and the **Next** button is clicked directly, an error message will be displayed because the presence of the standard namespace could not be verified in the list of managed namespaces.

    {{% alert color="info" %}}The namespace to be converted must be in the same cluster as the main namespace. Additionally, ensure that both namespaces have the same operator version; otherwise, the conversion will not be performed.{{% /alert %}}

5. Once the conversion command runs successfully, click **Next** to be redirected to the Conversion Summary pop-up page, which will confirm the successful conversion. This step will also ensure that the namespace conversion is visible on the portal side as well.

{{% alert color="info" %}}
Once all the standard namespaces within a cluster created on portal side are converted to Global Operator Managed namespace, then the status of the cluster would be changed to **Conversion Finalized**, otherwise it will show **Conversion in Progress** if not all the namespaces within that cluster are converted.
{{% /alert %}}

## Licensing

### Installing Private Cloud License Manager

Configure Private Cloud License Management (PCLM) in the Global Operator namespace. For more information, see [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/).

{{% alert color="info" %}}
For Global Operator installations, execute the above command in both the Global Operator namespace and its managed namespaces where the license is intended to be applied. Make sure that identical PCLM license details are configured for both the Managed and Global Operator namespaces to avoid unexpected outcomes. Global Operator is in beta, and it does not currently fully support PCLM.
{{% /alert %}}

{{% alert color="warning" %}}
It is crucial to maintain consistent Operator configuration for PCLM in both the Global Operator and managed namespaces. This requires uniformity in server URLs and credential secret names used both in managed and Global Operator namespaces. Any deviations from this practice may lead to unexpected and undesired outcomes.
{{% /alert %}}

Licenses imported in the PCLM Server appear in the PCLM Statistics section of the Global Operator main namespace. You can see both **Runtime** and **Operator** license.

Claimed licenses are visible in the PCLM Statistics section of the Managed namespace.

### Licensing application via Subscription Secret and manual operator license

If you wish to apply a Runtime license using a subscription secret, it must be applied manually for each managed namespace. The same process must be performed when applying an Operator license to all managed namespaces.

## Upgrading Managed Namespaces

Currently, the upgrade procedure is not available for managed namespaces.
