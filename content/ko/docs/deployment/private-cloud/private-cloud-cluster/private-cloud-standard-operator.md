---
title: "Standard 모드에서 Mendix Operator 실행"
url: /developerportal/deploy/standard-operator/
description: "Standard 모드에서 Mendix on Kubernetes용 Mendix Operator를 설치하고 구성하는 프로세스를 설명합니다."
weight: 30
---

## 소개

Standard 모드에서 Mendix Operator를 실행하는 경우 Mendix 앱이 배포되는 모든 네임스페이스에 개별적으로 설치해야 합니다.

{{% alert color="warning" %}}
It is essential to ensure that each namespace is exclusively managed by a single Operator. The deployment of two Operators, particularly with distinct versions, to manage the same namespace, may lead to conflicts, resulting in the cancellation and rollback of each operator's modifications.
{{% /alert %}}

{{% alert color="info" %}}
For Mendix version 11.5.0 and above, you will need to install Mendix Operator version 2.24 or above.
{{% /alert %}}

## Configuration Tool 다운로드 {#download-configuration-tool}

네임스페이스에서 Mendix Operator를 사용하기 전에 설치하고 앱이 사용할 서비스를 구성해야 합니다. Mendix는 이 과정을 안내하는 **Configuration Tool**을 제공합니다.

네임스페이스의 설치 탭에 아직 없는 경우 다음 지침에 따라 이동하십시오:

1. Go to the Cluster Manager page by opening the [Global Navigation Menu](/portal/global-navigation/), and then clicking **Deployment** > **Mendix on Kubernetes**.

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

## 플랫폼에 로그인 {#openshift-signin}

Mendix on Kubernetes 플랫폼에 대한 관리자 권한이 필요합니다. 이는 Configuration Tool을 실행하기 전에 로그인해야 함을 의미합니다.

이 지침은 OpenShift 플랫폼용이며, 다른 플랫폼에서도 유사한 프로세스가 필요합니다.

다음과 같이 수행할 수 있습니다:

1. Sign in to the OpenShift Console.

2. Click **Copy Login Command** in the user drop-down.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image9.png" class="no-border" >}}

3. Choose your IdP (Identity Provider).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image10.png" class="no-border" >}}

4. Click **Display Token**.

5. Copy the command under **Log in with this token**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image11.png" class="no-border" >}}

6. Paste the command into your command line terminal and press <kbd>Enter</kbd>.

## Configuration Tool 실행 {#running-the-tool}

클러스터에 로그인한 후 Configuration Tool을 실행할 수 있습니다.

비대화형 모드로 설치하려면 다음을 참조하십시오: [Mendix on Kubernetes 비대화형 모드 설치 및 구성](/developerportal/deploy/private-cloud-cli-non-interactive/)

1. Copy the **Installation Command** by clicking **Copy to clipboard**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/installation-command.png" class="no-border" >}}

2. Paste the command into your command line terminal and press <kbd>Enter</kbd>

    {{% alert color="warning" %}}The Configuration Tool needs a CLI terminal with mouse support. Read the [Terminal limitations](/developerportal/deploy/private-cloud-cluster/#terminal-limitations) section before running the Configuration Tool.{{% /alert %}}

    You will see the configuration options on the screen and will be guided through filling in the information needed.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/post-install-landing-page.png" class="no-border" >}}

    {{% alert color="info" %}}Mendix recommends running the Configuration Tool in a fully-maximized terminal window to ensure that all options are visible.{{% /alert %}}

### 기본 설치 {#base-installation}

Mendix Operator와 Mendix Gateway Agent가 클러스터에 설치되지 않은 경우 설치해야 합니다.

1. Click **Base Installation**.

2. Select the required **Cluster Mode** – *connected* or *standalone*.

    For more information, see [Connected and Standalone Clusters](/developerportal/deploy/private-cloud/#connected-standalone) in the *Mendix on Kubernetes* documentation.

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

### 네임스페이스 구성 {#configure-namespace}

이제 네임스페이스에 필요한 리소스를 구성할 수 있습니다.

처음 네임스페이스를 구성할 때 **Proxy**와 **Custom TLS**를 제외한 **Select items to configure** 아래의 모든 항목을 선택해야 합니다. 네임스페이스에 프록시를 구성하려는 경우에만 **Proxy**를 선택하십시오. 네임스페이스에 사용자 정의 CA를 구성하려는 경우에만 **Custom TLS**를 선택하십시오.

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
This option enables you to use a Load Balancer without an Ingress, or to manually create and manage the Ingress object (an Ingress that is not managed by Mendix on Kubernetes).

{{% alert color="info" %}}
When switching between Ingress, OpenShift Routes, and Service Only, you need to [restart the Mendix Operator](/developerportal/deploy/private-cloud-cluster/#restart-after-changing-network-cr) for the changes to be fully applied.
{{% /alert %}}

{{% alert color="info" %}}
Additional network options such as Ingress/Service annotations and Service ports are available in [advanced network settings](/developerportal/deploy/private-cloud-cluster/#advanced-network-settings).
{{% /alert %}}

{{% alert color="info" %}}
For Operator version 2.19.0 and Mendix version 10.3.0 onwards, NGINX path based routing is supported. A new option `/(.*)` in the ingress path is provided which sets the path prefix to support this feature. To support this feature, NGINX Ingress uses `nginx.ingress.kubernetes.io/rewrite-target` and the OpenShift route uses `haproxy.router.openshift.io/rewrite-target`.
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

{{% alert color="info" %}}
When using Global Operator, you must create the custom TLS secret in both namespaces (Global and Managed), otherwise the Operator will show an error because the secret cannot be mounted. The same secret must be added for both Global and Managed namespaces, because Mendix does not support different custom TLS on different Managed namespaces.
{{% /alert %}}

To use encryption and avoid [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), communication with all external services should be done over TLS.
By default, Mendix Operator trusts Certificate Authorities from the [Mozilla CA root bundle](https://wiki.mozilla.org/CA), as they are provided by default in the container image.

If Mendix on Kubernetes needs to communicate with external services, some of those services might have TLS certificates signed by a custom (private) CA.
In order for the Mendix Operator to trust such certificates, you need to add their root CAs to the Mendix Operator configuration.

1. In another terminal, prepare the Kubernetes secret containing the custom root CAs list:
    1. Create a `custom.crt` file, containing the public keys of all custom (private) CAs that Mendix on Kubernetes should trust:

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

{{% alert color="info" %}}
For Operator version 2.19.0 and above, the Self Signed Custom CA certificate will be trusted by the Mendix Operator when communicating with the Private Cloud Licensing Manager.
{{% /alert %}}

### 검토 및 적용 {#review-apply}

모든 리소스를 구성한 후 다음을 수행하십시오:

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

## 네임스페이스 구성 확인

Connected 클러스터를 사용하는 경우 네임스페이스가 올바르게 구성되면 Mendix Portal에서 상태가 **Connected**로 표시됩니다. 화면이 자동으로 업데이트되지 않는 경우 **Refresh** 버튼을 클릭해야 할 수 있습니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/image22.png" class="no-border" >}}
