---
title: "Scheduled Event - 레거시"
linktitle: "레거시 Scheduled Event"
url: /refguide9/scheduled-events-legacy/
weight: 20
description: "Scheduled Event 구성 옵션"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
이 페이지는 **레거시** Scheduled Event에 대한 내용입니다. 현재 Scheduled Event 구현 방법에 대한 정보는 [Scheduled Event – Task Queue](/refguide9/scheduled-events-task-queue/)를 참조하십시오.

Mendix 9.12 이상에서는 레거시 Scheduled Event를 편집할 수 있지만, 새 레거시 Scheduled Event를 생성할 수는 없습니다.

앱이 Mendix 9.12.0 이상인 경우, 레거시 Scheduled Event는 불가능한 경우를 제외하고 [Task Queue Scheduled Event](/refguide9/scheduled-events-task-queue/)로 자동 변환되었습니다. 자세한 내용은 *Scheduled Event*의 [마이그레이션](/refguide9/scheduled-events/#migration) 섹션을 참조하십시오.

레거시 Scheduled Event는 더 이상 권장되지 않으며 Mendix 10부터 더 이상 지원되지 않습니다.
{{% /alert %}}

## 소개

Scheduled Event를 사용하면 런타임이 특정 시점에 Microflow를 실행하도록 할 수 있습니다. 이벤트는 주어진 간격으로 반복될 수도 있습니다(예: 매일).

Scheduled Event는 모듈에 문서로 추가됩니다(모듈을 마우스 오른쪽 버튼으로 클릭하면 *Add other* 아래에 나열됩니다).

{{% alert color="warning" %}}
Scheduled Event는 로컬에서 테스트할 수 있지만, 앱이 Free App으로 배포된 경우에는 실행되지 않습니다. Free App 제한 사항에 대한 자세한 내용은 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app)의 Free App 섹션을 참조하십시오.
{{% /alert %}}

앱 모델에 정의된 Scheduled Event가 실행될 때마다 `ScheduledEventInformation` 객체가 생성됩니다. 이 객체는 다음을 기록합니다:

* **Name** – [공통 속성](#common-properties)에 입력된 Scheduled Event의 **Name**
* **Description** – [공통 속성](#common-properties)에 입력된 Scheduled Event의 **Documentation**
* **StartTime** – 이 Scheduled Event 실행이 시작된 시간
* **EndTime** – 이 Scheduled Event 실행이 종료된 시간
* **Status** – 이 Scheduled Event 실행의 현재 상태:
    * **Running** – 이벤트가 현재 실행 중이며 아직 종료되지 않았습니다
    * **Completed** – 이벤트가 성공적으로 완료되었습니다
    * **Error** – 이벤트가 오류와 함께 완료되었습니다. 필요한 경우 *StartTime*과 *EndTime*을 사용하여 오류 로그에서 찾을 수 있습니다
    * **Stopped** – 앱이 중지되거나 클러스터 노드가 비정상 상태가 되는 등의 이유로 완료 전에 Scheduled Event가 중지되었습니다

{{% alert color="warning" %}}
`ScheduledEventInformation` 객체는 자동으로 지워지지 않습니다. Scheduled Event가 많은 경우 이 정보를 얼마나 오래 보관해야 하는지 결정하고 더 이상 필요하지 않을 때 오래된 객체를 제거해야 합니다.
{{% /alert %}}

## 공통 속성 {#common-properties}

| 속성 | 설명 |
| --- | --- |
| Name | Scheduled Event의 이름입니다. 이 이름은 런타임에 `ScheduledEventInformation` 객체에 저장되어 Scheduled Event의 실행을 식별할 수 있습니다. |
| Documentation | 이 필드는 앱 모델에서의 문서화 목적으로만 사용됩니다. 최종 사용자에게는 표시되지 않으며 애플리케이션의 동작에 영향을 미치지 않습니다. |

## 실행 속성

| 속성 | 설명 |
| --- | --- |
| Microflow | Scheduled Event가 실행될 때 실행되는 Microflow입니다. 매개변수가 없어야 하며 모든 권한으로 실행됩니다([Microflow](/refguide9/microflow/) 참조). |
| Enabled | Scheduled Event가 활성화된 경우에만 Microflow가 실행됩니다. 이 설정은 Studio Pro 또는 Eclipse에서 실행할 때만 적용됩니다. 프로덕션 환경에서는 플랫폼 도구(예: [Apps](https://sprintr.home.mendix.com/) 또는 Windows Service Console)를 통해 Scheduled Event를 활성화/비활성화합니다. |

## 타이밍 속성

| 속성 | 설명 |
| --- | --- |
| Start date/time | Scheduled Event가 처음 실행되는 날짜와 시간입니다. 시작 날짜/시간이 **UTC** 시간인 경우 UTC(협정 세계시)로 표시된 시간에 Scheduled Event가 실행됩니다. 시작 날짜/시간이 **Server** 시간인 경우 애플리케이션이 실행되는 서버의 표시된 시간에 Scheduled Event가 실행됩니다. |
| Repeat | 반복이 **Yes**로 설정되면 Scheduled Event는 표시된 간격으로 반복됩니다(예: 5분마다). |
| Interval | 이 숫자는 간격 유형과 함께 두 이벤트 사이의 간격을 나타냅니다. 이 숫자는 0보다 커야 합니다. |
| Interval type | 간격 유형은 간격의 단위를 결정합니다. 간격 숫자와 함께 두 이벤트 사이의 간격을 나타냅니다. 예: 1일 또는 10분. |

## 추가 정보

### 동시 실행

10개 이상의 Scheduled Event를 동시에 실행할 수 없습니다.

이 제한은 재정의할 수 없으며 앱의 스케일링 방법과 무관합니다.

### 간격 계산

플랫폼은 고정 간격으로 Scheduled Event를 예약합니다. 즉, 시작 시 플랫폼은 Scheduled Event가 실행되어야 하는 다음 반복/간격을 예약합니다. 이는 간격을 검색하고 추가로 플랫폼이 일부 계산을 수행하여 이루어집니다.

Seconds, Minutes, Hours, Days, Weeks는 구성된 대로 정확하게 예약됩니다.

Months와 Years는 예상대로 실행되지 않을 수 있습니다: 

* **Month**는 *31일 간격*으로 해석됩니다
* **Year**는 *365일 간격*으로 해석됩니다

따라서 Month 또는 Year를 사용하여 이벤트를 예약할 때 예상하는 날에 실행되지 않을 수 있으므로 주의하십시오.

예를 들어, 1개월 간격으로 3월 1일에 시작하도록 이벤트를 예약하면 이후 4월 1일, 5월 2일, 6월 2일, 7월 3일, 8월 3일, 9월 3일 등에 실행됩니다.

다음은 Mendix 5.3.2 릴리스에서 간격을 계산한 구현의 간단한 예시입니다. 이후 릴리스는 약간 다르게 동작할 수 있습니다.

```java
switch(scheduledEvent.getIntervalType())
{
    case SECOND:
        timeUnit = TimeUnit.SECONDS;
        interval = scheduledEvent.getInterval();
        break;
    case MINUTE:
        timeUnit = TimeUnit.MINUTES;
        interval = scheduledEvent.getInterval();
        break;
    case HOUR:
        timeUnit = TimeUnit.HOURS;
        interval = scheduledEvent.getInterval();
        break;
    case DAY:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval();
        break;
    case WEEK:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval()*7;
        break;
    case MONTH:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval()*31;
        break;
    case YEAR:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval()*365;
        break;
}
```

#### 특정 날짜에 Scheduled Event 실행

매월 특정 날짜에 Scheduled Event를 실행하는 것이 절대적으로 중요한 경우 이벤트를 매일 실행하도록 예약하고 해당 월의 올바른 날인지 확인하도록 하십시오. 

Microflow에서 다음과 유사한 표현식을 사용하는 Decision으로 시작하십시오:

```java
parseInteger( formatDateTime( [%CurrentDateTime%], 'dd') ) = 15
// This runs the scheduled event on the 15th of the month
```

매월 마지막 날에 실행하려면 [Herbert Vujik](https://community.mendix.com/link/questions/6934)의 다음 제안을 사용할 수 있습니다:

```java
formatDateTime([%CurrentDateTime%], 'dd') = formatDateTime([%EndOfCurrentMonth%], 'dd') 
```

### 시간 지정

Monthly 및 Yearly Scheduled Event 외에도, 매일 특정 시간에 실행해야 하는 일일 이벤트를 예약할 때도 주의해야 합니다. 이는 일광 절약 시간 때문입니다.

특정 시간에 매일 실행되도록 이벤트를 설정하면 지정된 시간에 시작됩니다. 그러나 이후에는 고정 간격으로 실행됩니다(내부적으로 매 X 나노초마다 실행되도록 계산됩니다). 이는 일일 이벤트가 24시간마다 실행됨을 의미합니다. 따라서 일광 절약으로 시간이 변경되면 이벤트가 한 시간 *어긋날 수* 있습니다.

이는 서버가 호스팅된 로케일(시간대)에 따라 다릅니다. **UTC** 시간을 선택하더라도 일광 절약을 채택하는 국가에 있는 경우 일광 절약이 UTC로부터의 오프셋을 변경하므로 이 시간 이동을 경험하게 됩니다.

안타깝게도 이 문제에 대한 훌륭한 해결 방법이 없습니다. Scheduled Event가 특정 시간에 실행되어야 하는 경우 위에서 설명한 것과 유사한 솔루션을 만들어 이벤트를 매시간 예약하고 날짜 형식 표현식에서 'dd' 대신 'HH'(0-23시간) 또는 'kk'(1-24시간)를 사용할 수 있습니다. 이렇게 하면 생성되는 `ScheduledEventInformation` 객체 수가 증가한다는 점을 기억하십시오.

### 장시간 실행 이벤트

반복되는 Scheduled Event가 간격보다 오래 걸리면 다음 Scheduled Event가 지연되며, 이벤트는 동시에 실행되지 않습니다. 예를 들어, Scheduled Event가 5분마다 반복되지만 이벤트가 10분 걸리면 다음 이벤트는 5분 지연됩니다.

### 오래된 이벤트 정리 {#cleanup}

Scheduled Event의 실행은 데이터베이스에 `System.ScheduledEventInformation` 객체를 생성합니다. 시간이 지남에 따라 이러한 객체가 누적되어 테이블이 커질 수 있습니다.

Mendix 9.9 이상에서는 `com.mendix.core.ScheduledEventsCleanupAge` 런타임 설정을 지정하여 `System.ScheduledEventInformation`을 자동으로 정리할 수 있습니다. 이 설정은 테이블의 객체가 자동으로 정리되기 전에 얼마나 오래되어야 하는지를 밀리초 단위로 지정합니다. "Completed" 상태의 객체만 정리됩니다. 정리 작업은 매 [`ClusterManagerActionInterval`](/refguide9/custom-settings/#general)마다 실행되며 로그 메시지를 생성하지 않습니다. Mendix 9.24.17 이상에서는 정리 작업이 실행될 때마다 최대 10000개의 객체를 제거합니다. 이는 [`com.mendix.core.ProcessedTasksCleanupBatchSize`](/refguide9/custom-settings/#commendixcoreProcessedTasksCleanupBatchSize) 런타임 설정으로 구성할 수 있습니다. Mendix 9.24.17 이전 버전에서는 일치하는 모든 객체가 제거됩니다.

Mendix 9.9 이상에서 `com.mendix.core.ScheduledEventsCleanupAge`가 지정되지 않으면 정리가 수행되지 않습니다.
Mendix 10에서 `com.mendix.core.ScheduledEventsCleanupAge`가 지정되지 않으면, Mendix 9에서 마이그레이션된 프로젝트의 경우 기본 설정은 365일이고, 새 프로젝트 또는 빈 데이터베이스가 있는 프로젝트의 경우 7일입니다.

{{% alert color="info" %}}
오랫동안 Scheduled Event를 사용한 후 자동 정리를 활성화하면 정리할 객체가 많을 수 있으며, 런타임이 시작될 때 시작됩니다. 이로 인해 데이터베이스에 추가 부하가 발생할 수 있지만 시작을 차단하지는 않습니다. 바쁜 기간에는 이 작업을 수행하지 않는 것이 좋습니다.
{{% /alert %}}

Mendix 9.9.0 이전 버전에서는 테이블이 너무 커질 경우 관리자가 사용할 Microflow를 만들어 오래된 이벤트를 정리할 수 있습니다.
