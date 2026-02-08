---
title: "Kubernetes 기반 Mendix 업그레이드"
url: /developerportal/deploy/private-cloud-upgrade-guide/
description: "Mendix Operator 업그레이드 방법을 설명합니다."
weight: 90
---

## 소개

이 문서에서는 기존 Kubernetes 기반 Mendix 설치를 업그레이드하는 방법을 설명합니다.

이 절차를 통해 지원되는 모든 버전(v1.9.0 이상)의 Kubernetes 기반 Mendix Operator로 업그레이드할 수 있습니다.

{{% alert color="warning" %}}
다음 경우에 알아야 할 특별한 고려 사항이 있습니다:

* `mxpc-cli` 설치 및 구성 도구 버전 2.20.1 이하를 사용하는 경우.
* `kubectl apply`로 CRD를 수동으로 설치 또는 업그레이드하는 경우.

네임스페이스에서 Kubernetes 기반 Mendix Operator를 업그레이드하면 클러스터의 Mendix Custom Resource Definitions와 같은 글로벌 리소스가 수정됩니다.

[Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/)를 사용하면 `kubectl` 및 `oc`와 같은 Kubernetes API 및 도구로 Mendix 애플리케이션을 관리할 수 있습니다.

클러스터의 어떤 네임스페이스에 특정 버전의 Mendix Operator를 설치한 후에는 다른 네임스페이스에 있더라도 동일한 클러스터에 이전 버전의 Mendix Operator를 설치하지 않아야 합니다. 모든 CRD는 글로벌 리소스이고 모든 네임스페이스의 Operator가 동일한 CRD를 사용하며, 이는 버전 간에 호환되지 않을 수 있기 때문입니다.

`mxpc-cli` 버전 2.21.0부터 설치 또는 업그레이드 프로세스는 클러스터의 CRD가 `mxpc-cli`에 번들된 CRD보다 최신인지 확인합니다. 클러스터에 최신 CRD가 있으면 `mxpc-cli`는 CRD 설치 단계를 건너뛰고 CRD 다운그레이드를 방지합니다.
{{% /alert %}}

자체 프라이빗 레지스트리를 사용하는 경우 먼저 [자체 레지스트리로 마이그레이션](/developerportal/deploy/private-cloud-migrating/) 가이드를 따라
Kubernetes 기반 Mendix의 새 구성 요소 버전을 프라이빗 레지스트리로 마이그레이션하십시오.

{{% alert color="warning" %}}
Kubernetes 기반 Mendix Operator v1.\*.\*를 사용하고 있으며 Kubernetes 1.22로 업그레이드할 계획인 경우 먼저 다음 단계를 따르십시오:

1. 클러스터를 Kubernetes 1.21로 업그레이드하십시오
2. 클러스터의 모든 네임스페이스를 Kubernetes 기반 Mendix Operator v2.\*.\*로 업그레이드하십시오
3. Kubernetes 기반 Mendix가 모든 네임스페이스에서 올바르게 작동하는지 확인하십시오

Kubernetes 1.22는 여러 API를 [더 이상 지원하지 않습니다](https://kubernetes.io/blog/2021/07/14/upcoming-changes-in-kubernetes-1-22/);
Kubernetes 1.21 및 Mendix Operator v2.\*.\*로 업그레이드하면 Ingress와 같은 리소스가 Kubernetes 1.22에서 사용 가능한 API와 호환되도록 준비됩니다.
{{% /alert %}}

## 사전 요구 사항

### 구성 도구 다운로드{#download-configuration-tool}

[구성 도구 다운로드](/developerportal/deploy/standard-operator/#download-configuration-tool) 지침을 따르십시오.
구성 도구를 다운로드할 때 현재 설치된 버전이 아닌 업그레이드하려는 버전(1.9.0 이상)을 선택하십시오.

OpenShift 클러스터를 사용하는 경우 [OpenShift에 로그인](/developerportal/deploy/standard-operator/#openshift-signin) 지침을 따르십시오.

### CLI 가용성

OpenShift에서 Kubernetes 기반 Mendix를 업그레이드하려면 *OpenShift CLI*가 설치되어 있어야 하고, 다른 Kubernetes 플랫폼에서 Kubernetes 기반 Mendix를 업그레이드하려면 *Kubectl CLI*가 설치되어 있어야 합니다. 두 경우 모두 올바른 클러스터에 연결되어 있는지 확인하십시오.

## 네임스페이스 업그레이드{#upgrade-cluster}

1. [구성 도구 실행](/developerportal/deploy/standard-operator/#running-the-tool) 지침을 따르십시오. 초기 화면이 표시됩니다:

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-upgrade-guide/mxpc-cli-welcome.png" class="no-border" >}}
2. **Upgrade Namespace**를 클릭하십시오. 아래 화면이 표시됩니다:

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-upgrade-guide/upgrade-wizard.png" class="no-border" >}}

### 자동 업그레이드 모드

이 모드는 네임스페이스의 구성 요소를 자동으로 업그레이드합니다.

1. 현재 필요한 **Cluster Type** – *openshift* 또는 *generic*을 선택하십시오.
2. **Run Upgrade**를 클릭하여 네임스페이스의 Kubernetes 기반 Mendix 구성 요소를 업그레이드하십시오.

    {{% alert color="info" %}}**Upgrade output**이 **Done**으로 끝나면 업그레이드가 성공한 것입니다.{{% /alert %}}

### 수동 업그레이드 모드

이 모드를 사용하면 구성 도구가 네임스페이스에서 Kubernetes 기반 Mendix를 업그레이드하기 위해 수행해야 하는 변경 사항을 검토하고 감사할 수 있습니다.

{{% alert color="info" %}}
수동 업그레이드는 자동 업그레이드 모드의 대안입니다. 이미 자동 업그레이드를 수행한 경우 이 섹션의 지침을 따를 필요가 없습니다.
{{% /alert %}}

현재 구성을 가져오려면 이 도구에 네임스페이스의 리소스를 읽을 수 있는 권한이 필요합니다.

수동 업그레이드는 다음 단계로 구성됩니다:

* [업그레이드 패치 생성](#generate-patches)
* [배포 중지](#stop-deployments)
* [업그레이드 패치 적용](#apply-patches)
* [배포 시작](#start-deployments)

#### 업그레이드 패치 생성{#generate-patches}

이 단계에서는 사용자 홈 디렉토리의 `.mxpc-cli` 하위 폴더(예: Windows의 경우 `C:\Users\<User id>\.mxpc-cli`, Mac 및 U*ix의 경우 `/home/<User id>/.mxpc-cli`)에 로컬 머신에 업그레이드 패치를 준비합니다.

1. **Cluster Type** – *openshift* 또는 *generic*을 선택하십시오.

2. **Save Upgrade script**를 클릭하여 네임스페이스에 대한 업그레이드 패치를 생성하십시오.

    {{% alert color="info" %}}**Upgrade output**이 **Done**으로 끝나면 패치가 성공적으로 생성된 것입니다.{{% /alert %}}

#### 배포 중지{#stop-deployments}

배포된 `mendix-operator`를 중지하십시오(`{namespace}`를 Mendix Operator가 배포된 네임스페이스로 바꾸십시오):

```shell
kubectl -n {namespace} scale deployment mendix-operator --replicas=0
```

연결 모드에서 클러스터를 설치한 경우 배포된 `mendix-agent`를 중지하십시오(`{namespace}`를 Mendix Agent가 배포된 네임스페이스로 바꾸십시오):

```shell
kubectl -n {namespace} scale deployment mendix-agent --replicas=0
```

#### 업그레이드 패치 적용{#apply-patches}

다음 명령을 실행하여 Mendix Operator의 Custom Resource Definitions를 업그레이드하십시오:

```shell
kubectl apply -f crds.manifest.yaml
```

[Custom Resource Definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/)를 사용하면 `kubectl` 및 `oc`와 같은 Kubernetes API 및 도구로 Mendix 애플리케이션을 관리할 수 있습니다.

다음 명령을 실행하여 Mendix Operator의 종속성 버전을 업그레이드하십시오:

```shell
kubectl -n {namespace} apply -f upgrade_manifest.yaml
```

`upgrade_patches.txt` 파일을 열고 해당 파일에 인쇄된 명령을 실행하십시오.
`upgrade_patches.txt` 파일에는 업그레이드 프로세스를 완료하기 위해 커맨드 라인 터미널에서 실행해야 하는 `kubectl` 명령(또는 OpenShift의 경우 `oc` 명령) 목록이 포함되어 있습니다.

{{% alert color="warning" %}}
`upgrade_patches.txt` 파일은 Bash 이스케이프 규칙을 사용합니다. Windows 명령 프롬프트와 같은 다른 터미널을 사용하는 경우 커맨드 라인 터미널의 이스케이프 규칙과 호환되도록 명령을 조정해야 합니다.
{{% /alert %}}

#### 배포 시작{#start-deployments}

`mendix-operator` 배포를 시작하십시오(`{namespace}`를 Mendix Operator가 배포된 네임스페이스로 바꾸십시오):

```shell
kubectl -n {namespace} scale deployment mendix-operator --replicas=1
```

연결 모드에서 클러스터를 설치한 경우 `mendix-agent` 배포를 시작하십시오(`{namespace}`를 Mendix Agent가 배포된 네임스페이스로 바꾸십시오):

```shell
kubectl -n {namespace} scale deployment mendix-agent --replicas=1
```
