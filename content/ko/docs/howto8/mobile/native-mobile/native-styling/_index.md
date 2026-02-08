---
title: "Native Mobile 스타일링 구현"
url: /howto8/mobile/native-styling/
weight: 30
description: Mendix에서 네이티브 스타일링에 대한 일반 정보입니다.
---

{{% alert color="info" %}}
Atlas UI Resources 모듈은 Atlas 2와 함께 더 이상 사용되지 않습니다. 아직 Atlas 2를 사용하고 있다면, [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

## 소개

Mendix 8에서는 Mendix Studio Pro에서 사용자 정의 스타일링을 사용하여 Native Mobile 앱을 빌드할 수 있습니다. Native Mobile 앱의 스타일링은 Mendix Studio Pro에 새로 도입된 JavaScript 스타일 시트를 사용합니다. 테마 폴더 구조, 클래스 및 디자인 속성에 대한 정보는 아래 가이드라인을 참조하십시오.

## 테마 폴더 구조

각 앱의 스타일링은 **theme/styles** 폴더에 저장됩니다. 여기서 스타일링은 **native**와 **web** 폴더로 나뉩니다. 둘 다 동일한 구조를 가지고 있습니다. 

이 폴더에는 엄격한 규칙이 있습니다:

* 사용자는 **app** 폴더에서만 스타일링을 추가하거나 변경해야 합니다 
* **app** 폴더에는 *custom.js*와 *custom-variables.js* 두 파일이 있습니다—스타일링을 변경할 때는 항상 *native/core/variables.js*에서 변경하려는 변수를 *native/app/custom-variables.js*로 복사하십시오
* *custom-variables.js* 파일은 *variables.js* 파일을 덮어씁니다—Atlas 업데이트를 더 어렵게 만들므로 **core** 폴더에서 직접 변경하지 마십시오
* 변경하거나 추가하려는 변수는 *custom-variables.js*에 넣어야 합니다 
* 변경하거나 추가하려는 클래스는 *custom.js*에 넣어야 합니다

**native/core/base** 폴더에는 전역 헬퍼 클래스가 포함되어 있습니다. 이 클래스들은 범용적이며 모든 Widget에 적용할 수 있습니다. 그 중 일부는 Mendix Studio Pro에서 디자인 속성으로도 사용할 수 있습니다.

**native/core/helpers** 폴더에는 Widget용 헬퍼 클래스가 포함되어 있습니다. 모든 Widget에는 디자인 속성과 몇 가지 추가 클래스가 포함된 자체 파일이 있습니다.

**native/core/helpers/_helperfunctions** 폴더에는 여러 헬퍼 함수가 포함되어 있습니다. 이 함수들은 더 쉽게 스타일링하는 데 도움이 됩니다. 예를 들어, `adjustFont` 함수는 폰트를 받아 화면 크기에 맞게 조정합니다. 이렇게 하면 폰트 크기가 반응형이 됩니다. 이러한 헬퍼 클래스에 대한 자세한 정보는 코드 내 설명을 참조하십시오.

**native/core/widgets** 폴더에는 기본 Widget 스타일링이 포함되어 있습니다. 모든 Widget에는 기본 클래스 이름이 포함된 자체 파일이 있습니다.

**native/ui_resources**에서는 리소스 패키지 스타일링을 찾을 수 있습니다. 여기에서 빌딩 블록, 페이지 템플릿 및 레이아웃과 관련된 모든 스타일링을 찾을 수 있습니다.

## 클래스

Mendix Studio Pro에서 설정하는 기본 클래스 이름은 항상 Pascal case로 명명됩니다. 다른 모든 클래스는 lowerCamelCase로 작성됩니다. 이렇게 하면 기본 Widget 스타일에 대한 변경 사항이 명확하게 유지됩니다.

## 디자인 속성

Mendix Studio Pro에서 사용할 수 있는 디자인 속성은 클래스를 적용하는 더 쉬운 방법입니다. Atlas는 이미 여러 유용한 디자인 속성을 기본 제공합니다. Widget을 클릭하고 **Properties** 패널을 보면 확인할 수 있습니다. 디자인 속성은 드롭다운 메뉴 또는 토글일 수 있습니다. 토글은 하나의 클래스를 토글하고, 드롭다운 메뉴는 각 드롭다운 항목에 대해 다른 클래스를 적용합니다. 

## 추가 정보

* [Mendix Atlas UI](/howto8/front-end/atlas-ui/)
* [Native Mobile 시작하기](/howto8/mobile/getting-started-with-native-mobile/)
