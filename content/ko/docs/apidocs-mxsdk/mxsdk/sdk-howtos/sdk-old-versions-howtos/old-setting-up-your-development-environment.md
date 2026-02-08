---
title: "개발 환경 설정 (이전 버전)"
linktitle: "개발 환경 설정"
url: /apidocs-mxsdk/mxsdk/old-setting-up-your-development-environment/
weight: 1
---

## 소개

이 가이드는 Mendix Platform SDK로 작업을 시작하는 데 필요한 모든 것을 설정하는 과정을 안내합니다. 여기에는 개발 도구 설정과 자동으로 새 Mendix 앱을 부트스트랩하는 첫 번째 SDK 스크립트 생성이 포함됩니다.

## 빠른 설치

이미 경험이 있으시다면, 아래의 빠른 설치 지침을 따르십시오. 그렇지 않으면 이 단락을 건너뛰고 [개발 도구 설정](#setting) 섹션으로 계속하십시오.

빠른 설치의 경우, `node`가 이미 설치되어 있다고 가정합니다.

다음 단계를 사용하여 새 `node` 프로젝트를 설정하고 의존성을 설치하십시오:

```bash
$ mkdir my-app-generator
$ cd my-app-generator
$ npm init --yes
$ npm install -g typescript
$ npm install mendixmodelsdk mendixplatformsdk when @types/when --save
$ tsc --init --target es2018
```

## 개발 도구 설정 {#setting}

개발 도구를 설정하려면 다음 단계를 따르십시오:

1. 최신 LTS 버전의 [Node.js](https://nodejs.org/)를 설치하십시오. 다운로드가 필요한 경우 [Node.js Downloads](https://nodejs.org/en/download/releases/)에서 찾을 수 있습니다.
2. 터미널(Windows의 경우 [명령 프롬프트](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands))을 열고 다음 명령을 실행하십시오:

    ```bash
    $ node --version
    v10.13.0
    ```

    Ubuntu 같은 Debian 기반 Linux 배포판의 경우, 이 [설치 지침](https://github.com/nodesource/distributions#user-content-installation-instructions)을 참조하여 `apt-get` 소스를 올바르게 설정하십시오.

    {{% alert color="info" %}}이 시리즈의 나머지 가이드에서, 위와 같은 블록에서 `$`로 시작하는 줄은 터미널에 입력할 명령을 나타냅니다. `$` 없이 따라오는 줄은 명령의 출력을 나타냅니다.
    {{% /alert %}}

3. [Visual Studio Code](https://code.visualstudio.com/)(Visual Studio와 혼동하지 마십시오)를 설치하십시오. [TypeScript](https://www.typescriptlang.org/)를 잘 지원하는 텍스트 편집기/IDE입니다. 최신 버전(v1.11.0+)인지 확인하십시오(**Help** > **About**를 통해 사용 중인 버전을 확인할 수 있습니다).
4. [`npm`](https://www.npmjs.com/), Node.js의 패키지 관리자로 TypeScript 3.6.2(또는 그 이상)를 설치하십시오:

    ```bash
    $ npm install -g typescript
    ```

5. 다음 명령을 사용하여 PATH의 TypeScript 컴파일러 버전을 확인하십시오:

    ```bash
    $ tsc --version
    Version 3.6.2 (or higher)
    ```

    버전 번호가 훨씬 낮다면, 이전 설치에서 남은 오래된 TypeScript SDK가 시스템에 있을 수 있습니다. 오래된 TypeScript SDK를 제거하거나, 시스템의 PATH 환경 변수에서 오래된 TypeScript SDK를 제거하여 우회할 수 있습니다.

## 스크립트 작업 디렉토리 설정

스크립트를 위한 작업 디렉토리를 설정하려면 다음 단계를 따르십시오:

1. 새 디렉토리를 만들고 Node.js 패키지 관리자 `npm`으로 사용할 수 있도록 초기화하십시오. `--yes`를 사용하면 몇 가지 중요하지 않은 질문을 건너뜁니다. 이렇게 하면 기본 내용으로 [package.json](https://docs.npmjs.com/files/package.json)이 생성됩니다. 이 파일을 통해 `npm` 패키지를 제어합니다.

    ```bash
    $ mkdir my-app-generator
    $ cd my-app-generator
    $ npm init --yes
    ```

    {{% alert color="info" %}}Visual Studio Code는 프로젝트 파일 대신 디렉토리로 작업합니다.{{% /alert %}}

2. Visual Studio Code를 시작하고 방금 만든 디렉토리를 여십시오. 명령줄에서 열려는 디렉토리를 첫 번째 인수로 하여 VSC의 새 인스턴스를 열 수 있습니다. 예를 들어, 터미널의 현재 작업 디렉토리가 프로젝트 파일이 있는 디렉토리인 경우, 다음 명령을 사용하여 VSC를 여십시오:

    ```bash
    $ code .
    ```

3. `mendixmodelsdk`, `mendixplatformsdk`, 및 `when.js`를 의존성으로 추가하십시오. 의존성은 `node_modules` 디렉토리에 저장됩니다(필요한 경우 `npm`이 자동으로 생성합니다). 방금 만든 *package.json*을 열고 다음과 같은 `dependencies` [블록](https://docs.npmjs.com/files/package.json#dependencies)을 추가하십시오:

    ```json
    "dependencies": {
      "@types/when": "^2.4.33",
      "mendixmodelsdk": "^4.35.0",
      "mendixplatformsdk": "^4.1.1",
      "when": "^3.7.8"
    }
    ```

    Mendix SDK의 새로운 메이저 버전이 릴리스되고(예: 1.0.0에서 2.0.0) 앱 폴더에서 `npm update`를 실행하면, 버전 번호 앞의 `^`가 설치된 SDK 버전이 자동으로 업그레이드되지 않도록 합니다. SDK의 마이너 및 패치 릴리스(예: 1.1.1)만 자동으로 업그레이드됩니다. 그렇지 않으면 스크립트가 의도치 않게 손상될 수 있습니다. 물론 의존성을 직접 수정할 수도 있습니다.

4. 변경 사항을 저장한 다음 다음을 실행하여 의존성을 설치하십시오:

    ```bash
    $ npm install
    ```

    버전 관리를 사용하는 경우 `node_modules` 디렉토리를 무시해야 합니다. 그렇지 않으면 의존성을 커밋하게 됩니다.

5. VSC에서 *package.json* 옆에 [tsconfig.json](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json) 파일을 만드십시오. *tsconfig.json* 파일은 TypeScript 컴파일러가 코드를 적절한 방식으로 JS 파일로 컴파일하는 데 사용됩니다. 다음 내용으로 만드십시오.

    ```json
    {
    	"compilerOptions" : {
    		"module" : "commonjs",
    		"target" : "es2018",
            "strict": true
    	},
    	"files" : [
    		"script.ts"
    	]
    }
    ```

    컴파일러 옵션은 그대로 두어야 합니다. `files` 지시문은 Node.js 스크립트나 앱을 구성하는 모든 TypeScript 파일의 경로 이름을 포함하는 문자열 배열입니다. 컴파일러가 올바른 파일을 사용하도록 변경할 수 있습니다.

    왼쪽 패널에서 작업 디렉토리 이름 위에 마우스를 올려 Visual Studio Code에서 앱 디렉토리에 새 파일을 만드십시오. **New file** 아이콘이 나타나면 클릭하여 새 파일을 만드십시오. VSC의 기본 편집에 대한 자세한 내용은 [Basic Editing](https://code.visualstudio.com/Docs/editor/codebasics)을 참조하십시오.

## 다음 단계

[첫 번째 스크립트 만들기 방법 (이전 버전)](/apidocs-mxsdk/mxsdk/old-creating-your-first-script/)을 계속하십시오.
