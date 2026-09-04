---
title: "Private Mendix Platform Events and the Help Me Function"
linktitle: "Events and the Help Me Function"
url: /private-mendix-platform/support-help-me/
description: "Documents the handling of app events and the Help Me functionality of Private Mendix Platform."
weight: 20
---

## Introduction

Private Mendix Platform handles app events and **Help Me** functionality slightly differently for Standalone and Connected modes. For more information about the differences, refer to the following sections.

## App Events

{{< figure src="/attachments/private-platform/pmp-events1.png" class="no-border" >}}

Event retrieval is always centralized for security reasons. In addition to that, depending on deployment mode, keep the following considerations in mind.

### Standalone Mode

In Standalone mode, Private Mendix Platform retrieves Kubernetes events directly using the Kubernetes API. Only real-time events are supported. Historical events (for example, older than one hour) cannot be retrieved in Standalone mode.

Customers must configure a Kubernetes token with the appropriate permissions to allow Private Mendix Platform to retrieve these events, as in the following example.

{{% alert color="info" %}}
The code sample is intended to show the range of available options. It is presented as example only, and may require significant adaptation to work in your own environment.
{{% /alert %}}

```text
# create ServiceAccount, ClusterRole, and ClusterRoleBinding
kubectl apply -f << EOF -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mxplatform-cicd
  namespace: kube-system
---
apiVersion: v1
kind: Secret
metadata:
  name: mxplatform-cicd
  namespace: kube-system
  annotations:
    kubernetes.io/service-account.name: mxplatform-cicd
type: kubernetes.io/service-account-token
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
    name: mxplatform-cicd
rules:
- apiGroups:
    - ""
    resources:
    - namespaces
    verbs:
    - list
- apiGroups:
    - ""
    resources:
    - deployments
    verbs:
    - get
    - list
    - watch
- apiGroups:
    - ""
    resources:
    - pods
    verbs:
    - get
    - list
- apiGroups:
    - ""
    resources:
    - pods/log
    verbs:
    - get
- apiGroups:
    - ""
    resources:
    - events
    verbs:
    - get
    - list
- apiGroups:
    - privatecloud.mendix.com
    resources:
    - storageplans
    verbs:
    - list
- apiGroups:
    - privatecloud.mendix.com
    resources:
    - mendixapps
    verbs:
    - '*'
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
    name: mxplatform-cicd
subjects:
- kind: ServiceAccount
    name: mxplatform-cicd
    namespace: kube-system
roleRef:
    kind: ClusterRole
    name: mxplatform-cicd
    apiGroup: rbac.authorization.k8s.io
EOF

# get service account token:
kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.data.token}'|base64 -d
# for openshift cluster
kubectl get secret mxplatform-cicd -nkube-system -o jsonpath='{.metadata.annotations.openshift\.io/token-secret\.value}'
```

### Connected Mode

In Connected mode, both container logs and events are retrieved from the Grafana API.

For event retrieval from Grafana, Private Mendix Platform uses the *Kubernetes Event Exporter for Grafana* method.

Customers must configure the Kubernetes Event Exporter within their environment to ensure events are visible in Grafana (typically through Loki), before Private Mendix Platform can access them. For more information, see [Grafana Integration for Private Mendix Platform](/private-mendix-platform/grafana/).

## Help Me Functionality

{{< figure src="/attachments/private-platform/pmp-events2.png" class="no-border" >}}

The **Help Me** button provides comprehensive debugging and analysis information, which you can share with support for efficient troubleshooting.

Clicking the **Help Me** button generates a debug file that includes the following:

* Basic application information (for example, the application name)
* Environment details
* Current pod and container logs (for example, Mendix and M2EE container logs)
* Current event information, sourced from the following:

    * In Standalone mode - Current Kubernetes events retrieved directly through the Kubernetes API
    * In Connected mode - Container logs and event information retrieved from the Grafana API, leveraging the same integration used for general event retrieval.