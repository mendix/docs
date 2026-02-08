---
title: "앱 노드 요청"
url: /support/new-app-node-request-template/
description: "Mendix Cloud 또는 온프레미스/가상 Mendix on Kubernetes에서 환경 크기 조정, 환경 오프보딩 및 새 라이선스 노드 요청 방법을 설명합니다."
weight: 30
aliases:
    - /developerportal/support/new-app-request-template.html
    - /developerportal/support/new-app-request-template/
    - /developerportal/support/new-app-node-request-template/
    - /community-tools/support/new-app-node-request-template/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 Mendix 포털 외부에서 요청할 수 있는 라이선스 앱 노드에 대한 일부 변경 사항을 설명합니다. 이러한 변경 사항은 아래에 나열되어 있습니다.

* [새 라이선스 앱 노드 요청](#new-node)
* [기존 환경 크기 조정](#resize)
* [환경 오프보딩](#offboard)

## 새 라이선스 앱 노드 요청{#new-node}

앱을 새 라이선스 노드에 배포하려면 Mendix 지원팀에 노드를 요청해야 합니다. 요청을 제출할 때 애플리케이션의 호스팅 유형을 지정해야 합니다. 사용 가능한 옵션은 다음과 같습니다:

* **Mendix Cloud** – 퍼블릭 Mendix Cloud에 배포되는 앱의 경우 이 옵션을 선택하십시오.
* **Mendix Cloud Dedicated** – Mendix Cloud Dedicated에 배포되는 앱의 경우 이 옵션을 선택하십시오.
* **Mendix for Private Cloud** – Mendix Operator를 사용하여 Kubernetes에 배포되는 앱의 경우 이 옵션을 선택하십시오. 자세한 내용은 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)를 참조하십시오.
* **Server-based (Windows Server)** – Windows에 배포되는 앱의 경우 이 옵션을 선택하십시오. *Licensing Apps*의 [Windows Server](/developerportal/deploy/licensing-apps-outside-mxcloud/#windows-server) 섹션의 단계에 따라 검색할 수 있는 **Server ID**를 입력해야 합니다.
* **Container-based (Docker, Cloud Foundry, Kubernetes)** – Mendix Operator 없이 Docker, Cloud Foundry 또는 Kubernetes에 배포되는 앱의 경우 이 옵션을 선택하십시오.
* **SAP** – SAP에 배포되는 앱의 경우 이 옵션을 선택하십시오.

Mendix 지원팀에 노드를 요청하려면 다음 단계를 완료하십시오:

1. **요청 제출** – [새 앱 노드 요청](https://newnode.mendix.com/) 페이지에서 원하는 호스팅 유형을 포함한 필수 세부 정보를 입력하십시오.
2. **자동 노드 생성** – 요청이 자격 요건에 부합하면 Mendix Cloud 노드가 자동으로 생성됩니다.
3. **후속 조치** – 추가 정보가 필요하거나 온프레미스 또는 가상 Mendix on Kubernetes를 사용하여 배포되는 앱에 대한 키를 제공하기 위해 Mendix 지원팀이 [Mendix 지원 포털](https://support.mendix.com/)의 티켓을 통해 연락합니다.

{{% alert color="info" %}}
기본적으로 조직의 모든 개발자가 노드 요청을 생성할 수 있습니다. 이 기능을 Mendix 관리자로만 제한하려면 고객 성공 관리자(Customer Success Manager)에게 문의하거나 지원 티켓을 제출하십시오.
{{% /alert %}}

## 기존 환경 크기 조정{#resize}

데이터베이스 스토리지 부족 등의 이유로 환경 크기를 조정해야 하는 경우, 다음 방법 중 하나를 사용하여 조정할 수 있습니다:

* **셀프서비스** – 애플리케이션의 테넌트가 셀프서비스를 지원하고 [기술 담당자](/developerportal/general/app-roles/#technical-contact)인 경우, 플랜을 변경하여 환경 크기를 조정할 수 있습니다. 자세한 내용은 [Mendix Cloud에서 플랜 변경](/developerportal/deploy/change-plan/)을 참조하십시오.

* **Mendix 지원팀에 요청** – [환경 크기 조정](https://resize.mendix.com/index.html) 페이지에서 필수 세부 정보를 입력하십시오. 이후 Mendix 지원팀이 [Mendix 지원 포털](https://support.mendix.com)의 티켓을 통해 애플리케이션의 [기술 담당자](/developerportal/general/app-roles/#technical-contact)에게 연락하여 요청의 우선순위와 시기를 논의합니다.

{{% alert color="warning" %}}
크기 조정 작업을 수행하려면 앱을 재시작해야 하며, 크기 조정 중에 일정 시간 동안 오프라인 상태가 됩니다. 다운타임은 일반적으로 약 30~120분 동안 지속됩니다.
{{% /alert %}}

## 환경 오프보딩{#offboard}

더 이상 환경이 필요하지 않은 경우 오프보딩할 수 있습니다. 또는 다른 앱에 재사용할 수 있습니다. 자세한 내용은 *Mendix Cloud 앱 라이선싱*의 [라이선스 노드에 앱 연결](/developerportal/deploy/licensing-apps/#licensed-node)을 참조하십시오.

[환경 오프보딩](https://offboard.mendix.com/index.html) 페이지에서 필수 세부 정보를 입력하여 단일 환경 또는 전체 노드(예: 테스트, 수락 및 프로덕션 환경 모두)를 오프보딩할 수 있습니다. 애플리케이션의 기술 담당자만 오프보딩을 요청(및 확인)할 수 있습니다. 오프보딩이 확인되면 프로세스가 자동으로 진행됩니다. 어떤 이유로든 환경 오프보딩 페이지를 사용할 수 없는 경우 [Mendix 지원팀](https://support.mendix.com)에 티켓을 제출하십시오.

오프보딩하면 노드와 관련된 모든 항목에 대한 접근이 제거됩니다. 데이터나 기타 정보에 접근하려면 Mendix 포털 외부에 백업되어 있는지 확인해야 합니다.

다음이 제거됩니다:

* 환경
* 클라우드 컨테이너
* 데이터베이스
* FileDocument 스토리지
* 백업
* 알림
* 로그

앱이 오프보딩되면 배포된 앱과 데이터만 제거됩니다. Epics, App Insights, Team Server의 리포지토리 등 앱 개발과 관련된 데이터에 대한 모든 접근은 유지됩니다.

## 추가 읽기

* [앱 배포](/deployment/)
* [앱 라이선싱](/developerportal/deploy/licensing-apps-outside-mxcloud/)
