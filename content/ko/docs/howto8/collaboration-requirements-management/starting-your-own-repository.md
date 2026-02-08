---
title: "나만의 GitHub 리포지토리 시작하기"
url: /howto8/collaboration-requirements-management/starting-your-own-repository/
weight: 30
---

## 소개

이 사용 방법 문서에서는 GitHub 리포지토리를 설정하는 방법을 학습합니다. 리포지토리에는 개발 콘텐츠가 포함되며, 다른 사람들이 애플리케이션이나 [Marketplace 컴포넌트](/appstore/submit-content/)에 기여할 수 있도록 공유할 수 있습니다.

## 준비

* [GitHub 계정](https://github.com/join) 보유
* [Create a Repo](https://help.github.com/articles/create-a-repo) GitHub 가이드 읽기

## 리포지토리 만들기

먼저 리포지토리에 이름이 필요합니다. [Mendix Marketplace](https://marketplace.mendix.com/)에 게시될 항목에 사용할 이름과 동일한 이름을 사용해야 합니다. UpperCamelCase를 사용하여 공백을 대체하세요(예: *My first app*은 GitHub에서 *Mendix/MyFirstApp*이 됩니다).

설명에는 항목이 무엇을 하는지 설명해야 합니다. 이 설명은 Mendix Marketplace에서도 사용할 수 있습니다.

*.gitignore* 파일을 추가하여 리포지토리를 깨끗하게 유지하세요.

## 위젯 만들기

새 위젯을 만들 때 Mendix는 [Pluggable 웹 위젯 빌드](/howto8/extensibility/create-a-pluggable-widget-one/)를 권장합니다.

## 릴리스

Mendix Marketplace에 새 릴리스를 만들려면 프로덕션 또는 릴리스 브랜치의 적절한 커밋에 새 태그를 시작하세요. 이 태그에서 [GitHub에서 새 릴리스](https://help.github.com/articles/creating-releases)를 만들 수 있습니다. 이 릴리스에서 릴리스 노트를 설정하고(Marketplace 릴리스에도 사용할 수 있음) 공식 이름을 제공하세요. *.mpk* 파일을 릴리스 태그의 바이너리 파일로 추가하면 Mendix Marketplace가 자동으로 *.mpk*를 새 초안과 동기화합니다:

{{< figure src="/attachments/howto8/collaboration-requirements-management/starting-your-own-repository/18580533.png" class="no-border" >}}

설명에 해당 릴리스 번호를 언급하여 다가오는 Mendix Marketplace 릴리스와 연결해야 합니다.

## 더 읽기

* [Mendix GitHub 리포지토리에 기여하기](/howto8/collaboration-requirements-management/contribute-to-a-github-repository/)
* [Version Control](/refguide8/version-control/)
* [개발 데이터베이스 공유](/howto8/collaboration-requirements-management/sharing-the-development-database/)
