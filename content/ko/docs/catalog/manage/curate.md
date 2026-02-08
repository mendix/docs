---
title: "등록된 자산 큐레이션하기"
url: /catalog/manage/curate/
description: "카탈로그에서 데이터 자산을 큐레이션하고 보강하여 쉽게 찾고 이해할 수 있도록 하는 방법에 대해 설명합니다."
aliases:
    - /catalog/curate/
    - /data-hub/data-hub-catalog/curate/
    - /data-hub/data-hub-catalog/manage-data-sources/curate/
---

## 소개

큐레이터(Curator), 서비스 소유자 및 Mendix Admin은 등록된 자산을 큐레이션할 수 있습니다. 카탈로그에서의 큐레이션은 메타데이터를 보강하고 노출된 서비스, 데이터셋, 속성에 대한 추가 정보를 제공하며 관련 없거나 오래된 서비스를 삭제하는 프로세스입니다. 사용자 정의 애플리케이션 아이콘, 카탈로그별 설명 및 태그를 추가하여 등록된 메타데이터를 보완할 수 있습니다. 카탈로그의 큐레이션 기능에는 서비스의 [검색 가능성(Discoverability)](#discoverability) 설정, 서비스가 [검증(Validated)](#validated)되었는지 여부 표시, [비즈니스 및 기술 소유자(Business and Technical Owner)](#custom-owner) 지정이 포함됩니다.

카탈로그에서 자산을 큐레이션할 수 있는 사용자는 다음과 같습니다:

* 등록된 서비스의 소유자 – **검색 불가(Not discoverable)**로 설정된 서비스를 포함하여 자신의 서비스를 큐레이션할 수 있습니다
* [큐레이터(Curator)](/catalog/manage/user-roles/#curator) 및 [Mendix Admin](/catalog/manage/user-roles/#admin) – 카탈로그에 등록된 모든 자산을 큐레이션하고 찾을 수 있습니다

소유자와 큐레이터는 카탈로그의 [큐레이션](#curatelist) 페이지에서 자신이 소유하고 큐레이션하는 등록된 자산의 개요를 확인할 수도 있습니다.

{{% alert color="info" %}}
큐레이션 중에 추가하거나 변경한 정보는 해당 항목에 대해 카탈로그에 저장됩니다. 서비스 계약, 메타데이터 파일에 추가되거나 서비스 또는 노출된 데이터셋과 관련된 데이터에 영향을 미치지 않습니다.
{{% /alert %}}

## 큐레이션 목록 {#curatelist}

등록된 자산의 소유자와 큐레이터는 카탈로그 홈 페이지에서 **Curate**를 클릭하여 큐레이션 목록 화면을 볼 수 있습니다. 이 페이지는 **My Assets** 탭에서 소유자로서 큐레이션할 수 있는 모든 등록된 자산의 개요를 제공합니다. 큐레이터는 모든 등록된 자산을 나열하는 **Company Assets** 탭도 볼 수 있습니다.

{{< figure src="/attachments/catalog/curate/curate-list.png" alt="curate list" class="no-border" >}}

이 목록에는 등록된 서비스와 서비스에 노출된 개별 데이터셋이 포함됩니다.

검색 바에 검색 문자열을 입력하거나 **Asset Type**, **Application**, **Environment Type**, **Technology** 또는 **Discoverable** 자산으로 **Filter**하여 특정 자산을 검색할 수 있습니다.

열 헤더를 클릭하여 모든 열을 기준으로 목록을 정렬할 수 있습니다.

**View**를 클릭하여 자산 세부 정보를 표시하십시오. 그런 다음 큐레이션 작업을 수행하여 자산 메타데이터에 카탈로그별 정보를 추가할 수 있습니다.

## 큐레이션 페이지 {#curation-option}

큐레이션은 서비스 편집 화면에서 수행됩니다. 자산의 큐레이터 또는 소유자인 경우 선택한 항목을 **편집(Edit)**하는 옵션이 표시됩니다.

{{% alert color="info" %}}
등록된 자산의 소유자는 자신의 서비스만 큐레이션할 수 있습니다.
{{% /alert %}}

서비스가 선택되면 **Edit**를 클릭하여 다음을 수행하십시오:

* 서비스 설명 추가 또는 편집
* 서비스를 **Validated** 및/또는 **Discoverable**로 설정
    * **Validated** – 서비스가 검증되었음을 나타냅니다
    * **Discoverable** – 서비스가 카탈로그 사용자에게 표시되고 검색(및 사용)될 수 있는지 결정합니다. 서비스가 **Not discoverable**로 설정되면 서비스의 소유자(**Business** 및 **Technical**)와 큐레이터만 등록된 서비스를 찾을 수 있습니다
* 서비스에 새 태그 추가

데이터셋이 선택되면 **Edit the dataset**를 클릭하여 다음을 수행하십시오:

* 데이터셋 설명 추가 또는 편집
* 데이터셋을 **Validated**로 설정
* 속성 설명 검색 및 추가

## 앱의 메타데이터 편집하기 {#curate-application}

선택한 서비스에 사용할 수 있는 큐레이션 기능은 **Service**, **Application** 및 **Authentication** 세부 정보를 변경하는 것입니다. 이 섹션에서는 변경할 수 있는 애플리케이션 세부 정보인 소유자 변경 또는 애플리케이션 아이콘 변경에 대해 설명합니다.

**Application** 탭에서 애플리케이션 세부 정보를 큐레이션할 수 있습니다. 이를 위해 **Edit**를 클릭한 다음 **Application** 탭으로 이동하십시오.

### 앱 소유자 변경하기 {#changing-owners}

**Business Owner**와 **Technical Owner**는 사용자가 제공된 이메일을 통해 연락할 수 있도록 **Application** 탭에 링크로 표시됩니다.

기본적으로 등록된 자산의 **Technical Owner**는 Studio Pro의 배포 파이프라인을 통해 서비스를 등록한 사용자입니다. 소유자는 카탈로그 홈 페이지의 커넥터 중 하나를 사용하여 수동 등록 시 또는 Catalog API를 사용하여 자산을 등록할 때도 지정할 수 있습니다.

{{% alert color="info" %}}
**Business Owner**와 **Technical Owner**는 Mendix 플랫폼의 등록된 사용자인 경우에만 카탈로그에서 등록된 서비스에 대한 큐레이션 권한을 갖습니다. 이 섹션에서 설명하는 프로세스를 사용하여 [사용자 정의 소유자](#custom-owner)를 만들면 자산에 대해 연락처 링크가 표시됩니다. 이는 카탈로그에서 자산에 접근하거나 큐레이션할 수 있다는 것을 의미하지 않습니다.{{% /alert %}}

{{% alert color="info" %}}
큐레이터와 Mendix Admin은 관리 기능의 일부로 사용자 정의 소유자 목록을 관리할 수 있습니다. 자세한 내용은 *카탈로그 관리*의 [소유자](/control-center/catalog-admin/#custom-owners) 섹션을 참조하십시오.
{{% /alert %}}

#### 앱의 비즈니스 및 기술 소유자 변경하기 {#changing-owner}

**Application** 탭에서 **Business Owner** 또는 **Technical Owner**를 변경하려면 **Business** 또는 **Technical** 소유자의 이름 필드를 클릭하십시오. 입력을 시작하거나 드롭다운 목록에서 이름을 선택할 수 있습니다. Mendix 플랫폼 사용자는 아바타와 함께 표시되고 사용자 정의 소유자는 이니셜이 표시되는 아바타와 함께 표시됩니다.

**Technical Owner**는 카탈로그 내에서가 아닌 **Control Center**에서만 변경할 수 있습니다. 자세한 내용은 *카탈로그*의 [소유자](/control-center/catalog-admin/#custom-owners) 섹션을 참조하십시오.

#### 사용자 정의 소유자 추가하기 {#custom-owner}

애플리케이션의 소유자를 큐레이션할 때, 등록된 Mendix 사용자가 아니지만 애플리케이션의 기술 연락 담당자(**Technical Owner**) 또는 앱에서 제공하는 데이터의 소유자(**Business Owner**)인 소유자를 지정할 수 있습니다. 이름과 연락처 이메일을 제공해야 합니다.

큐레이터는 관리 작업으로 사용자 정의 소유자 목록을 관리할 수 있습니다. 자세한 내용은 *카탈로그*의 [소유자](/control-center/catalog-admin/#custom-owners) 섹션을 참조하십시오.

사용자 정의 **Business Owner**를 추가하려면 다음 단계를 따르십시오:

1. **Application** 탭에서 소유자 이름을 입력하기 시작하여 드롭다운 목록에 없으면 **생성(Create)** 프롬프트가 표시됩니다. 프롬프트를 클릭하면 **Enter New Custom Owner Details** 팝업이 표시됩니다.

1. 소유자의 **Name**과 **Email**을 입력하고 **Save**를 클릭하십시오.

    {{% alert color="info" %}}애플리케이션에 대해 사용자 정의 소유자를 생성하거나 선택하면 지정된 이메일로의 링크로 **Application** 탭에 표시됩니다. 사용자 정의 소유자는 카탈로그 또는 카탈로그의 자산에 대한 큐레이션 또는 접근 권한을 갖게 됩니다. 소유자로 추가된 Mendix 사용자만 소유한 자산을 큐레이션할 수 있습니다. {{% /alert %}}

1. **Save**를 클릭하여 **Application** 탭으로 돌아가십시오. **Save**를 클릭하여 변경 사항이 오른쪽 메타데이터 창에 표시되는 서비스 세부 정보 페이지로 돌아가십시오.

### 앱 아이콘 변경하기 {#application-icon}

사용자 정의 애플리케이션 아이콘을 업로드하거나 아이콘 라이브러리에서 선택하여 앱과 서비스에 표시되는 아이콘을 변경할 수 있습니다. 선택한 아이콘은 카탈로그 검색 결과 및 Mendix Studio Pro [Integration Pane](/refguide/integration-pane/)와 같은 애플리케이션과 서비스의 모든 엔드포인트에 표시됩니다.

애플리케이션 아이콘을 변경하면 해당 애플리케이션에 대해 카탈로그에 등록된 모든 서비스에 새 아이콘이 표시됩니다.

현재 기본적으로 애플리케이션 아이콘은 서비스가 등록될 때 애플리케이션 유형에 의해 결정됩니다. 예를 들어, Mendix 앱의 경우 소스 앱의 기술을 식별하는 Mendix 아이콘이 표시됩니다.

#### 사용자 정의 아이콘 이미지 파일 업로드하기

사용자 정의 아이콘 또는 이미지를 업로드하려면 다음 사항이 적용됩니다:

* 허용되는 파일 유형은 *.png*, *.jpg*, *.jpeg*입니다.
* 최대 허용 파일 크기는 50 KB입니다.
* 최소 권장 이미지 크기는 64픽셀 x 64픽셀입니다. 더 큰 이미지와 파일을 자를 수 있으며, 업로드 작업 중 표시할 영역을 선택할 수 있습니다.

    {{% alert color="info" %}}더 작은 이미지를 선택하면 64 x 64 크기를 맞추기 위해 확대되어 이미지 품질이 저하될 수 있습니다. 최적의 표시를 위해 원본 파일이 권장 사항을 충족하는지 확인하십시오.{{% /alert %}}

* 업로드된 사용자 정의 아이콘은 **Icon Library**에 저장되며 다른 앱에 사용할 수 있습니다.

앱에 대해 **다른 아이콘을 업로드(Upload a different icon)**하려면 다음 단계를 따르십시오:

1. 선택한 서비스의 **Application** 탭에서 **Upload a different icon**을 클릭하여 **Upload Application Icon** 팝업 창을 표시하십시오.

    {{< figure src="/attachments/catalog/curate/icon-upload-dialog.png" alt="upload icon"   width="300"  class="no-border" >}}

2. 이미지 파일을 업로드 영역으로 드래그하거나 **Upload**를 클릭하여 파일 시스템에서 파일을 찾아 선택하십시오. **Step 2: Crop image**를 클릭하여 진행하십시오.
3. 와이어프레임을 이동하여 로드된 이미지의 영역을 선택하고 와이어프레임의 크기를 변경하여 사용할 영역으로 이미지를 자르십시오. 만족스러우면 **Apply Changes**를 클릭하십시오.

    {{% alert color="info" %}}고해상도 이미지의 경우 선택한 영역이 크기 제한을 초과하면 경고가 표시됩니다. 파일 크기를 줄이기 위해 이미지의 더 작은 영역을 선택하십시오.{{% /alert %}}

4. 애플리케이션 아이콘의 미리보기가 표시됩니다. **Save**를 클릭하여 선택한 아이콘을 업로드하십시오.

    {{< figure src="/attachments/catalog/curate/icon-preview.png" alt="upload icon"   width="300"  class="no-border" >}}

5. **Application** 탭에 선택한 아이콘이 표시됩니다.

    {{< figure src="/attachments/catalog/curate/asset-metadata-new-icon.png" alt="upload icon" class="no-border" >}}

6. **Save**를 클릭하여 서비스 세부 정보 페이지로 돌아가십시오. 사용자 정의 아이콘은 **Icon Library**에 저장됩니다.

#### 라이브러리에서 아이콘 선택하기

아이콘을 업로드하는 대신 **select one from your library**를 클릭하여 기존 아이콘을 사용할 수 있습니다. 카탈로그의 아이콘이 표시되며 하나를 선택하고 **Change Icon**을 클릭하십시오.

## 서비스의 메타데이터 편집하기 {#service-details}

서비스를 큐레이션하여 카탈로그 설명을 추가하고 태그를 추가할 수 있습니다.

### 카탈로그 설명 추가 또는 편집하기

계약에 설명이 포함되어 있으면 선택한 서비스의 서비스 세부 정보 페이지에 표시됩니다. 카탈로그에 대한 설명을 추가하거나 기존 설명을 편집할 수 있습니다. 이 설명은 검색에 포함됩니다.

{{% alert color="info" %}}서비스에 **카탈로그 설명(Catalog Description)**이 있는 경우, 서비스 세부 정보 페이지에서 표시용으로 선택된 설명에 관계없이 두 설명 모두 카탈로그에서 서비스에 대해 유지됩니다. {{% /alert %}}

자산 메타데이터를 편집하려면 다음 단계를 따르십시오:

1. **Curate** 페이지에서 **Edit**를 클릭하여 서비스 편집 화면을 표시하십시오.
    {{< figure src="/attachments/catalog/curate/service-metadata-box.png" alt="service metadata" class="no-border" >}}

2. 서비스 메타데이터의 설명이 **Description provided by the contract**에 표시됩니다. 이는 서비스 정의의 일부이므로 변경할 수 없습니다. **Description** 상자에 대체 설명을 제공할 수 있습니다.

3. 설명을 추가하십시오. 이 설명은 카탈로그의 서비스 세부 정보와 함께 저장됩니다.
4. **Save**를 클릭하여 변경 사항을 저장하고 서비스 세부 정보 페이지로 돌아가십시오. 이제 선택한 설명이 표시됩니다.

### 서비스에 태그 추가 또는 편집하기 {#tags}

태그를 추가하여 등록된 서비스를 분류하고 서비스를 찾기 위한 추가 수단을 제공하십시오. 서비스에 지정된 태그는 서비스에 노출된 데이터셋과 속성에도 적용됩니다. 선택한 서비스에 태그를 지정하려면 다음 단계를 따르십시오:

1. 선택한 서비스의 서비스 세부 정보 페이지에서 **Edit**를 클릭하여 서비스 편집 화면을 표시하십시오.
2. 태그를 추가하려면 빈 **Tags** 입력 영역을 클릭하십시오.

    {{< figure src="/attachments/catalog/curate/service-metadata-tags.png" alt="tags" class="no-border" >}}

3. 태그를 추가하거나 편집하려면 태그 문자열을 입력하고 <kbd>Enter</kbd>를 누르거나 카탈로그에서 사용되는 기존 태그 목록에서 선택하십시오. 여러 태그를 구분하려면 공백을 사용하십시오.

    {{% alert color="info" %}}태그에는 소문자, 숫자, 밑줄만 포함할 수 있습니다. 최소 2자 이상이어야 합니다. 태그 문자열을 입력할 때 대문자를 사용하면 소문자로 변환됩니다. {{% /alert %}}

4. 공백으로 구분하여 여러 태그를 입력할 수 있습니다. {{% icon name="remove" %}}를 클릭하여 태그를 제거할 수 있습니다.

5. 태그 지정이 완료되면 **Save**를 클릭하여 변경 사항을 등록하십시오. 태그는 서비스 세부 정보 페이지에 표시됩니다.

### 서비스에 인증 추가하기 {#authentication}

서비스 게시자는 소비 개발자가 서비스를 사용할 때 자신을 식별하기 위해 필요한 정보를 알려줄 수 있습니다. 등록 단계에서 구성하지 않은 경우 나중에 추가하십시오.

지원되는 인증 방법에 대한 설명은 *카탈로그에서 리소스 등록*의 [인증 방법 선택](/catalog/register/register-data/#authentication) 섹션을 참조하십시오.

## 검색 가능성 및 검증 {#discoverability}

등록된 자산의 검색 가능성 및 검증 속성은 선택한 자산의 서비스 편집 페이지에서 설정할 수 있습니다.

### 검색 가능성(Discoverable)

검색 가능성은 서비스 수준에서 설정됩니다. 서비스가 카탈로그에 등록되면 **Discoverable**이 Mendix Admin이 [Control Center](/control-center/catalog-admin/#settings)에서 구성한 회사의 기본값으로 설정됩니다. 서비스에 대해 **Discoverable**이 켜져 있으면 모든 사용자가 자산을 찾고 세부 정보를 볼 수 있습니다. **Discoverable** 설정은 서비스에 노출된 모든 데이터셋에 적용됩니다.

**Discoverable** 설정이 꺼지면 서비스의 소유자, 큐레이터 및 Mendix Admin만 볼 수 있습니다. 카탈로그의 다른 모든 사용자(및 Studio Pro의 카탈로그 통합을 통해)는 검색 가능성이 꺼진 자산을 볼 수 없습니다.

서비스가 **Not discoverable**로 설정되면 서비스와 노출된 데이터셋은 다른 사용자가 찾을 수 없습니다(소유자와 큐레이터 제외). 그러나 동일한 앱에서 다른 검색 가능한 서비스를 통해 사용할 수 있는 동일한 데이터셋의 인스턴스가 카탈로그에 있을 수 있습니다.

{{% alert color="info" %}}**Not discoverable** 서비스의 경우 소유자 또는 큐레이터가 아닌 한 **Share Service** 및 **Share Dataset** 링크에 접근할 수 없습니다.
{{% /alert %}}

서비스의 검색 가능성을 변경하려면 다음 단계를 따르십시오:

1. 카탈로그에서 원하는 서비스를 선택하십시오.
2. 큐레이션 권한이 있으면 **Edit** 버튼이 표시됩니다. **Discoverable** 토글을 클릭하여 켜거나 끄십시오.

자산의 검색 가능성을 나타내는 메시지가 표시되고 검색 결과 및 서비스 세부 정보 페이지에서 검색 가능성 아이콘이 업데이트됩니다.

### 검증(Validated) {#validated}

**Validated** 속성은 서비스 또는 데이터셋에 할당하여 예를 들어 자격이 확인되었고 신뢰할 수 있는 자산임을 나타낼 수 있습니다. **Validated** 토글을 클릭하여 켜거나 끌 수 있습니다. 검증된 서비스 또는 데이터셋은 서비스 세부 정보 페이지와 검색 결과 창에서 검증 방패로 표시됩니다.

자산을 **Validated**로 설정하면 검색 결과에서 자산의 가중치에 기여합니다. 이는 **Validated** 자산이 검증되지 않은 자산보다 결과에서 먼저 나열됨을 의미합니다.

## 서비스 삭제하기 {#delete-data-source}

서비스 소유자는 자신의 서비스를 삭제할 수 있습니다. 큐레이션 권한이 있는 모든 사용자(Mendix Admin 또는 큐레이터)는 회사 내의 모든 서비스를 삭제할 수 있습니다. 이를 통해 카탈로그에서 오래되거나 관련 없는 서비스를 제거할 수 있습니다.

카탈로그에서 항목을 삭제하면 메타데이터 등록만 제거됩니다. 게시 애플리케이션이나 서비스를 사용하고 있는 애플리케이션에는 영향을 미치지 않습니다.

서비스를 삭제하려면 서비스 세부 정보 페이지에서 삭제 아이콘(빨간색 휴지통)을 클릭한 다음 **Delete**를 클릭하십시오.
