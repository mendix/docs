---
title: "Show Recorded Dialog"
parent: "Performance+Tool+Filter"
---
You can look at what is being recorded in the [Recorded] dialog:

 ![](attachments/19956261/20218000.png)

Here the running and finished microflow grids are loaded per 10 records. Using the [Refresh & Next Chunk] button refreshes existing records that are not finished. An additional 10 records are loaded. If microflows have finished in the meantime those records move from running to finished. If filtering is applied finished running microflows can disappear. Running microflows are sorted by start date, oldest first. Finished microflows are sorted by duration, longest first.

You can store an individual microflow (including sub microflows if recorded as such). This can save time if you know what you are looking for.

You can [View] and drill down into microflows. However, you cannot see SQL statements or event microflows as main microflows inside the interval of an action here. This is only visible after processing and storing the recorded data in the database.
