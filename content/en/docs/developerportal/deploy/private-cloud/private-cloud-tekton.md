---
title: "CI/CD for Mendix for Private Cloud using Tekton"
linktitle: "CI/CD with Tekton"
url: /developerportal/deploy/private-cloud-tekton/
description: "Describes how to use Tekton to create a CI/CD solution for Mendix environments in the Private Cloud"
weight: 40
tags: ["CI/CD", "Tekton", "Private Cloud", "Environment"]
---

## 1 Introduction

Mendix recommends using [Tekton](https://tekton.dev/) to create a CI/CD (Continuous Integration and Delivery/Deployment) solution for your Mendix for Private Cloud apps. This document explains how to install:

* Tekton
* Pipelines containing the appropriate Tasks and Steps to manage apps and environments
* Triggers to run the Pipelines

After following the steps in this document you will be able to:

* Create a Mendix app environment with an HTTP request.
* Build and deploy a Mendix app from a Git repository with GitLab webhook or HTTP request.
* Configure a Mendix app environment with an HTTP request.
* Delete a Mendix app environment with an HTTP request.

{{% alert color="info" %}}
All commands should be executed in a Bash (or bash-compatible) terminal.
{{% /alert %}}

## 2 Prerequisites

To follow these instructions you will need:

* Administrator access to a Kubernetes/OpenShift cluster
* The [cluster registered in the Mendix Developer Portal](/developerportal/deploy/private-cloud-cluster/#create-cluster)
* A [namespace added](/developerportal/deploy/private-cloud-cluster/#add-namespace) to the cluster
* The [Mendix Operator installed](/developerportal/deploy/private-cloud-cluster/#install-operator) and configured in the cluster
* The [Helm](https://helm.sh) package manager
* Access to the internet to copy images to your air-gapped registry, or to install images directly

If you have any issues when following these instructions, see the [Troubleshooting](#troubleshooting) section to see if there is a solution.

## 3 Overview of Tekton and the Mendix for Private Cloud Pipelines

### 3.1 Tekton components

[Tekton](https://tekton.dev/) is an open-source cloud native CI/CD solution which consists of 4 components:

* Pipelines: Basic building blocks (tasks and pipelines) of a CI/CD workflow
* Triggers: Event triggers for a CI/CD workflow
* CLI: Command-line interface for CI/CD workflow management (not installed as part of these instructions)
* Dashboard: General-purpose, web-based UI for Pipelines
    
### 3.2 Tekton Pipelines

Each activity needed for management of the Mendix for Private Cloud environments and apps is mapped to a Tekton **pipeline**. These pipelines are run when a **trigger** condition is met. Each pipeline needs its own trigger and cannot automatically run subsequent pipelines.

A **pipeline** is a collection of **tasks** in order. Tekton creates a number of Kubernetes pods and ensures that each pod completes running successfully as desired. 

A **task** is a collection of **steps** in order. Tekton runs a task in the form of a Kubernetes pod, where each step becomes a running container in the pod. This design allows you to set up a shared environment for a number of related steps; for example, you may mount a Kubernetes volume in a task, which will be accessible inside each step of the task.
 
A **step** is an operation in a CI/CD workflow. Tekton performs each step as a running container in the task pod. 
    
Tasks and pipelines are specified as custom resources (CRs) in a Kubernetes cluster.

### 3.3 Tekton in Mendix for Private Cloud

Each Mendix pipeline can be run independently. However, the **create-app-pipeline** must be run first as the other pipelines have a dependency on the existence of an environment/app deployed in the namespace.

The Mendix pipelines work together as shown in the diagram below to create the app environment, build and push an app to the environment, and, finally, configure the app.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-tekton/build-pipeline.png" >}}

#### 3.3.1 Mendix Pipelines

Mendix has created the following Tekton pipelines:

* **build-pipeline** – Build and push a Mendix container image from a Mendix MPR file, hosted in a GIT repository — this can only be run after **create-app-pipeline**
* **configure-app-pipeline** – Update an existing Mendix App
* **create-app-pipeline** – Create a basic MendixApp CR — After running this pipeline, we are ready to run build-pipeline
* **delete-app-pipeline** – Delete the Mendix App CR, which triggers the deletion of the environment


#### 3.3.2 Mendix Triggers

Triggers are set up to trigger the Mendix pipelines in two ways 

* HTTP Trigger – triggers the build-pipeline pipeline 
* Tekton Dashboard Triggers – trigger the remaining pipelines

#### 3.3.3 Tekton Dashboard

These instructions install the Tekton Dashboard in the same namespace as the Tekton pipelines. It is run on port 9097.

Official installation procedure here: https://github.com/tektoncd/dashboard\

## 4 Preparation for Air-gapped Environments{#preparation}

{{% alert color="info" %}}
If your cluster is not air-gapped and has access to the internet, you can skip this section and go straight to [Tekton Installation](#tekton-installation).
{{% /alert %}}

To install Tekton and your CI/CD Pipeline in air-gapped environment you need to provision a list of images in your registry. Mendix has created a tool, **aip**, to perform this on different operating systems. You will need to download them using the following links:

* [Aip for Mac (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.2-macos-amd64.tar.gz)
* [Aip for Windows](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.2-windows-amd64.zip)
* [Aip for Linux (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.2-linux-amd64.tar.gz)

{{% alert color="info" %}}
The following steps in this section must be done in an environment which has internet access.
{{% /alert %}}

### 4.1 Tekton Images

If you have not installed Tekton from this registry before, you will need to put all the Tekton images into your registry.

Get the Tekton package:

```bash
mkdir tekton && cd tekton
aip init https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/packages/tekton-package-v1.0.0.json
aip pull
```

Get the yaml manifest for the Tekton installation:

```bash
curl https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.26.0/release.yaml -s > tekton.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.15.0/release.yaml -s > tekton-triggers.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.15.0/interceptors.yaml -s > interceptors.yaml
```

Then you need to transfer the `tekton` folder to the air-gapped environment with the aip tool:

```bash
# replace "myprivate.registry.com" with your registry
aip set-base-destination myprivate.registry.com

# use your credentials here
aip login -u user -p mypassword myprivate.registry.com
aip push
```

### 4.2 Mendix Pipelines and Triggers for Tekton

Get the pipeline package:

```bash
mkdir pipeline && cd pipeline
aip init https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/packages/pipeline-package-v1.0.0.json
aip pull
```

Add build and runtime images for a specific Mendix version, or for a range of versions:

```bash
# add one specific version (in this example 8.18.11.27969)
aip addimage mxbuild8.18.11 private-cloud.registry.mendix.com/mxbuild:8.18.11.27969
aip addimage runtime-base8.18.11 private-cloud.registry.mendix.com/runtime-base:8.18.11.27969-rhel

# add multiple versions (in this example all patch versions of 8.18)
aip addimagesquery private-cloud.registry.mendix.com/mxbuild '^8.18.*'
aip addimagesquery private-cloud.registry.mendix.com/runtime-base '^8.18.*-rhel$'
```

Then you need to transfer the `pipeline` folder to the air-gapped environment with the aip tool:

```bash
# replace "myprivate.registry.com" with your registry
aip set-base-destination myprivate.registry.com

# use your credentials here
aip login -u user -p mypassword myprivate.registry.com
aip push
```

## 5 Tekton Installation{#tekton-installation}

If Tekton is already installed in your namespace, you can skip to [Pipelines Installation](#pipelines-installation).

### 5.1 Installing on Kubernetes

#### 5.1.1 With Access to the Internet

To install Tekton with Tekton Triggers you need to apply 3 yaml manifests:

```bash
kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.26.0/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/previous/v0.15.0/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/previous/v0.15.0/interceptors.yaml
```

#### 5.1.2 Air-gapped

For air-gapped environment, assuming you have [performed the preparation steps](#preparation), use the following commands:

```bash
cat tekton.yaml | aip inject-manifest | kubectl apply -f -
cat tekton-triggers.yaml | aip inject-manifest | kubectl apply -f -
cat interceptors.yaml | aip inject-manifest | kubectl apply -f -
```

### 5.2 Installing on OpenShift

Follow the instructions for either clusters with access to the internet or for air-gapped clusters, and then follow the instructions for updating OpenShift security.

#### 5.1.1 With Access to the Internet

To install Tekton and Tekton Triggers on OpenShift when your environment has access to the internet, use the following commands:

```bash
# Tekton
oc new-project tekton-pipelines
oc adm policy add-scc-to-user anyuid -z tekton-pipelines-controller
oc adm policy add-scc-to-user anyuid -z tekton-pipelines-webhook

oc apply --filename https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.26.0/release.notags.yaml

# Tekton triggers
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.15.0/release.yaml -s > tekton-triggers.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.15.0/interceptors.yaml -s > interceptors.yaml
```

#### 5.1.2 Air-gapped

For air-gapped environment, assuming you have [performed the preparation steps](#preparation), use the following commands to install Tekton and Tekton triggers

```bash
# Tekton
oc new-project tekton-pipelines
oc adm policy add-scc-to-user anyuid -z tekton-pipelines-controller
oc adm policy add-scc-to-user anyuid -z tekton-pipelines-webhook
    
cat tekton.yaml | aip inject-manifest | kubectl apply -f -

# Tekton triggers 
cat tekton-triggers.yaml | aip inject-manifest | kubectl apply -f -
cat interceptors.yaml | aip inject-manifest | kubectl apply -f -
```

#### 5.1.3 Updating OpenShift Security

For Tekton Triggers on OpenShift you need to update the deployment objects to make them compatible with OpenShift security. Perform the following steps:

1. Edit the `tekton-triggers-controller` deployment.
2. Add the following line to the `args` section:
    ```bash{linenos=false}
    `- '--el-security-context=false'`
    ```
3. Change `runAsUser:` to a valid OpenShift user (like `1001000000`).
4. Edit the `tekton-triggers-core-interceptors` deployment.
5. Change `runAsUser:` to a valid OpenShift user (like `1001000000`).
6. Change `runAsGroup:` to a valid OpenShift group (like `1001000000`).
7. Edit the `tekton-triggers-webhook` deployment.
8. Change `runAsUser:` to a valid OpenShift user (like `1001000000`).

## 6 Pipeline and Trigger Installation{#pipelines-installation}

Before you install the Mendix pipelines you need to do the following:

1. Install [helm](https://helm.sh)
2. Create a folder containing helm charts for configuring the Mendix Tekton pipelines – you can download these from [Mendix for Private Cloud Standalone Tekton Pipelines](https://cdn.mendix.com/mendix-for-private-cloud/tekton-pipelines/standalone-cicd/standalone-cicd-v1.0.0.zip).

There are two components which need to be configured:

1. Pipelines – contains all Tekton related objects;
2. Triggers – provides HTTP services to trigger (run) pipelines.

### 6.1 Pipelines

To install a pipeline you need to provide the url to your private images repository without a tag. For example: `my.private.registry.com/mxapp`. The images that the pipeline builds will be stored in this repository.  
The namespace can be the same namespace where the  Mendix Operator runs, or you can create a new namespace.

#### 6.1.1 With Access to the Internet

The installation command for environments with access to the internet is:

```bash
cd $PATH_TO_DOWNLOADED_CHARTS
helm install -n $YOUR_NAMESPACE mx-tekton-pipeline ./pipeline/ \
  -f ./pipeline/values.yaml \
  --set images.imagePushURL=$URL_TO_YOUR_REPO_WITHOUT_TAG
```

#### 6.1.2 Air-gapped

For **air-gapped** environments, you need to specify the images individually, as well as the private registry you set up in [Preparation for Air-gapped Environments](#preparation):

```bash
cd $PATH_TO_DOWNLOADED_CHARTS
helm install -n $YOUR_NAMESPACE mx-tekton-pipeline ./pipeline/ \
  -f ./pipeline/values.yaml \
  --set images.imagePushURL=$URL_TO_YOUR_REPO_WITHOUT_TAG \
  --set images.fetch=$PRIVATE_REGISTRY/mxpc-pipeline-tools:git-init-0.0.1 \
  --set images.verExtraction=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 \
  --set images.build=$PRIVATE_REGISTRY/mxbuild \
  --set images.imageBuild=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 \
  --set images.constantsAndEventsResolver=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 \
  --set images.k8sPatch=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 \
  --set images.createAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 \
  --set images.deleteAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 \
  --set images.configureAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.4 
```

### 6.2 Installing Triggers{#installing-triggers}

Standard triggers are used to run pipelines like create-app-pipeline, configure-app-pipeline, and delete-app-pipeline to manage app environments.

There are also two options to build a Mendix app using either a generic or a GitLab webhook trigger.

After installing the generic trigger or the GitLab webhook trigger you will have service with the name like this - `el-mx-pipeline-listener-someUniqueName`. Make sure that you have access to that service (by creating an ingress or load balancer from a cloud provider, etc).

#### 6.2.1 Persistent Volume Claims (PVCs)

By default, pipelines comes with a *5GB PVC* with an **empty *storageClassName***. You can create your own PVC by following [these instructions](https://tekton.dev/docs/getting-started/#persistent-volumes) in the Tekton documentation.

To use your own PVC add `--set pvcName=$your-pvc-name` to each command during installation of the triggers.

#### 6.2.2 Generic Trigger{#generic-trigger}

A **Generic trigger** is a trigger that can be used as HTTP/curl request. All Mendix-related parameters will be specified in HTTP request body. 

To install a generic trigger you can use the following command:

```bash
cd $PATH_TO_DOWNLOADED_CHARTS
helm template mx-tekton-pipeline-trigger ./triggers -f triggers/values.yaml \
    --set name=someUniqueName \
    --set pipelineName=build-pipeline \
    --set triggerType=generic | kubectl apply -f - -n $YOUR_NAMESPACE
```

| Parameter | Explanation |
| --- | --- |
| `name` | All created Kubernetes objects will have this suffix |
| `pipelineName` | Name of the pipeline to trigger. `build-pipeline` is the default pipeline name from pipeline chart |
| `triggerType` | Supported types - `gitlabwebhook` and `generic` |

#### 6.2.3 GitLab Webhook Trigger

The **GitLab webhook trigger** triggers the build-pipeline pipeline in combination with GitLab. All Mendix environment related parameters are specified during trigger installation as you create one trigger per environment.

To install a GitLab webhook trigger use the following command:

```bash
cd $PATH_TO_DOWNLOADED_CHARTS
helm template mx-tekton-pipeline-trigger ./triggers -f triggers/values.yaml \
    --set name=someUniqueName \
    --set triggerType=gitlabwebhook \
    --set buildPipelineName=build-pipeline \
    --set gitlabwebhook.operatorNamespace=kubernetes \
    --set gitlabwebhook.mendixEnvironmentInernalName=app \
    --set gitlabwebhook.kubeConfigSecretName=none \
    --set gitlabwebhook.protocol=ssh \
    --set gitlabwebhook.scheduledEventsMode=auto \
    --set gitlabwebhook.constantsMode=auto | kubectl apply -f - -n $YOUR_NAMESPACE
```

| Parameter | Explanation |
| --- | --- |
| `name` | all created Kubernetes objects will have this suffix |
| `triggerType` | supported types - `gitlabwebhook` and `generic` |
| `buildPipelineName` | name of the pipeline to trigger. `build-pipeline` is the default pipeline name from pipeline chart |
| `gitlabwebhook.operatorNamespace` | name of Kubernetes namespace where Mendix Operator runs |
| `gitlabwebhook. mendixEnvironmentInernalName` | Mendix environment internal name. You can get the all internal environment names using the  command `kubectl get mendixapps -n $namespace_name` |
| `gitlabwebhook. kubeConfigSecretName` (*Optional*) | name of the secret with kube config. Used when Mendix Operator is in another cluster |
| `gitlabwebhook.protocol` | Git protocol. Available options: `http` or `ssh` |
| `gitlabwebhook. scheduledEventsMode` | `manual` – throws an error if scheduled events listed in `myScheduledEvents` do not exist<br/>`auto` – removes scheduled events listed in `myScheduledEvents` if they do not exist |
| `gitlabwebhook.constantsMode` | `manual` – throws an error if constants set by the operator side are different from those in the .mda file<br/>`auto` – adds or removes constants which are missing in the operator |

### 6.3 Triggering Pipelines

This section documents the HTTP requests which will trigger the various Mendix pipelines, using the triggers you have installed in the [Installing Triggers](#installing-triggers) section and describes the parameters.

#### 6.3.1 Create App Pipeline

The create-app-pipeline creates a basic MendixApp CR. After running this pipeline, we are ready to run the build-pipeline.

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: create-app' \
  -d '{
    "namespace":"your-kubernetes-namespace",
    "env-internal-name":"mx-environment-internal-name",
    "dtap-mode":"D",
    "storage-plan-name":"file-plan-name",
    "database-plan-name":"db-plan-name"
}'
```

| Parameter | Explanation |
| --- | --- |
| `namespace` | name of the Kubernetes namespace where Mendix Operator runs |
| `env-internal-name` | Mendix environment internal name. The MendixApp CR will be created with this name |
| `dtap-mode` | mode for running the Mendix application. Available options:<br/>`P` – Production (for all production environments)<br/>`D` – Development |
| `storage-plan-name` | name of an already-created storage plan |
| `database-plan-name` | name of an already-created database plan |

#### 6.3.2 Build Pipeline

The build-pipeline builds and pushes a Mendix container image from a Mendix MPR file, hosted in a GIT repository. The environment is then updated with the new image.

This can only be run after create-app-pipeline. The example here uses a [Generic Trigger](#generic-trigger).

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: build' \
  -d '{
   "repo": {
      "url":"https://yourgitdomain.com/user/repo.git",
      "revision":"main"
   },
   "namespace":"your-kubernetes-namespace",
   "env-internal-name":"mx-environment-internal-name",
   "kube-secret-name":"none",
   "constants-mode":"auto",
   "scheduled-events-mode":"auto"
}'
```

| Parameter | Explanation |
| --- | --- |
| `repo.url` | URL of git repository that will be fetched |
| `repo.revision` | a git revision (for example, branch, tag, or sha) that will be fetched |
| `namespace` | name of the Kubernetes namespace where Mendix Operator runs |
| `env-internal-name` | Mendix environment internal name. You can get all the internal environment names with the command `kubectl get mendixapps -n $namespace_name` |
| `kube-secret-name` | name of the secret with kube config. Used when Mendix Operator is in another cluster. If it is in the same cluster then use `none` as the value |
| `scheduledEventsMode` | `manual` – throws an error if scheduled events listed in `myScheduledEvents` do not exist<br/>`auto` – removes scheduled events listed in `myScheduledEvents` if they do not exist |
| `constantsMode` | `manual` – throws an error if constants set by the operator side are different from those in the .mda file<br/>`auto` – adds or removes constants which are missing in the operator |

#### 6.3.3 Configure App Pipeline

The configure-app-pipeline updates an existing Mendix App.

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: configure-app' \
  -d '{
    "namespace":"your-kubernetes-namespace",
    "env-internal-name":"mx-environment-internal-name",
    "source-url":"https://example.com/url-to-mda/or/oci-image",
    "replicas":5,
    "dtap-mode":"D",
    "set-constants":"{\"key\":\"value\"}",
    "add-constants":"{\"key\":\"value\"}",
    "remove-constants":"[\"key\"]",
    "set-env-vars":"{\"key\":\"value\"}",
    "add-env-vars":"{\"key\":\"value\"}",
    "remove-env-vars":"[\"key\"]"
}'
```

| Parameter | Explanation |
| --- | --- |
| `namespace` | name of the Kubernetes namespace where Mendix Operator runs |
| `env-internal-name` | Mendix environment internal name. You can get all the internal environment names with the command `kubectl get mendixapps -n $namespace_name` |
| `source-url` *(Optional)* | .mda file url or oci-image url. If empty, the url is not changed |
| `replicas` *(Optional)* | number of replicas. If empty, the number of replicas remains the same |
| `dtap-mode` | mode for running the Mendix application. Available options<br/>`P` – Production (for all production environments)<br/>`D` – Development |
| `set-constants` *(Optional)* | constants to set provided as a JSON map. Replaces the old list with the new one. Example: {"KEY":"VALUE"} |
| `add-constants` *(Optional)* | constants to add provided as a JSON map. Example: {"KEY":"VALUE"} |
| `remove-constants` *(Optional)* | constants to delete provided as a JSON array. Example: ["KEY1","KEY2"] |
| `set-env-vars` *(Optional)* | environment variables to set provided as a JSON map. Replaces the old list with the new one. Example: {"KEY":"VALUE"} |
| `add-env-vars` *(Optional)* | environment variables to add provided as a JSON map. Example: {"KEY":"VALUE"} |
| `remove-env-vars` *(Optional)* | environment variables to delete as JSON array. Example: ["KEY1","KEY2"] |

#### 6.3.4 Delete App Pipeline

The delete-app-pipeline deletes the Mendix App CR, which triggers the deletion of the environment.

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: delete-app' \
  -d '{
    "namespace":"your-kubernetes-namespace",
    "env-internal-name":"mx-environment-internal-name"
}'
```

| Parameter | Explanation |
| --- | --- |
| `namespace` | name of the Kubernetes namespace where the Mendix Operator runs |
| `env-internal-name` | Mendix environment internal name. You can get all the internal environment names  using the command `kubectl get mendixapps -n $namespace_name` |

## 7 Authentication

### 7.1 Git Access

Your Tekton pipeline needs to have access to the git repository. To provide access, you need to use a `basic-auth` type `Secret`. To do this, follow the [instruction in the tektoncd GitHub repo](https://github.com/tektoncd/pipeline/blob/main/docs/auth.md#configuring-basic-auth-authentication-for-git) and link that secret to the `tekton-triggers-mx-sa` service account.

### 7.2 Registry Push Access

The Tekton pipeline requires access to the registry to push built images.

#### 7.2.1 Private Registry

If you have a private registry with authentication, you need to follow [these instructions](https://github.com/tektoncd/pipeline/blob/main/docs/auth.md#configuring-authentication-for-docker) to create a secret, and link the secret to the `tekton-triggers-mx-sa` service account.

#### 7.2.2 OpenShift Registry

For OpenShift you need to provide an SSL cert file for the registry and give the `system:image-builders` role to the `tekton-triggers-mx-sa` service account. Use the following commands replacing `$YOUR_NAMESPACE_WITH_PIPELINES` with the correct namespace name:

```bash
oc patch rolebindings system:image-builders -p '{"subjects":[{"name":"tekton-triggers-mx-sa","kind":"ServiceAccount","namespace":"$YOUR_NAMESPACE_WITH_PIPELINES"}]}'
oc patch tasks build-push-image --type='json' --patch '[{"op": "add", "path": "/spec/steps/0/env/-", "value": {"name":"SSL_CERT_FILE","value":"/var/run/secrets/kubernetes.io/serviceaccount/service-ca.crt"}}]'
```

## 8 Troubleshooting{#troubleshooting}

### 8.1 `Context Deadline Exceeded` when Installing for Kubernetes

When installing Tekton and the Pipelines for Kubernetes, you can face with the issue such as:

`Error from server (InternalError): error when creating "STDIN": Internal error occurred: failed calling webhook "webhook.triggers.tekton.dev": Post "https://tekton-triggers-webhook.tekton-pipelines.svc:443/defaulting?timeout=10s": context deadline exceeded`

This is most probably caused by your firewall rules and you can fix this by following the instructions in [this issue on the tektoncd GitHub repo](https://github.com/tektoncd/pipeline/issues/3317#issuecomment-708066087).
