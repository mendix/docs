---
title: "Oracle"
category: "System Requirements"
---
There is a known issue with backups of your Oracle databases. If you restore a backup, then the database is not exactly the same as the original. This is caused by the way Mendix creates primary keys.
Many indexes are lost in the restored database and many other indices are strongly coupled to primary keys without Mendix expecting that. This can result in overall performance degradation and in errors if you synchronize your database with new versions of your model.

Mendix will resolve this issue in a future version. For now, you have to repair the database each time you restore a backup, with the following SQL script.

{{% alert type="warning" %}}

This script only works on Oracle Database 11_g_ Release 2 or higher!

{{% /alert %}}

```sql
BEGIN
  FOR cur_rec IN (SELECT c.constraint_name, c.table_name, LISTAGG('"' || cc.column_name || '"', ',') WITHIN GROUP (ORDER BY cc.position) AS column_names
                  FROM user_constraints c
                  INNER JOIN user_cons_columns cc ON cc.constraint_name = c.constraint_name
                  WHERE c.constraint_type = 'P'
                  AND c.index_name LIKE 'IDX%'
                  GROUP BY c.constraint_name, c.table_name)
  LOOP
    BEGIN
      EXECUTE IMMEDIATE 'ALTER TABLE "' || cur_rec.table_name || '" MODIFY PRIMARY KEY USING INDEX ( CREATE UNIQUE INDEX "' || cur_rec.constraint_name ||'" ON "' || cur_rec.table_name || '" (' || cur_rec.column_names || ') )';
    EXCEPTION
      WHEN OTHERS
      THEN
        DBMS_OUTPUT.put_line ( 'Failed handling primary key for table ' || cur_rec.table_name );
    END;
  END LOOP;
END;

```
