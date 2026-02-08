---
title: "mx 명령줄 도구"
url: /refguide8/mx-command-line-tool/
weight: 50
description: "mx 명령줄 도구의 옵션을 설명합니다."
---

## 소개

**mx 도구**는 Mendix 앱에 유용한 작업을 수행할 수 있는 Windows 및 Linux 명령줄 도구입니다.

## 위치

Mendix Studio Pro에는 mx 명령줄 도구가 포함되어 있습니다. 실행 파일 *mx.exe*는 `studiopro.exe`가 포함된 동일한 폴더에서 찾을 수 있습니다(예: *C:\Program Files\Mendix\8.1.0.58215\modeler\mx.exe*).

## mx 도구 옵션

mx 도구는 아래에 설명된 옵션을 사용할 수 있습니다.

### mx convert 명령

`mx convert` 명령은 앱을 특정 Studio Pro 버전으로 변환합니다. 예를 들어, Mendix 8.1.0.58215용 mx 명령줄 도구를 사용하는 경우 `mx convert`는 앱을 해당 버전으로 변환합니다.

입력은 단일 파일, 디렉토리 또는 여러 파일이 될 수 있습니다.

{{% alert color="info" %}}
mx 도구는 프로젝트를 업그레이드만 할 수 있으며 버전을 다운그레이드하는 데 사용할 수 없습니다.
{{% /alert %}}

#### 사용법

`mx convert`에 대해 다음 명령 패턴을 사용하십시오:

`mx convert [OPTIONS] INPUT... OUTPUT`

`OPTIONS`는 아래 표에 설명되어 있습니다:

| 옵션 | 단축키 | 결과 |
| --- | --- | --- |
| `--help` | `-h` | 도움말 텍스트를 표시하고 종료합니다. |
| `--in-place` | `-p` | 현재 앱 디렉토리를 변환합니다. Mendix 앱이 포함된 폴더를 변환하려면 이 옵션을 사용하십시오. 그렇지 않으면 `mx convert`는 *.mpk* 파일을 변환합니다. |
| `--skip-error-check` | `-s` | 오류를 확인하지 않습니다. 변환 중 앱 오류 검사를 비활성화하려면 이 옵션을 사용하십시오. 생략하면 도구가 앱의 오류, 경고 및 더 이상 사용되지 않는 항목의 수를 보고하고 변환을 수행합니다. |

`INPUT...`에는 변환해야 하는 하나 이상의 *.mpk* 파일 또는 하나의 디렉토리를 입력하십시오.

`OUTPUT`에는 변환된 결과의 출력 위치를 입력하십시오. 다음 사항을 유의하십시오:

* `INPUT...`이 단일 파일인 경우 `OUTPUT`은 단일 파일 또는 디렉토리일 수 있으며, 그렇지 않으면 `OUTPUT`은 디렉토리여야 합니다.
* `--in-place` 옵션을 사용할 때 `INPUT...` 폴더가 `OUTPUT` 폴더로도 사용되므로 별도의 `OUTPUT` 폴더를 지정할 필요가 없습니다.

#### 예시

명령 예시는 아래 표에 설명되어 있습니다:

| 예시 | 결과 |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | `C:\MxProjects\App-main` 폴더의 앱을 mx 도구가 번들된 특정 Studio Pro 버전으로 변환합니다. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | *C:\Mendix\* 폴더에 있는 *App1.mpk* 및 *App2.mpk* 앱 패키지를 변환하고 결과를 `C:\Mendix\ConvertedProjects\` 폴더에 넣습니다. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | `C:\Mendix\Packages\` 폴더의 모든 앱 패키지를 오류 확인 없이 `C:\Mendix\ConvertedPackages\` 폴더로 변환합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 종료 코드 | 설명 |
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
| --- | --- | ---
| `app-name` | App | 앱에 지정된 앱 이름을 할당합니다. |
| `output-dir` | 현재 디렉토리 | 프로젝트를 생성할 디렉토리입니다. |
| `language-code` | 선택 사항 | 앱의 기본 언어입니다. |
| `sprintr-app-id` | 선택 사항 | 앱 [피드백 기능](/developerportal/app-insights/feedback/)을 **Apps**의 제공된 [앱](/developerportal/#my-apps)과 연결합니다. |

`TEMPLATE-MPK-FILE`은 Mendix 앱 패키지(*.mpk*) 파일에 대한 선택적 경로입니다. 이 인수가 생략되면 기본 빈 프로젝트 템플릿으로 앱이 생성됩니다.

#### 예시

명령 예시는 아래 표에 설명되어 있습니다:

| 예시 | 결과 |
| --- | --- |
| `mx create-project` | 모든 기본 매개변수를 사용하여 현재 폴더에 앱을 생성합니다. |
| `mx create-project --app-name "MyFirstApp" --output-dir "C:/Projects/MyFirstApp"` | 모든 기본 매개변수를 사용하여 *C:/Projects/MyFirstApp* 폴더에 `MyFirstApp`이라는 앱을 생성합니다. |
| `mx create-project "C:/Templates/ExpenseReportTemplate.mpk"` | *C:/Templates/ExpenseReportTemplate.mpk*에 있는 템플릿에서 기본 매개변수로 앱을 생성합니다. |

#### 반환 코드

반환 코드는 아래 표에 설명되어 있습니다:

| 종료 코드 | 설명 |
| --- | --- |
| 0 | 앱 생성이 성공했습니다. |
| 1 | 내부 오류가 발생했습니다. |
| 2 | 명령줄 옵션에 문제가 있습니다. |

### 문서화되지 않은 옵션

mx 도구에는 이 문서에 설명되지 않은 옵션이 포함되어 있습니다. 이는 Mendix 내부 사용을 위한 것이며 공식적으로 지원되지 않습니다. 향후 변경될 수 있지만, 이러한 옵션은 자체 책임 하에만 사용할 수 있습니다.
