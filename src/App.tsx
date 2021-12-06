import { Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

import Navbar from './layout/Navbar';
import Users from './views/User/Users';
import InfiniteQuery from './views/User/InfiniteQuery';
import PaginatedQuery from './views/User/PaginatedQuery';
import CreateUser from './views/User/CreateUser';
import EditUser from './views/User/EditUser';
import SearchUser from './views/User/SearchUser';

Modal.setAppElement('#modal-root');

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container p-4 mx-auto mt-8 lg:w-screen-lg">
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/search" component={SearchUser} />
          <Route path="/paginated" component={PaginatedQuery} />
          <Route path="/infinite" component={InfiniteQuery} />
          <Route path="/user/create" component={CreateUser} />
          <Route path="/user/edit/:id" component={EditUser} />
        </Switch>
      </main>
    </>
  );
}

export default App;
