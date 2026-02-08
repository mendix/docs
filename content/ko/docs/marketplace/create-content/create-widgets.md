---
title: "Widget 만들기"
url: /appstore/guidelines-creating-widgets/
description: "Marketplace에서 Widget을 만들기 위한 가이드라인을 설명합니다."
weight: 2
tags: ["marketplace", "content creation", "guidelines", "widgets"]
---

## 소개

Widget을 개발하고 Marketplace에 제출할 때 다음 가이드라인을 따르십시오:

* Widget은 [플러그형(pluggable)](/howto/extensibility/create-a-pluggable-widget-one/)이어야 합니다.
* 변수 및 함수 이름을 작성할 때 로워 카멜 케이스를 사용하십시오. 예: `mySecondVariable`.
* 코드 주석을 추가하십시오.
* XML과 JavaScript 모두에서 설명적인 변수 및 함수 이름을 사용하십시오.
* 함수는 최대 200줄의 코드를 포함해야 합니다.
* 함수는 하나의 작업만 수행해야 하며, 제대로 수행해야 합니다.
* 클래스 컴포넌트보다 훅(hooks)과 함수형 컴포넌트를 사용하십시오.
* 모바일 플랫폼용 콘텐츠를 만들 때 모바일용 테스트 페이지를 만드십시오.
