---
title: "Microsoft Azure의 Windows에서 Mendix 배포"
linktitle: "MS Azure에서 Mendix 배포"
url: /developerportal/deploy/deploy-mendix-ha-on-windows-in-microsoft-azure/
description: "Microsoft Azure에서 Windows를 실행하는 서버에 HA 설정으로 Mendix를 설치하고 구성하는 방법"
weight: 5
---

## 소개

이 문서는 Microsoft Azure 클라우드 플랫폼에서 Windows에 고가용성 Mendix Runtime Server 환경을 설정하는 예시로 작성되었습니다. 이 가이드는 고려해야 할 Mendix 시스템 및 설정을 설명하기 위한 것이며 Mendix 호스팅 환경을 배포하기 위한 완전한 가이드나 지원되는 '모범 사례'가 아니므로 상황에 맞게 조정해야 할 수 있습니다.
Microsoft Azure 클라우드 플랫폼에서 Microsoft Windows를 실행하는 여러 시스템에서의 Mendix 소프트웨어 설치 및 구성을 설명하며 다음을 다룹니다:

* Azure Load Balancer 설정

* 리더 및 팔로워 노드로 Mendix 앱 배포

* 공유 스토리지로 Azure Blob Storage 구성

## 전제 조건 {#Prerequisites}

* Microsoft Azure 및 Windows 서버 관리에 대한 기본 지식

* 활성 Azure 구독

* [Microsoft Windows에서 Mendix 배포](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) 가이드에 설명된 대로 구성된 두 개 이상의 서버. 이 서버에는 Mendix Service Console 환경 설정에서 앱 및 서버 파일의 위치로 사용하도록 구성하는 추가 데이터 디스크가 추가되어 있어야 합니다.

* 다음을 생성하거나 수정할 수 있는 충분한 권한이 있는 Azure 관리자 계정:

    * Load Balancer

    * 가상 머신

    * 스토리지 계정

## 클러스터 팔로워 노드 구성

클러스터 환경에서 초기 데이터베이스 동기화는 클러스터 구성원 중 하나만 처리해야 합니다. 기본적으로 각 Mendix 앱 서버가 이러한 작업을 실행하므로 문제가 발생할 수 있습니다. Custom Mendix 설정 *com.mendix.core.isClusterSlave*를 추가하고 **하나를 제외한** 모든 서버에 대해 *true*로 설정하여 하나의 서버만 이러한 작업을 실행하도록 하십시오. 따라서 두 대의 서버 클러스터가 있는 경우 한 서버에 이 설정을 추가하고, 다섯 대의 서버 클러스터가 있는 경우 네 대에 추가하십시오.

1. 앱을 선택하고 **Configuration**을 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_click_configuration.png" class="no-border" >}}

2. Configuration 화면에서 **Advanced...**를 클릭하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_click_advanced.png" class="no-border" >}}

3. Advanced 화면에서 Custom Mendix Settings에 **Name** *com.mendix.core.isClusterSlave*, **Value** *true*인 줄을 추가하십시오.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/slave_add_setting.png" class="no-border" >}}

4. 두 화면 모두에서 **Close**를 클릭하여 Service Console로 돌아가십시오.

클러스터 리더 및 팔로워 역할에 대한 자세한 내용은 *클러스터형 Mendix Runtime*의 [클러스터 리더 및 클러스터 팔로워](/refguide/clustered-mendix-runtime/#cluster-leader-follower) 섹션에서 확인할 수 있습니다.

## Azure Load Balancer 구성

로드 밸런서의 정확한 구성 세부 사항은 네트워크 환경 및 가용성 요구 사항에 따라 달라집니다. Mendix Runtime은 고정 세션을 필요로 하지 않습니다. HTTP(포트 80) 및 HTTPS(포트 443)에 대한 상태 프로브를 구성하고, 모든 Mendix 애플리케이션 서버를 포함하는 백엔드 풀, 그리고 해당 상태 프로브를 사용하여 포트 80 및 443을 백엔드 풀의 서버로 전달하는 로드 밸런싱 규칙을 구성하십시오.
Azure Load Balancer 구성에 대한 자세한 정보는 [Microsoft Azure 문서](https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-public-portal?tabs=option-1-create-load-balancer-standard)에서 확인할 수 있습니다.

## 공유 스토리지로 Azure Blob Storage 구성

Azure Portal에서 Azure Storage 계정 이름과 접근 키를 가져오십시오:

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/azure_storage_keys.png" class="no-border" >}}

그런 다음 애플리케이션을 선택하고 **Configuration**을 클릭한 다음 **Advanced...**를 클릭하십시오. **Advanced Settings** 화면에서 다음 **Custom Mendix settings**를 추가하십시오:

* **Name**: *com.mendix.core.StorageService*, **Value**: `com.mendix.storage.azure`

* **Name**: *com.mendix.storage.azure.AccountName*, **Value**: `<Azure Storage 계정 이름>`

* **Name**: *com.mendix.storage.azure.AccountKey*, **Value**: `<Azure Storage 접근 키>`

* **Name**: *com.mendix.storage.azure.Container*, **Value**: `<Azure Storage blob 컨테이너>`

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/deploy-mendix-ha-on-windows-in-microsoft-azure/application_storage_settings.png" class="no-border" >}}

기본적으로 컨테이너가 아직 존재하지 않는 경우 blob 스토리지에 생성됩니다. Mendix Runtime의 Azure Blob Storage 구성 옵션에 대한 자세한 내용은 *Runtime 커스터마이징*의 [Microsoft Azure Blob Storage 설정](/refguide/custom-settings/#azure-blob) 섹션에서 확인할 수 있습니다.

또한, *com.mendix.storage.PerformDeleteFromStorage* 설정을 `false` 값으로 추가하는 것을 강력히 권장합니다. 이는 앱에서 파일이 삭제될 때 런타임이 기본 스토리지에서 파일을 삭제하는 것을 방지하며, 데이터베이스 백업을 복원할 때 파일이 누락되는 것을 방지할 수 있습니다.
이 설정을 활성화하지 않으려면 스토리지 백엔드에 대한 복원 전략이 구성되어 있는지 확인하십시오.

{{% alert color="info" %}}
이 설정은 클러스터의 *모든* 서버에 구성해야 합니다.
{{% /alert %}}

## 데이터베이스

배포에 Azure SQL 데이터베이스를 사용하는 경우 Premium(DTU 기반 모델) 또는 Business Critical(vCore 기반 모델)을 사용하는 것이 좋습니다. 그렇지 않으면 데이터베이스의 지연 시간이 애플리케이션 성능에 영향을 미칩니다.
또한, 게시된 각 애플리케이션에는 자체 데이터베이스가 필요합니다! 데이터베이스 요구 사항에 대한 자세한 정보는 여기에서 확인할 수 있습니다: [데이터베이스](/refguide/system-requirements/#databases)

## 더 읽기

* [Microsoft Windows에서 Mendix 배포](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
* [클러스터형 Mendix Runtime](/refguide/clustered-mendix-runtime/)
* [시스템 요구 사항](/refguide/system-requirements/)
