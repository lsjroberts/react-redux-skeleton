# React Redux Skeleton

This project uses [react](https://github.com/facebook/react), [redux](https://github.com/rackt/redux) and [redux-router](https://github.com/rackt/redux-router) as it's basis and forms a skeleton around these tools to allow you to get your app started quickly and easily.

This skeleton is suitable for both small and larger apps with multiple routes and numerous components and connecting to APIs.

Install with:

```
$ npm i --dev
```

Run the local server with:

```
$ npm start
```


## Examples

The skeleton comes with two examples:

1. Counter (demonstrating basic redux usage)
2. Current converter (more complex data and asynchronous actions with an API middleware)

To clean out these examples and start from scratch run:

```
$ npm run scratch
```


## Components & Containers

It is important to maintain a distinction between dumb components that simply render content and smart components (containers) that handle business logic. This separation increases the reusability of both types.

A component must only contain html (jsx) and styling, deferring any dom events to it's parent container. Containers define event handlers and pass these to their children, they must not include any styling or content.

For example you may have a `<SearchForm />` container that defines an `onSubmit` handler. This is passed down to it's child `<Form />` component which would then only specify how the form is styled.

### Shared vs. route components and containers

Generic components and containers that you are likely to reuse across multiple routes should be kept in `shared/`.

Many routes will have components that are specific to them and will likely all have their own container. These should be kept in `routes/my-route/`.


## Routes

Your app's routes are defined in `config/routes.js`.


## Import aliases

Webpack is configured to allow you to import your local files via aliases instead of long references to relative paths such as `../../../`.

| Alias        | Directory           | Example                                     |
|--------------|---------------------|---------------------------------------------|
| `modules`    | `modules/`          | `import example from 'modules/example';`    |
| `components` | `shared/components` | `import example from 'components/example';` |
| `containers` | `shared/containers` | `import example from 'containers/example';` |
| `styles`     | `assets/styles`     | `@import '~styles/mixins/example';`         |
| `images`     | `assets/images`     | `import logo from 'images/logo.png';`       |
| `fonts`      | `assets/fonts`      | `src: url('fonts/comic-sans.woff');`        |


## Tools

> **NOTE**: THESE TOOLS ARE NOT YET BUILT

### Adding a new module

To add a new module run:

```
$ ./bin/module my-module
```

This will create an empty module at `modules/my-module/` with actions, action types and a reducer.

### Adding a new route

To add a new route run:

```
$ ./bin/route my-route
```

This will create a new route at `routes/my-route/` with directories for components and containers. You will still need to add the route with the url you want to `config/routes.js`.

### Adding a new component

To add a new shared component run:

```
$ ./bin/component my-shared-component
```

This will create a new component at `shared/components/my-shared-components`.

To add a component to an existing route run:

```
$ ./bin/component my-route-component --route=my-route
```

This will create a new component at `routes/my-route/components/my-route-component`.


### Adding a new container

To add a new shared container run:

```
$ ./bin/container my-shared-container
```

This will create a new container at `shared/containers/my-shared-container`.

To add a component to an existing route run:

```
$ ./bin/component my-route-container --route=my-route
```

This will create a new container at `routes/my-route/containers/my-route-container`.
