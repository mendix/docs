---
title: "Attributes Type Migration"
parent: "data-storage"
---

## Effects of Data Type Changes on Existing Attributes

### Data Type Change Behavior

If the type of an existing attribute is changed in the Modeler, mostly the existing column will be dropped and a new column will be created. For some attribute type changes Mendix tries to convert existing data in the database to the new type.

If data should NOT be converted to the new type, you must remove the attribute in the Modeler and create a new column (with the same name), instead of only changing the data type. Even if you change the type and rename the column, Mendix remembers the old column name and will try to convert the column values if possible.

### Conversion Table

In the table below, for each data type change you can see whether Mendix will convert the values.

|  | to AutoNumber | to Binary | to Boolean | to DateTime | to Decimal | to Enum | to Float/Currency | to HashString | to Integer | to Long | to String (limited) | to String (unlimited)
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| **from AutoNumber** | | **X** | **X** | **X** | **&#x2713;** | **X** | **&#x2713;** | **X** | **X** | **&#x2713;** | **–** Conversion only possible if length >= 20. | **&#x2713;**
| **from Binary** | **X** | | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X**
| **from Boolean** | **X** | **X** | | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **–** Conversion only possible if length >= 5. Converted to a string by the database, so the value for true and false differs per database. | **–** Converted to a string by the database, so the value differs per database.
| **from DateTime** | **X** | **X** | **X** | | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X**
| **from Decimal** | **&#x2713;** | **X** | **X** | **X** | | **X** | **X** | **X** | **X** | **X** | **–** Conversion only possible if length >= 20. | **&#x2713;**
| **from Enum** | **X** | **X** | **X** | **X** | **X** | | **X** | **X** | **X** | **X** | **–**  The name of the enumeration value will be used. The value will be shortened to the right length if it does not fit in the new type. | **–** The name of the enumeration value will be used.
| **from Float/Currency** | **&#x2713;** | **X** | **X** | **X** | **–** Conversion only possible for actual values which have at most 20 digits before the decimal point. | **X** | | **X** | **X** | **&#x2713;** | **–** Conversion only possible if length >= 24. | **&#x2713;**
| **from HashString** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | | **X** | **X** | **–** The value will be shortened to the right length if it does not fit in the new type. | **&#x2713;**
| **from Integer** | **&#x2713;** | **X** | **X** | **X** | **&#x2713;** | **X** | **&#x2713;** | **X** | | **&#x2713;** | **–** Conversion only possible if length >= 11 . | **&#x2713;**
| **from Long** | **&#x2713;** | **X** | **X** | **X** | **&#x2713;** | **X** | **&#x2713;** | **X** | **X** | | **–** Conversion only possible if length >= 20. | **&#x2713;**
| **from String (limited)** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | | **&#x2713;**
| **from String (unlimited)** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **–** The value will be shortened to the right length if it does not fit in the new type. |

This is the key to the table above:

Symbol | Description
--- | ---
**&#x2713;** | Conversion always possible.
**–** | Conversion is not always possible, or data will be changed during conversion. If conversion is not possible, the behavior is the same as the "**X**" ones.
**X** | Conversion not possible. The original column will be removed and a new column will be created with default values for the existing rows.

### Manual Conversion

Even if Mendix cannot convert the values of a specific column to another type, you can still manage that manually. Change the name of the attribute, for example append the text 'Deleted' to its name. Create a new attribute with the same name and the new data type. Look up each occurrence of the old (renamed) attribute in the whole model and change this to the new attribute. Be sure that there is no microflow or form anymore which refers to the old attribute.

Create a microflow in which you retrieve all instances of the entity, loop through the instances and for each instance, read the value of the old attribute, convert the value, store it in the new attribute and commit the instance. Place a button on an administrator form which calls this microflow.

When you deploy, you have to run this microflow one time, after which you can remove both the microflow and the button pointing to it, and then you can also remove the old attribute.

## Effects of Association Type Changes on Existing Associations

When you have a one-to-many association and change it into a one-to-one association, be aware that duplicate associations are not cleaned up in the database. For example, a one-to-many association from entity A to entity B allows multiple references: a1 to b1, a1 to b2, etc. One-to-one associations only allow a single reference per object: a1 to b1. Duplicate association entries like a1 to b2 are not cleaned up when you redeploy your app.
