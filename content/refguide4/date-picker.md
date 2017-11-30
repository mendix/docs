---
title: "Date Picker"
parent: "common-widgets"
---
A date picker can be used to display and/or edit a date value. It takes into account the language setting to display a localized calendar.

![](attachments/819203/917552.png)

This date picker allows the end-user to set the birth date of the customer.

A date picker must be placed in a table cell within a data view or template grid and connected to an attribute of type Date. The connected attribute is shown in blue and between brackets inside the date picker.

## General Properties

### Date format (only for attributes of type DateTime, before version 4.1.0 only in web forms)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application.

Possible values: 'Date', 'Time', 'Date and time' and 'Custom'.

_Default value:_ Date

### Custom date format (only in web forms, only for attributes of type DateTime)

If you choose 'Custom' as the date format (see above) the custom date format determines the way date and/or time are formatted. The custom date format is a string that follows the rules in this table,

| Symbol | No. | Example | Description |
| --- | --- | --- | --- |
| G | 1 | AD | Era |
| y | 1..n | 2010 | Year |
| M | 1..2 | 09 | Month |
| M | 3 | Sept |
| M | 4 | September |
| w | 1..2 | 27 | Week of year |
| d | 1..2 | 12 | Day of month |
| D | 1..3 | 93 | Day of year |
| a | 1 | AM | AM or PM |
| h | 1..2 | 11 | Hour (1-12) |
| H | 1..2 | 13 | Hour (0-23) |
| k | 1..2 | 10 | Hour (1-24) |
| K | 1..2 | 0 | Hour (0-11) |
| m | 1..2 | 59 | Minute, use one or two for zero padding |
| s | 1..2 | 12 | Second, use one or two for zero padding |
| S | 1..3 | 153 | Milliseconds |
| E | 1..3 | Thu | Day of week |
| E | 4 | Thursday | Day of week |
| z | 1..3 | PST | Time zone |
| z | 4 | Pacific Standard Time | Time zone |
| Z | 4 | GMT-04:0 0 | Time zone offset |

| Format | Example output |
| --- | --- |
| `EEEE d MMMM yyy G, h:mm a ss's` | Tuesday 29 March 2011 AD, 1:37 PM 48s |
| `h:mm a` | 1:37 PM |
| `yyy D KK:mm` | 2011 88 01:26 |
| `EEEE MMMM d yyy` | Tuesday March 29 2011 |
| `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |

### Placeholder text (only in mobile forms)

The placeholder text is shown when no date has been selected yet. It can be used to give a hint to the user what kind of date should be entered. Note: placeholder texts do not work when a native date picker is available (iOS, Android >= 4.0).

### Required (only in web forms)

See [Widget Properties](widget-properties).

### Required message (only in web forms)

See [Widget Properties](widget-properties).

## Common Properties

### Tab index (only in web forms)

See [Widget Properties](widget-properties).

### Name

See [Widget Properties](widget-properties).

### Class

See [Widget Properties](widget-properties).

### Style

See [Widget Properties](widget-properties).

## Data Source Properties

### Attribute (path)

See [Widget Properties](widget-properties).

## Editability Properties

### Editable

See [Widget Properties](widget-properties).

### Condition

See [Widget Properties](widget-properties).

## Events

### On change

See [Widget Events](widget-events).

### On change settings

See [Widget Events](widget-events).

### On enter (only in web forms)

See [Widget Events](widget-events).

### On enter settings (only in web forms)

See [Widget Events](widget-events).

### On leave (only in web forms)

See [Widget Events](widget-events).

### On leave settings (only in web forms)

See [Widget Events](widget-events).

## See also

*   [Data View](data-view)
*   [Attributes](attributes)
