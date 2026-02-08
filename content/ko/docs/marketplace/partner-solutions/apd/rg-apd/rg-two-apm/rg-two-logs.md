---
title: "APD 로그"
linktitle: "Logs"
url: /appstore/partner-solutions/apd/rg-two-logs/
---

## 로그 개요

메뉴에서 **Logs**를 선택하면 로그와 트랩의 개요가 표시됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-logs/logs.png" class="no-border" >}}

## 로그

Mendix 애플리케이션에서 생성된 모든 로깅이 이 개요에 표시됩니다. 

로그는 시간별로 표시됩니다. 트랩과 로그 레벨을 필터링할 수 있습니다.

**Levels**를 클릭하면 사용 가능한 로그 노드의 레벨을 변경할 수 있습니다. 이는 Mendix Studio Pro와 동일합니다.

**Trap now**를 클릭하면 즉시 트랩이 생성되어, **Trap now** 버튼을 클릭하기 직전까지의 모든 trace/debug 로깅이 저장됩니다.

로깅은 자동으로 정리됩니다. 자동 정리 메커니즘에 의해 로그 또는 트랩 레코드가 삭제되는 것을 방지하려면 레코드에서 **Pin** {{% icon name="pin" %}}을 클릭하십시오. **Delete** ({{% icon name="trash-can" %}})를 클릭하여 로그 또는 트랩을 수동으로 삭제할 수도 있습니다.

## 트랩

트랩 레코드를 열 수 있습니다. 트랩을 열면 트랩이 표시되기 직전에 발생한 모든 하위 레벨 로그 레코드 목록이 표시됩니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-logs/trap.png" class="no-border" >}}

**Trap now** 버튼을 사용하여 트랩을 시뮬레이션할 수 있습니다. 이 트랩은 저장되며 애플리케이션에서 일어나고 있는 일에 대한 인사이트를 얻는 데 사용할 수 있습니다.

## 트랩 제외

알려진, 관심이 없거나 현재 집중할 필요가 없는 오류, 경고 또는 메시지가 있는 트랩이 있는 경우 제외할 수 있습니다. 제외를 사용하면 관심 있는 트랩 정보만 생성됩니다. 트랩에서 **Exclude** 버튼을 사용하여 제외를 생성합니다.

**Trap exclusions** 탭에서 무시할 트랩을 관리할 수 있습니다. 제외를 추가, 편집, 복사 및 삭제하고 활성화 또는 비활성화할 수 있습니다. 특정 오류, 경고 또는 메시지를 제외함으로써 **Logs** 모듈은 관심 있는 정보만 캡처합니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-logs/exclusions.png" class="no-border" >}}

제외에는 다음이 포함됩니다:

* **Description** – 제외되는 내용을 설명
* **Enabled** – 이 제외를 활성화하거나 비활성화
* **Node pattern** – 노드 이름과 일치
* **Message pattern** – 메시지와 일치
* **Stack trace pattern** – 스택 트레이스와 일치

패턴은 메시지를 제외해야 하는지 여부를 확인하는 데 사용되는 [정규식](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)입니다. 

**Exclude** 버튼을 사용하여 로그 또는 트랩 메시지에서 제외를 생성할 때, 메시지의 특수 문자는 텍스트 앞에 `\Q`를, 뒤에 `\E`를 배치하여 정규식 언어에 따라 자동으로 이스케이프됩니다.

패턴을 보다 일반적으로 만들려면 정규식 규칙에 따라 이스케이프해야 합니다. 백슬래시 자체를 포함한 모든 특수 문자 앞에 백슬래시(`\`)를 배치합니다.

**Test** 버튼은 APM 매니저에 쿼리를 수행하여 기존 로그 또는 트랩이 패턴과 일치하는지 확인합니다. 이는 패턴이 예상대로 작동하는지 테스트하기 위해 편의를 위해 추가되었습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-logs/exclude_dialog.png" class="no-border" >}}
