---
title: "네이티브 모바일 앱에 폰트 추가"
url: /howto8/mobile/native-custom-fonts/
weight: 42
description: "이 사용법 가이드에서는 사용자 지정 폰트로 네이티브 모바일 앱의 디자인을 풍부하게 하는 방법을 알려드립니다."
---

## 소개

좋은 타이포그래피는 앱의 메시지를 전달하면서 회사의 브랜드 아이덴티티를 강화하는 데 중요한 역할을 합니다. 필요한 폰트를 설정하는 것은 필요한 폰트를 드래그 앤 드롭하고 앱의 스타일을 설정하는 것처럼 간단합니다. 아래의 [사전 요구 사항](#prerecs) 섹션에서 볼 수 있듯이 Mendix는 사용자 지정 폰트를 추가하는 두 가지 방법을 제공합니다: Mendix Native Mobile Builder 사용 또는 수동.

### Mendix 네이티브 모바일 앱의 폰트 소개

폰트 파일과 관련하여 여러 표준과 유형이 일반적입니다. True Type(*.ttf*), Open Type(*.otf* 또는 *.ttf*), Web Open Font Format(*.woff*)이 가장 일반적입니다. 

*.woff* 파일 유형은 네이티브 모바일 앱에서 작동하지 않습니다. 이 문서는 네이티브 모바일 플랫폼에만 초점을 맞추므로 앱에서 이 파일 유형을 사용하지 마십시오.

Open Type 폰트는 다양한 메타데이터와 단일 파일에 여러 폰트 변형을 패키징하는 가능성을 지원합니다. 이 기능은 모바일 플랫폼에서 지원되지 않습니다. 추가하려는 Font Family의 각 변형을 별도의 파일로 가지고 있어야 합니다. 

Android와 iOS는 각각 폰트에 대해 다른 접근 방식을 취합니다. Android는 추가된 각 폰트에 대해 명시적 선언이 필요하지만 iOS는 폰트 유형과 폰트 스타일을 동적으로 파생할 수 있습니다. 각 플랫폼에 폰트를 추가하려면 다른 접근 방식이 필요합니다. Android는 폰트 파일이 특정 폴더에 존재해야 하고 iOS는 폰트 파일을 빌드 프로세스에 명시적으로 링크해야 합니다. 

또한 두 플랫폼은 사용 가능한 폰트를 다르게 확인합니다. iOS는 Open Type 폰트를 완전히 지원하고 메타데이터를 기반으로 폰트를 선택할 수 있지만 Android는 폰트 파일을 가중치와 스타일에 명시적으로 링크해야 합니다.

Mendix 네이티브 모바일 앱의 기반 프레임워크인 React Native는 폰트 추가 프로세스를 통합합니다. 예를 들어 Android에서 **assets/fonts** 아래에 추가된 폰트는 앱에 명시적으로 링크됩니다. 이러한 폰트는 일상적으로 사용하는 일반 CSS 속성을 사용하여 위젯의 스타일을 지정하기 위해 프레임워크에 직접 노출됩니다.

모바일 폰트 기능에는 제한이 있습니다. 예를 들어 Android는 매우 제한된 폰트 유형 세트를 지원합니다: regular, bold, italic, bold italic.

이것이 앱의 CSS 스타일에 어떤 의미가 있을까요? 

예를 들어 CSS 스타일에 다음 스니펫을 사용하면 어떻게 될까요:

```css
{ 
    fontWeight: 550
}
```

Android에서 앱을 실행할 때 폰트는 예상하는 세미 볼드 폰트 대신 일반으로 표시됩니다. 이는 Android가 먼저 등록된 사용 가능한 폰트 스타일을 조회하기 때문입니다. 가중치를 확인할 수 없으면 차선의 옵션으로 대체합니다. 스타일에도 동일하게 적용됩니다.

또한 Android는 폰트 파일 이름이 실제 폰트 패밀리 이름, 가중치 및 스타일의 조합이기를 기대합니다. 예를 들어 Times New Roman bold italic의 경우 *TimesNewRoman_bold_italic.ttf*와 같은 것을 기대합니다. 이러한 명명 규칙을 준수하지 않으면 `fontFamily`, `fontWeight`, `fontStyle` 속성이 텍스트를 올바르게 스타일링하지 못합니다.

그렇다면 이러한 문제를 어떻게 완화할 수 있을까요? 먼저 일반 CSS 텍스트 속성 `fontWeight`와 `fontStyle`을 사용하여 텍스트를 명시적으로 스타일링하는 것을 피해야 합니다. 결과는 플랫폼마다 다릅니다. 대신 PostScript 이름을 사용하십시오. 구체적으로, 여러 가중치와 스타일이 있는 단일 `fontFamily` 속성 대신 가중치와 스타일 조합별로 폰트 패밀리를 정의해야 합니다.

예를 들어 다음과 같이 작성하는 대신: 

```text
export const bold = {
    fontFamily: "Times New Roman",
    fontWeight: "bold" | "500"
}
```

다음과 같이 상수를 정의하십시오: 

```text
export const timesNewRomanFontFamily = {
    regular: "TimesNewRomanPSMT",
    boldItalic: "TimesNewRomanPS-BoldItalicMT",
    bold: "TimesNewRomanPS-BoldMT",
    italic: "TimesNewRomanPS-ItalicMT",
};
```

그런 다음 다음과 같이 스타일을 정의하십시오: 

```text
export const boldText = { 
    fontFamily: timesNewRomanFontFamily.bold,
}
```

이제 `boldText`를 사용하는 곳마다 두 플랫폼 모두에서 일관되게 예상한 결과를 얻을 수 있습니다.

## 사전 요구 사항 {#prerecs}

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

[Mendix Native Mobile Builder를 사용하여](#fonts-nbui) 폰트를 추가하기 전에:

* Native Mobile Builder의 마법사를 적어도 한 번 실행하십시오

[수동으로](#manual) 폰트를 추가하기 전에:

* 네이티브 모바일 [로컬 빌드 프로세스](/howto8/mobile/native-build-locally/)를 이해하십시오
* 저장소를 로컬에서 체크아웃하십시오 
* Git을 이해하고 Git 도구가 설치되어 있어야 합니다
* 아래 iOS 섹션의 경우 Xcode가 설치되어 있어야 합니다

## Mendix Native Mobile Builder로 사용자 지정 폰트 추가 {#fonts-nbui}

Mendix Native Mobile Builder는 앱에 사용자 지정 폰트를 추가하는 것을 단순화합니다. Android 및 iOS 앱을 모두 구성하고 Mendix 앱의 네이티브 스타일에 간단히 복사하여 붙여넣을 수 있는 스니펫도 제공합니다. 앱에 사용자 지정 폰트를 추가하려면 다음 단계를 따르십시오: 

1. Native Builder를 시작하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Native Builer"   width="350"  class="no-border" >}}

1. **Custom Fonts**로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/advanced-fonts.png" alt="Custom fonts screen"   width="350"  class="no-border" >}}

1. 적용하려는 폰트 파일을 드래그 앤 드롭하십시오. 예를 들어 여기에서는 Times New Roman을 사용합니다. 프로세스가 완료되면 목록에 업로드된 폰트 패밀리가 표시되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/advanced-fonts2.png" alt="Custom fonts screen filled"   width="350"  class="no-border" >}}

1. 오른쪽 화살표를 사용하여 목록을 확장하십시오. 예상되는 폰트가 사용 가능한지 확인하십시오. 원하는 만큼 많은 폰트를 계속 추가할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/advanced-fonts2.png" alt="Custom fonts screen filled and extended"   width="350"  class="no-border" >}}

1. 스니펫 버튼을 클릭하여 스타일에 복사할 수 있는 코드 스니펫을 가져오십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/advanced-fonts4.png" alt="Custom fonts screen code snippet"   width="350"  class="no-border" >}}

1. 폰트가 포함된 새 바이너리를 얻으려면 앱을 빌드하십시오. 

## 앱에서 사용자 지정 폰트 사용

새 폰트를 사용하여 콘텐츠를 스타일링하려면 다음 지침을 따르십시오:

1. Native Mobile Builder에서 스니펫을 복사하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/advanced-fonts4.png" alt="Custom fonts screen code snippet"   width="350"  class="no-border" >}}

1. 스타일 *js* 파일을 열고 스니펫을 붙여넣으십시오. 이 예에서는 *custom-variables.js* 파일이 사용됩니다. 앱 스타일링에 대한 자세한 내용은 [Mendix 네이티브 모바일 앱 스타일 지정 방법](/howto8/mobile/how-to-use-native-styling/)을 참조하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/custom-variables.png" alt="Custom variables file"   width="350"  class="no-border" >}}

1. 이제 상수를 가져와서 모든 텍스트 스타일의 폰트 패밀리를 정의하는 데 사용할 수 있습니다. 이러한 클래스를 사용하여 스타일이 지정된 요소는 이제 폰트를 사용하여 스타일이 지정됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/custom-style.png" alt="Custom style"   width="350"  class="no-border" >}}

## 수동으로 사용자 지정 폰트 추가 {#manual}

Mendix Native Mobile Builder가 폰트 추가를 단순화하지만 수동으로 폰트를 추가해야 하는 상황이 발생할 수 있습니다.

### Android 앱에 사용자 지정 폰트 추가

Android 앱에 사용자 지정 폰트를 수동으로 추가하려면 다음 지침을 따르십시오: 

1. 사용하려는 모든 폰트를 수집하십시오.
1. [Open Type Inspector](https://opentype.js.org/font-inspector.html)와 같은 도구를 사용하여 각 폰트의 PostScript 이름을 파생하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/postscript-name.png" alt="Open Type Inspector name metadata"   width="350"  class="no-border" >}}

1. PostScript 이름과 일치하도록 폰트 이름을 변경하십시오. 예에서 사용된 Times New Roman 폰트에는 다음 옵션이 있습니다: 
    * TimesNewRomanPSMT, regular용
    * TimesNewRomanPS-BoldMT, bold용

1. 이름이 변경된 폰트를 `android\app\src\main\assets\fonts` 폴더에 복사하십시오.
1. 도구를 사용하여 앱을 빌드할 계획이라면 변경 사항을 커밋하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/custom-fonts-android-repo.png" alt="GitHub repo after uploading custom fonts"   width="350"  class="no-border" >}}

1. 선호하는 방법을 사용하여 Android 앱을 빌드하십시오.

축하합니다. Android 앱에 폰트를 추가하는 방법을 배웠습니다.

### iOS 앱에 사용자 지정 폰트 추가

Xcode를 사용하여 iOS 앱에 수동으로 폰트를 추가하십시오:

1. 사용하려는 모든 폰트를 수집하십시오.
1. [Open Type Inspector](https://opentype.js.org/font-inspector.html)와 같은 도구를 사용하여 각 폰트의 PostScript 이름을 파생하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/postscript-name.png" alt="Open Type Inspector name metadata"   width="350"  class="no-border" >}}

1. PostScript 이름과 일치하도록 폰트 이름을 변경하십시오. 예에서 사용된 Times New Roman 폰트에는 다음 옵션이 있습니다: 
    * TimesNewRomanPSMT, regular용
    * TimesNewRomanPS-BoldMT, bold용

1. Xcode를 열고 **ios\NativeTemplate.xcworkspace**에서 workspace를 선택하십시오.
1. 이름이 변경된 폰트를 Project Explorer의 **Resources/Fonts** 폴더로 드래그하십시오. 
1. 나타나는 대화 상자에서 두 타겟을 모두 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/custom-fonts-xcode-dialog.png" alt="Xcode option dialog for adding files"   width="350"  class="no-border" >}}

1. 폴더 구조는 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/custom-fonts-project-explorer-filled.png" alt="Project explorer with fonts"   width="350"  class="no-border" >}}

1. <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>0</kbd>을 눌러 *Info.plist* 파일을 열고 파일을 검색하십시오. <kbd>Enter</kbd>를 눌러 여십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/xcode-open-infoplist.png" alt="Xcode Open file dialog"   width="350"  class="no-border" >}}

1. `Fonts provided by the application` 키를 찾으십시오. 필요한 경우 확장하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/xcode-plist-fonts.png" alt="Plist fonts key"   width="350"  class="no-border" >}}

1. 키 옆의 **+** 버튼을 눌러 목록에 새로운 빈 항목을 생성하십시오.
1. 추가하려는 폰트 파일 이름을 값으로 입력하십시오. 이 경우 regular Times New Roman 폰트를 추가하므로 파일 이름 값은 `TimesNewRomanPSMT.ttf`입니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/xcode-plist-fonts-filled.png" alt="Plist fonts key filled"   width="350"  class="no-border" >}}

1. 도구를 사용하여 앱을 빌드할 계획이라면 변경 사항을 커밋하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-custom-fonts/custom-fonts-ios-repo.png" alt="GitHub repo after uploading custom fonts"   width="350"  class="no-border" >}}

1. 선호하는 방법으로 iOS 앱을 빌드하십시오.

축하합니다. iOS 앱에 폰트를 추가하는 방법을 배웠습니다. 

## 추가 읽기

* [네이티브 모바일 스타일링 구현](/howto8/mobile/native-styling/)
* [일반적인 네이티브 모바일 문제 해결](/howto8/mobile/common-issues/)
