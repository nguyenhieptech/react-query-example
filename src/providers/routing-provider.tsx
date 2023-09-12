import { AppLayout } from '@/components';
import {
  CreateUser,
  EditUser,
  InfiniteUsers,
  PaginatedUsers,
  Users,
} from '@/views';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Users />} />
      <Route path="infinite" element={<InfiniteUsers />} />
      <Route path="paginated" element={<PaginatedUsers />} />
      <Route path="/user/create" element={<CreateUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
