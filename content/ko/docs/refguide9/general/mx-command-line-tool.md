---
title: "mx 명령줄 도구"
url: /refguide9/mx-command-line-tool/
weight: 50
description: "mx 명령줄 도구의 옵션을 설명합니다."
---

## 소개

**mx 도구**는 Mendix 앱에서 다양한 작업을 수행하는 데 사용할 수 있는 Windows 및 Linux 명령줄 도구입니다.

## 위치

Mendix Studio Pro에는 mx 명령줄 도구가 포함되어 있습니다. *mx.exe* 실행 파일은 `studiopro.exe`가 포함된 동일한 폴더에서 찾을 수 있습니다(예: *C:\Program Files\Mendix\9.12.2.44241\modeler\mx.exe*).

## mx 도구 옵션

mx 도구는 아래에 설명된 명령을 수행합니다.

### mx convert 명령

`mx convert` 명령은 앱 MPK 파일을 특정 Studio Pro 버전으로 변환합니다. 예를 들어, Mendix 9.12.2.44241용 mx 명령줄 도구를 사용하는 경우 `mx convert`는 앱을 해당 버전으로 변환합니다.

입력은 단일 파일, 디렉터리 또는 여러 파일이 될 수 있습니다.

{{% alert color="info" %}}
mx 도구는 앱을 업그레이드만 할 수 있으며, 버전을 다운그레이드하는 데 사용할 수 없습니다.
{{% /alert %}}

#### 사용법

`mx convert`에 대해 다음 명령 패턴을 사용하십시오:

`mx convert [OPTIONS] INPUT... OUTPUT`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| --- | --- | --- |
| `--help` | `-h` | 도움말 텍스트를 표시하고 종료합니다. |
| `--in-place` | `-p` | 현재 앱 디렉터리를 변환합니다. Mendix 앱이 포함된 폴더를 변환하려면 이 옵션을 사용하십시오. 그렇지 않으면 `mx convert`는 *.mpk* 파일을 변환합니다. |
| `--skip-error-check` | `-s` | 오류를 확인하지 않습니다. 변환 중 앱 오류 검사를 비활성화하려면 이 옵션을 사용하십시오. 생략하면 도구가 앱의 오류, 경고 및 지원 중단 수를 보고하고 변환을 수행합니다. |

`INPUT...`에는 변환해야 하는 하나 이상의 *.mpk* 파일 또는 하나의 디렉터리를 입력합니다.

`OUTPUT`에는 변환된 결과의 출력 위치를 입력합니다. 다음 사항에 유의하십시오:

* `INPUT...`이 단일 파일인 경우 `OUTPUT`은 단일 파일 또는 디렉터리일 수 있습니다. 그렇지 않으면 `OUTPUT`은 디렉터리여야 합니다.
* `--in-place` 옵션을 사용하는 경우 `INPUT...` 폴더가 `OUTPUT` 폴더로도 사용되므로 별도의 `OUTPUT` 폴더를 지정할 필요가 없습니다.

#### 예제

명령 예제는 아래 표에 설명되어 있습니다:

| 예제 | 결과 |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | `C:\MxProjects\App-main` 폴더의 앱을 mx 도구가 번들된 특정 Studio Pro 버전으로 변환합니다. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | *C:\Mendix\* 폴더에 있는 *App1.mpk* 및 *App2.mpk* 앱 패키지를 변환하고 결과를 `C:\Mendix\ConvertedProjects\` 폴더에 넣습니다. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | `C:\Mendix\Packages\` 폴더의 모든 앱 패키지를 오류 검사 없이 `C:\Mendix\ConvertedPackages\` 폴더로 변환합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 반환 코드 | 설명 |
| --- | --- |
| 0 | 변환이 성공했습니다. |
| 1 | 내부 오류가 발생했습니다. |
| 2 | 명령줄 옵션에 문제가 있습니다. |
| 3 | 변환에 실패했습니다. |

### mx create-project 명령

`mx create-project` 명령은 Studio Pro에서 새 앱을 생성합니다. 앱 버전은 도구가 번들된 버전에 따라 다릅니다. 예를 들어, Studio Pro 8.1.0.58215용 mx 도구를 사용하는 경우 `mx create project`는 해당 버전에서 새 앱을 생성합니다.

#### 사용법

다음 명령 패턴을 사용하십시오: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 기본값 | 결과 |
| --- | --- | --- |
| `app-name` | App | 앱에 지정된 앱 이름을 지정합니다. |
| `output-dir` | 현재 디렉터리 | 앱을 생성할 디렉터리입니다. |
| `language-code` | en_US | 앱의 기본 언어입니다. |
| `sprintr-app-id` | 선택 사항 | **Apps**에서 제공된 [앱](/developerportal/#my-apps)의 [피드백 기능](/developerportal/app-insights/feedback/)과 앱을 연결합니다. 값은 GUID입니다. [Apps](https://sprintr.home.mendix.com/)에서 앱에 접근할 때 이 ID는 브라우저 URL에서 찾을 수 있습니다(예: `1a428ea7-b00e-4166-9b23-20b7be88a40e`). |

`TEMPLATE-MPK-FILE`은 Mendix 앱 패키지(*.mpk*) 파일의 선택적 경로입니다. 이 인수를 생략하면 기본 빈 프로젝트 템플릿으로 앱이 생성됩니다.

#### 예제

명령 예제는 아래 표에 설명되어 있습니다:

| 예제 | 결과 |
| --- | --- |
| `mx create-project` | 모든 기본 매개변수를 사용하여 현재 폴더에 앱을 생성합니다. |
| `mx create-project --app-name MyFirstApp --output-dir C:\Projects\MyFirstApp` | 모든 기본 매개변수를 사용하여 *C:\Projects\MyFirstApp* 폴더에 `MyFirstApp`이라는 앱을 생성합니다. |
| `mx create-project C:\Templates\ExpenseReportTemplate.mpk` | *C:\Templates\ExpenseReportTemplate.mpk*에 있는 템플릿에서 기본 매개변수로 앱을 생성합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 반환 코드 | 설명 |
| --- | --- |
| 0 | 앱 생성이 성공했습니다. |
| 1 | 내부 오류가 발생했습니다. |
| 2 | 명령줄 옵션에 문제가 있습니다. |

### mx check 명령 [버전 9.10+] {#check}

`mx check` 명령은 앱 MPR 파일에서 오류, 경고, 지원 중단 또는 성능 권장 사항과 같은 문제를 확인합니다.

{{% alert color="info" %}}
MPR 파일은 mx와 동일한 버전이어야 합니다.
{{% /alert %}}

#### 사용법

`mx check`에 대해 다음 명령 패턴을 사용하십시오:

`mx check [OPTIONS] INPUT [Optional path to exported Suppress Warnings file (JSON)]`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| ---------------- | -------- | ------------------------------------------------------------ |
| `--help`         | `-h`     | 도움말 텍스트를 표시하고 종료합니다. |
| `--warnings`     | `-w`     | 출력에 경고를 포함합니다 |
| `--deprecations` | `-d`     | 출력에 지원 중단을 포함합니다 |
| `--performance`  | `-p`     | [버전 9.16+] 출력에 성능 검사를 포함합니다(성능 권장 사항은 오류가 없는 경우에만 출력됩니다) |

{{% alert color="info" %}}
MPR의 오류는 항상 보고됩니다.
{{% /alert %}}

`INPUT`에는 단일 *.mpr* 파일을 입력합니다.

Studio Pro 9.17부터 내보낸 경고 억제 파일(JSON 파일)의 경로를 선택적으로 지정할 수 있습니다. 이는 `mx check -w`가 앱 디렉터리의 *project-settings.user.json* 파일에서 읽는 기본 동작 대신 JSON 파일의 억제된 경고 목록을 사용한다는 것을 의미합니다.

#### 예제

명령 예제는 아래 표에 설명되어 있습니다:

| 예제 | 결과 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mx check --help`                                            | check 명령에 대한 도움말 텍스트를 표시합니다. |
| `mx check C:\MxProjects\App-main\App-main.mpr`               | `C:\MxProjects\App-main\App-main.mpr`의 앱에서 오류를 확인합니다. |
| `mx check C:\MxProjects\App-main\App-main.mpr -p`            | `C:\MxProjects\App-main\App-main.mpr`의 앱에서 오류와 성능 권장 사항을 확인합니다. |
| `mx check C:\MxProjects\App-main\App-main.mpr --warnings --deprecations` | `C:\MxProjects\App-main\App-main.mpr`의 앱에서 오류, 경고 및 지원 중단을 확인합니다. 억제된 경고는 앱 디렉터리 내의 *project-settings.user.json* 파일에서 읽습니다. |
| `mx check C:\MxProjects\App-main\App-main.mpr c:\MxFiles\my-exported-suppressed-warnings.json --warnings` | `C:\MxProjects\App-main\App-main.mpr`의 앱에서 오류와 경고를 확인합니다. 억제된 경고는 JSON 파일 *my-exported-suppressed-warnings.json*에서 읽습니다. |
| `mx check C:\MxProjects\App-main\App-main.mpr -w -d -p`      | `C:\MxProjects\App-main\App-main.mpr`의 앱에서 오류, 경고, 지원 중단 및 성능 권장 사항을 확인합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 반환 코드 | 설명 |
| ----------- | --------------------------------------- |
| 0           | 문제가 발견되지 않았습니다. |
| 1           | 오류가 발견되었습니다. |
| 2           | 경고가 발견되었습니다. |
| 4           | 지원 중단이 발견되었습니다. |
| 8           | 성능 권장 사항이 발견되었습니다. |

이러한 값은 오류, 경고, 지원 중단 또는 성능 권장 사항이 혼합된 경우를 나타내기 위해 논리적 OR로 결합됩니다.

예:

* 오류와 경고가 발견된 경우 3
* 오류, 경고 및 지원 중단이 발견된 경우 7

### mx show-version 명령 [버전 9.4+]

`mx show-version` 명령은 앱을 마지막으로 열 때 사용된 Studio Pro 버전을 보고합니다.

입력은 단일 MPR 파일입니다.

{{% alert color="info" %}}
MPR 파일은 mx와 동일한 버전이어야 합니다.
{{% /alert %}}

#### 사용법

`mx show-version`에 대해 다음 명령 패턴을 사용하십시오:

`mx show-version [OPTIONS] INPUT`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| --- | --- | --- |
| `--help` | `-h` | 도움말 텍스트를 표시하고 종료합니다. |

`INPUT`에는 *.mpr* 파일을 입력합니다.

#### 예제

명령 예제는 아래 표에 설명되어 있습니다:

| 예제 | 결과 |
| --- | --- |
| `mx show-version --help` | `show-version` 명령에 대한 도움말 텍스트를 표시합니다. |
| `mx show-version C:\Mendix\App1\App1.mpr` | 앱을 마지막으로 열 때 사용된 Studio Pro 버전을 표시합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 반환 코드 | 설명 |
| --- | --- |
| 0 | 명령이 성공적으로 실행되었습니다. |

### mx show-java-version 명령 [버전 9.24.26+]{#show-java-version}

`mx show-java-version` 명령은 앱의 구성된 Java 버전을 보고합니다.

입력은 단일 MPR 파일입니다.

{{% alert color="info" %}}
MPR 파일은 mx와 동일한 버전이어야 합니다.
{{% /alert %}}

#### 사용법

`mx show-java-version`에 대해 다음 명령 패턴을 사용하십시오:

`mx show-java-version INPUT`

`INPUT`에는 *.mpr* 파일을 입력합니다.

#### 예제

명령 예제는 아래 표에 설명되어 있습니다:

| 예제 | 결과 |
| --- | --- |
| `mx show-java-version C:\Mendix\App1\App1.mpr` | 앱의 구성된 Java 버전을 표시합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 반환 코드 | 설명 |
| --- | --- |
| 0 | 명령이 성공적으로 실행되었습니다. |
| 1 | 명령이 실패했습니다. 예를 들어 *.mpr* 파일을 찾을 수 없는 경우입니다. |

### mx merge 명령 [버전 9.17+]

mx merge 명령은 공통 기본 커밋을 가진 두 MPR 파일의 3-way 병합을 수행합니다.

입력은 세 개의 MPR 파일입니다: base, mine, theirs

#### 사용법

`mx merge`에 대해 다음 명령 패턴을 사용하십시오:

`mx merge [OPTIONS] BASE MINE THEIRS`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | 도움말 텍스트를 표시하고 종료합니다. |

`BASE`는 공통 기본 커밋입니다.

`MINE`은 병합할 대상 버전입니다. 이 MPR에 병합 결과가 포함됩니다.

`THEIRS`는 변경 사항을 병합할 소스 버전입니다.

#### 충돌

병합 중 충돌이 있는 경우, Studio Pro에서 앱을 열어 해결해야 합니다.

#### 예제

`mx merge C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr C:\MyApp-FeatureBranch\MyApp.mpr`

#### 반환 코드

| 반환 코드 | 설명 |
| ----------- | ------------------------------------------------------------ |
| 0           | 병합이 성공적이며 충돌이 없습니다. *MINE.mpr*에 병합 결과가 포함됩니다. |
| 1           | 명령이 유효하지 않습니다. 입력 매개변수를 확인하십시오. |
| 2           | 충돌이 감지되었습니다. *MINE.mpr*을 Studio Pro에서 열어 해결하십시오. |
| 3           | 이 코드는 예외를 의미합니다 – 병합 중 오류가 발생했습니다. 오류 세부 사항이 명령줄 출력에 인쇄됩니다. |
| 4           | 지원되지 않는 버전입니다. |

### mx show-app-version 명령 [버전 9.24.2+]

mx show-app-version 명령을 사용하면 솔루션의 [게시자 측](/appstore/creating-content/sol-solutions-guide/) 버전(즉, 개발하는 솔루션의 버전)과 앱이 기반으로 하는 솔루션 패키지의 [소비자 측](/appstore/creating-content/sol-solutions-impl/) 버전(즉, 솔루션을 소비했을 때의 솔루션 패키지 버전)을 확인할 수 있습니다.

#### 사용법

`mx show-app-version`에 대해 다음 명령 패턴을 사용하십시오:

`mx show-app-version MPR-FILE [OPTIONS]`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| ------------ | -------- | --------------------------------- |
| `--based-on` | `-b`     | `Based on` 버전을 표시합니다. |
| `--help`     | `-h`     | 도움말 텍스트를 표시하고 종료합니다. |

MPR-FILE에는 *.mpr* 파일을 입력합니다.

`--based on` 버전은 현재 앱이 기반으로 하는 솔루션 패키지(.mxsolution)의 버전입니다.

#### 예제

`mx show-app-version C:\MyApp\MyApp.mpr`

`mx show-app-version C:\MyApp\MyApp.mpr -b`

#### 반환 코드

이 명령은 모든 app-version 관련 명령에 대한 공통 형식 종료 코드를 사용합니다.

명령은 요청된 버전을 출력합니다. 오류가 없으면 종료 코드는 0입니다.

오류의 경우 종료 코드는 세 자리 XYZ로 구성됩니다:

**X:** 오류 유형을 결정합니다:

 1: 매개변수 유효성 검사 오류.

 2: 출력 관련 오류.

 3: 작업 실행 관련 오류.

**Y:** 오류가 관련된 매개변수의 번호입니다(해당하는 경우).

**Z:** 다음 오류 세부 사항을 결정합니다:

 1: 파일을 찾을 수 없습니다.

 2: 앱이 너무 오래되었습니다.

 3: 배포가 활성화되지 않았습니다.

 4: 버전이 SemVer 형식이 아닙니다.

 5: 앱이 솔루션 패키지에서 초기화되지 않았습니다.

 아래 표는 반환 코드와 그 의미를 보여줍니다:

| 반환 코드 | 설명 |
| ----------- | ------------------------------------------------------------ |
| 0           | 오류 없음 |
| 315         | -b가 지정되었지만 앱이 솔루션에 기반하지 않는 경우. |
| 313         | -b가 지정되지 않았지만 앱에 대해 솔루션 배포가 활성화되지 않은 경우. |

### mx set-app-version 명령 [버전 9.24.2+]

mx set-app-version 명령을 사용하면 [솔루션 빌드 시](/appstore/creating-content/sol-solutions-guide/) 솔루션의 버전을 설정할 수 있습니다.

#### 사용법

`mx set-app-version`에 대해 다음 명령 패턴을 사용하십시오:

`mx set-app-version MPR-FILE VERSION`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | 도움말 텍스트를 표시하고 종료합니다. |

MPR-FILE에는 *.mpr* 파일을 입력합니다.

VERSION에는 [SemVer](https://semver.org) 형식의 버전을 입력합니다.

#### 예제

`mx set-app-version C:\MyApp\MyApp.mpr 1.2.3`

#### 반환 코드

이 명령은 모든 app-version 관련 명령에 대한 공통 형식 종료 코드를 사용합니다.

명령은 요청된 버전을 출력합니다. 오류가 없으면 종료 코드는 0입니다.

오류의 경우 종료 코드는 세 자리 XYZ로 구성됩니다:

**X:** 오류 유형을 결정합니다:

 1: 매개변수 유효성 검사 오류.

 2: 출력 관련 오류.

 3: 작업 실행 관련 오류.

**Y:** 오류가 관련된 매개변수의 번호입니다(해당하는 경우).

**Z:** 오류 세부 사항을 결정합니다:

 1: 파일을 찾을 수 없습니다.

 2: 앱이 너무 오래되었습니다.

 3: 배포가 활성화되지 않았습니다.

 4: 버전이 SemVer 형식이 아닙니다.

 5: 앱이 솔루션 패키지에서 초기화되지 않았습니다.

 아래 표는 반환 코드와 그 의미를 보여줍니다:

| 반환 코드 | 설명 |
| ----------- | -------------------------------------------------------- |
| 0           | 오류 없음 |
| 124         | 버전이 SemVer 형식이 아닌 경우 |
| 313         | 앱에 대해 솔루션 배포가 활성화되지 않은 경우 |

### 문서화되지 않은 옵션

mx 도구에는 이 문서에 설명되지 않은 옵션도 포함되어 있습니다. 이러한 옵션은 Mendix 내부 사용을 위한 것이며 공식적으로 지원되지 않습니다. 이는 향후 변경될 수 있지만, 이러한 옵션은 자기 책임 하에만 사용할 수 있습니다.
