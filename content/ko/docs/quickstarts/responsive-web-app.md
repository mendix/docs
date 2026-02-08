---
title: "반응형 웹 앱 만들기"
url: /quickstarts/part1/
weight: 10
description: "반응형 웹 프로필에서 앱을 만드는 기본 사항을 알아보세요."
tags: ["hello world", "microflows", "widgets", "app", "nanoflow", "app development"]
aliases:
    - /refguide/quickstart-part1/
    - /refguide9/quickstart-part1/
---

## 소개

이 가이드는 Mendix 플랫폼을 시작하고 **Studio Pro IDE**(통합 개발 환경)를 사용하여 첫 번째 앱을 개발하는 단계를 안내합니다. 직원 데이터를 저장하는 웹 앱을 만들게 됩니다. Mendix로 훨씬 더 복잡한 애플리케이션을 만들 수 있지만, Studio Pro에 익숙해질 수 있도록 간단한 사용 사례부터 시작합니다.

이 가이드를 따라하면 다음을 수행할 수 있습니다:

* Studio Pro를 설치하고 탐색하는 방법 학습
* 플랫폼의 주요 기능 탐색
* 지식을 심화하기 위한 리소스 및 학습 자료 찾기

## Mendix 알아보기

Mendix 플랫폼은 다음으로 구성됩니다:

* **Mendix Portal** - 개발자, 관리자 및 기타 이해관계자가 전체 애플리케이션 수명 주기를 관리하고 협업할 수 있는 웹 기반 인터페이스입니다.

* **Studio Pro** - 개발자가 Mendix 애플리케이션을 생성, 보기 및 편집할 수 있는 데스크톱 IDE입니다.

이 가이드를 따를 때 [최신 버전의 Studio Pro](https://marketplace.mendix.com/link/studiopro/)를 사용하고 있는지 확인하세요.

{{% alert type="info" %}}
Mendix에서 앱을 만들면 Mendix Cloud(퍼블릭 클라우드 서비스)에 [무료 앱 환경](/developerportal/deploy/mendix-cloud-deploy/#free-app)이 자동으로 설정됩니다. 추가 구성이나 인프라 설정 없이 바로 앱을 실행하고 테스트할 수 있습니다.
{{% /alert %}}

## 사전 요구 사항

시작하기 전에 다음 단계를 완료하세요:

* 무료 [Mendix 계정](https://signup.mendix.com/link/signup)을 만드세요.
* Studio Pro를 [다운로드](https://marketplace.mendix.com/link/studiopro)하고 [설치](/refguide/install/)하세요.
* Studio Pro를 열고 Mendix 계정 정보로 로그인하세요(**웹 로그인으로 이동** 클릭):

    {{< figure src="/attachments/quickstarts/part1/3. login.png" width="450px" alt="Studio Pro에 로그인">}}

## 앱 만들기

**새 앱 만들기**를 클릭하여 Studio Pro에서 직접 첫 번째 앱을 만들 수 있습니다. 다음으로 **Mendix Portal에서 새 앱 만들기**를 선택하세요(오프라인으로 작업하는 경우에는 로컬에서 빈 템플릿만 만들 수 있습니다).

{{< figure src="/attachments/quickstarts/part1/4.1 CreateNewApp.png" width="450px" alt="Studio Pro에 로그인">}}

**시작점 선택** 페이지가 열립니다.

[Mendix Marketplace](https://marketplace.mendix.com/link/contenttype/102)에서 다양한 스타터 앱을 선택할 수 있습니다. 웹 및 네이티브 모바일부터 GenAI 및 증강 현실까지, 플랫폼에서 지원하는 수십 개의 템플릿과 커뮤니티에서 만든 더 많은 템플릿을 사용할 수 있습니다.

**빈 웹 앱 템플릿**을 선택하고 다음 화면에서 **이 시작점 사용**을 클릭하세요:

{{< figure src="/attachments/quickstarts/part1/4.2 UseThisStartingPoint.png" width="450px" alt="빈 웹 앱 템플릿을 시작점으로 사용">}}

다음으로 앱 이름, 온라인 서비스 활성화 여부, 프로젝트 파일 경로 및 앱의 기본 언어를 입력하는 창이 나타납니다. **앱 이름을 입력**하고 나머지는 모두 **기본값**으로 두세요:

{{< figure src="/attachments/quickstarts/part1/4.3 ConfirmCreateApp.png" width="450px" alt="앱 만들기를 클릭하여 선택을 확인하세요.">}}

**앱 만들기**를 클릭하여 확인하세요.

{{% alert type="info" %}}
스타터 앱은 네비게이션, 레이아웃, 공통 컴포넌트 등 기본 구조를 제공하는 즉시 사용 가능한 앱 템플릿으로, 처음부터 시작할 필요가 없습니다. 빠르게 시작할 수 있으면서도 필요에 따라 앱을 완전히 커스터마이징할 수 있습니다.
{{% /alert %}}

## Studio Pro 인터페이스 탐색

**Studio Pro**에서 앱이 열리고 **환영 페이지**가 표시됩니다. 계속하기 전에 주요 인터페이스를 간단히 둘러보겠습니다:

{{< figure src="/attachments/quickstarts/part1/5. StudioProInterface.png" width="450px" alt="Studio Pro 인터페이스를 둘러보세요">}}

### 상단 바

상단 바에는 다음과 같은 주요 요소가 포함됩니다:

* Mendix Portal로의 링크가 있는 글로벌 네비게이션 메뉴(벤토 메뉴)
* 배포 패키지 생성, 버전 관리 서버에 업로드 등 기본 앱 개발 작업을 위한 여러 드롭다운 메뉴
* 다음을 수행할 수 있는 빠른 액세스 버튼:

    * 앱 게시, 로컬 실행 및 보기
    * [Community](https://community.mendix.com/index3.html), [Marketplace](https://marketplace.mendix.com/link/contenttype/102) 및 [Maia](/refguide/mendix-ai-assistance/#maia-capabilities-in-mendix-studio-pro) 접근

### 작업 영역

**화면 중앙**에는 현재 열려 있는 문서 탭이 표시되는 **작업 영역**이 있습니다. IDE 내에서 애플리케이션 컴포넌트를 시각적으로 설계, 모델링 및 구성하는 주요 공간입니다. 텍스트 기반 프로그래밍 IDE의 코드 편집기와 같다고 생각하면 됩니다.

{{% alert type="info" %}}
**Studio Pro**를 처음 실행하면 **Welcome** 탭이 표시됩니다. 여기에서 다음에 접근할 수 있습니다:

* [Maia Learn](/refguide/maia-learn/) – 시작하는 데 도움이 되는 학습 자료

* [Maia Chat](/refguide/maia-chat/) – 빠른 지원 및 안내를 위한 AI 기반 어시스턴트

앱을 만들기 전에 Mendix 개발의 기본 개념을 익히기 위해 소개 비디오를 시청하는 것을 권장합니다.
{{% /alert %}}

### 앱 탐색기

화면 **왼쪽**에는 앱의 전체 구조를 보여주는 **앱 탐색기(App Explorer)**가 있습니다. 폴더와 모듈로 그룹화된 개별 파일(문서)과 설정으로 구성됩니다.

### 도킹 가능한 패널

화면 **오른쪽**과 **하단**에는 컨텍스트별 정보와 도구를 표시하는 **도킹 가능한 패널**이 있습니다. 데이터 관리, 변경 사항 및 오류 확인, AI 기능 접근 등을 위한 패널이 포함됩니다. 이러한 패널의 크기를 조정하거나, 도킹하거나, 숨겨서 워크플로우에 맞게 작업 공간을 커스터마이징할 수 있습니다. 더 많은 옵션은 **View** 메뉴 항목에서 찾을 수 있습니다.

## 모듈

앱을 만들기 시작하기 전에 **모듈**의 개념을 이해하는 것이 중요합니다. 모듈은 Mendix 애플리케이션의 기능을 별도의 부분으로 분할하는 방법입니다. 모듈과 다양한 모듈 유형에 대해 [여기](/refguide/modules/)에서 자세히 알아보세요.

각 모듈에는 다양한 사용자와 사용 사례에 맞게 구성할 수 있는 자체 보안 및 접근 설정이 있습니다. 모듈은 다른 모듈의 데이터, 로직 및 페이지에 접근할 수 있습니다.

앱이 로컬 또는 클라우드 환경에 배포되면 모든 모듈이 하나의 패키지로 번들됩니다.

## 도메인 모델(Domain Model) 만들기

Studio Pro 인터페이스에 익숙해진 후 데이터 모델부터 시작하여 앱을 만들 수 있습니다. Mendix에서는 [도메인 모델(Domain Model)](/refguide/domain-model/)을 사용하여 앱의 데이터 구조를 정의합니다. 각 모듈에는 해당 [모듈](/refguide/modules/) 내에서 사용되는 데이터를 설명하는 도메인 모델이 있습니다.

{{% alert type="info" %}}
도메인 모델은 [엔티티(Entity)](/refguide/entities/)(전통적인 SQL의 테이블과 유사)로 구성됩니다. 엔티티에는 [속성(Attribute)](/refguide/attributes/)(필드와 유사)이 있습니다. [속성](/refguide/entities/#properties)은 엔티티의 이름을 정의합니다. 엔티티는 일대일, 일대다 또는 다대다로 서로 관계를 맺을 수 있습니다. 엔티티 간의 관계를 [연관(Association)](/refguide/associations/)이라고 합니다. 엔티티는 다른 엔티티의 [일반화(Generalization)](/refguide/generalization-and-association/#generalization-specialization-and-inheritance)를 생성하여 속성을 상속받을 수 있습니다.
{{% /alert %}}

### 엔티티 만들기

엔티티를 만들려면 다음 단계를 따르세요:

1. **앱 탐색기**(왼쪽)에서 **MyFirstModule** 아래의 **Domain Model**을 더블 클릭합니다.
1. **도구 상자**(오른쪽)에서 엔티티(파란색 상자)를 중앙 **작업 영역**으로 드래그 앤 드롭합니다.
1. **작업 영역**에서 새로 추가된 엔티티를 더블 클릭하여 **속성** 대화 상자를 엽니다.
1. 엔티티 이름을 **Employee**로 지정합니다:

    {{< figure src="/attachments/quickstarts/part1/7.1 EntityPropertiesWindow.png" width="450px" alt="Employee 엔티티의 속성 창">}}

### 속성(Attribute) 만들기

**Employee**라는 새로운 영속 엔티티를 만들었습니다. 이는 엔티티와 그 속성이 커밋(Commit)될 때 데이터베이스에 저장된다는 것을 의미합니다. 다음으로 속성을 추가해야 합니다. 직원의 이름, 직무, 직원 ID에 대한 필드만 추가하면 됩니다:

1. 속성 대화 상자에서 **Attributes** 아래의 **New**를 클릭합니다.
1. 속성 이름을 **FirstName**으로 지정하고 다른 설정은 모두 기본값으로 두고 **OK**를 클릭합니다.
1. 위 단계를 반복하여 **LastName**과 **JobRole**이라는 두 개의 **문자열(String)** 속성을 추가합니다.
1. **EmployeeID**라는 마지막 속성을 **Autonumber**(자동 생성 번호)로 추가합니다.
1. OK를 클릭하여 속성 대화 상자를 닫습니다:

    {{< figure src="/attachments/quickstarts/part1/7.2 CreateAttributes.png" width="450px" alt="엔티티에 속성 만들기">}}

{{% alert type="info" %}}
[Maia for Domain Model](/refguide/maia-for-domain-model/)을 사용하여 애플리케이션을 설명하는 것만으로 도메인 모델을 만들 수 있습니다. 이는 입력을 기반으로 도메인 모델을 생성하는 AI 기반 도구입니다.

사용하려면 **작업 영역**에서 **Maia for Domain Model**을 클릭한 다음 오른쪽 채팅 상자에 애플리케이션을 설명하세요.

이 경우 Maia에게 다음과 같이 요청할 수 있습니다: "직원 정보를 저장하는 도메인 모델을 만들어 주세요: 이름, 성, 직무, 직원 ID."
{{% /alert %}}

### 연관(Association) 추가하기

직원은 자신의 역할과 관련된 중요한 문서와 계약서를 작성하고 업로드해야 합니다. 이러한 문서를 저장하기 위해 도메인 모델을 수정해야 합니다. 이를 위해 Document라는 새 엔티티를 만들고 연관을 사용하여 Employee 엔티티에 연결할 수 있습니다. 연관은 엔티티 간의 관계를 정의합니다. 연관은 일대다, 일대일 또는 다대다일 수 있습니다:

1. 새 엔티티를 추가하고 이름을 Document로 지정합니다.
1. Generalization 옆의 **Select**를 클릭합니다.
1. **FileDocument**를 검색하고 선택합니다.
1. **OK**를 클릭하여 선택을 확인합니다.
1. 새 Document 엔티티를 클릭하여 선택합니다. 그런 다음 선택된 상태에서 테두리에서 Employee 엔티티 쪽으로 **클릭하여 드래그**합니다. 선이 나타나 Employee 엔티티에 연결됩니다. 이것이 일대다(1명의 직원이 여러 문서를 업로드할 수 있음)로 만들어진 연관입니다:

    {{< figure src="/attachments/quickstarts/part1/7.3 CreateAssociation.png" width="450px" alt="두 엔티티 간의 연관 만들기">}}

{{% alert type="info" %}}
**일반화(Generalization)**를 사용하면 엔티티가 다른 엔티티의 속성을 상속받을 수 있습니다. 엔티티가 다른 엔티티의 일반화인 경우 원래 엔티티의 모든 속성을 상속받습니다. 이 경우 Document는 FileDocument의 일반화이므로 파일로 간주되는 모든 것(이미지, PDF, Microsoft Office 문서 등)을 저장할 수 있습니다.
{{% /alert %}}

## 사용자 인터페이스 만들기

도메인 모델을 만들었으므로 이제 애플리케이션의 프론트엔드를 개발할 수 있습니다. 페이지에는 추가, 편집 또는 삭제할 수 있는 일부 요소가 미리 채워져 있습니다. 페이지 상단에 **Home** 레이블과 그 아래에 환영 텍스트가 표시됩니다.

### 페이지 요소 추가

1. 앱 탐색기에서 **MyFirstModule** 아래의 **Home_Web**을 더블 클릭합니다
1. **Home 레이블**을 선택하고 입력을 시작하여 캡션을 Employee Overview로 업데이트합니다.
1. 아래의 **Getting Started** 레이블을 선택하고 마우스 오른쪽 버튼을 클릭하여 삭제를 선택하거나 키보드의 Delete 키를 눌러 삭제합니다.
1. 화면에 미리 채워진 다른 모든 콘텐츠를 **삭제**합니다(요소를 선택하고 키보드의 Delete 키를 누릅니다)
1. **도구 상자(Widgets > Data containers)**에서 **Data Grid 2**를 **작업 영역**의 페이지로 드래그 앤 드롭합니다.
1. Data Grid 요소를 **더블 클릭**하여 속성을 엽니다.
1. **Data source**에서 **edit**를 클릭한 다음 **Type**에 **Database**가 선택되어 있는지 확인합니다.
1. **General 탭**에서 **Entity** 옆에 만들어둔 **Employee 엔티티**를 선택하고 **OK**를 클릭합니다.
1. Studio Pro에서 컬럼을 선택하라는 메시지가 표시되면 모든 것을 선택한 채로 두고 **Generate**를 클릭합니다.
1. **OK**를 클릭하여 속성 창을 닫습니다:

    {{< figure src="/attachments/quickstarts/part1/8.1 DataGrid2.png" width="450px" alt="Employee 엔티티에 연결된 Data Grid 2">}}

{{% alert type="info" %}}
Data Grid는 컨텍스트 위젯(Context Widget)입니다. 위젯을 사용하여 도메인 모델의 데이터를 표시하려면 위젯이 컨텍스트 위젯(Data View, Data Grid, Template Grid, List View가 컨텍스트 위젯의 예입니다) 내에 있어야 합니다.
{{% /alert %}}

### 페이지 요소 편집

다음으로 페이지의 일부 요소를 수정해야 합니다.

1. **Data Grid 2**에 **New Employee**라는 캡션이 있는 버튼이 있어야 합니다. 버튼에 페이지가 연결되지 않았음을 나타내는 빨간색 알림이 옆에 있을 것입니다. 버튼을 마우스 오른쪽 버튼으로 클릭하고 **Generate on click page**를 선택합니다.
1. 대화 상자에서 새 페이지의 **이름**을 Employee_NewEdit로 입력합니다.
1. Navigation layout에서 드롭다운을 클릭하고 **PopupLayout(Atlas_Core)**을 선택합니다.
1. 페이지의 **Form Vertical 레이아웃**을 선택하고 **OK**를 클릭합니다:

    {{< figure src="/attachments/quickstarts/part1/8.2a AddNewPage.png" width="450px" alt="Employee_NewEdit라는 새 페이지 추가">}}

1. **Data Grid 2**에는 연필 이미지가 있는 또 다른 버튼이 있습니다. 이 버튼도 사용자가 직원 세부 정보를 편집할 수 있도록 방금 만든 동일한 페이지에 연결해야 합니다. 버튼을 **마우스 오른쪽 버튼으로 클릭**하고 **Select on click page**를 선택한 다음 방금 만든 **Employee_NewEdit** 페이지를 선택합니다.
1. 다음으로 **Employee_NewEdit** 페이지를 **엽니다**.
1. 도구 상자에서 Employee ID 필드 아래에 **Data Grid 2**를 페이지에 **추가**합니다. **더블 클릭**하여 속성을 엽니다.
1. **Data source** 옆의 **Select**를 클릭합니다.
1. **Document 엔티티**(단, 페이지 파라미터 "Employee"를 통해)를 검색하고 select를 클릭합니다:

    {{< figure src="/attachments/quickstarts/part1/8.2b DataOverAssociation.png" width="450px" alt="새 Data Grid 2에서 연관을 통해 연결된 데이터 표시">}}

1. 새 Data Grid 2에는 새 페이지를 연결해야 하는 New 및 Edit 버튼이 있습니다. 다시 한번 버튼을 **마우스 오른쪽 버튼으로 클릭**하고 **Generate page**를 선택합니다.
1. 페이지 **이름**을 **Document_NewEdit**로 지정하고 Navigation Layout에서 **Pop-up 레이아웃**을 선택하고 **Form Vertical 템플릿**을 선택합니다.
1. **OK**를 클릭하여 선택을 확인합니다. (Data Grid 내의 Edit 버튼도 새 페이지에 연결하는 것을 잊지 마세요)

## 애플리케이션 로직 만들기 {#create-application-logic}

앱의 기본 프론트엔드를 만들었으므로 이제 로직을 추가할 수 있습니다. 사용자가 저장을 클릭할 때 직원 세부 정보를 검증하는 마이크로플로우(Microflow)를 추가하겠습니다.

1. **앱 탐색기**의 **Employee_NewEdit** 페이지에서 시작하여 페이지 하단의 저장 버튼을 **마우스 오른쪽 버튼으로 클릭**하고 **on-click 액션 편집**을 선택합니다.
1. on-click 옵션 드롭다운에서 **Call a Microflow**를 선택합니다.
1. Microflow 옆의 **Select**를 클릭합니다.
1. 기존 마이크로플로우를 선택하거나 **새로 만들** 수 있는 창이 나타납니다.
1. **New Microflow**를 클릭하여 만듭니다.
1. 마이크로플로우의 **이름**을 **Act_Employee_NewEdit**로 지정하고 **OK**를 클릭합니다.
1. 새로 만든 마이크로플로우에서 주황색 **결정(Decision)**을 찾아 플로우에 **드래그**합니다.
1. 결정을 **더블 클릭**하여 **속성**을 엽니다.
1. **캡션**을 "Has Firstname?"으로 입력합니다.
1. **Expression**에 "trim($Employee/FirstName)!= empty"를 추가합니다. 이렇게 하면 문자열에서 공백이 제거되고 문자열 속성에 문자가 있는지 확인합니다.
1. 위의 표현식은 **true**와 **false** 결과를 반환하므로 결정에서 **분기 경로**를 만들어야 합니다 - 각 가능한 결과에 대한 경로입니다. **결정**을 선택한 다음 모서리에서 **클릭하여 드래그**하여 새 대체 경로를 만듭니다. 두 경로를 **마우스 오른쪽 버튼으로 클릭**하고 **condition value**에서 true와 false를 선택하여 어떤 경로가 true 결과이고 false 결과인지 **정의**하세요.
1. **false 경로**에 **validation feedback 액션**을 추가합니다. 더블 클릭하여 **속성**을 열고 다음 세부 정보를 입력한 다음 **OK**를 클릭합니다:

1. Variable → Employee
1. Member → FirstName
1. Template → Please enter a Firstname for the employee

1. 이제 **true 경로**에서 **LastName** 및 **JobRole** 속성에 대해서도 이 단계를 반복합니다.

 a. 시간을 절약하기 위해 결정과 validation feedback 액션을 복사하여 붙여넣을 수 있습니다(단, 각 속성에 대해 액션을 업데이트하는 것을 잊지 마세요)

1. 플로우의 true 경로 끝에 **commit 액션**을 추가합니다. 액션을 더블 클릭하여 속성을 열고 Object or List에 **Employee**가 선택되어 있는지 확인하고 **refresh in client**를 **Yes**로 변경합니다. **OK**를 클릭하여 창을 닫습니다.
1. commit 액션 후에 **close page 액션**을 추가합니다:

    {{< figure src="/attachments/quickstarts/part1/9. Microflow.png" width="450px" alt="완성된 검증 마이크로플로우">}}

## 앱 배포

앱을 배포할 준비가 되었습니다! 상단 바 메뉴에서 **녹색 실행** 버튼을 클릭하여 앱을 로컬에서 실행하세요(키보드에서 **F5**를 누를 수도 있습니다). 앱이 실행되면 빨간색 **중지** 버튼을 클릭하여 로컬 앱 복사본을 종료합니다. 이러한 옵션은 콘솔 로그 항목 위의 콘솔에서도 찾을 수 있습니다.

클라우드 환경에 앱을 배포하려면 **publish**를 눌러 Mendix Free Cloud에 앱을 배포할 수 있습니다. Mendix Free Cloud는 모든 앱이 접근할 수 있는 무료 테스트 환경입니다. 앱을 처음 게시할 때 환경이 자동으로 생성되며, 설정에 필요한 구성이 없습니다.

{{% alert type="info" %}}
Mendix Cloud(유료)에 앱을 배포하려면 여러 호스팅 옵션이 있습니다. 프로젝트에 가장 적합한 플랜에 대한 자세한 내용은 [호스팅 옵션](/developerportal/deploy/mendix-cloud-deploy/) 가이드를 참조하세요.
{{% /alert %}}

## 완료!

첫 번째 Mendix 앱을 완성하고 배포한 것을 축하합니다! 다음으로 [Academy](https://academy.mendix.com/link/home)로 이동하여 **Crash Course** 학습 플랜을 시작하거나, 파트 2로 계속하여 문서 페이지에서 학습을 이어가세요. 최신 뉴스와 업데이트 비디오는 [YouTube 페이지](https://www.youtube.com/c/MendixCommunity)를 확인하세요. 커뮤니티 활동은 [Medium 출판물](https://medium.com/mendix)에서 확인할 수 있습니다.

저희 또는 커뮤니티에 연락하고 싶으신가요? [Slack 커뮤니티 워크스페이스](https://join.slack.com/t/mendixcommunity/shared_invite/zt-39m9sfzsl-so7j70WRyj_4gJ33gaVXOw)에 가입하여 참여하세요.

## 더 읽기

* [Studio Pro 개요](/refguide/studio-pro-overview/) – Studio Pro 탭, 메뉴 및 단축키에 대해 설명합니다
* [Mendix 개발 모범 사례](/refguide/dev-best-practices/) – Mendix 앱 개발 시 일관된 이름 지정 및 모델링 규칙을 채택하기 위한 참조 자료입니다
* [스프레드시트에서 앱 시작하기](/refguide/app-from-spreadsheet/) – Microsoft Excel 스프레드시트를 가져오고 데이터를 사용하여 앱을 만드는 방법을 설명합니다
* [Mendix Academy Become a Rapid Developer](https://academy.mendix.com/link/paths/31/Become-a-Rapid-Developer) – 로우코드를 사용하여 첫 번째 앱을 만들려는 새로운 Mendix 사용자에게 권장되는 학습 경로입니다
* [Mendix Academy Crash Course](https://academy.mendix.com/link/paths/82/Crash-Course) – 숙련된 개발자이기도 한 새로운 Mendix 사용자에게 권장되는 학습 경로입니다
