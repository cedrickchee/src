# Rust libraries

Crates:

- https://github.com/rayon-rs/rayon
- https://github.com/brson/stdx
- https://github.com/valebes/rsClock
- https://github.com/rusoto/rusoto
- https://github.com/bbqsrc/cargo-ndk
- https://github.com/Peltoche/lsd
- https://github.com/vi/websocat
- https://github.com/theotherphil/imagecli
- https://github.com/CianLR/mazegen-rs
- https://github.com/RustAudio
- https://github.com/housleyjk/ws-rs
- https://github.com/getzola/zola - Static site engine. An alternative to Hugo and Jekyll.
- https://github.com/habitat-sh/habitat
- https://github.com/starship/starship
- https://github.com/Edu4rdSHL/findomain
- https://github.com/TheAlgorithms/Rust
- https://github.com/jedisct1/rust-bloom-filter
- https://github.com/rustodon/rustodon
- https://github.com/fishinabarrel/linux-kernel-module-rust
- https://github.com/dani-garcia/bitwarden_rs
- https://github.com/TimelyDataflow/differential-dataflow - Similar to Noria.
- https://github.com/pemistahl/grex
- https://github.com/Rigellute/spotify-tui

- https://github.com/getsentry/symbolicator - using actix-web for their symbolicator project

- https://github.com/sfackler/rust-postgres-macros
- https://github.com/nagisa/rust_libloading

- https://github.com/Geal/nom

- https://github.com/jaredly/veoluz
- https://github.com/CianLR/mazegen-rs
- https://github.com/alexcrichton/cargo-wasi
- https://github.com/google/evcxr

- https://github.com/agersant/polaris
- https://github.com/XAMPPRocky/tokei

<!-- DONE -->
- https://github.com/sfackler/rust-antidote - Poison-free versions of the Rust standard library `Mutex` and `RwLock` types.

<!-- DONE READING -->
- https://github.com/cloudflare/boringtun

<!-- NICE -->
- https://github.com/valeriansaliou/sonic
- https://github.com/toshi-search/Toshi - An Elasticsearch competitor written in Rust. <!-- Related: https://news.ycombinator.com/item?id=18895655 -->

<!-- COOL -->
- https://github.com/timberio/vector

- [Glidesort](https://github.com/orlp/glidesort) - A Rust implementation of Glidesort. It is a novel stable sorting algorithm that combines the best-case behavior of Timsort-style merge sorts for pre-sorted data with the best-case behavior of pattern-defeating quicksort for data with many duplicates.
- [deflect](https://github.com/jswrenn/deflect) - Reflection via DWARF.
- [pgx](https://github.com/tcdi/pgx) - Build Postgres extensions with Rust.
- [range_bounds_map](https://github.com/ripytide/range_bounds_map) - A BTreeMap-like data structure library where the keys are RangeBounds. Use case: storing intervals.
  
## Programs and apps

- https://github.com/xi-editor/xi-editor - an example of real-world usage of Rust.
- [Real Time For the Masses (RTFM) framework for ARM Cortex-M microcontrollers](https://github.com/rtfm-rs/cortex-m-rtfm)
- [Prusti](https://github.com/viperproject/prusti-dev) - A prototype static verifier for Rust, built upon the Viper verification infrastructure.
- [allocscope](https://github.com/matt-kimball/allocscope) - A memory tracking tool.

## GUI

Cross-platform, desktop UI:

- https://github.com/anp/moxie
- https://github.com/KenSuenobu/rust-pushrod
- https://github.com/tauri-apps/tauri
- https://github.com/hecrj/iced

## System Frameworks

Frameworks and tools for building systems.

- [ractor](https://github.com/slawlor/ractor) - Rust actor framework use at WhatsApp. Inspired from [Erlang's `gen_server`](https://www.erlang.org/doc/man/gen_server.html), with the speed + performance of Rust. WhatsApp was built on Erlang. They use both. ractor is running production workloads in WhatsApp today but Erlang is the "bulk" of WhatsApp concurrency model.
- [Inx Datacake](https://github.com/lnx-search/datacake) - Tooling for creating your own distributed systems.

## Web Frameworks

Status: https://www.arewewebyet.org/

- https://brandur.org/rust-web
- [What's in your Larder: Rust web frameworks](https://larder.io/blog/larder-links-09-rust-web-frameworks/)
- https://github.com/iron/iron
- https://github.com/nickel-org/nickel.rs
- https://github.com/tokio-rs/tokio-minihttp
- https://github.com/trezm/Thruster
- https://github.com/graphql-rust/juniper
- Tower-Web and Warp joint effort
  - Warp on Zeit Now or AWS Lambda: https://zeit.co/blog/introducing-now-rust
- Templates
  - https://github.com/djc/askama

### Actix

- [Actix-web 1.0 – A small, pragmatic, and fast web framework for Rust](https://news.ycombinator.com/item?id=20104619)
- https://old.reddit.com/r/rust/comments/cbn1no/rust_is_leading_most_of_the_techempower_web/
- https://github.com/TechEmpower/FrameworkBenchmarks/issues/4834
- 1.0 summary: https://old.reddit.com/r/rust/comments/bwy99w/actixweb_10_released/eq2t499/
- https://old.reddit.com/r/programming/comments/cbgv6f/rust_async_frameworks_dominate_techempower/
- https://old.reddit.com/r/rust/comments/axy0hp/patterns_to_scale_actixweb_and_diesel/
- https://old.reddit.com/r/rust/comments/ce09id/why_we_need_alternatives_to_actix/
- https://64.github.io/actix/
- Examples:
  - https://github.com/flofriday/thumbcloud
  - https://github.com/ArtRand/kafka-actix-example
  - [Generic Methods in Rust: How Exonum Shifted from Iron to Actix-web](https://medium.com/meetbitfury/generic-methods-in-rust-how-exonum-shifted-from-iron-to-actix-web-7a2752171388)
  - https://blog.approveapi.com/tutorials/rust-actix-web-approveapi-magic-login-link/ (TODO: fix broken link)
- [Render: Deploy an Actix Web App](https://render.com/docs/deploy-actix-todo)

- [actix – an actor framework for the Rust programming language](https://simplabs.com/blog/2018/06/11/actix/) - Actor model.

### Comparison

- [Rust web framework comparison](https://github.com/flosse/rust-web-framework-comparison#server-frameworks)

### Rust and Node.js

- [Rust bindings for native Node.js modules](https://github.com/neon-bindings/neon) <!-- DONE -->
