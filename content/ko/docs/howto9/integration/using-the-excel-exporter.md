---
title: "Excel로 내보내기"
url: /howto9/integration/using-the-excel-exporter/
weight: 6
description: "구성 가능한 템플릿을 기반으로 앱에서 사용자 정의 Excel 문서를 생성하는 방법을 설명합니다."
---

## 소개

Mendix 애플리케이션의 데이터 그리드에서 **Export to Excel** 버튼을 통해 항목을 Excel 형식으로 내보내는 것은 표준 Mendix 기능입니다. 그러나 더 사용자 정의된 Excel 문서가 필요한 경우, 앱에서 Mendix Marketplace 콘텐츠를 활용하여 구성 가능한 템플릿을 기반으로 사용자 정의 Excel 문서를 생성할 수 있습니다. 이를 위해 앱에서 두 개의 Mendix Marketplace 모듈을 다운로드하고 구성해야 합니다.

이 사용 방법에서는 다음을 설명합니다:

* Marketplace 모듈 다운로드하기
* 올바른 형식으로 필요한 데이터를 내보내도록 앱 구성하기

## 필수 Marketplace 모듈 다운로드하기 {#download-modules}

이 섹션에서는 Mendix Marketplace에서 필요한 모듈을 다운로드하는 방법을 배웁니다. 이 프로세스에 필요한 모듈은 [Mx Model Reflection](/appstore/modules/model-reflection/)과 [Excel Exporter](/appstore/modules/excel-exporter/)입니다.

{{% alert color="info" %}}
Mx Model Reflection 모듈은 앱이 런타임에 Domain Model(Entity 및 Attribute)과 Microflow 정의에 대한 정보를 얻을 수 있게 합니다.
{{% /alert %}}

모듈을 다운로드하려면 다음 단계를 따르십시오:

1. Studio Pro 내에서 **Mendix Marketplace**를 여십시오.
2. 키워드 *reflection*을 검색하고 **Mx Model reflection**을 선택하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/18581166.png" class="no-border" >}}

3. **Download**를 클릭하여 앱에 모듈을 포함하십시오. **App Explorer**의 **App** > **Marketplace modules**에 가져올 수 있습니다.
4. 키워드 *Excel*을 검색하고 **Excel exporter**를 선택한 다음 해당 모듈을 앱에 다운로드하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/exporter.png" class="no-border" >}}

{{% alert color="warning" %}}
앱 생성 시 선택한 레이아웃에 따라, 새 모듈의 기본 레이아웃으로 인해 Studio Pro에서 오류가 발생할 수 있습니다. 이를 수정하려면, 오류가 있는 각 페이지를 열고 앱 내에서 원하는 레이아웃으로 업데이트하십시오.
{{% /alert %}}

## 사용자가 설정을 구성할 수 있도록 내비게이션 항목 추가하기 {#add-navigation-items}

이 섹션에서는 Mx Model Reflection과 앱 내에서 사용할 Excel Export 템플릿을 구성하는 데 필요한 페이지를 앱의 **Navigation**에 추가하는 방법을 배웁니다.

1. [App Explorer](/refguide9/app-explorer/)에서 **Navigation**으로 이동하십시오.
2. **MxModelReflection.MxObjects_Overview** 페이지를 여는 **New item**을 내비게이션에 추가하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/new-menu-item-mxreflection.png" alt="new-menu-item-mxreflection" class="no-border" >}}

3. **XLSReport.Excel_Document_Overview** 페이지를 여는 새 항목을 내비게이션에 추가하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/new-menu-item-excel-exporter.png" alt="new-menu-item-excel-exporter" class="no-border" >}}

4. **App Security**를 열고 이 두 모듈을 Administrator 사용자 역할에 할당하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/security.png" class="no-border" >}}

## 입력 객체 Entity 생성하기

이 섹션에서는 Excel 워크북을 내보내는 데 사용할 Entity를 생성합니다. 이 Entity는 Excel 스프레드시트를 채울 데이터를 보유하는 Entity와 연관됩니다. 이 사용 방법에서는 데이터를 보유하기 위해 **Policy** Entity를 사용합니다.

1. 앱의 Domain Model을 열고 **FileDocument**의 특수화인 "기본 내보내기" Entity를 추가하십시오.
2. 새로 생성한 Entity와 Excel 내보내기의 기반으로 사용할 Entity(또는 Entity들) 간의 연관을 생성하십시오.

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/18581908.png" class="no-border" >}}

## Mx Model Reflection 구성하기 {#configure-mx-model-reflection}

이 섹션에서는 앱이 해당 프로세스의 출력을 활용하여 고도로 사용자 정의 가능한 Excel 내보내기 템플릿을 생성할 수 있도록 Mx Model Reflection 동기화를 실행하는 방법을 배웁니다.

MxModelReflection 동기화를 실행하려면 다음 단계를 따르십시오:

1. 앱을 실행하십시오.
2. 앱을 확인하십시오.
3. **MxReflection** 내비게이션 항목을 클릭하여 MxReflection 개요 페이지를 여십시오.
4. 앱에서 동기화해야 하는 각 모듈을 선택하고 **Click to refresh**를 클릭하십시오.
5. **Synchronize all entities and microflows of checked modules on the left** 아래에서 **Click to refresh**를 클릭하십시오.

## Excel 내보내기 템플릿 생성하기

이 섹션에서는 앱 내에서 기본 Excel 내보내기 템플릿을 생성하는 방법을 배웁니다. 이 섹션에서는 원하는 템플릿 구축을 시작할 수 있도록 다양한 구성 항목에 대한 개요를 다룹니다.

{{% alert color="info" %}}
Excel Exporter에는 구성을 사용자가 원하는 만큼 간단하거나 복잡하게 만들 수 있는 많은 옵션이 있습니다. 이 사용 방법에서는 시작하는 데 필요한 기본 사항을 다루지만, 원하는 템플릿 구축은 요구 사항에 따라 다릅니다.
{{% /alert %}}

### 기본 템플릿 설정 구성하기

템플릿을 설정하려면 다음 단계를 따르십시오:

1. 앱을 실행하십시오.
2. 앱을 확인하십시오.
3. **Excel Exporter**를 클릭하여 내보내기 개요 페이지를 여십시오.
4. **New**를 클릭하여 새 템플릿을 생성하십시오.
5. 템플릿을 사용할 때 기본 파일 이름이 될 **Filename**(확장자 없이)을 구성하십시오. 이것은 템플릿을 식별할 수 있는 **Name**입니다.

    {{% alert color="info" %}}파일 이름은 템플릿이 Microflow 내에서 사용될 때 항상 변경할 수 있습니다.{{% /alert %}}

6. **Input Object**를 내보내려는 Entity와 연관된 파일 문서 Entity로 구성하십시오.
7. 이 템플릿의 용도를 식별하고 문서화하기 위한 **Description**을 제공하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/new-excel-template.png" class="no-border" >}}

8. 내보내기된 Excel 파일에서 날짜와 시간이 표시되는 방식을 정의하는 **Date time export format**을 지정하십시오.

### 업로드된 Excel 파일을 템플릿으로 사용하기 {#upload-excel-file-template}

이 **Upload existing excel file** 옵션을 사용하면 Excel 파일을 템플릿으로 업로드할 수 있습니다. 이 옵션을 사용하면 템플릿의 시트 이름과 열 이름이 사용됩니다. 그러나 템플릿의 배경색은 **Background color**가 **none**으로 설정되지 않은 경우 [스타일](#styles)에서 선택한 **Background color**로 재정의됩니다.

Excel 파일을 템플릿으로 업로드하려면 다음 단계를 수행하십시오:

1. 다음 아이콘을 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/upload-excel-file.png" alt="upload-excel-file" class="no-border" >}}

2. **File**에서 **Browse**를 클릭하고 템플릿으로 사용하려는 Excel 파일로 이동하십시오.

3. 파일을 선택하고 **Save**를 클릭하십시오.

4. [워크시트 레이아웃을 생성하십시오](#create-worksheet).

5. 워크시트에서 [동적 열 데이터](#dynamic-column-data)와 [정적 데이터](#static-data)를 구성하십시오.

### 워크시트 레이아웃 생성하기 {#create-worksheet}

워크시트 레이아웃을 생성하려면 다음 단계를 따르십시오:

1. 템플릿의 **Worksheets** 섹션에서 **New**를 선택하여 새 시트 템플릿을 생성하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/18581907.png" class="no-border" >}}

2. 파일이 내보내기될 때 시트에 부여할 **Name**을 지정하십시오.

    {{% alert color="info" %}}업로드된 Excel 파일을 템플릿으로 사용하는 경우, Excel 템플릿 파일에 정의된 시트 이름이 사용되며, 여기에 입력한 **Name**은 사용되지 않습니다. 자세한 내용은 [업로드된 Excel 파일을 템플릿으로 사용하기](#upload-excel-file-template)를 참조하십시오{{% /alert %}}

3. 내보내려는 **Row Object**를 구성하고 템플릿 입력 객체에 대한 참조를 설정하십시오(입력 객체를 사용하는 경우). 이 Entity 유형의 각 객체가 워크시트의 행으로 저장됩니다.
4. **Start retrieved data at row**를 구성하여 데이터가 내보내져야 하는 서수 번호를 설정하십시오.

    {{% alert color="info" %}}이 설정은 내보내기가 이 값에서 데이터 목록의 끝까지 진행되므로, 내보내는 결과 집합을 잘라낼 수 있습니다{{% /alert %}}

5. 내보내기가 고유 데이터만 내보낼지 또는 중복 데이터를 허용할지 선택하십시오
6. **Column default width**와 **Row default height**를 지정하십시오(또는 기본값으로 두십시오).
7. 추출이 **Use Static Data**를 사용할지 여부를 지정하십시오:

    {{% alert color="info" %}}정적 데이터를 사용하는 경우, 아래에서 구성됩니다.{{% /alert %}}

8. 내보내기된 데이터에 적용할 미리 정의된 스타일을 나타내는 **Default text style**을 지정하십시오.
9. 헤더 데이터에 적용할 미리 정의된 스타일을 나타내는 **Default header text style**을 지정하십시오:

    {{% alert color="info" %}}스타일 지정은 아래 섹션에서 다룹니다.{{% /alert %}}

### 동적 열 데이터 구성하기 {#dynamic-column-data}

동적 열 데이터를 구성하려면 다음 단계를 따르십시오:

1. **Column Data** 탭에서 **New**를 선택하여 새 내보내기 열을 생성하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/18581905.png" class="no-border" >}}

2. **Column number**는 자동으로 설정되지만 원하는 서수 번호로 덮어쓸 수 있습니다.
3. 열에 대한 **Name**을 정의하십시오. 이것은 내보내기될 때 **Column Header**가 됩니다.

    {{% alert color="info" %}}업로드된 Excel 파일을 템플릿으로 사용하는 경우, Excel 템플릿 파일에 정의된 열 이름이 사용되며, 여기에 입력한 **Name**은 사용되지 않습니다. 자세한 내용은 [업로드된 Excel 파일을 템플릿으로 사용하기](#upload-excel-file-template)를 참조하십시오.{{% /alert %}}

4. 이 열이 속성인지 참조인지 식별하기 위해 **Retrieve type**을 지정하십시오.
5. 이 열에 저장될 행 객체의 속성을 식별하기 위해 **Select attribute**를 지정하십시오.
6. 열이 집계를 결과로 내야 하는지 지정하십시오. decimal, integer, long 유형만 집계할 수 있습니다.

### 시트에서 정적 데이터 구성하기 {#static-data}

시트에서 정적 데이터를 구성하려면 다음 단계를 따르십시오:

1. **Static Data tab**을 열고 **New**를 선택하여 새 내보내기 열을 생성하십시오.

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/18581903.png" class="no-border" >}}

2. 정적 값이 배치될 **Row**와 **Column**을 지정하십시오.
3. **Name** 필드에 셀 이름을 입력하십시오.
4. 셀이 **Static Text, Object Data, 또는 Aggregate Function**인지 선택하여 **Type**을 지정하십시오. 이 예제에서는 **Static Text**를 사용합니다(선택 시 **Name** 필드가 **Excel Text**로 변경됩니다).
5. 셀에 적용할 **Style**을 지정하십시오.

### 사용자 정의 셀 서식 및 스타일 구성하기 {#styles}

셀에 대한 사용자 정의 서식 및 스타일을 구성하려면 다음 단계를 따르십시오:

1. 새 템플릿의 메인 페이지로 돌아가서 **Styles** 섹션에서 **New**를 클릭하여 Excel 내보내기의 모든 데이터에 적용할 수 있는 새 스타일을 생성하십시오:

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/18581900.png" class="no-border" >}}

2. 셀에 적용할 스타일의 속성을 지정하십시오.

    {{% alert color="info" %}}업로드된 Excel 파일을 템플릿으로 사용하는 경우, 여기에서 선택한 배경색(값이 **none**이 아닌 경우)이 템플릿의 배경색을 재정의합니다.{{% /alert %}}

3. **Save**를 클릭하여 동적 열, 정적 열, 헤더에 사용할 수 있는 스타일을 만드십시오.

## Microflow를 통한 Excel 내보내기 모듈 호출하기

이 섹션에서는 애플리케이션에서 새로 생성한 Excel 내보내기 템플릿을 호출하는 방법을 배웁니다. 템플릿을 검색하고 문서를 생성하려면 다음 단계를 따르십시오:

1. 내보내야 하는 객체의 인바운드 매개변수를 받는 Microflow를 생성하거나, 해당 객체를 Microflow로 검색하십시오.
2. Microflow에서 이전에 내보내기에 사용하도록 설정한 템플릿인 단일 객체를 검색하십시오.

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/retrieve-template.png" class="no-border" >}}

3. Microflow에서 **XLSReport.GenerateExcelDoc** Java 액션(모듈의 **JavaActions** 폴더에서 사용 가능)을 호출하여 필요한 객체를 모듈에 전달하십시오.

    {{< figure src="/attachments/howto9/integration/using-the-excel-exporter/java-action.png" class="no-border" >}}

4. Microflow에서 결과 FileDocument 객체를 다운로드하십시오.

Microflow는 다음과 유사하게 표시됩니다:

{{< figure src="/attachments/howto9/integration/using-the-excel-exporter/microflow-for-generate.png" class="no-border" >}}

## Microflow 실행하기

앱에서 현재 두 가지가 누락되어 있습니다:

* 다운로드할 데이터가 없습니다
* Microflow를 실행할 방법이 없습니다

아래 섹션에서 이러한 누락된 사항을 추가하십시오.

### 데이터 생성하기

일부 데이터를 입력할 수 있도록 다음 단계에 따라 페이지를 생성하고 데이터를 입력하십시오:

1. Domain Model에서 **Policy** Entity를 마우스 오른쪽 버튼으로 클릭하고 **Generate overview pages...**를 선택하십시오.
2. **Policy**를 선택하고 **OK**를 클릭하십시오.
3. 생성된 개요 페이지를 홈 페이지 또는 앱 내비게이션을 통해 앱에 연결하십시오.
4. 앱을 실행하고 일부 데이터를 입력하여 **Policy** 객체를 생성하십시오.

### Microflow 실행하기

위에서 생성한 Microflow를 실행하려면, 내비게이션에 추가되는 다른 Microflow를 생성해야 합니다. 이 Microflow는 **PolicyDoc** 객체를 생성하고 루프를 사용하여 기존 **Policy** 객체와 연관시키며, 루프 후 모든 연관이 커밋되도록 하고, 이 PolicyDoc을 Microflow에 매개변수로 전달해야 합니다. 이렇게 하면 **PolicyDoc**과 연관시킨 모든 Policy 객체가 내보내기됩니다.

새 Microflow는 다음과 유사하게 표시됩니다:

{{< figure src="/attachments/howto9/integration/using-the-excel-exporter/associating-objects.png" class="no-border" >}}

{{% alert color="info" %}}
**Policy** 객체와 연관이 *없는* **PolicyDoc**을 생성하면, 템플릿에 정의된 구조를 가진 빈 스프레드시트가 내보내집니다.
{{% /alert %}}

## 더 읽기

* [Excel 문서 가져오기](/howto9/integration/importing-excel-documents/)
