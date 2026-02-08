---
title: "Google Maps 스타일링하기"
url: /howto8/front-end/style-google-maps/
weight: 60
---

## 소개

Google Maps는 애플리케이션에 매우 강력한 추가 기능입니다. 위치, 영역, 경로 등을 표시하는 데 사용할 수 있습니다. 기본적으로 모든 지도 개요는 기본 Google Maps 웹사이트와 동일하게 보입니다. 이제 Google Maps 위젯에 지도 개요를 스타일링하여 애플리케이션 디자인과 일치시킬 수 있는 새로운 옵션이 있습니다. 아래 단계를 따라 최소한의 노력으로 애플리케이션의 지도 개요를 멋지게 꾸미십시오!

**이 사용 방법 가이드를 완료하면 다음을 알게 됩니다:**

* Google Maps 위젯의 새로운 스타일 기능을 구성하는 방법
* 애플리케이션에 맞는 올바른 스타일을 찾고 구현하는 방법
* 커뮤니티를 지원하기 위해 새로운 스타일을 업로드하는 방법

## 준비

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오.

* 앱에 최신 버전의 [Google Maps](/appstore/widgets/google-maps/) 위젯이 있어야 합니다

{{% alert color="warning" %}}
이 지침은 Marketplace에서 다운로드할 수 있는 Google Maps 위젯에 대한 것입니다. Atlas UI 템플릿 내의 Google Maps 위젯은 다른 옵션을 갖고 있습니다.
{{% /alert %}}

## 스타일 추가하기

### 위젯 속성

이 장에서는 Google Maps 위젯에 스타일링을 추가하는 방법을 설명합니다.

1. Google Maps 위젯의 속성을 열고 **Customisation** 탭으로 이동하십시오.
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398957.png" class="no-border" >}}

2. **Style Array** 섹션에 스타일을 입력하면 완료됩니다!
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398956.png" class="no-border" >}}

    예제 스타일링은 다음과 같습니다:

    ```json
    [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]}]
    ```

3. 예제 스타일을 적용하면 다음과 같은 결과를 얻게 됩니다:
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398958.png" class="no-border" >}}

### 올바른 스타일 찾기

애플리케이션에 맞는 대규모 라이브러리에서 기존 스타일 시트를 선택하면 많은 시간을 절약할 수 있습니다. 정기적으로 새 스타일이 업로드되는 커뮤니티 웹사이트는 다음과 같습니다: [https://snazzymaps.com/](https://snazzymaps.com/).

1. 웹사이트에서 **Explore**를 클릭하십시오:
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398959.png" class="no-border" >}}
2. 애플리케이션과 일치하는 스타일을 탐색하여 찾고 클릭하십시오:
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398960.png" class="no-border" >}}
3. 왼쪽 패널에서 스타일 배열을 볼 수 있습니다:
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398961.png" class="no-border" >}}
4. **Copy**를 누르십시오. 스타일이 클립보드에 복사됩니다.
5. Google Maps 위젯의 **Customisation** 탭을 열고 snazzymaps에서 방금 복사한 스타일 배열을 붙여넣으십시오:

    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398962.png" class="no-border" >}}

    스타일 배열:

    ```json
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
    ```

6. 결과는 다음과 같습니다:
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398963.png" class="no-border" >}}

### 직접 스타일 배열 업로드하기

커뮤니티를 지원하는 것은 멋진 일입니다. 따라서 자체 사용자 정의 스타일 배열을 웹사이트에 업로드하는 방법도 보여드리겠습니다.

1. Snazzymaps로 이동하여 **Create**를 클릭하십시오.
    **{{< figure src="/attachments/howto8/front-end/style-google-maps/19398964.png" class="no-border" >}}**
2. 이제 지도 모양을 변경하기 위한 편리한 빠른 스타일 방법을 볼 수 있습니다:
    {{< figure src="/attachments/howto8/front-end/style-google-maps/19398965.png" class="no-border" >}}

    즐거운 모델링 되세요!

## 더 읽기

* [Atlas UI](/howto8/front-end/atlas-ui/)
* [레이아웃과 스니펫](/howto8/front-end/layouts-and-snippets/)
* [내비게이션 구조 설정하기](/howto8/general/setting-up-the-navigation-structure/)
* [첫 번째 개요 및 상세 페이지 만들기](/howto8/front-end/create-your-first-two-overview-and-detail-pages/)
