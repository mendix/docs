---
title: "Gulp 및 Sass로 스타일링 시작하기"
url: /howto8/front-end/style-with-gulp-and-sass/
weight: 2
---

## 소개

{{% alert color="info" %}}
이 사용 방법 가이드는 Mendix 파트너 기업인 [Appronto](https://developer.mendixcloud.com/link/partnerprofile/8870)의 UX 컨설턴트 Jason Teunissen의 블로그 게시물 [How Do I Start Styling In Mendix (Gulp & Sass)](https://medium.com/@jasonteunissen/how-do-i-start-styling-in-mendix-gulp-sass-6b37ddaf8de6)를 기반으로 합니다.
{{% /alert %}}

{{% alert color="info" %}}
대부분의 스타일링 요구 사항에는 Mendix의 스타일링 도구인 Calypso를 사용할 수 있습니다. 자세한 내용은 [Calypso 사용 방법](/howto8/front-end/calypso/)을 참조하십시오. 그러나 Gulp을 선호하는 특정 사용자에게는 이 문서가 유용할 수 있습니다.
{{% /alert %}}

Sass로 스타일링할 때 파일의 변경 사항을 감시하기 위해 [Gulp](https://gulpjs.com/)을 사용할 수 있습니다. Gulp은 기본적으로 자동 새로 고침을 트리거하여 변경 사항이 브라우저에 즉시 표시됩니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* Gulp 프로젝트 설정하기
* Gulp 실행하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [Gulp 및 Sass 설정 방법](/howto8/front-end/sass-eight/) 완료하기

## Gulp 프로젝트 설정하기

Gulp 프로젝트를 설정하려면 다음 단계를 따르십시오:

1. [mendix/ux-theming](https://github.com/mendix/ux-theming/releases)에서 *gulp.zip*을 다운로드하십시오.
2. 프로젝트의 루트 폴더에 폴더를 압축 해제하십시오.
3. 터미널에서 `cd`를 입력한 다음 루트 파일을 터미널로 드래그하여 프로젝트 루트 폴더로 이동하십시오. Windows에서 이 작업을 수행하고 종속성 설치 시 오류가 발생하면 CMD 또는 PowerShell을 관리자 권한으로 여십시오.
4. <a id="34"></a>`npm install`을 입력하여 종속성을 설치하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/style-with-gulp-and-sass/cd.png" class="no-border" >}}

## Gulp 실행하기

Gulp을 실행하려면 다음 단계를 따르십시오:

1. 설치를 방금 완료했다면 여전히 루트에 있어야 하므로 루트에서 `npm run dev`를 입력하십시오.
2. Mendix 프로젝트가 실행 중인지 확인하십시오.
3. 모든 것이 작동하는지 빠르게 테스트하려면 *theme/styles/sass/custom/_custom-variables.scss*를 열고 `body{ background-color: red; }`를 입력하십시오. 그러면 배경이 아름다운 빨간색이 됩니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/style-with-gulp-and-sass/red.png" class="no-border" >}}

{{% alert color="info" %}}
Mac에서 Parallels를 사용하는 경우 Parallels 머신으로 이동하여 Mac 브라우저에서 Mendix 프로젝트에 접근할 수 있습니다 (예: `http://10.211.55.3:30001` — 각 설정마다 다름).
{{% /alert %}}

이것으로 완료입니다! 이제 Sass로 Mendix 앱의 스타일링을 시작할 준비가 되었습니다.

## 개발 및 프로덕션

`npm run dev`를 실행하면 Sass가 CSS 파일을 미니파이하지 않고 소스 맵핑과 함께 컴파일합니다. 이는 현대 브라우저가 규칙이 지정된 *.scss* 파일을 가리키므로 스타일링 디버깅에 도움이 됩니다.

프로덕션에서 사용할 때는 커밋 및 배포하기 전에 `npm run build`를 실행해야 합니다. 이렇게 하면 소스 맵핑이 비활성화되고 CSS 파일이 미니파이되어 파일 크기가 최소화됩니다.

## Mendix Portal 앱

협업 앱에서 이 설정을 사용할 때 **node_modules** 폴더를 **SVN ignore**에 추가해야 합니다. 이 폴더는 `npm install`을 실행하여 생성되며 ([Gulp 설치](#34) 섹션에 설명) 너무 많은 파일을 포함합니다. 이 단계를 잊지 않는 것이 중요합니다!

[TortoiseSVN](/refguide8/using-version-control-in-studio-pro/#tortoisesvn-subclipse)이 설치되어 있는 경우 **node_modules** 폴더를 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Add to ignore list**를 선택하십시오:

{{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/style-with-gulp-and-sass/svn-ignore.jpg" class="no-border" >}}

{{% alert color="warning" %}}
항상 앱 모델과 일치하는 TortoiseSVN 버전을 사용하십시오. 최신 버전의 TortoiseSVN으로 Mendix 7.x의 로컬 모델을 열면 **더 이상 Mendix에서 열 수 없게 됩니다**.
{{% /alert %}}

## 문제 해결

이 설정을 사용하면서 문제가 발생하면 GitHub 저장소 문서의 [Troubleshooting](https://github.com/mendix/ux-theming#troubleshooting) 섹션을 읽으십시오. 그래도 문제가 해결되지 않으면 [새 GitHub 이슈를 생성](https://github.com/mendix/ux-theming/issues/)하십시오.

## 더 읽기

* [How Do I Start Styling In Mendix (Gulp & Sass)](https://medium.com/@jasonteunissen/how-do-i-start-styling-in-mendix-gulp-sass-6b37ddaf8de6)
* [mendix / ux-theming](https://github.com/mendix/ux-theming)
