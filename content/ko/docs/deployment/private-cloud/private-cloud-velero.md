---
title: "Velero를 사용하여 Kubernetes 기반 Mendix 네임스페이스 백업"
linktitle: "Velero를 사용하여 네임스페이스 백업"
url: /developerportal/deploy/private-cloud-velero/
description: "Velero를 사용하여 Kubernetes 기반 Mendix에서 Mendix 앱 네임스페이스의 백업을 생성하고 복원하는 프로세스를 설명합니다."
weight: 25
---

## 소개

[Velero](https://velero.io/docs/)는 추가적인 재해 복구 수단으로 Kubernetes 네임스페이스를 백업하는 데 사용할 수 있는 도구입니다. 데이터베이스나 S3 리소스를 백업하지 않으므로 주요 백업 방법으로 사용할 수 없지만, Mendix 앱의 기본 [백업 프로세스](/developerportal/operate/backups/)를 보완할 수 있습니다.

Velero를 사용하면 다음 Mendix 객체를 백업하고 복원할 수 있습니다:

* `storageinstances.privatecloud.mendix.com`
* `storageplans.privatecloud.mendix.com`
* `builds.privatecloud.mendix.com`
* `mendixapps.privatecloud.mendix.com`

## 사전 요구 사항

이 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Kubernetes 기반 Mendix 클러스터의 [Mendix Operator](/developerportal/deploy/private-cloud-technical-appendix-01/)가 버전 2.7.0 이상인지 확인하십시오.
* Velero 클라이언트 및 서버를 버전 1.9 이상으로 설치하십시오. 자세한 내용은 [Velero 문서](https://velero.io/docs/)를 참조하십시오.
* 복구 클러스터를 생성하십시오.
    {{% alert color="info" %}}복구 클러스터를 생성하는 프로세스는 Kubernetes 기반 Mendix를 호스팅하는 데 사용하는 플랫폼에 따라 다를 수 있습니다. 자세한 내용은 클라우드 제공업체에서 제공하는 문서를 참조하십시오.{{% /alert %}}

## Velero 백업 생성

Velero로 백업을 생성하려면 다음 단계를 따르십시오:

1. Mendix Operator 및 Mendix Agent를 0으로 스케일 다운하여 중지하십시오:

    ```text
    kubectl scale deployment mendix-agent --replicas=0
    kubectl scale deployment mendix-operator --replicas=0
    ```

     {{% alert color="info" %}} Global Operator의 경우 Global Operator 네임스페이스에서 이 작업을 수행해야 합니다.{{% /alert %}}   

2. 다음 명령을 입력하여 백업을 생성하십시오:

    ```text
    velero create backup mendix-velero-bkp
    ``` 

    {{% alert color="info" %}}위 명령은 *mendix-velero-bkp*라는 이름으로 모든 네임스페이스의 백업을 생성합니다. 특정 네임스페이스만 백업하려면 `include-namespace` 플래그를 사용하십시오.{{% /alert %}}
    
    {{% alert color="info" %}}Global Operator의 경우 `include-namespace` 플래그는 Global Operator 네임스페이스와 관리 네임스페이스 모두에 사용해야 합니다.{{% /alert %}}

3. 다음 명령을 입력하여 백업이 완료되었는지 확인하십시오:

    ```text
    velero backup describe mendix-velero-bkp
    ```

4. 다음 명령을 입력하여 Mendix Operator 및 Mendix Agent를 다시 시작하십시오:

    ```text
    kubectl scale deployment mendix-agent --replicas=1
    kubectl scale deployment mendix-operator --replicas=1
    ```

## Velero 백업 복원

Velero로 생성한 백업을 복원하려면 다음 단계를 따르십시오:

1. 다음 명령을 입력하여 백업을 복원하십시오:

    ```text
    velero restore create --from-backup mendix-velero-bkp --status-include-resources=storageinstances.privatecloud.mendix.com,storageplans.privatecloud.mendix.com,builds.privatecloud.mendix.com,mendixapps.privatecloud.mendix.com
    ```

    {{% alert color="warning" %}}모범 사례로 위 예시와 같이 모든 리소스를 복원하는 것이 좋습니다. 특정 리소스만 복원하면 예측할 수 없는 동작이 발생할 수 있습니다. 그러나 특정 Kubernetes 리소스만 복원하려면 `--status-include-resources` 플래그를 사용하십시오. 예: `--status-include-resources=storageinstances.privatecloud.mendix.com`.{{% /alert %}}

2. 앱이 시작되고 데이터베이스가 생성된 후 데이터베이스 및 S3 파일의 [백업을 복원](/developerportal/deploy/private-cloud-data-transfer/)하십시오.
3. 선택 사항: 백업을 복원한 후 다음 명령을 입력하여 `StorageInstances`에 finalizer를 추가하십시오:

    ```text
    kubectl patch storageinstances $(kubectl get storageinstances --no-headers -o custom-columns=":metadata.name") -p '{"metadata":{"finalizers":["privatecloud.mendix.com/storage-provisioner"]}}' --type=merge
    ```

    {{% alert color="info" %}}finalizer 추가는 필수가 아니지만 모범 사례로 권장됩니다. 이를 통해 Kubernetes 가비지 컬렉션이 삭제된 환경의 스토리지를 정리할 수 있습니다.{{% /alert %}}

    {{% alert color="info" %}}Mendix Operator 버전 2.20 이전에는 위 명령에서 `privatecloud.mendix.com/storage-provisioner` 대신 `finalizer.privatecloud.mendix.com`을 사용하십시오.{{% /alert %}}
