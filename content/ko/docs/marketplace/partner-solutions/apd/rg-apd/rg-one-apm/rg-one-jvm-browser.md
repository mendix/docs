---
title: "JVM Browser"
url: /appstore/partner-solutions/apd/rg-one-jvm-browser/
---

## 소개

JVM Browser는 Java JDK에서 제공하는 JConsole 또는 JVisualVM 도구와 유사한 정보를 보여줍니다. **Refresh** 버튼을 사용하면 개별 항목이 새로고침됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-jvm-browser/Overview.png" class="no-border" >}}                

항목을 더블 클릭하면 드릴다운하여 세부 정보를 볼 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-jvm-browser/Details.png" class="no-border" >}}

**Collect** 버튼을 사용하여 개별 항목에 대한 통계 수집을 시작할 수 있습니다. 이러한 통계는 Measurements Tool에서 볼 수 있습니다.

## 추가 JMX 노출 통계

도구의 런타임 통계, JMX에 노출되는 측정 및 Mendix 통계는 JMX를 통해(JMX가 실행 중일 때) 사용할 수 있습니다.

APM 모듈에는 자체 JMX 데이터(예: 비즈니스 규칙의 결과)를 게시하는 Java Actions가 있습니다.
