---
title: "Catalog 관리"
linktitle: "Catalog"
url: /control-center/catalog-admin/
weight: 10
description: "Mendix Control Center의 Catalog 관리에 대해 설명합니다."
aliases:
    - /control-center/data-hub-admin/
    - /developerportal/control-center/catalog-admin/
---

## 소개

조직의 Catalog는 데이터 공유 정책에서 등록된 자산 큐레이션의 실질적인 세부 사항에 이르기까지 거버넌스가 필요합니다. Mendix 관리자는 이러한 기능을 감독하고 자신의 앱에 대한 거버넌스 작업을 수행할 수 있는 큐레이터를 지정할 수 있습니다.

Control Center의 [Catalog](/control-center/catalog-admin/) 페이지에서 다음 작업을 수행할 수 있습니다:

* [큐레이터](#curator) 지정 및 관리
* 사용자 정의 [소유자](#custom-owners) 초대 및 관리(Catalog에서 비즈니스 또는 기술 소유자로 이미 추가된 경우)
* [외부 사용자](#external-users) 초대 및 관리
* 회사 데이터 소스의 기본 검색 가능성 [설정](#settings) 제어

## 큐레이터 {#curator}

Mendix 관리자는 조직의 큐레이터 목록을 표시하는 **큐레이터** 탭을 볼 수 있습니다.

{{< figure src="/attachments/control-center/content-curation/catalog-admin/curators.png" alt="Curators" class="no-border" >}}

큐레이터 역할은 Catalog에 등록된 모든 자산의 메타데이터를 보고 편집할 수 있습니다. 비즈니스 및 기술 소유자는 자신이 소유한 항목의 메타데이터를 편집할 수 있지만 소유하지 않은 항목은 편집할 수 없습니다.

Mendix 사용자에게 큐레이터 역할을 할당하려면 **큐레이터 추가**를 클릭하십시오. 조직의 Mendix 사용자 목록을 검색하려면 검색 상자에 입력을 시작하고 큐레이터 역할을 할당할 사용자를 체크하십시오.

{{% alert color="info" %}}
큐레이터 권한이 있는 사용자는 Catalog에 등록된 모든 자산에 접근할 수 있습니다. 여기에는 **검색 불가능**으로 설정된 자산도 포함됩니다(검색 가능성에 대한 자세한 내용은 *Catalog에서 검색하는 방법*의 [검색 가능성](/catalog/manage/search/#discoverability-metadata) 섹션을 참조하십시오). 큐레이터는 다른 사용자가 소유한 자산의 메타데이터도 변경할 수 있습니다.
{{% /alert %}}

사용자의 큐레이터 권한을 제거하려면 사용자 옆의 확인란을 선택하고 **큐레이터 제거**를 클릭하십시오.

{{% alert color="info" %}}
이것은 사용자의 큐레이터 권한만 제거하며 Mendix 플랫폼 사용자에서 사용자를 제거하지 않습니다.
{{% /alert %}}

## 소유자 {#custom-owners}

사용자 정의 소유자는 등록된 앱의 연락처로 추가된 소유자입니다. 앱 [큐레이션](/catalog/manage/search/#discoverability-metadata) 중에 추가되었거나 앱 등록 중에 지정되었을 수 있습니다. 자세한 내용은 *등록된 자산 큐레이션 방법*의 [사용자 정의 소유자 추가](/catalog/manage/search/#discoverability-metadata) 섹션을 참조하십시오.

사용자 정의 소유자는 등록된 자산의 연락처 역할만 합니다. 사용자 정의 소유자를 추가해도 Mendix 플랫폼에 로그인하여 Catalog에 등록된 자산을 큐레이션할 수 없으므로 Catalog에 대한 액세스 권한이 부여되지 않습니다. 사용자 정의 소유자는 Catalog에서 이름과 이니셜로 표시되거나 Mendix 사용자인 경우 개인화된 아바타로 표시됩니다.

Mendix 관리자와 큐레이터는 **소유자** 탭에서 사용자 정의 소유자 목록을 관리할 수 있습니다.

{{< figure src="/attachments/control-center/content-curation/catalog-admin/owners.png" alt="Owners" class="no-border" >}}

{{% alert color="info" %}}
큐레이터는 **Catalog** 페이지에서 **소유자** 탭만 볼 수 있습니다.
{{% /alert %}}

이 탭에서 다음을 수행할 수 있습니다:

* **소유자 추가** – 이름과 이메일 주소를 입력하여 새 소유자를 추가합니다. 새 소유자는 등록된 자산의 비즈니스 또는 기술 소유자로 나열됩니다
* **편집** – 나열된 소유자의 세부 정보를 편집합니다(행 위로 마우스를 올려 작업 확인)
* **삭제** – 목록에서 이름을 삭제합니다
    * 사용자 정의 소유자가 목록에서 제거되면 소유자로 설정된 등록된 자산에서도 제거되어 자산에 연락처가 없게 됩니다

## 외부 사용자 {#external-users}

Mendix 관리자는 **외부 사용자** 탭에서 외부 사용자를 초대할 수 있습니다. 외부 사용자는 게시된 데이터 소스를 검색하고 앱에서 사용할 수 있는 조직 외부의 사용자입니다. 외부 사용자는 데이터 소스의 소유자가 아닌 한 콘텐츠를 등록하거나 큐레이션할 수 없습니다.

{{< figure src="/attachments/control-center/content-curation/catalog-admin/external_users.png" alt="External users" class="no-border" >}}

새 사용자를 초대하려면 Catalog 화면에서 **외부 사용자 초대**를 클릭하십시오. 대화 상자에서 외부 사용자로 초대하려는 사용자의 이메일 주소를 입력하고 **초대 보내기**를 클릭하십시오.

{{% alert color="info" %}}
Mendix 계정이 있는 사용자만 초대할 수 있습니다. Mendix 계정과 연결되지 않은 이메일 주소로는 초대 이메일이 전송되지 않습니다.
{{% /alert %}}

외부 사용자가 초대를 받으면 Mendix 자격 증명으로 Catalog에 로그인하고 수락합니다. 외부 사용자는 한 번에 하나의 조직의 리소스에만 액세스할 수 있습니다. 따라서 Catalog [홈](/catalog/#catalog-home) 페이지의 **회사** 드롭다운 목록에서 초대를 보낸 회사를 선택해야 합니다.

{{< figure src="/attachments/control-center/content-curation/catalog-admin/company_selector.png" alt="Company selector" class="no-border" >}}

Mendix 관리자는 더 이상 액세스가 필요하지 않은 사용자의 권한을 **제거**하고 다른 사용자를 추가할 수도 있습니다.

## 설정 {#settings}

### 검색 가능성 상태

Mendix 관리자는 회사의 게시된 데이터 소스의 기본 검색 가능성 상태를 변경할 수 있습니다. OData 리소스가 게시되면 검색 가능 상태는 여기에 설정된 값이 기본값으로 사용됩니다.

이 설정의 기본값은 **켜짐**입니다.

{{% alert color="info" %}}
이 설정은 소급 적용되지 않으며 설정을 변경한 후 게시된 OData 리소스에만 적용됩니다.
{{% /alert %}}

{{% alert color="info" %}}
등록 양식 또는 API 필드에서 검색 가능 값이 명시적으로 선언된 경우 이 회사 **설정** 값보다 우선합니다.
{{% /alert %}}

### 샘플 데이터 소스

Mendix 관리자는 Catalog에서 샘플 데이터 소스를 숨기는 옵션을 활성화하거나 비활성화할 수 있습니다.
