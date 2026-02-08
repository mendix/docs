---
title: "Mendix Native Mobile 앱 스타일링"
url: /howto8/mobile/how-to-use-native-styling/
weight: 30
description: 첫 번째 Mendix Native App 스타일링을 위한 사용 방법입니다.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix 8에서는 Mendix Studio Pro로 디자인 속성을 변경할 수 있습니다. 또한 모든 Native Mobile 스타일링이 JavaScript로 작성되기 때문에 스타일링 사용자 정의를 적용하는 새로운 방법이 있습니다. 네이티브 스타일링, 클래스 이름 및 Widget 스타일링에 대한 자세한 내용은 [Native Mobile 스타일링 참조 가이드](/refguide8/native-styling-refguide/)를 참조하십시오.

## 전제 조건 

* 원하는 통합 개발 환경(IDE)을 설치하십시오(Mendix는 [Microsoft Visual Studio Code](https://code.visualstudio.com/)를 권장합니다)
* *Native Mobile 시작하기*의 [Quickstarter 앱을 기반으로 새 앱 만들기](/howto8/mobile/getting-started-with-native-mobile/#quickstartapp) 섹션을 따라 Blank Native Mobile App 템플릿을 기반으로 Mendix 앱을 만드십시오
* 앱을 테스트하고 스타일링 변경 사항을 확인할 수 있도록 [Google Play](https://play.google.com/store/apps/details?id=com.mendix.developerapp) 스토어 또는 [Apple App Store](https://apps.apple.com/us/app/make-it-native/id1334081181)에서 모바일 디바이스에 Make It Native 8 앱을 다운로드하십시오

### Quickstarter 앱 사용자 정의

[Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/)은 Atlas UI 리소스 패키지를 사용하여 스타일이 적용됩니다. 이 패키지는 다음으로 구성됩니다:

* Widget
* 빌딩 블록
* 페이지 템플릿
* 페이지 레이아웃 

이러한 리소스를 사용하면 다양한 인터페이스 부분으로 앱 스타일을 지정할 수 있습니다. 그러나 다음 단계에 따라 추가로 사용자 정의할 수 있습니다:

1. **Home_Native** 홈 페이지에서 **Intro screen** 콘텐츠를 삭제하십시오.
1. 앱의 홈 페이지에 버튼 Widget을 놓으십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/button-one.png" alt="button" class="no-border" >}}

1. **Run Locally**를 클릭한 다음 **View**를 클릭하여 앱을 확인하십시오. 버튼은 기본 스타일링인 흰색 텍스트의 파란색으로 표시됩니다.
1. 선택한 IDE를 사용하여 *theme/styles/native/app/custom-variables.js*를 여십시오.
1. `brand.primary`를 **#0595DB**에서 *rosybrown*으로 변경하십시오:

    ```javascript
    //Brand Style
    export const brand = {
        primary: "rosybrown",
        success: "#76CA02",
        warning: "#f99b1d",
        danger: "#ed1c24",
    };
    ```

1. 파일을 저장하십시오.
1. **Run Locally**를 클릭하여 변경 사항을 적용하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/brand-primary-rosybrown.png" alt="rosybrown button" class="no-border" >}}

    기본 버튼을 로지 브라운으로 성공적으로 변경했습니다. 이 스크린샷은 Make It Native 앱의 [Dark Mode](/releasenotes/mobile/make-it-native-app/#new-features-5)를 사용합니다.

## 클래스

클래스는 앱의 특정 요소가 어떻게 렌더링되는지 정의하는 스타일링 속성 그룹입니다. 예를 들어 버튼에 적용되는 클래스를 만들면 해당 클래스를 재사용하여 후속 버튼을 쉽게 동일한 방식으로 스타일링할 수 있습니다. Widget에 클래스를 적용하는 방법을 배우려면 아래 단계를 따르십시오.

1. 앱의 홈 페이지에 두 번째 버튼 Widget을 놓으십시오.
2. 앱을 실행하여 버튼을 확인하십시오.
3. 버튼 Widget을 선택한 다음 **Properties** 패널을 클릭하십시오. **Common** 아래에 버튼의 **Class** 필드가 있습니다.
4. **Class** 필드에 *btnSuccess*를 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/btn-success.png" alt="class field" class="no-border" >}}

5. **Run Locally**를 클릭하여 저장하고 앱을 새로 고치십시오. 버튼이 녹색으로 변한 것을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/green-button.png" alt="green button" class="no-border" >}}

    Atlas에서 제공하는 클래스를 버튼 Widget에 성공적으로 적용했습니다.

## 디자인 속성

디자인 속성은 Mendix Studio Pro에서 사용하기 전에 찾아볼 필요 없이 쉽게 사용할 수 있는 클래스입니다. 디자인 속성은 적용되는 모든 Widget과 함께 Mendix Studio Pro 내부에 있습니다. **Properties** 패널에서 접근하거나 Widget을 더블 클릭하고 **Appearance** 탭을 클릭하여 더 고급 옵션에 접근할 수 있습니다. 디자인 속성은 여러 Widget에서 사용할 일반적인 스타일링을 만드는 데 특히 유용합니다. 아래에서 디자인 속성을 사용하여 버튼 Widget을 변경합니다.

1. 앱의 홈 페이지에 세 번째 버튼 Widget을 놓으십시오.
2. 버튼을 선택하고 **Properties** 패널에서 **Design Properties**를 찾으십시오.
3. **Button style** 드롭다운 화살표를 클릭하고 **Warning**을 선택하십시오.

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/btn-warning.png" alt="warning button" class="no-border" >}}

4. 앱을 다시 실행하여 *design* 버튼의 새로운 색상을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/orange-button.png" alt="orange button" class="no-border" >}}

    디자인 속성을 사용하여 파란색 기본 버튼 Widget을 주황색으로 변경했습니다. 다른 경고 버튼의 경우 동일한 디자인 속성을 쉽게 적용할 수 있습니다.

## 자체 클래스 만들기 {#creating-your-own-classes}

특정 디자인 요구 사항이 있는 경우 맞춤 클래스를 빌드해야 합니다. 사용자 정의 클래스의 기능을 활용하려면 아래 지침을 따르십시오.

1. 앱의 홈 페이지에 네 번째 버튼 Widget을 놓으십시오.
2. IDE를 사용하여 Mendix 앱의 폴더로 이동하십시오.
3. 앱의 **theme** 폴더를 여십시오.
4. *styles/native/app/custom.js*를 여십시오.
5. 다음 코드 스니펫을 *styles/native/app/custom.js*에 복사하십시오:

    ```javascript
    export const className = {
        container: {
            <ViewStyle properties>
        },
        icon: {
        },
        caption: {
            <TextStyle properties>
        }
    }
    ```

    자체적으로 클래스를 변경하려면 [Native Mobile 스타일링 참조 가이드](/refguide8/native-styling-refguide/)를 참조하여 Widget 구조를 이해하십시오.

6. 이제 붙여넣은 코드를 편집합니다. 기본 버튼 Widget을 사용자 정의하기 위해 투명한 배경색을 적용하십시오:

    ```javascript
    export const className = {
        container: {
            backgroundColor: "transparent"
        },
        icon: {
        },
        caption: {
        }
    }
    ```

7. 앱에 이미 기본 스타일링이 있으므로 icon 및 caption 속성을 제거할 수 있습니다. 또한 상수를 `btnBordered`와 같은 고유하고 자명한 값으로 변경하십시오: 

    ```javascript
    export const btnBordered = {
        container: {
            backgroundColor: "transparent"
        },
    }
    ```

8. 작업을 저장하십시오.
9. Mendix Studio Pro에서 네 번째 버튼을 선택하십시오. **Properties** 패널에서 **Class** 필드에 *btnBordered*를 입력하십시오.
10. **Run Locally**를 클릭하여 버튼의 배경색이 투명한 것을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/bordered-button.png" alt="bordered button" class="no-border" >}}

    간단한 버튼 Widget을 성공적으로 사용자 정의했습니다. 이러한 기본 원칙을 사용하여 독특한 모양의 Widget을 사용자 정의할 수 있습니다.

## 사용자 정의 디자인 속성 구현

이 섹션에서는 만든 클래스를 디자인 속성으로 전환하여 다른 사람들이 쉽게 사용할 수 있도록 하는 방법을 배웁니다.

1. 앱의 홈 페이지에 다섯 번째 버튼 Widget을 놓으십시오.
2. IDE에서 *theme/settings-native.json*을 여십시오.
3. `ActionButton` 클래스를 찾으십시오. `ActionButton`에 이미 디자인 속성이 있습니다. 다음으로 직접 추가합니다.
4. `ActionButton`의 첫 번째 객체 아래에 다음 객체를 놓으십시오:

    ```json
    {
        "name": "Bordered",
        "type": "Toggle",
        "description": "Create a bordered button.",
        "class": "btnBordered"
    },
    ```

5. Mendix Studio Pro에서 <kbd>F4</kbd>를 눌러 프로젝트 디렉토리를 동기화하십시오.
6. 다섯 번째 버튼을 선택하십시오. **Properties** > **Design Properties**에서 **Bordered** 디자인 속성이 이제 표시되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/bordered-design-property.png" alt="bordered design property" class="no-border" >}}

7. 드롭다운 메뉴를 클릭하고 **Yes**를 선택하여 **Bordered** 디자인 속성을 활성화하십시오.

8. **Run Locally**를 다시 클릭하고 앱을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/design-property-border-button.png" alt="design properties border" class="no-border" >}}

    자체 사용자 정의 디자인 속성을 구현했습니다. 다른 사용자는 클래스 이름 목록을 참조하지 않고도 디자인 속성을 빠르게 활용할 수 있습니다.

축하합니다! 이 사용 방법을 완료함으로써 스타일링 속성을 변경하고, 클래스와 디자인 속성을 적용하며, 자체 클래스와 디자인 속성을 만드는 방법을 배웠습니다.

## 추가 정보

* [Native Mobile 스타일링 구현 방법](/howto8/mobile/native-styling/)
* [Native Mobile 스타일링 참조 가이드](/refguide8/native-styling-refguide/)
* [Mendix Atlas UI](/howto8/front-end/atlas-ui/)
* [Native Mobile 시작하기](/howto8/mobile/getting-started-with-native-mobile/)
