---
title: "CLI를 사용하여 App Center의 CodePush로 OTA 업데이트 릴리스"
linktitle: "CodePush 및 CLI로 OTA 업데이트"
url: /howto8/mobile/how-to-ota-cli/
weight: 71
description: OTA(Over the Air) 업데이트를 푸시하기 위한 튜토리얼입니다.
---

## 소개

{{% alert color="info" %}}
이 문서는 이전 프로젝트에서 Mendix Native Mobile Builder를 사용할 수 없는 레거시 사례를 위한 것입니다. 그러나 프로젝트를 Mendix Native Mobile Builder로 마이그레이션하는 것을 *강력히 권장*합니다. 프로젝트를 Native Mobile Builder로 마이그레이션하지 않았거나 Native Template 버전이 5.1.9보다 오래된 경우(Mendix Studio Pro 8.15.0 이하), *App Center의 CodePush로 OTA 업데이트 릴리스 방법*의 [CLI OTA 호환 앱을 Mendix Native Mobile Builder로 전환](/howto8/mobile/how-to-ota/#from-cli-to-ui) 섹션을 따라 Native Template을 업데이트하십시오. 어떤 이유로든 프로젝트를 최신 버전의 Native Template으로 마이그레이션할 수 없는 경우 이 가이드를 계속 진행하십시오.
{{% /alert %}}

Native Builder와 Mendix Studio Pro를 사용하면 Mendix 네이티브 앱을 OTA(Over the Air)로 업데이트할 수 있습니다. OTA 업데이트는 레이아웃, 페이지, 자산 또는 앱의 비즈니스 로직(예: Nanoflow 및 JavaScript 액션)과 같은 항목을 빠르고 고통 없이 업데이트하는 방법입니다.

네이티브 앱은 두 부분으로 분리됩니다: 기본적으로 네이티브 iOS 또는 Android 앱인 래퍼와 해당 래퍼에 의해 동적으로 로드되는 번들. 비즈니스 로직과 정적 자산 같은 것들이 이 동적으로 로드되는 번들의 일부입니다. 배포하려는 변경 사항이 있을 때 Native Builder는 새로 업데이트된 번들로 번들링하고 고통 없이 배포할 수 있습니다. 다음 앱 재시작 시 앱 사용자는 최신 버전으로 업데이트되어 평소와 같이 비즈니스를 계속합니다.

OTA 업데이트는 특정 앱 버전 및 빌드 번호에 바인딩됩니다. 따라서 특정 업데이트를 특정 앱 버전에 타겟팅할 수 있습니다.

{{% alert color="info" %}}
현재 OTA는 앱이 열려 있거나 최소화된 상태에서는 앱을 업데이트하지 않습니다.
{{% /alert %}}

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* 릴리스된 앱에 대한 OTA 업데이트 푸시
* 업데이트 롤백
* 이미 푸시된 업데이트 구성

## 사전 요구 사항

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Native Builder 3.0.0 이상을 설치하십시오
* Mendix Studio Pro 8.4 이상을 설치하십시오
* [클라우드에서 Mendix 네이티브 앱 빌드 방법](/howto8/mobile/deploying-native-app/)을 완료하십시오
* Native Builder v3.0.0 및 Native Template v2.0.0을 사용하여 적어도 한 번의 성공적인 빌드를 완료하십시오
* 테스트 디바이스 또는 에뮬레이터에 앱을 설치하십시오
* [오프라인 우선 참조 가이드](/refguide8/offline-first/)를 읽으십시오

## OTA 업데이트를 사용해야 하는 경우

### Mendix 앱을 재배포하지 않고 OTA 업데이트를 안전하게 푸시 {#safeToUpdate}

새 OTA 업데이트를 푸시하기 전에 *항상* Mendix 앱을 재배포하는 것이 좋습니다. 그러나 다음의 경우에는 Mendix Cloud에 Mendix 앱을 재배포하지 않고 OTA 업데이트를 릴리스하는 것이 일반적으로 안전합니다:

* 스타일 변경
* 정적 이미지, 텍스트 또는 기타 정적 자산 변경
* 레이아웃 변경
* Nanoflow 변경
* JavaScript 액션 변경
* Mendix와 함께 제공되는 위젯 추가 또는 제거
* 새 사용자 지정 JavaScript 전용 위젯 또는 모듈 추가 
* 추가 로직 없이 페이지 추가
* 비파괴적 모델 변경(자세한 내용은 [오프라인 우선 참조 가이드](/refguide8/offline-first/)를 참조하십시오)

### 전체 릴리스가 필요한 경우

iOS 또는 Android 프로젝트에 직접 변경을 한 경우 변경 사항이 적용되려면 앱 스토어에 앱을 완전히 재배포해야 합니다. 다음의 경우에는 OTA 업데이트가 충분하지 않으며 전체 릴리스가 필요합니다:

* 앱의 초기 릴리스
* 새 Native Template 버전이 필요한 Mendix Studio Pro 버전 업그레이드
* 앱의 기능을 근본적으로 변경한 경우
* 새 네이티브 모듈이 추가된 경우
* 앱 이름이 변경된 경우
* 새 Microflow 또는 Nanoflow를 추가한 경우
* 앱의 런처 아이콘이 변경된 경우
* 스플래시 화면이 변경된 경우

## OTA 업데이트 배포

OTA 업데이트를 사용하면 새 릴리스를 발행하지 않고도 게시된 앱의 실수를 수정할 수 있습니다. 예를 들어, 새 릴리스를 발행한 후 환영 화면에서 맞춤법 실수를 발견했다고 상상하십시오:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-error-text.png" alt="Typo in welcome screen"   width="300"  class="no-border" >}}

OTA 업데이트 이전에는 새 릴리스를 만들고 앱 스토어에서 구성해야 했습니다. 그러나 OTA 업데이트를 사용하면 이러한 실수를 쉽게 수정할 수 있습니다.

새 버전을 OTA로 릴리스하려면 다음 단계를 따르십시오:

1. 제목과 메시지를 다음과 같이 수정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/modeller-correct.png" alt="Make some changes"   width="300"  class="no-border" >}}

2. 변경 사항을 저장하십시오.
3. 업데이트하려는 앱 빌드의 버전과 빌드 번호를 기록하십시오. 이 사용법 가이드에서는 앱 버전 1.0.0과 빌드 번호 1을 가정합니다.
4. Command Prompt와 같은 명령줄 인터페이스(CLI)를 여십시오.
5. Native Builder의 디렉토리로 이동하십시오:

    ```powershell
    cd {path to Native Builder executable file}`
    ```

6. 다음 명령을 실행하여 새 업데이트를 빌드하고 푸시하십시오:

    ```text
    native-builder.exe release push-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 100 --mandatory
    ```

    {{% alert color="info" %}}
이 명령은 다음을 수행합니다:<br />

* MxBuild를 실행하여 프로젝트를 빌드합니다<br />
* 새 업데이트로 푸시할 프로젝트를 패키징합니다<br />
* 앱 버전 1.0.0에 대한 새 업데이트 패키지를 푸시합니다<br />
* 롤아웃 비율을 100%(모든 앱 사용자)로 설정합니다<br />
* 앱 사용자가 설치해야 하는 필수 업데이트로 표시합니다
    {{% /alert %}}

1. Native Builder가 완료될 때까지 기다리십시오.
2. 테스트 디바이스에서 앱을 재시작하십시오. 다음 메시지가 표시되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-update-prompt.png" alt="Update available prompt"   width="300"  class="no-border" >}}

3. **Confirm**을 탭하여 앱을 업데이트하십시오.
4. 앱이 다시 로드되고 다음 대화 상자가 표시되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-success-prompt.png" alt="Update success prompt"   width="300"  class="no-border" >}}

## 업데이트 롤백

때때로 업데이트가 예상대로 수행되지 않을 수 있습니다. 기본적으로 업데이트가 실패하면 자동 업데이트 메커니즘이 앱의 바이너리와 함께 패키징된 번들로 다시 전환하여 복구를 시도합니다. 이러한 경우 문제를 수정하고 새 업데이트를 푸시하거나 이전 버전으로 롤백하여 번들을 업데이트해야 합니다.

업데이트를 롤백하려면 다음 단계를 따르십시오:

1. 다음 명령을 실행하여 사용 가능한 릴리스 목록을 가져오십시오:

    ```text
    `native-builder.exe release list --project-name "CoolApp"`
    ```

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/release-list.png" alt="List of available release" class="no-border" >}}

2. {v2}에서 {v1}으로 롤백하려면 다음 명령을 입력하십시오:

    ```text
    native-builder.exe release rollback-update --project-name "CoolApp" --label "v1"
    ```

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/rollback-result.png" alt="Output of rollback command"   width="300"  class="no-border" >}}

3. 다음에 앱을 열면 **Update available** 대화 상자가 표시되어야 합니다. **Confirm**을 탭하여 디바이스에서 앱을 롤백하십시오.

## 부분 초기 롤아웃 시작

### 업데이트를 롤백해도 안전한 경우

롤백에 대한 정보는 위의 [Mendix 앱을 재배포하지 않고 OTA 업데이트를 안전하게 푸시](#safeToUpdate)를 참조하십시오. 거기에 나열된 경우는 안전한 롤백에도 적용됩니다.

### 부분 롤아웃 수행

새 업데이트의 안정성을 테스트하려면 완전히 롤아웃하기 전에 소수의 사용자에게 릴리스를 테스트하는 것이 좋습니다.

일부 사용자에게만 앱을 롤아웃하려면 다음 명령을 실행하십시오:

```text
`native-builder.exe release push-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 50 --mandatory`
```

100% 대신 50%의 롤아웃 비율을 전달합니다. 이는 앱 사용자 기반의 50%에 업데이트가 배포된다는 의미입니다.

업데이트를 완전히 롤아웃하려면 다음 명령을 실행하십시오:

```text
native-builder.exe release patch-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 100
```

## 추가 읽기

* [클라우드에서 Mendix 네이티브 앱 빌드 방법](/howto8/mobile/deploying-native-app/)
* [Native Builder 참조 가이드](/refguide8/native-builder/)
* [오프라인 우선 참조 가이드](/refguide8/offline-first/)
* [Codepush 소개](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)
* [CodePush UI 사용](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/using-ui)
