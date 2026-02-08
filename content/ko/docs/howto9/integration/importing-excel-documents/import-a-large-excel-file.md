---
title: "대용량 Excel 파일 가져오기"
url: /howto9/integration/import-a-large-excel-file/
---

## 소개

간혹 클라이언트가 데이터 가져오기를 요청하는 경우가 있습니다. 처음에는 큰 작업이 아닌 것처럼 보이므로, 작업으로 추가하고 하루가 끝날 때 처리할 계획을 세웁니다.

나중에 시트를 살펴보면, 애플리케이션에 가져와야 할 열이 100개 이상이라는 것을 알게 됩니다. 이는 수동 작업이 많다는 의미입니다. 각 열은 속성을 나타내므로, 가져오기 Entity에 100개 이상의 새 속성을 수동으로 생성하면 오랜 시간이 걸립니다.

핵심은 XML-도메인 매핑을 사용하는 것입니다.

XML-도메인 매핑을 사용하여 Excel 시트에서 반자동 방식으로 새로운 가져오기 Entity를 빠르게 생성할 것입니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 많은 열이 있는 대용량 Excel 파일을 빠르게 가져오기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* Mendix Marketplace에서 [MxModel Reflection](/appstore/modules/model-reflection/) 및 [Excel Importer](/appstore/modules/excel-importer/) 모듈이 설치 및 구성된 앱 보유

## Excel 시트 수정하기

이 시나리오에서 받는 Excel 시트에는 전 세계 거의 모든 국가가 포함되어 있으며, 각 국가에 대해 일부 데이터가 저장되어 있습니다. 이 데이터를 애플리케이션에 가져와야 합니다.

Excel 시트는 여기에서 찾을 수 있습니다: [Countries](/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/Countries.xlsx).

나중에 모델에 가져올 수 있도록 Excel 시트의 헤더에서 XSD 스키마를 만들 것입니다.

Excel 시트를 수정하려면 다음 단계를 따르십시오:

1. 모든 국가 이름이 포함된 헤더 행을 선택하십시오.
2. 행 바꿈 기능을 사용하여 새 시트에 복사하여 붙여넣으십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398888.png" class="no-border" >}}

    헤더가 세로로 나열되어야 하며 시트는 다음과 같아야 합니다: [Countries Transposed](/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/CountriesTransposed.xlsx).

    이제 열 주위에 일부 태그를 추가할 준비가 되었습니다.

3. 왼쪽에 열 하나를 추가하십시오.
4. 셀 **A1**에 다음 문자열을 넣으십시오:

    ```text
    <xs:element type="xs:string" name="
    ```

5. 마지막 국가까지 아래로 끌어다 놓으십시오.

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398889.png" class="no-border" >}}

6. 셀 **C1**에 다음 문자열을 입력하십시오:

    ```text
    "/>
    ```

7. 이전 문자열과 마찬가지로 마지막 국가까지 아래로 끌어다 놓으십시오. Excel 시트는 이제 다음과 같아야 합니다: [Countries with Tags](/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/CountriesWithTags.xlsx).

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398890.png" class="no-border" >}}

    이제 세 개의 서로 다른 열을 하나의 열로 합쳐야 합니다. 이는 나중에 전체 열을 XSD 파일에 복사하기 위해 필요합니다.

8. 셀 **D1**을 선택하고 수식 상자에 다음을 입력하십시오:

    ```text
    =(A1&B1&C1)
    ```

9. 열 **A1**과 **C1**에서 했던 것처럼 셀을 아래로 끌어다 놓으십시오. 이제 열 **D**에 열 **A**, **B**, **C**가 하나로 결합되어 있어야 하며, 시트는 다음과 같아야 합니다: [Countries with Tags and Column D](/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/CountriesWithTagsAndColumnD.xlsx).

## XSD 파일 준비하기

Excel의 기본 기능 중 일부를 사용하여 XSD 구조의 첫 번째 부분을 만드는 데 도움을 받았습니다. 적절한 XSD 파일을 위해서는 여전히 헤더와 푸터가 필요합니다. 여기서 선호하는 텍스트 편집기를 사용합니다(예: Brackets).

XSD 파일을 준비하려면 다음 단계를 따르십시오:

1. 새 파일을 열고 이름을 *CountriesImport.xsd*로 지정하십시오.
2. XSD 파일의 헤더로 이 텍스트를 넣으십시오:

    ```xsd
    <?xml version="1.0"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="unqualified" elementFormDefault="qualified">
    <xs:element name="CountriesImport">
    <xs:complexType>
    <xs:sequence>
    ```

3. 시트로 돌아가서 열 **D**의 내용을 복사하여 헤더 아래에 붙여넣으십시오.
   {{% alert type="info" %}}Excel에서 복사한 내용에 추가 따옴표가 포함될 수 있습니다. 이를 제거하려면 Excel 내용을 Word에 붙여넣은 다음, Word에서 복사하여 XSD 파일에 붙여넣으십시오.{{%/alert%}}

4. 이제 XSD 파일을 완성할 푸터를 넣을 차례입니다. 푸터로 이 텍스트를 넣으십시오:

    ```xsd
    </xs:sequence>
    </xs:complexType>
    </xs:element>
    </xs:schema>
    ```

    파일은 다음과 같아야 합니다: [Country Import](/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/CountryImport.xsd).

5. 저장하는 것을 잊지 마십시오!

## 애플리케이션 프로젝트에 가져오기

XSD 파일을 가져올 준비가 되었습니다. 가져오려면 다음 단계를 따르십시오:

1. 앱을 열고 새 XSD 스키마를 생성하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398893.png" class="no-border" >}}

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/create.png" class="no-border" >}}

2. 새 XSD 스키마가 생성되면 XML-도메인 매핑을 생성할 차례입니다. 이것이 작업을 수행하고 생활을 조금 편하게 해줍니다.

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398895.png" class="no-border" >}}

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398896.png" class="no-border" >}}

3. 모든 속성을 체크하십시오! **OK**를 클릭하면 모든 국가가 포함된 매핑 Entity가 표시됩니다.

4. 이제 Excel 시트의 가져오기 테이블로 사용할 수 있는 실제 Entity를 생성합니다. **Map automatically**를 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398897.png" class="no-border" >}}

    Entity가 생성되었습니다!

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398898.png" class="no-border" >}}

5. Domain Model로 이동하여 Entity의 **Persistable** 속성을 **Yes**로 설정하면 작업이 완료됩니다!

    {{< figure src="/attachments/howto9/integration/importing-excel-documents/import-a-large-excel-file/19398899.png" class="no-border" >}}

6. 애플리케이션을 깨끗하게 유지하려면 앱에서 XSD 스키마와 XML-도메인 파일을 삭제할 수 있습니다.

이 기법을 보여주는 비디오는 아래에서 볼 수 있습니다:

{{< youtube 8qLyIoUqKEE >}}

즐거운 모델링 되세요!
