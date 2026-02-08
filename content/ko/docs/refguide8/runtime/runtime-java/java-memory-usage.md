---
title: "Java 메모리 사용량"
url: /refguide8/java-memory-usage/
weight: 2
---

Java 메모리는 서로 다른 Memory Usage 블록으로 나뉩니다. 이러한 각 블록은 해당 세그먼트의 실제 메모리 사용량의 스냅샷입니다. 각 Memory Usage 블록은 네 가지 다른 값으로 분류할 수 있습니다.

| 메모리 블록 | 설명 |
| --- | --- |
| ***init*** | Java 가상 머신이 시작 시 이 세그먼트의 메모리 관리를 위해 운영 체제에 요청하는 초기 메모리 양(바이트)을 나타냅니다. Java 가상 머신은 시간이 지남에 따라 운영 체제에 추가 메모리를 요청하거나 시스템에 메모리를 해제할 수 있습니다. |
| ***used*** | 활발히 사용되는 메모리 양(바이트)을 나타냅니다. |
| ***committed*** | Java 가상 머신에서 사용할 수 있도록 보장된 메모리 양(바이트)을 나타냅니다. 커밋된 메모리 양은 시간이 지남에 따라 변경될 수 있습니다(증가 또는 감소). |
| ***max*** | 메모리 관리에 사용할 수 있는 최대 메모리 양(바이트)을 나타냅니다. 최대 메모리 양은 정의된 경우 시간이 지남에 따라 변경될 수 있습니다. used 및 committed 메모리 양은 max가 정의된 경우 항상 max 이하입니다. |

모든 Mendix 애플리케이션에서 init과 max의 값은 동일한 값으로 시작합니다. 시작 직후 JVM은 가비지 컬렉션을 실행하고 메모리 사용량을 조정할 수 있습니다.

## 메모리 세그먼트

### **_Perm Gen과 Code Cache_**

Permanent Generation 공간은 모든 클래스와 라이브러리에 할당됩니다. Perm Gen에 할당된 메모리는 상당히 정적으로 유지되며 새 라이브러리나 클래스가 애플리케이션에 로드될 때만 증가합니다. Perm Gen은 Java Heap의 일부가 아니며 할당된 힙 위에 추가됩니다. 자세한 내용은 [Presenting the Permanent Generation](https://blogs.oracle.com/jonthecollector/presenting-the-permanent-generation)을 참조하십시오.

오른쪽의 이미지는 데이터가 메모리를 통해 어떻게 이동하는지 상세히 보여줍니다. 스택은 모든 스레드, 클래스, 그리고 Mendix의 경우 Microflow, Domain Model 및 기타 모든 Mendix 특정 정보에 대한 모든 정보를 포함합니다.

{{< figure src="/attachments/refguide8/runtime/runtime-java/java-memory-usage/16844065.png" class="no-border" >}}

스택에 관한 모든 정보는 메모리에 저장됩니다. 모든 Runtime 정보는 힙에 저장되고, 모든 프로그램 또는 JVM 특정 정보는 Non Heap에 저장됩니다.

Mendix 플랫폼의 모든 클래스, 커스텀 Java 코드, 사용자 라이브러리는 Non Heap에 저장됩니다. 배포 아카이브의 정보도 여기에 보관됩니다.

{{< figure src="/attachments/refguide8/runtime/runtime-java/java-memory-usage/16844066.png" class="no-border" >}}

힙의 모든 데이터는 가비지 컬렉션이 실행될 때만 다른 세그먼트로 이동합니다. 마이너 가비지 컬렉션 실행과 메이저 컬렉션 실행 간의 차이를 볼 수 있습니다.

마이너 가비지 컬렉션 실행은 자주 실행되며 실행에 적은 리소스가 필요합니다.

마이너 가비지 컬렉션은 **Young Generation**의 기본 세그먼트인 **Eden Space**만 검토합니다.

Eden Space는 일반적으로 많은 가비지를 포함하며, 마이너 가비지 컬렉션은 짧은 시간에 많은 사용하지 않는 객체를 한 번에 제거하도록 최적화되어 있습니다.

마이너 가비지 컬렉션 중 사용 중인 객체는 **Young Generation** 세그먼트의 일부인 **Survivor Space**로 이동됩니다.

**Young Generation**이 용량에 도달하면 메이저 가비지 컬렉션 프로세스가 트리거됩니다. 이것은 Survivor Space의 객체가 여전히 사용 중인지 평가하고 가능하면 제거하며, 그렇지 않으면 **Old/Tenured Generation**으로 이동합니다.

메이저 가비지 컬렉션 프로세스는 많은 메모리를 낭비하지 않으면서 빠른 가비지 컬렉션에 최적화되어 있습니다.

**Old/Tenured Generation**은 가비지 컬렉터에 의해 자주 정리되지 않습니다. Tenured Generation 공간은 용량의 약 70%에 도달하거나 며칠 후에 정리됩니다. Tenured 공간은 꾸준히 증가하며 가비지 컬렉션 후 0%에 가깝게 떨어져야 합니다.

### 예시

{{< figure src="/attachments/refguide8/runtime/runtime-java/java-memory-usage/16844068.png" class="no-border" >}}

적은 양의 메모리를 소비하는 건강한 Mendix 애플리케이션은 오른쪽의 첫 번째 그래프와 유사한 그래프를 보여줍니다.

{{< figure src="/attachments/refguide8/runtime/runtime-java/java-memory-usage/16844067.png" class="no-border" >}}

오른쪽의 그래프는 건강하지 않은 애플리케이션을 보여줍니다. 여기에서 볼 수 있듯이, 1주일 동안 메모리 사용량이 꾸준히 증가합니다. 이는 메모리를 계속 소비하는 프로세스에 의해서만 발생할 수 있습니다.

애플리케이션이 Tenured Generation 공간에서 많은 메모리를 소비하는 것은 허용 가능하며, JVM이 메이저 가비지 컬렉션을 실행하고 Tenured Generation을 0으로 줄여야 합니다.
