---
title: "XPath 연산자"
url: /refguide/xpath-operators/
---

## XPath 쿼리 제약 조건용 연산자

다음 연산자는 Mendix Studio Pro와 Java 코드 모두에서 XPath 쿼리 제약 조건에 사용할 수 있습니다:

| 연산자 | 설명 | 예제 | 반환 값 |
| --- | --- | --- | --- |
| `=` | 같음 | `price = 9.80` | price가 9.80이면 true, price가 9.90이면 false |
| `!=` | 같지 않음 | `price != 9.80` | price가 9.90이면 true, price가 9.80이면 false |
| `<` | 미만 | `price < 9.80` | price가 9.70이면 true, price가 9.80이면 false |
| `<=` | 이하 | `price <= 9.80` | price가 9.80이면 true, price가 9.90이면 false |
| `>` | 초과 | `price > 9.80` | price가 9.90이면 true, price가 9.80이면 false |
| `>=` | 이상 | `price >= 9.80` | price가 9.80이면 true, price가 9.70이면 false |
| `or` | 또는 | `price = 9.80 or price = 9.70` | price가 9.80이면 true, price가 9.60이면 false |
| `and` | 그리고 | `price = 9.80 and amount = 1` | price가 9.80이고 amount가 1이면 true, price가 9.70이고 amount가 1이면 false, price가 9.80이고 amount가 2이면 false, price가 9.70이고 amount가 2이면 false |

## 수학 연산자

Studio Pro에서는 [Retrieve object(s)](/refguide/retrieve-objects/) Microflow Activity 또는 접근 규칙 [제약 조건](/refguide/access-rules/#xpath-constraints)과 같이 모델에 정의된 XPath 제약 조건에서 수학 연산자를 사용할 수 있습니다.

수학 연산자는 클라이언트에서 오는 쿼리에서는 허용되지 않습니다. 예를 들어, [Widget](/appstore/widgets/)에서는 사용할 수 없습니다.

다음 수학 연산자가 지원됩니다:

| 연산자 | 설명 | 예제 | 반환 값 |
| --- | --- | --- | --- |
| `+` | 덧셈 | `6 + 4` | 10 |
| `-` | 뺄셈 | `6 - 4` | 2 |
| `*` | 곱셈 | `6 * 4` | 24 |
| `div` | 나눗셈 | `8 div 4` | 2 |

 Java 코드에서는 `XPathQuery` API에 대해 수학 연산자가 기본적으로 비활성화되어 있지만, `allowMathOperators` 메서드를 사용하여 활성화할 수 있습니다. 예를 들어:

```java
Core.createXPathQuery("//Module.Entity[attr1 + attr2 = 42]")
    .allowMathOperators(true)
    .execute(context);
```

## 연산자 동작

연산자의 동작은 Mendix 앱에 사용되는 데이터베이스 유형에 따라 다를 수 있습니다. Mendix 런타임은 구성된 XPath에 대한 SQL 쿼리를 생성합니다. 이 쿼리는 다른 데이터베이스 유형에 의해 다르게 해석될 수 있습니다. 예를 들어, HSQLDB는 = 연산자를 사용할 때 후행 공백을 무시하지만, PostgreSQL은 이를 고려합니다.
