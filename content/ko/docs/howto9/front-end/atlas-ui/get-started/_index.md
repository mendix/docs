---
title: "시작하기"
url: /howto9/front-end/get-started/
weight: 10
---

## 소개

이 섹션에서는 Atlas와 개발자가 Atlas UI 프레임워크를 시작하는 방법을 설명합니다.

Atlas UI 프레임워크는 모든 유형의 개발자가 일관되고 아름다운 앱을 구축할 수 있게 해줍니다. 개발자는 기본 디자인과 느낌을 사용하거나, 약간 커스터마이징하거나, Atlas를 사용하여 앱 전반에 걸쳐 완전히 맞춤화된 재사용 가능한 디자인을 만들 수 있습니다.

Atlas 2는 Mendix 8에 해당합니다. Atlas 2에 대한 정보가 필요한 경우 [Atlas 2](/howto8/front-end/atlas-ui/)에 대한 Mendix 8 사용 방법 문서를 참조하세요.

## 디자인 원칙

Atlas UI는 아래에 설명된 핵심 원칙을 기반으로 한 철학을 가지고 있습니다. 이러한 원칙은 Mendix의 모든 디자인 결정을 안내하며, 모든 Mendix 사용자가 자신의 앱을 구축할 때 이를 채택할 것을 권장합니다.

**단순함** — 복잡성으로부터의 자유: 중요한 것에 집중할 수 있도록 단순함을 추구합니다.

**조화** — 사용하는 디바이스에 관계없이 앱 환경 전체에서 친숙함과 일관성을 만드세요.

**유연성** — 직관적이고 일관된 경험을 잃지 않으면서 모든 상황에서 보기 좋고 확장되는 앱을 디자인하세요.

## 디자인 요소

UI 라이브러리는 Mendix Studio Pro에 완전히 통합되어 있습니다. Mendix Studio Pro에서 내비게이션 레이아웃을 선택한 후 도구 상자(Toolbox)에서 직접 페이지 템플릿, 빌딩 블록 및 Widget을 찾을 수 있습니다. 이러한 UI 요소는 앱의 기반을 형성합니다.

{{< figure src="/attachments/howto9/front-end/atlas-ui/get-started/designelements.png" alt="Atlas UI design elements" class="no-border" >}}

1. **내비게이션 레이아웃** — Mendix 앱을 구축할 때 가장 먼저 하는 것은 내비게이션 레이아웃을 선택하는 것입니다. 이러한 레이아웃은 동적 페이지가 배치되는 프레임이며 앱 전체에 일관된 구조를 제공합니다.

2. **페이지 템플릿** — 페이지 템플릿은 그대로 사용하거나 커스텀 빌딩 블록 및 Widget으로 향상시킬 수 있는 미리 디자인된 빌딩 블록 모음입니다.

3. **빌딩 블록** — 빌딩 블록은 단일 목적 사용자 인터페이스 요소로, 여러 Widget으로 구성됩니다. 일반적으로 여러 빌딩 블록이 하나의 페이지에서 함께 사용됩니다.

4. **Widget** — Widget은 기존 빌딩 블록을 향상시키는 데 사용되는 작은 사용자 인터페이스 요소(알림, 버튼, 차트 등)입니다.

5. **디자인 속성** — 디자인 속성을 변경하여 Widget을 더 커스터마이징할 수 있습니다. 색상, 텍스트 및 기타 많은 변수를 변경하여 Widget을 필요에 맞게 만들 수 있습니다.

## 기본 디자인과 느낌

Mendix 앱에는 [Atlas Core 모듈](https://marketplace.mendix.com/link/component/117187)의 일부인 기본 디자인이 포함되어 있습니다. 이는 모든 플랫폼 지원 Widget에 대한 기본 디자인(스타일링 및 디자인 속성)과 느낌을 제공하며 Mendix 앱 디자인의 기반을 형성합니다. 이러한 스타일링 요소를 직접 확인하려면 [Atlas Design System](https://atlasdesignsystem.mendixcloud.com/) 웹사이트를 참조하세요.

또한 웹 및 네이티브 모바일용으로 Mendix는 각각 [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) 및 [Atlas Native Mobile Content](https://marketplace.mendix.com/link/component/117175)를 표준 페이지 템플릿과 빌딩 블록이 포함된 기본 모듈로 제공합니다. 이들은 빈 시작 앱([Blank Web App](https://marketplace.mendix.com/link/component/51830) 및 [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511))의 일부이지만 기본 템플릿과 빌딩 블록을 사용하지 않으려는 경우 제거할 수 있습니다.

Mendix가 이러한 모듈의 새 버전을 릴리스하면 일반 모듈로 업데이트할 수 있습니다.

## 기본 디자인과 느낌 커스터마이징

Mendix 앱은 기본적으로 Atlas 디자인과 느낌으로 제공되며, [테마 설정 변경](/howto9/front-end/customize-styling-new/) 및 [커스텀 스타일링 추가](/howto9/front-end/customize-styling-new/)를 통해 커스터마이징할 수 있습니다. 또한 [회사 디자인 시스템 만들기](/howto9/front-end/create-a-company-design-system/)에 설명된 대로 자체 디자인 시스템 또는 UI 키트를 구현할 수 있습니다.

## 앱 간 디자인 재사용

재사용 및 일관성을 가능하게 하기 위해 스타일링, 디자인 속성, 페이지 템플릿, 빌딩 블록 및 레이아웃을 포함하는 UI 모듈을 만들 수 있습니다. 이를 사용하여 [회사 디자인 시스템 만들기](/howto9/front-end/create-a-company-design-system/)에 설명된 대로 회사 브랜드를 재사용 가능한 모듈로 구현하거나 특정 UI 기능을 함께 그룹화할 수 있습니다.
