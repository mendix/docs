---
title: "Pluggable Widgets Tools 업데이트"
url: /howto/extensibility/update-pluggable-widgets-tools/
description: "이 가이드를 따라 Pluggable Widget에서 사용하는 Pluggable Widgets Tools 패키지를 최신 버전으로 업데이트하세요."
weight: 10
---

## 소개

이 가이드를 따라 Pluggable Widget에서 사용하는 Pluggable Widgets Tools 패키지를 최신 버전으로 업데이트하세요.

## 사전 준비 사항

* 최신 LTS 버전의 [Node.js](https://nodejs.org)를 설치하세요.
* 원하는 통합 개발 환경(IDE)을 설치하세요 (Mendix는 [Microsoft Visual Studio Code](https://code.visualstudio.com/)를 권장합니다).

## Pluggable Widgets Tools 패키지 업데이트

특정 Widget의 Pluggable Widget Tools 패키지를 업데이트하려면 Widget 디렉터리의 루트에서 다음 명령을 실행하세요:

1. 원하는 IDE로 Widget을 여세요.
1. `npm install --save-dev @mendix/pluggable-widgets-tools@latest`를 실행하여 최신 버전을 가져오세요.
   * 특정 버전을 대상으로 하는 경우 `npm install --save-dev @mendix/pluggable-widgets-tools@YOUR_VERSION`을 사용할 수 있습니다.
1. 설치가 완료되면 `npm run start`를 실행하세요.
   * 이전 종속성 처리에 대한 프롬프트가 표시될 수 있습니다. `Y`(es)를 입력해야 합니다. 업데이트가 완료되기까지 시간이 좀 걸릴 수 있습니다.

{{% alert color="info" %}}
TypeScript에서 타입 또는 패키지 오류가 발생하는 경우, 업데이트가 완료된 후 Widget 프로젝트를 닫았다가 다시 열어야 할 수 있습니다.
{{% /alert %}}

## 더 읽기

* [Pluggable Native Widget 빌드](/howto/extensibility/build-native-widget/)
* [Pluggable Web Widget 빌드](/howto/extensibility/pluggable-widgets/)
