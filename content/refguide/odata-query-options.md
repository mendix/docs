---
title: "OData Query Options"
parent: "published-odata-services"
---

This is a list of query options for OData. Note that when something is not in this list, we currently don't support it (yet).

# 1 Retrieving objects

## 1.2 Retrieving a all objects

This can be done by opening the uri in a browser. For example: _/odata/myservice/myresource_

## 1.1 Retrieving a single object

This can be done by passing the identifier in the uri. For example: _/odata/myservice/myresource(8444249301330581)_

# 2 Counting the number of objects

## 2.1 Retrieving a count of objects

This can be done by passing the $count query option. In this case the result is just the number of objects. For example: _/odata/myservice/myresource/$count_

## 2.2 Inline count

By setting the $inlinecount query option to 'allpages', an inline count will be added to the result. For example: _?$inlinecount=allpages_

# 3 Filtering

At the moment we only support basic filtering options.

This is done by passing parameters to the request, for example _/Employees?$filter=Name eq 'John'_

We support the following operators:

| Operator | Meaning | Example |
| --- | --- | --- |
| eq | equals | _/Employees?$filter=Name eq 'John'_ |
| ne | not equals | _/Employees?$filter=Name ne 'John'_ |
| gt | greater than | _/Employees?$filter=Age gt 15_ |
| lt | less than | _/Employees?$filter=Age lt 15_ |
| ge | greater than or equals to | _/Employees?$filter=Age ge 15_ |
| le | less than or equals to | _/Employees?$filter=Age le 15_ |

How to pass values for different attribute types

| Type | How to pass |
| --- | --- |
| String and Enumeration | Surrounded with apostrophes, e.g. 'John' |
| Datetime | Surrounded with datetime and apostrophes, e.g. datetime'2015-01-01' or datetime'&lt;epoch value here&gt;' |
| Other | Plain value, e.g. 15 |

## 3.1 Arithmetic operators

| Operator | Example                              | Returns |
| ---      | ---                                  | ---     |
| add      | _/Products?$filter=Prices add 2 eq 10_ | All products with price 9 |
| sub      | _/Products?$filter=Prices sub 2 eq 10_ | All products with price 12 |
| mul      | _/Products?$filter=Prices mul 2 eq 10_ | All products with price 5 |
| div      | _/Products?$filter=Prices div 2 eq 10_ | All products with price 20 |
| mod      | _/Products?$filter=Prices mod 5 eq 0_  | All products with price divisable by 5 |

## 3.2 Functions

| Function     | Example                                 | Returns |
| ---          | ---                                     | ---     |
| substringof  | _/Employees?substringof('f', Name)_     | All employees with names that contain an 'f' |
| endswith     | _/Employees?endswith(Name, 'f')_        | All employees with names that end with 'f' |
| startswith   | _/Employees?startswith(Name, 'f')_      | All employees with names that start with 'f' |
| length       | _/Employees?length(Name) eq 5_          | All employees with names that have length 5 |
| year         | _/Employees?year(DateOfBirth) eq 1990_  | All employees born in the year 1990 |
| month        | _/Employees?month(DateOfBirth) eq 5_    | All employees born in May |
| day          | _/Employees?day(DateOfBirth) eq 31_     | All employees born on the 31st day of the month |
| hour         | _/Employees?hour(Registration) eq 13_   | All employees registered between 13:00 (1pm) and 13:59 (1:59pm) |
| minute       | _/Employees?minute(Registration) eq 55_ | All employees registered on the 55th minute of any hour |
| second       | _/Employees?second(Registration) eq 55_ | All employees registered on the 55th second of any minute of any hour |

## 3.3 Combining filters

Filters can be combined with 'and' and 'or', 'not' and (), so for example _?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)_

| Combination | Example |
| --- | --- |
| and | _/Employees?$filter=Name eq 'John' and Age gt 65_ |
| or | _/Employees?$filter=Age gt 65 or Age lt 11_ |
| not | _/Employees?$filter=not(Name eq 'John')_ |
| ( ) | _/Employees?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)_ |

# 4 Sorting

You can sort the result using the $orderby query option. For example: _?$orderby=Name_

The default direction is ascending, you can pass this to make it explicit. For example: _?$orderby=Name_ asc

You can also order the result in a descending direction. For example: _?$orderby=Name_ desc

It's possible to sort on multiple attributes, these have to be comma separated. For example: _?$orderby=Name, Age desc_

# 5 Selecting fields

You can select which attributes and associations to return by specifying $select query option. For example: _?$select=Name,Age_

# 6 Paging

## 6.1 Top (limit)

Limiting the amount of returned objects can be done using the $top query option, where the value is a positive integer. For example: _?$top=100_

## 6.2 Skip (offset)

Skipping a number of objects in the result can be done using the $skip query option, where the value is a positive integer. For example: _?$skip=100_

# 7 Null literals

Operators can compare against 'null' literals. For example: _?$filter=Name eq null_

In this example, Name is a string attribute which can have an empty value in the database. Note that 'null' means 'no value', as opposed to "" (which is an empty string).

When you filter against associations, null literals can be quite useful. For example: _?$filter=Association_A_B ne null_

In this example, you query for objects A that actually have an association set to B objects.
