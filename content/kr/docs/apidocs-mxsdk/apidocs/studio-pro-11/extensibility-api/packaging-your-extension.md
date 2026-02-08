---
title: "확장 프로그램 패키징"
url: /apidocs-mxsdk/apidocs/extensibility-api-11/packaging-your-extension
weight: 30
---

# 확장 프로그램 패키징

확장 프로그램 개발을 완료한 후에는 다른 사람이 사용할 수 있도록 추가 기능(add-on) 모듈로 패키징할 수 있습니다. 패키징된 모듈은 Mendix Marketplace에 게시하여 다른 사용자가 Studio Pro 앱에 다운로드할 수 있도록 할 수 있습니다.

확장 프로그램을 패키징하려면 아래 단계를 따르십시오:

1. 앱의 Preferences에서 [확장 프로그램 개발(Extension Development)](/refguide/preferences-dialog/#extension-development) 설정을 활성화했는지 확인하십시오. 또는 `--enable-extension-development` 명령줄 옵션으로 Studio Pro를 시작할 수 있습니다.
2. Studio Pro 앱에서 새 모듈을 만들고 개발 확장 프로그램을 포함하십시오.
3. 모듈에 이름을 지정하십시오. 
4. 모듈 설정을 열고 **Export** 탭에서 **Add-on module**을 선택하십시오. 
5. **Extension name** 드롭다운에서 패키징하려는 확장 프로그램을 선택하십시오.

![Extension Add-on Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensionAddOnModule.png)

확장 프로그램이 포함된 추가 기능 모듈을 만든 후에는 **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Export add-on module package**를 선택하여 내보낼 수 있습니다.

![Export Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/exportAddOnModule.png)

이제 원하는 위치에 추가 기능 모듈을 저장할 수 있습니다.

# 확장 프로그램 추가 기능 모듈 가져오기

추가 기능 모듈을 Studio Pro 사용자가 사용할 수 있게 되면 애플리케이션에 추가할 수 있습니다. 이는 **App Explorer**에서 앱을 마우스 오른쪽 버튼으로 클릭하고 **Import module package**를 선택하여 수행할 수 있습니다.

![Import Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/importAddOnModule.png)

확장 프로그램이 포함된 추가 기능 모듈을 앱으로 가져올 때 Studio Pro는 사용자에게 경고를 표시하여 포함된 확장 프로그램을 신뢰할지 묻습니다. 사용자가 신뢰하지 않도록 선택하면 모듈은 여전히 가져오지만 내부의 확장 프로그램은 로드되지 않습니다.

![Trust Extension](/attachments/apidocs-mxsdk/apidocs/extensibility-api/trustExtension.png)
