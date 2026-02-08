---
title: "SDK FAQ 및 문제 해결"
url: /apidocs-mxsdk/mxsdk/sdk-faq/
weight: 3
---

## 일반 질문

### 지원되는 Mendix 버전은 무엇인가요?

Mendix 6.0.0 이상입니다.

### Model API는 어디에서 실행되나요?

Model API 서비스는 유럽 연합에서 호스팅됩니다.

### 온라인 작업 복사본은 얼마나 오래 유지되나요?

온라인 작업 복사본은 생성 후 24시간이 지나면 자동으로 삭제됩니다. 수명을 연장할 수 없으며, 새로운 온라인 작업 복사본을 생성해야 합니다.

### 앱 크기 제한은 어떻게 되나요?

업로드되는 초기 앱 *.mpk* 파일은 250 Mb를 초과할 수 없습니다(앱 *.mpk* 파일과 기타 파일 합산).

### 작업 복사본 크기 제한은 어떻게 되나요?

작업 복사본에 허용되는 최대 파일 수는 20,000개입니다.

### Model API로 어떤 앱에 접근할 수 있나요?

[Mendix Team Server](/developerportal/repository/team-server/)에 저장된 모든 앱에 접근할 수 있습니다. 예를 들어 온프레미스 Git 서버 등 다른 곳에 저장된 앱은 Model API로 접근할 수 없습니다.

## 일반적인 오류 메시지

### Delta Rejected, Delta Queue Connection Has Closed

이 오류 메시지는 모델을 변경할 때 표시되지만, Model Server의 온라인 작업 복사본에 대한 연결이 이미 닫힌 경우입니다. 이 오류는 스크립트가 모든 모델 업데이트가 실행될 때까지 기다리지 않고 너무 빨리 커밋을 실행할 때 발생하기도 합니다.

### JS Allocation Failed, Process Out of Memory

이 오류는 대규모 모델을 열고 많은 문서(예: 페이지, 마이크로플로우(Microflow))를 로드할 때 발생할 수 있습니다. `max-old-space-size` 플래그와 적절한 메모리 크기(MB)를 사용하여 스크립트에 사용 가능한 메모리를 늘릴 수 있습니다:

`node --max-old-space-size=4096 script.js`
