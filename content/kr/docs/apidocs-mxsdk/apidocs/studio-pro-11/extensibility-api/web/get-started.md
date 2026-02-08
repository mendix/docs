---
title: "Web Extensibility API 시작하기"
linktitle: "시작하기"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/
weight: 2
---

## 소개

Studio Pro 확장 프로그램은 TypeScript를 사용하여 개발할 수 있으며 표준 웹 개발 기술을 사용하여 Studio Pro 개발 환경을 확장할 수 있습니다. 이 문서는 Web Extensibility API를 사용하여 확장 프로그램을 구축하기 위한 기본 개발 환경을 설정하는 방법을 설명합니다.

자세한 내용은 [Mendix Studio Pro Web Extensibility API 참조 문서](http://apidocs.rnd.mendix.com/11/extensions-api/index.html)를 참조하십시오.

### 전제 조건

다음 전제 조건이 필요합니다:

* [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro) 버전 11.2.0 이상. 
* 확장 프로그램을 개발하기 위한 개발 IDE. Mendix는 [Visual Studio Code](https://code.visualstudio.com/) 사용을 권장합니다.
* Node 최신 버전 22.x.x 설치: https://nodejs.org/en/download.

{{% alert color="info" %}}
기본 프레임워크가 크로스 플랫폼이므로 모든 운영 체제에서 확장 프로그램을 구축할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
확장 프로그램 개발은 앱의 Preferences에서 [확장 프로그램 개발(Extension Development)](/refguide/preferences-dialog/#extension-development) 설정을 활성화하거나, `--enable-extension-development` 기능 플래그로 Studio Pro를 시작해야만 가능합니다.
{{% /alert %}}

## 첫 번째 확장 프로그램 생성

이 섹션에서는 확장 프로그램을 빌드하고 테스트하는 방법을 보여줍니다.

### 테스트 앱 생성

**Blank Web App** 템플릿을 사용하여 새 앱을 만듭니다.

Studio Pro에서 **App** 메뉴 > **Show App Directory in Explorer** (또는 **Show App Directory in Finder**)를 클릭하여 애플리케이션 `.mpr` 파일이 포함된 애플리케이션 디렉토리를 열 수도 있습니다.

### 확장 프로그램 생성

확장 프로그램 개발을 가속화하기 위해 Mendix는 사용자 정의 가능한 샘플 확장 프로그램을 생성하는 확장 프로그램 제너레이터를 제공합니다.

제너레이터를 사용하려면 원하는 소스 코드 디렉토리로 이동하여 `npm create @mendix/extension@latest` 명령을 실행하십시오. `npm`에서 제너레이터 설치 권한을 요청할 수 있습니다. 설치 후 확장 프로그램을 구성하는 데 도움이 되는 일련의 질문을 안내받게 됩니다.

다음 사항을 질문받게 됩니다:

* 프로그래밍 언어 선택 (튜토리얼에서는 TypeScript 사용)
* 확장 프로그램 이름 지정
* 확장 프로그램 UI에 React를 사용할지 여부 선택
  
다음 두 질문은 선택 사항이지만 Visual Studio Code에서 직접 디버깅 및 배포가 가능하므로 권장됩니다:

* Studio Pro 실행 파일의 경로 지정 (Visual Studio Code가 디버깅을 위해 Studio Pro에 자동으로 연결할 수 있게 함)
* 애플리케이션 `.mpr` 패키지의 위치 지정 (확장 프로그램 빌드를 앱에 자동으로 배포할 수 있게 함)

마지막 질문에서는 대상으로 하는 Studio Pro 버전을 선택할 수 있습니다. Mendix는 버전 11을 선택할 것을 권장합니다.

{{% alert color="info" %}}
Windows 머신에서 Studio Pro 실행 파일은 일반적으로 `C:\Program Files\Mendix\<version>\modeler\studiopro.exe`에 있습니다. 정확한 경로를 찾으려면 다음 단계를 따르십시오:

1. Studio Pro를 실행합니다.
2. 작업 표시줄 아이콘을 마우스 오른쪽 버튼으로 클릭한 다음 `Mendix Studio Pro 11.2.0`(버전은 다를 수 있음)을 마우스 오른쪽 버튼으로 클릭합니다.
3. **Properties**를 선택합니다. **Target** 필드에 실행 파일 경로가 표시됩니다.
{{% /alert %}}

설정을 완료하면 확장 프로그램의 이름을 딴 새 디렉토리가 생성되고 확장 프로그램의 소스 코드가 포함됩니다.

### 생성된 확장 프로그램 살펴보기

다음 예에서 확장 프로그램의 이름은 `myextension`이며 Visual Studio Code를 사용하여 살펴보고 있습니다.

시작하기 전에 확장 프로그램이 Studio Pro API 인스턴스를 가져와야 합니다. 이를 위해 Explorer 창에서 `src/main/index.ts`로 이동하여 선택하고 파일을 엽니다.

소스 코드에서 다음을 볼 수 있습니다:

1. `getStudioProApi`를 호출하여 Studio Pro API 인스턴스를 가져옵니다.
   
    ```typescript
    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);

2. 탭을 여는 메뉴가 추가됩니다:

    ```typescript
    await studioPro.ui.extensionsMenu.add({
        menuId: "myextension.MainMenu",
        caption: "MyExtension 메뉴",
        subMenus: [
            {
                menuId: "myextension.ShowMenu",
                caption: "탭 표시",
                // 메뉴 항목을 클릭하면 탭을 엽니다
                action: async () => {
                    await studioPro.ui.tabs.open(
                        {
                            title: "MyExtension 탭"
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab"
                        }
                    )
                }
            }
        ],
    });
    ```

3. `build-extension.mjs`로 이동하면 6행을 변경하여 빌드 후 확장 프로그램이 설치될 디렉토리를 선택할 수 있습니다:

     ```typescript
     const appDir = "C:\TestApps\AppTestExtensions"
     ```

4. `.vscode\launch.json` 파일은 실행 구성을 지정하고 디버깅을 활성화합니다. 다음 줄은 Studio Pro가 실행되는 방식을 지정합니다:
     
     ```json
     …
     "runtimeExecutable": "C:\Program Files\Mendix\11.2.0\modeler\studiopro.exe",
     "runtimeArgs": ["C:\TestApps\AppTestExtensions\AppTestExtensions.mpr", "--enable-extension-development", "--enable-web-extensions"],
     …
     ```

확장 프로그램을 설치하면 Studio Pro 내에 새 메뉴 항목이 표시됩니다.

### 확장 프로그램 빌드, 설치 및 디버깅

다음 단계는 Visual Studio Code 내에서 수행됩니다:

1. **File** > **Open Folder**를 선택합니다.
2. 확장 프로그램을 만든 폴더로 이동합니다.
3. **Select Folder**를 클릭합니다.
4. 이 폴더를 신뢰하는지 묻는 메시지가 나타나면 **Yes**를 선택합니다.
5. 상단 메뉴에서 **Terminal** > **New Terminal**을 클릭하여 터미널을 엽니다.
6. 터미널에서 `npm install`을 입력합니다. 이렇게 하면 확장 프로그램에 대한 모든 종속성이 설치됩니다.
7. 터미널에서 `npm run build` 명령을 사용하여 확장 프로그램을 빌드합니다. 이전 단계에서 `.mpr` 파일 경로를 제공한 경우 확장 프로그램이 애플리케이션 디렉토리에 설치됩니다.

확장 프로그램 제너레이터의 마지막 두 질문에 응답하고 확장 프로그램을 빌드 및 설치한 경우 아래 단계에 따라 디버깅할 수 있습니다:

1. Visual Studio Code에서 확장 프로그램 소스 코드를 열고 중단점을 설정합니다.
2. 사이드 패널에서 **Run and Debug**를 선택합니다.
3. 패널 상단의 재생 버튼을 클릭합니다(또는 F5를 누릅니다).

그러면 Studio Pro가 확장 프로그램 개발 모드에서 실행되고 구성된 애플리케이션이 열립니다. 상단 메뉴에 새로운 `Extensions` 항목이 표시됩니다.

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
