### On click

This property specifies what action is executed when the element is clicked. There are three options:

| Action | Effect |
| --- | --- |
| Call a microflow | The specified microflow is executed. |
| Open a page | The specified page is opened. |
| Do nothing | Nothing happens. This is useful for setting up a page without defining the underlying functionality yet. |

_Default value:_ Do nothing

### Page (only for "Open a page")

The [page](page) that should be opened.

See [Opening Pages](opening-pages).

### Microflow (only for "Call a microflow")

The [microflow](microflow) that should be executed.

### Microflow settings (only for "Call a microflow")

The microflow settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

See [Starting Microflows](starting-microflows).
