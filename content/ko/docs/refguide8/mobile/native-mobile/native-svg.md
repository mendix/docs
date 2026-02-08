---
title: "벡터 그래픽 작업"
url: /refguide8/native-svg/
weight: 80
description: "네이티브 모바일 앱에 SVG를 통합하는 방법을 알아봅니다."
---

## 소개

네이티브 모바일 애플리케이션을 구축할 때 아이콘이나 기타 일러스트레이션에 벡터 이미지를 사용하고 싶을 수 있습니다. 이를 위해 Scalable Vector Graphics(SVG)를 사용할 수 있습니다. 이 참조 가이드는 네이티브 모바일 앱에서 SVG 작업에 대한 지침을 제공합니다.

## SVG 최적화 {#optimizing}

편집기에서 SVG를 내보낼 때 불필요한 요소가 여러 개 포함된 SVG가 생성되는 경우가 많습니다. 이러한 요소는 파일 크기를 늘리고, 성능을 저하시키며, 원하지 않는 부작용을 일으킬 수 있습니다. 따라서 SVG를 SVG 최적화 도구를 통해 실행하는 것이 좋습니다.

SVG를 최적화하려면 [SVGOMG](https://jakearchibald.github.io/svgomg/)와 같은 온라인 도구를 통해 실행하거나 [SVGO](https://github.com/svg/svgo)와 같은 로컬 도구를 사용할 수 있습니다.

{{% alert color="info" %}}일부 사용자는 Make It Native 테스트 앱에서 SVG가 보이지 않는 문제를 경험했습니다. 변경된 SVG 이미지를 배포할 때 먼저 배포 폴더를 정리해야 할 수 있습니다. Studio Pro에서 **App** > **Clean Deployment Directory**를 클릭하십시오. 재컴파일하면 새 이미지가 Make It Native 앱에서 보이게 됩니다.{{% /alert %}}

## 지원되지 않는 요소

SVG에는 여러 종류의 요소가 포함될 수 있습니다. 그러나 모든 요소가 네이티브 모바일 앱에서 지원되는 것은 아닙니다. 지원되지 않는 요소는 효과가 없으므로 제거해야 합니다. 다음 SVG 요소는 네이티브 모바일 앱에서 지원되지 *않습니다*:

* 복잡한 그래디언트
* 애니메이션
* 비디오
* JavaScript 코드
* CDATA 요소
* `<style />` 태그 및 `style` 속성(대신 일반 속성을 사용하십시오)

Mendix는 SVG에서 이러한 요소를 수동으로 제거하거나 위의 [SVG 최적화](#optimizing)에서 언급한 도구를 사용하여 호환성을 확인할 것을 권장합니다.

## SVG 스타일링

이미지를 추가할 때와 같이 SVG의 특정 색상을 변경하고 싶을 수 있습니다. Mendix를 사용하면 이미지 스타일링에서 `fill` 및 `stroke` 속성을 설정하여 이를 수행할 수 있습니다. 이러한 속성은 해당 속성이 없는 SVG 내부의 *모든* 요소에 적용됩니다.

다음 SVG를 예로 들어 보겠습니다:

```svg
<svg viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" stroke="blue"/>
</svg>
```

이 이미지의 스타일링에서 `fill` 속성을 설정하면 직사각형(`rect` 요소)이 제공된 색상으로 변경됩니다. `stroke` 속성을 설정하면 `stroke`가 이미 설정되어 있으므로 변경되지 않습니다.

다음은 `fill` 속성이 없는 SVG의 모습입니다:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-svg/before.png" alt="before" class="no-border" >}}

다음은 `fill` 속성이 있는 SVG의 모습입니다:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-svg/after.png" alt="after" class="no-border" >}}

허용되는 스타일 속성 목록은 [react-native-svg](https://github.com/react-native-community/react-native-svg#common-props) 리포지토리에서 확인할 수 있습니다.

### SVG 아이콘 색상 지정

아이콘은 버튼과 하단 바 항목에만 설정할 수 있습니다. SVG 아이콘을 버튼이나 하단 바 항목에 통합할 때 SVG의 색상을 직접 설정해야 합니다. Atlas UI를 사용하는 앱을 사용할 때 기본적으로 색상은 모두 흰색입니다. 스타일링에 대한 자세한 내용은 [네이티브 모바일 스타일링 참조 가이드](/refguide8/native-styling-refguide/)를 참조하십시오.

예를 들어, 다음 코드:

```jsx
export const DemoButton = {
	container: {
		backgroundColor: 'green'
	},
	caption: {
		color: 'orange'
	},
	icon: {
		color: 'blue'
	}
}
```

다음과 같은 버튼과 SVG를 생성합니다:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-svg/blue-svg.png" alt="blue svg" class="no-border" >}}

## Pluggable Native Widget에서 SVG 사용

Pluggable Native Widget의 이미지 속성에서 SVG를 사용하려면 제공된 `Image` 또는 `Icon` 컴포넌트를 사용하는 것이 좋습니다. 이를 통해 SVG를 포함하여 지원되는 모든 형식의 정적 이미지를 Pluggable Widget 내에서 사용할 수 있습니다.

다음은 `Image` 컴포넌트 사용 예시입니다:

```jsx
import { createElement } from "react";
import { Image } from "mendix/components/native/Image";

export const PluggableWidget = () => (
    <Image source="PUT_SOURCE_HERE" style={{ fill: 'blue' }} />
);
```

다음은 `Icon` 컴포넌트 사용 예시입니다:

```jsx
import { createElement } from "react";
import { Icon } from "mendix/components/native/Icon";

export const PluggableWidget = () => (
    <Icon 
        icon={{
            type: "image",
            iconUrl: "PUT_SOURCE_HERE"
        }}
        size={20}
        color="blue"
    />
);
```

Pluggable Widget에서 SVG 요소를 직접 사용하려면 [react-native-svg](https://github.com/react-native-community/react-native-svg) 라이브러리를 참조하십시오.

## 더 읽기

* [Pluggable Native Widget 구축](/howto8/extensibility/build-native-widget/)
* [Atlas UI](/howto8/front-end/atlas-ui/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
