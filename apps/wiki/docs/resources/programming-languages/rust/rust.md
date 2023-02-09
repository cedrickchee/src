---
title: Rust
---

# [Rust](https://www.rust-lang.org/en-US/)

I learn Rust by reading [The Rust Programming Language](http://doc.rust-lang.org/book/index.html) (aka. TRPL) book.

This is my ~~mind map and~~ collection of resources for learning Rust in early 2019.

I didn't touch Rust up until Nov 2019. I've written a [short note](learn-rust-again) about things I read and learned while restarting my Rust learning journey.

---

## Notes

My notes while working through TRPL.

**Programming paradigm:** functional, imperative, structured, generic, concurrent

**Rust focus:** type and memory safety, precision, concurrency, performance, reliability

Rust enforces memory safety. Compile time memory safety guarantees protects us from:

- Uninitialized variables
- Use-after-free (UAV)
- Double-frees
- Exception due to NULL pointers (Rust does not have NULL)
- Impossible to forget to lock the mutex
- Data races between threads
- _Mostly_ no memory leaks
- Iterator invalidation

In the safe subset of Rust, there's no undefined behavior at runtime:

- Integer overflow is defined
- Array access is bounds checked

Rust is modern — built with the experience learned in the past 40 years of programming languages.

Modern language features:
- Generics
- Enums and pattern matching
- No overhead FFI

Modern tooling:
- Great compiler errors
- Built-in dependency manager
- Built-in support for testing

---

## Getting help

- [Users forum](https://users.rust-lang.org/) - official forum
- [Internals forum](https://internals.rust-lang.org/) - official forum
- [The #beginners channel on Discord](https://discord.gg/rust-lang)

## Learn Rust

- [Get started with Rust](https://www.rust-lang.org/learn) - **Official learning resources**.
- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - A collection of simple examples that demonstrate good practices to accomplish common programming tasks, using the crates of the Rust ecosystem.
- [Rust by Example](https://doc.rust-lang.org/stable/rust-by-example/) - A collection of runnable examples that illustrate various Rust concepts and standard libraries.
- [Learn Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)
- https://github.com/rust-lang/rustlings - Small exercises to get you used to reading and writing Rust code!
- [Tour of Rust](https://tourofrust.com/) - A step by step guide through the features of the Rust programming language.
- [A half-hour to learn Rust](https://fasterthanli.me/blog/2020/a-half-hour-to-learn-rust/) - 'similar' style to "Learn X in Y Minutes". It covers variable bindings, pattern matching, immutability, references, lifetimes, borrow rules, structs, traits, enums, generics, closures, and more.
- [Read Rust: Getting Started](https://readrust.net/getting-started) - Introductory posts, guides and tutorials for getting started with Rust.
- [Learning Rust](https://learning-rust.github.io/) - Rust programming language tutorials.
- [Rust-101](https://www.ralfj.de/projects/rust-101/) - A tutorial for the Rust language.
- https://github.com/learning-rust/site - Rust Programming Language Tutorials for Everyone!
- [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - This is the Rust course used by the Android team at Google. It provides you the material to quickly teach Rust to everyone. The course covers the full spectrum of Rust, from basic syntax to advanced topics like generics and error handling. It also includes Android-specific content on the last day.

### Videos

Rust stream on YouTube and/or Twitch:

- [Jon Gjengset's stream on Rust](https://www.youtube.com/channel/UC_iD0xppBwwsrM9DegC5cQQ) - I first discovered Jon's stream while looking at [Noria](https://github.com/mit-pdos/noria) data-flow for high-performance web apps. Jon's stream covers mostly advanced concepts in Rust but not until recently (2020) where he started to covers more "advanced beginners" stuffs.
- [Ryan Levick's "advanced beginners" stream on Rust](https://youtu.be/2mwwYbBRJSo) who are familiar with the concepts of ownership, closures and threads but don't yet have a firm grip on them.
- [Visualizing memory layout of Rust's data types](https://www.youtube.com/watch?v=rDoqT-a6UFg)
- [Intorust screencasts](http://intorust.com/) by Niko Matsakis.

## Books

- [Rust for Rustaceans](https://old.reddit.com/r/rust/comments/nq3pxh/new_rust_book_rust_for_rustaceans_by_jon_gjengset/) by Jon Gjengset - a book that covers the next steps of Rust after TRPL/"the book". The book is written for people who are already familiar with Rust. The idea is that you read The Rust Programming Language (TRPL) first, play around with Rust for a bit on your own, maybe start using it "for real", and then pick this up to hone your skills. It is fairly fast paced, but is still has a good amount of low level details. (TLDR; if you're comfortable in Rust, this book is the next step up for intermediate developers.)
- [Rust in Action](https://www.manning.com/books/rust-in-action) by Tim McNamara - Systems programming concepts and techniques.
  - [Book launch announcement](https://old.reddit.com/r/rust/comments/bthr5n/rust_in_action_by_ts_mcnamara_published_by/)
- [Programming Rust](https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/) by Jim Blandy, Jason Orendorff, Leonora F. S. Tindall - This revised, second edition covers the Rust 2021 Edition. It expands on many concepts in TRPL book. I like that it explains the **memory layout of common Rust data structures**.
- [The Rustonomicon book](https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html) - Meet Safe and Unsafe.
- [Summary of the Rust book](https://github.com/psibi/rust-book-summary)
- [Zero To Production In Rust](https://www.zero2prod.com/) - The ideal starting point for your journey as a Rust backend developer. You will learn by doing: you will build a fully functional email newsletter API, starting from scratch.
- [Awesome Rust Books](https://github.com/sger/RustBooks) - List of Rust books grouped by level.

## Presentations and talks

- [Rust: A Language for the Next Forty Years](https://is.gd/rust40) by Carol Nichols - A talk about Rust's safety and stability. And a little bit about railroads.
- [Learning systems programming with Rust](https://jvns.ca/blog/2016/09/11/rustconf-keynote/) - Closing keynote at the first RustConf 2016 by Julia Evans.

## Cheat sheets

- https://cheats.rs/
- [Rust container cheat sheet (Google Docs)](https://docs.google.com/presentation/d/1q-c7UAyrUlM-eZyTo1pd8SZ0qwA_wYxmPZVOQkoDmH4/edit?usp=sharing) - Explaining Rust in terms of actual in-memory representations by [Raph Levien](https://raphlinus.github.io/). Raph think this will be helpful because, most often, these basic Rust types (Vec, Box, Arc) are presented in terms of their abstraction, and the in-memory representation is considered an advanced detail, more a topic for the nomicon. I like it because it clarify things visually.
- [Another container cheat sheet](https://old.reddit.com/r/rust/comments/idwlqu/rust_memory_container_cheatsheet_publish_on_github/) [[Source](https://github.com/usagi/rust-memory-container-cs)]
- [See all implementations for Rust and Go side-by-side](https://programming-idioms.org/cheatsheet/Go/Rust)
- https://github.com/donbright/rust-lang-cheat-sheet - This cheat sheet is in a reasonably useful state for basic things.

## Libraries

Useful libraries. Some created by Rust core members.

[Blessed](https://blessed.rs/) - An unofficial guide to the Rust ecosystem.

[Not-Yet-Awesome Rust](https://github.com/not-yet-awesome-rust/not-yet-awesome-rust) - A curated list of Rust code and resources that do NOT exist yet, but would be beneficial to the Rust community.

[View all](rust-libraries)

## Blogs and articles

- [Read Rust](https://readrust.net/) collects interesting posts related to the Rust programming language. <!-- MUST READ -->

  Note-to-self: I found the writer through Mastodon

- Official Posts:
  - https://blog.rust-lang.org/2016/12/22/Rust-1.14.html
  - https://blog.rust-lang.org/2017/05/15/rust-at-two-years.html
  - https://blog.rust-lang.org/2017/05/05/libz-blitz.html
  - https://blog.rust-lang.org/2016/05/16/rust-at-one-year.html
  - https://blog.rust-lang.org/2016/06/30/State-of-Rust-Survey-2016.html

[View all](blogs-articles)

## Newsletters

- [This Week in Rust](https://this-week-in-rust.org/)

## Async Rust

- https://github.com/rustasync/areweasyncyet.rs - A website for tracking development progress of `async`/`await` syntax of Rust programming language in the language itself as well as its ecosystem.

## Editor, IDE

https://areweideyet.com/

Things I discovered:

- https://github.com/racer-rust/racer - Rust code completion utility.
- [explaine.rs](https://jrvidal.github.io/explaine.rs/) - An interactive playground to explore the syntax of the Rust code.

## Systems programming with Rust

- Operating Systems (Kernel hacking)
  - [Create a small operating system in Rust](https://os.phil-opp.com/) - You can learn Rust by creating a small OS. This is an ongoing blog series. I find this pair well with OS theory from the ["Operating Systems: Three Easy Pieces"](https://pages.cs.wisc.edu/~remzi/OSTEP/) book (a.k.a. the comet book) and [CS-537 class](https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/) by Remzi. (If anyone have compared xv6 to Blog OS, please let me know.)
- Low-level Programming (core utilities, tools, emulators, embedded programming)

## Projects for learning

- [Learn embedded Rust by writing a rotary encoders](https://leshow.github.io/post/rotary_encoder_hal/)
- [Writing an HTTP server in Rust (Part I)](https://curiosityoverflow.xyz/posts/linda/)
- [I made a NES emulator in Rust using generators](https://kyle.space/posts/i-made-a-nes-emulator/)
- [Where to find small Rust TODO's/Projects to hack over weekends?](https://old.reddit.com/r/rust/comments/cmra8k/where_to_find_small_rust_todosprojects_to_hack/) <!-- DONE -->

## Rust communities

Users of the Rust programming language: https://communitywiki.org/trunk/grab/Rustaceans

### Reddit /r/rust

- https://old.reddit.com/r/rust/comments/b3vw8w/alexis_beingessners_learning_rust_with_entirely/
- https://old.reddit.com/r/rust/comments/cra26t/sonata_100_rust_audio_decoders_media_demuxers_and/
- https://old.reddit.com/r/rust/comments/cysvjh/what_are_some_amazing_softwaresoftware_clones/
- https://old.reddit.com/r/rust/comments/cxmki8/introduction_to_rust_web_applications/
- https://old.reddit.com/r/rust/comments/cm7rje/rust_language_cheat_sheet/

[View all](rust-communities)

## Learning Rust as a Python/JavaScript/Go programmer

### Rust for Python programmer

- [Rust for Python Programmers](http://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/)
- [Converting a Python library to Rust](https://alantrick.ca/writings/programming/python_to_rust/)
- [How to make a Python package with compiled Rust (and why you should to increase performance)](https://www.simernes.com/?p=514)

## General

Not so useful knowledge.

- Rust history
  - [Software developer Graydon Hoare created Rust as a personal project while working at Mozilla Research in 2006](https://en.wikipedia.org/wiki/Rust_(programming_language))
  - [Gradon Hoare's minutes from meetings](https://github.com/graydon/rust/wiki/Meetings)
  - [Rust Creator Graydon Hoare Talks About Security, History, and Rust](https://thenewstack.io/rust-creator-graydon-hoare-talks-about-security-history-and-rust/)
  - [I wonder, why Graydon Hoare, the author of Rust, stopped contributing into it and switched to Swift?](https://old.reddit.com/r/rust/comments/7qels2/i_wonder_why_graydon_hoare_the_author_of_rust/)
  - [Rust creator Graydon Hoare says current software development practices terrify him](https://old.reddit.com/r/rust/comments/7v5kyk/rust_creator_graydon_hoare_says_current_software/)
- [Rust Core team](https://www.rust-lang.org/governance/teams/core) - Managing the overall direction of Rust, subteam leadership, and any cross-cutting issues
- [Rust Compiler team](https://www.rust-lang.org/governance/teams/compiler)

## Similar projects

- [Awesome Rust](https://github.com/rust-unofficial/awesome-rust)
- [rust-learning](https://github.com/ctjhoa/rust-learning) - A bunch of links to blog posts, articles, videos, etc for learning Rust.

---

_Originally published at [GitHub Gist](https://gist.github.com/cedrickchee/f729e848b52eab8fbc88a3910072198c)_
