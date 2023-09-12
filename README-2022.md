# React Query Example

## Preview

![Site Preview](./src/preview.PNG)

**NOTE: There's a README file in Vietnamese.**
https://github.com/nguyenhieptech/react-query-example/blob/main/README-vi.md

This project is a demonstration of how to use [React Query](https://react-query.tanstack.com) library to perform the following tasks:

- CRUD Operations (using useQuery, useMutation).
- Pagination (using useQuery)
- Load-more like feature (using useInfiniteQuery)

This project is setup with:

- [Vite](https://vitejs.dev/): "Next Generation Frontend Tooling". It's faster than [create-react-app](https://create-react-app.dev/). Consider using Vite for all your personal projects. It's worth it.
- [WindiCSS](https://windicss.org/guide/): "An **on-demand** alternative to Tailwind, which provides faster load times, **full compatibility with Tailwind v2.0**, and a bunch of additional cool features."
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [React Modal](http://reactcommunity.org/react-modal/): Accessible modal dialog component for React.
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and Node.js.
- [JSON Server](https://github.com/typicode/json-server): Full fake REST API server with zero coding in less than 30 seconds.

## Run Locally

- Clone the project

```bash
git clone https://github.com/nguyenhieptech/react-query-ts
```

- Go to the project directory:

```bash
cd react-query-ts
```

- Install dependencies

```bash
yarn install
```

- Setup database file

```bash
cp api/sample.db.json api/db.json
```

- Start the `json-server`

```bash
yarn run json-server
```

- Launch another terminal and start the Vite server

```bash
yarn run dev
```

Head over to your browser and open the URL <http://localhost:3000> to access the application.

## How do I approach this project?

- Why React Query is the way to go?

https://www.youtube.com/watch?v=aLQbVd-2tIo

https://www.youtube.com/watch?v=seU46c6Jz7E

- It uses custom hooks for better structure, so that if you want to change implementation details, it doesn't affect code inside components. These two articles below are really **IMPORTANT**, please read them carefully.

https://kyleshevlin.com/use-encapsulation

https://log.seruco.io/hide-usequery/

- It includes Optimistic Updates. What is Optimistic Updates?

https://react-query.tanstack.com/guides/optimistic-updates

https://stackoverflow.com/questions/33009657/what-is-optimistic-updates-in-front-end-development

https://resthooks.io/docs/guides/optimistic-updates

- How to setup Vite projects with WindiCSS:

https://windicss.org/integrations/vite.html

## Reference

- https://www.sitepoint.com/react-query-fetch-manage-data by [Michael Wanyoike](https://twitter.com/myxsys)
- https://react-query.tanstack.com/overview
