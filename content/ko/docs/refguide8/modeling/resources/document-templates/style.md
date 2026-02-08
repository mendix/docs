---
title: "스타일"
url: /refguide8/style/
---

## 소개

대부분의 Document Template 위젯과 컴포넌트 및 최상위 문서에서 스타일을 정의할 수 있습니다. 이 스타일은 CSS(Cascading Style Sheets)로 설계됩니다. 그러나 보다 일반적인 스타일 속성의 대부분은 스타일 편집기를 사용하여 조정할 수 있습니다. 스타일링하는 위젯의 유형에 따라 스타일 편집기에서 다른 옵션이 표시됩니다. 'Custom Styles' 탭에서 스타일을 완전히 사용자 정의할 수도 있습니다.

## 탭 페이지

### 글꼴

글꼴 탭 페이지가 표시되는 위젯/컴포넌트:

* Document Template
* Data Grid
* Data Grid Cell
* Dynamic Label
* Title
* Static Label
* Table

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/style/2018-03-01_14-27-27.png" class="no-border" >}}

스타일 편집기의 글꼴 탭 페이지입니다.
{{% /alert %}}

아랍어나 태국어와 같이 특수 문자가 포함된 언어로 텍스트를 표시하려면 이러한 문자를 지원하는 글꼴을 스타일 편집기에서 선택하십시오.

### 셀 스타일링

셀 스타일링 탭 페이지가 표시되는 위젯/컴포넌트:

* Data Grid
* Data Grid Cell
* Title
* Table
* Table Cell

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/style/2018-03-01_14-29-13.png" class="no-border" >}}

스타일 편집기의 셀 스타일링 탭 페이지입니다.
{{% /alert %}}

### 사용자 정의 스타일

사용자 정의 스타일 탭 페이지는 스타일링을 허용하는 위젯/컴포넌트에 항상 표시됩니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/style/2018-03-01_14-33-46.png" class="no-border" >}}

스타일 편집기의 사용자 정의 스타일 탭 페이지입니다.
{{% /alert %}}

## PDF 문서용 사용자 정의 글꼴 {#custom-fonts}

사용자 정의 스타일을 사용하여 생성된 문서에 사용자 정의 글꼴을 포함할 수 있습니다. 예를 들어, 텍스트가 Verdana 글꼴로 표시되도록 하려면 스타일에 *font-family: Verdana;*를 포함하면 됩니다. 그러나 PDF 문서를 생성하는 경우 추가 작업이 필요합니다. 다음 섹션에서 그 방법을 알려드립니다.

PDF 생성기는 PDF 파일 생성을 담당하는 라이브러리의 구성 파일을 편집하여 사용자 정의 글꼴을 포함하도록 설정할 수 있습니다. 이 파일은 Mendix 설치 폴더의 하위 폴더 /runtime/lib에서 찾을 수 있습니다. 파일 이름은 fop.xconf입니다.
Mendix 버전 업데이트나 애플리케이션 배포를 쉽게 하기 위해 이 파일을 직접 편집하지 말고 프로젝트 resources 폴더에 복사하는 것을 강력히 권장합니다. 이 파일이 resources 폴더에 있으면 런타임이 기본 파일 대신 자동으로 해당 파일에 접근합니다.

fop.xconf 파일과 모든 글꼴이 resources 폴더에 있으면 사용하려는 글꼴을 폴더에 추가할 수 있습니다. 다음으로 텍스트 편집기에서 fop.xconf 파일을 여십시오. 구성 파일은 XML 형식입니다.

자체 글꼴을 추가하려면 다음 설정을 사용하십시오:

```java

<font kerning="yes" embed-url="mycustomfont.ttf">
    <font-triplet name="myfont" style="normal" weight="normal"/>
</font>
```

embed-url은 라이브러리가 글꼴 파일을 찾을 수 있는 위치입니다. font-triplet-name은 사용자 정의 CSS 스타일에서 사용할 이름입니다. 

이탤릭 또는 굵은 글꼴 버전을 사용하려면 이를 별도로 지정해야 합니다. 예:

```java
<font kerning="yes" embed-url="mycustomfontinbold.ttf">
   <font-triplet name="myfont" style="normal" weight="bold"/>
</font>

<font kerning="yes" embed-url="mycustomfontinitalic.ttf">
   <font-triplet name="myfont" style="italic" weight="normal"/>
</font>

<font kerning="yes" embed-url="mycustomfontinboldanditalic.ttf">
   <font-triplet name="myfont" style="italic" weight="bold"/>
</font>
```

최종 설정은 다음과 같아야 합니다:

* *fop.xconf* 파일, 사용자 정의 글꼴 및 6개의 기본 글꼴이 프로젝트 resources 폴더에 있어야 합니다
* *fop.xconf* 파일에 사용자 정의 글꼴에 대한 참조가 포함되어야 합니다
