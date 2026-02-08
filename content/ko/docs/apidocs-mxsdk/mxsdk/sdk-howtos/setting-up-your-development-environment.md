---
title: "개발 환경 설정"
url: /apidocs-mxsdk/mxsdk/setting-up-your-development-environment/
weight: 10
---

## 소개

이 문서는 Mendix Platform SDK로 작업을 시작하는 데 필요한 모든 것을 설정하는 과정을 안내합니다. 여기에는 개발 도구 설정과 자동으로 새 Mendix 앱을 부트스트랩하는 첫 번째 SDK 스크립트 생성이 포함됩니다.

## 빠른 설치

이미 경험이 있으시다면, 아래의 빠른 설치 지침을 따르십시오. 그렇지 않으면 이 단락을 건너뛰고 [개발 도구 설정](#setting) 섹션으로 계속하십시오.

빠른 설치의 경우, `node`가 이미 설치되어 있다고 가정합니다.
다음 단계를 사용하여 새 `node` 프로젝트를 설정하고 의존성을 설치하십시오:

```bash
$ mkdir my-app-generator
$ cd my-app-generator
$ npm init --yes
$ npm install mendixmodelsdk mendixplatformsdk --save
$ npm install typescript@~4.6.2 @types/node@^22 --save-dev
```

이제 [스크립트 작업 디렉토리 설정](#setting-working-directory) 섹션의 6단계로 직접 진행하여 TypeScript를 구성할 수 있습니다.

## 개발 도구 설정 {#setting}

개발 도구를 설정하려면 다음 단계를 따르십시오:

1. 최신 LTS 버전의 [Node.js](https://nodejs.org/en/download)를 다운로드하고 설치하십시오.

2. 터미널(Windows의 경우 [명령 프롬프트](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands))을 열고 다음 명령을 실행하십시오:

    ```bash
    $ node --version
    v22.15.0
    ```

    Ubuntu 같은 Debian 기반 Linux 배포판의 경우, [NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions#user-content-installation-instructions)를 참조하여 apt-get 소스를 올바르게 설정하십시오.

    나머지 가이드에서, 위와 같은 코드 블록에서 `$`로 시작하는 줄은 터미널에 입력해야 하는 명령을 나타냅니다. `$` 없이 명령 바로 다음에 오는 줄은 해당 명령의 출력을 나타냅니다.

3. [Visual Studio Code](https://code.visualstudio.com/)(VS Code: Visual Studio와 혼동하지 마십시오)를 설치하십시오. [TypeScript](https://www.typescriptlang.org/)를 잘 지원하는 텍스트 편집기/IDE입니다. 최신 버전(v1.11.0+)인지 확인하십시오. VS Code를 열었을 때 **Help > About**를 통해 사용 중인 버전을 확인하십시오.

## 스크립트 작업 디렉토리 설정 {#setting-working-directory}

스크립트를 위한 작업 디렉토리를 설정하려면 다음 단계를 따르십시오:

1. 새 디렉토리를 만들고 Node.js 패키지 관리자 `npm`으로 사용할 수 있도록 초기화하십시오. `--yes`를 사용하면 몇 가지 중요하지 않은 질문을 건너뜁니다. 이렇게 하면 기본 내용으로 [package.json](https://docs.npmjs.com/files/package.json)이 생성됩니다. 이 파일을 통해 `npm` 패키지를 제어합니다.

    ```bash
    $ mkdir my-app-generator
    $ cd my-app-generator
    $ npm init --yes
    ```

    Visual Studio Code는 Visual Studio와 달리 프로젝트 파일 대신 디렉토리로 작업합니다.

2. Visual Studio Code를 시작하고 방금 만든 디렉토리를 여십시오. 명령줄에서 열려는 디렉토리를 첫 번째 인수로 하여 VS Code의 새 인스턴스를 열 수 있습니다. 예를 들어, 터미널의 현재 작업 디렉토리가 프로젝트 파일이 있는 디렉토리인 경우, 다음 명령을 사용하여 VS Code를 여십시오:

    ```bash
    $ code .
    ```

3. `mendixmodelsdk` 및 `mendixplatformsdk`를 의존성으로 추가하십시오.
    의존성은 `node_modules` 디렉토리에 저장됩니다(필요한 경우 `npm`이 자동으로 생성합니다). 방금 만든 *package.json*을 여십시오. 다음과 같은 [`dependencies` 블록](https://docs.npmjs.com/files/package.json#dependencies)을 추가하십시오:

    ```json
    "dependencies": {
      "mendixmodelsdk": "^4.102.0",
      "mendixplatformsdk": "^5.2.0"
    }
    ```

    Mendix SDK의 새로운 메이저 버전이 릴리스되고(예: 1.0.0에서 2.0.0) 프로젝트 폴더에서 `npm update`를 실행하면, 버전 번호 앞의 `^`가 설치된 SDK 버전이 자동으로 업그레이드되지 않도록 합니다. SDK의 마이너 및 패치 릴리스(예: 1.1.1)만 자동으로 업그레이드됩니다. 그렇지 않으면 스크립트가 의도치 않게 손상될 수 있습니다. 물론 의존성을 직접 수정할 수도 있습니다.

4. `typescript` 및 `@types/node`를 개발 의존성으로 추가하십시오.
    TypeScript, 테스트 라이브러리, 린터, 타입 정의(@types/...) 같은 패키지는 프로덕션에서 앱을 실행하는 데 필요하지 않으며, 코드를 작성하고 테스트할 때만 필요합니다.

    ```json
    "devDependencies": {
      "typescript": "~4.6.2",
      "@types/node": "^22.0.3"
    }
    ```

5. 변경 사항을 저장한 다음 다음 명령을 실행하여 의존성을 설치하십시오:

    ```bash
    $ npm install
    ```

    버전 관리를 사용하는 경우, `node_modules` 디렉토리를 무시해야 합니다. 그렇지 않으면 의존성을 커밋하게 됩니다.

6. VS Code에서 *package.json*과 같은 디렉토리에 [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 파일을 만드십시오. *tsconfig.json* 파일은 TypeScript 컴파일러가 코드를 적절한 방식으로 JavaScript 파일로 컴파일하는 데 사용됩니다. *tsconfig.json* 파일에 다음 내용을 추가하십시오:

    ```json
    {
        "compilerOptions": {
            "target": "es2020",
            "module": "commonjs",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "skipLibCheck": true
        },
        "files": ["script.ts"]
    }
    ```

    컴파일러 옵션은 그대로 두어야 합니다. `files` 지시문은 Node.js 스크립트나 앱을 구성하는 모든 TypeScript 파일의 경로 이름을 포함하는 문자열 배열입니다. 컴파일러가 올바른 파일을 사용하도록 변경할 수 있습니다.

    왼쪽 패널에서 작업 디렉토리 이름 위에 마우스를 올려 VS Code에서 앱 디렉토리에 새 파일을 만드십시오. **New file** 아이콘이 나타나면 클릭하여 새 파일을 만드십시오. VS Code의 기본 편집에 대한 자세한 내용은 [Basic Editing](https://code.visualstudio.com/Docs/editor/codebasics)을 참조하십시오.

## 다음 단계

[첫 번째 스크립트 만들기](/apidocs-mxsdk/mxsdk/creating-your-first-script/)를 계속하십시오.
