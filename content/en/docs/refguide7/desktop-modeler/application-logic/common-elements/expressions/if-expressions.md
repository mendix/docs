---
title: "If expressions"
url: /refguide7/if-expressions/
---

If expressions can be used to define conditional actions in expressions. The correct syntax is as follows:

if _`<statement>`_ then _`<a value>`_ else _`<other value>`_

Using this statement as the expression of a change variable action for a string value:

```java
if 7 > 6 then "correct" else "incorrect"
```

will set the value of the variable to "correct".
