---
title: "사용자 정의 Java로 애플리케이션 확장하기"
linktitle: "사용자 정의 Java로 앱 확장"
url: /refguide9/extending-your-application-with-custom-java/
weight: 3
description: "사용자 정의 Java 코드로 애플리케이션을 확장하는 방법을 설명합니다."
---

## 소개

대부분의 애플리케이션 로직은 Microflow를 사용하여 개발할 수 있습니다. Microflow는 매우 강력하며 모든 애플리케이션에 필요한 많은 기능을 포함합니다. 누락된 기능으로 인해 막히는 것을 방지하기 위해 Mendix Microflow는 확장 가능합니다. 따라서 무언가가 누락되었다고 느끼면 Java Action을 사용하여 직접 추가할 수 있습니다.

이 사용 가이드에서는 다음을 수행하는 방법을 배울 수 있습니다:

* 사용자 정의 Java 코드로 애플리케이션 확장

## 전제 조건

이 사용 가이드를 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* Eclipse 설치([여기](https://eclipse.org/)에서 다운로드)

    {{% alert color="info" %}}모든 텍스트 편집기를 사용하여 사용자 정의 Java Action을 만들 수 있지만 Eclipse를 사용하는 것을 강력히 권장합니다. Studio Pro에는 Eclipse에서 구성해야 하는 모든 것이 자동으로 수행되도록 확인하는 **Deploy for Eclipse** 기능이 포함되어 있습니다. 앱을 Eclipse 작업 환경으로 가져오기만 하면 됩니다.{{% /alert %}}

* [Asset Manager App](https://marketplace.mendix.com/link/component/69674) 템플릿을 사용하여 앱을 준비합니다.

    ⚠ [Asset Manager App](https://marketplace.mendix.com/link/component/69674) 템플릿은 지원 중단되었으며 Studio Pro 8.14.0에서 생성되었습니다. Studio Pro 9에서 사용하려면 이 앱 템플릿을 업그레이드해야 합니다. 이를 수행하려면 다음 단계를 따르십시오:

    1. 아무 Studio Pro 9 버전으로 **Asset Manager App** 템플릿을 엽니다.
    2. 팝업 **경고** 대화 상자에서 **Convert in-place**를 클릭하면 Mendix가 자동으로 앱을 Studio Pro 9 앱으로 업그레이드합니다.

    이제 업그레이드된 **Asset Manager App** 템플릿을 사용하여 Studio Pro 9에서 사용 가이드를 계속할 수 있습니다. 자세한 내용은 [Mendix Studio Pro 8에서 9로 전환하기](/refguide9/moving-from-8-to-9/)를 참조하십시오.

## Studio Pro에서 Java Action 추가

1. **AssetManager** 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Java action**을 선택합니다.
2. 새 Java Action의 **Name**에 *ReverseAssetName*을 입력하고 **OK**를 클릭합니다.
3. **Java Action** 마법사에서 **Add**를 클릭하여 매개변수를 추가하고 다음을 수행합니다:</br>

    1. 새 매개변수의 **Name**에 *inputAssets*를 입력합니다.</br>
    2. **Type**에서 **Object**를 선택합니다.</br>
    3. **Entity**에서 **Select**를 클릭하고 객체 유형으로 **AssetManager.Asset**을 선택합니다.</br>
    4. **OK**를 클릭합니다.</br>

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/add.png"   width="500"  class="no-border" >}}

4. **Java Action** 마법사에서 Java Action의 **Return type**을 **String**으로 변경하고 **OK**를 클릭하여 Java Action을 저장합니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/return.png"   width="500"  class="no-border" >}}

5. Studio Pro 상단 도구 모음에서 **App** > **Deploy for Eclipse**를 선택합니다.

## Eclipse에서 Java Action 편집

Eclipse에서 Java Action을 편집하려면 다음 단계를 따르십시오:

1. Eclipse를 열고 **Package Explorer** 창에서 마우스 오른쪽 버튼을 클릭한 후 **Import**를 선택합니다.
2. **Import** 창에서 **Existing Projects into Workspace**를 선택하고 **Next**를 클릭합니다.
3. 앱 디렉터리를 이 앱의 루트 디렉터리로 설정하고 **Finish**를 클릭합니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/import3.png"   width="400"  class="no-border" >}}

    {{% alert color="info" %}}앱 디렉터리가 어디인지 모르는 경우, Studio Pro에서 **App** > **Show App Directory in Explorer**를 선택하십시오.{{% /alert %}}

4. Eclipse의 **Package Explorer**에서 **ReverseAssetName.java**를 더블클릭합니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/package-explorer.png"   width="300"  class="no-border" >}}

    Java 코드에는 `//BEGIN USER CODE`와 `//END USER CODE` 주석 문으로 표시된 플레이스홀더가 있습니다. 여기에 자체 Java 코드를 추가할 수 있습니다. Studio Pro는 이 두 문 사이의 코드를 절대 덮어쓰지 않습니다.

    ```java
        @java.lang.Override
        public java.lang.String executeAction() throws Exception
        {
            this.inputAssets = __inputAssets == null ? null : assetmanager.proxies.Asset.initialize(getContext(), __inputAssets);

            // BEGIN USER CODE
            throw new com.mendix.systemideinterfaces.MendixRuntimeException("Java action was not implemented");
            // END USER CODE
        }
    ```

    Studio Pro는 `inputAssets`에 대한 변수를 생성합니다. 이 변수를 사용하여 자산의 이름을 가져오고 뒤집을 수 있습니다.

5. 기존 줄:

    ```java
        throw new com.mendix.systemideinterfaces.MendixRuntimeException("Java action was not implemented");
    ```

    을 `//BEGIN USER CODE`와 `//END USER CODE` 사이에서 다음 코드로 교체합니다:

    ```java
    String assetsAssetName = this.inputAssets.getAssetName(this.getContext());
    return new StringBuilder(assetsAssetName).reverse().toString();
    ```

6. **File** > **Save**를 선택하여 Eclipse에서 Java Action을 저장합니다.

## Microflow에서 Java Action 호출

1. Studio Pro로 돌아가서 **App Explorer**를 통해 **Home** 페이지를 찾습니다.
2. **{AssetName}** 아래에서 마우스 오른쪽 버튼으로 클릭하고 **Add widget**을 선택합니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/add-widget.png"   width="300"  class="no-border" >}}

3. 나타나는 **Select Widget** 대화 상자에서 **Buttons** > **Call microflow button**을 선택합니다.
4. **Select Microflow** 대화 상자에서 **New**를 클릭하여 새 Microflow를 생성합니다.
5. 새 Microflow의 **Name**에 *ReverseName*을 입력하고 **OK**를 클릭합니다.
6. 방금 생성한 **Reverse name** 버튼을 마우스 오른쪽 버튼으로 클릭하고 **Go to on click microflow**를 선택하여 새 Microflow를 엽니다.
7. **App Explorer**에서 **ReverseAssetName** Java Action을 녹색 시작 이벤트와 빨간색 종료 이벤트 사이의 줄로 끌어다 놓습니다. 이렇게 하면 Java Action Activity가 생성됩니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/microflow2.png"   width="500"  class="no-border" >}}

8. 생성된 Activity를 더블클릭하여 **Call Java Action** 속성 편집기를 열고, 첫 번째 입력에 대해 **Edit**를 클릭하여 인수 편집기를 엽니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/call1.png"   width="500"  class="no-border" >}}

9. <kbd>Ctrl</kbd> 키를 누른 상태에서 <kbd>Space</kbd>를 눌러 코드 완성 편집기를 엽니다.
10. **$Asset (AssetManager.Asset)**를 선택합니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/argument.png"   width="500"  class="no-border" >}}

11. **OK**를 클릭하여 표현식을 저장합니다.
12. **Call Java Action** 속성 편집기에서 출력 **Variable**을 *ReversedName*으로 변경합니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/call2.png"   width="500"  class="no-border" >}}

13. **OK**를 클릭하여 속성을 저장합니다. 이제 Microflow는 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/microflow3.png"   width="500"  class="no-border" >}}

14. **Toolbox**(필요한 경우 **View** > **Toolbox**를 선택하여 열기)에서 **Show message** Activity를 Microflow로 끌어다 놓습니다.
15. Activity를 더블클릭하여 **Show Message** 속성 편집기를 열고 **Template**에 *Reversed name: {1}*을 입력합니다.
16. **Parameters** 섹션에서 **New**를 클릭하여 표현식 편집기를 엽니다.
17. Java Action의 출력 변수인 **$ReversedName (String)**을 선택합니다.
18. **OK**를 클릭하여 매개변수를 저장합니다. **Show Message** 속성은 이제 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/show-message.png"   width="500"  class="no-border" >}}

19. **OK**를 클릭하여 **Show message** Activity를 저장합니다. 이제 Microflow는 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/microflow4.png"   width="500"  class="no-border" >}}

## 배포 및 결과 확인

1. **Run Locally** ({{% icon name="controls-play" %}})를 클릭하여 애플리케이션을 로컬로 배포하고 **View App**을 클릭하여 브라우저에서 애플리케이션을 엽니다.
2. 오른쪽 상단에서 **Add asset**을 선택합니다.
3. 새 창에서 **Name** 필드에 *Asset to Reverse*를 입력합니다.
4. **Save**를 선택합니다.
5. 앱의 **Dashboard**에서 새 자산을 선택합니다.
6. **Home** 페이지에서 새로 생성된 자산에 대해 **Reverse name**을 클릭합니다:

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/app1.png"   width="200"  class="no-border" >}}

7. 자산의 뒤집어진 이름이 대화 상자에 나타납니다.

    {{< figure src="/attachments/refguide9/java-programming/extending-your-application-with-custom-java/app2.png"   width="400"  class="no-border" >}}

## 문제 해결 {#troubleshooting}

앱을 실행할 때 `UnsupportedClassVersionError`가 발생하면 다음 단계를 따르십시오:

1. **App** > **Clean Deployment Directory**를 선택하여 앱의 **deployment** 폴더를 정리합니다.
2. Studio Pro에서 사용하는 것과 동일한 JDK 버전을 Eclipse에 추가합니다(이것이 권장되는 버전 상관관계입니다). JDK 요구 사항에 대한 자세한 내용은 *시스템 요구 사항*의 [Mendix Studio Pro](/refguide9/system-requirements/#sp) 섹션을 참조하십시오.

## 더 읽기

* [Eclipse 사용하기](/refguide9/using-eclipse/)
* [Java API 사용하기](/refguide9/java-api-tutorial/)
