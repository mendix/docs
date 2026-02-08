---
title: "확장 기능 패키징하기"
url: /apidocs-mxsdk/apidocs/extensibility-api-10/packaging-your-extension
weight: 30
---

# 확장 기능 패키징하기

확장 기능 개발을 완료한 후, 다른 사람들이 사용할 수 있도록 애드온 모듈로 패키징할 수 있습니다. 패키징이 완료되면 Mendix Marketplace에 게시하여 다른 사용자가 자신의 Studio Pro 앱에 다운로드할 수 있습니다.

확장 기능을 패키징하려면 아래 단계를 따르십시오:

1. `--enable-extension-development` 명령줄 옵션이 활성화되어 있는지 확인하십시오.
2. Studio Pro 앱에서 새 모듈을 만들고 개발 확장 기능을 포함하십시오.
3. 모듈에 이름을 지정하십시오.
4. 모듈의 설정을 열고 **Export** 탭에서 **Add-on module**을 선택하십시오.
5. **Extension name** 드롭다운에서 패키징하려는 확장 기능을 선택하십시오.

![Extension Add-on Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensionAddOnModule.png)

애드온 모듈과 해당 확장 기능을 만든 후, App Explorer에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Export add-on module package**를 선택하여 내보낼 수 있습니다.

![Export Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/exportAddOnModule.png)

이제 원하는 위치에 애드온 모듈을 저장할 수 있습니다.

# 확장 기능 애드온 모듈 가져오기

Studio Pro 사용자가 애드온 모듈을 사용할 수 있게 되면 자신의 애플리케이션에 추가할 수 있습니다. **App Explorer**에서 앱을 마우스 오른쪽 버튼으로 클릭하고 **Import module package**를 선택하면 됩니다.

![Import Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/importAddOnModule.png)

확장 기능이 포함된 애드온 모듈을 앱에 가져오면 Studio Pro는 사용자에게 포함된 확장 기능을 신뢰할 것인지 묻는 경고를 표시합니다. 사용자가 신뢰하지 않기로 선택하면 모듈은 가져오지만 그 안의 확장 기능은 로드되지 않습니다.

![Trust Extension](/attachments/apidocs-mxsdk/apidocs/extensibility-api/trustExtension.png)
