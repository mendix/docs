---
title: "Platform SDK"
url: /releasenotes/sdk/platform-sdk/
weight: 2
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

다음은 모든 마이너 버전 및 패치를 포함한 [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/) 릴리스 노트입니다.

## 5.2.0

**릴리스 날짜: 2025년 6월 18일**

* Node.js 버전을 22로 업그레이드하였습니다.

## 5.1.3

**릴리스 날짜: 2024년 5월 13일**

* 기본 저장소 타입을 `svn`에서 `git`으로 변경하였습니다.
* 앱 생성 옵션에서 `templateDownloadURL` 필드를 더 이상 사용하지 않습니다(Deprecated).
* 불필요한 의존성 `@types/eventsource`를 제거하였습니다.

## 5.1.0

**릴리스 날짜: 2022년 3월 11일**

* `trunk`가 아닌 SVN 브랜치 이름에 `branches/` 접두사를 포함하는 것이 더 이상 필수가 아닙니다.

## 5.0.0

**릴리스 날짜: 2022년 2월 23일**

* 이 새 버전에서는 새로운 공개 API를 사용하고 Git 저장소가 있는 앱을 지원할 수 있습니다.

## 4.1.1

**릴리스 날짜: 2019년 6월 11일**

* `createNewApp` 메서드의 잘못된 반환 타입을 수정하였습니다. 항상 `When.js` 프로미스(일반 `ES6` 프로미스 대신)를 반환하도록 `rest` 의존성을 1.3.2로 다운그레이드하였습니다.

## 4.1.0

**릴리스 날짜: 2018년 12월 17일**

* 사용자가 Mendix Platform에서 앱을 삭제할 수 있는 `PlatformSdkClient.deleteApp()`을 도입하였습니다.
* `loadAsPromise()`를 [Model SDK 버전 4.18.0](/releasenotes/sdk/model-sdk-4/#418)과 호환되도록 만들었습니다.
* Platform SDK는 이제 실행하려면 ES6 환경이 필요합니다.
* 의존성을 업그레이드하였습니다.
* TypeScript 3으로 타이핑을 업그레이드하였습니다.

## 4.0.0

* 최소 Model SDK 의존성이 4.0.0으로 설정되었습니다.
* Model SDK 4.0.0 업그레이드로 인한 호환성 문제를 수정하였습니다.
* `createOnlineWorkingCopy`의 `revision` 파라미터가 이제 선택 사항입니다.

## 3.0.2

* 최소 Model SDK 의존성이 3.3.0으로 설정되었습니다.
* TypeScript 의존성을 버전 2.2로 업그레이드하였습니다.
* createNewApp 함수에 선택적 `templateUUID` 파라미터를 추가하였습니다.

## 2.0.0

* 이 릴리스의 유일한 변경 사항은 Mendix Model SDK 2.0.0에 대한 의존성입니다. Model SDK 2.0.0에 호환성을 깨뜨리는 API 변경이 있기 때문에 메이저 버전 번호가 변경되었습니다.

## 1.0.2

* 최소 Model SDK 의존성이 1.0.2로 설정되었습니다.
* 이제 명시적으로 설정하는 대신 Model SDK의 기본 Model API 엔드포인트를 사용합니다.

## 1.0.1

* Mendix Model SDK에 대한 피어 의존성을 1.0.0으로 업그레이드하여 1.0.1 이상을 지원합니다.
