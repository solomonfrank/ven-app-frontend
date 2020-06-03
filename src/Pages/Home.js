import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Pagination from "../utils/Pagination";
import PaginationPage from "../utils/PaginationPages";
import { connect } from "react-redux";
import { filterCardAction } from "../Redux/Actions/FilterCard";
import { searchAction } from "../Redux/Actions/search";
import FilterListCard from "../Components/FilterCard";
import FoundResult from "../Components/FoundResult";

import NoData from "../Components/NoData";

class Home extends Component {
  state = {
    currentPage: 1,
    totalDataLength: "",
    searchQueryTotalDataLength: "",
    start: 0,
    end: 10,
    selectedSize: 10,
  };
  componentDidMount() {
    this.props.filterCards();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.listOfCars &&
      nextProps.listOfCars.searchedCars &&
      nextProps.listOfCars.searchedCars.rows &&
      nextProps.listOfCars.searchedCars.rows.length
    ) {
      this.setState({
        totalDataLength: nextProps.listOfCars.searchedCars.count,
      });
    }
  }
  filterByParams = (params) => {
    this.setState({ params });
    this.props.search(params, this.state.start, this.state.end);
  };

  handlePageChange = async (pageNumber) => {
    const newCurrentPage = this.state.currentPage + 1;
    const newStart = (pageNumber - 1) * this.state.selectedSize;
    const newEnd = pageNumber * this.state.selectedSize;
    this.setState(
      {
        currentPage: newCurrentPage,
        start: newStart,
        end: newEnd,
      },
      () => {
        this.props.search(
          this.state.params,
          this.state.start,
          this.state.selectedSize
        );
      }
    );
  };

  renderListOfCar = () => {
    const { listOfCars } = this.props;
    if (listOfCars.loading) {
      return <Skeleton width={"100%"} height={200} count={4} />;
    } else if (
      listOfCars &&
      listOfCars.searchedCars &&
      listOfCars.searchedCars.rows &&
      listOfCars.searchedCars.rows.length > 0
    ) {
      return (
        <>
          <div> Record Total: {listOfCars.searchedCars.count} </div>
          {listOfCars.searchedCars.rows.map((param) => (
            <FoundResult result={param} />
          ))}
        </>
      );
    } else if (
      listOfCars &&
      listOfCars.searchedCars &&
      listOfCars.searchedCars.rows &&
      listOfCars.searchedCars.rows.length == 0
    ) {
      return <NoData message="No Data Availble" style="no-data-img" />;
    } else {
      return null;
    }
  };
  render() {
    const { listToFilter, listOfCars } = this.props;

    return (
      <>
        <div className="row">
          <div className="col-md-4">
            <div className="filter-title">
              <h4>Filter by</h4>
              {listToFilter &&
                listToFilter.filterCards &&
                listToFilter.filterCards.map((param) => (
                  <FilterListCard
                    result={param}
                    filterByParams={this.filterByParams}
                    key={param.id}
                  />
                ))}
            </div>
          </div>
          <div className="col-md-8">
            {this.renderListOfCar()}

            <div className="row py-5" style={{ marginTop: "20px" }}>
              <div className="col-12 align-items-center">
                {listOfCars &&
                  listOfCars.searchedCars &&
                  listOfCars.searchedCars.rows &&
                  listOfCars.searchedCars.rows.length > 0 && (
                    <Pagination
                      handlePageChange={this.handlePageChange}
                      pageSize={this.state.selectedSize}
                      totalDataLength={this.state.totalDataLength}
                      currentPage={this.state.currentPage}
                      end={this.state.end}
                    >
                      <PaginationPage />
                    </Pagination>
                  )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listToFilter: state.filterListCards,
    listOfCars: state.listCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: () => dispatch(filterCardAction()),
    search: (params, start, end) => dispatch(searchAction(params, start, end)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
