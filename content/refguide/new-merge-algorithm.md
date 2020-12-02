# The New Merge Algorithm
    
In Mendix 9.0.2 you can opt-in to use a new merge algorithm. This algorithm is used when doing an Update or a Merge to merge the change in your project model. The new algorithm has a number of advantages when compared to the current one:
    
1. The algorithm allows for fine-grained conflict resolution. This means that when there are conflicting changes to a document, you no longer have to choose between whole documents: your whole page vs their whole page. Instead, you can resolve conflicts at the level of individual elements, like data views, entities, attributes and microflow actions. Also, all non-conflicting changes from both sides will automatically be accepted.
    
2. Lists of widgets now allow both people to change them. So, two people inserting a widget in the same container (e.g. data view) is perfectly fine. This used to be a conflict in the old algorithm forcing you to choose between one or the other. If the changes are too close (e.g. two people inserting at the same position), there will be a so-called list order conflict to remind you to look at the final order of the widgets in the list. 
    
3. There are some more cases where the new algorithm does not give a conflict, while the old one did. An example is one person moving an entity and the other deleting it. That used to be a conflict but no longer is. The entity will simply be deleted.
    
## Enabling The New Algorithm

To enable the new algorithm, go to Edit > Preferences > New features and 
