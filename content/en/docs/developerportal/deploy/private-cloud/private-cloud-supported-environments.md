---
title: "Supported Providers"
url: /developerportal/deploy/private-cloud-supported-environments/
description: "Describes which providers are supported by Mendix for Private Cloud"
weight: 50
tags: ["Private Cloud", "Cluster", "Operator", "Deploy", "Provider", "Registry", "Database"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Mendix for Private Cloud depends on external services to deploy and run Mendix apps.
This document covers which providers and services are officially supported by the Mendix Operator.

## 2 Kubernetes Cluster Types

### 2.1 Supported Cluster Types{#supported-clusters}

We currently support deploying to the following Kubernetes cluster types:

* [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS)
* [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/)
* [Red Hat OpenShift Container Platform](https://www.openshift.com/)
* [MicroK8s](https://microk8s.io/)
* [k3s](https://k3s.io/)
* [minikube](https://minikube.sigs.k8s.io/docs/)
* [Google Cloud Platform](https://cloud.google.com/)

{{% alert color="warning" %}}
If deploying to Red Hat OpenShift, you need to specify that specifically when creating your deployment. All other cluster types use generic Kubernetes operations.
{{% /alert %}}

#### 2.1.1 Supported Versions

Mendix for Private Cloud Operator `v2.*.*` is the latest version which officially supports:

* Kubernetes versions 1.19 through 1.23
* OpenShift 4.6 through 4.10

{{% alert color="warning" %}}
Kubernetes 1.22 is a [new release](https://kubernetes.io/blog/2021/08/04/kubernetes-1-22-release-announcement/) which removes support for several deprecated APIs and features.

This version of Kubernetes is not yet offered or fully supported by most distributions and providers.

Mendix for Private Cloud Operator v2.\*.\* is compatible with Kubernetes 1.22.

Existing clusters running Mendix for Private Cloud Operator v1.\*.\* will need to be upgraded to Kubernetes 1.21 and Mendix for Private Cloud Operator v2.\*.\* **before** upgrading to Kubernetes 1.22.
{{% /alert %}}

Mendix for Private Cloud Operator `v1.12.*` is an LTS release which officially supports older Kubernetes versions:

* Kubernetes versions 1.13 through 1.21
* OpenShift 3.11 through 4.7

### 2.2 Cluster Requirements

To install the Mendix Operator, the cluster administrator will need permissions to do the following:

* Create Custom Resource Definitions
* Create roles in the target namespace or project
* Create role bindings in the target namespace or project

The cluster should have at least 2 CPU cores and 2 GB memory *available*. This is enough to run one simple app - but does not include additional resources required by Kubernetes core components.

In OpenShift, the cluster administrator must have a `system:admin` role.

#### 2.2.1 CPU requirements

Mendix Operator runs on CPUs with the [x86-64](https://en.wikipedia.org/wiki/X86-64) achitecture.

{{% alert color="info" %}}

Starting with Mendix Operator v2.5.0, container images used in *Connected Mode* also support [ARM64/AArch64](https://en.wikipedia.org/wiki/AArch64). *ARM64* support is experimental at this moment and should only be used for non-production environments.

Only core *Connected mode* features support *ARM64*. The following features **do not** support *ARM64* CPUs at the moment:

* [Migrating to Your Own Registry](/developerportal/deploy/private-cloud-migrating/)

{{% /alert %}}

{{% alert color="warning" %}}
If the cluster is running nodes with multiple architectures (for example, *x86-64* and *ARM64*), the namespace where Mendix for Private Cloud is installed should use a fixed (specified) architecture. One way to do this is by configuring a [PodNodeSelector](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podnodeselector) for that namespace, and only using nodes with a specific architecture (for example, `amd64`).

The image builder doesn't build multiple architecture images at the moment.
{{% /alert %}}

### 2.3 Unsupported Cluster Types

It is not possible to use Mendix for Private Cloud in [OpenShift Online](https://www.openshift.com/products/online/) (all editions, including Starter and Pro) or [OpenShift Developer Sandbox](https://developers.redhat.com/developer-sandbox) because they don't allow the installation of Custom Resource Definitions.

Kubernetes included with [Docker Desktop](https://docs.docker.com/desktop/kubernetes/) is not officially supported. 

## 3 Container Registries

Mendix for Private Cloud builds container images for every app and pushes them to the registry. It needs credentials to access the registry and permissions to push images into the registry.

Images are pulled from the registry by Kubernetes, not by Mendix for Private Cloud.
The configuration script for Mendix for Private Cloud can configure Kubernetes image pull secrets and use the same credentials it uses for pushing images (for all registries except EKS).
For large-scale or enterprise deployments, it may be better to configure image pulls on a cluster-wide level, or to configure separate, read-only image pull credentials.

### 3.1 Local Registry

A local, self-hosted, registry is supported for non-production use with the following bring-your-own infrastructure clusters:

* MicroK8s
* k3s
* minikube

To use a local registry, it must be available from Kubernetes pods (for pushing images) and from the cluster itself (for pulling images). In most cases, the push URL and pull URL will be different.

It is possible to have username/password authentication or to push without authentication.

### 3.2 Externally Hosted Registry

Externally hosted registries are supported if they allow username/password authentication. This includes:

* [Docker Hub](https://hub.docker.com/)
* [quay.io](https://quay.io/)
* [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) (ACR)

When using ACR in combination with Azure Kubernetes Service, it is possible to set up [native authentication](https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration#create-a-new-aks-cluster-with-acr-integration) for pulling images from ACR.

### 3.3 OpenShift Image Registry

The local image registry can be used in an OpenShift cluster. It is not possible to use an OpenShift registry in a non-OpenShift cluster.

Image pull authentication will be configured out of the box.

OpenShift 4 registries don't need any configuration and will be configured automatically.

For an OpenShift 3 registry, the pull URL should be set to `docker-registry.default.svc:5000`.
The push URL should be set to `<registry ip>:5000` where `<registry ip>` can be obtained by running `oc get svc docker-registry -n default`.

The OpenShift registry must be installed and enabled for use.

### 3.4 Amazon Elastic Container Registry (ECR)

[Amazon ECR](https://aws.amazon.com/ecr/) can only be used together with EKS clusters. 

To use an ECR registry, the Mendix Operator will need an AWS Identity and Access Management (IAM) account with permissions to push and pull images.

The EKS cluster should be configured so that it can [pull images from ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.html).

### 3.5 Google Artifact Registry and Container Registry

[Google Cloud Platform](https://cloud.google.com/) provides [artifact registry](https://cloud.google.com/artifact-registry) and [container-registry](https://cloud.google.com/container-registry).

Mendix Operator supports registry authentication with [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity). The Mendix Operator will need a kubernetes service account [bound](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#authenticating_to) to a [google service account](https://cloud.google.com/iam/docs/service-accounts) with permissions to authenticate to a registry.



## 4 Databases

The following databases are supported, and provide the features listed.

| Database | Data Persists | Provisioned by Operator |
| --- | --- | --- |
| Ephemeral | No | Yes |
| Standard PostgreSQL | Yes | Yes |
| Microsoft SQL Server | Yes | Yes |
| Dedicated JDBC | Yes | No |

### 4.1 Ephemeral Database

The ephemeral database plan uses an in-memory database running directly in a Mendix Runtime container.
It doesn't require any external database or provider and is great for quick tests or apps that don't require any file storage.

{{% alert color="info" %}}
An app using an ephemeral database will lose all data if its environment is stopped or restarted.

An app with an ephemeral database cannot have more than one replica. Only the first (master) replica will be able to start.
{{% /alert %}}

### 4.2 Standard PostgreSQL Database

This refers to a PostgreSQL database which is automatically provisioned by the Operator. If you are connecting to an existing database, you should use the [Dedicated JDBC database](#jdbc) option described below.

The following standard PostgreSQL databases are supported:

* PostgreSQL 9.6
* PostgreSQL 10
* PostgreSQL 11
* PostgreSQL 12
* PostgreSQL 13
* PostgreSQL 14

{{% alert color="info" %}}
While Mendix for Private Cloud supports all Postgres versions listed above, the Mendix Runtime might require a more specific Postgres version.

For best compatibility, use Postgres 12 - it's supported by the latest supported LTS versions of the Mendix Runtime.
{{% /alert %}}

A standard PostgreSQL database is an unmodified PostgreSQL database installed from a Helm chart or from an installation package.

The following managed PostgreSQL databases are supported:

* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) 
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/).
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres).

Amazon PostgreSQL instances require additional firewall configuration to allow connections from the Kubernetes cluster.

Azure PostgreSQL databases require additional firewall configuration to allow connections from the Kubernetes cluster.

Some managed PostgreSQL databases might have restrictions or require additional configuration.

{{% alert color="info" %}}
To use a PostgreSQL database, the Mendix Operator requires a master account with permissions to create new users and databases.

For every Mendix app environment, a new database schema and user (role) will be created so that the app can only access its own data.
{{% /alert %}}

{{% alert color="info" %}}
By default, the Mendix Operator will first connect to the database server with TLS enabled; if the database server doesn't support TLS, the Mendix Operator will reconnect without TLS.
To ensure compatibility with all PostgreSQL databases (including ones with self-signed certificates), all TLS CAs are trusted by default.

If Strict TLS is enabled, Mendix for Private Cloud will connect to the PostgreSQL server with TLS and validate the PostgreSQL server's TLS certificate. In this case, the connection will fail if: 

* the PostgreSQL server has an invalid certificate
* or its certificate is signed by an unknown Certificate Authority
* or the PostgreSQL server doesn't support TLS connections.

The Mendix Operator allows you to specify custom Certificate Authorities to trust. This allows you to enable Strict TLS even for databases with self-signed certificates.

Strict TLS mode should only be used with apps created in Mendix 8.15.2 (or later versions), earlier Mendix versions will fail to start when validating the TLS certificate.
{{% /alert %}}

### 4.3 Microsoft SQL Server

This refers to a SQL Server database which is automatically provisioned by the Operator. If you are connecting to an existing database, you should use the [Dedicated JDBC database](#jdbc) option described below.

The following Microsoft SQL Server editions are supported:

* SQL Server 2017

The following managed Microsoft SQL Server databases are supported:

* [Amazon RDS for SQL Server](https://aws.amazon.com/rds/sqlserver/)
* [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/)

Amazon and Azure SQL servers require additional firewall configuration to allow connections from the Kubernetes cluster.

Some managed SQL Server databases might have restrictions or require additional configuration.

{{% alert color="info" %}}
To use a SQL Server database, the Mendix Operator requires a master account with permissions to create new users and databases.

For every Mendix app environment, a new database, user and login will be created so that the app can only access its own data.

{{% /alert %}}

{{% alert color="info" %}}
By default, Mendix for Private Cloud will not enforce encryption. Encryption can be enforced in SQL Server if required.

If Strict TLS is enabled, the Mendix Operator will connect to SQL server with TLS and validate the SQL Server's TLS certificate. In this case, the connection will fail if 

* SQL Server doesn't support encryption
* the SQL Server server has an invalid certificate
* or its certificate is signed by an unknown Certificate Authority

The Mendix Operator allows you to specify custom Certificate Authorities to trust. This allows you to enable Strict TLS even for databases with self-signed certificates.

Strict TLS mode should only be used with apps created in Mendix 8.15.2 (or later versions), earlier Mendix versions will fail to start when validating the TLS certificate.
{{% /alert %}}

### 4.4 Dedicated JDBC database{#jdbc}

This allows you to use an existing database (schema) [database configuration parameters](/refguide/custom-settings/) directly as supported by the Mendix Runtime.

{{% alert color="info" %}}
A dedicated JDBC database cannot be used by more than one Mendix app.
{{% /alert %}}

## 5 File storage

### 5.1 Ephemeral File Storage

The ephemeral file storage plan will store files directly in the Mendix Runtime container.
It doesn't require any external file storage provider and is great for quick tests or stateless apps that don't require any file storage.

{{% alert color="info" %}}
An app using an ephemeral file storage will lose all files if its environment is stopped or restarted.
{{% /alert %}}

### 5.2 MinIO

The latest version of [MinIO](https://min.io/) is supported if it is running in server mode.

{{% alert color="info" %}}
An admin account is required with permissions to create and delete users, policies and buckets.

For every Mendix app environment, a new bucket and user will be created so that the app can only access its own data.
{{% /alert %}}

{{% alert color="warning" %}}
If MinIO is installed in [Gateway](https://github.com/minio/minio/tree/master/docs/gateway) mode, it needs to be configured to use etcd.
MinIO uses etcd to store its configuration.
Without etcd, MinIO will disable its admin API – which is required by the Mendix Operator to create new users for each environment.
{{% /alert %}}

### 5.3 Amazon S3

[Amazon S3](https://aws.amazon.com/s3/) is supported. Mendix for Private Cloud supports multiple ways of managing and accessing S3 buckets: from creating a new S3 bucket and IAM account per environment to sharing an account and bucket by all environments in a namespace.

A complete list of supported S3 modes and their required IAM permissions for each one is available in [storage plan](/developerportal/deploy/private-cloud-cluster/#storage-plan)
configuration details.

### 5.4 Azure Blob Storage

An existing [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) container can be attached to Mendix app environments.

Unlike MinIO and S3, Mendix for Private Cloud doesn't manage Azure Blob Storage containers or accounts.

### 5.5 Google Cloud Storage

[Google Cloud Storage](https://cloud.google.com/storage) is supported with [Cloud Storage Interoperability](https://cloud.google.com/storage/docs/interoperability) mode.

Mendix Operator will need the endpoint, access key, and secret key to access the storage that can be configured in the interoperability setting. 

### 5.6 Ceph

[Ceph](https://ceph.io/en/) is supported with the S3-compatible interface [Ceph Object Gateway](https://docs.ceph.com/en/mimic/radosgw/). The Mendix Operator will need the endpoint, access key, and secret key to access the storage. Please check the Ceph documentation for information on how to get the credentials.

## 6 Networking

{{% alert color="info" %}}
DNS, load balancing and the ingress controller should be configured first for the whole Kubernetes cluster.
Mendix for Private Cloud will use the existing ingress controller.
{{% /alert %}}

{{% alert color="warning" %}}
We strongly recommend using the [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/), even if other Ingress controllers or OpenShift Routes are available. You may need to check which of the [several versions of the NGINX Ingress Controller](https://www.nginx.com/blog/guide-to-choosing-ingress-controller-part-4-nginx-ingress-controller-options/#NGINX-vs.-Kubernetes-Community-Ingress-Controller) is installed in your cluster. We recommend the "community version".

NGINX Ingress can be used to deny access to sensitive URLs, add HTTP headers, enable compression, and cache static content.
NGINX Ingress is fully compatible with [cert-manager](https://cert-manager.io/), removing the need to manually manage TLS certificates. In addition, NGINX Ingress can use a [Linkerd](https://linkerd.io/) Service Mesh to encrypt network traffic between the Ingress Controller  and the Pod running a Mendix app.

These features will likely be required once your application is ready for production.
{{% /alert %}}

### 6.1 OpenShift Route

OpenShift routes are supported only in OpenShift.

The only configuration option currently supported is turning TLS on or off.
When TLS is turned on, `Edge` termination (where TLS termination occurs at the router, before the traffic gets routed to the pods) will be used, with automatic redirection from HTTP to HTTPS.

The following configuration options are available in OpenShift:

* Turn TLS on and off
* Add route annotations
* Provide the name of an existing TLS certificate secret to use instead of the default router certificate
* Provide a custom domain name (for example, mendix.example.com) to use instead of the default OpenShift route domain

It is also possible to provide a custom TLS configuration for individual environments, overriding the default configuration (only available in **Standalone** Mendix Operator installations):

* Turn TLS on and off
* Specify the name of an existing TLS certificate secret to use
* Provide the TLS Certificate and Private Key values directly in the environment specification

### 6.2 Ingress

Mendix for Private Cloud is compatible with the following ingress controllers:

* [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
* [Traefik](https://traefik.io/traefik/)
* [AWS Application Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html)
* [Ingress for External HTTP(S) Load Balancing](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-xlb)

For ingress, it is possible to do the following:

* Turn TLS on and off
* Add ingress annotations
* Add service annotations
* Specify the ingress class, path and path type
* Provide the name of an existing TLS secret to use
* Provide a domain name (for example, mendix.example.com)

For each environment, the URL will be automatically generated based on the domain name.
For example, if the domain name is set to mendix.example.com, then apps will have URLs such as myapp1-dev.mendix.example.com, myapp1-prod.mendix.example.com and so on.

The DNS server should be configured to route all subdomains (the `*` subdomain, for example, `*.mendix.example.com`) to the ingress/load balancer.

It is also possible to provide a custom TLS configuration for individual environments, overriding the default configuration (only available in **Standalone** Mendix Operator installations):

* Turn TLS on and off
* Specify the name of an existing TLS certificate secret to use
* Provide the TLS Certificate and Private Key values directly in the environment specification

There are multiple ways of managing TLS certificates:

* The Ingress controller can have a default certificate with a wildcard domain (for example, `*.mendix.example.com`). For Ingress controllers which support for [Let's Encrypt](https://letsencrypt.org/), the Ingress controller can also request and manage TLS certificates automatically.
* Providing a TLS certificate secret for each environment.
* Using [cert-manager](https://cert-manager.io/) or a similar solution by using Ingress annotations. This service can be used to automatically request TLS certificates and create secrets for the Ingress controller.

Starting from Mendix Operator v1.11.0, Mendix app environments can use a [Linkerd](https://linkerd.io/) Service Mesh. Linkerd can be used to monitor and re-encrypt HTTP(S) traffic between the Ingress Controller and the Pod running a Mendix app.

### 6.3 Service Only

Mendix for Private Cloud can create Services without an Ingress.
In this way, the Ingress objects can be managed separately from Mendix for Private Cloud.

Mendix for Private Cloud can create Services that are compatible with:

* [AWS Network Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html)
* AWS Classic Load Balancer

### 6.4 Service mesh support

Starting with Mendix Operator v2.5.0, the following service meshes can be enabled for the entire Mendix for Private Cloud namespace:

* [Istio](https://istio.io/)
* [Linkerd](https://linkerd.io)

If service mesh sidecar injection is enabled, all communication between pods in the Mendix for Private Cloud namespace will happen through the service mesh.

Mendix Operator v1.11.0 added support for service mesh sidecar injection, but only for app environment pods.
