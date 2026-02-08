---
title: "Microflow에서 Call REST Service 액션 사용하기"
url: /refguide10/integration/use-call-rest-action-in-microflow/
weight: 15
description: "기존 시스템 또는 레거시 시스템을 Microflow에서 REST 서비스를 호출하여 Mendix 앱에 통합하는 방법을 설명합니다."
description: "REST 서비스에서 정보를 가져오는 방법을 설명합니다."
aliases:
    - /howto10/integration/consume-a-rest-service/
---

## 소개

Mendix 앱에서 REST 서비스의 정보를 사용할 수 있습니다. 이 사용 방법 문서에서는 REST 서비스에서 Wikipedia 페이지를 검색하는 앱을 만드는 예제를 통해 그 방법을 보여줍니다. 결과 앱은 [다운로드할 수 있습니다](/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/WikipediaApi.mpk).

이 사용 방법 문서에서는 다음을 배우게 됩니다:

* Microflow에서 REST 서비스 호출

## JSON Structure 생성

Wikipedia REST 서비스를 사용하면 페이지의 요약을 검색할 수 있습니다. 이 서비스는 `https://en.wikipedia.org/api/rest_v1/page/summary/{title}`에서 접근할 수 있으며, `{title}`은 페이지의 제목입니다.

아래 단계에서는 REST 서비스가 반환하는 내용의 예로 Studio Pro를 사용합니다:

1. 브라우저를 열고 [https://en.wikipedia.org/api/rest_v1/page/summary/Tahiti](https://en.wikipedia.org/api/rest_v1/page/summary/Tahiti)로 이동합니다. 이렇게 하면 `GET` 요청으로 REST 서비스가 호출됩니다. 결과는 [Wikipedia의 Tahiti 페이지](https://en.wikipedia.org/wiki/Tahiti) 요약이 JSON 형식으로 표시됩니다.
2. 전체 JSON 스니펫을 복사합니다.
3. 모듈을 생성하고 이름을 *RESTconsume*으로 지정합니다.
4. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **JSON structure**를 선택하여 새 [JSON structure](/refguide10/json-structures/)를 모듈에 추가합니다.
5. **Name** 필드에 *JSON_structure*를 입력하고 **OK**를 클릭합니다.
6. **JSON Structure** 대화 상자의 **General** 탭에 JSON 스니펫을 붙여넣고 **Structure** 섹션에서 **Refresh**를 클릭합니다. 이렇게 하면 JSON 스니펫의 구조가 분석되어 표현됩니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/json-structure.png" class="no-border" >}}

7. **OK**를 클릭합니다.

## Import Mapping 생성 {#create-import-mapping}

[Import Mapping](/refguide10/import-mappings/)은 JSON이 [Entity](/refguide10/entities/)와 어떻게 관련되는지 지정합니다. 원하는 Entity에 JSON을 매핑할 수 있습니다. 다음 단계에서는 Entity를 생성하고 Import Mapping을 만드는 방법을 설명합니다:

1. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Import Mapping**을 선택합니다.
2. **Name** 필드에 *Import_mapping*을 입력하고 **OK**를 클릭합니다.
3. **Select schema elements for import mapping** 대화 상자에서 **JSON structure** 라디오 버튼을 클릭한 다음 **Select**를 클릭합니다.
4. **Select JSON Structure** 대화 상자에서 **JSON_structure**를 더블 클릭합니다.
5. **Expand all**을 클릭한 다음 **Check all**을 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/import-mapping.png" class="no-border" >}}

6. **OK**를 클릭합니다. 오른쪽에 JSON 구조가 있는 **Import_mapping** 문서가 표시됩니다.
7. 편집기 도구 모음에서 **Map automatically**를 클릭합니다.
8. **적용된 변경 사항의 세부 정보를 확인**할 수 있는 팝업 상자가 표시됩니다. **Details**를 클릭하여 JSON 구조에 맞게 생성된 Entity에 대한 매핑 세부 정보를 확인합니다.
9. **Close**를 클릭하여 JSON 구조에 해당하는 Entity를 확인합니다.

## Domain Model에 입력 Entity 추가

서비스는 페이지 제목을 입력으로 받아 Wikipedia에서 페이지 요약을 반환합니다.

이 섹션에서는 이 입력을 나타내는 Entity를 생성하고 요약과 연결합니다.

Domain Model에 입력 Entity를 추가하려면 다음 단계를 따르세요:

1. **App Explorer**에서 **Domain model**을 더블 클릭합니다.
2. **Root**를 *Summary*로 이름을 변경합니다.
3. **Toolbox**에서 Entity를 Domain Model로 끌어다 놓습니다.
4. Entity를 더블 클릭하고 **Name**에 *Input*을 입력합니다.
5. **Persistable**에서 **No**를 선택합니다.
6. **Attributes** 탭에서 **New**를 클릭하여 문자열 속성을 추가하고 이름을 *Title*로 지정한 다음 **OK**를 클릭합니다.
7. **Input**에서 **Summary**로 연결(Association)을 끌어다 놓습니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/domain-model.png" class="no-border" >}}

8. **App Explorer**에서 **Import_mapping**을 더블 클릭하고 **Connector** 창에서 **Input**을 Import Mapping의 입력 매개변수로 끌어다 놓습니다.
9. **Summary**를 더블 클릭합니다.
10. **Map entity 'Summary' from schema object element 'Root** 대화 상자에서 **Set association**을 **Yes**로 설정하고 **Association**에 **RESTconsume_input_Summary**를 선택하여 Import Mapping이 연결을 설정할 수 있도록 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/map-entity-from-input-mapping.png" alt="map entity from input mapping" class="no-border" >}}

11. **OK**를 클릭합니다.

## Microflow에서 REST 서비스 호출 {#call-microflow}

이제 [Microflow](/refguide10/microflows/)에서 REST 서비스를 호출하여 Wikipedia와의 통합을 구축합니다. Microflow의 입력 매개변수는 **Summary**와 연결된 **Input**입니다.

Microflow에서 REST 서비스를 호출하려면 다음 단계를 따르세요:

1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add Microflow**를 선택합니다. 기본 이름 **Microflow**를 수락하고 **OK**를 클릭합니다.
2. 도구 모음에서 **Parameter** 객체를 Microflow 문서로 끌어다 놓습니다.
3. **Data type**에서 **Select**를 클릭하고 입력 매개변수로 **Input** Entity를 선택합니다. **OK**를 클릭합니다.
4. 마우스 오른쪽 버튼을 클릭하고 **Add** > **Activity**를 선택하여 Microflow에 삽입합니다. 활동을 더블 클릭하고 **Call REST service**를 선택하여 액션 유형을 변경합니다.
5. **Call REST** 대화 상자에서 **Location**의 **Edit**를 클릭하고 **Template**에 다음을 추가합니다: `https://en.wikipedia.org/api/rest_v1/page/summary/{1}`, 매개변수는 **Input** 매개변수의 Title 속성 `$Input/Title`입니다. **OK**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/location.png" class="no-border" >}}

6. **Response** 탭에서 Import Mapping을 사용하여 응답을 매핑해야 합니다. **Response handling**에서 **Apply import mapping**을 선택합니다.
7. **Mapping**에서 **Select**를 클릭하고 **Import_mapping**을 더블 클릭합니다. **Parameter**에서 **Input**을 선택합니다.
8. **Output**에서 **Store in variable**에 **Yes**를 선택하고 **Variable name**에 *Summary*를 지정합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/response.png" class="no-border" >}}

9. **OK**를 클릭합니다.
10. **Call REST service** 객체 뒤를 마우스 오른쪽 버튼으로 클릭하고 **Insert** > **Activity**를 선택합니다. 더블 클릭하여 **Change object**로 변경합니다.
11. **Input Object**에서 **Input (RESTconsume.Input)**을 선택합니다.
12. **Refresh in client**에서 **Yes**를 선택합니다. 이렇게 하면 화면에 요약이 표시됩니다.
13. 액션을 추가하려면 **New**를 클릭합니다.
14. **Edit Change Item** 대화 상자에서 **Member**에 **RESTconsume.Input_Summary (RESTconsume.Summary)**를 선택합니다.
15. **Value** 아래에 `$Summary`를 입력합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/set-association.png" class="no-border" >}}

16. **OK**를 클릭합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/change-object.png" class="no-border" >}}

17. **OK**를 클릭합니다. 문서 제목을 입력으로 받아 요약과 연결하는 Microflow를 만들었습니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/microflow.png" class="no-border" >}}

REST 서비스를 성공적으로 사용하고 결과를 표시하는 Microflow를 만들었습니다. 이 사용 방법의 나머지 부분에서는 이 Microflow를 앱에서 사용하여 REST 호출이 실제로 작동하는 것을 확인하는 방법을 설명합니다.

## 페이지 생성

이 앱의 페이지를 만들려면 다음 단계를 따르세요:

1. **Home_Web**을 열고 **Data view**를 추가합니다.
2. **[Unknown]** 바를 마우스 오른쪽 버튼으로 클릭하고 **Select entity**를 클릭한 다음 **Input** Entity를 선택합니다.
3. **Data source – Type**에서 **Microflow**를 선택합니다.
4. **Microflow Name**에 *CreateInput*을 입력합니다. 이 페이지가 로드될 때 새 **Input** 객체가 필요합니다. [CreateInput Microflow 작성](#createinput)에서 이 객체를 생성하는 **CreateInput** Microflow를 정의합니다.
5. **OK**를 클릭합니다.
6. **App Explorer**의 **Structure** 아래에 1행 2열의 새 **Table**을 추가합니다.
7. **Title** 필드를 왼쪽 열로 끌어다 놓습니다.
8. **Summary** 필드를 삭제합니다.
9. **App Explorer**에서 **Call Microflow button**을 오른쪽 열로 끌어다 놓습니다.
10. **Select Microflow** 대화 상자에서 **RESTconsume**을 확장하고 **Microflow**를 선택합니다. 이것은 위의 [Microflow에서 REST 서비스 호출](#call-microflow) 섹션에서 만든 Microflow입니다.
11. **Microflow** 버튼을 더블 클릭하고 **Edit Action Button** 대화 상자에서 버튼 캡션에 *Get summary*를 입력합니다.
12. 테이블 아래(다른 데이터 뷰 안에)에 **Data view**를 추가합니다.
13. **Connector**에서 **Summary** Entity를 **[Unknown]** 바로 끌어다 놓고 **OK**를 클릭합니다.
14. 이 데이터 뷰에서 **Extract**를 제외한 모든 필드를 삭제합니다.
15. **Extract**를 더블 클릭합니다.
16. **Show label**에서 **No**를 선택한 다음 **OK**를 클릭합니다.
17. **Save** 및 **Cancel** 버튼을 삭제합니다.

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/call-rest-action-in-microflow/page.png" class="no-border" >}}

## CreateInput Microflow 작성 {#createinput}

이제 **CreateInput** Microflow가 새 **Input** 객체를 생성하도록 하는 것만 남았습니다.

CreateInput Microflow를 작성하려면 다음 단계를 따르세요:

1. **App Explorer**에서 **CreateInput**을 더블 클릭합니다.
2. **Toolbox**에서 **Create object** 활동을 Microflow로 끌어다 놓습니다.
3. 활동을 더블 클릭합니다.
4. **Entity**에서 **Select**를 클릭하고 **Input**을 더블 클릭한 다음 **OK**를 클릭합니다.
5. 빨간색 **End event**를 더블 클릭합니다.
6. **Return value** 아래에 `$NewInput`을 입력한 다음 **OK**를 클릭합니다.

이제 앱을 시작하고 Wikipedia에서 요약을 가져올 수 있습니다.

## 더 보기

* [복잡한 웹 서비스 사용하기](/howto10/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 사용하기](/howto10/integration/consume-a-simple-web-service/)
* [XML 문서 내보내기](/howto10/integration/export-xml-documents/)
* [XML 문서 가져오기](/howto10/integration/importing-xml-documents/)
* [Excel 문서 가져오기](/howto10/integration/importing-excel-documents/)
* [웹 서비스 노출하기](/howto10/integration/expose-a-web-service/)
* [OData를 사용하여 BI 도구에 데이터 노출하기](/howto10/integration/exposing-data-to-bi-tools-using-odata/)
* [보안 고려 사항](/refguide10/call-rest-action/#security)
