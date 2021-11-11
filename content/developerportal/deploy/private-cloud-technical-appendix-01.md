---
title: "Technical Appendix: 1 Introduction to Operators"
parent: "private-cloud-technical-appendix"
description: "Describes which providers are supported by Mendix for Private Cloud"
menu_order: 10
tags: ["Private Cloud", "Technical Appendix"]
---

## 1 Introduction

# What is an Operator

The quickest way to deploy an application into Kubernetes is to manually create its resources: with commands such as `kubectl create pod` or `kubectl apply`. It works with any container image and getting started is easy. But any non-default configuration options require knowledge about how the application and its container image work internally - for example, some applications use environment variables and others require a configuration file.
Tools like [Helm](https://helm.sh) and [Kustomize](https://kustomize.io/) allow to use a library of templates and simplify deploying applications. Instead of managing individual resources such as Pods or Services, Helm allows to install an entire application, such as a Postgres database server - and configure application-specific options such Postgres replication settings.

While Helm might be suitable for applications that don’t need to be frequently modified or reconfigured, Helm doesn’t monitor applications after they’ve been deployed. Helm also cannot have any advanced processing code such as requesting a new database user, or ensuring that an application knows its ingress domain name.
Kubernetes offers a standard way to automate application management - the [Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). An Operator uses the standard Kubernetes [REST API](https://kubernetes.io/docs/reference/using-api/) and its own Kubernetes Service Account to monitor and manage Kubernetes resources for an application.
Kubernetes supports custom extensions to its API called [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) (CRs). A custom resource looks just like a standard Kubernetes resource (such as a Pod, Secret or Service) and represents a custom object type. Custom Resources are defined through [Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) (CRDs) which are installed globally into a Kubernetes cluster.
A Kubernetes operator contains one or more Controllers that implement the [control loop](https://kubernetes.io/docs/concepts/architecture/controller/). A controller continuously monitors Custom Resources and performs actions necessary to bring the resource into a desired state (expressed in the Custom Resource’s `spec` field). Any status changes and updates will be provided through the Custom Resource’s `status` field. Since Custom Resources can be managed through the Kubernetes API, an Operator can be controlled through its Custom Resources - manually with `kubectl`, or automatically by other Operators or components that can communicate with the Kubernetes API.
Custom Resources require using a text editor to make changes, and some Operators provide alternative interfaces (CLIs or GUIs) to manage that Operator.

Red Hat’s primary way of installing software into OpenShift is Operators, hosted on [operatorhub.io](https://operatorhub.io/). A few well-known Operators include:

- [Crunchy Postgres Operator](https://access.crunchydata.com/documentation/postgres-operator/latest/) - an Operator that allows to have a fully managed database without relying on a cloud provider
- [Minio](https://docs.min.io/minio/k8s/) - an Operator that manages Minio clusters and allows to manage self-hosted S3-combatible blob storage servers
- [cert-manager](https://cert-manager.io/) - an Operator that can request TLS certificates from ACME servers (Let’s Encrypt) or other certificate issuers and works in a set-it-and-forget-it way
- [Strimzi](https://strimzi.io/) - an Operator to create and manage Kafka clusters

To find out more about Kubernetes Operators, see the following links:

- [Red Hat documentation about Operators](https://cloud.redhat.com/learn/topics/operators)
- https://blog.container-solutions.com/kubernetes-operators-explained
- https://iximiuz.com/en/posts/kubernetes-operator-pattern/
# Mendix for Private Cloud Operator

Mendix for Private Cloud contains multiple components. Some of these components are not a part of the Mendix Operator, but can manage or control it through Mendix Custom Resources:

- The Mendix Gateway Agent allows the Private Cloud Portal to manage environments
- The Configuration Tool updates Custom Resources that are used to configure the Mendix Operator


## What the Mendix Operator offers

After it’s been installed and configured, the Mendix Operator will manage Mendix app environments. These environments can be managed by creating, updating or deleting `MendixApp` Custom Resources. The `MendixApp` CR can be used to express the environment’s desired state - and if the current state doesn’t match the desired state, the Mendix Operator will apply the changes necessary to bring the environment to a desired state.

The `MendixApp` CR can be modified by any Kubernetes API consumers - other Operators, `kubectl` or the Mendix Gateway Agent.

The Mendix Operator provides an all-in-one Operator that can do the following actions:

- Manage network-related Objects: Services, Ingresses or OpenShift Routes.
- Manage compute and configuration resources for an environment: Deployments, ConfigMaps, Secrets.
- Manage data storage (database and blob storage) by
    - creating/deleting a new database or storage bucket when an environment is created or deleted
    - attaching an existing database or storage bucket to an environment - if it can be done safely (e.g. a database or a dedicated bucket cannot be shared between applications)
    - partitioning a database or storage bucket so that each environment can only access its own data
- Build and push a Mendix app container image into a container registry - from an MDA file.
## Dependencies

To integrate with managed services from a cloud provider and Kubernetes vendor, the Mendix Operator does not include services that are commonly included with a Kubernetes cluster:

- A database and blob file storage
- A container registry
- An Ingress controller and its associated network dependencies - a load balancer, IP address, DNS domain name and configuration
- The Kubernetes cluster itself

You will need to set up, configure and manage those resources yourself. This allows you to set up and configure the infrastructure in a way that complies with your organization’s policies.

In addition, a logging/monitoring stack such as Grafana/Prometheus/Promtail/Loki is highly recommended to collect and visualize logs and metrics.

## Processing changes

Following the Kubernetes Operators best practices, the Mendix Operator does not have an internal state. Every time the Operator’s control loop runs, the Operator checks if its managed Resources matches its desired state, or needs to be updated - and applies the changes necessary.
Even if the `mendix-operator` Deployment is stopped and started again after some time, it will be able to process any changes that happened while the Operator was not running.
This also means that instead of processing individual changes (for example “enable debug mode”), the Operator will always update resources (such as Deployments) to match their desired state.
Most resources are managed (owned) by the Operator, which means the Operator will roll back any properties it doesn’t expect - and allowing the Operator to automatically recover (heal) non-working configurations.

It’s safe to update the an existing `MendixApp` CR while it’s still processing changes. For example, if you’ve decided to deploy a new MDA, but forgot to update some microflow constants, you can edit (update) the `MendixApp` CR immediately with the right configuration - the Mendix Operator will cancel any changes it’s still processing and start applying the updated configuration.

Please do not modify resources (Deployments, Services, ConfigMaps) except those covered by documentation. The Operator might see that a resource needs to be updated, but will be unable to process changes; or it will immediately roll back your changes.

## Custom Resources

Mendix for Private Cloud includes multiple Custom Resource Definitions.

These Custom Resource provide the configuration for the Operator:

- `OperatorConfiguration` is used to specify common configuration for all environments in a namespace. Most of the `OperatorConfiguration` is managed with the Mendix for Private Cloud Configuration Tool `mxpc-cli`, with a few advanced options that can be updated manually.
- `OperatorVersion` is used to specify versions and the registry containing auxilliary container images. This CR should not be modified manually - it’s updated automatically when the Operator is installed or upgraded.
- `StoragePlan` provides the Operator instructions how to provide a database or file blob storage to a new environment, or how to clean up storage after an environment has been deleted. It’s not indended to be edited manually - the `mxpc-cli` Cloud Configuration Tool creates and updates `StoragePlan` CRs and ensures that the configuration is valid.

The `MendixApp` CR is the toplevel CR that is used to provide configuration for a Mendix app environment. This CR is the only one that should be modified to update an environment.
Each aspect of a Mendix app environment is managed by its own CR and controller:

- `Build` is used to build and push a new container image to the registry when required
- `Endpoint` manages network-related features that allow HTTP traffic to be routed into a Mendix app
- `StorageInstance` is used to request databases and file blob storage, using the configuration and instructions from a `StoragePlan` CR
- `Runtime` manages compute resources (Deployments) and other Mendix app configuration such as environment variables and microflow constants

There are at three levels of resources associated with a `MendixApp` CR

1. The `MendixApp` CR itself, which is a toplevel CR
2. Dependency CRs, such as `Build`, `Endpoint`, `StorageInstance` and `Runtime` - owned by the `MendixApp` CR
3. Kubernetes resources that are owned by dependency CRs: for example, an `Ingress` and `Service` owned by `Endpoint`

CRs on each level will have an owner reference set to its owner object, and the resource name will be based on its owner object. This means that:

- Deleting the `MendixApp` CR will trigger all its associated objects to be [garbage collected](https://kubernetes.io/docs/concepts/architecture/garbage-collection/) by Kubernetes - effectively deleting all objects associated with that environment.
- If a `MendixApp` CR is called `my-app`, its resources will use names based on `my-app`, for example `my-app`, `my-app-database`, `my-app-build` etc.

Each Mendix CR has a `status` field that indicates the resource’s status and errors or issues that are preventing this CR from applying changes. Values of `status` fields are propagated from dependencies all the way to the toplevel `MendixApp` CR. In addition, most controllers also send Kubernetes events when a change has been processed successfully or failed.

Some CRs depend on others and use the `status` of their dependencies for configuration. For example:

- The `Runtime` CR is only updated when all other CRs for that environment have a non-error state.
- The `Runtime` CR uses the `Endpoint`'s status `appURL` - so that the Mendix app knows its external URL, even if the URL is automatically generatd by the Ingress controller or load balancer.

If you would like to prevent developers from accessing Secrets or other Kubernetes objects, you can use [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) to only allow developers read/write access to `MendixApp` CRs and nothhing else. This way, the `MendixApp` CR can be used as a higher level abstraction over basic Kubernetes objects.

## Scope

Mendix Operator is limited in scope to one namespace. If you need to use the Mendix Operator in multiple namespaces, you will need to install it and configure it in each namespace. This allows to use multiple versions of the Operator, with different configurations in the same cluster.
At the moment, it’s not possible to install one global instance of the Operator for the entire cluster.

However, Custom Resource Definitions are global. Since all Mendix Operators in a cluster will be using the same shared Custom Resource Definitions, it’s critical that the latest version of the Custom Resource Definitions are installed in a cluster.  See the Private Cloud upgrade instructions for more information.

Deleting any Custom Resource Definition from a cluster will also delete its Custom Resources. Running `kubectl delete crd` could be destructive and should only be run in a cluster where no Mendix app environments are installed.

Since the Operator and the Custom Resources it manages in the same namespace, the namespace should only be deleted when there are no environments or other Custom Resources remaining in that namespace.
The Operator Deployment/Pod and its configuration CRs (`OperatorConfiguration`, `StoragePlan`s, `Secret`s) are used by the Kubernetes garbage collector to clean up the database and file storage associated with an environment.
Running `kubectl delete namespace` before all environments have been deleted from that namespace will make it impossible for Kubernetes to perform the garbage collection, and the namespace will be stuck in a `Terminating` state.

## Service Containers

Some actions, such as building a container image or managing an Azure SQL database requires additional dependencies and resources.
For example, building a container image can take several minutes. To push the resulting image into a registry, additional authentication helpers might be required.
Databases and file storage buckets require client libraries - and in some cases additional packages.

For some tasks, the Operator uses “task” pods - a Pod that runs to execute a certain task, then terminates. These pods are an equivalent to CI/CD jobs - the Operator will provide all parameters to the task, then wait for the Pod to complete and check its final status.

This allows the Operator to support extensions and provider-specific addons that are delivered as separate containers - keeping the Operator image compact and free of code and dependencies that are optional.
Running separate Pods also allows the Operator to be restarted without interrupting any tasks that are in progress. This approach also allows time and resource-consuming tasks to run separately from the Operator - in separate Pods or even on different Nodes, without consuming resources from the Operator.

## Other notes

The Mendix Operator uses a custom tool (the `mxpc-cli` Configuration Tool) for the installation and upgrade process. This tool requires only `kubectl` or `oc` to be installed on your system, and works identically in clusters and providers.
We currently don’t offer alternative installation options, such as [OLM](https://olm.operatorframework.io/) or Helm charts. If you would like to audit changes before they’re applied, the `mxpc-cli` tool can generate a yaml file and `kubectl patch` instructions that can be reviewed and applied manually.

The Operator can only create or delete `StorageInstance`s at the moment. If you update a `StoragePlan` that’s currently in use by one or several `StorageInstance`s (environments), it will not automatically update the `StorageInstance`s that were already created. Also, some changes such as switching to another database server will migrate the data between servers.

To prevent a cascading reconfiguration of all environments in a namespace, the Operator doesn’t monitor the `OperatorConfiguration` CR. Once you’ve made any changes in the `OperatorConfiguration` CR, the Operator should be restarted manually - this will cause it to re-check and update every resource it’s managing.
