---
title: "Trap Tool"
url: /appstore/partner-solutions/apd/rg-one-trap-tool/
---

## 소개

이 장에서는 Trap Tool의 개요를 제공합니다. Trap Tool은 오류, 경고 또는 크리티컬 메시지가 발생하기 전 최근 일련의 메시지를 수집하고, 발생 시 해당 메시지를 데이터베이스에 저장하는 데 사용할 수 있습니다. 더 이상 고객에게 로깅을 켜도록 요청하고, 문제가 발생하기를 기다리고, 더 많은 로깅을 켜고, 거대한 파일을 생성하고, 이벤트를 포착하는 데 많은 시간을 소비할 필요가 없습니다. 간단히 Trap Tool을 사용하십시오.

## 트랩

### 개요

Trap Tool은 저장된 트랩을 표시합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Overview.png" class="no-border" >}}

Performance Tool이 실행 중이 아닐 때 트랩 메시지를 Performance Tool로 보낼 수 있습니다. 이렇게 하면 트랩의 모든 Microflow 메시지가 처리되고 트랩 중에 실행 중이던 기능이 표시됩니다.

트랩을 유지하도록 표시하면 주기적인 데이터 정리, 수동 전체 삭제 또는 데이터베이스 증가를 방지하기 위한 보호 메커니즘으로 가장 오래된 트랩이 제거될 때 삭제되지 않습니다.

### 트랩 세부 정보

트랩을 선택하면 해당 트랩의 모든 메시지를 볼 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Individual_Trap.png" class="no-border" >}}

가장 자주 발생하는 메시지를 표시하거나 숨기기 위해 **Connection Bus** 메시지와 **Microflow Engine** 메시지를 포함하거나 제외하는 검색 매개변수를 사용할 수 있습니다.

또한 선택된 레코드 목록을 Performance Tool로 보낼 수 있습니다. Performance Tool이 이미 실행 중인 경우 Performance Tool이 실행 중이지 않을 때만 트랩을 보낼 수 있다는 경고가 표시됩니다.

## 수동 트랩

수동으로 트랩을 보내고 로깅 출력을 얻을 수 있습니다. 이는 Microflow가 중단되었거나 문제가 발생했지만 오류가 생성되지 않은 경우에 유용할 수 있습니다.

**Output Queue Size** 카운터입니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Output_Queue.png" class="no-border" >}}

트랩이 발생하면 디스크에 기록할 모든 메시지가 큐에 저장됩니다. 별도의 스레드가 이 큐를 처리합니다. Trap Tool에는 출력 큐의 메시지 수를 나타내는 카운터가 있습니다. Trap Tool이 비활성화되거나 중지되면 출력 큐 처리 중에 출력이 중단되고 취소됩니다.

## Trap Tool 옵션

**Trap Tool Options** 대화 상자입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Options.png" class="no-border" >}}

Trap Tool은 경고에 대해 트랩하도록 구성할 수 있습니다. 오류 및 크리티컬 메시지는 도구가 실행 중이면 항상 트랩됩니다. 특정 메시지 패턴을 제외할 수 있습니다(자세한 내용은 아래 참조).

Trap Tool은 트랩 이전 일정 시간 동안 기록된 메시지를 기억하도록 구성할 수 있습니다. 따라서 옵션 대화 상자의 스크린샷 예제에서는 트랩당 최대 15,000개의 레코드와 트랩 전 최대 10,000ms(10초)의 메시지를 저장합니다.

### 보호 탭

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Options_Protections.png" class="no-border" >}}

Trap Tool에는 운영 환경에서 안전하게 실행할 수 있도록 많은 보호 메커니즘이 있습니다.

**Max messages to buffer**는 큐의 메시지 최대값에 도달하면 Trap Tool이 중지되거나 정의된 기간 동안 일시 중지되도록 합니다. 이를 통해 트랩 큐를 데이터베이스에 기록하고 대량의 트랩이 시스템에 너무 많은 부하를 주는 것을 방지합니다.

**Max messages to store**는 최대값에 도달하면 Trap Tool이 중지되거나 가장 오래된 트랩을 삭제합니다. 가장 오래된 트랩은 새 메시지가 데이터베이스에 추가된 후 새 트랩이 도착할 때 삭제됩니다.

Trap Tool을 고정된 시간 동안 실행할 수 있습니다. Trap Tool은 항상 실행되도록 되어 있지만, 처음 사용하고 어떤 오류나 경고를 제외해야 할지 모를 때 실행 시간을 제한하고 싶을 수 있습니다.

Trap Tool에는 시스템이 너무 많은 로그 메시지를 생성하는 경우(Mendix 내부에 큐잉이 발생) 도구를 중지하는 **Max Processing Delay (ms)** 보호 기능이 있습니다. 이는 물론 실행 중인 다른 도구와 추가 메시지를 생성할 수 있는 기타 요인에 따라 달라집니다.

**Remove trap log after (days)**에 구성된 대로 일정 일수 후 트랩이 자동으로 삭제됩니다. 향후 참조를 위해 트랩을 보관하려면 트랩 그리드 위의 **Keep** 버튼을 사용할 수 있습니다.

### 제외 탭

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Options_Exclusions.png" class="no-border" >}}

분석에 유용하지 않은 매우 반복적인 메시지를 방지하기 위해 어떤 트랩을 제외할지 정의할 수 있습니다. 전체 노드를 제외하거나 정규식으로 트랩 메시지를 필터링할 수 있습니다. 제외는 수동으로 추가할 수 있지만 Log Tool이나 Trap Tool에서 오류, 경고 또는 크리티컬 메시지를 선택하고 세부 정보를 보고 **Exclude** 버튼을 눌러도 추가할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Edit_Exclusion.png" class="no-border" >}}

정규식은 데이터베이스의 트랩 및 로그 메시지에 대해 테스트할 수 있으므로, 도구가 현재 다음에 발생할 때 제외해야 하는 메시지를 기록하는 경우 테스트 버튼으로 결과를 확인할 수 있습니다.

### 트리거 탭

**Triggers** 탭에서 INFO 레벨 이상의 메시지에 대해 발동하는 메시지 트리거를 정의할 수 있습니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-trap-tool/Options_Triggers.png" class="no-border" >}}

트리거 구성 방법은 [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/) 설명을 참조하십시오.

### 저장 및 적용

**Save & apply** 버튼을 사용하면 옵션에 대한 변경 사항이 Trap Tool에 적용됩니다.
