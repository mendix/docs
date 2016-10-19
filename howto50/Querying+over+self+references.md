---
title: "Querying over self-references"
category: "Tips & Tricks"
space: "Mendix 5 How-to's"
---
<table><thead><tr><th class="confluenceTh">Mendix Version</th><th class="confluenceTh">Create Date</th><th colspan="1" class="confluenceTh">Modified Date</th></tr></thead><tbody><tr><td class="confluenceTd">5.20</td><td class="confluenceTd">May 21, 2015 17:40</td><td colspan="1" class="confluenceTd">Oct 09, 2015 15:48</td></tr></tbody></table>



When using more generic domain models, you often turn to using inheritance or self references to allow for simple yet efficiently designed models. This makes building your microflows and application logic much easier, but it can become challenging to query the correct objects; especially when your are using a self-reference. In this example, a self-reference to Group is used. This will allow you to build a group structure with an unlimited amount of sub-groups.

![](attachments/13566056/14385378.png)     ![](attachments/13566056/14385379.png)

There are 5 groups relevant to this example. Group with ID 4 and 5 are the parent groups and each have the same three subgroups. 

If you have the ParentGroup available in your microflow you can easily retrieve the subgroup. The platform automatically determines which of the two groups from the association is used. Each association has a left side (the association owner) and a right side (child in the association). XPath constraint can are read from left to right as well, and this is key to how you should interpret which of the two groups is being used.  

![](attachments/13566056/14385380.png)

If we assume that the $ParentGroup variable is the group S2 with ID 5\. The following data highlighted in blue will be returned. The Platform applies the constraint by default on the right/child side of the association and returns the relavant ChildGroups.

![](attachments/13566056/14385381.png)

However when you only have the SubGroup available and you want to retrieve all its ParentGroups from the database it becomes more complicated. You can use the expression [reversed()] to instruct the platform to read the constraint opposite of what it would normally do. So instead of reading the association from left to right the platform will interpret the id's from right to left. Keep in mind that this instruction only applies to one association. So if you would have used multiple associations they are always interpreted the normal way. 
The reversed() expression can only be applied on self-references, when an association is created between two different objecttypes the platform will be capable of determining the correct join automatically.

![](attachments/13566056/14385382.png)

Let's assume the $SubGroup variable is group G2 with ID 2\. This query will return the data highlighted in blue, and thus all the ParentGroups. 

![](attachments/13566056/14385383.png)

This a simple example however the [reversed()] expression can also be used in more complicated queries such as the one below. If we assume that our Customer is associated with group G2 with ID 2, our query will return the exact same dataset as the previous example. 
This constraint will return all the Groups with an association to the group that is associated with the Customer variable. Because the reversed association is specified for the group association it will be interpreted from right to left. The ParentGroup is considered to be the right side of the association, therefore the query will be returning ParentGroups. The ChildGroup needs to be associated with the Customer variable to be applicable in this constraint. 
If you do not specify the [reversed()] expression the query will be interpreted from left to right and since the ChildGroup is configured on the left side of the association the child groups could have been returned.  

![](attachments/13566056/14385384.png)

## Related articles

*   [Finding Object Activities](Finding+Object+Activities)
*   [Finding Unused Items](Finding+Unused+Items)
*   [Finding your way through a project](Finding+your+way+through+a+project)
*   [Showing a Project in the Directory in Explorer](Showing+a+Project+in+the+Directory+in+Explorer)
