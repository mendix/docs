---
title: "Native Template 10"
url: /releasenotes/mobile/nt-10-rn/
weight: 60
description: "Native Template 10 릴리스 노트."
---

## 10.0.0 {#1000}

**릴리스 날짜: 2024년 11월 27일**

### 개선 사항

* React Native 버전을 0.75.4로 업그레이드했습니다. 이 중요한 업데이트는 성능을 개선하고 React Native의 최신 기능과의 호환성을 높입니다.

#### 중요 참고 사항

* Studio Pro 10.17 이상에서 생성된 프로젝트는 추가 구성 없이 자동으로 최신 React Native 버전을 사용합니다.
* 10.17 미만의 Mendix 버전에서 10.17 이상으로 업그레이드하는 프로젝트의 경우, 아래 [업그레이드 안내](#upgrade-instructions)의 단계를 따라 프로젝트를 마이그레이션하세요.

#### 라이브러리 업데이트 및 개선 사항

* **@react-native-async-storage/async-storage:** 2.0.0  
* **@react-native-community/datetimepicker:** 8.2.0  
* **@react-native-masked-view/masked-view:** 0.3.1  
* **@react-native-picker/picker:** 2.8.1  
* **@react-navigation/native:** 6.1.18  
* **react-native-device-info:** 13.0.0  
* **react-native-gesture-handler:** 2.20.2  
* **react-native-localize:** 3.2.1  
* **react-native-pager-view:** 6.4.1  
* **react-native-safe-area-context:** 4.11.0  
* **react-native-svg:** 15.7.1  
* **react-native-tab-view:** 3.5.2  
* **react-native-vector-icons:** 10.2.0  

### 호환성을 깨뜨리는 변경 사항

#### 라이브러리 마이그레이션

* `@react-native-community/async-storage`가 `@react-native-async-storage/async-storage`로 교체되었습니다. import 및 프로젝트 종속성이 이 변경 사항을 반영하는지 확인하세요.
* `@react-native-community/masked-view`가 `@react-native-masked-view/masked-view`로 교체되었습니다. 참조를 적절히 업데이트하세요.

{{% alert color="info" %}}
이러한 라이브러리 변경 사항은 영향을 받는 패키지에 명시적으로 의존하는 커스텀 모듈을 사용하는 프로젝트에만 영향을 미칩니다. 프로젝트가 커스텀 모듈을 사용하지 않거나 이러한 특정 종속성을 포함하지 않는 경우 별도의 조치가 필요하지 않습니다.
{{% /alert %}}

#### PopupMenu 컴포넌트

* 업데이트된 Native Mobile Resources 모듈의 PopupMenu 컴포넌트에 호환성을 깨뜨리는 변경 사항이 포함되어 있습니다.
* 이 문제는 다음 두 가지를 동시에 수행하는 프로젝트에만 영향을 미칩니다:
    * 10.17 미만의 Mendix 버전에서 10.17 이상으로 업그레이드
    * Native Mobile Resources 모듈을 최신 버전으로 업데이트

이 문제를 해결하려면 다음을 수행하세요. Native Mobile Resources 모듈을 업데이트하면 Studio Pro에서 다음 경고가 표시됩니다:

`The definition of this widget has changed. Update this widget by right-clicking it and selecting 'Update widget,' or select 'Update all widgets' to update all widgets in the app.`

이 메시지를 확인한 후 다음을 수행하세요:

1. Studio Pro에서 경고를 마우스 오른쪽 버튼으로 클릭하세요.
1. **Update All Widgets**를 클릭하여 필요한 업데이트를 적용하세요.

### 업그레이드 안내 {#upgrade-instructions}

10.17 미만의 Mendix 버전에서 업그레이드하는 경우, 새로운 React Native 버전을 사용하기 위해 다음 단계를 따르세요:

1. 필수 모듈 업데이트:
    1. Native Mobile Resources: Mendix Marketplace에서 이 모듈을 최신 버전으로 업데이트하세요.
    1. Nanoflow Commons: 이 모듈을 최신 버전으로 업데이트하세요.
1. Studio Pro에서 위젯 업데이트:
    1. Native Mobile Resources 모듈을 업데이트한 후, Studio Pro에서 경고를 마우스 오른쪽 버튼으로 클릭하고 **Update All Widgets**를 클릭하여 프로세스를 완료하세요.
1. 애플리케이션 테스트:
    1. 업데이트 후 모든 기능이 예상대로 작동하는지 애플리케이션을 철저히 테스트하세요.

Native Template에 대한 가장 직접적인 정보는 [GitHub Releases 페이지](https://github.com/mendix/native-template/releases/tag/v10.0.0)를 방문하세요.
