---
title: "Scheduled Event"
url: /refguide8/scheduled-events/
weight: 80
description: "Scheduled Event 구성 옵션"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Scheduled Event를 사용하면 런타임이 특정 시점에 Microflow를 실행하도록 할 수 있습니다. 이벤트는 지정된 간격(예: 매일)으로 반복될 수도 있습니다.

Scheduled Event는 모듈에 문서로 추가됩니다(모듈을 마우스 오른쪽 버튼으로 클릭하면 *Add other...* 아래에서 찾을 수 있습니다).

{{% alert color="warning" %}}
Scheduled Event는 로컬에서 테스트할 수 있지만, 앱이 Free App으로 배포된 경우에는 실행되지 않습니다. Free App 제한 사항에 대한 자세한 정보는 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app)의 Free App 섹션을 참조하십시오.
{{% /alert %}}

## 공통 속성

| 속성 | 설명 |
| --- | --- |
| Name | Scheduled Event의 이름입니다. 이 이름은 런타임에 ScheduledEventInformation 객체에 저장되어 Scheduled Event의 실행을 식별할 수 있습니다. |
| Documentation | 이 필드는 문서화 목적으로만 사용됩니다. 값은 최종 사용자에게 표시되지 않으며 애플리케이션의 동작에 영향을 주지 않습니다. |

## 실행 속성

| 속성 | 설명 |
| --- | --- |
| Microflow | Scheduled Event가 실행될 때 실행되는 Microflow입니다. 파라미터가 없어야 하며 모든 권한으로 실행되어야 합니다([Microflow](/refguide8/microflow/) 참조). |
| Enabled | Scheduled Event가 활성화된 경우에만 Microflow가 실행됩니다. 이 설정은 Studio Pro 또는 Eclipse에서 실행할 때만 적용됩니다. 프로덕션 환경에서는 적절한 도구([Apps](https://sprintr.home.mendix.com/), Windows Service Console 등)를 통해 Scheduled Event를 활성화/비활성화합니다. |

## 타이밍 속성

| 속성 | 설명 |
| --- | --- |
| Start date/time | Scheduled Event가 처음 실행되는 날짜와 시간입니다. 시작 날짜/시간이 UTC 시간인 경우, UTC(협정 세계시)로 지정된 시간에 Scheduled Event가 실행됩니다. 시작 날짜/시간이 서버 시간인 경우, 애플리케이션이 실행되는 서버에서 지정된 시간에 Scheduled Event가 실행됩니다. |
| Repeat | 반복이 설정되면 Scheduled Event가 지정된 간격(예: 5분마다)으로 반복됩니다. |
| Interval | 이 숫자는 간격 유형과 함께 두 이벤트 사이의 간격 크기를 나타냅니다. 이 숫자는 0보다 커야 합니다. |
| Interval type | 간격 유형은 간격의 단위를 결정합니다. 간격 숫자와 함께 두 이벤트 사이의 간격 크기를 나타냅니다. 예: 1일 또는 10분. |

### 추가 정보

플랫폼은 고정 간격으로 Scheduled Event를 예약합니다. 즉, 시작 시 플랫폼은 Scheduled Event가 실행되어야 하는 다음 반복/간격을 예약합니다. 이는 간격을 검색하여 수행되며, 추가적으로 플랫폼이 일부 계산을 수행합니다.

초, 분, 시간, 일 및 주는 구성된 대로 정확하게 예약됩니다. 그러나 월 및 년은 예상대로 실행되지 않을 수 있습니다. 월은 31일 간격으로, 년은 365일 간격으로 해석됩니다.

이벤트를 3월 1일에 시작하도록 예약하면 4월 1일, 5월 2일, 6월 2일, 7월 3일, 8월 3일, 9월 3일 등에 실행됩니다. 따라서 이벤트를 예약할 때 주의하십시오. 예상한 것보다 1일 차이가 날 수 있습니다.

다음은 Mendix 5.3.2 릴리스에서 간격을 계산하는 방법에 대한 간소화된 구현 예제입니다. 이후 릴리스에서는 약간 다르게 동작할 수 있습니다.

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

{{% alert color="warning" %}}

매월 특정 일에 Scheduled Event를 실행하는 것이 절대적으로 중요한 경우, 이벤트를 매일 실행하도록 예약해야 합니다. 

{{% /alert %}}

Microflow에서 Decision으로 시작하여 다음과 같은 표현식을 사용해야 합니다:

```java
parseInteger( formatDateTime( [%CurrentDateTime%], 'dd') ) = 1
```

또는

```java
parseInteger( formatDateTime( [%CurrentDateTime%], 'dd') ) = 15
// This will run the scheduled event on the 1st and 15th of the month
```

또는 [Herbert Vujik](https://community.mendix.com/link/questions/6934)이 제안한 대로, 월의 마지막 날에 실행하기 위해 다음 표현식을 사용하십시오:

```java
formatDateTime([%CurrentDateTime%], 'dd') = formatDateTime([%EndOfCurrentMonth%], 'dd') 
```

월간 Scheduled Event 외에도 일간 이벤트를 예약할 때도 주의해야 합니다. 특정 시간에 매일 실행되도록 이벤트를 예약하는 경우 일광 절약 시간도 고려해야 합니다.

특정 시간에 매일 실행되도록 이벤트를 설정하면 정확히 지정된 시간에 시작됩니다. 그러나 이후에는 고정 간격(내부적으로 X 나노초마다 실행하도록 계산됨)으로 실행됩니다. 이는 일간 이벤트가 24시간마다 실행됨을 의미합니다. 따라서 일광 절약 시간으로 인해 시간이 변경되면 이벤트가 1시간 차이가 날 **수** 있습니다.

그러나 이는 서버가 호스팅된 로케일(시간대)에 따라서만 적용됩니다. 어떤 옵션을 선택하든, 일광 절약 시간을 적용하는 국가에 있는 경우 Scheduled Event가 예정보다 1시간 차이나서 실행되는 것을 발견할 수 있습니다. UTC 시간으로 시작하도록 이벤트를 예약할 때 UTC는 일광 절약 시간을 알지 못하므로 플랫폼에 기술적으로 문제가 없습니다. 그러나 사용자는 여전히 이벤트가 다른 시간에 실행되는 것을 경험할 수 있습니다.

안타깝게도 이 문제에 대한 좋은 해결 방법은 없습니다. 위에서 설명한 것과 유사한 솔루션을 만들 수 있습니다. 날짜 형식 표현식 'dd' 대신 'HH'(0-23시간) 또는 'kk'(1-24시간)를 사용하면 동일한 유형의 표현식으로 수행할 수 있습니다.
