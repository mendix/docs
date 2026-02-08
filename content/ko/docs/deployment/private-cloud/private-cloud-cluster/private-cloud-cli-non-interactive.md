---
title: "Kubernetes 기반 Mendix 비대화형 모드 설치 및 구성"
linktitle: "비대화형 모드"
url: /developerportal/deploy/private-cloud-cli-non-interactive/
description: "Kubernetes 기반 Mendix를 비대화형 모드로 설치하고 구성하는 방법을 설명합니다."
weight: 5
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

네임스페이스 설치 및 구성을 자동화하기 위해 구성 도구에서 비대화형 모드를 제공합니다.

{{% alert color="info" %}} 비대화형 모드를 사용하려면 Mendix Operator 버전 2.1.0 이상이 필요합니다.{{% /alert %}}

구성 도구를 다운로드하는 방법에 대한 정보는 [구성 도구 다운로드](/developerportal/deploy/standard-operator/#download-configuration-tool)를 참조하십시오.

{{% alert color="info" %}} 특정 명령에 대한 자세한 내용은 "./mxpc-cli <command> --help"를 사용하십시오. {{% /alert %}}

{{% alert color="info" %}} 비대화형 모드는 현재 Global Operator에서는 지원되지 않습니다.{{% /alert %}}

다음 매개변수가 명령에 사용될 수 있습니다:
  
* `--namespace` – 클러스터 네임스페이스.
* `--clusterType` – 클러스터 유형 *openshift* 또는 *generic*.
* `--clusterMode` – 클러스터 모드 *standalone* 또는 *connected*.
* `-i` – Kubernetes 기반 Mendix Portal에서 네임스페이스의 **Installation** 탭에 표시되는 *namespace id*.
* `-s` – Kubernetes 기반 Mendix Portal에서 네임스페이스의 **Installation** 탭에 표시되는 *namespace secret*.
* `--file` – 네임스페이스의 구성을 포함하는 파일.

연결 모드를 사용할 때는 namespace id와 namespace secret을 인수로 넣어야 합니다. 이 매개변수는 Mendix Gateway Agent가 Kubernetes 기반 Mendix Portal에 연결하는 데 사용됩니다. 설치 명령에서 -i 및 -s 매개변수로 이 값을 확인할 수 있습니다.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-cli-non-interactive/installation-command.png" class="no-border" >}}

## 기본 설치

[기본 설치](/developerportal/deploy/standard-operator/#base-installation)를 수행하려면 다음 명령을 사용하십시오:

```shell
./mxpc-cli base-install --namespace <namespace> -i <namespace-id> -s <namespace-secret> --clusterMode <cluster-mode> --clusterType <cluster-type>
```

namespace-id와 namespace-secret은 Kubernetes 기반 Mendix를 연결 모드에서 사용할 때만 필요합니다.

## 구성 적용

구성 파일로 [표준 네임스페이스를 구성](/developerportal/deploy/standard-operator/#configure-namespace)하려면 다음 명령을 사용하십시오:

```shell
./mxpc-cli apply-config -i <namespace-id> -s <namespace-secret> --file <config-file>
```

namespace-id와 namespace-secret은 Kubernetes 기반 Mendix를 연결 모드에서 사용할 때만 필요합니다. 

독립형 모드의 경우 namespace-id와 namespace-secret이 필요하지 않습니다. 대신 다음 명령을 사용하십시오:

```shell
./mxpc-cli apply-config --file <config-file>
```

구성 파일을 생성하려면 [Kubernetes 기반 Mendix 클러스터 생성](/developerportal/deploy/private-cloud-cluster/)에 설명된 지침을 따르십시오. 네임스페이스를 대화형으로 구성하는 [검토 및 적용](/developerportal/deploy/standard-operator/#review-apply) 단계에서 **Write YAML**을 클릭하면 **mx_config_cli.yaml** 파일이 생성됩니다.

아래는 구성 파일의 예시입니다. 이 예시는 참조용으로만 제공됩니다. 구성 파일이 자체 앱에서 사용되는 입력 필드의 모든 값을 캡처하도록 하려면 자체 **mx_config_cli.yaml** 파일을 생성해야 합니다.

```yaml
namespace: my-namespace
cluster_mode: connected
mask:
  database_plan: true
  storage_plan: true
  ingress: true
  registry: true
  proxy: false
  custom_tls: false
database_plan:
  name: ephemeral-database
  type: ephemeral
storage_plan:
  name: ephemeral-storage
  type: ephemeral
ingress:
  type: openshift-route
  enable_tls: false
  k8s_ingress: null
  service: null
registry:
  type: openshift4
```

## Mendix Operator 및 Mendix Gateway Agent 업그레이드

네임스페이스에서 [Mendix 구성 요소 버전을 업그레이드](/developerportal/deploy/private-cloud-upgrade-guide/#upgrade-cluster)하려면 다음 명령을 사용하십시오:

```shell
./mxpc-cli upgrade-namespace --clusterType <cluster-type> --namespace <namespace>

```

{{% alert color="info" %}}
Global Namespace 설치의 경우 관리 네임스페이스에는 업그레이드 절차가 적용되지 않습니다.
{{% /alert %}}

## 표준 네임스페이스를 Global Operator 네임스페이스로 변환

표준 네임스페이스를 Global Operator 네임스페이스로 변환하려면 다음 단계를 수행하십시오:

```shell
./mxpc-cli global-operator convert-namespace -g <global-operator-main-namespace> -t <target-namespace>

```

{{% alert color="info" %}}
변환이 완료되면 관리 네임스페이스는 표준 Operator 네임스페이스로 되돌릴 수 없습니다.
{{% /alert %}}
