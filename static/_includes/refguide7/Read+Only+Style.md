### Read-only style

This property determines how the widget is rendered if it is read-only. 

| Value                       | Description |
|-----------------------------|-------------|
| Based on data view          | Set to `Control` or `Text` by the containing data view. *(Default value for widgets inside a data view)*
| Not enclosed by a data view | Defaults to `Text`. *(Default value for widgets outside a data view)*
| Inherited from snippet call | Set to `Control` or `Text` by the containing data view of the snippet call, or `Text` when the snippet call is not enclosed by a data view. *(Default value for widgets outside a data view inside a snippet)*
| Control                     | Widget is displayed but disabled so the value cannot be modified.
| Text                        | Widget is replaced by a textual representation of the value.
