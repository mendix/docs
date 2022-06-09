All examples are for **30th December 2014, at 00:27:16.789**

| Symbol | Example | Description |
| ---    | --- | --- |
| `G`     | AD | The era |
| `y`, `yyy`, `yyyy`, *etc.* | 2014 | Year |
| `yy`     | 14 | Year |
| `Y`, `YYY`, `YYYY`, *etc.* | 2015 | Week year, use in combination with `w` for [week number](https://en.wikipedia.org/wiki/Week#Week_numbering) formatting |
| `YY`     | 15 | Week year, use in combination with `w` for [week number](https://en.wikipedia.org/wiki/Week#Week_numbering) formatting |
| `M`, `MM`<sup><small>*</small></sup>  | 12 | Month number |
| `MMM`    | Dec | Month abbreviation |
| `MMMM`   | December | Month name |
| `w`, `ww`<sup><small>*</small></sup>  | 1 | Week of year, use for [week number](https://en.wikipedia.org/wiki/Week#Week_numbering) formatting |
| `d`, `dd`<sup><small>*</small></sup>  | 30 | Day of month |
| `D`, `DD`, `DDD` | 364 | Day of year |
| `a`      | AM | AM or PM |
| `h`, `hh`<sup><small>*</small></sup>  | 12 | Hour (1-12) |
| `H`, `HH`<sup><small>*</small></sup>  | 00 | Hour (0-23) |
| `k`, `kk`<sup><small>*</small></sup>  | 24 | Hour (1-24) |
| `K`, `KK`<sup><small>*</small></sup>  | 00 | Hour (0-11) |
| `m`, `mm`<sup><small>*</small></sup>  | 27 | Minute  |
| `s`, `ss`<sup><small>*</small></sup>  | 16 | Second |
| `S`, `SS`, `SSS` | 789 | Milliseconds |
| `E`, `EE`  | 05 | Day of week number |
| `EEE`    | Tue | Day of week abbreviation|
| `EEEE`   | Tuesday | Day of week name |
| `X` | 08:00 | Time zone parsed |
| `Z`, `ZZ`, `ZZZ` | -04:00 | Time zone offset |
| `ZZZZ`   | GMT-04:00 | Time zone offset and standard |

<sup><small>*</small></sup><em>Two characters pads with zero</em>

These are some examples:

| Format | Example Output |
| --- | --- |
| `EEEE d MMMM yyy G, h:mm a ss's'` | Tuesday 30 December 2014 AD, 12:27 AM 16s |
| `h:mm a` | 12:27 AM |
| `yyy D KK:mm` | 2014 364 00:27 |
| `EEEE MMMM d yyy` | Tuesday December 30 2014 |
| `EEE, MMM dd, ''yy` | Tue, Dec 30, '14 |
| `EEEE, 'week' ww YYYY`| Tuesday, week 01 2015 |