---
title: "Mendix on Kubernetes용 Tekton CI/CD 에어갭 설치"
linktitle: "에어갭 Tekton 설치"
url: /developerportal/deploy/private-cloud-tekton-airgapped/
description: "Mendix on Kubernetes에서 Mendix 환경을 위한 CI/CD 솔루션을 Tekton을 사용하여 생성하는 방법을 설명합니다."
weight: 10
---

{{% alert color="info" %}}
Mendix on Kubernetes Standalone용 Tekton 파이프라인은 더 이상 신규 고객에게 제공되지 않습니다. Tekton 파이프라인 지원을 원하는 고객은 Tekton 파이프라인 지원이 포함된 Private Mendix Platform을 고려하시기 바랍니다.
{{% /alert %}}

## 소개

Mendix on Kubernetes용 Tekton CI/CD를 설정하는 지침은 인터넷에 연결된 환경과 에어갭 환경 간에 다릅니다.

이 문서에서는 **에어갭** 환경에 다음을 설치하는 방법을 설명합니다:

* Tekton
* 앱 및 환경을 관리하기 위한 적절한 작업과 단계를 포함하는 파이프라인

이 문서의 단계를 따른 후 *Tekton을 사용한 Mendix on Kubernetes CI/CD* 문서의 [트리거 설치](/developerportal/deploy/private-cloud-tekton/#installing-triggers) 지침을 계속할 수 있습니다.

{{% alert color="info" %}}
먼저 [Tekton을 사용한 Mendix on Kubernetes CI/CD](/developerportal/deploy/private-cloud-tekton/)를 읽고 요청될 때 이 지침을 사용하십시오.

이 문서에서 사용되는 모든 명령은 Bash(또는 bash 호환) 터미널에서 실행해야 합니다.
{{% /alert %}}

## 에어갭 환경 준비 {#preparation}

에어갭 환경에 Tekton 및 CI/CD 파이프라인을 설치하려면 레지스트리에 이미지 목록을 프로비저닝해야 합니다. Mendix는 다양한 운영 체제에서 이를 수행하기 위한 도구인 **aip**를 만들었습니다. 다음 링크 중 하나를 사용하여 다운로드해야 합니다:

* [Mac용 Aip (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.5-macos-amd64.tar.gz)
* [[Mac용 Aip (arm64)]](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.5-macos-arm64.tar.gz)
* [Windows용 Aip (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.5-windows-amd64.zip)
* [Windows용 Aip (arm64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.5-windows-arm64.zip)
* [Linux용 Aip (amd64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.5-linux-amd64.tar.gz)
* [Linux용 Aip (arm64)](https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/airgapped-image-package-0.0.5-linux-arm64.tar.gz)

{{% alert color="info" %}}
이 섹션의 다음 단계는 인터넷에 접근할 수 있는 환경에서 수행해야 합니다.
{{% /alert %}}

### Tekton 이미지

이 레지스트리에서 Tekton을 설치한 적이 없는 경우 모든 Tekton 이미지를 레지스트리에 넣어야 합니다.

Tekton 패키지를 가져오십시오:

```bash
mkdir tekton && cd tekton
aip init https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/packages/tekton-package-v1.0.5.json
aip pull
```

Tekton 설치를 위한 yaml 매니페스트를 가져오십시오:

```bash
curl https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.41.1/release.yaml -s > tekton.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/release.yaml -s > tekton-triggers.yaml
curl https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.1/interceptors.yaml -s > interceptors.yaml
```

그런 다음 aip 도구와 함께 `tekton` 폴더를 에어갭 환경으로 전송해야 합니다:

```bash
# replace "myprivate.registry.com" with your registry
aip set-base-destination myprivate.registry.com

# get list of required repositories - these will need to be created before you can push to them
cat state.json | jq '.images[].destination'
```

이제 위 명령에 의해 나열된 저장소를 생성해야 합니다. 이를 수행하는 데 필요한 명령은 사용 중인 레지스트리에 따라 다릅니다. 저장소를 생성하는 방법에 대한 자세한 내용은 레지스트리 문서를 참조하십시오.

{{% alert color="info" %}}
일부 레지스트리는 `my.registry.com/tekton-releases/github.com/tektoncd/pipeline/cmd/webhook:v0.26.0`과 같은 복잡한 저장소 주소를 지원할 수 없으며 `my.registry.com/tekton/webhook:v0.26.0`과 같은 더 간단한 형식을 사용해야 할 수 있습니다. 그런 다음 aip가 저장소에 정보를 푸시하는 데 사용하는 `state.json` 파일(현재 디렉토리에 있음)을 업데이트해야 합니다.

아래에 표시된 대로 각 저장소의 `destination:` 값을 업데이트해야 합니다:

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

### Tekton용 Mendix 파이프라인 및 트리거

파이프라인 패키지를 가져오십시오:

```bash
mkdir pipeline && cd pipeline
aip init https://cdn.mendix.com/mendix-for-private-cloud/airgapped-image-package/packages/pipeline-package-v1.0.5.json
aip pull
```

특정 Mendix 버전에 대한 빌드 및 런타임 이미지와 특정 Java 버전의 기본 OS 또는 버전 범위를 추가하십시오:

```bash
# add one specific version (in this example 8.18.11.27969)
aip addimage mxbuild8.18.11 private-cloud.registry.mendix.com/mxbuild:8.18.11.27969
aip addimage runtime8.18.11 private-cloud.registry.mendix.com/app-building-blocks:runtime-8.18.11.27969
aip addimage ubi8-1-java11 private-cloud.registry.mendix.com/app-building-blocks:ubi8-1-jre11-entrypoint

# add multiple versions (in this example all patch versions of 8.18)
aip addimagesquery private-cloud.registry.mendix.com/mxbuild '^8.18.*'
aip addimagesquery private-cloud.registry.mendix.com/app-building-blocks '^runtime-8.18.*$'

# add all base OS images
aip addimagesquery private-cloud.registry.mendix.com/app-building-blocks '^ubi\d+-\d-jre\d+-entrypoint$'

aip pull
```

그런 다음 aip 도구와 함께 `pipeline` 폴더를 에어갭 환경으로 전송해야 합니다:

```bash
# replace "myprivate.registry.com" with your registry
aip set-base-destination myprivate.registry.com

# use your credentials here
aip login -u user -p mypassword myprivate.registry.com
aip push
```

## Tekton 설치{#tekton-installation}

네임스페이스에 Tekton이 이미 설치되어 있는 경우 [파이프라인 설치](#pipelines-installation)로 건너뛸 수 있습니다.

### 에어갭 Kubernetes에 설치

[준비 단계를 수행](#preparation)했다고 가정하고 다음 명령을 사용하십시오:

```bash
cd ../tekton
cat tekton.yaml | aip inject-manifest | kubectl apply -f -
cat tekton-triggers.yaml | aip inject-manifest | kubectl apply -f -
cat interceptors.yaml | aip inject-manifest | kubectl apply -f -
```

### 에어갭 OpenShift에 설치

[준비 단계를 수행](#preparation)했다고 가정하고 다음 명령을 사용하여 Tekton 및 Tekton Triggers를 설치하십시오:

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

OpenShift의 Tekton Triggers의 경우 OpenShift 보안과 호환되도록 Deployment 객체를 업데이트해야 합니다. 다음 단계를 수행하십시오:

1. `tekton-triggers-controller` Deployment를 편집하십시오.
2. `args` 섹션에 다음 줄을 추가하십시오:

    ```bash
    - '--el-security-context=false'
    ```

3. `runAsUser:`를 유효한 OpenShift 사용자(예: `1001000000`)로 변경하십시오.
4. `tekton-triggers-core-interceptors` Deployment를 편집하십시오.
5. `runAsUser:`를 유효한 OpenShift 사용자(예: `1001000000`)로 변경하십시오.
6. `runAsGroup:`를 유효한 OpenShift 그룹(예: `1001000000`)으로 변경하십시오.
7. `tekton-triggers-webhook` Deployment를 편집하십시오.
8. `runAsUser:`를 유효한 OpenShift 사용자(예: `1001000000`)로 변경하십시오.

## 파이프라인 설치{#pipelines-installation}

모든 Tekton 관련 객체를 포함하는 Mendix 파이프라인을 설치하기 전에 다음을 수행해야 합니다:

1. [helm](https://helm.sh)을 설치합니다.
2. Mendix Tekton 파이프라인 구성을 위한 helm 차트가 포함된 폴더를 생성합니다. helm 차트에 접근하려면 CSM에 문의하십시오.

파이프라인을 설치하려면 태그 없이 프라이빗 이미지 저장소의 URL을 제공해야 합니다. 예: `my.private.registry.com/mxapp`. 파이프라인이 빌드하는 이미지는 이 저장소에 저장됩니다.
네임스페이스는 Mendix Operator가 실행되는 동일한 네임스페이스이거나 새 네임스페이스를 생성할 수 있습니다. 아래 섹션에서는 {$NAMESPACE_WITH_PIPELINES}를 사용하여 해당 네임스페이스를 참조합니다.

에어갭 환경의 경우 [에어갭 환경 준비](#preparation)에서 설정한 프라이빗 레지스트리뿐만 아니라 이미지를 개별적으로 지정해야 합니다:

```bash
cd $PATH_TO_DOWNLOADED_FOLDERS && cd helm/charts
helm install -n $NAMESPACE_WITH_PIPELINES mx-tekton-pipeline ./pipeline/ \
  -f ./pipeline/values.yaml \
  --set images.imagePushURL=$URL_TO_YOUR_REPO_WITHOUT_TAG \
  --set images.fetch=$PRIVATE_REGISTRY/mxpc-pipeline-tools:gitinit-0.0.3 \
  --set images.verExtraction=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.9 \
  --set images.build=$PRIVATE_REGISTRY/mxbuild \
  --set images.imageBuild=$PRIVATE_REGISTRY/mxpc-pipeline-tools:imagebuild-0.0.9 \
  --set images.constantsAndEventsResolver=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.9 \
  --set images.k8sPatch=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.9 \
  --set images.createAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.9 \
  --set images.deleteAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.9 \
  --set images.configureAppEnv=$PRIVATE_REGISTRY/mxpc-pipeline-tools-cli:0.0.9
```

## 트리거 설치{#installing-triggers}

이 문서의 단계를 따른 후 *Tekton을 사용한 Mendix on Kubernetes CI/CD* 문서의 [트리거 설치](/developerportal/deploy/private-cloud-tekton/#installing-triggers) 지침을 계속할 수 있습니다. 나머지 지침은 에어갭 환경과 연결된 환경 모두 동일합니다.

## 문제 해결{#troubleshooting}

### Kubernetes 설치 시 `Context Deadline Exceeded`

Kubernetes용 Tekton 및 파이프라인을 설치할 때 다음과 같은 문제가 발생할 수 있습니다:

`Error from server (InternalError): error when creating "STDIN": Internal error occurred: failed calling webhook "webhook.triggers.tekton.dev": Post "https://tekton-triggers-webhook.tekton-pipelines.svc:443/defaulting?timeout=10s": context deadline exceeded`

이는 방화벽 규칙에 의해 발생했을 가능성이 높으며 [tektoncd GitHub 저장소의 이 이슈](https://github.com/tektoncd/pipeline/issues/3317#issuecomment-708066087)의 지침을 따라 수정할 수 있습니다.
