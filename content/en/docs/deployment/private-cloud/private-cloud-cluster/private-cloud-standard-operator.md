---
title: "Running the Mendix Operator in Standard Mode"
url: /developerportal/deploy/standard-operator/
description: "Describes the processes of installing and configuring the Mendix Operator in the Private Cloud in Standard mode"
weight: 30
---

## Introduction

When running the Mendix Operator in Standard mode, you must install it separately for every namespace where a Mendix app is deployed. However, the [Custom Resource Definitions (CRDs)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) are global and installed at the cluster level - shared and visible among all namespaces in a given Kubernetes/OpenShift cluster. This can potentially lead to redundancies and conflicts, as well as issues when upgrading a single Mendix Operator installation.

To avoid these potential issues, you can [run the Mendix Operator in Global mode](/developerportal/deploy/global-operator/). However, the Standard mode is still available for existing customers, and to support use cases that require having a separate Operator instance for every namespace.

{{% alert color="warning" %}}
It is essential to ensure that each namespace is exclusively managed by a single Operator. The deployment of two Operators, particularly with distinct versions, to manage the same namespace, may lead to conflicts, resulting in the cancellation and rollback of each operator's modifications.
{{% /alert %}}

## Downloading the Configuration Tool {#download-configuration-tool}

Before you can use the Mendix Operator in your namespace you need to install it and configure the services your app will use. Mendix provides you with a **Configuration Tool** which guides you through the process.

If you are not already on the installation tab for your namespace, go to it by following these instructions:

1. Go to the Cluster Manager page by opening the [Global Navigation Menu](/developerportal/global-navigation/), and then clicking **Deployment** > **Private Cloud**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/cluster-manager.png" class="no-border" >}}

2. Click the **Details** icon next to the namespace you want to use.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/cluster-details.png" class="no-border" >}}

3. Select **Installation** from the navigation bar to the left of the page.

4. Download the Configuration Tool by doing the following steps:

    1. Choose the **Operating System** for your local computer.

       {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/choose-operating-system.png" class="no-border" >}}

    2. Click **Download Executable**.

        {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/download-executable.png" class="no-border" >}}

    3. Choose the **Mendix Operator Version** that you would like to install. If you have already installed the Mendix Operator, your currently installed version will be highlighted.
    4. Click the **Download** icon to download the installation and configuration tool. Make sure that it is stored somewhere on your path.

{{% alert color="info" %}}Mendix Operator version 2.\*.\* supports Kubernetes versions 1.19 and later. Mendix Operator version 1.12.\* supports Kubernetes versions 1.12 through 1.21. Choose the latest version that is supported by your Kubernetes cluster.{{% /alert %}}

{{% alert color="info" %}}Versions earlier than 1.9.0 are only available to allow *configuration* of previously installed Mendix Operator versions.{{% /alert %}}

{{% alert color="warning" %}}Once you've installed a certain version of the Mendix Operator into any namespace in the cluster, you should not install older versions of the Mendix Operator into the same cluster, including other namespaces.{{% /alert %}}

{{% alert color="info" %}}The installation and configuration tool only supports a limited range of Mendix Operator versions. If the Mendix Operator version in your namespace is too new or too old, the configuration tool will not be able to configure it. Download a version of the configuration tool that is compatible with the Mendix Operator you have installed. Both the ARM and AMD versions of the mxpc-cli tool are available to download.{{% /alert %}}

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/download-operator-version.png" class="no-border" >}}

## Signing in to the Platform {#openshift-signin}

You will need to have administrator rights to your private cloud platform. This means you will have to log in before you run the Configuration Tool.

These instructions are for the OpenShift platform; a similar process will be required for other platforms.

You can do this as follows:

1. Sign in to the OpenShift Console.

2. Click **Copy Login Command** in the user drop-down.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image9.png" class="no-border" >}}

3. Choose your IdP (Identity Provider).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image10.png" class="no-border" >}}

4. Click **Display Token**.

5. Copy the command under **Log in with this token**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image11.png" class="no-border" >}}

6. Paste the command into your command line terminal and press <kbd>Enter</kbd>.

## Running the Configuration Tool {#running-the-tool}

Once you are signed in to your cluster you can run the Configuration Tool.

To install in non-interactive mode please see: [Install and Configure Mendix for Private Cloud Non-interactive Mode](/developerportal/deploy/private-cloud-cli-non-interactive/)

1. Copy the **Installation Command** by clicking **Copy to clipboard**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/installation-command.png" class="no-border" >}}

2. Paste the command into your command line terminal and press <kbd>Enter</kbd>

    {{% alert color="warning" %}}The Configuration Tool needs a CLI terminal with mouse support. Read the [Terminal limitations](/developerportal/deploy/private-cloud-cluster/#terminal-limitations) section before running the Configuration Tool.{{% /alert %}}

    You will see the configuration options on the screen and will be guided through filling in the information needed.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/post-install-landing-page.png" class="no-border" >}}

    {{% alert color="info" %}}Mendix recommends running the Configuration Tool in a fully-maximized terminal window to ensure that all options are visible.{{% /alert %}}

### Base Installation {#base-installation}

If the Mendix Operator and the Mendix Gateway Agent have not been installed in your cluster, you will need to install them.

1. Click **Base Installation**.

2. Select the required **Cluster Mode** – *connected* or *standalone*.

    For more information, see [Connected and Standalone Clusters](/developerportal/deploy/private-cloud/#connected-standalone) in the *Private Cloud* documentation.

3. Select the required **Cluster Type** – *openshift* or *generic*.

4. Click **Run Installer** to install the Mendix Operator and Mendix Gateway Agent in your cluster.
    You will see the screen below.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/installer-options.png" class="no-border" >}}

    {{% alert color="info" %}}The installation is successful if the **Installer output** ends with **Done**.{{% /alert %}}

5. Click **Save Installer** if you want to save these settings to be used later.

6. Click **Exit Installer** to finish.

The Mendix operator and Mendix Gateway Agent are now installed on your platform.

{{% alert color="info" %}}
If you have selected the **Connected Mode** which installs the **Mendix Gateway Agent** component, please take note of the following:

* All the Websocket connections (to communicate with the Mendix Platform) are initiated by the Mendix Gateway Agent from the cluster, and said connections do not require any listening ports to be opened in the cluster's firewall. Only an outbound connection from the cluster to the Portal needs to be set up, by safelisting the URL `https://interactor-bridge.private-cloud.api.mendix.com` as mentioned above.

* All the Websocket connections are established over HTTPS, and therefore, can be routed through a Proxy server.
{{% /alert %}}

### Configure Namespace {#configure-namespace}

You can now configure the resources required for your namespace.

The first time you configure the namespace, you should select all the items under **Select items to configure** except **Proxy** and **Custom TLS**. Only select **Proxy** if you want to configure a proxy for your namespace. Select **Custom TLS** only if you want to configure custom CAs for your namespace.

After pressing the **Configure namespace** button, you will see a prompt to resume a previous session.
Clicking the **OK** button will load form field values from a locally saved previous session file.
For example, if you'd like to change the database hostname, or if you exited without saving or applying changes.

* Press **OK** to restore all filled forms to their valued values from the previous session.
* Press **Cancel** to start with empty form fields (for example, to create an additional database plan).

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/configure-namespace.png" class="no-border" >}}

The options do the following:

* **Database Plan** – will create a new database plan for your cluster — you must have at least one database plan in your namespace, but you can have more than one
* **Storage Plan** – will create a new storage plan for your cluster — you must have at least one storage plan in your namespace, but you can have more than one
* **Ingress** – will configure the ingress for your namespace — if there is already an ingress, this will replace it with new settings
* **Registry** – will configure a registry for your namespace — if there is already a registry, this will replace it with new settings
* **Proxy** – will configure a proxy for your namespace — if there is already a proxy, this will replace it with new settings
* **Custom TLS** – will configure custom CA trust for your namespace — if there is already a custom CA trust configuration, this will replace it with new settings

1. Select the options you need to configure – the first time you configure your namespace you must check *all the first four options*.  **Proxy** is optional.

2. Click **Configure Namespace**.

    You will be shown the **Installation wizard** landing page.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/installation-wizard.png" class="no-border" >}}

3. Click the appropriate button at the bottom of the page to navigate to the setup page for each resource which you need to configure. Alternatively, use the allocated function keys (for example <kbd>F2</kbd> for the **Database Plan**).

4. Each page will lead you through the information you need to supply.

    These are described in the following sections:

    * [Database Plan](#database-plan)
    * [Storage Plan](#storage-plan)
    * [Ingress](#ingress)
    * [Registry](#registry)
    * [Proxy](#proxy)
    * [Custom TLS](#custom-tls)

#### Database Plan {#database-plan}

Every Mendix app environment needs its own dedicated database.
Create a database plan to configure how the Mendix Operator will manage databases.

See the [Database plans](/developerportal/deploy/private-cloud-storage-plans/#database) document for a list and instructions for all options.

#### Storage Plan {#storage-plan}

Every Mendix app environment needs a file (blob) storage bucket to store System.FileDocument entities, such as AWS S3, Azure Blob Storage or MinIO.
Create a storage plan to configure how the Mendix Operator will manage file storage.

See the [Blob storage plans](/developerportal/deploy/private-cloud-storage-plans/#blob-storage) document for a list and instructions for all options.

#### Ingress {#ingress}

**openshift-route** will configure an OpenShift Route. This can only be used for OpenShift clusters. This option allows you to enable or disable TLS.

**kubernetes-ingress** will configure ingress according to the additional domain name you supply. This option allows you to configure the ingress path and custom ingress class (dependent on the Ingress controller) and enable or disable TLS.

**service-only** will create just a Kubernetes Service, without an Ingress or OpenShift route.
This option enables you to use a Load Balancer without an Ingress, or to manually create and manage the Ingress object (an Ingress that is not managed by Mendix for Private Cloud).

{{% alert color="info" %}}
When switching between Ingress, OpenShift Routes, and Service Only, you need to [restart the Mendix Operator](/developerportal/deploy/private-cloud-cluster/#restart-after-changing-network-cr) for the changes to be fully applied.
{{% /alert %}}

{{% alert color="info" %}}
Additional network options such as Ingress/Service annotations and Service ports are available in [advanced network settings](/developerportal/deploy/private-cloud-cluster/#advanced-network-settings).
{{% /alert %}}

#### Registry {#registry}

To run an app in Kubernetes, it needs to be converted (packaged) into a container image and pushed to an OCI registry.

The Mendix Operator automatically builds and pushes images into a private OCI registry; to push an image to the target registry, the Mendix Operator needs to be configured.

See the [Image registry](/developerportal/deploy/private-cloud-registry/) document for a list of supported registries and instructions how to configure each one.

### Proxy {#proxy}

Check the **Enable Proxy** checkbox if a proxy is required to access the public internet from the namespace; you will be asked for the proxy configuration details.

List all local (including cluster-local) IP addresses and domains in the **No proxy for** field. The format is listed below:

Hosts which should be excluded from proxying are specified as:

* A string containing comma-separated values, where each value is one of the following:
    * An IP address prefix (`1.2.3.4`)
    * An IP address prefix in CIDR notation (`1.2.3.4/8`)
    * A domain name
    * If you use the special DNS label (`*`) this indicates that there are no exceptions and everything will be proxied
* Each IP address prefix or domain name can also include a literal port number (`1.2.3.4:80`)
* A domain name matches that name and all subdomains
* A domain name with a leading "." matches subdomains only

    For example, "foo.com" matches "foo.com" and "bar.foo.com"; ".y.com" matches "x.y.com" but not "y.com".

For more information about how to use this field, see the [http proxy documentation used by the Configuration Tool](https://pkg.go.dev/golang.org/x/net/http/httpproxy).

### Custom TLS {#custom-tls}

{{% alert color="info" %}}
To use this option, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.7.0 or later.
{{% /alert %}}

{{% alert color="info" %}}
In Operator version 2.7.0 and above, the build pod will trust certificates from the custom TLS trust secret.
{{% /alert %}}

To use encryption and avoid [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), communication with all external services should be done over TLS.
By default, Mendix Operator trusts Certificate Authorities from the [Mozilla CA root bundle](https://wiki.mozilla.org/CA), as they are provided by default in the container image.

If Mendix for Private Cloud needs to communicate with external services, some of those services might have TLS certificates signed by a custom (private) CA.
In order for the Mendix Operator to trust such certificates, you need to add their root CAs to the Mendix Operator configuration.

1. In another terminal, prepare the Kubernetes secret containing the custom root CAs list:
    1. Create a `custom.crt` file, containing the public keys of all custom (private) CAs that Mendix for Private Cloud should trust:

        ```text
        # Private CA 1
        -----BEGIN CERTIFICATE-----
        [...]
        -----END CERTIFICATE-----
        # Private CA 2
        -----BEGIN CERTIFICATE-----
        [...]
        -----END CERTIFICATE-----
        ```

        (concatenate all the public keys from custom CAs into one `custom.crt` file, separating them with line breaks and optional comments).
    2. Load the file into a Secret (replace `{namespace}` with the namespace where the Operator is installed, and `{secret}` with the name of the Secret to create, for example, `mendix-custom-ca`):

        For OpenShift:

        ```shell
        oc -n {namespace} create secret generic {secret} --from-file=custom.crt=custom.crt
        ```

        For Kubernetes:

        ```shell
        kubectl -n {namespace} create secret generic {secret} --from-file=custom.crt=custom.crt
        ```

2. Paste the name of this `custom.crt` secret (the `{secret}` used in the commands above) into the **CA Certificates Secret Name** field (for example, `mendix-custom-ca`):

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/custom-tls-config.png" alt="Custom TLS configuration" class="no-border" >}}

These custom CAs will be trusted by:

* The Mendix Operator when communicating with the database and file storage
* The Mendix Operator when pushing app images to the container registry
* Mendix apps when communicating with the database, file storage and external web services
* The Mendix Agent when connecting to Mendix Portal

{{% alert color="info" %}}
To prevent MITM attacks, enable **Strict TLS** for the database and use an HTTPS URL for MinIO. This will ensure that all communication with data storage is done over TLS, and that certificates are properly validated.
{{% /alert %}}

{{% alert color="info" %}}
Strict TLS mode should only be used with apps created in Mendix 8.15.2 (or later versions), earlier Mendix versions will fail to start when validating the TLS certificate.
{{% /alert %}}

{{% alert color="info" %}}
The Mendix Gateway Agent will trust CAs specified through Custom TLS Trust if you are using Mendix Operator version 2.6.0 or above.
{{% /alert %}}

### Review and Apply {#review-apply}

When you have configured all the resources, do the following:

1. Press <kbd>F7</kbd> to **Review and Apply**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/review-and-apply.png" class="no-border" >}}

2. Click **Evaluate Configuration** to check the configuration.

    Resources which are correctly configured will have a status **Valid configuration**. If an resource is incorrectly configured, it will have a status **Invalid configuration: …** and an explanation of the issue.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/evaluate-configuration.png" class="no-border" >}}

3. Once you have evaluated the configuration, click **Write YAML** to save a copy of the configuration .yml files on your local machine.

    The **Installer output** panel will display the locations of the saved files.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/write-yaml.png" class="no-border" >}}

4. Click **Apply Configuration** to apply the configuration to your namespace.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/apply-configuration.png" class="no-border" >}}

    Once the configuration has been applied you will see the message **Successfully applied all the configuration!**.

5. Click **Exit Installer** to return to the landing page.

## Confirming Namespace Configuration

When using a connected cluster, its status will be shown as **Connected** in the Mendix Portal when the namespace is configured correctly. You may need to click the **Refresh** button if the screen does not update automatically.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image22.png" class="no-border" >}}
