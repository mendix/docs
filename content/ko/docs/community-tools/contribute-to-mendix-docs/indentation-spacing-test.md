---
title: "들여쓰기 및 간격 테스트"
url: /developerportal/community-tools/indentation-spacing-test/
draft: true
banner: "Banner with a link to <a href=\"#spacing\">spacing</a>"
description: "들여쓰기와 간격의 렌더링을 위한 다양한 테스트 케이스입니다. 이 페이지를 사용하여 다양한 요소와 숏코드에서 간격과 들여쓰기가 어떻게 렌더링되는지 테스트하세요. 이 파일의 린팅은 비활성화되었습니다."
---

<!-- markdownlint-disable-file -->
## 제목 2

여기에 문단 텍스트가 있습니다. 추가 공백 

### 제목 3

여기에 문단 텍스트가 있습니다.

#### 제목 4

여기에 문단 텍스트가 있습니다.

##### 제목 5

여기에 문단 텍스트가 있습니다.

여기에 다른 문단이 있습니다.

## 들여쓰기와 간격 123456 12345678

여러 간격 예제는 [섹션 간격 테스트](#spacing)를 참조하세요. 

### 4칸 공백 들여쓰기

여기에 문단 텍스트가 있습니다.

* 순서 없는 목록
    1. 순서 있는 목록
        * 순서 없는 목록

여기에 문단 텍스트가 있습니다.

1. 첫 번째 목록 항목
1. 두 번째 목록 항목
    * 순서 없는 하위 목록 들여쓰기는 **4칸 공백**으로 작동합니다.
        * 다른 하위 목록
1. 세 번째 목록 항목
    1. 순서 있는 하위 목록은 **4칸 공백**으로 작동합니다.
        1. 또 다른 수준의 하위 목록
3. 그리고 다른 항목.
    **4**칸 공백 들여쓰기와 후행 공백이 없는 새 줄은 아무 효과가 없습니다. 

이 텍스트가 없으면 아래 목록은 위의 번호 매기기 목록의 일부로 처리되었습니다.

1. 다른 목록.
1. 다른 목록.
1. 다른 목록. 이 줄 아래에 줄 바꿈.

    목록과 들여쓰기된 줄 사이에 줄 바꿈이 있으면 각 부모 요소가 `<p>`로 감싸져 각 항목 주위에 간격이 추가됩니다.

{{% alert color="warning" %}}
번호 매기기 목록 사이의 두 줄 바꿈은 별도의 목록으로 만들기에 충분하지 않았습니다.
{{% / alert %}}

### 4칸 공백과 후행 공백(또는 공백들) 들여쓰기

여기에 문단 텍스트가 있습니다.

* 순서 없는 목록  
    1. 순서 있는 목록  
        * 순서 없는 목록

여기에 문단 텍스트가 있습니다.

1. 첫 번째 목록 항목  
1. 두 번째 목록 항목  
    * 순서 없는 하위 목록 들여쓰기는 **4칸 공백**으로 작동합니다.
1. 세 번째 목록 항목  
    1. 순서 있는 하위 목록은 **4칸 공백**으로 작동합니다.
3. 그리고 다른 항목.  
    **4**칸 공백과 **1**개 또는 **2**개의 후행 공백으로 들여쓰기하면 **작동합니다**.

### 탭과 줄 바꿈 들여쓰기 – 탭을 사용하지 마세요

여기에 문단 텍스트가 있습니다.

* 순서 없는 목록
	1. 순서 있는 목록
		* 순서 없는 목록

여기에 문단 텍스트가 있습니다.

1. 첫 번째 목록 항목
1. 두 번째 목록 항목
	* 순서 없는 하위 목록.
1. 세 번째 목록 항목
	1. 순서 있는 하위 목록
3. 그리고 다른 항목.

	탭과 줄 바꿈으로 들여쓰기는 일반 목록 항목에는 작동하지만 코드 블록과 같은 요소에는 작동하지 않습니다. 탭은 에디터 내의 탭 설정에 관계없이 4칸 공백으로 처리됩니다.

{{% alert color="danger" %}}
탭을 사용하지 마세요
{{% / alert %}}

### 탭과 후행 공백 들여쓰기 – 탭을 사용하지 마세요

여기에 문단 텍스트가 있습니다.

* 순서 없는 목록  
	1. 순서 있는 목록  
		* 순서 없는 목록  

여기에 문단 텍스트가 있습니다.

1. 첫 번째 목록 항목  
	* 순서 없는 하위 목록.
1. 두 번째 목록 항목  
	1. 순서 있는 하위 목록
3. 그리고 다른 항목.  
	탭과 후행 공백으로 들여쓰기는 일반 목록 항목에는 작동하지만 코드 블록과 같은 요소에는 작동하지 않습니다.

{{% alert color="danger" %}}
탭을 사용하지 마세요
{{% / alert %}}

### 목록 항목과 코드 블록 사이의 간격

1. 첫 번째 목록 항목
2. 두 번째 목록 항목

```
Code blocks do NOT need a line break to work. Not part of list indent.
```

### 목록 항목과 코드 블록 사이의 들여쓰기

1. 첫 번째 목록 항목
2. 두 번째 목록 항목

    ```
    Code blocks do NOT need trailing spaces to be indented.
    Indents must be spaces, not tabs, otherwise a bug shows in rendering an extra '`' symbol.
    It does not matter if a code block contains special characters, like {{}}, neither if
    – a line starts with a hyphen.
    ```

{{% alert color="danger" %}}
목록 항목에서 번호(또는 글머리 기호)와 첫 번째 단어의 첫 번째 문자 사이에 이중 공백을 추가하지 마세요. 이렇게 하면 코드 블록 서식이 깨질 수 있습니다.
{{% / alert %}}

### 목록 항목과 코드 블록 사이의 들여쓰기 (Highlight 숏코드) – HIGHLIGHT를 사용하지 마세요

1. 첫 번째 목록 항목
2. 두 번째 목록 항목
    {{< highlight go >}}
    Code blocks with shortcode HIGHLIGHT do NOT need trailing spaces to be indented. They don't need to be indented either, as long as there is no blank line between.
    Highight does NEED a language specified, otherwise the shortcode errors.
    Using Hugo version 0.91.2 produces an extra blank line in the code block. 0.93.1 removes the blank line.
    {{< / highlight >}}

### 목록 항목과 이미지 사이의 간격

1. 첫 번째 목록 항목
2. 두 번째 목록 항목

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" class="no-border" >}}
    * **4칸 공백**과 줄 바꿈으로 들여쓰기하면 이미지가 목록 항목 2와 인라인으로 유지됩니다. 줄 바꿈으로 인해 부모 요소인 목록 항목 2가 `<p>`로 감싸져 1과 2 사이에 간격이 생깁니다.
3. 세 번째 항목

### 목록 항목과 이미지 사이의 간격, 줄 바꿈 없음

1. 첫 번째 목록 항목
2. 두 번째 목록 항목
    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" width="250px" class="no-border" >}}
    * 이미지 들여쓰기는 **4칸 공백**으로 작동합니다.
    * 이미지는 작동하는 데 줄 바꿈이 필요하지 않습니다.

### 목록 항목과 이미지 사이의 간격, 줄 바꿈 없음, 후행 공백 포함

1. 첫 번째 목록 항목
2. 두 번째 목록 항목  
    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" class="no-border" >}}
    * 후행 공백(`<br>`)을 추가해도 예제가 변경되지 않습니다.

### 목록의 알림 들여쓰기

1. 첫 번째 목록 항목
2. 두 번째 목록 항목 
{{% alert color="info" %}}
알림 상자
{{% / alert %}}
3. 세 번째 목록 항목
    * 하위 목록 항목
{{% alert color="info" %}}
알림 상자
{{% / alert %}}


{{% alert color="warning" %}}
알림 내 목록:
1. 첫 번째 목록 항목
2. 두 번째 목록 항목 `코드 스니펫`
    * 하위 목록

        ```
        A code block
        ```
{{% / alert %}}

## Markdown 추가 기능 사용
### 블록 인용

>텍스트 블록

### TODO 및 댓글

[//]: # "This is a comment which will not appear in the HTML page."
<!-- This is a comment which will appear in the HTML page (as a comment) -->

댓글을 추가하는 세 가지 방법:

1. 빈 Markdown 상대 링크 사용 - 게시된 사이트 어디에도 표시되지 않습니다

    ```text
    [//]: # "my comment here"

    OR

    [//]: # (my other comment here)
    ```

1. HTML 댓글 사용 – 게시된 사이트에 댓글로도 표시됩니다

    ```html
    <!-- my comment here -->
    ```

1. todo 숏코드 사용, Travis 로그에 댓글을 출력합니다:

    ```text
    {{%/* todo */%}}[ToDo comment text, only visible in development]{{%/* /todo */%}}
    ```

### 세부 정보

클릭하여 확장할 수 있는 접힌 상태로 시작하는 요소가 필요한 경우 다음과 같이 표시됩니다:

<details><summary>숨겨진 내용의 설명</summary>
숨겨진 내용
</details>


세부 정보 구문의 코드 예제:
```html
<details><summary>Description of what is hidden</summary>
hidden stuff
</details>
```

### 각주

각주가 필요한 경우 유니코드 위 첨자 문자(¹²³ 등)를 사용하여 각주를 표시하고 실제 텍스트에는 `<small>…</small>`을 사용하세요.

예제¹

<small>¹각주 텍스트</small>

### 키 조합 스타일링

키 조합
<kbd>{key name}</kbd>

### 테이블 들여쓰기

1. 항목 
    | 요소 | 표시 내용 | 
    | --- | --- | 
    | Annotation | 도메인 모델(Domain Model)의 한 측면을 설명하는 주석 | 
    | Entity Name | [엔티티(Entity)](/refguide/entities/)가 데이터베이스에서 참조되는 방식 | 
    | Event Handler (or Handlers) | 이 엔티티(Entity)에 대해 하나 이상의 [이벤트 핸들러](/refguide/event-handlers/)가 설정되었음을 나타냄 | 

목록 항목이 포함된 테이블:

| 번호 매기기 목록 | 글머리 기호 목록 |
| --- | --- |
| <ol><li>numbered item</li><li>numbered item</li><li>numbered item</li></ol> | <ul><li>bullet point</li><li>bullet point</li><li>bullet point</li></ul> |

### 테이블의 앵커

| 테이블 제목 1 | 테이블 제목 2 <a id="myanchor" href="#myanchor">여기에 앵커!</a> |
| --- | --- |
| 테이블 셀 1 | 테이블 셀 2 <a id="myanchor2" href="#myanchor2">여기에 앵커 2!</a>  |

## 섹션 간격 테스트<br />==================={#spacing}

## 레벨 2 섹션 – 뒤에 문단

문단 포함

## 레벨 2 섹션 – 뒤에 레벨 2

## 레벨 2 섹션 – 뒤에 레벨 3

### 레벨 3 섹션 – 뒤에 레벨 2

## 레벨 2 섹션 – 뒤에 목록

* 목록 항목 1
* 목록 항목 2
* 목록 항목 3

### 목록 뒤의 레벨 3 섹션 – 뒤에 목록

* 목록 항목 1
* 목록 항목 2
* 목록 항목 3

## 레벨 2 섹션 – 더 깊은 레벨이 뒤따름

### 레벨 3 섹션

#### 레벨 4 섹션

##### 레벨 5 섹션

###### 레벨 6 섹션

## 레벨 2 섹션 – 문단으로 구분된 더 깊은 레벨이 뒤따름

문단 포함

### 레벨 3 섹션

문단 포함

#### 레벨 4 섹션

문단 포함

##### 레벨 5 섹션

문단 포함

###### 레벨 6 섹션

## 문단과 목록

목록이 뒤따르는 문단

* 목록 항목 1
* 목록 항목 2
* 목록 항목 3

새 목록

* 다중 들여쓰기가 있는 새 목록
* 항목 2
    * 하위 항목 1
    * 하위 항목 2
        * 하위하위 항목 1
        * 하위하위 항목 2
    * 하위 항목 3
    * 하위 항목 4
* 항목 3

여러 문단 하나

다른 하나 뒤에, 적절한 간격을 두어야 합니다

그리고 다음과 분명히 다른 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris. In eu mi bibendum neque egestas congue. Pellentesque sit amet porttitor eget dolor. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Pulvinar etiam non quam lacus. Non quam lacus suspendisse faucibus interdum posuere lorem. Non tellus orci ac auctor augue mauris augue neque. Id ornare arcu odio ut sem nulla pharetra diam. Ultricies tristique nulla aliquet enim tortor at auctor urna.

목록이 뒤따르는 문단

1. 목록 항목 1
1. 목록 항목 2
1. 목록 항목 3

새 목록

1. 다중 들여쓰기가 있는 새 목록
1. 항목 2
    1. 하위 항목 1
    1. 하위 항목 2
        * 하위하위 항목 1
        * 하위하위 항목 2
    1. 하위 항목 3
    1. 하위 항목 4
1. 항목 3

## 버튼 테스트

{{% button color="info" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Info" title="What do you think of this button?" %}}

{{% button color="success" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Success" title="What do you think of this button?" %}}

{{% button color="danger" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Danger" title="What do you think of this button?" %}}

{{% button color="warning" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Warning" title="What do you think of this button?" %}}

{{% button color="light" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Light" title="What do you think of this button?" %}}

{{% button color="dark" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Dark" title="What do you think of this button?" %}}

{{% button color="link" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Link" title="What do you think of this button?" %}}

{{% button color="outline-info" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Info" title="What do you think of this button?" %}}

{{% button color="outline-success" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Success" title="What do you think of this button?" %}}

{{% button color="outline-danger" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Danger" title="What do you think of this button?" %}}

{{% button color="outline-warning" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Warning" title="What do you think of this button?" %}}

{{% button color="outline-light" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Light" title="What do you think of this button?" %}}

{{% button color="outline-dark" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Dark" title="What do you think of this button?" %}}

## 링크 테스트{#test-links}

### [이것은 링크입니다](/developerportal/community-tools/indentation-spacing-test/)

[내부 링크](/developerportal/community-tools/indentation-spacing-test/)

[내부 앵커](/developerportal/community-tools/indentation-spacing-test/#test-links)

[외부 com 링크](https://bbc.com)

[외부 기타 최상위 도메인 링크](https://news.bbc.co.uk)
