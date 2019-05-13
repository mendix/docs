| Symbol | No. | Example | Description |
| --- | --- | --- | --- |
| G | 1 | AD | The era |
| y | 1, 3..n | 2010 | Year |
| y | 2 | 10 | Year |
| Y | 1, 3..n | 2009 | Week year, use in combination with `w` for [week number](https://en.wikipedia.org/wiki/Week#Week_numbering) formatting |
| Y | 2 | 09 | Week year, use in combination with `w` for [week number](https://en.wikipedia.org/wiki/Week#Week_numbering) formatting |
| M | 1..2 | 09 | Month |
| M | 3 | Sept |
| M | 4 | September |
| w | 1..2 | 27 | Week of year, use for [week number](https://en.wikipedia.org/wiki/Week#Week_numbering) formatting |
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
| E | 1..2 | 05 | Day of week |
| E | 3 | Thu | Day of week |
| E | 4 | Thursday | Day of week |
| z | 1..4 | Pacific Standard Time | Time zone |
| Z | 1..3 | -04:00 | Time zone offset |
| Z | 4 | GMT-04:00 | Time zone offset |

These are some examples:

| Format | Example Output |
| --- | --- |
| `EEEE d MMMM yyy G, h:mm a ss's` | Tuesday 29 March 2011 AD, 1:37 PM 48s |
| `h:mm a` | 1:37 PM |
| `yyy D KK:mm` | 2011 88 01:26 |
| `EEEE MMMM d yyy` | Tuesday March 29 2011 |
| `EEE, MMM dd, ''yy` | Wed, Jul 04, '01 |