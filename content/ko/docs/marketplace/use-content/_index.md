---
title: "Marketplace 콘텐츠 사용"
url: /appstore/use-content/
weight: 5
description: "Studio Pro에서 Marketplace에 액세스하는 기본 사항을 다루고 앱에 위젯과 모듈을 추가하는 예제를 제공합니다."
no_list: false
aliases:
    - /appstore/general/app-store-content/
    - /community/app-store/use-app-store-content-in-the-modeler/
    - /developerportal/app-store/app-store-content/
    - /developerportal/app-store/use-app-store-content-in-the-modeler/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors "downloading", "widget", and "project-layout" below are mapped, so they should not be removed or changed.
---

## 소개

이 사용 방법 가이드에서는 Studio Pro에서 Marketplace에 액세스하는 기본 사항을 다루고 애플리케이션에 위젯과 모듈을 추가하는 예제를 제공합니다.

{{% alert color="warning" %}}
Parallels가 있는 Mac에서 Studio Pro를 사용하는 경우, Studio Pro에서 Marketplace의 로딩 시간을 개선하기 위해 [이 업데이트](https://kb.parallels.com/112091#section7)를 참조하십시오.
{{% /alert %}}

## Marketplace 콘텐츠 설치 {#install}

Marketplace 컴포넌트를 설치하는 세 가지 방법이 있으며, 다음 섹션에 설명되어 있습니다.

### Studio Pro에서 콘텐츠 찾기 및 다운로드 {#downloading}

#### Studio Pro 9.19 이상 {#current-sp}

Studio Pro [9.19](/releasenotes/studio-pro/9.19/) 이상에서 콘텐츠를 다운로드하려면 다음 단계를 따르십시오:

1. Studio Pro를 열고 Mendix 자격 증명으로 로그인합니다.

2. Marketplace에서 컴포넌트를 설치하려는 앱을 엽니다.

3. Studio Pro에서 Marketplace를 열려면 상단 바의 **View** 메뉴를 클릭하고 **Marketplace**를 선택하거나, 상단 바 오른쪽의 Marketplace 아이콘을 클릭합니다.

    {{< figure src="/attachments/appstore/use-content/toolbar.png" alt="Marketplace icon" class="no-border" >}}

    **Marketplace** 패널이 열립니다.

    {{< figure src="/attachments/appstore/use-content/marketplace.png" alt="Search result for rating" class="no-border" >}}

4. 다음과 같은 방법으로 Marketplace 콘텐츠를 탐색할 수 있습니다:
    * **Search in the Marketplace**를 사용하여 다운로드하려는 컴포넌트를 찾습니다.    
      웹 Marketplace의 [Use in Studio Pro 버튼](/appstore/component-details/)을 통해 복사한 콘텐츠 ID를 여기에 붙여넣을 수 있습니다.
    * [Marketplace 콘텐츠 유형](/appstore/overview/)에 해당하는 **Categories** 및 **Subcategories** 드롭다운 메뉴를 통해 필터링합니다.
    * **All Content**, **My Company Content** 또는 **Platform-Supported Content**로 필터링합니다.

5. 패널에서 컴포넌트를 선택하여 세부 정보를 봅니다.

    {{< figure src="/attachments/appstore/use-content/component-details.png" alt="Details of Blank App example component" class="no-border" >}}

    여기에 표시되는 세부 정보는 온라인 Marketplace의 [컴포넌트 상세 페이지](/appstore/component-details/)에서 볼 수 있는 것과 동일합니다.

6. **Download**를 클릭하여 컴포넌트를 다운로드합니다.     
   Studio Pro 버전과 호환되는 올바른 버전의 컴포넌트가 애플리케이션에 직접 통합됩니다. 기본적으로 컴포넌트의 가장 높은 올바른 버전이 다운로드됩니다. 이전 컴포넌트 버전을 다운로드하려면 **Releases** 탭으로 이동하여 원하는 버전의 **Download**를 클릭합니다.    
   버전 호환성은 위젯에는 적용되지 않습니다.

7. 컴포넌트 유형에 따라 다음 섹션 중 하나로 이동합니다:

    * [위젯](#widgets)
    * [모듈](#modules)
    * [Extension](#extensions)
    * [앱](#apps)

##### 위젯 {#widgets}

위젯을 다운로드하면 모듈이 성공적으로 가져왔다는 팝업 창이 표시됩니다. **OK**를 클릭하면 **Toolbox**에서 가져온 위젯을 찾을 수 있습니다.

##### 모듈 {#modules}

모듈을 다운로드하면 **Import Module** 대화 상자가 열리며, 다음 단계를 수행해야 합니다:

1. 다음 옵션 중 하나를 선택합니다:

   * **Add as a new module** (앱에 처음 다운로드할 때 기본 옵션) – 이 옵션을 선택하면 앱에 새 Entity와 Attribute가 생성됩니다.

   * **Replace existing module** (모듈이 이미 앱에 존재하는 경우 기본 옵션) – 이 옵션을 선택하면 어떤 **Module to replace**를 지정해야 합니다.

     {{% alert color="warning" %}}기존 모듈을 변경한 경우, **Replace existing module** 옵션을 선택하면 변경한 모든 내용이 대체됩니다. 예를 들어, 이름이 변경된 Entity, Attribute 및 Association과 데이터베이스에 표시된 해당 테이블 및 열이 모두 대체됩니다. 데이터 유형을 변경한 경우 사용자 데이터도 영향을 받을 수 있습니다. Entity, Attribute 또는 Association을 변경하지 않은 경우 사용자 데이터는 변경되지 않습니다. 자세한 내용은 [Attribute Type Migration](/refguide/attributes-type-migration/)을 참조하십시오.{{% /alert %}}

2. **Import**를 클릭합니다.
   
3. 모듈이 성공적으로 가져왔다는 팝업 창이 나타날 때까지 기다린 다음 **OK**를 클릭합니다.     

**App Explorer**에서 가져온 모듈을 찾을 수 있습니다. 

##### Extension {#extensions}

[Extension](/appstore/modules/#introduction)을 다운로드하면 경고 대화 상자가 열립니다.

* Extension을 신뢰하면 **Trust module and enable extension**을 클릭합니다.

* Extension을 신뢰하지 않기로 결정하면 애플리케이션을 다시 로드할 때마다 Extension을 신뢰할지 여부를 묻습니다. 

확인 팝업 창에서 **OK**를 클릭합니다. Extension이 설치되고 사용할 준비가 되었습니다.    
설치한 Extension에 따라 앱의 특정 위치에 기능이 나타납니다. 사용 방법에 대한 자세한 내용은 Extension별 문서를 참조하십시오.

Extension을 신뢰하지 않고 완전히 제거하려면 add-on 모듈을 제거할 수 있습니다.

{{< figure src="/attachments/appstore/use-content/trust-extension.png" alt="trust extension" >}}

##### 앱 {#apps}

앱을 다운로드하면 **Download Marketplace App** 대화 상자가 열리며, 다음 단계를 수행해야 합니다:

1. 앱이 저장될 위치를 선택합니다:  

   * **New Mendix Team Server**
   * **Existing Mendix Team Server**
   * **Locally on disk**

2. 저장 선택에 따라 필요한 설정을 구성합니다.
3. **OK**를 클릭합니다.    
   앱이 다운로드되면 Studio Pro에서 자동으로 열립니다.

#### Studio Pro 9.18 이상

Studio Pro [9.18](/releasenotes/studio-pro/9.18/) 이상에서 콘텐츠를 다운로드하려면 다음 단계를 따르십시오:

1. Studio Pro를 열고 Mendix 자격 증명으로 로그인합니다.
2. Marketplace에서 컴포넌트를 설치하려는 앱을 엽니다.
3. 상단 메뉴 바에서 Marketplace 아이콘을 클릭하여 Studio Pro에서 엽니다. Studio Pro 내에서 Marketplace가 열립니다. 왼쪽의 **Categories** 메뉴 항목은 사용 가능한 콘텐츠 유형의 개요를 제공합니다.
4. **Search** 바를 사용하여 다운로드하려는 컴포넌트를 찾습니다. Studio Pro 내의 Marketplace 콘텐츠 검색 결과는 동기화 문제로 인해 온라인 [Marketplace](/appstore/overview/)의 결과와 다를 수 있습니다.
5. 컴포넌트를 클릭하거나 오른쪽의 **Read more** 버튼을 클릭하여 컴포넌트의 세부 정보를 표시합니다.
6. **Download**를 클릭하여 컴포넌트를 다운로드합니다.     
   Studio Pro 버전과 호환되는 올바른 버전의 컴포넌트가 애플리케이션에 직접 통합됩니다. 기본적으로 컴포넌트의 가장 높은 올바른 버전이 다운로드됩니다. 이전 컴포넌트 버전을 다운로드하려면 **Releases** 탭으로 이동하여 원하는 버전의 **Download**를 클릭합니다.    
   버전 호환성은 위젯에는 적용되지 않습니다.
7. 컴포넌트 유형에 따라 다음 섹션 중 하나로 이동합니다:

   * [위젯](#widgets)
   * [모듈](#modules)
   * [앱](#apps)

### Studio Pro의 App Explorer에서 콘텐츠 가져오기 {#import}

{{% alert color="info" %}}이 절차는 [add-on 및 Solution 모듈](/refguide/module-settings/#module-type)을 포함한 [모듈](/appstore/modules/)에 적용됩니다.{{% /alert %}}

온라인 Mendix Marketplace에서 다운로드한 콘텐츠를 Studio Pro로 가져오려면 다음 단계를 따르십시오:

1. [Marketplace](https://marketplace.mendix.com/)로 이동하여 Mendix 자격 증명으로 로그인합니다.
2. 온라인 Marketplace에서 다운로드하려는 컴포넌트를 검색하고 [컴포넌트 상세 페이지](/appstore/component-details/)를 엽니다.
3. **Usage**에 액세스한 다음 **Version**에서 컴포넌트에 필요한 Studio Pro 버전을 확인합니다. 사용 중인 버전보다 높은 버전이 필요한 컴포넌트는 다운로드하지 마십시오.
4. **Releases** 탭으로 이동하여 원하는 버전을 **Download**합니다. 가능하면 최신 버전의 컴포넌트를 사용하는 것을 권장합니다.
5. **App Explorer**에서 앱을 마우스 오른쪽 버튼으로 클릭한 다음 **Import module package**를 클릭하고 다운로드한 컴포넌트를 선택합니다.    
   **Import Module** 대화 상자가 열립니다. 
6. **Import Module** 대화 상자에서 다음 옵션 중 하나를 선택합니다:

    * **Add as a new module** (앱에 처음 다운로드할 때 기본 옵션) – 이 옵션을 선택하면 앱에 새 Entity와 Attribute가 생성됩니다.
    * **Replace existing module** (모듈이 이미 앱에 존재하는 경우 기본 옵션) – 이 옵션을 선택하면 어떤 **Module to replace**를 지정해야 합니다.

        {{% alert color="warning" %}}기존 모듈을 변경한 경우, **Replace existing module** 옵션을 선택하면 변경한 모든 내용이 대체됩니다. 예를 들어, 이름이 변경된 Entity, Attribute 및 Association과 데이터베이스에 표시된 해당 테이블 및 열이 모두 대체됩니다. 데이터 유형을 변경한 경우 사용자 데이터도 영향을 받을 수 있습니다. Entity, Attribute 또는 Association을 변경하지 않은 경우 사용자 데이터는 변경되지 않습니다. 자세한 내용은 [Attribute Type Migration](/refguide/attributes-type-migration/)을 참조하십시오.{{% /alert %}}
    
7. **Import**를 클릭합니다. 
8. 모듈이 성공적으로 가져왔다는 팝업 창이 나타날 때까지 기다린 다음 **OK**를 클릭합니다. 

**App Explorer**에서 가져온 모듈을 찾을 수 있습니다.

### 앱 디렉토리에 콘텐츠 수동 추가 {#add}

온라인 Mendix Marketplace에서 다운로드한 콘텐츠를 Studio Pro에 수동으로 추가하려면 다음 단계를 따르십시오:

1. [Marketplace](https://marketplace.mendix.com/)로 이동하여 Mendix 자격 증명으로 로그인합니다.
2. 온라인 Marketplace에서 다운로드하려는 컴포넌트를 검색하고 [컴포넌트 상세 페이지](/appstore/component-details/)를 엽니다.
3. **Usage** > **Version**을 확인하여 컴포넌트에 필요한 Studio Pro 버전을 봅니다. 사용 중인 버전보다 높은 버전이 필요한 컴포넌트는 다운로드하지 마십시오.
4. **Download**를 클릭하여 최신 버전의 컴포넌트를 다운로드합니다. 또는 이전 컴포넌트 버전을 다운로드하려면 **Releases** 탭으로 이동하여 원하는 버전을 **Download**합니다.
5. Studio Pro를 열고 Mendix 자격 증명으로 로그인합니다.
6. Marketplace 컴포넌트를 설치하려는 앱을 엽니다.
7. 메뉴 바에서 **App** > **Show App Directory in Explorer**를 클릭합니다. 앱 디렉토리가 열립니다.
8. 다음과 같이 앱 디렉토리에 컴포넌트를 추가합니다:
    * 위젯인 경우 **widgets** 폴더에 추가합니다.
    * *.mxmodule* 파일인 경우 **modules** 폴더에 추가합니다. 이 폴더가 아직 존재하지 않으면 만들어야 합니다.
9. 메뉴 바에서 **App** > **Synchronize App Directory**를 클릭합니다.
10. 동기화가 완료될 때까지 기다립니다.

**Toolbox**에서 추가된 위젯을 찾거나 **App Explorer**에서 추가된 *.mxmodule*을 찾을 수 있습니다.

## Studio Pro에서 콘텐츠 사용

컴포넌트를 다운로드한 후 앱에서 사용할 수 있습니다. 컴포넌트가 어떻게 작동하는지에 대한 자세한 정보는 Marketplace의 컴포넌트 페이지의 **Documentation** 탭을 확인하십시오.

### 위젯 사용  {#widget}

#### 페이지에 위젯 추가

Marketplace에서 앱에 위젯을 [설치](#install)한 후, Studio Pro를 통해 Marketplace에서 위젯을 추가하는 두 가지 방법이 있습니다.

**Toolbox**에서 위젯을 추가하려면 다음 단계를 따르십시오:

1. 위젯을 추가하려는 페이지를 엽니다.
2. **Toolbox**에서 위젯 이름을 검색합니다.

    {{< figure src="/attachments/appstore/use-content/toolbox-rating.png" alt="Rating widget found in the toolbox" class="no-border" >}}

3. 페이지에서 위젯을 원하는 위치로 드래그합니다.

툴바의 **Add widget** 옵션을 사용하여 위젯을 추가하려면 다음 단계를 따르십시오:

1. 위젯을 추가하려는 페이지의 툴바에서 **Add widget**을 클릭합니다.    
    **Select Widget** 대화 상자가 열립니다.

    {{< figure src="/attachments/appstore/use-content/add-widget.png" alt="Add widget" class="no-border" >}}

2. **Filter** 바에 위젯 이름을 입력합니다.

    {{< figure src="/attachments/appstore/use-content/select-widget.png" alt="Rating widget highlighted in Select Widget dialog box" class="no-border" >}}

3. 위젯을 클릭한 다음 **Select**를 클릭합니다. 
4. 페이지에서 위젯을 배치하려는 곳을 클릭합니다.    
    마우스 포인터가 있는 위치에 위젯이 추가됩니다.

    {{< figure src="/attachments/appstore/use-content/widget-dropped-in-page.png" alt="Rating widget in the page" class="no-border" >}}

#### 위젯을 새 버전으로 업데이트

앱에서 위젯을 새 버전으로 업데이트하려면, Marketplace로 이동하여 올바른 버전을 다운로드하고 앱에 [설치](#install)합니다.

##### 업데이트할 위젯의 추가된 번역 유지

여러 언어가 포함된 앱에서 하나의 언어만 제공되는 가져온 Marketplace 위젯을 업데이트해야 하고, 필요한 추가 언어에 대해 수동으로 번역을 추가한 경우, 다음 단계를 따라 추가 번역을 유지할 수 있습니다:

1. 위젯의 번역을 [Excel로 내보내기](/refguide/batch-translate/#export)하여 유지합니다.
2. 이전 섹션에 설명된 단계를 통해 위젯을 업데이트합니다.
3. 유지한 번역을 Excel에서 [가져옵니다](/refguide/batch-translate/#import).

#### 위젯 구성

위젯을 페이지에 배치하면 [Errors](/refguide/errors-pane/) 패널에 새 오류가 나타날 수 있습니다. 아직 위젯을 구성해야 하기 때문입니다. 이 절차에서는 **Ratings** 위젯을 예제로 사용합니다.

위젯을 구성하려면 다음 단계를 따르십시오:

1. **Errors** 패널로 이동하여 오류 메시지를 확인합니다. 이 오류는 **Rating** 위젯을 페이지에 배치한 후 표시됩니다.

    {{< figure src="/attachments/appstore/use-content/widget-errors.png" alt="Errors pane" class="no-border" >}}

2. 페이지에서 **Rating** 위젯을 더블 클릭합니다.    
    **Edit Rating** 대화 상자가 열리고 **Attribute** 필드에 **(none)**이 표시됩니다. 이는 Attribute가 할당되지 않아 오류가 발생한 것을 의미합니다.

    {{< figure src="/attachments/appstore/use-content/edit-rating.png" alt="Edit Rating dialog box" class="no-border" >}}

3. **Select**를 클릭하여 Attribute를 선택합니다. 이 예제에서는 **ProductRating** Attribute를 선택합니다. 이는 이미 만든 Entity의 Attribute입니다.

    {{< figure src="/attachments/appstore/use-content/select-attribute.png" alt="ProductRating selected in Select Attribute dialog box" class="no-border" >}}

4. **Edit Rating** 대화 상자에서 **OK**를 클릭합니다.     
    **Errors** 패널의 오류가 사라집니다.

### 모듈 사용 {#module}

앱에 모듈을 [설치](#install)한 후 사용할 수 있습니다.

Marketplace에서 다운로드한 모듈은 개발 모듈과 구분하기 위해 밝은 파란색 아이콘을 가지고 있습니다.

#### 모듈을 새 버전으로 업데이트 {#update-module}

앱에서 모듈을 새 버전으로 업데이트하려면 다음 단계를 따르십시오:

1. 새 버전을 다운로드하기 전에, 이 모듈에서만 사용하는 모든 Java 라이브러리를 앱 디렉토리의 **userlib** 폴더에서 제거합니다. Java 라이브러리에는 빈 *[Module].RequiredLib* 파일이 함께 있습니다. 이를 통해 어떤 모듈이 Java 라이브러리를 사용하는지 식별할 수 있습니다. 이를 수행하면 예기치 않은 문제를 유발하는 충돌하는 Java 라이브러리가 발생하지 않습니다. 

2. Marketplace로 이동하여 올바른 버전을 다운로드하고 앱에 [설치](#install)합니다. **Import Module** 대화 상자가 열리면 **Replace existing module**을 선택하고 **Import**를 클릭합니다.

   {{% alert color="warning" %}}기존 모듈을 변경한 경우, **Replace existing module** 옵션을 선택하면 변경한 모든 내용이 대체됩니다. 예를 들어, 이름이 변경된 Entity, Attribute 및 Association과 데이터베이스에 표시된 해당 테이블 및 열이 모두 대체됩니다. Entity, Attribute 또는 Association을 변경하지 않은 경우 사용자 데이터가 유지됩니다. 데이터 유형을 변경한 경우 사용자 데이터도 영향을 받을 수 있습니다. 자세한 내용은 [Attribute Type Migration](/refguide/attributes-type-migration/)을 참조하십시오.{{% /alert %}}

   {{< figure src="/attachments/appstore/use-content/import-module.png" alt="Import Module dialog box" class="no-border" >}}

3. 앱 디렉토리의 **userlib** 폴더에서 중복 Java 라이브러리를 확인합니다. **userlib** 폴더에 동일한 Java 라이브러리의 여러 버전이 포함된 경우 일반적으로 이전 버전을 삭제하고 새 버전만 유지하는 것이 안전합니다.

##### 업데이트할 모듈의 추가된 번역 유지

여러 언어가 포함된 앱에서 하나의 언어만 제공되는 가져온 Marketplace 모듈을 업데이트해야 하고, 필요한 추가 언어에 대해 수동으로 번역을 추가한 경우, 다음 단계를 따라 추가 번역을 유지할 수 있습니다:

1. 모듈의 번역을 [Excel로 내보내기](/refguide/batch-translate/#export)하여 유지합니다.
2. 이전 섹션에 설명된 단계를 통해 모듈을 업데이트합니다.
3. 유지한 번역을 Excel에서 [가져옵니다](/refguide/batch-translate/#import).

#### 모듈 구성

Marketplace에서 다운로드하는 각 모듈은 다릅니다. 일부 모듈은 다른 모듈에 연결되어 있기 때문에 오류를 유발할 수 있습니다. 예를 들어, [Database Replication](/appstore/modules/database-replication/) 모듈을 다운로드한 후 구성을 완료하려면 [Mx Model Reflection](/appstore/modules/model-reflection/) 모듈도 다운로드해야 합니다. 문제가 발생하면 항상 Marketplace에서 이 모듈의 **Documentation** 탭을 확인하여 설치 가이드라인 및 종속성에 대한 세부 정보를 확인하십시오.

다운로드할 수 있는 일부 모듈에는 자체 사용자 역할이 포함될 수 있습니다. 앱의 **Security level**이 **Prototype/demo** 또는 **Production**으로 설정된 경우, 모듈 역할을 앱의 해당 사용자 역할에 매핑해야 합니다.

### Starter App 사용

**Create New App**을 통해 Starter App을 다운로드하면 선택한 저장 위치에 새 앱 구조가 생성됩니다. **Download**를 클릭하면 앱을 어떻게 만들지 지정할 수 있는 창이 표시됩니다.

{{% alert color="info" %}}
비어 있지 않은 기존 리포지토리에서는 새 앱을 만들 수 없습니다.
{{% /alert %}}

## 앱에서 Marketplace 콘텐츠 삭제

앱에서 위젯을 제거하려면 다음 단계를 따르십시오:

1. Studio Pro에서 메뉴 바의 **App**으로 이동한 다음 **Show App Directory in Explorer**를 클릭하여 앱 디렉토리를 엽니다.
2. **widgets** 폴더로 이동합니다.
3. 위젯의 *.mpk* 파일을 제거합니다.
4. Studio Pro에서 **App**으로 이동한 다음 **Synchronize App Directory**를 클릭합니다.

앱에서 모듈과 사용자 데이터를 제거하려면 다음 단계를 따르십시오:

1. **App Explorer**에서 삭제하려는 모듈을 찾습니다.
2. 모듈을 마우스 오른쪽 버튼으로 클릭하고 팝업 메뉴에서 **Delete**를 선택합니다. 경고 팝업 창이 표시됩니다.

    {{% alert color="warning" %}} 모듈을 삭제하면 나중에 모듈을 다시 설치하더라도 모든 사용자 데이터가 손실됩니다. 기존 모듈을 다른 버전으로 교체하려면 모듈을 삭제하지 말고 대신 [업데이트](#update-module)하십시오.{{% /alert %}}

3. 모듈과 기존 사용자 데이터를 삭제하려면 **Delete module and user data**를 클릭합니다.

## 더 읽어보기

* [앱, 모듈, 위젯 및 문서 가져오기 및 내보내기](/refguide/import-and-export/)
* [페이지 편집기의 공통 속성](/refguide/common-widget-properties/)
* [애플리케이션 개발 속도를 높이는 나의 Top 5 Mendix 위젯](https://www.mendix.com/blog/top-5-mendix-widgets-speeding-application-development/)

## 이 카테고리의 기타 문서
