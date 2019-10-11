import React from "react";
import PageListItem from "./pageListItem";


const PageList = props => {

  return (
    <div className="page-list">
      {
        props.pages.map((page, i) => {

          console.dir(page)

          return (
            <PageListItem
              key={i}
              bgImage={page.coverImage}
              index={i + 1}
              title={page.title}
              url={page.url}
            />
          )
        })
      }
    </div>
  );
};

export default PageList;
