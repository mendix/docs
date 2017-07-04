<div class="alert alert-info">{% markdown %}

The 'Validation type' and 'Validation message' properties were introduced in 7.5.0. They supersede the 'Required' and 'Required message' properties.

{% endmarkdown %}</div>

### Validation type

This property indicates whether this widget value should be validated and if so how. Possible options are no validation, a predefined validation or a custom validation.
The possible values of a predefined validation are "Required" (all data types), "E-mail" (String), "Positive number" (Decimal, Float, Integer, Long), "Date in the future" (DateTime) or "Date in the past" (DateTime).
Custom validations are expressions which follow the [Microflow Expression](microflow-expressions) syntax. Both "$currentObject" and "$value" are in scope which refer to the current object and the current member value respectively.
When a validation is set and it fails for this widget a message will be shown if the end user presses the 'Save' button.

_Default value:_ (none)

### Validation message

This property determines the message that is shown to the end user if widget validation is enabled and has failed. This is a translable text. See [Translatable Texts](translatable-texts).

<div class="alert alert-info">{% markdown %}

For example, if an address field is required, the validation message for the text box of the address could be something like "The address is required."

{% endmarkdown %}</div>

### Required

This property indicates whether this widget must be filled in by the end user or not. If set to true, this widget can not be left empty and a message will be shown if the end user presses the 'Save' button.

_Default value:_ False

### Required message

This property determines the message that is shown to the end user if the widget is empty and the 'Required' property is set to true. This is a translable text. See [Translatable Texts](translatable-texts).

<div class="alert alert-info">{% markdown %}

For example, if an address field is required, the required message for the text box of the address could be something like "The address is required."

{% endmarkdown %}</div>
