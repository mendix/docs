---
title: "피드백"
url: /developerportal/app-insights/feedback/
weight: 5
description: "Mendix는 애플리케이션에서 [피드백](/appstore/modules/mendix-feedback/) 모듈을 활성화하여 [피드백 관리](/developerportal/app-insights/feedback/)를 지원합니다. 앱 사용자는 애플리케이션에 통합된 피드백 버튼을 통해 쉽게 피드백을 제공할 수 있습니다."
aliases:
    - /developerportal/collaborate/feedback/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

앱이 [Mendix 피드백](/appstore/modules/mendix-feedback/) 모듈을 사용하는 경우, 사용자는 앱의 피드백 위젯(Widget)을 사용하여 팀에 피드백을 보고할 수 있으며, 모든 피드백은 **피드백(Feedback)** 페이지로 전송됩니다. **피드백(Feedback)**을 통해 팀은 모든 피드백을 보고 올바른 권한을 가진 팀 멤버가 피드백을 정리하고 수동으로 추가할 수 있습니다.

[앱(Apps)](https://sprintr.home.mendix.com/)에서 앱을 선택한 후 내비게이션 패널에서 **Feedback**을 클릭하여 **피드백(Feedback)** 페이지에 접근할 수 있습니다.

**피드백(Feedback)** 페이지에는 [수신함(Inbox)](#inbox)과 [아카이브(Archive)](#archive) 두 개의 탭이 있습니다.

### 피드백 제출 후 사용자에게 무슨 일이 일어나나요? {#what-happens-to-user}

#### 팀에 무슨 일이 일어나나요

사용자가 앱에서 피드백 위젯을 사용하여 피드백을 보고하면 피드백이 자동으로 **피드백(Feedback)** 페이지의 [수신함](#inbox)으로 이동하고 Scrum Master이거나 Scrum Master의 기본 권한과 동일한 권한을 가진 팀 멤버가 [알림](/portal/global-navigation/#notifications)을 받습니다.

#### 사용자에게 무슨 일이 일어나나요

사용자가 앱에서 피드백을 보고하면 제출한 피드백 링크가 포함된 이메일을 받습니다.

## 수신함 {#inbox}

**Inbox** 탭에서 팀의 모든 사람이 앱에서 사용자가 보낸 아카이브되지 않은 모든 피드백을 볼 수 있습니다.

{{< figure src="/attachments/developerportal/app-insights/feedback/feedback-items.png" alt="inbox tab" >}}

**Inbox** 탭의 목록에서 각 피드백에 대한 다음 정보를 확인할 수 있습니다:

* **ID** – 피드백에 할당된 고유 번호
* **Subject** – 보고자가 제공한 피드백 제목
* **Group** – 피드백이 속한 그룹
* **Submitter** – 보고자의 이메일 주소
* **Tags** – 팀이 피드백에 할당한 태그
* **Status** – 팀이 피드백에 설정한 상태
* **Date** – 피드백이 제출된 날짜
* **Stories** – 피드백이 연결된 스토리
* **Priority** – 피드백의 우선순위

모든 피드백을 하나의 CSV 파일로 내보내려면 **Export**를 클릭하세요.

### 수신함에서 피드백 정리

수동으로 새 피드백을 추가할 수 있습니다. 목록에서 피드백을 선택하면 **Group Items**, **Create Story**, **Change Status**, **Move to App**, **Archive**, **Delete** 옵션을 사용할 수 있습니다.

## 그룹 {#groups}

**Groups** 탭에서 팀의 모든 사람이 앱의 모든 피드백 그룹을 볼 수 있습니다.

## Maia로 피드백 정리

Maia를 사용하여 정렬되지 않은 피드백을 정리할 수 있습니다. {{% icon name="sparkles" %}} (**Ask Maia**)를 클릭한 후 **Suggest Groups** 또는 **Add Feedback to Group**을 선택하세요.

## 아카이브 {#archive}

**Archive** 탭에서 팀의 모든 사람이 아카이브된 모든 피드백을 볼 수 있습니다.

## 피드백 세부 정보 {#feedback-details}

[수신함](#inbox) 및 [아카이브](#archive) 탭에서 목록의 피드백을 클릭하여 피드백 세부 정보를 열 수 있습니다.

다음 항목이 제공됩니다:

* **Assigned To** – 피드백이 할당된 사람을 표시합니다.
* **Priority** – 피드백의 우선순위를 표시합니다.
* **Status** – 피드백의 상태입니다.
* **Tags** – 피드백에 할당된 태그입니다.
* **Summary** – 피드백의 요약입니다. 팀 멤버만 이 요약을 볼 수 있습니다.
* **User Feedback** – 보고자가 제출한 원본 피드백 제목, 설명 및 스크린샷을 표시합니다.
* **Metadata** – 피드백의 메타데이터 목록을 표시합니다.
* **Story** – 피드백에 연결된 스토리를 표시합니다.
* **Attachments** – 피드백에 대한 첨부 파일을 포함합니다.
* **Communication** – **Team Comments**와 **Contact Submitter** 탭으로 구성됩니다.

### Maia로 스토리 생성 {#create-with-maia}

Maia를 사용하여 하나 이상의 피드백을 기반으로 스토리를 생성할 수 있습니다.

### 태그 관리 {#manage-tags}

[피드백 세부 정보](#feedback-details) 페이지에서 **Tags** 텍스트 상자 옆의 **Settings** ({{% icon name="cog" %}})를 클릭하여 태그를 관리할 수 있습니다.

  {{< figure src="/attachments/developerportal/app-insights/feedback/tag-management-settings.png" alt="tag management setting" >}}

## 알림 받기 {#notifications}

새 피드백이 **Inbox**에 도착하거나 보고자가 피드백에 회신할 때 알림을 받을 수 있습니다.

### 개별 피드백에 대한 알림 받기 {#notifications-individual-feedback}

개별 피드백에 대한 알림을 받을 수 있습니다. 피드백을 연 후 오른쪽 상단의 {{% icon name="view-off" %}} 아이콘을 클릭하여 설정할 수 있습니다.
