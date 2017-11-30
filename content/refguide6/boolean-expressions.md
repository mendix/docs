---
title: "Boolean expressions"
parent: "microflow-expressions"
---
### Boolean expressions



Boolean expressions can be used to perform logical operations such as checking if two conditions hold.

## and

Combines two Boolean expressions and only returns True if both of the expressions evaluate to True.

{{% alert type="info" %}}

{% highlight java %}
(6 > 4) and (3 < 5)
{% endhighlight %}

evaluates to True because both of the expressions are True.

{% highlight java %}
('hello' = 'hallo') and (3 < 5)
{% endhighlight %}

evaluates to False, because only the second expression is True.

{{% /alert %}}

## or

Combines two Boolean expressions, and returns True if at least one of the expressions evaluates to True.

{{% alert type="info" %}}

Given a domain entity instance with name "$product" that has an integer attribute "price" with value "3" and another integer attribute "recommendedPrice" with value "2", the following expression:

{% highlight java %}
($product/price < $product/recommendedPrice : 2) or ($product/price > 0)
{% endhighlight %}

will return True because at least one of the expressions evaluates to True (the second one, to be precise). Note that the expression would still return True if both statements had been True.

The following example returns False, because both expressions evaluate to False:

{% highlight java %}
('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
{% endhighlight %}

{{% /alert %}}

## not

The function 'not' negates the specified Boolean expression.

### Input

An expression of type Boolean.

### Output

Returns the negation of the specified expression. If the expression evaluates to True, it returns False; otherwise it returns True.

{{% alert type="info" %}}

{% highlight java %}
not('hello' = 'hallo')

{% endhighlight %}

returns:

{% highlight java %}
true

{% endhighlight %}

and

{% highlight java %}
not(true)

{% endhighlight %}

returns:

{% highlight java %}
false

{% endhighlight %}

{{% /alert %}}
