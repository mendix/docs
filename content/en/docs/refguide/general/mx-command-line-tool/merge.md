---
title: "Merging and Diffing Commands"
url: /refguide/mx-command-line-tool/merge/
weight: 50
description: "Describes the commands for comparing and merging apps using the mx command-line tool."
---

## Introduction

The commands in this group compare two apps and merge them.

## mx diff Command {#diff}

The `mx diff` command performs a diff of two *.mpr* files and outputs the differences to a file in JSON format.

### Usage

Use the following command pattern for `mx diff`:

`mx diff [options] BASE MINE OUTPUT`

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | | Shows help for the `mx diff` command and exits. |
| `--loose-version-check` | `-l` | Makes the version check loose. This auto-converts files if possible before comparing them. |

`BASE` is the first *.mpr* file, used as the base for comparison.

`MINE` is the second *.mpr* file, used as the changed version for comparison. The output contains the changes in this file compared to the base.

{{% alert color="info" %}}
For example, if the `BASE` *.mpr* file contains Microflow1 and the `MINE` *.mpr* file does not contain it, Microflow1 is listed as deleted in the output file. If you swap the `BASE` and `MINE` parameters and compare again, Microflow1 is listed as added.
{{% /alert %}}

`OUTPUT` is the name of the output JSON file.

### Examples

This is an example:

`mx diff C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr c:\comparison\output.json`

### Return Codes

This table shows the return codes and their description:

| Return Code | Meaning |
| --- | --- |
| `0` | OK. |
| `2` | Conflicts were found during the diff. |
| `4` | The version of either *.mpr* file is not supported. |
| `129` | An error happened during the diff. |

## mx merge Command {#merge}

The `mx merge` command performs a three-way merge of two *.mpr* files using their common ancestor (base).

The input is three *.mpr* files: `BASE`, `MINE`, and `THEIRS`.

### Usage

Use the following command pattern for `mx merge`:

`mx merge [OPTIONS] BASE MINE THEIRS`

These are the `OPTIONS`:

| Option | Result |
| --- | --- |
| `--help` | Shows help for the `mx merge` command and exits. |

`BASE` is the common base version of the app. If the app is version-controlled, this is the last common revision of the app (the revision present in the history of both branches).

`MINE` is the version to merge into. This *.mpr* file contains the results of the merge.

`THEIRS` is the version to merge changes from.

The image below illustrates the meaning of the parameters:

{{< figure src="/attachments/refguide/general/mx-command-line-tool/merge.png" alt="mx merge" class="no-border" >}}

In the diagram, note the following:

* <span style="color:green">**A"**</span> is `MINE`, the current commit you want to merge changes into
* <span style="color:orange">**B'**</span> is `THEIRS`, the last commit on the branch you want to merge changes from
* <span style="color:red">**A**</span> is `BASE`, the common commit where the branches diverged

To merge changes correctly, Studio Pro compares both **A"** and **B'** against **A** to see what changed on each branch. During the merge, the [merge algorithm](/refguide/merge-algorithm/) attempts to automatically merge the changes.

This command works for any three *.mpr* files. This means you can try to merge different apps at your own risk.

{{% alert color="info" %}}
This command works differently than the normal version-controlled merges you can do in Studio Pro. Studio Pro performs a true merge of one branch into another. In contrast, this command runs the merge algorithm on three *.mpr* files that do not need to be version-controlled.
{{% /alert %}}

### Conflicts

If there are conflicts during the merge, resolve them by opening the app in Studio Pro and selecting **Version Control** > [Merge Changes Here](/refguide/version-control-menu/#merge-changes-here).

Conflict resolution is a complex process that has two requirements:

* The app must be version-controlled.
* Your Git repository must be in the merge state. Studio Pro sets this when you click **Merge Changes Here**.

Studio Pro needs this merge state to identify your current branch and the branch you are merging into it. When you resolve the conflict using the `THEIRS` document, Studio Pro can download the document from the branch and add it to your current app.

If you run this command from the command line with three *.mpr* files and the result has conflicts, you cannot resolve the conflicts in the `MINE` app using the `THEIRS` documents by opening the app in Studio Pro. Instead, configure Git to use `mx merge` as a [merge driver](#merge-git-driver) for the *.mpr* files and trigger the merge from the Git command line. This puts the repository in the merge state so Studio Pro can access it after the command completes.

{{% alert color="warning" %}}
Using `mx merge` as a [merge driver](#merge-git-driver) is suitable only for [MPRv1 Format](/refguide/troubleshoot-repository-size/#mpr-format).
{{% /alert %}}

### Examples

Here is an example:

`mx merge C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr C:\MyApp-FeatureBranch\MyApp.mpr`

### Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | The merge is successful with no conflicts. *MINE.mpr* contains the merge result. |
| `2` | Conflicts are detected. Open *MINE.mpr* in Studio Pro to resolve them. |
| `4` | The version is not supported. |
| `129` | An error occurred during the merge. Error details are printed in the command line output. |

## mx merge as Git Merge Driver {#merge-git-driver}

{{% alert color="warning" %}}
Using `mx merge` as a [merge driver](#merge-git-driver) is suitable only for [MPRv1 Format](/refguide/troubleshoot-repository-size/#mpr-format).
{{% /alert %}}

{{% alert color="info" %}}
Studio Pro configures the merge driver for an app with the name **studiopro** when opening it in Studio Pro.
{{% /alert %}}

This section outlines the configuration needed to enable the [mx merge](#merge) command as a merge driver in Git. With this configuration, you can merge one branch into another using third-party version control tools and the Git command line.

When you merge branches with Git, it compares the file changes in both branches. If a file changed in both branches, this triggers a conflict. If conflicting files are text files, Git attempts to resolve the conflict automatically and often succeeds.

However, if the conflicting files are Mendix apps, the conflict occurs in two *.mpr* files. Both the files and the conflict itself are more complex, so you need Studio Pro to resolve them.

Git provides an option to delegate conflict resolution for specific file types to an external tool. The `mx merge` command works with this mechanism, allowing Git to attempt merging the *.mpr* files as Studio Pro would. If conflicts remain, you can open Studio Pro and resolve them manually.

### config File {#merge-config}

Add the lines below to the *config* file located in the *.git* folder of your app on disk.

At the end of the file, add a `[merge "custom"]` block like this:

```ini
[merge "custom"]
    name = custom merge driver for MPR files
    driver = [MX.EXE_PATH] merge %O %A %B
```

Replace `[MX.EXE_PATH]` with a full path to your *mx.exe* file in the Unix format (for example, `'/C/Program Files/Mendix/11.0.0.8753/modeler/mx.exe'`).

{{% alert color="info" %}}
The *.git* folder is a hidden folder in your computer file management system. You can view it when hidden items are visible.
{{% /alert %}}

### attributes File

Create an `attributes` file in the *info* folder of the *.git* directory of your app. Add the following line to instruct Git to use the `[merge "custom"]` driver from the [config](#merge-config) section of this document for merging *.mpr* files.

```ini
*.mpr merge=custom
```

### Verification

To confirm this works, use Studio Pro to create a blank version-controlled app and do the following:

1. Create a branch called *branch* and download it.
2. Change the caption of a home page to *Branch*.
3. Add a microflow named *branch*.
4. Commit and push your changes.
5. Switch back to the **Main** branch.
6. Change the caption of the home page to *Main*.
7. Add a microflow named *main*.
8. Commit and push your changes.
9. Open the Git command line in your app's **Main** branch directory and run `git merge origin/branch`.

If you configured everything correctly, the command line output should look like this:

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

Now, if you open your app on the **Main** branch, you should see the following:

* Both the **branch** and **main** microflows. This is a non-conflicting change, so `mx merge` resolved this automatically, just as Studio Pro would.
* A conflict on the **Home_Web** page concerning the home page caption. This is a conflicting change because you changed the same caption to different values on both branches. You can resolve this manually.

{{% alert color="info" %}}
If you get different output, the custom merge driver is not configured correctly. Abort the merge using the command `$git merge --abort` and close the Git command line tool before making changes to the configuration. Changes made to the *config* and *.gitattributes* files are picked up when you reopen the Git command line tool.
{{% /alert %}}
