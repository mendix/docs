---
title: "Performance Recorder"
url: /appstore/partner-solutions/apd/rg-two-recorder/
---

## 소개

Performance Recorder는 Mendix 애플리케이션 내의 각 개별 액션을 기록할 수 있게 합니다. 두 가지 기록 옵션이 있습니다. 런타임 기록은 서버 액션(Microflow 및 클라이언트 API)을 기록하고, 브라우저 기록은 사용자의 애플리케이션 연결을 기록합니다.

런타임 기록은 느린 Microflow를 조사하거나 시간이 많이 소요되는 액션을 정확히 파악하는 데 유용합니다. 브라우저 기록은 사용자 관점에서의 성능과 서버 응답의 결과로 브라우저가 수행하는 후속 액션을 보여줍니다.

## 새 세션 기록

**Record runtime(s)**를 클릭하여 새 기록 세션을 시작합니다. 세션 이름(선택 사항)을 제공하고 모든 사용자 브라우저를 기록하는 확인란을 선택할 수 있습니다. 브라우저 콘솔을 기록하도록 선택할 수도 있습니다.

**Record all browsers** 확인란을 해제하고 **Select browsers to record**를 클릭하면 런타임을 기록하지 않고 개별 사용자의 브라우저를 기록할 수 있습니다. 팝업 창에 현재 날짜에 로그인한 사용자 목록이 표시됩니다. 여기서 기록하려는 브라우저의 사용자를 선택할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-recorder/select-browsers.png" class="no-border" >}}

브라우저를 기록할 때 사용자는 다음 메시지를 확인해야 합니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-recorder/Browser_agent_recording_notice.png" class="no-border" >}}

## 기록된 결과

기록 결과는 **Recorded sessions** 개요에서 확인할 수 있습니다. 이 탭은 런타임 기록과 브라우저 기록을 별도로 표시합니다. 

**Browser** 유형의 기록을 클릭하면 [브라우저 기록 결과](/appstore/partner-solutions/apd/rg-two-browser-recorder-results/)가 열립니다. **Server** 유형의 기록을 클릭하면 [서버 기록 결과](/appstore/partner-solutions/apd/rg-two-runtime-recorder-results/)가 열립니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-recorder/recorder.png" class="no-border" >}}

{{% alert color="info" %}}

브라우저 세션은 브라우저 창당 하나입니다. 사용자가 여러 브라우저 인스턴스를 사용하여 애플리케이션에 연결하면 각 인스턴스에 대한 기록된 세션이 생성됩니다.

{{% /alert %}}

### 고정된 기록 세션

기록은 1주 후에 자동으로 정리됩니다. 원하는 경우 자동 제거를 방지하기 위해 기록된 세션을 고정할 수 있습니다(예: 배포 후 성능 차이를 비교하고 싶지만 1주 이내에 배포가 예정되어 있지 않은 경우). 
