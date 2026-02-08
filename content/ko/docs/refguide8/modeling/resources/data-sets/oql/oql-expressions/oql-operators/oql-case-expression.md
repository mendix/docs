---
title: "OQL Case 표현식"
url: /refguide8/oql-case-expression/
---

CASE 표현식은 다른 프로그래밍 언어의 if/else 문과 유사한 조건부 표현식입니다. 각 조건은 Boolean 결과를 반환하는 표현식입니다. 조건의 결과가 true이면 CASE 표현식의 값은 조건 뒤에 오는 결과이며, CASE 표현식의 나머지는 처리되지 않습니다. 조건의 결과가 true가 아니면 이후의 WHEN 절이 동일한 방식으로 검사됩니다. WHEN 조건 중 true를 반환하는 것이 없으면 CASE 표현식의 값은 ELSE 절의 결과입니다. ELSE 절이 생략되고 true인 조건이 없으면 결과는 null입니다.

CASE 표현식은 두 가지 방식으로 사용할 수 있습니다:

*단순형*

```sql
CASE input_expression
WHEN when_expression THEN result_expression [ ...n ]
ELSE else_result_expression
END
```

*확장형*

```sql
CASE
WHEN boolean_expression THEN result_expression [ ...n ] 
ELSE else_result_expression
END
```

**input_expression**
when_expression과 비교될 표현식입니다. input_expression이 when_expression과 일치하면 전체 CASE 표현식의 결과는 THEN 뒤에 제공된 result_expression이 됩니다.

**when_expression**
input_expression과 비교될 표현식입니다. input_expression이 이 when_expression과 일치하면 전체 CASE 표현식의 결과는 THEN 뒤에 제공된 result_expression이 됩니다.

**boolean_expression**
결과가 Boolean 값이어야 하는 표현식입니다. 이 표현식이 true를 반환하면 전체 CASE 표현식의 결과는 THEN 뒤에 제공된 result_expression이 됩니다.

**result_expression**
전체 CASE 표현식의 가능한 결과입니다.

**else_result_expression**
result_expression 중 어느 것도 가능하지 않으면 전체 CASE 표현식의 결과는 이 else_result_expression이 됩니다.
