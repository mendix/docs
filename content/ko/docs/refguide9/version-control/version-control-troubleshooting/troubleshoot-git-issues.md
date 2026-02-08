---
title: "Git 문제 해결"
url: /refguide9/troubleshoot-git-issues/
weight: 20
description: "Git 버전 관리 문제와 해결 방법에 대한 목록을 설명합니다."
---

## 소개

이 문서에서는 Git 버전 관리의 알려진 문제와 해결 방법을 설명합니다.

## 문제 해결

### `The project contains changes that have not been committed yet. Please commit first before attempting to merge again. While you have not changes any files.` 오류 발생 {#css-error}

{{% alert color="info" %}}

이 문제는 Mendix 9.24.0 이상에서 알려진 문제입니다. 자세한 내용은 [9.24](/releasenotes/studio-pro/9.24/#css-ki) 릴리스 노트를 참조하십시오.

{{% /alert %}}

커밋되지 않은 변경 사항이 없다고 생각할 때 `The project contains changes that have not been committed yet. Please commit first before attempting to merge again. While you have not changes any files.` 오류가 발생할 수 있습니다.

이는 CSS 파일의 줄 끝이 제대로 처리되지 않아 발생합니다. 따라서 모든 변경 사항을 되돌리거나 다른 버전 관리 작업을 적용한 후 css.map 파일이 **Changes on Disk** 대화 상자에 표시되는 경우가 있습니다.
css.map 파일이 변경된 것으로 표시되지 않도록 하려면 다음 해결 방법을 수행할 수 있습니다:

1. 애플리케이션의 **\theme-cache** 폴더에 `.gitattributes` 파일을 만듭니다(Windows 컴퓨터를 사용하는 경우 기본적으로 .txt 확장자가 적용되지 않는지 확인).
2. 파일에 다음 내용을 추가합니다:
   `* text eol=lf`
3. 파일을 저장하고 변경 사항을 커밋하고 Push합니다.

이제 Git이 올바른 줄 끝으로 파일을 복원하며 이것이 변경 사항으로 인식되지 않습니다.

{{% alert color="info" %}}

해결 방법은 향후 커밋에 대한 문제를 수정합니다. 수정 전에 생성된 다른 브랜치가 있는 경우, 해당 브랜치에도 동일한 `.gitattributes` 파일을 추가해야 합니다.

{{% /alert %}}

### 프록시 서버가 지원되지 않음

Studio Pro는 두 가지 방법으로 Git 리포지토리와 통신합니다: LibGit2 라이브러리 또는 Git 명령줄 인터페이스(Git CLI). LibGit2는 로컬 리포지토리 작업 중에 집중적으로 사용되는 깨끗한 리포지토리 객체 모델을 제공합니다. 그러나 원격 Git 서버와의 통신에서는 충분한 성능을 제공하지 못합니다. 이때 Git CLI가 사용되며 Studio Pro는 fetch, pull 및 push 작업을 수행할 때 클라이언트로 전환합니다(이것이 Git CLI를 컴퓨터에 제공하는 Git for Windows 패키지가 Studio Pro 설치의 필수적인 부분인 이유입니다). 따라서 원격 Git 리포지토리와의 데이터 전송이 필요한 모든 작업은 GitCLI 클라이언트를 사용합니다.

아쉽게도 Git for Windows는 기본적으로 시스템 프록시 설정과 동기화되지 않으므로 Studio Pro에 원활하게 통합하기가 까다로울 수 있습니다. 가능한 한 빨리 통합을 제공하기 위해 노력하고 있지만, 해결 방법으로 **http_proxy**, **https_proxy** 및 **all_proxy**를 직접 재정의하거나(자세한 내용은 [Git 문서](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy) 참조) 다음 명령을 통해 로컬 **.git/config**에서 프록시 URL을 설정하여 프록시 설정을 직접 구성할 수 있습니다:

* 프록시 설정을 구성합니다:

  `git config --local http.proxy [protocol://][user[:password]@]proxyhost[:port]`

* 설정이 변경되었는지 확인합니다:

  `git config --local http.proxy`

Mendix 개발뿐만 아니라 Git을 사용하는 경우에는 권장되지 않지만, `--global` 수정자를 사용하여 시스템 전체에 변경 사항을 적용할 수도 있습니다.

### Oops 팝업 메뉴 발생

**Preferences** 대화 상자에서 Git의 이름과 이메일을 설정하거나 커밋할 때 **Oops** 팝업 메뉴가 나타날 수 있습니다. 이 문제는 PC에 아직 글로벌 Git 구성 파일이 없는 경우 발생할 수 있습니다. 이 문제를 해결하려면 Git 명령줄 클라이언트를 사용하여 다음을 수행하십시오:

* 사용자 이름을 지정합니다:
  `git config --global user.name "<Name>"`
* 이메일을 지정합니다:
  `git config --global user.email "<Email>"`

이러한 명령 중 하나가 글로벌 Git 구성을 생성합니다. 이후 Studio Pro 인터페이스를 통한 상호 작용이 성공합니다.

### 브랜치 병합 시 변경 사항이 적용되지 않음

두 브랜치를 병합할 때 변경 사항이 반영되지 않는 경우가 있습니다.
이 문제를 해결하려면 다음 단계를 수행하십시오:

1. git 구성에 `user.name`과 `user.email`이 있는지 확인합니다:
   * 사용자 이름을 지정합니다:
     `git config --global user.name "<Name>"`
   * 이메일을 지정합니다:
     `git config --global user.email "<Email>"`
2. 컴퓨터의 git 버전이 2.43.x 이상인지 확인합니다:
   * 다음 명령을 실행하여 설치된 git 버전을 확인합니다:
     `git version`.
   * 필요한 경우 [git 웹사이트](https://git-scm.com/download/win)에서 올바른 버전을 설치합니다.

### Git 리포지토리 복제 시 연결 문제

**Open App** 또는 **Download App** 대화 상자를 사용하여 Git 리포지토리를 복제할 때 연결 문제가 발생하면, 가장 먼저 확인해야 할 것은 원격 Git 리포지토리의 URL이 올바른지 여부입니다. 브라우저 주소 표시줄에서 복사해서는 안 됩니다. 대부분의 Git 서비스에는 팝업 창에서 올바른 URL을 제공하는 눈에 띄는 색상의 **Clone** 버튼이 있습니다. Studio Pro에서 이 URL을 사용해야 합니다.

### 고객 대면 문제

Studio Pro 개발자가 고객이 베타 Git 지원에서 겪는 문제를 해결할 수 있도록, Studio Pro는 로깅 메커니즘을 제공합니다.

Mendix Support에 Git 지원 문제를 제출할 때 다음을 수행하여 로그 파일을 첨부하십시오:

1. **Help** 메뉴 > **Open Log File Directory**로 이동합니다:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/troubleshoot-git-issues/open-log-file-directory-menu.png" alt="Download from Version Control Server dialog" class="no-border" >}}

2. *log.txt*라는 파일을 티켓에 복사합니다. 추가 *log.X.txt* 파일이 있는 경우 첨부할 수도 있습니다.

### 문제 해결에 유용한 Git 속성

{{% alert color="warning" %}}
아래에 설명된 속성에는 개인 정보가 포함될 수 있습니다. 공유하기 전에 모든 개인 정보가 제거되었는지 확인하는 것이 좋습니다.
{{% /alert %}}

다양한 문제를 해결하는 데 유용한 정보를 제공하는 Git 리포지토리의 속성이 있습니다. 앱 폴더에서 명령줄에서 다음을 실행하십시오:

`git status -b` — 리포지토리의 현재 상태에 대한 정보를 제공합니다

`git remote -v` — 리포지토리에 지정된 원격을 나열합니다

`git config --list --show-origin --show-scope` — 사용자의 Git 구성에 대한 정보를 제공합니다
