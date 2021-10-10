# Lab 37 - React I

Deployed on: [Link](http://github.com/kevinhenry/cookie-stand-admin/)

PR: [Link](https://github.com/kevinhenry/cookie-stand-admin/pull/1)

Collaboration: Tony Regalado, Anthony Williams

## Overview

React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a `Cookie Stand Admin` app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).

## Feature Tasks and Requirements

The `spec` for lab is screen shot of [Cookie Stand Admin Version 1](https://codefellows.github.io/code-401-python-guide/curriculum/class-37/lab/cookie-stand-admin-version-1.png)
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


# Lab 38 - React II

Deployed on: [Link](http://github.com/kevinhenry/cookie-stand-admin/)

PR: [Link](https://github.com/kevinhenry/cookie-stand-admin/pull/2)

Collaboration: Tony Regalado, Anthony Williams

## Overview

Your job is to continue work on `Cookie Stand Admin` app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).

### Feature Tasks and Requirements

The `specs` for lab are screen shots Cookie Stand Admin Version 2 and Cookie Stand Admin No Stands
[x] `pages/Index.js` should return top level component `<CookieStandAdmin>`
- `<CookieStandAdmin>` details…
  [x] Have a `<Head>` component.
  [x] Have a custom `<Header>` component that matches spec.
  [x] Have a `<main>` component.
  [x] Within `<main>` have custom `<CreateForm>` and `<ReportTable>` components.
  [x] Have a custom `<Footer>` component that matches spec.
  [x] Import time slot data from supplied `data.js` file.

[x] `<Head>` should set page title `Cookie Stand Admin`
[x] `<Header>` component should have Next `<Link>` to overview page.
- `<CreateForm>` component details…
  [x] Receive an `onCreate` function to be called when form is submitted.
  [x] `onCreate` should be passed argument object representing new cookie stand.
    [x] Object should have `location` property.
    [x] Object should have `hourly_sales` property with hard coded `[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]`

- `<ReportTable>` details…
  [x] should receive `hours` on props that is an array cookie stand hours of operation.
  [x] should receive `reports` on props that is an array all cookie stand objects.
  [x] If `reports` is empty then render `<h2>No Cookie Stands Available</h2>`
  [x] If `reports` is not empty then render a `table` with `thead`,`tbody` and `tfoot` components.
  [x] Component should render to match spec.
  [x] Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot.

- `<Footer>` component details…
  [x] Should receive `reports` array on props.
  [x] Should display `X Locations World Wide` where `X` is number of cookie stands.

[x] `<Header>`,`<Footer>`,`<CreateForm>` and `<ReportTable>` should each be in own file inside top level `components` folder.
[x] Those components should be imported into `Index.js`
- `Overview` page details…
  [x] should live in `pages/overview.js`
  [x] should render `<Link href="/"><a>Return to Main page</a></Link>`
  [x] Style all components using TailwindCSS utility classes to match spec.


## Implementation Notes

- Continue work in `cookie-stand-admin` repository
- **IMPORTANT** Complete version 1 tasks before moving to version 2 features.
- Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack)


### User Acceptance Tests
[-] No testing required.


## Configuration

Continue work in `cookie-stand-admin` repository in Github

Refer to [Lab Submission Instructions](https://codefellows.github.io/code-401-python-guide/reference/submission-instructions/labs/) for detailed instructions.


### Stretch Goals

- Flesh out `Overview` page to do more
- Remove hard coding from `<CreateForm>` and properly calculate hourly sales per cookie stand.
- Add delete icons.
    - Pro Tip: `Heroicons`
- Really stretch out and make delete icons functional.
- Persist Cookie Stand data.




# Lab 39: Cookie Stand Admin Version 3


Deployed on: [Link](http://github.com/kevinhenry/cookie-stand-admin/)

PR: [Link](https://github.com/kevinhenry/cookie-stand-admin/pull/3)

Overview
Your job is to continue work on Cookie Stand Admin app using Next.js and style using Tailwind CSS.

But now you’ll be working with data from a remote API!

Annoying Change Explanation
The layout of Cookie Stand Form has changed a bit. Sometimes the client will change their mind. This WILL happen all the time as devs. We may as well get used to it now.

[x] Feature Tasks and Requirements
  [-] All features from versions 1 an 2 should be complete.
  [-] The specs for lab are screen shots Cookie Stand Admin Version 3 and Cookie Stand Admin Login
pages/Index.js should export a <Home> component.
[x]<Home> requirements
  [x] If user is NOT logged in then <LoginForm> should render.
  [x] If user IS logged in then <CookieStandAdmin> component should render.
[x] <LoginForm> requirements
  [x]Should receive a function passed in to call when form is submitted.
  [x] The function should be called with username and password arguments.
[x]<CookieStandAdmin> requirements
 [x] When user fills out form to add location then the data should be posted to API
 [x] While waiting for API response the <CookieStandTable> should render the new row in a pending state.
 [x] When API response is complete then <CookieStandTable> should render latest data.
[x] <CookieStandTable> requirements
  [x] Component should continue to display Cookie Stand info as in version 2
  [x] Add a delete icon in each stand’s location cell.
  [x] Clicking delete icon should immediately delete the Cookie Stand.
    [x] In other words, it should NOT require a page refresh.
  [x] API should be informed that Cookie Stand was deleted.
[x] Continue to style all components using TailwindCSS utility classes to match spec.


# Implementation Notes
-Continue work in cookie-stand-admin repository
- Ideally, you will have front end communicate with your API.
  - If your API is not fully functional then communicate with instructor to get access to a test API.
  - IMPORTANT Complete version 1 & 2 tasks before moving on to version 3 features.
  -  Pro tip: Tailwind CSS Extension Pack


# User Acceptance Tests
No testing required.


# Configuration
- Continue work in cookie-stand-admin repository in Github

- Refer to Lab Submission Instructions for detailed instructions.


# Stretch Goals
[] Use your own deployed API instead of one running on localhost or that has beep supplied by instructor.
[] Add a confirmation dialog when deleting a Cookie Stand.
[] Add a list of Cookie Stand locations to Overview page.
[] There is some trickiness here regarding logged in status. Try to figure it out!
[] Add edit feature.


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
