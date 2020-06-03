import React, { Component } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import "./Pagination.css";
import localeInfo from "rc-pagination/lib/locale/en_US";

const arrowPath =
  "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h" +
  "-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v" +
  "60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91" +
  ".5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

const doublePath = [
  "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6" +
    ".7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0" +
    ".4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326." +
    "1c9.1-11.7 9.1-27.9 0-39.5z",
  "M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6" +
    ".7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0" +
    ".4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326." +
    "1c9.1-11.7 9.1-27.9 0-39.5z",
];

const getSvgIcon = (path, reverse, type) => {
  const paths = Array.isArray(path) ? path : [path];
  const renderPaths = paths.map((p, i) => {
    return <path key={i} d={p} />;
  });
  return (
    <i
      className={`custom-icon-${type}`}
      style={{
        fontSize: "16px",
      }}
    >
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: "-.125em",
          transform: `rotate(${(reverse && 180) || 0}deg)`,
        }}
      >
        {renderPaths}
      </svg>
    </i>
  );
};

const nextIcon = getSvgIcon(arrowPath, false, "next");
const prevIcon = getSvgIcon(arrowPath, true, "prev");
const jumpNextIcon = () => getSvgIcon(doublePath, false, "jump-next");
const jumpPrevIcon = () => getSvgIcon(doublePath, true, "jump-prev");

class Paginationn extends Component {
  state = {
    current: 1,
    useIcon: true,
    defaultPageSize: 200,
    test: "Mike",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.setState({
        current: this.props.currentPage,
      });
    }
  }

  pageSizeFn = () => {
    return this.props.pageSize * 10;
  };

  onChange = async (page) => {
    await this.props.handlePageChange(page);
    this.setState({
      current: page,
    });
  };
  toggleCustomIcon = () => {
    this.setState({
      useIcon: !this.state.useIcon,
    });
  };
  render() {
    let pageSize = this.props.pageSize;
    const iconsProps =
      (this.state.useIcon && {
        prevIcon,
        nextIcon,
        jumpPrevIcon,
        jumpNextIcon,
      }) ||
      {};
    return (
      <>
        {this.props.totalDataLength ? (
          <footer className="footer text-center">
            <h6 className="text-center">
              {this.props.totalDataLength} Entries
              <span className="vertical mx-3" />
              Page <strong>{this.state.current}</strong> /
              <strong> {this.lastPage()}</strong>
            </h6>
            <div className="d-flex justify-content-center">
              <Pagination
                showLessItems={true}
                locale={localeInfo}
                onChange={this.onChange}
                current={this.state.current}
                pageSize={this.props.pageSize * 10}
                defaultPageSize={this.props.pageSize * 10}
                total={this.props.totalDataLength * 10}
                style={{ marginBottom: "2rem" }}
                {...iconsProps}
                className="ml-3"
              />
            </div>
          </footer>
        ) : null}
      </>
    );
  }
  //This method figure out and return the last page of our pagination
  lastPage() {
    if (this.props.searchQuery) {
      return this.props.totalDataLength % this.props.end !== 0
        ? Math.floor(
            this.props.searchQueryTotalDataLength / this.props.pageSize + 1
          )
        : Math.floor(
            this.props.searchQueryTotalDataLength / this.props.pageSize
          );
    } else {
      return this.props.totalDataLength % this.props.end !== 0
        ? Math.floor(this.props.totalDataLength / this.props.pageSize + 1)
        : Math.floor(this.props.totalDataLength / this.props.pageSize);
    }
  }
}

export default Paginationn;
