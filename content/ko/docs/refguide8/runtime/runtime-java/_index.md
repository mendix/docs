---
title: "Mendix Runtime과 Java"
url: /refguide8/runtime-java/
---

## 소개

Mendix를 개발하거나 실행할 때 조만간 Java를 접하게 됩니다. 이 문서에서는 Mendix에서의 Java의 기본 개념을 설명합니다.

## 개념

Java 개념은 아래에 나열되어 있습니다.

### Java Virtual Machine(JVM)

Mendix를 사용할 때 실제 애플리케이션을 Java Virtual Machine(JVM)에 배포하고 실행하기 위해 Java(JDK)와 함께 사용합니다. JVM은 Mendix 애플리케이션이 실행되는 컨테이너입니다. 다음과 같습니다:

{{< figure src="/attachments/refguide8/runtime/runtime-java/2.jpg" class="no-border" >}}

또는 Mendix Cloud에서 표시되는 것처럼:

{{< figure src="/attachments/refguide8/runtime/runtime-java/4.jpg" class="no-border" >}}

### 스택

또 다른 흥미로운 영역은 스택입니다. 이것은 Microflow, Domain Model 및 기타 Mendix 특정 정보에 대한 모든 정보를 보관합니다. 실행되는 모든 Microflow도 스택에 보관됩니다(위 그래프의 *thread stacks* 참조).

### 힙, 가비지 컬렉터, OOM 오류

다음은 힙 공간(Heap)입니다. 그러나 그 전에 JVM의 또 다른 중요한 부분인 가비지 컬렉터(GC)에 대해 간단히 설명하겠습니다.

GC는 다음을 담당합니다:

* 메모리 할당
* 참조된 객체가 메모리에 남아 있도록 보장
* 실행 중인 코드의 참조에서 더 이상 도달할 수 없는 객체가 사용하는 메모리 회수

간단히 말해, 힙에서 현재 사용 중인(상당히 넓은 개념) 모든 객체는 살아 있는 것으로 간주됩니다. 더 이상 사용되지 않는 객체는 죽은 것으로 간주됩니다. GC는 이러한 죽은 객체를 모두 제거하여 힙의 메모리를 다시 확보합니다.

GC는 자체적으로 OOM(Out of Memory) 오류를 방지하는 책임이 없습니다. 예를 들어, 무한정 객체를 계속 생성할 수 있으며, 작업이 완료될 때까지 살아 있으므로 GC는 해당 객체를 건드리지 않지만 여전히 OOM 오류가 발생합니다.

힙으로 돌아가겠습니다. 세 부분으로 나눌 수 있습니다:

1. Eden Space(젊은 세대)
2. Survivor Space(젊은 세대)
3. Tenured Generation(오래된 세대)

GC가 마이너 가비지 컬렉션을 실행하면 젊은 세대의 모든 객체만 정리하려고 합니다. Eden Space 객체를 정리하지 못하면 Survivor Space로 이동합니다. Survivor Space 객체를 충분한 횟수만큼 정리하지 못하면 Tenured Generation으로 이동합니다. Tenured Generation이 충분히 커지면(힙에 사용 가능한 총 공간의 약 60%) 메이저 가비지 컬렉션을 실행하고 젊은 세대와 오래된 세대 모두의 모든 객체를 정리하려고 합니다. 따라서 건강한 JVM은 다양한 부분의 메모리 사용량에 따라 힙이 올라갔다 내려갔다 합니다.

Mendix Cloud에서 가져온 다음 JVM Object Heap 그래프에서 이를 잘 볼 수 있습니다:

{{< figure src="/attachments/refguide8/runtime/runtime-java/5.jpg" class="no-border" >}}

보라색과 녹색 스파이크는 마이너 가비지 컬렉션입니다. 빨간 부분의 큰 하락은 메이저 가비지 컬렉션입니다. 이것은 건강하게 보이는 힙입니다.

### 애플리케이션 서버

마지막으로 위의 모든 것이 합쳐지는 Mendix Cloud 그래프입니다:

{{< figure src="/attachments/refguide8/runtime/runtime-java/6.jpg" class="no-border" >}}

녹색 부분(apps)은 기본적으로 Mendix 애플리케이션이 실행되는 JVM입니다. 그 외의 것은 애플리케이션 서버의 운영 체제를 위해 예약되어 있습니다.

## 더 읽기

* [Non-Persistable 객체와 가비지 컬렉션](/refguide8/transient-objects-garbage-collecting/)
* [Java 메모리 사용량](/refguide8/java-memory-usage/)
* [일반적인 Runtime 및 Java 오류](/refguide8/runtime-java-errors/)
