---
title: "Sizing Impact"
url: /appstore/partner-solutions/apd/ig-one-sizing-impact/
---
Load tests on decent hardware have shown a CPU usage increase that is very acceptable. When only trap tool and statistics tool are running a few percent. With performance tool recording SQL statements a little above 5%, but well below 10% increased CPU usage when CPU was 30%, 50% and even 70%.

Memory and disk usage are analyzed in the following table per tool

| Tool | Memory | Disk usage |
| --- | --- | --- |
| Log Tool | Constant and very small because logs immediate to disk | About 500.000 records in 1 GB. Protection options rotate by default at 100.000 records. |
| Trap Tool | Constant and small, because only records a predefined amount of data. On trapping a separate thread is outputting. In the rare occasion that a server is generating a huge amount of traps the output queue takes some memory as well. | About 500.000 records in 1 GB. Protection options rotate by default at 100.000 records. |
| Statistics Tool | Constant and small because 1 record per microflow | Small, for daily 1000 microflows it would mean below 1.000.000 records in 3 years taking say 3 GB. Cleanup options are configure to only keep the last year, or 1 GB in this example. |
| Performance Tool | Can fill up memory if the protections are removed. Hence the protection measure in the tool. In 512 MB you can store 50.000 microflows with on average 8 actions or 40.000 microflows including 50.000 SQL statements | 50.000 microflows including actions and relation tables take 450 MB. 50.000 SQL statements take 100 MB (formula is more or less 1 kb per microflow, 1 kb per action, 2 kb per SQL). Usage of the performance tool is seen as on a case by case basis and so should cleanup be done as well. The system can automatically cleanup all traces from older than 1 month. |
| Measurement Tool | A thread per measurement takes a small amount of memory | About 1.000.000 measurements in 100 MB. Doing the basic measurements for CPU and memory every 5 seconds means around 20.000.000 records a year, or roughly 2 GB.The system can automatically cleanup all traces from older than 1 year. |
| **Advised reservation** | 512 MB | 1 GB |
