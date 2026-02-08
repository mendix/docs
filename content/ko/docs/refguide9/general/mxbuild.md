---
title: "MxBuild"
url: /refguide9/mxbuild/
weight: 50
description: "Mendix 앱을 빌드하고 배포하기 위한 명령줄 도구인 MxBuild를 설명합니다."
---

## 소개

MxBuild는 Mendix 앱에서 Mendix Deployment Package를 빌드하는 데 사용할 수 있는 Windows 및 Linux 명령줄 도구입니다.

필요한 MxBuild 버전은 빌드하려는 Mendix 모델의 버전과 사용하려는 호스트 운영 체제에 따라 다릅니다.

아래 표를 참조하여 올바른 MxBuild를 찾으십시오. 해당 행의 URL을 브라우저에 복사하고 `mxversion`을 전체 Mendix 버전 번호로 교체하십시오:

| 운영 체제 | Mendix 버전 | URL |
| ---------------- | -------------- | ------------------------------------------------------------ |
| Linux (x64)      | 모든 버전 | `https://cdn.mendix.com/runtime/mxbuild-{mxversion}.tar.gz` |
| Windows (x64)    | 9.20 미만 | `https://cdn.mendix.com/runtime/mxbuild-{mxversion}.tar.gz` |
| Windows (x64)    | 9.20 – 9.22 | `https://cdn.mendix.com/runtime/mono-mxbuild-{mxversion}.tar.gz` |
| Windows (x64)    | 9.23 이상 | `https://cdn.mendix.com/runtime/win-mxbuild-{mxversion}.tar.gz` |

{{% alert color="info" %}}

빌드 번호가 버전에 포함되어 있으며, 위에 언급된 링크 경로에 포함되어야 합니다 — 예: `8.12.1.3458`은 8.12.1 Studio Pro 릴리스의 3458 빌드입니다.

Mendix 설치 경로에서 빌드 번호를 찾을 수 있습니다(예: 설치가 `C:\Program Files\Mendix\8.12.1.3458`과 같은 경우, 이 URL을 사용하여 파일을 가져오십시오: [https://cdn.mendix.com/runtime/mxbuild-8.12.1.3458.tar.gz](https://cdn.mendix.com/runtime/mxbuild-8.12.1.3458.tar.gz)).

이 [Studio Pro 릴리스 목록](https://marketplace.mendix.com/link/studiopro/)에 있는 모든 공개 Studio Pro 버전을 통해 MxBuild 파일을 다운로드할 수 있습니다. 파일 다운로드에 문제가 있으면 빌드가 해당 목록에 있는지 확인하십시오.

{{% /alert %}}

[7-Zip](https://www.7-zip.org/)과 같은 선호하는 압축 도구를 사용하여 파일을 추출할 수 있습니다.

MxBuild의 시스템 요구 사항에 대한 자세한 내용은 [시스템 요구 사항](/refguide9/system-requirements/#mxbuild)을 참조하십시오.

{{% alert color="info" %}}
특별히 언급되지 않는 한, 이 문서에서 사용되는 예제는 Windows용입니다.
{{% /alert %}}

## 명령줄

패키지를 빌드하려면 배포 패키지(.mda)를 빌드하려는 Mendix 앱 파일(.mpr)을 명령줄에서 지정합니다. 파일 이름 앞에 상대 또는 절대 경로가 올 수 있습니다. 앱 파일은 Mendix 앱 디렉터리 안에 있어야 합니다.

MxBuild는 Mendix 앱 처리 방법을 제어하는 여러 명령줄 옵션을 사용합니다. 이러한 옵션은 앱 파일 이름 앞에 위치합니다.

Windows에서는 명령줄에 다음 형식을 사용하십시오:

`MxBuild --java-home="JDKDirectory" --java-exe-path="javaExecutable" [options] projectFile`

Linux에서는 다음 명령줄 형식을 사용하여 MxBuild를 실행할 수도 있습니다:

`mono mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" [options] projectFile`

배포 패키지를 생성한 후 MxBuild 프로세스가 종료됩니다.

### 일반 명령줄 옵션

명령줄 옵션은 아래 표에 설명되어 있습니다:

| 옵션 | 설명 |
| --- | --- |
| `-h`, `--help` | MxBuild에 대한 간단한 설명과 사용 가능한 모든 옵션 목록을 인쇄합니다. |
| `--java-home=DIRECTORY` | (필수). JDK가 설치된 디렉터리입니다.<br/>예: `--java-home=/usr/lib/jvm/java-8-oracle`.<br/>Windows의 경우 *DIRECTORY*는 큰따옴표 `"`로 묶어야 합니다. |
| `--java-exe-path=FILENAME` | (필수). Java 실행 파일의 **전체 경로**입니다.<br/>예: `--java-exe-path=/usr/lib/jvm/java-8-oracle/bin/java`.<br/>Windows의 경우 *DIRECTORY*는 큰따옴표 `"`로 묶어야 하며, 전체 파일 이름 `...\java.exe`를 포함해야 합니다. |
| <code>––target=[package&#124;deploy]</code> | `package`: 옵션을 생략하면 기본값. 배포 패키지(.mda 파일)를 생성합니다<br/>`deploy`: 배포 패키지를 만들지 않고 앱을 배포합니다. |
| `--loose-version-check` | 더 낮은 Mendix 버전으로 생성된 앱에서 배포 패키지를 생성합니다.<br/>배포 패키지가 생성되기 전에 앱이 MxBuild 버전으로 업그레이드됩니다.<br/>이 업그레이드 결과로 포함된 변경 사항은 앱에 **저장되지 않습니다**. |
| `--write-errors=FILENAME` | 앱 배포 중 발생한 모든 오류, 경고 및 지원 중단을 JSON 형식으로 지정된 파일에 씁니다.<br/>이 파일은 앱에 오류가 포함된 경우에만 작성됩니다.<br/>파일이 이미 존재하면 경고 없이 덮어씁니다.<br/>이 파일의 형식에 대한 설명은 아래의 [앱 오류](#app-errors) 섹션을 참조하십시오. |

### 패키지 생성 시 옵션

{{% alert color="info" %}}
다음 옵션은 `--target=package` 옵션에만 적용됩니다:
{{% /alert %}}

패키지 생성 시 옵션은 아래 표에 설명되어 있습니다:

| 옵션&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 설명 |
| --- | --- |
| `-o FILENAME` 또는<br/>`--output=FILENAME` | MxBuild가 생성하는 .mda 파일의 이름(선택적 상대 또는 절대 경로 포함)입니다.<br/>이 옵션을 생략하면 파일은 *현재* 디렉터리에 `out.mda`라는 이름으로 저장됩니다. |
| `--project-name=NAME` | Mendix Runtime에서 사용하는 애플리케이션 이름을 변경합니다.<br/>이 옵션을 지정하지 않으면 앱 이름이 사용됩니다. |
| `--model-version=VERSION` | 패키지의 모델에 특정 버전 번호를 적용합니다. |
| `--model-description=DESCRIPTION` | 패키지에 모델 설명을 포함합니다. |

예를 들어, MxBuild의 *Windows* 버전을 사용하여 `MyApp` 앱을 사용하여 현재 디렉터리에 `out.mda` 배포 패키지를 생성하려면 다음 명령을 사용할 수 있습니다:

```bat
mxbuild --target=package --java-home="C:\Program Files\Java\jdk1.8.0_144" --java-exe-path="C:\Program Files\Java\jdk1.8.0_144\bin\java.exe" "C:\Users\username\Documents\Mendix\MyApp\MyApp.mpr"
```

## 반환 코드

MxBuild가 종료되면 다음 코드 중 하나가 반환됩니다:

| 종료 코드 | 설명 |
| --- | --- |
| 0 | MxBuild가 성공적으로 완료되었습니다. |
| 1 | 내부 오류가 발생했습니다. |
| 2 | 명령줄 옵션에 문제가 있습니다. |
| 3 | Mendix 앱 배포에 실패했습니다. |

종료 코드가 0보다 크면 MxBuild가 오류를 설명하는 메시지를 표시합니다.

## 앱 오류 {#app-errors}

Mendix 앱에 오류가 포함되어 있으면 배포가 실패하고 MxBuild가 이러한 오류를 보고합니다. `--write-errors=FILENAME` 명령줄 옵션을 사용하여 MxBuild에 오류를 파일에 쓰도록 지시할 수 있습니다.

오류는 하나의 속성 `problems`를 가진 JSON 객체로 출력됩니다. 이 속성의 값은 앱의 각 오류, 경고 또는 지원 중단을 설명하는 객체 배열입니다. 예:

```json
{
  "problems": [
    {
      "name": null,
      "severity": "Error",
      "message": "Start event cannot be the last object of a flow.",
      "locations": [
        {
          "elementId": "252e1008-d795-4e49-b3e3-2ba38eb0a56d",
          "unitId": "1a8a3593-6f01-43a3-bc22-bd22f9244983",
          "element": "Start event",
          "document": "Microflow 'MyMicroflow'",
          "module": "MyModule"
        }
      ]
    }
  ]
}
```

다음 표는 *problems* JSON 객체의 다양한 속성을 설명합니다:

| 속성 | 설명 |
| --- | --- |
| `name` | 문제의 고유 식별자 또는 일관성 검사가 Mendix Metamodel에 아직 정의되지 않은 경우 `null`입니다. |
| `severity` | 문제 유형을 설명합니다: `Warning`, `Error` 또는 `Deprecation`. |
| `message` | 문제에 대한 설명입니다. 이는 Mendix Studio Pro의 [Errors 패널](/refguide9/errors-pane/)에 있는 메시지와 동일합니다. |
| `locations` | 문제가 발생하는 Mendix 앱의 위치를 설명하는 0개 이상의 객체를 포함합니다(다음 표 참조). |

문제와 관련된 위치에는 다음 속성이 있습니다:

| 속성 | 설명 |
| --- | --- |
| `elementId` | 문제가 발생하는 모델 요소의 고유 ID입니다. |
| `unitId` | 문제가 발생하는 문서의 고유 ID입니다. |
| `element` | 문제가 발생하는 모델 요소에 대한 설명입니다. |
| `document` | 문제가 발생하는 문서에 대한 설명입니다. |
| `module` | 문제가 발생하는 모듈에 대한 설명입니다. |
