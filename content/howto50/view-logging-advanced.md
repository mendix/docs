---
title: "View logging - Advanced"
category: "Logic & Business Rules"
---
## Description

This section describes some of the advanced logging viewing features under Linux.

## Instructions

The program `less` is a so called pager which can be used to see the entire log of previous days, while opening an old log file read only. Every day a log file will be rotated. A rotated log file, which has a name ending in `.gz` can be opened with `zless`.

Log files are stored in the location `/var/log/xas2/` on your server. The log files are named after the user account you are using to log into the server.

To view the full current log file, use the following command from the linux command line, not in m2ee): `less /var/log/xas2/example.log`, substituting example with your user name.

The most important keyboard bindings for use in `less` are:

<table><thead><tr><th class="confluenceTh">pgup</th><th class="confluenceTh">page up</th></tr></thead><tbody><tr><th class="confluenceTh">pgdn</th><th class="confluenceTh">page down</th></tr><tr><th class="confluenceTh">&lt;</th><th class="confluenceTh">jump to begin of the file</th></tr><tr><th class="confluenceTh">&gt;</th><th class="confluenceTh">jump to end of file</th></tr><tr><th class="confluenceTh">/</th><th class="confluenceTh">search</th></tr><tr><th class="confluenceTh">n</th><th class="confluenceTh">search again, forwards</th></tr><tr><th class="confluenceTh">N</th><th class="confluenceTh">search again, backwards</th></tr><tr><th class="confluenceTh">q</th><th class="confluenceTh">exit</th></tr></tbody></table>

The older log files can be opened using `zless`, like: `zless /var/log/xas2/example.log.1.gz`

Return to:
[![](attachments/819203/917564.png)](view-logging-advanced)[(Back to Top)](view-logging-advanced)
