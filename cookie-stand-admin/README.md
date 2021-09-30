# Lab 37 - React I

Deployed on: [Link](http://github.com/kevinhenry/cookie-stand-admin/)

PR: [Link](https://github.com/kevinhenry/cookie-stand-admin/pull/1)

Collaboration: Tony Regalado, Anthony Williams

## Overview

React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a `Cookie Stand Admin` app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).

## Feature Tasks and Requirements

[x] The `spec` for lab is screen shot of [Cookie Stand Admin Version 1](https://codefellows.github.io/code-401-python-guide/curriculum/class-37/lab/cookie-stand-admin-version-1.png)
[x] `pages/Index.js` should…
  [x] Have `<Head>` component with page title set to `Cookie Stand Admin`
  [x] Have a `header` component that matches spec.
  [x] Have a `<main>` component containing `<form>` and a placeholder component showing JSON string of last created Cookie Stand.
  [x] Have a `<footer>` component that matches spec.

[x] Style app using TailwindCSS utility classes.

## Implementation Notes

- `npx create-next-app –example with-tailwindcss cookie-stand-admin`

- strip out unused files
    - Won’t break if they get left in, but a good practice to remove stuff you’re not using.
- Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack)


### User Acceptance Tests:

[-] No testing required.


## Configuration

Create `cookie-stand-admin` repository in Github

Use the folder created by `create-next-app` as the root of your project’s git repository.

Refer to [Lab Submission Instructions](https://codefellows.github.io/code-401-python-guide/reference/submission-instructions/labs/) for detailed instructions.

## Stretch Goals

- Refactor to move components to own functions.
- Refactor to move components to own files.
- Add more styling
- Link to another page within the app

## Stretch

Create cookie-stand-admin repository in Github

Use the folder created by create-next-app as the root of your project’s git repository.

Refer to Lab Submission Instructions for detailed instructions.

### Getting Started

Clone this repository to your local machine.

$ git clone [Link](https://github.com/kevinhenry/cookie-stand-admin.git)
Once downloaded, activate your virtual environment and run by ____________

`CD cookie-stand-admin`
`npm run dev`

Then, navigate to `localhost:3000`

-----

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
