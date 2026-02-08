---
title: "문서 작성 가이드라인"
url: /community-tools/documentation-guidelines/
description: "Mendix 문서에 기여할 때 따라야 할 가이드라인을 설명합니다."
aliases:
    - /developerportal/community-tools/documentation-guidelines/
---

## 소개

이 문서는 Mendix 문서의 공통된 어조와 스타일을 만들기 위한 가이드라인을 제시합니다. 문서의 목표는 새로운 커뮤니티 개발자를 유치하고 교육하는 것입니다. 이를 염두에 두고, 문서의 일관성을 유지하는 데 도움이 되도록 이 가이드라인을 읽어 주세요.

## 스타일 가이드라인

Mendix 문서에 기여할 때 다음 스타일 가이드라인을 고려하세요:

* 문서에서 답변하고자 하는 질문에 초점을 맞추세요.
* 최종 사용자의 입장에서 생각하고 그들의 기술 수준을 고려하세요.
* 짧고 간단하며 핵심적으로 작성하세요.
* 콘텐츠를 검토하고 불필요한 내용을 삭제하세요.
* Mendix 문서의 어조를 적용하세요. 편안하지만 직접적입니다.
* 모든 텍스트는 미국식 영어로 작성해야 합니다.
* 잘 알려지지 않은 약어는 정의하고 문서에서 처음 사용하기 전에 전체 명칭을 작성하세요.
* "simply," "possibly," "might," "could," "actually," "potentially"와 같은 부사를 피하세요. 이러한 단어는 불확실성을 추가하고 문장의 진정한 의미를 흐리게 합니다.
* 포용적인 언어를 사용하세요. 예를 들어, "he"만 사용하지 말고 "the user" 또는 "they"를 사용하세요.

철자 및 문법 도움을 받으려면 기사를 [Hemingway](https://www.hemingwayapp.com/)에 로드할 수 있습니다.

## Mendix Studio Pro 사용 가이드를 위한 가이드라인

{{% alert color="info" %}}

이 섹션은 사용 가이드 작성에 대한 자세한 가이드라인을 제시합니다. [How-to Template](https://github.com/mendix/docs/blob/development/templates/how-to-template.md)을 참조하면서 이 섹션을 읽으세요.

{{% /alert %}}

[Studio Pro 사용 가이드](/howto/)는 목표를 달성하기 위해 필요한 단계를 안내하는 Mendix 주제에 대한 상황별 및 버전별 가이드입니다. 앱 UI에 위젯(Widget)을 추가하거나 Excel 파일을 가져오거나 웹 서비스를 소비하는 등의 작업을 다룹니다. *Studio Pro 사용 가이드*는 Mendix 구성 요소에 대한 관련 정보를 사용하여 특정 컨텍스트가 있는 현실적인 시나리오를 만들며 기능을 제공해야 합니다.

*Studio Pro 사용 가이드*에 대한 중요한 세부 사항은 다음과 같습니다:

* 이 문서는 일반적인 시나리오, 비즈니스 사례 및 자주 묻는 질문에 대한 솔루션과 통찰력을 제공해야 합니다.
* 각 사용 가이드가 끝나면 독자는 Mendix 기능에 대한 지식이 높아져야 하며 관련 상황에서 이를 적용하는 방법을 알아야 합니다.

### 제목

사용 가이드의 제목은 Mendix에 익숙하지 않은 사람들에게도 명확하고 매력적으로 작성하세요. 또한 문제 해결 관점에서 제목을 작성하여 단순히 솔루션을 구현한다고만 진술하지 마세요.

다음과 같은 제목 구조를 사용할 수 있습니다: **[달성할 목표/해결할 문제]** + **[Mendix 용어]** (예: "Work with Object Events").

### 소개

소개에서는 사용 가이드의 비즈니스 사례, 문서가 해결하는 문제, 최종 사용자가 이를 읽어야 하는 이유를 설명해야 합니다.

**This how-to teaches you . . .** 섹션에서는 사용 가이드를 읽은 후 최종 사용자가 배울 핵심 포인트를 요약하세요. 가능한 명확하고 구체적으로 작성하세요.

### 전제 조건 섹션

전제 조건 섹션을 사용하여 사용 가이드를 시작하기 전에 완료해야 할 사항을 최종 사용자에게 알리세요. 이렇게 하면 특정 단계를 자세히 설명할 필요가 없습니다.

최종 사용자에게 특정 소프트웨어 요구 사항을 설치하거나 특정 구성을 수행해야 함을 알릴 수 있습니다. 참조해야 할 다른 *Studio Pro 사용 가이드*도 여기에 나열할 수 있습니다.

### 이미지

관련 단계의 특정 기능을 명확하게 보여주는 이미지를 추가하세요. 이렇게 하면 독자가 이미지가 화면에서 보는 것과 일치하는지 확인할 수 있습니다. 예를 들어, 다음 스크린샷의 화살표와 흐름은 너무 복잡하여 사용자에게 충분히 명확하지 않습니다:

{{< figure src="/attachments/community-tools/contribute-to-mendix-docs/documentation-guidelines/image_examples.png"   width="500"  class="no-border" >}}

이미지를 더 이해하기 쉽게 만드는 경우에만 상자, 표시기, 화살표 및 기타 정보를 이미지에 추가하세요:

{{< figure src="/attachments/community-tools/contribute-to-mendix-docs/documentation-guidelines/image_examples2.png"   width="400"  class="no-border" >}}

이미지에 너무 많은 화살표가 있으면 혼란을 줄 수 있으므로 이미지를 가능한 간단하게 유지하세요.

## Mendix Studio Pro Guide를 위한 가이드라인

{{% alert color="info" %}}

이 섹션은 Studio Pro Guide 페이지 작성에 대한 가이드라인을 제시합니다. [Reference Guide Page Template](https://github.com/mendix/docs/blob/development/templates/ref-guide-page-template.md)을 참조하면서 이 섹션을 읽으세요.

{{% /alert %}}

*Studio Pro Guide*에는 다양한 Mendix 구성 요소에 대한 버전별 세부 정보가 포함되어 있습니다. 각 구성 요소에는 구성 요소의 기능과 사용 방법 및 매개 변수를 설명하는 자체 페이지 또는 섹션이 있습니다. 이 가이드는 또한 특정 구성 요소를 Mendix 프로젝트에서 쉽게 사용할 수 있도록 유용한 예제를 제시합니다. 이 가이드에는 Mendix를 다양한 방식이나 특정 상황에서 사용하는 방법에 대한 자세한 섹션은 포함되어 있지 않습니다.

*Studio Pro Guide*에 대한 중요한 세부 사항은 다음과 같습니다:

* 각 *Studio Pro Guide* 주제에는 설명하는 기능과 그 목적을 설명하는 소개가 포함되어야 합니다.
* 각 *Studio Pro Guide* 주제에는 기능의 화면, 속성 및 가능한 값에 대한 설명이 포함되어야 합니다.
* 각 기능에는 최소 하나의 관련 예제가 포함되어야 합니다.

*Studio Pro Guide*를 작성할 때 다음 가이드라인을 고려하세요:

* 각 기능의 작동 방식에 대한 설명을 명확히 하세요.
* 문서화되는 각 기능에 대한 예제를 추가하세요.
* 설명되는 특정 기능을 명확하게 보여주는 이미지를 추가하세요.

## 더 읽기

* [Mendix 문서에 기여하는 방법](/community-tools/contribute-to-mendix-docs/)
