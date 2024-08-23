---
title: "Registry Configuration"
url: /developerportal/deploy/private-cloud-registry/
description: "Describes how to configure the OCI image registry in Mendix for Private Cloud."
weight: 11
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---


## Introduction

To run an app, Kubernetes needs it to be available in an OCI image registry.

When a new version of the app is deployed, the Mendix Operator will run a *build* pod - to package an app into a container image and push it into your private OCI registry.

To do this, the Mendix Operator needs to know which registry to use and how to authenticate with it.

### Supported Container Registries

The [OCI Distribution Specification](https://github.com/opencontainers/distribution-spec) documents the standards and APIs that a container registry needs to support in order to be compliant. The Mendix Operator uses [go-containerregistry](https://github.com/google/go-containerregistry) to build and push images to a container registry. This allows Mendix for Private Cloud to support most container registries. In most cases, if a container registry supports basic authentication (static username and password), the Mendix Operator supports it.

Some examples of such container registries are:

* Quay.io
* Docker Hub
* Azure ACR [admin account](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication?tabs=azure-cli#admin-account)
* Self-hosted registries such as [Sonartype Nexus](https://www.sonatype.com/products/nexus-repository)

However, static credentials are often considered insecure, and cloud providers offer alternative authentication methods based on short-lived tokens. For example, pushing an image to ECR requires getting a short-lived token from the AWS API. For more details about specific container registries, see the [Configuring the Registry](#configure-registry) section.

### Limitations

Combining multiple authentication methods is not possible at the moment. For example, Nexus uses static username/password credentials, while ECR requires using an authentication plugin that integrates with AWS IAM; if you'd like to host [air-gapped images](/developerportal/deploy/private-cloud-migrating/) of Mendix for Private Cloud in a Nexus repository, you will need to use Nexus (or another registry supporting static credentials). Using ECR or ACR as the target registry will not be possible.

The Docker image URL standard does not have an way to specify if a registry should be accessed over HTTP or HTTPS. Mendix for Private Cloud relies on heuristics from the [go-containerregistry](https://github.com/google/go-containerregistry/blob/a54d64203cffcbf94146e04069aae4a97f228ee2/pkg/name/registry.go#L81-L100) project.
The heuristics is based on the assumption that it is not possible to get a valid TLS certificate for local addresses. If the registry domain name matches any of these rules, TLS will be disabled and all communication with the registry will happen over unencrypted HTTP:

* A private network RFC1918 IP address (`10.0.0.0/8`, `172.16.0.0/12` or `192.168.0.0/16`).
* A `localhost` domain name.
* A `127.0.0.1` or `::1` IP address.
* Subdomains of `.localhost` or `.local`.

In all other cases, Mendix for Private Cloud will use HTTPS to access the registry.

### Push and Pull URLs

Mendix for Private Cloud builds images from inside the cluster. After an image is built, the Mendix Operator sets (updates) image URLs of the app's Kubernetes Deployment resource;
to start a copy of the app, Kubernetes will pull the image directly from the registry.

If the registry is hosted externally (outside the cluster), there is no difference between connecting to the registry from a pod in the cluster, or from the cluster node. However, if the registry is hosted in the cluster, there are the following differences:

Mendix Operator needs to push images to the container registry:

* `localhost` would be the image builder's pod IP address
* The registry service can be reached through a cluster-private DNS name, for example `docker-registry.default.svc.cluster.local:5000`

Kubernetes nodes need to pull images from the container registry:

* `localhost` is the node's own IP address
* The registry can only be reached through a local address, for example `localhost:5000`

The Mendix Operator needs to push images to one URL (the push URL), but needs to tell Kubernetes to pull images from another URL (the pull URL).

## Configuring the Registry {#configure-registry}

### OpenShift 3 Registry {#openshift-3-registry}

Mendix for Private Cloud will use the standard `builder` ServiceAccount, which is automatically created when a new OpenShift Project is created. This `builder` ServiceAccount has permissions to push to the Project's ImageStreams (OpenShift's built-in registry).

Before configuring the OpenShift 3 registry, run `oc get svc docker-registry -n default` to get the registry domain name and IP address.

Use the following configuration options:

* **Push URL** - specify the registry domain name, in most cases this would be `docker-registry.default.svc.cluster.local:5000`
* **Pull URL** - specify the registry IP address returned by `oc get svc` earlier

### OpenShift 4 Registry {#openshift-4-registry}

OpenShift 4 requires no configuration - all OpenShift 4 clusters use the same configuration.

Mendix for Private Cloud will use the standard `builder` ServiceAccount, which is automatically created when a new OpenShift Project is created. This `builder` ServiceAccount has permissions to push to the Project's ImageStreams (OpenShift's built-in registry).

### Amazon Elastic Container Registry

In general, Elastic Container Registries can only be used with EKS clusters. To improve security, AWS ECR doesn't support static or basic credentials. Instead, ECR relies on time-limited tokens that can be generated by the [ecr-credential-helper](https://github.com/awslabs/amazon-ecr-credential-helper).

To access the ECR registry, the Mendix Operator will automatically request an authentication token from the AWS IAM API. To call the IAM API, the Mendix Operator can use [IRSA authentication](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) or an AWS IAM access and secret key (not recommended by Amazon).

To use ECR with the Mendix Operator, you must do the following steps:

1. Create an ECR repository, for example `mendixapps/mynamespace`.
2. Allow EKS to pull images from ECR, as documented in https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.html
3. Create an IAM role with the following policy (replace `<aws_region>` with the account's region, `<account_id>` with your AWS account number, `<repository>` with the repository name from step 1):

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowImageBuilds",
                "Effect": "Allow",
                "Action": [
                    "ecr:BatchGetImage",
                    "ecr:BatchCheckLayerAvailability",
                    "ecr:CompleteLayerUpload",
                    "ecr:GetDownloadUrlForLayer",
                    "ecr:InitiateLayerUpload",
                    "ecr:PutImage",
                    "ecr:ListImages",
                    "ecr:UploadLayerPart",
                    "ecr:DescribeRepositories",
                    "ecr:CreateRepository"
                ],
                "Resource": "arn:aws:ecr:<aws_region>:<account_id>:repository/<repository>"
            },
            {
                "Sid": "AllowAuthentication",
                "Effect": "Allow",
                "Action": "ecr:GetAuthorizationToken",
                "Resource": "*"
            }
        ]
    }
    ```

    {{% alert color="info" %}}The `DescribeRepositories` and `CreateRepository` actions are optional. They allow the Mendix Operator to check if the ECR repository exists, and create the repository if it does not exist. If the repository already exists, these actions can be removed.{{% /alert %}}

4. Allow the Mendix Operator to assume this role by configuring the role's trust policy.

    1. Open the role for editing and add an entry for the ServiceAccount (or ServiceAccounts) to the list of conditions:

       {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" class="no-border" >}}

    2. For the second condition, copy and paste the `sts.amazonaws.com` line; replace `:aud` with `:sub` and set it to `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`. You can specify any serviceaccount name here (for simplicity, Mendix recommends using `mendix-builder`). For example, if the Mendix Operator is installed into the `mynamespace` namespace, set the value to `system:serviceaccount:mynamespace:mendix-builder`.

        See [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough) for more details.

        The role ARN is required, you can use the **Copy** button next to the ARN name in the role details.

Use the following configuration options:

* **Host Name** - specify the ECR domain name in the following format: `<account_id>.dkr.ecr.<aws_region>.amazonaws.com` (replace `<aws_region>` with the account's region, `<account_id>` with your AWS account number)
* **Pull URL** - specify the registry IP address returned by `oc get svc` earlier
* **Registry name** - specify the repository name you created on step 1, for example: `mendixapps/mynamespace`
* **Region** - specify the ECR region, for example `eu-west-1`
* **Authentication** - choose the authentication mode, *Kubernetes Service Account* (recommended) or *AWS Static Credentials* (not recommended by AWS)
    * **IAM Role ARN** - the role ARN you created on step 3
    * **K8s Service Account** - the Kubernetes service account that the Mendix Operator should use for authentication; it should match the service account name specified on step 4; the account will be created automatically when you apply the changes
    * **Access Key ID** - the IAM access key to use for static authentication (only when using the *AWS Static Credentials* mode)
    * **Access Secret Key** - the IAM secret key to use for static authentication (only when using the *AWS Static Credentials* mode)

{{% alert color="info" %}}
ECR authentication will only work `amazon-ecr` option in the CLI. Other options (for example, generic registry) will not enable the pod annotations required for the ECR authentication plugin to work correctly. Only the `amazon-ecr` option is validated and supported when using the Elastic Container Registry on AWS.
{{% /alert %}}

### Azure Container Registry

To improve security, Azure Container Registry recommends using [workload identity](https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview) authentication instead of static credentials.

To authenticate with ACR, the AKS cluster needs to be attached to ACR as described [in the Azure documentation](https://learn.microsoft.com/en-us/azure/aks/cluster-container-registry-integration?toc=%2Fazure%2Fcontainer-registry%2Ftoc.json&bc=%2Fazure%2Fcontainer-registry%2Fbreadcrumb%2Ftoc.json&tabs=azure-cli#attach-an-acr-to-an-existing-aks-cluster).

To access the ACR registry, the Mendix Operator will use its Kubernetes Service Account for authentication, using the [msal-go](https://github.com/AzureAD/microsoft-authentication-library-for-go) library.

To use ACR with the Mendix Operator, you will need to:

1. Create an ACR container registry.
2. Follow the [guide](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster) to

    * enable workload identity authentication in AKS
    * create a managed identity for the Mendix Operator image builder
    * establish the federated identity credential

    Other steps are provided as examples and can be skipped. You must specify the Kubernetes namespace and name - the namespace where the Mendix Operator is installed, and a Kubernetes service account name. The Mendix Operator will use this Service Account to authenticate itself with ACR.

    Write down the `USER_ASSIGNED_CLIENT_ID`, it will be needed later.

3. Open the ACR Access Control (IAM) tab, and add an `AcrPush` role assignment to the Managed Identity created on step 2.

Use the following configuration options:

* **Registry Name** - Path in the Azure Container Registry — for example `mendix-apps/mynamespace`.
* **Registry URL** - domain name (login name) of the ACR registry, for example `example.azurecr.io`
* **Kubernetes Service Account** - the Kubernetes service account that was linked with the Azure workload identity step 2; the Kubernetes Service Account will be created automatically when you apply the changes.
* **AZWI Client ID** - the workload identity `USER_ASSIGNED_CLIENT_ID` created on step 2, for example `00000000-0000-0000-0000-000000000000`.

{{% alert color="warning" %}}
Azure Workload Identity authentication is supported in Mendix Operator 2.13.0 and later versions. Older versions can only authenticate with ACR using static credentials; upgrading to Mendix Operator and switching to workload identity authentication is highly recommended.
{{% /alert %}}

### Google Artifact Registry (Previously Google Container Registry)

To improve security, Google Artifact Registry recommends using [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) authentication instead of static credentials.

To access the Google Artifact registry, the Mendix Operator will use its Kubernetes Service Account for authentication, using the [docker-credential-gcr](https://github.com/GoogleCloudPlatform/docker-credential-gcr) plugin.

To use Google Artifact registry with the Mendix Operator, perform the following steps:

1. Create a GCP Service Account (note that this is not the same as a Kubernetes Service Account).
2. Assign the *Artifact Registry Writer* (`roles/artifactregistry.writer`) role to the GCR Service Account.
3. Allow the Mendix Operator to use the GCR Service Account by running the following command, where `PROJECT_ID` is the Google Cloud project ID, `K8S_NAMESPACE` is the Kubernetes namespace name where the Operator is installed, `KSA_NAME` is the Kubernetes Service Account name, and `GSA_NAME` is the GCP Service Account name from step 1:

    ```shell
    gcloud iam service-accounts add-iam-policy-binding \
        --role roles/iam.workloadIdentityUser \
        --member "serviceAccount:PROJECT_ID.svc.id.goog[K8S_NAMESPACE/KSA_NAME]" \
        GSA_NAME@PROJECT_ID.iam.gserviceaccount.com
    ```

On the Kubernetes side, the Mendix Operator will use a Kubernetes Service Account to authenticate. On the GCP side, there should be a matching GCP Service Account. For simplicity, Mendix recommends using the `mendix-builder` for the service account name, on both GCP and Kubernetes sides. For more details, see the Google documentation on [using workload identities](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#authenticating_to).

Use the following configuration options:

* **Registry Name** - Google Artifact Registry full path name — for example `my-google-account-id/my-registry/dev-repo`.
* **Registry URL** - container or artifact registry host — for example `us.gcr.io` or `europe-west4-docker.pkg.dev`.
* **GCP Service Account** - the GCP account name created on step 1, for example `service-account-name@project-id.iam.gserviceaccount.com`.
* **Kubernetes Service Account** - the Kubernetes service account that was linked with the GCP service account on step 3; the Kubernetes Service Account will be created automatically when you apply the changes.

### Generic Registry with Authentication

This option works with most other registries - if the registry supports Basic authentication, this option should be compatible.

Use the following configuration options:

* **Push URL** - the registry domain name where the registry can be reached by pods inside the cluster.
    * If the registry is running outside the cluster, this would be the registry domain name, such as `registry.example.com`.
    * If the registry is hosted inside the cluster, this would be the internal Kubernetes domain name, for example `registry.namespace.svc` or `registry.container-registry.svc.cluster.local:5000` (for MicroK8s).
* **Pull URL** - the registry domain name where the registry can be reached by Kubernetes nodes,
    * If the registry is running outside the cluster, this would be the registry domain name, such as `registry.example.com`.
    * If the registry is hosted inside the cluster, in most cases this would be a localhost domain name and port, for example for MicroK8s this is `localhost:32000`.
* **Registry name** - the repository name, for example: `mendixapps/mynamespace`.
    * For some registries, the repository might need to be created first.
    * Registries could also have security or technical limitations on what can be specified as the repository name.
* **With authentication** - allows to specify the username and password used to access the registry. This is required for almost all registries, the only exception is self-hosted registries in test environments such as MicroK8s, k3s or Minikube.
* **Add credentials to pull secrets in default service account** - if your cluster is not using built-in authentication, checking this option will automatically image pull credentials to the `default` Kubernetes ServiceAccount. This would enable authentication when pulling app images.

#### Example Configurations

Here are a few example configurations for container registries:

**Docker Hub**

| Field               | Value           |
| ------------------- | --------------- |
| Push URL            | index.docker.io |
| Pull URL            | index.docker.io |
| Registry name       | `<username>/<repository>`, where `<username>` is a username for Docker Hub |
| With authentication | enabled       |
| User                | A username for Docker Hub |
| Password            | An access token for the Docker Hub user |

The access token needs read and write permissions.
Docker Hub will automatically create the repository when an image is pushed.

**quay.io**

| Field               | Value           |
| ------------------- | --------------- |
| Push URL            | quay.io         |
| Pull URL            | quay.io         |
| Registry name       | `<username>/<repository>`, where `<username>` is a username for Docker Hub |
| With authentication | enabled       |
| User                | Username for a quay.io robot account |
| Password            | Token (password) for the robot account |

Before pushing images to quay.io, you will need to create the repository first.
To access quay.io, you will need to create a robot account, and give this account write permissions to the destination repository.

**JFROG Artifactory**, **Sonatype Nexus**, **Harbor**, **GitLab registry** and other on-premise registries

| Field               | Value                  |
| ------------------- | ---------------------- |
| Push URL            | `<hostname>:<port>`    |
| Pull URL            | `<hostname>:<port>`    |
| Registry name       | `<path/to/repository>` |
| With authentication | enabled      |
| User                | Username for a user or account with push and pull permissions |
| Password            | Token (password) for a user or account with push and pull permissions |

Check your image registry documentation to see if repositories can be created automatically (on push) or need to be pre-created.
Some registries impose limitations on repository names, for example the repository path cannot have more than three parts.

### Existing Docker Registry Secret

If you already have a existing `~/.docker/config.json` file, you can use it directly by choosing the `docker-secret` option.

For more information on how create this type of secret, see the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/).

After creating the `dockerconfigjson` secret, you can configure Mendix for Private Cloud to use it:

* **Push URL** - the registry domain name where the registry can be reached by pods inside the cluster.
    * If the registry is running outside the cluster, this would be the registry domain name, such as `registry.example.com`.
    * If the registry is hosted inside the cluster, this would be the internal Kubernetes domain name, for example `registry.namespace.svc` or `registry.container-registry.svc.cluster.local:5000` (for MicroK8s).
* **Pull URL** - the registry domain name where the registry can be reached by Kubernetes nodes,
    * If the registry is running outside the cluster, this would be the registry domain name, such as `registry.example.com`.
    * If the registry is hosted inside the cluster, in most cases this would be a localhost domain name and port, for example for MicroK8s this is `localhost:32000`.
* **Registry name** - the repository name, for example: `mendixapps/mynamespace`.
    * For some registries, the repository might need to be created first.
    * Registries could also have security or technical limitations on what can be specified as the repository name.
* **Secret name** - name of the Kubernetes secret you've created.

You must add this secret to the `default` ServiceAccount manually, or provide registry authentication configuration in another way (depending on which registry authentication options the Kubernetes cluster vendor is offering).

## Advanced Options

You can host the default Mendix components in your own registry, for example if your cluster is firewalled and cannot open up a route to the Mendix registry. In this case you need to migrate some, or all, of the Mendix components to your cluster. See the instructions in [Migrating to Your Own Registry](/developerportal/deploy/private-cloud-migrating/) to find out how to do this.

### Customizing the image name template {#customize-registry-imagenametemplate}

**ImageNameTemplate** allows you to specify how the image name and tag are generated. It allows both use of OpenShift-style "repository per app" and ECR-style "tag per app". For example, a value of **imageNameTemplate** may be `registry.example.com/mendix-apps/{{.Name}}-{{.Version}}-{{.UnixTimestamp}}` which would generate an image for the build like `registry.example.com/mendix-apps/pgv9gw71-0.0.1.2-1640699175.392`

The **imageNameTemplate** is generated by mxpc-cli when you update the registry configuration.

{{% alert color="info" %}}
For Global Operator scenarios, if the operator configurations in the managed namespace differ from the configurations in the Global Operator namespace, the configurations from the managed namespace will consistently take precedence.
{{% /alert %}}

{{% alert color="warning" %}}
Any manual changes you make to the imageNameTemplate in the manifest are overwritten when you update the registry configuration using mxpc-cli.
{{% /alert %}}

An example of the **imageNameTemplate** in the Mendix Operator configuration manifest is given below.

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
    # …
spec:
  registry:
    imageNameTemplate: 'my-registry/{{.Name}}-{{.Version}}-{{.UnixTimestamp}}'
    pullURL: 'image-registry.openshift-image-registry.svc:5000'
    pushURL: 'image-registry.openshift-image-registry.svc:5000'
    type: openshift
  # …
```

You can customize the registry **imageNameTemplate** in **OperatorConfiguration** with these available variables:

* `{{.Name}}`: internal environment name.
* `{{.Generation}}`: value of the Build CR’s [Generation](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace#generation) attribute.
* `{{.Version}}`: value of sourceVersion in MendixApp CR. The value will be automatically set to the MDA version if an MDA is deployed from the Private Cloud Portal.
* `{{.UnixTimestamp}}`: current UNIX timestamp with at least millisecond precision for example, 1640615972.897.
* `{{.Timestamp}}`: current timestamp in the following format 20211231.081224.789 for 2021-12-31 08:12:24.789.
