---
title: "Air-Gapped Installation of Tekton CI/CD for Mendix for Private Cloud"
linktitle: "Air-Gapped Tekton Installation"
url: /developerportal/deploy/private-cloud-tekton-airgapped/
description: "Describes how to use Tekton to create a CI/CD solution for Mendix environments in the Private Cloud"
weight: 10
---

## Introduction

The instructions for setting up Tekton CI/CD for Mendix for Private Cloud differ between environments which are connected to the internet and air-gapped environments. 

This document explains how to install the following on your **air-gapped** environment:

* Tekton
* Pipelines containing the appropriate tasks and steps to manage apps and environments

After following the steps in this document you con continue with the instructions in [Installing Triggers](/developerportal/deploy/private-cloud-tekton/#installing-triggers) in the *CI/CD for Mendix for Private Cloud using Tekton* document.

{{% alert color="info" %}}
Please read [CI/CD for Mendix for Private Cloud using Tekton](/developerportal/deploy/private-cloud-tekton/) first, using these instructions when asked to.

All commands used in this document should be executed in a Bash (or bash-compatible) terminal.
{{% /alert %}}

## Preparation for Air-Gapped Environments {#preparation}

To install Tekton and your CI/CD Pipeline in air-gapped environment you need to provision a list of images in your registry. Mendix has created a tool, **aip**, to perform this on different operating systems. You will need to download it using one of the following links:

* [Aip for Mac (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.2-macos-amd64.tar.gz)
* [Aip for Windows](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.2-windows-amd64.zip)
* [Aip for Linux (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.2-linux-amd64.tar.gz)

{{% alert color="info" %}}
The following steps in this section must be done in an environment which has internet access.
{{% /alert %}}

### Tekton Images

If you have not installed Tekton from this registry before, you will need to put all the Tekton images into your registry.

Get the Tekton package:

```bash
mkdir tekton && cd tekton
aip init https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/packages/tekton-package-v1.0.4.json
aip pull
```

Get the yaml manifest for the Tekton installation:

```bash
curl https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.41.1/release.yaml -s > tekton.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/release.yaml -s > tekton-triggers.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/interceptors.yaml -s > interceptors.yaml
```

Then you need to transfer the `tekton` folder to the air-gapped environment with the aip tool:

```bash
# replace "myprivate.registry.com" with your registry
aip set-base-destination myprivate.registry.com

# get list of required repositories - these will need to be created before you can push to them
cat state.json | jq '.images[].destination'
```

You will now need to create the repositories listed by the command above. The commands needed to do this depends on which registry you are using. Please see the documentation for your registry for information on how to create the repositories.

{{% alert color="info" %}}
Some registries cannot support complex repository addresses such as `my.registry.com/tekton-releases/github.com/tektoncd/pipeline/cmd/webhook:v0.26.0` and you may have to use a simpler format such as `my.registry.com/tekton/webhook:v0.26.0`. You will then need to update the `state.json` file (in your current directory) which is used by aip to push information to your repositories.

You will need to update the `destination:` value for each of the repositories as shown below:

```json {hl_lines=6}
…
{
	"name": "mxbuild8.18.11",
	"address": "private-cloud.registry.mendix.com/mxbuild:8.18.11.27969",
	"tarPath": "mxbuild8.18.11/mxbuild_8.18.11.27969.tar",
	"destination": "127.0.0.1:5000/pipeline/mxbuild:8.18.11.27969"
},
…
```

{{% /alert %}}

```bash
# use your credentials here
aip login -u user -p mypassword myprivate.registry.com
aip push

cd ..
```

### Mendix Pipelines and Triggers for Tekton

Get the pipeline package:

```bash
mkdir pipeline && cd pipeline
aip init https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/packages/pipeline-package-v1.0.4.json
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

aip pull
```

Then you need to transfer the `pipeline` folder to the air-gapped environment with the aip tool:

```bash
# replace "myprivate.registry.com" with your registry
aip set-base-destination myprivate.registry.com

# use your credentials here
aip login -u user -p mypassword myprivate.registry.com
aip push
```

## Tekton Installation{#tekton-installation}

If Tekton is already installed in your namespace, you can skip to [Pipelines Installation](#pipelines-installation).

### Installing on Air-Gapped Kubernetes

Assuming you have [performed the preparation steps](#preparation), use the following commands:

```bash
cd ../tekton
cat tekton.yaml | aip inject-manifest | kubectl apply -f -
cat tekton-triggers.yaml | aip inject-manifest | kubectl apply -f -
cat interceptors.yaml | aip inject-manifest | kubectl apply -f -
```

### Installing on Air-Gapped OpenShift

Assuming you have [performed the preparation steps](#preparation), use the following commands to install Tekton and Tekton triggers

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

For Tekton Triggers on OpenShift you need to update the deployment objects to make them compatible with OpenShift security. Perform the following steps:

1. Edit the `tekton-triggers-controller` deployment.
2. Add the following line to the `args` section:

    ```bash
    - '--el-security-context=false'
    ```

3. Change `runAsUser:` to a valid OpenShift user (like `1001000000`).
4. Edit the `tekton-triggers-core-interceptors` deployment.
5. Change `runAsUser:` to a valid OpenShift user (like `1001000000`).
6. Change `runAsGroup:` to a valid OpenShift group (like `1001000000`).
7. Edit the `tekton-triggers-webhook` deployment.
8. Change `runAsUser:` to a valid OpenShift user (like `1001000000`).

## Pipeline Installation{#pipelines-installation}

Before you install the Mendix pipelines, which contain all Tekton-related objects, you need to do the following:

1. Install [helm](https://helm.sh).
2. Create a folder containing helm charts for configuring the Mendix Tekton pipelines. To get access to the helm charts, contact your CSM.

To install a pipeline you need to provide the url to your private images repository without a tag. For example: `my.private.registry.com/mxapp`. The images that the pipeline builds will be stored in this repository.  
The namespace can be the same namespace where the Mendix Operator runs, or you can create a new namespace. The sections below use {$NAMESPACE_WITH_PIPELINES} to refer to that namespace.

For air-gapped environments, you need to specify the images individually, as well as the private registry you set up in [Preparation for Air-gapped Environments](#preparation):

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm install -n $NAMESPACE_WITH_PIPELINES mx-tekton-pipeline ./pipeline/ \
  -f ./pipeline/values.yaml \
  --set images.imagePushURL=$URL_TO_YOUR_REPO_WITHOUT_TAG \
  --set images.fetch=$PRIVATE_REGISTRY/mxpc-pipeline-tools:git-init-0.0.2 \
  --set images.verExtraction=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.8 \
  --set images.build=$PRIVATE_REGISTRY/mxbuild \
  --set images.imageBuild=$PRIVATE_REGISTRY/mxpc-pipeline-tools:imagebuild-0.0.2 \
  --set images.constantsAndEventsResolver=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.8 \
  --set images.k8sPatch=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.8 \
  --set images.createAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.8 \
  --set images.deleteAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.8 \
  --set images.configureAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.8 
```

## Installing Triggers{#installing-triggers}

After following the steps in this document you con continue with the instructions in [Installing Triggers](/developerportal/deploy/private-cloud-tekton/#installing-triggers) in the *CI/CD for Mendix for Private Cloud using Tekton* document. The remaining instructions are the same for both air-gapped and connected environments.

## Troubleshooting{#troubleshooting}

### `Context Deadline Exceeded` when Installing for Kubernetes

When installing Tekton and the Pipelines for Kubernetes, you can face an issue such as:

`Error from server (InternalError): error when creating "STDIN": Internal error occurred: failed calling webhook "webhook.triggers.tekton.dev": Post "https://tekton-triggers-webhook.tekton-pipelines.svc:443/defaulting?timeout=10s": context deadline exceeded`

This is most probably caused by your firewall rules and you can fix this by following the instructions in [this issue on the tektoncd GitHub repo](https://github.com/tektoncd/pipeline/issues/3317#issuecomment-708066087).
