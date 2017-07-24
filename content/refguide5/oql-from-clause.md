---
title: "OQL From Clause"
parent: "oql"
---


The FROM clause specifies the entities or other source from which the data must be retrieved. This clause starts with the FROM keyword, following by an entity name. To select data from other entities as well, add these entities via the JOIN keywords. This syntax is a little more strict than the official SQL FROM clause syntax.

The syntax is as following:

```
FROM
    {
        entity_name | ( sub_oql_query )
    }
    [ [ AS ] from_alias ]

    {
        { INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
        entity_name [ [ AS ] from_alias ]
        ON <constraint>
    } [ ,...n ]

```

**entity_name**
Specifies the entity from which data must be retrieved.

**( sub_oql_query )**
Specifies another OQL query from which data must be retrieved. This will be the source for the current query. The subquery must be placed within parentheses.

**INNER JOIN**
See [this page](oql-inner-join).

**LEFT OUTER JOIN**
See [this page](oql-left-outer-join).

**RIGHT OUTER JOIN**
See [this page](oql-right-outer-join).

**FULL OUTER JOIN**
See [this page](oql-full-outer-join).

**ON <constraint>**
Constraints the specified entity in the JOIN part of the FROM clause. The constraint syntax is similar as those of the WHERE clause. Only the entities and from-aliases from the current JOIN element and each previous one can be used in the constraint.
