---
title: "커스텀 위젯 빌드"
url: /howto8/extensibility/widget-development/
weight: 30
no_list: false
description_list: true 
---

## 소개

Mendix 커스텀 위젯은 Mendix 앱의 사용자 인터페이스 일부로, 앱 사용자와의 기능 및 상호 작용을 가능하게 합니다. 커스텀 위젯은 앱의 인터페이스, 데이터, 이미지 및 앱의 작동 방식을 변경할 수 있습니다. 이러한 커스텀 위젯은 표준 Mendix 컴포넌트(예: 버튼, 리스트 뷰)를 사용하는 것과 매우 특화된 컴포넌트를 직접 만드는 것 사이의 간격을 메워줍니다.

커스텀 위젯 개발은 처음에는 어려울 수 있습니다. 아래 리소스를 통해 위젯 개발을 시작하세요.

## 사전 조건

위젯을 만들려면 JavaScript 작동 방식에 대한 충분한 이해가 필요합니다. 다음 자료를 통해 시작할 수 있습니다:

* [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

## 특정 위젯 주제

아래 섹션에서는 위젯이 어떻게 빌드되는지 이해하는 데 도움이 되는 Mendix 리소스를 설명합니다.

### 소개 동영상

* [Expert Series: Kickstart Your Widget Development](https://www.youtube.com/watch?v=MZ0Ihu2QGYY)

### Dojo {#dojo}

커스텀 위젯은 Dojo 위젯입니다. 위젯의 구조와 수명 주기를 이해하려면 Dojo 위젯이 어떻게 빌드되는지 알아야 합니다. 다음 간략한 소개를 참조하세요:

* [Dojo Documentation Tutorials](https://dojotoolkit.org/documentation/#tutorials)

위젯 수명 주기에 대한 자세한 내용은 다음 문서를 참조하세요:

* [Writing Your Own Widget](https://dojotoolkit.org/reference-guide/1.10/quickstart/writingWidgets.html)
* [dijit.\_WidgetBase](https://dojotoolkit.org/reference-guide/1.10/dijit/_WidgetBase.html)
* [Tutorial: Widget Lifecycle](https://apidocs.rnd.mendix.com/6/client/tutorial-widget-lifecycle.html)

### 위젯 스캐폴딩

과거에는 Brackets와 플러그인을 사용하여 위젯을 만들었습니다. 최근 출시된 새로운 JavaScript/Node.js 도구를 통해 이 방식은 더 이상 사용되지 않습니다. 위젯을 만드는 새로운 방법은 Yeoman과 제너레이터를 사용하는 것입니다.

이 정보는 [Expert Series: Kickstart Your Widget Development](https://www.youtube.com/watch?v=MZ0Ihu2QGYY)에서 다루고 있습니다.

### Mendix Runtime과의 상호 작용

위젯은 Runtime에서 데이터를 가져오고, 객체를 조작하고, 유효성 검사를 표시하고, 참조를 설정하는 기능을 가지고 있습니다. 이는 Client API를 통해 수행됩니다. 이 API의 최신 버전은 [Client API](/apidocs-mxsdk/apidocs/client-api/)를 참조하세요.

### Mendix에서 위젯 구성

Mendix에는 XML 파일을 사용하여 위젯을 구성하는 특정 방법이 있습니다. 자세한 정보와 예제는 AppStoreWidgetBoilerplate 리포지토리의 [WidgetName](https://github.com/mendix/AppStoreWidgetBoilerplate/blob/master/src/WidgetName/WidgetName.xml)을 참조하세요.

위젯 XML 작성에 대한 전체 참조는 [XML로 위젯 빌드](/howto8/extensibility/use-xml-widget/)를 참조하세요.

### 보일러플레이트

Yeoman 위젯 제너레이터는 Mendix가 만든 두 가지 버전의 보일러플레이트를 제공합니다. 이 보일러플레이트의 소스 코드는 [AppStoreWidgetBoilerplate 리포지토리](https://github.com/mendix/AppStoreWidgetBoilerplate)에서 확인할 수 있습니다.

## 추가 읽을거리

이 카테고리의 사용 방법 문서에서는 자체 위젯을 빌드하는 방법에 대한 심층 정보를 제공합니다. 추가 팁은 아래를 참조하세요.

### 예제로 학습

[Mendix Marketplace](https://marketplace.mendix.com/)의 대부분의 위젯은 오픈 소스이며 GitHub에서 이용할 수 있습니다. Marketplace 화면 오른쪽에서 **View on GitHub** 링크를 찾을 수 있습니다:

{{< figure src="/attachments/howto8/extensibility/widget-development/appstore-github-link.png" class="no-border" >}}

### 직접 만들며 학습

위젯 제너레이터를 사용하면 테스트 프로젝트가 제공됩니다. 테스트 프로젝트(또는 자체 프로젝트)를 사용하여 빠르게 위젯 만들기를 시작할 수 있습니다.

위젯을 디버깅하면 실수하는 부분과 위젯 수명 주기가 어떻게 작동하는지 빠르게 배울 수 있습니다.

### 커뮤니티에 문의

Mendix 개발자 커뮤니티에는 많은 위젯 개발자가 있습니다. 질문이 있을 때는 [Mendix Community](https://community.mendix.com/)를 방문하세요.

## 이 카테고리의 문서
