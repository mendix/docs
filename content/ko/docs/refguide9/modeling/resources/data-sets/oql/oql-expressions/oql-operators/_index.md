---
title: "OQL Operators"
url: /refguide9/oql-operators/
---


OQL 표현식에서 다음 연산자를 사용할 수 있습니다:

| 연산자 | 설명 | 예시 |
| --- | --- | --- |
| `+` | 덧셈 | `6 + 4`는 10을 반환합니다. |
| `-` | 뺄셈 | `6 - 4`는 2를 반환합니다. |
| `*` | 곱셈 | `6 * 4`는 24를 반환합니다. |
| `:` | 나눗셈 | `8 : 4`는 2를 반환합니다. |
| `%` | 나머지 | `8 % 3`은 2를 반환합니다. |
| `=` | 같음 | `Price = 9.80`은 가격이 9.80이면 true, 9.90이면 false를 반환합니다. |
| `!=` | 같지 않음 | `Price != 9.80`은 가격이 9.90이면 true, 9.80이면 false를 반환합니다. |
| `<` | 보다 작음 | `Price < 9.80`은 가격이 9.70이면 true, 9.80이면 false를 반환합니다. |
| `<=` | 보다 작거나 같음 | `Price <= 9.80`은 가격이 9.80이면 true, 9.90이면 false를 반환합니다. |
| `>` | 보다 큼 | `Price > 9.80`은 가격이 9.90이면 true, 9.80이면 false를 반환합니다. |
| `>=` | 보다 크거나 같음 | `Price >= 9.80`은 가격이 9.80이면 true, 9.70이면 false를 반환합니다. |
| `LIKE` | 연산자 뒤의 패턴과 일치합니다. 와일드카드 문자 '%'를 사용하여 0개 이상의 문자로 구성된 문자열을 정의할 수 있습니다. `%`, `_`, `\`와 같은 특수 문자를 검색하려면 `\` 이스케이프 문자로 이스케이프해야 합니다. | `City LIKE '%dun'`은 'dun'과 'Losdun'처럼 'dun'으로 끝나는 이름의 모든 도시를 반환합니다.<br> `Symbol LIKE '%\%'`는 `%` 특수 문자로 끝나는 모든 기호를 반환합니다.|
| `IN` | 하위 쿼리 또는 표현식 값 목록의 모든 값과 일치합니다. | `City IN (SELECT Name FROM City WHERE Country = 'Gelre')` `City IN ('Losdun', 'Die Haghe', 'Haagambacht')` |
| `EXISTS` | 하위 쿼리를 실행할 때 행이 존재하는지 테스트합니다. | `EXISTS (SELECT ID FROM City WHERE City = 'Losdun')` 객체가 존재하면 true를 반환합니다 |
| `NOT` | 이 키워드 뒤에 오는 표현식의 값을 반전합니다. | `NOT City = 'Rotterdam'`은 Rotterdam에 있지 않은 모든 객체를 반환합니다. |
| `CASE` | 하나 이상의 조건을 평가하고 가능한 표현식을 반환합니다. | [OQL Case 표현식](/refguide9/oql-case-expression/)을 참조하십시오. |
| `OR` | 이 연산자 주위의 하나 또는 양쪽 표현식이 true를 반환하면 true를 반환합니다.  | `price = 9.80 OR price = 9.70`은 가격이 9.80이면 true, 9.60이면 false를 반환합니다. |
| `AND` | 양쪽의 표현식이 true를 반환하면 true를 반환합니다.  | `price = 9.80 AND amount = 1`은 가격이 9.80이고 수량이 1이면 true, 가격이 9.70이고 수량이 1이면 false, 가격이 9.80이고 수량이 2이면 false를 반환합니다. |
