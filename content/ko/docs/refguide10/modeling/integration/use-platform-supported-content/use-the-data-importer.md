---
title: "Data Importer 사용하기"
url: /refguide10/use-the-data-importer/
weight: 21
description: "Studio Pro의 Data Importer 개요"
aliases: 
   - /howto10/integration/use-the-data-importer/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

데이터는 조직 내부 및 외부의 다양한 시스템 간에 지속적으로 교환됩니다. 데이터 교환에 가장 일반적으로 사용되는 파일 형식은 Microsoft Excel 및 쉼표로 구분된 값(CSV)입니다. 이러한 파일에는 행, 열 및 구분 기호로 구분된 값의 테이블 형태로 데이터가 포함되어 있습니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* 샘플 대표 파일(Excel 및 CSV)을 사용하여 Data Importer 문서 만들기
* 도메인 모델에 비영속(non-persistable) 엔티티 만들기
* 사용자 정의 **Import data from file** 액티비티를 사용하여 데이터 가져오기

## 사전 요구 사항

Marketplace에서 [Data Importer 확장 기능](https://marketplace.mendix.com/link/component/219833)을 다운로드하고 [앱에 추가](/appstore/use-content/#install)하세요. 이 모듈에는 다음도 필요합니다:

* Studio Pro [10.4](/releasenotes/studio-pro/10.4/) 이상
* 파일 문서(자세한 정보는 [File Manager](/refguide10/file-manager/) 참조)

## Data Importer 문서

Data Importer 확장 기능을 사용하면 Excel 및 CSV 파일에서 앱으로 직접 데이터를 가져올 수 있습니다. Data Importer 문서를 만들어 가져올 열과 가져온 데이터를 보유할 비영속 엔티티(NPE) 및 소스-대상 매핑을 정의하세요. Data Importer 문서를 만드는 동안 데이터를 미리 보고 가져올 열을 선택하며 결과 엔티티의 이름을 편집할 수 있습니다.

Data Importer 문서는 [Import data from file](/refguide10/import-data-from-file/) 사용자 정의 액티비티와 함께 사용할 수 있습니다. 마이크로플로우에서 이 액티비티를 사용하여 Excel 또는 CSV 파일에서 데이터를 가져오세요.

### Data Importer 문서 만들기

Data Importer 문서를 추가할 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Data Importer**를 클릭하세요.

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/data-importer-menu.png" class="no-border" width="600" >}}

문서 이름을 지정하고 **OK**를 클릭하면 새 Data Importer 문서가 열립니다.

### Excel 데이터 미리보기 {#preview-excel-data}

**Select a local file**을 클릭하여 Excel 파일(*.xls* 또는 *.xslx*)을 가져오세요.

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/select-file-for-preview.png" class="no-border" width="600" >}}

**Select Source File** 필드에서 파일을 선택하거나 놓으세요. Excel 통합 문서에는 단일 또는 여러 시트가 있을 수 있으며, 데이터를 가져올 시트를 선택하고 헤더 행과 시작 데이터 행을 지정할 수 있습니다.

* **Sheet Name** – 데이터를 가져올 워크시트의 이름. Excel에 여러 워크시트가 있는 경우 드롭다운에 이름이 표시됩니다
* **Header Row No.** – 파일 헤더의 행 번호. 기본값은 1입니다
* **Read Data From Row No.** – 데이터 읽기 시작 줄. 기본값은 2입니다

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/select-sheet-and-header-data-row.png" class="no-border" width="600" >}}

**Preview Source Data & Entity**를 클릭하여 파일의 데이터를 확인하세요. 소스 파일의 처음 10개 데이터 행이 데이터 미리보기 섹션에 표시됩니다. 샘플 파일에 10개 미만의 데이터 행이 있으면 사용 가능한 행만 표시됩니다. 열 이름은 엔티티 내의 속성 이름에 해당하며, 시트 이름은 엔티티를 정의하는 데 사용됩니다.

모든 열이 가져오기를 위해 자동으로 선택(체크)됩니다. 사용하지 않으려는 열의 체크를 해제할 수 있습니다. 테이블 하단에서 Excel 파일의 첫 번째 데이터 행에 정의된 셀 유형을 기반으로 한 속성의 대상 데이터 유형을 볼 수 있습니다. 데이터 유형이 올바르지 않으면 첫 번째 데이터 행의 셀 유형을 확인하고 정의를 적절히 조정하세요.

{{% alert color="warning" %}} Mendix 명명 규칙을 따르지 않는 열 이름은 자동으로 수정됩니다. **Number** 셀 유형의 경우 정수와 소수를 수용하기 위해 대상 Mendix 유형이 **Decimal**로 매핑됩니다. {{% /alert %}}

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/preview-data-and-entity.png" class="no-border" width="600" >}}

### CSV 데이터 미리보기 {#preview-csv-data}

**Select Source File** 창에서 CSV 파일을 선택하거나 놓으세요. CSV 가져오기는 구분자/구분 기호, 따옴표 및 이스케이프 문자의 여러 조합을 지원합니다. 또한 헤더 행이 없는 파일 가져오기도 지원합니다.

네 가지 구성(Delimiter, Quote Character, Escape Character, Add Header Row)에 대한 값을 지정하세요:

* **Delimiter (Separator)** – 현재 지원되는 구분자는 쉼표, 세미콜론, 파이프 및 탭입니다. 기본값은 쉼표입니다
* **Quote Characters** – 현재 지원되는 따옴표 문자는 작은따옴표와 큰따옴표입니다. 기본값은 큰따옴표입니다
* **Escape Characters** – 현재 지원되는 이스케이프 문자는 백슬래시, 작은따옴표 및 큰따옴표입니다. 기본값은 큰따옴표입니다
* **Add Header Row** – 헤더 행을 추가할지 또는 헤더 행이 이미 CSV 파일의 일부인지 지정합니다. 기본값은 헤더 행이 파일에 이미 포함되어 있는 것입니다

**Preview Source Data & Entity**를 클릭하여 파일의 데이터를 확인하세요. 소스 파일의 처음 10개 행이 데이터 미리보기 섹션에 표시됩니다. 파일 이름은 엔티티(NPE)를 정의하는 데 사용되지만 편집할 수 있습니다. 열 이름은 엔티티 내의 속성 이름에 해당합니다.

모든 열이 기본적으로 선택(체크)됩니다. 가져오지 않으려는 열의 체크를 해제할 수 있습니다. 테이블 하단에서 기본적으로 **String**인 속성의 대상 데이터 유형을 볼 수 있습니다.

{{% alert color="warning" %}} Mendix 명명 규칙을 따르지 않는 열 이름은 자동으로 수정됩니다. {{% /alert %}}

예를 들어, 다음 소스 데이터(CSV)의 경우, 구분자는 Comma로 지정되고 Quote 및 Escape Character는 Double Quote이며 Header입니다. 이것은 이미 입력 파일의 일부입니다.

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/source-csv-data.png" class="no-border" width="600" >}}

데이터 미리보기와 결과 엔티티는 아래에서 확인할 수 있습니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/preview-csv-data-and-entity.png" class="no-border" width="600" >}}

### 엔티티 편집하기 {#edit-entity}

**Entity Preview** 섹션에서 엔티티를 편집할 수 있습니다. Data Importer는 다음과 같은 다양한 방법을 지원합니다:

* 결과 엔티티의 이름 편집
* 엔티티의 속성 이름 편집
* 주어진 속성의 데이터 유형 편집

**Entity Preview** 오른쪽 상단의 **Edit**을 클릭하세요. 엔티티의 이름을 변경할 수 있는 팝업 창이 표시됩니다. 속성의 이름도 변경할 수 있습니다. *Original Name*은 입력 파일의 열 이름이고 *Attribute Name*은 이 열에 할당하려는 새 이름입니다. 아래와 같이 드롭다운에서 관련 값을 선택하여 이 속성의 데이터 유형을 변경할 수도 있습니다.

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/edit-csv-entity.png" class="no-border" width="600" >}}

변경 사항에 만족하면 **OK**를 클릭하여 저장하거나 **Cancel**을 클릭하여 변경 사항을 취소하세요.

{{% alert color="info" %}}
**Edit Entity** 기능은 CSV 가져오기에 유용합니다. CSV 파일의 모든 열이 기본적으로 String으로 표시되므로 필요한 경우 데이터 유형을 변경할 수 있습니다. 다음 표는 소스-대상 데이터 변환 매트릭스를 보여줍니다:

입력 CSV 파일

| Source Type | Target- String | Target- Int | Target- Long | Target- Decimal | Target- Boolean | Target- DateTime |
| :-------- | :------- | :-------- | :------- | :-------- | :------- | :-------- |
| String  | Yes    | Partial    | Partial    | Partial    | Partial    | No    |

입력 Excel 파일

| Source Type | Target- String | Target- Int | Target- Long | Target- Decimal | Target- Boolean | Target- DateTime |
| :-------- | :------- | :-------- | :------- | :-------- | :------- | :-------- |
| String  | Yes    | Partial    | Partial    | Partial    | Partial    | No    |
| Boolean  | Yes    | No    | No    | No    | Yes    | No    |
| Decimal  | Yes    | Partial    | Partial    | Yes    | No    | No    |
| DateTime  | Yes    | No    | No    | No    | No    | Yes    |

**Partial** - 소스 데이터가 유효하고 범위 내에 있으면 대상 데이터 유형으로 변환됩니다.

{{% /alert %}}

{{% alert color="warning" %}}

* **Enum**은 대상 데이터 유형으로 지원되지 않습니다
* 다양한 이유(예: 유효하지 않은 데이터, 데이터 잘림, 캐스팅 등)로 입력 데이터를 원하는 대상 데이터 유형으로 변환할 수 없는 경우 런타임 예외가 발생할 수 있습니다
{{% /alert %}}

### 엔티티 만들기 {#create-entity}

엔티티 편집을 마치면 **Create Entity** > **OK**를 클릭하세요. 도메인 모델에 엔티티가 생성됩니다. 또한 엔티티가 도메인 모델에 생성되어 사용할 준비가 되었다는 확인 메시지를 볼 수 있습니다.

엔티티가 생성되면 소스 열에서 대상 엔티티 속성으로의 매핑을 볼 수 있습니다.

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/source-to-target-mapping.png" class="no-border" width="600" >}}

Data Importer 문서 작성이 완료되었으며 마이크로플로우에서 데이터를 가져오는 데 사용할 수 있습니다.

## 앱 구축하기 {#build-data-importer-app}

새로 만든 Data Importer 문서를 사용하면 다른 앱이나 시스템에서 생성된 Excel 또는 CSV 파일에서 주기적으로 데이터를 가져올 수 있습니다.

### 사용자 정의 액티비티 {#Import-data-from-file}

**Import data from file** 액티비티는 **Toolbox**의 **Integration activities** 아래에 있습니다. 더블클릭하여 속성을 확인하세요:

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/custom-activity-params.png" class="no-border" width="600" >}}

**Input** 섹션에는 다음이 포함됩니다:

* **File** – 데이터를 가져올 파일의 이름
* **Data Importer document** – 설계 시간 흐름의 끝에서 만든 Data Importer 문서

**Output** 섹션에는 다음이 포함됩니다:

* **Return Type** – Data Importer 문서에 정의된 NPE 목록으로 설정됩니다
* **Variable name** – **EntityName** 목록으로 자동 채워집니다

### 페이지 구축

**Import data from file** 사용자 정의 액티비티에는 데이터를 가져올 입력 파일이 필요합니다. 아래 예에서는 `System.FileDocument`가 업로드되고 사용자 정의 액티비티에 전달되는 페이지를 구축합니다.

1. 홈 페이지를 열고 버튼을 추가하고 *Upload Customer Data*로 이름을 지정하세요.
2. 버튼을 더블클릭하고 **Events** 필드의 **On click** 드롭다운에서 **Create object**를 선택하여 `System.FileDocument` 엔티티를 만드세요.
3. 파일이 업로드되는 새 페이지(**UploadCustomerData**)로 제어를 전달하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/home-page-button.png" class="no-border" width="600" >}}

4. **UploadCustomerData** 페이지에서 *FileDocument*에 대한 데이터 뷰를 포함하고 파일 업로드를 지원하는 'File Manager'를 포함하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/data-view-file-manager.png" class="no-border" width="600" >}}

5. **Toolbox**를 열고 **Call microflow button**을 추가하세요.

6. **New**를 클릭하고 마이크로플로우(Microflow) 이름을 *Import Customer Data*로 지정하세요. 매개변수 섹션에 **FileDocument**도 표시됩니다. 이 상자가 체크되어 매개변수로 포함되도록 하고 **OK**를 클릭하세요.

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/add-parameter.png" class="no-border" width="600" >}}

### 마이크로플로우에서 Import data from file 액티비티 구성

{{% alert color="info" %}}
아래 단계는 Excel 입력 파일과 해당 Data Importer 문서를 사용하여 표시됩니다. CSV 입력 파일에서 데이터를 가져오려면 Excel 문서를 CSV 문서로 대체할 수 있습니다.
{{% /alert %}}

1. 만든 마이크로플로우에서 **Import data from file** 액티비티를 드래그하세요. 이 액티비티는 **Toolbox**의 **Integration activities** 아래에서 찾을 수 있습니다.

   {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/integration-activity.png" class="no-border" width="600" >}}

2. **Import data from file** 액티비티가 마이크로플로우에 추가되면 콘솔에 세 개의 오류가 표시됩니다:

   {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/custom-activity.png" class="no-border" width="600" >}}

    이 오류를 해결하려면 액티비티를 더블클릭하고 **File** 필드에서 파일 업로드 페이지에서 이 마이크로플로우에 매개변수로 전달된 입력 파일을 선택하세요.

3. **Data Importer document** 필드에서 **Select**를 클릭하고 사용할 Data Importer 문서를 선택하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/choose-data-importer-template.png" class="no-border" width="600" >}}

    Data Importer 문서를 선택한 후 **Return type** 및 **Variable name**이 자동으로 채워집니다. 원하시면 출력 변수의 이름을 변경할 수 있습니다.

4. **OK**를 클릭하세요. 사용자 정의 액티비티가 구성되고 모든 오류가 해결됩니다.

    {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/configured-custom-activity.png" class="no-border" width="600" >}}

5. **Aggregate list** 액티비티를 추가하고 이전 액티비티에서 반환된 'CustomerList'의 크기를 세도록 구성하세요.

   {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/aggregate-list.png" class="no-border" width="600" >}}

6. **Show message** 액티비티를 구성하세요. 아래 예와 같이 템플릿 메시지와 매개변수를 사용할 수 있습니다.

   {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/show-message-with-list-size.png" class="no-border" width="600" >}}

7. 나중에 사용할 수 있도록 **Import data from file** 액티비티의 반환 값으로 '$CustomerList'를 설정하세요. 완성된 마이크로플로우는 아래 이미지와 같아야 합니다.

   {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/example-microflow.png" class="no-border" width="600" >}}

8. 앱을 로컬에 배포하세요. Data Importer 문서를 만들 때 템플릿으로 사용한 파일과 유사한 입력 파일을 찾아 업로드하세요.
9. **Imported xx rows from input file into a list of NPEs**라는 메시지가 표시되는지 확인하세요.

   {{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/use-the-data-importer/local-app-run.png" class="no-border" width="600" >}}

Data Importer 확장 기능을 성공적으로 구성하고 사용했습니다. 요구 사항에 따라 확장할 수 있습니다. 예를 들어, 메시지 정의를 제공하여 NPE 목록을 영속 엔티티로 변환하거나, 각 루프 구성을 사용하여 개별적으로 엔티티를 생성하고 데이터베이스에 커밋할 수 있습니다.
