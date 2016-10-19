## Selectors
For the action [Find Widget Child Node](/Mendix+Actions/System/Find+Widget+Child+Node) or as part of the script for [Execute JavaScript Integer](/Selenium+Actions/Execute+JavaScript+Integer), [Execute JavaScript String](/Selenium+Actions/Execute+JavaScript+String) and [Execute JavaScript WebElement](/Selenium+Actions/Execute+JavaScript+WebElement), you will have to use selectors to get a node or WebElement. ATS supports both, JQuery and CSS3 selectors. The following summary will give you a short overview of the most commonly used selectors in ATS.

### CSS Selectors
You can use any CSS Selector defined in CSS3 and supported by your browser. The following table shows some of the commonly used CSS3 selectors in ATS.

 Pattern |Name | Meaning
-----|---------|--------
 .myClass |Class Selector | Selects every element with class **myClass**
 #myID | ID Selector |Selects every element with ID **myID**
 E[foo="bar"] |Attribute Selector | Selects every element E  whose "**foo**" attribute value is equal to "**bar**"
 :nth-child(n) |Nth-child pseudo-class | Selects the **n-th** child of its parent
 :first-child |First-Child pseudo-class | Selects the **first** child of its parent
 :last-child |Last-Child pseudo-class | Selects the **last** child of its parent
 :checked |Checked pseudo-class | Selects a user interface element which is **checked**
 E > F |Child Combinator | Selects an **F element child** of an E element

For more informations visit the official [W3C CSS3 selectors reference](http://www.w3.org/TR/css3-selectors/).
### JQuery Selectors
JQuery uses CSS3 selectors and extends those with its own ones.
If you use JQuery selectors in the [Find Widget Child Node](/Mendix+Actions/System/Find+Widget+Child+Node) action, you **mustn't** use the *jQuery(...)* or *$(...)* function. Only use simple selectors, without quotation.

In the **Execute JavaScript actions**, you will have to use the *jQuery(...)* or *$(...)* function to select a WebElement or node.

The following table shows some of the additional JQuery selectors you can use in ATS:      

Pattern |Name | Meaning
-----|---------|--------
 :animated | Animated Selector | Selects all elements that are in the progress of an animation at the time the selector is run
 :checkbox | Checkbox Selector | Selects all elements of type checkbox.
 :input | Input Selector | Selects all input, textarea, select and button elements.
 :has(*selector*) | Has Selector | Selects elements which contain at least one element that matches the specified selector.

For more informations visit the official [JQuery selectors reference](https://api.jquery.com/category/selectors/).
### ATS Selectors
//**_TODO_**
