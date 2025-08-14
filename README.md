# NFT Marketplace

## Requirements

- [nodejs](http://nodejs.org/)
- [pnpm](https://pnpm.io/) (You can use another package manager, but `pnpm` is recommended.)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)

## Package Manager

[Which package manager do you want to use?](https://turbo.build/repo/docs/getting-started/create-new#which-package-manager-do-you-want-to-use)

Turborepo doesn't handle installing packages, so you'll need to choose one of:

- [pnpm](https://pnpm.io/) (`Turborepo` recommends `pnpm`)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)

## Installation

```shell
$ git clone git@github.com:ScaleInOrg/Full-Stack-Test.git <name>
$ cd <name>
```

`Warning` If you use `yarn` or `npm`, you need to update the `package.json` file in the root of the project and use your version of `yarn` or `npm`:

```json
{
  "packageManager": "yarn@1.22.22",
  "workspaces": ["apps/*", "packages/*"]
}
```

or

```json
{
  "packageManager": "npm@10.7.0",
  "workspaces": ["apps/*", "packages/*"]
}
```

You must to replace all `"workspace:*"` by `"*"` inside the `package.json` files in the `apps`, `packages` and the root of the project. Indeed, only `pnpm` uses the `workspace` keyword.

When your package manager is set, you can go to `apps/api/prisma` and add a `.env` file with the following content: `DATABASE_URL="file:./dev.db"`

Go to the root of the project and run the following command:

```shell
$ pnpm|yarn|npm install
```

## Run

```shell
$ pnpm|yarn|npm dev (to run all the apps)
```

Then open [localhost:3002](http://localhost:3002/) for the api, [localhost:3000](http://localhost:3000/) for the web and [localhost:3001](http://localhost:3001/) for the docs if the web app is already running.

`Be careful`
If you have run this script `pnpm|yarn|npm dev`, the docs app could be running before the web app. In this case, the docs app will be on [localhost:3000](http://localhost:3000/) and the web app on [localhost:3001](http://localhost:3001/)

## API

For the api, there are some routes available:

- [localhost:3002](http://localhost:3002/) list some images served by the api.
- [localhost:3002/api](http://localhost:3002/api) the starting point of the api.
- [localhost:3002/api/creations/:id](http://localhost:3002/api/creations/1) return the creation with the id 1.
- [localhost:3002/api/creations/explore](http://localhost:3002/api/creations/explore) return the creations to explore.
- [localhost:3002/api/categories](http://localhost:3002/api/categories) return all the categories.
- [localhost:3002/api/categories/trending](http://localhost:3002/api/categories/trending) return the trending categories.
- [localhost:3002/api/users](http://localhost:3002/api/users) return all the users.

## Features

- Monorepo with Turborepo
- Next.js for the web and docs apps:

  - App Router (Features available in /app)
  - SSR
  - Data Fetching on the server side using [streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#streaming) and [Loading UI and Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
  - Dynamic imports (Lazy Loading)[https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading]
  - tailwindcss
  - Responsive Design
  - animations (hover, click, etc.)
  - skeleton loading [Adding loading skeletons](https://nextjs.org/learn/dashboard-app/streaming#adding-loading-skeletons)
  - Modal with Parallel and Intercepting Routes [Parallel Routes: Modals](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals) [Intercepting Routes: Modals](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals)
  - [Dark Mode](https://tailwindcss.com/docs/dark-mode)

- NestJS for the api app
- Prisma for the database
"# nft-marketplace" 
