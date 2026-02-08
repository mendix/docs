---
title: "모바일"
url: /refguide8/mobile/
weight: 50
no_list: false
description_list: true 
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix를 사용하면 진정한 [네이티브 모바일 앱](#nativemobile)과 [하이브리드 앱](#hybridmobile)을 빠르게 구축할 수 있습니다. 이 문서는 Mendix를 사용한 모바일 앱 개발에 대한 개요를 제공합니다.

Mendix에서는 Navigation Profile을 사용하여 단일 모델에서 다양한 채널(예: 반응형, 하이브리드 모바일, 네이티브 폰)을 생성할 수 있습니다. 이러한 모바일 프로필은 개별적으로 추가하거나 제거할 수 있습니다. 프로필을 추가하면 해당 프로필의 홈 페이지도 제공해야 합니다. Navigation Profile에 대한 자세한 내용은 [내비게이션](/refguide8/navigation/)을 참조하십시오.

## 네이티브 모바일 앱 {#nativemobile}

Mendix 8에서는 완전한 네이티브 모바일 앱을 구축할 수 있습니다. 네이티브 모바일 앱은 하이브리드 앱과 다릅니다: 웹 뷰 내에서 렌더링되지 않고 네이티브 UI 요소를 대신 사용합니다. 이를 통해 빠른 성능, 부드러운 애니메이션, 자연스러운 상호작용 패턴(스와이프 제스처 등), 그리고 모든 네이티브 디바이스 기능에 대한 향상된 접근이 가능합니다. 이러한 반응형 네이티브 모바일 앱을 만들기 위해 Mendix는 인기 있는 오픈소스 프레임워크인 [React Native](https://facebook.github.io/react-native/)를 활용합니다.

Mendix 네이티브 모바일 앱은 웹 또는 하이브리드 앱을 구축하는 것과 동일한 방식으로 구축합니다. 페이지, 위젯, Nanoflow, JavaScript Action, Microflow 및 기타 익숙한 요소를 사용하여 앱을 구축할 수 있습니다. 네이티브 모바일 앱 구축 방법에 대한 자세한 내용은 [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)를 참조하십시오.

그러나 네이티브 모바일 앱과 하이브리드 앱 구축 간에는 몇 가지 차이점이 있습니다. 예를 들어, 네이티브 모바일 앱에 최적화할 때 위젯 세트(및 사용 가능한 속성)가 약간 다릅니다. 또한 네이티브 모바일 앱의 테마와 스타일링은 SASS/CSS 대신 JavaScript를 기반으로 합니다. 스타일링에 대한 자세한 내용은 [네이티브 스타일링](/refguide8/native-styling-refguide/)을 참조하십시오.

## 하이브리드 모바일 앱 {#hybridmobile}

Mendix의 하이브리드 모바일 앱은 모바일 웹 브라우저를 통해 보는 다용도 앱입니다. 그러나 일부 모바일 디바이스 기능은 이러한 앱이 기반으로 하는 HTML과 JavaScript를 통해 접근할 수 없습니다.

Mendix는 [Cordova](https://cordova.apache.org/)를 [로컬 빌드](/howto8/mobile/build-hybrid-locally/)와 결합하여 특정 디바이스 기능을 활용하고 Apple App Store 또는 Google Play Store에 게시할 수 있는 모바일 앱을 구축합니다. Cordova는 웹 애플리케이션 주위에 네이티브 래퍼를 생성하고 JavaScript API를 통해 네이티브 기능에 대한 접근을 제공합니다. 이러한 앱은 웹과 네이티브 앱의 하이브리드이기 때문에 "하이브리드"라고 불립니다.

하이브리드 앱이 디바이스의 네이티브 기능에 접근하기 위해 Mendix는 [Mendix Marketplace](https://marketplace.mendix.com/)에서 여러 위젯을 제공합니다. 네이티브 기능을 활용하는 자체 커스텀 위젯이나 JavaScript Action을 구축할 수도 있습니다. 커스텀 위젯이나 JavaScript Action 구축에 대한 자세한 내용은 각각 [Pluggable Widget 구축 방법](/howto8/extensibility/pluggable-widgets/)과 [JavaScript Action 구축](/howto8/extensibility/build-javascript-actions/)을 참조하십시오.

## 오프라인 우선 앱

Mendix를 사용하면 인터넷 연결과 관계없이 작동하는 앱을 구축할 수 있습니다. 오프라인 우선 애플리케이션은 최종 사용자에게 지속적인 경험과 모든 상황에서 데이터가 안전하다는 확신을 제공합니다. 페이지와 로직은 디바이스 자체의 오프라인 데이터베이스와 상호작용하며, 가능할 때 서버와 데이터를 동기화합니다. 이를 통해 더 나은 UI, 향상된 신뢰성, 그리고 개선된 디바이스 배터리 수명을 얻을 수 있습니다. 오프라인 우선 앱 기능에 대한 자세한 내용은 [오프라인 우선](/refguide8/offline-first/)을 참조하십시오.

Mendix의 네이티브 모바일 앱은 항상 오프라인 우선 기능으로 구성됩니다. 하이브리드 모바일 앱을 구축할 때는 서버에 지속적으로 연결하는 온라인 앱 또는 인터넷 연결 없이도 작동하는 오프라인 우선 앱을 구축할 수 있습니다. 이는 Mendix Studio Pro에서 해당 Navigation Profile을 선택하여 구성할 수 있습니다. 이러한 프로필 설정에 대한 자세한 내용은 [내비게이션](/refguide8/navigation/)을 참조하십시오.

## 이 카테고리의 문서
