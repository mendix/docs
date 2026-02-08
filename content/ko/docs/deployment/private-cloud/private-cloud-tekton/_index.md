---
title: "Tekton을 사용한 Standalone Mendix on Kubernetes CI/CD"
linktitle: "Tekton을 사용한 CI/CD"
url: /developerportal/deploy/private-cloud-tekton/
description: "Mendix on Kubernetes에서 Mendix 환경을 위한 CI/CD 솔루션을 Tekton을 사용하여 생성하는 방법을 설명합니다."
weight: 40
---
{{% alert color="warning" %}}
Mendix on Kubernetes Standalone용 Tekton 파이프라인은 더 이상 신규 고객에게 제공되지 않습니다. Tekton 파이프라인 지원을 원하는 고객은 Tekton 파이프라인 지원이 포함된 Private Mendix Platform을 고려하시기 바랍니다.
{{% /alert %}}

## 소개

이 문서에서는 다음을 설치하는 방법을 설명합니다:

* Tekton
* 앱 및 환경을 관리하기 위한 적절한 작업과 단계를 포함하는 파이프라인
* 파이프라인을 실행하는 트리거

이 문서의 단계를 따르면 다음을 수행할 수 있습니다:

* HTTP 요청으로 Mendix 앱 환경을 생성합니다.
* GitLab 웹훅 또는 HTTP 요청을 사용하여 Git 저장소에서 Mendix 앱을 빌드하고 배포합니다.
* HTTP 요청으로 Mendix 앱 환경을 구성합니다.
* HTTP 요청으로 Mendix 앱 환경을 삭제합니다.

{{% alert color="info" %}}
이 문서에서 사용되는 모든 명령은 Bash(또는 bash 호환) 터미널에서 실행해야 합니다.
{{% /alert %}}

## 사전 요구 사항

이 지침을 따르려면 다음이 필요합니다:

* Kubernetes/OpenShift 클러스터에 대한 관리자 접근 권한
* Mendix Portal에 [등록된 Standalone 클러스터](/developerportal/deploy/private-cloud-cluster/#create-cluster)
* 클러스터에 [추가된 네임스페이스](/developerportal/deploy/private-cloud-cluster/#add-namespace)
* 클러스터에 [설치](/developerportal/deploy/private-cloud-cluster/#install-operator)되고 구성된 [Mendix Operator v2.8.0+]
* [Helm](https://helm.sh) 패키지 관리자
* 에어갭 레지스트리에 이미지를 복사하거나 클러스터에 이미지를 직접 설치하기 위한 인터넷 접근

이 지침을 따르는 중 문제가 발생하면 [문제 해결](#troubleshooting) 섹션에서 해결책이 있는지 확인하십시오.

{{% alert color="info" %}}
Tekton 파이프라인은 Mendix Operator 버전 v2.20.0 이하와 호환됩니다. 향후 Mendix Operator 버전에는 업데이트된 버전의 파이프라인이 필요할 수 있습니다.
{{% /alert %}}

## Tekton 및 Mendix on Kubernetes 파이프라인 개요

### Tekton 구성 요소

[Tekton](https://tekton.dev/)은 다음 구성 요소로 이루어진 오픈소스 클라우드 네이티브 CI/CD 솔루션입니다:

* Pipelines - CI/CD 워크플로우의 기본 빌딩 블록(작업 및 단계)
* Triggers - CI/CD 워크플로우의 이벤트 트리거
* CLI - CI/CD 워크플로우 관리를 위한 명령줄 인터페이스(이 지침의 일부로 설치되지 않음)
* Dashboard - Pipeline을 위한 범용 웹 기반 UI

### Tekton Pipeline

Mendix on Kubernetes 환경 및 앱 관리에 필요한 각 활동은 Tekton 파이프라인에 매핑됩니다. 이러한 파이프라인은 트리거 조건이 충족되면 실행됩니다. 각 파이프라인에는 자체 트리거가 필요하며 후속 파이프라인을 자동으로 실행할 수 없습니다.

*파이프라인*은 순서대로 수행되는 작업의 모음입니다. Tekton은 여러 Kubernetes Pod에 작업을 생성하고 각 Pod가 작업을 성공적으로 완료하도록 합니다.

*작업*은 순서대로 수행되는 단계의 모음입니다. Tekton은 Kubernetes Pod 형태로 작업을 실행하며 각 단계는 Pod에서 실행되는 컨테이너가 됩니다. 이 설계를 통해 관련된 여러 단계에 대한 공유 환경을 설정할 수 있습니다. 예를 들어 작업에 Kubernetes 볼륨을 마운트하면 작업의 각 단계에서 접근할 수 있습니다.

*단계*는 CI/CD 워크플로우의 작업입니다. Tekton은 작업 Pod에서 실행되는 컨테이너로 각 단계를 수행합니다.

작업과 파이프라인은 Kubernetes 클러스터의 Custom Resource(CR)로 지정됩니다.

### Mendix on Kubernetes의 Tekton

각 Mendix 파이프라인은 독립적으로 실행할 수 있습니다. 그러나 다른 파이프라인은 네임스페이스에 배포된 환경/앱의 존재에 의존하므로 **create-app-pipeline**을 먼저 실행해야 합니다.

Mendix 파이프라인은 아래 다이어그램에 표시된 대로 함께 작동하여 앱 환경을 생성하고, 앱을 빌드하여 환경에 푸시하고, 마지막으로 앱을 구성합니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/build-pipeline.png" class="no-border" >}}

#### Mendix 파이프라인

Mendix는 다음 Tekton 파이프라인을 생성했습니다:

* **build-pipeline** - GIT 저장소에 호스팅된 Mendix MPR 파일에서 Mendix 컨테이너 이미지를 빌드하고 푸시합니다. **create-app-pipeline** 이후에만 실행할 수 있습니다.
* **configure-app-pipeline** - 기존 Mendix 앱을 업데이트합니다.
* **create-app-pipeline** - 기본 MendixApp CR을 생성합니다. 이 파이프라인을 실행한 후 build-pipeline을 실행할 준비가 됩니다.
* **delete-app-pipeline** - Mendix App CR을 삭제하여 환경 삭제를 트리거합니다.

#### Mendix 트리거

트리거는 두 가지 방법으로 Mendix 파이프라인을 트리거하도록 설정됩니다:

* HTTP 트리거 - build-pipeline 파이프라인을 트리거합니다.
* Tekton Dashboard 트리거 - 나머지 파이프라인을 트리거합니다.

#### Tekton Dashboard

이 지침에서는 Tekton Dashboard를 Tekton 파이프라인과 동일한 네임스페이스에 설치합니다. 포트 9097에서 실행됩니다.

공식 설치 절차는 [Tekton Dashboard](https://github.com/tektoncd/dashboard/#readme) GitHub 저장소에서 확인할 수 있습니다.

#### 간소화된 아키텍처 예시 {#architecture}

아래는 권장 아키텍처 설정의 예시입니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/tekton-architecture-example.png" class="no-border" >}}

예시에서는 다음 네임스페이스를 보여줍니다:

* Mendix Operator가 있는 네임스페이스
* Mendix [Tekton 파이프라인](#pipelines-installation) 및 [트리거](#installing-triggers)가 있는 네임스페이스
* [Tekton 및 Tekton Triggers](#tekton-installation)가 있는 네임스페이스

## 에어갭 환경

{{% alert color="info" %}}
클러스터가 에어갭 상태이고 인터넷에 접근할 수 없는 경우 다른 설치 지침을 따라야 합니다. 해당 지침은 [Mendix on Kubernetes용 Tekton CI/CD 에어갭 설치](/developerportal/deploy/private-cloud-tekton-airgapped/)에서 찾을 수 있습니다.

해당 지침을 따른 후 아래의 [트리거 설치](#installing-triggers)를 계속할 수 있습니다.
{{% /alert %}}

## 에어갭이 아닌(일반) 환경용 Tekton 설치 {#tekton-installation}

네임스페이스에 Tekton이 이미 설치되어 있는 경우 [에어갭이 아닌 환경용 파이프라인 설치](#pipelines-installation)로 건너뛸 수 있습니다.

### 에어갭이 아닌 Kubernetes에 설치

Tekton과 Tekton Triggers를 설치하려면 다음 *yaml* 매니페스트를 적용하십시오:

```bash
kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.41.1/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/interceptors.yaml
```

{{% alert color="info" %}}
매니페스트는 `tekton-pipelines` 네임스페이스를 대상으로 합니다.
{{% /alert %}}

### 에어갭이 아닌 OpenShift에 설치

OpenShift에서 Tekton 및 Tekton Triggers를 설치하려면 Red Hat OpenShift Pipelines를 사용할 수 있습니다. OpenShift 문서의 [Installing OpenShift Pipelines](https://docs.openshift.com/container-platform/4.7/cicd/pipelines/installing-pipelines.html) 페이지의 지침을 따르십시오.

주요 객체는 `openshift-pipelines` 네임스페이스에 설치됩니다.

현재 Red Hat OpenShift Pipelines v1.9.2를 지원합니다.

## 에어갭이 아닌 환경용 파이프라인 설치 {#pipelines-installation}

모든 Tekton 관련 객체를 포함하는 Mendix 파이프라인을 설치하기 전에 다음을 수행해야 합니다:

1. [helm](https://helm.sh)을 설치합니다.
2. Mendix Tekton 파이프라인 구성을 위한 helm 차트가 포함된 폴더를 생성합니다.

파이프라인을 설치하려면 태그 없이 프라이빗 이미지 저장소의 URL을 제공해야 합니다. 예: `my.private.registry.com/mxapp`. 파이프라인이 빌드하는 이미지는 이 저장소에 저장됩니다.

[간소화된 아키텍처 예시](#architecture)에 표시된 대로 별도의 네임스페이스에 파이프라인을 설치하십시오. 아래 섹션에서는 {$NAMESPACE_WITH_PIPELINES}를 사용하여 해당 네임스페이스를 참조합니다.

설치 명령은 다음과 같습니다:

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm install -n $NAMESPACE_WITH_PIPELINES mx-tekton-pipeline ./pipeline/ \
  -f ./pipeline/values.yaml \
  --set images.imagePushURL=$URL_TO_YOUR_REPO_WITHOUT_TAG
```

## 트리거 설치 {#installing-triggers}

{{% alert color="info" %}}
트리거 설치는 에어갭이 아닌 환경과 에어갭 환경 모두 동일합니다.
{{% /alert %}}

표준 트리거는 create-app-pipeline, configure-app-pipeline, delete-app-pipeline과 같은 파이프라인을 트리거(실행)하기 위한 HTTP 서비스를 제공하여 앱 환경을 관리합니다.

제네릭 또는 GitLab 웹훅 트리거를 사용하여 Mendix 앱을 빌드하는 두 가지 옵션도 있습니다.

### Persistent Volume Claim (PVC)

기본적으로 파이프라인에는 **빈 *storageClassName***이 있는 5GB PVC가 함께 제공됩니다. Tekton 문서의 [이 지침](https://tekton.dev/docs/getting-started/#persistent-volumes)을 따라 자체 PVC를 생성할 수 있습니다.

자체 PVC를 사용하려면 트리거 설치 중 각 명령에 `--set pvcName=$your-pvc-name`을 추가하십시오.

### 인증 {#authentication}

트리거가 수신된 페이로드를 검증하는 데 사용할 시크릿 접근 토큰을 지정할 수 있습니다.

검증을 활성화하려면 트리거 설치 중 *accessToken* 매개변수 `--set accessToken=SomeLongSecureToken42`(`SomeLongSecureToken42`를 실제 시크릿으로 교체)를 지정해야 합니다.
그러면 Tekton 트리거에 대한 모든 HTTP 요청에 `X-GitLab-Token: SomeLongSecureToken42`와 유사한 헤더가 있어야 합니다.

`X-GitLab-Token` 헤더 이름에도 불구하고 이 인증은 GitLab 외부에서도 작동하며,
트리거에 대한 모든 HTTP 요청은 해당 헤더로 작동합니다.
다른 HTTP 클라이언트를 사용하여 트리거를 활성화하는 방법에 대한 자세한 내용은 [여기](#auth-other-clients)에 있습니다.

#### GitLab 구성

GitLab에서 GitLab 토큰을 설정하려면 웹훅을 생성할 때 **Secret Token**으로 지정하십시오:
{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/gitlab-webhook.png" class="no-border" >}}

#### 기타 HTTP 클라이언트 {#auth-other-clients}

HTTP 클라이언트에서는 헤더에 `X-GitLab-Token`을 추가하기만 하면 됩니다.
예를 들어 `curl` 클라이언트를 사용하는 경우:

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

### 제네릭 트리거 {#generic-trigger}

제네릭 트리거는 HTTP/curl 요청으로 사용할 수 있는 트리거입니다. 모든 Mendix 관련 매개변수는 HTTP 요청 본문에 지정됩니다.

제네릭 트리거를 설치하려면 다음 명령을 사용할 수 있습니다:

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm template mx-tekton-pipeline-trigger ./triggers -f triggers/values.yaml \
    --set name=$SOME_UNIQUE_NAME \
    --set pipelineName=build-pipeline \
    --set triggerType=generic | kubectl apply -f - -n $NAMESPACE_WITH_PIPELINES
```

| 매개변수 | 설명 |
| --- | --- |
| `name` | 생성된 모든 Kubernetes 객체에 이 접미사가 붙습니다 |
| `pipelineName` | 트리거할 파이프라인 이름. `build-pipeline`은 파이프라인 차트의 기본 파이프라인 이름입니다 |
| `triggerType` | 지원되는 유형 - `generic`(이 섹션에서 사용) 및 `gitlabwebhook`(다음 섹션 참조) |
| `$NAMESPACE_WITH_PIPELINES` | 섹션 6의 네임스페이스. |

하나의 제네릭 트리거를 여러 환경에서 사용할 수 있습니다. 여러 환경에서 사용하려면 HTTP 요청 본문에 올바른 매개변수를 전달하기만 하면 됩니다.

### GitLab 웹훅 트리거{#gitlab-webhook}

GitLab 웹훅 트리거는 GitLab과 결합하여 build-pipeline 파이프라인을 트리거합니다. 환경당 하나의 트리거를 생성하므로 모든 Mendix 환경 관련 매개변수는 트리거 설치 중에 지정됩니다.

GitLab 웹훅 트리거를 설치하려면 다음 명령을 사용하십시오:

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

| 매개변수 | 설명 |
| --- | --- |
| `name` | 생성된 모든 Kubernetes 객체에 이 접미사가 붙습니다 |
| `triggerType` | 지원되는 유형 - `gitlabwebhook`(이 섹션에서 사용) 및 `generic`(이전 섹션 참조) |
| `buildPipelineName` | 트리거할 파이프라인 이름. `build-pipeline`은 파이프라인 차트의 기본 파이프라인 이름입니다 |
| `gitlabwebhook.operatorNamespace` | Mendix Operator가 실행되는 Kubernetes 네임스페이스 이름 |
| `gitlabwebhook. mendixEnvironmentInernalName` | Mendix 환경 내부 이름. `kubectl get mendixapps -n $namespace_name` 명령으로 모든 내부 환경 이름을 가져올 수 있습니다 |
| `gitlabwebhook.protocol` | Git 프로토콜. 사용 가능한 옵션: `http` 또는 `ssh` |
| `gitlabwebhook. scheduledEventsMode` | `manual` - `myScheduledEvents`에 나열된 예약된 이벤트가 존재하지 않으면 오류를 발생시킵니다<br/>`auto` - `myScheduledEvents`에 나열된 예약된 이벤트가 존재하지 않으면 제거합니다 |
| `gitlabwebhook.constantsMode` | `manual` - Operator 측에서 설정한 상수가 .mda 파일의 상수와 다르면 오류를 발생시킵니다<br/>`auto` - Operator에 누락된 상수를 추가하거나 제거합니다 |
| `$NAMESPACE_WITH_PIPELINES` | 섹션 6의 네임스페이스. |

여러 환경에서 GitLab 트리거를 사용하려면 모든 환경에 대해 새 트리거를 생성하고 트리거 설치 중에 올바른 매개변수를 제공해야 합니다.

### 트리거 노출

제네릭 트리거 또는 GitLab 웹훅 트리거를 설치한 후 `el-mx-pipeline-listener-someUniqueName`과 같은 이름의 서비스를 갖게 됩니다.
해당 서비스에 대한 접근을 확보하십시오(클라우드 공급자의 Ingress 또는 로드 밸런서를 생성하는 등).

다음은 Ingress 객체의 예시입니다:

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

Ingress Controller가 이미 설치되어 있는지 확인하십시오. 이 목적으로 [NGINX Controller](https://kubernetes.github.io/ingress-nginx/)를 사용할 수 있습니다.

이 서비스는 JSON/HTTP Header 형식의 매개변수를 예상합니다. HTTP 요청의 예시는 [파이프라인 트리거](#triggering-pipelines) 섹션에 제공됩니다.

HTTP 프로토콜로 서비스를 노출하면 모든 트래픽이 공용 인터넷을 통해 암호화되지 않을 수 있습니다. Mendix는 HTTPS/TLS 프로토콜을 활성화할 것을 권장합니다.

이 예시와 이 문서의 나머지 부분에서 Mendix는 `pipeline.trigger.yourdomain.com`을 사용하여 이 트리거를 참조합니다.

## 외부 서비스 인증

파이프라인을 트리거하기 전에 이 구성을 완료해야 합니다.

### Git 접근

Tekton 파이프라인은 Git 저장소에 대한 접근 권한이 필요합니다. 접근을 제공하려면 `basic-auth` 유형의 `Secret`을 사용해야 합니다. 이를 위해 [tektoncd GitHub 저장소의 지침](https://github.com/tektoncd/pipeline/blob/main/docs/auth.md#configuring-basic-auth-authentication-for-git)을 따르고 해당 Secret을 `tekton-triggers-mx-sa` 서비스 계정에 연결하십시오.

### 레지스트리 푸시 접근

Tekton 파이프라인은 빌드된 이미지를 푸시하기 위해 레지스트리에 대한 접근 권한이 필요합니다.

#### 프라이빗 레지스트리

인증이 있는 프라이빗 레지스트리가 있는 경우 [이 지침](https://github.com/tektoncd/pipeline/blob/main/docs/auth.md#configuring-authentication-for-docker)을 따라 Secret을 생성하고 해당 Secret을 `tekton-triggers-mx-sa` 서비스 계정에 연결하십시오.

#### OpenShift 레지스트리

OpenShift의 경우 레지스트리에 대한 SSL 인증서 파일을 제공하고 `tekton-triggers-mx-sa` 서비스 계정에 `system:image-builders` 역할을 부여해야 합니다. `$YOUR_NAMESPACE_WITH_PIPELINES`를 올바른 네임스페이스 이름으로 교체하여 다음 명령을 사용하십시오:

```bash
oc patch rolebindings system:image-builders -p '{"subjects":[{"name":"tekton-triggers-mx-sa","kind":"ServiceAccount","namespace":"$YOUR_NAMESPACE_WITH_PIPELINES"}]}' -n $YOUR_NAMESPACE_WITH_PIPELINES
oc patch tasks build-push-image --type='json' --patch '[{"op": "add", "path": "/spec/steps/0/env/-", "value": {"name":"SSL_CERT_FILE","value":"/var/run/secrets/kubernetes.io/serviceaccount/service-ca.crt"}}]' -n $YOUR_NAMESPACE_WITH_PIPELINES
```

#### AWS ECR

ECR의 경우 [인증 토큰](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html#registry-auth-token)으로 Secret을 생성하고 12시간마다 갱신해야 합니다.
이를 쉽게 하기 위해 재사용할 수 있는 Kubernetes CronJob을 만들었습니다.

이 CronJob에는 다음 정책이 있는 IAM 사용자가 필요합니다:

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

`$YOUR_REGISTRY_REGION`, `$YOUR_ACCOUNT` 및 `$YOUR_REPO` 문자열을 실제 값으로 교체해야 합니다([이 섹션](#pipelines-installation)의 동일한 저장소를 사용하십시오).

아래 매니페스트에는 4시간마다 ECR .dockerconfig이 포함된 Secret을 갱신하는 CronJob이 포함되어 있습니다.
또한 해당 Secret을 처음 생성하는 Job도 포함되어 있습니다.
$BASE64_KEYID_HERE, $BASE64_ACCESSKEY_HERE, $BASE64_AWS_ACCOUNT_HERE 및 $BASE64_AWS_REGION_HERE 문자열을 올바른 값으로 교체하십시오.</br>
$BASE64_KEYID_HERE 및 $BASE64_ACCESSKEY_HERE는 생성된 IAM 사용자의 Access key ID 및 Secret access key입니다.

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

## 파이프라인 트리거  {#triggering-pipelines}

이 섹션에서는 [트리거 설치](#installing-triggers) 섹션에서 설치한 트리거를 사용하여 다양한 Mendix 파이프라인을 트리거하는 HTTP 요청과 해당 매개변수를 설명합니다.

### 앱 생성 파이프라인

create-app-pipeline은 기본 MendixApp CR을 생성합니다. 이 파이프라인을 실행한 후 build-pipeline을 실행할 준비가 됩니다.

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

| 매개변수 | 설명 |
| --- | --- |
| `namespace` | Mendix Operator가 실행되는 Kubernetes 네임스페이스 이름 |
| `env-internal-name` | Mendix 환경 내부 이름. 이 이름으로 MendixApp CR이 생성됩니다 |
| `dtap-mode` | Mendix 애플리케이션 실행 모드. 사용 가능한 옵션:<br/>`P` - Production(모든 프로덕션 환경용)<br/>`D` - Development<br/> [앱의 보안이 설정](/refguide/app-security/)되어 있어야만 프로덕션 환경에 앱을 배포할 수 있습니다. |
| `storage-plan-name` | 기존 스토리지 플랜 이름 |
| `database-plan-name` | 기존 데이터베이스 플랜 이름 |
| `mx-admin-password` | Mendix 관리자 비밀번호 |
| `X-GitLab-Token: SomeLongSecureToken42` | [7.2 섹션](#authentication)의 토큰. 인증이 비활성화된 경우 이 필드를 제거할 수 있습니다. |

### 빌드 파이프라인

build-pipeline은 GIT 저장소에 호스팅된 Mendix MPR 파일에서 Mendix 컨테이너 이미지를 빌드하고 푸시합니다. 그런 다음 새 이미지로 환경이 업데이트됩니다.

create-app-pipeline 이후에만 실행할 수 있습니다.

#### 제네릭 트리거를 사용한 빌드 파이프라인

이 예시에서는 [제네릭 트리거](#generic-trigger)를 사용합니다.

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

| 매개변수 | 설명 |
| --- | --- |
| `repo.url` | 가져올 Git 저장소의 URL |
| `repo.revision` | 가져올 Git 리비전(예: 브랜치, 태그 또는 SHA) |
| `namespace` | Mendix Operator가 실행되는 Kubernetes 네임스페이스 이름 |
| `env-internal-name` | Mendix 환경 내부 이름. `kubectl get mendixapps -n $namespace_name` 명령으로 모든 내부 환경 이름을 가져올 수 있습니다 |
| `scheduledEventsMode` | `manual` - MendixApp CR의 `myScheduledEvents`에 나열된 예약된 이벤트가 Mendix MPR에 존재하지 않으면 오류를 발생시킵니다<br/><br/>`auto` - MendixApp CR의 `myScheduledEvents`에 나열된 예약된 이벤트가 Mendix MPR에 존재하지 않으면 제거합니다 |
| `constantsMode` | `manual` - Operator 측에서 설정한 상수가 .mda 파일의 상수와 다르면 오류를 발생시킵니다<br/>`auto` - Operator에 누락된 상수를 추가하거나 제거합니다 |
| `X-GitLab-Token: SomeLongSecureToken42` | [7.2 섹션](#authentication)의 토큰. 인증이 비활성화된 경우 이 필드를 제거할 수 있습니다. |

#### GitLab 웹훅 트리거를 사용한 빌드 파이프라인

[GitLab 웹훅 트리거](#gitlab-webhook)를 설정하여 새 MPR 파일을 GitLab 저장소에 푸시할 때 자동으로 빌드 요청을 생성할 수 있습니다.

GitLab 내에서 웹훅을 설정하십시오. [트리거 설치](#installing-triggers) 섹션에서 설치한 트리거의 트리거 URL을 사용하고 빌드를 트리거할 푸시 이벤트를 선택하십시오.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-tekton/gitlab-webhook.png" class="no-border" >}}

{{% alert color="info" %}}
**Secret token**을 채우려면 [인증](#authentication) 섹션을 참조하십시오.
{{% /alert %}}

### 앱 구성 파이프라인

configure-app-pipeline은 기존 Mendix 앱을 업데이트합니다.

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

| 매개변수 | 설명 |
| --- | --- |
| `namespace` | Mendix Operator가 실행되는 Kubernetes 네임스페이스 이름 |
| `env-internal-name` | Mendix 환경 내부 이름. `kubectl get mendixapps -n $namespace_name` 명령으로 모든 내부 환경 이름을 가져올 수 있습니다 |
| `source-url` *(선택 사항)* | .mda 파일 URL 또는 oci-image(`oci-image://` 스킴 사용) URL. 비어 있으면 URL이 변경되지 않습니다 |
| `mx-admin-password` | Mendix 관리자 비밀번호 |
| `replicas` *(선택 사항)* | 레플리카 수. 비어 있으면 레플리카 수가 동일하게 유지됩니다 |
| `dtap-mode` *(선택 사항)* | Mendix 애플리케이션 실행 모드. 사용 가능한 옵션<br/>`P` - Production(모든 프로덕션 환경용)<br/>`D` - Development |
| `set-constants` *(선택 사항)* | JSON 맵으로 제공되는 설정할 상수. 기존 목록을 새 목록으로 대체합니다. 예: {"KEY":"VALUE"} |
| `add-constants` *(선택 사항)* | JSON 맵으로 제공되는 추가할 상수. 예: {"KEY":"VALUE"} |
| `remove-constants` *(선택 사항)* | JSON 배열로 제공되는 삭제할 상수. 예: ["KEY1","KEY2"] |
| `set-env-vars` *(선택 사항)* | JSON 맵으로 제공되는 설정할 환경 변수. 기존 목록을 새 목록으로 대체합니다. 예: {"KEY":"VALUE"} |
| `add-env-vars` *(선택 사항)* | JSON 맵으로 제공되는 추가할 환경 변수. 예: {"KEY":"VALUE"} |
| `remove-env-vars` *(선택 사항)* | JSON 배열로 삭제할 환경 변수. 예: ["KEY1","KEY2"] |
| `X-GitLab-Token: SomeLongSecureToken42` | [7.2 섹션](#authentication)의 토큰. 인증이 비활성화된 경우 이 필드를 제거할 수 있습니다. |

### 앱 삭제 파이프라인

delete-app-pipeline은 Mendix App CR을 삭제하여 환경 삭제를 트리거합니다.

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

| 매개변수 | 설명 |
| --- | --- |
| `namespace` | Mendix Operator가 실행되는 Kubernetes 네임스페이스 이름 |
| `env-internal-name` | Mendix 환경 내부 이름. `kubectl get mendixapps -n $namespace_name` 명령으로 모든 내부 환경 이름을 가져올 수 있습니다 |
| `X-GitLab-Token: SomeLongSecureToken42` | [7.2 섹션](#authentication)의 토큰. 인증이 비활성화된 경우 이 필드를 제거할 수 있습니다. |

## 문제 해결 {#troubleshooting}

### Tekton 구성 요소 확인

모든 구성 요소가 올바르게 실행되고 있는지 확인하려면 다음 명령을 사용하십시오:

```bash
kubectl get po -n tekton-pipelines
```

아래와 유사한 `Running` Pod 목록이 표시되어야 합니다:

```
NAME                                                 READY   STATUS    RESTARTS   AGE
tekton-pipelines-controller-78d8d6d4b-rbd6g          1/1     Running   0          20d
tekton-pipelines-webhook-64fd67d65-bhn55             1/1     Running   0          20d
tekton-triggers-controller-6c7c9cfd47-vw92r          1/1     Running   0          20d
tekton-triggers-core-interceptors-5b6f7b6c56-7m7fm   1/1     Running   0          20d
tekton-triggers-webhook-7f5c9477cc-fb624             1/1     Running   0          20d
```

또한 Tekton Trigger의 리스너를 확인해야 합니다(`$NAMESPACE_WITH_PIPELINES`는 [트리거 설치](#installing-triggers) 단계의 네임스페이스입니다):

```bash
kubectl get po -n $NAMESPACE_WITH_PIPELINES
```

출력에는 아래와 유사한 `Running` Pod가 포함되어야 합니다:

```
NAME                                             READY   STATUS      RESTARTS   AGE
el-mx-pipeline-listener-gitlab-55f75fc997-nrl5b  1/1     Running     11         17d
```

### 트리거 디버깅

경우에 따라 파이프라인을 트리거하기 위해 HTTP 요청을 보낼 수 있지만 파이프라인이 트리거되지 않습니다.

이를 조사하기 위해 먼저 확인해야 할 곳은 리스너의 로그입니다.

로그를 보려면 리스너 Pod의 이름을 식별해야 합니다. `kubectl get po -n $NAMESPACE_WITH_PIPELINES` 명령을 사용하여 이를 수행하십시오. 리스너는 `el-mx-pipeline-listener-gitlab-55f75fc997-nrl5b`와 유사한 이름을 가집니다.

그런 다음 `kubectl logs $LISTENER_POD -n $NAMESPACE_WITH_PIPELINES` 명령을 사용하여 $LISTENER_POD 대신 Pod 이름을 사용하십시오.

아래와 같은 정보 로그 메시지는 문제를 나타내지 않습니다. 구현 세부 사항에 의해 발생합니다:

```
{"level":"info","ts":"2022-08-10T09:46:54.300Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'configure-app') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-configure-app-trigger-generic"}
{"level":"info","ts":"2022-08-10T09:46:54.300Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'build') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-build-trigger-generic"}
{"level":"info","ts":"2022-08-10T09:46:54.305Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'create-app') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-create-app-trigger-generic"}
{"level":"info","ts":"2022-08-10T09:46:54.305Z","logger":"eventlistener","caller":"sink/sink.go:229","msg":"interceptor stopped trigger processing: rpc error: code = FailedPrecondition desc = expression header.match('Event', 'delete-app') did not return true","knative.dev/controller":"eventlistener","eventlistener":"mx-pipeline-listener-generic","namespace":"mxpipeline","eventlistenerUID":"fcf84b8f-bcb1-46f1-bcd0-ae4b21d85f06","/triggers-eventid":"627c82d7-1d9e-4dda-99c7-14166c86b385","/trigger":"mx-pipline-delete-app-trigger-generic"}
```

### 모든 파이프라인 실행 목록

파이프라인 실행 목록을 보려면 `kubectl get pipelineruns -n $NAMESPACE_WITH_PIPELINES` 명령을 사용하십시오(`$NAMESPACE_WITH_PIPELINES`는 [트리거 설치](#installing-triggers) 단계의 네임스페이스입니다).

이 명령의 출력은 다음과 같습니다:

```
NAME                                       SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME
mx-pipeline-app-create-run-generic-zzt8h   False       Failed      8d          8d
mx-pipeline-build-run-gitlab-2bjc7         True        Succeeded   22d         22d
```

### 파이프라인 로그 보기

파이프라인 실행에 관한 로그는 Pod에서 찾을 수 있습니다.

실패한 파이프라인의 로그를 찾는 예시(`$NAMESPACE_WITH_PIPELINES`는 [트리거 설치](#installing-triggers) 단계의 네임스페이스입니다):

1. 파이프라인 목록을 가져옵니다:

    ```bash
    kubectl get pipelineruns -n $NAMESPACE_WITH_PIPELINES
    ```

    출력에는 `mx-pipeline-app-create-run-generic-zzt8h`라는 이름의 실패한 pipelinerun이 하나 있습니다:

    ```
    NAME                                       SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME
    mx-pipeline-app-create-run-generic-zzt8h   False       Failed      8d          8d
    mx-pipeline-build-run-gitlab-2bjc7         True        Succeeded   22d         22d
    ```

2. 실패한 파이프라인 실행의 Pod를 가져옵니다:

    ```bash
    kubectl get po -n $NAMESPACE_WITH_PIPELINES | grep mx-pipeline-app-create-run-generic-zzt8h
    ```

    출력에는 `Failed` Pod가 있습니다:

    ```
    mx-pipeline-app-create-run-generic-zzt8h-create-app-cr-2g-hjkx2   0/1     Error       0          8d
    ```

3. 실패한 Pod의 로그를 가져옵니다:

    ```bash
    kubectl logs mx-pipeline-app-create-run-generic-zzt8h-create-app-cr-2g-hjkx2 -n $NAMESPACE_WITH_PIPELINES
    ```

    출력에는 오류를 나타내는 로그가 있습니다:

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

    이는 파이프라인이 "mxapp"이라는 이름의 환경을 생성할 수 없었음을 의미합니다. 이미 존재하기 때문입니다.

대안으로 [Tekton Dashboard](https://github.com/tektoncd/dashboard) 또는 [Tekton CLI](https://tekton.dev/docs/cli/)를 사용하여 로그를 볼 수 있습니다.

### Pod 정리

파이프라인 실행은 많은 Pod를 생성할 수 있습니다. Pod를 정리하려면 `pipelineruns` Custom Resource 객체를 삭제할 수 있습니다.

예를 들어 최근 5개를 제외한 모든 파이프라인 실행을 삭제하려면 다음 명령을 사용하십시오:

```bash
NUM_TO_KEEP=5
TO_DELETE="$(kubectl get pipelinerun -o jsonpath='{range .items[?(@.status.completionTime)]}{.status.completionTime}{" "}{.metadata.name}{"\n"}{end}' | sort | head -n -${NUM_TO_KEEP} | awk '{ print $2}')"
kubectl delete pipelinerun ${TO_DELETE}
```

### Kubernetes 설치 시 `Context Deadline Exceeded`

Kubernetes용 Tekton 및 파이프라인을 설치할 때 다음과 같은 문제가 발생할 수 있습니다:

`Error from server (InternalError): error when creating "STDIN": Internal error occurred: failed calling webhook "webhook.triggers.tekton.dev": Post "https://tekton-triggers-webhook.tekton-pipelines.svc:443/defaulting?timeout=10s": context deadline exceeded`

이는 방화벽 규칙에 의해 발생했을 가능성이 높으며 [tektoncd GitHub 저장소의 이 이슈](https://github.com/tektoncd/pipeline/issues/3317#issuecomment-708066087)의 지침을 따라 수정할 수 있습니다.
