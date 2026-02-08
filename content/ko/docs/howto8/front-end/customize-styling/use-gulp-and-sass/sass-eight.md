---
title: "Gulp 및 Sass 설정하기"
url: /howto8/front-end/sass-eight/
weight: 1
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

{{% alert color="info" %}}
Mendix 앱에서의 스타일링은 요령을 익히면 쉽습니다. 대부분의 스타일링 요구 사항에는 Mendix의 스타일링 도구인 Calypso를 사용할 수 있습니다. 자세한 내용은 [Calypso 사용 방법](/howto8/front-end/calypso/)을 참조하십시오.
{{% /alert %}}

그러나 Gulp과 Sass를 사용하는 것이 특정 사용자에게 더 나을 수 있습니다. 개발 워크플로에서 이미 Gulp 서비스 워커를 사용하고 있다면 Calypso 대신 Gulp과 Sass를 사용하여 Mendix 앱의 스타일을 지정하고 싶을 수 있습니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 앱 준비하기
* Sass 파일 설정하기
* Sass로 작업하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

1. [Visual Studio Code (VSC)](https://code.visualstudio.com/)를 설치하십시오.
2. [Gulp for Mendix theming](https://github.com/mendix/ux-theming) GitHub 프로젝트에서 **Releases**를 클릭하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/releases.png" class="no-border" >}}

3. **Gulp.zip** 파일을 다운로드하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/gulp.png" class="no-border" >}}

4. gulp을 통한 작업 실행 및 자동화를 위해 Node.js를 설치하십시오. [Node.js](https://nodejs.org/en/)에서 최신 LTS 버전을 설치하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/node.png" class="no-border" >}}

5. **1.7.15** 버전의 [TortoiseSVN](https://osdn.net/projects/tortoisesvn/storage/Archive/1.7.15/Application/)을 설치하십시오.

## 앱 준비하기

앱을 준비하려면 다음 단계를 따르십시오:

1. 앱 디렉토리를 여십시오 (Studio Pro에서 **Project** > **Show Project Directory in Explorer** 선택).
2. *Gulp.zip* 파일을 메인 앱 폴더에 압축 해제하십시오. 그러면 다음과 같은 *Gulpfile*과 *package* 파일을 볼 수 있습니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/unpack.png" class="no-border" >}}

    앱 폴더에 *Gulp.zip*을 압축 해제한 후 *zip* 파일을 제거할 수 있습니다.
3. **Windows PowerShell**을 관리자 권한으로 여십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/powershell.png" class="no-border" >}}

4. 메인 프로젝트 폴더에서 주소를 텍스트로 복사하여 Powershell에 붙여넣으십시오 (프로젝트 폴더에는 공백이 포함되어서는 안 되며 너무 길어서도 안 됩니다):

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/copy.png" class="no-border" >}}

5. PowerShell에서 앱 폴더의 디렉토리를 제공하십시오: `cd 'directory for your app folder'`
6. `Set-ExecutionPolicy -ExecutionPolicy ByPass -Scope CurrentUser`를 입력하고 <kbd>Enter</kbd>를 눌러 권한을 조정하십시오.
7. Studio Pro에서 앱이 로컬로 실행 중인 상태에서 `npm install` 또는 `npm install gulp-cli -g`를 입력하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/write-install.png" class="no-border" >}}

    `npm install`을 사용하면 오류가 발생할 수 있습니다. PowerShell은 대신 `npm run dev`를 사용하라고 알려줄 것입니다. 그것도 작동하지 않으면 `npm install run`을 사용하십시오.

    {{% alert color="info" %}}새 앱마다 이 작업을 수행해야 합니다! 이렇게 하면 앱과 Powershell을 다시 열 때마다 설치 단계를 반복할 필요가 없습니다.{{% /alert %}}

8. `npm run dev`를 입력하십시오. 화면은 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/gulp-dev.png" class="no-border" >}}

    이 시점에서 Sass로 작업할 준비가 되었습니다.

9. 또한 새 앱마다 다음 선택 항목을 TortoiseSVN의 무시 목록에 추가해야 합니다. 그렇지 않으면 변경 사항을 커밋하는 데 너무 오래 걸립니다. 프로젝트 설정 시 *한 번만* 수행하면 됩니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/selected-ignore.png" class="no-border" >}}

    각 항목을 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Add to ignore list**를 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/add-ignore.png" class="no-border" >}}

    항목이 무시 목록에 추가되면 확인 메시지를 받게 됩니다. TortoiseSVN을 통해 다시 확인할 수도 있습니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/check-ignore.png" class="no-border" >}}

    무시 목록에서 항목을 제거해야 하는 경우 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Remove from ignore list**를 선택하십시오.

10. Studio Pro에서 앱을 열고 **Run Locally**와 **View**를 클릭하십시오.

## Sass 파일 설정하기

마지막 단계입니다! Sass를 열고 작업하려면 아래를 읽으십시오:

1. 메인 앱 폴더를 열고 **theme** \> **styles** \> **sass** \> **custom**으로 이동하십시오.
2. *custom.scss* 또는 *_custom-variables.scss* 파일을 더블 클릭하면 VSC에서 열립니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/custom-variables.png" class="no-border" >}}

    *custom* 파일을 열면 다음 화면을 볼 수 있습니다:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/import.png" class="no-border" >}}

3. **EXPLORER**에서 **Open Folder**를 클릭한 다음 **sass** 폴더를 선택하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/sass-folder.png" class="no-border" >}}

4. 필요하지 않은 **Welcome**을 제거하십시오:

    {{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/welcome.png" class="no-border" >}}

### Sass를 Custom 폴더에 유지하기

**custom** 폴더에서만 작업한다는 것을 명심하는 것이 중요합니다. **lib** 폴더에는 변경하지 않지만 참조로 사용할 수 있습니다. *_variables.scss* 파일의 내용을 사용하여 필요한 변수를 가져오고 *_custom-variables.scss* 파일에 복사합니다. 변수는 기본 글꼴 크기, 색상, 배경 색상, 높이 등에서 다를 수 있습니다. *_custom-variables.scss* 파일에서 자체 변수를 만들 수도 있습니다. 예: `$brand-blue: #48B0F7;`.

이제 Sass 구조에서 작업하고 **custom** 폴더에 하위 폴더와 파일을 만들어 모든 것을 깔끔하게 정리할 수 있습니다. **lib** 폴더를 보고 앱에서 가장 많이 사용할 폴더와 파일에 대한 아이디어를 얻을 수도 있습니다.

새 Sass 파일을 만들 때 다음 이름 지정 가이드라인을 따르십시오: *\_{namefilehere}.scss*. 예:

{{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/name-example.png" class="no-border" >}}

### 새 하위 폴더 및 파일 가져오기

새 Sass로 앱에서 변경 사항을 보려면 먼저 폴더와 파일을 가져와야 합니다. *custom.scss*를 열면 다음을 볼 수 있습니다:

`@import "custom-variables";`

만든 모든 하위 폴더와 파일을 가져오려면 다음을 작성하십시오:

```scss
@import "custom-variables";
// base
@import "base/login";
```

모든 것을 가져온 후 드디어 Sass를 사용할 준비가 되었습니다!

## Sass로 작업하기

다음은 사용자 정의 Sass의 예입니다:

```scss
.pageheader-title {
	color: red;
}

.pageheader-subtitle {
	color: green;
}
```

이를 앱에 구현하려면 Mendix Studio Pro에서 프로젝트를 여십시오. 거의 모든 요소(예: 제목 및 부제)에서 정의된 클래스 이름을 찾을 수 있습니다. 이 예에서는 Studio Pro에서 **Event App** 제목을 더블 클릭하면 이름에 Studio Pro의 표준 클래스 이름이 있음을 알 수 있습니다.

{{< figure src="/attachments/howto8/front-end/customize-styling/use-gulp-and-sass/sass-eight/class-name.png" class="no-border" >}}

**spacing-outer-bottom-medium**은 정의된 스타일링 코드를 포함하는 변수이므로 제거할 수 있습니다. 이를 제거하지 않으면 예를 들어 제목을 다른 곳에 배치하려 할 때 나중에 앱에서 문제가 생길 수 있습니다.

{{% alert color="info" %}}
이 예에서는 인라인 스타일링이 사용됩니다. 인라인 스타일링은 항상 VSC의 코드를 덮어쓰기 때문입니다.
{{% /alert %}}

### 변경 사항 보기

Studio Pro에서 추가, 제거 또는 변경한 경우 변경 사항을 저장하고 앱을 로컬로 실행하여 브라우저에서 스타일링 변경 사항을 확인해야 합니다.

예를 들어, 제목과 부제에 색상을 설정한 경우 **Run Locally**를 클릭한 다음 **View**를 클릭하십시오. 브라우저가 자동으로 열리면 다음 URL을 볼 수 있습니다:

`http://localhost:8080/index.html?profile=Responsive`

그런 다음 브라우저를 VSC 변경 사항과 동기화하려면 `8080`을 `3000`으로 바꿔야 합니다. 즉, URL은 다음과 같아야 합니다:

`http://localhost:3000/index.html?profile=Responsive`

{{% alert color="info" %}}
Mac 노트북을 사용하는 경우 이 URL을 열 수 있습니다: `http://windows-10:3000`.
{{% /alert %}}

위 예에서 `.pageheader-subtitle`의 색상을 녹색에서 파란색으로 변경하여 테스트할 수 있습니다. 브라우저와 올바르게 동기화되어 있다면 부제 색상이 파란색으로 변경되는 것을 이미 볼 수 있습니다.

## 요약

위의 루틴을 몇 번 연습하면 금방 마스터할 수 있습니다. 또한 다음 요약을 기억하십시오:

* Powershell이 제대로 작동하는지 확인하십시오. 그렇지 않으면 코드가 Studio Pro에 등록되지 않습니다
* 각 새 프로젝트에 대해 다음을 사용하여 gulp을 설치하십시오:
    * `npm install`
    * `npm install gulp-cli -g`
    * 위 명령이 작동하지 않는 경우 `npm run dev`도 사용할 수 있지만 gulp을 설치하지 않는다는 점을 기억하십시오
* 앱이 Studio Pro에서 로컬로 실행 중인지 확인하십시오 (앱이 실행되지 않으면 변경 사항을 볼 수 없습니다)
* Studio Pro에서 변경하거나 추가한 경우 저장하고 앱을 다시 실행하십시오
* 올바른 폴더에서 작업하고 있는지 확인하십시오 (VSC에서는 항상 **sass** > **custom**; **lib**에서 작업하면 안 됩니다)
* Studio Pro를 통한 인라인 스타일링을 사용하지 마십시오
* `localhost:8080`의 포트를 `localhost:3000`으로 변경하는 것을 잊지 마십시오
* TortoiseSVN 무시 목록에 다음 항목을 추가하십시오:
    * *node_modules*
    * *Gulpfile*
    * *package*

즐거운 스타일링 되세요!

## 문제 해결

Gulp과 Sass를 사용하여 앱의 스타일을 지정할 때 특정 문제가 발생할 수 있습니다. 다음은 일반적인 문제와 해결 단계입니다:

### 테마 폴더 문제

Mendix 8에서 UX-theming을 사용할 때 무한 루프 또는 폴더가 인식되지 않는 문제가 발생할 수 있습니다.

이는 테마 폴더가 변경되었기 때문일 수 있습니다. Mendix 8 테마 구조는 **web** 및 **native** 스타일링 파일에 대해 별도의 폴더를 사용합니다. Gulpfile에서 다음 폴더를 올바르게 설정했는지 확인하십시오:

```js
// What is the name of the style folder in this theme folder?
var sourceStyleFolder = 'theme/styles/web';

// What is the name of the style folder in the deployment folder?
var deploymentStyleFolder = 'styles/web';
```

### Apache Subversion 문제

SVN과 관련된 다른 문제와 *Gulpfile.js*의 가능한 재작성 문제가 발생할 수 있습니다. 이러한 문제를 해결하려면 다음 솔루션을 시도하십시오:

* *node_modules*, *package.json*, *package-lock.json* 및 *Gulpfile.js*를 제거한 다음 Mendix의 [ux-theming 저장소](https://github.com/mendix/ux-theming/)에서 새 복사본으로 교체하십시오
* *node_modules*뿐만 아니라 *Gulpfile.js*도 무시하십시오 — 이는 다시 다운로드하거나 팀의 누군가가 작업하는 경우 프로젝트에 *Gulpfile*을 추가해야 함을 의미합니다
* 최신 LTS 버전의 [Node.js](https://nodejs.org/en/)를 사용하고 있는지 확인하십시오

## 더 읽기

* [Gulp 및 Sass로 스타일링 시작하기](/howto8/front-end/style-with-gulp-and-sass/)
* [Calypso 사용 방법](/howto8/front-end/calypso/)
