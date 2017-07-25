---
title: "OQL DATEPART"
parent: "oql-functions"
---


The DATEPART function retrieves a specified element from a date/time values. This element is of type integer.

The syntax is as follows:

```
DATEPART ( datepart , date_expression )

```

**datepart**
Specifies the part of the date/time value to retrieve. This can be one of the following:

<table><thead><tr><th class="confluenceTh">datepart</th><th class="confluenceTh">definition</th><th class="confluenceTh">example when used for Friday July 1, 2005, 16:34:20</th></tr></thead><tbody><tr><td class="confluenceTd"><code>YEAR</code></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">2005</td></tr><tr><td class="confluenceTd"><code>QUARTER</code></td><td class="confluenceTd">1, 2, 3 or 4</td><td class="confluenceTd">3</td></tr><tr><td class="confluenceTd"><code>MONTH</code></td><td class="confluenceTd">1 to 12</td><td class="confluenceTd">7</td></tr><tr><td class="confluenceTd"><code>DAYOFYEAR</code></td><td class="confluenceTd">1 to 366</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><code>DAY</code></td><td class="confluenceTd">1 to 31</td><td class="confluenceTd">5</td></tr><tr><td class="confluenceTd"><code>WEEK</code></td><td class="confluenceTd">1 to 53 (depends on the database implementation)</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><code>WEEKDAY</code></td><td class="confluenceTd">1 to 7 (1 = Sunday, 7 = Saturday)</td><td class="confluenceTd">6</td></tr><tr><td class="confluenceTd"><code>HOUR</code></td><td class="confluenceTd">0 to 23</td><td class="confluenceTd">16</td></tr><tr><td class="confluenceTd"><code>MINUTE</code></td><td class="confluenceTd">0 to 59</td><td class="confluenceTd">34</td></tr><tr><td class="confluenceTd"><code>SECOND</code></td><td class="confluenceTd">0 to 59</td><td class="confluenceTd">20</td></tr></tbody></table>

**date_expression**
Specifies the date to retrieve an element from. This should be formatted in an expression which resolves to a date/time value.
