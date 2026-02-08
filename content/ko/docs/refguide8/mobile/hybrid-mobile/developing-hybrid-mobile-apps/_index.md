---
title: "하이브리드 모바일 앱 개발"
url: /refguide8/developing-hybrid-mobile-apps/
aliases:
    - /refguide8/Developing+Hybrid+Mobile+Apps.html
    - /refguide8/Developing+Hybrid+Mobile+Apps
---

## 소개

하이브리드 Mendix 앱은 모바일 웹 브라우저에서 간단히 볼 수 있습니다. 그러나 모바일 디바이스 기능은 이러한 앱이 기반으로 하는 HTML과 JavaScript를 통해 접근할 수 없습니다. 또한 하이브리드 앱을 Apple App Store, Google Play 또는 Microsoft Phone Store에 게시하려면 앱을 네이티브 셸로 래핑해야 합니다. Mendix는 [로컬 빌드](/howto8/mobile/build-hybrid-locally/)를 사용하여 이를 수행합니다.

이러한 앱은 웹과 네이티브 앱의 하이브리드이기 때문에 "하이브리드" 앱이라고 불립니다. Mendix는 여러 가지 방법으로 하이브리드 모바일 앱 생성을 지원합니다.

## Mendix Developer App

하이브리드 모바일 앱을 개발하는 동안 툴바 또는 **Run** 메뉴의 **View Hybrid Phone App Online** 또는 **View Hybrid Tablet App Online**을 사용하여 브라우저에서 빠르게 미리볼 수 있습니다.

그러나 하이브리드 페이지에서 네이티브 위젯을 사용할 때 이러한 위젯 중 일부는 브라우저에서 작동하지 않을 수 있습니다. 일부 위젯은 일반 브라우저에서 실행될 때 대체 구현을 제공하며, 다른 위젯은 전혀 작동하지 않습니다. 래퍼 내에서 앱이 어떻게 보이는지 확인하려면 Mendix Developer App을 사용할 수 있습니다. Studio Pro에서 툴바 또는 **Run** 메뉴의 **View in the Mendix App**을 통해 하이브리드 모바일 앱 대화 상자에 접근할 수 있습니다. 해당 앱으로 스캔할 수 있는 QR 코드가 표시됩니다. 이것은 호환 가능한 환경에 앱을 로드하는 빠른 방법입니다.

{{< figure src="/attachments/refguide8/mobile/hybrid-mobile/developing-hybrid-mobile-apps/View_Hybrid_Mobile_App_Popup.png" class="no-border" >}}

Mendix Developer App 다운로드 방법에 대한 자세한 내용은 [Mendix Developer App 다운로드](/refguide8/getting-the-mendix-app/)를 참조하십시오.

{{% alert color="warning" %}}

Mendix Developer App이 작동하려면 모바일 디바이스가 개발 머신과 동일한 네트워크에 있어야 합니다. 이 조건이 충족되어도 연결이 실패하면 Wi-Fi 액세스 포인트에서 디바이스 간 통신이 허용되는지 확인하십시오.

{{% /alert %}}

## 더 읽기

* [모바일](/refguide8/mobile/)
* [Mendix Developer App 다운로드](/refguide8/getting-the-mendix-app/)
* [하이브리드 모바일 앱 커스터마이징](/refguide8/customizing-hybrid-mobile-apps/)
* [하이브리드 모바일 앱 패키징](/refguide8/packaging-hybrid-mobile-apps/)
