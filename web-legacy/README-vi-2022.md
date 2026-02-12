# Ví dụ về một dự án dùng React Query

## Xem trước

![Site Preview](./src/preview.PNG)

(Một số từ chuyên ngành/mô tả đặc thù sẽ không dịch mà để nguyên nghĩa)

Đây là một project ví dụ cho thấy cách triển khai thư viện [React Query](https://react-query.tanstack.com) để thực hiện các tác vụ sau:

- CRUD Operations - đọc, thêm, xóa, sửa dữ liệu (sử dụng _useQuery_, _useMutation_).
- Pagination (phân trang) (sử dụng _useQuery_)
- Load more (Chức năng tải thêm), thường sử dụng khi số lượng dữ liệu nhiều. (sử dụng _useInfiniteQuery_)

Project gồm những dependencies sau (có thể tìm hiểu thêm ở documentation chính thức của các thư viện/framework này):

- [Vite](https://vitejs.dev/): "Next Generation Frontend Tooling". It's faster than [create-react-app](https://create-react-app.dev/). Hãy dùng Vite cho các project cá nhân của bạn, create-react-app phù hợp với những dự án lớn và rất lớn (large-scale) hơn.
- [WindiCSS](https://windicss.org/guide/): "An **on-demand** alternative to Tailwind, which provides faster load times, **full compatibility with Tailwind v2.0**, and a bunch of additional cool features."
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [React Modal](http://reactcommunity.org/react-modal/): Accessible modal dialog component for React.
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and Node.js.
- [JSON Server](https://github.com/typicode/json-server): Full fake REST API server with zero coding in less than 30 seconds.

## Làm sao chạy được ở máy tính bạn (local)

- Tải repository về máy

```bash
git clone https://github.com/nguyenhieptech/react-query-example
```

- Thay đổi đường dẫn command line đến thư mục project (hoặc mở cmd trong VS Code với _Ctrl + `_)

```bash
cd react-query-example
```

- Cài đặt dependencies

```bash
yarn install
```

- Cài đặt dữ liệu mẫu (demo database)

```bash
cp api/sample.db.json api/db.json
```

- Bắt đầu chạy `json-server` để có thể tương tác được với CSDL mẫu

```bash
yarn run json-server
```

- Mở một command line khác và khởi chạy Vite server

```bash
yarn run dev
```

Mở trình duyệt với URL <http://localhost:3000> để truy cập ứng dụng.

## Hiểu thêm về project này

1. Trước tiên cần hiểu tại sao bạn cần React Query - thư viện này giúp bạn làm gì.

https://vntalking.com/react-tai-sao-minh-khong-muon-su-dung-redux.html

https://www.youtube.com/watch?v=aLQbVd-2tIo

https://www.youtube.com/watch?v=seU46c6Jz7E

2. Dự án sử dụng _Custom hooks_, thế nên chúng ta có thể thay đổi cách xử lý dữ liệu mà không ảnh hưởng đến giao diện (UI) của ứng dụng. Hai bài đọc bên dưới có thể cho bạn hiểu hơn về điều này.

https://log.seruco.io/hide-usequery/

https://kyleshevlin.com/use-encapsulation

Việc này có thể giúp bạn quản lý project tốt hơn. Bên dưới là cấu trúc thư mục.

```shell
├── .src
    ├── components
    ├── icons
    ├── layouts
        ...
    ├── views
        ├── Order
        ├── Todos
        ├── Users
            ├── hooks
                ├── queryKeys.ts
                ├── useCreateUsers.ts
                ├── useEditUser.ts
                ├── useGetUsers.ts
                ├── useLoadMoreUsers.ts
                ├── usePaginatedUsers.ts
            ├── CreateUser.tsx
            ├── EditUser.tsx
            ├── InfiniteQuery.tsx
            ├── PaginatedQuery.tsx
            ├── SearchUser.tsx
            ├── Users.tsx
```

Khi làm thêm chức năng/nghiệp vụ mới, bạn có thể triển khai cấu trúc như bên dưới (có thể đổi thư mục _views_ thành tên khác)

```shell
├── .src
    ├── components
    ├── icons
    ├── layouts
    ...
    ├── views
        ├── Products
        |    ├── hooks
        |        ├── queryKeys.ts
        |        ├── useCreateProducts.ts
        |        ├── useEditProduct.ts
        |        ├── useGetProducts.ts
        |        ├── useLoadMoreProducts.ts
        |        ├── usePaginatedProducts.ts
        |    ├── CreateProducts.tsx
        |    ├── EditProducts.tsx
        |    ├── InfiniteProducts.tsx
        |    ├── PaginatedProducts.tsx
        |    ├── SearchProducts.tsx
        |    ├── Products.tsx
        ├── Todos
        |    ├── hooks
        |        ├── queryKeys.ts
        |        ├── useCreateTodos.ts
        |        ├── useEditTodo.ts
        |        ├── useGetTodos.ts
        |        ├── useLoadMoreTodos.ts
        |        ├── usePaginatedTodos.ts
        |    ├── CreateTodo.tsx
        |    ├── EditTodo.tsx
        |    ├── InfiniteTodos.tsx
        |    ├── PaginatedTodos.tsx
        |    ├── SearchTodo.tsx
        |    ├── Todos.tsx
        ├── Users
        |    ├── hooks
        |        ├── queryKeys.ts
        |        ├── useCreateUsers.ts
        |        ├── useEditUser.ts
        |        ├── useGetUsers.ts
        |        ├── useLoadMoreUsers.ts
        |        ├── usePaginatedUsers.ts
        |    ├── CreateUser.tsx
        |    ├── EditUser.tsx
        |    ├── InfiniteUsers.tsx
        |    ├── PaginatedUsers.tsx
        |    ├── SearchUser.tsx
        |    ├── Users.tsx
        ├──
        ...
```

- Bonus: Nếu làm thêm test/styled components/scss có thể phân chia như sau:

```shell
├── .src
    ├── components
    ├── icons
    ├── layouts
    ...
    ├── views
        ├── Users
        |   ├── hooks
        |       ├── queryKeys.ts
        |       ├── useCreateUsers.ts
        |       ├── useEditUser.ts
        |       ├── useGetUsers.ts
        |       ├── useLoadMoreUsers.ts
        |       ├── usePaginatedUsers.ts
        |   ├── CreateUser
        |       ├── index.tsx
        |       ├── CreateUser.test.tsx
        |       ├── CreateUser.styled.ts hoặc CreateUser.scss
        |   ├── EditUser
        |       ├── index.tsx
        |       ├── EditUser.test.tsx
        |       ├── EditUser.styled.ts hoặc CreateUser.scss
        |   ├── InfiniteUsers
        |       ├── index.tsx
        |       ├── InfiniteUsers.test.tsx
        |       ├── InfiniteUsers.styled.ts hoặc InfiniteUsers.scss
        |   ├── PaginatedUsers
        |       ├── index.tsx
        |       ├── PaginatedUsers.test.tsx
        |       ├── PaginatedUsers.styled.ts hoặc PaginatedUsers.scss
        |   ├── SearchUser
        |       ├── index.tsx
        |       ├── SearchUser.test.tsx
        |       ├── SearchUser.styled.ts hoặc SearchUser.scss
        |   ├── Users
        |       ├── index.tsx
        |       ├── Users.test.tsx
        |       ├── Users.styled.ts hoặc Users.scss
        ├── Products
        |       ├──...
        ├── Todos
                ├──...
        ...
        (Other Folders)
```

- Bonus: Để tránh phải import quá dài dòng như dưới

```js
import { classNames } from '../../../../../../utils/classNames.ts';
```

thì hãy tìm hiểu cấu hình cho Absolute Path cho tất cả các project bạn làm (recommend). Ví dụ trên sẽ thành:

```js
import { classNames } from 'src/utils/classNames.ts';
```

Từ khóa tìm kiếm các bài hướng dẫn: _config absolute path for react app_. Đôi khi bạn sẽ phải kết hợp cấu hình từ 2-3 bài thì mới thành công.

3. Quay trở lại với việc tách UI và logic. Cùng phân tích `Users.tsx` làm ví dụ.

```js
import UserTable from 'src/components/UserTable';
import { useGetUsers } from './hooks/useGetUsers';

function Users() {
  const getUsers = useGetUsers();

  return (
    <div>
      <h2 className="mb-4">Basic Query Example</h2>
      <div>
        {getUsers.isLoading && <div>Loading...</div>}

        {getUsers.isFetching && <div>Fetching...</div>}

        {getUsers.error instanceof Error && <div>{getUsers.error.message}</div>}

        {getUsers.isSuccess && (
          <div>
            <UserTable users={getUsers.data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
```

Vì phần giao diện (UI) được tách rời với logic, bạn có thể thay đổi code của phần logic (ví dụ bạn muốn xử lý dữ liệu với thư viện _swr_ thay vì dùng _react-query_, hay đổi từ `axios` về `fetch` hoặc `ky`) mà không làm ảnh hưởng đến UI, chỉ cần cung cấp đủ những state cần thiết như `isLoading, isSuccess, isFetching, error` (nếu không thích Boolean, có thể thay bằng `status === 'loading'` hoặc `status === 'success'`, v.v).
Xử lý dữ liệu từ phía server/backend cần xử lý bất đồng bộ (asynchronous), cho nên sẽ cần những state như trên để đảm bảo UX/UI mượt mà hơn cho ứng dụng.

4. Dự án có bao gồm Optimistic Updates. Optimistic Updates là gì?

https://react-query.tanstack.com/guides/optimistic-updates

https://stackoverflow.com/questions/33009657/what-is-optimistic-updates-in-front-end-development

https://resthooks.io/docs/guides/optimistic-updates

5. Nếu bạn muốn setup WindiCSS cho 1 dự án mới với Vite:

https://windicss.org/integrations/vite.html

## Tài liệu tham khảo

- https://www.sitepoint.com/react-query-fetch-manage-data bởi [Michael Wanyoike](https://twitter.com/myxsys)
- https://react-query.tanstack.com/overview
