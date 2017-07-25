---
title: "Hashing Algorithms"
category: "Mendix Support"
#parent: ""
#description: ""
#tags: []
---

## 1 Introduction
Mendix offers two hashing algorithms:

*  BCrypt
*  SSHA256

This article will not discuss the merits of each algorithm on the security spectrum. Mendix believes both algorithms are secure enough to store passwords within Mendix. The main difference between BCrypt and SSHA256 is that the BCrypt algorithm has been configured so that it is relatively slow on purpose, since it was designed specifically to stop brute force attacks. That's why this results in a slight performance difference with the SSHA256 algorithm.

## 2 Performance
This performance difference is hardly noticeable to a single user when logging in (the password you enter when logging in is hashed using the selected algorithm), so in general the performance alone is not a reason to choose SSHA256 over BCrypt. This situation can change when dealing with high concurrency of hashing operations. A common example of an area where this occurs is published web services exposing operations that compute quickly, like short-running microflows.

## 3 Performance Tests
A (web service) user will log in to execute a web service operation, wait for the operation to finish, and finally get the result back (if any).

Imagine an empty microflow that returns nothing at all exposed as a published web service. We ask one user to execute this operation as many times as he can in one minute (simulated with SoapUI). First we set the hashing algorithm to BCrypt, then we set it to SSHA256. Any extra overhead here (on top of establishing the connection, building the XML message and so forth) is basically the hashing algorithm, as the operation should take near zero milliseconds and there is no result. So that leaves only the login, or, more precisely, the hashing of the password.

| **Hashing algorithm** | **Total operations executed** | **Operation per second** | **Overhead in milliseconds** |
| --- | --- | --- | --- |
| BCrypt | 654 | 10.88 | 91.9 |
| SSHA256 | 7163 | 119.36 | 8.4 |

So 80 milliseconds per operation is not that much, right? Well, that depends on how long the operation itself takes.

| Operation duration in seconds | Operations per hour (BCrypt) | Operations per hour (SSHA256) | Difference % |
| --- | --- | --- | --- |
| 0.1 | 18760 | 33210 | +77% |
| 0.25 | 10529 | 13932 | +32% |
| 1 | 3297 | 3570 | +8% |
| 5 | 707 | 719 | +1.67% |
| 15 | 239 | 240 | +0.5% |

The difference is noticeable when the operation takes less time. So if you expect a very high amount of concurrency in operations where hashing takes place (most commonly any place where login operations are involved), you might want to consider changing your hashing algorithm.

## 4 Conclusion
One final, but very important note to remember when changing hashing algorithms is that any hashed attribute (like the System$User password attribute) has its algorithm set on hashing. In other words, for the hashing type to take effect, any existing hashed attribute will have to be reset using the new hashing type.
