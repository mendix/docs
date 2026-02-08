---
title: "Native Builder (CLI)"
url: /refguide8/native-builder/
weight: 70
---

{{% alert color="warning" %}}
Native Builder CLI는 Studio Pro와 통합되는 UI 도구인 Mendix Native Mobile Builder로 대체되었습니다. 앱을 배포하는 방법에 대해서는 [여기](/howto8/mobile/deploying-native-app/)에서 자세히 확인하세요.
{{% /alert %}}

{{% alert color="warning" %}}
Native Builder CLI v3.2.1 이상으로 업데이트하십시오. Native Builder CLI v3.2.1에는 GitHub의 기본 리포지토리 브랜치 이름이 **master**에서 **main**으로 전환됨에 따라 필요한 수정 사항이 포함되어 있습니다.
{{% /alert %}}

## 소개

Native Builder (CLI)는 네이티브 프로필이 포함된 Mendix 프로젝트를 가져와 iOS 및 Android용 네이티브 모바일 앱을 패키징합니다. Native Builder 사용 방법에 대해 자세히 알아보려면 [클라우드에서 Mendix 네이티브 앱 빌드하기](/howto8/mobile/deploying-native-app/)를 참조하세요.

Native Builder는 MxBuild, GitHub 및 App Center를 사용하여 애플리케이션을 빌드합니다. 이 도구는 이러한 프로세스의 구성을 자동화하여 앱 빌드 경험을 간소화합니다. Native Builder는 `--project-name` 매개변수를 사용하여 고유한 앱 이름을 지정하는 한 GitHub에 원하는 만큼 많은 앱을 생성할 수 있습니다(자세한 내용은 아래 [명령어](#commands) 섹션을 참조하세요). `prepare` 및 `build` 명령 조합을 사용하면 Native Builder는 다음 작업을 수행하여 앱을 패키징합니다:

1. Mendix 프로젝트를 로컬에 배포합니다.
2. 제공된 Mendix 버전에 맞는 최신 버전의 Mendix Native Template 리포지토리를 사용하여 새 리포지토리를 생성합니다(프로젝트 이름 인수를 사용하여 이름 지정).
3. 새 리포지토리에 **build/{제공된 빌드 번호}**라는 새 브랜치를 생성합니다.
4. 새 리포지토리의 빌드 브랜치에 필요한 파일과 에셋을 커밋합니다.
5. App Center에서 앱을 구성합니다.
6. iOS 및 Android 빌드를 시작합니다.
7. 빌드 진행 정보를 제공합니다.
8. 빌드가 성공하면 압축된 앱을, 빌드가 실패하면 빌드 로그 파일을 다운로드합니다.

## 명령어 {#commands}

명령줄 인수는 Mendix 프로젝트의 위치와 같은 정보를 Native Builder에 제공합니다. 명령어는 아래에 표시된 매개변수를 사용하여 구성됩니다. 이러한 매개변수 중 일부는 필수이거나 강력히 권장됩니다. 나머지는 선택 사항이며, 앱에 해당하는 경우에 사용해야 합니다. 매개변수가 포함된 명령어를 구성하여 Native Builder를 시작하려면 다음을 수행하세요:

1. 아이콘 또는 *.exe* 파일을 마우스 오른쪽 버튼으로 클릭하고 **관리자 권한으로 실행**을 선택하여 명령줄 프로그램을 관리자 권한으로 여세요.
2. `cd "{Native Builder .exe 위치}"`를 입력하고 <kbd>Enter</kbd>를 눌러 Native Builder의 디렉토리를 지정하세요:

    {{< figure src="/attachments/refguide8/mobile/native-mobile/native-builder/change-directory.png" alt="change directory" class="no-border" >}}

### Prepare {#prepare}

`Prepare` 명령은 GitHub와 App Center 모두에서 앱 생성을 처리하고, 아이콘 에셋 및 스플래시 이미지를 설정한 후, Java, Mendix 및 프로젝트 경로를 확인합니다. 나중에 사용할 수 있도록 해당 정보를 유지하기 위해 사용자 폴더를 기준으로 구성 파일이 생성됩니다. `prepare` 명령을 사용하고 업데이트하려는 인수를 전달하여 이 구성을 업데이트할 수 있습니다.

`prepare` 명령의 예시:

```bash
native-builder.exe prepare --github-access-token <token> --appcenter-api-token <token> --java-home <absolute-path> --mxbuild-path <absolute-path> --project-path <absolute-path-to-mpr-file> --projectName CoolApp --app-identifier "com.company.myapp" --app-name "My Cool App" --mendix-version 8.5.0
```

| Parameters                  | Description                                                          | Example                                             |
| --------------------------- | -------------------------------------------------------------------- | --------------------------------------------------- |
| `--github-access-token`     | GitHub 액세스 토큰.                                                 | `c0e1dasf1e102c55ded223dbdebdbe59asf95224`          |
| `--appcenter-api-token`     | App Center API 토큰.                                                | `3e18asdfb43f4fe6c85afsd0bf60dde72f134`             |
| `--appcenter-organization`  | App Center 조직 이름.                                        | `my-company`                                        |
| `--project-name`            | 프로젝트의 고유 이름. **(필수)**                               | `CoolApp`                                           |
| `--app-name`                | 앱의 표시 이름.                                             | `My Cool App`                                       |
| `--app-identifier`          | 고유 앱 식별자.                                               | `com.mendix.MyAwesomeApp`                           |
| `--app-icon-path`           | 앱 아이콘의 절대 경로.                                       | `C:\MyAppIcon.png`                                  |
| `--app-round-icon-path`     | Android 전용 앱 원형 아이콘의 절대 경로.            | `C:\MyAppRoundIcon.png`                             |
| `--app-splash-screen-path`  | 앱 스플래시 화면 이미지의 절대 경로.                        | `C:\MyAppSplash.png`                                |
| `--java-home`               | Java 실행 파일이 위치한 디렉토리의 절대 경로.     | `C:\Program Files\Java\jdk-10.0.1`                  |
| `--project-path`            | Mendix 프로젝트 파일의 절대 경로.                            | `C:\MyApp\MyApp.mpr`                                |
| `--mxbuild-path`            | MxBuild 실행 파일의 절대 경로.                                 | `C:\Program Files\Mendix\8.0.0\modeler\mxbuild.exe` |
| `--runtime-url`             | Mendix 런타임의 URL.                                           | `https://myapp.mendixcloud.com`                     |
| `--mendix-version`          | Mendix 프로젝트에서 사용 중인 Mendix Studio Pro 버전. **(필수)**          | `8.5.0`                                             |
| `--firebase-android-config-path`          | *google-services.json* 파일의 절대 경로.          | `C:\MyApp\google-services.json`                     |
| `--firebase-ios-config-path`          | *GoogleService-Info.plist* 파일의 절대 경로.          | `C:\MyApp\GoogleService-Info.plist`                 |

### Build {#build}

#### 배포용 앱 생성

`Build` 명령은 JavaScript 번들과 에셋을 빌드하고, GitHub에 빌드를 생성하며, App Center에서 빌드를 초기화합니다.

이미 `prepare`를 실행한 경우, `build` 명령의 예시는 다음과 같습니다:

```bash
native-builder.exe build --project-name "CoolApp" --app-version "1.0.0" --build-number 1
```

| Parameters                  | Description                                                          | Example                                             |
| --------------------------- | -------------------------------------------------------------------- | --------------------------------------------------- |
| `--project-name`            | `prepare` 중에 사용된 프로젝트의 고유 이름.                                    | `CoolApp`                                           |
| `--app-version`             | 앱의 버전, 시맨틱 버전만 가능.  **(강력히 권장)**                   | `1.2.3`                                             |
| `--build-number`            | 빌드 번호, 임의의 고유 정수 값. **(필수)**                          | `1`                                                 |
| `--github-access-token`     | GitHub 액세스 토큰.                                                      | `c0e1dasf1e102c55ded223dbdebdbe59asf95224`          |
| `--appcenter-api-token`     | App Center API 토큰.                                                     | `3e18asdfb43f4fe6c85afsd0bf60dde72f134`             |
| `--appcenter-organization`  | App Center 조직 이름.                                             | `my-company`                                        |
| `--app-name`                | 앱의 표시 이름.                                                  | `My Cool App`                                       |
| `--app-identifier`          | 고유 앱 식별자.                                                    | `com.mendix.MyAwesomeApp`                           |
| `--app-icon-path`           | 앱 아이콘의 절대 경로.                                            | `C:\MyAppIcon.png`                                  |
| `--app-round-icon-path`     | Android 전용 앱 원형 아이콘의 절대 경로.                 | `C:\MyAppRoundIcon.png`                             |
| `--app-splash-screen-path`  | 앱 스플래시 화면 이미지의 절대 경로.                             | `C:\MyAppSplash.png`                                |
| `--java-home`               | Java 실행 파일이 위치한 디렉토리의 절대 경로.          | `C:\Program Files\Java\jdk-10.0.1`                  |
| `--project-path`            | Mendix 프로젝트 파일의 절대 경로.                                 | `C:\MyApp\MyApp.mpr`                                |
| `--mxbuild-path`            | MxBuild 실행 파일의 절대 경로.                                      | `C:\Program Files\Mendix\8.0.0\modeler\mxbuild.exe` |
| `--runtime-url`             | Mendix 런타임의 URL.                                                | `https://myapp.mendixcloud.com`                     |
| `--output-path`             | 아티팩트가 저장될 위치의 절대 경로.                  | `C:\Downloads`                                      |
| `--platform`                | 명령을 실행할 플랫폼. 기본값은 iOS와 Android 모두. | `ios` or `android`                                  |
| `--skip-mxbuild`            | JavaScript 번들 및 에셋 번들링 시 사용. 기본값은 `false`.       | `true` or `false`                                   |

#### 커스텀 개발자 앱 생성 {#generate}

`build dev-app` 명령을 사용하면 Make It Native 앱과 유사한 미리보기 앱을 생성합니다. 단, 이 미리보기 앱은 프로젝트와 Studio Pro 버전에 특화된 커스텀 개발자 앱입니다. 이 명령은 GitHub에 **develop** 브랜치를 생성하고 App Center에서 빌드를 초기화합니다. 또한 `prepare` 명령을 최소 한 번 이상 실행했어야 합니다.

`build dev-app`를 사용한 명령 예시:

```bash
native-builder.exe build dev-app --project-name "CoolApp" --output-path "C:\bundles\developer"
```

| Parameters            | Description                                                                          | Example            |
| --------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `--project-name`      | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                    | `CoolApp`          |
| `--output-path` | *ZIP* 아카이브의 절대 출력 경로.                                             | `C:\bundles\developer`       |
| `--platform`          | 명령을 실행할 플랫폼. 기본값은 iOS와 Android 모두. | `ios` or `android` |

### Regenerate {#regenerate}

`regenerate` 명령은 최신 버전의 `Native Template`으로 GitHub에 프로젝트를 다시 생성하고, 변경 사항(있는 경우)을 보존하기 위해 이전 앱의 이름을 새 이름으로 변경한 후, App Center 앱의 빌드 구성을 업데이트합니다. `regenerate`를 실행하려면 해당 `--project-name`에 대해 `prepare`가 최소 한 번 이상 실행되어 있어야 합니다.

{{% alert color="info" %}}
이전 템플릿에 적용한 변경 사항을 자동으로 보존하는 방법은 없습니다. 변경 사항이 있는 경우 새 GitHub 리포지토리에 수동으로 적용해야 합니다. 또한 앱의 Mendix 버전을 변경할 때는 `prepare` 명령을 사용하여 `mxbuild-path`도 업데이트하세요.
{{% /alert %}}

| Parameter                  | Description                                                                 | Example                                             |
| -------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| `--project-name`           | Java 실행 파일이 위치한 디렉토리의 절대 경로. | `My Cool App`                                       |
| `--mendix-version`          | 프로젝트에서 사용 중인 Mendix Studio Pro 버전. **(필수)**                   | `8.5.0` or `8.5`                              |

`regenerate` 명령의 예시:

```bash
native-builder.exe regenerate --project-name "CoolApp" --mendix-version 8.5.0
```

| Parameters       | Description                                       | Example   |
| ---------------- | ------------------------------------------------- | --------- |
| `--project-name` | `prepare` 중에 사용된 프로젝트의 고유 이름. | `CoolApp` |

### OTA(Over the Air) 배포 릴리스 생성 {#ota}

`push-update` 명령은 새 JavaScript 번들과 에셋을 생성하고 해당 OTA(Over the Air) 업데이트를 배포하는 작업을 처리합니다.

`push-update`를 사용한 명령 예시:

```bash
native-builder.exe release push-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 100
```

| Parameters             | Description                                                                                                    | Example                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `--project-name`       | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                                              | `CoolApp`                                                        |
| `--target-version`     | 이 업데이트가 적용될 이미 게시된 앱의 버전 또는 버전 범위. **(필수)**                      | 시맨틱 버전 [Semantic Versioning](https://semver.org/) 참조  |
| `--rollout-percentage` | 이 업데이트를 받을 사용자의 비율. 한번 설정하면 이후에 값을 줄일 수 없습니다. **(필수)**    | `1`에서 `100` 사이의 숫자.                                  |
| `--build-number`       | 이 업데이트가 대상으로 하는 App Center 빌드 번호. **(필수)**                                                       | `build` 중에 정의된 임의의 숫자                             |
| `--description`        | 사용자가 다운로드 전에 볼 수 있는 업데이트 관련 추가 정보.                      | 임의의 텍스트 메시지.                                                |
| `--mandatory`          | 이 업데이트가 중요한 것으로 간주되어 사용자에게 강제 적용될지 여부. 기본값은 true. | `true` or `false`                                                |
| `--platform`           | 명령을 실행할 플랫폼. 기본값은 iOS와 Android 모두.                           | `ios` or `android`                                               |
| `--deployment-target`  | OTA 대상 그룹. 기본값은 `Production`.                                                          | `Staging`                                                        |
| `--skip-mxbuild`       | JavaScript 번들 및 에셋 번들링 시 사용. 기본값은 `false`.                                  | `true` or `false`                                                |

### OTA 배포 릴리스의 메타데이터 업데이트 {#update-ota}

`patch-update` 명령을 사용하면 모든 사용자에게 롤아웃되지 않은 게시된 업데이트(기술적으로 `rollout-percentage` 값이 `100`이 아닌 업데이트)의 메타데이터를 업데이트할 수 있습니다.

`patch-update`를 사용한 명령 예시:

```bash
native-builder.exe release patch-update --project-name "CoolApp" --label "v4" --target-version  "1.0.1"
```

| Parameters             | Description                                                                                                          | Example                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `--project-name`       | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                                                     | `CoolApp`                                              |
| `--label`              | 패치할 업데이트의 고유 레이블. **(필수)**                                                                                 | `release list` 명령을 사용하여 확인 가능 |
| `--target-version`     | 업데이트가 적용될 이미 게시된 앱의 버전 또는 버전 범위.                  | 시맨틱 버전 [Semantic Versioning](https://semver.org/) 참조    |
| `--rollout-percentage` | 업데이트를 받을 사용자의 비율. 한번 설정하면 이후에 값을 줄일 수 없습니다. | `1`에서 `100` 사이의 숫자.                        |
| `--description`        | 사용자가 다운로드 전에 볼 수 있는 업데이트 관련 추가 정보.                             | 임의의 텍스트 메시지.                                      |
| `--mandatory`          | 업데이트의 필수 여부를 결정합니다.                           | `true` or `false`                                      |
| `--platform`           | 명령을 실행할 플랫폼을 지정합니다. 기본값은 iOS와 Android 모두.                                 | `ios` or `android`                                     |
| `--deployment-target`  | OTA 대상 그룹. 기본값은 `Production`.                                                                | `Staging`                                              |

### 이전 배포 릴리스로 롤백 {#rollback}

`rollback-update` 명령을 사용하면 동일한 대상 버전의 이전 배포 릴리스로 되돌릴 수 있습니다. 이 명령은 `--label` 인수로 지정된 이전 배포 릴리스를 사용하여 새 배포를 생성합니다.

`rollback-update`를 사용한 명령 예시:

```bash
native-builder.exe release rollback-update --project-name "CoolApp" --label "v4"
```

다음 사항을 유의하세요:

* `--label` 매개변수는 이전 배포 릴리스만 가리킬 수 있습니다.
* 손상된 릴리스로 롤백하면 해당 릴리스가 사용자에게 배포됩니다. 이 상황을 해결하려면 새 릴리스를 수행하거나 정상 작동하는 릴리스로 롤백해야 합니다.

| Parameters            | Description                                                                          | Example                                                |
| --------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| `--project-name`      | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                     | `CoolApp`                                              |
| `--label`             | 롤백할 안정 버전의 고유 레이블. **(필수)**                                  | `release list` 명령을 사용하여 확인 가능 |
| `--platform`          | 명령을 실행할 플랫폼. 기본값은 iOS와 Android 모두. | `ios` or `android`                                     |
| `--deployment-target` | OTA 대상 그룹. 기본값은 `Production`.                                | `Staging`                                              |

### 배포 릴리스 목록 조회

`list` 명령은 배포된 모든 릴리스의 목록을 보기 좋게 출력합니다.

`list`를 사용한 명령 예시:

```bash
native-builder.exe release list --project-name "CoolApp"
```

| Parameters            | Description                                                                          | Example            |
| --------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `--project-name`      | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                    | `CoolApp`          |
| `--platform`          | 명령을 실행할 플랫폼. 기본값은 iOS와 Android 모두. | `ios` or `android` |
| `--deployment-target` | OTA 대상 그룹. 기본값은 `Production`.                                | `Staging`          |

### 앱 번들만 생성

`bundle` 명령을 사용하면 **MxBuild 단계만 실행**합니다(GitHub 구성 및 App Center 빌드 단계는 건너뜁니다). 이 명령은 각 플랫폼에 해당하는 JavaScript 번들과 리소스가 포함된 *ZIP* 아카이브를 출력합니다.

`bundle`을 사용한 명령 예시:

```bash
native-builder.exe bundle --project-name "CoolApp" --output-path "C:\bundles"
```

| Parameters            | Description                                                                          | Example            |
| --------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `--project-name`      | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                    | `CoolApp`          |
| `--output-path` | *ZIP* 아카이브의 절대 출력 경로. **(필수)**                                             | `C:\bundles`       |
| `--platform`          | 명령을 실행할 플랫폼. 기본값은 iOS와 Android 모두. | `ios` or `android` |

### iOS 전용 구성

iOS 구성을 수정하는 명령은 `config ios` 명령 아래에 그룹화되어 있습니다.

#### Entitlement 추가 및 제거

Entitlement를 추가하거나 제거하려면 `add-entitlements` 또는 `remove-entitlements` 명령을 사용하세요:

```bash
native-builder.exe config ios add-entitlements --project-name "CoolApp" --entitlements notification nfc
```

| Parameters            | Description                                                                          | Example            |
| --------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `--project-name`      | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                    | `CoolApp`          |
| `--entitlements` | 프로젝트에 추가할 Entitlement 목록. 지원되는 옵션은 `notification`과 `nfc`입니다.                 | `notification nfc`       |

#### 백그라운드 모드 추가 및 제거

백그라운드 모드를 추가하거나 제거하려면 `add-background-modes` 또는 `remove-background-modes` 명령을 사용하세요:

```bash
native-builder.exe config ios add-background-modes --project-name "CoolApp" --modes notification
```

| Parameters            | Description                                                                          | Example            |
| --------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `--project-name`      | `prepare` 중에 사용된 프로젝트의 고유 이름. **(필수)**                                    | `CoolApp`          |
| `--modes` | 프로젝트에 추가할 백그라운드 모드 목록. `notification` 옵션이 지원됩니다.                | `notification`       |

## 매개변수 상세 설명 {#parameters}

### --project-name

이 매개변수는 앱의 고유 이름이며, 모든 문자를 포함할 수 있습니다. 이 이름은 `--github-access-token`과 같은 공통 매개변수 구성을 컴퓨터에 저장하는 데 사용됩니다. 이를 통해 해당 정보가 필요한 다른 명령과의 재사용성이 향상됩니다. 또한 GitHub 및 App Center에서 앱 이름으로 사용됩니다.

### --runtime-url

이 매개변수는 앱을 실행할 런타임을 가리켜야 합니다. 로컬에 배포된 앱을 대상으로 테스트하는 경우 컴퓨터의 IP 주소를 사용하세요(예: `http://192.168.1.12:8080`). Mendix Cloud에 배포된 앱을 대상으로 테스트하는 경우 배포 서버의 정규화된 런타임 URL을 사용하세요(예: `https://myapp.mendixcloud.com`). 올바른 프로토콜을 추가해야 하며, 그렇지 않으면 URL에 기본적으로 `http://`가 접두사로 붙습니다.

### --appcenter-organization

App Center에서 하나 이상의 조직에 속할 수 있습니다. 앱을 조직의 일부로 빌드해야 하는 경우 `--appcenter-organization`을 사용하여 Native Builder에 해당 조직의 이름을 제공하세요. 이 명령줄 인수를 생략하면 앱은 개인 App Center 계정의 일부가 됩니다.

### --app-name

이 매개변수는 앱의 표시 이름이며, 원하는 문자를 포함할 수 있습니다. 사용자가 디바이스에 앱을 설치할 때 이 이름이 표시됩니다. iOS 앱의 경우 이는 [CFBundleDisplayName](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-110725)으로 사용됩니다. Android 앱의 경우 이는 *AndroidManifest.xml* 파일의 `application` 태그에 있는 `android:label` 속성으로 사용됩니다.

### --app-version

이 매개변수는 빌드하려는 앱의 버전을 지정합니다. 적절한 버전 번호를 선택하는 방법에 대한 자세한 내용은 [Semantic Versioning](https://semver.org/)을 참조하세요.

### --app-identifier

이 매개변수는 앱의 고유 식별자로, Android의 [application ID](https://developer.android.com/studio/build/application-id) 요구 사항과 Apple의 [CFBundleIdentifier](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html) 요구 사항을 모두 준수해야 합니다. 앱이 Apple App Store 또는 Play Store에 업로드되면 앱의 식별자를 더 이상 수정할 수 없습니다. 게시 후 식별자를 수정하면 두 스토어 모두에서 다른 앱으로 취급됩니다. 앱 식별자는 역방향 DNS 표기법으로 지정됩니다(예: {com.mendix.MyAwesomeApp}).

### --platform

이 매개변수는 특정 플랫폼 또는 두 플랫폼 모두에 대한 선택적 빌드를 허용합니다. 기본적으로 Native Builder는 두 플랫폼 모두에 대해 빌드를 시도하지만 이 매개변수를 사용하여 iOS 또는 Android로만 빌드를 제한할 수 있습니다.

### --skip-mxbuild

드문 경우에 번들링 프로세스가 완료된 후 오류가 발생할 수 있습니다. 이 매개변수를 사용하면 테스트 중 시간을 절약하기 위해 MxBuild를 건너뛸 수 있습니다.

### --app-icon-path

이 매개변수는 앱 아이콘 파일을 지정합니다. 이미지는 *.png* 파일이어야 하며, 해상도는 1024x1024여야 합니다. Mendix가 자동으로 크기를 조정합니다. 파일 경로를 제공하지 않으면 **main** 브랜치에서 기본 앱 아이콘이 제공됩니다.

### --app-round-icon-path

이 매개변수는 Android 전용 앱 원형 아이콘 파일을 지정합니다. 이미지는 *.png* 파일이어야 하며, 해상도는 1024x1024여야 합니다. Mendix가 자동으로 크기를 조정합니다. 파일 경로를 제공하지 않으면 **main** 브랜치에서 기본 앱 아이콘이 제공됩니다.

### --app-splash-screen-path

이 매개변수는 앱 스플래시 파일을 지정합니다. 이미지는 *.png* 파일이어야 하며, 해상도는 1440x2560이어야 합니다. Mendix가 자동으로 크기를 조정합니다. 파일 경로를 제공하지 않으면 **main** 브랜치에서 기본 앱 스플래시 이미지가 제공됩니다.

### --build-number

이 고유 구성은 Android와 iOS 모두의 릴리스 빌드에 대한 버전 빌드 번호를 나타냅니다. 릴리스용으로 예약된 모든 빌드에는 고유하고 증가하는 번호가 있어야 합니다. 이 번호는 App Center와 GitHub의 브랜치 이름으로 사용됩니다.

OTA 업데이트의 경우, 각 빌드는 업데이트를 받을 특정 릴리스 그룹(`--deployment-target`)과 연결됩니다. 기본적으로 이 값은 **Production**으로 설정되어 있으며 일반적으로 이 상태를 유지해야 합니다. 변경된 경우 해당 환경에서 실행되는 디바이스만 업데이트를 받게 되므로 새 값을 기록해 두어야 합니다.

Android에서 허용하는 최대 정수는 2,147,483,647입니다. 1부터 시작하여 각 릴리스마다 하나씩 증가시키는 것을 고려하세요. 또는 "YYmmddHHmm" 형식의 날짜를 사용할 수 있으며, 예를 들어 {2007310950}은 2020년 7월 31일 09:50에 실행된 빌드를 나타냅니다.

### --mendix-version

이 매개변수는 Native Builder가 Mendix 프로젝트의 Studio Pro 버전에 맞는 호환 버전의 Native Template을 선택하도록 합니다. 이 매개변수는 유효한 Studio Pro 시맨틱 버전이어야 합니다(예: 8.5.1). 패치 버전에도 모든 사용 가능한 Native Template과 호환되지 않는 수정 사항이 포함될 수 있으므로 가능한 한 구체적으로 버전을 제공해야 합니다. 사용 중인 Mendix 버전을 확인하려면 Mendix 프로젝트의 Studio Pro 버전에서 **About** 페이지 또는 스플래시 화면을 확인하세요.

### --verbose {#verbose}

이 매개변수는 Native Builder에서 오류가 발생할 때 추가 세부 정보를 제공합니다. `--verbose`를 사용하고 Native Builder에서 오류가 발생하면 오류의 전체 스택 트레이스를 출력합니다. 이는 Native Builder가 알 수 없는 오류로 실패하는 경우에 유용합니다.

## 고급 사용법 {#advanced-usage}

### 커스텀 네이티브 코드

커스텀 네이티브 종속성이나 코드가 있는 경우 Native Builder가 사용하는 GitHub 리포지토리의 **main** 브랜치에 변경 사항을 병합하여 앱에 포함할 수 있습니다. 모든 빌드는 **main**에서 분기되므로 변경 사항이 포함됩니다. Mendix 네이티브 템플릿의 최신 변경 사항을 가져오기 위해 리포지토리를 주기적으로 동기화하는 것을 잊지 마세요.

리포지토리 동기화에 대한 자세한 내용은 아래의 [Native Template 재생성 시기](#sync-your-repository)를 참조하세요.

### 커스텀 App Center 구성

App Center에서 브랜치 수준에서 빌드를 구성할 수 있습니다. **main** 브랜치에 대한 구성이 없으면 Native Builder가 기본 구성을 생성합니다. 구성이 이미 있으면 도구에 의해 수정되지 않습니다. 빌드를 위한 브랜치가 초기화되면 **main**의 구성이 복사됩니다. 이후 빌드에서는 이 브랜치의 구성을 변경하지 않습니다. 이는 `regenerate` 명령을 사용하지 않는 한 사용자의 커스텀 구성을 덮어쓰지 않기 위함입니다.

### 커스텀 개발자 앱

Mendix 앱이 성숙해지면 기능을 확장하고 싶을 수 있습니다(예: 새로운 네이티브 종속성이 필요한 커스텀 위젯이나 로직 도입). 커스텀 개발자 앱은 Make It Native 앱의 대체 역할을 하며, Make It Native 앱에서 지원하지 않는 커스텀 위젯과 로직이 있는 경우에 사용해야 합니다. 커스텀 개발자 앱은 현재 프로젝트 구조, 커스텀 모듈 및 기타 요구 사항을 사용하여 직접 생성할 수 있는 앱으로, 발전하는 앱을 테스트하는 데 사용됩니다. 자세한 내용은 [커스텀 개발자 앱 생성 방법](/howto8/mobile/how-to-devapps/)을 참조하세요.

## Native Template 재생성 시기 {#sync-your-repository}

Native Template은 지속적으로 개발되고 있습니다. 이는 Mendix 플랫폼의 새로운 기능을 수용하거나 문제를 수정하기 위해 새 버전이 정기적으로 릴리스된다는 것을 의미합니다. 새 버전이 사용 가능해지면 Native Builder가 기본 템플릿을 업데이트하기 위해 `regenerate`를 실행하라고 제안합니다.

다음 시나리오에서 프로젝트의 템플릿을 업데이트해야 합니다:

* 모든 Studio Pro 모듈과 리소스가 Mendix Marketplace를 사용하여 완전히 업데이트되었는데도 앱이 예기치 않게 충돌하는 경우
* Studio Pro 버전을 업데이트한 경우

Native Template은 사용 중인 Studio Pro 버전과 밀접하게 연결되어 있습니다. 따라서 프로젝트가 업데이트될 때마다 Native Builder를 사용하여 `regenerate`를 실행하여 템플릿을 업데이트하는 것을 고려하세요.

## 오류 해결

### GitHub 오류

**Invalid Access Token** — 액세스 토큰이 유효하지 않습니다. *클라우드에서 Mendix 네이티브 앱 빌드하기*의 [GitHub Token](/howto8/mobile/deploying-native-app/#github-token) 섹션을 참조하고 Native Builder에 액세스 토큰을 제공하세요.

**Unable to Create the Repository: the Access Token Needs Access to the Repo Scope** — 액세스 토큰은 유효하지만 Native Builder가 작동하기에 권한이 너무 적습니다. Native Builder는 GitHub 리포지토리를 복제하고, 브랜치를 생성하며, 파일을 커밋합니다. *클라우드에서 Mendix 네이티브 앱 빌드하기*의 [GitHub Token](/howto8/mobile/deploying-native-app/#github-token) 섹션을 참조하고 새 액세스 토큰을 Native Builder에 제공하세요.

**Unable to Delete Branch Build/{build number}** — GitHub와 통신하는 중에 문제가 발생했습니다. 연결을 확인하고, GitHub가 사용 가능한지 확인한 후, Native Builder를 다시 실행하세요.

**Unable to Create Branch Build/{build number}** — GitHub와 통신하는 중에 문제가 발생했습니다. 연결을 확인하고, GitHub가 사용 가능한지 확인한 후, Native Builder를 다시 실행하세요.

**Unable to Commit {build number}** — GitHub와 통신하는 중에 문제가 발생했습니다. 연결을 확인하고, GitHub가 사용 가능한지 확인한 후, Native Builder를 다시 실행하세요.

### App Center 오류 {#app-center-errors}

**Invalid API Token** — API 토큰이 유효하지 않습니다. *클라우드에서 Mendix 네이티브 앱 빌드하기*의 [App Center Token](/howto8/mobile/deploying-native-app/#appcenter-token) 섹션을 참조하고 Native Builder에 API 토큰을 제공하세요.

**Unable to Configure Build:{explanation}** — App Center와 통신하는 중에 문제가 발생했습니다. 연결을 확인하고, App Center가 사용 가능한지 확인한 후, Native Builder를 다시 실행하세요.

**Build {build number} for App {app number} Has Failed** — App Center에서 네이티브 빌드가 실패했습니다. Native Builder가 다운로드한 로그 파일을 읽으세요. 로그 파일의 이름은 *{AppName}-{BuildNumber}.log*이며, Native Builder 실행 파일과 같은 폴더에 위치합니다.

**The Build Configuration is Overridden with the Default** — Native Builder가 빌드 중인 브랜치가 수동으로 구성되었는지 확인하는 동안 오탐지가 감지될 수 있습니다. 이로 인해 커스텀 구성이 덮어쓰여질 수 있습니다. 이 경우 App Center를 사용하여 직접 빌드를 실행하고 이 브랜치에 대해 Native Builder 사용을 건너뛰는 것을 고려하세요.

**Unknown Error** — 오류를 이해할 수 없는 경우, App Center에 로그인하여 **main** 브랜치의 빌드 구성을 삭제할 수 있습니다. 그런 다음 Native Builder를 다시 실행하세요. 도구가 **main**과 브랜치에 대한 기본 빌드 구성을 다시 생성합니다.

### 알 수 없는 오류

Native Builder가 실행을 완료하지 못하고 오류가 제공되지 않는 경우, [--verbose](#verbose) 매개변수를 사용하여 오류의 전체 스택 트레이스를 확인하세요. 지원팀에 문제를 전달할 때 빌드 로그와 함께 이러한 추가 로그를 제공하면 신속한 해결에 도움이 됩니다.

## 추가 읽기

* [클라우드에서 Mendix 네이티브 앱 빌드하기](/howto8/mobile/deploying-native-app/)
* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)
* [Mendix 네이티브 모바일 앱 스타일링하기](/howto8/mobile/how-to-use-native-styling/)
