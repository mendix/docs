---
title: "OQL Case 표현식"
url: /refguide9/oql-case-expression/
---

## 설명

`CASE` 표현식은 다른 프로그래밍 언어의 if/else 문과 유사한 조건부 표현식입니다. 각 조건은 Boolean 결과를 반환하는 표현식입니다. 조건의 결과가 true이면 `CASE` 표현식의 값은 조건 뒤에 오는 결과이며 나머지 `CASE` 표현식은 처리되지 않습니다. 조건의 결과가 true가 아니면 동일한 방식으로 후속 `WHEN` 절이 검사됩니다. `WHEN` 조건 중 어느 것도 true를 생성하지 않으면 `CASE` 표현식의 값은 `ELSE` 절의 결과입니다. `ELSE` 절이 생략되고 조건이 true가 아니면 결과는 null입니다.

## 사용법

`CASE` 표현식은 두 가지 방법으로 사용할 수 있습니다 – 단순:

```sql
	CASE input_expression
	WHEN when_expression THEN result_expression [ ...n ]
	ELSE else_result_expression
	END
```

또는 확장:

```sql
	CASE
	WHEN boolean_expression THEN result_expression [ ...n ] 
	ELSE else_result_expression
	END
```

## 구문

### input_expression

`input_expression`은 `when_expression`과 비교됩니다. `input_expression`이 `when_expression`과 일치하면 전체 `CASE` 표현식의 결과는 `THEN` 뒤에 주어진 `result_expression`이 됩니다.

### when_expression

`when_expression`은 `input_expression`과 비교됩니다. `input_expression`이 이 `when_expression`과 일치하면 전체 `CASE` 표현식의 결과는 `THEN` 뒤에 주어진 `result_expression`이 됩니다.

### boolean_expression

`boolean_expression`은 Boolean 값을 반환해야 합니다. 이 표현식이 true를 반환하면 전체 `CASE` 표현식의 결과는 `THEN` 뒤에 주어진 `result_expression`이 됩니다.

### result_expression

`result_expression`은 전체 `CASE` 표현식의 가능한 결과입니다.

### else_result_expression

`else_result_expression`은 `result_expression`이 불가능할 때 전체 `CASE` 표현식의 결과입니다.
