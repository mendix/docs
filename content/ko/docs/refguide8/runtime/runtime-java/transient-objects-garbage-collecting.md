---
title: "Non-Persistable 객체와 가비지 컬렉션"
url: /refguide8/transient-objects-garbage-collecting/
weight: 1
description: "이 페이지에서는 Persistable 및 Non-Persistable 객체의 수명 주기와 플랫폼 메모리를 통해 어떻게 흐르는지 설명합니다."
---

## 소개

이 페이지에서는 Persistable 및 Non-Persistable 객체의 수명 주기와 플랫폼 메모리를 통해 어떻게 흐르는지 설명합니다. Non-Persistable 객체의 동작을 이해하기 위해 알아야 할 몇 가지 사실이 있습니다:

* Non-Persistable 객체는 임시적인 것으로 간주되며 메모리에만 존재하는 객체입니다
* 커밋되지 않은 변경된 Persistable 객체는 메모리에만 존재하며 Non-Persistable 객체와 유사하게 동작합니다
* Mendix 플랫폼은 더 이상 "사용"되지 않는 객체를 자동으로 제거합니다("사용"의 정의는 나중에 설명됩니다)

## 동작

Mendix의 Non-Persistable 객체는 [Runtime Server](/refguide8/runtime-server/)에 보관되지 않고 [Mendix Client](/refguide8/mendix-client/)에서 유지됩니다. 이는 서버 측 가비지 컬렉션이 없다는 것을 의미합니다. 이것은 서버 측에서 객체 처리를 단순화합니다. 서버에 존재하는 동안 객체가 가비지 컬렉션되지 않기 때문입니다.

객체는 요청에 대한 응답과 함께 클라이언트에 반환됩니다. 요청 컨텍스트 외부에서 생성된 객체(예: Scheduled Event 실행)는 Scheduled Event가 완료되면 자동으로 삭제됩니다.

### 응답 크기에 대한 영향 줄이기

아직 사용 가능한 객체가 서버 호출과 함께 자동으로 반환되므로, 클라이언트 또는 후속 요청에 유용하지 않은 Non-Persistable 객체를 삭제하여 응답 크기를 줄일 수 있습니다. 이는 Non-Persistable 객체를 삭제하거나 변경된 Persistable 객체를 롤백하여 수행할 수 있습니다.

## 클라이언트 측 가비지 컬렉션

Mendix Client에는 가비지 컬렉터가 있습니다. 이 가비지 컬렉터는 더 이상 사용되지 않거나 메모리에 유지할 필요가 없는 객체를 삭제하여 자동으로 메모리를 확보합니다. 객체는 위젯에 표시될 때 사용 중인 것으로 간주됩니다. Non-Persistable 객체의 경우 다른 사용 중인 객체가 이를 참조할 때도 사용 중인 것으로 간주됩니다. 변경되지 않은 Persistable 객체는 사용되지 않을 때 메모리에서 제거됩니다. 필요할 때 Mendix 데이터베이스에서 다시 로드할 수 있기 때문입니다.

### 예외적인 경우

#### 현재 사용자 또는 세션과 연관된 객체

Non-Persistable 객체가 현재 사용자 또는 현재 세션과 연관된 경우, 해당 객체(및 이와 연관된 Non-Persistable 객체)는 가비지 컬렉션되지 않습니다. 따라서 이것은 객체가 요청을 살아남을 수 있는 방법으로 기능할 수 있지만, 상태가 쉽게 커질 수 있으므로 주의해서 사용해야 합니다.

#### 웹 페이지의 매개변수인 객체

웹 브라우저에서 닫힌 페이지의 매개변수인 객체는 5개의 새 페이지가 열린 후에만 가비지 컬렉션됩니다. 이는 최종 사용자가 브라우저의 뒤로 버튼을 (제한된 횟수만큼) 사용해도 매개변수가 Non-Persistable이더라도 이전에 본 것과 동일한 페이지를 볼 수 있음을 의미합니다.

{{% alert color="info" %}}
이것은 모바일 앱에서는 관련이 없습니다. 페이지가 동일한 방식으로 닫히지 않고 항상 살아 있기 때문입니다.
{{% /alert %}}

## 상태 증가 추적

상태가 클라이언트에서 관리되므로, Mendix에서 모든 클라이언트가 사용하는 모든 상태의 개요를 파악하기 어려울 수 있습니다(한 곳에서 사용할 수 없고 모든 클라이언트에 분산되어 있음). 그러나 Mendix에는 로그 파일을 관찰하여 상태 증가를 추적할 수 있는 수단이 있습니다.

### 세션별 상태 증가 관찰

`RequestStatistics` 로그 노드에서 `TRACE` 레벨 로깅을 활성화하면, Mendix Runtime은 상태에 대한 정보를 포함하는 모든 요청에 대해 메시지를 기록합니다. 이 정보는 JSON 구조 형태로 기록되어 시간에 따른 그래프를 생성하는 도구에서 사용할 수 있습니다. 로그 문의 예시는 다음과 같습니다(이 경우 가독성을 위해 형식화됨):

```text
TRACE: Request-State statistics: {
  session: "fd0771fe-8c12-49cf-8667-921058b116a3",
  action: "execute-action",
  total: 5,
  details: {
    "MyModule.MyEntity": 3,
    "AnotherModule.SomeEntity": 2
  }
}
```

details 섹션에서 요청 상태에서 사용 가능한 Entity 유형별 인스턴스 수를 확인할 수 있습니다.

### 큰 상태를 가진 요청 감지

기본적으로 Mendix Runtime은 요청 상태가 구성된 임계값을 초과하면 `RequestStatistics` 로그 노드에 `WARNING`을 기록합니다. 로그 문의 예시는 다음과 같습니다:

```text
WARNING: Request state size of 551 objects exceeds the threshold of 500 objects. Request details: type `execute-action` in session `fd0771fe-8c12-49cf-8667-921058b116a3`. State consists of:
 * MyModule.MyEntity: 421 objects
 * AnotherModule.SomeEntity: 130 objects
```

이 임계값은 커스텀 설정 `com.mendix.webui.StateSizeWarningThreshold`로 구성할 수 있습니다(값은 요청 상태의 총 객체 수를 반영하는 숫자입니다).

#### 올바른 임계값 수준 선택

임계값의 올바른 수준을 선택하는 것이 중요합니다. 너무 낮게 설정하면 너무 자주 트리거되고, 너무 높게 설정하면 문제를 너무 늦게 감지하게 됩니다. 상태 메모리 누수를 감지하기 위한 것이며, 이는 상태가 특정 수준까지 증가하고 적절하게 가비지 컬렉션되지 않는 것을 의미합니다. 일부 앱에서는 일부 페이지가 화면에 데이터를 표시하기 위해 많은 수의 Non-Persistable 객체를 사용할 수 있습니다. 이 경우 이 경고가 너무 자주 기록되는 것을 방지하기 위해 임계값을 이 화면에 정상적으로 표시되는 객체 수보다 크게 설정해야 합니다.

#### 큰 요청 상태 문제에 대한 조치

요청 상태가 구성된 임계값을 초과하면 다음 가능한 원인(또는 이들의 조합)의 목록을 살펴볼 수 있습니다:

* 위젯의 문제(예: 위젯이 이전에 표시한 객체에 대한 업데이트 구독을 취소하지 않는 경우)
* 현재 세션이나 사용자에 너무 많은 객체가 연관되어 있음
* Non-Persistable 객체가 레이아웃의 위젯에 표시된 객체와 연관되어 있음(이 객체는 레이아웃이 표시되는 한 사용 중인 상태로 유지되며, 보통 오랜 시간)

이 상태 크기의 근본 원인을 찾기 위해 클라이언트의 개발자 도구를 사용하여 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd>를 눌러 상태 개요 덤프를 만들 수 있습니다. 결과는 브라우저 콘솔에 표시됩니다. 이를 통해 상태에 있는 객체와 가비지 컬렉션되지 않는 이유를 볼 수 있습니다.

## 서버 측 메모리 관리

Mendix Runtime에 대한 모든 요청(클라이언트 또는 웹 서비스 호출)에서 객체는 요청이 끝날 때 정리됩니다. 이는 Microflow에서 많은 임시 객체를 생성하면 요청이 끝날 때까지 Runtime 메모리를 차지한다는 것을 의미합니다.

## 더 읽기

* Mendix 블로그 [The art of state, Part 1: Introduction to the client state](https://www.mendix.com/blog/the-art-of-state-part-1-introduction-to-the-client-state/)
* [Java 메모리 사용량](/refguide8/java-memory-usage/)
