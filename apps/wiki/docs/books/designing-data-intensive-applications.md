# Designing Data-Intensive Applications

by Martin Kleppmann

## Chapter 1: Reliable, Scalable, and Maintainable Applications

- Many applications are data-intensive and not compute intensive.

### Thinking About Data Systems

- This book focuses on three main concerns: reliability, scalability, and maintainability.

### Reliability

- Reliability means the system continues to work correctly, even when things go wrong.

#### Hardware Faults

- TODO

#### Software Errors

- TODO

#### Human Errors

- TODO

### Scalability

- Scalability is the term we use to describe a system's ability to cope with increased load.

#### Describing Load

- TODO

#### Describing Performance

- Look at what happens when load increases.
  - When you increase a load parameter and keep system resources fixed, how is the performance of your system affected?
  - When you increase a load parameter, how much do you need to increase the resources if you want to keep performance unchanged?
- Response time what the client sees.
- Latency.
- Tail latencies are important because they directly affect users' experience of the service.
- Even if you call multiple backend services in parallel, the end-user request must wait for the slowest of the parallel calls to complete.
- The right way of aggregating response time data is to add the histograms.

#### Approaches for Coping with Load

- Vertical scaling is moving to a more powerful machine. Horizontal scaling distributes the load across multiple smaller machines.
- In an early-stage startup it's more important to be able to iterate quickly on product features than to scale beyond some hypothetical future load.

### Maintainability

- The majority of the cost of software is not in its initial development, but its ongoing maintenance.
- Three important design principles for maintainability are:
  - Operability: Make it easy for the operations teams to keep the system running smoothly.
  - Simplicity: Make it easy for new engineers to understand the system by removing complexity.
  - Evolvability (or extensibility): Make it easy for engineers to adapt the system to unanticipated use cases as requirements change.

#### Operability: Making Life Easy for Operations

- TODO

#### Simplicity: Managing Complexity

- Making a system simpler does not necessarily mean reducing its functionality; it can also mean removing *accidental complexity*.
- Accidental complexity is complexity that is not inherent in the problem that the software solves, but arises only from the implementation.
- Good abstractions are one of the best tools for removing accidental complexity by hiding implementation details, but finding good abstractions is very hard.

#### Evolvability: Making Change Easy

- Simple and easy-to-understand systems are usually easier to modify than complex ones.

### Summary

* Functional requirements are what an application should do.
* Nonfunctional requirements are general properties like security, reliability, compliance, scalability, compatibility, and maintainability.

## Chapter 2: Data Models and Query Languages

- Data models are the most important part of developing software, because they affect not only how the software is written, but how we think about the problem that we're solving.
- TODO

### Relational Model Versus Document Model

#### The Birth of NoSQL

- TODO

#### The Object-Relational Mismatch

- Impedance mismatch is the disconnect between objects in the application code and the database model of tables, rows, and columns.
- A JSON representation of a document-oriented database has better locality than an equivalent multi-table schema.

#### Many-to-One and Many-to-Many Relationships

- TODO

#### Are Document Databases Repeating History?

##### The relational model

- TODO

##### Comparison to document databases

- TODO

#### Relational Versus Document Databases Today

- TODO

##### Which data model leads to simpler application code?

- TODO

##### Schema flexibility in the document model

- TODO

##### Data locality for queries

- TODO

### Query Languages for Data

- TODO

#### MapReduce Querying

- TODO

### Graph-Like Data Models

#### Property Graphs

- TODO

#### Graph Queries in SQL

- TODO

#### Triple-Stores and SPARQL

- TODO

#### The Foundation: Datalog

- TODO

## Chapter 3: Storage and Retrieval

- There is a big difference between storage engines optimized for transactional workloads and those optimized for analytics.

### Data Structures That Power Your Database

- *Log* is defined as an append-only sequence of records. It doesn't have to be human-readable, and instead might be binary.
- Well-chosen indexes speed up read queries, but every index slows down writes, because the index also needs to be updated every time data is written.

#### Hash Indexes

- TODO

#### SSTables and LSM-Trees

- TODO

##### Constructing and maintaining SSTables

- TODO

##### Making an LSM-tree out of SSTables

* Storage engines based on the principle of merging and compacting sorted files are called LSM (Log-Structured Merge) storage engines.

##### Performance optimizations

- TODO

#### B-Trees

- B-trees remain the standard index implementation in almost all relational databases, and many non-relational databases use them too.
- B-trees break down the database into fixed-size *blocks* or *pages* (usually 4KB) and read or write one page at a time. This maps closely to the underlying disk hardware.
- TODO

##### Making B-trees reliable

- TODO

##### B-tree optimizations

- TODO

#### Comparing B-Trees and LSM-Trees

- LSM-trees are typically faster for writes, whereas B-trees are thought to be faster for reads.

##### Advantages of LSM-trees

- TODO

##### Downsides of LSM-trees

- TODO

#### Other Indexing Structures

##### Storing values within the index

- TODO

##### Multi-column indexes

- TODO

##### Full-text search and fuzzy indexes

* In Lucene, the in-memory index is a finite state automaton over the characters in the keys, similar to a trie.
* This automaton can be transformed into a *Levenshtein automaton*, which supports efficient search for words within a given edit distance.

##### Keeping everything in memory

* In-memory databases are faster because they avoid the overheads of encoding in-memory data structures in a form that can be written to disk.
* In-memory databases are not faster because they don't need to read from disk – the operating system caches recently used disk blocks in memory anyway.

### Transaction Processing or Analytics?

- TODO

#### Data Warehousing

- TODO

##### The divergence between OLTP databases and data warehouses

- TODO

#### Stars and Snowflakes: Schemas for Analytics

- TODO

### Column-Oriented Storage

- Although fact tables are often over 100 columns wide, a typical data warehouse query only accesses 4 or 5 of them at one time.
- *Column-oriented storage* stores all the values from each column together, instead of all the values from each row together.
- The column-oriented storage layout relies on each column file containing the rows in the same order.

#### Column Compression

- TODO

##### Memory bandwidth and vectorized processing

- TODO

#### Sort Order in Column Storage

- TODO

##### Several different sort orders

- TODO

#### Writing to Column-Oriented Storage

- TODO

#### Aggregation: Data Cubes and Materialized Views

- TODO

### Summary

- TODO

## Chapter 4: Encoding and Evolution

- TODO

### Formats for Encoding Data

#### Language-Specific Formats

- TODO

#### JSON, XML, and Binary Variants

- TODO

##### Binary encoding

- TODO

#### Thrift and Protocol Buffers

- TODO

##### Field tags and schema evolution

- TODO

##### Datatypes and schema evolution

- TODO

#### Avro

- TODO

##### The writer's schema and the reader's schema

- TODO

##### Schema evolution rules

- TODO

##### Dynamically generated schemas

- TODO

#### The Merits of Schemas

- TODO

### Modes of Dataflow

#### Dataflow through Databases

- TODO

##### Different values written at different times

- TODO

#### Dataflow Through Services: REST and RPC

- TODO

##### Web services

- TODO

##### The problems with remote procedure calls (RPCs)

- TODO

##### Current directions for RPC

- TODO

##### Data encoding and evolution for RPC

- TODO

#### Message-Passing Dataflow

- TODO

##### Message brokers

- TODO

##### Distributed actor frameworks

- TODO

## Chapter 5: Replication

- Reasons to replicate data include reducing access latency by moving data geographically close to users, increasing availability, and increasing read throughput.
- All the difficulty in replication lies in handling *changes* to replicated data.

### Leaders and Followers

- *Leader-based replication*, or *active/passive replication*, is the most common solution to ensuring that data is persisted to all replicas.
- Whenever the leader writes new data to its local storage, it also sends the data change to each of its followers via a *replication log* or *change stream*.

#### Synchronous Versus Asynchronous Replication

- TODO

#### Setting Up New Followers

- TODO

#### Handling Node Outages

##### Follower failure: Catch-up recovery

- The follower can connect to the leader and, via the replication log, consume all data changes that occurred while the follower was disconnected.

##### Leader failure: Failover

- A *failover* requires promoting one follower as the new leader, reconfiguring clients to send data to the new leader, and reconfiguring other followers to consume data changes from the new leader.
- TODO

#### Implementation of Replication Logs

##### Statement-based replication

- Replicating every write request (statement) from a leader to its followers has many edge cases (e.g. non-determinism from `NOW()` or `RAND()`) and is not preferred.

##### Write-ahead log (WAL) shipping

- The WAL details which bytes were changed in which blocks. It's thus a poor choice for a replication log, e.g. you cannot run different versions of the database on leaders and followers.

##### Logical (row-based) log replication

- A logical log is a sequence of records describing writes to database tables with row granularity. This is the approach MySQL's binlog uses.
- Logical logs are decoupled from storage engine internals and therefore backward compatible, and are also easier for external applications to parse.

##### Trigger-based replication

- TODO

### Problems with Replication Lag

- TODO

#### Reading Your Own Writes

- TODO

#### Monotonic Reads

- TODO

#### Consistent Prefix Reads

- TODO

#### Solutions for Replication Lag

- TODO

### Multi-Leader Replication

- TODO

#### Use Cases for Multi-Leader Replication

##### Multi-datacenter operation

- TODO
##### Clients with offline operation

- TODO

#### Handling Write Conflicts

##### Synchronous versus asynchronous conflict detection

- TODO

##### Converging toward a consistent state

- TODO

##### Custom conflict resolution logic

* *Conflict-free replicated data types* (CDRTs) are data structures (e.g. sets, maps, ordered lists, etc) that automatically resolve conflicts in sensible ways.
* *Mergeable persistent data structures* track history explicitly and use a three-way merge function (similar to Git).
* *Operational transformations* are for concurrent editing of an ordered list of items, and are used by Etherpad and Google Docs.

#### Multi-Leader Replication Topologies

- TODO

### Leaderless Replication

- TODO

#### Writing to the Database When a Node is Down

- TODO

##### Read repair and anti-entropy

- TODO

##### Quorums for reading and writing

- TODO

#### Limitations of Quorum Consistency

- TODO

##### Monitoring staleness

- TODO

#### Sloppy Quorums and Hinted Handoff

- TODO

#### Detecting Concurrent Writes

- TODO

##### Last write wins (discarding concurrent writes)

- TODO

##### The "happens-before" relationship and concurrency

- TODO

##### Capturing the happens-before relationship

- TODO

##### Merging concurrently written values

- TODO

##### Version vectors

- TODO

## Chapter 6: Partitioning

- TODO

### Partitioning and Replication

- TODO

### Partitioning of Key-Value Data

- TODO

#### Partitioning by Key Range

- TODO

#### Partitioning by Hash of Key

- TODO

#### Skewed Workloads and Relieving Hot Spots

- TODO

### Partitioning and Secondary Indexes

- TODO

#### Partitioning Secondary Indexes by Document

- TODO

#### Partitioning Secondary Indexes by Term

- TODO

### Rebalancing Partitions

- TODO

#### Strategies for Rebalancing

##### How not to do it: hash mod N

- TODO

##### Fixed number of partitions

- TODO

##### Dynamic partitioning

- TODO

##### Partitioning proportionally to nodes

- TODO

#### Operations: Automatic or Manual Rebalancing

- TODO

### Request Routing

- TODO

## Chapter 7: Transactions

- TODO

### The Slippery Concept of a Transaction

- TODO

#### The Meaning of ACID

- TODO

##### Atomicity

- TODO

##### Consistency

- TODO

##### Isolation

- TODO

##### Durability

- TODO

#### Single-Object and Multi-Object Operations

- TODO

##### Single-object writes

- TODO

##### The need for multi-object transactions

- TODO

##### Handling errors and aborts

- TODO

### Weak Isolation Levels

- TODO

#### Read Committed

- TODO

##### No dirty reads

- TODO

##### No dirty writes

- TODO

##### Implementing read committed

- TODO

#### Snapshot Isolation and Repeatable Read

- TODO

##### Implementing snapshot isolation

- TODO

##### Visibility rules for observing a consistent snapshot

- TODO  

##### Indexes and snapshot isolation

- TODO

##### Repeatable read and naming confusion

- TODO

#### Preventing Lost Updates

- TODO

##### Atomic write operations

- TODO

##### Explicit locking

- TODO

##### Automatically detecting lost updates

- TODO

##### Compare-and-set

- TODO

##### Conflict resolution and replication

- TODO

#### Write Skew and Phantoms

- TODO

##### Phantoms causing write skew

- TODO

##### Materializing conflicts

- TODO

### Serializability

- TODO

#### Actual Serial Execution

- TODO

##### Encapsulating transactions in stored procedures

- TODO

##### Pros and cons of stored procedures

- TODO

##### Partitioning

- TODO

#### Two-Phase Locking (2PL)

- TODO

##### Implementation of two-phase locking

- TODO

##### Performance of two-phase locking

- TODO

##### Predicate locks

- TODO

##### Index-range locks

- TODO

#### Serializable Snapshot Isolation (SSI)

- TODO

##### Pessimistic versus optimistic concurrency control

- TODO

##### Decisions based on an outdated premise

- TODO

##### Detecting stale MVCC reads

- TODO

##### Detecting writes that affect prior reads

- TODO

##### Performance of serializable snapshot isolation

- TODO

### Summary

- TODO

## Chapter 8: The Trouble with Distributed Systems

### Faults and Partial Failures

- TODO

#### Cloud Computing and Supercomputing

- TODO

### Unreliable Networks

- TODO

#### Network Faults in Practice

- TODO

#### Detecting Faults

- TODO

#### Timeouts and Unbounded Delays

- TODO

##### Network congestion and queueing

- TODO

#### Synchronous Versus Asynchronous Networks

- TODO

##### Can we not simply make network delays predictable?

- TODO

### Unreliable Clocks

- TODO

#### Monotonic Versus Time-of-Day Clocks

- TODO

##### Time-of-day clocks

- TODO

##### Monotonic clocks

- TODO

#### Clock Synchronization and Accuracy

- TODO

#### Relying on Synchronized Clocks

- TODO

##### Timestamps for ordering events

- TODO

##### Clock readings have a confidence interval

- TODO

##### Synchronized clocks for global snapshots

- TODO

#### Process Pauses

- TODO

##### Response time guarantees

- TODO

##### Limiting the impact of garbage collection

- TODO

### Knowledge, Truth, and Lies

- TODO

#### The Truth is Defined by the Majority

- TODO

##### The leader and the clock

- TODO

##### Fencing tokens

- TODO

#### Byzantine Faults

- TODO

#### System Model and Reality

- TODO    

##### Correctness of an algorithm

- TODO

##### Safety and liveness

- TODO

##### Mapping system models to the real world

- TODO

### Summary

- TODO

## Chapter 9: Consistency and Consensus

- TODO

### Consistency Guarantees

- TODO

### Linearizability

- TODO

#### What Makes a System Linearizable?

- TODO

#### Relying on Linearizability

##### Locking and leader election

- TODO

##### Constraints and uniqueness guarantees

- TODO

##### Cross-channel timing dependencies

- TODO

#### Implementing Linearizable Systems

- TODO  

#### The Cost of Linearizability

- TODO  

##### Linearizability and network delays

- TODO

### Ordering Guarantees

- TODO

#### Ordering and Causality

- TODO  

##### The causal order is not a total order

- TODO

##### Linearizability is stronger than causal consistency

- TODO

##### Capturing causal dependencies

- TODO

#### Sequence Number Ordering

- TODO

##### Noncausal sequence number generators

- TODO

##### Lamport timestamps

- TODO

##### Timestamp ordering is not sufficient

- TODO

#### Total Order Broadcast

- TODO

##### Using total order broadcast

- TODO

##### Implementing linearizable storage using total order broadcast

- TODO

##### Implementing total order broadcast using linearizable storage

- TODO

### Distributed Transactions and Consensus

- TODO

#### Atomic Commit and Two-Phase Commit (2PC)

- TODO

##### From single-node to distributed atomic commit

- TODO

##### Introduction to two-phase commit

- TODO

##### A system of promises

- TODO

##### Coordinator failure

- TODO

#### Distributed Transactions in Practice

- TODO

##### XA transactions

- TODO

##### Holding locks while in doubt

- TODO

##### Recovering from coordinator failure

- TODO

##### Limitations of distributed transactions

- TODO

#### Fault-Tolerant Consensus

- TODO

##### Consensus algorithms and total order broadcast

- TODO

##### Epoch numbering and quorums

- TODO

##### Limitations of consensus

- TODO

#### Membership and Coordination Services

- TODO

##### Allocating work to nodes

- TODO

##### Service discovery

- TODO

## Chapter 10: Batch Processing

- TODO  

### Batch Processing with Unix Tools

#### Simple Log Analysis

##### Sorting versus in-memory aggregation

- TODO

#### The Unix Philosophy

- TODO

##### A uniform interface

- TODO

##### Separation of logic and wiring

- TODO

##### Transparency and experimentation

- TODO    

### MapReduce and Distributed Filesystems

- TODO

#### MapReduce Job Execution

- TODO

##### Distributed execution of MapReduce

- TODO

##### MapReduce workflows

- TODO

#### Reduce-Side Joins and Grouping

- TODO

##### Example: analysis of user activity events

- TODO

##### Sort-merge joins

- TODO

##### Bringing related data together in the same place

- TODO

##### GROUP BY

- TODO

##### Handling skew

- TODO

#### Map-Side Joins

- TODO

##### Broadcast hash joins

- TODO

##### Partitioned hash joins

- TODO

##### Map-side merge joins

- TODO

##### MapReduce workflows with map-side joins

- TODO

#### The Output of Batch Workflows

- TODO

##### Key-value stores as batch process output

- TODO      

##### Philosophy of batch process outputs

- TODO

#### Comparing Hadoop to Distributed Databases

- TODO

##### Diversity of storage

- TODO

##### Diversity of processing models

- TODO

##### Designing for frequent faults

- TODO

### Beyond MapReduce

- TODO

#### Materialization of Intermediate State

- TODO    

##### Dataflow engines

- TODO          

##### Fault tolerance

- TODO

##### Discussion of materialization

- TODO

#### Graphs and Iterative Processing

- TODO

##### The Pregel processing model

- TODO

##### Fault tolerance

- TODO

##### Parallel execution

- TODO

#### High Level APIs and Languages

- TODO

##### The move toward declarative query languages

- TODO

##### Specialization for different domains

- TODO

### Summary

- TODO

## Chapter 11: Stream Processing

- TODO

### Transmitting Event Streams

- TODO

#### Messaging Systems

- TODO

##### Direct messaging from producers to consumers

- TODO

##### Message brokers

- TODO

##### Message brokers compared to databases

- TODO

##### Multiple consumers

- TODO  

##### Acknowledgments and redelivery

- TODO

#### Partitioned Logs

- TODO

##### Using logs for message storage

- TODO

##### Logs compared to traditional messaging

- TODO    

##### Consumer offsets

- TODO

##### Disk space usage

- TODO

##### When consumers cannot keep up with producers

- TODO

### Databases and Streams

- TODO

#### Keeping Streams in Sync

- TODO    

#### Change Data Capture

- TODO

##### Implementing change data capture

- TODO

##### Initial snapshot

- TODO

##### Log compaction

- TODO

#### Event Sourcing

- TODO  

##### Deriving current state from the event log

- TODO

##### Commands and events

- TODO

#### State, Streams, and Immutability

- TODO

##### Advantages of immutable events

- TODO

##### Deriving several views from the same event log

- TODO

##### Concurrency control

- TODO

##### Limitations to immutability

- TODO

### Processing Streams

- TODO    

#### Uses of Stream Processing

##### Complex event processing

- TODO

##### Stream analytics

- TODO

##### Search on streams

- TODO

#### Reasoning About Time

- TODO

##### Event time versus processing time

- TODO

##### Knowing when you're ready

- TODO

##### Whose clock are you using, anyway?

- TODO

##### Types of windows

- TODO

#### Stream Joins

- TODO

##### Stream-stream join (window join)

- TODO

##### Stream-table join (stream enrichment)

- TODO

##### Table-table join (materialized view maintenance)

- TODO

##### Time-dependence of joins

- TODO

#### Fault Tolerance

- TODO

##### Microbatching and checkpointing

- TODO

##### Atomic commit revisited

- TODO

##### Idempotence

- TODO

##### Rebuilding state after a failure

- TODO

### Summary

- TODO      

## Chapter 12: The Future of Data Systems

### Data Integration

- TODO

#### Combining Specialized Tools by Deriving Data

- TODO

##### Reasoning about dataflows

- TODO

##### Derived data versus distributed transactions

- TODO

##### The limits of total ordering

- TODO  

##### Ordering events to capture causality

- TODO

#### Batch and Stream Processing

- TODO

##### Maintaining derived state

- TODO

##### Reprocessing data for application evolution

- TODO

##### The lambda architecture

- TODO  

### Unbundling Databases

- TODO

#### Composing Data Storage Technologies

##### The meta-database of everything

- TODO    

##### Making unbundling work

- TODO  

##### Unbundling versus integrated systems

- TODO

#### Designing Applications Around Dataflow

- TODO

##### Application code as a derivation function

- TODO

##### Separation of application code and state

- TODO

##### Dataflow: Interplay between state changes and application code

- TODO

##### Stream processors and services

- TODO

#### Observed Derived State

- TODO

##### Materialized views and caching

- TODO

##### Stateful, offline-capable clients

- TODO

##### Pushing state changes to clients

- TODO

##### End-to-end event streams

- TODO

##### Reads are events too

- TODO

##### Multi-partition data processing

- TODO

### Aiming for Correctness

- TODO

#### The End-to-End Argument for Databases

##### Exactly-once execution of an operation

- TODO

##### Duplicate suppression

- TODO

##### Uniquely identifying requests

- TODO

##### The end-to-end argument

- TODO

##### Applying end-to-end thinking in data systems

- TODO

#### Enforcing Constraints

##### Uniqueness constraints require consensus

- TODO

##### Uniqueness in log-based messaging

- TODO

##### Multi-partition request processing

- TODO

#### Timeliness and Integrity

- TODO

##### Correctness of dataflow systems

- TODO

##### Loosely interpreted constraints

- TODO

##### Coordinating-avoiding data systems

- TODO

#### Trust, but Verify

- TODO

##### Maintaining integrity in the face of software bugs

- TODO

##### Don't blindly trust what they promise

- TODO

##### Designing for auditability

- TODO

##### The end-to-end argument again

- TODO

##### Tools for auditable data systems

- TODO

### Doing the Right Thing

- TODO

#### Predictive Analytics

- TODO

##### Bits and discrimination

- TODO

##### Responsibility and accountability

- TODO

##### Feedback loops

- TODO

#### Privacy and Tracking

- TODO

##### Surveillance

- TODO

##### Consent and freedom of choice

- TODO

##### Privacy and use of data

- TODO

##### Data as assets and power

- TODO

##### Remembering the Industrial Revolution

- TODO
