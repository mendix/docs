---
title: "Excel로 내보내기"
url: /refguide10/using-the-excel-exporter/
weight: 20
description: "구성 가능한 템플릿을 기반으로 앱에서 사용자 정의 Excel 문서를 만드는 방법을 설명합니다."
aliases: /howto10/integration/using-the-excel-exporter/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 소개

Mendix 애플리케이션의 데이터 그리드에서 **Export to Excel** 버튼을 통해 Excel 형식으로 항목을 내보내는 것은 표준 Mendix 기능입니다. 그러나 더 커스터마이징된 Excel 문서가 필요한 경우, 앱에서 Mendix Marketplace 콘텐츠를 활용하여 구성 가능한 템플릿 기반의 사용자 정의 Excel 문서를 만들 수 있습니다. 이를 위해 앱에서 두 개의 Mendix Marketplace 모듈을 다운로드하고 구성해야 합니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 설명합니다:

* Marketplace 모듈 다운로드
* 올바른 형식으로 필요한 데이터를 내보내도록 앱 구성

## 필수 Marketplace 모듈 다운로드하기 {#download-modules}

이 섹션에서는 Mendix Marketplace에서 필요한 모듈을 다운로드하는 방법을 알아봅니다. 이 프로세스에 필요한 모듈은 [Mx Model Reflection](/appstore/modules/model-reflection/) 및 [Excel Exporter](/appstore/modules/excel-exporter/)입니다.

{{% alert color="info" %}}
Mx Model Reflection 모듈을 사용하면 앱이 런타임에 도메인 모델(엔티티 및 속성)과 마이크로플로우(Microflow) 정의에 대한 정보를 가져올 수 있습니다.
{{% /alert %}}

모듈을 다운로드하려면 다음 단계를 따르세요:

1. Studio Pro 내에서 **Mendix Marketplace**를 여세요.
2. 키워드 *reflection*을 검색하고 **Mx Model reflection**을 선택하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/mx-model-reflection.png" class="no-border" >}}

3. **Download**를 클릭하여 앱에 모듈을 포함하세요. **App Explorer**의 **App** > **Marketplace modules**에 가져옵니다.
4. 키워드 *Excel*을 검색하고 **Excel exporter**를 선택한 후 해당 모듈을 앱에 다운로드하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/exporter.png" class="no-border" >}}

{{% alert color="warning" %}}
앱을 만들 때 선택한 레이아웃에 따라 새 모듈의 기본 레이아웃으로 인해 Studio Pro에서 오류가 발생할 수 있습니다. 이를 수정하려면 오류가 있는 각 페이지를 열고 앱 내에서 원하는 레이아웃으로 업데이트하세요.
{{% /alert %}}

## 사용자가 설정을 구성할 수 있도록 네비게이션 항목 추가하기 {#add-navigation-items}

이 섹션에서는 Mx Model Reflection과 앱 내에서 사용될 Excel Export 템플릿을 모두 구성하는 데 필요한 페이지를 앱의 **Navigation**에 추가하는 방법을 알아봅니다.

1. [App Explorer](/refguide10/app-explorer/)에서 **Navigation**으로 이동하세요.
2. **MxModelReflection.MxObjects_Overview** 페이지를 여는 **New item**을 네비게이션에 추가하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/new-menu-item-mxreflection.png" alt="new-menu-item-mxreflection" class="no-border" >}}

3. **XLSReport.Excel_Document_Overview** 페이지를 여는 새 항목을 네비게이션에 추가하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/new-menu-item-excel-exporter.png" alt="new-menu-item-excel-exporter" class="no-border" >}}

4. **App Security**를 열고 이 두 모듈을 Administrator 사용자 역할에 할당하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/security.png" class="no-border" >}}

## 입력 객체 엔티티 만들기

이 섹션에서는 Excel 통합 문서를 내보내는 데 사용할 엔티티(Entity)를 만듭니다. 이 엔티티는 Excel 스프레드시트를 채울 데이터를 보유하는 엔티티(Entity)와 연관됩니다. 이 사용 방법 문서에서는 **Policy** 엔티티(Entity)를 사용하여 데이터를 보유합니다.

1. 앱의 도메인 모델을 열고 **FileDocument**의 특수화(specialization)인 "기본 내보내기" 엔티티 역할을 할 엔티티(Entity)를 추가하세요.
2. 새로 만든 엔티티(Entity)와 Excel 내보내기의 기반으로 사용할 엔티티(또는 엔티티들) 사이에 연관(Association)을 만드세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/create-association.png" class="no-border" >}}

## Mx Model Reflection 구성하기 {#configure-mx-model-reflection}

이 섹션에서는 Mx Model Reflection 동기화를 실행하여 앱이 해당 프로세스의 출력을 활용하여 고도로 사용자 정의 가능한 Excel 내보내기 템플릿을 만들 수 있도록 하는 방법을 알아봅니다.

MxModelReflection 동기화를 실행하려면 다음 단계를 따르세요:

1. 앱을 실행하세요.
2. 앱을 확인하세요.
3. **MxReflection** 네비게이션 항목을 클릭하여 MxReflection 개요 페이지를 여세요.
4. 앱이 동기화해야 하는 각 모듈을 선택하고 **Click to refresh**를 클릭하세요.
5. **Synchronize all entities and microflows of checked modules on the left** 아래에서 **Click to refresh**를 클릭하세요.

## Excel 내보내기 템플릿 만들기

이 섹션에서는 앱 내에서 기본 Excel 내보내기 템플릿을 만드는 방법을 알아봅니다. 이 섹션에서는 원하는 템플릿을 구축하기 시작할 수 있도록 다양한 구성 항목의 개요를 다룹니다.

{{% alert color="info" %}}
Excel Exporter에는 구성을 사용자가 원하는 대로 간단하거나 복잡하게 만들 수 있는 많은 옵션이 있습니다. 이 사용 방법 문서에서는 시작하기 위한 기본 사항을 다루지만, 원하는 템플릿을 구축하는 것은 요구 사항에 따라 달라집니다.
{{% /alert %}}

### 기본 템플릿 설정 구성하기 {#basic-template-setup}

템플릿을 설정하려면 다음 단계를 따르세요:

1. 앱을 실행하세요.
2. 앱을 확인하세요.
3. **Excel Exporter**를 클릭하여 내보내기 개요 페이지를 여세요.
4. **New**를 클릭하여 새 템플릿을 만드세요.
5. **Filename**(확장자 제외)을 템플릿 사용 시 기본 파일 이름이 되도록 구성하세요. 이것은 템플릿을 식별할 수 있는 **Name**입니다.

    {{% alert color="info" %}}파일 이름은 마이크로플로우(Microflow) 내에서 템플릿을 사용할 때 언제든지 변경할 수 있습니다.{{% /alert %}}

6. **Input Object**를 내보낼 엔티티와 연관된 파일 문서 엔티티로 구성하세요.

    {{% alert color="info" %}}**Input Object**는 필수가 아닙니다. 워크시트 정의에서 **Row Object**를 지정하여 필요한 엔티티를 내보낼 수 있습니다.{{% /alert %}}
    
7. 이 템플릿의 용도를 식별하고 문서화하기 위한 **Description**을 제공하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/new-excel-template.png" class="no-border" >}}

8. 내보낸 후 Excel 파일에 날짜와 시간이 표시되는 방식을 정의하는 **Date time export format**을 지정하세요.

### 업로드된 Excel 파일을 템플릿으로 사용하기 {#upload-excel-file-template}

이 **Upload existing excel file** 옵션을 사용하면 Excel 파일을 템플릿으로 업로드할 수 있습니다. 이 옵션을 사용하면 템플릿의 시트 이름과 열 이름이 사용됩니다. 그러나 **Background color**가 **none**으로 설정되지 않은 경우 [Styles](#styles)에서 선택한 **Background color**가 템플릿의 배경색을 덮어씁니다.

Excel 파일을 템플릿으로 업로드하려면 다음 단계를 수행하세요:

1. 다음 아이콘을 클릭하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/upload-excel-file.png" alt="upload-excel-file" class="no-border" >}}

2. **File**에서 **Browse**를 클릭하고 템플릿으로 사용할 Excel 파일로 이동하세요.

3. 파일을 선택하고 **Save**를 클릭하세요.

4. [워크시트 레이아웃을 만드세요](#create-worksheet).

5. 워크시트에서 [동적 열 데이터](#dynamic-column-data) 및 [정적 데이터](#static-data)를 구성하세요.

### 워크시트 레이아웃 만들기 {#create-worksheet}

워크시트 레이아웃을 만들려면 다음 단계를 따르세요:

1. 템플릿의 **Worksheets** 섹션에서 **New**를 선택하여 새 시트 템플릿을 만드세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/new-sheet-template.png" class="no-border" >}}

2. 파일을 내보낼 때 시트에 지정될 **Name**을 지정하세요.

    {{% alert color="info" %}}업로드된 Excel 파일을 템플릿으로 사용하는 경우 Excel 템플릿 파일에 정의된 시트 이름이 사용되며, 여기에 입력하는 **Name**은 사용되지 않습니다. 자세한 정보는 [업로드된 Excel 파일을 템플릿으로 사용하기](#upload-excel-file-template)를 참조하세요.{{% /alert %}}

3. 내보낼 **Row Object**를 구성하세요. 이 엔티티(Entity) 유형의 각 객체가 워크시트의 행으로 저장됩니다.

4. [템플릿을 만들 때](#basic-template-setup) 입력 객체가 이전에 지정된 경우 **Reference to the template input object**를 설정하세요.

    다음 그림은 워크시트에 **Reference to the template input object** 및 **Sheet input Object**가 구성된 템플릿을 보여줍니다:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/worksheet-with-input-object.png" class="no-border" >}}

    다음 그림은 워크시트에 **Reference to the template input object** 및 **Sheet input Object**가 구성되지 않은 템플릿을 보여줍니다:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/worksheet-without-input-object.png" class="no-border" >}}

5. 데이터를 내보낼 서수 번호를 설정하려면 **Start retrieved data at row**를 구성하세요.

    {{% alert color="info" %}}이 설정은 내보내기가 이 값에서 데이터 목록의 끝까지 진행되므로 내보내는 결과 세트를 잘라낼 수 있습니다.{{% /alert %}}

6. 내보내기에서 고유한 데이터만 내보낼지 중복 데이터를 허용할지 선택하세요.

7. **Column default width** 및 **Row default height**를 지정하세요(또는 기본값으로 두세요).

8. 추출에서 **Use Static Data**를 사용할지 여부를 지정하세요:

    {{% alert color="info" %}}정적 데이터를 사용하는 경우 아래에서 구성됩니다.{{% /alert %}}

9. 내보낸 데이터에 적용될 미리 정의된 스타일을 나타내는 **Default text style**을 지정하세요.

10. 헤더 데이터에 적용될 미리 정의된 스타일을 나타내는 **Default header text style**을 지정하세요:

    {{% alert color="info" %}}스타일 지정은 아래 섹션에서 다룹니다.{{% /alert %}}

11. 여러 엔티티를 별도의 시트로 내보내려면 다음을 수행하세요:

     1. 템플릿의 **Worksheets** 섹션에서 **New**를 다시 선택하여 새 시트 템플릿을 만드세요.

     2. 이 시트에서 사용할 **Name**을 지정하세요.

     3. 이 새 시트로 내보내야 하는 엔티티(Entity)에 해당하는 **Row Object**를 구성하세요.

     4. **Worksheet**에서 내보내야 하는 다양한 열을 추가하세요. **Column data** 탭에서 열을 정의할 수 있습니다. 열은 엔티티(Entity)의 속성이나 참조 연관(Association)에서 가져올 수 있습니다.

     아래에서 템플릿 정의와 해당 내보낸 Excel 파일의 예를 확인할 수 있습니다: 두 워크시트는 템플릿에서 **Topic** 및 **PubMessage**로 정의되어 있으며, 해당 Excel 파일에는 같은 이름의 두 시트가 있습니다.

     {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/multiple-sheets.png" class="no-border" >}} 

### 동적 열 데이터 구성하기 {#dynamic-column-data}

동적 열 데이터를 구성하려면 다음 단계를 따르세요:

1. **Column Data** 탭에서 **New**를 선택하여 새 내보내기 열을 만드세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/new-export-column.png" class="no-border" >}}

2. **Column number**는 자동으로 설정되지만, 원하는 서수 번호로 덮어쓸 수 있습니다.
3. 열에 대한 **Name**을 정의하세요. 이것은 내보낼 때 **Column Header**가 됩니다.

    {{% alert color="info" %}}업로드된 Excel 파일을 템플릿으로 사용하는 경우 Excel 템플릿 파일에 정의된 열 이름이 사용되며, 여기에 입력하는 **Name**은 사용되지 않습니다. 자세한 정보는 [업로드된 Excel 파일을 템플릿으로 사용하기](#upload-excel-file-template)를 참조하세요.{{% /alert %}}

4. 이 열이 속성인지 참조인지 식별하기 위해 **Retrieve type**을 지정하세요.
5. 이 열에 저장될 행 객체의 속성을 식별하기 위해 **Select attribute**를 지정하세요.
6. 열이 집계 결과여야 하는지 지정하세요. decimal, integer 및 long 유형만 집계할 수 있습니다.

### 시트에서 정적 데이터 구성하기 {#static-data}

시트에서 정적 데이터를 구성하려면 다음 단계를 따르세요:

1. **Static Data tab**을 열고 **New**를 선택하여 새 내보내기 열을 만드세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/static-data-tab.png" class="no-border" >}}

2. 정적 값이 배치될 **Row** 및 **Column**을 지정하세요.
3. **Name** 필드에 셀 이름을 입력하세요.
4. 셀이 **Static Text, Object Data, 또는 Aggregate Function**인지 선택하여 **Type**을 지정하세요. 이 예에서는 **Static Text**를 사용합니다(선택 시 **Name** 필드가 **Excel Text**로 변경됩니다).
5. 셀에 적용될 **Style**을 지정하세요.

### 사용자 정의 셀 서식 및 스타일 구성하기 {#styles}

셀의 사용자 정의 서식 및 스타일을 구성하려면 다음 단계를 따르세요:

1. 새 템플릿의 메인 페이지로 돌아가서 **Styles** 섹션에서 **New**를 클릭하여 Excel 내보내기의 모든 데이터에 적용할 수 있는 새 스타일을 만드세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/styles.png" class="no-border" >}}

2. 셀에 적용될 스타일의 속성을 지정하세요.

    {{% alert color="info" %}}업로드된 Excel 파일을 템플릿으로 사용하는 경우, 여기에서 선택한 배경색(값이 **none**이 아닌 경우)이 템플릿의 배경색을 덮어씁니다.{{% /alert %}}

3. **Save**를 클릭하여 동적 열, 정적 열 및 헤더에 스타일을 사용할 수 있도록 하세요.

## 마이크로플로우를 통한 Excel 내보내기 모듈 호출

이 섹션에서는 애플리케이션에서 새로 만든 Excel 내보내기 템플릿을 호출하는 방법을 알아봅니다. **Input Object**를 사용한 경우 다음 단계에 따라 템플릿을 검색하고 문서를 생성하세요:

1. 내보내야 하는 객체와 연관된 **Input Object**의 인바운드 매개변수를 받는 마이크로플로우(Microflow)를 만드세요.
   
2. 마이크로플로우에서 이전에 내보내기에 사용하도록 설정한 템플릿인 단일 객체를 검색하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/retrieve-template.png" class="no-border" >}}

3. 마이크로플로우에서 **XLSReport.GenerateExcelDoc** Java 액션(모듈의 **JavaActions** 폴더에서 사용 가능)을 호출하여 필요한 객체를 모듈에 전달하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/java-action.png" class="no-border" >}}

4. 마이크로플로우에서 결과 FileDocument 객체를 다운로드하세요.

마이크로플로우는 다음과 유사하게 보여야 합니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/microflow-for-generate.png" class="no-border" >}}

템플릿 정의에 **Input Object**가 없는 경우, 마이크로플로우에서 내보내기를 위해 데이터베이스에서 직접 템플릿 객체와 **Row Object**를 검색할 수 있습니다.

## 마이크로플로우 실행하기

지금 앱에서 누락된 두 가지가 있습니다:

* 다운로드할 데이터가 없음
* 마이크로플로우를 실행할 방법이 없음

아래 섹션을 참조하여 이러한 누락된 부분을 추가하세요.

### 데이터 만들기

일부 데이터를 입력할 수 있도록 페이지를 생성한 후 다음 단계에 따라 데이터를 입력하세요:

1. 도메인 모델에서 **Policy** 엔티티(Entity)를 마우스 오른쪽 버튼으로 클릭하고 **Generate overview pages…**를 선택하세요.
2. **Policy**를 선택하고 **OK**를 클릭하세요.
3. 생성된 개요 페이지를 홈 페이지 또는 앱 네비게이션을 통해 앱에 연결하세요.
4. 앱을 실행하고 일부 데이터를 입력하여 **Policy** 객체를 만드세요.

### 마이크로플로우 실행하기

위에서 만든 마이크로플로우를 실행하려면 네비게이션에 추가되는 또 다른 마이크로플로우(Microflow)를 만들어야 합니다. 이 마이크로플로우는 **PolicyDoc** 객체를 만들고 루프를 사용하여 기존 **Policy** 객체와 연관시키며, 루프 후 모든 연관이 커밋되었는지 확인하고, 이 PolicyDoc를 마이크로플로우에 매개변수로 전달해야 합니다. 이렇게 하면 **PolicyDoc**와 연관시킨 모든 Policy 객체가 내보내집니다.

새 마이크로플로우는 다음과 유사하게 보여야 합니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/export-to-excel/associating-objects.png" class="no-border" >}}

{{% alert color="info" %}}
**Policy** 객체와 연관 *없이* **PolicyDoc**를 만들면 템플릿에 정의된 구조를 가진 빈 스프레드시트가 내보내집니다.
{{% /alert %}}

{{% alert color="warning" %}}
Java 액션 *XLSReport.GenerateExcelDoc*를 호출하는 마이크로플로우의 **Apply entity access**가 **True**로 설정되어 있고, 템플릿에서 추출하는 엔티티 또는 연관 중 하나에 대한 접근 권한이 없는 경우 **CoreRuntimeException** 또는 **SecurityRuntimeException**이 발생합니다. 이 모듈은 OQL을 사용하여 데이터를 검색하고, 이는 사용자가 가진 접근 권한에 대해 평가되기 때문입니다.
{{% /alert %}}

## 더 읽기

* [Excel 문서 가져오기](/howto10/integration/importing-excel-documents/)
