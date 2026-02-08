---
title: "Mendix 문서에 기여하기"
url: /community-tools/contribute-to-mendix-docs/
weight: 70
description: "커뮤니티 회원으로서 Mendix 문서를 추가하고 편집하는 방법을 설명합니다."
aliases:
    - /developerportal/community-tools/contribute-to-mendix-docs/
#If moving or renaming this doc file, update the link in the site footer and links in the mendix/docs repo. See Mapping to Products for more details.
---

## 소개

모든 Mendix 문서는 Mendix 커뮤니티에 공개되어 있으므로 필요하다고 판단되는 방식으로 변경하고 추가할 수 있습니다. 부정확한 사용 가이드나 업데이트가 필요한 Studio Pro Guide 섹션을 발견하셨나요? 전체 Mendix 커뮤니티를 위해 문서를 쉽게 개선하는 데 도움을 주실 수 있습니다.

모든 Mendix 문서는 [GitHub 리포지토리](https://github.com/mendix/docs)에 저장되어 있습니다. GitHub 계정이 있으면 모든 기존 문서를 편집할 수 있습니다. 또한 원하는 주제에 대한 새로운 사용 가이드를 작성하여 제출할 수도 있습니다. 문서를 변경할 때는 [문서 작성 가이드라인](/community-tools/documentation-guidelines/)을 따르세요.

GitHub에서 문서 작업을 하려면 Markdown을 사용하세요. 이 사용하기 쉬운 구문에 대한 자세한 내용은 [GitHub Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/)을 참조하세요.

{{% alert color="info" %}}
모든 문서 기여는 내부 스타일 가이드에 맞게 편집될 수 있습니다.
{{% /alert %}}

리포지토리를 포크하고 풀 리퀘스트를 만드는 방법에 대한 자세한 내용은 [How to Contribute to Someone's GitHub Repository (Fork/Pull Request)](https://www.youtube.com/watch?v=yr6IzOGoMsQ)를 시청하세요.

이 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* GitHub에서 기존 문서 편집하기
* 로컬에서 기존 문서를 편집하고 로컬 미리보기 빌드하기
* 기존 문서에 대한 피드백 남기기
* 새로운 문서 작성하기

## 전제 조건

이 가이드를 시작하기 전에 GitHub 계정이 있는지 확인하세요. 아직 계정이 없다면 [Join GitHub](https://github.com/join)에서 가입하세요.

GitHub 내에서 직접 온라인으로 파일을 생성하고 편집하거나 원하는 작성 및 커밋 도구를 사용하여 GitHub 외부에서 작업할 수 있습니다.

[로컬에서 문서 편집 및 변경 사항 미리보기](#local-build) 섹션에서는 [mendix/docs](https://github.com/mendix/docs) 리포지토리를 포크 및 클론하고, 로컬에서 문서를 편집하고, 로컬 미리보기를 빌드하는 방법을 다룹니다.

## GitHub에서 문서 편집하기 {#editing}

GitHub에서 기존 문서를 편집하려면 다음 단계를 따르세요:

1. 작업하려는 특정 Mendix 문서 페이지의 오른쪽 상단 모서리에 있는 **View on GitHub**({{< icon name="notes-paper-edit" >}})를 클릭하세요.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/view-on-github.png">}}

    해당 파일이 GitHub에서 열립니다.

2. 오른쪽 상단 모서리에 있는 **Edit this file**({{< icon name="pencil" >}})을 클릭하세요.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/edit-file.png">}}

    [mendix/docs](https://github.com/mendix/docs) 리포지토리의 **development** 브랜치 포크가 이미 있는 경우 페이지가 웹 에디터에서 열립니다.    
    아직 포크가 없는 경우 변경 사항을 제안하기 위해 리포지토리를 포크하라는 메시지가 표시됩니다. **Fork this repository**를 클릭하세요.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/fork-this-repository.png">}}

    페이지가 웹 에디터에서 열립니다.

3. 에디터에서 변경 사항을 작성하세요. 변경 사항이 [문서 작성 가이드라인](/developerportal/community-tools/documentation-guidelines/)에 부합하는지 확인하세요.

4. 에디터 위 오른쪽 상단 모서리에 있는 **Commit changes**를 클릭하세요. **Propose changes** 대화 상자가 열립니다.

5. 커밋 메시지를 입력하고 필요한 경우 추가 설명을 추가한 다음 **Propose changes**를 클릭하세요.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/propose-changes.png" max-width=60% >}}

    **Open a pull request** 페이지가 열립니다.
    
6. 풀 리퀘스트가 **development** 브랜치를 기본 브랜치로 사용하는지 확인하세요.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/base-development.png">}}

     자세한 내용은 [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/) 및 [GitHub Standard Fork and Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)를 참조하세요.

7. 풀 리퀘스트의 제목을 추가하세요.

    {{% alert color="warning" %}}풀 리퀘스트가 특정 날짜에 병합되어야 하는 경우(예: 특정 릴리스를 위해) 풀 리퀘스트 제목이나 댓글에 명시하세요. 그렇지 않으면 모든 풀 리퀘스트는 콘텐츠가 즉시 게시될 수 있다는 가정 하에 검토 및 병합됩니다.{{% /alert %}}

8. **Allow edits by maintainers**가 선택되어 있는지 확인하세요.
9. **Create pull request**를 클릭하세요.

풀 리퀘스트가 생성됩니다. Mendix 문서 팀이 가능한 빨리 풀 리퀘스트를 검토합니다. 검토가 완료되고 질문이 없으면 풀 리퀘스트가 병합되며, Mendix Docs 웹사이트에서 변경 사항을 확인할 수 있습니다!

## 로컬에서 문서 편집 및 변경 사항 미리보기 {#local-build}

GitHub 외부에서 작업하려는 경우 Mendix는 Mendix 문서에 기여하기 위해 다음 도구를 사용하는 것을 권장합니다:

* 문서 작성, 편집 및 미리보기 – [Typora](https://typora.io/), [Visual Studio Code](https://code.visualstudio.com) 또는 [브라우저에서 Visual Studio Code](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)(**mendix/docs** 리포지토리의 포크를 연 후 <kbd>Period</kbd>를 눌러 접근 가능)
* 문서 커밋 – [GitHub Desktop](https://desktop.github.com/), [Visual Studio Code](https://code.visualstudio.com) 또는 [Sourcetree](https://www.sourcetreeapp.com/)

포크된 리포지토리의 로컬 복사본을 클론하고 문서를 변경하며 로컬 미리보기를 빌드할 수 있습니다. 다음 단계를 따르세요:

1. GitHub에서 [mendix/docs](https://github.com/mendix/docs) 리포지토리의 **development** 브랜치를 포크하세요. 자세한 내용은 [Fork a repository in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)를 참조하세요.
2. 원하는 Git 클라이언트(예: Visual Studio Code, GitHub Desktop 또는 Sourcetree)를 사용하여 포크된 리포지토리를 클론하세요:

    * Visual Studio Code를 사용하여 클론:
        1. Visual Studio Code에서 명령 팔레트를 엽니다(<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, Mac에서는 <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>).
        2. `clone`을 검색하세요.
        3. **Git: Clone**을 선택하세요.
        4. 포크된 리포지토리의 URL(예: https://github.com/YOUR-USERNAME/docs)을 입력하고 대상 디렉토리를 선택하세요.
    * GitHub Desktop을 사용하여 클론:
        1. GitHub Desktop에서 **File** > **Clone Repository** > **URL** 옵션을 선택하세요.
        2. 포크된 리포지토리의 URL을 입력하고 대상 디렉토리를 선택하세요.
    * Sourcetree를 사용하여 클론:
        1. Sourcetree에서 **Clone**을 클릭하세요.
        2. 포크된 리포지토리의 URL을 입력하고 대상 디렉토리를 선택하세요.

     선택한 위치에 **docs**라는 폴더로 리포지토리가 클론됩니다. 원하는 경우 나중에 이름을 변경할 수 있습니다.

     {{% alert color="warning" %}}Windows에서 실행하는 경우 로컬 디렉토리에 긴 경로를 사용하지 마세요. 일부 파일이 Git의 파일 길이 제한에 도달할 수 있습니다. 50자까지의 기본 경로는 작동하지만 64자는 현재 너무 깁니다.{{% /alert %}}

3. Node 패키지 관리자(npm) 패키지로 로컬 리포지토리를 준비하세요. 이 작업은 이 로컬 리포지토리에 대해 한 번만 수행하면 됩니다. 다음 단계를 따르세요:
    1. [Node.js LTS 버전](https://nodejs.org/en/download/prebuilt-installer)(2024년 기준 20.10)을 다운로드하여 설치하세요. Chocolatey가 제공되는 경우 필요하지 않습니다.
    2. 설치 후 현재 Node.js 버전을 확인하세요. 터미널에서 다음 명령을 실행하여 확인할 수 있습니다: `node -v`.
    3. 로컬 리포지토리의 루트 디렉토리에서 터미널에 다음 명령을 실행하세요: `npm install`.
    
        {{% alert color="warning" %}}새 파일이나 변경된 파일이 커밋되지 않은 파일로 나타나면 변경 사항을 취소하세요. 커밋하지 마세요.{{% /alert %}}

4. 로컬 리포지토리의 **development** 브랜치에서 새 브랜치를 만들고 원하는 편집 도구로 문서를 로컬에서 편집하세요. 예를 들어, Visual Studio Code로 로컬 리포지토리 폴더를 열고 **development** 브랜치에서 새 브랜치를 만들어 파일을 찾아 새 브랜치에서 변경할 수 있습니다. 변경 사항을 저장하는 것을 잊지 마세요.
5. 변경 사항을 미리보기 위해 로컬 버전의 사이트를 실행하려면 로컬 리포지토리의 루트 디렉토리에서 터미널에 다음 명령을 실행하세요: `npm run build`.
6. 사이트가 빌드되면 생성된 페이지 수를 나타내는 테이블이 표시됩니다.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/table-of-built-pages.png" max-width=30% >}}

7. 사이트를 볼 수 있으려면 서버가 설정될 때까지 기다리세요.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/server-set-up.png" max-width=60% >}}

8. 로컬 사이트 미리보기를 보려면 `http://localhost:1313/`으로 이동하세요.
9. 왼쪽 사이드바 메뉴에서 방금 변경한 페이지로 이동하면 변경 사항을 로컬에서 미리볼 수 있습니다.     
    현재 로컬 빌드가 실행 중인 한 새로 저장된 모든 변경 사항이 감지되고 사이트가 다시 빌드됩니다. 웹 서버가 다시 사용 가능할 때까지 기다리면 방금 저장한 변경 사항을 미리볼 수 있습니다.     
    방금 저장한 변경 사항이 보이지 않으면 브라우저 캐시를 지우고 브라우저를 닫았다가 다시 열고 로컬 사이트로 이동하세요. 또는 Google Chrome, Firefox, Microsoft Edge와 같은 많은 브라우저에서 Windows PC에서 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>, Mac에서 <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>을 눌러 현재 페이지에서 하드 새로 고침을 수행할 수 있습니다. 이 하드 새로 고침은 캐시된 콘텐츠를 무시합니다.    
    위의 방법이 작동하지 않으면 터미널에서 <kbd>Ctrl</kbd> + <kbd>C</kbd>를 눌러 현재 실행 중인 빌드를 중지하고 `npm run build` 명령을 다시 실행하세요.

10. 변경 사항을 제출할 준비가 되면 원하는 Git 클라이언트를 사용하여 변경 사항을 스테이지 및 커밋하고 Mendix **development** 브랜치를 기본 브랜치로 하는 풀 리퀘스트를 생성하세요.

## 문서에 대한 피드백 남기기

문서에서 오타, 누락된 단계 또는 특정 기술적 문제 등의 이슈를 발견한 경우 개선할 수 있도록 알려주세요.

화면 오른쪽 상단 모서리에 있는 **Leave Feedback**({{< icon name="message-bubble-typing" >}})를 클릭하세요.

{{< figure src="/attachments/community-tools/contribute-to-mendix-docs/leave-feedback.png">}}

GitHub 리포지토리의 [Issues](https://github.com/mendix/docs/issues) 페이지로 이동합니다. 피드백에 다음 세부 정보를 포함해 주세요:

* 작업 중인 문서
* 무엇이 잘못되었는지에 대한 상세한 설명
* 해당되는 경우 개선할 수 있는 사항이나 수정 방법에 대한 세부 정보
* 해당되는 경우 Mendix 플랫폼 사용 스크린샷

모든 피드백을 확인하며 진지하게 검토하고, 해결 방법에 대해 연락드리겠습니다.

{{% alert color="info" %}}
피드백을 남기려면 GitHub 계정이 필요합니다. 좋은 소식은 동일한 GitHub 계정으로 문서를 직접 [편집](#editing)하거나 [새로운 문서](#new-documentation)를 작성하여 풀 리퀘스트를 보낼 수도 있다는 것입니다.
{{% /alert %}}

## 새로운 문서 작성하기 {#new-documentation}

아래 섹션에서는 Mendix용 새로운 문서를 작성하는 주요 단계를 설명합니다.

### 템플릿 사용하기

Mendix 문서에 새로운 사용 가이드 또는 *Studio Pro Guide* 페이지를 제출하려면 Mendix 문서 템플릿으로 시작하세요:

* 사용 가이드 템플릿을 받으려면 이 링크를 마우스 오른쪽 버튼으로 클릭하고 파일을 로컬에 저장하세요: [How-to Template](https://raw.githubusercontent.com/mendix/docs/development/templates/how-to-template.md)
* 레퍼런스 페이지 템플릿을 받으려면 이 링크를 마우스 오른쪽 버튼으로 클릭하고 파일을 로컬에 저장하세요: [Mendix Studio Pro Guide Page Template](https://raw.githubusercontent.com/mendix/docs/development/templates/reference-template.md)

### 가이드라인 및 규칙 {#naming}

작성 시 다음 가이드라인과 규칙을 따르세요:

* [문서 작성 가이드라인](/community-tools/documentation-guidelines/)을 참조하고 사용하세요.
* Markdown 파일 이름이 페이지 제목을 반영하는지 확인하세요. 예를 들어, 페이지 제목이 "Creating Your App"인 경우 파일 이름은 *creating-your-app.md*여야 합니다.
* Markdown 및 이미지 파일의 이름은 각 단어 사이에 하이픈(`-`)을 넣어 소문자로 지정하세요. 파일 이름에 공백이나 `&`와 같은 기호를 사용하지 마세요. 이러한 기호는 허용되지 않습니다.
* 스크린샷 생성 시:
    * 이미지가 선명하도록 화면 해상도가 100% 또는 그 배수인지 확인하세요.
    * 필요한 정보가 포함된 화면 부분에 초점을 맞추어 브라우저가 이미지를 표시할 때 축소할 필요가 없도록 하고, 이미지를 가까이 자르세요.
    * 이미지 파일의 이름이 의미 있고 쉽게 찾을 수 있도록 하세요.
    * 이미지를 *.png*(권장), *.jpg* 또는 *.gif* 파일로 저장하세요.
    * 이미지 파일을 문서 위치에 해당하는 [attachments](https://github.com/mendix/docs/tree/development/static/attachments) 폴더의 하위 폴더에 저장하세요. 이 하위 폴더는 작업 중인 문서 파일 이름과 동일한 이름이어야 합니다.

### 작업물 제출하기

작업물을 제출할 준비가 되면 다음 가이드라인을 따르세요:

* 원하는 Git 클라이언트를 통해 또는 [Mendix GitHub 리포지토리](https://github.com/mendix/docs)의 **Create new file** 버튼을 통해 새 Markdown 파일을 커밋하세요. 여기서 텍스트를 복사하여 붙여넣을 수 있습니다.
* 원하는 Git 클라이언트를 통해 또는 GitHub 리포지토리의 **Upload files** 버튼을 통해 새 이미지 파일을 커밋하세요. 여기서 이미지 파일을 드래그 앤 드롭할 수 있습니다.

마지막으로, Mendix **development** 브랜치를 기본 브랜치로 지정하는 풀 리퀘스트를 생성하세요. 자세한 내용은 [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)를 참조하세요.

{{% alert color="info" %}}
특정 이슈의 확인을 요청하는 풀 리퀘스트에 대한 응답을 받을 수 있습니다. 이는 문서 제출물이 기존 문서와 잘 어울리는지 확인하기 위한 것입니다.
{{% /alert %}}

## 기여자 라이선스 계약 서명하기

풀 리퀘스트를 통해 Mendix 문서에 처음 기여할 때 [Contributor License Agreement for mendix/docs](https://cla-assistant.io/mendix/docs)에 서명해야 합니다.

라이선스 계약에 접근하려면 풀 리퀘스트의 **Conversation** 탭에 있는 **Checks** 섹션으로 이동하여 **license/cla**의 **Details**를 클릭하세요.

이 작업은 한 번만 수행하면 됩니다.

## 더 읽기

* [문서 작성 가이드라인](/developerportal/community-tools/documentation-guidelines/)
