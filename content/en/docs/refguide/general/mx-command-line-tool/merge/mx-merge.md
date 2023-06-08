---
title: "mx merge Command"
linktitle: "merge"
url: /refguide/mx-command-line-tool/mx-merge
category: "General Info"
weight: 20
description: "Describes the mx merge command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "merge"]
---

The mx merge command performs a three-way merge of two MPR files having a common base commit.

The input is three MPR files: base, mine, and theirs

## 1 Usage

Use the following command pattern for `mx merge`:

`mx merge [OPTIONS] BASE MINE THEIRS`

The `OPTIONS` are described in the table below:

| Option   | Shortcut | Result                            |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | Displays the help text and exits. |

`BASE` is common base version of the App. If the app is version controlled, this is the last common revision of the app -- revision that is present in both branches history.

`MINE` is the version to merge into; this MPR contains the results of the merge.

`THEIRS` is the version to merge changes from.

The image below illustrates the meaning of the parameters:

{{< figure src="/attachments/refguide/general/mx-command-line-tool/merging/mx-merge/merge.png" alt="mx merge" >}}

<span style="color:green">**A"**</span> is MINE -- the current commit you want to merge the changes TO.

<span style="color:orange">**B'**</span> is THEIRS -- the last commit on a branch you want to merge change FROM.

<span style="color:red">**A**</span> is BASE -- the common commit where branches diverged.

In order to merge changes correctly Studio Pro has to compare both A" and B' againt A to see what has been changed on each branch. During the merge [Merge Algorithm](/refguide/merge-algorithm) will try to automatically merge the changes.
 
This command works for any three MPR files. This means you can try to merge different Apps at your own risk.

{{% alert color="info" %}}Please note, that this command works different than normal version controlled merge you can do in Studio Pro. While Studio pro does real merge of one branch into another, this command just runs merge algorithm over 3 MPR files that don't even have to be version controlled. {{% /alert %}}

## 2 Conflicts

If there are conflicts during the merge, you have to resolve those by opening the app in Studio Pro and doing Version Control -> Merge changes here. 

The reason for this is that conflict resolution is a complex process that requires 2 things:
1. App has to be version controlled.
2. Your git repository has to be in so called `merge state` (Studio Pro does this when you click `Merge changes here`)

This `merge state` is needed for Studio Pro to know what is your current branch and the branch you are trying to merge into it. This way when you are trying to resolve the conflict using `theirs` document, Studio Pro can download the document from the branch and put it into your current App. 

So if you just run this command from command line specifying 3 MPRs and the result has conflicts, you won't be able to resolve conflicts in `mine` app using `theirs` documents by just opening the app in Studio Pro.  

For this to be possible you need to [configure git to use `mx merge` as a merge driver](/refguide/mx-command-line-tool/mx-merge-driver) for MPR files and trigger merge from git command line (so that the repository is put in `merge-state` for Studio Pro to be able to pick it up after the command is complete).

## 3 Examples

`mx merge C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr C:\MyApp-FeatureBranch\MyApp.mpr`

## 4 Return Codes

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | Merge is successful, there are no conflicts. *MINE.mpr* contains the result of the merge. |
| 1           | The command is invalid, check input parameters.              |
| 2           | Conflicts are detected. Open *MINE.mpr* in Studio Pro to resolve them. |
| 3           | This code means an exception – an error occurred during the merge. Error details are printed to the command line output. |
| 4           | The version is unsupported