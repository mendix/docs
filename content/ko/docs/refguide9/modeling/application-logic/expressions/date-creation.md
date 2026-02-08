---
title: "Date 생성"
url: /refguide9/date-creation/
weight: 90
---

## 소개

날짜는 `dateTime` 및 `dateTimeUTC` 함수로 생성할 수 있습니다. 이 둘의 차이점은 `dateTime`은 함수 호출에 사용되는 세션의 캘린더를 사용하고, `dateTimeUTC`는 UTC 캘린더를 사용한다는 것입니다. 시스템 세션은 기본적으로 UTC로 실행되지만, 예약된 이벤트는 **앱 설정**의 [예약된 이벤트 시간대](/refguide9/app-settings/#scheduled) 섹션에서 구성할 수 있습니다.

이 함수는 변수 또는 Attribute 매개변수를 허용하지 않으며, 고정 값만 허용합니다. 매개변수를 사용하여 날짜를 생성하려면 [parseDateTime](/refguide9/parse-and-format-date-function-calls/#parsedatetime-utc) 함수를 사용하십시오.

## 값

이 함수들은 다음 순서로 1개에서 6개의 입력 값을 받습니다:

1. years (유형: integer, 네 자리 이상이며 1799보다 큼)
2. months (유형: integer, 1에서 12 사이)
3. days (유형: integer, 1에서 31 사이)
4. hours (유형: integer, 0에서 23 사이)
5. minutes (유형: integer, 0에서 59 사이)
6. seconds (유형: integer, 0에서 59 사이)

## 예제

아래 예제는 Expression이 반환하는 값을 보여줍니다:

* 하나의 값을 입력으로 지정하는 경우:

    ```java
    dateTime(2007)
    ```

    Expression은 다음 출력을 반환합니다:

    ```java
    "Mon Jan 01 00:00:00 CET 2007"
    ```

* 두 개의 값을 입력으로 지정하는 경우:

    ```java
    dateTime(2007, 1)
    ```

    Expression은 다음 출력을 반환합니다:

    ```java
    "Mon Jan 01 00:00:00 CET 2007"
    ```

* 세 개의 값을 입력으로 지정하는 경우:

    ```java
    dateTime(2007, 1, 1)
    ```

    Expression은 다음 출력을 반환합니다:

    ```java
    "Mon Jan 01 00:00:00 CET 2007"
    ```

* 네 개의 값을 입력으로 지정하는 경우:

    ```java
    dateTime(2007, 1, 1, 1)
    ```

    Expression은 다음 출력을 반환합니다:

    ```java
    "Mon Jan 01 01:00:00 CET 2007"
    ```

* 다섯 개의 값을 입력으로 지정하는 경우:

    ```java
    dateTime(2007, 1, 1, 1, 1)
    ```

    Expression은 다음 출력을 반환합니다:

    ```java
    "Mon Jan 01 01:01:00 CET 2007"
    ```

* 여섯 개의 값을 입력으로 지정하는 경우:

    ```java
    dateTime(2007, 1, 1, 1, 1, 1)
    ```

    Expression은 다음 출력을 반환합니다:

    ```java
    "Mon Jan 01 01:01:01 CET 2007"
    ```
