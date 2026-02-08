---
title: "Measurements Tool"
url: /appstore/partner-solutions/apd/rg-one-measurements-tool/
---

## 소개

Measurements Tool은 시스템 리소스를 측정하고 임계값에 대해 액션을 트리거하기 위한 것입니다. 이를 통해 메모리를 모니터링하고 메모리 사용량이 예를 들어 80%에 도달하면 통계를 저장하거나 트랩을 수행할 수 있습니다. 

측정은 JVM Browser 또는 Query Tool의 **Collect in Measurements Tool** 버튼을 통해 생성됩니다. 수집된 측정은 데이터베이스에 저장하여 그래프를 생성하거나 이벤트를 트리거하는 데 사용할 수 있습니다.

## 차트

차트 탭은 Measurements Tool에서 수집된 데이터의 그래프를 보여줍니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Charts.png" class="no-border" >}}

측정을 더블 클릭하면 측정 구성의 읽기 전용 보기가 열립니다.

## 측정 구성

**Measurement configuration** 탭에서 측정을 구성할 수 있습니다. 측정이 실행 중이면 측정 구성만 볼 수 있습니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Configuration_Tab.png" class="no-border" >}}                     

여기서 측정을 시작하고 중지할 수 있습니다. 재생 버튼 뒤의 대화 상자에서 모든 측정을 한 번에 시작하거나 중지할 수 있습니다.

### 측정 구성 탭

더블 클릭하거나 선택 후 **Edit** 버튼을 클릭하면 측정 구성 대화 상자가 표시됩니다. 여기서 선택한 측정을 구성할 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Configuration_Edit.png" class="no-border" >}}

**Measurement configuration** 탭에서 다음을 수행할 수 있습니다:

* **Name** 변경
* **Run** 시기 선택
    * 정기적인 간격으로
    * 시작 후 한 번
    * 비활성화
* **Calculate with expression**
    * 예인 경우 **Expression** 필드가 나타남(표현식 세부 사항은 아래 참조)
    * 예인 경우 **Parameter** 필드가 나타남(이 매개변수는 표현식에서 사용 가능)
* **Frequency (s)** 측정 실행 간격(초)
* **Store in database** 측정을 데이터베이스에 저장
* 트리거만을 위해 측정할 수 있으며, 차트에는 데이터베이스 저장이 필요
* **Remove data after (days)** 자동 정리(퍼지)를 구성
* 일정 일수 후 측정이 자동으로 제거됨
* 쿼리 측정의 경우 **Expose query results to JMX**는 다른 Java 관리 콘솔에서 쿼리 결과를 볼 수 있게 함 – 쿼리 측정에만 유용, JVM Browser 측정은 이미 사용 가능
* 쿼리에 여러 결과가 있는 경우 **Use first result column in name**을 통해 첫 번째 열을 이름의 일부로 사용하도록 구성 가능

### 트리거 탭

여기서 예를 들어 높은 메모리 사용량에 대한 트리거를 정의할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Triggers.png" class="no-border" >}}                 

트리거 구성 방법은 [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/) 설명을 참조하십시오.

### 표현식

측정 및 측정 트리거의 표현식은 Mendix Modeler 표현식 편집기에서 작성하는 것과 같은 방식으로 작성됩니다. 

`$Measurement` 변수는 다음 열과 함께 사용할 수 있습니다:

* `ValueString`
* `ValueDate`
* `ValueLong`
* `ValueFloat`
* `ValueBoolean`
* `TimeStamp`

또한 마지막 **N**개 측정은 $Measurement_1(이전 것)부터 $Measurement_**N**까지 사용할 수 있습니다. 이전 측정 수(**N**)는 앱에서 구성됩니다. 기본값은 5이지만 관리자가 변경할 수 있습니다. 

시작 시 마지막 **N**개 측정은 비어 있으므로, 빈 경우를 처리하십시오!

측정이 한 번만 실행되는 경우, 이전 측정은 데이터베이스에서 검색되며 `$MeasurementDB_1`부터 `$MeasurementDB_N`으로 사용할 수 있습니다. 

현재 측정과 이전 측정의 차이를 계산하는 예제입니다:

$Measurement/ValueLong - $Measurement_1/ValueLong

## 테스터 탭

테스터는 표현식을 확인하기 위해 측정을 실행하고 트리거(활성화된 경우)를 테스트합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Measurement_Tester.png" class="no-border" >}}

오류가 있으면 **Apply & test** 시 오류 메시지가 나타납니다. 스택 트레이스도 볼 수 있습니다.

테스터에서 캐시를 지우고 데이터베이스의 모든 레코드를 제거할 수도 있습니다.

## 트리거된 이벤트

트리거가 발동하면 트리거된 이벤트에 레코드가 생성됩니다. 

이벤트는 전역 설정 [More 탭](/appstore/partner-solutions/apd/rg-one-configuration/#more)에 구성된 대로 일정 일수 후 자동으로 삭제됩니다. 
**Remove triggered events after (days)**. 

향후 참조를 위해 이벤트를 보관하려면 트리거된 이벤트 그리드 위의 **Keep** 버튼을 사용할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Triggered_Events.png" class="no-border" >}}

트리거 액션으로 트랩이 생성되면 트랩을 열 수 있습니다.

트리거 액션으로 통계 스냅샷이 생성되면 통계 스냅샷을 열 수 있습니다.

트리거 액션으로 힙 덤프가 생성되면 힙 덤프를 다운로드할 수 있습니다. 
이 옵션은 특별한 권한이 있는 경우에만 표시됩니다.

**Show trigger** 버튼으로 트리거를 포함하는 측정 구성을 열 수 있습니다.
