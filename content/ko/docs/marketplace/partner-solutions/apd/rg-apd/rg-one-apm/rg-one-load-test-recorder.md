---
title: "Load Test Recorder"
url: /appstore/partner-solutions/apd/rg-one-load-test-recorder/
---

## 소개

Load Test Recorder는 별도의 도구에서 사용할 세션을 기록하는 레코더입니다. 특별한 권한에서만 볼 수 있습니다. CLEVR에는 컨설턴트가 프로젝트에서 사용할 수 있는 부하 테스트 도구가 있습니다. 
부하 테스트 도구는 APM Tool에 포함되지 않습니다!

APM Tool에는 Load Test 세션 레코더가 포함되어 있으므로, APM Tool 사용자가 CLEVR이 부하 테스트를 실행하도록 하기 위해 배포할 필요가 없습니다. 부하 테스트 고객은 측정을 위해 APM Tool이 필요하므로 이 조합의 이점도 얻을 수 있습니다. 

## Load Test Recorder

Load Test Recorder를 시작하고 중지할 수 있습니다. 아래 스크린샷은 시작된 후의 Log Tool을 보여줍니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-load-test-recorder/Control.png" class="no-border" >}}

타이머를 시작하고 중지하여 세션에서 개별 기능을 표시할 수 있습니다. 이는 부하 도구가 해당 기능을 측정하는 데 도움이 됩니다.

## Load Test Recorder 옵션

Load Test Recorder 옵션을 보여주는 스크린샷입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-load-test-recorder/Options.png" class="no-border" >}}

**Max messages to record**로 메모리의 레코드 수를 제한할 수 있습니다. 최대값에 도달하면 기록이 중지됩니다.

**Run fixed period of time (seconds)** 옵션을 사용하여 Load Test Recorder가 실행되는 시간을 미리 결정할 수 있습니다.

너무 많은 메시지로 큐가 쌓이면 Load Test Recorder가 중지되도록 구성할 수 있습니다. 이는 로그 레코드가 큐에 기록되는 순간과 Load Test Recorder에 의해 처리되는 순간 사이의 지연을 측정하는 **Max Processing Delay (ms)**라는 매개변수로 제어됩니다.

## 기록된 세션

기록된 세션은 기록된 세션 탭에서 다운로드할 수 있습니다.
{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-load-test-recorder/Overview.png" class="no-border" >}}
