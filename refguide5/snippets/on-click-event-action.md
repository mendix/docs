### On click

This property specifies what action is executed when the element is clicked. There are three options:

<table><thead><tr><th class="confluenceTh">Action</th><th colspan="1" class="confluenceTh">Effect</th></tr></thead><tbody><tr><td class="confluenceTd">Call a microflow</td><td colspan="1" class="confluenceTd">The specified microflow is executed.</td></tr><tr><td class="confluenceTd">Open a page</td><td colspan="1" class="confluenceTd">The specified page is opened.</td></tr><tr><td colspan="1" class="confluenceTd">Do nothing</td><td colspan="1" class="confluenceTd">Nothing happens. This is useful for setting up a page without defining the underlying functionality yet.</td></tr></tbody></table>

_Default value:_ Do nothing

### Page (only for "Open a page")

The [page](page) that should be opened.

See [Opening Pages](opening-pages).

### Microflow (only for "Call a microflow")

The [microflow](microflow) that should be executed.

### Microflow settings (only for "Call a microflow")

The microflow settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

See [Starting Microflows](starting-microflows).
