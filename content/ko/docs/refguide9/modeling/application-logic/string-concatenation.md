---
title: "문자열 연결 구성"
linktitle: "문자열 연결 구성"
url: /refguide9/string-concatenation/
weight: 110
description: "문자열 연결 구성에 대한 세 가지 예제와 모범 사례를 설명합니다."
aliases:
    - /howto9/logic-business-rules/string-concatenation/
---

## 소개

때때로 앱에서 텍스트를 연결해야 할 수 있습니다. 일반적인 경우는 이름과 성을 기반으로 사람의 전체 이름을 조합하려는 경우입니다.

여러 문자열 Attribute를 함께 붙일 때마다 모든 경우에 텍스트가 좋아 보이도록 해야 합니다. 예를 들어, 중간 이름이 비어 있어서 "firstname + middlename + lastname"이 "John null Doe"로 출력되는 것을 원하지 않을 것입니다.

문자열을 연결할 때 주의해야 할 사항을 이해하려면 문자열이 가질 수 있는 세 가지 상태를 알아야 합니다:

* 채워짐 – Attribute에 텍스트가 작성되어 있으며, Microflow에서 값을 검사하면 다음과 같이 표시됩니다: `'John'`
* 비어 있음(empty) – Attribute에 값이 포함된 적이 없으며, Microflow에서 값을 검사하면 `empty`가 표시됩니다
* 빈 문자열(blank) – Attribute에 이전에 값이 포함되어 있었지만 사용자 또는 시스템에 의해 재설정되어 Microflow에서 `''`가 표시됩니다

모든 문자열 Attribute는 빈 필드로 시작합니다. 사용자 또는 시스템이 Attribute에 값을 입력하면 해당 값으로 채워집니다. 사용자가 UI에서 해당 값을 제거하면 필드는 빈 문자열이 되고 Attribute에는 `''` 값이 포함됩니다.

문자열에 텍스트가 포함되어 있는지 확인하려면 `$Account/Firstname != empty` Expression을 실행하는 것만으로는 충분하지 않으며, `$Account/Firstname != ''`도 모든 경우를 포함하지 않습니다. 필드가 정말 비어 있는지 확인하려면 모든 문자열을 두 값 모두에 대해 확인해야 합니다.

## 별도의 Decision으로 분리

비효율적인 예제는 텍스트를 확인하고 결과에 따라 결합된 메시지를 만드는 것입니다. 모든 조합을 구축하는 것은 많은 작업이며, 변경이 필요한 경우 많은 작업이 필요하고 오류가 발생하기 쉽습니다.

다음 Microflow를 참조하십시오:

{{< figure src="/attachments/refguide9/modeling/application-logic/string-concatenation/bco_contactperson_createfullname_inefficient.jpg" class="no-border" >}}

## 단일 Expression

이 예제는 Expression이 더 크고 복잡해지면 읽기 어려울 수 있는 단일 Expression을 포함합니다. 2~3개의 필드만 결합하는 경우 이것은 실행 가능한 솔루션입니다. 그러나 더 많은 필드를 연결하는 경우 다음 섹션에 설명된 모범 사례를 따르는 것이 좋습니다.

아래 예제를 볼 때 몇 가지 사항에 유의해야 합니다. 공백은 필드가 채워진 경우에만 필드 뒤에 추가됩니다. 사람에게 이름과 성만 있는 경우 두 단어 사이에 두 개의 공백이 생기는 것을 원하지 않을 것입니다.

또한 전체 Expression은 trim으로 둘러싸여 있습니다. 단일 필드만 채워진 경우 이 Expression의 결과에서 불필요한 공백이 모두 제거됩니다.

```java
trim(
( if $ContactPerson/Firstname != empty and $ContactPerson/Firstname != ''
then $ContactPerson/Firstname + ' ' else '' ) +
( if  $ContactPerson/Middlename != empty  and $ContactPerson/Middlename != ''
then  $ContactPerson/Middlename + ' ' else  '' ) +
( if  $ContactPerson/Lastname != empty  and $ContactPerson/Lastname != ''
then  $ContactPerson/Lastname + ' ' else  '' ) +
( if  $ContactPerson/Suffix !=  empty  
then  getCaption( $ContactPerson/Suffix )
else '')
)
```

다음 Microflow를 참조하십시오:

{{< figure src="/attachments/refguide9/modeling/application-logic/string-concatenation/bco_contactperson_createfullname_hardtoread.jpg" class="no-border" >}}

## Expression 분리를 위한 모범 사례

가장 유연한 솔루션은 문자열 연결을 별도의 Activity로 분리하는 것입니다. 이렇게 하면 연결 함수에서 텍스트를 쉽게 추가하거나 제거할 수 있습니다. 추가적인 복잡성을 만들 필요도 없습니다. 문자열 값을 결합하는 하위 흐름을 만들고 Microflow에서 사용하면 됩니다.

이 예제에서는 Expression의 안정성을 위해 한 단계 더 나아갔습니다. Attribute에 추가 trim을 추가하여 사용자가 추가 공백을 넣는 것을 방지합니다. 아래 Microflow를 사용하면 텍스트에 공백이나 null 값이 포함되지 않음을 확실히 알 수 있습니다.

```java
trim(  $ContactPerson/Fullname + ' ' + trim(  $ContactPerson/Firstname ) )
```

다음 Microflow를 참조하십시오:

{{< figure src="/attachments/refguide9/modeling/application-logic/string-concatenation/bco_contactperson_createfullname.jpg" class="no-border" >}}
