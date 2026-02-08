---
title: "Eclipse 사용하기"
url: /refguide9/using-eclipse/
weight: 2
description: "Eclipse 설정 방법과 Mendix 애플리케이션을 Eclipse에 추가하고 실행하는 방법을 설명합니다."
---

## 소개

Eclipse를 사용하여 Mendix 앱에서 Java Action을 작성하고 디버깅할 수 있습니다. Mendix 모델이 배포되면 Eclipse 프로젝트 파일, 클래스패스 파일 및 실행 구성이 생성됩니다.

## Eclipse 설정

Mendix에서 모든 텍스트는 UTF-8 인코딩으로 저장됩니다. 소스 코드도 UTF-8로 저장되도록 하려면 다음을 수행하십시오:

1. **Window > Preferences**를 선택합니다.
2. 새 메뉴 창에서 **Workspace**를 선택합니다.
3. **UTF-8**을 선택합니다:

    {{< figure src="/attachments/refguide9/java-programming/using-eclipse/eclipse-utf8-encoding.png" alt="Settings UTF-8 encoding" class="no-border" >}}

또한 Java Development Kit(JDK)이 설치되고 선택되어 있어야 합니다.

{{< figure src="/attachments/refguide9/java-programming/using-eclipse/eclipse-jdk.png" alt="Selecting a default JDK" class="no-border" >}}

Eclipse에서 JDK를 추가하고 기본값으로 선택하십시오.

## Mendix 앱 추가

Eclipse에 Mendix 앱을 추가하려면 다음을 수행하십시오:

1. **File > Import**를 선택합니다.
2. **General** 폴더를 열고 **Existing Projects into Workspace**를 선택한 후 **Next >**를 선택합니다:

    {{< figure src="/attachments/refguide9/java-programming/using-eclipse/eclipse-select-import.png" alt="Import existing project" class="no-border" >}}

3. **Select root directory** 옵션을 사용하여 Mendix 앱 폴더를 찾아 **Finish**를 선택합니다:

    {{< figure src="/attachments/refguide9/java-programming/using-eclipse/import-eclipse-project.png" alt="Select root directory" class="no-border" >}}

## Mendix 앱 실행

앱을 실행하려면 다음을 수행하십시오:

1. 애플리케이션을 시작하려는 방법에 따라 **Run > Run configurations...** 또는 **Run > Debug configurations...**를 선택합니다.
2. **Java application**을 선택하면 Mendix Studio Pro에서 생성한 실행 구성이 나타납니다.
3. **Run**(또는 **Debug**)을 선택하여 애플리케이션을 시작합니다:

    {{< figure src="/attachments/refguide9/java-programming/using-eclipse/eclipse-run-configuration.png" alt="Launch configuration" class="no-border" >}}

애플리케이션을 실행한 후 **M2EE Admin Console**이 나타납니다. 이는 Mendix Studio Pro에서 애플리케이션을 실행할 때 보통 보는 것과 동일한 콘솔입니다. 콘솔을 닫아 애플리케이션을 중지할 수 있습니다.

{{< figure src="/attachments/refguide9/java-programming/using-eclipse/eclipse-debug-log.png" alt="M2EE Admin Console" class="no-border" >}}
