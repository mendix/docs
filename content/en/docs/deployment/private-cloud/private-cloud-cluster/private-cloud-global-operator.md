---
title: "Running the Mendix Operator in Global Mode"
url: /developerportal/deploy/global-operator/
description: "Describes the processes of installing and configuring the Mendix Operator for Mendix on Kubernetes in Global Mode"
weight: 30
---

## Introduction

When running the Mendix Operator in Global mode, one installation of the Mendix Operator and Agent is sufficient to manage applications across multiple namespaces.

{{% alert color="warning" %}}
It is essential to ensure that each namespace is exclusively managed by a single Operator. The deployment of two Operators, particularly with distinct versions, to manage the same namespace, may lead to conflicts, resulting in the cancellation and rollback of each operator's modifications.
{{% /alert %}}

Global Operator installation is supported officially from Operator version v2.20.0 and above.

## Installing the Global Operator

While installing the Mendix Operator in Global mode, you must first deploy the Mendix Operator and Agent within the *Global Operator namespace*. A Global Operator namespace comprises the Operator itself, the Agent, and the configuration that instructs the Operator on the namespaces it should oversee.

After configuring the Global Operator namespace, you must configure the *managed namespaces*, that is, namespace-specific configuration settings. This may include setting up storage plans, ingress configurations, registry settings, proxy, or custom TLS, all of which are tailored to the specific requirements of the managed namespace. The post-installation configuration process also includes creating an application within the managed namespace.

To install and configure the Global Operator, perform the following steps:

1. In the Mendix on Kubernetes Portal, create a cluster and select **Global Installation** as the **Installation Type**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator1.png" >}}

2. Provide the **Cluster Name**, **Cluster Type** and **Description**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator2.png" >}}

3. Click **Create**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator3.png" class="no-border" >}}

4. After the Global Operator cluster is created, click **Add Global Operator Main Namespace**.

    {{% alert color="warning" %}}Ensure that you do not use a namespace that is intended to be a managed namespace, that is, a namespace where you plan to deploy a Mendix app. The Global Operator main namespace must be separate from managed namespaces, otherwise you may encounter unexpected results.{{% /alert %}}

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator4.png" class="no-border" >}}

5. Provide the Global Operator **Namespace name**, select the **Installation type**, and then click **Done**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator5.png" class="no-border" >}}

6. Select the **Operating system** and install the Mendix Operator and Mendix Agent by performing the following steps:

    1. [Download the Configuration Tool](/developerportal/deploy/standard-operator/#download-configuration-tool).
    2. [Sign into the Platform](/developerportal/deploy/standard-operator/#openshift-signin).
    3. Perform the [Base Installation](/developerportal/deploy/standard-operator/#base-installation).

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator6.png" class="no-border" >}}

    4. You can apply the custom TLS and proxy settings in the Global Operator main namespace by just selecting only the **Custom TLS** and **Proxy** options in the Configuration Tool.

    {{% alert color="info" %}}Base installation can only be performed on the Global Operator main namespace. Along with base installation, you can also apply custom TLS and proxy settings. However, other configurations such as storage plan, database plan, ingress configuration, or registry configuration are not supported in Global Operator main namespace.{{% /alert %}}

7. Verify that the installation was successful by using the following command: 

    ```shell
    kubectl -n {globalOperatorNamespace} get deployments
    ```

8. Verify that the status of the Operator and Agent pod is *Running* by using the following command:

    ```shell
    kubectl -n {globalOperatorNamespace} get pods
    ```

9. In the Mendix on Kubernetes Portal, verify that the status of the Global Operator main namespace is *Connected*, as in the following figure:

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator7.png" class="no-border" >}}

10. Click **Namespaces** to go to the **Namespaces Overview** page.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator9.png" >}}

11. Once the Global Operator main namespace is connected, the **Convert Namespace** and **Add Managed Namespace** buttons are enabled and you can install the managed namespace under the Global Operator namespace by clicking **Add Managed Namespace**.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/global-operator8.png" class="no-border" >}}

    {{% alert color="warning" %}}Ensure that you use the same name for the managed namespace in the Portal and in the cluster while running the command. Using different names may result in unwanted issues.{{% /alert %}}

12. Provide the managed namespace name under which you want to deploy the mendix application and click **Done**. 

    {{% alert color="warning" %}}Ensure that you do not use the name of a main namespace {{% /alert %}}

13. On the **Configuration** page, select the **Operating system** and run the **Configuration** command under the **Configuration** section.

    {{% alert color="warning" %}}Ensure that you do not use a namespace that is already used as a Global Operator main namespace. The Global Operator namespace must be separate from managed namespaces, otherwise you may encounter unexpected results.{{% /alert %}}

    {{% alert color="warning" %}}Ensure that you do not perform base installation on the Global Operator managed namespace.{{% /alert %}}

14. Click **Configure Namespace**. Under **Global Operator** section in the cli, provide the main namespace name and select the resources which need to be configured in the managed namespace. Follow [Configure the namespace](/developerportal/deploy/standard-operator/#configure-namespace) for more information. Once the information is provided, under **Review and Apply** section, click **Apply Configuration** 

### Results

After you configure the managed namespace, the Agent and Operator pod are restarted automatically, so that the Global Operator namespace can process the newly added managed namespace. The managed namespace is added to the Operator configuration for the Global Operator namespace, and the required storage plans are created in the managed namespace.

The Operator configuration for the managed namespace is created as well. 

{{% alert color="info" %}}The configuration changes inside the managed namespace will take precedence over the global configuration.{{% /alert %}}

After configuration, the status of managed namespace changes to **Configured**.

Once the managed namespace is configured, you can find the list with all the namespaces managed by the globally installed operator in **Additional Information** section of the main namespace. The list is displayed in the **Global Installation Managed Namespaces** section.

{{% alert color="info" %}}
If you delete the managed namespaces from the portal, they are not deleted from the cluster. You must delete them from the cluster manually. You must also remove the managed namespace from the list of managed namespaces in the Operator configuration of the main namespace.

The main namespace cannot be deleted from the portal until the managed namespaces are deleted from the cluster.
{{% /alert %}}

### Next Steps

After everything is configured, you can deploy the application. For more information, see [Deploy Application](/developerportal/deploy/private-cloud-deploy/). The application is deployed within the managed namespace.

## Convert Namespace from Standard to Global Operator {#convert-standard-operator-to-global-operator}

You can convert a namespace which currently uses the standard operator to be a Global Operator managed namespace by completing the following steps.

{{% alert color="info" %}}
Ensure that the namespace to be converted is in the same cluster as the main namespace. Additionally, ensure that both namespaces have the same operator version; otherwise, the conversion will not be performed.
{{% /alert %}}

{{% alert color="info" %}}
Currently, there is no API support to convert a namespace from standard to global operator.
{{% /alert %}}

1. On the Cluster Overview page, click **Convert Namespace**.

   {{< figure src="/attachments/deployment/private-cloud/global-operator/convert-namespace.png" >}}

2. Choose the namespace you want to convert to a managed namespace. The displayed namespaces match the Cluster type of the Global Operator Cluster. If your namespace is not listed, click **here** at the bottom of the page to expand the list.
 
    {{< figure src="/attachments/deployment/private-cloud/global-operator/choose-standard-namespace.png" >}}

3. After selecting the namespace, click **Next**. You will be redirected to a page with the command needed to convert the standard namespace to a global operator managed namespace.

    {{< figure src="/attachments/deployment/private-cloud/global-operator/convert-namespace-command.png" >}}

4. Run the command and make sure that you are logged in to the cluster where the conversion must be done.

    Once the command has been run successfully, your namespace will be converted to managed namespace as part of Global Operator installation on the cluster side.

    If the conversion command is not run and the **Next** button is clicked directly, an error message will be displayed because the presence of the standard namespace could not be verified in the list of managed namespaces.

    {{% alert color="info" %}}The namespace to be converted must be in the same cluster as the main namespace. Additionally, ensure that both namespaces have the same operator version; otherwise, the conversion will not be performed.{{% /alert %}}

5. Once the conversion command runs successfully, click **Next** to be redirected to the Conversion Summary pop-up page, which will confirm the successful conversion. This step will also ensure that the namespace conversion is visible on the portal side as well.

6. Click **Done** to return to the Namespaces Overview page.

{{% alert color="info" %}}
After the standard namespaces are converted to Global Operator Managed namespace, the status of the cluster in which the standard namespace was present before conversion is changed to **Conversion Finalized**. If not all the namespaces within the cluster are converted yet, the status shows **Conversion in Progress**.
{{% /alert %}}

## Licensing

### Installing Private Cloud License Manager

Configure Private Cloud License Management (PCLM) in the Global Operator namespace. For more information, see [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/).

{{% alert color="info" %}}
For Global Operator installations, execute the commands from the PCLM section in both the Global Operator namespace and its managed namespaces where the license must be applied. Make sure that identical PCLM license details are configured for both the Managed and Global Operator namespaces to avoid unexpected outcomes.
{{% /alert %}}

{{% alert color="warning" %}}
It is crucial to maintain consistent Operator configuration for PCLM in both the Global Operator main namespace and managed namespaces. This requires uniformity in server URLs and credential secret names used both in managed and Global Operator namespaces. Any deviations from this practice may lead to unexpected and undesired outcomes.
{{% /alert %}}

Licenses imported in the PCLM Server appear in the PCLM Statistics section of the Global Operator main namespace. You can see both **Runtime** and **Operator** license.

Claimed licenses are visible in the PCLM Statistics section of the Managed namespace.

### Offline License and Subscription Secret

For Global operator, the Runtime and Operator licenses must be applied to all the managed namespaces separately. 

## Upgrading Managed Namespaces

When you [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/#upgrade-cluster) the Global Operator main namespace, the managed namespaces within the global operator namespace are also automatically upgraded.
