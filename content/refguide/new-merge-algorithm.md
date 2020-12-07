# The New Merge Algorithm
    
In Mendix 9.0.2 you can opt-in to use a new merge algorithm. This algorithm is used when doing an Update or a Merge to merge the change in your project model. The new algorithm has a number of advantages when compared to the current one:
    
1. The algorithm allows for fine-grained conflict resolution. This means that when there are conflicting changes to a document, you no longer have to choose between whole documents: your whole page vs their whole page. Instead, you can resolve conflicts at the level of individual elements, like data views, entities, attributes and microflow actions. Also, all non-conflicting changes from both sides will automatically be accepted.
    
2. Lists of widgets now allow both people to change them. So, two people inserting a widget in the same container (e.g. data view) is perfectly fine. This used to be a conflict in the old algorithm forcing you to choose between one or the other. If the changes are too close (e.g. two people inserting at the same position), there will be a so-called list order conflict to remind you to look at the final order of the widgets in the list. 
    
3. There are some more cases where the new algorithm does not give a conflict, while the old one did. An example is one person moving an entity and the other deleting it. That used to be a conflict but no longer is. The entity will simply be deleted.
    
## Enabling The New Algorithm

Make sure that you repository is in a clean state: everything has been committed and there is no outstanding changes or conflicts. 

Go to Edit > Preferences > New features and check the relevant box. Restart Studio Pro and you are good to go!

![Enabling the new merge algorithm](attachments/new-merge-algorithm/enable-new-merge-algorithm.png)

## Example Setup

To illustrate the new conflict resolution mode, we will look at an example. Let us take a simple page so that you can clearly see what is going on:

![Original page](attachments/new-merge-algorithm/new-merge-algorithm-base-page.png)

One person makes the following changes in the main line:

* Change the text 'Home' to 'Welcome!'
* Add a Mendix logo above the text 'Welcome!'
* Delete the subtitle 'Welcome to your new app'
* Add a text 'Write some text here` in the bottom layout grid

This results in the page now looking like this:

![Main line page](attachments/new-merge-algorithm/new-merge-algorithm-main-page.png)

Another person in a branch, makes other changes:

* Change the text 'Home' to 'My homepage'
* Add a data grid to the bottom layout grid

This results in their page looking like this:

![Branch line page](attachments/new-merge-algorithm/new-merge-algorithm-branch-page.png)

## Merging With The Old Algorithm

If we merge the branch into the main line with the old merge algorithm, it will find two conflicts:

* Both people changed the text 'Home'
* The layout grid in the bottom was changed by both people (adding different widgets)

![Old algorithm conflicts](attachments/new-merge-algorithm/old-merge-algorithm-conflicts.png)

The only thing you can do is to choose the whole page as it is in the main line or as it is in the branch line. You cannot combine changes from both sides, meaning that you may have to do rework if you want changes from both sides.

## Merging With The New Algorithm

Let us see what the new algorithm does in this situation:

![New algorithm conflicts](attachments/new-merge-algorithm/new-merge-algorithm-conflicts.png)

There are still two conflicts. One conflict is about the text that both sides changed. The other conflict is a so-called *list order conflict*. Both people added something to the bottom layout grid and that is fine. However, the merge algorithm cannot guess the right order of the two new widgets and so it reports this list order conflict. This is purely a reminder for the person who is doing the merge to look at the final list. 

## Resolving Conflicts

Now, let us resolve those conflicts. We do not have to choose between the whole page of the main line and the whole page of the branch line anymore. To start the resolution process, we click the new "Resolve..." button. The page is opened in a special mode with an orange tab:

![Document in orange tab](attachments/new-merge-algorithm/new-merge-algorithm-orange-tab.png)


