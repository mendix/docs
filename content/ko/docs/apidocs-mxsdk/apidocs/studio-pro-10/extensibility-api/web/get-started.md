---
title: "Web Extensibility API 시작하기"
linktitle: "시작하기"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/
weight: 2
---

## 소개

Studio Pro 확장 기능은 TypeScript를 사용하여 개발할 수 있으며, 표준 웹 개발 기술을 사용하여 Studio Pro 개발 환경을 확장합니다. 이 문서에서는 웹 Extensibility API를 사용하여 확장 기능을 빌드하기 위한 기본 개발 환경을 설정하는 방법을 설명합니다.

자세한 내용은 [Mendix Studio Pro Web Extensibility API](http://apidocs.rnd.mendix.com/10/extensions-api/index.html)를 참조하십시오.

### 전제 조건

다음 전제 조건이 필요합니다:

* [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro) 버전 10.21.0 이상 
* 확장 기능을 개발하기 위한 개발 IDE. Mendix는 [Visual Studio Code](https://code.visualstudio.com/) 사용을 권장합니다.
* 최신 버전 22.x.x의 Node 설치: https://nodejs.org/en/download

{{% alert color="info" %}}
확장 기능은 기본 프레임워크가 크로스 플랫폼이므로 모든 운영 체제에서 빌드할 수 있습니다.
{{% /alert %}}

## 첫 번째 확장 기능 만들기

이 섹션에서는 확장 기능을 빌드하고 테스트하는 방법을 보여줍니다.

### 테스트 앱 만들기

1. **Blank Web App** 템플릿을 사용하여 새 앱을 만드십시오.
2. GitHub에서 [Studio Pro Web Extension Template](https://github.com/mendix/web-extension-template)을 리포지토리의 지침에 따라 설치하십시오.

### 확장 기능 빌드하기

Visual Studio Code에서 아래 단계를 따르십시오.

1. **File** > **Open Folder**를 선택하십시오.
2. 확장 기능을 만든 폴더로 이동하십시오.
3. **Select Folder**를 클릭하십시오.
4. 이 폴더를 신뢰하는지 묻는 메시지가 나타나면 **Yes**를 선택하십시오.
5. 상단 메뉴에서 **Terminal** > **New Terminal**을 클릭하여 터미널을 여십시오.
6. 터미널에서 `npm install`을 입력하십시오. 이것은 확장 기능의 모든 의존성을 설치합니다.
7. 터미널에서 `npm run build` 명령을 사용하여 확장 기능을 빌드하십시오.

완료되면 Mendix 앱에 배포할 수 있는 빌드 아티팩트가 생성됩니다.

### 생성된 확장 기능 탐색하기

확장 기능을 탐색하여 설치 시 어떤 동작을 하는지 이해할 수 있습니다. 다음을 수행하십시오:

1. Explorer 창에서 `src/main/index.ts`로 이동하여 파일을 열기 위해 선택하십시오.

    소스 코드를 읽으면 다음을 볼 수 있습니다:

    a. 7번째 줄에서 메뉴를 추가합니다.

      ```typescript
      await studioPro.ui.extensionsMenu.add({
      menuId: "myextension.MainMenu",
      caption: "MyExtension Menu",
      subMenus: [{ menuId: "myextension.ShowTabMenuItem", caption: "Show tab" }],
      });
      ```

    b. 14번째 줄에서 탭을 엽니다.

      ```typescript
      // Open a tab when the menu item is clicked
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

확장 기능을 설치하면 Studio Pro에 새 메뉴 항목이 표시됩니다.

### 확장 기능 테스트하기

확장 기능을 테스트하려면 파일 탐색기에서 다음을 수행하십시오.

1. 확장 기능 소스 코드를 추출한 폴더로 이동하십시오.
2. `dist` 폴더를 여십시오.
3. `myextension` 폴더를 복사하십시오.
4. 앱을 만든 폴더로 이동하십시오.
5. `webextensions`라는 새 폴더를 만드십시오.
6. 방금 만든 `webextensions` 폴더에 `myextension` 폴더를 붙여넣으십시오. 이렇게 하면 확장 기능 파일이 앱에 추가됩니다.
7. 다음 명령줄 매개변수로 Studio Pro를 시작하여 폴더의 확장 기능을 사용하도록 지시하십시오:

    `--enable-extension-development --webview-remote-debugging`

    이 플래그는 Studio Pro에 다음을 수행하도록 지시합니다:

    * `webextensions` 폴더에서 확장 기능 로드
    * 웹 디버깅 도구 활성화

8. Studio Pro에서 새 앱을 여십시오. 상단 메뉴에 새 `Extensions` 항목이 표시됩니다.

{{% alert color="warning" %}}
`myextension` 대신 사용되는 확장 기능 이름은 숫자, 문자, 대시 및 밑줄만 포함해야 합니다. 유효하지 않은 이름의 확장 기능은 로드되지 않으며 오류가 표시됩니다.
{{% /alert %}}

## Extensibility 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 작성해 주십시오.

모든 피드백에 감사드립니다.
