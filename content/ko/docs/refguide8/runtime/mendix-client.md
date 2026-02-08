---
title: "Mendix Client"
url: /refguide8/mendix-client/
description: "Mendix Client Runtime 구성 요소에 대한 설명과 작동 방식을 설명합니다."
weight: 20
---

## 소개

Mendix Client는 최종 사용자의 디바이스에서 실행되며 최종 사용자와 앱 간의 인터페이스를 처리합니다. 경우에 따라 Runtime Server와 완전히 독립적으로 실행되어 모든 처리를 로컬에서 수행할 수 있습니다. 대부분의 경우 Runtime Server와 상호 작용하여 공유 데이터를 가져오거나 업데이트하거나 추가 애플리케이션 로직을 수행합니다.

이 Mendix Client 설명은 클라우드에서 실행되는 앱의 Runtime Server를 사용하는 것을 기반으로 합니다. 테스트를 위해 Mendix를 로컬에서 실행할 수도 있지만, 개념적으로는 동일합니다.

## 설명

Mendix Client는 Mendix로 빌드된 모든 애플리케이션에 사용됩니다: 웹, 모바일, 하이브리드.

**웹 애플리케이션**의 경우, Mendix Client는 단일 페이지 애플리케이션(SPA)으로 작동합니다. 즉, 모든 페이징이 다른 URL을 사용하여 제공되는 별도의 페이지가 아닌 Mendix Client에서 처리됩니다. Mendix Client는 *테마*에서 제공하는 HTML 페이지에서 `mxui.js` 스크립트를 로드하여 부트스트랩됩니다.

**모바일 애플리케이션**의 경우, Mendix Client는 React Native 애플리케이션으로 작동합니다. 즉, Mendix로 만든 앱은 *래퍼(wrapper)*와 *번들(bundle)* 두 부분으로 구성됩니다. 래퍼는 번들을 로드하고 플랫폼 기능을 노출하는 네이티브 iOS 또는 Android 애플리케이션입니다. 번들에는 Client Core, Pluggable Widget 및 Nanoflow와 페이지와 같은 애플리케이션별 리소스가 포함됩니다.

모바일 애플리케이션에 지원되는 세 가지 유형의 래퍼는 다음과 같습니다:

* [Make It Native 앱](/refguide8/getting-the-make-it-native-app/)
* [커스텀 개발자 앱](/howto8/mobile/how-to-devapps/)
* [네이티브 앱](/howto8/mobile/deploying-native-app/)

처음 두 가지는 번들을 동적으로 로드하며, 마지막은 나중에 [업데이트](/howto8/mobile/how-to-ota/)할 수 있는 사전 패키징된 번들을 포함합니다.

**하이브리드 애플리케이션**은 대부분의 목적에서 브라우저에서 실행되는 앱으로 취급할 수 있습니다. 그러나 이 경우 브라우저는 모바일 애플리케이션에 내장되어 있으며 [Cordova](https://cordova.apache.org/) 플러그인을 통해 모바일 디바이스의 일부 기능에 접근할 수 있습니다. Mendix는 모바일 디바이스에서 실행되는 Mendix 앱을 만들려는 경우 하이브리드 앱 대신 네이티브 모바일 앱을 사용하는 것을 권장합니다.

아래는 Mendix Client의 구성 요소를 보여주는 차트입니다. 각 구성 요소에 대한 설명은 차트 아래에 있습니다.

{{< figure src="/attachments/refguide8/runtime/mendix-client/mendix-client.png" alt="The makeup of the Mendix Client" class="no-border" >}}

### Client Core

클라이언트의 인터프리터로 볼 수 있습니다. 클라이언트 구성과 클라이언트 상태를 사용하여 최종 사용자의 요청을 처리하는 방법을 결정합니다.
Client Core는 요청을 처리하는 데 필요한 다양한 프로세스를 제어합니다. 이러한 프로세스에는 데이터 가져오기 및 조작, 클라이언트 측 표현식, 내비게이션이 포함됩니다.

Client Core는 JavaScript로 작성되었습니다.

Mendix 앱은 Client Core를 수정하지 않으며, 모든 로직은 모델에 보관됩니다. 그러나 Mendix의 각 패치 버전에는 고유한 Client Core 버전이 포함됩니다.

### 위젯

Mendix Client의 기본 구성 요소입니다. 클라이언트가 수행하는 모든 작업은 위젯에 의해 제어됩니다. 페이지에 표시되는 내용과 사용자 입력이 관리되는 방식을 담당합니다. 위젯에 대한 자세한 설명은 아래 [위젯](#widgets)에 있습니다.

### JavaScript Action

앱 개발자가 추가한 커스텀 JavaScript를 실행하며, 이는 클라이언트 구성에 JavaScript Action으로 보관됩니다.

### UI 레이어

UI 레이어는 내비게이션, 리소스 로딩, 플랫폼 통합을 수행합니다. 올바른 언어 및 기타 로케일 설정을 사용하여 Mendix Client의 작업에 대한 응답으로 최종 사용자에게 표시되는 페이지를 구축하는 역할을 합니다.

### HTTPS 서버

HTTPS 서버는 모델에 보관된 페이지, 위젯 및 JavaScript Action을 앱의 최종 사용자에게 제공합니다.

### 로직

모델의 Nanoflow에 정의된 클라이언트 측 로직을 실행합니다.

### Platform API

Mendix Client가 실행되는 환경의 기능입니다. 대부분의 경우 카메라나 GPS 위치와 같은 모바일 디바이스의 기능이지만, Mendix Native API 호출이나 이미지 파일 접근과 같은 브라우저 기능도 포함될 수 있습니다.

### 클라이언트 구성

Mendix Client에 필요한 정적 데이터입니다. 브라우저 기반 클라이언트의 경우 이 데이터는 Runtime Server와 함께 온라인에 보관됩니다. 네이티브 모바일 앱의 경우 디바이스에 로컬로 보관됩니다.

여기에는 Mendix Client를 시작하는 데 필요한 초기 환경(예: 브라우저 셸 페이지), 앱의 테마를 정의하는 CSS(Cascading Style Sheets) 파일, 클라이언트 측 로직을 정의하는 JavaScript 파일이 포함됩니다.

### Data API

Mendix Client가 오프라인 저장소 또는 Mendix Runtime에서 데이터를 가져오고 조작할 수 있게 합니다.

### 객체 캐시

Mendix Client가 메모리에서 사용하고 있는 객체를 보관하고 관리합니다. 예를 들어 Non-Persistable 객체, 새 객체, 페이지에 표시하기 위해 Runtime Server가 반환한 객체가 포함됩니다. 또한 이러한 객체의 Attribute 및 Association 변경 사항도 보관합니다.

상태 관리는 더 이상 필요하지 않은 메모리를 해제하기 위해 가비지 컬렉션을 수행합니다.

### 오프라인 저장소

일반적으로 모바일 디바이스에 있는 영구 저장소로, 오프라인 모드에서 실행되는 앱의 데이터를 저장할 수 있습니다. 임시 객체 저장소와 다른 점은 여기의 데이터는 세션이 끝나도 손실되지 않고 Runtime Server와 동기화할 수 있을 때까지 유지된다는 것입니다.

### State/Sync/Session

Runtime Server에 대한 요청을 관리합니다. Mendix Client의 일부 작업은 Runtime Server에 접근할 필요가 없습니다. 예를 들어, 객체 캐시가 이미 임시 객체 저장소에 필요한 데이터에 접근할 수 있거나 앱이 "오프라인 우선"으로 작성된 경우입니다.

Mendix Client와 Runtime Server 간의 통신에 대한 자세한 내용은 [Mendix Runtime의 통신 패턴](/refguide8/communication-patterns/)을 참조하십시오.

#### 상태 관리

앱의 현재 상태(객체 캐시에 보관됨)를 Runtime Server에 전달합니다. 상태가 Mendix Client에 보관되므로 Runtime Server는 상태 비저장(Stateless)일 수 있습니다. 이를 통해 인스턴스를 추가하여 앱을 수평으로 쉽게 확장할 수 있으며, 어떤 인스턴스든 어떤 요청이든 처리할 수 있습니다.

성능 문제를 피하기 위해 Mendix Client는 전체 상태를 Runtime에 보내지 않습니다. 상태 관리는 애플리케이션 배포 중에 모델을 분석하여 상태의 어떤 부분을 보내야 하는지 결정합니다.

상태에 대한 자세한 정보는 다음 블로그를 참조하십시오: [https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/](https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/). 여기에는 상태가 Runtime Server에 어떻게 전달되는지 직접 확인하고 복제할 수 있는 작업 예시도 포함되어 있습니다.

상태 관리는 가비지 컬렉션도 담당합니다. 이 측면에 대해 더 알고 싶다면 다음 블로그를 참조하십시오: [https://www.mendix.com/blog/the-art-of-state-part-2-garbage-collection/](https://www.mendix.com/blog/the-art-of-state-part-2-garbage-collection/).

#### 동기화

앱이 "오프라인 우선"인 경우, 앱에서 생성 및 변경된 데이터는 Runtime Server와 동기화될 때까지 로컬에 저장됩니다. 이 작업은 동기화 프로세스에 의해 수행됩니다. 오프라인 저장소와 객체 캐시를 Runtime Server와 동기화합니다. 오프라인 우선 앱과 동기화에 대한 자세한 내용은 [오프라인 우선](/refguide8/offline-first/)을 참조하십시오.

#### 세션

Runtime과의 세션이 활성 상태로 유지되고 필요한 경우 복원되도록 합니다. 또한 인증이 필요한 Runtime과의 모든 통신에 대한 인증 역할을 합니다.

### Runtime Server

Runtime Server는 Mendix Client의 요청을 기다리고, 요청을 처리하며, 요청된 데이터와 적절한 경우 추가 상태 정보를 반환합니다. 이는 *xas*라는 전용 API를 통해 이루어집니다.

또한 앱에 변경 사항이 있을 때 Mendix Client에 알리고, 개발자가 Nanoflow를 디버깅하기 위해 클라이언트에 디버거를 연결할 수 있게 합니다.

모든 정보가 Mendix Client에 전송되어 페이지를 구축하므로 Mendix Client의 모든 내용은 최종 사용자에게 표시됩니다. 보안은 Runtime Server에서 수행되며, 사용자가 볼 수 있는 정보만 Mendix Client에 전송합니다.

Runtime Server에 대한 설명은 [Runtime Server](/refguide8/runtime-server/)를 참조하십시오.

## 위젯{#widgets}

Mendix 페이지는 개별 위젯으로 구성됩니다. 위젯은 다음 유형 중 하나일 수 있습니다:

* 코어 위젯 – Mendix Client의 일부
* Pluggable Widget – React 또는 React Native 기반, 사용자가 작성하거나 Marketplace에서 다운로드
* 커스텀 위젯 – Dojo 기반, 사용자가 작성하거나 Marketplace에서 다운로드

이러한 위젯은 아래 섹션에서 설명합니다.

### 코어 위젯

Mendix에는 Mendix 페이지의 표준 기능을 지원하는 여러 코어 위젯이 있습니다. 코어 위젯은 Core Client의 일부입니다. 이러한 위젯의 대부분은 네이티브 및 웹 구현을 모두 갖고 있지만 일부는 하나의 플랫폼으로만 제한됩니다.

네이티브 모바일 애플리케이션에서는 React Native 프레임워크 기반의 구현이 사용됩니다. 웹 애플리케이션에서는 React 또는 Dojo 기반의 구현이 사용됩니다. Dojo를 사용하는 위젯에는 일부 제한 사항이 있습니다. 예를 들어 [Pluggable Widget](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#widgets) 내부에서 사용할 수 없습니다. 이러한 Dojo 구현은 점차 교체되고 있습니다.

### Pluggable Widget

코어 위젯이 충분하지 않은 경우 **Pluggable Widget**이라고 하는 자체 위젯을 작성할 수도 있습니다. Pluggable Widget은 Marketplace를 통해 다운로드할 수 있습니다. 이들은 React(웹 애플리케이션) 또는 React Native(네이티브 모바일 애플리케이션) 기반이며 위젯을 작성하는 권장 방법입니다. 아래에 설명된 커스텀 위젯을 대체합니다.

자세한 내용은 [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)를 참조하십시오.

### 커스텀 위젯

**커스텀 위젯**도 작성할 수 있습니다. 이들은 Dojo 프레임워크 기반이며 웹 애플리케이션에서만 실행됩니다. Pluggable Widget과 다른, 더 하위 수준의 API에 접근할 수 있습니다. 커스텀 위젯은 Pluggable Widget으로 기능을 만들 수 없는 경우에만 사용해야 합니다.

커스텀 위젯에 대한 자세한 내용은 [커스텀 위젯 빌드 방법](/howto8/extensibility/widget-development/)을 참조하십시오.

## Mendix Client 시작

최종 사용자가 Mendix 앱을 사용하려면 Runtime Server에 연결하기 전에 디바이스에서 클라이언트를 시작해야 합니다. 이 작동 방식은 클라이언트를 실행하는 데 사용되는 방법에 따라 다릅니다. 다음 중 하나일 수 있습니다:

* 브라우저
* 네이티브 모바일 앱

Mendix Client가 실행되는 방식은 아래 섹션에 설명되어 있습니다.

### 브라우저에서 Mendix Client 실행

브라우저에서 환경은 코드가 부트스트랩되는 초기 페이지인 "셸"에 구축됩니다.

#### 실행 흐름

최종 사용자가 브라우저에서 앱을 실행하면 다음 흐름이 트리거됩니다.

1. 최종 사용자가 브라우저에 앱의 URL을 입력합니다.
2. 브라우저가 HTML 웹 페이지("셸")를 로드합니다.
3. 웹 페이지가 코어 위젯과 함께 Mendix Client를 로드하고 시작합니다.
4. Mendix Client가 커스텀 위젯을 로드합니다.
5. Mendix Client가 Runtime Server에 연결하고 최종 사용자를 인증합니다.
6. Mendix Client가 Runtime Server에서 필요한 추가 구성을 가져옵니다.

    *이제 Mendix Client가 최종 사용자와 상호 작용할 준비가 되었으며, 최종 사용자의 세션이 계속되는 동안 다음 단계를 반복합니다.*

7. Mendix Client가 페이지 정의를 로드합니다.
8. Mendix Client가 페이지에서 사용되는 Pluggable Widget을 로드합니다.
9. Mendix Client가 Runtime Server에서 필요한 데이터를 검색합니다.
10. Mendix Client가 페이지를 구축합니다.
11. Mendix Client가 최종 사용자에게 페이지를 표시합니다.
12. Mendix Client가 최종 사용자의 입력을 처리하고 위의 단계를 반복하여 올바른 페이지를 표시합니다.

#### Mendix Client 리소스 위치

앱이 배포되면 정적 리소스는 별도의 구조에 배치됩니다. 여기에는 다음이 포함됩니다:

* index.html – 최종 사용자가 Mendix Client를 시작할 때 로드되는 초기 HTML 페이지 — 클라이언트 구성 및 기타 정적 비Mendix 콘텐츠(예: Google Analytics가 앱에 추가된 경우)를 포함합니다
* mxui.js – 주요 Mendix Client 코드
* 앱 스타일링/Atlas – 페이지 표시 방법을 정의하는 앱별 CSS 스타일링 및 정적 시각적 요소
* 위젯 – 이 앱에서 사용하는 네이티브 및 웹 코어 위젯
* 페이지 정의 – 이 앱의 페이지 모양을 Mendix Client에 알려주는 XML 페이지 정의

### 네이티브 Mendix Client 실행

네이티브 모바일 앱을 실행할 때의 흐름은 브라우저에서 실행하는 것과 다릅니다. 더 많은 정보가 앱의 일부로 로컬에 저장되며, 네이티브 모바일 앱은 "오프라인 우선"으로 설계할 수도 있어 Runtime Server에 연결하지 않고도 실행할 수 있습니다.

여기에 설명된 흐름은 프로덕션 앱용입니다. 개발 중에는 흐름이 동일하지 않습니다. 이를 통해 더 빠른 배포와 온라인 디버깅이 가능합니다.

1. 최종 사용자가 디바이스에서 앱을 엽니다. 이것은 iOS 또는 Android에서 네이티브로 실행되는 프로젝트별 셸 앱입니다. 디바이스에 적합한 앱 스토어에 출시됩니다. 새 버전의 앱이 디바이스에 다운로드되면 앱이 이미 디바이스에서 열려 있더라도 최종 사용자가 처음 연 것처럼 동작합니다.
2. 셸 앱이 네이티브 번들을 로드합니다. 이는 브라우저에서 실행되는 Mendix Client가 사용하는 Mendix Client 리소스에 해당합니다. 예를 들어 Mendix Client 코드와 페이지 정의가 포함됩니다. 그러나 Runtime Server와 함께 중앙에 보관되는 것이 아니라 디바이스에 로컬로 보관됩니다.
3. 디바이스에 유효한 인증 토큰이 없는 경우 Mendix Client가 Runtime Server에 연결하여 최종 사용자를 인증하고 Runtime Server에서 필요한 추가 구성을 가져옵니다.
4. 앱이 처음 시작되었거나 앱 업데이트 후 처음 시작된 경우 Mendix Client가 Runtime Server와 동기화를 수행합니다.
5. Mendix Client가 Visual Studio App Center에 저장된 리소스에서 네이티브 번들 업데이트를 확인합니다. 이를 통해 앱 스토어에서 새 버전의 앱을 다운로드할 필요 없이 앱을 최신 상태로 유지할 수 있습니다.

    *이제 Mendix Client가 최종 사용자와 상호 작용할 준비가 되었으며, 앱이 계속 실행되는 동안 다음 단계를 반복합니다.*

6. Mendix Client가 디바이스의 데이터를 사용하여 페이지를 준비합니다.
7. Mendix Client가 최종 사용자에게 페이지를 표시합니다.
8. Mendix Client가 최종 사용자의 입력에 반응합니다.
