---
title: "Log Tool"
url: /appstore/partner-solutions/apd/rg-one-log-tool/
---

## 소개

이 섹션에서는 Log Tool의 개요를 제공합니다. Log Tool은 Mendix Runtime 로그 메시지를 수집하고 데이터베이스에 저장하는 데 사용됩니다. 이를 통해 로그 파일을 직접 확인할 필요 없이 로그 정보에 접근할 수 있습니다. 또한 로그 정보를 탐색, 검색 및 정렬하여 분석할 수 있습니다.

## 로그

로깅은 로그 노드, 레벨 및 로깅 메시지 자체로 구성됩니다. Log Tool이 특정 로그 노드와 레벨에 대한 로깅을 기록하려면 이 조합을 구성해야 합니다.

### 개요

**Logs** 탭은 데이터베이스에 저장된 로그를 표시합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-log-tool/Overview.png" class="no-border" >}}

헤더의 "재생" 버튼으로 Log Tool을 시작하고 중지할 수 있습니다.

로그 메시지를 더블 클릭하면 세부 정보가 표시됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-log-tool/View_Message.png" class="no-border" >}}

메시지가 WARNING, ERROR 또는 CRITICAL 레벨인 경우 **Exclude in TrapTool** 추가 버튼이 표시됩니다. 이를 통해 Trap Tool에서 제외를 구성하고, 일정 기간 Log Tool을 실행하여 발생하는 WARNING, ERROR 또는 CRITICAL 메시지를 수집하고 Trap Tool이 시작될 때 대량의 관련 없는 데이터를 저장하지 않도록 할 수 있습니다.

## Log Tool 옵션

**Log Tool Options** 대화 상자입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-log-tool/Options.png" class="no-border" >}}

로그 노드는 해당 노드에 대한 첫 번째 로그 메시지가 Mendix에서 발생할 때 생성됩니다. **Level for new nodes** 옵션은 이러한 새 로그 노드에 대한 Log Tool의 초기 로그 레벨을 결정합니다.

### Log Tool 옵션, 보호 탭

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-log-tool/Protections.png" class="no-border" >}}

**Max messages to store**로 데이터베이스의 레코드 수를 제한할 수 있습니다. 최대값에 도달하면 두 가지 일이 발생할 수 있습니다:

* **On max stop?** 체크박스가 선택된 경우 Log Tool이 중지됩니다.
* Log Tool이 가장 오래된 레코드를 제거합니다(순환하거나 롤오버하는 로그 파일과 비슷합니다).

### 참고

* 가장 오래된 레코드의 제거는 Log Tool이 실행 중일 때만 실행되는 프라이빗 스레드에 의해 수행됩니다.
* Log Tool은 작성하는 메시지를 카운트하고 시작 시 데이터베이스의 메시지를 카운트합니다. **Max messages to store** + 10%에 도달하면 가장 오래된 10%가 삭제됩니다. 이는 소규모 배치로 삭제할 수 있습니다.
* 로드 밸런싱 상황을 처리하기 위해 서버별로만 레코드가 카운트되고 제거됩니다.

**Run fixed period of time (seconds)** 옵션을 사용하여 Log Tool 세션이 실행되는 시간을 미리 결정할 수 있습니다.

너무 많은 메시지로 큐가 쌓이면 Log Tool이 중지되도록 구성할 수 있습니다. 이는 로그 레코드가 큐에 기록되는 순간과 Log Tool에 의해 처리되는 순간 사이의 지연을 측정하는 **Max Processing Delay (ms)**라는 매개변수로 제어됩니다. 높은 부하 시스템에서 모든 설정이 trace 레벨로 설정되면 처리 지연이 증가할 수 있으며, 보호 기능이 애플리케이션 성능 저하를 방지하기 위해 작동할 가능성이 높습니다.

처리 지연이 너무 길어지면 Log Tool이 중지되거나 다른 수준의 로깅으로 대체되도록 구성할 수 있습니다.

### 저장 및 적용

도구가 실행 중일 때 옵션을 저장하고 적용할 수 있으며, 이는 설정이 실행 중인 세션에 즉시 적용됨을 의미합니다.

## Log Tool 레벨

연결 시 Log Tool은 Log Tool 옵션에서 로그 레벨을 읽어 데이터베이스에 기록할 메시지를 결정합니다. Mendix Runtime에서 생성한 메시지의 로그 노드가 옵션에서 발견되지 않으면 초기 **Level for new nodes**로 옵션에 추가됩니다. 로그 레벨은 다음
대화 상자로 관리됩니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-log-tool/Levels.png" class="no-border" >}}

여기서 개별 로그 노드를 인라인으로 변경하거나 모두 **None** 또는 **Info**로 설정할 수 있습니다. 
레벨 대화 상자를 열면 Log Tool 메모리의 레벨과 동기화됩니다. 대체가 요청된 레벨을 변경했을 수 있기 때문입니다.

로그 레벨에 대한 변경은 Log Tool이 실행 중인 경우 즉시 적용됩니다.

**참고**: 디버그 권한으로 노드를 삭제하는 삭제 버튼을 사용할 수 있습니다. Log Tool이 개발 중이거나 새 릴리스에서 사용될 때 특정 로그 노드가 더 이상 필요하지 않을 수 있습니다. 로그 레벨에서 삭제할 수 있습니다. 해당 노드의 메시지가 도착하면 레코드가 자동으로 생성되므로, 구성 레코드를 삭제해도 시스템에 해가 되지 않습니다.
