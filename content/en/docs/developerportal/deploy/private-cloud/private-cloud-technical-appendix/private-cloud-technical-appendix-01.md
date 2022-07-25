---
title: "Technical Appendix: 1. Introduction to Operators"
linktitle: "1. Introduction to Operators"
url: /developerportal/deploy/private-cloud-technical-appendix-01/
description: "Describes which providers are supported by Mendix for Private Cloud"
weight: 10
tags: ["Private Cloud", "Technical Appendix"]
---

## 1 Introduction

The deployment of apps to Mendix for Private Cloud is controlled by the Mendix Operator. This document provides information on how the Mendix Operator works and how it interacts with Kubernetes.

## 2 What Is an Operator?

### 2.1 Issues around Deploying Manually

The quickest way to deploy an application into Kubernetes is to manually create its resources with commands such as `kubectl create pod` or `kubectl apply`. This works with any container image and getting started is easy. But any non-default configuration options require knowledge of how the application and its container image work internally. For example, some applications use environment variables and others require a configuration file.

### 2.2 Using Helm to Deploy

Tools like [Helm](https://helm.sh) and [Kustomize](https://kustomize.io/) allow the use of a library of templates and simplify deploying applications. Instead of managing individual resources such as Pods or Services, Helm allows the installation of an entire application, such as a Postgres database server – and configures application-specific options such Postgres replication settings.

While Helm might be suitable for applications that don't need to be frequently modified or reconfigured, Helm doesn't monitor applications after they have been deployed. In addition, Helm cannot do any advanced processing, such as requesting a new database user or ensuring that an application knows its ingress domain name.

### 2.3 Kubernetes Operators{#operators}

Kubernetes offers a standard way to automate application management – the [Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). An operator uses the standard Kubernetes [REST API](https://kubernetes.io/docs/reference/using-api/) and its own Kubernetes service account to monitor and manage Kubernetes resources for an application.

Kubernetes supports custom extensions to its API called [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) (CRs). A CR looks just like a standard Kubernetes resource (such as a pod, secret, or service) and represents a custom object type. CRs are defined through [Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) (CRDs) which are installed globally into a Kubernetes cluster. CRs are plain text files can be updated using a text editor and managed through the Kubernetes API.

A Kubernetes operator contains one or more [Controllers](https://kubernetes.io/docs/concepts/architecture/controller/) that implement a control loop. A controller continuously monitors CRs and performs the actions necessary to bring the resource into a desired state (expressed in the CR's `spec` field). Any status changes and updates will be reported through the CR's `status` field. An operator can be controlled through its CRs either manually, using `kubectl`, or automatically, by other operators or components that can communicate with the Kubernetes API.

Red Hat's primary way of installing software into OpenShift uses operators, hosted on [operatorhub.io](https://operatorhub.io/). A few well-known operators include:

* [PGO: The Postgres Operator from Crunchy Data](https://access.crunchydata.com/documentation/postgres-operator/latest/) – an operator that allows you to have a fully managed database without relying on a cloud provider
* [MinIO](https://docs.min.io/minio/k8s/) – an operator that manages Minio clusters and allows the management of self-hosted S3-compatible blob storage servers
* [cert-manager](https://cert-manager.io/) – an operator that can request TLS certificates from ACME servers (Let's Encrypt) or other certificate issuers and works in a set-it-and-forget-it way
* [Strimzi](https://strimzi.io/) – an operator to create and manage Kafka clusters

To find out more about Kubernetes operators, see the following links:

* [Red Hat operator documentation](https://cloud.redhat.com/learn/topics/operators)
* [This Container Solutions blog post](https://blog.container-solutions.com/kubernetes-operators-explained)
* [This blog by Ivan Velichko exploring the Kubernetes Operator Pattern](https://iximiuz.com/en/posts/kubernetes-operator-pattern/)

## 3 Mendix for Private Cloud Operator

Mendix for Private Cloud contains multiple components. The following components are not a part of the Mendix Operator, but can manage or control it through Mendix CRs:

* The Mendix Gateway Agent allows the Private Cloud Portal to manage environments
* The Configuration Tool updates CRs that are used to configure the Mendix Operator

### 3.1 What the Mendix Operator Offers

After it has been installed and configured, the Mendix Operator will manage Mendix app environments. These environments can be configured by creating, updating or deleting the `MendixApp` CR. This CR is used to express the environment's desired state, and if the current state does not match the desired state the Mendix Operator will apply the changes necessary to bring the environment to the desired state.

The `MendixApp` CR can be modified by any Kubernetes API consumers: other operators; `kubectl`; or the Mendix Gateway Agent.

The Mendix Operator is an all-in-one operator that can do the following actions:

* Manage network-related objects: services, ingresses, or OpenShift routes.
* Manage compute and configuration resources for an environment: deployments; [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/); and secrets.
* Manage data storage (database and blob storage) by:
    - creating or deleting a new database or storage bucket when an environment is created or deleted
    - attaching an existing database or storage bucket to an environment, if it can be done safely (for example, a database or a dedicated bucket is not safe if it is shared between applications)
    - partitioning a database or storage bucket so that each environment can only access its own data
* Build and push a Mendix app container image from an MDA file into a container registry.

### 3.2 Dependencies

To integrate with managed services from a cloud provider and Kubernetes vendor, the Mendix Operator does not run services that are commonly included with a Kubernetes cluster:

* A database and blob file storage
* A container registry
* An Ingress controller and its associated network dependencies: a load balancer; IP address; DNS domain name; and configuration
* The Kubernetes cluster itself

You will need to set up, configure, and manage these resources yourself. This allows you to set up and configure the infrastructure in a way that complies with your organization's policies.

In addition, we highly recommend using a logging/monitoring stack such as Grafana/Prometheus/Promtail/Loki to collect and visualize logs and metrics.

### 3.3 Processing Changes

Following the Kubernetes operators best practices, the Mendix Operator does not have an internal state. Every time the Operator's control loop runs, the Operator checks if its managed resources match its desired state or whether they need to be updated. It then applies any changes necessary.
If the `mendix-operator` deployment is stopped and started again after some time, it will process any changes between the state when it was stopped and the state when it is restarted. In other words, the Operator does not process individual changes (for example “enable debug mode”), it updates resources (such as deployments) to match the current desired state.

Most resources are managed (owned) by the Operator, which means the Operator will roll back any properties it doesn't expect, allowing the Operator to automatically recover (heal) non-working configurations.

It is safe to update the an existing `MendixApp` CR while the Operator is still processing changes. For example, if you have decided to deploy a new MDA, but forgot to update some microflow constants, you can edit (update) the `MendixApp` CR immediately with the right configuration — the Mendix Operator will cancel any changes it is still processing and start applying the updated configuration.

However, do not modify resources (deployments, services, or ConfigMaps) which are not covered in the documentation. This might lead to the Operator seeing that a resource needs to be updated and either not being able to process changes to reach the desired state or rolling back your changes.

### 3.4 Custom Resources

Mendix for Private Cloud includes multiple Custom Resources (CRs).

#### 3.4.1 CRs Which Control the Operator

These CRs provide the configuration for the Operator:

* `OperatorConfiguration` specifies a common configuration for all environments in a namespace. Most of the `OperatorConfiguration` can be managed with the Mendix for Private Cloud Configuration Tool `mxpc-cli`, with a few advanced options that can be updated manually.
* `OperatorVersion` is used to specify Operator versions and the registry containing auxiliary container images. This CR should not be modified manually — it is updated automatically when the Operator is installed or upgraded.
* `StoragePlan` provides the Operator with instructions on how to provide a database or file blob storage to a new environment, and how to clean up storage after an environment has been deleted. It is not meant to be edited manually, the `mxpc-cli` Cloud Configuration Tool creates and updates `StoragePlan` CRs and ensures that the configuration is valid.

#### 3.4.2 CRs Which Control the App Environment

The `MendixApp` CR is the top-level CR which provides the configuration for a Mendix app environment. This CR is the only one that should be modified to update an environment.

Each aspect of a Mendix app environment is managed by its own CR and controller which should not be modified directly:

* `Build` is used to build and push a new container image to the registry when required
* `Endpoint` manages network-related features that allow HTTP traffic to be routed into a Mendix app
* `StorageInstance` is used to request databases and file blob storage, using the configuration and instructions from a `StoragePlan` CR
* `Runtime` manages compute resources (deployments) and other Mendix app configuration such as environment variables and microflow constants

There are at three levels of CRs used to control a Mendix app environment:

1. The `MendixApp` CR itself, which is a top level CR
2. Dependency CRs, such as `Build`, `Endpoint`, `StorageInstance` and `Runtime` – owned by the `MendixApp` CR
3. Kubernetes resources that are owned by dependency CRs – for example, an `Ingress` and `Service` owned by `Endpoint`

CRs on each level will have an owner reference set to its owner object, and the resource name will be based on its owner object. This means that:

* Deleting the `MendixApp` CR will trigger all its associated objects to be [garbage collected](https://kubernetes.io/docs/concepts/architecture/garbage-collection/) by Kubernetes, effectively deleting all objects associated with that environment.
* If a `MendixApp` CR is called `my-app`, its resources will use names based on `my-app`, for example `my-app-database` and `my-app-build`.

Each Mendix CR has a `status` field that indicates the resource's status and errors or issues that are preventing this CR from applying changes. Values of `status` fields are propagated from dependencies all the way to the top-level `MendixApp` CR. In addition, most controllers also send Kubernetes events when a change has been processed successfully or failed.

Some CRs depend on others and use the `status` of their dependencies for configuration. For example:

* The `Runtime` CR is only updated when all other CRs for that environment have a non-error state.
* The `Runtime` CR uses the `Endpoint`'s status `appURL` so that the Mendix app knows its external URL, even if the URL is automatically generated by the Ingress controller or load balancer.

If you want to prevent developers from accessing secrets or other Kubernetes objects, you can use [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) to limit developers read/write access to `MendixApp` CRs. In this way, the `MendixApp` CR provides a higher level abstraction over basic Kubernetes objects.

### 3.5 Scope

Mendix Operator is limited in scope to one namespace. If you need to use the Mendix Operator in multiple namespaces, you have to install it and configure it in each namespace. This allows the use of multiple versions of the Operator, with different configurations, in the same cluster — as long as each Operator runs in its own dedicated namespace.
It is not possible to install one global instance of the Operator for the entire cluster.

On the other hand, CRDs are global within the cluster. Since all Mendix Operators in a cluster will be using the same shared CRD, it is critical that the latest version of the CRDs are installed in a cluster.  See the [Private Cloud upgrade instructions](/developerportal/deploy/private-cloud-upgrade-guide/) for more information.

Deleting any CRD from a cluster will also delete its CRs. Only run `kubectl delete crd` in a cluster where no Mendix app environments are installed.

Since the Operator and the CRs it manages are in the same namespace, the namespace should only be deleted when there are no environments or other CRs remaining in that namespace.
The Operator deployment/pod and its configuration CRs (`OperatorConfiguration`, `StoragePlan`s, `Secret`s) are used by the Kubernetes garbage collector to clean up the database and file storage associated with an environment.
Do not run `kubectl delete namespace` before all environments have been deleted from that namespace, otherwise Kubernetes cannot perform the garbage collection and the namespace will be stuck in a `Terminating` state.

### 3.6 Service Containers

Some actions, such as building a container image or managing an Azure SQL database, require additional dependencies and resources.
For example, building a container image can take several minutes. To push the resulting image into a registry, additional authentication helpers might be required.
Databases and file storage buckets require client libraries – and in some cases additional packages.

For some tasks, the Operator uses “task” pods: pods that execute a certain task and then terminate. These pods are an equivalent to CI/CD jobs — the Operator will provide all parameters to the task, then wait for the pod to complete and check its final status.
This allows the Operator to support extensions and provider-specific addons that are delivered as separate containers, keeping the Operator image compact and free of code and dependencies that are optional.
Running separate pods also allows the Operator to be restarted without interrupting any tasks that are in progress. This approach also allows lengthy or  resource-consuming tasks to run separately from the Operator, in separate pods or even on different nodes, without consuming resources from the Operator.

### 3.7 Other Notes

The Mendix Operator is installed and upgraded using a custom tool (the `mxpc-cli` Configuration Tool). This tool requires only `kubectl` or `oc` to be installed on your system, and works identically in clusters and providers.
We do not currently offer alternative installation options, such as [OLM](https://olm.operatorframework.io/) or Helm charts. If want to audit changes before they are applied, the `mxpc-cli` tool can generate a yaml file and `kubectl patch` instructions that can be reviewed and applied manually.

The Operator cannot update `StorageInstance`s, it can only create or delete them. If you update a `StoragePlan` that is currently in use by one or several `StorageInstance`s (environments), it will not automatically update the `StorageInstance`s that were already created. Also, some changes such as switching to another database server will migrate the data between servers.

To prevent a cascading reconfiguration of all environments in a namespace, the Operator does not monitor the `OperatorConfiguration` CR. If you make changes to the `OperatorConfiguration` CR, the Operator should be restarted manually. This will cause it to re-check and update every resource it is managing.
