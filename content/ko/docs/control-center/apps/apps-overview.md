---
title: "앱 개요"
linktitle: "앱 개요"
url: /control-center/apps-overview/
description: "Mendix Control Center의 앱 페이지에 대해 설명합니다."
weight: 10
no_list: true
aliases:
    - /developerportal/company-app-roles/users.html
    - /developerportal/company-app-roles/users
---

## 소개

Control Center의 **앱** 페이지는 회사에 속한 모든 앱을 모니터링, 관리 및 상호 작용할 수 있는 중앙 공간을 제공합니다.

페이지 상단의 검색 바를 사용하여 앱 이름 또는 앱 ID로 앱을 찾을 수 있습니다. 앱 ID는 [Apps](https://sprintr.home.mendix.com/)에서 앱의 [설정](/developerportal/general-settings/)에 있는 **Project ID**에서 찾을 수 있습니다.

{{< figure src="/attachments/control-center/apps/apps-overview/top-search-bar.png" >}}

검색 결과는 팝업 창에 표시되며 **AppName**, **AppID**, **Technical Contact**, **Last Commit**, **Created Date**, **Deployment** 필터를 적용할 수 있습니다. 앱 이름을 클릭하면 [앱 세부 정보](#app-details)가 열립니다.

**앱** 페이지에는 다음 탭이 포함되어 있습니다: **Mendix Cloud**, **Private Cloud**, **Mendix Free Cloud**, **기타 앱**, **비활성화된 앱**.

각 탭에는 테이블이 포함되어 있습니다. 테이블 오른쪽 상단의 열 선택기({{% icon name="view" %}})를 클릭하여 표시할 필드를 선택할 수 있습니다. 또한 다음을 수행할 수 있습니다:

* 테이블에서 앱을 필터링합니다. 자세한 내용은 [테이블에서 앱 필터링](#filter-apps) 섹션을 참조하십시오
* 앱 정보를 Excel 파일로 내보냅니다. 자세한 내용은 [앱을 Excel 파일로 내보내기](#export-to-excel) 섹션을 참조하십시오

테이블 열에 대한 설명은 [필드 용어집](#fields-glossary) 섹션을 참조하십시오.

## Mendix Cloud

**Mendix Cloud** 탭은 Mendix Cloud에 배포할 수 있는 모든 라이선스가 부여된 앱을 나열합니다.

기본적으로 테이블에는 프로덕션 환경에 배포된 앱만 표시됩니다. 모든 환경을 보려면 테이블 오른쪽 상단의 **Production** 스위치를 끄십시오.

테이블의 체크박스를 사용하여 앱을 선택하면 화면 하단에 컨텍스트 메뉴가 나타납니다. 선택한 앱을 내보내는 데 사용하십시오.

## Private Cloud (Connected) {#pc-connected}

**Private Cloud** 탭은 Mendix Private Cloud Connected에 배포된 모든 앱을 보여줍니다.

## Mendix Free Cloud

**Mendix Free Cloud** 탭은 Mendix Cloud에 배포된 모든 무료 앱을 보여줍니다.

{{% alert color="info" %}}
Mendix Free Cloud 또는 기타 앱 탭에서 테이블의 체크박스를 사용하여 앱을 선택하면 화면 하단에 컨텍스트 메뉴가 나타납니다. 선택한 앱을 비활성화, 삭제 또는 내보내는 데 사용하십시오. 자세한 내용은 [앱 비활성화 및 삭제](#deactivate-delete-apps) 섹션을 참조하십시오.
{{% /alert %}}

## 기타 앱

**기타 앱** 탭은 배포되지 않은 라이선스가 없는 앱과 Private Cloud Connected에 배포된 앱을 보여줍니다.

## 비활성화된 앱

**비활성화된 앱** 탭은 회사의 모든 비활성화된 앱을 보여줍니다.

테이블의 체크박스를 사용하여 앱을 선택하면 화면 하단에 컨텍스트 메뉴가 나타납니다. 선택한 앱을 활성화, 삭제 또는 내보내는 데 사용하십시오. 활성화 후 앱은 해당하는 활성 탭에 표시됩니다. 자세한 내용은 [앱 비활성화 및 삭제](#deactivate-delete-apps) 섹션을 참조하십시오.

## 앱 세부 정보 보기 {#app-details}

탭 또는 검색 결과에서 앱 이름을 클릭하면 다음 탭을 포함하는 세부 정보 페이지가 열립니다:

* **앱 정보** – **설명** 및 **앱 ID**를 표시하며, 앱의 [설정](/developerportal/general-settings/)에서도 찾을 수 있습니다.
* **멤버** – 앱 개발 팀의 팀 멤버를 나열합니다.
    * 멤버의 이름을 클릭하고 **멤버 비활성화**를 선택하여 앱에서 팀 멤버를 직접 비활성화할 수 있습니다.
    * 기타 멤버 관리 옵션은 **멤버 관리**를 클릭하면 앱의 [팀](/developerportal/general/team/#managing) 페이지가 열립니다. Mendix 관리자로서 이 페이지를 통해 팀에 자신을 추가할 수도 있습니다.
* **환경** – 모든 Mendix Cloud 환경을 나열합니다. 무료 Mendix Cloud 환경의 경우 이 탭에서 환경을 삭제할 수 있습니다. 무료 환경이 삭제되면 모든 데이터가 제거됩니다. 그러나 앱 팀 멤버는 Mendix Portal에서 관련 앱 리포지토리에 계속 액세스할 수 있습니다.

앱이 라이선스가 부여된 앱이 아닌 경우 페이지 오른쪽 상단에 작업 메뉴({{% icon name="three-dots-menu-horizontal" %}})가 표시됩니다. 앱이 활성 상태인 경우 앱 비활성화 및 앱 삭제 옵션이 있고, 앱이 비활성화된 경우 앱 활성화 및 앱 삭제 옵션이 있습니다.

{{% alert color="info" %}}
라이선스가 부여된 앱이나 Mendix Cloud에서 호스팅되지 않는 앱은 비활성화하거나 삭제할 수 없습니다. 이러한 작업의 결과에 대한 자세한 내용은 [앱 비활성화 및 삭제](#deactivate-delete-apps) 섹션의 표를 참조하십시오.
{{% /alert %}}

## 앱 관리

이 섹션에서는 필터링, 내보내기, 비활성화 등 앱 관리를 위한 일반적인 기능과 모든 탭에서 사용할 수 있는 모든 필드의 용어집을 자세히 설명합니다.

### 필드 용어집 {#fields-glossary}

이 용어집은 **Mendix Cloud**, **Private Cloud**, **Mendix Free Cloud**, **기타 앱** 및 **비활성화된 앱** 탭의 모든 테이블에 나타나는 모든 필드를 설명합니다.

| **필드**               | **설명**                                                                                                                                                                      | **표시 위치**                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **Action**              | 작업 메뉴({{<icon name="three-dots-menu-horizontal">}}) - **앱 활성화** 및 **앱 삭제** 옵션을 제공합니다. [앱 비활성화 및 삭제](#deactivate-delete-apps) 섹션을 참조하십시오 | Mendix Free Cloud, 기타 앱, 비활성화된 앱 |
| **AppID**               | 앱의 고유 식별자                                                                                                                                                       | 모든 탭                                        |
| **App Name**            | 앱의 이름입니다. [앱 세부 정보](#app-details)를 보려면 이름을 클릭하십시오                                                                                                            | 모든 탭                                        |
| **App RAM**             | 앱 실행을 위해 할당된 RAM 크기                                                                                                                                         | Mendix Cloud                                    |
| **Cloud Location**      | 환경 위치                                                                                                                                                            | Mendix Cloud, Mendix Free Cloud                 |
| **Cloud Resource Pack** | 앱이 배포된 클라우드 환경의 리소스 팩입니다. 자세한 내용은 *Mendix Cloud*의 [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) 섹션을 참조하십시오  | Mendix Cloud              |
| **Created Date**        | 앱이 생성된 날짜                                                                                                                                                        | 모든 탭                 |
| **Database Name**       | 데이터베이스 이름                                                                                                                                                                   | Private Cloud (Connected)                     |
| **Action**              | 작업 메뉴({{<icon name="three-dots-menu-horizontal">}}) - **앱 활성화** 및 **앱 삭제** 옵션을 제공합니다. [앱 비활성화 및 삭제](#deactivate-delete-apps) 섹션을 참조하십시오 | Mendix Free Cloud, 기타 앱, 비활성화된 앱 |
| **DB Storage**          | 데이터베이스 스토리지 크기                                                                                                                                                               | Mendix Cloud                    |
| **DB Storage Extra**    | 추가 데이터베이스 스토리지 크기                                                                                                                                                              | Mendix Cloud                    |
| **Deployed Status**     | 앱의 배포 여부                                                                                                                                                         | Mendix Cloud, Mendix Free Cloud                 |
| **Deployed Version**    | 현재 배포된 앱의 Mendix 버전                                                                                                                                                  | Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected)   |
| **EnvID**               | 환경의 고유 식별자                                                                                                                  | Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected)   |
| **Env Owner**           | 환경을 소유한 회사입니다. 귀사가 아닌 경우 앱 배포에 대한 제어가 제한됩니다. [앱의 공유 소유권 해결 방법](/control-center/resolve-shared-ownership-of-apps/)을 참조하십시오    | Mendix Cloud   |
| **Environment**         | 환경의 이름                                                                                                                                                             | Mendix Cloud, Private Cloud (Connected)                      |
| **Env Owner ID**        | 이 앱의 환경을 소유한 회사의 ID                                                                                                                                              | Mendix Cloud                                    |
| **Env Status**          | 환경에서의 앱 배포 상태                                                                                                                                | Private Cloud (Connected)                                    |
| **Fallback**            | 데이터베이스의 데이터가 자동으로 두 번째 가용 영역의 데이터베이스에 복사되는지 여부입니다. 자세한 내용은 *Mendix Cloud*의 [고가용성 및 폴백](/developerportal/deploy/mendix-cloud-deploy/#fallback) 섹션을 참조하십시오 | Mendix Cloud |
| **File Storage**        | 파일 저장을 위해 할당된 스토리지의 크기                                                                                                                                                            |    Mendix Cloud                                 |
| **Last Commit**         | 메인 라인에서의 마지막 커밋 날짜                                                                                                                                           | 모든 탭                                        |
| **Mainline Version**    | 리포지토리의 메인 라인에 있는 앱의 Mendix 버전                                                                                                                                         |         Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected) ,  비활성화된 앱   |
| **Members**             | 앱 개발 팀의 팀 멤버 수                                                                                                                                                              | 모든 탭                                         |
| **Namespace**           | Kubernetes 네임스페이스입니다. [Private Cloud 클러스터 생성](/developerportal/deploy/private-cloud-cluster/#create-cluster-namespace)을 참조하십시오                                                      |  Private Cloud  (Connected)                         |
| **NamespaceID**         | 네임스페이스 ID                                                       |  Private Cloud (Connected)                         |
| **Storage Name**        | 스토리지의 이름                                                                                                                                                         |  Private Cloud                          |
| **Technical Contact**   | 앱의 기술 담당자입니다. 편집하려면 현재 기술 담당자 이름 옆의 **편집**({{<icon name="pencil">}})을 클릭하십시오                                                    |  Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected) |

### 테이블에서 앱 필터링 {#filter-apps}

앱 테이블이 있는 각 탭에서 상단에 필터를 찾을 수 있으며, 다양한 기준에 따라 앱을 볼 수 있습니다.

아래와 같은 필터를 사용하면 테이블의 문자열 필드(예: 앱 이름 또는 환경 이름)에서 문자열 일치를 검색할 수 있습니다.

필터 버튼을 클릭하면 **포함**, **시작 문자**, **보다 큼** 등의 비교 및 문자열 연산을 사용할 수 있습니다.

{{< figure src="/attachments/control-center/apps/apps-overview/filter-apps.png" >}}

아래와 같은 필터를 사용하면 마지막 커밋 날짜별로 앱을 필터링할 수 있습니다. 왼쪽 버튼을 클릭하면 **사이**, **비어 있음** 등의 비교를 사용할 수 있습니다.

{{< figure src="/attachments/control-center/apps/apps-overview/filter-last-commit.png" >}}

아래의 필터를 사용하면 **배포 상태**별로 앱을 필터링할 수 있습니다.

{{< figure src="/attachments/control-center/apps/apps-overview/filter-mendix-cloud.png" >}}

### 앱 비활성화 및 삭제 {#deactivate-delete-apps}

단일 무료 앱을 삭제하거나 비활성화할 수 있으며, 여러 무료 앱을 한 번에 비활성화(또는 활성화)할 수 있습니다.

무료 앱을 비활성화하거나 삭제할 때의 결과는 다음과 같습니다:

|                                                             | 앱 비활성화                                          | 앱 삭제                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 앱 코드 리포지토리 유지                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| 앱 팀 멤버가 앱 코드 리포지토리에 액세스 가능         | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| 앱 유지                                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| 앱 팀 멤버가 [Apps](https://sprintr.home.mendix.com/)에서 앱에 액세스 가능 | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| 클라우드 환경 유지                          | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

{{% alert color="info" %}}
앱 삭제 및 비활성화는 무료 앱에서만 지원됩니다. 현재 라이선스가 부여된 앱이나 Mendix Cloud에서 실행되지 않는 앱에는 지원되지 않습니다.
{{% /alert %}}

### 앱 정보를 Excel 파일로 내보내기 {#export-to-excel}

사용 가능한 탭의 테이블에서 앱 데이터를 Excel 파일로 내보낼 수 있습니다.

* 선택한 앱을 내보내려면:

  1. 테이블의 체크박스를 사용하여 앱을 선택하십시오.
  2. 화면 하단에 나타나는 컨텍스트 메뉴에서 **선택 항목 내보내기**를 클릭하십시오.

* 모든 앱을 내보내려면: 테이블 오른쪽 상단의 **모두 내보내기**를 클릭하십시오.

Excel 파일에는 다음 열이 포함됩니다: **AppId**, **AppName**, **TechnicalContact**, **Environment**, **DeployedStatus**, **MendixVersionOnMainline**, **DeployedMendixVersion**, **LastCommit**, **Members**, **Production**, **AppCreatedDate**, **CloudLocation**, **Fallback**, **CloudResourcePack**, **AppRAM**, **DbRAM**, **DbStorage**, **DbStorageExtra**, **FileStorage**.
