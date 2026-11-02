# Shot List File

Use a file when the job has more than 5 shots or runs over more than one session. When the skill starts and this file already exists, read it and continue from the first entry that isn't `placed`.

## Where It Lives

Save it as `SCREENSHOTS-<topic>.md` in the repository root, and keep it out of Git by adding its name to `.git/info/exclude` (find that folder with `git rev-parse --git-common-dir`). It is a working file for this job, not documentation.

## Marking Gaps on the Page

For every `new` and `replace` entry, put a marker on the page where the image goes (or right above the image it replaces), so the gap is visible while you work:

```md
{{% todo %}}[SCR-012: Edit Series Item dialog box, Advanced tab, with the custom JSON filled in]{{% /todo %}}
```

`todo` markers don't show on the published site, but reviewers see them in the pull request.

## Format

```md
# Screenshots: <topic>

* App: <address> · Shots folder: <folder> · Double resolution: yes/no
* Status: `todo` → `captured` → `placed`. Entries of type `remove` are `done` once the image is off the page.

| ID | Page | Type | Who | What it shows | File | Status | Notes |
|---|---|---|---|---|---|---|---|
| SCR-001 | content/en/docs/.../page.md | replace | Claude | Line chart with three series and the Toggle Editor button | /attachments/.../chart.png | todo | |
| SCR-002 | content/en/docs/.../page.md | new | You | Edit Series Item dialog box, General tab | /attachments/.../series-general.png | todo | needs a chart with two series |
```

Update the `Status` column as you go, and use `Notes` for decisions (why the old image was kept, why a new file name was used, what blocked a shot).
