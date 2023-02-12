---
title: PostgreSQL
---

# [PostgreSQL](https://www.postgresql.org)

## Articles and Blog Posts

- [Postgres Indexes for Newbies](https://www.crunchydata.com/blog/postgres-indexes-for-newbies)
- [Debugging the Postgres query planner](https://gocardless.com/blog/debugging-the-postgres-query-planner/)
- [Query Optimization in Postgres with `pg_stat_statements`](https://www.crunchydata.com/blog/tentative-smarter-query-optimization-in-postgres-starts-with-pg_stat_statements)
- [Trace Query Processing Internals with Debugger](https://www.highgo.ca/2019/10/03/trace-query-processing-internals-with-debugger/)
- [PostgreSQL Connection Pooling: Part 1 – Pros & Cons](https://scalegrid.io/blog/postgresql-connection-pooling-part-1-pros-and-cons/)
- [Your Guide to Connection Management in Postgres](https://www.crunchydata.com/blog/your-guide-to-connection-management-in-postgres)
- [How To Move a PostgreSQL Data Directory to a New Location on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-move-a-postgresql-data-directory-to-a-new-location-on-ubuntu-16-04)
- [Postgres In Production with Patroni & TimescaleDB— Our Experiences](https://medium.com/platformer-blog/postgres-in-production-with-patroni-timescaledb-our-experiences-e5f97bc487c9)
- [Postgres 14: It's The Little Things](https://www.crunchydata.com/blog/postgres-14-its-the-little-things)
- [A look at Postgres 14: Performance and Monitoring Improvements](https://pganalyze.com/blog/postgres-14-performance-monitoring)
- [How to interpret PostgreSQL EXPLAIN ANALYZE output](https://www.cybertec-postgresql.com/en/how-to-interpret-postgresql-explain-analyze-output/)
- [Zero downtime Postgres migration, done right](https://archive.is/20220627032837/https://engineering.theblueground.com/blog/zero-downtime-postgres-migration-done-right/) - A step by step guide to migrate your Postgres databases in production environments with zero downtime.
- [Do You Really Need Redis? How to Get Away with Just PostgreSQL](https://spin.atomicobject.com/2021/02/04/redis-postgresql/)
- [Hierarchical Structures in PostgreSQL](https://hoverbear.org/blog/postgresql-hierarchical-structures/)
- [Globally Distributed Postgres](https://fly.io/blog/globally-distributed-postgres/)
- [PostgreSQL, memory and the cloud](https://sosna.de/posts/pgaas-memory-overcommit/)
- [How `pg_sleep` works in PostgreSQL](https://database.guide/how-pg_sleep-works-in-postgresql/)
- [Exploring the Postgres GIN index](https://hashrocket.com/blog/posts/exploring-postgres-gin-index)
- [Index bloat reduced in PostgreSQL v14](https://www.cybertec-postgresql.com/en/index-bloat-reduced-in-postgresql-v14/)
- [Herding elephants: Lessons learned from sharding Postgres at Notion](https://www.notion.so/blog/sharding-postgres-at-notion)
- [How Postgres Audit Tables Saved Us From Taking Down Production](https://www.heap.io/blog/how-postgres-audit-tables-saved-us-from-taking-down-production)
- [How we deconstructed the Postgres planner to find indexing opportunities](https://pganalyze.com/blog/deconstructing-the-postgres-planner)
- [How We Went All In on sqlc/pgx for Postgres + Go](https://brandur.org/sqlc)
- [What is the new LZ4 TOAST compression in PostgreSQL 14, and how fast is it?](https://www.postgresql.fastware.com/blog/what-is-the-new-lz4-toast-compression-in-postgresql-14)
- [Lesser Known PostgreSQL Features](https://hakibenita.com/postgresql-unknown-features)
- [Ephemeral Postgres Databases](https://eradman.com/posts/ephemeral-databases.html)
- [Back to basics: Writing an application using Go and PostgreSQL](https://henvic.dev/posts/go-postgres/)
- [How Postgres Stores Rows](https://ketansingh.me/posts/how-postgres-stores-rows/)
- [When Postgres blocks: 7 tips for dealing with locks](https://www.citusdata.com/blog/2018/02/22/seven-tips-for-dealing-with-postgres-locks/)
- [PostgreSQL Schema Change Guide](https://gist.github.com/jcoleman/1e6ad1bf8de454c166da94b67537758b)
- [pg-osc: Zero downtime schema changes in PostgreSQL](https://www.shayon.dev/post/2022/47/pg-osc-zero-downtime-schema-changes-in-postgresql/) - Non blocking and zero downtime ALTER statements in PostgreSQL with pg-osc.
- [Postgres Auditing in 150 lines of SQL](https://supabase.com/blog/audit)
- [Let's build a distributed Postgres proof of concept](https://notes.eatonphil.com/distributed-postgres.html)
- [Neon - Serverless Postgres built for the cloud](https://neon.tech/blog/hello-world)
- [How Retool upgraded our 4 TB main application PostgreSQL database](https://retool.com/blog/how-we-upgraded-postgresql-database/)
- [How to Find and Stop Running Queries on PostgreSQL](https://adamj.eu/tech/2022/06/20/how-to-find-and-stop-running-queries-on-postgresql/)
- [Postgres Full-Text Search: A Search Engine in a Database](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database)
- [Postgres 15 improves UNIQUE and NULL](https://blog.rustprooflabs.com/2022/07/postgres-15-unique-improvement-with-null)
- [Learn Postgres at the Playground](https://www.crunchydata.com/blog/learn-postgres-at-the-playground) - Postgres compiled to WASM running in browser.
- [Writing your own PostgreSQL driver in Go](https://medium.com/scum-gazeta/writing-your-own-postgresql-driver-ebd5fd6d187d) - Because Postgres protocol is well documented, the complexity to write your own driver (or modify an existing one) is massively reduced. And this article provides a great starting point.
- [Partitioning in Postgres, 2022 edition](https://brandur.org/fragments/postgres-partitioning-2022)
- [Postgres Full Text Search vs the rest](https://supabase.com/blog/postgres-full-text-search-vs-the-rest)
- [Debugging PostgreSQL performance, the hard way](https://www.justwatch.com/blog/post/debugging-postgresql-performance-the-hard-way/)
- [Index Merges vs Composite Indexes in Postgres and MySQL](https://sirupsen.com/index-merges)
- [pg_CRDT - an experimental CRDT extension for Postgres](https://supabase.com/blog/postgres-crdt)
- [Just use Postgres for everything](https://www.amazingcto.com/postgres-for-everything/)
- [I Migrated from a Postgres Cluster to Distributed SQLite with LiteFS](https://kentcdodds.com/blog/i-migrated-from-a-postgres-cluster-to-distributed-sqlite-with-litefs)
- [Features I'd like in PostgreSQL](https://gilslotd.com/blog/features_id_postgresql)
- [Storing OpenAI embeddings in Postgres with pgvector](https://supabase.com/blog/openai-embeddings-postgres-vector)
- [Five Tips For a Healthier Postgres Database in the New Year](https://www.crunchydata.com/blog/five-tips-for-a-healthier-postgres-database-in-the-new-year)

## Projects

- [pg-mem](https://github.com/oguimbal/pg-mem) - An in memory postgres DB instance for your unit tests.
- [pg_hint_plan](https://pghintplan.osdn.jp/pg_hint_plan.html) - Controls execution plan with hinting phrases in comment of special form.
- [Patroni](https://github.com/zalando/patroni) - A template for PostgreSQL High Availability with Etcd, Consul, ZooKeeper, or Kubernetes.
  > **Note to Citus users:** Starting from 3.0 Patroni nicely integrates with the Citus database extension to Postgres. Please check the Citus support page in the Patroni documentation for more info about how to use Patroni high availability together with a Citus distributed cluster.
  > **Note to Kubernetes users:** Patroni can run natively on top of Kubernetes. Take a look at the Kubernetes chapter of the Patroni documentation.
- [High Availability Postgres on Fly.io](https://github.com/fly-apps/postgres-ha) - Postgres + Stolon for HA clusters as Fly apps.
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - Collect and display information and stats from a running PostgreSQL server.
- [yandex/odyssey](https://github.com/yandex/odyssey) - Scalable PostgreSQL connection pooler.
- [jackc/pgx](https://github.com/jackc/pgx) - PostgreSQL driver and toolkit for Go.
- [Reshape](https://github.com/fabianlindfors/reshape) - An easy-to-use, zero-downtime schema migration tool for Postgres.
- [Hydra](https://github.com/hydradatabase/hydra) - The open source Snowflake alternative. OLAP Postgres. Query any database via Postgres.
- [OrioleDB](https://github.com/orioledb/orioledb) - Building a modern cloud-native storage engine (... and solving some PostgreSQL wicked problems).
- [Vectorized Executor](https://github.com/citusdata/postgres_vectorization_test) - Speeding up PostgreSQL through vectorized execution.
- [migra](https://github.com/djrobstep/migra) - Like diff but for PostgreSQL schemas.
- [pgcli](https://github.com/dbcli/pgcli) - Postgres CLI with autocompletion and syntax highlighting.
- [WaterbugDB](https://github.com/eatonphil/waterbugdb) - Raft + Postgres parser + Postgres wire protocol + Boltdb + ? = Distributed PostgreSQL.
- [HypoPG](https://github.com/HypoPG/hypopg) - Hypothetical Indexes for PostgreSQL.
- [RUM](https://github.com/postgrespro/rum) - RUM access method - inverted index with additional information in posting lists.
- [pgvm](https://github.com/guedes/pgvm) - PostgreSQL Version Manager.
- [pgBackRest](https://github.com/pgbackrest/pgbackrest) - Reliable PostgreSQL backup & restore.
- [repmgr](https://github.com/EnterpriseDB/repmgr) - A lightweight replication manager for PostgreSQL.

## Books

- [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - A deep dive into the server mechanics.

## Lists

- [Awesome Postgres](https://github.com/dhamaniasad/awesome-postgres) - A curated list of awesome PostgreSQL software, libraries, tools and resources, inspired by awesome-mysql.
