---
title: "Technical Appendix: 2 Operator Flows"
parent: "private-cloud-technical-appendix"
description: "Describes which providers are supported by Mendix for Private Cloud"
menu_order: 20
tags: ["Private Cloud", "Technical Appendix"]
---

## 1 Introduction


This documentation provides an overview of how the Mendix for Private Cloud components interact both with external services, and with each other. It explains what happens when:

* the Mendix Operator is installed and configured
* an environment is created

{{% alert type="info" %}}
The sequence diagrams in this document are simplified for clarity. Kubernetes Operators are non-blocking, event-driven, and asynchronous. Instead of relying on blocking method calls, the Operator receives events when a CR or another Kubernetes Resource changes its status and, if changes are necessary, will send a request to create, update, or delete a Kubernetes Resource.
{{% /alert %}}

## 2 Installation Prerequisites

For a full list of the Operator prerequisites, see https://docs.mendix.com/developerportal/deploy/private-cloud-supported-environments.

Mendix for Private Cloud is the officially supported Mendix solution for deploying Mendix apps into a Kubernetes cluster.
To provide a better integration with an existing ecosystem, Mendix for Private Cloud relies on external services for compute, storage, and networking resources. For example, Mendix for Private Cloud in the AWS ecosystem can allow you to:

* benefit from AWS hyperscaling features
* use a managed database and file storage solution
* integrate with other workloads already running in the same AWS account

Mendix for Private Cloud provides improved integration with some hyperscalers, but also supports self-hosted solutions. It is possible to run Mendix for Private Cloud on a local, self-contained Kubernetes VM such as *microk8s*, *k3s/k3os*, or *minikube*.

Before installing the Mendix for Private Cloud Operator, it is highly recommended that you confirm the environment is working. For example, you can try deploying a “hello world” test container app and testing that the database, file storage, and container registry can be reached from the Kubernetes cluster.

{{% alert type="info" %}}
If your Kubernetes environment can be accessed from the public internet, ensure that the environment is secured and up to date.
{{% /alert %}}

### 2.1 Kubernetes

The Mendix Operator uses the [Kubernetes API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/) to manage Kubernetes resources and store its state. The Mendix Operator includes [Custom Resource Definitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), which allow control of the Operator and query its status through the Kubernetes API. Any Kubernetes API client can be used to control the Operator, including `kubectl`, `oc`, the OpenShift Web Console, [Lens](https://k8slens.dev/), and many others. The Private Cloud Portal can also be used to manage environments (using the Mendix Gateway Agent as the Kubernetes API client).

Mendix for Private Cloud doesn't access the base operating system. Kubernetes service accounts are used to call the Kubernetes API and [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) ensures that each service account only gets the minimum required permissions. All container images provided by Mendix run as a non-root user/group and don't require privilege escalation. Container images can be run in OpenShift with randomized UIDs without any configuration.

During [installation with `mxpc-cli`](#installation), the current user's Kubernetes authorization is used to create namespaces and install CRDs.

### 2.2 Database

Each Mendix environment needs a dedicated database – two different applications/environments cannot share a database.
Mendix for Private Cloud has built-in features to create and delete tenants on a database server, which allows a single database server to be shared by multiple environments. This is called an “On-Demand” database: as soon as a new environment is created, the Operator can automatically create a database tenant for that environment.

You can also create a “Dedicated” database manually, and the Operator will just pass the database credentials directly to the Mendix Runtime. Dedicated databases cannot be shared between environments.

Mendix for Private Cloud will not install, create, or maintain the database server – you will need to provide the database server and maintain it. You can use any compatible database server, as long as the database server is officially supported by Mendix for Private Cloud (for example a geo-redundant AWS Aurora).

For apps that don't need persistence (for example demo or frontend apps), an ephemeral database can be used. The Mendix Runtime will use an in-memory database which will not persist any data between restarts.

### 2.3 File storage

To store files, Mendix environments need access to a blob (object) storage server, such as AWS S3 or Minio. A specialized blob storage server is much easier to maintain and manage than block storage (CSI or mounted volumes). Unlike databases, a single blob storage bucket and account can be shared by multiple environments.
Depending on the storage provider, Mendix for Private Cloud can either provision the bucket and IAM user automatically when a new environment is created, or let an environment use a pre-provisioned bucket and IAM account.

Mendix for Private Cloud will not install, create, or maintain the blob storage server (such as Minio) – you will need to install the blob storage server and maintain it. When using a managed storage solution such as AWS S3 or Azure Blob Storage, you will need to create the storage account and IAM role to be used by the Mendix Operator.

### 2.4 Network endpoint

To allow HTTP clients to communicate with the Mendix Runtime, you will need to set up the network infrastructure. This typically includes a DNS wildcard domain, a load balancer, and an ingress controller. The infrastructure will depend on how exactly your network is set up and how Mendix apps should be reachable. For example, you might have a requirement allow Mendix apps to only be reachable from a private intranet and use domains from a private DNS zone.

Some Kubernetes vendors such as OpenShift will install and configure the entire network out of the box. Other vendors such as AWS offer multiple types of Ingress controllers and Load Balancers.

Mendix for Private Cloud can create one of:

* A [Kubernetes Service](https://kubernetes.io/docs/concepts/services-networking/service/)
* A [Kubernetes Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/), plus an associated service
* An [OpenShift Route](https://docs.openshift.com/container-platform/4.9/networking/routes/route-configuration.html), plus an associated service

Mendix for Private Cloud allows you to customize some Ingress, Route, and Service properties either globally (for the entire namespace) or per environment.

### 2.5 Container registry

Kubernetes uses container images to distribute software. Before deploying a Mendix app (.mda) file, Mendix for Private Cloud will repack the .mda file into a container image and push this image into a container image registry such as *ECR*, *quay.io*, or *Nexus*. Using a centralized container registry simplifies cluster scaling and provides insights what is running in a cluster.
For example, it is possible to use [Trivy scanner](https://github.com/aquasecurity/trivy) to scan all images deployed in a cluster for CVEs.

You will need to create the container registry and provide credentials to the Mendix Operator so that it can push images to the registry. In addition, your Kubernetes cluster needs to be authorized to pull images from the registry.

### 2.6 Network connectivity

Your cluster needs network connectivity to the database and file (blob) storage.

For *Connected* clusters, Mendix for Private Cloud needs to be able to connect to [Mendix services](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster#prerequisites-connected). If necessary, communication can be done through an HTTPS proxy. The Mendix Operator doesn't require any internet-facing open ports (port forwarding) to communicate with Mendix services. All communication with the Developer Portal is over HTTPS and is initiated from the Kubernetes cluster. It is even possible to run Mendix for Private Cloud behind Network Address Translation (NAT) devices or even a series of NAT devices.

## 3 Installation{#installation}

The `mxpc-cli` Configuration Tool is used to configure and install Mendix for Private Cloud.
This tool provides an interactive, terminal-based GUI to prepare and apply Kubernetes configuration objects (such as Deployments, Pods, Secrets, and Mendix Operator CRs). To communicate and authenticate with the Kubernetes API, the default `KUBECONFIG` is used. If your `KUBECONFIG` has multiple contexts, clusters, or users, please switch to the target context before running the `mxpc-cli` tool.

![](attachments/private-cloud-tech-appendix/mx4pc-installation.png)

When a StoragePlan CR is successfully created or updated in Kubernetes, the `mxpc-cli` tool will call the Private Cloud Portal to create a label for that StoragePlan. Cluster members can then select this plan from a dropdown when creating a new environment. This is only used in Connected mode, and the `mxpc-cli` tool will not create StoragePlan labels when the cluster is installed in Standalone mode.

{{% alert type="info" %}}
The configuration tool only creates configuration objects through the Kubernetes API. It can manage Mendix for Private Cloud components (the Mendix Operator and Mendix Gateway Agent). It does not directly communicate with the Mendix for Private Cloud Operator or manage infrastructure such as AWS accounts, VMs, or databases.
{{% /alert %}}

## 4 App Deployment

When you create a new environment from the Private Cloud Portal, it will send the `MendixApp` CR to the Mendix Gateway Agent. The Agent will then create the `MendixApp` CR in Kubernetes.
Then the Operator will start processing all of the `MendixApp` dependencies – `StorageInstance`, `Build`, and  `Endpoint` CRs. Each dependency CR is handled by its own controller.
Once all dependencies are processed (report their status as Ready), the Operator will process the `Runtime` CR.
Any time a CR's status is changed, the Operator will propagate it to the `MendixApp` CR. The Agent will receive events any time the `MendixApp` CR changes its status, and forward this status back to the Private Cloud Portal.
To get the latest status reported by the Mendix Gateway Agent in the Private Cloud Portal, press the Refresh button.

![](attachments/private-cloud-tech-appendix/mx4pc-deployment.png)

### 4.1 Storage Provisioning

This diagram provides a more detailed explanation how the Mendix Operator communicates with the `StorageInstance` controller when creating a new environment.
The Operator doesn't communicate with the database or file storage directly – instead, the `StorageInstance` controller can run a provisioner pod (a “task” pod) to create a new storage tenant in the database or file server.
The `StoragePlan` CR (created earlier when the Operator was configured with the `mxpc-cli` Configuration Tool) contains blueprints for the provisioner pod, such as:

* The provisioner image name
* Name of the Kubernetes secret containing management credentials – such as the PostgreSQL admin username/password or AWS credentials
* Command-line arguments
* Memory and CPU requests and limits

To the Operator, all provisioner pods look identical, and work as plugins. The `StorageInstance` controller will create a provisioner pod and wait for it to successfully complete. If the provisioner terminated without an error and created a secret, the `StorageInstance` controller assumes that the storage was successfully provisioned and ready for use.

Each storage type (PostgreSQL, JDBC, S3, Minio, and others) typically has its own provisioner image. For example, the PostgreSQL provisioner image will connect to the PostgreSQL server and create a new database and role that can only be used by one app.

When a provisioner pod successfully creates a new tenant for an environment, it will store the credentials that can be used by that environment in a new Kubernetes secret. The provisioner pod doesn't have permissions to read or modify secrets, only to create new secrets.
Some provisioners (“basic” provisioners) don't communicate with a storage server and only create generate a Kubernetes secret – for example, this approach is used by the *****Dedicated JDBC* database option and the *S3 (existing bucket and account)* file storage option.

If the provisioner pod fails with an error, it is likely to be because of a configuration issue, and the `StorageInstance` controller will not try to run the provisioner pod again. You will need to review the logs from the failed pod, resolve the underlying issue, and delete the provisioner pod. Only then the `StorageInstance` controller will attempt to provision storage again.

![](attachments/private-cloud-tech-appendix/mx4pc-provision-storage.png)

### 4.2 App Image Build

When a new deployment package (MDA) is deployed from the Private Cloud Portal to an environment, the Private Cloud Portal will generate a new sourceURL (a URL where the MDA can be downloaded) and send it to the Mendix Gateway Agent. The Mendix Gateway Agent will then update the `MendixApp` CR's `spec.sourceURL` attribute.

When the `Build` controller detects that the `spec.sourceURL` attribute doesn't match the `status.sourceURL` in the `Build` CR, it will run the build pod.
The build pod will then

* download the MDA from the specified `spec.sourceURL`
* convert the MDA into a OCI image layer (app layer)
* append the app layer to a `runtime-base` image and push the resulting image to the image registry
    - internally, this is done by using the [crane append](https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_append.md) operation
    - `runtime-base` images are prebuilt Mendix Runtime images that contain a specific version of the Mendix Runtime and all of its dependencies (JRE, fonts)

When the build pod successfully completes without errors, the container registry will contain an updated version of the app's image. The `Build` controller will then copy the `sourceURL` from the Pod to the `Build` CR's `status.sourceURL`. This way, the Mendix Operator knows which image is currently stored in the image registry.
The `Build` CR's updated `status.sourceURL` will be transferred to the `MendixApp` CR's `status.sourceURL`, and every time this `status.sourceURL` is changed, the `Runtime` controller will restart the environment.

If the build pod fails with an error, it is likely to be because of a configuration issue, and the `Build` controller will not try to run the build pod again. You will need to review the logs from the failed pod, resolve the underlying issue, and delete the build pod. Only then the `Build` controller will attempt to provision storage again.

![](attachments/private-cloud-tech-appendix/mx4pc-build-image.png)

### 4.3 Endpoint Allocation

Mendix for Private Cloud offers three different ways to route traffic from an HTTP listener to a Mendix runtime:

* Kubernetes Ingress
* OpenShift Routes
* Service only

The Ingress and Route options allow to quickly start using an existing Ingress controller or OpenShift router (a Kubernetes service would be created as well – to allow load balancing between replicas of your Mendix app). If you choose to only create a Service, it is possible to route traffic directly from a Load balancer such as AWS CLB or NLB, or manually create and manage Ingress resources.

To use an Ingress controller, you will need to install it first:

* Install an ingress controller
* Most ingress controllers will also create a Kubernetes load balancer service on installation
* Set up DNS so that you app domain(s) (or wildcard domain) is resolved to the Load Balancer's external IP address
    - For example, here is an article how to set up Route 53: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html
    - As an alternative, you can install and set up Kubernetes [External DNS](https://github.com/kubernetes-sigs/external-dns) to automatically manage your DNS server
* Create a test ingress object and deploy a test app to verify that the network setup is working

![](attachments/private-cloud-tech-appendix/mx4pc-ingress-controller.png)

If you are using OpenShift Routes, the OpenShift router is already configured and doesn't need additional configuration.

When a new environment is created in the Mendix Operator, it will create a Service object (for all endpoint types: service only, ingress, or route) and the ingress or route object.
After the `Endpoint` controller successfully creates all required objects, the `MendixApp` controller will automatically set the Runtime's ApplicationRootUrl – so that a Mendix app can always know its URL.

![](attachments/private-cloud-tech-appendix/mx4pc-applicationrooturl.png)

When accessing an app from a web browser through an ingress or route, the path would look like this:

![](attachments/private-cloud-tech-appendix/mx4pc-traffic-ingress.png)

When accessing an app from a web browser through a Load Balancer service, the path would look like this:

![](attachments/private-cloud-tech-appendix/mx4pc-traffic-service.png)

### 4.4 Logging and Metering

For logging and metering, Mendix for Private Cloud relies on open industry standards:

* Prometheus metrics
* Standard output for container logs

If your cluster doesn't already have a logging and monitoring solution, you can follow the [documentation](https://docs.mendix.com/developerportal/deploy/private-cloud-monitor) how to install Grafana and start collecting logs and metrics from Mendix apps.

![](attachments/private-cloud-tech-appendix/mx4pc-logging-metering.png)
