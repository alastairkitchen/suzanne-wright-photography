import React from "react";
import { Link } from "gatsby";

const PageListItem = props => {
  let styles = {
    backgroundImage: `url(${props.coverImage})`
  };

  return (
    <div
      className={`page-list-item ${props.index ? "item-" + props.index : ""}`}
      style={styles}
    >
      <Link to={props.url} className="page-list-item__anchor">
        <div className="page-list-item__title-wrap">
          <h2 className="page-list-item__title">{props.title}</h2>
        </div>
        <svg
          className="page-list-item__icon"
          viewBox="0 0 26 26"
          width="26"
          height="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path stroke="#E1E1E1" d="M.5.5h25v25H.5z" />
            <path
              d="M13.828 11l4.23 2.5-4.23 2.5v-1.693c.043-.135-.63-.202-2.02-.202-1.848 0-2.785.186-2.808.56.134-.835.735-1.435 1.803-1.8 1.184-.404 2.192-.535 3.025-.394V11z"
              fill="#E1E1E1"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
};
export default PageListItem;
