---
title: "컨텍스트 정보 삽입"
url: /appstore/partner-solutions/apd/rg-one-inserting-context-information/
---

Performance Tool(버전 1.2.1 이후)에는 Performance Tool에서 컨텍스트별 정보를 허용하는 특수 액션이 있습니다. 이를 통해 디버거에서처럼 데이터를 보고 어떤 시나리오가 선택되었는지 알 수 있습니다.

컨텍스트 정보를 추가하려면 아래와 같이 Microflow에서 Java 액션 PerformanceTool.PerformanceToolInfoAction을 사용하십시오.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-inserting-context-information/Performance_Tool_Info_Action_Details.png" class="no-border" >}}             

액션 이름에 info 문자열을 사용하고 메시지 문자열을 사용할 수 있습니다. 선택적으로 모든 속성이 추가되는 3개의 Mendix 객체를 추가할 수 있습니다.

***참고***

1. *Mendix 객체의 속성은 정렬되지 않은 상태로 추가됩니다.*
2. *참조는 추가되지 않습니다.*
3. *액션 메시지는 현재 4000자로 제한됩니다.*

이렇게 하면 컨텍스트 정보가 있는 액션 목록에 액션이 생성됩니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-inserting-context-information/Microflow_Java_Action.png" class="no-border" >}}

Performance Tool 정보 액션의 세부 정보는 아래 이미지와 유사하게 보입니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-inserting-context-information/Performance_Tool_Info_Action_InList.png" class="no-border" >}}
