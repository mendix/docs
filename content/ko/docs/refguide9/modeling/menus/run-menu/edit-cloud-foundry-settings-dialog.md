---
title: "Cloud Foundry 설정 편집"
url: /refguide9/edit-cloud-foundry-settings-dialog/
---

## 소개

**Edit Cloud Foundry Settings** 메뉴 옵션을 사용하면 Cloud Foundry 인스턴스에 앱을 배포하는 데 필요한 정보를 지정할 수 있습니다.

{{% alert color="info" %}}
Cloud Foundry 배포에 대한 자세한 내용은 [Cloud Foundry: Deploy](/developerportal/deploy/cloud-foundry-deploy/)에서 확인할 수 있습니다.
{{% /alert %}}

## 자격 증명 입력

Cloud Foundry 배포를 위한 앱 구성의 첫 번째 단계는 사용하려는 Cloud Foundry 계정의 계정 정보를 입력하는 것입니다.

{{< figure src="/attachments/refguide9/modeling/menus/run-menu/edit-cloud-foundry-settings-dialog/cloud-foundry-credentials.png" alt="Enter Cloud Foundry Credentials" class="no-border" >}}

아래에 설명된 대로 화면에 세부 정보를 입력한 다음 **Next**를 클릭하여 지정된 자격 증명을 검증하고 다음 구성 단계를 표시하십시오.

### API Endpoint

배포에 사용할 Cloud Foundry 플랫폼의 **API endpoint**를 정의하는 URL입니다.

### User Name

Cloud Foundry 계정의 **User name**입니다.

### Password

Cloud Foundry 계정의 **Password**입니다.

## Cloud Foundry 앱 선택

두 번째 단계에서는 Cloud Foundry 조직에서 기존 앱을 선택하거나 새 앱을 만들 수 있습니다. 이곳이 Mendix 앱이 배포되는 곳입니다.

{{< figure src="/attachments/refguide9/modeling/menus/run-menu/edit-cloud-foundry-settings-dialog/cloud-foundry-app-settings.png" alt="Enter Settings for Cloud Foundry App" class="no-border" >}}

### Organization

사용할 **Organization**을 선택하십시오. 사용 가능한 Organization이 없으면 Cloud Foundry 계정에서 구성해야 합니다. Mendix Studio Pro 내에서 새 Organization을 만드는 것은 불가능합니다.

### Space

사용할 **Space**를 선택하십시오. 사용하려는 Space가 이미 Cloud Foundry 계정에 구성되어 있어야 합니다. Mendix Studio Pro 내에서 새 Space를 만드는 것은 불가능합니다.

### App

기존 앱 환경을 사용하려면 **Select existing app**을 선택하고, 새 앱 환경을 만들려면 **Create new app**을 선택하십시오.

#### 기존 앱 선택

**Select existing app**을 선택하면 드롭다운 목록에서 올바른 앱을 선택할 수 있습니다.

#### 새 앱 생성

**Create new app**을 선택하면 다음을 수행해야 합니다:

1. 앱이 실행될 **Domain**을 드롭다운에서 선택합니다.
2. 앱의 **App name**을 입력합니다.

앱의 URL은 {App name}.(Domain)이 됩니다.

### Buildpack

Cloud Foundry 앱에서 사용할 **Buildpack**의 URL을 여기에 입력할 수 있습니다. 기본 Mendix 빌드팩을 사용하지 않으려는 경우에만 변경하십시오.
