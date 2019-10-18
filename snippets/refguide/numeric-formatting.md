### Decimal Mode{#decimal-mode}

<div class="alert alert-info">

This mode only applies to attributes of type Decimal.

</div>

If set to _Fixed_, the decimal part always will be displayed with the number of places specified in the [Decimal precision](#decimal-precision) property. The value will be rounded using the method defined in the [rounding](project-settings#rounding) section of *Project Settings*.

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

\* The value is rounded to the nearest decimal with the defined number of decimal places.

### Decimal Precision{#decimal-precision}

<div class="alert alert-info">

This only applies to attributes of type Decimal and is available only when the <a href="#decimal-mode">Decimal mode</a> is set to <em>Fixed</em>.

</div>

The precision of a value describes the number of decimal places that are used to express that value. This property indicates the number of decimal places (the number of digits following the point).

The way that the number is rounded when displayed is defined in the [rounding](project-settings#rounding) section of *Project Settings*.

_Default value:_ 2

### Group Digits

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter when they are displayed. If the widget is editable and is the current focus of the page, then the delimiters will *not* be displayed.

Set **Group digits** to **Yes** to display these groups.

For example, with **Group digits** set to `true`, the number `1100100.01` will be displayed as `1,100,100.01`.

_Default value:_ No
