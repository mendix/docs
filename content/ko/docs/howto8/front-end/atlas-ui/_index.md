---
title: "Atlas UI"
url: /howto8/front-end/atlas-ui/
weight: 5
aliases:
    - /howto8/front-end/create-a-custom-theme-with-the-mendix-ui-framework.html
    - /howto8/ux/create-a-custom-theme-with-the-mendix-ui-framework.html
    - /howto8/front-end/create-a-custom-theme-with-the-mendix-ui-framework
    - /howto8/ux/create-a-custom-theme-with-the-mendix-ui-framework
---

{{% alert color="info" %}}
Atlas UI Resources 모듈은 더 이상 사용되지 않으며, Atlas 2도 마찬가지입니다. 아직 Atlas 2를 사용하고 있다면, Mendix는 [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

## 소개

Mendix Atlas UI는 우아한 사용자 경험을 빠르게 구축할 수 있는 디자인 프레임워크입니다. 단순함, 조화, 유연성이라는 세 가지 디자인 원칙 위에 구축되었습니다. 단순함은 중요한 것에 집중할 수 있게 도와줍니다. 정렬 및 사용자 정의가 가능한 기성 페이지 템플릿, 빌딩 블록 및 위젯으로 디자인 프로세스를 간소화했습니다. 디자인 요소는 조화로워 앱 환경에 통일된 미학을 제공합니다. Atlas UI는 완전한 반응형으로 구축되어 기능을 잃지 않고 모든 스케일에서 품질을 보장합니다.

자세한 미리보기와 모든 Atlas UI 요소에 대한 설명은 [Atlas UI 사이트](https://atlas2.mendix.com/)를 방문하거나 Atlas UI Framework [GitHub 저장소](https://github.com/mendix/Atlas-UI-Framework)를 참조하십시오. Mendix 앱의 스타일링을 사용자 정의하려면 [Calypso를 사용하여 스타일링 사용자 정의하기](/howto8/front-end/calypso/)를 참조하십시오.

### 디자인 원칙

Atlas UI는 아래에 설명된 핵심 원칙을 기반으로 한 철학을 가지고 있습니다. 이러한 원칙은 Mendix의 모든 디자인 결정을 안내하며, 모든 Mendix 사용자가 자체 앱을 구축할 때 이를 채택하도록 권장합니다.

#### 단순함

복잡함으로부터의 자유: 중요한 것에 집중할 수 있도록 단순함을 추구합니다.

#### 조화

디바이스에 관계없이 앱 환경 전체에서 친숙함과 일관성을 만드십시오.

#### 유연성

직관적이고 일관된 경험을 잃지 않으면서 모든 상황에서 잘 보이고 확장되는 앱을 디자인하십시오.

{{< figure src="/attachments/howto8/front-end/atlas-ui/atlas_ui_preview.png" class="no-border" >}}

## 디자인 요소

UI 라이브러리는 완전히 통합되어 있습니다. 내비게이션 레이아웃을 선택한 후 **Toolbox**에서 직접 페이지 템플릿, 빌딩 블록 및 위젯을 찾을 수 있습니다. 이러한 UI 요소는 앱의 기반을 형성합니다.

{{< figure src="/attachments/howto8/front-end/atlas-ui/designelements.png" class="no-border" >}}

**1** **내비게이션 레이아웃**

Mendix 앱을 구축할 때 가장 먼저 하는 것은 내비게이션 레이아웃을 선택하는 것입니다. 이러한 레이아웃은 동적 페이지가 포함되는 프레임이며, 앱 전체에서 일관된 구조를 제공합니다.

**2** **페이지 템플릿**

페이지 템플릿은 빌딩 블록의 사전 디자인된 컬렉션으로, 그대로 사용하거나 사용자 정의 빌딩 블록과 위젯으로 향상시킬 수 있습니다.

**3** **빌딩 블록**

빌딩 블록은 여러 위젯으로 구성된 단일 목적의 사용자 인터페이스 요소입니다. 여러 빌딩 블록은 일반적으로 한 페이지에서 함께 사용됩니다.

**4** **위젯**

위젯은 기존 빌딩 블록을 향상시키는 데 사용되는 작은 사용자 인터페이스 요소(알림, 버튼, 차트 등)입니다.

**5** **디자인 속성**

디자인 속성을 변경하여 위젯을 추가로 사용자 정의할 수 있습니다. 색상, 텍스트 및 기타 많은 변수를 변경하여 위젯을 필요한 대로 만들 수 있습니다.

## 더 읽기

* [Atlas UI 시작하기](/howto8/front-end/get-started-with-atlasui/)
* [기존 앱을 Atlas UI로 마이그레이션하기](/howto8/front-end/migrate-existing-projects-to-atlasui/)
* [회사 Atlas UI 리소스 만들기](/howto8/front-end/create-company-atlas-ui-resources/)
* [회사 Atlas UI 리소스 공유하기](/howto8/front-end/share-company-atlas-ui-resources/)
* [빌딩 블록 및 페이지 템플릿용 사용자 정의 미리보기 이미지 만들기](/howto8/front-end/create-custom-preview-images-for-building-blocks-and-page-templates/)
* [Atlas UI 변경 사항 문제 해결](/refguide8/migration-atlas/)
* [Calypso를 사용하여 스타일링 사용자 정의하기](/howto8/front-end/calypso/)
