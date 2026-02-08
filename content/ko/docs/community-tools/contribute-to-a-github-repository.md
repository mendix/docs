---
title: "GitHub 리포지토리에 기여하기"
url: /community-tools/contribute-to-a-github-repository/
weight: 7
description: "Mendix 가이드라인에 따라 Mendix GitHub 리포지토리에 기여하는 방법을 설명합니다."
aliases:
    - /developerportal/community-tools/contribute-to-a-github-repository/
---

## 소개

Mendix는 커뮤니티와 함께 작업하는 것을 좋아하며, 풀 리퀘스트를 통해 생성하고 기여하시는 것을 권장합니다.

이 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* Mendix 가이드라인에 따라 Mendix GitHub 리포지토리에 기여하기

## 전제 조건

이 가이드를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* [GitHub 계정](https://github.com/join)을 보유하고 있어야 합니다.
* [Mendix 계정](https://home.mendix.com/)을 보유하고 있어야 합니다.
* GitHub에서 리포지토리를 포크(Fork)해야 합니다. 자세한 내용은 [Fork a Repo](https://help.github.com/articles/fork-a-repo/)를 참조하세요.

## 기존 리포지토리 변경하기

기존 리포지토리를 변경하려면 다음 가이드라인을 따르세요:

* 포크에서 작업의 기반이 될 위치에서 새 브랜치를 생성하세요. 보통 리포지토리의 **production** 브랜치입니다.
* **production** 브랜치를 기반으로 브랜치를 빠르게 생성하려면 `git checkout -b fix/production/my_contribution production`을 사용하세요. **production** 브랜치에서 직접 작업하는 것은 피하세요.
* 논리적 단위로 커밋하세요.
* 커밋하기 전에 `git diff --check`로 불필요한 공백을 확인하세요.
* 변경 사항에 필요한 테스트를 추가했는지 확인하세요.
* 모든 테스트를 실행하여 실수로 깨진 것이 없는지 확인하세요.

## 변경 사항 제출하기

변경 사항을 제출하려면 다음 가이드라인을 따르세요:

* 변경 사항을 리포지토리 포크의 브랜치에 푸시하세요.
* Mendix 조직의 적절한 리포지토리에 풀 리퀘스트를 제출하세요. 자세한 내용은 [About Pull Requests](https://help.github.com/articles/using-pull-requests/)를 참조하세요.
* 변경 사항으로 수정된 이슈 번호를 언급하세요. 자세한 내용은 [Closing Issues Using Keywords](https://help.github.com/articles/closing-issues-via-commit-messages#closing-issues-with-pull-requests)를 참조하세요.
* 피드백이 제공된 후 Mendix는 2주 이내에 응답을 기대합니다. 2주 후에도 활동이 없으면 풀 리퀘스트를 닫을 수 있습니다.

## 더 읽기

* [Epics](/developerportal/project-management/epics/)
