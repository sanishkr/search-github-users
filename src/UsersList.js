import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Media } from "reactstrap";

export default ({ users }) => {
  return (
    <div className="mt-4 px-4">
      Search Results :
      <ListGroup>
        {users.length === 0 && <h3>0 results found</h3>}
        {users.map(user => (
          <ListGroupItem key={user.id}>
            <Media>
              <Media left href="#">
                <img
                  height="100px"
                  src={user.avatar_url}
                  alt="Generic placeholder"
                />
              </Media>
              <Media body>
                <Media heading>
                  {user.login} <h6>Type: ({user.type})</h6>
                </Media>
                <br />
                <span>{user.public_repos || "N/A"} Repos</span> |{" "}
                <span>{user.followers || "N/A"} Followers</span>
              </Media>
            </Media>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
