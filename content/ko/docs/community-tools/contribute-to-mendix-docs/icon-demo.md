---
title: "아이콘 데모"
linktitle: "아이콘 데모"
url: /icons
description: "SVG 아이콘 숏코드를 위한 데모 파일입니다."
draft: true
---
<!-- markdownlint-disable-file -->

## 소개

Mendix는 [The Mendix Icon Set](https://mendix.atlassian.net/l/cp/U89wu3oL)에서 승인된 표준 아이콘 세트를 제공합니다. 이 아이콘 세트는 숏코드를 통해 문서에서 사용할 수 있도록 SVG 형식으로 [docs/static/mx-icons](https://github.com/mendix/docs/tree/development/static/mx-icons) 라이브러리에 다운로드됩니다. 다음과 같이 사용합니다:

```
{{%/* icon name="three-dots-menu-horizontal" */%}}
```

파이프라인에 대한 자세한 정보를 보려면 **Details**({{% icon name="notes-paper-text" %}})를 클릭하세요.

## 구문

이 숏코드에는 두 가지 속성이 있습니다:

* `name`(필수) — *docs/static/mx-icons* 라이브러리의 파일 이름과 정확히 일치해야 합니다.
* `color`(선택 사항) – 기본적으로 아이콘은 주변 텍스트와 동일한 색상을 갖습니다. 다음과 같이 선택적 `color` 속성을 지정하여 이를 재정의할 수 있습니다: {{% icon name="alert-circle" color="red" %}}. 색상을 green, red, blue, gray, yellow 또는 purple로 설정할 수 있습니다.

{{% alert color="info" %}}아이콘 스타일 가이드에 대한 자세한 내용은 [Documentation Style Guide](https://mendix.atlassian.net/wiki/spaces/RNDHB/pages/2510061889/Images+and+Icons#Icons)를 참조하세요.{{% /alert %}}

## 추천 아이콘

{{% figure src="/attachments/community-tools/contribute-to-mendix-docs/common-icons.png" %}}

다음은 문서에 특히 유용할 수 있는 아이콘입니다. 아래 목록에서 아이콘 파일 이름, 아이콘과 관련된 일반적인 도구 설명 및 아이콘 자체를 확인할 수 있습니다. 일부 아이콘은 선택적 색상 속성과 함께 표시됩니다.

* add: **Add** ({{% icon name="add" %}})
* alarm-bell: **Notify** ({{% icon name="alarm-bell" %}}) 
* alert-circle: **Alert** ({{% icon name="alert-circle" %}})
* alert-triangle: **Warning** ({{% icon name="alert-triangle" color="yellow" %}})
* calendar: **Schedule** ({{% icon name="calendar" %}})
* cog: **Settings** ({{% icon name="cog" %}})
* checkmark-circle: **Save** ({{% icon name="checkmark-circle" %}})
* checkmark-circle-filled: **Success** ({{% icon name="checkmark-circle-filled" color="green" %}})
* chevron-down: **Move Down** ({{% icon name="chevron-down" %}})
* chevron-left: **Move Left** ({{% icon name="chevron-left" %}})
* chevron-right: **Move Right** ({{% icon name="chevron-right" %}})
* chevron-up: **Move Up** ({{% icon name="chevron-up" %}})
* controls-play-filled: **Run** ({{% icon name="controls-play-filled" %}})
* deploy: **Deploy** ({{% icon name="deploy" %}})
* download-button: **Download** ({{% icon name="download-button" %}})
* hyperlink: **Copy Link** ({{% icon name="hyperlink" %}})
* info-circle: **Information** ({{% icon name="info-circle" color="blue" %}})
* layout-rounded-1-filled: **Global Navigation** ({{% icon name="layout-rounded-1-filled" %}})
* lock: **Lock** ({{% icon name="lock" %}})
* notes-paper-edit: **Edit Details** ({{% icon name="notes-paper-edit" %}})
* notes-paper-text **Details** ({{% icon name="notes-paper-text" %}})
* paperclip: **Attach** ({{% icon name="paperclip" %}})
* pencil: **Edit** ({{% icon name="pencil" %}})
* pin: **Pin** ({{% icon name="pin" %}})
* remove: **Remove** ({{% icon name="remove" %}})
* remove-circle-filled: **Error** ({{% icon name="remove-circle-filled" color="red" %}})
* search: **Search** ({{% icon name="search" %}})
* star: **Favorite** ({{% icon name="star" %}})
* subtract-circle-filled: **Not Running** ({{% icon name="subtract-circle-filled"  color="gray" %}})
* three-dots-menu-horizontal: **More Options** ({{% icon name="three-dots-menu-horizontal" %}})
* three-dots-menu-vertical-filled: **DevTools** ({{% icon name="three-dots-menu-vertical-filled" %}})
* trash-can: **Delete** ({{% icon name="trash-can" %}})
* view: **View** ({{% icon name="view" %}})
* view-off: **View** ({{% icon name="view-off" %}})
