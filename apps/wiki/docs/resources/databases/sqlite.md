---
title: SQLite
---

# [SQLite](https://www.sqlite.org)

## Getting Started

- [SQLite In 5 Minutes Or Less](https://www.sqlite.org/quickstart.html) - A very quick introduction to programming with SQLite.

## Documentations

Important links to official documentations:

- [Write-Ahead Log (WAL) Mode](https://www.sqlite.org/wal.html) - Transaction control using a write-ahead log offers more concurrency and is often faster than the default rollback transactions. This document explains how to use WAL mode for improved performance.
- [Command-Line Shell (sqlite3.exe)](https://www.sqlite.org/cli.html) - Notes on using the "sqlite3.exe" command-line interface that can be used to create, modify, and query arbitrary SQLite database files.
- [Overview Of The Optimizer](https://www.sqlite.org/optoverview.html) - A quick overview of the various query optimizations that are attempted by the SQLite code generator.
- [Quirks, Caveats, and Gotchas In SQLite](https://www.sqlite.org/quirks.html)

## Articles and Blog Posts

- [SQLite Internals: How The World's Most Used Database Works](https://www.compileralchemy.com/books/sqlite-internals/)
- [35% Faster Than The Filesystem](https://www.sqlite.org/fasterthanfs.html) - This article points out that reading blobs out of an SQLite database is often faster than reading the same blobs from individual files in the filesystem.
- [Scaling SQLite to 4M QPS on a Single Server (EC2 vs Bare Metal) (2018)](https://blog.expensify.com/2018/01/08/scaling-sqlite-to-4m-qps-on-a-single-server/)
- [SQLite Internals: Pages & B-trees](https://fly.io/blog/sqlite-internals-btree/)
- [How the SQLite Virtual Machine Works](https://fly.io/blog/sqlite-virtual-machine/)
- [How SQLite Scales Read Concurrency](https://fly.io/blog/sqlite-internals-wal/)
- [How SQLite Helps You Do ACID](https://fly.io/blog/sqlite-internals-rollback-journal/)
- [SQLite Renaissance](https://matt-rickard.com/sqlite-renaissance) - Address the question: "What's the reason SQLite has been a trending topic for data/backend use cases recently (2022)? It's been around for 20+ years. I'm just curious if something about our world fundamentally changed.". TL;DR:
  > 1. embeddable at the edge (WASM, etc.)
  >
  > 2. easy connection pooling for serverless (flatfile)
  >
  > 3. embeddable at the runtime (browser, -as-a-library, etc.)
  >
  > 4. NFS getting faster, so easy and cheap alternative for blogs, etc.
- [Consider SQLite](https://blog.wesleyac.com/posts/consider-sqlite)
- [I'm All-In on Server-Side SQLite](https://fly.io/blog/all-in-on-sqlite-litestream/)
- [SQLite is not a toy database](https://antonz.org/sqlite-is-not-a-toy-database/)
- [One process programming notes (with Go and SQLite)](https://crawshaw.io/blog/one-process-programming-notes)
- [A database for 2022](https://tailscale.com/blog/database-for-2022/)
- [Hosting SQLite databases on Github Pages or any static file hoster](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/)
- [One-liner for running queries against CSV files with SQLite](https://til.simonwillison.net/sqlite/one-line-csv-operations)
- [Towards Inserting One Billion Rows in SQLite Under A Minute](https://avi.im/blag/2021/fast-sqlite-inserts/)
- [Inserting 130M SQLite Rows per Minute...from a Scripting Language](https://blog.metaobject.com/2021/07/inserting-130m-sqlite-rows-per.html)
- [JSON and virtual columns in SQLite](https://antonz.org/json-virtual-columns/)
- [CoreRecursive Podcast: The Untold Story of SQLite With Richard Hipp](https://corecursive.com/066-sqlite-with-richard-hipp/)
- [A Minimalist Guide to SQLite](https://tech.marksblogg.com/sqlite3-tutorial-and-guide.html)
- [SQLite Wasm in the browser backed by the Origin Private File System](https://developer.chrome.com/blog/sqlite-wasm-in-the-browser-backed-by-the-origin-private-file-system/) - Use SQLite to handle all your storage needs performantly on the web. Finally!
- [SQLite or PostgreSQL? It's Complicated!](https://www.twilio.com/blog/sqlite-postgresql-complicated)
- [Store SQLite in Cloudflare Durable Objects](https://ma.rkusa.st/store-sqlite-in-cloudflare-durable-objects)
- [Replacing Elasticsearch with Rust and SQLite](https://nickb.dev/blog/replacing-elasticsearch-with-rust-and-sqlite/)
- [Exploring search relevance algorithms with SQLite](https://simonwillison.net/2019/Jan/7/exploring-search-relevance-algorithms-sqlite/)
- [SQLite's automatic indexes](https://misfra.me/2022/sqlite-automatic-indexes/)
- [Writing a Custom SQLite Function (in C) - Part 1](https://www.openmymind.net/Writing-A-Custom-Sqlite-Function-Part-1/)
- [SQLite-based databases on the postgres protocol](https://blog.chiselstrike.com/sqlite-based-databases-on-the-postgres-protocol-yes-we-can-358e61171d65)
- [Benchmarking SQLite Performance in Go](https://www.golang.dk/articles/benchmarking-sqlite-performance-in-go)
- [SQLite has pretty limited builtin functions](https://datastation.multiprocess.io/blog/2022-08-21-sqlite-limited-builtin-functions.html)
- [SQLite performance tuning](https://phiresky.github.io/blog/2020/sqlite-performance-tuning/)

## Projects

- [benbjohnson/Litestream](https://github.com/benbjohnson/litestream) - Streaming replication for SQLite.
- [Introducing LiteFS](https://fly.io/blog/introducing-litefs/)
- [DuckDB](https://duckdb.org/) - An embeddable SQL database like SQLite, but supports Postgres features.
- [Static.wiki](https://github.com/segfall/static-wiki) - A read-only Wikipedia using only static assets, WASM, 43 GB SQLite file & no backend.
- [phiresky/sqlite-zstd](https://github.com/phiresky/sqlite-zstd) - Reduce SQLite database size by up to 80% with transparent compression.
- [benbjohnson/Postlite](https://github.com/benbjohnson/postlite) - Postgres wire compatible SQLite proxy.
- [Datasette: instantly create and publish an API for your SQLite databases](https://simonwillison.net/2017/Nov/13/datasette/)
- [nalgeon/sqlite-plus](https://github.com/nalgeon/sqlite-plus/) - A set of missing SQLite extensions.
- [NocoDB](https://github.com/nocodb/nocodb) - Open source Airtable alternative — Turns any MySQL, PostgreSQL, SQL Server, SQLite & MariaDB into a smart-spreadsheet.
- [asg017/sqlite-xsv](https://github.com/asg017/sqlite-xsv) - The fastest CSV SQLite extension, written in Rust.
- [libSQL](https://github.com/libsql/libsql) - A fork of SQLite that is both open source, and open contributions.
- [canonical/dqlite](https://github.com/canonical/dqlite) - Embeddable, replicated and fault tolerant SQL engine.
- [rqlite](https://github.com/rqlite/rqlite) - Lightweight, distributed relational database built on SQLite.

## Books

- [SQLite Database System Design and Implementation (2015)](https://books.google.com/books?id=OEJ1CQAAQBAJ) by Sibsankar Haldar - This book provides a comprehensive description of SQLite database system. It describes design principles, engineering trade-offs, implementation issues, and operations of SQLite. 

## Communities

### Tweets

- [SQLite has amazing full text search](https://twitter.com/SebastianSzturo/status/1515297367335247877)

### Videos

- [GopherCon 2021: Ben Johnson - Building Production Applications Using Go & SQLite](https://www.youtube.com/watch?v=XcAYkriuQ1o)

## SQLite Hackers

If you're intrested in building a SQLite clone from scratch, see my [database systems development notes](database-development.md#sqlite). Below are some good technical documentations you can reference while doing that.

- [How To Compile SQLite](https://www.sqlite.org/howtocompile.html) - Instructions and hints for compiling SQLite C code and integrating that code with your own application.
- Official technical and design docs:
  - [Architecture](https://www.sqlite.org/arch.html) - An architectural overview of the SQLite library, useful for those who want to hack the code.
  - [Virtual Filesystem](https://www.sqlite.org/vfs.html) - The "VFS" object is the interface between the SQLite core and the underlying operating system. Learn more about how the VFS object works and how to create new VFS objects from this article.
  - [SQLite File Format](https://www.sqlite.org/fileformat2.html) - A description of the format used for SQLite database and journal files, and other details required to create software to read and write SQLite databases without using SQLite.
  - [How SQLite Is Tested](https://www.sqlite.org/testing.html) -  The reliability and robustness of SQLite is achieved in large part by thorough and careful testing. This document identifies the many tests that occur before every release of SQLite.
- [How I found a bug in SQLite](https://www.philipotoole.com/how-i-found-a-bug-in-sqlite/)
- [sqlite-loadable-rs: A framework for building SQLite Extensions in Rust](https://observablehq.com/@asg017/introducing-sqlite-loadable-rs)
- [Extending SQLite with Rust](https://ricardoanderegg.com/posts/extending-sqlite-with-rust/)
- [What would SQLite look like if written in Rust? (blog series)](https://medium.com/the-polyglot-programmer/what-would-sqlite-would-look-like-if-written-in-rust-part-0-4fc192368984)
- [SQLite in Go, with and without cgo](https://datastation.multiprocess.io/blog/2022-05-12-sqlite-in-go-with-and-without-cgo.html)

## Experimental

- [HC-tree](https://sqlite.org/hctree/doc/hctree/doc/hctree/index.html) - A project attempting to develop a new database backend that improves upon regular SQLite: high-concurrency, support for replication, and beyond 16TiB database size limit.

## Research

### Papers

- [SQLite: Past, Present, and Future](https://vldb.org/pvldb/volumes/15/paper/SQLite%3A%20Past%2C%20Present%2C%20and%20Future) by University of Wisconsin-Madison and SQLite developers, 2022, VLDB - The paper compares SQLite and DuckDB, and describes some optimization work to make SQLite perform better for analytical queries. Related: [Notes on the SQLite DuckDB paper](https://simonwillison.net/2022/Sep/1/sqlite-duckdb-paper/) by Simon Willison.

## Lists

- [Awesome Series @ Planet Open Data](https://github.com/planetopendata/awesome-sqlite)
- [All things around SQLite](https://github.com/mindreframer/awesome-sqlite)
