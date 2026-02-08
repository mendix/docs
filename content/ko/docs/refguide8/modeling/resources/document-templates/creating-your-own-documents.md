---
title: "나만의 문서 만들기"
url: /refguide8/creating-your-own-documents/
description: "이 문서에서는 Mendix를 사용하여 문서를 만드는 방법에 대한 통찰력을 제공합니다."
---

## 소개

Mendix로 자신만의 문서를 만드는 방법이 궁금하셨나요? 이 참조 문서에서 그 방법을 알려드립니다!

Mendix를 사용하면 다양한 방식으로 문서를 생성할 수 있습니다. 여기에서는 자체 애플리케이션에서 문서를 생성하는 기본 사항을 배울 수 있습니다.

시작하기 전에 다음 페이지를 읽어보시기를 권장합니다:

* [Document Template](/refguide8/document-templates/)
* [Generate Documents](/refguide8/generate-document/)

## 문서 파악하기

Mendix로 문서를 생산하기 전에, 생산하려는 문서의 초안 버전을 만드는 것이 좋습니다. 종이에 스케치를 하거나 고객에게 예시를 제공해 달라고 요청할 수 있습니다. 어느 쪽이든 달성하려는 바를 염두에 두는 것이 좋습니다.

원하는 문서를 사용하여 이를 생산하기 위한 전략을 선택할 수 있습니다. Mendix는 기본 제공 Document Template 기능을 사용하여 문서를 생산하기 위한 다양한 옵션을 제공합니다.

예제를 통해 어떻게 작동하는지 살펴보겠습니다.

## 비즈니스 사례

이 애플리케이션에서 고객은 제품을 구매할 수 있습니다. 주문을 생성하고 구매하려는 제품을 선택하여 구매합니다. 고객에게 주문 개요를 제공하기 위해 PDF를 생성하여 확인 이메일의 첨부 파일로 고객에게 전송합니다. 주문에는 고객 세부 정보, 회사 로고, 가격이 포함된 제품 및 주문 총액이 표시되어야 합니다.

## Mendix 기본 기능으로 문서 생성하기

### Domain Model

이 애플리케이션의 Domain Model은 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_16-37-25.png" class="no-border" >}}

**Customer**는 주소 정보와 선호하는 커뮤니케이션 언어를 보유합니다. **Order**는 모든 주문 라인의 날짜와 합계를 보유합니다. **OrderLine** Entity에는 **Product**에 대한 고객별 가격이 있습니다. 문서를 생성하려면 **OrderDocument** Entity가 추가되었습니다. 이 Entity는 **System.FileDocument** Entity를 상속합니다.

{{% alert color="info" %}}
**System.FileDocument** Entity를 직접 사용하지 마십시오. **System** 모듈의 해당 부분에 대한 보안을 제어할 수 없기 때문입니다.
{{% /alert %}}

### Microflow

이제 Domain Model이 설정되었으므로 새로운 문서 생성 기능을 위한 Microflow를 만들 준비가 되었습니다.

주문 문서 생성 관련 소스를 정리하기 위한 새 폴더를 만드십시오:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_17-02-05.png" class="no-border" >}}

이제 문서 생성을 처리할 Microflow가 필요합니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_17-04-03.png" class="no-border" >}}

현재 Microflow는 기본 시작점과 종료점만 포함합니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_16-30-18.png" class="no-border" >}}

Microflow를 생성한 후 문서에 사용할 정보를 결정하십시오. 입력으로 주문(Order)부터 시작합시다. 나중에 주문 인스턴스를 통해 추가 데이터를 검색할 수 있습니다.

{{% alert color="info" %}}
Microflow를 생성할 때, 재사용을 촉진하기 위해 입력 파라미터의 수를 제한하는 것이 모범 사례입니다.
{{% /alert %}}

입력 파라미터는 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_16-32-33.png" class="no-border" >}}

다음 단계에서는 새 OrderDocument를 생성합니다. 이 객체가 실제 문서를 저장합니다. **Order** 객체에 대한 참조와 문서 이름을 설정하십시오:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_16-52-43.png" class="no-border" >}}

이제 **Language** 객체가 필요합니다. 이 경우 **Customer**가 선호하는 커뮤니케이션 언어와 연결되어 있습니다. Microflow 예제에서는 먼저 **Order**를 통해 **Customer**를 검색한 다음 해당 **Customer**에서 **Language**를 검색합니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_16-58-54.png" class="no-border" >}}

다음 단계는 **Generate document** 액티비티를 사용하는 것입니다. 이 액티비티 내에서 사용 가능한 객체를 사용하고 문서를 생성할 Document Template를 선택할 수 있습니다. 그러나 Document Template가 아직 존재하지 않으므로 생성하여 폴더에 배치해야 합니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-02-28_17-06-53.png" class="no-border" >}}

Document Template 구성은 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_13-03-55.png" class="no-border" >}}

{{% alert color="info" %}}
선택한 템플릿에 대한 변경 사항에 따라 인수가 변경됩니다.
{{% /alert %}}

**Generate document** 액티비티가 추가되었습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_13-06-33.png" class="no-border" >}}

Document Template의 일반 설정을 구성한 후에는 **NewOrderDocument**에 대한 별도의 커밋이 필요하지 않습니다. 이 Entity는 Document Template 액티비티를 통해 자동으로 커밋됩니다.

이제 **Generate document** 구성을 설정했으므로 템플릿 자체를 구성할 수 있습니다.

{{% alert color="info" %}}
Document Template에서 사용되는 Entity와 그 속성(Attribute)에 대해 올바른 Entity 접근 권한을 설정해야 합니다. 템플릿에 표시되는 속성(Attribute)에는 읽기 접근 권한이 필수입니다. 다음은 **User** 모듈 역할에 대해 **Read, Write**로 구성된 **Customer** Entity입니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_13-12-28.png" class="no-border" >}}

{{% /alert %}}

### Document Template

이 예제에서는 다음 Document Template를 사용할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_14-05-07.png" class="no-border" >}}

이 Document Template에서는 주문 세부 정보를 포함하는 Data View로 시작합니다. 이 주문에서 고객 정보를 가져올 수 있고, 주문 라인에서 구매한 제품에 대한 정보를 가져올 수 있습니다.

Data View는 Table, Table Cell, Label, 이미지, Line Break 및 Template Grid를 사용하여 문서를 구성합니다.

이제 Document Template를 생성했으므로 오류 독에 오류가 있는 것을 확인할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_14-08-48.png" class="no-border" >}}

이 오류를 해결하려면 Microflow의 **Generate document** 액티비티를 여십시오. 액티비티를 열면 파라미터 매핑이 업데이트되고 매핑 파라미터에 할당됩니다.

이제 **Generate document** 구성은 다음과 같아야 합니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_14-12-03.png" class="no-border" >}}

Document Template가 구성되었으며 Microflow를 사용할 준비가 되었습니다. 이 Microflow를 하위 Microflow로 호출하면 기본 Microflow에 다운로드 액티비티를 추가할 수 있습니다. 이 Microflow는 다음을 수행할 수 있습니다:

* 하위 Microflow를 호출하여 문서 생성
* 생성된 문서 검색
* 파일 다운로드

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/2018-03-01_14-21-38.png" class="no-border" >}}

결과 문서는 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/creating-your-own-documents/15_Result.png" class="no-border" >}}

이 예제에서는 **Entity (path)** 데이터 소스를 통해 **OrderLine** 정보를 검색했습니다. 이를 수행하는 대안적인 방법은 목록 표시를 위해 객체를 반환하는 Microflow를 사용하는 것입니다. 이 경우 Document Template 내에서 데이터 소스 Microflow로 사용되는 Microflow에 올바른 사용자 역할을 추가해야 합니다.
