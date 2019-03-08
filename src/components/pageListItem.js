import React from "react";

const PageListItem = props => {
  let styles = {
    backgroundImage: `url(${props.coverImage})`
  };

  return (
    <div className="page-list-item" style={styles}>
      <p>{props.title}</p>
    </div>
  );
};
export default PageListItem;
