---
title: "Marketplace에 콘텐츠 업로드하기"
url: /appstore/submit-content/
weight: 3
description_list: true
description: "Mendix Marketplace에 콘텐츠를 제출하는 방법을 설명합니다."
tags: ["marketplace", "public marketplace", "private marketplace", widget", "module"]
aliases:
    - /appstore/overview/share-content/
    - /appstore/general/share-app-store-content/
    - /developerportal/app-store/share-content/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix Marketplace는 Mendix Platform으로 구축한 커넥터, 모듈, 앱을 공유하는 커뮤니티 멤버의 기여로 운영됩니다.

## 사전 요구 사항

시작하기 전에 [Marketplace 개요](/appstore/overview/) 및 [Marketplace 콘텐츠 사용](/appstore/use-content/)을 읽었는지 확인하십시오.

## 새 Marketplace 콘텐츠 추가 {#adding}

시작하려면 Marketplace 홈 화면의 왼쪽 패널에서 **Add Content**를 클릭합니다. 컴포넌트를 업로드하는 데 필요한 리소스를 설명하는 **Before You Get Started** 대화 상자가 표시됩니다.

모든 것이 준비되었는지 확인한 후 **Next**를 클릭한 다음 다음 섹션의 단계를 따라 콘텐츠를 추가합니다.    
일부 필드는 필수이고 다른 필드는 선택 사항입니다 — 이는 사용자 인터페이스에 표시됩니다.

업로드 흐름의 각 페이지에서 다음 버튼 중 하나를 클릭합니다:

* **Save and Exit** — 초안에 대해 지금까지 입력한 세부 정보를 저장합니다. 상단 바의 [My Drafts](/appstore/home-page/#my-drafts) 링크를 통해 초안에 액세스할 수 있습니다.    
  이 버튼은 컴포넌트를 편집하는 경우에는 표시되지 않습니다.
* **Next** — 업로드 흐름의 다음 페이지로 이동합니다.

### 컴포넌트 업로드 {#general}

**Upload Component** 탭에서 소스 파일을 추가하고 컴포넌트에 대한 일반 정보를 제공합니다.
  
일부 필드는 특정 컴포넌트 유형에만 적용되므로 특정 시나리오에 대한 화면의 안내를 따르십시오.

1. **Component Name**을 추가합니다.

2. **Component Type**을 선택합니다.      
   콘텐츠의 초기 버전을 만들 때만 컴포넌트 유형을 설정할 수 있습니다. 게시 후에는 이 설정을 변경할 수 없습니다.    
   컴포넌트 유형에 대한 자세한 내용은 *Marketplace*의 [Marketplace 컴포넌트 유형](/appstore/#components-type) 섹션을 참조하십시오.

3. 컴포넌트의 **Visibility**를 선택합니다:

    * **Public** – 컴포넌트가 전체 Mendix 커뮤니티에서 사용할 수 있습니다.    
      이 콘텐츠는 사용 가능하기 전에 Mendix의 검토와 승인이 필요합니다.
    * **Private** – 콘텐츠에 **Private** 라벨이 표시되며, [Company Content](/appstore/home-page/#company-content) 페이지를 통해서만 사용할 수 있습니다.    
      콘텐츠 그룹의 선택된 비공개 콘텐츠는 [콘텐츠 그룹 게스트](/appstore/home-page/#guests)도 다운로드할 수 있습니다.    
      이 콘텐츠는 Mendix의 검토를 받지 않습니다.    
    
    콘텐츠의 초기 버전에서만 가시성을 설정할 수 있습니다. 나중에 Marketplace 컴포넌트를 업데이트하여 이 설정을 변경할 수 없습니다.

4. **Select Component Source**에서 소스 파일을 업로드하기 위한 옵션 중 하나를 선택합니다:     

    * **MPK File** – 소스 MPK를 업로드합니다.    
    * **GitHub Link** – 가져오려는 릴리스의 링크를 복사하기 위한 대화 상자의 단계를 따릅니다. 자세한 내용은 *콘텐츠 제작자 가이드라인*의 [GitHub 리포지토리 사용](/appstore/guidelines-content-creators/#github) 섹션을 참조하십시오.    
       GitHub에서 소스 파일을 가져오도록 선택하면, GitHub URL이 자동으로 Marketplace의 **Resources** 섹션에 표시됩니다.    

    Solution을 업로드하는 경우 **Upload Component Source** 섹션이 표시되지 않습니다.    
    Industry Template을 업로드하는 경우 **Upload Component Source** 섹션에서 컴포넌트 소스 선택은 선택 사항입니다.    

5. 콘텐츠를 빌드한 **Studio Pro Version**을 선택합니다.    

6. 위젯을 업로드하는 경우, 호환성을 나타내기 위해 **Compatible with Mendix React Client** 체크박스를 선택합니다.    
   이 체크박스는 Studio Pro 11부터 필수입니다.
   
7. 컴포넌트에 대한 버전을 추가합니다.  

8. 제공된 상자에 해당 릴리스의 새로운 사항을 설명하는 **Release Notes**를 입력합니다. 이 필드는 서식 있는 텍스트를 지원합니다.

9. Solution 또는 Industry Template을 업로드하는 경우 **Business Connect** 섹션이 표시됩니다. **Contact Email(s)** 필드에 하나 이상의 이메일 주소를 입력한 다음 **Add Email**을 클릭합니다. 이러한 이메일 주소는 잠재 고객이 연락하는 데 사용됩니다.     
   이 필드는 공개 컴포넌트에만 사용할 수 있습니다.    
   {{% alert color="warning" %}}잠재 고객이 직접 연락할 수 있습니다. 고객과 대화를 시작하면 제품에 대한 액세스를 제공할 책임은 귀하에게 있습니다. Mendix는 이러한 고객 상호 작용에 관여하지 않습니다. {{% /alert %}}

### 일반 정보 추가

**General Information** 탭에서 컴포넌트에 대한 자세한 정보를 추가합니다.

1. 커버 이미지를 업로드합니다. 권장 이미지 해상도는 600x240 px입니다.

2. **Component Tagline** 필드에 컴포넌트가 수행하는 작업에 대한 간단한 설명을 포함합니다.

3. **About** 필드에 컴포넌트의 목적과 사용 사례를 자세히 설명합니다.    
   편집기에서 서식 있는 텍스트를 사용할 수 있습니다. 그러나 설명 시작 부분에 서식 있는 텍스트를 사용하는 것은 올바르게 렌더링되지 않으므로 권장하지 않습니다. 서식 있는 텍스트를 사용하기 전에 일반 텍스트 몇 줄을 추가해야 합니다.

4. **Industry** 드롭다운 목록에서 컴포넌트에 적용 가능한 최대 3개의 산업을 선택합니다.

5. **Category** 드롭다운 목록에서 컴포넌트에 적용 가능한 최대 3개의 전문 분야를 선택합니다.

### 지원 및 라이선싱 구성 {#support-licensing}

**Support & Licensing** 탭에서 라이선스 유형을 선택하고 연락처 세부 정보를 추가합니다.

1. 앱에 적용할 **License Type**을 선택합니다.    
   사용 가능한 오픈 소스 소프트웨어 라이선스 및 요구 사항에 대한 자세한 내용은 [오픈 소스 소프트웨어 라이선스](#license)를 참조하십시오.     
   {{% alert color="info" %}}BSD 2.0, BSD 3.0 또는 Apache 1.0을 선택하는 경우, 컴포넌트가 저장된 공개 리포지토리에 대한 링크를 제공해야 합니다.{{% /alert %}}

2. **Website**를 추가합니다.

3. 지원 부서의 **Contact Email**을 추가합니다.

4. **Development Team** 필드에 컴포넌트에 기여하고 소유한 개발자의 이메일 주소를 추가합니다.

#### 오픈 소스 소프트웨어 라이선스 {#license}

다음 표는 사용 가능한 오픈 소스 소프트웨어 라이선스 옵션과 요구 사항을 설명합니다.

{{% alert color="warning" %}}
오픈 소스 소프트웨어 라이선스는 Mendix 에코시스템의 안전을 보장하기 위해 일련의 규정 준수 규칙을 따라야 합니다. 자세한 내용은 [외부 개발자를 위한 OSS 규정 준수](/appstore/submit-content/oss-compliance/)를 참조하십시오.
{{% /alert %}}

| | **참고** | **상업적 사용 허용?** | **컴포넌트 코드가 공개 리포지토리에 있어야 하나요?** | **코드 및 배포 아티팩트에 저작권 정보가 포함된 라이선스 텍스트가 필요한가요?** | **수정할 수 있나요?** (코드 수정 사항 언급) | **소비 앱이 코드를 공개하지 않고 사용할 수 있나요?** | **아티팩트와 함께 Notice 파일을 배포해야 하나요?** | **원본 컴포넌트 소스 코드를 소비 앱과 함께 배포해야 하나요?** | **하위 라이선스를 부여할 수 있나요?** |
| --- | --- | --- | --- | --- | --- | --- |  --- | --- | --- |
| [MIT](https://opensource.org/licenses/MIT) | 아티팩트, 즉 *.mpk* 패키지에 특정 *license.txt* 파일을 추가하십시오. | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| **BSD 2.0, 3.0** | N/A | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| **Apache 1.0** | N/A | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) | 아티팩트, 즉 *.mpk* 패키지에 특정 *license.txt* 파일을 추가하십시오. | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}}  |
| **Creative Commons CC0 1.0 Universal (CC-0)** (퍼블릭 도메인) | N/A | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

{{% alert color="info" %}}
[GNU General Public License (GPL), version 3](https://www.gnu.org/licenses/gpl-3.0.en.html)은 GNU GPL 하에 라이선스된 모든 것이 공개되므로 사용할 수 없습니다.    
GNU GPL은 강력한 카피레프트 효과가 있습니다.    
수정에는 강력한 카피레프트 효과가 있습니다.    
모든 소비 앱은 코드를 공개해야 합니다.
{{% /alert %}}

#### 독점 라이선스 {#proprietary-license} 

회사 콘텐츠에 대해 자체 독점 라이선스를 구성할 수 있습니다. 라이선스는 여러 컴포넌트에 적용할 수 있으며, 조직 내 모든 사람이 사용할 수 있습니다. 

이 라이선스는 새 **Public Marketplace (all Mendix users)** 컴포넌트에 대해 새 라이선스를 요청하고 컴포넌트와 함께 제출하여 만들 수 있습니다. 라이선스는 처음 만들고 제출한 후 Mendix의 승인이 필요합니다. 승인을 위해 제출되면 귀하와 조직 내 사용자가 다른 컴포넌트에도 사용할 수 있습니다.

새 공개 컴포넌트에 대한 독점 라이선스를 구성하려면 다음 단계를 따르십시오:

1. **Request New License**를 클릭합니다.
2. [컴포넌트 상세 페이지](/appstore/component-details/)에 표시될 **License Name**을 추가합니다.
3. 사용자가 컴포넌트를 사용하기 위한 이용 약관이 나열된 웹 페이지로 연결되는 **License URL**을 추가합니다. 사용자는 컴포넌트 상세 페이지에서 라이선스 이름을 클릭하여 이 웹 페이지로 이동할 수 있습니다.
4. 새 라이선스에 대한 **Reason**을 추가합니다. 이는 Mendix 검토 목적으로만 사용되며, 컴포넌트 상세 페이지에 표시되지 않습니다.
   
### 미디어 및 문서 추가 {#doc}

**Media & Documentation** 탭에서 사용자를 안내하는 리소스를 추가합니다.

1. **Upload Screenshots** 옵션을 사용하여 컴포넌트의 스크린샷을 최대 10개까지 추가합니다.    
   권장 이미지 비율은 16:9입니다.

2. **YouTube Video** 필드에 컴포넌트의 데모 URL을 추가합니다.

3. **Documentation** 필드에 컴포넌트의 요구 사항 및 구성에 대한 세부 정보를 추가합니다.   
   권장 콘텐츠에 대한 템플릿을 따르십시오:

    * 컴포넌트를 제출하려면 다음 섹션을 작성해야 합니다:
        * 컴포넌트의 **Typical usage scenario**
        * 컴포넌트의 **Features and limitations**
    * 다음 섹션은 선택 사항입니다:
        * 모든 **Dependencies** (예: 필수 Studio Pro 버전, 모듈, 이미지 및 스타일)
        * **Installation** 단계 및 세부 정보
        * **Configuration** 단계 및 세부 정보
        * 알려진 **Known bugs**
        * **Frequently Asked Questions**

   이 필드는 서식 있는 텍스트를 지원합니다.
 
4. **Resources** 섹션에서 **GitHub URL**과 같이 사용자에게 유용할 수 있는 리소스의 URL을 최대 5개까지 추가합니다.

5. 컴포넌트를 미리 보려면 **Show Preview**를 클릭하고, 직접 게시하려면 **Publish**를 클릭합니다.

### 컴포넌트 미리 보기

업로드 흐름의 모든 단계가 완료되면 게시하기 전에 컴포넌트를 미리 볼 수 있습니다. **Media & Documentation** 탭에서 **Show Preview**를 클릭합니다. Marketplace에서 실제로 보이는 것과 정확히 동일하게 컴포넌트가 표시됩니다.

미리 보기 창에서 편집 흐름으로 돌아가거나 컴포넌트를 게시할 수 있습니다.   

컴포넌트를 게시하기로 선택하면 다음 두 버튼 중 하나가 표시됩니다:

* **Publish Component** — 새 컴포넌트 또는 컴포넌트 버전을 게시할 때 표시됩니다.
* **Publish Changes** — 기존 컴포넌트의 변경 사항을 게시할 때 표시됩니다.

### 게시 {#publish} 

컴포넌트가 공개인 경우, **Publish Content**를 클릭하면 초안이 Marketplace에 표시되기 전에 Mendix의 검토를 받습니다.

컴포넌트가 비공개인 경우, 초안은 회사 관리자가 확인하거나 선택에 따라 자동으로 게시됩니다. 

컴포넌트가 표시되기까지 잠시 시간이 걸릴 수 있습니다.

승인 프로세스에 대한 자세한 내용은 [거버넌스 프로세스](/appstore/submit-content/governance-process/)를 참조하십시오.

모든 새 공개 컴포넌트 또는 컴포넌트 버전은 QSM을 통해 스캔되며, 취약점이 발견되지 않으면 자동으로 업로드됩니다. 취약점이 있는 경우 Mendix가 컴포넌트 또는 컴포넌트 버전을 수동으로 확인합니다.

## 기존 Marketplace 콘텐츠 업데이트 {#updating}

Mendix Marketplace에 컴포넌트를 게시한 후에는 정기적으로 컴포넌트를 업데이트해야 할 책임이 있습니다. 이는 최신 버전의 종속성, 특히 Mendix Studio Pro와의 호환성을 보장하기 위해 중요합니다. 또한 Mendix가 Marketplace에서 컴포넌트의 품질을 보장할 수 있도록 필요합니다.   

이는 컴포넌트를 모니터링, 유지 관리 및 발전시켜 Marketplace 리스팅이 더 눈에 띄고, 사용자 충성도를 구축하고, 회사의 좋은 평판을 유지해야 함을 의미합니다. 

컴포넌트가 정기적으로 업데이트되지 않으면 Marketplace 리스팅이 공개 가시성에서 제거되도록 분석됩니다.

Mendix는 Platform, Community 및 Premium [지원 카테고리](/appstore/marketplace-content-support/#category)의 컴포넌트에 대해 다음 업데이트를 기대합니다:

* 버그 수정
* 새 기능
* 기능 제거
* 최신 Studio Pro 버전 및 기타 종속성과의 호환성 업데이트

이미 게시된 콘텐츠를 업데이트하려면 다음 단계를 따르십시오:

1. 다음 섹션 중 하나에서 컴포넌트를 찾습니다:

    * **My Content**
    * **Company Content**
    * **Content Group**
    {{% alert color="info" %}}기존 Marketplace 컴포넌트가 특정 콘텐츠 그룹 [콘텐츠](/appstore/home-page/#group-content)로 [콘텐츠 그룹](/appstore/home-page/#content-groups)에 할당된 경우, 해당 그룹의 멤버인 경우에만 컴포넌트를 업데이트할 수 있습니다.{{% /alert %}}

2. 업데이트하려는 컴포넌트 옆의 메뉴 항목을 클릭하고 액세스 권한에 따라 적절한 옵션을 선택합니다: 

   * **Edit**
   * **Unpublish Component**
   * **Add New Version**

    {{% alert color="info" %}}한 번에 하나의 초안 버전만 존재할 수 있으므로, 하나의 초안 버전이 진행 중이면 다른 초안을 시작할 수 없습니다. 진행 중인 초안 버전이 있는 경우, 컴포넌트를 관리하는 페이지에서 **Edit Draft**를 클릭하여 초안을 확인합니다.{{% /alert %}}

3. 위의 [새 Marketplace 콘텐츠 추가](#adding) 섹션에 설명된 대로 모든 컴포넌트 세부 정보를 편집할 수 있습니다.
4. **Package** 페이지의 **Version** 섹션에서 컴포넌트가 새 버전으로 저장되도록 **Major**, **Minor** 및 **Patch** 번호를 업데이트합니다:

    * **Major update** – 이전 버전과의 호환성을 깨는 변경 사항.
    * **Minor update** – 기존 사용을 깨지 않는 새 기능.
    * **Patch** – 버그 또는 보안 문제를 수정하는 작은 변경 사항.

5. **Preview** 페이지에서 지금까지 입력한 컴포넌트의 모든 세부 정보를 검토하고 **Back to Edit** 버튼을 사용하여 필요에 따라 편집할 수 있습니다. 완료되면 **Publish Content**를 클릭합니다.

컴포넌트를 업데이트하는 동안 다음 필드는 편집할 수 없습니다:

* **Component Type**
* **Visibility**
* **Component Source**
* **Studio Pro Version**
* **Release Version**
* **License Type**
