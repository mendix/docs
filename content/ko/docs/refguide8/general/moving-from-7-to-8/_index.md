---
title: "Desktop Modeler 버전 7에서 Studio Pro 8로 이전"
linktitle: "Desktop Modeler 7에서 Studio Pro 8로"
url: /refguide8/moving-from-7-to-8/
weight: 20
description: "Desktop Modeler 버전 7에서 Studio Pro 8로 프로젝트를 업데이트하는 방법에 대한 세부 정보를 제공하며, 프로젝트 변환 및 더 이상 사용되지 않는 기능에 대한 섹션을 포함합니다."
---

## 소개

Mendix 앱을 Desktop Modeler 버전 7에서 Studio Pro 8로 변환할 때 수행해야 할 권장 단계가 있습니다. 이러한 단계는 아래 [앱 변환](#converting)에 문서화되어 있습니다.

Mendix 8의 새로운 기능에 대한 정보는 [Studio Pro 8 릴리스 노트](/releasenotes/studio-pro/)를 참조하십시오.

## Mendix 8, Studio Pro로 업그레이드하기 전에 앱에 변경 사항 적용

Mendix 8로 업그레이드하기 *전에* 앱에 적용해야 할 변경 사항이 있을 수 있습니다.

### Java 버전, 더 이상 사용되지 않는 API 및 제거된 API {#deprecated-apis}

Mendix 8은 Java 11에서 실행되는 반면 Mendix 7은 Java 8에서 실행됩니다. Java Action이 Java 11과 호환되는지 확인하십시오. 공식 Java 8에서 11로의 마이그레이션 가이드는 *Oracle JDK 마이그레이션 가이드*의 [JDK 8에서 이후 JDK 릴리스로 마이그레이션](https://docs.oracle.com/en/java/javase/11/migrate/index.html#JSMIG-GUID-7744EF96-5899-4FB2-B34E-86D49B2E89B6) 섹션에서 찾을 수 있습니다.

더 이상 사용되지 않는 Java Action은 앱을 Mendix 8로 마이그레이션하기 전에 Mendix 7에서 수정해야 합니다.

프로젝트를 Java IDE(예: Eclipse)로 가져오고 모든 더 이상 사용되지 않는 항목을 검토하고 해결하여 Java Action의 더 이상 사용되지 않는 항목을 수정하십시오.

제거되고 더 이상 사용되지 않는 API에 대한 세부 정보는 [Studio Pro 8 릴리스 노트](/releasenotes/studio-pro/)의 *Breaking Changes* 섹션에 추가됩니다.

### Atlas 호환성

Mendix 8로 이전하기 전에 최신 Mendix 7 호환 Atlas 버전 1.2.4를 사용하고 있는지 확인하십시오. 먼저 Atlas를 이 버전으로 업데이트하면 Mendix 8 마이그레이션 후 디자인 속성과 관련된 여러 오류를 방지할 수 있습니다.

Atlas 1.2.4로 업데이트하는 방법:

1. Studio Pro Atlas UI Resource 모듈에서 커스터마이징한 내용이 있는지 확인하십시오. Atlas를 업데이트하면 해당 모듈의 모든 내용이 덮어쓰여집니다. 업데이트하기 전에 커스터마이징된 내용을 Atlas UI 모듈 밖으로 이동하십시오.
2. Mendix 프로젝트 내의 **theme** 폴더에서 커스터마이징한 내용이 있는지 확인하십시오. 있다면 **theme** 폴더의 이름을 *theme_oldest*와 같은 다른 이름으로 변경하십시오.
3. Studio Pro 내에서 Marketplace를 열고 *Atlas UI Resources*를 검색한 후 **All Versions** 창을 클릭하고 **Atlas UI Resources v1.2.4**를 다운로드하여 Atlas를 업데이트하십시오.
4. 프롬프트가 표시되면 기존 Atlas 모듈을 교체하도록 선택하십시오.

{{% alert color="info" %}} Mx8로 마이그레이션한 후 Atlas를 다시 업데이트하면 새 **theme 폴더**가 생성되므로 아직 **theme_oldest**에서 **theme**으로 커스터마이징된 파일을 이동할 필요가 없습니다.{{% /alert %}}

## 앱 변환 {#converting}

다음 하위 섹션은 Mendix 7에서 Mendix 8로 앱을 변환하는 단계를 설명합니다.

### 프로젝트 백업

변환을 시작하기 전에 최신 변경 사항을 Team Server에 커밋했거나 로컬 프로젝트의 백업을 만들었는지 확인하십시오.

### 버전 7의 최신 릴리스로 업그레이드 {#upgrade}

{{% alert color="warning" %}}
앱을 Mendix 7의 최신 버전인 7.23으로 업그레이드하는 것이 기술적으로 필요합니다. 7.23.x에서만 앱을 Mendix 8로 변환할 수 있습니다.
{{% /alert %}}

Mendix 7로 업그레이드하려면 다음 단계를 따르십시오:

1. Desktop Modeler 7.23의 최신 패치 릴리스를 다운로드하십시오.
2. Desktop Modeler 7.23.x에서 앱을 여십시오.
3. 필요한 경우 앱을 업그레이드하도록 허용하십시오.

### Mendix 7 프로젝트 검토

아래 섹션과 함께 앱을 검토하고 Mendix 8로 업그레이드하기 전에 추가 조치가 필요한지 평가하십시오.

특히 Java Action의 더 이상 사용되지 않는 항목([Java 버전, 더 이상 사용되지 않는 API 및 제거된 API](#deprecated-apis) 참조)은 Mendix 8로 업그레이드하기 전에 Mendix 7에서 수정하는 것이 더 쉽습니다. 그러나 Float 및 Currency 더 이상 사용되지 않는 오류는 Mendix 8에서 수정하는 것이 더 쉽습니다(지침은 아래의 [Float 및 Currency 유형 요소](#float-currency) 섹션을 참조하십시오).

### 버전 7 프로젝트 저장

앱이 이제 Mendix 8로 업그레이드할 준비가 되었습니다.

필요한 경우 돌아갈 수 있도록 이 시점에서 프로젝트를 백업/커밋하는 것이 좋습니다.

이제 Desktop Modeler 버전 7에서 프로젝트를 닫을 수 있습니다.

### 버전 8로 앱 업그레이드

Mendix가 앱을 업그레이드해 드립니다.

Mendix Studio Pro 8에서 프로젝트를 열고 Studio Pro가 앱을 버전 8로 업데이트하도록 허용하십시오.

### Studio Pro에서 오류, 경고 및 더 이상 사용되지 않는 항목 검토

모든 오류 메시지와 더 이상 사용되지 않는 항목에 대한 메시지를 검토하고 필요한 경우 변경하십시오.

더 이상 사용되지 않는 데이터 유형인 Currency 및 Float 중 하나 또는 둘 다를 사용하는 경우 오류가 표시됩니다. 자세한 내용은 아래의 [Float 및 Currency 유형 요소](#float-currency) 섹션을 참조하십시오.

### 모든 위젯 업그레이드

문제 발생 가능성을 최소화하려면 프로젝트에서 사용하는 모든 위젯과 기타 Marketplace 모델을 최신 버전으로 업데이트해야 합니다.

Marketplace에서 Marketplace 모듈의 최신 버전이 있는지 확인하십시오. Marketplace의 버전 릴리스 노트를 읽고 업그레이드 시 특정 작업을 수행해야 하는지 확인하십시오.

일반적으로 릴리스 노트에서 권장하지 않는 한 모듈을 제거하고 다시 가져오지 마십시오. 제거하고 다시 가져오면 모듈과 관련된 데이터 또는 구성이 손실될 수 있습니다.

### 앱 검토 및 테스트

마지막으로, 아래 섹션을 검토하고 필요한 모든 변경 사항을 적용했는지 확인하십시오.

예상치 못한 결과가 있는지 앱을 테스트하십시오.

{{% alert color="success" %}}
축하합니다! 앱이 성공적으로 Mendix 8로 업그레이드되었으며 정상적으로 작업을 계속할 수 있습니다.
{{% /alert %}}

## Float 및 Currency 유형 요소 {#float-currency}

Float 및 Currency 유형은 Mendix 7에서 더 이상 사용되지 않으며, 이제 Mendix 8에서 제거되었습니다.

다음 Float 또는 Currency 유형의 요소는 버전 8에서 오류를 보고합니다:

* 속성
* 상수
* 변수 생성 액션
* Data Set 열 및 매개변수
* Microflow/Nanoflow 매개변수 및 반환 유형
* Java/JavaScript Action 매개변수 및 반환 유형
* 'formatFloat', 'parseFloat' 및 'toFloat' 함수

대부분의 더 이상 사용되지 않는 오류를 단일 작업으로 수정할 수 있습니다. 이를 달성하려면 다음을 수행하십시오:

1. Studio Pro 8에서 Currency 및 Float 데이터 유형 지원과 관련된 오류 메시지를 찾으십시오.

    {{< figure src="/attachments/refguide8/general/moving-from-7-to-8/currency-float-error.png" alt="Error message: currency and float no longer supported" class="no-border" >}}

2. 오류 메시지를 마우스 오른쪽 버튼으로 클릭하십시오.

    {{< figure src="/attachments/refguide8/general/moving-from-7-to-8/currency-float-change-options.png" alt="Change manually or automatically?" class="no-border" >}}

3. **Convert all to Decimal**을 클릭하여 모든 속성을 자동으로 변환하십시오.

    {{< figure src="/attachments/refguide8/general/moving-from-7-to-8/convert-to-decimal-warning.png" alt="Warning when converting all Float and Currency to Decimal" class="no-border" >}}

4. **Convert all to Decimal**을 클릭하여 변환을 수행하십시오.

{{% alert color="warning" %}}
이 과정에서 속성이 변환된 경우, 다음에 앱을 로컬에서 실행하거나 배포할 때 새 속성 유형을 지원하기 위해 데이터베이스가 변환됩니다.

**이 데이터베이스 변환은 오래 걸릴 수 있습니다!** Mendix는 프로덕션 데이터베이스를 변환하는 데 얼마나 걸릴지 추정할 수 있도록 먼저 대표적인 데이터셋에서 데이터 변환을 테스트할 것을 권장합니다.
{{% /alert %}}

## REST 및 웹 서비스 호출 사용

Mendix 8은 **Call REST Service** 및 **Call Web Service** Activity와 관련된 두 가지 [커스텀 설정](/refguide8/custom-settings/)을 도입합니다.

이러한 Activity 중 하나를 사용하는 경우, 동시 최종 사용자의 성능 문제 가능성을 줄이기 위해 `http.client.MaxConnectionsPerRoute` 및 `http.client.MaxConnectionsTotal` 값을 늘리는 것이 좋습니다. 자세한 내용은 *커스텀 설정* 문서의 [일반 설정](/refguide8/custom-settings/#general)을 참조하십시오.

## 64비트 Studio Pro

Mendix Desktop Modeler 버전 7은 64비트 애플리케이션이었지만 32비트에서도 실행할 수 있었습니다.

Mendix Studio Pro는 64비트 버전의 Windows에서**만** 실행되는 64비트 애플리케이션입니다. Windows 7, Service Pack 1 이상의 64비트 버전이어야 합니다.

## Java 코드 생성 {#java-code-generation}

Mendix Studio Pro 8에서는 Java Action과 Dataset에 대한 Java 코드를 생성하는 방식을 변경하고 있습니다.

Mendix Desktop Modeler 버전 7은 때때로 Java Action과 Dataset의 매개변수 이름에 접미사(예: `Parameter1`)를 추가했습니다. 이 동작은 생성된 코드에서 이름 충돌을 방지하기 위해 필요했습니다. Mendix Desktop Modeler 7의 마이너 릴리스에서 이러한 충돌이 발생하지 않도록 여러 수정 사항을 도입하여 이 동작이 불필요해졌습니다.

또한 이름 충돌을 방지하려고 시도함으로써 작업 중인 것과 완전히 무관해 보이는 Java 컴파일 실패를 일으키는 경우가 있음을 발견했습니다. 접미사 추가가 이제 완전히 불필요하고 상당한 문제를 야기한다는 점을 감안하여 완전히 제거하기로 결정했습니다.

실제로 이것이 의미하는 바는 무엇일까요? 대부분의 앱에서는 아무것도 변경되지 않으며 이전과 같이 작동합니다. 그러나 제한된 수의 경우 Mendix Desktop Modeler 버전 7이 매개변수 이름에 접미사를 도입했을 수 있습니다. 예를 들어, `Customer`라는 매개변수가 생성된 Java 코드에서 `CustomerParameter1`이 될 수 있습니다. 이 접미사는 앱을 Mendix Studio Pro 8로 마이그레이션할 때 제거됩니다.

이 몇 가지 경우에 코드가 다시 컴파일되기 전에 간단한 수정을 해야 합니다:

* Marketplace에서 다운로드한 모듈의 Java Action이 오류를 일으키는 경우, 다시 다운로드하거나 최신 버전으로 업데이트하면 됩니다
* 자체 Java Action인 경우, 수정은 더 쉽습니다 — Java 코드에서 해당 접미사를 제거하면 됩니다(이전 예에서 `CustomerParameter1`이 다시 `Customer`가 됩니다).

### 차이점 예시

이 예시에서는 `Message`라는 매개변수가 있는 `LogMessage`라는 Java Action이 있습니다. Mendix Modeler 버전 7에서 `Message`라는 Domain Model Entity를 도입하면 다음과 같은 Java 코드가 생성됩니다(가독성을 위해 일부 코드가 생략되었습니다):

```java
        public LogMessage(IContext context, java.lang.String MessageParameter1)
        {
            super(context);
            this.MessageParameter1 = MessageParameter1;
        }
        @java.lang.Override
        public java.lang.Boolean executeAction() throws Exception
        {
            // BEGIN USER CODE
            Core.getLogger("MyLogger").info(this.MessageParameter1);
            // END USER CODE
        }
```

보시다시피, 매개변수 이름을 `Message`로 지정하는 대신 Mendix Modeler 버전 7은 `MessageParameter1`로 이름을 지정합니다. `executeAction()` 메서드의 사용자 코드에서는 `this.Message`를 사용하여 메시지를 로깅합니다. 이는 코드가 컴파일되지 않음을 의미합니다.

Studio Pro 8은 다음 코드를 생성합니다:

```java
        public LogMessage(IContext context, java.lang.String Message)
        {
            super(context);
            this.Message = Message;
        }
        @java.lang.Override
        public java.lang.Boolean executeAction() throws Exception
        {
            // BEGIN USER CODE
            Core.getLogger("MyLogger").info(this.Message);
            // END USER CODE
        }
```

이 코드는 예상대로 동작하며 바로 작동합니다. 그러나 이전에 Mendix Modeler 버전 7이 이 코드를 생성하는 방식에 맞게 사용자 코드를 변경했다면, 새 매개변수 이름을 사용하도록 사용자 코드를 업데이트하기만 하면 됩니다.

## 문제 해결

### 프로젝트를 열 수 없음: `Layout … has an invalid value …`

매우 드물게, 이전 버전의 Mendix에서 업그레이드해야 하는 프로젝트를 Mendix Studio Pro 8에서 열 때 아래와 유사한 메시지를 받을 수 있습니다.

{{< figure src="/attachments/refguide8/general/moving-from-7-to-8/layout-import-message.png" alt="Layouts Error Message" class="no-border" >}}

이것은 레이아웃에 **Layout type**에 대한 잘못된 값이 있을 때 발생합니다. *잘못된 레이아웃이 프로젝트에서 제외된 경우에도* 여전히 오류가 발생합니다.

프로젝트에서 오류를 찾을 수 있는 위치에 대한 표시는 아래 이미지를 참조하십시오.

{{< figure src="/attachments/refguide8/general/moving-from-7-to-8/layout-error-location.png" alt="Location of Layouts Error" class="no-border" >}}

이 문제를 해결하려면 이전 버전의 Mendix를 사용하여 잘못된 **Layout type**(위의 예에서는 `Legacy`)을 유효한 값으로 변경하십시오.

### DOM 및 Atlas UI 문제

Mendix 8에는 DOM 구조에 대한 여러 개선 사항이 포함되어 있습니다. 이러한 DOM 변경 사항은 앱의 Sass 스타일링에 영향을 미칩니다. 이러한 업데이트로 인해 Mendix 8 앱은 [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730) (v2.0.0 이상)를 사용하여 완성하도록 설계되었습니다. Atlas UI를 업그레이드하면 앱의 테마에 문제가 발생할 수 있습니다. DOM 또는 Atlas UI 마이그레이션 문제를 해결하려면 다음 문서를 참조하십시오:

* [DOM 변경 사항 문제 해결](/refguide8/migration-dom-issues/)
* [Atlas UI 변경 사항 문제 해결](/refguide8/migration-atlas/)
