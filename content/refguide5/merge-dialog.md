---
title: "Merge Dialog"
parent: "dialogs"
---
With the merge dialog you can [merge](version-control-concepts) changes from a branch line to the main line. For example, a fix that you applied in a maintenance branch line can be merged back to the main line so that you do not have to apply the fix by hand again. Also if you completed developing a large feature in a separate branch line you can use merge to incorporate that feature into the main line.

![](attachments/524302/688181.png)

## Branch line

Choose the branch line from which you want to merge changes.

## Single revision

Choose whether you want to merge just a single revision or a whole range. If you just want to merge a fix, a single revision is often enough. However, if you are merging back a large new feature you probably want to merge all revisions of the branch line to the main line.

## Revision (in the case of a single revision)

Select the revision that contains the changes that you want to merge.

## Start revision (in the case of multiple revisions)

Select the first revision (revision with the lowest number) of the range you want to merge.

## End revision (in the case of multiple revisions)

Select the last revision (revision with the highest number) of the range you want to merge.
