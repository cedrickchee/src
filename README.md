# `src`

**_Work-In-Progress. Don't link to it yet._**

`src` (a short for The Source) is a project that is part of my Personal Knowledge Management (PKM).

You can think of `src` like a modern information "warehouse" in the form of a wiki (built with Docusaurus on GitHub).

The wiki contains "raw materials" (resources) for writing. The resources link to the original full-text source.

## Information workflow

I design my note taking system based on a few ideas. One of them is progressive summarization[^1].

I "capture" information from a wide variety of sources into [Shiori](https://github.com/go-shiori/shiori) (a bookmarks manager). Next, I move selected bookmarks to `src`.

5 layers of summarization[^2]:
- 0: Original full-text source, raw information (i.e.: books, articles, papers, references)
- 1: Notes
- 2: Highlighted passages
- 3: Bold passages
- 4: Mini summary
- 5: Remix (i.e.: writings, blog posts, micro posts/Tweets)

`src` is in layer 0.

Once the raw info is processed, it will flow to my digital garden[^3] (built with Obsidian).

---

## PKM Tools

This project is a [Turborepo](https://turbo.build/repo) monorepo setup.

The setup was based on an official pnpm starter turborepo.

I created this turborepo by following the [tutorial here](https://gist.github.com/cedrickchee/dfdb66c457c7b9e1682feedcc4fd6302).

### What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

#### Apps and Packages

- `wiki`: a [Docusaurus](https://docusaurus.io/) app
- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

#### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Installation

We use pnpm as the package manager. At the root of the repository, run `pnpm i` to install the monorepo dependencies.

```sh
cd src
pnpm i
```

### Build

To build all apps and packages, run the following command:

```
cd src
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd src
pnpm run dev
```

**Running `dev` on only one workspace at a time:**

By default, `pnpm run dev` will run `dev` on all workspaces at once. But sometimes, we might only want to choose one workspace.

To handle this, we can add a `--filter` flag to our command. This `--filter` gets passed to the `turbo` CLI.

```sh
pnpm run dev --filter wiki
```

Alternatively, run:

```sh
pnpm run dev:wiki
```

### Deployment

On every commit, [Vercel](https://vercel.com/) that is hooked up to the GitHub repo runs Docusaurus and new version of wiki is published.

Please read ["Using Monorepos with Vercel dashboard" docs](https://vercel.com/docs/concepts/monorepos#using-monorepos-with-vercel-dashboard) if you would like to learn how I set up all this.

<details>
  <summary>Learn more</summary>

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd src
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

### Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

</details>

[^1]: [Progressive Summarization by Tiago Forte](https://fortelabs.com/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/)
[^2]: [5 layers of summarization](https://www.zsolt.blog/2020/12/my-book-summaries-in-roam-using-tiagos.html)
[^3]: [What is "digital gardening"?](https://github.com/MaggieAppleton/digital-gardeners#what-is-digital-gardening)
