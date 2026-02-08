---
title: "Mendix GitHub 리포지토리에 기여하기"
url: /howto8/collaboration-requirements-management/contribute-to-a-github-repository/
weight: 20
aliases:
    - /howto8/collaboration-project-management/contribute-to-a-github-repository.html
    - /howto8/collaboration-project-management/contribute-to-a-github-repository
---

## 소개

Mendix는 커뮤니티와 함께 협업하며, Pull Request를 통한 생성 및 기여를 권장합니다!

이 사용 방법 문서에서는 다음을 학습합니다:

* Mendix 가이드라인에 따라 Mendix GitHub 리포지토리에 기여하기

## 사전 조건

이 사용 방법을 시작하기 전에 다음 사전 조건을 완료하세요:

* [GitHub 계정](https://github.com/join) 보유
* [Mendix 계정](https://home.mendix.com/) 보유
* GitHub에서 리포지토리 포크(자세한 내용은 [Fork a Repo](https://help.github.com/articles/fork-a-repo/) 참조)

## 기존 리포지토리에 변경 사항 적용

기존 리포지토리에 변경 사항을 적용하려면 다음 가이드라인을 따르세요:

* 포크에서 작업을 기반으로 할 새 브랜치를 생성하세요(일반적으로 리포지토리의 프로덕션 브랜치)
* 프로덕션을 기반으로 브랜치를 빠르게 생성하려면 `git checkout -b fix/production/my_contribution production`을 사용하세요
    * 프로덕션 브랜치에서 직접 작업하는 것은 권장되지 않습니다
* 논리적 단위로 커밋하세요
* 커밋하기 전에 `git diff --check`로 불필요한 공백을 확인하세요
* 변경 사항에 필요한 테스트를 추가했는지 확인하세요
* 모든 테스트를 실행하여 실수로 깨진 것이 없는지 확인하세요

## 변경 사항 제출

변경 사항을 제출하려면 다음 가이드라인을 따르세요:

* 변경 사항을 포크의 리포지토리 브랜치에 푸시하세요
* Mendix 조직의 적절한 리포지토리에 Pull Request를 제출하세요(자세한 내용은 [About Pull Requests](https://help.github.com/articles/using-pull-requests/) 참조)
* 변경 사항으로 수정된 이슈의 ID를 언급하세요(자세한 내용은 [Closing Issues Using Keywords](https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests) 참조)
* 피드백이 제공된 후 Mendix는 2주 이내의 응답을 기대합니다
    * 2주 후 활동이 보이지 않으면 Pull Request를 닫을 수 있습니다

## 더 읽기

* [나만의 GitHub 리포지토리 시작하기](/howto8/collaboration-requirements-management/starting-your-own-repository/)
* [Version Control](/refguide8/version-control/)
* [개발 데이터베이스 공유](/howto8/collaboration-requirements-management/sharing-the-development-database/)
