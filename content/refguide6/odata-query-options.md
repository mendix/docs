---
title: "OData Query Options"
parent: "published-odata-services"
---
This is a list of query options for OData. Note that when something is not in this list, we currently don't support it (yet).

### Retrieving a single object

This can be done by passing the identifier in the uri. For example: _/odata/myservice/myresource(8444249301330581)_

### Retrieving a count of objects

This can be done by passing the $count query option. In this case the result is just the number of objects. For example: _/odata/myservice/myresource/$count_

### Inline count

By setting the $inlinecount query option to 'allpages', an inline count will be added to the result. For example: _?$inlinecount=allpages_

### Filtering

At the moment we only support basic filtering options.

This is done by passing parameters to the request, for example _?$filter=Name eq 'John'_

We support the following operators:

| Operator | Meaning | Example |
| --- | --- | --- |
| eq | equals | ?$filter=Name eq 'John' |
| ne | not equals | ?$filter=Name ne 'John' |
| gt | greater than | ?$filter=Age gt 15 |
| lt | less than | ?$filter=Age lt 15 |
| ge | greater than or equals to | ?$filter=Age ge 15 |
| le | less than or equals to | ?$filter=Age le 15 |

How to pass values for different attribute types

| Type | How to pass |
| --- | --- |
| String and Enumeration | Surrounded with apostrophes, e.g. 'John' |
| Datetime | Surrounded with datetime and apostrophes, e.g. datetime'2015-01-01' or datetime'<epoch value here>' |
| Other | Plain value, e.g. 15 |

### Combining filters

Filter can be combined with 'and' and 'or', 'not' and (), so for example _?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)_

| Combination | Example |
| --- | --- |
| and | _?$filter=Name eq 'John' and Age gt 65
_ |
| or | _?$filter=Age gt 65 or Age lt 11
_ |
| not | _?$filter=_not(Name eq 'John') |
| () | _?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)_ |

### Sorting

You can sort the result using the $orderby query option. For example: _?$orderby=Name_

The default direction is ascending, you can pass this to make it explicit. For example: _?$orderby=Name_ asc

You can also order the result in a descending direction. For example: _?$orderby=Name_ desc

It's possible to sort on multiple attributes, these have to be comma separated. For example: _?$orderby=Name, Age desc_

### Select fields

You can select which attribute and association to return by specifying $select query option. For example: _?$select=Name, Age_

### Top (limit)

Limiting the amount of returned objects can be done using the $top query option, where the value is a positive integer. For example: _?$top=100_

### Skip (offset)

Skipping a number of objects in the result can be done using the $skip query option, where the value is a positive integer. For example: _?$skip=100_

### Null literals

Operators can compare against 'null' literals. For example: _?$filter=Name eq null _

In this example, Name is a string attribute which can have a 'null' value in the database. Note that 'null' means 'no value', as opposed to "" (which is an empty string).

When you filter against associations, null literals can be quite useful. For example: _?$filter=Association_A_B ne null _

In this example, you query for objects A that actually have an association set to B objects.
