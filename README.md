# Tanstack Query Example (aka React Query)

## Preview

![Site Preview](./src/preview.PNG)

_Note: old image from README 2022_

This project is a demonstration of how to use [Tanstack Query](https://tanstack.com/query/latest/docs/react/overview) and [Axios](https://github.com/axios/axios) to perform the following tasks:

- CRUD Operations (`useQuery`, `useMutation`).
- Pagination (`useQuery`)
- Load-more like feature (`useInfiniteQuery`)

## Run Locally

- Clone the project

```bash
git clone https://github.com/nguyenhieptech/react-query-example
```

- Go to the project directory:

```bash
cd react-query-example
# or cd react-query-example-main
```

- Install dependencies

```bash
yarn install
```

- Setup database file

```bash
cp db/sample.db.json db/db.json
```

- Start the `json-server`

```bash
yarn json-server
```

- Launch another terminal and start the `Vite` server

```bash
yarn dev
```

Head over to your browser and open the URL <http://localhost:5555> to access the application. You can change the port in `vite.config.ts`

## Reference

https://youtu.be/seU46c6Jz7E?si=JrfOKqLaY2udPQ1V

https://youtu.be/r8Dg0KVnfMA?si=f2-B6c96MoVVGWto

https://kyleshevlin.com/use-encapsulation

https://log.seruco.io/hide-usequery/

https://stackoverflow.com/q/33009657/18459116

https://resthooks.io/rest/guides/optimistic-updates

https://www.sitepoint.com/react-query-fetch-manage-data

https://tanstack.com/query/latest/docs/react/overview
