---
title: "시작 후 오류?"
url: /appstore/partner-solutions/apd/ig-one-after-startup-error/
---

Mendix가 다른 Mendix 버전에서 다른 매개변수 이름을 생성할 때 시작 후 Java에서 오류가 발생하는 경우가 있습니다. 이런 경우 apmtool@clevr.com으로 알려주시면 CLEVR이 이를 유발하는 Java 액션 매개변수의 이름을 변경할 수 있습니다.
다음과 같이 해결할 수 있습니다. 먼저 프로젝트 폴더를 엽니다:
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/ig-one-after-startup-error/Show_Project_Dir.png" class="no-border" >}}

그리고 javasource/apmagent/actions 폴더에서 파일을 검색합니다.
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/ig-one-after-startup-error/Explorer_Actions_Folder.png" class="no-border" >}}

다음 줄 사이의 코드에서 Java의 이전 매개변수 이름을 새 매개변수 이름으로 변경해야 합니다.
// BEGIN USER CODE
와
// END USER CODE
.
Mendix가 생성한 가상의 매개변수 불일치가 있는 샘플 Java 파일:
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/ig-one-after-startup-error/Action_Java_Source.png" class="no-border" >}}
