---
title: "브라우저 레코더 결과"
url: /appstore/partner-solutions/apd/rg-three-browser-recorder-results/
---

## 소개

브라우저 세션에는 한 사용자의 한 브라우저 인스턴스 기록이 포함됩니다.

**Actions** 탭은 기록된 모든 액션 목록을 표시하며, 드릴다운하여 액션 및 가능한 후속 액션에 대한 상세 정보를 볼 수 있습니다.

**Browser information** 탭은 브라우저, 버전 및 설치된 플러그인에 대한 정보를 제공합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording.png" class="no-border" >}}

## 일반

브라우저 기록은 다음 유형의 액션을 기록합니다:

* 브라우저 JavaScript 콘솔 메시지
* 클라이언트-서버 통신
* 사용자 액션

콘솔 메시지를 제외한 모든 유형의 경우 상세 보기에는 **Tree** 및 **Actions** 탭이 있는 페이지 홀더가 표시됩니다. 트리 뷰는 액션과 후속 액션의 소요 시간에 대한 개요를 제공합니다. 런타임 기록 결과와 마찬가지로 노드를 더블 클릭하여 트리에서 드릴다운할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_ActionsTree.png" class="no-border" >}}

**Actions** 탭은 이 액션 내의 직접적인 후속 액션만 표시합니다. 드릴다운하여 해당 후속 액션에 대한 더 많은 인사이트를 얻을 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_ActionsActions.png" class="no-border" >}}

클라이언트-서버 통신을 제외한 모든 유형의 경우 상세 보기에는 상세 정보 목록을 보여주는 **Details** 탭이 있습니다.

## 브라우저 JavaScript 콘솔 메시지

브라우저의 JavaScript 콘솔 메시지 기록은 환경 설정에서 활성화할 수 있습니다. 예외적으로 JavaScript에서 발생하는 오류는 항상 콘솔 오류로 기록됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_ConsoleMessage.png" class="no-border" >}}

JavaScript의 콘솔 메시지에는 가능한 경우 문자열화되는 변수가 포함될 수 있습니다.

## 클라이언트-서버 통신

클라이언트-서버 통신 액션의 경우, 세부 정보의 양으로 인해 모든 상세 정보가 하나가 아닌 세 개의 탭에 나뉩니다. 이 탭은 **Request**, **Response** 및 **Connection**으로 레이블이 지정됩니다.

**Request** 탭은 요청 세부 정보를 표시합니다. 이는 클라이언트(브라우저)에서 Mendix Server로의 요청입니다. 세부 정보는 요청에 따라 달라집니다. 예를 들어, XPath로 데이터를 검색하는 경우 세부 정보에는 XPath, 정렬 적용 여부, 사용된 속성, 가능한 오프셋 및 제한 등이 나열됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_ActionsRequest.png" class="no-border" >}}

**Response** 탭은 응답 세부 정보를 표시합니다. 이는 서버에서 클라이언트(브라우저) 요청에 대한 응답입니다. 요청 세부 정보가 요청 유형(XPath 검색 또는 Microflow 호출)에 따라 달라지듯이, 응답 세부 정보도 요청에 따라 달라집니다.

응답에는 검색된 객체 수, XPath 카운트, 브라우저에 대한 응답 크기 또는 INFO 메시지 표시나 페이지 열기와 같은 클라이언트 지시 사항이 포함될 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_ActionsResponse.png" class="no-border" >}}

**Connection** 탭은 헤더 정보와 요청의 타이밍을 표시합니다. 요청의 타이밍에는 서버에 응답을 보내는 데 필요한 시간, 서버 처리로 인한 대기 시간, 서버에서 응답을 다운로드하는 데 필요한 시간이 포함됩니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_ActionsConnection.png" class="no-border" >}}

## 사용자 액션

기록된 사용자 액션에는 두 가지 세부 정보가 있습니다:

* **Event Target** – 사용자 액션이 발생한 위치
* **Widget path** – **Event Target**에서 레이아웃까지의 Mendix Widget 이름 경로(안쪽에서 바깥쪽으로); Mendix Studio Pro에서 정확한 Widget을 찾는 데 사용할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/rg-three-recorder/rg-three-browser-recorder-results/Performance_browser_recording_UserAction.png" class="no-border" >}}
