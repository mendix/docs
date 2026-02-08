---
title: "일반적인 Runtime 및 Java 오류"
url: /refguide8/runtime-java-errors/
weight: 3
---

## 소개

애플리케이션의 성능이 저하되거나, 불안정해지거나, 더 나쁘게는 충돌이 발생하면 가장 먼저 해야 할 일은 애플리케이션 로그에서 원인에 대한 단서를 확인하는 것입니다. **FATAL** 또는 **CRITICAL** 로그 라인이 있으면 즉시 해결 작업을 시작하십시오. 모든 **ERROR** 로그 라인도 마찬가지로 처리해야 하므로 항상 이를 제거하기 위해 노력해야 합니다.

## 일반적인 오류

애플리케이션이 중단될 수 있는 애플리케이션 로그에서 찾을 수 있는 더 일반적인 오류 중 일부가 이 문서의 주제입니다. 바로 살펴보겠습니다.

### java.lang.StackOverflowError

애플리케이션은 이 오류에서 복구되지 않습니다. Mendix 애플리케이션을 실행하는 동안 이 오류가 발생하면 거의 항상 무한 루프가 원인입니다. 단일 Microflow 호출 작업이 있는 *Microflow*라는 Microflow를 만들고 *Microflow*라는 Microflow를 선택하여 이를 쉽게 재현할 수 있습니다. 무한 루프는 앱을 충돌시키고 스택 오버플로우 오류를 생성합니다.

### java.lang.OutOfMemoryError: Java heap space

이것은 JVM 힙이 "충분합니다. 이 모든 것을 메모리에 넣을 수 없습니다."라고 말할 때 발생하는 오류입니다. 이는 일반적으로 애플리케이션이 불안정해졌으며 충돌하기 전에 재시작해야 하며, 해결해야 할 실제 문제가 있다는 것을 의미합니다.

다음이 이 오류를 유발할 수 있습니다:

* 메모리 누수
    * 개발자가 도입, 커스텀 코드
    * Mendix Runtime의 버그
    * 개발자의 커스텀 코드 또는 Mendix Runtime에서 사용하는 Java 라이브러리의 버그
    * Java Runtime의 버그
* 대량의 객체 생성(예: 단일 Microflow에서 한 번에 1조 개의 Entity를 검색)
* 구성 문제 또는 크기 조정 문제

메모리 누수는 가비지 컬렉터가 실행을 멈추는 것처럼 보여야 합니다. 예시로 여기 그래프의 전반부를 참조하십시오:

{{< figure src="/attachments/refguide8/runtime/runtime-java/runtime-java-errors/2.jpg" class="no-border" >}}

Object Cache(힙의 Mendix 객체) 그래프가 힙과 유사한지 항상 확인하는 것이 좋습니다. 예를 들어:

{{< figure src="/attachments/refguide8/runtime/runtime-java/runtime-java-errors/3.jpg" class="no-border" >}}

이것은 꽤 건강하게 보입니다.

Object Cache가 무한정 증가하는 것을 보면 직접 메모리 누수를 도입했을 수 있으며, 즉시 애플리케이션을 분석하여 그럴 수 있는지 확인하는 것이 가장 좋습니다.

반면에 아래 그래프와 같이 보이면 제어할 수 없는 버그(예: Mendix Runtime)가 메모리 누수를 유발하고 있을 가능성이 훨씬 높습니다.

{{< figure src="/attachments/refguide8/runtime/runtime-java/runtime-java-errors/4.jpg" class="no-border" >}}

### java.lang.OutOfMemoryError: GC overhead limit exceeded

이런 암호 같은 설명입니다. 하지만 실제로는 꽤 간단합니다. JVM이 "가비지 컬렉션에 과도한 시간(기본적으로 전체 CPU 시간의 98%)을 소비하고 있으며 매번 매우 적은 메모리(기본적으로 전체 힙 크기의 <=2%)만 복구하고 있습니다. 지금 애플리케이션을 중지하여 충돌하기 전에 무엇이 잘못되었는지 파악할 수 있도록 하겠습니다."라고 말하는 것입니다.

이 오류의 가장 일반적인 원인은 다음과 같습니다:

1. 대부분: 짧은 시간에 많은 객체를 생성.
2. 가끔: 빠른 연속으로 많은 객체를 생성.
3. 드물게: 기타.

이 오류를 재현하려면 다음과 같이 하십시오:

{{< figure src="/attachments/refguide8/runtime/runtime-java/runtime-java-errors/common-errors.png" class="no-border" >}}

결국 생성되는 모든 Account 때문에 메모리가 부족해지며, 이때 가비지 컬렉터가 메모리를 확보하려고 합니다. 모든 Account 객체가 여전히 살아 있으므로 이를 수행할 수 없습니다. 잠시 후 오류를 반환합니다.

이것으로 애플리케이션이 중단될 수 있는 애플리케이션 로그의 일반적인 오류 목록을 마칩니다. 하지만 하나 더 공유할 항목이 있습니다. 오류 로그의 오류는 아니지만 설명된 일부 증상과 일치할 수 있습니다.

### 애플리케이션 서버의 리소스 부족

*Application node operating system memory* 그래프에서 회색 *committed* 선이 흰색 부분으로 피크하는 것을 보면, 앱 노드에 더 많은 메모리가 필요합니다. 이 경우 더 큰 컨테이너로 업그레이드하는 것을 강력히 권장합니다. 이 문제의 예시는 다음 그래프를 참조하십시오:

{{< figure src="/attachments/refguide8/runtime/runtime-java/runtime-java-errors/6.jpg" class="no-border" >}}
