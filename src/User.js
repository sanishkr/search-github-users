import React from "react";
import { ListGroupItem } from "reactstrap";
import { Media } from "reactstrap";

export default ({ user }) => {
  return (
    <ListGroupItem>
      <Media>
        <Media left href="#">
          <img height="100px" src={user.avatar_url} alt="Generic placeholder" />
        </Media>
        <Media body>
          <Media heading>
            {user.login},{" "}
            <small className="text-muted">Type: ({user.type})</small>
          </Media>
          <br />
          <span className="text-muted">
            {user.public_repos || "N/A"} Repos
          </span>{" "}
          |{" "}
          <span className="text-muted">
            {user.followers || "N/A"} Followers
          </span>
        </Media>
      </Media>
    </ListGroupItem>
  );
};
