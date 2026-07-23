---
title: "AC-06 Least Privilege"
linktitle: "AC-06"
url: /private-mendix-platform/nist-controls/ac-06/
description: "Documents the Private Mendix Platform's compliance with the AC-06 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 control.

| Control ID | AC-06 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization employs the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) which are necessary to accomplish assigned tasks in accordance with organizational missions and business functions.

### Supplemental Guidance

Organizations employ least privilege for specific duties and information systems. The principle of least privilege is also applied to information system processes, ensuring that the processes operate at privilege levels no higher than necessary to accomplish required organizational missions/business functions. Organizations consider the creation of additional processes, roles, and information system accounts as necessary, to achieve least privilege. Organizations also apply least privilege to the development, implementation, and operation of organizational information systems.

* AC-02
* [AC-03](/private-mendix-platform/nist-controls/ac-03/)
* AC-05
* CM-06
* CM-07
* PL-02

## Responsibility

### Mendix Responsibility

#### Private Mendix Platform Installation

Private Mendix Platform supports least privilege by requiring explicit configuration of infrastructure, separating operational scopes, and allowing customers to enable only the functions they need. Private Mendix Platform is deployed into customer-managed Kubernetes environments with defined namespaces, storage, database, registry, and identity settings rather than relying on broad default access. Private Mendix Platform also supports least privilege through controlled authentication and secret management. Sensitive configuration, including database, storage, and administrator credentials, can be sourced from external secret providers.

##### Build Agent

Private Mendix Platform provides a build agent to orchestrate build pods. Build agent implements a secure, ​​least-privilege access model​​ for creating Pods within the Kubernetes cluster. The core concept is to ​​decouple the external user's permissions from the internal service's capabilities​​ by leveraging Kubernetes RBAC (Role-Based Access Control).

##### Connected Mode Deployment

This supports least privilege by centralizing deployment functions in the operator and agent model and limiting the number of users who need direct cluster administration rights. Initial cluster registration and operator installation may still require elevated infrastructure permissions, but ongoing application deployment and environment management can be delegated through Private Mendix Platform without granting broad cluster privileges to all app-level users.

#### Private Mendix Platform Operation (Admin Access)

Private Mendix Platform restricts administrative access through role separation, configurable role assignment, and enterprise identity integration. Administrative duties are divided between Company admin and System admin roles. This separation limits unnecessary access to platform-wide configuration.

Private Mendix Platform further supports least privilege through Dynamic Role Management. Predefined roles such as Developer, Contributor, Operator, and Administrator can be assigned and customized for project, cluster, and CI/CD permissions. Roles are assigned through group membership and applied only to owned or associated resources, allowing access to align with organizational and operational boundaries.

#### Private Mendix Platform Application Management

Private Mendix Platform associates access with apps, groups, namespaces, and roles. App owners can invite users and assign roles, while inherited group roles are synchronized to owned or associated resources. This means the control plane does not require every user to have direct broad access to clusters or all applications. Instead, access is derived from resource ownership and group-based role assignment.

### Customer Responsibility

* The customer cluster admin uses the Private Mendix Platform installer to grant these permissions to the build agent component.
* The customer must correctly install components related to connected mode deployment, such as Interactor, Collector, and Authenticator.
* The customer's administrator must properly grant specific people access to the cluster and namespace management for connected mode deployment.
* The customer must grant proper permissions to give the Private Mendix Platform `mxpc-cli` access to the destination Kubernetes cluster. After that, a piece of script must be executed with `mxpc-cli`.
* Customers must configure Private Mendix Platform roles, group and app ownership, and approval workflows, so that CI/CD and deployment actions are performed only by explicitly authorized users and services
* App implementers and App operators must connect to the customer's IdP of choice, use Private Mendix Platform roles, group ownership, environment separation, application-level security, and controlled approval-based deployment processes, so that users and teams receive only the minimum access required for development, operations, and production deployment.
* Infrastructure implementers and operators are responsible for deploying Private Mendix Platform in a least-privilege environment by separating namespaces where required, scoping Kubernetes RBAC and service identities to only required functions, using managed identity and centralized secret management where supported, restricting access to infrastructure services and tokens, and disabling unused platform capabilities. Because Private Mendix Platform cluster integration relies on customer-created tokens and RBAC objects, customers must demonstrate that these permissions are explicitly limited and justified rather than broadly granted.

## Guidance

### Mendix Responsibility

#### Build Agent

By defining `​​ServiceAccounts`​​, ​​`Roles`​​, `​​RoleBindings​​`, and ​​security policies​​ in Helm charts, the Private Mendix Platform installer ensures that Kubernetes build agents operate under ​​the principle of least privilege​​. This reduces security risks while maintaining CI/CD functionality. 

##### ServiceAccount

```yaml
apiVersion: v1
automountServiceAccountToken: true
kind: ServiceAccount
metadata:
  annotations:
    meta.helm.sh/release-name: mxplatform-kube-agent
    meta.helm.sh/release-namespace: build
  creationTimestamp: "2025-06-12T02:18:33Z"
  labels:
    app.kubernetes.io/instance: mxplatform-kube-agent
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: mxplatform-kube-agent
    app.kubernetes.io/version: 1.16.0
    helm.sh/chart: mxplatform-kube-agent-0.1.0
  name: mxplatform-kube-agent
  namespace: build
  resourceVersion: "89036755"
  uid: 5a1d4e2d-5ac5-4e26-be59-8c95aabe62c9
```

#### Role

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  annotations:
    meta.helm.sh/release-name: mxplatform-kube-agent
    meta.helm.sh/release-namespace: build
  creationTimestamp: "2025-06-12T02:18:33Z"
  labels:
    app.kubernetes.io/managed-by: Helm
  name: pod-manager-role
  namespace: build
  resourceVersion: "89036756"
  uid: 1ce6a19d-639f-4a17-84a4-91b526970df1
rules:
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
  - list
  - watch
  - create
  - delete
```

#### RoleBinding

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  annotations:
    meta.helm.sh/release-name: mxplatform-kube-agent
    meta.helm.sh/release-namespace: build
  creationTimestamp: "2025-06-12T02:18:33Z"
  labels:
    app.kubernetes.io/managed-by: Helm
  name: pod-manager-role-binding
  namespace: build
  resourceVersion: "89036757"
  uid: e873f68e-691c-495a-84d7-b43fbcca9609
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: pod-manager-role
subjects:
- kind: ServiceAccount
  name: mxplatform-kube-agent
  namespace: build
```

### Customer Responsibility

#### Connected Mode Deployment

* Customers can use the installer to install components related to connected mode deployment.
* The customer organization must employ the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) which are necessary to accomplish connected mode namespace configuration.
* Customers can place one valid kubeconfig file which will grant `mxpc-cli` access to the destination cluster, and then execute the command line script shown in the **Installation** tab of the cluster namespace **Details** page in connected mode.

## Proof and Remarks

Private Mendix Platform provides a new **Build Utility** option to build customer Mendix applications.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-06-1.png" class="no-border" >}}

Kubernetes privilege credentials are removed from the build configuration.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-06-2.png" class="no-border" >}}

### Connected Mode Components Installation

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-06-3.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-06-4.png" class="no-border" >}}

### Private Mendix Plaform Roles

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-06-5.png" class="no-border" >}}
