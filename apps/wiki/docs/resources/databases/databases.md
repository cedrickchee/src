---
title: "Databases"
data: 2023-02-12
tags:
- database
- slip-box
- seed
---

# Databases

Broadly, a database is a large, integrated collection of data stored and accessed electronically.

A database management system (DBMS) is a software system designed to store, manage, and facilitate access to databases.

Data is at the heart of most significant programs, but few understand how database systems actually work.

I use:
- [PostgreSQL](postgresql)
- [SQlite](sqlite)
- [MongoDB](https://github.com/mongodb/mongo)
- [ClickHouse](https://github.com/ClickHouse/ClickHouse)
- [RocksDB](https://github.com/facebook/rocksdb)
- [LevelDB](https://github.com/google/leveldb)
- [RethinkDB](https://www.rethinkdb.com/)
- [TimescaleDB](https://www.timescale.com/)
- [InfluxDB](https://github.com/influxdata/influxdb)
- [Prometheus](https://github.com/prometheus/prometheus)
- [etcd](https://github.com/etcd-io/etcd)
- [Firestore](https://cloud.google.com/firestore) 
- [Citus](https://github.com/citusdata/citus)
- [Redis](redis)
- [Elasticsearch](https://en.wikipedia.org/wiki/Elasticsearch)
- [Apache Kafka](https://en.wikipedia.org/wiki/Apache_Kafka)
- [Supabase](https://github.com/supabase/supabase)
- [Prisma](https://www.prisma.io/)

## Links

- [Things you should know about databases](https://architecturenotes.co/things-you-should-know-about-databases/)
- [Things I Wished More Developers Knew About Databases (2020)](https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78)
- [Databases in 2022: A Year in Review](https://ottertune.com/blog/2022-databases-retrospective/)
- [Building a database in the 2020s](https://me.0xffff.me/build-database-in-2020s.html)
- [The B-Tree, LSM-Tree, and the Bw-Tree in Between](https://photondb.io/2022/08/15/bw-tree.html)
- [A Database Without Dynamic Memory Allocation](https://tigerbeetle.com/blog/a-database-without-dynamic-memory/)
- [Retrospection and Learnings from Dgraph Labs](https://manishrjain.com/dgraph-labs-learnings)
- [How Discord Stores Billions of Messages](https://discord.com/blog/how-discord-stores-billions-of-messages)
- [Reddit's database has two tables](https://kevin.burke.dev/kevin/reddits-database-has-two-tables/)
- [Overview of Consistency Levels in Database Systems](https://dbmsmusings.blogspot.com/2019/07/overview-of-consistency-levels-in.html)
- [Soft Deletion Probably Isn't Worth It](https://brandur.org/soft-deletion)
- [Offline data access: a dream come true?](https://blog.chiselstrike.com/offline-data-access-a-dream-come-true-64362de1a981)
- [Code in database vs. code in application](https://brandur.org/fragments/code-database-vs-app)
- [Ideas on better database design](https://github.com/alextanhongpin/database-design)
- [Super-Structured Data](https://www.brimdata.io/blog/super-structured-data/) - Rethinking the schema.
- [A Gentle Introduction to Vector Databases](https://frankzliu.com/blog/a-gentle-introduction-to-vector-databases)
- [42 things I learned from building a production database](https://maheshba.bitbucket.io/blog/2021/10/19/42Things.html)
- [A terrible schema from a clueless programmer](https://rachelbythebay.com/w/2021/11/06/sql/)
- [Spending $5k to learn how database indexes work](https://www.briananglin.me/posts/spending-5k-to-learn-how-database-indexes-work/)
- [How we built a forever-free serverless SQL database](https://www.cockroachlabs.com/blog/how-we-built-cockroachdb-serverless/)
- [Offline First Database Comparison](https://github.com/pubkey/client-side-databases) - An implementation of the exact same app in Firestore, AWS Datastore, PouchDB, RxDB and WatermelonDB.
- [Relational Databases Aren’t Dinosaurs, They're Sharks](https://www.simplethread.com/relational-databases-arent-dinosaurs-theyre-sharks/)
- [Partitioning GitHub’s relational databases to handle scale](https://github.blog/2021-09-27-partitioning-githubs-relational-databases-scale/)
- [Real world database latency](https://fauna.com/blog/real-world-database-latency)
- [Write a time-series database engine from scratch](https://nakabonne.dev/posts/write-tsdb-from-scratch/)
- [The pedantic checklist for changing your data model in a web application](https://rtpg.co/2021/06/07/changes-checklist.html)
- [Common data model mistakes made by startups](https://www.metabase.com/learn/analytics/data-model-mistakes)
- [An unlikely database migration](https://tailscale.com/blog/an-unlikely-database-migration/)
- [If All You Have Is a Database, Everything Looks Like a Nail](https://pathelland.substack.com/p/if-all-you-have-is-a-database-everything) - Databases are fabulous resources.  Of course, we’ll abuse them in ways that cause challenges.
- [We deleted the production database by accident](https://keepthescore.co/blog/posts/deleting_the_production_database/)
- [The database I wish I had (2020)](https://euandre.org/2020/08/31/the-database-i-wish-i-had.html)
- [What are databases?](https://www.prisma.io/dataguide/intro/what-are-databases) from Prisma's Data Guide.
- [Recent database technology that should be on your radar (part 1)](https://lucperkins.dev/blog/new-db-tech-1/)

## Books

- [_Use The Index, Luke_](https://use-the-index-luke.com/) by Markus Winand - A site explaining SQL indexing to developers—no crap about administration.
- [SQL Performance Explained](https://sql-performance-explained.com/) by Markus Winand - Everything developers need to know about SQL performance.
- [Designing Data-Intensive Applications (DDIA)](https://dataintensive.net/) - The big ideas behind reliable, scalable, and maintainable systems. ([review](https://henrikwarne.com/2019/07/27/book-review-designing-data-intensive-applications/), [review](https://tech.marksblogg.com/designing-data-intensive-applications-review.html), [notes](https://github.com/ResidentMario/designing-data-intensive-applications-notes), [literature references](https://github.com/ept/ddia-references), [Tweet](https://twitter.com/GergelyOrosz/status/1328011263172087809))
- [Database System Concepts](https://www.db-book.com/)

## Theory and Research

CS theory and research.

### Papers

- [Closing the B-tree vs. LSM-tree Write Amplification Gap on Modern Storage Hardware with Built-in Transparent Compression](https://arxiv.org/abs/2107.13987) by ScaleFlux et al., 2021, VLDB.
- [LSI: A Learned Secondary Index Structure](https://arxiv.org/abs/2205.05769) by MIT CSAIL et al., aiDM 2022.

### Readings

- [Readings in Database Systems](http://www.redbook.io/) (commonly known as the "Red Book") written by Peter Bailis, Joseph M. Hellerstein, Michael Stonebraker, editors
- [database-system-readings](https://github.com/Sunt-ing/database-system-readings) is a curated reading list about database systems, including personal digests of books/papers/blogs.

## Newsletters

- [DB Weekly](https://dbweekly.com/) - A weekly round-up of database technology news and articles covering new developments, SQL, NoSQL, document databases, graph databases, and more.

### Lists

- [Database Systems Resources](https://github.com/paulosman/database-systems) - This repo contains a list of resources that are hopefully useful for people who want to learn more about database systems. Resources include papers, university courses, blog posts, talks, and other sources.
- [Awesome Database Tools](https://github.com/mgramin/awesome-db-tools) - Everything that makes working with databases easier.
- [Awesome Database Learning](https://github.com/pingcap/awesome-database-learning) - A list of learning materials to understand databases internals, including but not limited to papers, blogs, courses, and talks.
