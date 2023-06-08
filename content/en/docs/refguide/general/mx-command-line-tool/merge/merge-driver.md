---
title: "mx merge as git merge driver"
linktitle: "merge driver"
url: /refguide/mx-command-line-tool/mx-merge-driver
category: "General Info"
weight: 30
description: "Describes how to configure mx merge to be your git merge driver."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "merge"]
---

This page describes the configuration you need to do in order to enable using [mx merge]() command as a merge driver in git. With this configuration you can merge one branch into another using 3rd party version control tools and git command line.

Normally when you are merging branches with git it compares the changes in files in both branches. If a certain file has been changed in both branches this is called a conflict. If the file in conflict is a text file, then git attempts to resolve it automatically (and very often succeeds), but in case of Mendix apps the conflict is in 2 MPR files, which are more complex than text (that's why we need StudioPro to resolve the conflicts). For such cases git has an option to delegate conflict resolution for a certain file type to an external tool. `mx merge` command is compatible with this mechanism and will allow git to try to merge the MPRs "as if Studio Pro would've done it". Then if there still will be conflicts, you can always open Studio Pro and resolve those manually.

# 1. .gitconfig

You need to add the following lines to `.gitconfig` file located in `.git` folder of your App on disk.

At the end of the file add `[merge "custom"]` block like this

```ini
[merge "custom"]
    name = custom merge driver for MPR files
    driver = [MX.EXE_PATH] merge %O %A %B
```

Replace `MX.EXE_PATH` with a full path to your mx.exe in unix format (e.g. `/c/Program\ Files/Mendix/10.0.0.8753/modeler/mx.exe`)

Under `[core]` section add the following
```ini
    attributesfile = .git/.gitattributes`
```
# 2. .gitattributes

Create `.gitattributes` file in .git folder of your App on disk. Add the following line there to tell git to use `[merge "custom"]` driver from .gitconfig chapter of this page for merging *.mpr files.

```ini
*.mpr merge=custom
```

# 3. Verification
To confirm it works, you can create a blank version controlled App.

In this app do the following:
1. Create a branch `branch`, download it.
2. Change the caption of a Home page to "Branch"
3. Add Microflow named "branch"
4. Commit and Push your changes
5. Switch back to `Main` branch
6. Pull the changes from remote
7. Change the caption of a Home page to "Main"
8. Add Microflow named "main"
7. Commit and Push your changes

Now open git command line in your App's Main branch directory and do
`git merge origin/branch`

If you configured everything correctly, command line outout should look like this:

```code
$ git merge origin/branch
Checking MPR Versions.
Complete.
Converting MPRs
Complete.
Merging MPRs.
Conflicts found during merging. Please resolve them by opening the project in Studio Pro.
Complete.
Auto-merging MyBlankApp.mpr
CONFLICT (content): Merge conflict in MyBlankApp.mpr
Automatic merge failed; fix conflicts and then commit the result.
```

Now if you open you app on Main branch you should see:
1. Both microflows "branch" and "main" -- this is a non-conflicting change so `mx merge` sorted this out automatically just like Studio Pro would do. 
2. Conflict on Home_Web page concerning the renaming of Home page caption -- this is a conflicting change as you changed the same caption to different values on both branches. You can resolve this manually.