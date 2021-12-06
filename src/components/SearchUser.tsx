import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function SearchUser({ userId }: any) {
  return (
    <div>
      <h2 className="mb-4">Search Query Example</h2>
      <div>
        {/* {isLoading && <div>Loading...</div>}
        {isError && <div>{error.message}</div>}

        {isSuccess && <UserTable users={data} />} */}
      </div>
    </div>
  );
}

export default SearchUser;
