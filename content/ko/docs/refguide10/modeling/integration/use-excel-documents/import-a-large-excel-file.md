---
title: "대용량 Excel 파일 가져오기"
url: /refguide10/import-a-large-excel-file/
weight: 10
aliases: /howto10/integration/import-a-large-excel-file/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 소개

XML-to-domain 매핑을 사용하여 Excel 시트에서 빠르고 반자동화된 방식으로 새 가져오기 엔티티를 만드세요. 또한 Excel 파일을 기반으로 플레이스홀더 엔티티를 완전히 자동으로 만드는 새로운 방법도 있습니다. **Data Importer Extension을 사용하여 대용량 Excel로 엔티티 만들기** 섹션을 참조하세요.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* 많은 열이 있는 대용량 Excel 파일 가져오기

## 사전 요구 사항

이 사용 방법 문서를 시작하기 전에 다음 사전 요구 사항을 완료하십시오:

* Mendix Marketplace에서 [MxModel Reflection](/appstore/modules/model-reflection/) 및 [Excel Importer](/appstore/modules/excel-importer/) 모듈이 설치되고 구성된 앱이 있어야 합니다.

## Excel 시트 수정하기

이 시나리오에서 받은 Excel 시트에는 거의 모든 국가와 일부 지원 데이터가 포함되어 있습니다. 이 데이터를 애플리케이션에 가져와야 합니다.

Excel 시트는 여기에서 찾을 수 있습니다: [Countries](/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/Countries.xlsx).

Excel 시트의 헤더에서 XSD 스키마를 만들어 데이터를 모델로 가져올 것입니다.

Excel 시트를 수정하려면 다음 단계를 따르세요:

1. 모든 국가 이름이 있는 헤더 행을 선택하세요.
2. 행 바꿈 기능을 사용하여 새 시트에 복사하여 붙여넣으세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/transpose.png" class="no-border" >}}

    헤더가 세로로 나열되어야 하며 시트는 다음과 같아야 합니다: [Countries Transposed](/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/CountriesTransposed.xlsx).

    이제 열 주위에 태그를 추가할 준비가 되었습니다.

3. 왼쪽에 열 하나를 추가하세요.
4. 셀 **A1**에 다음 문자열을 넣으세요:

    ```text
    <xs:element type="xs:string" name="
    ```

5. 마지막 국가까지 문자열을 끝까지 드래그하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/country-sheet.png" class="no-border" >}}

6. 셀 **C1**에 다음 문자열을 입력하세요:

    ```text
    "/>
    ```

7. 이전 문자열과 마찬가지로 마지막 국가까지 드래그하세요. Excel 시트는 이제 다음과 같아야 합니다: [Countries with Tags](/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/CountriesWithTags.xlsx).

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/countries-with-tags.png" class="no-border" >}}

    이제 세 개의 다른 열을 하나의 열로 그룹화하세요. 이것은 전체 열을 XSD 파일에 복사하기 위해 필요합니다.

8. 셀 **D1**을 선택하고 수식 상자에 다음을 입력하세요:

    ```text
    =(A1&B1&C1)
    ```

9. **A1** 및 **C1** 열에서 했듯이 셀을 아래로 드래그하세요. 이제 **D** 열에 **A**, **B**, **C** 열이 하나로 결합되어 있어야 하며, 시트는 다음과 같아야 합니다: [Countries with Tags and Column D](/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/CountriesWithTagsAndColumnD.xlsx).

## XSD 파일 준비하기

Excel의 기본 기능을 사용하여 XSD 구조의 첫 번째 부분을 만들었습니다. 올바른 XSD 파일을 위해서는 헤더와 푸터가 필요합니다. XSD 파일을 준비하려면 다음 단계를 따르세요:

1. 새 파일을 열고 *CountriesImport.xsd*로 이름을 지정하세요.
2. XSD 파일의 헤더로 다음 텍스트를 넣으세요:

    ```xsd
    <?xml version="1.0"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="unqualified" elementFormDefault="qualified">
    <xs:element name="CountriesImport">
    <xs:complexType>
    <xs:sequence>
    ```

3. 시트로 돌아가서 **D** 열의 내용을 복사하여 헤더 아래에 붙여넣으세요.

   {{% alert type="info" %}} Excel에서 복사한 내용에 추가 큰따옴표가 포함될 수 있습니다. 이를 제거하려면 Excel 내용을 Word에 붙여넣은 다음 Word에서 복사하여 XSD 파일에 붙여넣으세요. {{%/alert%}}

4. 다음 텍스트를 푸터로 넣으세요:

    ```xsd
    </xs:sequence>
    </xs:complexType>
    </xs:element>
    </xs:schema>
    ```

    파일은 다음과 같아야 합니다: [Country Import](/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/CountryImport.xsd).

5. **Save**를 클릭하세요.

## 애플리케이션 프로젝트에 가져오기

XSD 파일을 앱에 가져올 준비가 되었습니다. 가져오려면 다음 단계를 따르세요:

1. 앱을 열고 새 XSD 스키마를 만드세요. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **XML schema**를 선택하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/create-schema.png" class="no-border" width="600" >}}

2. 새 XSD 스키마를 사용하여 모듈을 마우스 오른쪽 버튼으로 클릭 > **Add other** > **Import mapping**으로 XML-to-domain 매핑을 만드세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/create-mapping.png" class="no-border" width="600" >}}

3. 나열된 모든 속성을 체크하세요. **OK**를 클릭하면 모든 국가가 포함된 매핑 엔티티를 볼 수 있습니다.

4. 이제 Excel 시트의 가져오기 테이블로 사용할 수 있는 실제 엔티티를 생성합니다. **Map automatically**를 클릭하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/map-automatically.png" class="no-border" width="400" >}}

    엔티티가 생성됩니다:

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/new-entity.png" class="no-border" >}}

5. 도메인 모델을 열고 엔티티의 **Persistable** 속성을 **Yes**로 설정하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/persistable-properties.png" class="no-border" >}}

아래 이미지에서 볼 수 있듯이 데이터가 페이지에 가져옵니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/large-file.png" class="no-border" >}}

애플리케이션을 깨끗하게 유지하려면 앱에서 XSD 스키마와 XML-to-domain 파일을 삭제할 수 있습니다.

이 기법을 보여주는 비디오는 아래에서 볼 수 있습니다:

{{< youtube 8qLyIoUqKEE >}}

## Data Importer Extension을 사용하여 대용량 Excel로 엔티티 만들기

{{% alert color="info" %}}
이 접근 방식에는 Mendix Studio Pro 10.7 이상이 필요합니다. 이 단계를 사용하여 CSV 파일에서 엔티티를 만들 수도 있습니다.
{{% /alert %}}

[Data Importer](/appstore/modules/data-importer/) 확장 기능을 사용하여 도메인 모델에 엔티티를 자동으로 만들 수 있습니다. 이 예에서는 동일한 입력 Excel(*countries.xlsx*)을 사용하여 엔티티를 만듭니다.

Excel 시트를 사용하여 도메인 모델에 엔티티를 만들려면 다음 단계를 따르세요:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Data Importer**로 이동하세요.
2. Data Importer 문서의 이름을 지정하세요. 그러면 샘플 파일을 업로드할 수 있습니다.
3. *Countries.xlsx* 파일을 놓거나 **Select a local file**을 클릭하여 파일로 이동하세요.
4. **Sheet Name**, **Header Row No**, **Read Data from** 측면에서 구성을 설정하세요.
5. **Preview Source Data & Entity**를 클릭하세요.
   * 열 이름이 Mendix 명명 규칙을 따르지 않으면 자동으로 수정됩니다.
   * 확장 기능이 각 열의 올바른 데이터 유형(string, boolean 또는 date 등)을 식별합니다.
6. 미리보기를 검토한 후 **Create Entity**를 클릭하면 도메인 모델에 비영속(non-persistable) 엔티티(NPE)가 생성됩니다.
   {{< figure src="/attachments/refguide10/modeling/integration/use-excel-documents/import-a-large-excel-file/create-entity-using-excel-input.png" class="no-border" >}}

    필요한 경우 나중에 엔티티의 이름을 변경하거나 영속성을 변경할 수 있습니다.
