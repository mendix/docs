---
title: "첫 번째 하이브리드 모바일 앱 배포"
url: /howto8/mobile/deploy-your-first-hybrid-mobile-app/
weight: 50
---

## 소개

네이티브 기능을 자랑하는 것 외에도, 하이브리드 모바일 앱의 또 다른 주요 장점은 승인 프로세스를 한 번만 거치면 된다는 것입니다. 승인 프로세스 이후의 업데이트는 Mendix Cloud에서 앱을 새로 배포하기만 하면 됩니다.

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* 하이브리드 예제 앱 열기
* 디바이스에 앱 설치

## 사전 요구 사항

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 하이브리드 Mendix Developer App을 디바이스에 설치하십시오. Mendix Marketplace에서 승인을 받을 필요 없이 하이브리드 애플리케이션을 쉽게 볼 수 있습니다(세부 정보 및 다운로드 링크는 *Studio Pro 가이드*의 [Getting the Mendix Developer App](/refguide8/getting-the-mendix-app/)을 참조하십시오)

## 하이브리드 예제 앱 열기

하이브리드 예제 앱을 열려면 다음 단계를 따르십시오:

1. Mendix Studio Pro를 열고 **New App**을 클릭한 다음 **Starter Apps** 탭에서 **Blank App**을 클릭하십시오.
2. **Use this starting point** 버튼을 클릭하십시오.
3. 구성을 조정하고(**Enable online services** > **Yes**가 선택되어 있는지 확인) **Create app**을 클릭하십시오.
4. **Run**을 클릭하여 이 애플리케이션을 Mendix Cloud에 배포하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/deploy-your-first-hybrid-mobile-app/18581186.png" class="no-border" >}} 

    Studio Pro는 애플리케이션이 배포되면 즉시 알려줍니다. 기다리는 동안 **Navigation**으로 이동하여 **Hybrid phone app online** 탭을 클릭하고 **Default home page**가 **MyFirstModule.Dashboard**로 설정되어 있는지 확인하십시오.
5. 작은 화살표를 클릭하여 **View App** 메뉴를 열고 **View Hybrid Mobile App**을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/deploy-your-first-hybrid-mobile-app/18581185.png" class="no-border" >}} 

    **View Hybrid Mobile App** 팝업 창이 열립니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/deploy-your-first-hybrid-mobile-app/18581184.png" class="no-border" >}}

6. 디바이스에서 Mendix Developer App을 열고 **Scan QR Code**를 탭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/deploy-your-first-hybrid-mobile-app/18581190.png" class="no-border" >}}

7. Mendix Developer App으로 화면의 QR 코드를 스캔하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/deploy-your-first-hybrid-mobile-app/18581189.png" class="no-border" >}}

디바이스에서 예제 애플리케이션이 실행되는 것을 확인할 수 있습니다.

## 디바이스에 앱 설치

이 애플리케이션을 네이티브 모바일 앱으로 디바이스에 설치하려면 iTunes를 통해 설치하거나 모바일 앱 스토어 중 하나에 게시할 수 있습니다. 이를 달성하는 방법에 대한 자세한 내용은 [앱 스토어에 Mendix 하이브리드 모바일 앱 게시 방법](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)을 참조하십시오.

## 추가 읽기

* [하이브리드 모바일 애플리케이션 디버그](/howto8/monitoring-troubleshooting/debug-a-hybrid-mobile-application/)
