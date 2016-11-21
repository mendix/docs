---
title: "Arithmetic expressions"
parent: "microflow-expressions"
space: "Reference Guide 5"
---


A number of arithmetic expressions are supported, all of which work on numeric types (Integer/Long, Float and Decimal).

## Multiplication

Multiplies two numbers.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

{% highlight java %}
3 * 4

{% endhighlight %}

results in

{% highlight java %}
12

{% endhighlight %}

{% endmarkdown %}</div>

## Division

Divides two numbers. You can use either the `div` or colon ( : ) syntax, as can be seen below in the examples. The colon ( : ) syntax is inspired by the divide symbol `÷`. We cannot use the more conventional slash ( / ) syntax because that would conflict with the slash we use for separating objects and members.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If any of the two inputs is of type Decimal, the result is of type Decimal. Otherwise the result is of type Float.

<div class="alert alert-info">{% markdown %}

"div" syntax:

{% highlight java %}
3 div 5

{% endhighlight %}

results in

{% highlight java %}
0.6

{% endhighlight %}

":" syntax:

{% highlight java %}
12 : 3

{% endhighlight %}

results in

{% highlight java %}
4.0

{% endhighlight %}

{% endmarkdown %}</div>

## Modulo

Calculates the remainder of the division of one number by another. In other words, m modulo n corresponds to: m = p + k*n, where p is the result of the operation m modulo n.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

{% highlight java %}
23 mod 5

{% endhighlight %}

results in an Integer/Long with value

{% highlight java %}
3

{% endhighlight %}

Alternatively,

{% highlight java %}
23 mod 5.6

{% endhighlight %}

results in a Float with value

{% highlight java %}
0.6

{% endhighlight %}

{% endmarkdown %}</div>

## Addition

Adds two numbers.

<div class="alert alert-info">{% markdown %}

See [String function calls](/refguide5/string-function-calls) for more information.

{% endmarkdown %}</div>

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

{% highlight java %}
-3 + 4

{% endhighlight %}

results in an Integer/Long with value

{% highlight java %}
1

{% endhighlight %}

{% highlight java %}
4.5 + 3

{% endhighlight %}

results in a Float with value

{% highlight java %}
7.5

{% endhighlight %}

{% endmarkdown %}</div>

## Subtraction

Subtracts the second input from the first.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

{% highlight java %}
5 - 4

{% endhighlight %}

results in an Integer/Long with value

{% highlight java %}
1

{% endhighlight %}

{% highlight java %}
34.4 - 3.1

{% endhighlight %}

results in a Float with value

{% highlight java %}
31.3

{% endhighlight %}

{% endmarkdown %}</div>
