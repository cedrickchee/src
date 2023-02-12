---
title: Database Development
---

# Database Development

## Communities

### Reddit

- [Getting started with database development (/r/databasedevelopment)](https://r.nf/r/databasedevelopment/comments/unj8d1/getting_started_with_database_development/)

## Articles and Blog Posts

- [SQLite is really easy to compile](https://jvns.ca/blog/2019/10/28/sqlite-is-really-easy-to-compile/)
- [SimpleDB: A Basic RDBMS Built From Scratch](https://www.awelm.com/posts/simple-db/)
- [Extending SQLite with Rust to support Excel files as virtual tables](https://sergey.khabibullin.com/sqlite-extensions-in-rust/)
- [Log Structured Merge Trees (LSM)](http://www.benstopford.com/2015/02/14/log-structured-merge-trees/)
- [Tutorial: Building a database from Scratch](https://blog.plaintextnerds.com/tutorial-building-a-database-from-scratch-962f3afef326)
- [How to Build a Relational Database From Scratch](https://medium.com/swlh/how-to-build-a-relational-database-from-scratch-e208061027c7)

## PostgreSQL

- Blog posts:
  - [Following a Select Statement Through Postgres Internals](https://patshaughnessy.net/2014/10/13/following-a-select-statement-through-postgres-internals)
  - [Looking Inside Postgres at a GiST Index](https://patshaughnessy.net/2017/12/15/looking-inside-postgres-at-a-gist-index)
  - [Introduction to PostgreSQL physical storage](http://rachbelaid.com/introduction-to-postgres-physical-storage/)
  - [Why We Built YugabyteDB by Reusing the PostgreSQL Query Layer](https://www.yugabyte.com/blog/why-we-built-yugabytedb-by-reusing-the-postgresql-query-layer/)
- Books:
  - [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) for database administrators and system developers.
  - [My summary of "The Art of PostgreSQL"](https://benjaminwuethrich.dev/2020-04-05-taop-summary.html)
- Documentations:
  - [PostgreSQL Architecture](https://en.wikibooks.org/wiki/PostgreSQL/Architecture)
- Projects:
  - [pgx](https://github.com/tcdi/pgx) - Build Postgres Extensions with Rust!

## SQLite

- [Let's Build a Simple Database](https://cstack.github.io/db_tutorial/) by cstack - Writing a SQLite clone from scratch in C.
- [chidb](http://chi.cs.uchicago.edu/chidb/index.html) is a programming assignments developed at the UChicago for CS undergraduate courses. chidb is a didactic relational database management system (RDBMS) designed for teaching how a RDBMS is built internally, from the data organization in files all the way up to the SQL parser and query optimizer. The design of chidb is based on SQLite, with several simplifying assumptions that make it possible to develop a complete chidb implementation over the course of a quarter or semester.
- Tools:
  - [Sqlite3 Page Explorer](https://github.com/siara-cc/sqlite3_page_explorer) - Cross Platform app to explore internal organisation of tables and indices.
- [Go SQL DB](https://github.com/auxten/go-sqldb) - A pure Golang SQL database for database theory research.

## Theory and Research

ComSci theory and research.

### Papers

- [Bao: Making Learned Query Optimization Practical (PDF)](https://dl.acm.org/doi/pdf/10.1145/3448016.3452838) by MIT et al., 2021.
- [On Automatic Database Management System Tuning Using Machine Learning (PDF)](https://ottertune.com/wp-content/uploads/2021/12/vanaken-thesis2021.pdf) by Dana Van Aken, CMU-CS, 2017. The research formed the foundation of OtterTune automatic database tuning service.
- [The Design of Postgres (PDF)](https://dsf.berkeley.edu/papers/ERL-M85-95.pdf) by Michael Stonebraker and Lawrence A. Rowe, 1986.

### Courses

- [CMU 15-445/645 Databases Systems (Fall 2020)](https://archive.ph/CEN6J) taught by Prof. Andy Pavlo.
