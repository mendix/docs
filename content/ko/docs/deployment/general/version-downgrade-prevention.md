---
title: "버전 다운그레이드 보호"
url: /developerportal/deploy/version-downgrade-prevention/
weight: 40
description: "Mendix 데이터베이스를 이전 버전으로 마이그레이션할 수 없는 경우 수행할 작업"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 시나리오

이 문제는 앱을 더 낮은 버전의 Mendix로 다운그레이드할 때 적용됩니다.

마이그레이션 단계에서 데이터 스토리지 계층은 먼저 Mendix 시스템 테이블이 변경되었는지 확인합니다. 이를 위해 분석 단계 전에 데이터베이스의 마이그레이션 버전 번호를 런타임의 동일한 버전 번호와 비교합니다. 기존 데이터베이스 버전 번호가 다운그레이드하려는 런타임 버전 번호보다 높으면 마이그레이션이 취소되고 오류 메시지가 표시됩니다.

예를 들어 Mendix 9.0.5에서 Mendix 8.18.4로 다운그레이드하면 Mendix 콘솔에 다음 로그 줄이 표시됩니다: `The database version is of Mendix '9.0.5' which can not be downgraded to older Mendix versions.`

## 해결 방법

이러한 경우 이전 버전의 Mendix로 다운그레이드하는 유일한 방법은 이전 버전의 Mendix에 데이터베이스 백업을 복원하는 것입니다.
