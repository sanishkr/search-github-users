import React from "react";
import { ListGroup } from "reactstrap";

import User from "./User";

export default ({ users }) => {
  return (
    <div className="mt-4 px-4">
      Search Results :
      <ListGroup>
        {users.length === 0 && <h3>0 results found</h3>}
        {users.map(user => (
          <User key={user.login} user={user} />
        ))}
      </ListGroup>
    </div>
  );
};
