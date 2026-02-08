---
title: "Pluggable Widgets API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-10/
description: "이 API는 플러그형 위젯(pluggable widgets)을 이해하고, 앱 기능을 확장하는 방법과 Mx10에서 Mendix API와 상호 작용하도록 빌드하는 방법을 설명합니다."
no_list: false
description_list: true
weight: 90
---

## 소개

Mendix는 매우 다양한 [위젯(Widgets)](/refguide/pages/#widgets-categories)을 제공하지만, 때때로 앱에 기본 세트 이외의 위젯이 필요할 수 있습니다. 더 고급 UI 패턴을 지원하거나 앱 전용 상호 작용을 생성하려면 고유한 플러그형 위젯을 만들어야 합니다. 이 문서는 Studio Pro 10에서 이를 달성하는 데 도움이 될 것입니다. 다른 버전에 대한 문서는 다음 링크를 참조하십시오:

* [Mendix 9](/apidocs-mxsdk/apidocs/pluggable-parent-9/)
* [Mendix 8](/apidocs-mxsdk/apidocs/pluggable-parent-8/)

새로운 플러그형 위젯은 표준 Mendix 컴포넌트와 함께 페이지를 모델링하는 동안 사용할 수 있습니다. 또한 여러 앱 간에 공유하고 [Marketplace](/appstore/)를 통해 배포할 수도 있습니다.

플러그형 위젯의 모양과 동작은 사용자가 직접 제어할 수 있습니다. JavaScript 또는 TypeScript로 작성된 일반 [React](https://reactjs.org/) 컴포넌트로 위젯을 구현하여 플러그형 위젯을 사용자 지정하십시오. 컴포넌트는 Mendix 앱에서 렌더링되며, Mendix에서 제공하는 API를 사용하여 해당 앱과 상호 작용할 수 있습니다.

플러그형 위젯은 코어 위젯과 마찬가지로 Mendix 개발자가 Mendix Studio Pro에서 위젯을 사용할 때마다 구성할 수 있는(때로는 구성해야 하는) 속성(properties)을 가질 수 있습니다. 위젯 정의 XML 파일을 만들어 이러한 속성을 정의할 수 있습니다(위젯 정의 XML 파일에 대한 자세한 내용은 아래의 [위젯 정의 XML 파일(#widget-definition)](#widget-definition) 섹션을 참조하십시오).

플러그형 위젯은 Studio Pro의 **Design mode**에서 미리 볼 때 사용할 미리보기 컴포넌트를 포함할 수도 있습니다.

플러그형 위젯 개발 시 Mendix가 지원하는 라이브러리에 대한 정보는 *Mendix Client*의 [플러그형 위젯(Pluggable Widgets)](/refguide/mendix-client/#pluggable-widgets) 섹션을 참조하십시오.

Pluggable Widgets Tools를 최신 버전으로 업데이트하는 방법은 [Pluggable Widgets Tools 업데이트](/howto/extensibility/update-pluggable-widgets-tools/)를 참조하십시오.

{{% alert color="info" %}}
언어 번역을 위한 [시스템 텍스트(System Texts)](/refguide/system-texts/)는 Pluggable Widgets API와 함께 사용할 수 없습니다.
{{% /alert %}}

## 클라이언트 컴포넌트 {#client-component}

플러그형 위젯의 핵심 부분은 클라이언트 컴포넌트입니다. 이는 최종 사용자의 앱 내부에서 렌더링되는 React 컴포넌트입니다. 이 컴포넌트를 만들려면 기본적인 React 지식이 필요합니다. 이전에 React를 사용해 본 적이 없다면 [React 튜토리얼](https://reactjs.org/tutorial/tutorial.html)을 읽어보십시오. [기본 모바일(native mobile)](/refguide/mobile/) 앱용 위젯을 빌드하는 경우 React 대신 [React Native](https://facebook.github.io/react-native/)를 사용해야 합니다.

클라이언트 컴포넌트는 주로 최종 사용자와의 프레젠테이션 및 상호 작용에 집중하며, 데이터 가져오기, 유효성 검사 및 업데이트는 Mendix 플랫폼에서 처리합니다. Mendix는 [Redux](https://redux.js.org/basics/data-flow) 및 [Flux](https://facebook.github.io/flux/docs/in-depth-overview#structure-and-data-flow) API와 매우 유사한 [단방향 데이터 흐름 패턴(unidirectional data flow pattern)](https://www.geeksforgeeks.org/unidirectional-data-flow/)을 따르는 API를 컴포넌트에 제공합니다. Mendix는 "기능이 내장되어 있지만 제거 가능(batteries included but removable)"이라는 모토를 따릅니다. 표준 동작으로 충분하다면 세세한 부분에 신경 쓸 필요가 없지만, 필요한 경우 동작을 조정할 수 있습니다.

위젯 컴포넌트는 위젯이 표시되거나 숨겨질 때(예: 페이지가 열리거나 [조건부 가시성(conditional visibility)](/refguide/common-widget-properties/#visibility-properties)으로 인해) [마운트(mounted)](https://en.reactjs.org/docs/react-component.html#mounting) 및 [언마운트(unmounted)](https://en.reactjs.org/docs/react-component.html#unmounting)됩니다. 컴포넌트는 위젯 정의 XML 파일에 설명된 속성과 유사한 [props](https://en.reactjs.org/docs/components-and-props.html)를 받습니다. prop의 키는 [`key`](#key-attribute) 속성에서 오고, 그 값은 속성의 구성을 기반으로 합니다. prop 값은 불변(immutable)이지만, Mendix 플랫폼은 필요할 때 새 값을 전달하여 컴포넌트를 다시 렌더링합니다.

prop 값은 단순한 기본값이 아니라 위젯 속성의 [`type`](#type-attribute)에 따라 구조가 결정되는 객체인 경우가 많습니다. prop의 값은 데이터, 메타데이터 및 관련 작업을 노출할 수 있습니다. 다음은 인터페이스의 한 예입니다. 이는 액션 버튼의 [On click](/refguide/on-click-event/#on-click) 속성에서 볼 수 있는 것과 같은 액션 속성용 값입니다:

```ts
    export interface ActionValue {
        readonly canExecute: boolean;
        readonly isExecuting: boolean;
        execute(): void;
    }
```

위의 인터페이스는 다음과 같이 사용될 수 있습니다: 컴포넌트는 `canExecute` 플래그를 사용하여 활성화 여부를 결정하고, `isExecuting` 플래그를 사용하여 인라인 진행률 표시기를 표시하며, 사용자 클릭에 대한 반응으로 `execute()` 메서드를 트리거합니다. 일반적으로 `execute()`가 트리거된 후 컴포넌트는 `isExecuting` 플래그가 설정된 새 값으로 다시 렌더링되며, 마이크로플로우와 같은 작업이 완료되면 컴포넌트는 `isExecuting` 없이 다시 렌더링됩니다.

## 위젯 패키지 {#widget-package}

플러그형 위젯은 *.mpk* 확장자를 가진 단일 위젯 패키지 파일로 배포됩니다. 이 파일은 앱의 `widgets` 디렉토리에 배치되어야 합니다. Mendix Studio Pro는 앱을 열거나 Marketplace를 통해 위젯을 추가하거나 **App** > **Synchronize App Directory**를 클릭할 때 앱의 모든 위젯을 검색합니다.

위젯 패키지를 수동으로 빌드하는 것은 어려울 수 있으므로 Mendix는 [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget)에서 제공하는 스크립트를 사용할 것을 권장합니다. 제너레이터 사용 방법에 대한 자세한 내용은 [텍스트 상자 플러그형 위젯 빌드 방법: 1부](/howto/extensibility/create-a-pluggable-widget-one/)를 참조하십시오.

위젯 패키지 파일은 다음을 포함하는 ZIP 아카이브일 뿐입니다:

* 전체 패키지를 설명하는 *package.xml* 파일
* 위젯 정의 XML 파일(가급적이면 위젯 [ID](#widget-id)의 마지막 부분인 `{widgetName}.xml`에 위치)
* 예를 들어 ID가 `com.mendix.widget.MyProgressCircle`인 위젯의 경우 *com/mendix/widget/MyProgressCircle.js*에 위치한 위젯의 클라이언트 컴포넌트
* 선택적으로, *{widgetName}.editorPreview.js*에 위치한 Studio Pro **Design mode**의 위젯 미리보기
* 선택적으로, 위젯 아이콘(PNG 형식이어야 함):
    * *{widgetName}.icon.png*는 리스트 뷰의 Studio Pro 도구 상자 내 위젯 아이콘을 설정합니다(이상적인 이미지 크기는 64x64 픽셀이지만 다른 크기는 맞춤 조정됨).
    * *{widgetName}.icon.dark.png*는 *{widgetName}.icon.png*에 해당하는 다크 모드용 아이콘을 설정합니다.
    * *{widgetName}.tile.png*는 타일 뷰의 Studio Pro 도구 상자 내 타일 이미지를 설정합니다(이상적인 이미지 크기는 256x192 픽셀이지만 다른 크기는 맞춤 조정됨).
    * *{widgetName}.tile.dark.png*는 *{widgetName}.tile.png*에 해당하는 다크 모드용 타일 이미지를 설정합니다.
* 선택적으로, 클라이언트 컴포넌트가 포함된 파일 옆에 위치하는 위젯 관련 리소스
    * **lib** 하위 디렉토리에 있는 파일을 제외하고 추가하는 모든 CSS 파일은 위젯을 통해 앱에 자동으로 로드됩니다.
* 선택적으로, *locales* 폴더.

위젯 패키지 파일 이름을 `widgetName`으로 지정하는 것이 좋습니다. 또한 위젯 패키지는 동일한 위젯 패키지에 위의 여러 항목을 넣어 여러 위젯을 포함할 수 있습니다. 그러나 이러한 패키지를 만드는 것은 *권장되지 않습니다*.

*package.xml* 파일은 다음과 같은 구조를 가집니다:

```xml
	<?xml version="1.0" encoding="utf-8" ?>
	<package xmlns="http://www.mendix.com/package/1.0/">
		<clientModule name="{packageName}" version="{packageVersion}" xmlns="http://www.mendix.com/clientModule/1.0/">
			<widgetFiles>
				<widgetFile path="{widgetName}.xml"/>
			</widgetFiles>
		</clientModule>
	</package>
```

패키지를 게시하려는 경우 `packageName`과 `packageVersion`은 Marketplace의 앱 정보와 일치해야 합니다. `packageName`으로 위젯 ID를 사용하는 것이 좋습니다.

## 위젯 정의 XML 파일 {#widget-definition}

위젯 정의 XML 파일은 위젯의 기본 정보와 기능(예: 해당 위젯이 오프라인에서 작동할 수 있는지 여부)을 설명하므로 위젯의 필수 부분입니다. 이 파일에는 위젯에서 구성 가능한 속성 목록도 포함되어 있습니다. Mendix Pluggable Widget Generator를 사용하면 이 파일의 내용이 자동으로 생성됩니다.

간단한 위젯 XML 파일은 다음과 같습니다:

```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget [attributes]>
        <name>{사용자 친화적인 위젯 이름}</name>
        <description>{사용자 친화적인 짧은 설명}</description>
        <properties>
            [properties]
        </properties>
    </widget>
```

위젯 XML 파일은 위젯 속성(attributes), 위젯 설명(description), 위젯 프로퍼티 정의(properties definition)의 세 섹션으로 구성됩니다.

### 위젯 속성(Widget Attributes)

다음은 위젯 속성 섹션의 예입니다:

```xml
    <widget
        id="com.mendix.widget.MyProgressCard"
        pluginWidget="true"
        offlineCapable="true"
        supportedPlatform="Web"
        [...]
    >
```

이 섹션은 Mendix Pluggable Widget Generator를 실행하는 동안 선택한 옵션을 기반으로 생성됩니다. 생성된 후에는 거의 수정할 필요가 없습니다. 이 샘플 위젯에는 다음과 같은 몇 가지 위젯 속성이 있습니다:

* `id`<a id="widget-id"></a> — 위젯 ID라고 불리는 위젯의 정규화된 이름입니다. 위젯 ID를 사용하여 Mendix 플랫폼은 위젯을 서로 구별합니다. 위젯이 앱에서 사용되거나 Marketplace에 게시된 후에는 위젯 ID를 변경해서는 안 됩니다. 위 예와 같이 역방향 도메인 스타일 이름을 사용하는 것이 좋습니다.
* `pluginWidget`  — 항상 `true`로 설정해야 합니다. 이렇게 하면 Mendix 플랫폼이 새로운 플러그형 위젯과 이전의 커스텀 위젯을 구별할 수 있습니다.
* `offlineCapable` — 위젯이 앱이 오프라인인 동안 작동할 수 있는지 여부를 나타냅니다. 오프라인 앱에 대한 자세한 내용은 [오프라인 우선(Offline-First)](/refguide/offline-first/) 가이드를 참조하십시오. 타사 API에서 정보를 가져오는 위젯(예: 항공권 가격을 가져오는 위젯)은 인터넷 연결 없이는 작동할 수 없습니다. 위젯이 오프라인에서 작동할 수 없는 경우 Mendix Studio Pro는 오프라인에서 사용 가능한 페이지에서 해당 위젯의 사용을 금지합니다.
* `supportedPlatform` — 위젯이 호환되는 플랫폼을 나타냅니다. `Web`은 웹 및 하이브리드 모바일 앱과만 호환되는 위젯을 설명합니다. `Native`는 네이티브 모바일 앱과 호환되는 위젯을 설명합니다.

### 위젯 설명(Widget Description) {#widget-description}

Studio Pro에서 위젯의 표현은 위젯 태그 내부의 첫 번째 요소 세트에 의해 결정됩니다. 이러한 설명 태그의 순서는 중요하며 아래 목록에 설명되어 있습니다. 이름과 설명 태그만 필수이며 나머지는 선택 사항입니다. 설명은 자체 폐쇄 태그 `<description />`로 생략할 수 있습니다:

* `name` — 위젯의 표시 이름입니다.
* `description` — 위젯에 대한 짧은 설명입니다.
* `studioProCategory` — [도구 상자 카테고리(#toolbox-category)](#toolbox-category)를 참조하십시오.
* `helpUrl` — [도움말 페이지(#help)](#help)를 참조하십시오.
* `icon` — [아이콘(#icon)](#icon).

```xml
    <name>My Progress Card</name>
    <description>내 진행 상황을 표시합니다.</description>
```

Mendix Studio Pro에서 위에서 설명한 위젯은 다음과 같이 보입니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/basic-widget.png" alt="기본 위젯" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/basic-widget-progress-card.png" alt="구조 모드의 기본 진행률 카드" >}}

#### 도구 상자 카테고리 {#toolbox-category}

Studio Pro 사용자에게 더 명확한 정보를 제공하기 위해 위젯의 도구 상자 카테고리를 지정할 수 있습니다. 제공된 경우 Studio Pro에서 위젯의 도구 상자 카테고리를 결정합니다. **Data** 또는 **Input**과 같은 기존 기본 제공 카테고리는 물론 **Maps**와 같은 임의의 새 카테고리를 지정할 수 있습니다.

기존 카테고리가 지정되면 위젯은 기존 기본 제공 위젯 옆에 배치됩니다. 새 카테고리가 지정되면 위젯은 해당 새 카테고리에 배치됩니다.

카테고리는 `studioProCategory` 태그를 통해 제공할 수 있습니다:

```xml
   <studioProCategory>Open Street Maps</studioProCategory>
```

위의 예에서 위젯은 Studio Pro의 **Open Street Maps widgets** 아래에 배치됩니다. Studio Pro UI에서 **widgets**는 자동으로 추가됩니다.

{{% alert color="info" %}}
위젯이 Marketplace에 게시되고 Marketplace 팀에 의해 특별한 도구 상자 카테고리가 할당된 경우, 해당 카테고리는 개발자가 구성한 카테고리보다 항상 우선합니다.
{{% /alert %}}

#### 도움말 페이지 {#help}

도움말 페이지를 사용하여 위젯 사용자에게 추가 도움말 정보를 제공할 수 있습니다. 그렇게 하면 위젯 구성 화면에 지정된 페이지를 여는 <kbd>F1</kbd> 단축키가 할당된 **Help** 버튼이 생깁니다. 이 버튼은 팝업 대화 상자의 왼쪽 하단에 위치합니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/widget-dialog-help-button.png" alt="기본 위젯" class="no-border" >}}

도움말 페이지의 URL은 `description` 태그 뒤의 `helpUrl` 속성을 통해 제공할 수 있습니다:

```xml
    <helpUrl>https://marketplace.mendix.com/link/component/105695/</helpUrl>
```

더 복잡한 도움말 페이지의 경우 마크다운 페이지로 링크할 수 있습니다. 보안상의 이유로 URL에는 다음과 같은 제한 사항이 있습니다:

* HTTPS 프로토콜을 사용해야 합니다.
* 호스트 이름이 *.mendix.com* 또는 *github.com*으로 끝나야 합니다.
* 호스트 이름이 *github.com*인 경우 전체 URL이 *.md*로 끝나야 합니다.

#### 아이콘 {#icon}

`<icon>` 요소는 Studio Pro에서 위젯 아이콘으로 표시되는 base64 인코딩된 이미지를 허용합니다. 이 요소는 선택 사항이며 생략할 수 있습니다. 아이콘이 제공되지 않으면 Studio Pro는 기본 아이콘을 표시합니다.

```xml
<icon>PHN2Zy...9zdmc+</icon>
```

{{% alert color="info" %}}
[위젯 패키지(#widget-package)](#widget-package)에 아이콘을 번들링하는 것이 권장되는 접근 방식입니다. 파일을 다루기가 더 쉽고 더 많은 사용자 정의가 가능합니다.
{{% /alert %}}

### 위젯 프로퍼티 정의 {#properties-definition}

이 섹션은 위젯 XML 파일의 `properties` 태그로 나타납니다. 위젯을 구성하기 위해 Studio Pro에서 사용되는 위젯 속성을 설명합니다. 다음은 대시보드에 대한 진행률 카드를 보여주는 위젯의 속성 정의 섹션 예입니다:

```xml
    <properties>
        <propertyGroup caption="일반">
            <propertyGroup caption="메인">
                <property key="label" type="textTemplate">
                    <caption>레이블</caption>
                    <description>카드 레이블</description>
                </property>
                <property key="icon" type="icon" required="false">
                    <caption>아이콘</caption>
                    <description>카드 아이콘</description>
                </property>
                <property key="percentage" type="attribute">
                    <caption>백분율</caption>
                    <description>진행 백분율</description>
                    <attributeTypes>
                        <attributeType name="Decimal"/>
                        <attributeType name="Integer"/>
                    </attributeTypes>
                </property>
            </propertyGroup>
            <propertyGroup caption="액션">
                <property key="showButton" type="boolean" defaultValue="false">
                    <caption>버튼 표시</caption>
                    <description>카드에 버튼 표시</description>
                </property>
                <property key="buttonAction" type="action" required="false">
                    <caption>클릭 시</caption>
                    <description>버튼을 클릭할 때 수행할 작업</description>
                </property>
                <systemProperty key="TabIndex"/>
            </propertyGroup>
        </propertyGroup>
        <propertyGroup caption="비주얼">
            <propertyGroup caption="진행 바">
                <property key="animateProgressBar" type="boolean" defaultValue="true">
                    <caption>애니메이션</caption>
                    <description>진행 바 애니메이션 표시</description>
                </property>
                <property key="progressBarColor" type="expression" defaultValue="'red'">
                    <caption>색상</caption>
                    <description>진행 바 CSS 색상</description>
                    <returnType type="String" />
                </property>
            </propertyGroup>
        </propertyGroup>
    </properties>
```

## 프로퍼티 그룹 {#property-groups}

속성 자체를 살펴보기 전에 프로퍼티 그룹을 이해하는 것이 유용합니다. 프로퍼티 그룹은 `propertyGroup` 태그로 감싸진 속성들로 형성됩니다. Studio Pro는 프로퍼티 그룹을 사용하여 Studio Pro에서 위젯 구성 UI가 나타나는 방식을 렌더링합니다. 그룹화는 모델링 개발자가 더 복잡한 위젯의 구성을 이해하는 데 도움이 될 수 있습니다. 프로퍼티 그룹을 사용하고 목적에 따라 속성을 그룹화하는 것이 좋습니다. 위의 [위젯 프로퍼티 정의(#properties-definition)](#properties-definition) 코드에 있는 프로퍼티 그룹은 다음과 같은 구조를 형성합니다:

```
    ├── 일반
    │   ├── 메인
    │   │   ├── 레이블
    │   │   ├── 아이콘
    │   │   └── 백분율
    │   │
    │   └── 액션
    │       ├── 버튼 표시
    │       ├── 클릭 시
    │       └── 탭 인덱스
    │
    └── 비주얼
        └── 진행 바
            ├── 애니메이션
            └── 색상
```

이는 Studio Pro에서 프로퍼티 그룹 구조가 표현되는 방식입니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/edit-progress-card.png" alt="진행률 카드 일반 편집" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/edit-visual-tab.png" alt="진행률 카드 비주얼 편집" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/properties-widget.png" alt="속성 위젯" class="no-border" >}}

속성이 대화 상자에 표시될 때 첫 번째 수준 그룹(**일반** 및 **비주얼**)은 탭으로 표시됩니다. 두 번째 수준 그룹(**메인**, **액션** 및 **진행 바**)은 박스로 표시됩니다. 속성이 창(pane)에 표시될 때 첫 번째 수준 그룹은 무시되고 두 번째 수준 그룹은 카테고리로 표시됩니다.

**Common** 및 **Appearance** 탭은 위젯 구성에 자동으로 추가됩니다. 이러한 탭에는 모든 위젯에 적용 가능한 속성인 [Name](/refguide/common-widget-properties/#name), [Class](/refguide/common-widget-properties/#class), [Style](/refguide/common-widget-properties/#style) 및 [디자인 속성(Design Properties)](/apidocs-mxsdk/apidocs/design-properties/)이 포함되어 있습니다.

## 위젯 프로퍼티(Widget Property)

이 섹션에서는 위젯 프로퍼티의 형태에 대해 설명합니다. 위젯 프로퍼티에 대한 자세한 내용은 [플러그형 위젯 속성 유형(Pluggable Widget Property Types)](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/)을 참조하십시오. 위젯 프로퍼티 정의의 모든 `property` 태그는 다음과 유사한 형태를 가집니다:

```xml
    <property key="cardName" type="textTemplate">
        <caption>카드 이름</caption>
        <description>카드의 이름</description>
    </property>
```

일부 속성은 더 많은 속성(attributes)이나 태그를 가질 수 있거나 가져야 합니다. 이는 `type` 속성에 따라 다릅니다. 모든 속성에 대해 다음 요소가 있어야 합니다:

* `key`<a id="key-attribute"></a> — 이 요소는 속성의 고유한 단일 단어 식별자입니다. `key` 요소는 속성을 식별하기 위해 내부적으로 사용되므로 위젯이 앱에서 사용되거나 Marketplace에 게시된 후에는 절대 변경해서는 안 됩니다. `key` 요소는 플러그형 위젯의 클라이언트 컴포넌트에 전달될 때 속성 값을 식별하기도 합니다.
* `type`<a id="type-attribute"></a> — 이 요소는 속성의 유형입니다. `type` 요소는 속성에 대해 구성할 수 있는 값, Mendix Studio Pro에서 사용되는 UI, 플러그형 위젯의 클라이언트 컴포넌트가 받는 값의 유형을 정의합니다.
* `caption` — 모델링 개발자에게 속성을 식별해 주는 짧은 레이블입니다. 캡션의 첫 글자는 대문자여야 합니다.
* `description` — 속성에 대한 더 긴 설명입니다. 설명은 대문자로 시작해야 하며 한두 문장으로 제한되어야 합니다.

다음은 Studio Pro에서 캡션과 설명이 표시되는 방식입니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/card-icon.png" alt="캡션" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/card-description.png" alt="설명" class="no-border" >}}

## 위젯 번역

플러그형 위젯은 Studio Pro 내에서 최종 사용자가 선호하는 사용자 인터페이스 언어(Studio Pro의 언어)와 일치하도록 번역을 제공할 수 있습니다. 여기에는 다음 항목에 대한 번역이 포함됩니다:

* 플러그형 위젯의 이름 (예: **도구 상자**에서).
* 속성 이름 또는 속성 값 (예: **속성** 대화 상자에서).
* 에디터 미리보기에 사용되는 레이블과 같은 텍스트 (예: 디자인 모드에서 페이지를 편집할 때).

제공된 경우 Studio Pro 사용자 인터페이스는 위젯의 이름과 해당 속성에 대한 번역을 자동으로 사용합니다. 그러나 플러그형 위젯 미리보기에 표시되는 텍스트는 **translate** 함수를 호출하여 번역해야 합니다. *{widgetName}.editorPreview.js*의 **preview** 함수는 이 **translate** 함수를 prop으로 받습니다. 다음 예와 같이 지정된 키에 대해 제공된 번역을 조회합니다:

```tsx
export function preview(props) {
    return (
        <div>
            {props.translate("안녕하세요")}
        </div>
    )
}
```

플러그형 위젯에 대한 번역은 두 가지 방식으로 제공될 수 있습니다: 위젯 패키지 자체 또는 모듈에서 제공합니다. 이러한 번역은 배포된 앱의 동작에 영향을 주지 않습니다. 사용자가 선호하는 사용자 인터페이스 언어에 대한 번역이 없는 경우 영어가 기본 언어로 사용됩니다.

### 플러그형 위젯 패키지에서 번역 제공

특정 언어 및 로캘에 대한 번역을 지원하려면 *locales/{language-code}/{widget ID}.json* 또는 *locales/{language-code}/translation.json* 파일을 만드십시오. 언어 코드는 *en-US*, *ja-JP*, *ko-KR* 또는 *zh-CN*과 같이 Studio Pro에서 지원하는 사용자 인터페이스 언어 중 하나일 수 있습니다. **locales** 폴더의 다른 파일은 무시됩니다. 따라서 사용자 지정 네임스페이스를 사용할 수 없습니다. .MPK에 여러 플러그형 위젯이 포함되어 있지 않은 한 *translation.json*을 사용할 것을 권장합니다. 위젯 ID를 파일 이름으로 사용하는 경우 공백이나 잘못된 경로 문자(있는 경우)를 밑줄로 바꿔야 합니다. 파일 이름은 모두 소문자여야 합니다. 예를 들어 위젯 ID가 *%My Pluggable Widget%*인 경우 파일 이름은 `_my_pluggable_widget_.json`이어야 합니다.

이러한 JSON 파일은 i18next 라이브러리, 특히 v3에서 사용하는 형식을 따릅니다. 자세한 내용은 [i18next JSON 문서](https://www.i18next.com/misc/json-format)를 참조하십시오. 예를 들어, *length* 속성이 있는 *Text Box*라는 이름의 위젯을 번역하려면 *locales/ko-KR/translation.json*의 내용은 다음 예와 같을 수 있습니다:

```json
{
    "Text Box": "텍스트 상자",
    "length": "텍스트 길이"
}
```

### 모듈에서 번역 제공

플러그형 위젯에 대한 번역은 모듈에서도 제공할 수 있습니다. 이는 둘 이상의 플러그형 위젯이 포함된 모듈을 제공하거나 플러그형 위젯이 하나 이상의 [/apidocs-mxsdk/apidocs/frontend/design-properties/](디자인 속성)을 사용하는 경우에 유용할 수 있습니다.

이를 위해 모듈의 **Styling** 폴더에 *locales/{language-code}/{widget ID}.json* 파일을 만드십시오. 공백이나 잘못된 경로 문자(있는 경우)를 밑줄로 바꿔야 합니다. 파일 이름은 모두 소문자여야 합니다. 예를 들어 위젯 ID가 *%My Pluggable Widget%*인 경우 파일 이름은 `_my_pluggable_widget_.json`이어야 합니다. 또한 *locales/metadata.json* 파일을 만드십시오. 결과 구조는 다음 예와 유사할 것입니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/translations.png" alt="Styling/locales 폴더의 metadata.json 파일과 Styling/locales/ko-KR 폴더의 custom.widget.id.json 파일" class="no-border" max-width=50% >}}

*locales/metadata.json*의 내용은 다음과 같아야 합니다:

```json
{
    "widgetsToBeTranslated": []
}
```

*widgetsToBeTranslated*의 값은 문자열 배열이며 각 문자열은 유효한 위젯 ID여야 합니다. 플러그형 위젯용 .JSON 파일이 존재하더라도 위젯 ID가 이 배열에 포함되어 있지 않으면 무시됩니다.

## 이 섹션의 문서

Mendix는 플러그형 위젯을 위해 다음과 같은 API를 제공합니다:
