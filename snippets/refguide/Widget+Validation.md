<div class="alert alert-info">

The <strong>Validation type</strong> and <strong>Validation message</strong> properties were introduced in 7.6.0. They supersede the <strong>Required</strong> and <strong>Required message</strong> properties.

</div>

### Validation Type

This property indicates whether this widget value should be validated and, if so, how. The possible options are no validation, a predefined validation, or a custom validation.

The possible values of a predefined validation are the following:

* Required – all data types
* E-mail – string
* Positive number – decimal, float, integer, long
* Date in the future – dateTime
* Date in the past – dateTime

Custom validations are expressions that follow the [Microflow expression](microflow-expressions) syntax. Both `$currentObject` and `$value` are in a scope that refers to the current object and the current member value, respectively.

When a validation is set and it fails for this widget, a message will be shown when the user selects **Save**.

*Default value:* (none)

### Validation Message

This property determines the message that is shown to the user if widget validation is enabled and has failed. This is a translable text (for more information, see [Translatable Texts](translatable-texts)).

<div class="alert alert-info">

For example, if an address field is required, the validation message for the text box of the address could be something like, "The address is required."

</div>

### Required

This property indicates whether this widget must be filled in by the end user or not. If set to true, this widget cannot be left empty, and a message will be shown if the user selects **Save**.

*Default value:* False

### Required Message

This property determines the message that is shown to the user if the widget is empty and the **Required** property is set to *true*. This is a translable text (for more inforamtion, see [Translatable Texts](translatable-texts)).

<div class="alert alert-info">

For example, if an address field is required, the required message for the text box of the address could be something like, "The address is required."

</div>