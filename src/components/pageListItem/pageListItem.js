import React from "react";
import { Link } from "gatsby";

const PageListItem = props => {
  let styles = {
    backgroundImage: `url(${props.coverImage})`
  };

  return (
    <li className="page-list-item" style={styles}>
      <Link to={props.url}>
        <p>{props.title}</p>
      </Link>
    </li>
  );
};
export default PageListItem;
