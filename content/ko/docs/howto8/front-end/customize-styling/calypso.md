---
title: "Calypso를 사용하여 스타일링 사용자 정의하기"
url: /howto8/front-end/calypso/
weight: 10
description: "이 문서에서는 스타일 편집 방식을 개선하는 도구인 Calypso 사용 방법을 설명합니다."
---

## 소개

Calypso는 Mendix 앱의 스타일링을 더 쉽게 사용자 정의할 수 있게 해주는 도구입니다. 디자이너와 프론트엔드 전문가, Mac 사용자와 Windows 사용자 — 누구나 외부 종속성을 설치하지 않고도 쉽게 이 도구를 사용할 수 있습니다. 모든 것이 Calypso 안에 패키지되어 있습니다. Calypso를 설치하고 Mendix 앱을 선택한 다음 사용자 정의를 시작하기만 하면 됩니다. 사용자 정의할 때 Calypso는 다음을 수행하여 작업을 용이하게 합니다:

* *SCSS* 파일의 오류 확인
* *SCSS* 파일을 *CSS*로 컴파일
* 오류에 대한 알림 표시
* 컴파일된 파일을 배포 폴더로 이동
* 변경 사항을 즉시 미리 볼 수 있도록 컴파일된 *CSS* 파일을 브라우저에 주입

Calypso는 대부분의 사용자에게 가장 쉬운 스타일링 솔루션입니다. 그러나 개발 워크플로에서 이미 Gulp 서비스 워커를 사용하고 있다면 더 적합할 수 있는 스타일링 솔루션에 대해 [Gulp 및 Sass 설정 방법](/howto8/front-end/sass-eight/)을 참조하십시오.

Calypso를 사용한 스타일링에 대한 심층적인 내용은 이 비디오를 확인하십시오:

{{< vidyard "M2NCccTnfnh7Yx2gjEyBpf" >}}

## 사전 요구 사항

* [여기](https://github.com/mendix/Atlas-UI-Framework/releases/download/calypso-v1/Calypso.Setup.1.0.0.exe)에서 Calypso를 다운로드하십시오

## Calypso 설정하기

1. Calypso를 설치하십시오.
2. Calypso를 여십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/calypso.png" alt="calypso" class="no-border" >}}

3. **Hostname** 드롭다운 메뉴에서 Mendix 앱 디바이스의 호스트 이름을 선택하십시오 (또는 **Other**를 클릭하고 IP 주소를 입력하여 수동으로 IP 주소를 넣으십시오).

    대부분의 Windows 사용자는 **localhost**를 선택해야 합니다. 가상 머신을 통해 Windows를 실행하는 경우 가상 머신의 IP 주소를 **Hostname**으로 사용하거나 호스트 머신에서 가상 머신으로 포트를 포워딩할 수 있습니다. 또는 가상 머신에 Calypso를 설치하고 **localhost**를 선택할 수 있습니다.

4. Calypso를 처음 사용하는 경우 Windows 방화벽에서 Calypso 사용을 위해 **Allow access**를 허용해야 할 수 있습니다.
5. **Port**를 구성하십시오.

    Mendix 앱은 일반적으로 포트 8080에서 실행됩니다. 그러나 여러 Mendix 앱을 실행하거나 포트 구성을 변경한 경우 포트 번호가 다를 수 있습니다. **Project Explorer**에서 **Project {'YourProjectName'}** > **Settings**로 이동하고 **Application root URL** ({host name:port number})에서 포트 번호를 확인한 다음 해당 번호를 Calypso의 **Port** 필드에 입력하십시오.

6. **Apps Collection**에서 **Browse** 버튼을 클릭한 다음 모든 Mendix 앱이 포함된 폴더를 선택하십시오. 이를 구성하면 앱 간 쉽게 전환할 수 있습니다.
7. 드롭다운 메뉴에서 작업하려는 Mendix 앱의 폴더를 선택하여 **App Folder**를 완료하십시오.
8. Calypso에서 처리할 파일을 지정하기 위해 **Watching**을 완료하십시오.

    대부분의 사용자는 **Watching** > **theme/styles** 옵션만 선택하면 됩니다. 그러나 사용자 정의 오류 페이지를 만들거나 페이지에서 JavaScript를 사용하는 경우 다른 두 폴더도 선택할 수 있습니다.

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/calypso-watching.png" alt="files to watch" class="no-border" >}}

9. 오른쪽 상단의 태양을 클릭하여 다크 모드와 일반 모드 간에 전환하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/dark-mode.png" alt="dark mode" class="no-border" >}}

10. Mendix Studio Pro에서 **Run Locally**를 클릭하여 Calypso를 사용하십시오.

11. Calypso에서 **Start** 버튼을 클릭하십시오. 이렇게 하면 실행 중인 앱을 볼 수 있는 브라우저 페이지가 시작됩니다. 브라우저 주소는 Calypso의 **Console** 주소와 일치합니다:

    브라우저 주소:

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/browser-address.png" alt="browser address" class="no-border" >}}

    Calypso의 **Console**:

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/console.png" alt="console" class="no-border" >}}

## Calypso 테스트하기

Mendix 앱과 Calypso가 실행 중인 상태에서 아래 단계를 완료하여 Calypso가 어떻게 작동하는지 확인하십시오:

1. 앱의 **Home_Responsive** 페이지에 버튼 위젯을 추가하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/drop-a-button.png" alt="drop a button" class="no-border" >}}

2. **Run Locally**를 클릭하여 앱을 다시 실행하고 브라우저에서 새 버튼을 확인하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/blue-button.png" alt="blue text button" class="no-border" >}}

3. **Project** > **Show Project Directory in Explorer**를 클릭하십시오.
4. `theme\styles\web\sass\app\_custom-variables.scss`를 여십시오.
5. `$brand-primary: #0595DB;`를 `$brand-primary: brown`으로 변경한 다음 변경 사항을 저장하십시오.
6. 브라우저에서 앱을 다시 보십시오. 버튼의 텍스트가 파란색에서 갈색으로 바뀌었습니다.

    {{< figure src="/attachments/howto8/front-end/customize-styling/calypso/brown-button.png" alt="brown text button" class="no-border" >}}

잘 하셨습니다! Calypso를 설치하고 사용하여 빠르고 쉽게 스타일링을 사용자 정의하셨습니다.

## 더 읽기

* [Atlas UI 시작하기](/howto8/front-end/get-started-with-atlasui/)
* [기존 앱을 Atlas UI로 마이그레이션하기](/howto8/front-end/migrate-existing-projects-to-atlasui/)
* [Gulp 및 Sass 설정 방법](/howto8/front-end/sass-eight/)
