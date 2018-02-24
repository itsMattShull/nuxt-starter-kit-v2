# Nuxt Starter Kit v2

> I've learned a lot about Nuxt and best practices.  Instead of trying to restructure v1 of my starter kit I decided to start fresh.  Based off of the [Nuxt Express template](https://github.com/nuxt-community/express-template).



## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how Nuxt works, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

Nuxt uses [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## Storybook

> [Storybook](https://storybook.js.org/basics/guide-vue/) is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

``` bash
# build and run Storybook
$ npm run storybook
```

Stories are written in the components folder.  This is not a hard and fast rule.  You can change where stories are located by changing the config in `.storybook/config.js`.  Out of the box it's set to look for any files inside of the `components` directory that has a `.story.js` extension.

## Authentication and Authorization
Using Express and Axios this project allows you to auth users and protect pages.  `server/api/auth.js` shows the endpoints used to log a user in.  You can find [documentation on what the endpoints expect and return on Postman.](https://documenter.getpostman.com/view/3748927/nuxt-starter-kit-v2/RVg2AoNd) It uses `store/index.js` to manage the state of a user and send login/logout actions.  Also check `pages/index.vue` to see what methods to use to log in and `pages/admin/index.vue` to see how to protect a page so only authenticated users can see it.