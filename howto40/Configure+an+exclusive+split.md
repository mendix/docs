---
title: "Configure an exclusive split"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to split the sequence flow in a microflow with the help of an exclusive split. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=10420537).

## Instructions

![](attachments/819203/917932.png) **Open the microflow, or if necessary create a new one. If you do not know how to add documents to your project, please refer to [this](https://world.mendix.com/display/howto25/Add+documents+to+a+module) article.**

![](attachments/2621589/2752856.png)

If your exclusive split is intended to use an enumeration, make sure it is either created by the microflow or passed to it.

![](attachments/819203/917932.png) **Add an 'Exclusive split' to the microflow and double click on it. If you do not know how to do this, please refer to [this](https://world.mendix.com/display/howto25/Add+an+activity+to+a+microflow) article.**

![](attachments/2621589/2752861.png)

![](attachments/819203/917932.png) **In the menu that pops-up, you can choose the 'Exclusive split type' using the radio buttons.**

![](attachments/819203/917932.png) **If you choose 'Expression', you can enter a microflow expression the exclusive split should check for, with boolean or enumeration value as result.**

![](attachments/2621589/2752862.png)

![](attachments/819203/917932.png) **If you choose 'Rule', you can press the 'Select' button to select the rule you want to use in the new menu that appears.**

![](attachments/2621589/2752855.png)

![](attachments/819203/917932.png) **After this the parameter area will be filled with parameters that have to be passed to the rule. Select a parameter and press the 'Edit parameter value' button to bring up menu where you can enter the value for the parameter.**

![](attachments/2621589/2752858.png)

![](attachments/819203/917932.png) **In the new pop-up window you can enter a microflow expression for the variable or value you want to pass to the rule.**

![](attachments/2621589/2752860.png)

![](attachments/819203/917932.png) **Now that the exclusive split has been configured, you will notice that the sequence flow paths leading out of it have turned red. Right-click on such a path and then under 'Condition value' choose the boolean or enumeration value for which this path should be executed.**

![](attachments/2621589/2752852.png)

![](attachments/819203/917932.png) **Create additional paths for every possible boolean or enumeration result from the expression or rule you entered for the exclusive split.**

![](attachments/819203/917932.png) **Add activities and, if necessary, end events to these paths to finish the microflow.**

![](attachments/2621589/2752851.png)

### Exclusive splits and numerical ranges

![](attachments/819203/917932.png) **Exclusive splits will split the sequence flow based on the result of their expression or rule, which is either a boolean or enumeration value. As a result, if you want to split the sequence flow according to numerical ranges of a variable, this is not possible to achieve with a single exclusive split.**

![](attachments/819203/917932.png) **However, it is still possible to do this by using several exclusive splits to check at the boundaries of the numerical ranges.**

![](attachments/2621589/2752859.png)

For example in the above microflow customer ranks are based on the number orders placed, with the ranges being 0-5, 5-10, 10-15 and greater than 15\. To split the sequence flow into these ranges, multiple exclusive splits are used which test whether or not the number of orders placed exceeds a boundary of a range, with boolean as result. The first exclusive split for example checks if the number of orders placed is greater than 5; if this is not the case the customer is assigned 'Basic' rank, whereas if this is the case the sequence flow leads to a new exclusive split checking if the customer ordered more than 10 times. If this is not the case, the customer falls in the 5-10 range and is assigned 'Bronze' rank.

[![](attachments/819203/917564.png)](Configure+an+exclusive+split)[(Back to Top)](Configure+an+exclusive+split)