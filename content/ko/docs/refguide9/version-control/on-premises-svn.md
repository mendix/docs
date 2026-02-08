---
title: "SVN 온프레미스 버전 관리 서버 사용하기"
linktitle: "SVN 온프레미스 버전 관리 서버"
url: /refguide9/on-premises-svn/
weight: 50
description: "SVN 온프레미스 버전 관리 서버에서 작업하는 방법을 소개합니다."
aliases:
    - /howto9/collaboration-requirements-management/on-premises-svn-howto/
---

## 소개

Mendix 애플리케이션을 개발할 때 이러한 애플리케이션의 변경 사항은 버전 관리 시스템에 저장됩니다. 이 시스템은 [Team Server](/developerportal/repository/team-server/)라고 하며 Mendix Platform의 일부입니다. 즉, 애플리케이션의 파일이 Mendix 온라인 환경에 저장됩니다. 자세한 내용은 [버전 관리](/refguide9/version-control/)를 참조하십시오.

이것이 거의 모든 Mendix 개발자에게 권장되는 작업 방식이지만, 자체 조직이 관리하는 시스템에 애플리케이션 파일을 저장하는 것을 선호할 수 있습니다. 버전 관리를 위해 Mendix는 [Subversion](https://subversion.apache.org) 시스템(SVN이라고도 함)과 [Git](/refguide9/on-premises-git/)을 사용합니다. 이 문서에서는 SVN 버전 관리 시스템에서 작업하는 방법을 설명합니다.

{{% alert color="info" %}}
이 문서에서는 SVN 서버를 처음부터 설정하는 방법을 설명하지 않습니다. 일반적으로 이는 조직의 IT 부서에서 처리합니다.
{{% /alert %}}

## 전제 조건

다음 전제 조건을 완료했는지 확인하십시오:

* SVN 서버에 접근할 수 있고 해당 SVN 서버에 접근할 수 있는 자격 증명(사용자 이름 및 비밀번호)을 보유
* SVN 서버의 위치를 알고 있음 – 일반적으로 인터넷 URL과 유사한 주소(예: `https://svn.example.com:9876/repos/myapp`)

## 리포지토리

Subversion은 버전 관리된 앱의 모든 데이터를 저장하기 위해 리포지토리를 사용합니다. 각 Subversion 서버는 여러 다른 리포지토리를 포함할 수 있습니다.

Mendix는 각 Mendix 애플리케이션을 별도의 리포지토리에 저장해야 합니다. 단일 리포지토리에 여러 Mendix 앱을 배치할 수 없습니다.

리포지토리에 앱을 업로드할 때, Mendix는 리포지토리가 비어 있어야 합니다(SVN 권장 레이아웃 제외, [권장 리포지토리 레이아웃](https://svnbook.red-bean.com/en/1.7/svn.tour.importing.html#svn.tour.importing.layout)에 설명됨). 구체적으로, 리포지토리에는 **branches**, **tags**, **trunk**라는 세 개의 빈 폴더만 포함되어야 합니다.

일반적으로 리포지토리는 SVN 서버 관리자가 만들고 유지 관리합니다. 리포지토리에 대한 자세한 내용은 [리포지토리 관리](https://svnbook.red-bean.com/en/1.7/svn-book.html#svn.reposadmin)를 참조하십시오.

이 문서의 다음 섹션에서는 애플리케이션을 위한 리포지토리가 사용 가능하다고 가정합니다.

## SVN 버전

Mendix Studio Pro에는 SVN 작업 사본 형식 버전 1.9를 사용하는 (내장) Subversion 클라이언트가 있습니다. 이 클라이언트는 SVN 서버의 모든 1.x 버전과 호환되어야 하므로, 예를 들어 1.6.x 또는 1.9.x SVN 서버도 사용할 수 있습니다.

{{% alert color="warning" %}}
Mendix Studio Pro는 Subversion 1.9 작업 사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 사본을 사용했습니다. 이 작업 사본 버전은 호환되지 않습니다.

이는 별도의 SVN 클라이언트(예: [TortoiseSVN](https://tortoisesvn.net/))를 사용하여 Mendix 앱에서 작업하는 경우, 항상 앱 모델에 맞는 버전을 사용해야 함을 의미합니다. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면, **더 이상 Mendix에서 열 수 없습니다**.
{{% /alert %}}

## 온프레미스 SVN 서버에 저장할 새 앱 만들기

온프레미스 SVN 서버에 저장할 새 앱을 만들려면 다음 단계에 따라 Studio Pro에서 앱을 만들어야 합니다:

1. **My Apps** 페이지에서 **New App**을 클릭합니다.
2. **App Settings** 대화 상자에서 **Enable online services**에 대해 **No**를 클릭합니다.
3. 상단 메뉴에서 **Edit** > **Preferences** > **Advanced**로 이동하여 **Enable private version control** 상자가 선택되어 있는지 확인합니다.
4. 상단 메뉴에서 **Version Control** > **Upload to Version Control Server**를 선택합니다.
5. [Upload to Version Control Server](/refguide9/upload-to-version-control-dialog/) 대화 상자에서 **Private server**를 선택합니다.
6. **App repository address** 필드에 SVN 서버의 주소를 입력합니다. 이 주소에는 앱에 사용할 리포지토리 이름이 포함되어야 합니다(예: `https://svn.example.com:9876/repos/myapp`).
7. **OK**를 클릭하여 서버에 연결합니다.

## Mendix Team Server에서 SVN 서버로 앱 이동

Mendix Team Server에서 프라이빗 SVN 서버로 앱을 이동하는 것을 살펴보기 위해, [Apps](/developerportal/)에서 새 앱을 만드는 시나리오를 사용합니다. 이 경우 Team Server 앱이 자동으로 생성됩니다.

{{% alert color="warning" %}}
온프레미스 SVN 서버에 저장할 앱을 만드는 목적의 경우, 이것은 더 이상 권장되지 않는 워크플로입니다.
{{% /alert %}}

1. [Apps](https://sprintr.home.mendix.com/)에서 **Create App**을 클릭합니다.
2. 앱을 만든 후 **Edit App** 옆의 화살표를 클릭하고 **Edit in Mendix Studio Pro**를 선택한 다음 해당 Studio Pro 버전에서 앱을 엽니다. 앱을 로컬 컴퓨터에 다운로드하려면 Studio Pro에서 앱을 열어야 합니다(자세한 내용은 [버전 관리](/refguide9/version-control/) 참조).
3. 앱에는 기본적으로 Mendix Team Server 위치에 대한 링크가 포함되어 있습니다. 이를 자체 SVN 서버 주소로 교체하려면 [Mendix Support Portal](https://support.mendix.com/)에서 앱과 SVN 서버 주소를 지정하는 티켓을 만드십시오. 이 주소에는 앱에 사용할 리포지토리 이름이 포함되어야 합니다(예: `https://svn.example.com:9876/repos/myapp`). 이를 통해 Mendix Support가 앱의 URL을 변경할 수 있습니다.
4. 프로세스를 계속하기 전에 Mendix Support의 확인을 기다립니다.
5. Studio Pro의 모든 인스턴스를 닫은 상태에서, 앱이 로컬로 저장된 폴더를 엽니다.
6. **.svn** 및 **.mendix-cache** 폴더를 삭제합니다(이 폴더는 숨겨져 있을 수 있으며, 파일 탐색기에서 표시하려면 옵션을 활성화해야 할 수 있습니다). 이러한 폴더를 삭제하면 Mendix Team Server에 대한 참조가 제거됩니다. 이제 앱을 자체 SVN 서버에 업로드할 준비가 되었습니다.
7. 앱 폴더의 **.mpr** 파일을 더블클릭하여 Studio Pro에서 앱을 다시 엽니다(예: 앱 이름이 **MyApp**인 경우, 이 파일의 이름은 **MyApp.mpr**입니다). 또는 Studio Pro를 시작하고 **My Apps** > **Open App**을 클릭한 다음 위에서 언급한 로컬 **.mpr** 파일을 찾아 앱을 열 수 있습니다.
8. Studio Pro에서 앱이 열리면 상단 메뉴에서 **Edit** > **Preferences** > **Advanced**로 이동하여 **Enable private version control** 상자가 선택되어 있는지 확인합니다.
9. 상단 메뉴에서 **Version Control** > **Upload to Version Control Server**를 선택합니다.
10. [Upload to Version Control Server](/refguide9/upload-to-version-control-dialog/) 대화 상자에서 **Private server**를 선택합니다.
11. **App repository address** 필드에 SVN 서버의 주소를 입력합니다. 이 주소에는 앱에 사용할 리포지토리 이름이 포함되어야 합니다(예: `https://svn.example.com:9876/repos/myapp`).
12. **OK**를 클릭하여 서버에 연결합니다.

## 더 읽기

* [버전 관리](/refguide9/version-control/)
* [Team Server](/developerportal/repository/team-server/)
* [Upload to Version Control Server](/refguide9/upload-to-version-control-dialog/)
