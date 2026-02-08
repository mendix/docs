---
title: "자체 레지스트리 호스팅"
url: /developerportal/deploy/private-cloud-migrating/
description: "Mendix 이미지를 프라이빗 클라우드 레지스트리로 마이그레이션하는 방법을 설명합니다."
weight: 20
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

방화벽이 설정된 OpenShift 또는 Kubernetes 클러스터를 사용하는 경우 Mendix 구성 요소를 자체 이미지 레지스트리에 호스팅해야 합니다.

이미지를 자체 레지스트리에 저장하면 이미지를 로컬에 캐시하고 네트워크 대역폭을 절약하는 데에도 도움이 됩니다.

이 문서에서는 Mendix 레지스트리에서 구성 요소를 내보내고 자체 레지스트리로 가져오는 방법을 설명합니다. 또한 네임스페이스를 구성할 때 Mendix Configuration Tool이 자체 레지스트리를 사용하도록 설정하는 방법도 설명합니다.

## 자체 레지스트리로 마이그레이션하기 위한 사전 요구 사항

Mendix 레지스트리에서 구성 요소를 내보내려면 다음이 필요합니다:

* 인터넷 접근
* 로컬 또는 관리형 이미지 레지스트리
* *Mendix on Kubernetes 클러스터 생성*의 [클러스터 생성 사전 요구 사항](/developerportal/deploy/private-cloud-cluster/#prerequisites) 섹션에 문서화된 Mendix on Kubernetes 클러스터 생성을 위한 기타 모든 사전 요구 사항.

## Mendix Configuration Tool 다운로드

[Mendix on Kubernetes 클러스터 생성](/developerportal/deploy/private-cloud-cluster/)의 지침에 따라 Configuration Tool을 사용하여 [Configuration Tool 실행](/developerportal/deploy/standard-operator/#running-the-tool)까지 진행하십시오.

## Mendix 구성 요소 내보내기{#export}

자체 레지스트리로 마이그레이션하려는 Mendix 구성 요소를 내보내려면 Mendix Configuration Tool을 레지스트리 마이그레이션 모드로 실행해야 합니다.

다음 단계에 따라 Mendix 구성 요소를 내보내고 로컬 머신에 저장하십시오:

1. `mxpc-cli registry-migration` 명령을 사용하여 Configuration Tool을 시작하여 레지스트리 마이그레이션 모드를 시작하십시오.
2. **Migration Type**을 *Export*로 선택하십시오.
3. 내보내려는 **Main Components**와 **Storage Provisioners**를 선택하십시오.
4. 내보내려는 Mendix Runtime의 버전 번호를 입력하십시오. 와일드카드를 사용하고 쉼표로 구분된 버전 목록을 만들 수 있습니다. 예를 들어 `10.12.*, 9.24.26.*`은 Mendix 10.12 런타임의 모든 패치 버전과 Mendix 9.24.26 런타임의 게시된 빌드를 내보냅니다.
5. **Clear cache** 버튼을 클릭하여 로컬 이미지 캐시 삭제를 트리거하십시오. 그렇지 않으면 동일한 이미지를 다시 다운로드할 때 캐시가 재사용됩니다.
6. **Check for updates** 버튼을 클릭하여 다운로드한 이미지의 해시가 최신 원격 이미지와 일치하는지 확인하십시오.
7. **Export components**를 클릭하십시오.

    선택한 구성 요소가 Mendix 저장소에서 추출되어 로컬 머신에 저장됩니다. Windows에서는 `C:\Users\<User id>\.mxpc-cli\registry-migration` 폴더에, Mac 및 U*ix에서는 `home/<User id>/.mxpc-cli/registry-migration` 폴더에 저장됩니다. 이 작업에는 시간이 걸릴 수 있습니다. *The images for the selected components were exported successfully in tarballs* 메시지를 기다리십시오.

{{% alert color="info" %}}
너무 많은 이미지를 다운로드하는 것을 방지하기 위해 다운로드되는 이미지 수에 대한 기본 제한이 있습니다. 다음 명령을 실행하여 현재 제한을 확인할 수 있습니다: `./mxpc-cli registry-migration --help`
`mxpc-cli` 버전 2.10.2 이후로 `--max-images` 명령줄 인수를 사용하여 이 제한을 변경할 수 있습니다. 예를 들어 `mxpc-cli registry-migration --max-images=50`.
{{% /alert %}}

## 자체 레지스트리로 Mendix 구성 요소 가져오기

Mendix 구성 요소가 로컬 머신에 저장되면 자체 레지스트리로 가져올 수 있습니다. 이는 구성이 완료되면 인터넷에 연결되지 않은 에어갭 설치 환경에서도 Mendix가 구성 요소를 찾을 수 있음을 의미합니다.

다음 단계를 수행하십시오.

1. 이전 섹션에서 계속하지 않는 경우 Configuration Tool이 레지스트리 마이그레이션 모드로 시작되었는지 확인하십시오. 아직 실행 중이 아니라면 `mxpc-cli registry-migration` 명령을 사용하십시오.
2. **Migration Type**을 *Import*로 선택하십시오.
3. 다음 **Repository Details**를 입력하십시오:

    * Registry User - 레지스트리에 대한 인증된 접근에 사용되는 사용자 이름
    * Registry Password - 레지스트리 사용자를 인증하는 데 사용되는 비밀번호
    * Registry URL
    * Repository - 저장소에 부여한 이름

4. **Update Credentials**를 클릭하십시오.
5. 자체 레지스트리로 가져오려는 **Main Components**와 **Storage Provisioners**를 선택하십시오.

    {{% alert color="info" %}}이전 섹션 [Mendix 구성 요소 내보내기](#export)에서 내보낸 구성 요소만 선택할 수 있습니다.<br/><br/>
    내보낸 **모든** 런타임 버전이 가져와지며 가져올 버전을 선택할 수 없습니다.{{% /alert %}}

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-migrating/import.png" class="no-border" >}}

6. **Import components**를 클릭하십시오.

    선택한 구성 요소가 로컬 머신에 저장된 폴더에서 업로드되어 선택한 레지스트리로 가져와집니다. Windows에서는 `C:\Users\<User id>\.mxpc-cli\registry-migration` 폴더에서, Mac 및 Linux에서는 `home/<User id>/.mxpc-cli/registry-migration` 폴더에서 가져옵니다.

## Mendix on Kubernetes 클러스터 및 네임스페이스 생성 및 구성

이제 새 Mendix on Kubernetes 클러스터와 네임스페이스를 생성할 수 있습니다. Configuration Tool에 자체 레지스트리를 사용하도록 알리려면 `--registry {registry_url}/{repository}` 인수와 함께 Configuration Tool을 사용하십시오(이전 단계에서 지정한 **Registry URL** 값을 `{registry_url}` 값으로, **Repository**를 `{repository}` 값으로 사용하십시오).

{{% alert color="info" %}}
이미 네임스페이스를 설치하고 구성한 경우 [클러스터 업그레이드](#upgrade-cluster) 섹션으로 직접 건너뛰십시오.
{{% /alert %}}

[Mendix on Kubernetes 클러스터 생성](/developerportal/deploy/private-cloud-cluster/)의 [Configuration Tool 실행](/developerportal/deploy/standard-operator/#running-the-tool)부터 지침을 계속 따르십시오.

[Configuration Tool 실행](/developerportal/deploy/standard-operator/#running-the-tool) 섹션에서 <kbd>Enter</kbd>를 누르기 전에 터미널에 붙여넣는 명령줄에 `--registry` 플래그를 추가하십시오.

### 기본 설치

`--registry` 플래그가 설정된 상태에서 *Mendix on Kubernetes 클러스터 생성*의 [기본 설치](/developerportal/deploy/standard-operator/#base-installation) 섹션의 지침을 따르십시오.

### 네임스페이스 구성

`--registry` 플래그가 설정된 상태에서 *Mendix on Kubernetes 클러스터 생성*의 [네임스페이스 구성](/developerportal/deploy/standard-operator/#configure-namespace) 섹션의 지침을 따르십시오.

[검토 및 적용](/developerportal/deploy/standard-operator/#review-apply) 단계에 도달하면 생성한 YAML 파일에는 기본 Mendix 레지스트리 대신 자체 레지스트리의 위치가 포함됩니다. 패치된 YAML 파일은 사용자 홈 디렉토리의 하위 폴더 `.mxpc-cli/<project name/<folder name>/kube`에 저장됩니다(예: Windows에서는 `C:\Users\<User id>\.mxpc-cli\<project name\<folder name>\kube`, Mac 및 Linux에서는 `/home/<User id>/.mxpc-cli/<project name/<folder name>/kube`). **Write YAML**을 클릭하면 **Installer output** 패널에서 저장된 파일의 위치를 확인할 수 있습니다.

일반적인 방법으로 **Apply Configuration**을 클릭하여 네임스페이스에 구성을 적용하십시오.

### 클러스터 업그레이드{#upgrade-cluster}

{{% alert color="info" %}}
네임스페이스를 업그레이드하기 전에 올바른 Kubernetes 컨텍스트에 있는지 확인하십시오.
{{% /alert %}}

이미 네임스페이스를 설치하고 구성했지만 현재 Mendix on Kubernetes 버전으로 업그레이드하려는 경우
*Mendix on Kubernetes 업그레이드*의 [클러스터 업그레이드](/developerportal/deploy/private-cloud-upgrade-guide/#upgrade-cluster) 섹션의 지침을 따르십시오.

프라이빗 레지스트리의 이미지를 사용하려면 Mendix Configuration Tool을 실행할 때 `--registry` 플래그를 설정하십시오.
