---
title: "테스트"
url: /appstore/creating-content/best-practices/testing/
weight: 12
---

## 소개

[Unit Testing](/appstore/modules/unit-testing/) 모듈을 사용하여 전체 기능에 대해 Microflow를 호출하여 Mendix를 테스트할 수 있습니다. 단위 테스트는 Java 코드의 메서드 수준에서 더 작고 대상이 지정된 테스트에 사용하십시오.

모든 자동화된 테스트와 마찬가지로, 알려진 예상 동작을 캡처하는 데 훌륭한 보완책입니다. 알려지지 않은 동작을 캡처하려면 Mendix는 리스크 기반 탐색적 테스트를 권장합니다.

## Microflow 테스트

모듈을 빌드한 Mendix 앱을 사용하여 모듈을 테스트하십시오. Unit Testing 모듈은 테스트를 지원하기 위해 Microflow 및 Action을 호출하는 데 도움이 될 수 있습니다. 자세한 내용은 [Unit Testing 모듈로 Microflow 테스트](/refguide/testing-microflows-with-unit-testing-module/)를 참조하십시오.

## Java 단위 테스트 {#unit-testing}

Java 단위 테스트는 Java 코드의 테스트를 자동화하는 좋은 방법입니다. 이는 Java Action으로 Mendix 앱이나 커넥터를 확장할 때 유용합니다.

### Java 단위 테스트 도구

다음 도구는 Mendix 앱의 사용자 지정 Java 코드 테스트 프로세스의 일부입니다:

* [JUnit](https://junit.org/junit5/) — Java 단위 테스트를 쉽게 실행할 수 있습니다.
* [Mockito](https://site.mockito.org/) — Java 클래스를 모킹할 수 있습니다. 테스트 중에 실제 클래스를 다루는 것처럼 동작하면서 실제로는 그렇게 행동하는 것에 불과한 클래스를 만들 수 있습니다.
* [JaCoCo](https://www.jacoco.org/jacoco/trunk/index.html) (Java Code Coverage) — 코드가 테스트로 얼마나 잘 커버되는지 확인하는 데 도움이 됩니다.
* [Gradle](https://gradle.org/) — 모든 것을 통합하여 Java 종속성을 관리하고, JUnit 및 Mockito와 함께 작동하는 방법을 제공합니다.  
   Gradle은 Java 종속성을 관리하고 [JUnit](https://junit.org) 테스트를 실행하는 것을 처리할 수 있습니다. *개발*의 [Java로 커넥터 빌드를 위한 앱 설정 확장](/appstore/creating-content/best-practices/development/#extend-app-java) 섹션에서 Gradle 설정에 대해 읽으십시오. 파이프라인이 있는 경우, Mendix는 테스트를 파이프라인의 일부로 실행할 것을 권장합니다. 

### Java 단위 테스트 참조 사용

Mendix 앱은 `Core` 클래스가 필요하며, **Class Core** [Runtime API](/apidocs-mxsdk/apidocs/)를 사용하면 Microflow에서 일반적으로 수행하는 객체 커밋과 같은 작업을 수행할 수 있습니다. `CoreProxy`는 Java 로직과 **Core** API 사이의 모킹 가능한 레이어 역할을 합니다. 

이 프로세스를 도와주는 [Java 단위 테스트 참조](https://Github.com/mendixlabs/javaunittestreference)가 있습니다. `MendixUnitTestBase.java`는 확장 및 재사용이 가능합니다. 확장하면 테스트 클래스에서 Mockito가 활성화되고 `Core` API 동작이 모킹됩니다. 이를 통해 다음이 가능합니다:

* 코드가 로그 노드에 특정 로그 메시지를 보내는지 확인합니다.
* 코드가 올바른 매개변수로 Microflow를 호출하는지 확인합니다.
* Java 코드에서 상수를 사용할 수 있게 합니다.

{{% alert color="info" %}}
Java 단위 테스트 참조는 Studio Pro [9.12](/releasenotes/studio-pro/9.12/)까지 테스트되었습니다.
{{% /alert %}}

### Java 코드 작성

Java 코드를 작성할 때, 가능한 한 Mendix에 독립적인 로직을 많이 사용하십시오. 이를 통해 테스트 가능성이 향상되어 Java 코드를 단위 테스트하기 위해 Mendix `Core`를 모킹할 필요가 없습니다. 

Mendix 없이 실행할 수 있는 일반 Java 클래스에서 대부분의 동작을 코딩하면, 개발과 테스트가 훨씬 간단하고 빨라집니다. Mendix 앱을 실행할 필요가 없으며, Java JUnit 테스트에 의존하여 테스트할 수 있습니다.

다른 Java 단위 테스트 예제는 [Slack Connector 테스트](https://Github.com/ako/SlackConnector/blob/master/javasource/testslackconnector/tests/TestSlackConnector.java)를 참조하십시오.
