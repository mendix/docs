---
name: docs-say-cheese
description: Plans, captures, compares, and places screenshots for documentation pages. Claude takes screenshots of a running app with Playwright, lists the shots the user must take in Studio Pro, and swaps the images into the pages with alt text.
user-invocable: true
disable-model-invocation: true
---

The user has already updated the text of some documentation pages. Your job is the screenshots: work out which ones are needed, take the ones you can, get the rest from the user, and put them on the pages.

The **shot list** is the plan for this whole job: one entry per image on the pages. Every step below reads or updates it.

The people using this skill write documentation and are often not developers. Talk to them in short, plain sentences. Explain any technical choice in one line, and ask before installing anything.

## 1. Gather What You Need

Ask the user these questions in one message:

1. **Which pages?** Specific files, or "the pages I changed on my branch". For the second, compare the branch with `development` (`git diff --name-only development...HEAD -- content/`).
2. **Where is the app running?** The address of the running app, for example `http://localhost:8080`. If no app is involved, only Studio Pro shots are possible.
3. **Who signs in?** You open a visible browser window and the user types their own login there. You never ask for, store, or type a password.
4. **Should I check the page against the product's code?** No (most jobs), the Mendix web-widgets repo (<https://github.com/mendix/web-widgets>, or the user's local copy), or somewhere else the user gives you (a folder or a link).
5. **Are you using an external monitor?** Screenshots taken on an external monitor can look less sharp than ones taken on a laptop screen. Offer to take them at double resolution so they stay sharp, and let the user decide.

Done when every question has an answer.

## 2. Build the Shot List

For each page, add an entry for every `figure` shortcode and every `{{% todo %}}` marker that asks for a screenshot. Give each entry:

* **ID**: `SCR-001`, `SCR-002`, and so on. Search for entries by ID, never by line number; line numbers drift while you edit.
* **Type**: `new` (the page needs an image it doesn't have), `replace` (the image is outdated), `verify` (the image might still be fine; recapture it and compare), or `remove` (the image no longer belongs on the page).
* **Who takes it**: `Claude` for anything in the running app in a browser. `You` for Studio Pro: dialogs, the page editor, the Toolbox, domain models, microflows.
* **What it shows**: one line, based on what the page text says around the image.
* **File**: the image path the page uses. For `new` shots, follow the screenshot and folder rules under "Guidelines and Conventions" in `content/en/docs/community-tools/contribute-to-mendix-docs/_index.md`.

If the user asked for a check against the product's code, read the page next to the code it describes: property names, tab names, option labels, default values. Note every mismatch for the user, and add a `replace` entry for every image that shows the old UI.

For more than 5 shots, or a job that will take more than one session, keep the shot list in a file, as described in [shot-list.md](shot-list.md). For smaller jobs, keep it in the chat.

Done when every image on every page has an entry with a type and an owner.

## 3. Agree on the Plan

Show the user the shot list as a short table, and get their OK before capturing anything.

Then give them their own list: only the `You` shots, numbered, each with what to show, what to set up first, and the exact file name to save it as (`SCR-012.png`). Name one folder for all of their shots, for example `~/Desktop/<topic>-screenshots/`, and save your own shots there too.

Done when the user has approved the plan and has their list.

## 4. Take Your Shots

Take every `Claude` shot with Playwright, following [capture-playwright.md](capture-playwright.md). Look at each capture before moving on, and retake it if it doesn't show what the entry says.

Done when every `Claude` entry is captured, or marked as blocked with the reason (for example, "needs data the test app doesn't have").

## 5. Compare and Choose

When the user's shots arrive, look at each one the same way.

For every `replace` and `verify` entry, start a subagent to compare the new capture with the current image and choose one. When both show the content equally well, choose the new one. Choose the old one only when the new one is worse for what the page text describes: missing content, the wrong data, or something misleading. Ask the subagent for one line per entry: ID, new or old, a reason of 15 words or less, and suggested alt text when the new one wins.

Check the subagent's verdicts by looking at a few of the images yourself. Then show the user a simple list (use new / keep old, and why), and wait for their OK.

Done when the user has approved a choice for every entry.

## 6. Place the Images

For each approved entry:

* **Replace in place.** Overwrite the existing file under the same name, so the image URL keeps working. First, search all of `content/` for the file name. If another page uses the same file and the new image would be wrong there (for example, a page about an older version), save the new image under a new name and point only this page at it.
* **Resize big captures.** If a capture is wider than about 1400 px, it was taken at double resolution; halve it with `sips --resampleWidth <half> <in> --out <out>` (macOS), or tell the user if you can't.
* **Write the alt text** with the `docs-alt-text` skill. Keep double quotes out of the alt text, because they break the `figure` shortcode.
* **Remove the `todo` marker** for the entry, and set the entry to `placed`.
* For `remove` entries, take the `figure` shortcode off the page, and tell the user which image files are no longer used anywhere. Leave the files in place, since the docs team cleans up unused images separately.

Done when every approved entry is `placed`, and no screenshot `todo` markers remain on the pages.

## 7. Check and Report

1. For every `figure` on the pages, confirm that the file at `static/<src>` exists.
2. If Hugo is set up (`node_modules/.bin/hugo` or `hugo` on the path), build the site with `hugo --environment development` and report any errors. If it isn't, tell the user the build was skipped, and that the pull request checks will build the site.
3. Tell the user, in a few short bullets: how many images were added, replaced, and kept, which shots are still open and why, and any mismatches you found in the page text.

Leave committing and pushing to the user.

Done when the user has the report.
