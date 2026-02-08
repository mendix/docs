---
title: "Web Extensibility API 시작하기"
linktitle: "시작하기"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/
weight: 2
---

## 소개

Studio Pro 확장 프로그램은 TypeScript를 사용하여 개발할 수 있으며 표준 웹 개발 기술을 사용하여 Studio Pro 개발 환경을 확장할 수 있습니다. 이 문서는 Web Extensibility API를 사용하여 확장 프로그램을 구축하기 위한 기본 개발 환경을 설정하는 방법을 설명합니다.

자세한 내용은 [Mendix Studio Pro Web Extensibility API](http://apidocs.rnd.mendix.com/10/extensions-api/index.html)를 참조하십시오.

### 전제 조건

다음 전제 조건이 필요합니다:

* [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro) 버전 10.21.0 이상
* 확장 프로그램을 개발하기 위한 개발 IDE. Mendix는 [Visual Studio Code](https://code.visualstudio.com/) 사용을 권장합니다.
* Node 최신 버전 22.x.x 설치: https://nodejs.org/en/download

{{% alert color="info" %}}
기본 프레임워크가 크로스 플랫폼이므로 모든 운영 체제에서 확장 프로그램을 구축할 수 있습니다.
{{% /alert %}}

## 첫 번째 확장 프로그램 생성

이 섹션에서는 확장 프로그램을 빌드하고 테스트하는 방법을 보여줍니다.

### 테스트 앱 생성

1. **Blank Web App** 템플릿을 사용하여 새 앱을 만듭니다.
2. 저장소의 지침에 따라 GitHub에서 [Studio Pro Web Extension Template](https://github.com/mendix/web-extension-template)을 설치합니다.

### 확장 프로그램 빌드

Visual Studio Code 내에서 다음 단계를 따르십시오.

1. **File** > **Open Folder**를 선택합니다.
2. 확장 프로그램을 만든 폴더로 이동합니다.
3. **Select Folder**를 클릭합니다.
4. 이 폴더를 신뢰하는지 묻는 메시지가 나타나면 **Yes**를 선택합니다.
5. 상단 메뉴에서 **Terminal** > **New Terminal**을 클릭하여 터미널을 엽니다.
6. 터미널에서 `npm install`을 입력합니다. 이렇게 하면 확장 프로그램에 대한 모든 종속성이 설치됩니다.
7. 터미널에서 `npm run build` 명령을 사용하여 확장 프로그램을 빌드합니다.

완료되면 이제 Mendix 앱에 배포할 수 있는 빌드 아티팩트가 생성됩니다.

### 생성된 확장 프로그램 살펴보기

확장 프로그램을 탐색하여 설치 시 어떤 작업을 수행하는지 이해할 수 있습니다. 다음을 수행하십시오:

1. Explorer 창에서 `src/main/index.ts`로 이동하여 선택하고 파일을 엽니다.

    소스 코드를 읽으면 다음을 볼 수 있습니다:

    a. 7행은 메뉴를 추가합니다

      ```typescript
      await studioPro.ui.extensionsMenu.add({
      menuId: "myextension.MainMenu",
      caption: "MyExtension Menu",
      subMenus: [{ menuId: "myextension.ShowTabMenuItem", caption: "Show tab" }],
      });
      ```

    b. 14행은 탭을 엽니다

      ```typescript
      // 메뉴 항목을 클릭하면 탭을 엽니다
      studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
        if (args.menuId === "myextension.ShowTabMenuItem") {
          studioPro.ui.tabs.open(
            {
              title: "My Extension Tab",
            },
            {
              componentName: "extension/myextension",
              uiEntrypoint: "tab",
            }
          );
        }
      });
      ```

확장 프로그램을 설치하면 Studio Pro 내에 새 메뉴 항목이 표시됩니다.

### 확장 프로그램 테스트

확장 프로그램을 테스트하려면 파일 탐색기에서 다음을 수행하십시오.

1. 확장 프로그램 소스 코드를 추출한 폴더로 이동합니다.
2. `dist` 폴더를 엽니다.
3. `myextension` 폴더를 복사합니다.
4. 앱을 만든 폴더로 이동합니다.
5. `webextensions`라는 새 폴더를 만듭니다.
6. 방금 만든 `webextensions` 폴더에 `myextension` 폴더를 붙여넣습니다. 이렇게 하면 확장 프로그램 파일이 앱에 추가됩니다.
7. 다음 명령줄 파라미터로 Studio Pro를 시작하여 폴더의 확장 프로그램을 사용하도록 지시합니다:

    `--enable-extension-development --webview-remote-debugging`

    이 플래그는 Studio Pro에 다음을 수행하도록 지시합니다:

    * `webextensions` 폴더에서 확장 프로그램 로드
    * 웹 디버깅 도구 활성화

8. Studio Pro에서 새 앱을 엽니다. 상단 메뉴에 새로운 `Extensions` 항목이 표시됩니다.

{{% alert color="warning" %}}
`myextension` 대신 사용되는 확장 프로그램 이름에는 숫자, 문자, 대시 및 밑줄만 포함되어야 합니다. 유효하지 않은 이름의 확장 프로그램은 로드되지 않으며 오류가 표시됩니다.
{{% /alert %}}

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
