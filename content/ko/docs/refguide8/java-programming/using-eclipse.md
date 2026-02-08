---
title: "Eclipse 사용"
url: /refguide8/using-eclipse/
---

Eclipse를 사용하여 Mendix 프로젝트의 Java Action을 작성하고 디버그하는 것은 매우 간단합니다. Mendix 모델이 배포되면 Eclipse 프로젝트 파일, 클래스패스 파일 및 실행 구성이 생성됩니다.

Mendix에서는 모든 텍스트가 UTF-8 인코딩으로 저장됩니다. 먼저 소스 코드도 UTF-8로 저장되는지 확인하십시오. 이것은 창(window) 메뉴로 이동하여 preferences를 선택한 다음, 아래 스크린샷에 표시된 대로 UTF-8을 선택하여 수행할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/java-programming/using-eclipse/918120.png" class="no-border" >}}
UTF-8 인코딩 설정.

{{% /alert %}}

Java Development Kit(JDK)도 설치하고 선택해야 합니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/java-programming/using-eclipse/918186.png" class="no-border" >}}
기본 JDK 선택.

{{% /alert %}}

Eclipse에서 JDK를 추가하고 기본값으로 선택하십시오.

Mendix 프로젝트를 Eclipse에 추가하려면 다음 단계를 수행하십시오:

* File 메뉴를 열고 Import를 클릭하십시오
* 'General' 폴더를 열고 'Existing projects into Workspace'를 선택한 후 next를 클릭하십시오
* 'select root directory' 옵션을 사용하여 Mendix 프로젝트 폴더를 찾아 finish를 클릭하십시오

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/java-programming/using-eclipse/917580.png" class="no-border" >}}
기존 프로젝트 가져오기.

{{% /alert %}}{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/java-programming/using-eclipse/917527.png" class="no-border" >}}
기존 프로젝트 가져오기 2단계.

{{% /alert %}}

이제 평소처럼 Java Action을 편집할 수 있습니다.

프로젝트를 실행하려면 프로젝트를 실행하려는 방법에 따라 'debug configurations' 또는 'run configurations'로 이동하십시오. 왼쪽 메뉴에서 'Java application' 메뉴를 선택하면 Mendix Studio Pro에서 생성된 실행 구성을 볼 수 있습니다. 오른쪽의 'debug' 또는 'run'을 클릭하여 애플리케이션을 시작하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/java-programming/using-eclipse/917586.png" class="no-border" >}}
실행 구성 찾기.

{{% /alert %}}

애플리케이션을 실행한 후 M2EE 관리 콘솔 팝업이 표시됩니다. 이것은 Studio Pro에서 프로젝트를 실행하면 일반적으로 볼 수 있는 동일한 콘솔입니다. 콘솔을 닫아 애플리케이션을 중지할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/java-programming/using-eclipse/917582.png" class="no-border" >}}
M2EE 관리 콘솔.

{{% /alert %}}
