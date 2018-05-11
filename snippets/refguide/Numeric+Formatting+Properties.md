### Decimal mode

<div class="alert alert-info">

Introduced in Mendix 7.15. In prior versions, Decimal mode could not be set and was always Fixed.

</div>

<div class="alert alert-info">

This mode only applies to the Decimal, Float (deprecated), and Currency (deprecated) attribute types.

</div>

If set to _Fixed_, the decimal part always will be displayed with the number of places specified in the **Decimal precision** property. The value will be rounded to the nearest decimal if the length of the decimal part in the attribute value exceeds the number of decimal places.

If set to _Auto_, the whole decimal part of the attribute value will be displayed. No decimal part will be be displayed if the attribute value is an integer.

_Default value:_ Fixed

#### Examples

| Value    | Fixed (2)  | Fixed (4)    | Auto     |
| -------- | ---------- | ------------ | -------- |
| 19.0     | 19.00      | 19.0000      | 19       |
| 19.99    | 19.99      | 19.9900      | 19.99    |
| 19.9944  | 19.99 (\*) | 19.9944      | 19.9944  |
| 19.9999  | 20.00 (\*) | 19.9999      | 19.9999  |
| 19.99999 | 20.00 (\*) | 20.0000 (\*) | 19.99999 |

**\*** The value is rounded to the nearest decimal with the defined number of decimal places.

### Decimal Precision

<div class="alert alert-info">

This only applies to the Decimal, Float (deprecated), and Currency (deprecated) attribute types. From Mendix 7.15, this is available only when the Decimal mode is set to Fixed.

</div>

The precision of a value describes the number of digits that are used to express that value. This property indicates the number of decimal places (the number of digits following the point).

_Default value:_ 2

### Group Digits

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property indicates whether the user will see these groups.

_Default value:_ False
