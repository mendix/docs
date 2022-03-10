### Width Unit

The width unit specifies the unit of the specified column widths (see property 'Column Widths' below). There are two possible values for the unit:

| Value | Description |
| --- | --- |
| Percentage | Column widths are expressed as percentages of the available width. When resizing, columns will become wider/narrower while keeping the same relative widths. |
| Pixels | Column widths are expressed as pixels. Optionally, some columns can have width 'auto' and those columns evenly divide the rest of the space. When resizing, the pixel width columns will keep the same size; auto columns will become wider/narrower. |

_Default value:_ Percentage

### Column Widths

The column widths property describes the widths of each of the columns as a list of numbers separated by semi-colons. The unit (see above) determines what these numbers mean: percentages or pixels. In the case of pixels, 'auto' is also a valid value for the width of a column. Auto columns evenly divide space that remains after giving the pixel width columns their desired width.

Examples:

| Widths | Unit | Description |
| --- | --- | --- |
| 30;70 | Percentage | Two columns of which the first is 30% and the second is 70% |
| 20;200;auto | Pixels | Three columns of which the first is 20 pixels wide, the second is 200 pixels and the last one is 'auto' which means that it will take up the rest of the space. |
