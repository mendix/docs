---
title: "CI/CD for Mendix for Standalone Private Cloud Using Tekton"
linktitle: "CI/CD with Tekton"
url: /developerportal/deploy/private-cloud-tekton/
description: "Describes how to use Tekton to create a CI/CD solution for Mendix environments in the Private Cloud"
weight: 40
---
{{% alert color="info" %}}
The Tekton pipelines for Mendix are available to all customers using licensed Operators in Mendix for Private Cloud.

Please make a request to your Customer Success Manager (CSM) to arrange for access to these pipelines.
{{% /alert %}}

## Introduction

Mendix recommends using [Tekton](https://tekton.dev/) to create a CI/CD (Continuous Integration and Delivery/Deployment) solution for your Mendix for Standalone Private Cloud apps. This document explains how to install:

* Tekton
* Pipelines containing the appropriate tasks and steps to manage apps and environments
* Triggers to run the pipelines

After following the steps in this document you will be able to:

* Create a Mendix app environment with an HTTP request.
* Build and deploy a Mendix app from a Git repository using a GitLab webhook or HTTP request.
* Configure a Mendix app environment with an HTTP request.
* Delete a Mendix app environment with an HTTP request.

{{% alert color="info" %}}
All commands used in this document should be executed in a Bash (or bash-compatible) terminal.
{{% /alert %}}

## Prerequisites

To follow these instructions you will need:

* Administrator access to a Kubernetes/OpenShift cluster
* The standalone [cluster registered in the Mendix Portal](/developerportal/deploy/private-cloud-cluster/#create-cluster)
* A [namespace added](/developerportal/deploy/private-cloud-cluster/#add-namespace) to the cluster
* The [Mendix Operator v2.8.0+ installed](/developerportal/deploy/private-cloud-cluster/#install-operator) and configured in the cluster
* The [Helm](https://helm.sh) package manager
* The Mendix Tekton pipelines – these can be requested through your CSM
* Access to the internet to copy images to your air-gapped registry, or to install images directly onto your cluster

If you have any issues when following these instructions, see the [Troubleshooting](#troubleshooting) section to see if there is a solution.

## Overview of Tekton and the Mendix for Private Cloud Pipelines

### Tekton Components

[Tekton](https://tekton.dev/) is an open-source cloud native CI/CD solution which consists of the following components:

* Pipelines – basic building blocks (tasks and steps) of a CI/CD workflow
* Triggers – event triggers for a CI/CD workflow
* CLI – command-line interface for CI/CD workflow management (not installed as part of these instructions)
* Dashboard – general-purpose, web-based UI for Pipelines
    
### Tekton Pipelines

Each activity needed for management of Mendix for Private Cloud environments and apps is mapped to a Tekton pipeline. These pipelines are run when a trigger condition is met. Each pipeline needs its own trigger and cannot automatically run subsequent pipelines.

A *pipeline* is a collection of tasks in order. Tekton creates tasks in a number of Kubernetes pods and ensures that each pod successfully completes its task. 

A *task* is a collection of steps in order. Tekton runs a task in the form of a Kubernetes pod, where each step becomes a running container in the pod. This design allows you to set up a shared environment for a number of related steps. For example, you may mount a Kubernetes volume in a task; this will be accessible from each step of the task.
 
A *step* is an operation in a CI/CD workflow. Tekton performs each step as a running container in the task pod. 
    
Tasks and pipelines are specified as custom resources (CRs) in a Kubernetes cluster.

### Tekton in Mendix for Private Cloud

Each Mendix pipeline can be run independently. However, the **create-app-pipeline** must be run first as the other pipelines have a dependency on the existence of an environment/app deployed in the namespace.

The Mendix pipelines work together as shown in the diagram below to create the app environment, build and push an app to the environment, and, finally, configure the app.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/build-pipeline.png" class="no-border" >}}

#### Mendix Pipelines

Mendix has created the following Tekton pipelines:

* **build-pipeline** – build and push a Mendix container image from a Mendix MPR file, hosted in a GIT repository — this can only be run after **create-app-pipeline**
* **configure-app-pipeline** – update an existing Mendix App
* **create-app-pipeline** – create a basic MendixApp CR — After running this pipeline, we are ready to run build-pipeline
* **delete-app-pipeline** – delete a Mendix App CR, which triggers the deletion of the environment

#### Mendix Triggers

Triggers are set up to trigger the Mendix pipelines in two ways:

* HTTP Trigger – triggers the build-pipeline pipeline 
* Tekton Dashboard Triggers – trigger the remaining pipelines

#### Tekton Dashboard

These instructions install the Tekton Dashboard in the same namespace as the Tekton pipelines. It is run on port 9097.

You can read the official installation procedure on the [Tekton Dashboard](https://github.com/tektoncd/dashboard/#readme) GitHub repo.

#### Simplified architecture example {#architecture}

Below is and example of the recommended architecture setup.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/tekton-architecture-example.png" class="no-border" >}}

The example shows the following namespaces:

* Namespace with a Mendix operator
* Namespace with Mendix [Tekton pipelines](#pipelines-installation) and [triggers](#installing-triggers)
* Namespace with [Tekton and Tekton Triggers](#tekton-installation)

## Air-gapped Environments

{{% alert color="info" %}}
If your cluster is air-gapped and does not have access to the internet, you will need to follow a different set of installation instructions. These can be found in [Air-gapped Installation of Tekton CI/CD for Mendix for Private Cloud](/developerportal/deploy/private-cloud-tekton-airgapped/)
    
When you have followed those instructions, you can continue with [Installing Triggers](#installing-triggers), below.
{{% /alert %}}

## Tekton Installation for Non Air-Gapped (Regular) Environments {#tekton-installation}

If Tekton is already installed in your namespace, you can skip to [Pipeline Installation for non air-gapped Environments](#pipelines-installation).

### Installing on Non Air-Gapped Kubernetes

To install Tekton with Tekton Triggers, apply the following *yaml* manifests:

```bash
kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.41.1/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/interceptors.yaml
```

{{% alert color="info" %}}
The manifests target the `tekton-pipelines` namespace.
{{% /alert %}}

### Installing on Non Air-Gapped OpenShift

To install Tekton and Tekton Triggers on OpenShift you can use Red Hat OpenShift Pipelines, follow the instructions on the [Installing OpenShift Pipelines](https://docs.openshift.com/container-platform/4.7/cicd/pipelines/installing-pipelines.html) page of the OpenShift documentation. 

Main objects would be installed in `openshift-pipelines` namespace. 

At the moment we support Red Hat OpenShift Pipelines v1.9.2. 

## Pipeline Installation for Non Air-Gapped Environments {#pipelines-installation}

Before you install the Mendix pipelines, which contain all Tekton-related objects, you need to do the following:

1. Install [helm](https://helm.sh).
2. Create a folder containing helm charts for configuring the Mendix Tekton pipelines – you can get these by making a request to your CSM, who can arrange for access to them.

To install a pipeline you need to provide the url to your private images repository without a tag. For example: `my.private.registry.com/mxapp`. The images that the pipeline builds will be stored in this repository.  

Install the pipeline in a separate namespace, as shown in [Simplified architecture example](#architecture). The sections below use {$NAMESPACE_WITH_PIPELINES} to refer to that namespace.

The installation command is:

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm install -n $NAMESPACE_WITH_PIPELINES mx-tekton-pipeline ./pipeline/ \
  -f ./pipeline/values.yaml \
  --set images.imagePushURL=$URL_TO_YOUR_REPO_WITHOUT_TAG
```

## Installing Triggers {#installing-triggers}

{{% alert color="info" %}}
Installing triggers is the same for both non air-gapped and air-gapped environments.
{{% /alert %}}

Standard triggers provide HTTP services to trigger (run) pipelines like create-app-pipeline, configure-app-pipeline, and delete-app-pipeline to manage app environments.

There are also two options to build a Mendix app using either a generic or a GitLab webhook trigger.

### Persistent Volume Claims (PVCs)

By default, pipelines comes with a 5GB PVC with an **empty *storageClassName***. You can create your own PVC by following [these instructions](https://tekton.dev/docs/getting-started/#persistent-volumes) in the Tekton documentation.

To use your own PVC add `--set pvcName=$your-pvc-name` to each command during installation of the triggers.

### Authentication {#authentication}

You can specify a secret access token which the trigger will use to validate received payloads.

To enable validation you need to specify the *accessToken* parameter `--set accessToken=SomeLongSecureToken42` (replacing `SomeLongSecureToken42` with your secret) during installation of the triggers.
All your HTTP requests to Tekton triggers should then have a similar header `X-GitLab-Token: SomeLongSecureToken42`.

Despite the `X-GitLab-Token` header name, this authentication works outside of GitLab,
and all HTTP requests to the trigger will work with that header.
More details on how to activate a trigger using any HTTP client are [here](#auth-other-clients).   

#### GitLab Configuration

To set the GitLab Token in GitLab you specify it as the **Secret Token** when creating the webhook:
{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/gitlab-webhook.png" class="no-border" >}}

#### Other HTTP Clients {#auth-other-clients}

With HTTP clients you simply need to add `X-GitLab-Token` to your header.
For example, using the `curl` client:

```bash {hl_lines=3}
curl -X POST \\
  http://pipeline.trigger.yourdomain.com/ \\
  -H 'X-GitLab-Token: SomeLongSecureToken42' \\
  -H 'Content-Type: application/json' \\
  -H 'Event: create-app' \\
  -d '{
    "namespace":"namespace-with-operator",
    "env-internal-name":"mx-environment-internal-name",
    "dtap-mode":"D",
    "storage-plan-name":"file-plan-name",
    "database-plan-name":"db-plan-name"
}'
```

### Generic Trigger {#generic-trigger}

A Generic trigger is a trigger that can be used as HTTP/curl request. All Mendix-related parameters will be specified in HTTP request body. 

To install a generic trigger you can use the following command:

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm template mx-tekton-pipeline-trigger ./triggers -f triggers/values.yaml \
    --set name=$SOME_UNIQUE_NAME \
    --set pipelineName=build-pipeline \
    --set triggerType=generic | kubectl apply -f - -n $NAMESPACE_WITH_PIPELINES
```

| Parameter | Explanation                                                                                            |
| --- |--------------------------------------------------------------------------------------------------------|
| `name` | All created Kubernetes objects will have this suffix                                                   |
| `pipelineName` | Name of the pipeline to trigger. `build-pipeline` is the default pipeline name from the pipeline chart |
| `triggerType` | Supported types - `generic` (as used in this section) and `gitlabwebhook` (see next section)           |
| `$NAMESPACE_WITH_PIPELINES` | Namespace from section 6.                                                                              |

You can use one Generic trigger with several environments. To use it with several environments you just need to pass the correct parameters in the HTTP request body.

### GitLab Webhook Trigger{#gitlab-webhook}

The GitLab webhook trigger triggers the build-pipeline pipeline in combination with GitLab. All Mendix environment related parameters are specified during trigger installation as you create one trigger per environment.

To install a GitLab webhook trigger use the following command:

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm template mx-tekton-pipeline-trigger ./triggers -f triggers/values.yaml \
    --set name=$SOME_UNIQUE_NAME \
    --set triggerType=gitlabwebhook \
    --set buildPipelineName=build-pipeline \
    --set gitlabwebhook.operatorNamespace=namespace-with-operator \
    --set gitlabwebhook.mendixEnvironmentInternalName=mx-environment-internal-name \
    --set gitlabwebhook.protocol=ssh \
    --set gitlabwebhook.scheduledEventsMode=auto \
    --set gitlabwebhook.constantsMode=auto | kubectl apply -f - -n $NAMESPACE_WITH_PIPELINES
```

| Parameter | Explanation |
| --- | --- |
| `name` | all created Kubernetes objects will have this suffix |
| `triggerType` | supported types - `gitlabwebhook` (as used in this section) and `generic` (see previous section) |
| `buildPipelineName` | name of the pipeline to trigger. `build-pipeline` is the default pipeline name from the pipeline chart |
| `gitlabwebhook.operatorNamespace` | name of Kubernetes namespace where Mendix Operator runs |
| `gitlabwebhook. mendixEnvironmentInernalName` | Mendix environment internal name. You can get the all internal environment names using the command `kubectl get mendixapps -n $namespace_name` |
| `gitlabwebhook.protocol` | Git protocol. Available options: `http` or `ssh` |
| `gitlabwebhook. scheduledEventsMode` | `manual` – throws an error if scheduled events listed in `myScheduledEvents` do not exist<br/>`auto` – removes scheduled events listed in `myScheduledEvents` if they do not exist |
| `gitlabwebhook.constantsMode` | `manual` – throws an error if constants set by the operator side are different from those in the .mda file<br/>`auto` – adds or removes constants which are missing in the operator |
| `$NAMESPACE_WITH_PIPELINES` | Namespace from section 6.                                                                              |

To use GitLab triggers on several environments, you need to create a new trigger for every environment and provide the correct parameters during installation of the trigger.

### Exposing the Trigger

After installing the generic trigger or the GitLab webhook trigger, you will have a service with a name like `el-mx-pipeline-listener-someUniqueName`. 
Make sure that you have access to that service (by creating an ingress or load balancer from a cloud provider, etc).

Here is an example of ingress object:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: triggers-ingress
spec:
  rules:
    - host: pipeline.trigger.yourdomain.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: el-mx-pipeline-listener-someUniqueName
                port:
                  number: 8080
```

Make sure that an ingress controller already installed. You can use an [NGINX Controller](https://kubernetes.github.io/ingress-nginx/) for this purpose.

This service expects parameters in JSON/HTTP Header format. Examples of HTTP requests are provided in the [Triggering Pipelines](#triggering-pipelines) section.

By exposing the service with the HTTP protocol all traffic might go unencrypted over the public internet. Mendix recommends enabling HTTPS/TLS protocols.

In this example and in the rest of this document, Mendix uses `pipeline.trigger.yourdomain.com` to refer to this trigger.

## Authentication to External Services

This needs to be configured before you trigger any pipelines.

### Git Access

Your Tekton pipeline needs to have access to the Git repository. To provide access, you need to use a `basic-auth` type `Secret`. To do this, follow the [instruction in the tektoncd GitHub repo](https://github.com/tektoncd/pipeline/blob/main/docs/auth.md#configuring-basic-auth-authentication-for-git) and link that secret to the `tekton-triggers-mx-sa` service account.

### Registry Push Access

The Tekton pipeline requires access to the registry to push built images.

#### Private Registry

If you have a private registry with authentication, you need to follow [these instructions](https://github.com/tektoncd/pipeline/blob/main/docs/auth.md#configuring-authentication-for-docker) to create a secret, and link the secret to the `tekton-triggers-mx-sa` service account.

#### OpenShift Registry

For OpenShift you need to provide an SSL certificate file for the registry and give the `system:image-builders` role to the `tekton-triggers-mx-sa` service account. Use the following commands replacing `$YOUR_NAMESPACE_WITH_PIPELINES` with the correct namespace name:

```bash
oc patch rolebindings system:image-builders -p '{"subjects":[{"name":"tekton-triggers-mx-sa","kind":"ServiceAccount","namespace":"$YOUR_NAMESPACE_WITH_PIPELINES"}]}' -n $YOUR_NAMESPACE_WITH_PIPELINES
oc patch tasks build-push-image --type='json' --patch '[{"op": "add", "path": "/spec/steps/0/env/-", "value": {"name":"SSL_CERT_FILE","value":"/var/run/secrets/kubernetes.io/serviceaccount/service-ca.crt"}}]' -n $YOUR_NAMESPACE_WITH_PIPELINES
```

#### AWS ECR 

For ECR you need to create secret with [authorization token](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html#registry-auth-token) and refresh it every 12 hours.
To make it easier we build Kubernetes CronJob that you can reuse.

This CronJob requires IAM user with the next policy:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ManageRepositoryContents",
            "Effect": "Allow",
            "Action": [
                "ecr:GetAuthorizationToken",
                "ecr:BatchCheckLayerAvailability",
                "ecr:GetDownloadUrlForLayer",
                "ecr:GetRepositoryPolicy",
                "ecr:DescribeRepositories",
                "ecr:ListImages",
                "ecr:DescribeImages",
                "ecr:BatchGetImage",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:PutImage"
            ],
            "Resource": [
                "arn:aws:ecr:$YOUR_REGISTRY_REGION:$YOUR_ACCOUNT:repository/$YOUR_REPO"
            ]
        }
    ]
}
```

You need replace strings `$YOUR_REGISTRY_REGION`, `$YOUR_ACCOUNT` and `$YOUR_REPO` with your values (use the same repo from [this section](#pipelines-installation)).  

Manifest below contains CronJob that will refresh secret with ECR .dockerconfig every 4 hours.
Also, it contains Job that will create that secret for the first time.
Replace $BASE64_KEYID_HERE, $BASE64_ACCESSKEY_HERE, $BASE64_AWS_ACCOUNT_HERE and $BASE64_AWS_REGION_HERE strings with the correct one.</br>
$BASE64_KEYID_HERE and $BASE64_ACCESSKEY_HERE are the Access key ID and Secret access key of the created IAM user.

```
apiVersion: v1
kind: Secret
metadata:
  name: ecr-secret
type: Opaque
data:
  AWS_ACCESS_KEY_ID: $BASE64_KEYID_HERE
  AWS_SECRET_ACCESS_KEY: $BASE64_ACCESSKEY_HERE
  AWS_ACCOUNT: $BASE64_AWS_ACCOUNT_HERE
  AWS_REGION: $BASE64_AWS_REGION_HERE
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: ecr-token-update
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: ecr-token-update
rules:
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "create", "delete"]
  - apiGroups: [""]
    resources: ["serviceaccounts"]
    verbs: ["get", "patch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: ecr-token-update-binding
subjects:
  - kind: ServiceAccount
    name: ecr-token-update
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: ecr-token-update
---
apiVersion: batch/v1
kind: Job
metadata:
  name: create-ecr-secret
spec:
  template:
    spec:
      serviceAccountName: ecr-token-update
      containers:
        - name: kubectl
          imagePullPolicy: IfNotPresent
          envFrom:
            - secretRef:
                name: ecr-secret
          image: alpine/k8s:1.18.16
          command:
            - "/bin/sh"
            - "-c"
            - |
              DOCKER_REGISTRY_SERVER=https://${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com
              DOCKER_USER=AWS
              DOCKER_PASSWORD=`aws ecr get-login --region ${AWS_REGION} | cut -d' ' -f6`
              DOCKER_CONFIG_PASSWORD=`echo ${DOCKER_USER}:${DOCKER_PASSWORD} | base64 -w 0`
              CONFIG="
              {
                \"auths\": {
                  \"${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com\": {
                    \"auth\": \"${DOCKER_CONFIG_PASSWORD}\"
                  }
                }
              }"
              
              echo "Writing to config.json"
              printf "${CONFIG}" > config.json
              
              kubectl delete secret aws-registry || true
              kubectl create secret generic aws-registry \
              --from-file=.dockerconfigjson=config.json \
              --type=kubernetes.io/dockerconfigjson
              
              kubectl patch serviceaccount tekton-triggers-mx-sa -p '{"imagePullSecrets":[{"name":"aws-registry"}]}'
              kubectl patch serviceaccount tekton-triggers-mx-sa -p '{"secrets":[{"name":"aws-registry"}]}'
      restartPolicy: Never
  backoffLimit: 1
---
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: aws-registry-credential-cron
spec:
  schedule: "0 */4 * * *"
  successfulJobsHistoryLimit: 1
  failedJobsHistoryLimit: 1
  jobTemplate:
    spec:
      backoffLimit: 1
      template:
        spec:
          serviceAccountName: ecr-token-update
          terminationGracePeriodSeconds: 0
          restartPolicy: Never
          containers:
            - name: kubectl
              imagePullPolicy: IfNotPresent
              envFrom:
                - secretRef:
                    name: ecr-secret
              image: alpine/k8s:1.18.16
              command:
                - "/bin/sh"
                - "-c"
                - |
                  DOCKER_REGISTRY_SERVER=https://${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com
                  DOCKER_USER=AWS
                  DOCKER_PASSWORD=`aws ecr get-login --region ${AWS_REGION} | cut -d' ' -f6`
                  DOCKER_CONFIG_PASSWORD=`echo ${DOCKER_USER}:${DOCKER_PASSWORD} | base64 -w 0`
                  CONFIG="
                  {
                    \"auths\": {
                      \"${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com\": {
                        \"auth\": \"${DOCKER_CONFIG_PASSWORD}\"
                      }
                    }
                  }"
                  
                  echo "Writing to config.json"
                  printf "${CONFIG}" > config.json
                  
                  kubectl delete secret aws-registry || true
                  kubectl create secret generic aws-registry \
                  --from-file=.dockerconfigjson=config.json \
                  --type=kubernetes.io/dockerconfigjson
                  
                  kubectl patch serviceaccount tekton-triggers-mx-sa -p '{"imagePullSecrets":[{"name":"aws-registry"}]}'
                  kubectl patch serviceaccount tekton-triggers-mx-sa -p '{"secrets":[{"name":"aws-registry"}]}'
```

## Triggering Pipelines  {#triggering-pipelines}

This section documents the HTTP requests which will trigger the various Mendix pipelines, using the triggers you have installed in the [Installing Triggers](#installing-triggers) section, and describes their parameters. 

### Create App Pipeline

The create-app-pipeline creates a basic MendixApp CR. After running this pipeline, we are ready to run the build-pipeline.

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: create-app' \
  -H 'X-GitLab-Token: SomeLongSecureToken42' \
  -d '{
    "namespace":"namespace-with-operator",
    "env-internal-name":"mx-environment-internal-name",
    "dtap-mode":"D",
    "storage-plan-name":"file-plan-name",
    "mx-admin-password":"Welc0me!",
    "database-plan-name":"db-plan-name"
}'
```

| Parameter           | Explanation                                                                                                                                                                                                                                |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `namespace`         | name of the Kubernetes namespace where the Mendix Operator runs                                                                                                                                                                            |
| `env-internal-name` | Mendix environment internal name. The MendixApp CR will be created with this name                                                                                                                                                          |
| `dtap-mode`         | mode for running the Mendix application. Available options:<br/>`P` – Production (for all production environments)<br/>`D` – Development<br/> Your app can only be deployed to a production environment if [security in the app is set on](/refguide/app-security/).  |
| `storage-plan-name` | name of an existing storage plan                                                                                                                                                                                                    |
| `database-plan-name` | name of an existing database plan                                                                                                                                                                                                   |
| `mx-admin-password` | Mendix admin password                                                                                                                                                                                                |
| `X-GitLab-Token: SomeLongSecureToken42` | token from [7.2 section](#authentication). You can remove this field if authentication is disabled.                                                                                                                                        |

### Build Pipeline

The build-pipeline builds and pushes a Mendix container image from a Mendix MPR file, hosted in a GIT repository. The environment is then updated with the new image.

This can only be run after create-app-pipeline.

#### Build Pipeline Using a Generic Trigger

The example here uses a [Generic Trigger](#generic-trigger).

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'X-GitLab-Token: SomeLongSecureToken42' \
  -H 'Event: build' \
  -d '{
   "repo": {
      "url":"https://yourgitdomain.com/user/repo.git",
      "revision":"main"
   },
   "namespace":"namespace-with-operator",
   "env-internal-name":"mx-environment-internal-name",
   "constants-mode":"auto",
   "scheduled-events-mode":"auto"
}'
```

| Parameter | Explanation                                                                                                                                                                                                                                                         |
| --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `repo.url` | The URL of Git repository that will be fetched                                                                                                                                                                                                                          |
| `repo.revision` | A Git revision (for example, branch, tag, or SHA) that will be fetched                                                                                                                                                                                              |
| `namespace` | name of the Kubernetes namespace where Mendix Operator runs                                                                                                                                                                                                         |
| `env-internal-name` | Mendix environment internal name. You can get all the internal environment names with the command `kubectl get mendixapps -n $namespace_name`                                                                                                                       |
| `scheduledEventsMode` | `manual` – throws an error if scheduled events listed in `myScheduledEvents` in the MendixApp CR do not exist in the Mendix MPR<br/><br/>`auto` – removes scheduled events listed in `myScheduledEvents` in the MendixApp CR if they do not exist in the Mendix MPR |
| `constantsMode` | `manual` – throws an error if constants set by the operator side are different from those in the .mda file<br/>`auto` – adds or removes constants which are missing in the operator                                                                                 |
| `X-GitLab-Token: SomeLongSecureToken42` | token from [7.2 section](#authentication). You can remove this field if authentication is disabled.                                                                                                                                         |

#### Build Pipeline Using a GitLab Webhook Trigger

You can set up a [GitLab Webhook Trigger](#gitlab-webhook) to generate the build request automatically when you push a new MPR file to the GitLab repository.

Within GitLab, set up a webhook. Use the trigger URL of the trigger you installed in the [Installing Triggers](#installing-triggers) section, and choose which push events you want to trigger the build.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/gitlab-webhook.png" class="no-border" >}}

{{% alert color="info" %}}
To fill in the **Secret token** see the [Authentication](#authentication) section.
{{% /alert %}}

### Configure App Pipeline

The configure-app-pipeline updates an existing Mendix App.

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: configure-app' \
  -H 'X-GitLab-Token: SomeLongSecureToken42' \
  -d '{
    "namespace":"namespace-with-operator",
    "env-internal-name":"mx-environment-internal-name",
    "source-url":"https://example.com/url-to-mda/or/oci-image",
    "mx-admin-password":"Welc0me!",
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

| Parameter | Explanation                                                                                                                                   |
| --- |-----------------------------------------------------------------------------------------------------------------------------------------------|
| `namespace` | name of the Kubernetes namespace where Mendix Operator runs                                                                                   |
| `env-internal-name` | Mendix environment internal name. You can get all the internal environment names with the command `kubectl get mendixapps -n $namespace_name` |
| `source-url` *(Optional)* | .mda file url or oci-image (using `oci-image://` scheme) url. If empty, the url is not changed                                                |
| `mx-admin-password` | Mendix admin password     |
| `replicas` *(Optional)* | number of replicas. If empty, the number of replicas remains the same                                                                         |
| `dtap-mode` *(Optional)* | mode for running the Mendix application. Available options<br/>`P` – Production (for all production environments)<br/>`D` – Development       |
| `set-constants` *(Optional)* | constants to set provided as a JSON map. Replaces the old list with the new one. Example: {"KEY":"VALUE"}                                     |
| `add-constants` *(Optional)* | constants to add provided as a JSON map. Example: {"KEY":"VALUE"}                                                                             |
| `remove-constants` *(Optional)* | constants to delete provided as a JSON array. Example: ["KEY1","KEY2"]                                                                        |
| `set-env-vars` *(Optional)* | environment variables to set provided as a JSON map. Replaces the old list with the new one. Example: {"KEY":"VALUE"}                         |
| `add-env-vars` *(Optional)* | environment variables to add provided as a JSON map. Example: {"KEY":"VALUE"}                                                                 |
| `remove-env-vars` *(Optional)* | environment variables to delete as JSON array. Example: ["KEY1","KEY2"]                                                                       |
| `X-GitLab-Token: SomeLongSecureToken42` | token from [7.2 section](#authentication). You can remove this field if authentication is disabled.                               |

### Delete App Pipeline

The delete-app-pipeline deletes the Mendix App CR, which triggers the deletion of the environment.

```bash
curl -X POST \
  http://pipeline.trigger.yourdomain.com/ \
  -H 'Content-Type: application/json' \
  -H 'Event: delete-app' \
  -H 'X-GitLab-Token: SomeLongSecureToken42' \
  -d '{
    "namespace":"namespace-with-operator",
    "env-internal-name":"mx-environment-internal-name"
}'
```

| Parameter | Explanation                                                                                                                                     |
| --- |-------------------------------------------------------------------------------------------------------------------------------------------------|
| `namespace` | name of the Kubernetes namespace where the Mendix Operator runs                                                                                 |
| `env-internal-name` | Mendix environment internal name. You can get all the internal environment names using the command `kubectl get mendixapps -n $namespace_name` |
| `X-GitLab-Token: SomeLongSecureToken42` | token from [7.2 section](#authentication). You can remove this field if authentication is disabled.                         |

## Troubleshooting {#troubleshooting}

### Checking Tekton Components

To verify that all components are running correctly, use the following command:

```bash
kubectl get po -n tekton-pipelines
```

You should see a list of `Running` pods similar to that below:

```
NAME                                                 READY   STATUS    RESTARTS   AGE
tekton-pipelines-controller-78d8d6d4b-rbd6g          1/1     Running   0          20d
tekton-pipelines-webhook-64fd67d65-bhn55             1/1     Running   0          20d
tekton-triggers-controller-6c7c9cfd47-vw92r          1/1     Running   0          20d
tekton-triggers-core-interceptors-5b6f7b6c56-7m7fm   1/1     Running   0          20d
tekton-triggers-webhook-7f5c9477cc-fb624             1/1     Running   0          20d
```

Also, you need to check the listener of the Tekton Trigger (`$NAMESPACE_WITH_PIPELINES` is the namespace from the [Installing Triggers](#installing-triggers) step):

```bash
kubectl get po -n $NAMESPACE_WITH_PIPELINES
```

The output should include a `Running` pod similar to the one below:

```
NAME                                             READY   STATUS      RESTARTS   AGE
el-mx-pipeline-listener-gitlab-55f75fc997-nrl5b  1/1     Running     11         17d
```

### Debugging Triggering

In some cases, you can send an HTTP request to trigger a pipeline, but the pipeline isn't triggered.

To investigate this, the first place that you need to look is the logs of the listener.

To view the logs you need to identify the name of the listener pods. Use the command `kubectl get po -n $NAMESPACE_WITH_PIPELINES` to do this. The listener has a name similar to `el-mx-pipeline-listener-gitlab-55f75fc997-nrl5b`.

Then use the command: `kubectl logs $LISTENER_POD -n $NAMESPACE_WITH_PIPELINES`, using the pod name in place of $LISTENER_POD.

Information log messages like those shown below do not indicate an issue — they are caused by implementation details:

```
{"level":"info","ts":"2022-08-10T09:46:54.300Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'configure-app') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-configure-app-trigger-generic"}
{"level":"info","ts":"2022-08-10T09:46:54.300Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'build') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-build-trigger-generic"}
{"level":"info","ts":"2022-08-10T09:46:54.305Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'create-app') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-create-app-trigger-generic"}
{"level":"info","ts":"2022-08-10T09:46:54.305Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'delete-app') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-delete-app-trigger-generic"}
```

### Listing All Pipeline Runs

To view the list of pipeline runs use the command `kubectl get pipelineruns -n $NAMESPACE_WITH_PIPELINES` (`$NAMESPACE_WITH_PIPELINES` is the namespace from the [Installing Triggers](#installing-triggers) step).

The output of this command looks like this:

```
NAME                                       SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME
mx-pipeline-app-create-run-generic-zzt8h   False       Failed      8d          8d
mx-pipeline-build-run-gitlab-2bjc7         True        Succeeded   22d         22d
```

### Viewing Pipeline Logs

Logs regarding pipeline execution can be found in the pods.

Example of finding logs of the failed pipeline (`$NAMESPACE_WITH_PIPELINES` is the namespace from the [Installing Triggers](#installing-triggers) step):

1. Get a list of pipelines:

    ```bash
    kubectl get pipelineruns -n $NAMESPACE_WITH_PIPELINES
    ```

    In the output, there is one failed pipelinerun with the name `mx-pipeline-app-create-run-generic-zzt8h`:

    ```
    NAME                                       SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME
    mx-pipeline-app-create-run-generic-zzt8h   False       Failed      8d          8d
    mx-pipeline-build-run-gitlab-2bjc7         True        Succeeded   22d         22d
    ```

2. Get the pods for the failed pipeline runs:

    ```bash
    kubectl get po -n $NAMESPACE_WITH_PIPELINES | grep mx-pipeline-app-create-run-generic-zzt8h
    ```

    In the output there is a `Failed` pod:

    ```
    mx-pipeline-app-create-run-generic-zzt8h-create-app-cr-2g-hjkx2   0/1     Error       0          8d
    ```

3. Get the logs for the failed pod:

    ```bash
    kubectl logs mx-pipeline-app-create-run-generic-zzt8h-create-app-cr-2g-hjkx2 -n $NAMESPACE_WITH_PIPELINES
    ```

    In the output there are logs which indicate the error:

    ```
    Error: mendixapps.privatecloud.mendix.com "mxapp" already exists
    Usage:
      mxpc-pipeline-tools-cli app-cr-create [-n namespace] [--dry-run] -d database-name -s storage-name -m dtap-mode env-internal-name [flags]

    Flags:
      -d, --database-name string        Database plan name
          --dry-run                     Prints manifest to stdout
      -m, --dtap-mode string            Mode for running the Mendix application.
                                        Available options:
                                          P - production
                                          D - Development
                                        Always set this to P in production environments. (default "D")
      -h, --help                        help for app-cr-create
          --mx-runtime-version string   Version of mendix runtime, which will be used during the building of oci-image based on .mda file (default "9.6.6.34474")
      -n, --namespace string            Cluster namespace
      -u, --source-url string           Source URL. .mda file url or oci-image url
      -s, --storage-name string         Storage plan name

    2022/08/01 16:28:35 err: mendixapps.privatecloud.mendix.com "mxapp" already exists
    ```

    This means that pipeline couldn't create environment with the name "mxapp" because it already exists.

As alternative, it's possible to use [Tekton Dashboard](https://github.com/tektoncd/dashboard) or [Tekton CLI](https://tekton.dev/docs/cli/) to view the logs.  

### Cleaning Up Pods

Pipeline runs can produce a lot of pods. To clean up the pods you can delete `pipelineruns` Custom Resource objects.

For example, to delete all pipeline runs except latest 5 use the following commands:

```bash
NUM_TO_KEEP=5
TO_DELETE="$(kubectl get pipelinerun -o jsonpath='{range .items[?(@.status.completionTime)]}{.status.completionTime}{" "}{.metadata.name}{"\n"}{end}' | sort | head -n -${NUM_TO_KEEP} | awk '{ print $2}')"
kubectl delete pipelinerun ${TO_DELETE}
```

### `Context Deadline Exceeded` when Installing for Kubernetes

When installing Tekton and the Pipelines for Kubernetes, you can face an issue such as:

`Error from server (InternalError): error when creating "STDIN": Internal error occurred: failed calling webhook "webhook.triggers.tekton.dev": Post "https://tekton-triggers-webhook.tekton-pipelines.svc:443/defaulting?timeout=10s": context deadline exceeded`

This is most probably caused by your firewall rules and you can fix this by following the instructions in [this issue on the tektoncd GitHub repo](https://github.com/tektoncd/pipeline/issues/3317#issuecomment-708066087).
