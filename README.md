# React Query Example

## Preview

![Site Preview](./src/preview.PNG)

This project is a demonstration of how to use [React Query](https://react-query.tanstack.com) library to perform the following tasks:

- CRUD Operations (using useQuery, useMutation)
- Pagination (using useQuery)
- Load-more-like feature (using useInfiniteQuery)

This project is setup with:

- [Vite](https://vitejs.dev/): A very fast build tool
- [WindiCSS](https://windicss.org/): A very fast Tailwind CSS compiler
- [React Hook Form](https://react-hook-form.com/): Form builder and validation library
- [React Modal](http://reactcommunity.org/react-modal/): An accessible modal component
- [Axios](https://github.com/axios/axios): Promised based HTTP client for browsers
- [JSON Server](https://github.com/typicode/json-server): Full fake REST API server

## Run Locally

- Go to the project directory:

```bash
cd react-query-example
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

## Reference

- https://www.sitepoint.com/react-query-fetch-manage-data/
- By [Michael Wanyoike](https://twitter.com/myxsys)
