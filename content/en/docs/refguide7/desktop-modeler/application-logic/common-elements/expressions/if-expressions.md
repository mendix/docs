---
title: "If expressions"
url: /refguide7/if-expressions/
---

If expressions can be used to define conditional actions in expressions. The correct syntax is as follows:

if `<statement>` then `<a value>` else `<other value>`

Using this statement as the expression of a change variable action for a string value:

```java {linenos=false}
if 7 > 6 then "correct" else "incorrect"
```

will set the value of the variable to "correct".
