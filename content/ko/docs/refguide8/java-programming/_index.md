---
title: "Java 프로그래밍"
url: /refguide8/java-programming/
description: "Mendix Java 라이브러리 사용 방법과 Eclipse를 환경으로 사용하여 Mendix Java Action을 작성하는 방법을 설명합니다."
weight: 60
no_list: false
description_list: true 
---

## 소개

Java Action을 사용하면 Microflow에서 구현하기 어려운 상황에서 애플리케이션의 기능을 확장할 수 있습니다.

Mendix에서의 Java 프로그래밍에 대한 심층적인 내용은 다음 동영상을 확인하십시오:

{{< vidyard "aDNqicHTbTMAqYkQvvxAjc?" >}}

Studio Pro에서의 Java Action에 대한 정보는 [Java Action](/refguide8/java-actions/)을 참조하십시오.

## Java Action의 .java 파일에서 코드 작성

Java Action의 *java* 파일에서 다음 마커 사이에 Java 코드를 작성할 수 있습니다:

* `// BEGIN USER CODE`와 `// END USER CODE`
* `// BEGIN EXTRA CODE`와 `// END EXTRA CODE`

이에 대한 자세한 내용은 아래에서 설명합니다.

이 파일의 다른 코드는 모델을 배포할 때마다 재생성되므로, 해당 부분에 대한 수정 사항은 덮어쓰여집니다. 그러나 import 문은 보존됩니다.

{{% alert color="info" %}}
{{< figure src="/attachments/refguide8/java-programming/917584.png" class="no-border" >}}
Mendix Studio Pro에서 생성된 Java Action. 이 Java Action에는 입력 매개변수가 없으며 단순히 `true` 값의 Boolean을 반환합니다.
{{% /alert %}}

*executeAction* 메서드는 Java Action이 실행될 때 Runtime에 의해 호출됩니다. `// BEGIN USER CODE`와 `// END USER CODE` 줄 사이에 액션을 실행할 때 항상 호출되는 커스텀 코드를 작성할 수 있습니다. 이 메서드에서는 `// BEGIN EXTRA CODE`와 `// END EXTRA CODE` 사이 섹션의 다른 메서드를 호출할 수 있습니다.

executeAction 메서드는 발생하는 모든 예외를 throw합니다. 이는 이 Java Action을 호출하는 Microflow에서 오류 처리를 수행할 수 있음을 의미합니다. 액션 내에서 자체 오류 처리를 수행하려면 try/catch 문을 사용하십시오.

## Mendix Java 라이브러리 사용

Java Action에 작성하는 Java 코드에서 Mendix Java 라이브러리를 사용할 수 있습니다.

{{% alert color="info" %}}
Javadoc은 [apidocs.rnd.mendix.com](https://apidocs.rnd.mendix.com/8/runtime/index.html) 또는 Mendix를 설치한 디렉토리(예: *C:\Program Files\Mendix\8.0.0\runtime\javadoc*)에서 찾을 수 있습니다.
{{% /alert %}}

이 라이브러리는 프로젝트를 Eclipse로 가져올 때 자동으로 라이브러리에 추가되며, *mxruntime.jar*이라고 합니다.

사용법 및 예시에 대한 자세한 내용은 [Java API 사용 방법](/howto8/logic-business-rules/java-api-tutorial/)을 참조하십시오.

## HTTP 연결 열기

대부분의 클라우드 인프라 서비스(Mendix Cloud에서 사용하는 서비스 포함)는 몇 분 동안 트래픽이 없으면 자동으로 HTTP 연결을 닫습니다. 이는 활동이 여전히 응답을 기다리고 있는 경우에도 마찬가지입니다. 이는 활동이 응답하는 데 오랜 시간이 걸리는 웹 서비스를 호출하는 경우 연결이 닫힐 수 있으며, 활동이 이를 인식하지 못하여 응답을 받지 못하고 데이터 도착을 무한히 대기하게 됨을 의미합니다.

따라서 커스텀 Java 코드에서 만드는 모든 연결에 대해 항상 타임아웃을 설정해야 합니다.

## Eclipse를 환경으로 사용하여 Mendix Java Action 작성

이 주제에 대한 자세한 내용은 [Eclipse 사용](/refguide8/using-eclipse/)을 참조하십시오.

## 이 카테고리의 문서
