---
title: "Supported Providers"
parent: "private-cloud"
description: "Describes which providers are supported by Mendix for Private Cloud"
menu_order: 50
tags: ["Private Cloud", "Cluster", "Operator", "Deploy", "Provider", "Registry", "Database"]
---

## 1 Introduction

Mendix for Private Cloud depends on external services to deploy and run Mendix apps.
This document covers which providers and services are officially supported by the Mendix Operator.

## 2 Kubernetes Cluster Types

### 2.1 Supported Cluster Types

We currently support deploying to the following Kubernetes cluster types:

* [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS)
* [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/)
* [Red Hat OpenShift Container Platform](https://www.openshift.com/) (versions 4 and 3.11)
* [MicroK8s](https://microk8s.io/)
* [k3s](https://k3s.io/)
* [minikube](https://minikube.sigs.k8s.io/docs/)

### 2.2 Cluster Requirements

To install the Mendix Operator, the cluster administrator will need permissions to do the following:

* Create Custom Resource Definitions
* Create roles in the target namespace or project
* Create role bindings in the target namespace or project

The cluster should have at least 2 CPUs and 2 GB memory available. This is enough to run one simple app.

In OpenShift, the cluster administrator must have a `system:admin` role.

### 2.3 Unsupported Cluster Types

It is not possible to use Mendix for Private Cloud in [OpenShift Online](https://www.openshift.com/products/online/) because OpenShift Online doesn't allow the installation of Custom Resource Definitions.

## 3 Container Registries

{{% alert type="info" %}}
The cluster should be configured to be able to pull images from the registry.

If the registry requires authentication, this can be done by creating a `docker-registry` type secret and attaching it to the `default` ServiceAccount, or configuring cluster-wide registry authentication.
{{% /alert %}}

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

When using ACR in combination with Azure Combination Service, it is possible to set up [native authentication](https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration#create-a-new-aks-cluster-with-acr-integration) for pulling images from ACR.

### 3.3 OpenShift Image Registry

The local image registry can be used in an OpenShift cluster. It is not possible to use an OpenShift registry in a non-OpenShift cluster.

Image pull authentication will be configured out of the box.

OpenShift 4 registries don't need any configuration and will be configured automatically.

For an OpenShift 3 registry, the pull URL should be set to `docker-registry.default.svc:5000`.
The push URL should be set to `<registry ip>:5000` where `<registry ip>` can be obtained by running `oc get svc docker-registry -n default`.

The OpenShift registry must be installed and enabled for use.

### 3.4 Amazon Elastic Container Registry(ECR)

[Amazon ECR](https://aws.amazon.com/ecr/) can only be used together with EKS clusters. 

To use an ECR registry, the Mendix Operator will need an AWS Identity and Access Management (IAM) account with permissions to push and pull images.

The EKS cluster should be configured so that it can [pull images from ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.html).

## 4 Databases

### 4.1 Ephemeral Database

The ephemeral database plan uses an in-memory database running directly in a Mendix Runtime container.
It doesn't require any external database or provider and is great for quick tests or apps that don't require any file storage.

{{% alert type="info" %}}
An app using an ephemeral database will lose all data if its environment is stopped or restarted.

An app with an ephemeral database cannot have more than one replica. Only the first (master) replica will be able to start.
{{% /alert %}}

### 4.2 Standard PostgreSQL Database

The following standard PostgreSQL databases are supported:

* PostgreSQL 9.6
* PostgreSQL 10

A standard PostgreSQL database is an unmodified PostgreSQL database installed from a Helm chart or from an installation package.

The following managed PostgreSQL databases are supported:

* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) 
* [Amazon Aurora PostgreSQL](https://aws.amazon.com/rds/aurora/)
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/).

Amazon PostgreSQL instances require additional firewall configuration to allow connections from the Kubernetes cluster.

Azure PostgreSQL databases require additional firewall configuration and SSL to be disabled to allow connections from the Kubernetes cluster.

Some managed PostgreSQL databases might have restrictions or require additional configuration.

{{% alert type="info" %}}
To use a PostgreSQL database, the Mendix Operator requires a master account with permissions to create new users and databases.

For every Mendix app environment, a new database schema and user (role) will be created so that the app can only access its own data.
{{% /alert %}}

These features are currently not supported:

* SSL/TLS
* Custom CAs for SSL/TLS

### 4.3 Microsoft SQL Server

The following Microsoft SQL Server editions are supported:

* SQL Server 2017

The following managed Microsoft SQL Server databases are supported:

* [Amazon RDS for SQL Server](https://aws.amazon.com/rds/sqlserver/)
* [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/)

Amazon and Azure SQL servers require additional firewall configuration to allow connections from the Kubernetes cluster.

Some managed SQL Server databases might have restrictions or require additional configuration.

{{% alert type="info" %}}
To use a SQL Server database, the Mendix Operator requires a master account with permissions to create new users and databases.

For every Mendix app environment, a new database, user and login will be created so that the app can only access its own data.
{{% /alert %}}

### 4.4 Dedicated JDBC database

This allows you to use an existing database (schema) [database configuration parameters](/refguide/custom-settings) directly as supported by the Mendix Runtime.

{{% alert type="info" %}}
A dedicated JDBC database cannot be used by more than one Mendix app.
{{% /alert %}}

## 5 File storage

### 5.1 Ephemeral file storage

The ephemeral file storage plan will store files directly in the Mendix Runtime container.
It doesn't require any external file storage provider and is great for quick tests or stateless apps that don't require any file storage.

{{% alert type="info" %}}
An app using an ephemeral file storage will lose all files if its environment is stopped or restarted.
{{% /alert %}}

### 5.2 MinIO

The latest version of [MinIO](https://min.io/) is supported if it is running in server mode.

{{% alert type="info" %}}
An admin account is required with permissions to create and delete users, policies and buckets.

For every Mendix app environment, a new bucket and user will be created so that the app can only access its own data.
{{% /alert %}}

{{% alert type="warning" %}}
MinIO Gateway is not supported since running MinIO in gateway mode disables the admin API and makes it impossible to create new users.
{{% /alert %}}

### 5.3 Amazon S3

[Amazon S3](https://aws.amazon.com/s3/) is supported.

#### 5.3.1 Amazon S3 (create on-demand)

{{% alert type="info" %}}
For every Mendix app environment, a new bucket, IAM user and inline policy will be created so that the app can only access its own bucket.
{{% /alert %}}

To use S3, the Mendix Operator will need an IAM account with the following policy so that it can create a new IAM user and bucket for each Mendix app environment:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "bucketPermissions",
            "Effect": "Allow",
            "Action": [
                "s3:CreateBucket",
                "s3:DeleteBucket"
            ],
            "Resource": "arn:aws:s3:::mendix-*"
        },
        {
            "Sid": "iamPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:DeleteAccessKey",
                "iam:PutUserPolicy",
                "iam:DeleteUserPolicy",
                "iam:DeleteUser",
                "iam:CreateUser",
                "iam:CreateAccessKey"
            ],
            "Resource": [
                "arn:aws:iam::<account_id>:user/mendix-*"
            ]
        }
    ]
}
```

### 5.3.2 Amazon S3 (existing bucket)

The Mendix Operator can access an existing S3 bucket, with an existing IAM account access and secret key.

{{% alert type="info" %}}

If such a Storage Plan is shared by multiple environments, all environments using that Storage Plan be using the same Access and Secret keys and will have identical permissions.

Each environment will be writing into its own directory inside the bucket.

To avoid compromising security, this type of plan should not be used by multiple environments.

{{% /alert %}}

## 6 Networking

{{% alert type="info" %}}
DNS, load balancing and the ingress controller should be configured first for the whole Kubernetes cluster.
Mendix for Private Cloud will use the existing ingress controller.
{{% /alert %}}

### 6.1 OpenShift route

OpenShift routes are supported only in OpenShift.

The only configuration option currently supported is turning TLS on or off.
When TLS is turned on, `Edge` termination will be used, with automatic redirection from HTTP to HTTPS.

{{% alert type="info" %}}
Custom TLS certificates are not supported - the default router certificate will be used.
{{% /alert %}}

### 6.2 Ingress

We currently support the following ingress controllers:

* [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
* [Traefik 1.7](https://containo.us/traefik/)

For ingress, it is possible to do the following:
* Turn TLS on and off
* Provide a domain name (e.g. mendix.example.com)
* Add ingress annotations

For each environment, the URL will be automatically generated based on the domain name.
For example, if the domain name is set to mendix.example.com, then apps will have URLs such as myapp1-dev.mendix.example.com, myapp1-prod.mendix.example.com and so on.

The DNS server should be configured to route all subdomains (the `*` subdomain, e.g. *.mendix.example.com) to the ingress/load balancer.

For TLS, the ingress should have a default certificate with a wildcard domain (e.g. *.mendix.example.com).
