---
title: "Excel 문서 가져오기"
url: /howto9/integration/importing-excel-documents/
weight: 5
description: "Excel Importer 모듈을 사용하여 가져오기 템플릿을 설정하고 앱에 데이터를 가져오는 방법을 설명합니다."
---

## 소개

애플리케이션에 대량의 데이터를 추가하는 것(예: 참조 데이터 또는 외부 애플리케이션의 데이터)은 매우 시간이 많이 걸릴 수 있습니다. 시간과 노력을 절약하기 위해 Mendix Marketplace의 [Excel Importer](/appstore/modules/excel-importer/)를 사용하여 이 프로세스를 자동화할 수 있습니다. 이 사용 방법에서는 이 모듈을 사용하여 가져오기 템플릿을 설정하고 앱에 데이터를 가져옵니다.

## 전제 조건

이 사용 방법을 시작하기 전에 다음 방법을 알고 있는지 확인하십시오:

* Domain Model 생성하기([기본 데이터 레이어 생성하기](/refguide9/create-a-basic-data-layer/) 참조)
* 개요 및 상세 페이지 생성하기([첫 번째 개요 및 상세 페이지 생성하기](/howto9/front-end/create-your-first-two-overview-and-detail-pages/) 참조)
* 메뉴 항목 생성하기([내비게이션 설정](/refguide9/setting-up-the-navigation-structure/) 참조)
* Microflow 생성하기([메뉴 항목에서 Microflow 트리거하기](/refguide9/triggering-microflow-from-menu-item/) 참조)
* 앱에 Marketplace 콘텐츠 추가하기([Marketplace 콘텐츠 사용 방법](/appstore/use-content/) 참조)
* 애플리케이션 보안 설정하기([보안 앱 생성 방법](/howto9/security/create-a-secure-app/) 참조)

## 데이터 구조, GUI 및 모듈 준비하기

애플리케이션에 데이터를 가져오기 시작하려면, 먼저 다음 단계에 따라 데이터 구조와 GUI를 설정해야 합니다:

1. 다음 Domain Model을 생성하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581969.png" class="no-border" >}}

    **Open**, **Processing**, **Complete** 값을 가진 **OrderStatus** 속성의 열거형을 생성하십시오.

    **XLSFile** 객체가 **FileDocument** 객체를 상속하도록 구성하십시오.
2. **Customer** 및 **Order** 유형의 객체를 관리하기 위한 **Overview** 및 **Detail** 페이지를 생성하십시오.
3. **Order** 및 **Customer** 개요 페이지에 접근할 수 있는 메뉴 항목을 생성하십시오.
4. Mendix Marketplace에서 **Excel Importer** 및 **Mx Model Reflection** 모듈을 다운로드하십시오(Studio Pro 오른쪽 상단의 장바구니 아이콘을 클릭하여 사용 가능).
5. **ExcelImportOverview** 및 **MxObjects_Overview** 페이지에 대한 메뉴 항목을 생성하십시오(이 페이지들은 다운로드한 모듈의 **_USE_ME** 폴더에 이미 존재합니다).
6. **Administrator** 사용자 역할이 **ExcelImporter** 모듈에 대해 **Configurator** 모듈 역할을, **Mx Model Reflection** 모듈에 대해 **ModelAdministrator** 모듈 역할을 갖도록 구성하십시오.

## 데이터 가져오기를 위한 로직 준비하기 {#preparing}

**OrderStatus** 속성에 열거형이 사용되므로, Excel 파일의 입력을 기반으로 속성의 열거형 값을 결정하는 Microflow를 생성해야 합니다.

1. 다음 Microflow를 생성하고 이름을 **IVK_ParseStatus**로 지정하십시오.

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581968.png" class="no-border" >}}

2. **Return value**를 다음과 같이 설정하십시오:

    ```text
    if $Unformatted = 'open' then MyFirstModule.OrderStatus.Open
    else if $Unformatted = 'processing' then MyFirstModule.OrderStatus.Processing
    else if $Unformatted = 'complete' then MyFirstModule.OrderStatus.Complete
    else MyFirstModule.OrderStatus.Complete
    ```

3. Microflow를 **저장**하십시오.

## 클라이언트에서 애플리케이션 모델 메타데이터 사용하기

데이터 가져오기를 위한 가져오기 템플릿을 설정하려면, 애플리케이션 모델 메타데이터가 클라이언트에 반영되어야 합니다. 이는 [Mx Model Reflection](/appstore/modules/model-reflection/) 모듈을 사용하여 달성할 수 있습니다. 이 섹션에서는 다음 단계에 따라 방법을 배울 수 있습니다:

1. **Run Locally** ({{% icon name="controls-play" %}})를 클릭하여 애플리케이션을 시작하십시오.
2. **View App**을 클릭하여 브라우저에서 애플리케이션을 여십시오.
3. Administrator로 **로그인**하십시오.
4. 내비게이션에서 **MxObjects_Overview** 메뉴 항목을 클릭하십시오.
5. 왼쪽 체크박스를 선택하여 클라이언트에서 사용하려는 객체가 포함된 모듈을 선택하십시오 – 이 경우 **MyFirstModule**입니다:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581937.png" class="no-border" >}}

6. **Synchronize all entities and microflows of checked modules on the left** 옆의 버튼을 클릭하십시오. 이제 **MyFirstModule** 모듈의 두 객체와 파싱 Microflow를 클라이언트에서 확인하고 사용할 수 있습니다.

## 수동으로 가져오기 템플릿 생성하기 {#creating}

Excel 파일에서 애플리케이션으로 데이터를 가져오려면 먼저 가져오기 템플릿을 설정해야 합니다. 이 템플릿에서 데이터가 매핑되어야 할 객체, 객체가 다른 객체에 연관되어 있는지, Excel 파일의 어느 행에서 가져오기를 시작할지, 어떤 열을 가져올지를 구성합니다.

이 섹션에서는 여기에서 다운로드할 수 있는 간단한 Excel 파일 예제에서 데이터를 가져옵니다:

{{< figure src="/attachments/howto9/integration/importing-excel-documents/18581938.png" link="/attachments/howto9/integration/importing-excel-documents/18581949.xlsx" class="no-border" >}}

가져오려는 파일의 구조를 기반으로, 다음 단계에 따라 템플릿을 수동으로 설정해야 합니다:

1. 앱 홈 페이지의 내비게이션에서 **ExcelImportOverview** 메뉴 항목을 클릭하십시오.
2. **New Template**을 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581971.png" class="no-border" >}}

3. 템플릿에 이름을 지정하십시오.
4. **Mendix object** 상자 옆의 화살표를 클릭하십시오.
5. **Customer** 객체를 더블 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581966.png" class="no-border" >}}

6. **Reference to import objects** 상자 옆의 화살표를 클릭하십시오.
7. **MyFirstModule.Customer_XLSFile** 연관을 선택하십시오. XLS 파일에 연관을 설정하면, XLS 파일이 디스크에 저장되고 가져온 데이터가 소스 파일에 연결됩니다.
8. **Import Action**이 **Synchronize objects**로 설정되어 있는지 확인하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581965.png" class="no-border" >}}

    {{% alert color="info" %}}이 예제에서는 시트가 하나이고 첫 번째 행에 열 헤더가 있는 간단한 Excel 파일을 사용합니다. 더 포괄적인 Excel 파일을 사용하는 경우 **Sheet nr**, **Header row nr**, **Import from row nr** 필드를 통해 이러한 값을 변경할 수 있습니다.{{% /alert %}}

9. **Connect columns to attributes** 섹션에서 **New**를 클릭하여 Excel 시트 열에서 적절한 Mendix 속성으로의 매핑을 생성하십시오.
10. 매핑하려는 Excel 파일의 열 번호에 해당하는 열 번호를 추가하십시오.

    {{% alert color="info" %}}Excel의 첫 번째 열 번호는 0, 두 번째는 1 등입니다.{{% /alert %}}

11. Excel 열 헤더를 **Caption** 값으로 정의하십시오.
12. **Type**에서 **Attribute**를 선택하십시오.
13. **Attribute** 상자 옆의 화살표를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581963.png" class="no-border" >}}

14. Excel 값을 매핑하려는 **Attribute**를 더블 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581962.png" class="no-border" >}}

15. **Customer** 객체의 각 속성에 대해 위의 9~14단계를 반복하십시오.

    * **Name** 속성 매핑의 경우, 고객이 중복되지 않도록 **Key** 값을 **Yes**로 설정하십시오.

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581961.png" class="no-border" >}}

    {{% alert color="info" %}}매핑이 올바르게 설정되면 행 앞에 녹색 체크가 나타납니다.{{% /alert %}}

16. 이제 **Order** 객체 속성에 대한 매핑을 생성해야 합니다. 그러나 **Order** 객체가 **Customer** 객체에 연관되어 있으므로 매핑 설정이 약간 다릅니다. **Order** 객체의 각 속성에 대해 다음 단계를 따르십시오:
    1. 매핑하려는 Excel 파일의 열 번호에 해당하는 열 번호를 추가하십시오.
    2. Excel 열 헤더를 **Caption** 값으로 정의하십시오.
    3. type에서 **Reference**를 선택하십시오.
    4. **Reference** 상자 옆의 화살표를 클릭하십시오. 여기서 주문이 고객에 연결되는 연관을 선택할 수 있습니다 – 이 경우 **Order_Customer**이어야 합니다.
    5. **Attribute** 상자 옆의 화살표를 클릭하고 Excel 값을 매핑하려는 **Attribute**를 더블 클릭하십시오.
    6. **Number** 속성 매핑의 경우, 주문이 중복되지 않도록 **Key** 값을 **Yes, only for the associated object**로 설정하십시오.
    7. **Save**를 클릭하십시오.

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581956.png" class="no-border" >}}

17. **OrderStatus** 속성 매핑의 경우, Excel 파일 값을 열거형 값으로 파싱해야 합니다. 이를 위해 위의 [데이터 가져오기를 위한 로직 준비하기](#preparing) 섹션에서 생성한 **IVK_ParseStatus** Microflow를 사용할 수 있습니다. **Parse with** 상자 옆의 화살표를 클릭하고 **IVK_ParseStatus** Microflow를 선택하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581953.png" class="no-border" >}}

18. 가져오기 템플릿을 저장하십시오.

### Excel 파일 가져오기

이제 템플릿이 설정되었으므로 Excel 파일에서 애플리케이션으로 데이터를 가져올 수 있습니다. 위의 [가져오기 템플릿 생성하기](#creating) 섹션에서 다운로드한 예제 파일을 사용할 수 있습니다.

Excel 파일을 가져오려면 다음 단계를 따르십시오:

1. 앱 홈 페이지의 내비게이션에서 **ExcelImportOverview** 메뉴 항목을 클릭하십시오.
2. **Import files** 탭으로 이동하여 **New**를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581952.png" class="no-border" >}}

3. 방금 생성한 템플릿을 선택하십시오.
4. **Browse**를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581951.png" class="no-border" >}}

5. 다운로드한 예제 Excel 파일을 선택하고 **Save**를 클릭하십시오.
6. **Filename** 아래의 Excel 파일을 클릭하여 선택한 다음 **Import file**을 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581950.png" class="no-border" >}}

7. 가져오기가 완료되면 **OK**를 클릭하십시오.

## Excel 파일을 통한 가져오기 템플릿 자동 생성

이전 단계에서는 가져오기 템플릿에 모든 열을 수동으로 추가했습니다. 이 섹션에서는 동일한 Excel 템플릿을 자동화된 방식으로 생성합니다. 이는 특정 **New template by excelfile** 버튼을 통해 수행할 수 있습니다. 동일한 Excel 파일 예제를 사용할 수 있습니다:

{{< figure src="/attachments/howto9/integration/importing-excel-documents/18581938.png" link="/attachments/howto9/integration/importing-excel-documents/18581949.xlsx" class="no-border" >}}

Excel 파일을 통해 가져오기 템플릿을 생성하려면 다음 단계를 따르십시오:

1. 앱 홈 페이지의 내비게이션에서 **ExcelImportOverview** 메뉴 항목을 클릭하십시오.
2. **New template by excelfile**을 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581948.png" class="no-border" >}}

3. 다운로드한 예제 Excel 파일을 선택하십시오.
4. **Sheet nr**, **Header row nr**, **Import from row nr**을 정의하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581947.png" class="no-border" >}}

5. **Save & next**를 클릭하십시오. 이렇게 하면 Excel 파일의 모든 헤더에 대해 자동으로 행이 생성됩니다:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581936.png" class="no-border" >}}

6. 페이지 상단 섹션으로 돌아가서 **Mendix object** 옆의 화살표를 클릭하고 **Customer** 객체 유형을 선택하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581935.png" class="no-border" >}}

7. **Connect columns to attributes**에서 **Connect matching attributes**를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581934.png" class="no-border" >}}

    이렇게 하면 **Caption**과 동일한 이름을 가진 선택된 Mendix 객체의 속성이 자동으로 일치됩니다.

8. 위의 [가져오기 템플릿 생성하기](#creating) 섹션에서와 같이 템플릿을 완성하십시오.

    {{% alert color="info" %}}**Customer** 객체뿐만 아니라 **Order** 객체에 대해서도 키 속성을 설정해야 한다는 점을 기억하십시오.{{% /alert %}}

## 템플릿 내보내기 및 가져오기

Excel 템플릿이 완성되면 템플릿을 내보내고(예: 테스트 환경에서) 가져올 수 있습니다(예: 수락 환경으로). 템플릿을 내보내고 가져오면 정확한 템플릿이 업로드됩니다. 즉, 열이 생성되고, Mendix 객체가 선택되고, 속성이 연결되고, 파싱 Microflow가 선택됩니다.

템플릿을 내보내고 가져오려면 다음 단계를 따르십시오:

1. 앱 홈 페이지의 내비게이션에서 **ExcelImportOverview** 메뉴 항목을 클릭하십시오.
2. 위의 [가져오기 템플릿 생성하기](#creating) 섹션에서 생성한 Excel 템플릿을 클릭하여 선택한 다음 **Export template**을 클릭하고 파일을 컴퓨터에 저장하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581933.png" class="no-border" >}}

3. **Import template**을 클릭하고 파일을 선택한 다음 **Import**를 클릭하여 방금 다운로드한 파일을 가져오십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/18581932.png" class="no-border" >}}

이제 완전한 가져오기 템플릿을 가져왔습니다.

{{% alert color="info" %}}앱에 중복된 가져오기 템플릿이 있지만, 실제 시나리오에서는 템플릿이 아직 생성되지 않은 다른 환경/데이터베이스로 이 템플릿을 가져올 것입니다.{{% /alert %}}

## 더 읽기

* [XML 문서 내보내기](/howto9/integration/export-xml-documents/)
* [XML 문서 가져오기](/howto9/integration/importing-xml-documents/)
* [웹 서비스 노출하기](/howto9/integration/expose-a-web-service/)
