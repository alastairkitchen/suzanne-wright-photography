import React from "react";
import PageListItem from "./pageListItem";
import lazyloadImages from "../../utils/lazyLoadImages";

class PageList extends React.Component {

  componentDidMount() {
    const lazyLoadElements = document.querySelectorAll(".lazy-load");
    if (lazyLoadElements.length > 0) {
      lazyloadImages(lazyLoadElements);
    }
  }

  render() {
    return (
      <div className={`page-list ${this.props.listView === 'HOME' ? "page-list--home" : ""}`}>
        {
          this.props.pages.map((page, i) => {

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
  }

}

export default PageList;
